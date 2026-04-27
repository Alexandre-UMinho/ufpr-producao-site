import sqlite3
import csv
import io
from flask import Flask, render_template, request, jsonify, g, session, redirect, url_for, Response, send_from_directory
import os
import json
from datetime import date, timedelta

app = Flask(__name__)
app.secret_key = 'super_secret_key_ufpr_2026'

ementas_path = os.path.join(os.path.dirname(__file__), 'ementas.json')
if os.path.exists(ementas_path):
    with open(ementas_path, 'r', encoding='utf-8') as f:
        ementas_data = json.load(f)
else:
    ementas_data = {}

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    with app.app_context():
        db = get_db()
        db.execute('''
            CREATE TABLE IF NOT EXISTS opportunities (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                type TEXT NOT NULL,
                description TEXT NOT NULL,
                valid_until DATE
            )
        ''')
        
        try:
            db.execute('ALTER TABLE opportunities ADD COLUMN valid_until DATE')
            db.commit()
            default_date = date.today() + timedelta(days=30)
            db.execute('UPDATE opportunities SET valid_until = ? WHERE valid_until IS NULL', (default_date,))
            db.commit()
        except sqlite3.OperationalError:
            pass
            
        db.execute('''
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL
            )
        ''')
        
        cursor = db.execute('SELECT COUNT(*) FROM opportunities')
        if cursor.fetchone()[0] == 0:
            default_date = date.today() + timedelta(days=30)
            opportunities = [
                ('Estágio em Logística', 'Estágio', 'Empresa parceira no Vale do Ivaí busca estagiário para roteirização e controle de frota.', default_date),
                ('Iniciação Científica - Indústria 4.0', 'Pesquisa', 'Bolsa CNPq para pesquisa em sensores IoT aplicados à manufatura avançada.', default_date),
                ('Projeto de Extensão - Gestão de Resíduos', 'Extensão', 'Atuação com a comunidade local para otimização de cooperativas de reciclagem.', default_date)
            ]
            db.executemany('INSERT INTO opportunities (title, type, description, valid_until) VALUES (?, ?, ?, ?)', opportunities)
            db.commit()

if not os.path.exists(DATABASE):
    init_db()
elif os.path.getsize(DATABASE) == 0:
    init_db()

@app.route('/')
def home():
    db = get_db()
    cur = db.execute('SELECT * FROM opportunities WHERE valid_until >= date("now") OR valid_until IS NULL')
    opportunities = cur.fetchall()
    return render_template('index.html', opportunities=opportunities)

@app.route('/acervo')
def acervo():
    return render_template('acervo.html')

@app.route('/download/<filename>')
def download_file(filename):
    return send_from_directory(os.path.dirname(__file__), filename)

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        if name and email:
            db = get_db()
            db.execute('INSERT INTO leads (name, email) VALUES (?, ?)', (name, email))
            db.commit()
            return jsonify({'success': True})
    return jsonify({'success': False})

@app.route('/api/ementa', methods=['GET'])
def get_ementa():
    subject = request.args.get('subject', '').upper().strip()
    
    for key, data in ementas_data.items():
        if key == subject:
            return jsonify(data)
            
    def remove_accents(input_str):
        import unicodedata
        nfkd_form = unicodedata.normalize('NFKD', input_str)
        return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])
        
    subject_normalized = remove_accents(subject)
    for key, data in ementas_data.items():
        if subject_normalized in remove_accents(key):
            return jsonify(data)
            
    return jsonify({"error": "Ementa não encontrada para esta disciplina."}), 404

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    
    def remove_accents(input_str):
        import unicodedata
        nfkd_form = unicodedata.normalize('NFKD', input_str)
        return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])
        
    message = remove_accents(data.get('message', '').lower())
    
    # 1. Tenta achar perguntas sobre as ementas oficiais do PPC
    for key, val in ementas_data.items():
        if remove_accents(key.lower()) in message:
            return jsonify({'reply': f"📚 **Ementa Oficial de {key} ({val['code']}):**\n\n{val['ementa']}"})
            
    # 2. Respostas padrões do Chatbot
    if "matricula" in message:
        response = "As matrículas para o próximo semestre ocorrerão na primeira semana de março, via SIGA."
    elif "horario" in message:
        response = "Você pode consultar os horários de Engenharia de Produção no portal oficial da UFPR ou no mural do Bloco Didático."
    elif "estagio" in message:
        response = "Para informações sobre estágios obrigatórios, contate a Coordenação de Estágio (COE) do setor."
    elif "tcc" in message:
        response = "O TCC é dividido em TCC I e TCC II. Consulte o regulamento do curso no portal oficial da UFPR."
    else:
        response = "Olá! Sou o assistente virtual de Engenharia de Produção. Posso ajudar você com dúvidas sobre **Matrículas**, horários ou sobre as **Ementas** (ex: o que aprendo em Cálculo I?)!"

    return jsonify({'reply': response})

# --- Admin Panel ---
ADMIN_PASSWORD = "ufpr"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        password = request.form.get('password')
        if password == ADMIN_PASSWORD:
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        else:
            return render_template('login.html', error="Senha incorreta")
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('admin_logged_in', None)
    return redirect(url_for('home'))

@app.route('/admin')
def admin_dashboard():
    if not session.get('admin_logged_in'):
        return redirect(url_for('login'))
        
    db = get_db()
    cur_opps = db.execute('SELECT * FROM opportunities')
    opportunities = cur_opps.fetchall()
    
    cur_leads = db.execute('SELECT * FROM leads')
    leads = cur_leads.fetchall()
    
    return render_template('admin.html', opportunities=opportunities, leads=leads)

@app.route('/admin/opportunity/add', methods=['POST'])
def add_opportunity():
    if not session.get('admin_logged_in'):
        return redirect(url_for('login'))
        
    title = request.form.get('title')
    type_ = request.form.get('type')
    description = request.form.get('description')
    valid_until_str = request.form.get('valid_until')
    
    if not valid_until_str:
        valid_until_str = (date.today() + timedelta(days=30)).strftime('%Y-%m-%d')
    
    if title and type_ and description:
        db = get_db()
        db.execute('INSERT INTO opportunities (title, type, description, valid_until) VALUES (?, ?, ?, ?)', (title, type_, description, valid_until_str))
        db.commit()
        
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/opportunity/delete/<int:id>', methods=['POST'])
def delete_opportunity(id):
    if not session.get('admin_logged_in'):
        return redirect(url_for('login'))
        
    db = get_db()
    db.execute('DELETE FROM opportunities WHERE id = ?', (id,))
    db.commit()
    
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/leads/export')
def export_leads():
    if not session.get('admin_logged_in'):
        return redirect(url_for('login'))
        
    db = get_db()
    cur = db.execute('SELECT name, email FROM leads')
    leads = cur.fetchall()
    
    # Generate CSV
    si = io.StringIO()
    cw = csv.writer(si)
    cw.writerow(['Nome', 'Email'])
    cw.writerows(leads)
    
    output = si.getvalue()
    
    return Response(
        output,
        mimetype="text/csv",
        headers={"Content-disposition": "attachment; filename=leads.csv"}
    )

if __name__ == '__main__':
    with app.app_context():
        init_db()
    app.run(debug=True, port=5000)

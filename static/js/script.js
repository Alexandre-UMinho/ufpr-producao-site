// Simple scroll animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate on scroll
    const cards = document.querySelectorAll('.glass-card');
    const textContent = document.querySelector('.text-content');
    const imagePlaceholder = document.querySelector('.image-placeholder');

    // Add initial styles
    const addInitialStyles = (el) => {
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        }
    };

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        addInitialStyles(card);
    });

    addInitialStyles(textContent);
    
    if (imagePlaceholder) {
        imagePlaceholder.style.transitionDelay = '0.2s';
        addInitialStyles(imagePlaceholder);
    }

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const form = document.getElementById('subscribe-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('lead-name').value;
            const email = document.getElementById('lead-email').value;
            const msgDiv = document.getElementById('form-message');
            
            try {
                const response = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email })
                });
                const data = await response.json();
                
                if (response.ok) {
                    msgDiv.textContent = data.message;
                    msgDiv.style.color = 'var(--accent)';
                    form.reset();
                } else {
                    msgDiv.textContent = data.error;
                    msgDiv.style.color = '#ef4444';
                }
            } catch (err) {
                msgDiv.textContent = 'Erro ao enviar. Tente novamente.';
                msgDiv.style.color = '#ef4444';
            }
        });
    }

    // Modal Logic for Disciplines
    const modal = document.getElementById("ementa-modal");
    const span = document.getElementsByClassName("close-modal")[0];
    const modalTitle = document.getElementById("modal-title");
    const modalCode = document.getElementById("modal-code");
    const modalEmenta = document.getElementById("modal-ementa");

    if (modal) {
        document.querySelectorAll('.discipline-list li').forEach(li => {
            li.style.cursor = 'pointer';
            li.title = 'Clique para ver a ementa oficial (PPC 2023)';
            li.addEventListener('click', async () => {
                let subjectName = li.childNodes[0].nodeValue;
                if(subjectName) subjectName = subjectName.trim();
                
                modalTitle.innerText = subjectName;
                modalCode.innerText = "Buscando código...";
                modalEmenta.innerText = "Carregando ementa oficial...";
                modal.classList.add('show');

                try {
                    const response = await fetch(`/api/ementa?subject=${encodeURIComponent(subjectName)}`);
                    const data = await response.json();
                    
                    if(response.ok) {
                        modalCode.innerText = `Código: ${data.code}`;
                        modalEmenta.innerText = data.ementa;
                    } else {
                        modalCode.innerText = "";
                        modalEmenta.innerText = "Ementa oficial não disponível para esta disciplina.";
                    }
                } catch(e) {
                    modalEmenta.innerText = "Erro ao carregar a ementa da base de dados.";
                }
            });
        });

        if (span) {
            span.onclick = function() {
                modal.classList.remove('show');
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('show');
            }
        }
    }

    // Chatbot logic
    const chatToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const chatClose = document.getElementById('chatbot-close');
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chatbot-messages');

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
        });

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        const addMessage = (text, isUser = false) => {
            const div = document.createElement('div');
            div.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            div.textContent = text;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const handleSend = async () => {
            const text = chatInput.value.trim();
            if (!text) return;
            
            addMessage(text, true);
            chatInput.value = '';

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text })
                });
                const data = await response.json();
                
                setTimeout(() => {
                    addMessage(data.reply);
                }, 500); // slight delay for realism
            } catch (err) {
                addMessage('Ops, perdi a conexão com o servidor.');
            }
        };

        chatSend.addEventListener('click', handleSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
});

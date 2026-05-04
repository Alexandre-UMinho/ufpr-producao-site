# 📖 Quality Engineering - Livro Base Traduzido

> Documento Otimizado para Leitura Fluida dos Alunos.



nciais para o trabalho diário em um ambiente de produção ou serviços. Alguns tópicos avançados em controle de processos, como os gráficos necessários para situações especiais, as bases teóricas para as fórmulas de cálculo dos limites de controle, os procedimentos para avaliar o desempenho dos gráficos de controle e a métrica Seis Sigma (6-sigma) como referência (*benchmark*) para a capacidade do processo, estão incluídos no próximo capítulo, o Capítulo 5.

**4.1 CONTROLE DE PROCESSOS**

O controle de processos é a parte mais importante do esforço de qualidade durante a fabricação. O objetivo é monitorar e controlar os processos de forma proativa, para que eles gerem produtos nos níveis desejados de características de produto — de maneira consistente.

Primeiro, uma definição de "processo": qualquer trabalho produtivo pode ser visto como um processo que consiste em máquinas, mão de obra, métodos e sistemas de medição, conforme mostrado na Figura 4.1. O meio ambiente às vezes desempenha um papel significativo na atividade de produção e pode influenciar a qualidade dos resultados; portanto, ele se torna parte do processo sob avaliação, mesmo que não possa ser controlado.

**FIGURA 4.1** O esquema de um processo.

**196 Um Primeiro Curso em Engenharia da Qualidade**

Um processo recebe entradas (inputs) — principalmente materiais, peças ou subconjuntos em um processo de produção; informações, documentação e requisitos do cliente em um processo de serviço — e, em seguida, as processa em uma sequência planejada de operações usando maquinário, ferramentas e mão de obra, entregando um "produto". Cada operação no processo deve ser realizada sob certas condições selecionadas, como velocidade, avanço, temperatura, pressão ou nível de qualificação e treinamento dos trabalhadores. Estes são chamados de "parâmetros" do processo. 

Esses parâmetros do processo devem ser mantidos durante a produção em determinados níveis para que as saídas (outputs) do processo — as características do produto — sejam obtidas nos níveis desejados. Os níveis para esses parâmetros do processo — alvo e variação permitida — devem ser selecionados para que o produto final tenha as características almejadas. Em seguida, os parâmetros devem ser mantidos de forma consistente nos níveis escolhidos durante a produção, a fim de obter as características do produto repetidamente nos níveis desejados. A seleção dos níveis para os parâmetros do processo é feita por meio de experimentos, preferencialmente experimentos planejados estatisticamente (DOE), e a manutenção dos parâmetros nos níveis escolhidos é alcançada usando as cartas de controle. Assim, o controle do processo é realizado em duas etapas:
1. Selecionar os parâmetros do processo e seus níveis utilizando experimentos.
2. Controlar os parâmetros do processo nos níveis escolhidos utilizando cartas de controle.

As cartas de controle também são usadas para monitorar os níveis de consistência das características do produto final. A consistência das características do produto indicaria a consistência dos parâmetros do processo.

O termo "parâmetro de processo" é usado na literatura de qualidade para significar tanto as variáveis de um processo que influenciam as características do produto, quanto as quantidades que definem a distribuição de uma variável de processo, como a média $\mu$ e a variância $\sigma^2$ de uma distribuição normal. Onde houver chance de confusão sobre a qual dos dois estamos nos referindo, usaremos o termo "variável de processo" para nos referirmos ao primeiro e o termo "parâmetro de processo" para indicar as características de uma distribuição estatística.

**4.2 AS CARTAS DE CONTROLE**
O Dr. Walter Shewhart, um físico que trabalhava no início da década de 1920 nos Laboratórios da *Bell Telephone* em Princeton, Nova Jersey, propôs os procedimentos que mais tarde viriam a ser conhecidos como cartas de controle (ou gráficos de controle). Segundo ele (Shewhart 1931), a variabilidade em um parâmetro de processo ou característica do produto pode ter duas origens:
1. De um "sistema estável de causas fortuitas", significando o agregado de pequenas e inevitáveis variabilidades decorrentes de diferenças naturais em materiais, mão de obra, maquinário, instrumentos e ambiente, que já devem ser esperadas.
2. De "causas assinaláveis", significando as causas decorrentes de uma ocorrência específica, como uma ferramenta quebrada, oscilação de pressão ou queda de temperatura, que podem ocorrer inesperadamente.

Essas duas fontes de variabilidade foram posteriormente renomeadas pelo Dr. Deming como variabilidade de "causa comum" e variabilidade de "causa especial", respectivamente. A primeira não pode ser eliminada a um custo razoável, devendo ser considerada uma parte integral do processo e aceita. A segunda produz distúrbios no processo e geralmente aumenta a variabilidade no... *(nota: o texto original corta aqui)*.

**197 Qualidade na Produção — Controle de Processo I**
variáveis de processo além de níveis aceitáveis, portanto, elas devem ser descobertas e eliminadas. O Dr. Shewhart propôs o gráfico de controle (ou carta de controle) como uma ferramenta para diferenciar entre as duas condições: quando ele está sujeito apenas às causas naturais e aleatórias (causas comuns), e quando é afetado por uma ou mais causas atribuíveis (causas especiais).

**4.2.1 UM GRÁFICO DE CONTROLE TÍPICO**
Um gráfico de controle tipicamente possui uma linha central (LC) e dois limites de controle — um limite superior de controle (LSC) e um limite inferior de controle (LIC), como os mostrados na Figura 4.2. Esses limites representam as fronteiras para a variabilidade de causas aleatórias e são calculados a partir de dados extraídos do processo. (Veremos mais adiante como esses limites são calculados para que representem os limites da variabilidade natural, de causas aleatórias.) Amostras são retiradas do processo em intervalos regulares, e uma medida que reflete a qualidade do produto ou processo é calculada a partir das observações da amostra e plotada em um gráfico, no qual as linhas de limite foram traçadas em uma escala adequada. 

Se os valores da medida de todas as amostras coletadas durante um período de tempo caírem dentro dos limites, diz-se que o processo está "sob controle" durante esse período. No entanto, se o valor de qualquer um dos pontos amostrais plotados cair fora de qualquer um dos limites, diz-se que o processo "não está sob controle" (fora de controle) durante esse período de tempo. Quando o processo "não está sob controle", uma ou mais causas atribuíveis, ou causas especiais, devem ter ocorrido, e uma ação é necessária para descobri-las e eliminá-las.

A medida a ser calculada a partir das observações amostrais depende do que desejamos controlar no processo. Suponha que o valor médio de uma característica do produto deva ser controlado; a média dessa característica a partir das observações da amostra será então plotada. Se o objetivo for controlar a variabilidade na característica, então o desvio padrão, ou a amplitude, ou uma medida semelhante e adequada para estimar a variabilidade será calculada e plotada. O gráfico de controle recebe o nome da medida que é plotada. 

A Tabela 4.1 mostra exemplos de medidas (o leitor reconhecerá que estas são estatísticas amostrais) que são plotadas para controlar vários parâmetros do processo. Existem outros gráficos de controle que usam diferentes estatísticas amostrais para controlar esses ou outros parâmetros do processo. No entanto, as listadas na Tabela 4.1 são as medidas mais comumente usadas e serão discutidas em detalhes a seguir. O contexto em que estas são usadas, o método de cálculo de seus limites e a maneira de interpretar os resultados serão explicados.

**FIGURA 4.2** Um gráfico de controle típico.

**198 Um Primeiro Curso em Engenharia da Qualidade**

Muitas vantagens são obtidas quando os processos são controlados por meio de gráficos de controle, que também são conhecidos como ferramentas de "controle estatístico de processo" (CEP). Essencialmente, eles contribuem para a redução da variabilidade nos parâmetros do processo e nas características do produto, além de viabilizarem a fabricação de produtos com qualidade consistente. Os benefícios decorrentes da implementação de gráficos de controle em um processo estão resumidos abaixo:

*   Prevenção proativa de produtos defeituosos (evitando-os antes que ocorram);
*   Aumento do rendimento produtivo (*throughput*) devido à redução de desperdícios;
*   Melhoria no relacionamento com os clientes, pois eles passam a receber produtos de melhor qualidade;
*   Melhor conhecimento dos processos e de suas capacidades, apoiado por evidências baseadas em dados;
*   Melhoria do moral dos trabalhadores, decorrente de uma melhor aceitação de seus esforços;
*   Maior participação de mercado (*market share*) devido à melhoria da imagem de qualidade do produtor;
*   Aumento da lucratividade em decorrência de todos os fatores acima.

**4.2.2 DOIS TIPOS DE DADOS**
Como afirmado no Capítulo 2, os dados provenientes de observações de amostras são classificados em uma de duas categorias:
1. Dados de medição (variáveis)
2. Dados de atributo

Os **dados de medição** resultam de aferições feitas em uma escala contínua, como altura, peso, volume e assim por diante, resultando em observações como 142,7 polegadas, 1,28 kg e 68 pés cúbicos.

Os **dados de atributo** provêm de inspeções realizadas com base em características como sabor, sensação ao toque e aparência, nas quais um produto é classificado em categorias como bom/ruim, apertado/frouxo ou plano/não plano. Dados de atributo também podem ser provenientes de verificações do tipo passa/não-passa (*gaging*). Geralmente, os dados de atributo se apresentam em contagens, proporções ou porcentagens, como "três defeitos por placa de circuito impresso", "dois de oito muito pequenos" ou "10% muito apertados". O leitor reconhecerá que os dados de medição são observações de variáveis aleatórias contínuas, enquanto os dados de atributo são observações de variáveis aleatórias discretas. Como os limites dos gráficos são calculados com base na distribuição da qual os dados provêm, e as distribuições dos dois tipos de dados são diferentes, é necessário reconhecer o tipo de dado com o qual se deve lidar em uma determinada situação para, consequentemente, determinar o tipo adequado de gráfico de controle a ser utilizado.

**TABELA 4.1**
**Exemplos de Gráficos de Controle Usados para Controlar Diferentes Parâmetros**

| Parâmetro do Processo a ser Controlado | Estatística da Amostra Plotada | Nome do Gráfico |
| :--- | :--- | :--- |
| Média do processo ($\mu$) | Média da amostra ($\bar{X}$) | Gráfico $\bar{X}$ (Médias) |
| Variabilidade do processo ($\sigma$) | Amplitude da amostra ($R$), ou desvio padrão da amostra ($S$) | Gráfico $R$ / Gráfico $S$ |
| Proporção de defeituosos do processo ($p$) | Proporção de defeituosos da amostra ($P$) | Gráfico $P$ |
| Defeitos por unidade do processo ($c$) | Defeitos por unidade da amostra ($C$) | Gráfico $C$ |

**199 Qualidade na Produção — Controle de Processos I**

**4.3 CARTAS DE CONTROLE PARA MEDIÇÕES**
As cartas (ou gráficos) de controle para medições são projetadas para controlar medidas partindo da premissa de que essas medições seguem a distribuição normal. Quando uma medição deve ser controlada, tanto a sua média quanto a sua variabilidade devem ser monitoradas, pois uma medição cairá fora de seus limites de especificação (dados pelo cliente) se a sua média se afastar da meta, se a sua variabilidade aumentar além da faixa permitida, ou ambos (ver Figura 4.3).

Para populações normais, a média amostral e as medidas de variabilidade amostral — como o desvio padrão amostral e a amplitude amostral — são estatisticamente independentes (um resultado comprovado em livros de estatística matemática). Isso significa que controlar a média amostral ajudará a controlar apenas a média do processo, e controlar a medida de variabilidade amostral ajudará a controlar apenas a variabilidade do processo. Portanto, são necessárias duas cartas de controle: uma que utiliza a média amostral para controlar a média do processo e outra que utiliza uma medida de variabilidade amostral para controlar a variabilidade do processo.

**4.3.1 CARTAS X E R**
A combinação mais popular utilizada para controlar uma medição é a da Carta X (Média) e da Carta R (Amplitude): a primeira para controlar a média do processo e a segunda para controlar a variabilidade do processo. Ambas são elaboradas a partir das mesmas amostras e geralmente são utilizadas em conjunto. Amostras, usualmente de tamanho quatro ou cinco, são coletadas do processo em intervalos regulares, e as medições são realizadas.

**FIGURA 4.3** Condições do processo quando a média e/ou o desvio padrão do processo sofrem alterações.

**200 Um Primeiro Curso em Engenharia da Qualidade**

... da característica de qualidade de interesse, sendo que a média amostral $\bar{X}$ e a amplitude amostral $R$ são calculadas para cada amostra. Esses valores são então plotados em gráficos onde os limites para cada estatística foram traçados. Os limites são calculados usando as seguintes fórmulas:

**Limites de controle para o Gráfico $R$**
*   $LSC_R = D_4\bar{R}$ (Limite Superior de Controle)
*   $LC_R = \bar{R}$ (Linha Central)
*   $LIC_R = D_3\bar{R}$ (Limite Inferior de Controle)

**Limites de controle para o Gráfico $\bar{X}$ (Médias)**
*   $LSC_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R}$
*   $LC_{\bar{X}} = \bar{\bar{X}}$
*   $LIC_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}$

Nas fórmulas acima, $\bar{\bar{X}}$ e $\bar{R}$ são as médias de pelo menos 25 médias amostrais e amplitudes amostrais, respectivamente, obtidas do processo que está sendo controlado. $A_2$, $D_3$ e $D_4$ são fatores escolhidos a partir de tabelas padronizadas, como a Tabela 4.2, com base no tamanho da amostra. (A Tabela 4.2 é uma versão resumida da Tabela A.4 no Apêndice).

As fórmulas acima fornecem limites de "3-sigma" para as estatísticas $\bar{X}$ e $R$, no sentido de que os limites estão localizados a uma distância de três desvios padrão das respectivas estatísticas em relação às suas médias. Uma discussão detalhada sobre como essas fórmulas foram desenvolvidas para fornecer os limites de variabilidade natural para as estatísticas plotadas é apresentada no Capítulo 5. O exemplo abaixo mostra como as fórmulas são usadas para calcular os limites e como os gráficos são utilizados no controle de processos.

**Exemplo 4.1**
O processo a ser controlado é uma operação de envase em uma fábrica de embalagens, onde um produto químico em pó é colocado em sacos. O peso líquido dos produtos químicos nos sacos envasados deve ser controlado usando gráficos de controle para que a média e a variabilidade do peso líquido de todos os sacos permaneçam consistentes.

**Solução**
Usamos os gráficos $\bar{X}$ e $R$ para controlar a média e a variabilidade do processo de envase. Os dados são mostrados na tabela, que é parte de um formulário padrão de gráfico de controle, na Figura 4.4. Neste exemplo, 24 amostras de cinco sacos cada foram coletadas em intervalos de aproximadamente uma hora. Os valores de $\bar{X}$ e $R$ foram calculados para cada amostra e, em seguida, plotados usando uma escala adequada. Os limites de controle foram calculados da seguinte forma:

**TABELA 4.2**
Fatores para o Cálculo de Limites para Gráficos de Controle de Variáveis
| n | A | A₂ | A₃ | B₃ | B₄ | c₄ | D₁ | D₂ | D₃ | D₄ | d₂ | d₃ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | 2,121 | 1,880 | 2,659 | 0 | 3,267 | 0,798 | 0 | 3,686 | 0 | 3,267 | 1,128 | 0,853 |
| 3 | 1,732 | 1,023 | 1,954 | 0 | 2,568 | 0,886 | 0 | 4,358 | 0 | 2,574 | 1,693 | 0,888 |
| 4 | 1,500 | 0,729 | 1,628 | 0 | 2,266 | 0,921 | 0 | 4,698 | 0 | 2,282 | 2,059 | 0,880 |
| 5 | 1,342 | 0,577 | 1,427 | 0 | 2,089 | 0,940 | 0 | 4,918 | 0 | 2,114 | 2,326 | 0,864 |
| 6 | 1,225 | 0,483 | 1,287 | 0,030 | 1,970 | 0,952 | 0 | 5,078 | 0 | 2,004 | 2,534 | 0,848 |
| 7 | 1,134 | 0,419 | 1,182 | 0,118 | 1,882 | 0,959 | 0,205 | 5,204 | 0,076 | 1,924 | 2,704 | 0,833 |
| 8 | 1,061 | 0,373 | 1,099 | 0,185 | 1,815 | 0,965 | 0,387 | 5,306 | 0,136 | 1,864 | 2,847 | 0,820 |
| 9 | 1,000 | 0,337 | 1,032 | 0,239 | 1,761 | 0,969 | 0,546 | 5,393 | 0,184 | 1,816 | 2,970 | 0,808 |
| 10| 0,949 | 0,308 | 0,975 | 0,284 | 1,716 | 0,973 | 0,687 | 5,469 | 0,223 | 1,777 | 3,078 | 0,797 |

A partir dos cálculos feitos com os dados, temos $\bar{\bar{X}} = 21,37$ e $\bar{R} = 3,02$.
Da Tabela 4.2, para $n = 5$, temos $A_2 = 0,577$, $D_4 = 2,114$ e $D_3 = 0$. Portanto:

*   $LSC_R = 2,114 \times 3,02 = 6,38$
*   $LSC_{\bar{X}} = 21,37 + (0,577 \times 3,02) = 23,11$
*   $LC_R = 3,02$
*   $LC_{\bar{X}} = 21,37$
*   $LIC_R = 0 \times 3,02 = 0$
*   $LIC_{\bar{X}} = 21,37 - (0,577 \times 3,02) = 19,63$

Os limites calculados acima são traçados no formulário do gráfico de controle na Figura 4.4. Como um dos valores de $R$ plotados no gráfico $R$ está fora do limite, o processo deve ser declarado como "fora de controle".

Ao analisar os resultados do gráfico de controle, devemos inferir que a média do processo não está sob controle se um valor $\bar{X}$ cair fora de seus limites, e que a variabilidade do processo não está sob controle se um valor $R$ cair fora de seus limites. Neste caso, como vemos um valor $R$ fora dos limites no gráfico $R$, inferimos que a variabilidade do processo não está sob controle; ou seja, a variabilidade do processo não se mantém consistente.

**FIGURA 4.4** Um exemplo de gráficos $\bar{X}$ e $R$.

**202 Um Primeiro Curso em Engenharia da Qualidade**

Se relacionarmos o que acontece no processo físico com o que o gráfico de controle mostra, frequentemente é possível identificar a causa atribuível (causa especial) que gera um ponto fora dos limites no gráfico. Em situações nas quais interrupções do processo — como uma ferramenta quebrada ou queda na pressão do ar — são prováveis de ocorrer, o momento de ocorrência dos eventos pode ser relacionado ao momento de indicação de sinais no gráfico de controle. Por esse motivo, é aconselhável manter um registro (diário de bordo) dos eventos que acontecem no processo, como mudanças de operador, de ferramenta, de matéria-prima, e assim por diante. Isso facilitará a descoberta de uma causa atribuível quando uma for indicada no gráfico. Os gráficos de controle podem revelar muito mais sobre as mudanças no processo se soubermos como lê-los. Veremos mais sobre isso adiante.

Se todos os valores de X (média) e R (amplitude) estiverem dentro dos limites em ambos os gráficos, os limites calculados a partir desse processo sob controle podem ser usados para o controle futuro. Caso contrário, os valores de X e/ou R que estiverem fora dos limites podem ser removidos dos dados, **após** garantir que as causas responsáveis por esses valores foram encontradas e eliminadas. Novos limites podem então ser calculados a partir dos dados restantes. Esse recálculo de limites com os dados "restantes" economiza tempo e dinheiro, sendo um procedimento aceito para calcular e definir limites para o controle futuro.

Ao fazer esses recálculos com os dados restantes, devemos lembrar que precisamos de valores de X e R provenientes de gráficos de controle onde todos os valores estejam dentro de seus respectivos limites. Nós também decidimos usar os dados dos gráficos atuais após a eliminação daqueles valores que estavam fora dos limites, certificando-nos previamente de que as causas que os produziram foram encontradas e sanadas. Diante dessa situação, é aconselhável começar primeiro pelo gráfico R, pois o cálculo dos limites para o gráfico X exige um valor de R (amplitude média) proveniente de um processo estável e sob controle. Portanto, o ideal é corrigir primeiro o gráfico R e usar um R "bom", derivado de um gráfico R sob controle, para calcular os limites do gráfico X. Caso contrário, se começássemos primeiro pelo gráfico X e depois encontrássemos um valor de R fora dos limites no gráfico R, poderíamos ter que voltar e corrigir o gráfico X novamente. Esse "vai e vem" pode ser evitado se o gráfico R for ajustado antes do gráfico X.

No exemplo acima, o único valor de R fora do limite superior é removido, assumindo que a razão para o valor estar fora do limite foi encontrada e retificada. (Neste exemplo, o controlador de nível do silo que alimentava o produto químico estava com defeito. Ele foi substituído.) Obtemos então um novo R (médio) de 2,85 a partir das 23 observações restantes de R. Isso resulta em novos limites para o gráfico R:

*   **LSC_R** (Limite Superior de Controle) = 2,114(2,85) = 6,02
*   **LC_R** (Linha Central) = 2,85
*   **LIC_R** (Limite Inferior de Controle) = 0,0

Verifica-se agora que todos os valores de R estão dentro dos novos limites. Os novos limites para o gráfico X são calculados usando os novos valores de R e X obtidos a partir das 23 observações restantes de X. Isso resulta em novos limites para o gráfico X:

*   **LSC_X** (Limite Superior de Controle) = 21,37 + 0,577(2,85) = 23,02
*   **LC_X** (Linha Central) = 21,37
*   **LIC_X** (Limite Inferior de Controle) = 21,37 - 0,577(2,85) = 19,72

**203 Qualidade na Produção — Controle de Processos I**

**FIGURA 4.5** Gráficos de X e R com limites revisados calculados usando os dados "restantes" para o Exemplo 4.1.

Todos os valores de R e X agora se encontram dentro de seus respectivos novos limites, e esses limites podem ser usados para controlar este processo no futuro. Estes representam os limites para a variabilidade natural e intrínseca do processo, que não é afetada por quaisquer causas assinaláveis. Os gráficos de controle elaborados utilizando o software Minitab, com limites calculados a partir das 23 amostras restantes, são mostrados na Figura 4.5. Este gráfico agora pode ser usado para controlar o processo no futuro. Os limites de controle calculados a partir do conjunto inicial de dados, antes da remoção de quaisquer valores fora dos limites, são chamados de "limites de controle provisórios".

Algumas questões surgem ao eliminar os valores de X e R dos dados para recalcular os limites, conforme descrito acima. Em primeiro lugar, queremos reiterar o ponto de que nenhum dado deve ser eliminado a menos que haja uma crença razoável de que as causas responsáveis pelos valores fora dos limites foram encontradas e eliminadas, e que essas causas não ocorrerão novamente. O objetivo de usar um gráfico de controle é trazer um processo para a condição de "sob controle". Simplesmente remover pontos de dados para fazer o gráfico parecer estar sob controle não serve a nenhum propósito. Apenas quando o processo tiver sido melhorado após o sinalizador do gráfico — buscando a causa assinalável subjacente e corrigindo-a — é que os dados que sinalizaram a condição fora de controle devem ser removidos. O princípio norteador aqui é este: um ponto de dado do gráfico nunca deve ser removido a menos que a causa que o colocou fora dos limites seja descoberta e eliminada.

Se um valor de R estiver fora de seus limites e suas causas forem eliminadas, o valor de X correspondente também deve ser eliminado dos dados? A resposta é sim; faz sentido eliminar a amostra inteira dos dados porque ela se originou no processo quando este não estava sob controle.

Quantas das amostras originais, ou qual proporção delas, podem ser descartadas, restando amostras suficientes que serão consideradas adequadas para o cálculo dos novos limites? Aqui, a questão é em parte prática e em parte teórica. O Dr. Shewhart, criador dos gráficos de controle, recomendou que um processo seja observado durante um período de tempo suficiente — por pelo menos 25 amostras de tamanho quatro — antes de se concluir que o processo está sob controle (Duncan, 1974). Seu conselho, com o qual a maioria dos estatísticos práticos concordaria, era que não se deve tirar conclusões sobre um processo estar sob controle com base em observações feitas em um curto período de tempo. Essa foi a gênese da prática de usar pelo menos 25 amostras para calcular os limites de controle. Se 25 amostras forem coletadas inicialmente, o processo não... *(Nota: o texto original termina de forma incompleta nesta frase).*

**204 Um Primeiro Curso em Engenharia da Qualidade**

sob controle, e alguns dos valores da amostra têm que ser descartados, então obviamente não haverá amostras "suficientes" para afirmar que os limites são calculados a partir de um processo que está sob controle. É aqui que considerações práticas se tornam necessárias.

Se a amostragem for cara e os testes levarem tempo, não podemos nos dar ao luxo de desperdiçar dados. Esperar para coletar um novo conjunto de dados também pode atrasar o controle do processo. Portanto, na prática, utiliza-se até mesmo um número reduzido de 15 amostras para calcular os limites, se isso for tudo o que restar após descartar as amostras que geraram pontos fora dos limites. Esses limites, no entanto, devem ser atualizados quando amostras adicionais estiverem disponíveis. Outra solução é coletar inicialmente cerca de 30 amostras de tamanho quatro ou cinco, esperando que, após o descarte de algumas delas, restem amostras suficientes para recalcular os limites.

Existe também uma razão teórica para se utilizar 25 ou mais amostras no cálculo dos limites. Os limites para o Gráfico $\bar{X}$ (médias), bem como para o Gráfico $R$ (amplitudes), são calculados usando $R/d_2$ como uma estimativa para o desvio padrão do processo $\sigma$ (veja o Capítulo 5 para a dedução dos limites). O fator $d_2$, que torna $R$ um estimador não tendencioso para $\sigma$, não é bom se o valor de $R$ for obtido a partir de um número pequeno de amostras. Por exemplo, para amostras de tamanho quatro ou cinco, os valores tabulados de $d_2$ não são adequados se $R$ for calculado a partir de menos de 15 amostras. No entanto, para tamanhos de amostra maiores ($n > 8$), os valores tabelados de $d_2$ são adequados mesmo se calculados com menos de 15 amostras (conforme a Tabela D3 de Duncan, 1974, que fornece $d_2^*$, o fator de correção para estimar $\sigma$ a partir de $R$ para tamanhos e números variados de amostras). Isso significa que, se o tamanho da amostra para o gráfico for grande, podemos trabalhar com menos amostras; e se o tamanho da amostra for pequeno, precisaremos de um número maior de amostras para calcular os limites. Esses fatos devem ser mantidos em mente ao decidir se há um número adequado de amostras para o cálculo dos limites. 

Se o tamanho convencional de amostra de quatro ou cinco for utilizado, pode ser uma boa ideia não usar menos de 15 amostras para calcular os limites. Mesmo assim, quando mais amostras ($>25$) estiverem disponíveis, os limites devem ser recalculados e atualizados.

O leitor pode ter notado que no exemplo anterior (Exemplo 4.1), apenas 24 amostras estavam disponíveis e, mesmo assim, prosseguimos com o uso delas para calcular os limites, embora tivéssemos estipulado que um mínimo de 25 amostras seria necessário. Tais concessões podem ser frequentemente necessárias em situações práticas. O leitor também compreenderá que tais concessões podem ser justificadas em vista da discussão acima sobre o número de amostras necessário para o cálculo dos limites.

A seguir, veremos outro exemplo de uso dos gráficos de $\bar{X}$ e $R$. Este exemplo é proveniente de um ambiente de saúde.

**Exemplo 4.2**
Os dados na tabela anexa representam a glicemia de jejum diária (em mg/dL) aferida antes do café da manhã por um paciente diabético nas semanas 1 a 21. Os diabéticos são orientados a fazer essa leitura da quantidade de glicose no sangue para monitorar a condição de sua doença. O médico que acompanha este paciente recomendou que o açúcar no sangue seja controlado abaixo de 120. Precisamos avaliar se a glicemia deste paciente é consistente (sob controle) durante o período em que os dados foram coletados, bem como estudar se há progresso por parte do paciente em direção à meta de manter as leituras abaixo de 120.
O paciente coletou dados todos os dias durante os dias úteis da semana e não realizou coletas aos finais de semana.

***

**205 Qualidade na Produção — Controle de Processos I**

**Semana** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21
**Dia 1** 114 | 150 | 174 | 175 | 167 | 157 | 153 | 151 | 152 | 154 | 165 | 156 | 157 | 164 | 171 | 160 | 151 | 146 | 153 | 155 | 146
**Dia 2** 129 | 153 | 170 | 177 | * | 127 | 141 | 153 | 149 | 156 | 169 | 147 | 143 | 144 | 143 | 156 | 139 | 145 | 151 | * | 158
**Dia 3** 110 | 154 | 167 | 169 | 157 | 143 | 151 | 159 | 145 | 165 | 160 | 162 | 147 | 159 | 155 | 152 | 146 | 151 | 157 | 158 | 162
**Dia 4** 143 | 148 | 177 | 169 | 166 | 148 | 141 | 152 | 136 | 164 | 165 | 153 | 145 | 160 | 146 | 151 | 152 | 153 | 154 | 153 | 166
**Dia 5** 144 | 154 | 142 | 162 | 157 | 143 | 154 | 153 | 155 | 150 | 149 | 152 | 166 | 158 | 147 | 149 | 146 | 154 | 152 | * | 163

**Solução**
Uma combinação de gráficos $\bar{X}$ e R (Gráficos de Médias e Amplitudes) é utilizada para verificar se o "processo" está sob controle com um tamanho de amostra *n = 5*, uma vez que cinco leituras foram obtidas em uma semana. Os gráficos obtidos no Minitab são mostrados abaixo na Figura 4.6. À primeira vista, os gráficos mostram que o paciente não está controlando muito bem a glicemia (açúcar no sangue) e não está nem perto de atingir a meta de mantê-la abaixo de 120.

O processo de controle da glicemia não está sob controle estatístico. A média oscila para cima e para baixo, embora pareça se estabilizar após a sexta semana. A variabilidade nas leituras, conforme observada no gráfico R (gráfico de amplitude), parece diminuir após a 15ª semana, o que pode ser um bom sinal. O paciente não está controlando o nível de glicemia e está longe de alcançar a meta de conter o nível abaixo de 120. Ele pode ter que voltar ao médico para buscar orientações sobre o ajuste da medicação, além de aumentar a prática de exercícios físicos e reduzir a ingestão de açúcar. O paciente, no entanto, será beneficiado se continuar a usar o gráfico de controle para registrar os dados e receber orientação no ajuste da quantidade de exercícios, dieta e medicação, a fim de atingir a meta de obter o controle sobre a glicemia e a diabetes.

**FIGURA 4.6** Gráficos $\bar{X}$ e R para a glicemia de jejum de um paciente diabético (*n = 5*). *(Testes realizados com tamanhos de amostra desiguais)*

**206 Um Primeiro Curso em Engenharia da Qualidade**

A propósito, faltavam alguns pontos de dados na tabela acima, pois o paciente não havia registrado os dados em determinados dias. O Minitab possui um recurso para criar gráficos de controle quando o tamanho da amostra não permanece constante, e essa funcionalidade foi utilizada na elaboração dos gráficos de controle neste exemplo.

**4.3.2 ALGUMAS NOTAS SOBRE OS GRÁFICOS $\bar{X}$ E R**
**4.3.2.1 Os Diversos Usos dos Gráficos**

A combinação dos gráficos $\bar{X}$ e R (Média e Amplitude) é o método de CEP (Controle Estatístico de Processo) mais popular empregado em aplicações industriais. Sua simplicidade e eficácia na descoberta de causas assinaláveis (causas especiais) significativas os tornaram muito populares. O fato de que muitas características da qualidade e variáveis de processo em ambientes de manufatura e serviços são medições com distribuição normal também contribuiu para sua popularidade. Os gráficos $\bar{X}$ e R são usados para atingir diversos objetivos:

**1. Manter um Processo em seu Nível Atual**
O principal uso dos gráficos $\bar{X}$ e R tem o propósito de manter a consistência de variáveis de produto, como a resistência do aço, a viscosidade de uma tinta ou a quantidade de impureza em um produto químico. Por sua natureza, essas variáveis não podem ser facilmente alteradas ou ajustadas para um determinado nível médio. Elas devem ser primeiramente controladas em seus níveis "atuais" usando o valor de $\bar{X}$ (média) derivado dos dados como a linha central do gráfico de controle. Em seguida, devem ser movidas progressivamente na direção desejada por meio de investigações adicionais, experimentação e melhoria de processo, enquanto a variabilidade do processo é controlada durante esse tempo no nível "atual" usando o gráfico R. Os gráficos, quando usados nesta situação com limites calculados a partir das fórmulas $\bar{\bar{X}} \pm A_2\bar{R}$, $D_4\bar{R}$ e $D_3\bar{R}$, são ditos estar no modo de "manter o controle atual". Observe que, nesta situação, o processo é controlado por limites calculados a partir dos dados extraídos do processo, e não impostos por padrões ou especificações externas. Após serem colocados sob controle, esses processos serão comparados com as especificações no que é chamado de "análise de capacidade (ou capabilidade) do processo", que será discutida mais adiante neste capítulo.

**2. Controlar um Processo em um Alvo Determinado ou Valor Nominal**
Existem muitos processos, como cortar chapas de metal em uma determinada largura ou tornear um eixo em um determinado diâmetro, que podem ser facilmente controlados em torno de um determinado alvo com ajustes simples de ferramentas ou dispositivos. Seria desejável que tal processo pudesse estar em conformidade com uma determinada especificação ou padrão, mesmo enquanto é controlado quanto à uniformidade. Suponha que um processo deva ser controlado em um determinado alvo $T$; o $\bar{X}$ pode então ser substituído por $T$ nas fórmulas para o gráfico $\bar{X}$. O gráfico R é usado para controlar a variabilidade, com a amplitude para os limites de controle obtida como $A_2\bar{R}$, usando o $\bar{R}$ dos dados. Da mesma forma, pode haver situações em que a variabilidade do processo, o $\sigma$ (desvio padrão) do processo, é especificada para não exceder um certo valor $\sigma_0$, e o processo deve ser controlado abaixo dessa variabilidade especificada. Essas situações são chamadas de casos de "padrões dados" (*standards-given*), e o Capítulo 5 discute os detalhes de como os limites para eles são calculados.

**3. Como Ferramenta de Resolução de Problemas (*Troubleshooting*)**
Muitos problemas de qualidade na indústria podem ser rastreados até a variabilidade excessiva nas variáveis de processo e características do produto. A implementação dos gráficos $\bar{X}$ e R... *(o texto original é interrompido aqui)*.

**207 Qualidade na Produção — Controle de Processos I**

...seria um bom primeiro passo na resolução desses problemas, porque uma boa compreensão do comportamento do processo é obtida a partir de uma observação minuciosa do processo durante a coleta de dados. Os gráficos sinalizarão primeiro a existência das causas; em seguida, se relacionarmos os acontecimentos no processo aos sinais no gráfico, eles também ajudarão a descobrir as origens dessas causas. Uma vez que as origens das causas sejam conhecidas, elas podem ser eliminadas tomando as medidas corretivas adequadas.

**4. Como uma Ferramenta de Aceitação**
Os gráficos de controle são frequentemente usados para demonstrar a um cliente que o processo tem estado em uma condição estável, produzindo bons produtos para aquele cliente. Em tais situações, o cliente pode reduzir ou eliminar sua inspeção no recebimento, resultando em uma economia considerável de mão de obra, tempo e espaço. De fato, clientes que operam em um ambiente *just-in-time* muitas vezes exigem provas de controle e de capacidade do processo em atender às especificações, para que possam eliminar a inspeção dos suprimentos ao recebê-los. Dessa forma, o gráfico de controle pode ser usado para a aceitação de produtos sem a necessidade de inspeção de entrada pelo cliente.

**4.3.2.2 Selecionando a Variável para o Gráfico**
Embora os gráficos de controle sejam ferramentas muito úteis, mantê-los é caro, especialmente se as medições tiverem que ser feitas manualmente. Portanto, seu uso deve ser restrito àquilo que é absolutamente necessário. Mesmo que as medições sejam feitas usando sensores automáticos e os gráficos sejam gerados por computadores, o excesso de gráficos pode ofuscar as informações daqueles que são realmente importantes. Assim, eles devem ser usados em características do produto ou variáveis do processo que sejam críticas para a qualidade do produto e para a satisfação do cliente. Em certas situações, a criticidade de uma variável para o processo pode ser óbvia. Em outras, uma análise de modos e efeitos de falha do processo (FMEA - veja o Capítulo 3) revelará as variáveis críticas do processo que precisarão ser controladas. Em algumas situações, um estudo preliminar utilizando um gráfico do tipo atributo pode precisar ser feito primeiro, antes de selecionar as características importantes a serem controladas usando os gráficos de $\bar{X}$ e R (Média e Amplitude). Um gráfico de atributos — que é explicado mais adiante neste capítulo — é mais barato de manter e revelará as características que são críticas para a qualidade do produto.

**4.3.2.3 Preparando os Instrumentos**
Antes de iniciar um gráfico de controle em qualquer processo, primeiro é necessário decidir qual instrumento será usado para medir a variável e o nível de precisão com que as leituras serão registradas. Também é necessário verificar se o instrumento escolhido fornece leituras verdadeiras — em outras palavras, se ele foi calibrado — e se o instrumento tem capacidade adequada. (A calibração e a capacidade dos instrumentos são explicadas mais adiante neste capítulo). Na maioria das vezes, a falta de um instrumento de medição adequado pode contribuir para a produção de itens defeituosos. Uma verificação preliminar dos instrumentos oferecerá a oportunidade de consertar ou substituir um equipamento inadequado como um primeiro passo em direção ao controle do processo e à fabricação de um produto de boa qualidade.

Em um exemplo, um dos autores (KSK) foi solicitado a ajudar uma empresa que fabricava cubos de papel (um brinde publicitário) a reduzir a variabilidade na altura dos cubos. O presidente sentia que a empresa estava perdendo dinheiro porque os operadores faziam cubos mais altos do que o exigido nas especificações. Em sua primeira visita à fábrica, o autor pegou um cubo de uma pilha e pediu a várias pessoas no local, incluindo o superintendente da fábrica, o chefe da oficina, o operador e o inspetor, que medissem sua altura. Cada pessoa forneceu um número diferente para a altura, porque cada pessoa usou uma ferramenta diferente e/ou...

**208 Um Primeiro Curso em Engenharia da Qualidade**

...apertou o cubo de forma diferente ao fazer a medição. Um usou uma régua, outro, um paquímetro, ainda outro, uma fita métrica, e assim por diante. Nenhum esquema de medição padronizado havia sido prescrito para determinar a altura de um cubo de papel. Um novo esquema de medição teve que ser implementado para fornecer razoavelmente a "mesma" leitura para o mesmo cubo quando medido repetidamente, seja pela mesma pessoa ou por pessoas diferentes. Até que isso fosse feito, nenhum trabalho adicional poderia ser realizado para quantificar a variabilidade nos cubos — muito menos encontrar as fontes de variabilidade e minimizá-las ou eliminá-las.

Se não houver uma consistência razoável nas medições fornecidas pelo instrumento, é impossível alcançar qualquer consistência razoável na característica do produto que está sendo medida. Garantir que um bom instrumento de medição esteja disponível é um primeiro passo importante no controle de qualquer característica do produto ou variável do processo. Por favor, leia mais sobre a análise de sistemas de medição mais adiante neste capítulo.

**4.3.2.4 Preparando Folhas de Verificação**
Folhas de verificação (*check sheets*) ou formulários padronizados adequados devem ser desenvolvidos para registrar informações relevantes do processo e analisar dados. Um formulário padrão, como o mostrado na Figura 4.4, solicita dados relevantes e fornece espaço para o registro e a análise desses dados, facilitando enormemente a coleta de informações. Essas folhas de verificação podem ser impressas ou formatadas em um computador. Frequentemente, é aconselhável reunir mais informações do que menos. Qualquer informação relacionada ao processo, como temperatura ambiente, umidade, nome do operador, tipo e ID do instrumento utilizado, ou informações sobre qualquer fator que possa afetar a qualidade da saída do processo, deve ser registrada. De fato, a preparação de folhas de verificação obriga o analista a planejar antecipadamente os detalhes da coleta de dados — como o que exatamente deve ser medido, qual instrumento deve ser usado e com qual nível de precisão.

**4.3.2.5 Alarme Falso no Gráfico X**
Quando um valor de X cai fora de um limite de controle ao usar um Gráfico X, normalmente entendemos que uma causa atribuível ocorreu e alterou a média do processo para um nível diferente do nível desejado. Assim como em qualquer procedimento estatístico, no entanto, o gráfico de controle também está sujeito a erros do Tipo I e do Tipo II. O erro do Tipo I, que ocorre quando o gráfico de controle declara que um processo não está sob controle quando, de fato, ele está sob controle, é chamado de "alarme falso". Isso decorre do fato de que alguns valores na distribuição de X caem fora dos limites de controle, mesmo quando o processo está sob controle. A probabilidade de isso acontecer em um gráfico de 3 sigmas é de 0,0027. Ou seja, mesmo quando um processo está sob controle, cerca de 3 em 1000 amostras cairão fora dos limites, indicando que o processo não está sob controle.

Pessoas experientes no uso prático dos Gráficos X, incluindo o Dr. Deming (Deming 1986), aconselham que o alarme falso não deve ser uma preocupação ao usar o gráfico em um processo que não foi colocado sob controle anteriormente. Segundo eles, se um processo ainda não foi controlado usando um procedimento como o gráfico de controle, é muito provável que ele não esteja sob controle. Portanto, a preocupação com um alarme falso deve surgir apenas ao monitorar um processo que já foi colocado sob controle.

**4.3.2.6 Determinando o Tamanho da Amostra**
O tamanho de amostra tipicamente recomendado para os gráficos X e R é de quatro ou cinco. O Dr. Shewhart, quando propôs o Gráfico X pela primeira vez, recomendou o uso de uma amostra a menor possível para evitar diluir na média (*averaging out*) uma causa atribuível que possa ocorrer durante o tempo em que a amostra é coletada. No entanto, as amostras devem ser grandes o suficiente para aproveitar o efeito do... *(Nota: o texto original é interrompido aqui).*

**209 Qualidade na Produção — Controle de Processos I**

[...]* teorema do limite central, que faz com que as médias amostrais de amostras "grandes" sigam a distribuição normal, mesmo que a população controlada não seja normal. O Dr. Shewhart (Shewhart 1931) também foi influenciado pelo fato de que o tamanho de amostra igual a quatro ajudava no cálculo da "raiz quadrada da média dos quadrados", a qual ele usava como medida amostral de variabilidade. A facilidade de encontrar a raiz quadrada de quatro era uma vantagem naqueles dias em que calculadoras eletrônicas não estavam disponíveis. Ele, portanto, recomendou um tamanho de amostra de quatro.

Usuários posteriores viram certa vantagem em usar um tamanho de amostra de cinco, pois isso proporcionava alguma facilidade no cálculo da média. (Obviamente, eles também não possuíam calculadoras eletrônicas). Portanto, um tamanho de amostra de quatro ou cinco tornou-se a norma para os gráficos X-barra e R (gráficos de médias e amplitudes). Em algumas situações, entretanto, a escolha do tamanho da amostra pode ser ditada por considerações práticas sobre as quais o analista não tem controle. Nessas situações, tamanhos de amostra variando de 2 a 10 podem ser utilizados. O tamanho mínimo de 2 é necessário para calcular R (a amplitude), e o máximo de 10 é ditado pelo fato de que amostras maiores tornam o valor de R menos confiável. Ou seja, a variabilidade na amplitude amostral R torna-se excessivamente grande quando o tamanho da amostra é superior a 10.

Pesquisadores têm conduzido estudos teóricos (ver Duncan 1956 e o Capítulo 10 em Montgomery 2013) para determinar o tamanho ideal da amostra, a distância entre a Linha Central (LC) e os limites, e a frequência de amostragem. Tais pesquisadores consideram o custo da amostragem, o custo de não descobrir causas assinaláveis (causas especiais) rápido o suficiente após sua ocorrência e o custo de falsos alarmes, e então escolhem os parâmetros do gráfico para minimizar o custo médio de controle de um processo. A análise deve ser feita para cada processo individualmente, levando em consideração a estrutura de custos para aquele processo em particular. Essa determinação do tamanho da amostra e de outros parâmetros do gráfico de controle enquadra-se no tópico de *projeto econômico de gráficos de controle*. Este é um tópico avançado, e os leitores interessados podem consultar Montgomery (2013).

**4.3.2.7 Por que Limites de 3 Sigma?**

Novamente, foi o Dr. Shewhart quem recomendou o uso da regra de 3 sigma para calcular os limites de controle quando ele propôs originalmente os gráficos de controle. Ele era rigoroso quanto ao fato de que as chances de interrupção do processo devido a falsos alarmes provenientes do procedimento de controle deveriam ser pequenas. Ele escolheu o critério de que a chance de procurar uma causa assinalável quando nenhuma existe não deveria ser superior a 3 em 1000 (Shewhart 1939), o que se traduz na regra de 3 sigma, partindo da premissa de que a distribuição de X é normal. De acordo com essa regra, os limites de controle serão posicionados a três desvios padrão da estatística sendo plotada, em ambos os lados da linha central.

Os limites poderiam ser colocados a qualquer distância — digamos, a uma distância de 2, 2,5, 4 ou 4,5 sigmas da linha central. Se, por exemplo, os limites estiverem a uma distância de 2 sigmas, o gráfico de controle detectará mudanças no processo mais rapidamente e identificará mudanças ainda menores de forma mais eficaz, em comparação com o gráfico de limites de 3 sigmas. No entanto, o gráfico terá uma probabilidade maior de falso alarme. Se, por outro lado, os limites forem posicionados a uma distância de 4 sigmas, as probabilidades de falso alarme serão pequenas, mas o gráfico de controle levará mais tempo para detectar causas assinaláveis; até mesmo mudanças consideráveis no processo podem permanecer indetectadas por longos períodos de tempo. Falsos alarmes custam dinheiro porque podem resultar em uma parada desnecessária do processo e gerar despesas na busca por um problema que não existe. Portanto, o Dr. Shewhart argumentou que apenas aquelas causas assinaláveis que podem ser... *(Nota: o texto original é interrompido aqui).*

*210 Um Primeiro Curso em Engenharia da Qualidade*

[...] causas que podem ser encontradas "sem custar mais do que vale a pena para encontrá-las" (Shewhart 1939, 30) precisam ser descobertas. Em sua experiência, os limites de 3-sigma forneceram uma "fronteira econômica" entre as causas que valem a pena ser detectadas e aquelas que não valem.

Devemos perceber, no entanto, que a fronteira econômica depende da estrutura de custos de um dado processo. Em uma situação onde o alarme falso não é caro, pode ser possível localizar os limites de controle mais próximos da linha central, com maior poder para detectar mudanças. Por outro lado, se o alarme falso for caro, os limites devem ser localizados mais distantes do que os limites de 3-sigma, economizando assim os gastos com alarmes falsos. Tais modificações na regra do 3-sigma são parte das recomendações de pesquisadores que trabalham no projeto econômico de cartas de controle.

Neste sentido, as recomendações do Dr. Ott, um pioneiro no uso e propagação de métodos estatísticos na indústria no início da década de 1940, valem a pena ser mencionadas. O Dr. Ott (1975) recomendou que, se sabemos que um processo está produzindo itens defeituosos e estamos em um modo de solução de problemas (*troubleshooting*), podemos muito bem usar um conjunto mais estreito de limites — digamos, limites de 2-sigma — para detectar as causas e repará-las. A premissa é que, quando há causas assinaláveis no processo que estão produzindo os defeitos, as chances são altas de que um sinal na carta seja um alarme real indicando uma causa assinalável, em vez de ser um alarme falso.

**4.3.2.8 Frequência de Amostragem**
Novamente, estudos econômicos podem ser feitos para determinar com que frequência as amostras devem ser coletadas para otimizar a operação de controle. Tais estudos tentam equilibrar o aumento do custo de amostragem — decorrente do aumento da frequência — com os benefícios de descobrir causas assinaláveis rapidamente para evitar perdas por danos nas saídas do processo. Tais estudos tendem a se tornar complexos e fora do alcance dos profissionais que geralmente mantêm as cartas de controle. Uma abordagem mais prática é coletar amostras com maior frequência durante as fases iniciais de controle de um processo e, em seguida, reduzir essa frequência uma vez que a estabilidade seja alcançada. Considerações práticas, como a taxa de produção, o custo da amostra e o custo de realizar as medições, devem ser consideradas ao decidir com que frequência as amostras serão coletadas.

**4.3.2.9 Subagrupamento Racional**
No jargão das cartas de controle, o termo "subgrupo" e o termo "amostra" significam a mesma coisa. Alguns preferem o primeiro em vez do segundo, no entanto, porque "subgrupo" implica claramente que há mais de uma unidade contida nele, o que torna a comunicação mais clara no chão de fábrica. Usaremos ambos os termos aqui de forma intercambiável.

O termo "subagrupamento" refere-se ao método de selecionar subgrupos, ou amostras, do processo a fim de obter dados para as cartas de controle. Queremos decidir a base do subagrupamento de maneira racional. Como exemplo, suponha que um processo seja propenso a se deteriorar ao longo do tempo; então, coletar amostras com base no tempo — em intervalos regulares — faria sentido. Se o processo muda com o tempo, as amostras levariam à descoberta de tais mudanças. Por outro lado, se um processo for dependente da habilidade individual dos operadores para garantir a qualidade da saída, o subagrupamento deve ser feito com base no operador. Ou seja, se o primeiro subgrupo for retirado do operador 1, o próximo subgrupo será retirado do operador 2, e assim por diante. Dessa forma, se ocorrer uma mudança no processo devido a uma diferença de desempenho de um operador em relação aos demais, a carta mostrará a mudança, e essa alteração será rastreada até o operador que a causou. Esse tipo de subagrupamento, que facilita a descoberta de uma causa quando ela é indicada nas cartas, é chamado de "subagrupamento racional".

**211 Qualidade na Produção — Controle de Processos I**

O subagrupamento racional é uma ideia importante que deve ser compreendida e empregada corretamente para que se obtenha o máximo proveito do uso de gráficos de controle. Um respeitado livro-texto sobre controle estatístico da qualidade de Grant e Leavenworth (1996) dedica um capítulo inteiro ao subagrupamento racional. Adicionaríamos ainda que, se o uso de gráficos de controle não obteve sucesso em controlar um processo, ou, em outras palavras, se as causas assinaláveis (*causas especiais*) não puderem ser descobertas enquanto o processo ainda estiver produzindo itens defeituosos, então devemos concluir que o subagrupamento adequado não está sendo utilizado. Uma mudança no subagrupamento com base em alguma hipótese racional ajudaria na descoberta das causas. Em algumas situações, o tempo de um projeto inteiro foi gasto tentando encontrar a maneira correta de subagrupamento, testando um método após o outro para descobrir as causas assinaláveis. Os dois estudos de caso a seguir ilustram o conceito de subagrupamento racional.

**Estudo de Caso 4.1**
A empresa era fabricante de portas de garagem e peças relacionadas, como mecanismos de abertura de portas. No departamento onde a assistência ao cliente é prestada aos usuários que ligam para o número 0800 da empresa, havia preocupações de que o tempo de atendimento das chamadas tinha aumentado recentemente, resultando em maiores tempos de espera — e mais reclamações — por parte dos clientes. A empresa queria descobrir o que estava causando o aumento do tempo de atendimento das chamadas, para que pudessem reduzir o tempo médio de atendimento e, assim, diminuir o tempo de espera dos clientes. Um gráfico de controle foi iniciado, plotando o tempo médio por chamada em uma base diária, sob a hipótese de que as chamadas provavelmente exigiam mais tempo de atendimento em alguns dias da semana do que em outros. O processo estava sob controle, o que significa que as médias diárias eram aproximadamente as mesmas. Não havia diferença significativa na natureza das chamadas de um dia para outro na semana. 

Em seguida, as médias diárias dos operadores individuais foram plotadas sob a hipótese de que os operadores faziam diferença no tempo que levavam para atender as chamadas. A base do subagrupamento agora é o operador. O processo estava sob controle, mostrando que não existia diferença significativa no tempo que os operadores levavam para atender as chamadas. A base de subagrupamento foi então alterada para o tipo de produto, separando as chamadas sobre portas das chamadas sobre os mecanismos de abertura. O processo estava sob controle; ou seja, não havia diferença significativa entre as chamadas sobre os vários tipos de produtos. 

Então, a base foi alterada para o tipo de chamada, separando os pedidos de ajuda com a instalação das chamadas para encomenda de peças. Descobriu-se que as chamadas solicitando ajuda com instalação eram as causas assinaláveis que exigiam tempos de atendimento significativamente maiores do que os outros tipos de serviço. Um grupo separado de operadores foi organizado e recebeu treinamento adicional em questões de instalação. Todas as chamadas relacionadas à instalação foram direcionadas a este grupo. O tempo médio para chamadas de instalação diminuiu, assim como a média para todas as chamadas.

**Estudo de Caso 4.2**
Uma envasadora que colocava detergente líquido em garrafas em uma linha de envase automático possuía 18 cabeçotes (bicos). As garrafas vazias que chegavam eram envasadas em lotes de 18 garrafas de cada vez e empurradas para a frente para a operação de tampamento. A expectativa era de que cada garrafa recebesse consistentemente a quantidade especificada de líquido de cada um dos cabeçotes de envase. No entanto, cada cabeçote poderia perder seu ajuste, entupir, acumular gelo ou ser afetado de alguma forma por causas assinaláveis,

**212 Um Primeiro Curso em Engenharia da Qualidade**

... resultando em variação na quantidade de líquido envasada em cada garrafa. A quantidade de líquido envasada nas garrafas era monitorada usando os gráficos $\bar{X}$ e R (Médias e Amplitudes).

Uma maneira de fazer o subagrupamento era retirar cinco garrafas a cada hora no final da linha, independentemente de qual bico de envase enchia as garrafas. Tal subagrupamento serviria ao propósito enquanto o processo estivesse sob controle. No entanto, se o processo saísse de controle, não haveria indícios de qual bico precisava de conserto, a menos que testes adicionais fossem feitos em todos os 18 bicos. Um método alternativo de subagrupamento seria retirar cinco garrafas de cada bico a cada hora e, em seguida, plotar as médias de cada um, o que mostraria com certeza quando qualquer bico específico saísse de controle. Porém, esta seria uma forma muito cara de subagrupamento devido à grande quantidade de verificações necessárias por hora.

Uma solução de meio-termo foi verificar uma garrafa de cada bico por hora e, então, subagrupá-las colocando as garrafas dos primeiros seis bicos no subgrupo 1, as garrafas dos próximos seis bicos no subgrupo 2 e as garrafas dos últimos seis bicos no subgrupo 3. Se um valor de $\bar{X}$ caísse fora dos limites, isso indicaria, pelo menos, qual grupo de seis bicos precisava de exames adicionais. Este foi um bom meio-termo entre as duas alternativas anteriores e funcionou bem.

**4.3.2.10 Melhorando a Sensibilidade do Gráfico $\bar{X}$**
No próximo capítulo, ao discutir suas características de operação, veremos que o gráfico $\bar{X}$ com limites de 3 sigmas e um tamanho de amostra de quatro ou cinco — referido como o "gráfico convencional" — é capaz de detectar apenas grandes mudanças na média do processo. Se ocorrerem pequenas mudanças na média do processo (distância < 1,5 $\sigma$ do centro), o gráfico $\bar{X}$ tem uma chance muito pequena de detectar tais alterações. O gráfico R também tem apenas uma chance muito pequena de descobrir mudanças na variabilidade do processo, a menos que as mudanças tornem o desvio padrão do processo pelo menos duas vezes maior que o original.

Às vezes, essa insensibilidade dos gráficos $\bar{X}$ e R em descobrir pequenas alterações é uma vantagem, porque essas pequenas mudanças no processo podem nem precisar ser detectadas de qualquer maneira. Em algumas situações, no entanto, pequenas alterações no processo podem causar grandes danos se, por exemplo, a taxa de produção for alta, o custo dos rejeitos for alto, ou ambos. Nessas situações, é desejável ter uma sensibilidade maior no gráfico para descobrir pequenas mudanças. Várias abordagens estão disponíveis.

**4.3.2.11 Aumentando o Tamanho da Amostra**
Uma maneira de aumentar o poder estatístico dos gráficos $\bar{X}$ e R é usar tamanhos de amostra maiores. Como será mostrado no próximo capítulo, o poder do gráfico $\bar{X}$ aumenta com o aumento do tamanho da amostra, assim como o poder do gráfico R. Um aumento no tamanho da amostra, no entanto, também envolve um aumento no custo de amostragem. Quando o custo da amostragem não é muito alto, o aumento na sensibilidade dos gráficos pode ser alcançado aumentando-se o tamanho da amostra. Claro, devemos lembrar que se um tamanho de amostra maior que dez for escolhido, não poderemos usar o gráfico R; devemos usar o gráfico S (Desvio Padrão), conforme discutido em uma seção posterior.

**4.3.2.12 Uso de Limites de Alerta**
Outra maneira de melhorar a sensibilidade do gráfico $\bar{X}$ é usar limites de alerta. Eles são desenhados a distâncias de 1 sigma e 2 sigmas de cada lado, entre a linha central e os limites de controle (de 3 sigmas), conforme mostrado na Figura 4.7a. Regras estão então disponíveis para ajudar a descobrir causas atribuíveis (especiais) usando esses limites de alerta. Uma dessas regras: Uma causa atribuível é...

**213 Qualidade na Produção — Controle de Processo I**

[Uma causa atribuível é] indicada se dois de três valores consecutivos caírem fora dos limites de advertência de 2 sigmas, no mesmo lado da linha central. Outra regra: uma causa atribuível é indicada se quatro de cinco valores consecutivos caírem fora dos limites de advertência de 1 sigma no mesmo lado. Essas regras são aplicadas mesmo se nenhum valor cair fora dos limites de 3 sigmas. Exemplos são mostrados na Figura 4.7a para demonstrar como essas regras funcionam na revelação de causas atribuíveis.

**4.3.2.13 Uso de Sequências (*Runs*)**

Ainda outro método para aumentar a sensibilidade do Gráfico X é o uso de sequências (*runs*). Uma sequência é uma série de pontos plotados de forma consecutiva com algumas propriedades em comum. Por exemplo, se uma série de valores X consecutivos cair abaixo da linha central, essa série constituirá uma "sequência abaixo da LC", como mostrado na Figura 4.7b. De forma similar, poderia haver uma "sequência acima da LC". Uma "sequência ascendente" (*run-up*) ocorreria se houvesse uma série de pontos em que cada ponto está em um nível mais alto do que o anterior, e uma "sequência descendente" (*run-down*) ocorreria se cada ponto estivesse em um nível mais baixo do que o anterior. Um exemplo de sequência descendente é mostrado na Figura 4.7b. Essas sequências significam que o processo está... [texto interrompido]

**FIGURA 4.7** (a) Uso de limites de advertência em um Gráfico X. (b) Exemplos de sequências em um gráfico de controle.

**214 Um Primeiro Curso em Engenharia da Qualidade**

...comportando-se de maneira não normal e não aleatória devido a uma causa atribuível. A sequência acima ou abaixo da LC (Linha Central) indicaria que a média do processo saltou para longe do alvo, e a sequência ascendente ou descendente indicaria que está ocorrendo uma deriva ou "tendência" na média do processo. As seguintes regras são empregadas para ajudar a decidir quando ocorreu uma mudança no processo. Uma sequência maior que sete pontos acima ou abaixo da linha central é considerada um indicativo de uma causa atribuível. De modo semelhante, uma sequência maior que sete, ascendente ou descendente, indicaria que uma causa atribuível está em ação (Duncan 1974; Montgomery 2013).

As regras para aumentar a sensibilidade do Gráfico de X (gráfico das médias) usando sequências e limites de advertência podem ser resumidas da seguinte forma. Uma causa atribuível é indicada se:
1. Dois de três pontos consecutivos caem fora de um limite de advertência de 2 sigmas do mesmo lado da linha central.
2. Quatro de cinco pontos consecutivos caem fora de um limite de advertência de 1 sigma do mesmo lado.
3. Mais de sete pontos consecutivos caem acima ou abaixo da linha central.
4. Mais de sete pontos consecutivos formam uma sequência ascendente ou descendente.

Estas regras são usadas em adição à regra de que qualquer ponto plotado fora do limite de 3 sigmas indicará uma causa atribuível. Estas regras são conhecidas como "regras da Western Electric", porque foram originalmente recomendadas no manual publicado pela Western Electric Co., o qual foi republicado como o *Statistical Quality Control Handbook* (AT&T 1958).

Um cuidado pode ser apropriado aqui. Cada regra empregada para aumentar a sensibilidade de um gráfico também carrega um certo aumento na probabilidade de falsos alarmes. Quando várias regras são usadas simultaneamente, as probabilidades de falso alarme se somam (de acordo com o teorema da adição de probabilidades), aumentando a probabilidade global de falso alarme do gráfico. Portanto, nem todas as regras devem ser usadas simultaneamente. Recomendamos, com base na experiência, o uso apenas das regras de sequências (Regras 3 e 4 acima) para suplementar a regra de um único valor caindo fora dos limites de 3 sigmas.

**4.3.2.14 Padrões em Gráficos de Controle**
Definimos acima o que significa uma "sequência" (run) no padrão de pontos plotados em um gráfico de controle. Existem também outros sinais reveladores que aparecem nos gráficos de controle além das sequências. Alguns desses padrões são mostrados na Figura 4.8. Os comentários que acompanham cada padrão sugerem como um analista pode interpretar esses padrões. Os padrões que indicam um deslocamento na média do processo (b, c e d) são óbvios, e o padrão "e", aquele que veremos em um processo que nunca foi controlado antes, indica que muitas causas atribuíveis estão em jogo e exigem ação do analista da qualidade. Ciclos e tendências são os padrões mais comuns que ajudam a descobrir causas.

**4.3.2.15 Controle vs. Capacidade**
Um processo está sob controle se estiver operando de forma consistente dentro de sua variabilidade natural. Um processo é capaz se produz "todos" os produtos dentro da especificação do cliente. Quando o processo está sob controle, isso não significa que o processo também seja capaz. Pode haver uma situação na qual um processo produz um produto que é uniformemente igual, mas uniformemente fora da especificação. O processo estará, então, sob controle, mas de forma alguma será capaz. Portanto, quando sabemos que um processo está sob controle, uma verificação adicional é necessária para checar se o processo também é capaz. Se o processo não for capaz, trabalho adicional será necessário para atingir a capacidade. Tal trabalho é chamado de "estudo de capacidade". Existem medidas para avaliar quantitativamente a extensão em que um processo é capaz; ou seja, a extensão em que a saída de um processo atende à especificação. Tais medidas, que são conhecidas como "índices de capacidade do processo", são discutidas mais adiante neste capítulo.

**215 Qualidade na Produção — Controle de Processo I**

Por enquanto, enfatiza-se que, quando um processo é colocado sob controle usando um gráfico de controle, apenas parte do trabalho está concluída. Um estudo de capabilidade deve ser feito para verificar se o processo também atende às especificações. No entanto, avaliar a capabilidade de um processo quando ele não está sob controle não faria sentido. Um processo que não está sob controle não tem comportamento previsível e, portanto, não tem capabilidade previsível. Um estudo de capabilidade deve ser realizado apenas depois que o processo for colocado sob controle.
**FIGURA 4.8** Padrões em gráficos de controle. (Compilado de AT&T (1958).)

**216 Um Primeiro Curso em Engenharia da Qualidade**

**4.3.3 GRÁFICOS $\bar{X}$ E $S$**
Embora o gráfico $R$ (Amplitude) seja comumente usado para controlar a variabilidade do processo devido à simplicidade de calcular o $R$, o gráfico $S$, que é o gráfico de desvio padrão, é preferido em diversas situações. Por exemplo, quando o tamanho da amostra deve ser maior que 10 porque uma sensibilidade extra é necessária para o gráfico $\bar{X}$, o gráfico $R$ não pode ser usado devido à sua baixa eficiência (ou seja, maior variabilidade) da estatística $R$ quando o tamanho da amostra é grande. Além disso, com a disponibilidade das calculadoras modernas e a implementação de ferramentas de CEP (Controle Estatístico de Processo) no computador, a vantagem do gráfico $R$ de ser fácil de calcular pode não ser mais um diferencial. Portanto, o gráfico $S$ pode ser usado para aproveitar sua eficiência. 

Para o gráfico $S$, o desvio padrão $S = \sqrt{\frac{\sum (X_i - \bar{X})^2}{n - 1}}$ é calculado para cada subgrupo e plotado em um gráfico com linhas de limite traçadas para a estatística $S$. Os limites de controle para os gráficos $\bar{X}$ e $S$ são calculados usando as fórmulas:

**Limites de Controle para o Gráfico $S$:**
*   $LSC_S = B_4\bar{S}$ *(Limite Superior de Controle)*
*   $LC_S = \bar{S}$ *(Linha Central / Limite de Controle)*
*   $LIC_S = B_3\bar{S}$ *(Limite Inferior de Controle)*

**Limites de Controle para o Gráfico $\bar{X}$:**
*   $LSC_{\bar{X}} = \bar{\bar{X}} + A_3\bar{S}$
*   $LC_{\bar{X}} = \bar{\bar{X}}$
*   $LIC_{\bar{X}} = \bar{\bar{X}} - A_3\bar{S}$

Nestas fórmulas, $A_3$, $B_3$ e $B_4$ são fatores que fornecem limites de 3 sigmas para $\bar{X}$ e $S$, e podem ser encontrados em tabelas padrão (Tabela 4.2 ou Tabela A.4 no Apêndice). A única diferença entre usar o gráfico $S$ em vez do gráfico $R$ em conjunto com o gráfico $\bar{X}$ está no cálculo do valor de $S$ (em vez de $R$) para cada amostra, e no uso dos valores de $S$ para calcular os limites. Os métodos de elaboração e interpretação desses gráficos são os mesmos da combinação de gráficos $\bar{X}$ e $R$. O Exemplo 4.3 mostra como elaboramos os gráficos $\bar{X}$ e $S$.

**Exemplo 4.3**
Os dados do Exemplo 4.1 são reproduzidos na Tabela 4.3, e o cálculo de $\bar{X}$ e $S$ é mostrado na nova tabela. Calcule os limites para os gráficos $\bar{X}$ e $S$, desenhe os gráficos e verifique se o processo está sob controle.

**Solução**
Os limites para o gráfico $S$ são calculados abaixo e os gráficos elaborados no software Minitab são mostrados na Figura 4.9.

**Limites de Controle para o gráfico $S$:**
*   $LSC_S = B_4\bar{S} = 2,09 \times 1,2 = 2,51$
*   $LC_S = \bar{S} = 1,2$
*   $LIC_S = B_3\bar{S} = 0$

**Limites de Controle para o gráfico $\bar{X}$:**
*   $LSC_{\bar{X}} = \bar{\bar{X}} + A_3\bar{S} = 21,37 + 1,43 \times 1,2 = 23,09$
*   $LC_{\bar{X}} = \bar{\bar{X}} = 21,37$
*   $LIC_{\bar{X}} = \bar{\bar{X}} - A_3\bar{S} = 21,37 - 1,43 \times 1,2 = 19,65$

**217 Qualidade na Produção — Controle de Processo I**
**TABELA 4.3**
*Cálculo dos gráficos $\bar{X}$ e $S$ para o Exemplo 4.3 (Dados do Exemplo 4.1)*

**218 Um Primeiro Curso em Engenharia da Qualidade**

A Figura 4.9 mostra os gráficos $\bar{X}$ e S para o mesmo conjunto de dados que foram usados para preparar os gráficos $\bar{X}$ e R mostrados na Figura 4.4. Ao comparar o gráfico R na Figura 4.4 e o gráfico S na Figura 4.9, notamos que a Amostra 22, que tinha seu valor R fora dos limites no gráfico R, tem o valor S correspondente dentro dos limites no gráfico S. O gráfico S mostra que o processo está sob controle, mesmo que o valor S dessa única amostra esteja muito próximo aos limites no gráfico S. Devemos considerar que o gráfico S representa o verdadeiro estado do processo melhor do que o gráfico R, porque a estatística S (desvio padrão) é um estimador da variabilidade do processo melhor do que a estatística R (amplitude).

**4.3.4 O GRÁFICO DE SEQUÊNCIAS (RUN-CHART)**

Antes de passarmos para a discussão do próximo tópico, os gráficos de controle por atributos, queremos discutir mais um gráfico que pode ser usado tanto com dados de medição (variáveis) quanto com dados de atributos. Ele é chamado de gráfico de sequências (*run-chart*), possivelmente porque as decisões sobre a condição de um processo são tomadas com base em sequências (*runs*). Neste gráfico, não há linhas de limite de controle. A condição do processo, se está sob controle ou não, é determinada meramente pela contagem do comprimento das sequências e do número de sequências. (Uma sequência, vale lembrar, é uma sucessão de pontos plotados que possuem uma característica comum, como todos os pontos da sequência caindo acima/abaixo da linha central ou cada um dos pontos da sequência caindo abaixo ou acima do ponto anterior). 

Existem regras disponíveis, como indicado abaixo, para determinar quando o processo está sob controle e quando não está. Este gráfico pode ser usado com medições como diâmetro, peso de pacotes e tempo de espera em um consultório médico, ou atributos como número de defeitos em uma peça fundida, número de pacientes esperando por consulta ou número de cesarianas realizadas em um mês em uma clínica. Este gráfico pode ser usado com observações individuais (valores X) ou médias (valores $\bar{X}$), amplitudes (valores R), desvios padrões (valores S), proporção de itens defeituosos em uma amostra (valores p), etc. As principais vantagens do gráfico de sequências são sua simplicidade e aplicação universal. Este gráfico é amplamente utilizado no setor de saúde.

O procedimento consiste em plotar os dados cronologicamente, contar o comprimento e o número de sequências e decidir a condição do processo com base em certas regras. A linha central do gráfico representa a mediana dos dados. Vários autores oferecem diferentes conjuntos de regras; o conjunto estabelecido por Perla et al. (2011) é dado abaixo como exemplo.

FIGURA 4.9 Gráficos $\bar{X}$ e S para o Exemplo 4.3 (dados do Exemplo 4.1).

**219 Qualidade na Produção — Controle de Processos I**

O processo não está sob controle se:
• houver uma sequência de seis ou mais pontos acima ou abaixo da mediana.
• houver uma sequência ascendente ou descendente de cinco ou mais pontos.
• houver um excesso ou uma escassez de sequências acima ou abaixo da mediana em comparação com os valores críticos tabelados.
• houver um ponto "astronômico" — uma plotagem que é claramente um *outlier* (valor atípico).

Ao contar os comprimentos das sequências, os pontos plotados exatamente sobre a mediana não devem ser contabilizados. Existem tabelas disponíveis em Perla et al. (2011) que fornecem valores críticos para sequências escassas ou em excesso dado um determinado tamanho do conjunto de dados.

Como dissemos, há muitos desses conjuntos de regras associados aos gráficos de sequências (*run-charts*). Montgomery (2013, p. 205) lista mais algumas e adverte contra o uso de muitas regras simultaneamente, pois as probabilidades de alarme falso se "somam" (de acordo com o teorema da adição de probabilidades). Portanto, recomendaremos o uso de apenas as duas regras a seguir para os gráficos de sequências. Afinal, a principal característica do gráfico de sequências é a sua simplicidade, e não há razão para torná-lo complicado adicionando regras demais. As regras recomendadas são:

Considere que o processo sofreu uma alteração (é afetado por uma causa atribuível) se qualquer uma das duas condições a seguir existir:
 1. Mais de sete pontos consecutivos caem acima ou abaixo da linha central.
 2. Mais de sete pontos formam uma sequência ascendente ou descendente contínua.

Note que estas são as mesmas regras empregadas nas sequências do Gráfico X. O Exemplo 4.4 abaixo ilustra o uso do gráfico de sequências para monitorar a glicemia de jejum de um paciente diabético. Este exemplo utiliza os mesmos dados usados para os Gráficos X e R em um exemplo anterior.

**Exemplo 4.4**
A Figura 4.10 mostra o gráfico da glicemia de jejum diária aferida antes do café da manhã de um paciente diabético. Os diabéticos são aconselhados a monitorar a evolução da doença acompanhando a quantidade de glicose no sangue. O médico que assiste a este paciente recomendou que ele reduza as leituras de glicemia para menos de 120. O paciente utiliza o gráfico de sequências para monitorar o nível de glicose no sangue.

**Solução**
A Figura 4.10 exibe o gráfico de sequências gerado com o software Minitab. Aplicando a Regra 1, descobrimos que existem duas sequências no início: uma com um comprimento de 9 pontos acima da linha central e outra com um comprimento de 6 pontos acima da linha central. Em seguida, há uma sequência de 11 pontos abaixo da linha central após a 45ª observação. Isso demonstra que o paciente não está conseguindo controlar muito bem a glicemia de jejum; o nível de açúcar no sangue está muito instável. Aplicando a Regra 2, a sequência mais longa, uma sequência descendente, tem um comprimento igual a 5, portanto não há sinalização de tendências.
O nível médio oscila amplamente. O nível de glicose está bem acima da meta desejada de 120. Alguma intervenção, como uma mudança na medicação, dieta e/ou exercícios, pode ser justificada. Vale notar que o gráfico de sequências forneceu, de forma geral, a mesma conclusão que os Gráficos X e R forneceram.

220 Um Primeiro Curso em Engenharia da Qualidade

No entanto, a única coisa que é visível no gráfico de sequências (*run-chart*) que não era aparente no Gráfico X (*X-chart*) para os mesmos dados é a seguinte: há uma longa sequência de 11 pontos plotados abaixo da linha central a partir do 45º ponto. Isso significa que, por um período considerável de tempo, o nível médio de glicose no sangue esteve bem abaixo da média geral (um resultado desejável) antes de começar a subir novamente. Se o paciente pudesse investigar os motivos pelos quais uma sequência tão longa ocorreu no lado melhor da Linha Central (CL - *Center Line*) e conseguisse replicar essa ocorrência no futuro, ele poderia ser capaz de controlar o alto nível de glicose no sangue. Ele também se beneficiará ao continuar coletando e plotando os dados em um gráfico, para que possa compreender as mudanças que estão ocorrendo em sua condição de saúde.

Como mencionado anteriormente, o gráfico de sequências é simples de usar, pois não há limites de controle a serem calculados. Contudo, como as regras usadas para determinar as condições do processo são as mesmas para todos os tipos de dados, o poder do gráfico, que é a sua capacidade de detectar mudanças, pode ser diferente para diferentes tipos de dados. Ele pode funcionar bem para um tipo de dados e pode não funcionar tão bem com outro. Uma coisa que sabemos: as regras de sequência adotadas para tais gráficos são geralmente determinadas de forma que o gráfico tenha uma capacidade de detecção aproximadamente "igual" à do gráfico de Shewhart com limites de 3 sigma.

**4.4 GRÁFICOS DE CONTROLE POR ATRIBUTOS**

Os gráficos de atributos são usados com dados provenientes da inspeção por atributos, onde a inspeção de um produto resulta em categorias como bom/ruim, apertado/frouxo ou número de defeitos por unidade. Os dados se apresentam como: 2% são defeituosos, 4 em cada 10 estão fora do tamanho padrão ou 12 buracos por milha.
Discutiremos dois gráficos de atributos: o Gráfico P e o Gráfico C. O Gráfico P é usado para controlar e minimizar a proporção de defeituosos em um processo, e o Gráfico C é usado para controlar e minimizar o número de defeitos por unidade produzida em um processo. Os detalhes sobre onde eles são usados e como os limites são calculados são explicados a seguir. Algumas pequenas variações do Gráfico P e do Gráfico C também estão incluídas aqui.

**4.4.1 O GRÁFICO P**
O Gráfico P também é conhecido como gráfico de "fração de defeituosos" ou "fração de não conformes", pois é usado para monitorar e controlar a fração de defeituosos ou não conformes produzidos em um processo. Os termos "defeituoso" e "não conforme" precisam ser explicados.

FIGURA 4.10 Gráfico de sequências para glicose em jejum de um paciente diabético.

***

**221 Qualidade na Produção — Controle de Processo I**

O termo "defeituoso" foi o nome original usado na literatura de CEP (Controle Estatístico de Processo) para uma unidade de um produto que não atendia aos requisitos especificados, e por isso o Gráfico p, usado para controlar a proporção de defeituosos em um processo, era conhecido como "gráfico de fração de defeituosos". O termo "não conforme" passou a ser usado na literatura no lugar do termo "defeituoso" por volta de 1980, quando processos judiciais e indenizações de responsabilidade civil se tornaram mais comuns. Acreditava-se que o termo "defeituoso" transmitia uma conotação negativa, como se tal unidade fosse insegura ou perigosa para o uso. Portanto, o termo "não conforme", que simplesmente significa que a unidade em questão não atende à especificação escolhida, tornou-se o termo aceito. Usamos o termo "defeituoso" aqui para facilitar a leitura, mas ele é empregado com o mesmo significado de "não conforme".

O Gráfico p é tipicamente usado em processos de produção contínuos e de larga escala, onde há a chance de alguns itens defeituosos serem produzidos, mas a proporção de defeituosos no resultado deve ser monitorada e reduzida a um mínimo — até mesmo a níveis zero. O Gráfico p geralmente requer um tamanho de amostra grande ($n > 20$). O método consiste em coletar uma amostra de tamanho $n$ em intervalos de tempo regulares, inspecionar as amostras e contar o número de unidades defeituosas em cada uma. Então, se $D_i$ é o número de defeituosos na i-ésima amostra, a proporção de defeituosos na i-ésima amostra é calculada como $p_i = D_i / n$ e plotada no gráfico. Os limites de controle são calculados usando as seguintes fórmulas:

$LSC_p = \bar{p} + 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$
$LC_p = \bar{p}$
$LIC_p = \bar{p} - 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$

O $\bar{p}$ nas fórmulas é a proporção média de defeituosos em cerca de 25 amostras, e $n$ é o tamanho da amostra (o número de unidades em cada amostra). Deve-se notar que se o valor do LIC resultar em um número negativo, ele deve ser arredondado para 0. Também deve-se notar que são necessárias cerca de 25 amostras do processo para calcular os limites e começar a usar o Gráfico p.

Para deixar o significado das notações claro:
*   $p$ é a proporção (desconhecida) de defeituosos na população que queremos controlar;
*   $P$ é a estatística que representa a proporção de defeituosos em uma amostra e é usada como estimador para $p$;
*   $p_i$ é a proporção de defeituosos ou o valor da estatística $P$ na i-ésima amostra; e
*   $\bar{p} = \sum_{i=1}^{k} p_i / k$ é a média dos valores de $p_i$, onde $k$ é o número de amostras coletadas, geralmente cerca de 25.

O gráfico recebe o nome da estatística sendo plotada. Neste caso, a estatística plotada é $P$ (em maiúscula), e o gráfico é chamado de Gráfico p. (Esta será a convenção que usaremos na nomenclatura dos gráficos, embora existam muitas outras convenções criadas por diferentes autores.)

A dedução das fórmulas acima para os limites é dada no Capítulo 5. Por enquanto, no entanto, queremos apenas reconhecer que $P$, a proporção de defeituosos em uma amostra, está relacionada a $D$, o número de defeituosos na amostra, que é uma variável aleatória binomial. Os limites para $P$ são calculados como limites de 3 sigmas, onde "sigma" representa o desvio padrão da estatística $P$, $\sigma_P$.

**222 Um Primeiro Curso em Engenharia da Qualidade**
**FIGURA 4.11** (a) Um exemplo de um Gráfico p. (b) Gráfico p após remover os valores de $p$ fora do limite.

**Exemplo 4.5**
O processo era um torno automático produzindo parafusos para madeira. Amostras de 50 parafusos foram coletadas a cada meia hora, e os parafusos foram medidos quanto ao comprimento, diâmetro da cabeça e posição da fenda, sendo também verificados visualmente quanto ao acabamento. O número de rejeitados em cada amostra por qualquer um desses motivos foi registrado na tabela da Figura 4.11a. Prepare um gráfico de controle para monitorar a proporção de defeituosos no processo.

**Solução**
A proporção de defeituosos nas amostras é calculada como os $p_i$. Por exemplo, a proporção de defeituosos na Amostra 5 é 3/50 = 0,06, e na Amostra 14 é 1/50 = 0,02.
A média dos $p_i$, o $\bar{p}$, é calculada como 0,027. Os limites são calculados conforme abaixo:
*[Fórmulas de continuação do exemplo omitidas no texto original]*

***

**223 Qualidade na Produção — Controle de Processos I**

LSC_p = $0,027 + 3 \times \sqrt{\frac{0,027 \times 0,973}{50}} = 0,096$
LC_p = $0,027$
LIC_p = $0,027 - 3 \times \sqrt{\frac{0,027 \times 0,973}{50}} = -0,042 \rightarrow 0$

Note que o denominador dentro do sinal da raiz no cálculo dos limites é inserido como 50, sendo este o tamanho da amostra ou o número de unidades em cada amostra. Note também que, quando o LIC é obtido como um número negativo, ele é arredondado para zero. Os valores de $p_i$ são mostrados plotados na Figura 4.11a em relação aos limites. O gráfico mostra que o processo não está sob controle. Uma ação é necessária para determinar por que os valores de $p_i$ ficaram fora dos limites. O motivo foi que vários valores altos de $p_i$ caíram acima do LSC no início do processo porque a máquina estava passando por uma preparação (*setup*). Quando o *setup* foi concluído, os valores de $p_i$ se estabilizaram em um nível mais baixo.

Quando as causas para os valores fora dos limites são conhecidas e há a garantia de que essas causas não ocorrerão novamente, os valores de $p_i$ fora dos limites são removidos dos dados, e novos limites são calculados. Os valores de $p_i$ das Amostras 3, 4 e 6 são removidos, e os novos limites são calculados a partir dos 22 subgrupos restantes da seguinte forma:

$p$ = $0,36 / 22 = 0,016$
LSC_p = $0,016 + 3 \times \sqrt{\frac{0,016 \times 0,984}{50}} = 0,069$
LC_p = $0,016$
LIC_p = $0,016 - 3 \times \sqrt{\frac{0,016 \times 0,984}{50}} = -0,037 \rightarrow 0$

Novamente, quando o LIC é obtido como uma quantidade negativa, ele é arredondado para 0. Agora, vemos que todos os valores de $p_i$ restantes caem dentro dos novos limites, os quais podem ser usados para continuar a controlar o processo. O Gráfico P (*P-chart*) com os novos limites, desenhado usando o Minitab, é mostrado na Figura 4.11b.

**4.4.2 O GRÁFICO C (*C-CHART*)**

O Gráfico C é usado quando a qualidade de um produto é avaliada contando o número de falhas, defeitos ou não conformidades em unidades de um produto. Por exemplo, o número de microfuros pode ser contado para determinar a qualidade de folhas de vidro, ou o número de bolhas de gás pode ser contado para determinar a qualidade de peças fundidas. Nesses casos, um certo número de não conformidades pode ser tolerável, mas o número deve ser monitorado, controlado e minimizado. O Gráfico C seria a ferramenta apropriada para esse propósito. O Gráfico C também é conhecido como "gráfico de defeitos por unidade" ou "gráfico de controle para não conformidades". O termo *não conformidade* é apenas um termo politicamente correto para *defeito*. Um defeito pode não tornar um produto defeituoso (refugo). Pode ser necessário haver vários defeitos para tornar um produto defeituoso.

O procedimento consiste em selecionar uma unidade amostral do processo em intervalos regulares e contar o número de defeitos nela. Essas contagens por unidade (amostra) são os valores observados da estatística C, a variável aleatória que representa o número de defeitos em uma unidade. O valor de C na $i$-ésima amostra é denotado como $c_i$. Após inspecionar cerca de 25 unidades amostrais, a média dos valores de $c_i$ é calculada como $\bar{c} = \sum c_i / k$, onde $k$ é o número de unidades a partir de... *(texto cortado no original)*.

**224 Um Primeiro Curso em Engenharia da Qualidade**

...para os quais a média é calculada, o que geralmente é igual a cerca de 25. Os limites para o gráfico de controle são calculados usando as seguintes fórmulas:

*   $UCL_C = \bar{c} + 3\sqrt{\bar{c}}$
*   $CL_C = \bar{c}$
*   $LCL_C = \bar{c} - 3\sqrt{\bar{c}}$

Para explicar as notações:
*   $c$ é o número médio de defeitos por unidade na população, o qual queremos controlar;
*   $C$ é a estatística que representa o número de defeitos em uma unidade amostral, usada como o estimador para $c$;
*   $c_i$ é um valor observado da estatística $C$ em qualquer unidade amostral; e
*   $\bar{c}$ (c-barra) é a média dos valores $c_i$ observados.

O gráfico (ou carta) leva o nome da estatística que é plotada. O leitor pode reconhecer $C$ como a variável de Poisson, e os limites são calculados como limites 3-sigma, onde "sigma" representa o desvio padrão da estatística $C$, $\sigma_C$. Os detalhes da derivação das fórmulas para os limites são apresentados no Capítulo 5. O exemplo a seguir mostra como o gráfico é usado para controlar um processo de produção.

**Exemplo 4.6**
O processo envolvia uma prensa de laminação que aplicava laminação plástica a folhas de arte impressas, as quais eram posteriormente cortadas e finalizadas em um produto semelhante a um cartão de crédito. O número de defeitos — como bolhas, rasgos ou arranhões (*chicken scratches*) — nas folhas laminadas deve ser controlado contando a sua quantidade por folha amostral.

**Solução**
Um Gráfico C (Carta C) é usado para controlar os defeitos por folha. Os dados obtidos de 25 folhas amostrais são mostrados na Figura 4.12a. A figura também mostra o cálculo dos limites de controle e a plotagem dos valores observados de $C$. Os limites são calculados da seguinte forma:

*   $\bar{c} = 14,1$
*   $UCL_C = 14,1 + 3\sqrt{14,1} = 25,4$
*   $CL_C = 14,1$
*   $LCL_C = 14,1 - 3\sqrt{14,1} = 2,8$

Neste caso, o LCL (Limite Inferior de Controle) resultou em um valor $> 0$. Se o LCL resultasse em um valor negativo, ele deveria ser arredondado para $0$ — assim como fizemos com o Gráfico P.

O gráfico mostra que o processo não está sob controle. O ponto correspondente à Amostra 20 está fora do UCL (Limite Superior de Controle). Como em outros gráficos, é possível remover dos dados os pontos fora dos limites e recalcular os limites para uso futuro, após certificar-se de que as causas responsáveis por esses valores discrepantes foram corrigidas. Neste caso, o processo poderia sair de controle por diversos motivos, como perda de fornecimento de vapor para as placas da prensa, remoção da folha de arte da prensa cedo ou tarde demais, e assim por diante. Assumindo que a causa para a Amostra 20 foi identificada e corrigida, o ponto é removido e novos limites são calculados da seguinte forma: 

O novo $\bar{c}$ é 13,5, e os novos limites são:
*   $UCL_C = 13,5 + 3\sqrt{13,5} = 24,52$
*   $CL_C = 13,5$
*   $LCL_C = 13,5 - 3\sqrt{13,5} = 2,48$

A Amostra 15 agora é vista fora do limite. Assumindo que sua causa seja encontrada e corrigida, este valor também é removido. O novo $\bar{c}$ será 13,0, e os novos limites serão (calculados na sequência).

**225 Qualidade na Produção — Controle de Processos I**
FIGURA 4.12 (a) Exemplo de um Gráfico C. (b) Gráfico C com limites revisados.

**226 Um Primeiro Curso em Engenharia da Qualidade**

$UCL_C = 13,0 + 3\sqrt{13,0} = 23,81$ (Limite Superior de Controle)
$CL_C = 13,0$ (Linha Central)
$LCL_C = 13,0 - 3\sqrt{13,0} = 2,18$ (Limite Inferior de Controle)

Os valores $c_i$ restantes estão todos dentro desses limites, e esses limites podem ser usados para a próxima etapa de controle. O gráfico com os limites revisados, desenhado utilizando o Minitab, é mostrado na Figura 4.12b.

Como mencionado anteriormente, este método de recalcular os limites de controle para o futuro usando os dados "restantes" é um procedimento aceito porque a alternativa — coletar um conjunto totalmente novo de amostras para recalcular os limites — é cara e demorada. No entanto, quando o processo está severamente fora de controle e diversas causas assinaláveis (causas especiais) são descobertas e removidas, o primeiro conjunto de dados pode não ter relevância para o processo futuro. Nesse caso, um novo conjunto de dados deve ser coletado a partir do "novo" processo, e novos limites devem ser calculados a partir deles para uso futuro. Observadores experientes afirmam que, se mais de 50% dos dados originais tiverem que ser descartados por serem provenientes de causas assinaláveis, então é aconselhável coletar um novo conjunto de dados do novo processo. Isso pode ser usado como uma regra prática para todos os gráficos de controle.

Retornando ao Exemplo 4.6, os defeitos nas chapas laminadas poderiam ser causados por diversos fatores, embora a temperatura das placas e a pressão aplicada fossem consideradas os parâmetros mais importantes. O uso do Gráfico C (C-chart) permitiu a descoberta de algumas condições anormais que resultaram em pontos plotados fora dos limites. Ele também evidenciou a necessidade de investigações adicionais porque o número médio de arranhões, 13 por chapa, era muito alto, mesmo após o processo estar sob controle. Este é um exemplo onde o processo está sob controle, mas não é aceitável. Uma coisa a ser lembrada: **Um processo sob controle não significa que ele seja aceitável.** Significa apenas que o processo é consistente; ele pode ser consistentemente bom ou consistentemente ruim. Se for ruim, trabalho adicional se faz necessário.

Um experimento foi conduzido para descobrir a pressão e a temperatura ideais da prensa a serem usadas no processo de laminação. Um especialista em tecnologia de plásticos foi trazido para ajudar na investigação. A análise de regressão (veja o Capítulo 8) foi usada para encontrar a melhor combinação de temperatura e pressão. A aplicação dos parâmetros ideais melhorou consideravelmente o processo. Este é um exemplo onde o gráfico de controle, isoladamente, não foi suficiente para melhorar o processo. Ele teve que ser complementado por experimentação adicional para descobrir as causas-raiz, bem como descobrir e implementar as melhores soluções possíveis.

**Exemplo 4.7**
Como outro exemplo do uso do Gráfico C, utilizamos os dados de um estudo de caso de Carey e Lloyd (2001) em seu livro *Measuring Quality Improvement in Healthcare* (Medindo a Melhoria da Qualidade na Saúde). Os dados representam o número de quedas de pacientes internados em um hospital por mês. O hospital desejaria monitorar o número de quedas e reduzi-las. Os dados são apresentados na Tabela 4.4.

O hospital havia introduzido um programa de prevenção de quedas no início do nono mês e, portanto, os dados subsequentes ao nono mês representam os dados após a implementação do programa de prevenção de quedas. O hospital desejaria saber se o programa de prevenção de quedas realmente resultou em uma melhoria. (Os dados na tabela foram extraídos da figura fornecida no estudo de caso, pois o estudo de caso não fornece o número exato de quedas, nem o número de pacientes em cada mês).

**227 Qualidade na Produção — Controle de Processos I**

**Solução**
Assumindo que há aproximadamente um número igual de pacientes internados em cada um dos meses sob estudo, a oportunidade de ocorrência de quedas em cada mês pode ser considerada a mesma. Portanto, um **Gráfico C** (C-chart) seria apropriado para uso. (Se o número de pacientes internados variasse consideravelmente de mês para mês, então um gráfico U teria sido o mais adequado). Primeiro, analisamos os dados da mesma forma que os autores Carey e Lloyd o fizeram. Calculamos os limites de controle a partir dos nove pontos de dados dos meses 1 a 9, com o objetivo de verificar se a estratégia de prevenção de quedas implementada após o 9º mês teve algum efeito na redução das quedas. A Figura 4.13a é o gráfico C elaborado para os dados utilizando o software Minitab.

A Figura 4.13a mostra que o processo não está sob controle estatístico, pois dois pontos, os Pontos 11 e 23, estão abaixo do Limite Inferior de Controle (LIC). Isso pode ser interpretado como uma diminuição no número médio de quedas após a implementação do programa de prevenção. Além disso, observe a sequência (*run*) abaixo da linha central a partir do 10º mês, o que pode ser considerado uma evidência da mudança no número de quedas após o nono mês. De fato, a média de quedas por mês, calculada a partir dos dados, após o nono mês é de 37,87, em comparação com a média de 51,33 antes do nono mês.

Pode surgir um questionamento em relação ao cálculo dos limites de controle com apenas nove observações de valores C. Normalmente, gostaríamos de ter pelo menos 25 observações para calcular esses limites. Poderia se argumentar que esta é a realidade prática; tudo o que temos são nove meses de dados e os cálculos devem ser feitos com a informação disponível. Essa falta de dados suficientes para calcular os limites torna-se preocupante quando tiramos conclusões importantes a partir do gráfico. Neste exemplo, há evidências tão conclusivas baseadas na longa sequência abaixo da linha central após o nono mês que a hipótese de que o programa de prevenção de quedas fez a diferença é aceitável. No entanto, é aconselhável ater-se às regras estatísticas estabelecidas ao analisar dados, para que as conclusões sejam aceitas sem questionamentos. (Isso é especialmente verdadeiro ao lidar com situações marginais onde a evidência não fornece conclusões óbvias). 

Assim, redesenhamos o gráfico de controle com os limites sendo calculados utilizando todos os 24 pontos de dados. A Figura 4.13b mostra esse gráfico. Descobrimos que esse gráfico também mostra que o processo não está sob controle porque um dos valores, o primeiro valor, está fora do Limite Superior de Controle (LSC). Ele mostra que o valor C médio no(s) mês(es) inicial(is) esteve acima da média dos meses subsequentes. No mínimo, isso confirma a conclusão que tiramos com o gráfico anterior. Precisávamos dessa confirmação porque o cálculo dos limites do primeiro gráfico baseou-se em um pequeno número de pontos amostrais.

**TABELA 4.4**
**Número de Quedas de Pacientes Internados por Mês em um Hospital**

| Mês | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº de quedas** | 64 | 42 | 49 | 59 | 42 | 56 | 56 | 36 | 58 | 34 |

| Mês | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº de quedas** | 29 | 37 | 51 | 46 | 42 | 35 | 47 | 38 | 46 | 30 |

| Mês | 21 | 22 | 23 | 24 |
| :--- | :--- | :--- | :--- |
| **Nº de quedas** | 34 | 38 | 27 | 34 |

**228 Um Primeiro Curso em Engenharia da Qualidade**

**4.4.3 ALGUNS GRÁFICOS DE CONTROLE POR ATRIBUTOS ESPECIAIS**
**4.4.3.1 O Gráfico p com Tamanhos de Amostra Variáveis**

A discussão anterior sobre o gráfico *p* presumiu que amostras de tamanho *n* poderiam ser extraídas repetidamente do processo a ser controlado e que o número de unidades defeituosas em cada uma das amostras de tamanho igual poderia ser contado. Isso pode ser verdade em muitas situações. No entanto, existem situações em que amostras do mesmo tamanho podem não estar disponíveis sempre que quisermos coletar uma amostra. Por exemplo, em uma situação na fabricação de caixas de ferramentas, todas as caixas produzidas em um dia constituíam a amostra diária para um gráfico *p* usado para controlar itens defeituosos devido à mão de obra deficiente. O número de caixas produzidas variava de dia para dia, assim como o tamanho da amostra de uma coleta para outra; portanto, era necessário um gráfico *p* que pudesse acomodar tamanhos de amostra variáveis.

FIGURA 4.13 (a) Gráfico *c* para quedas de pacientes internados em um hospital — limites baseados em dados anteriores à melhoria. (b) Gráfico *c* para quedas de pacientes internados em um hospital — limites baseados em todos os dados.

**229 Qualidade na Produção — Controle de Processo I**

O tamanho da amostra *n* é usado no cálculo dos limites de controle. Quando o tamanho da amostra é diferente de uma coleta para outra, surge a questão sobre qual tamanho de amostra deve ser usado nas fórmulas para calcular os limites.

Uma maneira recomendada na literatura para lidar com os tamanhos variáveis de amostras é usar um valor médio para *n*, digamos, um $\bar{n}$ (*n* médio), se o tamanho da amostra não variar muito — ou seja, se o maior e o menor não variarem em mais de 25% da média. Essa regra não se baseia em nenhum raciocínio matemático, mas é considerada aceitável para fins práticos.

Uma abordagem mais exata seria calcular os limites para a *i*-ésima amostra, $LSC_i(p)$ e $LIC_i(p)$ [*Limites Superior e Inferior de Controle*], usando o tamanho específico $n_i$ daquela amostra e, em seguida, comparar o $p_i$ observado com os limites assim calculados. O gráfico *p* assumirá, então, o aspecto mostrado na Figura 4.14a. Esses limites são chamados de limites em "degraus" (ou escalonados) devido à sua aparência visual. Esse procedimento pode envolver um pouco mais de cálculo aritmético, mas não deve ser um problema quando programas de computador e calculadoras realizam as operações.

Ainda assim, outra abordagem é um meio-termo entre as duas descritas acima. Nela, os limites para o gráfico são calculados usando um $\bar{n}$, o que resulta em limites constantes para todas as amostras. Se algum valor de $p_i$ cair perto de qualquer um dos limites, então os limites para aquela amostra em específico serão calculados usando seu tamanho exato e comparados com o valor de $p_i$. Isso contribui para a rápida elaboração do gráfico, ao mesmo tempo em que permite esclarecimentos em casos duvidosos.

FIGURA 4.14 (a) Exemplo de um gráfico *p* com tamanhos de amostra variáveis. (b) Um gráfico *p* para a proporção de cesarianas em relação ao total de partos em um hospital.

**230 | Um Primeiro Curso em Engenharia da Qualidade**

Os dois exemplos a seguir mostram como o gráfico *p* (Gráfico de Proporção) com limites variáveis pode ser usado em situações onde o tamanho da amostra muda de uma amostra para a outra. O primeiro exemplo refere-se ao controle diário de peças fundidas defeituosas produzidas em uma linha de fundição, onde a produção diária de peças muda de dia para dia. O segundo exemplo refere-se ao monitoramento e possível controle da proporção de cesarianas realizadas em relação a todos os partos feitos em um mês em um departamento de obstetrícia e ginecologia (OBG) de um hospital — o número de partos por mês varia de mês a mês.

**Exemplo 4.8a**
A Tabela 4.5 mostra os dados da produção diária de peças fundidas em uma fundição por um período de 35 dias e o número de peças encontradas a cada dia com o defeito de *burn-in* (sinterização/inclusão de areia). Construa um gráfico *p* para a proporção de peças fundidas com defeitos de *burn-in* e faça qualquer observação que seja perceptível a partir do gráfico.

**Solução**
Os limites de controle são calculados para cada amostra com base no tamanho daquela amostra específica, utilizando as seguintes fórmulas (Nota: na literatura brasileira, UCL e LCL são frequentemente traduzidos como LSC - Limite Superior de Controle e LIC - Limite Inferior de Controle):

*   $LSC_p = \bar{p} + 3 \sqrt{\frac{\bar{p}(1-\bar{p})}{n_i}}$
*   $LC_p = \bar{p}$
*   $LIC_p = \bar{p} - 3 \sqrt{\frac{\bar{p}(1-\bar{p})}{n_i}}$

**TABELA 4.5: Dados sobre o Tamanho da Amostra e Número de Peças Fundidas Defeituosas**

| Nº Amostra | $n$ | Nº Defeitos | $p_i$ | | Nº Amostra | $n$ | Nº Defeitos | $p_i$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 26 | 1 | 0,038 | | 18 | 150 | 112 | 0,747 |
| 2 | 177 | 54 | 0,305 | | 19 | 88 | 69 | 0,784 |
| 3 | 128 | 43 | 0,336 | | 20 | 305 | 137 | 0,449 |
| 4 | 150 | 63 | 0,420 | | 21 | 147 | 61 | 0,415 |
| 5 | 230 | 67 | 0,291 | | 22 | 167 | 73 | 0,437 |
| 6 | 236 | 73 | 0,309 | | 23 | 159 | 101 | 0,635 |
| 7 | 204 | 69 | 0,338 | | 24 | 266 | 126 | 0,474 |
| 8 | 143 | 49 | 0,343 | | 25 | 93 | 46 | 0,495 |
| 9 | 171 | 42 | 0,246 | | 26 | 190 | 94 | 0,495 |
| 10 | 136 | 44 | 0,324 | | 27 | 128 | 85 | 0,664 |
| 11 | 276 | 100 | 0,362 | | 28 | 259 | 135 | 0,521 |
| 12 | 156 | 47 | 0,301 | | 29 | 127 | 43 | 0,339 |
| 13 | 234 | 98 | 0,419 | | 30 | 158 | 51 | 0,323 |
| 14 | 108 | 43 | 0,398 | | 31 | 164 | 70 | 0,427 |
| 15 | 85 | 36 | 0,424 | | 32 | 170 | 74 | 0,435 |
| 16 | 55 | 29 | 0,527 | | 33 | 140 | 80 | 0,571 |
| 17 | 158 | 104 | 0,658 | | 34 | 94 | 51 | 0,543 |
| | | | | | 35 | 151 | 84 | 0,556 |
*(Proporção média: $\bar{p} = 0,436$)*

**231 | Qualidade na Produção — Controle de Processo I**

onde $n_i$ é o tamanho da *i-ésima* amostra e $\bar{p}$ é a proporção média de defeituosos em todas as 35 amostras. Por exemplo, para a 17ª amostra:
*   $LSC_p = 0,436 + 3 \sqrt{\frac{0,436(0,564)}{158}} = 0,554$
*   $LIC_p = 0,436 - 3 \sqrt{\frac{0,436(0,564)}{158}} = 0,318$

Portanto, o valor observado desta amostra de $p_i = 0,658$ está fora dos limites.

Como outro exemplo, para a 35ª amostra:
*   $LSC_p = 0,436 + 3 \sqrt{\frac{0,436(0,564)}{151}} = 0,557$
*   $LIC_p = 0,436 - 3 \sqrt{\frac{0,436(0,564)}{151}} = 0,315$

O valor observado de $p_i = 0,556$ está dentro dos limites.

Suponha que queiramos calcular limites de controle constantes com base em um tamanho médio de amostra, $\bar{n} = 161$; os limites seriam:
*   $LSC_p = 0,436 + 3 \sqrt{\frac{0,436(0,564)}{161}} = 0,553$
*   $LIC_p = 0,436 - 3 \sqrt{\frac{0,436(0,564)}{161}} = 0,319$

O gráfico *p* com tamanhos de amostras variáveis plotado usando o software Minitab é mostrado na Figura 4.14a. Os limites de controle constantes baseados no tamanho médio da amostra também são exibidos na figura. Neste caso, vemos que os limites de controle constantes mostram o mesmo número de pontos fora dos limites que os limites variáveis. O processo não está sob controle; há um aumento repentino na taxa de defeituosos após a 15ª amostra. A taxa de defeitos também apresentou uma tendência de alta mesmo antes da 15ª amostra. Portanto, é necessária uma investigação mais aprofundada para encontrar as causas que criam essa tendência nos defeitos e que resultam em pontos fora dos limites.

**Exemplo 4.8b**
Como outro exemplo do uso de um gráfico *p*, discutiremos um caso da área da saúde. Estes dados vêm de um estudo de caso relatado por Carey e Lloyd (2001) em seu livro sobre melhoria da qualidade na saúde. A Tabela 4.6 contém dados sobre o número de partos por cesariana e o número total de partos em um hospital durante 26 meses. O hospital queria monitorar a proporção de cesarianas em relação ao total de partos e, possivelmente, reduzir essa proporção. Pode haver inúmeras razões para fazer isso, como o fato de o número de desfechos negativos nos partos crescer com o aumento da proporção de cesarianas, ou o custo das cesarianas ser maior do que o dos partos normais, ou ainda o fato de as agências de acreditação hospitalar incentivarem os hospitais a evitar cesarianas preveníveis.

*232 Um Primeiro Curso em Engenharia da Qualidade*

**TABELA 4.6**
**Dados Mensais sobre o Número de Partos e o Número de Cesarianas entre eles em um Hospital**
| Mês | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Cesarianas | 65 | 64 | 77 | 59 | 64 | 74 | 72 | 67 | 59 | 65 | 60 | 68 | 62 |
| Total de partos | 370 | 383 | 446 | 454 | 463 | 431 | 443 | 451 | 433 | 407 | 381 | 406 | 374 |

| Mês | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Cesarianas | 48 | 57 | 64 | 66 | 55 | 51 | 82 | 65 | 69 | 62 | 66 | 58 | 47 | 59 |
| Total de partos | 355 | 393 | 417 | 434 | 421 | 417 | 444 | 429 | 411 | 386 | 357 | 373 | 370 | 415 |

**Solução**
Um Gráfico P (*P-chart*) foi elaborado para a proporção de cesarianas utilizando o software Minitab, com o tamanho da amostra variando de mês para mês. A Figura 4.14b mostra o Gráfico P traçado para os dados. O gráfico evidencia que o processo está sob controle, com uma média de 15,41%. Essa média pode ser comparada com um *benchmark* (referência), uma média nacional, a média regional de hospitais semelhantes, ou com uma meta estabelecida pelo próprio hospital.

Essa média de 15,41% pode ser aceitável para o hospital, ou talvez não. Se o hospital desejar reduzir essa média ainda mais, os dados podem ser analisados utilizando outras bases de subagrupamento. Por exemplo, o subagrupamento poderia ser baseado nos médicos que realizam os partos, sob a teoria de que certos médicos podem ter uma preferência maior por cesarianas do que outros. Ou os dados podem ser analisados usando subgrupos baseados na idade das mães, sob a premissa de que mães em uma determinada faixa etária podem ter uma preferência maior por cesarianas. Os dados também podem ser analisados com base na classe econômica à qual as mães pertencem, e assim por diante. Tal análise revelaria algumas causas-raiz responsáveis por manter as taxas de cesarianas elevadas e poderia levar a possíveis soluções, resultando em proporções reduzidas de cesarianas. O gráfico de controle é, portanto, uma excelente ferramenta não apenas para monitorar uma medida de desempenho de um hospital, mas também para análise de causa-raiz e melhoria contínua.

**4.4.3.2 O Gráfico nP**
Para o Gráfico P, a estatística *P*, proporção de defeituosos (ou itens não conformes) em uma amostra, é calculada como *P = D/n*, onde *D* é o número de defeituosos em uma amostra de tamanho *n*. Se *P = D/n*, então *nP = D*. Em vez de plotar *P*, suponha que plotemos *nP*, que é simplesmente o número de defeituosos encontrados em uma amostra; dessa forma, obtemos o Gráfico nP. Os limites de controle devem então ser calculados para a estatística *nP*. A maneira mais fácil de calcular os limites para *nP* é primeiro calcular os limites para o Gráfico P correspondente, usando as fórmulas apresentadas anteriormente, e então multiplicar os limites pelo tamanho da amostra *n*. As seguintes fórmulas também podem ser usadas para calcular os limites, as quais foram obtidas multiplicando-se por *n* as fórmulas dos limites do Gráfico P:

* LSC (Limite Superior de Controle) = *np + 3√(np(1 - p))*
* LC (Linha Central) = *np*
* LIC (Limite Inferior de Controle) = *np - 3√(np(1 - p))*

O gráfico com os limites calculados conforme mostrado acima é chamado de Gráfico nP. (Eles poderiam tê-lo chamado de "Gráfico D", de Gráfico de Defeitos!). Os resultados do uso de um Gráfico nP serão os... *(o texto original é interrompido aqui)*.

**233 Qualidade na Produção — Controle de Processos I**

...o mesmo que a partir do gráfico P. Por exemplo, os dois gráficos com os dois conjuntos de limites a seguir produzirão o mesmo resultado. Com o da esquerda, a fração de defeituosos, *pi*, será plotada, e com o da direita, o número de defeituosos, *npi*, será plotado.

**Gráfico P (*n* = 50)** | **Gráfico nP (*n* = 50)**
--- | ---
LSC(P) = 0,07 | LSC(nP) = 3,5
LC(P) = 0,016 | LC(nP) = 0,80
LIC(P) = 0,0 | LIC(nP) = 0,0

A vantagem de usar o gráfico nP pode ser facilmente percebida. Primeiro, não há necessidade de calcular *pi* para cada amostra. Segundo, a maioria das pessoas prefere lidar com o número de itens defeituosos, que é expresso em números inteiros, em vez da fração de defeituosos, que é expressa em frações decimais. É claro que este gráfico não pode ser usado se *n* não permanecer constante.

**4.4.3.3 O Gráfico de Porcentagem de Defeituosos (Gráfico 100P)**
Se, em vez de multiplicar os limites do gráfico P por *n*, eles forem multiplicados por 100, então os limites para a porcentagem de defeituosos são obtidos. Por exemplo, os gráficos com os dois conjuntos de limites a seguir são equivalentes. Enquanto os valores de *pi* serão plotados no gráfico com os limites à esquerda, 100*pi* (porcentagem de defeituosos) serão plotados no gráfico com os limites à direita.

**Gráfico P** | **Gráfico 100P**
--- | ---
LSC(P) = 0,07 | LSC(100P) = 7,0
LC(P) = 0,016 | LC(100P) = 1,6
LIC(P) = 0,0 | LIC(100P) = 0,0

A vantagem de usar o gráfico 100P, ou gráfico de porcentagem de defeituosos, é que os números plotados serão grandes em comparação com as pequenas frações encontradas ao usar o gráfico P. As pessoas gostam de lidar com números maiores e tendem a compreender o significado da porcentagem de defeituosos mais facilmente do que o da fração de defeituosos.

**4.4.3.4 O Gráfico U**
O gráfico U é uma variação do gráfico C. O gráfico C, descrito anteriormente, só pode ser usado se todas as unidades inspecionadas para o gráfico forem idênticas — ou seja, a oportunidade de ocorrer um defeito é a mesma de unidade para unidade. Existem diversas situações em que uma estação de inspeção recebe unidades que são semelhantes, mas não idênticas, como aparelhos de televisão de tamanhos diferentes, carros de modelos diferentes ou circuitos impressos de configurações diferentes. Quando unidades de tamanhos diferentes estão sendo inspecionadas e um único gráfico é usado para monitorar todos os diferentes tipos de unidades que chegam à estação de inspeção, o gráfico U é necessário. A estatística U representa o número médio de defeitos por unidade (padrão).

Quando o tamanho das unidades varia de uma para outra, definimos um tamanho como sendo uma unidade padrão e, em seguida, determinamos o número de unidades padrão em cada um dos outros tamanhos. Isso é feito comparando as oportunidades de defeito em qualquer unidade com aquelas presentes na unidade padrão (veja o exemplo abaixo). Em seguida, calculamos o número médio de defeitos por unidade padrão em cada unidade da amostra. Essa quantidade é designada como U. Os limites para U são calculados usando as seguintes fórmulas:

**234 Um Primeiro Curso em Engenharia da Qualidade**

As fórmulas para os limites do Gráfico U são:
*   $LSC_u = \bar{u} + 3\sqrt{\frac{\bar{u}}{n_i}}$
*   $LC_u = \bar{u}$
*   $LIC_u = \bar{u} - 3\sqrt{\frac{\bar{u}}{n_i}}$

Onde $\bar{u}$ é a média dos valores de $u$ das unidades da amostra e $n_i$ é o número de unidades padrão em cada unidade de amostragem. Como $n$ varia de amostra para amostra, os limites precisam ser calculados para cada unidade de amostragem. O valor de $u_i$ (o valor observado de $U$) de cada amostra deve ser comparado com seus limites correspondentes. Temos então a mesma situação que no caso do Gráfico P com tamanhos de amostra variáveis (ou seja, o gráfico com limites em degraus / formato de escada). Como alternativa, uma média dos valores de $n$ pode ser calculada como $\bar{n}$ e usada no denominador dentro do sinal do radical (raiz quadrada) nas fórmulas acima, resultando em um conjunto constante de limites. O exemplo abaixo ilustra o uso do Gráfico U.

**Exemplo 4.9**
Em uma fundição que produz blocos de motor, um soldador de recuperação preenche orifícios de gás (bolhas) nas peças fundidas se esses orifícios não afetarem a resistência estrutural das peças. No entanto, o número de orifícios preenchidos por peça fundida deve ser rastreado, e qualquer ocorrência incomum, como um aumento ou diminuição repentina no número de orifícios (ou seja, quando o processo não está sob controle), deve ser relatada ao supervisor da linha de moldagem. É necessário um gráfico de controle para monitorar e, possivelmente, controlar o número de orifícios nas peças fundidas. Os dados sobre o tamanho das unidades de amostragem (peças fundidas) e o número de orifícios encontrados nelas são apresentados na Tabela 4.7 para 20 peças fundidas.

**Solução**
Como as peças fundidas têm tamanhos diferentes, usaremos um Gráfico U. O bloco I-4 (4 cilindros em linha) é escolhido como a unidade padrão. Os números de unidades padrão em outros blocos foram determinados com base em suas áreas de superfície (oportunidades para defeitos) em comparação com a área de superfície da unidade padrão (conforme anotado na Tabela). O cálculo de $u_i$ para cada unidade de amostragem também é mostrado na tabela. Por exemplo, para a amostra nº 5, há nove orifícios na peça fundida (um motor V6), estimada como equivalente a 1,5 unidades padrão. Logo, o número médio de orifícios por unidade padrão para esta amostra é = $9 / 1,5 = 6$.

*   Média global de defeitos ($\bar{u}$) = $\frac{\sum c_i}{\sum n_i} = \frac{143}{32,7} = 4,373$
*   Tamanho médio da amostra ($\bar{n}$) = $\frac{\sum n_i}{k} = \frac{32,7}{20} = 1,635$

O gráfico gerado usando o Minitab é mostrado na Figura 4.15. O gráfico exibe os limites calculados individualmente para cada amostra. Por exemplo, os limites são calculados para a 8ª amostra ($n_8 = 1,0$) da seguinte forma:

*   $LSC_u = 4,373 + 3\sqrt{\frac{4,373}{1,0}} = 10,646$
*   $LC_u = 4,373$
*   $LIC_u = 4,373 - 3\sqrt{\frac{4,373}{1,0}} = -1,90$

O valor negativo para o LIC (Limite Inferior de Controle) é arredondado para zero. O valor observado $u_8 = 11$ está fora do limite superior. Como outro exemplo, os limites para a 20ª amostra ($n_{20} = 2,0$) são:

*   $LSC_u = 4,373 + 3\sqrt{\frac{4,373}{2,0}} = 8,809$
*   $LIC_u = 4,373 - 3\sqrt{\frac{4,373}{2,0}} \approx 0$

O valor observado $u_{20} = 4,5$ está dentro dos limites.

Os limites utilizando o tamanho médio da amostra ($\bar{n}$) são calculados como:
*   $LSC_u = 4,373 + 3\sqrt{\frac{4,373}{1,635}} = 9,279$
*   $LIC_u = 4,373 - 3\sqrt{\frac{4,373}{1,635}} = 0,53 \to 0$

O limite de controle usando $\bar{n}$ foi adicionado ao gráfico na Figura 4.15. Neste caso, vemos que os limites de controle constantes e os limites de controle variáveis produzem o mesmo resultado prático; ou seja, se um valor de $u$ está dentro/fora do limite variável, ele também está dentro/fora do limite constante.

**TABELA 4.7 - Dados sobre Orifícios Recuperados em Peças Fundidas**

| Nº da Amostra | Tipo de Peça | Nº de Unidades Padrão ($n_i$) | Nº de Orifícios ($c_i$) | Nº de Orifícios por Unidade Padrão ($u_i = c_i/n_i$) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | V6 | 1,5 | 4 | 2,7 |
| 2 | I-4 | 1,0 | 6 | 6,0 |
| 3 | I-4 | 1,0 | 3 | 3,0 |
| 4 | I-6 | 1,4 | 7 | 5,0 |
| 5 | V6 | 1,5 | 9 | 6,0 |
| 6 | V8 | 2,0 | 13 | 6,5 |
| 7 | V6 | 1,5 | 10 | 6,7 |
| 8 | I-4 | 1,0 | 11 | 11,0 |
| 9 | I-6 | 1,4 | 10 | 7,1 |
| 10 | V8 | 2,0 | 9 | 4,5 |
| 11 | V12 | 3,0 | 7 | 2,3 |
| 12 | V6 | 1,5 | 4 | 2,7 |
| 13 | I-4 | 1,0 | 5 | 5,0 |
| 14 | V8 | 2,0 | 7 | 3,5 |
| 15 | I-6 | 1,4 | 3 | 2,1 |
| 16 | I-4 | 1,0 | 5 | 5,0 |
| 17 | V8 | 2,0 | 8 | 4,0 |
| 18 | V12 | 3,0 | 9 | 3,0 |
| 19 | V6 | 1,5 | 4 | 2,7 |
| 20 | V8 | 2,0 | 9 | 4,5 |
| **Total** | | **$\sum n_i = 32,7$** | **$\sum c_i = 143$** | |

**236 Um Primeiro Curso em Engenharia da Qualidade**

**4.4.4 ALGUMAS NOTAS SOBRE OS GRÁFICOS DE CONTROLE POR ATRIBUTOS**

**4.4.4.1 Significado do LIC (Limite Inferior de Controle) no Gráfico P ou Gráfico C**
O LIC não tem o mesmo significado no gráfico P ou no gráfico C que tem no gráfico X (Gráfico de Médias). Se um valor de X cair abaixo do LIC de um gráfico X, isso significaria que a média do processo está se movendo para baixo, abaixo do nível padrão desejado. Por outro lado, quando um valor *ci* em um gráfico C cai abaixo do LIC, isso indica que a média de defeitos por unidade diminuiu. 

Devemos ainda nos preocupar com o fato de o processo não estar sob controle? Podemos não nos preocupar, mas devemos estar alertas ao fato de que o processo mudou; talvez a mudança seja para melhor. No entanto, devemos ter cuidado redobrado em tais situações para garantir que os valores abaixo do limite inferior não sejam causados por um instrumento defeituoso ou por um inspetor cometendo erros. Além disso, se o recálculo dos limites for justificado em razão de vários valores caírem abaixo do LIC, nós não removemos os valores abaixo do limite inferior no gráfico C ou no gráfico P, pois eles podem refletir a nova realidade do processo. Frequentemente, os valores abaixo do LIC ficarão dentro do limite quando estes forem recalculados após a remoção daqueles que estão fora do limite superior, o LSC.

**4.4.4.2 Gráfico P para Muitas Características**
Uma das vantagens do gráfico P é que um único gráfico pode ser usado para monitorar várias características do produto. Por exemplo, se estivermos inspecionando parafusos, podemos usar um gráfico para diversas características, como diâmetro, comprimento, tamanho da cabeça e limpeza do parafuso. O produto será considerado defeituoso se qualquer uma das características estiver fora dos limites aceitáveis. Muitas vezes, pode ser uma boa ideia começar usando um gráfico P para várias características, a fim de identificar a(s) característica(s) que causa(m) mais problemas e, em seguida, usar um gráfico P ou gráfico X para aquelas características que precisam de um acompanhamento mais rigoroso.

**4.4.4.3 Uso de Sequências (Runs)**
As regras que foram utilizadas em relação ao gráfico X referentes a sequências (*runs*) também podem ser usadas com o gráfico P e o gráfico C. As regras de sequência são especialmente úteis quando a média de P ou C está diminuindo e não há LIC (ou seja, LIC = 0). Nessas circunstâncias, é apenas por meio das sequências que as mudanças na média P ou C podem ser notadas.

**FIGURA 4.15** Exemplo de um gráfico U para o número de furos por peça fundida.

**237 Qualidade na Produção — Controle de Processo I**

**4.4.4.4 Subagrupamento Racional**
Assim como nos gráficos X e R, o subagrupamento adequado é fundamental para extrair o máximo do gráfico P e do gráfico C. O subagrupamento deve ser feito de modo que os sinais do gráfico levem à descoberta de causas assinaláveis (causas especiais) quando estas estiverem presentes. O estudo de caso a seguir mostra o valor de um subagrupamento criativo quando um processo está sendo controlado e melhorado usando um gráfico P.

**Estudo de Caso 4.3**
Este exemplo (de Krishnamoorthi, 1989) refere-se à montagem de certos chicotes de cabos especiais. A operação de montagem incluía a soldagem de conectores nas extremidades dos cabos, o que exigia um esforço visual considerável. Portanto, a qualidade final de um chicote dependia do montador individual. A linha de montagem estava apresentando uma grande quantidade de rejeições na inspeção final, e um consultor de qualidade foi acionado para ajudar.

Havia 14 montadores que trabalhavam em um turno por dia. A primeira coisa que o consultor fez foi considerar a produção de cada dia como uma amostra e traçar o gráfico P com os dados diários de itens defeituosos coletados ao longo de um mês. A Figura 4.16a mostra os dados plotados no gráfico P com base nas amostras diárias. O processo estava sob controle estatístico, com uma taxa média de rejeição de 11,5% — um exemplo claro de um processo sob controle, mas com um desempenho totalmente inaceitável. O fato de o processo estar sob controle significava apenas que o processo de montagem estava produzindo consistentemente a mesma proporção de defeituosos dia após dia. Essa é a situação típica em que a base do subagrupamento deve ser alterada para verificar se outra forma de agrupamento revelaria as causas assinaláveis.

Os dados foram então coletados de forma que cada amostra representasse a produção de um mês de cada montador individual, e um gráfico P para os cabos foi elaborado usando o "montador" como base para o subagrupamento. A Figura 4.16b mostra esse gráfico P.

A causa do problema tornou-se óbvia. O Montador 4 e o Montador 12 divergiam drasticamente dos demais. Após investigações mais aprofundadas, descobriu-se que ambos os montadores tinham uma visão muito ruim e precisavam de óculos corretivos. Para tratar de forma definitiva essa causa assinalável, a empresa ofereceu exames oftalmológicos gratuitos e óculos para todos os montadores, e vários deles obtiveram novas prescrições e óculos.

Os resultados dessas ações foram impressionantes. O gráfico P para o período subsequente à implementação das melhorias é mostrado na Figura 4.16c. A Linha Central (LC) e os limites de controle foram revisados quando a média do processo se tornou acentuadamente menor. A média da proporção (P) para o terceiro mês após o início da investigação passou a ser de 0,85%. O percentual de defeituosos caiu de 11,5% para 0,85%, uma realização extraordinária impulsionada pelo uso do gráfico de controle.

No entanto, a base do subagrupamento retornou para a "produção diária" após constatar-se que o gráfico com subgrupos por montadores estava sob controle. Quando os subgrupos por montador mostraram o processo sob controle, isso significou que não havia mais diferenças significativas entre os funcionários. Além disso, o gráfico diário demandava menos trabalho na coleta de dados.

Duas lições devem ser destacadas a partir do estudo de caso acima. A primeira é sobre como a mudança na base de subagrupamento ajudou a descobrir a causa assinalável. A segunda é sobre como uma causa assinalável foi tratada até ser completamente eliminada. A empresa não parou após melhorar a visão dos dois montadores que tinham problemas oftalmológicos graves; ela ajudou a melhorar a visão de todos os montadores até que a acuidade visual não fosse mais um motivo para a produção de chicotes defeituosos.

**238 Um Primeiro Curso em Engenharia da Qualidade**

**4.5 RESUMO SOBRE GRÁFICOS DE CONTROLE**
A discussão até agora limitou-se aos gráficos $\bar{X}$ e R, P e C, e a algumas pequenas variações destes. Estas são as ferramentas básicas de controle de processo mais úteis na indústria porque são aplicáveis a muitas situações. A Tabela 4.8 resume as informações sobre esses três tipos básicos. A tabela mostra onde esses gráficos são usados, as fórmulas para calcular os limites, as premissas envolvidas e o tamanho recomendado da amostra.

Alguns gráficos de controle mais sofisticados estão disponíveis na literatura, sendo úteis sob algumas circunstâncias especiais. O gráfico de soma acumulada (CUSUM) é usado quando é necessária uma maior sensibilidade para descobrir pequenas mudanças. O gráfico de média móvel ponderada exponencialmente (EWMA) também é útil na detecção de pequenas mudanças. Além disso, o gráfico EWMA e o gráfico de média móvel são preferidos quando múltiplas unidades não estão disponíveis em rápida sucessão e, portanto, os gráficos $\bar{X}$ e R não podem ser usados. Sabe-se que o gráfico de medianas tem um bom desempenho com populações que não são normalmente distribuídas. Detalhes sobre esses gráficos podem ser encontrados em livros didáticos de controle estatístico da qualidade, como Montgomery (2013) e Grant e Leavenworth (1996).

**FIGURA 4.16** (a) Gráfico de controle para fração de defeituosos na montagem de cabos - subgrupos baseados em dias. (b) Gráfico de controle para fração de defeituosos na montagem de cabos - subgrupos baseados em montadores. (c) Gráfico de controle para fração de defeituosos - subgrupos baseados em dias.

**239 Qualidade na Produção — Controle de Processo I**

Alguns desses gráficos especiais, com detalhes sobre quando e como são usados, juntamente com seus pontos fortes e fracos, serão abordados no próximo capítulo, Capítulo 5. O próximo capítulo também inclui uma discussão sobre a base teórica das fórmulas usadas para calcular os limites de controle para os vários gráficos que discutimos neste capítulo. Os métodos para avaliar o desempenho dos gráficos usando curvas características de operação (Curvas CO) também estão incluídos no Capítulo 5. As partes restantes deste capítulo tratam de três tópicos importantes relacionados ao controle de processos: implementação do CEP (Controle Estatístico de Processo) nos processos, capacidade do processo e análise do sistema de medição (MSA).

**4.5.1 IMPLEMENTANDO O CEP NOS PROCESSOS**
Discutimos aqui como começar a implementar um programa de CEP em uma fábrica ou organização. Se um engenheiro se encontrar em uma organização que atualmente não utiliza métodos de CEP, a discussão a seguir o ajudará a começar. Se o engenheiro estiver em uma organização que já utiliza esses métodos, a discussão deverá capacitá-lo a usá-los de forma mais eficaz.

**TABELA 4.8**
**Resumo dos Três Gráficos de Controle Básicos**

| Parâmetro | Gráficos $\bar{X}$ e R | Gráfico P | Gráfico C |
| :--- | :--- | :--- | :--- |
| **Onde se aplica** | Para controlar a média e a variabilidade de uma medição. | Para controlar a fração de defeituosos em um processo. | Para controlar defeitos por unidade, por comprimento, por área, etc. |
| **Também conhecido como** | Gráficos de controle por variáveis. | Gráfico de controle de fração de não conformes (defeituosos). | Gráfico de controle de defeitos por unidade. |
| **Baseado na premissa** | Distribuição Normal para a medição sob controle. | Distribuição Binomial para o número de defeituosos em uma amostra. | Distribuição de Poisson para o número de defeitos em uma unidade. |
| **Tamanho usual da amostra** | $n = 4$ ou $5$ | Usar $n \ge 20$ | Uma unidade. (Ajustar o tamanho da unidade para obter LIC > 0). |
| **Fórmulas para os limites** *(adaptado para o padrão)* | **Média:** <br>$LSC_{\bar{X}} = \bar{\bar{X}} + A_2\bar{R}$<br>$LC_{\bar{X}} = \bar{\bar{X}}$<br>$LIC_{\bar{X}} = \bar{\bar{X}} - A_2\bar{R}$<br><br>**Amplitude:** <br>$LSC_R = D_4\bar{R}$<br>$LC_R = \bar{R}$<br>$LIC_R = D_3\bar{R}$ | $LSC_P = \bar{p} + 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$<br><br>$LC_P = \bar{p}$<br><br>$LIC_P = \bar{p} - 3\sqrt{\frac{\bar{p}(1-\bar{p})}{n}}$ | $LSC_C = \bar{c} + 3\sqrt{\bar{c}}$<br><br>$LC_C = \bar{c}$<br><br>$LIC_C = \bar{c} - 3\sqrt{\bar{c}}$ |
| **Variações do gráfico** | Gráficos $\bar{X}$ e S quando $n > 10$. | Gráfico *np* ou Gráfico *100p* para plotar números maiores; Gráfico P com limites variáveis se $n$ mudar. | Gráfico U quando o tamanho da unidade de amostra sofre variações. |

**240 Um Primeiro Curso em Engenharia da Qualidade**

A primeira pergunta a ser respondida é por onde começar. O esforço de implementação deve iniciar com a organização de uma equipe a ser chamada de "Equipe da Qualidade", "Equipe de Melhoria da Qualidade", "Equipe de Controle de Processos" ou outro nome semelhante. A equipe deve ser formada por todas as funções capazes de contribuir para a melhoria dos processos em uma organização, como manufatura, projeto de produto, qualidade, manutenção e relações com o cliente. A equipe também deve incluir representantes dos operadores que trabalham no processo assim que o processo a ser melhorado for identificado. Se alguma reclamação foi recebida de um cliente, se existe uma taxa excessiva de rejeição interna em um processo, ou se uma falha considerável do produto em campo está causando pagamentos excessivos de garantia, então esses seriam os lugares óbvios para começar a usar os métodos de CEP (Controle Estatístico de Processo). Se houver várias oportunidades desse tipo, é necessária alguma priorização.

O critério de priorização depende das circunstâncias individuais. Uma linha de produtos que está causando sérios danos a um cliente valioso pode ser a primeira a ser abordada, ou pode ser a linha de produtos que está causando o maior dano econômico ao produtor em termos de rejeições internas. O primeiro projeto para uma equipe ou para uma organização deve ser viável, passível de conclusão em tempo hábil e ter um retorno financeiro significativo. Tal escolha, quando bem-sucedida, proporcionaria certa confiança à equipe de melhoria e ajudaria a estabelecer a credibilidade do processo de melhoria dentro da organização.

É um fato bem estabelecido que coletar dados sobre uma característica do produto ou uma variável do processo e, em seguida, traçar um gráfico de controle adequado é a melhor maneira de começar a adquirir conhecimento sobre como um processo funciona. Em qualquer processo, existem vários parâmetros de processo, como temperatura, pressão, umidade, teor de carbono e quantidade de catalisador a ser adicionada, por um lado, e características do produto, como resistência, dureza, acabamento e quantidade de rendimento, por outro. É necessário conhecer a relação entre essas variáveis e descobrir a combinação dos níveis das variáveis do processo que produzem as características do produto nos níveis desejados.

Analistas experientes diriam que o primeiro conjunto de gráficos de controle para qualquer processo deve ser feito manualmente usando papel, lápis e uma prancheta. Tablets portáteis podem ser úteis, mas o uso de qualquer software automatizado com algoritmos não é aconselhável nesta fase. Há muito a ser aprendido quando o analista observa o processo em primeira mão, vê como as observações são geradas e como os instrumentos respondem às condições do processo. Há também informações valiosas a serem obtidas ao interagir com o pessoal de operação e trabalhar com os dados em sua forma bruta.

A próxima pergunta seria qual variável rastrear. Se uma característica do produto está causando problemas a um cliente, então essa característica deve ser monitorada. Se houver várias características que precisam de atenção, uma lista priorizada deve ser gerada, talvez com base no tempo de retorno (*payback*) ou outros critérios que façam sentido do ponto de vista econômico. As variáveis do processo que são responsáveis pela característica em questão devem, então, ser identificadas. Um diagrama de causa e efeito, elaborado pela equipe em uma sessão de *brainstorming*, pode ser tudo o que é necessário para identificar a(s) variável(is) causadora(s). No entanto, um experimento pode ser necessário se a relação entre a característica e as variáveis do processo não for óbvia ou precisar ser confirmada. Uma vez que as variáveis do processo sejam identificadas como responsáveis pela qualidade do produto, elas devem ser controladas usando os gráficos de controle apropriados.

A próxima pergunta seria: que tipo de gráfico deve ser usado? Se a característica do produto ou a variável do processo a ser monitorada ou controlada for uma medição (e espera-se que siga... *[o texto é interrompido aqui]*

**241 Qualidade na Produção — Controle de Processos I**

...uma distribuição normal,) a combinação de gráficos $\bar{X}$ e R (Média e Amplitude) seria a escolha mais adequada, desde que amostras apropriadas de tamanho entre 2 e 10 estejam disponíveis. Se o tamanho da amostra tiver que ser grande (>10), seja por uma necessidade prática ou porque o poder estatístico extra de uma amostra grande é necessário, então a combinação de gráficos $\bar{X}$ e S (Média e Desvio Padrão) deve ser usada. Se múltiplas unidades não estiverem disponíveis para formar amostras porque as observações demoram a chegar, então um gráfico como o de medidas individuais (gráfico X), o gráfico de média móvel ou o gráfico EWMA (Média Móvel Exponencialmente Ponderada) seria a escolha ideal. (Esses gráficos para processos lentos são discutidos no Capítulo 5).

Um gráfico de controle deve revelar se o processo está sob controle, ou seja, se o processo está se comportando de forma consistente. Se o processo não estiver sob controle, esforços devem ser feitos para investigar as causas assinaláveis (causas especiais) e eliminá-las. Relacionar o que acontece no processo e ao seu redor — seja por meio do uso de registros de eventos, consultas aos operadores ou observação minuciosa do processo — aos sinais que aparecem nos gráficos de controle geralmente deve levar à descoberta das causas assinaláveis. Um conhecimento profundo do processo, incluindo sua física, química e tecnologia, é útil e muitas vezes necessário na busca por causas assinaláveis. É nesse momento que o conhecimento dos operadores ou engenheiros de processo se torna mais valioso. Padrões nas plotagens dos gráficos de controle, como tendências e ciclos, também fornecem pistas sobre as fontes das causas assinaláveis.

Quando uma causa assinalável é identificada, medidas devem ser tomadas para eliminá-la completamente; em outras palavras, as soluções aplicadas devem garantir que a causa assinalável não afete o processo novamente. Além disso, devemos ter em mente que as causas assinaláveis vêm e vão, e a ausência de indicação delas no gráfico de controle por um curto período não deve iludir o analista a acreditar que o processo está sob controle. Um processo não deve ser declarado "sob controle" até que o gráfico indique a inexistência de causas assinaláveis por um período prolongado. Uma regra prática usada por muitos profissionais (originalmente proposta pelo Dr. Shewhart) é que um gráfico de controle deve mostrar a ausência de causas assinaláveis por pelo menos 25 amostras consecutivas antes que o processo seja considerado sob controle. Frequentemente, um processo pode precisar ser testado por períodos ainda mais longos antes de receber essa declaração.

A eliminação do primeiro conjunto de causas assinaláveis deve resultar na redução da variabilidade. Isso exige a revisão dos limites de controle, o que, por sua vez, pode revelar a existência de mais causas assinaláveis. As iterações de eliminar causas, estabelecer novos limites e descobrir/eliminar novas causas assinaláveis devem continuar até que o processo mostre estabilidade em relação a um conjunto de limites de controle, indicando que nenhuma outra causa assinalável pode ser eliminada de forma viável (economicamente). Muito provavelmente, quando o processo for colocado sob controle dessa maneira, a variabilidade será pequena o suficiente para atender integralmente às especificações do cliente. A capacidade do processo é então avaliada usando os índices de capacidade Cp e/ou Cpk. (Veja a próxima seção para a definição desses índices).

Se a capacidade não for adequada de acordo com os requisitos do cliente ou os padrões internos da organização, experimentos devem ser conduzidos para explorar as variáveis do processo e seus níveis, a fim de produzir a característica do produto desejada dentro dos limites de variabilidade almejados. Os experimentos podem ter que ser repetidos, e soluções aplicadas, até que a redução desejada na variabilidade seja alcançada. Quando a meta de capacidade for atingida, a equipe deve voltar sua atenção para o próximo projeto na lista de prioridades. No entanto, a equipe deve garantir que o processo que acabou de ser melhorado seja monitorado periodicamente para assegurar... *(nota: o texto original termina incompleto).*

"A equipe deve, então, direcionar sua atenção para o próximo projeto da lista de prioridades. Contudo, a equipe deve assegurar que o processo recém-aprimorado seja monitorado periodicamente, a fim de garantir a manutenção dos ganhos e evitar retrocessos aos modos de operação anteriores. Isso teria sido mais fácil se a equipe houvesse se comunicado com os proprietários do processo e..."

**[Pág.] 242 Um Primeiro Curso em Engenharia da Qualidade**

...operadores e obteve a cooperação deles no processo de descoberta e mudança. A menos que o pessoal de operação compre a ideia das soluções para a remoção das causas atribuíveis, tais soluções terão pouca chance de permanecerem implementadas no processo. Esse aspecto da melhoria de processos nunca é demais enfatizar, pois os processos e os operadores de processos têm a tendência de voltar aos seus velhos hábitos com mais frequência do que um analista iniciante esperaria.

Se a característica do produto a ser controlada for do tipo atributo, um dos gráficos de controle por atributos — o Gráfico p, o Gráfico c ou uma de suas variações — será apropriado para uso. A melhor maneira de diferenciar a situação em que um Gráfico p é necessário daquela em que um Gráfico c é exigido é fazer a seguinte pergunta: a oportunidade de ocorrência de um defeito ou de um item defeituoso é infinita (muito grande)? Se a oportunidade for infinita, então o atributo em questão segue a distribuição de Poisson, logo, um Gráfico c é apropriado. Se a oportunidade de ocorrência do defeito ou do item defeituoso não for grande, então a ocorrência do atributo é regida pela distribuição binomial, portanto, um Gráfico p deve ser usado. Novamente, as causas atribuíveis devem ser descobertas e eliminadas se o processo não estiver sob controle. Como mencionado, a descoberta de uma causa atribuível requer um bom entendimento do processo e do seu entorno, bem como um estudo relacional dos sinais do gráfico de controle e dos acontecimentos no processo. Isso exige um conhecimento profundo sobre o funcionamento do processo, combinado com a habilidade de interpretar os sinais estatísticos provenientes dos gráficos.

É bem possível que, quando as causas atribuíveis forem encontradas e eliminadas, o processo alcance níveis de itens defeituosos que não excedam as exigências do cliente ou as próprias metas da organização.

Queremos enfatizar um ponto aqui: o valor desses gráficos de atributos não reside tanto em colocar um processo sob controle (embora esse seja um primeiro passo necessário), mas sim em usá-los para identificar e eliminar continuamente as causas atribuíveis, até que a proporção de defeituosos ou o número médio de defeitos por unidade seja reduzido a níveis muito baixos, próximos a zero.

As capacidades dos processos que produzem saídas de atributos são medidas em termos de defeituosos por mil unidades ou defeitos por mil oportunidades. Quando um nível muito alto de qualidade é exigido, as capacidades são medidas em termos de defeitos por milhão de unidades ou defeitos por milhão de oportunidades (DPMO). A capacidade também pode ser medida em número de sigmas, de acordo com a escala da Motorola, tendo o Seis Sigma como referência (veja o Capítulo 5, Tabela 5.10). Se a capacidade for inadequada, experimentos devem ser conduzidos para investigar os fatores (variáveis do processo) responsáveis pelo atributo e descobrir os fatores importantes e seus níveis ótimos para trazer o atributo a um nível aceitável. Quando a capacidade atingir o nível desejado, a equipe deve passar para o próximo projeto na lista de prioridades. A Figura 4.17 resume o procedimento para a implementação dos métodos de CEP (Controle Estatístico de Processo) em um ambiente de produção.

Após a conclusão dos projetos de alta prioridade, um levantamento em toda a organização deve ser conduzido para identificar os processos-chave — e as variáveis-chave nesses processos — que determinam a qualidade e a satisfação do cliente em relação aos produtos fabricados pela empresa. Por meio da coleta de dados sobre as variáveis-chave e do cálculo dos índices de capacidade Cp e Cpk (discutidos na próxima seção), a variabilidade nas variáveis-chave e, consequentemente, a capacidade dos processos-chave na organização, podem ser estabelecidas e monitoradas. Evidentemente, quando se descobre que uma variável-chave não está sob controle, um esforço inicial deve ser feito para colocar o processo sob controle no que diz respeito a essa variável.

A informatização da coleta de dados, da análise de dados e da apresentação de resumos...

"...colocar o processo sob controle em relação àquela variável. A informatização da coleta de dados, da análise de dados e da apresentação de informações consolidadas auxiliaria grandemente o esforço de registrar as capacidades dos processos-chave. As informações consolidadas sobre as capacidades dos processos importantes fornecerão uma perspectiva sobre a capacidade de qualidade de toda a organização. Às vezes, um Cp ou Cpk médio, calculado a partir de médias..."

**243 Qualidade na Produção — Controle de Processos I**

sobre todos os processos-chave, ou a proporção dos processos-chave com capacidade *Cp* ou *Cpk* igual ou superior a 2,0, é usada como uma medida geral da capacidade de uma organização. Tais medidas podem ser usadas para monitorar o progresso feito pela organização em direção à melhoria da qualidade. Processos com capacidades inadequadas devem ser identificados e priorizados. A variabilidade nos processos deve ser continuamente reduzida, e as capacidades devem ser continuamente melhoradas por meio de experimentos repetidos, o que melhorará a qualidade do produto e a satisfação do cliente.

*FIGURA 4.17 Um esquema para a implementação do CEP (Controle Estatístico de Processo).*

**244 Um Primeiro Curso em Engenharia da Qualidade**

Nota: Quando mencionamos que experimentos são necessários, isso nem sempre significa que é preciso um experimento multifatorial, fatorial ou fatorial fracionado. Experimentos simples com dois níveis de um único fator frequentemente podem revelar informações muito necessárias.

**4.6 CAPACIDADE DO PROCESSO**

Como mencionado anteriormente, um processo que está sob controle pode ou não ser totalmente capaz de produzir produtos que atendam às especificações do cliente. Uma análise é necessária para verificar se o processo sob controle também está em conformidade com as especificações. Um processo que produz "todas" as unidades de sua saída dentro das especificações é considerado um processo capaz. 

Para avaliar a capacidade, o processo, representado por uma distribuição, é comparado com as especificações que se espera que ele atenda. Se "todo" o processo não estiver dentro das especificações (sabemos que um processo normalmente distribuído nunca terá 100% de suas unidades dentro de quaisquer limites dados; essa é a razão para usar o termo "todo" entre aspas), ajustes no processo devem ser feitos a fim de trazê-lo à sua capacidade total. Tal análise é chamada de "análise de capacidade do processo". É necessário enfatizar novamente aqui um ponto abordado anteriormente: **um processo deve ser colocado sob controle primeiro antes que sua capacidade seja avaliada**, pois não se pode esperar que um processo fora de controle se comporte de maneira previsível e, portanto, sua capacidade não pode ser prevista.

**4.6.1 CAPACIDADE DE UM PROCESSO COM SAÍDA MENSURÁVEL**

Quando um processo produz uma saída mensurável que se pode assumir ter uma distribuição normal, a condição do processo pode ser totalmente descrita por duas medidas: sua média ($\mu$) e seu desvio padrão ($\sigma$). O $\mu$ e o $\sigma$ podem ser estimados a partir de dados obtidos de uma amostra aleatória ($n \ge 50$) ou de dados provenientes de cartas de controle. 

Se for da primeira fonte (amostra aleatória), a média amostral ($\bar{X}$) e o desvio padrão amostral ($S$) estimarão $\mu$ e $\sigma$, respectivamente. Se for da segunda fonte (cartas de controle), então $\bar{\bar{X}}$, a Linha Central (LC) da carta $\bar{X}$, estimará $\mu$; e $\bar{R}/d_2$ estimará $\sigma$, onde $\bar{R}$ é a LC da carta $R$, e $d_2$ é o fator de correção que torna $\bar{R}$ um estimador não viciado (não tendencioso) para $\sigma$. Se a carta $S$ for usada em vez da carta $R$, então $\bar{S}/c_4$ fornecerá uma estimativa para $\sigma$. Valores de $d_2$ e $c_4$ para vários tamanhos de amostra estão disponíveis em tabelas padrão (como a Tabela A.4 no Apêndice). A informação sobre como os parâmetros do processo $\mu$ e $\sigma$ são estimados está resumida abaixo:

| Fonte de Dados | Estimativa para $\mu$ | Estimativa para $\sigma$ |
| :--- | :--- | :--- |
| **Amostra aleatória ($n \ge 50$)** | $\bar{X}$ | $S$ |
| **Cartas $\bar{X}$ e $R$** | $\bar{\bar{X}}$ (Linha Central da carta $\bar{X}$) | $\bar{R}/d_2$ ($\bar{R}$ é a Linha Central da carta $R$) |
| **Cartas $\bar{X}$ e $S$** | $\bar{\bar{X}}$ (Linha Central da carta $\bar{X}$) | $\bar{S}/c_4$ ($\bar{S}$ é a Linha Central da carta $S$) |

Quando um processo é comparado a um dado conjunto de especificações, várias situações possíveis podem surgir, conforme mostrado na Figura 4.18. Uma avaliação qualitativa sobre se o processo atende ou não às especificações pode ser feita a partir de tal figura. Se o processo não atender totalmente às especificações, podemos observar se é o excesso de variabilidade ou a falta de centralização do processo que está causando valores fora da especificação. No entanto, uma [avaliação] quantitativa... *(texto original cortado)*.

**245 Qualidade na Produção — Controle de Processos I**

A avaliação da medida em que um processo atende à especificação é frequentemente desejada. Por exemplo, podemos querer comparar as capacidades de duas máquinas ou de dois fornecedores, ou podemos querer estabelecer metas em relação à capacidade e monitorar o progresso enquanto fazemos melhorias em um processo. Os índices de capacidade, que fornecem medidas numéricas quantificando a capacidade de um processo, tornam-se então úteis. As duas medidas numéricas mais comumente usadas, chamadas de índices de capacidade do processo, são o $C_p$ e o $C_{pk}$. Eles são descritos a seguir.

**4.6.2 ÍNDICES DE CAPACIDADE $C_p$ E $C_{pk}$**

O índice $C_p$ é definido como:

$C_p = \frac{\text{Variabilidade permitida na especificação}}{\text{Variabilidade presente no processo}} = \frac{LSE - LIE}{6\sigma}$

onde LSE e LIE (do inglês *USL* e *LSL*) são os limites superior e inferior de especificação do cliente, respectivamente, e $\sigma$ é o desvio padrão do processo.

O índice $C_p$ simplesmente compara a variabilidade natural presente no processo, que é dada por $6\sigma$ com base na distribuição normal do processo, com a variabilidade permitida pela especificação, que é dada por $(LSE - LIE)$. Se o valor de $C_p$ for 1,0, o processo está exatamente dentro das especificações, ou seja, a variabilidade do processo é exatamente igual à variabilidade permitida pela especificação. Para ser exato, podemos dizer que 99,73% da saída do processo está dentro da especificação. Se o valor for menor que 1,0, a variabilidade do processo é maior que a variabilidade permitida pelas especificações e, portanto, está produzindo rejeitos; se for maior que 1,0, a variabilidade do processo é menor que a variabilidade permitida nas especificações e, portanto, [o processo é considerado capaz].

**FIGURA 4.18** Avaliação qualitativa da capacidade do processo.

**Um Primeiro Curso em Engenharia da Qualidade (págs. 246-247)**

[...] quase todos os produtos estarão dentro da especificação. Em geral, quanto maior o valor de $C_p$, melhor a capacidade do processo, como mostrado na Figura 4.19.

Conforme definido anteriormente, o $C_p$ é um parâmetro populacional cujo valor exato nunca é conhecido. No entanto, ele pode ser estimado a partir de dados amostrais. O valor de $C_p$ pode ser estimado assim que uma estimativa para o valor de $\sigma$ (desvio padrão) estiver disponível. Assim, podemos escrever: 

$$ \hat{C}_p = \frac{USL - LSL}{6\hat{\sigma}} $$

*(Onde USL é o Limite Superior de Especificação e LSL é o Limite Inferior de Especificação).*

Isso significa que, ao usar uma estimativa de $\sigma$, podemos obter uma estimativa pontual para o $C_p$. Devemos ter em mente que essa estimativa pontual é apenas a observação de uma estatística e está sujeita à variabilidade amostral. Ou seja, se obtivermos estimativas de $C_p$ a partir de diferentes amostras do mesmo processo, todas as estimativas serão diferentes. No entanto, se o tamanho da amostra for grande ( $\ge 100$ ), essa variabilidade pode ser considerada insignificante (ver Krishnamoorthi et al., 2009), e a estimativa pode então ser usada com confiança.

Os clientes geralmente estipulam que o valor (estimado) de $C_p$ deve ser de pelo menos 1,33 para garantir que a variabilidade do processo esteja bem dentro das especificações. Isso leva em consideração o fato de que a maioria dos processos não permanece estática em uma posição central o tempo todo, tendendo a flutuar em torno do alvo. A exigência de que $C_p = 1,33$ visa garantir que as unidades do produto permaneçam dentro das especificações mesmo quando ocorrer alguma (pequena) mudança na média do processo. O requisito de 1,33 também acomoda possíveis erros causados pela variabilidade amostral no valor de $C_p$ calculado a partir dos dados da amostra.

Devemos perceber, contudo, que ao estimar o $C_p$, se o tamanho da amostra for pequeno, a estimativa não será confiável. Portanto, é aconselhável estimar o índice de capacidade a partir de um tamanho de amostra de pelo menos 100, o que equivale a 25 subgrupos de quatro unidades cada, quando um gráfico de controle é utilizado para monitorar o processo. Se uma amostra tão grande não estiver disponível, temos que recorrer a intervalos de confiança para o índice, o que envolve uma matemática um pouco mais complexa, discutida no Capítulo 5.

**Exemplo 4.10**
Calcule o $C_p$ para os dois processos nas Figuras 4.20a e b.

**Solução**
Usando as fórmulas dadas acima:
*   $C_p$ para o processo na Figura 4.20a: $24 / 18 = 1,33$
*   $C_p$ para o processo na Figura 4.20b: $24 / 18 = 1,33$

Ambos os processos têm o mesmo $C_p$, apesar de serem diferentes em termos de suas capacidades. Um produz quase todos os valores dentro das especificações, enquanto o outro produz uma proporção considerável de valores fora das especificações. O índice $C_p$ não conseguiu reconhecer essa diferença.

A partir do exemplo acima, vemos que o índice $C_p$ não é capaz de reconhecer a falta de centralização no processo mostrado na Figura 4.20b; ele avalia apenas a variabilidade do processo em comparação com a variabilidade da especificação. Essa desvantagem do índice $C_p$ é corrigida no próximo índice de capacidade, $C_{pk}$, que é definido como:

$$ C_{pk} = \frac{\text{Distância entre o centro do processo e a especificação mais próxima}}{3\sigma} = \min \left[ \frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma} \right] $$

onde $\mu$ é a média do processo e $\sigma$ é o desvio padrão do processo. Quando $\mu$ e $\sigma$ são estimados por $\bar{X}$ (média amostral) e $S$ (desvio padrão amostral), respectivamente, a partir dos dados do processo, essa fórmula fornecerá uma estimativa para o índice $C_{pk}$.

A Figura 4.21 foi desenhada para ilustrar o significado desse índice. Quando o processo não está centralizado, é provável que um valor do processo exceda a especificação no lado em que o centro do processo está mais próximo da linha de especificação. Assim, ao comparar a distância da especificação mais próxima ao centro do processo com $3\sigma$, o índice avalia se o processo... *(o texto original é interrompido aqui).*

**248 Um Primeiro Curso em Engenharia da Qualidade**

...os valores excedam a especificação no lado em que é mais provável que isso ocorra. Se o valor do $C_{pk}$ for menor que 1,0, o processo está produzindo valores fora da especificação. Quanto maior o valor do $C_{pk}$, melhor será o processo em atender à especificação. Novamente, quando usamos estimativas para a média ($\mu$) e o desvio padrão ($\sigma$) na fórmula acima, obtemos apenas uma estimativa para o $C_{pk}$. Temos que usar amostras grandes ($n \ge 100$) para minimizar a variabilidade de amostragem. Além disso, os clientes geralmente exigem um valor de pelo menos 1,33 para o $C_{pk}$, a fim de cobrir possíveis desvios no centro do processo e possíveis erros de amostragem.

**Exemplo 4.11**
Um processo que foi colocado sob controle usando gráficos de controle possui média $\bar{X} = 41,5$ e desvio padrão estimado $\hat{\sigma} = \bar{R}/d_2 = 0,92$. Se a especificação para o processo exige valores entre 39 e 47, calcule os índices de capacidade $C_p$ e $C_{pk}$ para este processo em sua condição atual.

**Solução**
$$C_p = \frac{47 - 39}{6 \times 0,92} = 1,45$$

$$C_{pk} = \min \left[ \frac{47 - 41,5}{3 \times 0,92} , \frac{41,5 - 39}{3 \times 0,92} \right]$$

$$C_{pk} = \min \left[ \frac{5,5}{3 \times 0,92} , \frac{2,5}{3 \times 0,92} \right]$$

$$C_{pk} = \frac{2,5}{2,76} = 0,91$$

O processo passou no teste do $C_p$ ($\ge 1,33$) devido à sua pequena variabilidade, mas falhou no teste do $C_{pk}$ ($< 1,33$) devido à falta de centralização, conforme mostrado na Figura 4.22.

O $C_{pk}$ é um índice superior para medir a capacidade de um processo porque ele verifica tanto a centralização quanto a variabilidade do processo. Muitas vezes, no entanto, é útil calcular o valor de ambos, $C_p$ e $C_{pk}$, e fazer a comparação, como feito no exemplo acima. Tal comparação revelará a condição do processo no que diz respeito à sua variabilidade, bem como à sua centralização, e ajudará a determinar o que precisa ser feito para melhorar a capacidade do processo.

**Nota:** O $C_{pk}$ é sempre menor ou igual ao $C_p$. O $C_{pk}$ é igual ao $C_p$ quando o processo está centralizado em relação às especificações. O valor de $C_{pk}$ fornecerá resultados errôneos, incluindo valores negativos, se o centro do processo estiver fora dos limites de especificação. Se o valor de $C_{pk}$ for negativo, isso significa que o centro do processo falhou totalmente em atingir as especificações. Esses índices também são usados para...

**FIGURA 4.22** Exemplo de um processo com bom $C_p$, mas $C_{pk}$ ruim.

**249 Qualidade na Produção — Controle de Processos I**
• Acompanhar a capabilidade dos processos ao longo do tempo
• Priorizar os processos para projetos de melhoria
• Certificar os processos do fornecedor

Na discussão anterior sobre índices de capabilidade, abordamos os dois índices básicos, $C_p$ e $C_{pk}$. Estes também são os índices mais populares entre os usuários na indústria. É importante, neste ponto, observar algumas das limitações desses índices. Uma delas refere-se à premissa de normalidade do processo. O $6\sigma$ (seis sigma), por exemplo, no denominador da fórmula do $C_p$ para quantificar a variabilidade total do processo, é válido apenas se o processo seguir a distribuição normal. Quando a suposição de distribuição normal não é válida, segundo estudos e pesquisas, a avaliação da capabilidade de um processo por meio desses índices pode levar a erros graves. Outros métodos são, então, recomendados para essa situação. Outro problema com esses índices é que eles só podem ser usados onde há especificações bilaterais. Embora as especificações bilaterais sejam o tipo mais comum, existem processos sujeitos a especificações unilaterais com requisitos como "quanto maior, melhor" ou "quanto menor, melhor". O $C_p$ e o $C_{pk}$ não são adequados para uso nessas situações.

Ainda outra desvantagem desses índices é a suposição implícita em seu uso de que a perda decorrente de um processo é zero desde que o processo permaneça dentro da especificação, e que as perdas saltam para um nível muito alto e inaceitável assim que o processo começa a cair fora da especificação. Os críticos argumentam que a perda de um processo é zero apenas quando o processo permanece no alvo e, à medida que o centro do processo se desvia do alvo, as perdas aumentam parabolicamente, conforme sugerido pela função de perda de Taguchi (veja a Figura 3.11 no Capítulo 3). Outro índice, o $C_{pm}$, foi proposto como uma melhoria em relação aos dois índices acima em resposta a essa crítica. Algumas dessas questões e as respectivas soluções são discutidas em uma seção sobre capabilidade do processo no Capítulo 5.

Quando uma característica mensurável está sendo controlada por meio de gráficos $\bar{X}$ e $R$ (médias e amplitudes), a capabilidade do processo — ou a capacidade do processo de atender às especificações — não pode ser lida diretamente dos gráficos de controle porque os limites de controle não têm nenhuma relação com as especificações. Isso acontece quando o gráfico é usado para manter o "controle atual". Além disso, a dispersão entre o LSC (Limite Superior de Controle) e o LIC (Limite Inferior de Controle) no gráfico $\bar{X}$ não reflete a dispersão na especificação. Não colocamos linhas de especificação no gráfico $\bar{X}$ porque essas linhas representam limites para a variabilidade de valores individuais e não devem ser comparadas com os valores de $\bar{X}$ (médias). Portanto, os limites de controle traçados no gráfico $\bar{X}$, que representam os limites para a variabilidade dos valores de $\bar{X}$, não têm relação com as especificações. Isso explica por que precisamos de um estudo separado para avaliar a capabilidade de processos de medição (variáveis contínuas). No caso de processos que produzem saídas por atributos, no entanto, as capabilidades podem ser lidas diretamente dos gráficos de controle sem a necessidade de um estudo de capabilidade em separado — conforme discutido abaixo.

**4.6.3 CAPABILIDADE DE UM PROCESSO COM SAÍDA POR ATRIBUTOS**
Quando a saída de um processo é um atributo, os requisitos de capabilidade são especificados em termos do número máximo de defeituosos que será tolerado na saída do processo. Especificações como "não mais que 1% de defeituosos", "não mais que 10 erros por 1.000 oportunidades" ou "não mais que 50 partes por milhão (ppm) de defeituosos" são comumente usadas. Se gráficos de controle por atributos estiverem em uso para controlar um processo, então a capabilidade do processo poderá ser lida diretamente dos gráficos. A LC (Linha Central) do gráfico P fornece a média... *(o texto original é interrompido aqui).*

**250 Um Primeiro Curso em Engenharia da Qualidade**

...a proporção de defeituosos no processo, e a LC [Linha Central] do gráfico C fornece o número médio de defeitos por unidade no processo. Essas quantidades podem ser comparadas com as capacidades exigidas pelo cliente ou com as metas de capacidade estabelecidas pelo produtor.

Vemos que a capacidade de um processo com saída por atributos é medida de forma diferente da capacidade de um processo com saída mensurável. (As medidas Cp e Cpk podem ser usadas apenas com saídas que são medições — não atributos). Essa falta de uma medida única de capacidade que pudesse ser aplicada tanto a saídas mensuráveis quanto a saídas por atributos deu origem à criação de medidas de capacidade em "número de sigmas" pelos estatísticos da Motorola (Motorola Corporation 1992). Eles propuseram medir a capacidade de um processo pela distância na qual as especificações estão localizadas em relação ao centro do processo, medida em número de desvios padrão (σs) do processo. Para processos com saídas mensuráveis, que podem ser assumidos como tendo uma distribuição normal, essa medida pode ser calculada se a média e o desvio padrão forem conhecidos ou puderem ser estimados. Para processos que produzem saídas por atributos, a capacidade é expressa como o número de sigmas de um processo normal que produz a mesma proporção de defeituosos que o processo em questão. Suponha que um processo produza 2% de defeituosos; primeiro, encontraremos o processo normal que produz 2% de defeituosos. Pode ser demonstrado (usando tabelas de distribuição normal) que um processo normal que possui especificações a 2,327σ de ambos os lados da média produz um total de 2% de defeituosos. Portanto, o processo por atributos que produz 2% de defeituosos tem uma capacidade designada de 2,327σ. Assim, esse método fornece uma medida para avaliar a capacidade do processo em serviços, onde a maioria das saídas são atributos, bem como em processos de fabricação, onde a maioria das saídas são medições. Uma discussão mais detalhada sobre como a capacidade do processo é designada usando o número de sigmas, com o 6-sigma como referência, está incluída no Capítulo 5.

**4.7 ANÁLISE DO SISTEMA DE MEDIÇÃO**

A análise do sistema de medição (MSA) é realizada para garantir que instrumentos de medição com capacidade adequada estejam disponíveis para realizar medições nas características do produto e nas variáveis de um determinado processo. O termo "capacidade" neste contexto significa que o instrumento será capaz de medir a variável do processo ou a característica do produto com exatidão e precisão razoáveis. Em palavras mais simples, capacidade refere-se à habilidade do instrumento de medir as características do produto ou as variáveis do processo de forma verdadeira — o mais próximo possível do valor verdadeiro (VV) da medição, com consistência. O termo "sistema de medição" é usado para implicar que, às vezes, um esquema, um sistema incluindo vários instrumentos, aparelhos, operadores e um procedimento, pode ser necessário para gerar uma medição. Usaremos os termos "instrumento", "medidor" (*gage*) e "sistema de medição" como sinônimos. A principal referência para esta seção sobre análise do sistema de medição é o *Measurement System Analysis (MSA) — Reference Manual*, publicado pelas três grandes montadoras de automóveis (Chrysler LLC et al. 1995, 2010). Definições e padrões são baseados nas duas edições deste manual.

**4.7.1 PROPRIEDADES DOS INSTRUMENTOS**
Todo instrumento, seja ele um paquímetro, micrômetro, termômetro ou um esquema de medição para encontrar a porcentagem de chumbo na tinta, produz a medição com certa variabilidade. Suponha, por exemplo, que medimos o diâmetro de um pedaço de giz usando um paquímetro repetidamente; as leituras não serão todas iguais, mesmo que seja o mesmo pedaço de giz medido pelo mesmo paquímetro...

**251 Qualidade na Produção — Controle de Processo I**

pela mesma pessoa. Essa variabilidade nas leituras pode ser descrita usando uma distribuição — geralmente a distribuição normal.

A média da distribuição é então usada como a medida do diâmetro do pedaço de giz fornecida pelo paquímetro. Essa medida fornecida pelo paquímetro pode não ser igual ao valor verdadeiro (VV) do diâmetro. O VV pode ser um valor conhecido ou obtido usando um instrumento de "laboratório" superior, mais exato e mais preciso. A diferença entre a média fornecida pelo paquímetro e o "VV" do diâmetro é chamada de "tendência" (*bias*). Quanto menor a tendência, melhor a "exatidão" (*accuracy*) do instrumento. A exatidão é o oposto da tendência.

A variabilidade nas leituras é quantificada pelo desvio padrão da distribuição das leituras, que é chamado de "desvio padrão do erro" ou simplesmente "erro". A "precisão" (*precision*) do paquímetro é o oposto dessa variabilidade, quantificada pelo desvio padrão do erro. Quanto menor o erro, maior a precisão do instrumento. A Figura 4.23 mostra as definições de tendência e precisão.

Além disso, duas outras propriedades de um instrumento, estabilidade e linearidade, também são utilizadas. "Estabilidade" refere-se a quão consistente a precisão de um instrumento se mantém ao longo do tempo. "Linearidade" refere-se a quão constante a tendência permanece ao longo da faixa de valores possíveis da medição. A Figura 4.24 mostra graficamente a definição de estabilidade e linearidade. Por fim, "resolução" refere-se à menor divisão da unidade que o instrumento foi projetado para medir. Por exemplo, se a menor divisão em uma régua de um pé é 1/16 de polegada, então a resolução da régua é de 1/16 pol.

Assim, as propriedades de um instrumento podem ser listadas como:
1. Exatidão — quão pequena é a tendência.
2. Precisão — quão pequena é a variabilidade nas leituras.

**FIGURA 4.23** Definição de tendência e precisão de instrumentos.

**252 Um Primeiro Curso em Engenharia da Qualidade**

3. Estabilidade — quão consistente é a variabilidade ao longo do tempo.
4. Linearidade — quão consistente é a tendência ao longo da faixa de valores possíveis.
5. Resolução — o menor valor que o instrumento pode ler.

A discussão a seguir explica como essas propriedades de um instrumento são avaliadas e como elas podem ser controladas a fim de fornecer um conjunto confiável de medições para um processo de produção. Uma breve discussão sobre padrões de medição é fornecida antes de passarmos para os métodos de avaliação de instrumentos ou sistemas de medição.

**4.7.2 PADRÕES DE MEDIÇÃO**
As definições padrão para unidades de características de produtos, como comprimento, peso, dureza, cor, e parâmetros de processo, como temperatura, pressão, velocidade e limpeza, são especificadas por organizações de padronização de nações industrializadas. Tais especificações, desenvolvidas e emitidas em coordenação com sua agência coordenadora global chamada Organização Internacional de Normalização (ISO), em Genebra, Suíça, formam as normas nacionais para os países. Essas organizações de padronização — por exemplo, o Instituto Nacional de Padrões e Tecnologia (NIST) dos Estados Unidos, o Instituto Britânico de Padrões (BSI) da Grã-Bretanha e o Instituto Alemão de Normalização (DIN — *Deutsches Institut für Normung*) da Alemanha — mantêm os padrões para unidades como pés, kg ou °C e mantêm a instrumentação padrão para medir essas unidades.

Qualquer instrumento que seja usado no chão de fábrica deve ser comparado com os padrões nacionais do país onde a fábrica está localizada, para que ela possa atestar [sua conformidade].

**FIGURA 4.24** Linearidade e estabilidade de instrumentos.

***

**253 Qualidade na Produção — Controle de Processos I**

...pela exatidão dos instrumentos utilizados por eles e pelas medições obtidas a partir deles. Esse processo de verificação da exatidão dos instrumentos e das leituras obtidas a partir deles é chamado de "calibração" e é feito por meio do uso de uma hierarquia de padrões intermediários.

Portanto, os instrumentos usados no processo de fabricação de produtos devem ser mantidos calibrados em relação aos padrões de nível imediatamente superior, conforme mostrado na Figura 4.25, para manter e certificar sua exatidão. A capacidade de um instrumento estabelecer sua exatidão ou integridade, permanecendo em calibração com o padrão nacional aplicável, mesmo que por meio de uma sequência de padrões intermediários, é chamada de "rastreabilidade".

Referindo-se à Figura 4.25, o padrão primário é aquele que é comparado e calibrado diretamente em relação ao padrão nacional. Os padrões primários normalmente pertencem a organizações de padronização, a outras agências governamentais ou até mesmo a laboratórios privados. Os padrões primários são caros e muito delicados para fins de calibração regular e rotineira. Portanto, um outro conjunto de padrões intermediários — a saber, os padrões secundários — é criado pelos laboratórios e usado para a calibração de rotina. Os padrões primários e secundários são mantidos em instalações com controle ambiental sob a supervisão de especialistas em metrologia. Os padrões de trabalho pertencem às empresas de manufatura e são periodicamente calibrados em relação aos padrões secundários. Esses padrões de trabalho, que também são mantidos em laboratórios com controle ambiental nas instalações de manufatura, são usados para calibrar os instrumentos de chão de fábrica. Em um sistema de qualidade bem mantido, todo instrumento usado nos processos de produção deve ser mantido calibrado de modo a ser rastreável aos padrões nacionais. Esse é o requisito de "rastreabilidade" especificado em normas de sistemas de gestão da qualidade, como a ISO 9000. Tudo isso se baseia na premissa de que instrumentos confiáveis, capazes de medir os valores verdadeiros das variáveis em ambientes de produção, são necessários para fabricar produtos de qualidade.

**4.7.3 AVALIAÇÃO DE UM INSTRUMENTO**  
**4.7.3.1 Propriedades de um Bom Instrumento**

Um bom instrumento deve ter:
1. Boa resolução, adequada para a finalidade à qual o instrumento é utilizado.
2. Viés (tendência) próximo de zero.
3. Variabilidade de medição (muito) menor do que a variabilidade no produto medido.

**FIGURA 4.25** Hierarquia de padrões de instrumentos.

254 Um Primeiro Curso em Engenharia da Qualidade
4. Variabilidade que seja pequena em comparação com a tolerância permitida no produto
5. Estabilidade na precisão
6. Nenhum problema de linearidade
Se o mesmo instrumento for usado para realizar diferentes medições, os requisitos acima devem ser atendidos em relação à medição mais exigente.

**4.7.3.2 Métodos de Avaliação**
Os métodos (ou procedimentos de teste) para avaliar as propriedades de um instrumento mencionadas acima e os padrões para sua aceitabilidade são descritos a seguir. Muitas das recomendações feitas aqui sobre a capacidade do instrumento são aquelas fornecidas pelo Manual de Referência de Análise de Sistemas de Medição (MSA - *Measurement Systems Analysis*) (Chrysler LLC et al. 1995, 2010).

Este manual recomenda que, antes de começar a testar a aceitabilidade de um instrumento, deve-se considerar a questão de se a medição em causa é realmente necessária. Há muitas medições sendo feitas no chão de fábrica que não servem a nenhum propósito útil. Não adianta verificar minuciosamente o instrumento se a medição que ele fornece não é necessária. Uma análise de como os resultados da medição são usados — e sua utilidade na determinação das condições de um processo ou da aceitabilidade de um produto — ajudaria a decidir sobre a necessidade da medição. Além disso, deve ser feita uma avaliação preliminar para saber se o instrumento em questão é afetado pelo ambiente no qual a medição é realizada. Temperatura e umidade ambientes, iluminação e acúmulo de gases e espuma/resíduos são alguns dos fatores conhecidos por afetar os processos de medição. Se for observado que algum desses fatores influencia a medição, então os experimentos para avaliar o instrumento devem ser projetados levando esses fatores em consideração.

Os procedimentos descritos abaixo são genéricos e podem precisar ser modificados para se adequarem a um determinado instrumento e às circunstâncias especiais que possam prevalecer em torno de seu uso. Esses procedimentos devem ser documentados como parte do "programa de calibração de instrumentos" de uma organização. Esses procedimentos são coletivamente chamados de estudo "Gage R&R" (R&R de Dispositivos de Medição), que se refere ao estudo de repetitividade e reprodutibilidade de um instrumento para avaliar sua precisão. Uma vez que a avaliação de sua precisão é a parte principal do estudo de um instrumento, todo o processo de avaliação de um equipamento é frequentemente chamado de "Estudo Gage R&R".

Portanto, o estudo Gage R&R é feito para avaliar as seguintes propriedades de um instrumento:
1. Resolução
2. Tendência (exatidão)
3. Variabilidade (precisão)
   a. Da repetitividade
   b. Da reprodutibilidade
4. Estabilidade
5. Linearidade

A seguir, discutiremos como essas propriedades de um instrumento são avaliadas e como sua aceitabilidade é determinada.

**4.7.3.3 Resolução**
Como afirmado anteriormente, a resolução é a menor divisão da unidade de medida que um instrumento pode ler ou distinguir. Isso também é conhecido como "discriminação". Uma boa resolução é...

**255 Qualidade na Produção — Controle de Processos I**

necessário para descobrir mudanças nas medições quando elas ocorrem, de modo que o requisito de resolução depende de quais mudanças precisam ser detectadas. Em outras palavras, a resolução necessária depende da tarefa onde o instrumento é utilizado.

A melhor maneira de verificar a adequação da resolução de um instrumento em uma dada situação é elaborar os gráficos X e R (Gráficos de Médias e Amplitudes) a partir de medições repetidas feitas pelo instrumento. Como sabemos, o gráfico X rastreia a média, o gráfico R rastreia a variabilidade nas medições realizadas, e os limites de controle representam os limites para a variabilidade natural na respectiva estatística que está sendo plotada.

As Figuras 4.26a e b mostram dois conjuntos de gráficos de controle elaborados a partir de dois conjuntos de leituras feitas no mesmo grupo de unidades amostrais. Os gráficos foram elaborados a partir dos dados coletados sobre o diâmetro de 15 eixos de alumínio medidos por um paquímetro com relógio, registrados na Tabela 4.9 sob o Operador A. Os gráficos de controle na Figura 4.26a são elaborados a partir dos 15 subgrupos de três leituras cada, registrados com uma resolução de 0,001 pol. (polegadas). A Figura 4.26b é feita a partir dos mesmos 15 subgrupos, mas com o último dígito omitido. Quando o último dígito é omitido de cada uma das leituras, isso equivale a realizar essas leituras com um instrumento com uma resolução inferior — uma resolução de 0,01 pol. Assim, esses dois gráficos de controle oferecem um contraste entre leituras feitas por instrumentos com duas resoluções diferentes.

O efeito da diferença na resolução dos dois conjuntos de dados pode ser visto claramente nos gráficos R. A baixa resolução no segundo conjunto de leituras faz com que muitas leituras (as leituras não são mostradas na tabela) se tornem idênticas, causando assim muitos valores zero para R (veja a Figura 4.26b). A falta de resolução adequada também produz menos valores possíveis para R. Existem seis valores possíveis para R quando a resolução é de 0,001 pol.; em contrapartida, existem apenas dois valores possíveis quando a resolução é de 0,01 pol.

Portanto, se o gráfico R traçado a partir do conjunto de dados coletados como no exemplo acima mostrar muitos valores zero e muito poucos valores de R, isso indicaria que a resolução do instrumento atual não é adequada e que um instrumento com melhor resolução é necessário.

**4.7.3.4 Tendência (Viés)**

A tendência (ou viés) de um instrumento é medida realizando medições repetidas em um produto e comparando a média das leituras com o valor "verdadeiro" conhecido da medição. O valor verdadeiro pode ser obtido medindo o produto usando um instrumento de "sala de metrologia" ou "laboratório" (ou seja, um instrumento reconhecidamente de alta precisão e baixo viés). A diferença entre a média das leituras do instrumento avaliado e o valor verdadeiro resulta no viés do instrumento. Se o viés for positivo (+), o instrumento está fornecendo valores maiores que o valor verdadeiro. Se o viés for negativo (-), o instrumento está fornecendo valores menores que o valor verdadeiro. O viés também é, por vezes, expresso como uma porcentagem da amplitude da variação do produto (6σ_p)* para a medição em questão. O Exemplo 4.12 mostra como o viés em um instrumento é avaliado.

**256 Um Primeiro Curso em Engenharia da Qualidade**

**TABELA 4.9**
**Exemplo de um Estudo Gage R&R (Repetibilidade e Reprodutibilidade)**

| Nº | Operador A (Ensaios 1, 2, 3; S; R; Média X) | Operador B (Ensaios 1, 2, 3; S; R; Média X) | Operador C (Ensaios 1, 2, 3; S; R; Média X) | R(X) |
| :--- | :--- | :--- | :--- | :--- |
| **1** | 1.141; 1.141; 1.140; 0.0006; 0.001; 1.1407 | 1.140; 1.143; 1.140; 0.00158; 0.003; 1.1410 | 1.137; 1.136; 1.136; 0.00058; 0.001; 1.13633 | 0.0047 |
| **2** | 1.144; 1.144; 1.144; 0.0000; 0.000; 1.1440 | 1.142; 1.144; 1.142; 0.00115; 0.002; 1.14267 | 1.140; 1.139; 1.139; 0.00058; 0.001; 1.13933 | 0.0047 |
| **3** | 1.146; 1.145; 1.147; 0.0010; 0.002; 1.1460 | 1.146; 1.152; 1.146; 0.00346; 0.006; 1.1480 | 1.144; 1.143; 1.142; 0.00100; 0.002; 1.14300 | 0.0050 |
| **4** | 1.139; 1.141; 1.141; 0.0012; 0.002; 1.1403 | 1.140; 1.141; 1.139; 0.00051; 0.002; 1.1400 | 1.137; 1.136; 1.135; 0.00100; 0.002; 1.13600 | 0.0043 |
| **5** | 1.143; 1.143; 1.143; 0.0000; 0.000; 1.1430 | 1.143; 1.143; 1.143; 0.00000; 0.000; 1.1430 | 1.139; 1.137; 1.138; 0.00100; 0.002; 1.13800 | 0.0050 |
| **6** | 1.140; 1.142; 1.140; 0.0012; 0.002; 1.1407 | 1.139; 1.140; 1.139; 0.00084; 0.001; 1.13933 | 1.136; 1.135; 1.135; 0.00058; 0.001; 1.13533 | 0.0053 |
| **7** | 1.142; 1.141; 1.142; 0.0006; 0.001; 1.1417 | 1.142; 1.145; 1.141; 0.00184; 0.004; 1.14267 | 1.139; 1.138; 1.137; 0.00100; 0.002; 1.13800 | 0.0047 |
| **8** | 1.142; 1.147; 1.147; 0.0029; 0.005; 1.1453 | 1.146; 1.145; 1.146; 0.00051; 0.001; 1.14567 | 1.143; 1.141; 1.142; 0.00100; 0.002; 1.14200 | 0.0037 |
| **9** | 1.143; 1.144; 1.142; 0.0010; 0.002; 1.1430 | 1.143; 1.146; 1.143; 0.00173; 0.003; 1.1440 | 1.147; 1.139; 1.139; 0.00462; 0.008; 1.14167 | 0.0023 |
| **10**| 1.140; 1.141; 1.141; 0.0006; 0.001; 1.1407 | 1.140; 1.141; 1.141; 0.00051; 0.001; 1.14067 | 1.136; 1.136; 1.135; 0.00058; 0.001; 1.13567 | 0.0050 |
| **11**| 1.150; 1.151; 1.148; 0.0015; 0.003; 1.1497 | 1.150; 1.153; 1.149; 0.00184; 0.004; 1.15067 | 1.139; 1.146; 1.146; 0.00404; 0.007; 1.14367 | 0.0070 |
| **12**| 1.140; 1.140; 1.143; 0.0017; 0.003; 1.1410 | 1.148; 1.141; 1.141; 0.00404; 0.007; 1.14333 | 1.136; 1.137; 1.136; 0.00058; 0.001; 1.13633 | 0.0070 |
| **13**| 1.148; 1.142; 1.148; 0.0035; 0.006; 1.1460 | 1.148; 1.149; 1.147; 0.00153; 0.002; 1.1480 | 1.144; 1.144; 1.143; 0.00058; 0.001; 1.14367 | 0.0043 |
| **14**| 1.146; 1.147; 1.145; 0.0010; 0.002; 1.1460 | 1.144; 1.149; 1.145; 0.00252; 0.005; 1.1460 | 1.142; 1.142; 1.142; 0.00000; 0.000; 1.14200 | 0.0040 |
| **15**| 1.148; 1.149; 1.148; 0.0006; 0.001; 1.1483 | 1.147; 1.149; 1.148; 0.00102; 0.002; 1.1480 | 1.144; 1.143; 1.143; 0.00058; 0.001; 1.14333 | 0.0050 |
| **Médias:**| **Média (S):** 0.0011 **Média (R):** 0.00207 | **Média (S):** 0.00154 **Média (R):** 0.00287 | **Média (S):** 0.00118 **Média (R):** 0.00213 | **Média R(X):** 0.0048 |

**Média Geral (Overall $\bar{X}$):** 1.143
**Desvio Padrão Geral (Overall $s$):** 0.004

**257 Qualidade na Produção — Controle de Processo I**

**Exemplo 4.12**
As 10 leituras a seguir foram obtidas medindo um bloco-padrão de 1 polegada (um padrão de trabalho) com um paquímetro. Qual é o viés (tendência) do paquímetro nesta faixa? *(Um bloco-padrão é usado em laboratórios como um padrão de trabalho para a medição de comprimento. Ele é feito de material resistente ao desgaste físico e que não é facilmente afetado por mudanças de temperatura).*

| Nº | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Leituras (pol.)** | 1.032 | 1.045 | 1.035 | 1.030 | 1.030 | 1.035 | 1.040 | 1.035 | 1.040 | 1.035 |

**FIGURA 4.26** 
(a) Verificando a resolução de um instrumento com resolução de 0,001. 
(b) Verificando a resolução de um instrumento com resolução de 0,01.

**258 Um Primeiro Curso em Engenharia da Qualidade**

**Solução:**
O valor verdadeiro (V.V.) correspondente a essas leituras é 1,00, uma vez que o bloco padrão é um instrumento de ferramentaria (referência) e sua dimensão designada é de 1,00 pol.

$\bar{X} = 1,0357$
$s = 0,0048$
Tendência (*Bias*) = $1,0357 - 1,000 = 0,0357$ pol.

Isso significa que o paquímetro fornece, em média, valores que são 0,0357 maiores que o valor verdadeiro.

Se o processo de medição destruir a unidade que está sendo medida, não será possível realizar medições repetidas na mesma peça; portanto, uma abordagem diferente é necessária. O Exemplo 4.13 ilustra a abordagem alternativa.

**Exemplo 4.13**
Um equipamento de teste de areia utilizado para testar a resistência à tração de misturas de areia está sendo avaliado. Vinte corpos de prova foram confeccionados a partir de um lote de areia (bem misturada) e foram divididos aleatoriamente em dois grupos de 10 cada. Um grupo foi testado por um equipamento de teste padrão (instrumento de referência/ferramentaria), e o outro grupo foi testado pelo equipamento sob avaliação. As seguintes leituras foram registradas. Calcule a tendência (*bias*) no equipamento de fábrica (o testador sob avaliação). As leituras do equipamento padrão são utilizadas como os valores verdadeiros.

| Nº | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Média |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Equip. padrão (lb) (V.V.)** | 262,2 | 261,5 | 267,7 | 260,9 | 262,2 | 261,7 | 269,3 | 272,4 | 263,2 | 265,2 | **264,6** |
| **Equip. de fábrica (lb)** | 279,9 | 267,1 | 287,1 | 256,9 | 259,9 | 260,6 | 263,2 | 270,2 | 275,2 | 261,9 | **268,2** |

**Solução**
$\text{Tendência} = \bar{X} - V.V. = 268,2 - 264,6 = 3,6$ lbs.
Portanto, o equipamento de fábrica possui uma tendência de 3,6 lbs.

Tais informações sobre a tendência ajudarão a ajustar a leitura, aplicando uma compensação para o viés e/ou sinalizando a necessidade de enviar o instrumento ao laboratório de metrologia para calibração e manutenção.

**4.7.3.5 Variabilidade (Precisão)**
A variabilidade do instrumento, também chamada de "erro", pode ser proveniente de duas fontes:
1. Repetitividade
2. Reprodutibilidade

O erro de **repetitividade** provém do *hardware* do instrumento, que não permite que o mesmo forneça leituras idênticas quando a mesma unidade de um produto é medida repetidamente pelo mesmo operador.

O erro de **reprodutibilidade** provém do fato de o instrumento ser utilizado de maneira diferente por diferentes operadores ao medir a mesma unidade de um produto, não permitindo assim que o instrumento produza leituras idênticas para a mesma peça quando operado por pessoas distintas.

**259 Qualidade na Produção — Controle de Processos I**

O erro de repetitividade é quantificado pelo desvio padrão das leituras do instrumento feitas repetidamente na mesma unidade pelo mesmo operador. O erro de reprodutibilidade é quantificado pelo desvio padrão das leituras do instrumento na mesma unidade por diferentes operadores. O Exemplo 4.14 abaixo mostra como projetamos e conduzimos um experimento para avaliar os erros de repetitividade e reprodutibilidade de um instrumento.

**Exemplo 4.14**
A Tabela 4.9 mostra as leituras dos diâmetros de 15 eixos de alumínio medidos por três operadores usando um paquímetro com relógio (*dial caliper*), com cada operador repetindo a medição três vezes. Estime os erros de repetitividade e reprodutibilidade do paquímetro.

**Solução**

**ERRO DE REPETITIVIDADE**
O erro de repetitividade causa a diferença entre as leituras em uma mesma unidade feitas por um único operador. O desvio padrão das três leituras em qualquer unidade, feitas por qualquer operador, fornece uma estimativa do erro de repetitividade. Por exemplo, a partir das três leituras da Unidade 1 pelo Operador A, o erro de repetitividade pode ser estimado da seguinte forma. Calcule o desvio padrão $s$ das três leituras (já feito na tabela) e divida-o pelo fator de correção $c_4$, para $n = 3$, retirado da Tabela A.4 no Apêndice. Obtemos:

$$ \hat{\sigma}_e = \frac{s}{c_4} = \frac{0,0006}{0,8862} = 0,00068 $$

onde o subscrito "e" em $\sigma_e$ significa "equipamento" (*equipment* ou *hardware*). O acento circunflexo (chapéu) sobre o símbolo indica que se trata de uma estimativa.

O erro de repetitividade também pode ser estimado a partir da amplitude $R$ das três leituras:

$$ \hat{\sigma}_e = \frac{R}{d_2} = \frac{0,001}{1,693} = 0,0006 $$

O valor do fator de correção $d_2$ é obtido da Tabela A.4 no Apêndice para $n = 3$.

Quarenta e cinco dessas estimativas, no entanto, são possíveis a partir dos 45 conjuntos de leituras feitas por três operadores nas 15 unidades do produto. Pode-se calcular a média destas para obter uma estimativa melhor para o erro de repetitividade. Usando $\bar{s}$ (o valor médio de $s$ das 45 leituras de amostra), temos $\bar{s} = (0,0011 + 0,00154 + 0,00118) / 3 = 0,00126$. Portanto:

$$ \hat{\sigma}_e = \frac{\bar{s}}{c_4} = \frac{0,00126}{0,8862} = 0,00142 $$

Para obter a estimativa a partir das amplitudes, sendo $\bar{R} = (0,00287 + 0,00287 + 0,00213) / 3 = 0,00236$, obtemos:

$$ \hat{\sigma}_e = \frac{\bar{R}}{d_2} = \frac{0,00236}{1,693} = 0,00139 $$

É interessante notar que as estimativas obtidas pelos dois métodos, um usando $S$ e o outro usando $R$, concordam de forma tão próxima. Assumiremos o erro de repetitividade como $\hat{\sigma}_e = 0,0014$.

**ERRO DE REPRODUTIBILIDADE**
Para calcular o erro de reprodutibilidade, primeiro calculamos os valores da média ($\bar{x}$) para cada uma das unidades sob cada operador. Existem 45 valores de $\bar{x}$. O erro de reprodutibilidade do instrumento causa a diferença nos valores de $\bar{x}$ obtidos por dois operadores diferentes para a mesma unidade.

**260 Um Primeiro Curso em Engenharia da Qualidade**

Assumiremos que o erro de repetitividade foi neutralizado em cada valor de $x$ como resultado do cálculo da média das três leituras. Assim, a amplitude dos três valores de $x$ dos três operadores, para qualquer unidade do produto, fornecerá uma estimativa para o erro de reprodutibilidade. Por exemplo, a amplitude $R_X$ da Unidade 1 = (1,141 - 1,13633) = 0,00467, e a estimativa do erro de reprodutibilidade é:

$\hat{\sigma}_o = \frac{0,0047}{1,693} = 0,0028$

onde o subscrito "o" em $\sigma_o$ significa "operador" (*operator*). (O valor $d_2 = 1,693$ foi escolhido da Tabela A.4 para $n = 3$ porque a amplitude $R$ veio de uma amostra de três valores de $X$).

Existem 15 valores de $R_X$ que podem ter sua média calculada para fornecer $\bar{R}_X = 0,0048$, e a estimativa para $\sigma_o$ é:

$\hat{\sigma}_o = \frac{0,0048}{1,693} = 0,0028$

É apenas uma coincidência que a estimativa da Unidade 1 seja a mesma da média de todas as 15 unidades.

**ERRO DO SISTEMA DE MEDIÇÃO (*GAGE ERROR*)**
Tendo obtido as estimativas para os erros de repetitividade e reprodutibilidade, a variabilidade total do sistema de medição — proveniente tanto da repetitividade quanto da reprodutibilidade — pode ser obtida como a soma vetorial dos erros do equipamento e do operador:

$\sigma_g = \sqrt{\sigma_e^2 + \sigma_o^2}$

onde o subscrito "g" significa "*gage*" (instrumento/sistema de medição). Podemos chamá-la de variabilidade do sistema de medição.
Para o exemplo: $\hat{\sigma}_g = \sqrt{0,0014^2 + 0,0028^2} = 0,0031$.

**VARIABILIDADE NAS PEÇAS**
A variabilidade nas peças pode ser obtida a partir da amplitude dos valores de $X$ das unidades individuais medidas por qualquer um dos operadores. Por exemplo, o maior valor de $X$ com o Operador A é 1,1497 e o menor é 1,1403, resultando em uma amplitude das 15 unidades de $R_{XA} = 0,0094$. De forma semelhante, a amplitude entre as 15 unidades medidas pelo Operador B é $R_{XB} = 0,0107$, e a amplitude do Operador C é $R_{XC} = 0,0077$. A média dessas três estimativas (0,0093), quando dividida por $d_2 = 3,472$ (para $n = 15$), é igual a 0,0027. 

Isso representa a variabilidade entre as médias das medições das peças. Como essas médias provêm de amostras de tamanho 3, multiplicamos esse número por $\sqrt{3}$ para obter a variabilidade entre as medições individuais. Assim, $\sigma_p = 0,0027 \times \sqrt{3} = 0,0047$.

A razão $\sigma_g / \sigma_p$ representa a variabilidade do instrumento (*gage*) em comparação com a variabilidade nas peças. No exemplo acima, $\sigma_g / \sigma_p = 0,0031 / 0,0047 = 0,66$. Essa proporção representa quanta variabilidade existe no sistema de medição em comparação com a variabilidade presente nas peças (produto).

O Manual de Referência do MSA (*Measurement System Analysis*) recomenda que um instrumento só será considerado "capaz" se essa razão for $< 0,10$. Ou seja, a variabilidade do instrumento não deve ser superior a 10% da variabilidade do produto. Neste exemplo, a variabilidade do instrumento é maior que os 10% estipulados. Obviamente, esta não é uma situação aceitável. 

Em uma análise mais aprofundada, se considerarmos apenas o erro de repetitividade, a razão $\sigma_e / \sigma_p = 0,0014 / 0,0047 = 0,29$. Isso indica que a variabilidade do instrumento (equipamento) corresponde a cerca de 30% da variabilidade do produto. Se calcularmos a razão $\sigma_o / \sigma_p = 0,0028 / 0,0047 = 0,60$, isso indica que é o erro de reprodutibilidade que causa... *(Nota: o texto original é interrompido aqui, mas o contexto indica "que causa a maior parte da variação / o maior problema").*

**261 Qualidade na Produção — Controle de Processo I**

...dão origem à variabilidade inflada no instrumento. O erro de reprodutibilidade pode ser reduzido tornando o procedimento de medição utilizado pelos operadores mais uniforme, por meio de instruções escritas e treinamento adequados. Além disso, alguns métodos à prova de erros (*fool-proofing / poka-yoke*) que evitem que diferentes operadores utilizem o instrumento de maneira distinta podem ser testados.

O procedimento utilizado no exemplo acima segue de perto o fornecido no Manual de Referência de Análise de Sistemas de Medição (MSA) (*Chrysler LLC et al. 1995, 2010*) com algumas modificações simples. Enquanto o manual usa um $d_2^*$ como fator de correção para estimar o desvio padrão a partir da amplitude $R$, nós utilizamos o fator $d_2$ para esse propósito. O $d_2^*$ disponível em tabelas especiais é igual ao $d_2$ quando o número de ensaios (número de unidades inspecionadas $\times$ número de ensaios por unidade) ultrapassa 15. Esse requisito é satisfeito no exemplo acima, e é razoável supor que pelo menos 15 ensaios estarão disponíveis nos dados onde tal análise é realizada. Além disso, assumimos que a estimativa para o erro de reprodutibilidade calculada acima não contém nenhuma parte do erro de repetibilidade, pois ele foi neutralizado ao se calcular a média das leituras dos ensaios. O procedimento no manual de referência fornece uma correção para remover a possível contaminação do erro de reprodutibilidade pelo erro de repetibilidade.

Existem vários procedimentos disponíveis na literatura para realizar um estudo de *Gage R&R* (Repetibilidade e Reprodutibilidade de Instrumento de Medição), incluindo um que utiliza a Análise de Variância (ANOVA). Escolhemos este procedimento, conhecido como método das "Médias e Amplitudes" ($\bar{X}$ e $R$), porque a maior parte dele é baseada em princípios fundamentais e a lógica da maioria de suas etapas é fácil de acompanhar.

No exemplo acima, o Operador C era um operador de máquinas veterano, e os Operadores A e B eram professores que ensinavam estatística, mas que não tinham experiência no uso do paquímetro. Logo, o instrumento foi usado de forma diferente pelos distintos "operadores", o que explica o alto nível de erro de reprodutibilidade. Já o erro de repetibilidade provém do *hardware* (equipamento físico) do instrumento. Se for um paquímetro, pode ser devido ao atrito nas superfícies de deslizamento ou à irregularidade das arestas de medição. Se for uma máquina de ensaio de tração hidráulica, pode ser devido ao aumento de temperatura no fluido ou à falta de uma fixação firme no corpo de prova. A consciência da existência do erro e a compreensão de sua origem ajudariam a minimizar tais falhas e, assim, melhorar a capacidade do instrumento. De modo geral, erros de repetibilidade menores acompanham equipamentos mais caros, pois proteções precisam ser incorporadas para evitar as diversas causas que contribuem para esse erro. Compreender a existência da variabilidade do instrumento, analisar suas possíveis fontes e encontrar soluções para minimizá-la aumentaria a capacidade do instrumento e contribuiria para a melhoria da qualidade do produto.

**4.7.3.6 Uma Verificação Rápida da Adequação do Instrumento**

Uma maneira rápida de comparar a variabilidade do instrumento com a variabilidade do produto e, assim, avaliar a adequação do instrumento é a seguinte: realize medições repetidas usando o instrumento em avaliação em várias unidades de um produto utilizando um único operador, conforme mostrado na Tabela 4.9 para o Operador A. Elabore cartas de controle de Média ($\bar{X}$) e Amplitude ($R$), como mostrado na Figura 4.27. O gráfico $R$ (carta de amplitude) nesta figura rastreia a variabilidade do instrumento, e não a variabilidade do produto, já que as três medições a partir das quais um valor de $R$ é calculado vêm da mesma unidade; portanto, o gráfico $R$ mostrará se a variabilidade do instrumento é consistente ao longo do tempo. Lembre-se de que essa consistência também é conhecida como "estabilidade" do instrumento. Se os valores de $R$ caírem fora dos limites de controle, isso significaria que a variabilidade não é estável. Se os valores de $R$ mostrarem ampla variabilidade ou uma tendência ao longo do tempo, isso deve levar a uma investigação do motivo pelo qual a variabilidade está mudando ao longo do tempo.

**262 Um Primeiro Curso em Engenharia da Qualidade**

O Gráfico X nesta figura é um gráfico interessante. Os limites para o Gráfico X são calculados a partir da variabilidade do instrumento — não da variabilidade do produto. As diferenças nos valores de X, no entanto, representam a variabilidade no produto. Portanto, este Gráfico X apresenta um panorama que compara a variabilidade do produto com a variabilidade do instrumento. Se a variabilidade do instrumento for pequena em comparação à variabilidade do produto, então a amplitude dos limites de controle será pequena, fazendo com que um grande número de valores de X caia fora dos limites. 

Portanto, se houver um grande número de valores de X fora dos limites, isto é, se o Gráfico X mostrar que o "processo" não está sob controle, isso indica uma situação desejável na qual a variabilidade do instrumento é muito menor do que a variabilidade do produto. De acordo com as regras recomendadas pelo Manual de Referência de Análise de Sistemas de Medição (MSA) (Chrysler LLC et al. 1995, 2010), pelo menos 50% dos valores de X devem cair fora dos limites de controle no Gráfico X, construído conforme descrito acima, para que o instrumento seja considerado com capacidade adequada.

Devemos lembrar que a falta de resolução adequada do instrumento também pode fazer com que um grande número de valores de X caia fora dos limites do Gráfico X construído acima. A questão da resolução deve ser resolvida primeiro; o instrumento escolhido deve ter uma "boa" resolução antes que o experimento seja realizado para comparar a variabilidade do produto e do instrumento.

**4.8 EXERCÍCIOS**
**4.8.1 PROBLEMAS PRÁTICOS**
**4.1** Os seguintes dados foram coletados sobre a quantidade de desodorante em latas, em gramas, envasadas na linha de envase de uma empresa de embalagens. Prepare os gráficos X e R para os dados e comente sobre a condição do processo.

**FIGURA 4.27** Uma verificação rápida da adequação do instrumento.

**263 Qualidade na Produção — Controle de Processos I**

| Horário | 8h | 9h | 10h | 11h | 12h | 13h | 14h | 15h | 16h | 17h |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 25,0 | 24,3 | 25,2 | 24,3 | 26,2 | 24,1 | 25,1 | 24,2 | 24,1 | 25,1 |
| **2** | 24,5 | 25,1 | 24,0 | 24,0 | 25,1 | 24,0 | 25,2 | 24,1 | 24,3 | 25,4 |
| **3** | 24,5 | 24,2 | 25,1 | 24,3 | 25,2 | 24,4 | 25,0 | 24,3 | 24,1 | 25,2 |
| **4** | 25,1 | 24,1 | 24,2 | 24,0 | 24,2 | 25,0 | 25,4 | 24,2 | 25,0 | 24,4 |

| Horário | 18h | 19h | 20h | 21h | 22h | 8h | 9h | 10h | 11h | 12h |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 24,6 | 23,9 | 25,1 | 24,8 | 24,4 | 23,9 | 24,5 | 24,4 | 25,2 | 23,1 |
| **2** | 24,9 | 23,7 | 27,3 | 24,4 | 24,3 | 23,4 | 24,8 | 24,5 | 25,6 | 23,2 |
| **3** | 24,1 | 24,2 | 27,3 | 24,1 | 24,9 | 23,8 | 24,8 | 24,8 | 25,3 | 23,4 |
| **4** | 24,0 | 24,1 | 27,1 | 24,3 | 25,0 | 24,0 | 24,9 | 24,6 | 25,2 | 23,4 |

**4.2** Para os dados do Problema 4.1, elabore os gráficos $\bar{X}$ e S (Média e Desvio Padrão) e compare os resultados com os dos gráficos $\bar{X}$ e R (Média e Amplitude).

**4.3** Para controlar o peso de raviólis gigantes embalados em uma fábrica de processamento de alimentos, os seguintes dados foram coletados referentes ao peso de quatro pacotes de ravióli aproximadamente a cada 30 minutos. Elabore cartas de controle $\bar{X}$ e R para monitorar os pesos e comente os resultados. Apenas 15 subgrupos estavam disponíveis. Os pesos estão em onças (*ounces*). (Dados de Schmillan e Johnson 2001.)

| Subgrupo | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Horário** | 7:30 | 8:15 | 8:45 | 9:15 | 9:45 | 10:15 | 10:45 | 11:15 | 11:45 | 12:15 | 12:45 | 1:30 | 1:55 | 2:15 | 2:45 |
| **Pacote 1** | 35,1 | 34,4 | 34,7 | 39,0 | 35,1 | 36,1 | 34,8 | 35,7 | 35,8 | 36,5 | 35,2 | 35,3 | 35,3 | 36,9 | 35,7 |
| **Pacote 2** | 36,5 | 33,3 | 35,7 | 35,5 | 37,1 | 35,7 | 34,5 | 34,6 | 36,4 | 37,5 | 37,1 | 34,6 | 36,3 | 35,3 | 36,9 |
| **Pacote 3** | 34,3 | 33,9 | 35,6 | 34,3 | 34,8 | 36,2 | 35,8 | 36,7 | 34,2 | 36,3 | 36,4 | 33,8 | 37,4 | 35,8 | 35,3 |
| **Pacote 4** | 34,3 | 34,6 | 34,9 | 36,4 | 35,4 | 35,6 | 36,6 | 36,6 | 34,9 | 37,6 | 36,1 | 36,3 | 36,5 | 36,3 | 37,7 |

**4.4** Para os dados do Problema 4.3, elabore gráficos $\bar{X}$ e S e compare os resultados com os dos gráficos $\bar{X}$ e R elaborados para o Problema 4.3.

**4.5** Uma amostra de 30 garrafas foi coletada no final de uma linha de envase a cada 30 minutos; inspecionada quanto à limpeza, rotulagem adequada, localização do código de rastreabilidade, entre outros; e classificada como boa ou defeituosa. A tabela abaixo mostra os dados de 25 dessas amostras. Elabore um Gráfico *p* (proporção de defeituosos) e comente os resultados.

| Subgrupo | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº de defeituosos** | 0 | 0 | 4 | 3 | 2 | 0 | 1 | 2 | 0 | 3 | 0 | 4 | 1 | 1 | 1 | 2 | 1 | 0 | 0 | 1 | 1 | 0 | 2 | 1 | 0 |

**4.6** Em uma oficina de fabricação onde são montadas cabines para diferentes modelos de tratores de esteira (*bulldozers*), as carcaças das cabines são inspecionadas quanto à correta execução das soldas antes da pintura. A tabela abaixo (*nota: omitida no texto original*) fornece o número total de soldas em cada cabine e o número de soldas consideradas defeituosas. Qual tipo de carta de controle você recomendaria para monitorar as soldas? Calcule os limites de controle para o gráfico.

***

**264 Um Primeiro Curso em Engenharia da Qualidade**

**Nº da cabine:** 1 a 22
**Total de soldas:** 46 62 80 75 32 69 45 48 46 92 121 110 55 64 32 95 68 42 99 101 66 75
**Soldas defeituosas:** 7 3 6 9 5 11 10 5 6 6 8 11 2 2 3 4 12 9 14 16 8 6

**4.7** O número de erros de impressão em um jornal era motivo de preocupação. Uma página aleatória foi selecionada de cada edição impressa diária, e o número de erros por página foi registrado por 20 dias. Os dados devem ser usados para preparar um gráfico de controle (ou carta de controle) para monitorar e controlar os erros de impressão no jornal. Qual seria um gráfico de controle adequado para controlar os erros de impressão, e quais seriam os limites de controle para o gráfico escolhido?
**Dias:** 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
**Erros:** 7 6 1 2 4 1 8 1 4 2 9 10 2 4 9 21 3 5 4 2 5 *(Nota: os números foram separados com base no contexto comum do problema)*

**4.8** A equipe de inspeção de um departamento estadual de transporte conta o número de buracos por milha em uma rodovia principal como parte de seu programa de garantia da qualidade. Os dados abaixo mostram o número de buracos em 32 milhas selecionadas aleatoriamente. O processo de formação de buracos está sob controle? Em outras palavras, a incidência de buracos parece ser consistente de milha para milha nesta rodovia, ou algumas milhas têm significativamente mais buracos do que outras? (O gráfico de controle é uma série de testes de significância feitos cada vez que uma amostra é coletada e verificada.)
**Nº da Milha:** 1 a 16
**Nº de buracos:** 12  8  6  4  2 21  3  2  8 13 25  0  1  5  4  8
**Nº da Milha:** 17 a 32
**Nº de buracos:** 11  3 13  0  1  7  0  7  5  2  9 13  0  2 12 15

**4.9** Os dados na tabela abaixo representam as quantidades de produção de sacos de papel e o número de rejeitados a cada hora durante 23 horas em uma fábrica de papel. Que tipo de gráfico de controle você recomendaria para monitorar e controlar a produção de sacos de papel defeituosos? Calcule os limites de controle para o(s) gráfico(s).
**Hora:** 1 2 3 4 5 6 7 8 9 10 11 12
**Produção:** 1200 1400 2100 1800 1600 2000 1300 1200 1100 1000 900 1300
**Nº de defeituosos:** 34 56 43 44 32 67 43 56 87 55 50 120
**Hora:** 13 14 15 16 17 18 19 20 21 22 23
**Produção:** 1400 2300 2100 2200 1500 1700 2300 1800 1700 1600 1400
**Nº de defeituosos:** 87 90 32 44 23 21 87 34 30 23 55

**4.10** Um grupo de estudantes de Engenharia Industrial (IE) queria ajudar uma amiga a melhorar a qualidade do serviço que ela presta aos clientes em sua empresa de limpeza residencial. O grupo de IE visitou casas selecionadas aleatoriamente depois que as equipes de limpeza concluíram seus trabalhos e obteve os seguintes dados. Os dados mostram o número de cômodos em cada uma das casas visitadas e o número de "defeitos" que foram encontrados. Os dados também... *(O texto é cortado aqui)*

***

**265 Qualidade na Produção — Controle de Processos I**

indique o ID das equipes (A, B ou C) que limparam as casas. O processo de limpeza está sob controle? O processo de limpeza pode cumprir a promessa de “zero” defeitos para seus clientes?

| Casa | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº de cômodos** | 8 | 6 | 10 | 7 | 6 | 6 | 8 | 9 | 7 | 10 | 11 | 7 | 8 | 9 | 9 | 7 | 7 | 6 | 6 | 8 | 7 | 11 | 12 | 9 | 8 |
| **Nº de defeitos** | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 5 | 0 | 1 | 4 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 2 | 1 | 1 |
| **ID da Equipe** | B | B | C | A | B | A | C | C | B | C | C | B | A | C | A | A | A | C | B | C | A | C | C | A | B |

*Fonte: Dados de Van Sandt e Britton (2001).*

**4.11** Calcule os índices de capacidade $C_p$ e $C_{pk}$ para o processo no Problema 4.1 se o LIE (Limite Inferior de Especificação) e o LSE (Limite Superior de Especificação) forem 24 e 26 g, respectivamente, estando o alvo no centro da especificação. Use $R/d_2$ para estimar o desvio padrão do processo. Certifique-se de que as estimativas para a média e o desvio padrão do processo sejam feitas a partir de um processo que esteja sob controle.

**4.12** Assumindo que as especificações para o peso dos pacotes de ravioli no Problema 4.3 sejam 31,5 e 32,3 oz. (onças), e que o alvo esteja no centro da especificação, encontre os valores de $C_p$ e $C_{pk}$. Certifique-se de que as estimativas para os parâmetros do processo sejam provenientes de um processo controlado.

**4.13** Os dados abaixo representam as espessuras de folhas de borracha medidas em milímetros por um medidor de espessura. Duas medições foram feitas de cada peça por cada um dos dois operadores. As especificações estão em 0,50 e 1,00 mm.
a. Calcule os erros de reprodutibilidade e repetibilidade (desvios padrão) e separe a variabilidade do medidor da variabilidade da peça.
b. Verifique a adequação do medidor em termos de resolução e precisão.

| | Operador 1 | | Operador 2 | |
| :--- | :--- | :--- | :--- | :--- |
| **Peça** | **Ensaio 1** | **Ensaio 2** | **Ensaio 1** | **Ensaio 2** |
| 1 | 1,00 | 1,00 | 1,04 | 0,96 |
| 2 | 0,83 | 0,77 | 0,80 | 0,76 |
| 3 | 0,98 | 0,98 | 1,00 | 1,04 |
| 4 | 0,96 | 0,96 | 0,94 | 0,90 |
| 5 | 0,86 | 0,83 | 0,72 | 0,74 |
| 6 | 0,97 | 0,97 | 0,98 | 0,94 |
| 7 | 0,63 | 0,59 | 0,56 | 0,56 |
| 8 | 0,86 | 0,94 | 0,82 | 0,78 |
| 9 | 0,64 | 0,72 | 0,56 | 0,52 |
| 10 | 0,59 | 0,51 | 0,43 | 0,43 |

**4.14** A tabela abaixo mostra parte dos dados da Tabela 4.9. Conclua um estudo de R&R (Repetibilidade e Reprodutibilidade) do medidor usando apenas esta parte dos dados e compare os resultados com os do Exemplo 4.14.

| Nº | A - Ensaio 1 | A - Ensaio 2 | B - Ensaio 1 | B - Ensaio 2 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 1,141 | 1,141 | 1,140 | 1,143 |
| 2 | 1,144 | 1,144 | 1,142 | 1,144 |
| 3 | 1,146 | 1,145 | 1,146 | 1,152 |
| 4 | 1,139 | 1,141 | 1,140 | 1,141 |
| 5 | 1,143 | 1,143 | 1,143 | 1,143 |

266 Um Primeiro Curso em Engenharia da Qualidade

6 1.140 1.142 1.139 1.140
7 1.142 1.141 1.142 1.145
8 1.142 1.147 1.146 1.145
9 1.143 1.144 1.143 1.146
10 1.140 1.141 1.140 1.141
11 1.150 1.151 1.150 1.153
12 1.140 1.140 1.148 1.141
13 1.148 1.142 1.146 1.148
14 1.146 1.147 1.146 1.144
15 1.148 1.149 1.148 1.147

**4.15** Instrumentos cirúrgicos, após serem usados em cirurgias, passam por um processo de descontaminação e esterilização (Processo D&E) antes de serem usados para a próxima cirurgia. O processo D&E envolve tanto lavagem mecânica quanto lavagem manual, seguidas de inspeção visual. A inspeção visual, que inclui a verificação de contaminação residual bem como a falta de instrumentos, fornece dados sobre a eficácia do processo D&E. Os dados foram coletados ao longo de um período de 12 meses sobre o número de ocorrências dos dois tipos de "erros". Eles são mostrados na tabela abaixo. O hospital está interessado em estabelecer um programa para reduzir esses dois tipos de erros. Utilize ferramentas da qualidade apropriadas para estabelecer um sistema para que o hospital monitore e, possivelmente, reduza esses erros. Assuma que um número "grande" de instrumentos está sendo utilizado.

Mês | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
---|---|---|---|---|---|---|---|---|---|---|---|---
Instrumentos não limpos | 5 | 7 | 5 | 10 | 10 | 20 | 10 | 3 | 3 | 7 | 7 | 7
Instrumentos faltando | 50 | 42 | 31 | 55 | 31 | 31 | 22 | 25 | 27 | 36 | 55 | 43

**4.9 MINIPROJETOS**
**4.9.1 MINIPROJETO 4.1**
A tabela abaixo mostra dados sobre a resistência à ruptura de machos de camisa de água (ou jaqueta de água) usados na fabricação de peças fundidas de cabeçote de cilindro em uma fundição. O macho de camisa é dividido em três seções, identificadas como seções B, C e R. Em outras palavras, as três seções juntas formam um macho para um cabeçote de cilindro. Esses machos, que são feitos de areia misturada com material aglomerante (ligante), devem ter resistência suficiente para suportar as tensões de manuseio e a tensão gerada quando o ferro quente é derramado ao redor deles no molde. Curá-los (assá-los) em uma caixa quente (*hotbox*) melhora sua resistência, mas o excesso de cura os tornará quebradiços. As três seções do macho são curadas em locais diferentes em uma caixa quente, deixando margem para suspeitar que as três seções podem não ser curadas uniformemente e, portanto, podem não ter a mesma resistência. É essencial que essas três partes do macho sejam igualmente resistentes, pois a resistência do macho total é igual à da seção mais fraca. Os dados foram coletados para verificar se os machos têm consistentemente uma "boa" resistência.

Dois conjuntos de machos (cada um contendo um macho B, C e R) foram retirados a cada meia hora (durante o turno da noite) e "rompidos" em uma máquina de ensaio transversal, que forneceu a resistência à flexão dos machos em quilogramas. Após as 3h da manhã, no entanto, apenas um conjunto de machos foi testado porque a equipe de produção estava com falta de machos e não disponibilizou muitos para o ensaio destrutivo.

**267 Qualidade na Produção — Controle de Processos I**

Analise os dados e verifique se o processo está produzindo machos (de fundição) bons de forma consistente. A resistência deve ser consistente tanto entre as três seções quanto ao longo do tempo. Quais devem ser a Linha Central (LC) e os limites do gráfico de controle para o controle futuro? Qual seria a sua sugestão para melhorar a qualidade do processo?

Qual é a capacidade atual do processo? Note que nenhuma especificação é fornecida, e você pode ter que propor um conjunto adequado de especificações para a resistência. A resistência dos machos é um parâmetro do processo. A fundição não vende machos; ela vende o ferro produzido usando-os. As especificações de resistência para os machos são criadas para ajudar a manter a consistência do processo. Tais especificações são geralmente criadas como Limites Naturais de Tolerância (LNTs) do processo, os quais são obtidos por meio da fórmula $\bar{X} \pm 3\hat{\sigma}$ (Média mais ou menos 3 desvios padrões estimados). Os LNTs podem descrever a capacidade.

*(Tabela 1 - Dados de Resistência)*
**Horário:** 23h15 | 23h45 | 00h15 | 00h45 | 01h15 | 01h45
*Os dados originais apresentam variáveis B, C e R para os Conjuntos 1 e 2.*

**Horário:** 02h15 | 03h00 | 03h30 | 04h00 | 04h30 | 05h00
*Os dados originais apresentam variáveis B, C e R para os Conjuntos 1 e 2.*
*(Atenção: Os valores numéricos brutos da tabela contêm aglutinações devido ao escaneamento original, ex: 8.915.3, 135.6).*

**4.9.2 MINI-PROJETO 4.2**
Os dados abaixo representam a proporção de peças fundidas rejeitadas por vários defeitos em uma linha de produção. Faça um Gráfico *p* (Gráfico de Proporção) usando os dados sobre a proporção diária de defeituosos. Extraia qualquer informação útil que possa ser obtida a partir desses dados, com base no Gráfico *p*.

*(Tabela 2 - Dados Diários de Produção e Rejeição)*

| Data | Nº produzido | Nº inspecionado | Nº de defeituosos |
| :--- | :--- | :--- | :--- |
| 01/05 a 10/05 | 115 a 353 | 26 a 236 | 1 a 73 |
| 13/05 a 12/06 | 157 a 329 | 85 a 276 | 36 a 100 |
| 13/06 a 28/06 | 104 a 313 | 55 a 305 | 29 a 137 |
| 01/07 a 11/07 | 134 a 295 | 83 a 170 | 43 a 84 |
| 29/07 a 08/08 | 135 a 319 | 103 a 240 | 38 a 144 |

Para facilitar a leitura e o uso em sala de aula, organizei os dados brutos (que continham algumas junções de caracteres devido à extração do texto original) em tabelas claras.

**268 Um Primeiro Curso em Engenharia da Qualidade**

| Data | 8/9 | 8/12 | 8/13 | 8/14 | 8/15 | 8/16 | 8/28 | 8/29 | 8/30 | 8/31 | 9/3 | 9/4 | 9/5 | 9/6 | 9/7 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº produzido** | 266 | 225 | 346 | 355 | 308 | 173 | 101 | 352 | 165 | 333 | 322 | 188 | 179 | 125 | 335 |
| **Nº inspecionado** | 142 | 192 | 302 | 329 | 273 | 147 | 23 | 255 | 165 | 296 | 236 | 172 | 144 | 80 | 270 |
| **Nº defeituoso** | 51 | 68 | 128 | 161 | 125 | 66 | 7 | 49 | 35 | 79 | 77 | 36 | 28 | 25 | 65 |

| Data | 9/9 | 9/10 | 9/12 | 9/13 | 9/24 | 9/25 | 9/26 | 9/27 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Nº produzido** | 170 | 157 | 239 | 85 | 130 | 188 | 188 | 150 |
| **Nº inspecionado** | 147 | 142 | 212 | 76 | 99 | 129 | 14 | 6 |
| **Nº defeituoso** | 35 | 36 | 60 | 21 | 26 | 62 | 2 | 4 |

**4.9.3 MINI-PROJETO 4.3**
O velocímetro de uma van VW 1984 está sendo calibrado. As leituras do velocímetro do veículo são avaliadas utilizando a leitura de velocidade fornecida por um monitor GPS. A tabela a seguir mostra as leituras registradas do velocímetro do veículo e as leituras do GPS feitas por duas pessoas: o motorista e um passageiro. A leitura do GPS é considerada o VV *(Valor Verdadeiro - Nota de tradução: no original "TV - True Value")*. As leituras foram feitas em diferentes velocidades enquanto o veículo se movia pelas ruas da cidade e viajava em rodovias. Note que as leituras de velocidade, em mph *(milhas por hora)*, estão divididas em dois níveis: um no nível de velocidade de ruas urbanas e outro no nível de velocidade de rodovias.

Comente sobre a tendência *(bias)*, linearidade, precisão e estabilidade do velocímetro da VW. Este é apenas o primeiro experimento; um experimento revisado está planejado com uma melhor coleta de dados. Qual melhoria você sugeriria?

*(Tabela de calibração do Mini-Projeto)*

| Nº | VW '84 | GPS | VW '84 | GPS | Nº | VW '84 | GPS | VW '84 | GPS |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 28 | 17 | 33 | 26 | **18** | 18 | 12 | 38 | 32 |
| **2** | 36 | 32 | 42 | 39 | **19** | 19 | 16 | 74 | 68 |
| **3** | 15 | 10 | 23 | 19 | **20** | 68 | 56 | 75 | 66 |
| **4** | 42 | 39 | 96 | 81 | **21** | 56 | 52 | 79 | 69 |
| **5** | 59 | 49 | 91 | 84 | **22** | 54 | 48 | 88 | 76 |
| **6** | 65 | 56 | 85 | 72 | **23** | 64 | 55 | 87 | 77 |
| **7** | 66 | 49 | 65 | 55 | **24** | 24 | 19 | 85 | 72 |
| **8** | 85 | 73 | 45 | 32 | **25** | 33 | 25 | 28 | 15 |
| **9** | 88 | 72 | 48 | 35 | **26** | 36 | 25 | 21 | 13 |
| **10** | 32 | 26 | 96 | 89 | **27** | 44 | 39 | 22 | 15 |
| **11** | 39 | 33 | 42 | 36 | **28** | 76 | 69 | 11 | 6 |
| **12** | 98 | 81 | 55 | 42 | **29** | 74 | 65 | 9 | 5 |
| **13** | 86 | 80 | 63 | 52 | **30** | 56 | 50 | 10 | 4 |
| **14** | 45 | 37 | 41 | 36 | **31** | 52 | 43 | 12 | 5 |
| **15** | 49 | 36 | 22 | 15 | **32** | 50 | 42 | 26 | 15 |
| **16** | 77 | 62 | 21 | 16 | **33** | 55 | 46 | 28 | 16 |
| **17** | 78 | 66 | 39 | 31 | | | | | |

**269 Qualidade na Produção — Controle de Processos I**
**REFERÊNCIAS**

AT&T. 1958. *Statistical Quality Control Handbook*. 2ª ed. Indianapolis, IN: AT&T Technologies.
Carey, G. R., e R. C. Lloyd. 2001. *Measuring Quality Improvement in Healthcare, A Guide to Statistical Process Control Applications*. Milwaukee, WI: ASQ Quality Press.
Chrysler Corporation, Ford Motor Company e General Motors Corporation. 1995. *Measurement Systems Analysis (MSA)—Reference Manual*. 2ª ed. Southfield, MI: AIAG.
Chrysler Group LLC, Ford Motor Company e General Motors Corporation. 2010. *Measurement Systems Analysis (MSA)—Reference Manual*. 4ª ed. Southfield, MI: AIAG.
Deming, W. E. 1986. *Out of the Crisis*. Cambridge, MA: MIT—Center for Advanced Engineering Study.
Duncan, A. J. 1956. “The Economic Design of X-Charts Used to Maintain Current Control of a Process.” *Journal of the American Statistical Association* 51: 228–242.
Duncan, A. J. 1974. *Quality Control and Industrial Statistics*. 4ª ed. Homewood, IL: Irwin.
Grant, E. L., e R. S. Leavenworth. 1996. *Statistical Quality Control*. 7ª ed. Nova York: McGraw-Hill.
Krishnamoorthi, K. S. 1989. *Quality Control for Operators and Foremen*. Milwaukee, WI: ASQC Quality Press.
Krishnamoorthi, K. S., V. P. Koritala, e C. Jurs. Junho de 2009. “Sampling Variability in Capability Indices.” *Proceedings of IE Research Conference—Abstract*. Miami, FL.
Montgomery, D. C. 2013. *Introduction to Statistical Quality Control*. 7ª ed. Nova York: John Wiley.
Motorola Corporation. 1992. *Six Steps to Six Sigma*. Schaumburg, IL: SSG 102, Motorola University.
Ott, E. R. 1975. *Process Quality Control—Trouble Shooting and Interpretation of Data*. Nova York: McGraw-Hill.
Perla, R. J., L. P. Provost, e S. K. Murray. 2011. “The Run Chart: A Simple Analytical Tool for Learning from Variation in Healthcare Processes.” *BMJ Quality & Safety* 20 (1): 46–51.
Schmillan, P., e C. Johnson. 2001. “Evaluation of Process Control of Jumbo Ravioli.” Relatório de projeto não publicado, IME 522, Departamento IMET, Bradley University, Peoria, IL.
Shewhart, W. A. 1931. *Economic Control of Manufactured Product*. Princeton, NJ: D. Van Nostrand Co., Inc. Reeditado em 1980. Milwaukee, WI: American Society for Quality.
Shewhart, W. A. 1939. *Statistical Method from the Viewpoint of Quality Control*. Washington, DC: Graduate School of Department of Agriculture. Reeditado em 1986. Mineola, NY: Dover Publications, Inc.
Van Sandt, T., e P. Britton. 2001. “A Quality Inspection of A+ Cleaning.” Relatório de projeto não publicado, IME 522, Departamento IMET, Bradley University, Peoria, IL.


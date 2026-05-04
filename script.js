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
    
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
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
    
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
            }
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
                
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    }

    // Modal Logic for Disciplines
    const modal = document.getElementById("ementa-modal");
    const span = document.getElementsByClassName("close-modal")[0];
    const modalTitle = document.getElementById("modal-title");
    const modalCode = document.getElementById("modal-code");
    const modalCarga = document.getElementById("modal-carga");
    const modalEmenta = document.getElementById("modal-ementa");
    const modalBib = document.getElementById("modal-bib");

    if (modal) {
        document.querySelectorAll('.discipline-list li').forEach(li => {
            li.style.cursor = 'pointer';
            li.title = 'Clique para ver a ementa oficial (PPC 2023)';
            li.addEventListener('click', async () => {
                let subjectName = li.childNodes[0].nodeValue;
                if(subjectName) subjectName = subjectName.trim();
                
                modalTitle.innerText = subjectName;
                modalCode.innerText = "Buscando código...";
                modalCarga.innerText = "";
                modalEmenta.innerText = "Carregando dados oficiais...";
                modalBib.innerText = "";
                modal.classList.add('show');

                try {
                    const response = await fetch(`/api/ementa?subject=${encodeURIComponent(subjectName)}`);
                    const data = await response.json();
                    
                    if(response.ok) {
                        modalCode.innerText = `Código: ${data.code}`;
                        modalCarga.innerText = `Carga Horária: ${data.carga_horaria || 'Não informada'}`;
                        modalEmenta.innerText = data.ementa || 'Ementa não encontrada.';
                        modalBib.innerText = data.bibliografia_basica || 'Consulte o documento original.';
                    } else {
                        modalCode.innerText = "";
                        modalCarga.innerText = "";
                        modalEmenta.innerText = "Dados não disponíveis para esta disciplina.";
                        modalBib.innerText = "";
                    }
                } catch(e) {
                    modalEmenta.innerText = "Erro ao carregar os dados da base.";
                }
            
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
                
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

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
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    }

    // Theme logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    if (themeToggle) {
        themeToggle.innerHTML = currentTheme === 'light' ? '<span class="theme-icon">🌙</span> Dark Mode' : '<span class="theme-icon">☀️</span> Light Mode';

        themeToggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? '<span class="theme-icon">🌙</span> Dark Mode' : '<span class="theme-icon">☀️</span> Light Mode';
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    }

    // Dropdown de Laboratórios (Click)
    const labBtn = document.getElementById('lab-dropdown-btn');
    const labContent = document.getElementById('lab-dropdown-content');
    
    if (labBtn && labContent) {
        labBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            labContent.classList.toggle('show');
            labBtn.classList.toggle('open');
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});

        document.addEventListener('click', (e) => {
            if (!labBtn.contains(e.target)) {
                labContent.classList.remove('show');
                labBtn.classList.remove('open');
            }
        
    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});
    }

    // Carousel de Depoimentos
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let index = 0;
        const totalSlides = track.children.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // loop back
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // loop to end
            }
            updateCarousel();
        });
    }

});

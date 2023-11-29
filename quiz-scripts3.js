document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    let currentQuestionIndex = 0;
  
    const questions = [
        {
            question: "Which one of the following is an example of an internet search engine?",
            options: ["LINUX", "Google", "MS Word", "Windows"],
            answer: "Google"
        },
        
        {
            question: "Which of the following is not an HTML tag?",
            options: ["< select >","< input >","< textarea >","< list >" ],
            answer: "< list >"
        },

        {
            question: "Which among these is not a Web browser?",
            options: ["www","Chrome","Opera","NetSurf"],
            answer: "www"
        },

        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language","High Text Markup Language","Hyper Tabular Markup Language","None of these"],
            answer: "Hyper Text Markup Language"
        },
        {
            question:"HTTPs stands for",
            options: ["Hyper Text Transfer Protocol Secure","High Text Transfer Protocol Secure","Hyper Transfer Protocol Secure","Hyper Transfer Protocol Standard"],
            answer: "Hyper Text Transfer Protocol Secure"
        }
    ];
  
    function loadQuestion(questionIndex) {
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-option');
            button.onclick = () => selectOption(option);
            optionsElement.appendChild(button);
        });
    }
  
    function selectOption(selected) {
        const question = questions[currentQuestionIndex];
        if (selected === question.answer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    }
  
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Quiz completed!');
            currentQuestionIndex = 0;
        }
        loadQuestion(currentQuestionIndex);
    });
  
    loadQuestion(currentQuestionIndex);
  });
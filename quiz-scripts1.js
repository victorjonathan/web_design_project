document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    let currentQuestionIndex = 0;
  
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["New York", "London", "Paris", "Dubai"],
            answer: "Paris"
        },
        
        {
            question: "Which one of the following is not a Union Territory?",
            options: ["Chandigarh", "Andaman and Nicobar Islands", "Puducherry","Tripura" ],
            answer: "Tripura"
        },

        {
            question: "Which among the following is the capital of Oman?",
            options: ["Muscat","Male","Moscow","None of the above"],
            answer: "Muscat"
        },

        {
            question: "Which is the capital of Meghalaya?",
            options: ["Kohima","Imphal","Shillong","Aizol"],
            answer: "Shillong"
        },
        {
            question:"What is the capital of Qatar?",
            options: ["Doha","Abu Dhabi","Jeddah","Manama"],
            answer: "Doha"
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
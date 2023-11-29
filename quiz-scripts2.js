document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    let currentQuestionIndex = 0;
  
    const questions = [
        {
            question: "1) What is the pH value of the human body?",
            options: ["9.2 to 9.8", "7.0 to 7.8", "6.1 to 6.3", "5.4 to 5.6"],
            answer: "7.0 to 7,8"
        },
        
        {
            question: "Which of the following are called Key Industrial animals?",
            options: ["Producers","Tertiary Consumers","Primary Consumers","None Of These" ],
            answer: "Primary Consumers"
        },

        {
            question: "Elections to panchayats in state are regulated by",
            options: ["Gram panchayat","Nagar Nigam","Election Commission of India","State Election Commission"],
            answer: "State Election Commission"
        },

        {
            question: "Forming of Association in India is",
            options: ["Legal Right","Illegal Right","Natural Right","Fundamental Right"],
            answer: "Fundamental Right"
        },
        {
            question:"Which of the given cities is located on the bank of river Ganga?",
            options: ["Patna","Gwalior","Bhopal","Mathura"],
            answer: "Patna"
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
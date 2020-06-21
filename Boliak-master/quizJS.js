(function () {
    function quiz() {
        const output = [];
        quizQuestionsWeb.forEach(
            (currentQuestion, questionNumber) => {
                const answer = [];
                for (letter in currentQuestion.answer) {
                    answer.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answer[letter]}
                  </label>`
                    );
                }
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answer"> ${answer.join('')} </div>`
                );
            }
        );
        quizBody.innerHTML = output.join('');
    }

    function showResult() {
        const answerContainers = quizBody.querySelectorAll('.answer');
        let number = 0;
        quizQuestionsWeb.forEach(
            (currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    number++;
                    answerContainers[questionNumber].style.color = 'darkgreen';
                }
                else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            }
        );
        result.innerHTML = `${number} out of ${quizQuestionsWeb.length}`;
    }

    const quizBody = document.getElementById('quiz1');
    const result = document.getElementById('results1');
    const submitBTN = document.getElementById('submit1');

    const quizQuestionsWeb = [
        {
            question: "Що таке SQL?",
            answer: {
                a: "Structured Question Language",
                b: "Standarted Query Language",
                c: "Structured Query Language"
            },
            correctAnswer: "c"
        },
        {
            question: "Що таке HTML?",
            answer: {
                a: "HyperText Marking Language",
                b: "HyperText Markup License",
                c: "HyperText Markup Language"
            },
            correctAnswer: "c"
        },
        {
            question: "Що таке HTTP?",
            answer: {
                a: "протокол передачі даних, що використовується в комп'ютерних мережах",
                b: " програмне забезпечення для комп'ютера або іншого електронного пристрою",
                c: "адреса мережевого інформаційного ресурсу"
            },
            correctAnswer: "a"
        }
    ];

    quiz();

    submitBTN.addEventListener('click', showResult);
})();

(function () {
    function quiz() {
        const output = [];
        quizQuestionsUX.forEach(
            (currentQuestion, questionNumber) => {
                const answer = [];
                for (letter in currentQuestion.answer) {
                    answer.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answer[letter]}
                  </label>`
                    );
                }
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answer"> ${answer.join('')} </div>`
                );
            }
        );
        quizBody.innerHTML = output.join('');
    }

    function showResult() {
        const answerContainers = quizBody.querySelectorAll('.answer');
        let number = 0;
        quizQuestionsUX.forEach(
            (currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    number++;
                    answerContainers[questionNumber].style.color = 'lightgreen';
                }
                else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            }
        );
        result.innerHTML = `${number} out of ${quizQuestionsUX.length}`;
    }

    const quizBody = document.getElementById('quiz3');
    const result = document.getElementById('results3');
    const submitBTN = document.getElementById('submit3');

    const quizQuestionsUX = [
        {
            question: "Тематичний аналіз використовується для аналізу:",
            answer: {
                a: "Кількісні дані, отримані в результаті кількісного тестування",
                b: "Якісні дані, отримані в результаті опитування користувачів",
                c: "Біометричні дані, отримані з пристроїв, які відстежують фізичні прояви емоцій користувачів"
            },
            correctAnswer: "b"
        },
        {
            question: "Що таке UI копія?",
            answer: {
                a: "Текст посилання",
                b: "Дуже короткий вміст, який використовується для заголовків, ліній тематики електронної пошти, заголовків сторінок чи підказок",
                c: "Мітки для команд, які відображаються у кнопках, пунктах меню та інших елементах, орієнтованих на дії в інтерфейсі користувача",
                d: "Все вищеперераховане"
            },
            correctAnswer: "c"
        },
        {
            question: "Що таке когнітивна карта?",
            answer: {
                a: "дерево представлення ментальної моделі людини для певного процесу чи концепції",
                b: "графічне зображення ментальної моделі, в якій вузли представляють поняття і пов'язані через мічені, спрямовані краї, які ілюструють зв'язки між ними",
                c: "будь-яке візуальне зображення психічної моделі людини (або групи) для певного процесу чи концепції"
            },
            correctAnswer: "c"
        }
    ];

    quiz();

    submitBTN.addEventListener('click', showResult);
})();

(function () {
    function quiz() {
        const output = [];
        quizQuestionsReact.forEach(
            (currentQuestion, questionNumber) => {
                const answer = [];
                for (letter in currentQuestion.answer) {
                    answer.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answer[letter]}
                  </label>`
                    );
                }
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answer"> ${answer.join('')} </div>`
                );
            }
        );
        quizBody.innerHTML = output.join('');
    }

    function showResult() {
        const answerContainers = quizBody.querySelectorAll('.answer');
        let number = 0;
        quizQuestionsReact.forEach(
            (currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    number++;
                    answerContainers[questionNumber].style.color = 'lightgreen';
                }
                else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            }
        );
        result.innerHTML = `${number} out of ${quizQuestionsReact.length}`;
    }

    const quizBody = document.getElementById('quiz4');
    const result = document.getElementById('results4');
    const submitBTN = document.getElementById('submit4');

    const quizQuestionsReact = [
        {
            question: "Чи можна писати без використання Babel?",
            answer: {
                a: "Так",
                b: "Ні"
            },
            correctAnswer: "a"
        },
        {
            question: "React JS це?",
            answer: {
                a: "MVC-фреймворк",
                b: "JavaScript бібліотека",
                c: "фреймворк"
            },
            correctAnswer: "b"
        },
        {
            question: "Чим властивості відрізняються від станів?",
            answer: {
                a: "Стани можна змінювати, а властивості ні",
                b: "Властивості можна змінювати, а стани ні",
                c: "Стани для роботи зі значеннями, властивості для роботи з функціями",
                d: "Властивості для роботи зі значеннями, стани для роботи з функціями"
            },
            correctAnswer: "a"
        }
    ];

    quiz();

    submitBTN.addEventListener('click', showResult);
})();

(function () {
    function quiz() {
        const output = [];
        quizQuestionsJS.forEach(
            (currentQuestion, questionNumber) => {
                const answer = [];
                for (letter in currentQuestion.answer) {
                    answer.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answer[letter]}
                  </label>`
                    );
                }
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answer"> ${answer.join('')} </div>`
                );
            }
        );
        quizBody.innerHTML = output.join('');
    }

    function showResult() {
        const answerContainers = quizBody.querySelectorAll('.answer');
        let number = 0;
        quizQuestionsJS.forEach(
            (currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    number++;
                    answerContainers[questionNumber].style.color = 'lightgreen';
                }
                else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            }
        );
        result.innerHTML = `${number} out of ${quizQuestionsJS.length}`;
    }

    const quizBody = document.getElementById('quiz2');
    const result = document.getElementById('results2');
    const submitBTN = document.getElementById('submit2');

    const quizQuestionsJS = [
        {
            question: "JavaScript це ECMAScript",
            answer: {
                a: "Правильно",
                b: "Неправильно",
            },
            correctAnswer: "a"
        },
        {
            question: "Під яким тегом використовується JavaScript в HTML?",
            answer: {
                a: "code",
                b: "JavaScript",
                c: "script"
            },
            correctAnswer: "c"
        },
        {
            question: "Що з перерахованого є JavaScript-об'єктом?",
            answer: {
                a: "var obj = new Object();",
                b: "var obj = new Array();",
                c: "var obj = new List();"
            },
            correctAnswer: "a"
        }
    ];

    quiz();

    submitBTN.addEventListener('click', showResult);
})();

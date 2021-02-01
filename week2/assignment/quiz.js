const quiz = [
    { question: 'What country has the most natural lakes?', answer: 'Canada' },
    { question: 'What is the oldest city in the world?', answer: 'Damascus' },
    { question: 'What is the deepest point in the Earths ocean?', answer: 'Mariana Trench' },
    { question: 'What is the only continent with land in all four hemispheres?', answer: 'Africa' },
    { question: 'What is the fastest flowing river in the world?', answer: 'The Amazon River' },
    { question: 'What is the least populated state in the US?', answer: 'Wyoming' }
];

const randomIdx = Math.round(Math.random() * quiz.length - 1);
const userQuestion = window.prompt(quiz[randomIdx].question);
window.alert('You answered ' + userQuestion + '. The answer is ' + quiz[randomIdx].answer + '! Refresh to try again.');
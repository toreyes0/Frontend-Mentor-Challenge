const allQuestions = document.querySelectorAll('.main-item');
const questionBlock = document.querySelectorAll('.main-list');

allQuestions.forEach((mainItem) => {
  mainItem.addEventListener('click', () => {
    const answerOutput = mainItem.querySelector('.answer');
    const question = mainItem.querySelector('.question');
    const arrow = mainItem.querySelector('.arrow');

    answerOutput.classList.toggle('shown');
    question.classList.toggle('active');
    arrow.classList.toggle('rotate');
  });
});

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

var questions = [
  new Question(
    'HTML gej yu ve?',
    [
      'Hyper Text Markup Language',
      ' Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
      'Hyper TCP Markup Language',
    ],
    'Hyper Text Markup Language'
  ),
  new Question(
    'Web standard iig hen togtoodog ve?',
    ['Mozila ', 'Google', 'Microsoft', 'The World Wide Web Consortium'],
    'The World Wide Web Consortium'
  ),
  new Question(
    'CSS gej yu ve',
    [
      'Cascading Style Sheet',
      'Cyber Security Standards',
      'Creative Style Sheet',
      'Colorful Style Sheet ',
    ],
    'Cascading Style Sheet'
  ),
  new Question(
    'Ali tag n dotor Javascript bichdeg ve',
    ['script', 'css', 'body', 'style'],
    'script'
  ),
  new Question(
    'JavaScript-nd comment yaj bichdeg ve',
    [
      '// ene bol comment',
      '/* Ene bol comment */',
      'JavaScript-nd comment bichij boldoggui',
      'Ali n ch bish bna',
    ],
    '// ene bol comment'
  ),
];

var quiz = new Quiz(questions);

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById('choice' + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress();
  }
}

populate();

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML =
    '<div class="progress-number">' +
    currentQuestionNumber +
    '</div>' +
    ' of ' +
    '<div class="progress-number">' +
    quiz.questions.length +
    '</div>';
}

function showScores() {
  var gameOver = '<h1>Result</h1>';
  gameOver +=
    "<h2 id='score' style='text-align:center;'>Your Score: " +
    quiz.score +
    '</h2>';
  var element = document.getElementById('quiz');
  element.innerHTML = gameOver;
}

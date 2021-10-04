# javascript-multiple-choice-challange

A timed coding quiz with multiple-choice questions. This app will run in the browser and will feature build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.

## Application Flow

- Click on the START button

  - start the timer
  - render the first question on the page

- When user clicks/selects an answer
  - check if the selected answer is correct
    - if answers is wrong then subtract x seconds from the timers time remaining and render next question
    - if answer is correct then render the next question
      - if the question is the last question then display score

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

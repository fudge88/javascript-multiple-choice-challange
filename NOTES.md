## Application Flow

- Click on the START button

  - start the timer
  - render the first question on the page

- When user clicks/selects an answer
  - check if the selected answer is correct
    - if answers is wrong then subtract x seconds from the timers time remaining and render next question
    - if answer is correct then render the next question
      - if the question is the last question then display score

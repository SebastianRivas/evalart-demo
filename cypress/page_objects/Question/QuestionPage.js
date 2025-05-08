import { PageObject } from "../PageObject";

export class QuestionPage extends PageObject {
  get questionOneParagraph() {
    return 'p[class="text-center text-xl"]';
  }

  get answerQuestionOneInput() {
    return 'input[name="number"]';
  }

  get questionTwoInput() {
    return 'input[type="checkbox"]';
  }

  get sendAnswersQuestionsButton() {
    return 'button[class=" border-black p-2 border-2 rounded-md mx-auto hover:bg-blue-300"]';
  }

  solveCharacterOccurrence(expect_character) {
    cy.get(this.questionOneParagraph)
      .eq(1)
      .invoke("text")
      .then((val) => {
        let evaluated_string = String(val);
        let occurrence = (
          evaluated_string.match(new RegExp(expect_character, "g")) || []
        ).length;

        this.type(this.answerQuestionOneInput, occurrence);
      });
  }

  solveMultiplesOf(a_number) {
    cy.get(this.questionTwoInput).each((element, index, list) => {
      cy.wrap(element)
        .invoke("val")
        .then((val) => {
          let element_value = parseInt(val);

          if (element_value % a_number == 0) {
            cy.wrap(element).check();
          }
        });
    });
  }

  sendAnswers() {
    this.click(this.sendAnswersQuestionsButton);
  }
}

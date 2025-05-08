import { Given, When, Then, BeforeAll, Before } from "@badeball/cypress-cucumber-preprocessor";
import { QuestionPage } from "../page_objects/Question/QuestionPage";

Before(function () {
  this.objQuestionPage = new QuestionPage();
});

Then("Tester resuelve las preguntas con los siguientes datos", function (table) {
  let hash_table = table.hashes();

  hash_table.forEach((element) => {
    this.objQuestionPage.solveCharacterOccurrence(element.character);
    this.QuestiobjQuestionPageonPage.solveMultiplesOf(element.number);
    this.objQuestionPage.sendAnswers();
  });
});

Then("Tester verifica que se lance el mensaje {string}", function (message) {
  // CommonActions.expect_contain(message);
});

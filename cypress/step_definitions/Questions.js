import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import QuestionPage from "../page_objects/Question/QuestionPage";

Then("Tester resuelve las preguntas con los siguientes datos", function (table) {
    let hash_table = table.hashes();

    hash_table.forEach((element) => {
      QuestionPage.solveCharacterOccurrence(element.character);
      QuestionPage.solveMultiplesOf(element.number);
      QuestionPage.sendAnswers();
    });
});

Then("Tester verifica que se lance el mensaje {string}", function (message) {
  // CommonActions.expect_contain(message);
});

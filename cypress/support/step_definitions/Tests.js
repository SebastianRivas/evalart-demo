import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginActions } from "../actions/Login/LoginActions";
import { TestsActions } from "../actions/Tests/TestsActions";
import { CommonActions } from "../actions/Common/CommonActions";

Then("Tester resuelve las preguntas con los siguientes datos", function (table) {
    let hash_table = table.hashes();

    hash_table.forEach(element => {
        TestsActions.fill_character_occurrence(element.character);
        TestsActions.select_multiples_of(element.number);
        TestsActions.send_answers();
    });
});

Then("Tester verifica que se lance el mensaje {string}", function (message) {
    CommonActions.expect_contain(message);
})
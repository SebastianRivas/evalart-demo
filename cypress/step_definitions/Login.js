import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/Login/LoginPage";

Given("Tester desea ingresar al login", function () {
  LoginPage.navigateTo();
});

When("Tester ingresa {string} como usuario y {string} como contraseña", function (user, passwd) {
    LoginPage.login(user, passwd);
});

Then("Tester verifica que puede accer al aplicativo", function () {
//   CommonActions.actual_url_eq(
//     "https://tasks.evalartapp.com/automatization/forms/test"
//   );
});

Then("Tester verifica que no puede accder al aplicativo", function () {
//   CommonActions.expect_contain("Id incorrecto, intenta otra vez");
});

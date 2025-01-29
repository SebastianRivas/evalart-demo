import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginActions } from "../actions/Login/LoginActions";
import { CommonActions } from "../actions/Common/CommonActions";

Given("Tester desea ingresar al login", function () {
    LoginActions.visit();
});

When("Tester ingresa {string} como usuario y {string} como contraseña", function (user, passwd) {
    LoginActions.fill_login_form(user, passwd);
});

Then("Tester verifica que puede accer al aplicativo", function () {
    CommonActions.actual_url_eq("https://tasks.evalartapp.com/automatization/forms/test")
});

Then("Tester verifica que no puede accder al aplicativo", function () {
    CommonActions.expect_contain("Id incorrecto, intenta otra vez");
});
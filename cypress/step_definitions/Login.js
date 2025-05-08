import { Given, When, Then, BeforeAll, Before } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../page_objects/Login/LoginPage";

Before(function () {
  this.objLoginPage = new LoginPage();
});

Given("Tester desea ingresar al login", function () {
  this.objLoginPage.navigateTo();
});

When("Tester ingresa {string} como usuario y {string} como contraseña", function (user, passwd) {
  this.objLoginPage.login(user, passwd);
});

Then("Tester verifica que puede accer al aplicativo", function () {
  this.objLoginPage.assertUrl("https://tasks.evalartapp.com/automatization/buttons/test");
});

Then("Tester verifica que no puede accder al aplicativo", function () {
  this.objLoginPage.assertContent('p[class="text-red-500 text-xl text-center"]', "Id incorrecto, intenta otra vez");
});

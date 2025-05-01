export default class PageObject {
  visit(path) {
    cy.visit(path);
  }

  url() {
    cy.url();
  }

  type(target, value) {
    cy.get(target).clear().type(value);
  }

  click(target) {
    cy.get(target).click();
  }

  wait(timeout) {
    cy.wait(timeout);
  }

  waitVisible(target, timeout) {
    cy.get(target, { timeout }).should("be.visible");
  }

  assertUrl(expect_url) {
    cy.url().should("eq", expect_url);
  }

  assertContent(target, expect_content) {
    cy.get(target).contains(expect_content);
  }
}

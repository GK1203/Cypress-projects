/// <reference types="cypress" />

describe("Wejście do zakładki Contact US oraz wysłanie wiadomości", () => {
    it("Otworzenie strony sklepu", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.wait(1000);
        cy.url().should("include", "http://www.automationpractice.pl/index.php");
    })
    it("Przejście do formularza kontaktowego", () => {
        cy.get("#contact-link > a").click();
        cy.wait(1000);
        cy.url().should("include", "http://www.automationpractice.pl/index.php?controller=contact");
    })
    it("Uzupełnienie danych formularza oraz jego wysłanie", () => {
        cy.get("#id_contact").select("Webmaster");
        cy.get("#email").type("gk1122@gmail.com");
        cy.get("#id_order").type("Reklamacja");
        cy.wait(1000);
        cy.get("#message").type("Składam reklamacje na obsługę sklepu");
        cy.get("#submitMessage").click();
    })
    it("Zweryfikowanie czy wiadomość została wysłana", () => {
        cy.contains("Your message has been successfully sent to our team.");
    })
}) 
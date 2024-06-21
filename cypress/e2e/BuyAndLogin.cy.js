/// <reference types="cypress" />

describe("Zakup przykładowego produktu na stronie sklepu", () => {
    it("Wejście na stronę www", () => {
        cy.visit("http://www.automationpractice.pl");
        cy.wait(1500);
    })
    it("Dodanie do koszyka pierwszego produktu", () => {
        cy.get("#block_top_menu > ul > li:nth-child(2) > a").click();
        cy.wait(1500);
        cy.get("#grid > a > i").click();
        cy.get("#center_column > ul > li:nth-child(2) > div").trigger("mouseover");
        cy.get("#center_column > ul > li:nth-child(2) > div > div.right-block > div.button-container > a").click();
        cy.wait(1500);
        cy.get("#group_1").select("M");
        cy.get("#color_24").click();
        cy.wait(1000);
        cy.get("#add_to_cart > button").click();
        cy.wait(1000);
    })
    it("Przejście do koszyka i potwierdzenie jego zawartości", () => {
        cy.get("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a").click();
        cy.wait(1000);
        cy.get("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span").click();
    })
    it("Logowanie do konta klienta", () => {
        cy.get("#email").type("grz133@gmail.com");
        cy.get("#passwd").type("zaq12wsx");
        cy.get("#SubmitLogin").click();
    })
    it("Finalizacja zamówienia", () => {
        cy.get("#center_column > form > p > button").click();
        cy.wait(1000);
        cy.get("#cgv").check();
        cy.get("#form > p > button").click();
    })
    it("Wybór metody płatności", () => {
        cy.get("#HOOK_PAYMENT > div:nth-child(1) > div").click();
        cy.wait(1000);
        cy.get("#cart_navigation > a").click();
        cy.get("#HOOK_PAYMENT > div:nth-child(2) > div").click();
        cy.get("#cart_navigation > button").click();
        cy.contains("Your order on My Shop is complete.");

    })
})
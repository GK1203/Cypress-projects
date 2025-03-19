/// <reference types="cypress" />

describe("Kilka przykładowych interakcji w portalu sklepu", () => {
    it("Wejście na stronę www", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
    })
    it("Sprawdzanie poprawności otwierania się zakładki Women", () => {
        cy.get('#block_top_menu > ul > li:nth-child(1)').click();
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?id_category=3&controller=category');
        cy.get('#categories_block_left > h2').contains("Women");
        cy.get('#selectProductSort').select("In stock");
        cy.get('#center_column > ul > li:nth-child(2) > div > div.left-block').trigger('mouseover');
        cy.get('#center_column > ul > li:nth-child(2) > div > div.right-block > div.button-container > a').click();
        cy.get('#color_to_pick_list > li:nth-child(1)').click();
        cy.get('#add_to_cart > button').click();
        cy.contains('Product successfully added to your shopping cart');
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span').click();


    })
    it("Sprawdzanie poprawności otwierania się zakładki Dresses", () => {
        cy.get('#block_top_menu > ul > li:nth-child(2)').click();
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?id_category=8&controller=category');
        cy.get('#categories_block_left > h2').contains("Dresses");
    })
    it("Sprawdzanie poprawności otwierania się zakładki T-Shirts", () => {
        cy.get('#block_top_menu > ul > li:nth-child(3)').click();
        cy.url().should('eq', 'http://www.automationpractice.pl/index.php?id_category=5&controller=category');
        cy.get('#layered_block_left > p').contains("Catalog");
    })
    it("Sprawdzenie stanu koszyka", () => {
        cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click();
        cy.wait(1000);
        cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium').should('exist');
    })

})

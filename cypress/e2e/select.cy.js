/// <reference types="cypress" />

describe("Wybór konkretnego produktu na stronie sklepu", () => {
    it("Wejście na stronę", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
    })
    it("Wybór zakładki odzieży", () => {
        cy.get("#block_top_menu > ul > li:nth-child(1) > a").click();
    })
    it("Definiowanie rozmiaru, koloru itd", () => {
        cy.get("#layered_category_4").check().should("be.checked");
        cy.get("#layered_id_attribute_group_3").check().should("be.checked");
    })
    it("Wejście w produkt", () => {
        cy.get("#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.last-item-of-tablet-line.last-mobile-line > div > div.left-block").trigger("mouseover");
        cy.get("#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.last-item-of-tablet-line.last-mobile-line > div > div.right-block > div.button-container > a").click();
        cy.get("#group_1").select("L");
        cy.get("#color_8").click();
        cy.get("#add_to_cart > button").click();
    })
    it("Weryfikacja założenia", () => {
        cy.contains("Product successfully added to your shopping cart");
    })
})

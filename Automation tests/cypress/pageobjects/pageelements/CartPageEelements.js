/// <reference types="cypress" />


const or = require("../../../locators.json")

export default class CartPageEelements{



    getContinueShoppingButton() {
        
        
        return cy.get(or.CartPage.ContinuShopping) // Continue shopping css locator
    }

    getRemoveButton() {
        
        return cy.get(or.CartPage.RemoveElement) // Remove element css locator

    }

    getCheckoutButton() {
        return cy.get(or.CartPage.Checkout) // checkout css locator
    }

}
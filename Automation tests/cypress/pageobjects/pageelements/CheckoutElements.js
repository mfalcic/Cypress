/// <reference types="cypress" />


const or = require("../../../locators.json")

export default class CheckoutPage{
    
    getFirstName() {

        return cy.get(or.CheckoutPage.FirstName)

    }

    getLastName() {

        return cy.get(or.CheckoutPage.LastName)

    }

    getZip() {

        return cy.get(or.CheckoutPage.Zip)

    }

    getContinueButton() {
        return cy.get(or.CheckoutPage.Continue)
    }

    getFinishOrderButton() {
        return cy.get(or.CheckoutPage.FinishOrder)
    }


}
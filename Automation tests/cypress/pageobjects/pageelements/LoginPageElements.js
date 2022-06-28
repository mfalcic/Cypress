/// <reference types="cypress" />

const or = require("../../../locators.json")// Reading data from locators.json

// deklaracija klase
export default class LoginPageElements{


    getLoginBtn() {
        
        
        return cy.get(or.loginPage.loginBtn) // Login button css locator
    }

    getUsernameField() {
        
        
        return cy.get(or.loginPage.usernameField) // username field css locator
    }
    getErrorMessageField() {

        return cy.get(or.loginPage.errorMessage) // error message text 
        
    }

    getPasswordField() {


        return cy.get(or.loginPage.passwordField_locator) // passwrod field css locaotr


    }

}
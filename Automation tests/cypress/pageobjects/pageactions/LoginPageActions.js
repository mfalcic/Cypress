/// <reference types="cypress" />

import LoginPageElements from '../pageelements/LoginPageElements'

const element = new LoginPageElements() // Login page element

export default class LoginPageActions{

    navigateToUrl(){ // Url declared in cypress.json


        cy.visit('/')


    }


    validateTitle() { // Get title


        return cy.title()



    }


}
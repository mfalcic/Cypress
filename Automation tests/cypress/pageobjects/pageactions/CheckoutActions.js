/// <reference types="cypress" />

import CheckoutPageEelements from '../pageelements/CheckoutElements'

const element = new CheckoutPageEelements()

export default class CheckoutActions{

    // Personal data form locators
    fillInformation(fistName,lastName,zip) {
        
        element.getFirstName().type(fistName)
        element.getLastName().type(lastName)
        element.getZip().type(zip)
    }
    
    continue() {
        element.getContinueButton().click() // Contrinue button locator
    }
    finishOrder() {
        element.getFinishOrderButton().click() // Finish button locator
    }
}
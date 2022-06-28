/// <reference types="cypress" />

import InventoryPageElementes from '../pageelements/InventoryPageElementes'

const element = new InventoryPageElementes() // Object with all Inventory page elements

export default class InventoryPageActions{

    //Validate product name function
    validateProductName(product){

        cy.on(element.backPackName(),(product)=>{

            expect(product).contains(product)
  
          })


    }

    addProductToCart() {
        element.addBacpack().click() // Add bacpack product button
    }

    goToShoppingCart() {
        element.getShoppingCart().click() // Shopping cart button
    }
    addBikeLight() {
        element.addBikeLight().click() // Add bike product button
    }

}
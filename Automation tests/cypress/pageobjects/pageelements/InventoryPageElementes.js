/// <reference types="cypress" />


const or = require("../../../locators.json")// Reading data from locators.json

export default class InventoryPageElementes{


    backPackName() {
        
        
        return cy.get(or.Backpac.SauceLabsBackapcName_Link) // Bacpack product css locator
    }

    backpackDetails() {
        
        
        return cy.get(or.Backpac.SauceLabsBacpack_Details) //bacpackp details button locator
    }

    addBacpack() {


        return cy.get(or.Backpac.SauceLabsBackpack_Add)//bacpackp add button locator


    }

    bikeLightName() {
        
        
        return cy.get(or.BikeLight.SauceLabsBikeLight_Name)// Bike light name css locator
    }

    bikeLightDetails() {
        
        
        return cy.get(or.BikeLight.SauceLabsBikeLight_Details) // Bike light details css locator
    }

    addBikeLight() {


        return cy.get(or.BikeLight.SauceLabsBikeLight_Add) // Bike light add css locator


    }
    getShoppingCart() {

        return cy.get(or.BikeLight.ShoppingCart) // Shopping button css locator

    }

}
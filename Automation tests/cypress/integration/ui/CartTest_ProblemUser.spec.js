/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'
import InventoryPageActions from '../../pageobjects/pageactions/InventoryPageActions'
import CartPageActions from '../../pageobjects/pageactions/CartPageActions'

describe("Login as a Problem User",()=>{

    //Objects for page actions
    const loginPage = new LoginPageActions() 
    const inventoryPage = new InventoryPageActions()
    const cartPage = new CartPageActions()

    //Read all test data from testdata.json
    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })
    
    beforeEach(()=>{    
        loginPage.navigateToUrl()

    })    
    
    it("Verify that the correct items are present",()=>{

        cy.login(data.problem_user_username,data.password) //login using support/commands.js
        inventoryPage.addProductToCart() // add product
        inventoryPage.goToShoppingCart() // view shopping cart
        cartPage.continueShopping()// back to shopping
        inventoryPage.addBikeLight()// add product
        inventoryPage.goToShoppingCart()// view shopping cart
        // To Do read from a list
        cy.get('.inventory_item_name').should('contain.text',data.backpackName)
        cy.get('#item_0_title_link > .inventory_item_name').should('contain.text',data.bikeLightName) // check if the valid products where added

    })


    it("Verify remove item is present",()=>{

        cy.login(data.problem_user_username,data.password) //login using support/commands.js
        inventoryPage.addProductToCart() // add product
        inventoryPage.goToShoppingCart() // view shopping cart
        cartPage.continueShopping()// back to shopping
        inventoryPage.addBikeLight()// add product
        inventoryPage.goToShoppingCart()// view shopping cart
        //To Do you need to remove the first element from a list
        cartPage.removeElement()
        cy.get('#item_0_title_link > .inventory_item_name').should('not.have',data.bikeLightName) // Check if the one product exist

    })
    
})
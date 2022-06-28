/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'
import InventoryPageActions from '../../pageobjects/pageactions/InventoryPageActions'
import CartPageActions from '../../pageobjects/pageactions/CartPageActions'
import CheckoutActions from '../../pageobjects/pageactions/CheckoutActions'

describe("Login as Locked User",()=>{

    // Objects for page actions
    const loginPage = new LoginPageActions() 
    const inventoryPage = new InventoryPageActions()
    const cartPage = new CartPageActions()
    const checkoutPage = new CheckoutActions()

    // Read test data from tesdata.json
    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })
    // Open Website
    beforeEach(()=>{    
        loginPage.navigateToUrl()

    })    
    
    it("Verify that the order is completed successfully with the displayed message",()=>{

        cy.login(data.locked_out_user_usename,data.password) //login using support/commands.js
        inventoryPage.addProductToCart() // add product
        inventoryPage.goToShoppingCart() // view shopping cart
        cartPage.continueShopping() // back to shopping
        inventoryPage.addBikeLight() // add product
        inventoryPage.goToShoppingCart() // view shopping cart
        //To Do you need to remove the first element from a list
        cartPage.removeElement() // Remove element from shopping cart
        cartPage.checkout() 
        checkoutPage.fillInformation(data.firstName,data.lastName,data.zip) // Fill chekcout form
        checkoutPage.continue()
        cy.get('.title').should('contain.text',data.checkoutOveriew) // validate if the right page is displayed
        cy.get('.inventory_item_name').should('contain.text',data.backpackName) // validate product 
        cy.get('.cart_quantity').should('contain.text','1') // validate the quantity of your products
        checkoutPage.finishOrder() // finish order
        cy.get('.title').should('contain.text',data.CheckoutComplete) // validate complete
        cy.get('.complete-text').should('contain.text',data.Message) // validate finish ordering
    })

})
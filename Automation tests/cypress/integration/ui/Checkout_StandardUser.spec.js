/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'
import InventoryPageActions from '../../pageobjects/pageactions/InventoryPageActions'
import CartPageActions from '../../pageobjects/pageactions/CartPageActions'
import CheckoutActions from '../../pageobjects/pageactions/CheckoutActions'

describe("Login as Standard User",()=>{

    const loginPage = new LoginPageActions() 
    const inventoryPage = new InventoryPageActions()
    const cartPage = new CartPageActions()
    const checkoutPage = new CheckoutActions()

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })
    
    beforeEach(()=>{    
        loginPage.navigateToUrl()

    })    
    
    it("Verify that the order is completed successfully with the displayed message",()=>{

        cy.login(data.standar_user_username,data.password) 
        inventoryPage.addProductToCart() 
        inventoryPage.goToShoppingCart()
        cartPage.continueShopping()
        inventoryPage.addBikeLight()
        inventoryPage.goToShoppingCart()
        //To Do you need to remove the first element from a list
        cartPage.removeElement()
        cartPage.checkout()
        checkoutPage.fillInformation(data.firstName,data.lastName,data.zip)
        checkoutPage.continue()
        cy.get('.inventory_item_name').should('contain.text',data.backpackName)
        cy.get('.cart_quantity').should('contain.text','1')
        checkoutPage.finishOrder()
        cy.get('.title').should('contain.text',data.CheckoutComplete)
        cy.get('.complete-text').should('contain.text',data.Message)
    })

})
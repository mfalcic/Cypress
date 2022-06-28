/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'
import InventoryPageActions from '../../pageobjects/pageactions/InventoryPageActions'
import CartPageActions from '../../pageobjects/pageactions/CartPageActions'

describe("Login as Standard User",()=>{

    const loginPage = new LoginPageActions() 
    const inventoryPage = new InventoryPageActions()
    const cartPage = new CartPageActions()

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })
    
    beforeEach(()=>{    
        loginPage.navigateToUrl()

    })    
    
    it("Verify that the correct items are present",()=>{

        cy.login(data.standar_user_username,data.password) 
        inventoryPage.addProductToCart() 
        inventoryPage.goToShoppingCart()
        cartPage.continueShopping()
        inventoryPage.addBikeLight()
        inventoryPage.goToShoppingCart()
        // To Do read from a list
        cy.get('.inventory_item_name').should('contain.text',data.backpackName)
        cy.get('#item_0_title_link > .inventory_item_name').should('contain.text',data.bikeLightName)

    })


    it("Verify remove item is present",()=>{

        cy.login(data.standar_user_username,data.password) 
        inventoryPage.addProductToCart() 
        inventoryPage.goToShoppingCart()
        cartPage.continueShopping()
        inventoryPage.addBikeLight()
        inventoryPage.goToShoppingCart()
        //To Do you need to remove the first element from a list
        cartPage.removeElement()
        cy.get('#item_0_title_link > .inventory_item_name').should('not.have',data.bikeLightName)

    })
    
})
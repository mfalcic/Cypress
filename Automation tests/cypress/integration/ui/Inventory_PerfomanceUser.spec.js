/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'
import InventoryPageActions from '../../pageobjects/pageactions/InventoryPageActions'

describe("Login as Perfomance User",()=>{

    // Objects for page actions
    const loginPage = new LoginPageActions() 
    const inventoryPage = new InventoryPageActions()

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
    
    
    it("Verify add item from the list to Cart",()=>{


        cy.login(data.perfomance_glitch_user,data.password) //login using support/commands.js
        inventoryPage.addProductToCart() // add product
        inventoryPage.goToShoppingCart()// view shopping cart
        cy.get('.title').should('contain.text',data.cartPageTitle)// Verify cart page view

        cy.get('.inventory_item_name').should('contain.text',data.backpackName) // validate the product
        cy.get('.cart_quantity').should('contain.text','1') // validate the quantity of your products
        inventoryPage.validateProductName(data.backpackName) // validate the product

        
    })

    it("Verify that the correct items are present",()=>{

        cy.login(data.perfomance_glitch_user,data.password) //login using support/commands.js
        inventoryPage.addProductToCart() //add product
        inventoryPage.goToShoppingCart() // view shopping cart
        inventoryPage.validateProductName(data.backpackName) // validate product
      



    })
    
})
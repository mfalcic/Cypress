/// <reference types="cypress" />


import LoginPageActions from '../../pageobjects/pageactions/LoginPageActions'

describe("Login as Standard User",()=>{

    const loginPage = new LoginPageActions() //Objekat LoginPageActions

    //read data from testdata.json
    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })
    //Open website

    beforeEach(()=>{    
        loginPage.navigateToUrl()
        loginPage.validateTitle().should('eq','Swag Labs')

    })    
    
    it("Verify login as Standard User",()=>{

        cy.login(data.standar_user_username,data.password) //login command
        cy.get('.title').should('contain.text','Products')
    })

    it("Verify login as locked out user",()=>{

        cy.login(data.locked_out_user_usename,data.password)//login command
        cy.get('.title').should('contain.text','Products')
    })

    it("Verify login as problem user ",()=>{

        cy.login(data.problem_user_username,data.password)//login command
        cy.get('.title').should('contain.text','Products')
    })

    it("Verify login as performance glitch user ",()=>{

        cy.login(data.perfomance_glitch_user,data.password)//login command
        cy.get('.title').should('contain.text','Products')
    })

    it("Verify login with wrong username ",()=>{

        cy.login(data.WrongUsername,data.password)//login command
        cy.get('[data-test="error"]').should('contain.text',data.errorLoginMessage)
    })
    
    it("Verify login with wrong password ",()=>{

        cy.login(data.standar_user_username,data.WrongPassword)//login command
        cy.get('[data-test="error"]').should('contain.text',data.errorLoginMessage)
    })

    it("Verify login without username and password ",()=>{

        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text',data.EmptyUsernamePasswordMessage)
    })

})
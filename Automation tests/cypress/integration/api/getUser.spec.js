/// <reference types="cypress" />

const or = require("../../../users.json")

describe("Verify Get Request",()=>{

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })
    })

    it('Should get users - added query string for specific page', ()=>{
        cy.log('GET /users - page 2');
        cy.request({
            method: 'GET',
            url: or.endpoitns.getUrl,
            qs: {
                page: 2
            }
        })
       // Request URL = "https://gorest.co.in/public-api/users?page=2"  
    })

    it('Should get users - get user by id', ()=>{
        var response = cy.request({
            method: 'GET',
            url: or.endpoitns.userById,
        })
        response.its('status').should('eq',200)
       // Request URL = "https://gorest.co.in/public-api/users?page=2"  

    })

    it('Validate GET request - Status check',()=>{

       var response = cy.request('GET',data.getUrl)
       response.its('status').should('eq',200)

    })

    it('Validate GET request - Get all users length',()=>{
 
         cy.request('GET',data.getUrl).then((response)=>{

         expect(response.status).equal(200)
         expect(response.body).to.have.length(20)
         })

    })

    it('Should get users - added several qs for specific page', ()=>{
        cy.log('GET /users - page 2 paragraph 3 word 3');
        var response = cy.request({
            method: 'GET',
            url: or.endpoitns.getUrl,
            qs:{
                page: 2,
                paragraph: 3,
                word: 3
            }
        })
        response.its('status').should('eq',200)
       // Request URL = "https://gorest.co.in/public-api/users?page=2&paragraph=3&word=3"  
       
    })
})
    
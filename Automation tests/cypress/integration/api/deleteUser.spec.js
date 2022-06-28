/// <reference types="cypress" />

const or = require("../../../users.json")

describe("Verify delete Request",()=>{

    it('Validate Sending request', ()=>{
        
        cy.log('DELETE /user/id - user should ne deleted')
            var response =  cy.request({
            method: 'DELETE',
            url:    or.endpoitns.deleteUrl,
            headers: {
                Authorization: `Bearer ${or.token}`
            },
        })
        
        response.its('status').should('eq',204)
        
    })
})
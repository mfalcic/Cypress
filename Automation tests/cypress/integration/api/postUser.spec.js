/// <reference types="cypress" />

const or = require("../../../users.json")

describe("Verify post method Request",()=>{

    it('Validate Sending post request', ()=>{
        
            var response =  cy.request({
            method: 'POST',
            url:    or.endpoitns.postURL,
            headers: {
                Authorization: `Bearer ${or.token}`
            },
            body: or.user
        })
        
        response.its('status').should('eq',201)
        //if you post ones, you need to change the user email in users.json
    })
})
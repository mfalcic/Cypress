/// <reference types="cypress" />

import CartPageEelements from '../pageelements/CartPageEelements'

const element = new CartPageEelements() // all elements from cart page

export default class CartPageActions{


    continueShopping() {
        element.getContinueShoppingButton().click() // Continue button locator
    }

    removeElement() {
        element.getRemoveButton().click() // Remove button locator
    }
    checkout() {
        element.getCheckoutButton().click() // Checkout button locator
    }

}
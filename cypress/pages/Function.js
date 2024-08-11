class Function {
  elements = {
  searchbar: () => cy.get("#twotabsearchtextbox"),
  searchbutton: ()=> cy.get("#nav-search-submit-button"),
  noresult: ()=> cy.get("div[class='a-row'] span:nth-child(1)"),
  selectedproduct: ()=>cy.get('.s-search-results .s-result-item').eq(5),
  addTocart: ()=>cy.get("#add-to-cart-button[2]"),
  addtocart:()=>cy.get('[type="submit"][value="Add to Cart"]'),
  cartcount:()=>cy.get('#nav-cart-count'),
  cartbtn: ()=>cy.get("#nav-cart"),
  shoppingtxt: ()=>cy.get("div[class='a-row'] h1"),
  quantitybox:()=>cy.get("#a-autoid-0-announce"),
  quantity: ()=>cy.get("#quantity_2"),
  productprice: ()=>cy.get(".a-size-medium.a-color-base.sc-price.sc-white-space-nowrap.sc-product-price.a-text-bold"),
  subtotal: ()=>cy.get("span[id='sc-subtotal-amount-activecart'] span[class='a-size-medium a-color-base sc-price sc-white-space-nowrap']"),
  delete: ()=>cy.get("input[value='Delete']"),
  refresh: ()=>cy.get('a > #attach-string-cart-try-again'),
  cartempty: ()=>cy.get(".a-spacing-mini.a-spacing-top-base"),

    };

    //method for entering the name in the searchbar
    productname(name){
      this.elements.searchbar().type(name);
      this.elements.searchbutton().click();
    }

    //method for entering the name in the searchbar
    productname1(proname){
      this.elements.searchbar().type(proname);
      this.elements.searchbutton().click();
    }

    //method for validating the result for nonexisting product
    validation(){
      this.elements.noresult().should('contain.text','No results for');
    }

    //method to select the fourth item from the result and add it to the cart
    addTocart(){
      this.elements.selectedproduct().within(() => {
        cy.get('h2 a').first().invoke('attr', 'href').then((href) => {
          cy.visit(`https://www.amazon.in${href}`);
        });
      });
      cy.wait(7000);
      this.elements.addtocart().click(); cy.wait(10000);
      this.elements.refresh().click();
      this.elements.cartbtn().click(); cy.wait(5000);
      this.elements.shoppingtxt().should("contain.text","Shopping Cart");  
    }


    //method to remove the item from the cart
    remove(){
      this.elements.delete().click();
      this.elements.cartempty().should("contain.text","Your Amazon Cart is empty")
    }

    //method to change the quantity of the item present in the cart
    quantity(){
      this.elements.quantitybox().click();
      this.elements.quantity().click();
  }

    //method to verify that the price is different after increasing the quantity of product
    verifyThePrice(){
      this.elements.productprice().first().invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        this.elements.subtotal().first().invoke('text').then((subtotalText) => {
          const subtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));
          expect(subtotal).to.not.eq(price * 2); // Check if the subtotal equals the price of two items
        });
    });
    }


}

export const funct = new Function();

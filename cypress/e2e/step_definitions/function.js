import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { funct } from "@pages/Function";

Given("A web browser is at the amazon page", () => {
  cy.visit("/");
});

When("A user clicks on the search bar and enters a nonexisting name {string}, and clicks on the search button", (name) => {
  funct.productname(name);
});
Then("the user will able to see a no result message on the screen as the product doesn't exists", () => {
  funct.validation();
});

When("A user clicks on the search bar and enters a product name {string}, and clicks on the search button", (proname) => {
  funct.productname1(proname);
});

Then("a list of searched product is displayed and the user selects the fourth item from the list and adds it to the cart", () => {
   funct.addTocart();
});

Then("the user will update the quantity of the product", () => {
  funct.quantity();
});

Then("verify if the price and quantity has increased", () => {
  funct.verifyThePrice();
});

Then("the user will delete the product", () => {
  funct.remove();
});
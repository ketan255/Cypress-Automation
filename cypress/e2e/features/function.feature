Feature: Checking different features of the website

    Background:
        Given A web browser is at the amazon page 
    
    Scenario: Search for a nonexisting product
        When A user clicks on the search bar and enters a nonexisting name "1234567qwasdertgfhyuj", and clicks on the search button 
        Then the user will able to see a no result message on the screen as the product doesn't exists
    
    Scenario: Search for an existing product and add the product to the cart and update the quantity of the product to 2 and delete the product
        When A user clicks on the search bar and enters a product name "laptops", and clicks on the search button
        Then a list of searched product is displayed and the user selects the fourth item from the list and adds it to the cart
        Then the user will update the quantity of the product 
        Then verify if the price and quantity has increased 
        Then the user will delete the product 

  
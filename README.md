# E-COMMERCE REACT APP - [FASHION PASSION](https://passion-fashion.web.app/)

This application was built around the API provided by [Fake Store API](https://fakestoreapi.com/).

The application enables users to browse through available products, filter and sort them based on differenet categories.
They can also add products in the cart and make an order, which sends the order to the cart endpoint and updates the local state. 

Log in is also enabled for admin users, where the only available username and password are preentered. Admin user can work on product and cart management.

All actions related to sending POST, PATCH and DELETE requests are connected to the API which sends back a specific response object, but the database doesn't get updated.
Because of that I update the local state of the application accordingly to simulate functionality of a full-stack application.

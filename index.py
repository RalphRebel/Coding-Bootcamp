""" 
The prices of items sold at a bookstore are marked up by a given percentage rate (e.g. 20.5%). 
After marking up the prices, each item is put on sale at a discount at a given rate (e.g. 5.8%). CIT137B-Assignment 2 – Module 2 Page 
1. Ask the user for the required input (original price, mark up rate, and discount rate). 
2. Display a header as shown in the sample interaction, below. 
3. Display the values of each of the items you asked from the user (see the sample interaction). 
4. Find and display the final selling price. 
Don’t forget to use descriptive variable names. Think about the Input, processing and output steps needed to solve this problem. 
Format all output with 2 digits after the decimal point.
"""

#Ask for required input
originalPrice = float(input("Enter original price: ")) #floating point numbers
markupRate = float(input("Enter the markup rate: "))
discountRate = float(input("Enter the sale discount rate: ")) 

#Equations
afterMarkupPrice = (originalPrice + originalPrice * (markupRate / 100))
discount = (afterMarkupPrice * (discountRate / 100))

#Display Values
print("*********** Foo's Bookstore")
print("Original price " + "$" + format(originalPrice, '.2f')) #formats the specified values and insert them inside the string's placeholder
print("Markup rate " + format(markupRate, '.2f') + "%")
print("Discount rate " + format(discountRate, '.2f') + "%")
print("Price after Markup " + "$" + format(afterMarkupPrice, '.2f'))
print("Discount " + "$" + format(discount, '.2f'))
print("Please Pay: " + "$" + format(afterMarkupPrice - discount, '.2f'))

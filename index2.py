"""
Value of π can be estimated using a simple formula. such as: 4 x (1 – 1/3 + 1/5 – 1/7 + 1/9 – 1/11 + 1/13). 
The program should calculate and display the value of π using the following formulas. 
Create 4 variables, one for each approximated formula. 
1. Formula 1: 4 x (1 – 1/3)
2. Formula 2: 4 x (1 – 1/3 + 1/5)
3. Formula 3: 4 x (1 – 1/3 + 1/5 – 1/7)
4. Formula 4: 4 x (1 – 1/3 + 1/5 – 1/7 + 1/9 – 1/11 + 1/13)
5. Display the value of π using each of these formulas.
6. Calculate and display the average value of π by finding the average of results from each formula
Format all output with 6 digits after the decimal point.
"""

#created 4 variables
piFormula1 = 4 * (1 - (1/3)) #use extra parenthesis for neater code
piFormula2 = 4 * (1 - (1/3) + (1/5))
piFormula3 = 4 * (1 - (1/3) + (1/5) - (1/7))
piFormula4 = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + (1/13))

#displayed values of pi for each formula
print("The value of PI using formula 1 =", round(piFormula1, 6)) #round to 6 digits
print("The value of PI using formula 2 =", round(piFormula2, 6))
print("The value of PI using formula 3 =", round(piFormula3, 6))
print("The value of PI using formula 4 =", round(piFormula4, 6))

#calculated the averaged
avg = (
    piFormula1 + 
    piFormula2 + 
    piFormula3 + 
    piFormula4
    )/4

#display the average
print("The average value of PI = ", round(avg, 6))
""" 
Compute the Body Mass Index (BMI)
1. Ask the user to input his/her full name
2. Ask the user to input his/her weight in pounds,
3. the height in feet,
4. and the height in inches,
5. Calculate the BMI
6. Display the user’s name along with the value of BMI using the format shown in the sample run, below.
The simple formula to calculate the BMI is:
BMI = weight in pounds * 703 / (height in inches2 )
If you pick descriptive variable names (a requirement for this course), your programming life would be much easier.
Format all output with 3 digits after the decimal point.
"""

name = input("Enter your name: ")
weight_lbs = float(input("Enter your weight in pounds = "))
height_ft = float(input("Enter your height in feet = "))
height_in = float(input("Enter your height in inches = "))

#calculate height
height = (height_ft*12) + height_in

#calculate BMI
BMI = (weight_lbs/height**2)*703

#6 display the user's name along w/the value of BMI
print("{}, Your Body Mass Index is: {}".format(name,round(BMI,3)))
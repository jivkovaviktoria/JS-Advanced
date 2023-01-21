# Exercise: Syntax, Functions and Statements
Problems for in-class lab for the "JavaScript Advanced" course @ SoftUni. Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/2750/Exercise-Syntax-Functions-and-Statements

# 1.Fruit
Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
Print the following text on the console:  
`I need ${money} to buy {weight} kilograms {fruit}.`
Print the weight and the money rounded to two decimal places.
The input comes as three arguments passed to your function.
The output should be printed on the console.

# 2.Greatest Common Divisor - GCD
Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.

# 3.Same Numbers
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console.

# 4.Previous Day
Write a JS function that calculates the date of the previous day by given year, month, and day.
The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

# 5.Time to Walk
Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
The first is the number of steps the student takes from their home to the university
Тhe second number is the length of the student's footprint in meters
Тhe third number is the student speed in km/h
Every 500 meters the student rests and takes a 1-minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
The input comes as three numbers.
The output should be printed on the console.

# 6.Road Radar
Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
On the motorway, the limit is 130 km/h
On the interstate, the limit is 90 km/h
In the city, the limit is 50 km/h 
Within a residential area, the limit is 20 km/h
If the driver is within the limits, there should be a printed speed and the speed limit. 
                `Driving {speed} km/h in a {speed limit} zone`
If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
For speeding up to 20 km/h over the limit, the status should be speeding.
For speeding up to 40 km/h over the limit, the status should be excessive speeding.
For anything else, status should be reckless driving.
The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
The output should be printed on the console.

# 7.Cookign By Numbers
Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as a starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
chop - divide the number by two
dice - square root of a number
spice - add 1 to the number
bake - multiply number by 3
fillet - subtract 20% from the number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.

# 8.Validity Checker
Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. A distance between two points is considered valid if it is an integer value. 
Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
The input consists of two points given as 4 numbers.
For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} to {x2, y2} is invalid` if it is invalid.

# 9.*Words Uppercase
Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.

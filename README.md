# Lesson_011-\_Error_Regex

> > [<img src="https://www.tutsmake.com/wp-content/uploads/2020/05/Types-of-Errors-In-JavaScript.jpeg" width="300" height="200" />](https://www.tutsmake.com/wp-content/uploads/2020/05/Types-of-Errors-In-JavaScript.jpeg)

- Task 1

Complete the reverseString function, it has one parameter s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
   exception was thrown, this should be the original string.

> Simple Input 0

`Number(1234)`

> Simple Input 0

`s.split is not a function`

[SEE Solution](./1.tryCatch)

- Task 2

Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:

1. If a is 0, throw an Error with message = Zero Error.
2. If a is negative, throw an Error with message = Negative Error.

[SEE Solution](./2.Errors)

- Task 3

Convert the code using try...catch.

```
function reverseString(s) {
     typeof s !== "string"
     ? console.log("s.split is not a function") :(s = s.split("").reverse().join(""));

console.log(s);
}
```

[SEE Solution](./3.tryCatch)

- Task 4

A teacher has created a gradeLabs function that verifies if student programming labs work. This function loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.
gradeLabs The gradeLabs function works for the majority of cases. However, what happens if a student named their function incorrectly? Run gradeLabs and pass it studentLabs2 as defined below.

```
let studentLabs2 = [
{
   student: "Blake",
   myCode: function (num) {
   return Math.pow(num, num);
   },
},
{
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
},
{
    student: "Mya",
    runLab: function (num) {
    return num * num;
},
},];
gradeLabs(studentLabs2);
```

[SEE Solution](./4.gradeLabs)

/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
    // 1st Solution - Added all array data to a new object as properties... need to refactor so each employee is an object
        var newArr = []
        var newObj = {};
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            for (let j = 0; j < element.length; j++) {
                newObj[array[i][j][0]] = array[i][j][1];
            }
            newArr.push(newObj);
            return newArr;
        }
    }

    
//     /* 2nd Solution -     */
//         var employees = [];
//         var newObj = {};
// }


var testArr = [
    [
        ['firstName1', 'Joe1'], ['lastName1', 'Blow1'], ['age1', 42], ['role1', 'clerk1']
    ],
    [
        ['firstName2', 'Mary2'], ['lastName2', 'Jenkins2'], ['age2', 36], ['role2', 'manager2']
    ]
]

console.log(transformEmployeeData(testArr));

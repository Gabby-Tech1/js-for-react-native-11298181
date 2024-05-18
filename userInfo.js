// Task 3
const arrayManipulation = require('./arrayManipulation.js')

let idCounter = 1;

function createUserProfiles(names, modifiedNames) {
    if (names.length!== modifiedNames.length) {
        throw new Error('Names and modifiedNames arrays must have the same length');
    }

    const userProfiles = names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: idCounter++
        };
    });

    return userProfiles;
}

const names = ["hello", "world", "how", "are", "you"];
const processedArray = arrayManipulation.processArray([1, 2, 3, 4, 5]);
const modifiedNames = arrayManipulation.formatArrayStrings(names, processedArray);
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
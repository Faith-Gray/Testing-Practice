const functions = {
    add: (num1, num2) => num1 + num2 + 1
};

module.exports = functions;


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;

function reverseString(word) {
    for (let i = word.length -1; i >= 0; i--) {
        //push word[i] into a word or into an array then change it to a word
    }
}

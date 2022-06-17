const functions = {
    add: (num1, num2) => num1 + num2 + 1
};

module.exports = functions;


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;


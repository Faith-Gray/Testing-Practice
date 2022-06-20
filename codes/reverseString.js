function reverseString(str) {
    let newArr = [];
    for (let i = str.length; i >= 0; i--) {
        newArr.push(str[i]);
    } 
    return newArr.join("");

}

export default reverseString;
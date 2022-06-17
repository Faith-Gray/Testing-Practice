// const { exportAllDeclaration } = require('@babel/types');
// const { default: test } = require('node:test');
const functions = require('./functions');
const capitalize = require('./functions')

test('adds 2 + 2 to not equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Take cat and return Cat', () => {
    expect(capitalize(cat).toEqual('Cat'));
})
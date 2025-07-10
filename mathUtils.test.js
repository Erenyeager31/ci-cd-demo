const {add,sub} = require('./mathUtils.js');

test('adds two numbers',()=>{
	expect(add(2,3)).toBe(5);
});

test('subtracts two numbers',()=>{
	expect(sub(5,2)).toBe(3);
});

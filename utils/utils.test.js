const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    const result = utils.add(33, 11);
    
    expect(result).toBe(44).toBeA('number');
  });

  it('should square a number', () => {
    const result = utils.square(3);
    
    expect(result).toBe(9).toBeA('number');
  });

  it('should set firstName and lastName', () => {
    const user = { age: 23 };
    const result = utils.setName(user, 'Caique Caleiro');

    expect(result).toInclude({ 
      firstName: 'Caique', 
      lastName: 'Caleiro' 
    });
  });
});
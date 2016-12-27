const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    const result = utils.add(33, 11);
    
    expect(result).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    const result = utils.square(3);
    
    expect(result).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (result) => {
      expect(result).toBe(25).toBeA('number');
      done();
    });
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
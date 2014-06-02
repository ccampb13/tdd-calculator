/* global describe, it */

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){
  describe('.add', function(){    //name of the function you are going to test, #applies to instance method, .applies to class method
    it('should add two numbers', function(){  //description of what you're testing
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);  //chai module allows us to write it like this
    });
  });

  describe('.subtract', function(){
    it('should find the difference between two numbers', function(){
      var diff1 = Calculator.subtract(3,2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4, -2);
      expect(diff2).to.equal(-2);
    });
  });

  describe('.pow', function(){
    it('should give the result of the power for the base and exponent', function(){
      var pow1 = Calculator.pow(2,3);
      expect(pow1).to.equal(8);

      var pow2 = Calculator.pow(4,3);
      expect(pow2).to.equal(64);
    });
  });

  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([2,3,4]);
      expect(sum).to.equal(9);
    });
  });

  // describe('.fractionAdd', function(){
  //   it('adds fractions together', function(){
  //     var sum = Calculator.fractionAdd([{x:5, y:4}, {x:2, y:6}]);
  //     console.log(sum);
  //     // expect(sum).to.equal({23:20});
  //   });
  // });

  describe('.addTwoFractions', function(){
    it('should add two fractions', function(){
      var fraction = Calculator.addTwoFractions('1/3', '2/4');
      expect(fraction).to.equal('10/12');
    });
  });

  describe('.addFractions', function(){
    it('should add a list of fractions', function(){
      var fraction = Calculator.addFractions('1/3', '2/4', '3/5');
      expect(fraction).to.equal('86/60');
    });
  });

});

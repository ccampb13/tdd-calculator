/* jshint unused:false */

'use strict';
var _ = require('lodash');
var traceur = require('traceur');


class Calculator{

  static add(num1, num2){
    return num1 + num2;
  }

  static subtract(num1, num2){
    return num1 - num2;
  }

  static pow(num1, num2){
    return Math.pow(num1, num2);
  }

  static sum(array){
    var sumArray = array.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    }, 0);
    return sumArray;
  }

  // static fractionAdd(objs){
  //   var fractionSum = objs;  //{x:5, y:4}, {x:2, y:6}
  //   console.log('xxxx');
  //   console.log(objs[0].x);
  //   console.log('yyyyy');
  //   console.log(objs[1].y);
  //   for(var i = 0; i < objs.length; i++){
  //     var denom = 1;
  //     console.log('-------');
  //     denom *= (objs[i].y);
  //     console.log('-------');
  //     // (objs[0].y) * (objs[1].y) * (objs[2].y);
  //   }


  //   console.log(fractionSum);
  // }

  static addTwoFractions(x, y){
    var [nX, dX] = x.trim().split('/').map(n=>n*1);  //array desctructuring - numerator(n), denominator(d)
    var [nY, dY] = y.trim().split('/').map(n=>n*1);

    var nX1 = dY * nX;
    var nY1 = dX * nY;

    var numerator = nX1 + nY1;
    var denominator = dX * dY;

    return `${numerator}/${denominator}`;
  }

  static addFractions(...numbers){
    return numbers.reduce((prev, curr)=>Calculator.addTwoFractions(prev,curr), numbers.pop());
  }

}

module.exports = Calculator;

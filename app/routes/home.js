'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.home = (req, res)=>{
  // Calculator.add(req.params);
  res.render('home/index', {title: 'Added'});
};

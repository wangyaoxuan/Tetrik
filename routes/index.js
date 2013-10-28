
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express'});
};

exports.login = function(req,res){
    res.render('login');
}

exports.register = function(req,res){
    res.render('register');
}

exports.cube = function(req,res){
    res.render('cube');
}

exports.snake = function(req,res){
    res.render('snake');
}

exports.repository = function(req,res){
    res.render('repository');
}
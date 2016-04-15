/*

Kicks off the "app" by instantiating a new Backbone
view and calling its render method.
More on Backbone views: http://backbonejs.org/#View

*/

$(function() {

  var calc = new CalculatorView();

  calc.render();

});
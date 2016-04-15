
/*

Simple Backbone model with default attributes
and a url to reference when calling .save()

More on Backbone models:
http://backbonejs.org/#Model

*/

var CalculatorModel = Backbone.Model.extend({

  defaults: {
    name: null,
    email: null,
    age: null
  },

  url: '/save'

});
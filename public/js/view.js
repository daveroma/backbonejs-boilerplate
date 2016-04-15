/*

Simple backbone view example - more on Backbone views here:
http://backbonejs.org/#View

*/


var CalculatorView = Backbone.View.extend({

  // Render view content into a pre-esiting DOM element
  el: $('#content'),

  // Give out view an id for fun
  id: 'calculator',

  // Tell the view which model to reference for data
  model: new CalculatorModel(),

  // Compile and store this views template
  template: _.template($('script#calculator-template').html()),

  // Bind those events bruh
  events: {

    'click span': function() {

      var key = this.$('p').attr('data-key');
      var answer = this.$('input').val();

      // Update model attributes example
      this.model.set({[key]: answer}); console.log(this.model.attributes);

    }

  },

  render: function(){

    // Pass in JSONified model into template and render that shit
    this.$el.html(this.template(this.model.toJSON()));

    // return this in Backbone views or chainability
    return this;
  }

});
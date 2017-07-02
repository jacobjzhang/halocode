import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  	// return this.get('store').query('code');
		return Ember.$.getJSON('/api/code/1');  	
  },
    
});

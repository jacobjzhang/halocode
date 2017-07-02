import Ember from 'ember';
const { get, set, computed } = Ember;

export default Ember.Controller.extend({
  //queryParams: ['code_id'],
	code_id: 0,
  annotation: computed('code_id', function() {
    return Ember.$.getJSON('/api/annotation/1', function(res) {
      console.log(res)
    }); 
  }),

  text: computed.alias('model.data.attributes.text'),

  cleanText: computed('text', function() {
  	const text = get(this, 'text');
  	// const trimmedText = text.trim();
  	const splitText = text.split('\n').filter((line) => {
  		return line.length > 0;
  	});
  	return splitText;
  	//replace(/(\r\n|\n|\r)/gm, "<br />");
  }),

  actions: {
    showAnnotation(num) {
    	console.log('showing annotation');
      set(this, 'code_id', num);
    }
  }
});
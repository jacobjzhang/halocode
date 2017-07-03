import Ember from 'ember';
const { get, set, computed } = Ember;

export default Ember.Controller.extend({
  //queryParams: ['code_id'],
	code_id: 0,
  annotation: '', 
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
    	const call = Ember.$.getJSON('/api/annotation/' + num);
      return call.then(function(res) {
        const text = res.data.attributes.text;
        console.log(text)
        set(this, 'annotation', text);
      }); 
    }
  }
});

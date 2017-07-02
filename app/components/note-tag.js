import Ember from 'ember';

export default Ember.Component.extend({
	line: 0,

	actions: {
		showAnnotation(line) {
			console.log('sending from note-tag.js')
			this.sendAction('showAnnotation', line);
		}
	}
});

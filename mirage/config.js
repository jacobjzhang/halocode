export default function() {

  // this.urlPrefix = 'http://localhost:4200';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/code');
  this.post('/code');
  this.get('/code/:id');
  this.put('/code/:id'); // or this.patch
  this.del('/code/:id');

  this.get('/annotation');
  this.post('/annotation');
  this.get('/annotation/:id');
  this.put('/annotation/:id'); // or this.patch
  this.del('/annotation/:id');
  
}

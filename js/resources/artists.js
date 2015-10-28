import Backbone from 'backbone';
import Artist from './artist';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/top20songs',

  model: Artist,

  parse(data) {
    return data.results;
  }

});
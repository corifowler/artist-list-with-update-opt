import Backbone from 'backbone';
import $ from 'jquery';

import {Artists as ArtistCollection} from './resources';

import {Artist as ArtistView} from './views';
import {Artists as ArtistsView} from './views';
import {Spinner} from './views';
import {NewArtist} from './views';

export default Backbone.Router.extend({

  routes: {
    "": "redirectToArtists",
    "artists": "showArtists",
    "artist/:id": "showArtist",
    "addArtist": "newArtist"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new ArtistCollection();

    this.$el.on('click', '.artist-list-item', (event) => {
      let $div = $(event.currentTarget);
      let artistId = $div.data('artist-id');

      this.navigate(`artist/${artistId}`, {trigger: true});
    });

    this.$el.on('click', '.back-button', (event) => {
      console.log('should be going back now');
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.create-artist', (event) => {
      console.log('should take me to update form');
      let $div = $(event.currentTarget);
      this.navigate(`addArtist`, {trigger: true});
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html(Spinner());
  },

  redirectToArtists() {
    this.navigate('artists', {replace: true, trigger: true});
  },

  showArtists() {
    this.showSpinner();
    this.collection.fetch().then( () => {
      this.$el.html(ArtistsView(this.collection.toJSON()));
    });
  },

  showArtist(id) {
    let artist = this.collection.get(id);

    if (artist) {
      this.$el.html(ArtistView(artist.toJSON()));
    } else {
      this.showSpinner();
      artist = this.collection.add({objectId: id});
      artist.fetch().then( () => {
        this.$el.html(ArtistView(artist.toJSON()));
      });
    }
  },

  newArtist() {
    this.$el.html(NewArtist());
  }

});
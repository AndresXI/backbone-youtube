var VideoListView = Backbone.View.extend({
  className: 'video-list',

  template: Handlebars.compile($('#video-list-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
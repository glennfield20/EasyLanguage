//= require jquery
//= require jquery_ujs
//= require_tree ../../../vendor/assets/javascripts/brunch
//= require turbolinks
//= require_tree .

require('brunch/js/app')

$(document).on('ready turbolinks:load', () => {
  $.onmount()
})

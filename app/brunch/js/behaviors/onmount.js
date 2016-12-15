if ($.onmount) {
  $(document).on('ready turbolinks:load', () => { $.onmount() })
  $(document).on('turbolinks:before-cache', () => { $.onmount.teardown() })
}

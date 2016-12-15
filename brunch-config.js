// See http://brunch.io for documentation.
module.exports = {
  paths: {
    watched: [
      'app/brunch',
      'app/views'
    ],
    public: 'vendor/assets'
  },

  files: {
    javascripts: {
      joinTo: {
        'javascripts/brunch/app.js': [
          'node_modules/**',
          'app/brunch/js/**'
        ]
      }
    },

    stylesheets: {
      joinTo: 'stylesheets/brunch/app.css.erb',
      order: {
        after: [
          'app/brunch/scss/utils/**',
          'app/brunch/scss/components/**'
        ]
      }
    }
  },

  plugins: {
    sass: {
      options: {
        includePaths: [
          'node_modules'
        ]
      }
    },

    postcss: {
      processors: [
        require('autoprefixer')(['> 1%']),
        require('postcss-asset-url-rails')()
      ]
    },

    autoreload: {
      match: {
        stylesheets: ['*.css', '*.css.erb']
      }
    },

    glob: {
      appDir: 'app',
      stripExt: true,
      stripAppDir: true
    }
  },

  conventions: {
    assets: 'app/brunch/assets/**',
    ignored: [/^app\/brunch\/js\/test/]
  },

  npm: {
    enabled: true,
    globals: {
      onmount: 'onmount',
      jQuery: 'jquery',
      $: 'jquery'
    }
  }
}


ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'spec_helper'
require 'rspec/rails'
require 'capybara/rails'
require 'capybara/poltergeist'

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!

  # Capybara configurations
  Capybara.register_driver :my_poltergeist do |app|
    Capybara::Poltegeist::Driver.new(app, inspector: true, js_errors: false)
  end

  Capybara.javascript_driver = :my_poltergeist
end

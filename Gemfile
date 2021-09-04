source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'rails', '~> 6.1.4', '>= 6.1.4.1'
gem 'puma', '~> 5.0' # http server
gem 'pg', '~> 1.1'
gem 'webpacker', '~> 5.0' # compiles javascript

group :development, :test do
  gem 'rspec-rails' # tests
end

group :development do
  gem 'listen', '~> 3.3' # monitoring file updates
end

group :test do
  gem 'capybara' # simulates user interaction
  gem 'factory_bot_rails' # working with models in tests
  gem 'selenium-webdriver' # testing through a browser
end

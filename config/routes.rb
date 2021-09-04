Rails.application.routes.draw do
  namespace :api do
    resources :todos, except: %i[new edit]
  end
end

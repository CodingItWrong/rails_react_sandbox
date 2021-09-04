Rails.application.routes.draw do
  root to: 'pages#home'

  namespace :api do
    resources :todos, except: %i[new edit]
  end
end

Rails.application.routes.draw do
  get 'admin/new'

  get 'admin/create'

  get 'admin/destroy'

  get 'session/new'

  get 'session/create'

  get 'session/destroy'

  get '/search' => 'pages#search'

  get '/login' => 'session#new'

  post '/login' => 'session#create'

  delete '/logout' => 'session#destroy'

  root 'pages#search'

  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

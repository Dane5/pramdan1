Rails.application.routes.draw do
  resources :meals, only: [:index, :show, :destroy, :create, :update]

  # delete "/meals", to: "meals#destroy"
  # patch "/meals", to: "meals#patch"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end

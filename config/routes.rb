Rails.application.routes.draw do
  resources :meals
  delete "/meals", to: "meals#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end

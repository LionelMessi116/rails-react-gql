Rails.application.routes.draw do
  root to: "home#index"

  post "/graphql", to: "graphql#execute"
end

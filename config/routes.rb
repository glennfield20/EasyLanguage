Rails.application.routes.draw do

  # Override Devise Controlers
  # rails generate devise:controllers

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Override Devise path
  devise_scope :user do
    get 'sign_in', to: 'users/sessions#new'
    get 'sign_up', to: 'users/registrations#new'
  end

  root to: "home#index"
end


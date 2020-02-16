Rails.application.routes.draw do
  
  get '/', to: 'home#index'

  get '/contactme', to: 'home#contact'
end

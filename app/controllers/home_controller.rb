class HomeController < ApplicationController

  def index
    @time = Time.now.strftime("%b %e, %Y")
  end
end
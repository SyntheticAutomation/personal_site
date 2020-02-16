class HomeController < ApplicationController

  def index
    @time = Time.now.strftime("%b %e, %Y")

    @experiences = Experience.all

    @skills = Skill.all
  end

  def contact
  end

end
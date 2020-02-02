class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|

      t.string "company"
      t.string "role"
      t.string "date_range"
      t.string "description"
      t.string "location"
      t.string "image_url"
      t.string "icon"
    end
  end
end

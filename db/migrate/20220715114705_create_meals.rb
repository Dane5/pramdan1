class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :title
      t.text :directions
      t.integer :prep_time
      t.integer :user_id
      t.timestamps
    end
  end
end

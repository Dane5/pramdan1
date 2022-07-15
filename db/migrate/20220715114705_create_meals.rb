class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.text :directions
      t.integer :prep_time
      t.timestamps
    end
  end
end

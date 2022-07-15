# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# MealPlan.destroy_all
# puts "start seeding"
# meal1 = Meal.create(user: '', title: "abzyJ+23", directions: "peanut butter and jelly", prep_time: "5")
# puts "seeding complete"

User.create(username: "Dane", password_digest: "Dane")
Meal.create(title: "pb and j", directions: "add peanut butter and jelly and toast the bread", prep_time: 5, user_id: 1)

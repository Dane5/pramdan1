class MealsController < ApplicationController
    def index
        render json: Meal.all
      end
    
      def create
        meal = @current_user.meals.create!(meal_params)
        render json: meal, status: :created
      end

      def destroy
        meal = Meal.find(params[:id])
        meal.destroy
        head :no_content
      end
      

def update 
    meal = Meal.find(params[:id])
    meal.update(meal_params)
    render json: meal, status: :ok
  end

  def show
    meal = Meal.find(params[:id])
    render json: meal, status: :ok
  end
  


    
      private

      def meal
      meal ||= @current_user.meals.find_by(params[:id])
      end
    
      def meal_params
        params.permit(:title, :directions, :prep_time, :user_id)
      end
end

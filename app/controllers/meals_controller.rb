class MealsController < ApplicationController
    def index
        render json: Meal.all
      end
    
      def create
        meal = @current_user.meals.create!(meal_params)
        render json: meal, status: :created
      end

      def destroy
        meal.delete
    rescue ActiveRecord::RecordNotFound => e
        render json: { error: e.to_s }, status: :not_found
      else
        render :delete
end

def update
    begin
      meal.update_attributes(meal_params)
    rescue ActiveRecord::RecordNotFound
      render( json: ["Unable to update"], status: 503)
    else
      render :show
    end
  end


      #   meal = Meal.find_by(id: params[:id])
      #   if meal
      #     meal.destroy
      #     head :no_content
        # else
        #   render json: { error: "Meal not found" }, status: :not_found
        # end
      # end
    
      private

      def meal
      meal ||= @current_user.meals.find_by(params[:id])
      end
    
      def meal_params
        params.permit(:title, :directions, :prep_time)
      end
end

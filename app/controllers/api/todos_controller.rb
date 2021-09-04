module Api
  class TodosController < ApplicationController
    skip_forgery_protection

    # curl http://localhost:3000/api/todos
    def index
      render json: Todo.all
    end

    # curl http://localhost:3000/api/todos/1
    def show
      render json: Todo.find(params[:id])
    end

    # curl -H 'Content-Type: application/json' -d '{"name":"My Todo"}' http://localhost:3000/api/todos
    def create
      todo = Todo.new(todo_params)
      if todo.save
        render json: todo, status: :created
      else
        render json: {errors: todo.errors}, status: :unprocessable_entity
      end
    end

    # curl -X PATCH -H 'Content-Type: application/json' -d '{"name":"Updated Todo"}' http://localhost:3000/api/todos/1
    def update
      todo = Todo.find(params[:id])
      if todo.update(todo_params)
        render json: todo
      else
        render json: {errors: todo.errors}, status: :unprocessable_entity
      end
    end

    # curl -X DELETE http://localhost:3000/api/todos/2
    def destroy
      todo = Todo.find(params[:id])
      todo.destroy
      head :no_content
    end

    private

    def todo_params
      params.permit(:name, :completed_at)
    end
  end
end

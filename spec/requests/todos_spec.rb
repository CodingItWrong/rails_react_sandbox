require 'rails_helper'

RSpec.describe "Todos", type: :request do
  let(:headers) {{ 'Content-Type' => 'application/json' }}

  describe "GET /api/todos" do
    let!(:todo1) { FactoryBot.create(:todo) }
    let!(:todo2) { FactoryBot.create(:todo) }

    it 'returns all todos' do
      get '/api/todos'

      expect(response.status).to eq(200)

      body = JSON.parse(response.body)
      expect(body).to contain_exactly(
        a_hash_including('id'=>todo1.id, 'name' =>todo1.name),
        a_hash_including('id'=>todo2.id, 'name'=>todo2.name),
      )
    end
  end

  describe "GET /api/todos/:id" do
    let!(:todo1) { FactoryBot.create(:todo) }
    let!(:todo2) { FactoryBot.create(:todo) }

    it 'returns the todos' do
      get "/api/todos/#{todo2.id}"

      expect(response.status).to eq(200)

      body = JSON.parse(response.body)
      expect(body).to include(
        'id' => todo2.id,
        'name' => todo2.name,
      )
    end
  end

  describe "POST /api/todos" do
    context 'with valid params' do
      it 'creates and returns the todo' do
        todo_name = 'todo name'

        post_data = JSON.generate('name' => todo_name)

        expect {
          post '/api/todos', params: post_data, headers: headers
        }.to change { Todo.count }.by(1)

        todo = Todo.last
        expect(todo.name).to eq(todo_name)

        expect(response.status).to eq(201)

        body = JSON.parse(response.body)
        expect(body).to include(
          'id' => todo.id,
          'name' => todo_name,
        )
      end
    end

    context 'with invalid params' do
      it 'returns errors and does not create the todo' do
        post_data = JSON.generate('name' => '')

        expect {
          post '/api/todos', params: post_data, headers: headers
        }.not_to change { Todo.count }

        expect(response.status).to eq(422)

        body = JSON.parse(response.body)
        expect(body).to eq(
          'errors' => {
            'name' => ["can't be blank"]
          }
        )
      end
    end
  end

  describe "PATCH /api/todos/:id" do
    let!(:todo) { FactoryBot.create(:todo, name: 'initial name') }

    context 'with valid params' do
      it 'updates and returns the todo' do
        updated_name = 'updated name'

        post_data = JSON.generate('name' => updated_name)

        patch "/api/todos/#{todo.id}", params: post_data, headers: headers

        expect(todo.reload.name).to eq(updated_name)

        expect(response.status).to eq(200)

        body = JSON.parse(response.body)
        expect(body).to include(
          'id' => todo.id,
          'name' => updated_name,
        )
      end
    end

    context 'with invalid params' do
      it 'returns an error and does not update the todo' do
        post_data = JSON.generate('name' => '')

        patch "/api/todos/#{todo.id}", params: post_data, headers: headers

        expect(todo.reload.name).to eq('initial name')

        expect(response.status).to eq(422)

        body = JSON.parse(response.body)
        expect(body).to eq(
          'errors' => {
            'name' => ["can't be blank"]
          }
        )
      end
    end
  end

  describe "DELETE /api/todos/:id" do
    let!(:todo) { FactoryBot.create(:todo) }

    it 'deletes the todo' do
      expect {
        delete "/api/todos/#{todo.id}"
      }.to change { Todo.count }.by(-1)

      expect(response.status).to eq(204)
      expect(response.body).to eq('')
    end
  end
end

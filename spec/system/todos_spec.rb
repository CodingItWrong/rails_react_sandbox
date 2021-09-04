require 'rails_helper'

RSpec.describe "Todos", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  let!(:todo) { FactoryBot.create(:todo) }

  it 'should allow viewing and editing todos' do
    visit '/'

    should_show_todos

    new_todo_name = 'my new todo'

    should_allow_creating_a_todo(new_todo_name)
    should_allow_deleting_a_todo(new_todo_name)
  end

  def should_show_todos
    expect(page).to have_content(todo.name)
  end

  def should_allow_creating_a_todo(new_todo_name)
    fill_in 'New Todo Name', with: new_todo_name
    click_on 'Add'

    expect(page).to have_content(new_todo_name)
  end

  def should_allow_deleting_a_todo(new_todo_name)
    click_on "Delete #{new_todo_name}"

    expect(page).not_to have_content(new_todo_name)
  end
end

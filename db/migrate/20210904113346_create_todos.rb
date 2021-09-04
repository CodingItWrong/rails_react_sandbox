class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.datetime :completed_at, precision: 6

      t.timestamps
    end
  end
end

require 'rails_helper'

RSpec.describe Todo, type: :model do
  describe 'validation' do
    it 'considers records without a name invalid' do
      todo = FactoryBot.build(:todo, name: '')
      expect(todo).not_to be_valid
    end

    it 'considers records with a name valid' do
      todo = FactoryBot.build(:todo, name: 'my todo name')
      expect(todo).to be_valid
    end
  end
end

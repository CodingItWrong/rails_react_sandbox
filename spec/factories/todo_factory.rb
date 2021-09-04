FactoryBot.define do
  factory :todo do
    sequence(:name) { |n| "Todo #{n}" }
    completed_at { Time.now }
  end
end

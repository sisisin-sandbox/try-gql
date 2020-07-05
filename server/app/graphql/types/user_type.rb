# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    description 'a user'
    field :name, String, null: false
  end
end

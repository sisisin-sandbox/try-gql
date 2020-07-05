# frozen_string_literal: true

module Types
  class LongType < Types::BaseScalar
    def self.coerce_input(input_value, _context)
      # Override this to prepare a client-provided GraphQL value for your Ruby code
      input_value.to_i
    end

    def self.coerce_result(ruby_value, _context)
      # Override this to serialize a Ruby value for the GraphQL response
      ruby_value.to_i
    end
  end
end

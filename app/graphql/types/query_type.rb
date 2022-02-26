module Types
  class QueryType < Types::BaseObject
    field :books, [Types::BookType], null: false
    
    def books
      Book.all
    end
  end
end

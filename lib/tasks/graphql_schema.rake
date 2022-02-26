require 'graphql/rake_task'

GraphQL::RakeTask.new(
  schema_name: 'BooksSchema',
  directory: './app/javascript/graphql',
  dependencies: [:environment]
)

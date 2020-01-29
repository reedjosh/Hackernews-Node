const { GraphQLServer } = require('graphql-yoga')

// Define the schema.
const typeDefs = `
type Query {
    info: String! 
}
` 

// Implement the schema.
const resolvers = {
    Query: {
        info: () => `This is the API of a  Hackernews Clone`
    }
}

// Instantiate the server.
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    }
)

// Run. No options with a log callback.
server.start(() => console.log(`Server running localhost http://localhost:4000`))

const { GraphQLServer } = require('graphql-yoga')

// Temporary dummy data.
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

const resolvers = {
  Query: { // Query all links.
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },

  // Resolver for link sub-fields.
  // Not actually needed. Only here for example.
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

// Instantiate the server.
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    }
)

// Run. No options with a log callback.
server.start(() => console.log(`Server running localhost http://localhost:4000`))

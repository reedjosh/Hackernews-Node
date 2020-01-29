const { GraphQLServer } = require('graphql-yoga')

// Define the schema.
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`


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

  Link: { // Resolver for link sub-fields.
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
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

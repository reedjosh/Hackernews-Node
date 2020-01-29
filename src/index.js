const { GraphQLServer } = require('graphql-yoga')

// Temporary dummy data.
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length // Used for id incrementation.
const resolvers = {
  Query: { // Query all links.
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },

  Mutation: { // Add a link.
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
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

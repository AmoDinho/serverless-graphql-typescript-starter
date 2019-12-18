"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: resolvers_1.resolvers,
    formatError: error => {
        return error;
    },
    formatResponse: (response) => {
        return response;
    },
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context
    }),
    tracing: true,
    playground: true
});
exports.graphqlHandler = (event, context, callback) => {
    const handler = server.createHandler({
        cors: {
            origin: "*",
            credentials: true,
            methods: ["POST", "GET"],
            allowedHeaders: ["Content-Type", "Origin", "Accept"]
        }
    });
    return handler(event, context, callback);
};
//# sourceMappingURL=graphql.js.map
import { ApolloServer } from "apollo-server-lambda";
import { schema } from "./schema";
import { resolvers } from "./resolvers";
//const typeDef: ITypeDefinitions = schema
var server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    formatError: function (error) {
        return error;
    },
    formatResponse: function (response) {
        return response;
    },
    context: function (_a) {
        var event = _a.event, context = _a.context;
        return ({
            headers: event.headers,
            functionName: context.functionName,
            event: event,
            context: context
        });
    },
    tracing: true,
    playground: true
});
exports.graphqlHandler = function (event, context, callback) {
    var handler = server.createHandler({
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
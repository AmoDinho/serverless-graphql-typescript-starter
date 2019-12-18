import { ApolloServer, gql } from "apollo-server-lambda";
import { ITypeDefinitions } from "graphql-tools/dist/Interfaces"
import { Context, Callback, APIGatewayEvent } from "aws-lambda"
import { schema } from "./schema";
import { resolvers } from "./resolvers";

//const typeDef: ITypeDefinitions = schema
const server = new ApolloServer({
	typeDefs: schema,
	resolvers: resolvers,
	formatError: error => {
		return error;
	},
	formatResponse: (response: any) => {
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

exports.graphqlHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
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

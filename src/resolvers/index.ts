import { hello } from "./query";

export const resolvers = {
    Query: {
        hello: (root: any, args: any, context: any) => hello(args, context)
    }
}

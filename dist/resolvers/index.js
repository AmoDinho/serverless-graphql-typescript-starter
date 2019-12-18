import { hello } from "./query";
export var resolvers = {
    Query: {
        hello: function (root, args, context) { return hello(args, context); }
    }
};
//# sourceMappingURL=index.js.map
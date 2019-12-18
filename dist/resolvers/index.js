"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = require("./query");
exports.resolvers = {
    Query: {
        hello: (root, args, context) => query_1.hello(args, context)
    }
};
//# sourceMappingURL=index.js.map
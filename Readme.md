# Version Compatibity
- graphql latest version (16.3) is not compatible with express-graphql v0.12.0. Hence downgrad version of graphql to 15.4. See package.json for exact version compatibility.

# graphQL Framework
- graphql works with apollo-server and express. In this workspace, we are using express with graphql

- Required libraries to work with graphql - 
    - graphql
    - express
    - express-graphql

# GraphQL Basics
    There are 2 main concepts in GraphQL - schema, resolvers and mutations.
        schema is used to define the metadata of the input object, resolvers are used to define the implementation / functionality and mutations are used to set/input the data in data source.

    ## schema.js
        ### type <user-defined-name> - Used to define the metadata / schema for the persistence
        ### enum - immutable set of variables used to define the list
        ### type Query - Used to define the methods implemented by resolver
        ### input <user_defined_name> - Good practice to use, used to set the input in objects
        ### type Mutation - Used to set / insert data in data source

    ## resolver.js
        ### Resolvers are used to implement the functions defined in Query type
        ### THere are pre-defined tools used to interact with data sources like MongoDB, MySQL etc. In this workspace, we are not using any tool.
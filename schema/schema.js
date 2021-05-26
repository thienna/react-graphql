import { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'
import _ from 'lodash'

const users = [
    { id: '24', firstName: 'thien', age: 25 },
    { id: '25', firstName: 'thienna', age: 26 },
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id })
            }
        }
    }
})

export default new GraphQLSchema({
    query: RootQuery
})

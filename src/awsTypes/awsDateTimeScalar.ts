import { GraphQLScalarType, Kind } from 'graphql';

const AWSDateTimeScalar = new GraphQLScalarType({
  name: 'AWSDateTime',
  description: 'AWS DateTime Scalar type',
  parseValue(value: string) {
    return new Date(value); // Convert the input string to a Date object
  },
  serialize(value: Date) {
    if (value instanceof Date) {
      return value.toISOString(); // Serialize the Date object to ISO 8601 string
    }
    throw new Error('Invalid Date value');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // Parse the string literal to a Date object
    }
    throw new Error('Invalid Date literal');
  },
});

export default AWSDateTimeScalar;

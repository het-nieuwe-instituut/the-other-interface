import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockHelloQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ hello })
 *   )
 * })
 */
export const mockHelloQuery = (resolver: ResponseResolver<GraphQLRequest<HelloQueryVariables>, GraphQLContext<HelloQuery>, any>) =>
  graphql.query<HelloQuery, HelloQueryVariables>(
    'hello',
    resolver
  )

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PeopleType = {
  __typename?: 'PeopleType';
  birthDate?: Maybe<Scalars['String']>;
  deathDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nationalityLabel?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  objectsPerType: Array<TypeWithObjectsCount>;
  stories: Array<StoryType>;
};

export type StoryAttributesType = {
  __typename?: 'StoryAttributesType';
  createdAt?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type StoryType = {
  __typename?: 'StoryType';
  attributes?: Maybe<StoryAttributesType>;
  counts?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  people?: Maybe<PeopleType>;
};

export type TypeWithObjectsCount = {
  __typename?: 'TypeWithObjectsCount';
  class: Scalars['String'];
  numberOfInstances: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const HelloDocument = gql`
    query hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import React from 'react'
import { getApolloClient } from '../features/graphql/config/apollo';
export async function getServerPageHome
    (options: Omit<Apollo.QueryOptions<Types.HomepageQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.HomepageQuery>({ ...options, query: Operations.HomepageDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useHome = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.HomepageQuery, Types.HomepageQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.HomepageDocument, options);
};
export type PageHomeComp = React.FC<{data?: Types.HomepageQuery, error?: Apollo.ApolloError}>;
export const withPageHome = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.HomepageQuery, Types.HomepageQueryVariables>) => (WrappedComponent:PageHomeComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.HomepageDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrHome = {
      getServerPage: getServerPageHome,
      withPage: withPageHome,
      usePage: useHome,
    }
export async function getServerPageLandingBySlug
    (options: Omit<Apollo.QueryOptions<Types.LandingpageBySlugQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.LandingpageBySlugQuery>({ ...options, query: Operations.LandingpageBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useLandingBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.LandingpageBySlugQuery, Types.LandingpageBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.LandingpageBySlugDocument, options);
};
export type PageLandingBySlugComp = React.FC<{data?: Types.LandingpageBySlugQuery, error?: Apollo.ApolloError}>;
export const withPageLandingBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.LandingpageBySlugQuery, Types.LandingpageBySlugQueryVariables>) => (WrappedComponent:PageLandingBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.LandingpageBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrLandingBySlug = {
      getServerPage: getServerPageLandingBySlug,
      withPage: withPageLandingBySlug,
      usePage: useLandingBySlug,
    }
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
export async function getServerPageMenuBySlug
    (options: Omit<Apollo.QueryOptions<Types.MenupageBySlugQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.MenupageBySlugQuery>({ ...options, query: Operations.MenupageBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useMenuBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MenupageBySlugQuery, Types.MenupageBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.MenupageBySlugDocument, options);
};
export type PageMenuBySlugComp = React.FC<{data?: Types.MenupageBySlugQuery, error?: Apollo.ApolloError}>;
export const withPageMenuBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MenupageBySlugQuery, Types.MenupageBySlugQueryVariables>) => (WrappedComponent:PageMenuBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.MenupageBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrMenuBySlug = {
      getServerPage: getServerPageMenuBySlug,
      withPage: withPageMenuBySlug,
      usePage: useMenuBySlug,
    }
export async function getServerPageStories
    (options: Omit<Apollo.QueryOptions<Types.StoriesQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.StoriesQuery>({ ...options, query: Operations.StoriesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useStories = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoriesQuery, Types.StoriesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.StoriesDocument, options);
};
export type PageStoriesComp = React.FC<{data?: Types.StoriesQuery, error?: Apollo.ApolloError}>;
export const withPageStories = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoriesQuery, Types.StoriesQueryVariables>) => (WrappedComponent:PageStoriesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.StoriesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrStories = {
      getServerPage: getServerPageStories,
      withPage: withPageStories,
      usePage: useStories,
    }
export async function getServerPageStoryBySlug
    (options: Omit<Apollo.QueryOptions<Types.StoryBySlugQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.StoryBySlugQuery>({ ...options, query: Operations.StoryBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useStoryBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoryBySlugQuery, Types.StoryBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.StoryBySlugDocument, options);
};
export type PageStoryBySlugComp = React.FC<{data?: Types.StoryBySlugQuery, error?: Apollo.ApolloError}>;
export const withPageStoryBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoryBySlugQuery, Types.StoryBySlugQueryVariables>) => (WrappedComponent:PageStoryBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.StoryBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrStoryBySlug = {
      getServerPage: getServerPageStoryBySlug,
      withPage: withPageStoryBySlug,
      usePage: useStoryBySlug,
    }
export async function getServerPageZoom3
    (options: Omit<Apollo.QueryOptions<Types.Zoom3QueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom3Query>({ ...options, query: Operations.Zoom3Document });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom3 = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3Query, Types.Zoom3QueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom3Document, options);
};
export type PageZoom3Comp = React.FC<{data?: Types.Zoom3Query, error?: Apollo.ApolloError}>;
export const withPageZoom3 = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3Query, Types.Zoom3QueryVariables>) => (WrappedComponent:PageZoom3Comp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom3Document, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom3 = {
      getServerPage: getServerPageZoom3,
      withPage: withPageZoom3,
      usePage: useZoom3,
    }
export async function getServerPageZoomLevel1
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel1QueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel1Query>({ ...options, query: Operations.ZoomLevel1Document });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel1 = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel1Query, Types.ZoomLevel1QueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel1Document, options);
};
export type PageZoomLevel1Comp = React.FC<{data?: Types.ZoomLevel1Query, error?: Apollo.ApolloError}>;
export const withPageZoomLevel1 = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel1Query, Types.ZoomLevel1QueryVariables>) => (WrappedComponent:PageZoomLevel1Comp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel1Document, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel1 = {
      getServerPage: getServerPageZoomLevel1,
      withPage: withPageZoomLevel1,
      usePage: useZoomLevel1,
    }
export async function getServerPageZoomLevel2
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel2QueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel2Query>({ ...options, query: Operations.ZoomLevel2Document });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel2 = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel2Query, Types.ZoomLevel2QueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel2Document, options);
};
export type PageZoomLevel2Comp = React.FC<{data?: Types.ZoomLevel2Query, error?: Apollo.ApolloError}>;
export const withPageZoomLevel2 = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel2Query, Types.ZoomLevel2QueryVariables>) => (WrappedComponent:PageZoomLevel2Comp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel2Document, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel2 = {
      getServerPage: getServerPageZoomLevel2,
      withPage: withPageZoomLevel2,
      usePage: useZoomLevel2,
    }
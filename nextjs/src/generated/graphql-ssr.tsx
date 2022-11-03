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
export async function getServerPageZoom3Archives
    (options: Omit<Apollo.QueryOptions<Types.Zoom3ArchivesQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom3ArchivesQuery>({ ...options, query: Operations.Zoom3ArchivesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom3Archives = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3ArchivesQuery, Types.Zoom3ArchivesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom3ArchivesDocument, options);
};
export type PageZoom3ArchivesComp = React.FC<{data?: Types.Zoom3ArchivesQuery, error?: Apollo.ApolloError}>;
export const withPageZoom3Archives = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3ArchivesQuery, Types.Zoom3ArchivesQueryVariables>) => (WrappedComponent:PageZoom3ArchivesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom3ArchivesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom3Archives = {
      getServerPage: getServerPageZoom3Archives,
      withPage: withPageZoom3Archives,
      usePage: useZoom3Archives,
    }
export async function getServerPageZoom3Objects
    (options: Omit<Apollo.QueryOptions<Types.Zoom3ObjectsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom3ObjectsQuery>({ ...options, query: Operations.Zoom3ObjectsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom3Objects = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3ObjectsQuery, Types.Zoom3ObjectsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom3ObjectsDocument, options);
};
export type PageZoom3ObjectsComp = React.FC<{data?: Types.Zoom3ObjectsQuery, error?: Apollo.ApolloError}>;
export const withPageZoom3Objects = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3ObjectsQuery, Types.Zoom3ObjectsQueryVariables>) => (WrappedComponent:PageZoom3ObjectsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom3ObjectsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom3Objects = {
      getServerPage: getServerPageZoom3Objects,
      withPage: withPageZoom3Objects,
      usePage: useZoom3Objects,
    }
export async function getServerPageZoom3DPeople
    (options: Omit<Apollo.QueryOptions<Types.Zoom3DPeopleQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom3DPeopleQuery>({ ...options, query: Operations.Zoom3DPeopleDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom3DPeople = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3DPeopleQuery, Types.Zoom3DPeopleQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom3DPeopleDocument, options);
};
export type PageZoom3DPeopleComp = React.FC<{data?: Types.Zoom3DPeopleQuery, error?: Apollo.ApolloError}>;
export const withPageZoom3DPeople = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3DPeopleQuery, Types.Zoom3DPeopleQueryVariables>) => (WrappedComponent:PageZoom3DPeopleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom3DPeopleDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom3DPeople = {
      getServerPage: getServerPageZoom3DPeople,
      withPage: withPageZoom3DPeople,
      usePage: useZoom3DPeople,
    }
export async function getServerPageZoom3DPublications
    (options: Omit<Apollo.QueryOptions<Types.Zoom3DPublicationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom3DPublicationsQuery>({ ...options, query: Operations.Zoom3DPublicationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom3DPublications = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3DPublicationsQuery, Types.Zoom3DPublicationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom3DPublicationsDocument, options);
};
export type PageZoom3DPublicationsComp = React.FC<{data?: Types.Zoom3DPublicationsQuery, error?: Apollo.ApolloError}>;
export const withPageZoom3DPublications = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom3DPublicationsQuery, Types.Zoom3DPublicationsQueryVariables>) => (WrappedComponent:PageZoom3DPublicationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom3DPublicationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom3DPublications = {
      getServerPage: getServerPageZoom3DPublications,
      withPage: withPageZoom3DPublications,
      usePage: useZoom3DPublications,
    }
export async function getServerPageZoom4
    (options: Omit<Apollo.QueryOptions<Types.Zoom4QueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom4Query>({ ...options, query: Operations.Zoom4Document });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom4 = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4Query, Types.Zoom4QueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom4Document, options);
};
export type PageZoom4Comp = React.FC<{data?: Types.Zoom4Query, error?: Apollo.ApolloError}>;
export const withPageZoom4 = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4Query, Types.Zoom4QueryVariables>) => (WrappedComponent:PageZoom4Comp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom4Document, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom4 = {
      getServerPage: getServerPageZoom4,
      withPage: withPageZoom4,
      usePage: useZoom4,
    }
export async function getServerPageZoom4Archives
    (options: Omit<Apollo.QueryOptions<Types.Zoom4ArchivesQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom4ArchivesQuery>({ ...options, query: Operations.Zoom4ArchivesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom4Archives = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4ArchivesQuery, Types.Zoom4ArchivesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom4ArchivesDocument, options);
};
export type PageZoom4ArchivesComp = React.FC<{data?: Types.Zoom4ArchivesQuery, error?: Apollo.ApolloError}>;
export const withPageZoom4Archives = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4ArchivesQuery, Types.Zoom4ArchivesQueryVariables>) => (WrappedComponent:PageZoom4ArchivesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom4ArchivesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom4Archives = {
      getServerPage: getServerPageZoom4Archives,
      withPage: withPageZoom4Archives,
      usePage: useZoom4Archives,
    }
export async function getServerPageZoom4Objects
    (options: Omit<Apollo.QueryOptions<Types.Zoom4ObjectsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom4ObjectsQuery>({ ...options, query: Operations.Zoom4ObjectsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom4Objects = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4ObjectsQuery, Types.Zoom4ObjectsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom4ObjectsDocument, options);
};
export type PageZoom4ObjectsComp = React.FC<{data?: Types.Zoom4ObjectsQuery, error?: Apollo.ApolloError}>;
export const withPageZoom4Objects = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4ObjectsQuery, Types.Zoom4ObjectsQueryVariables>) => (WrappedComponent:PageZoom4ObjectsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom4ObjectsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom4Objects = {
      getServerPage: getServerPageZoom4Objects,
      withPage: withPageZoom4Objects,
      usePage: useZoom4Objects,
    }
export async function getServerPageZoom4People
    (options: Omit<Apollo.QueryOptions<Types.Zoom4PeopleQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom4PeopleQuery>({ ...options, query: Operations.Zoom4PeopleDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom4People = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4PeopleQuery, Types.Zoom4PeopleQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom4PeopleDocument, options);
};
export type PageZoom4PeopleComp = React.FC<{data?: Types.Zoom4PeopleQuery, error?: Apollo.ApolloError}>;
export const withPageZoom4People = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4PeopleQuery, Types.Zoom4PeopleQueryVariables>) => (WrappedComponent:PageZoom4PeopleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom4PeopleDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom4People = {
      getServerPage: getServerPageZoom4People,
      withPage: withPageZoom4People,
      usePage: useZoom4People,
    }
export async function getServerPageZoom4Publications
    (options: Omit<Apollo.QueryOptions<Types.Zoom4PublicationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.Zoom4PublicationsQuery>({ ...options, query: Operations.Zoom4PublicationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoom4Publications = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4PublicationsQuery, Types.Zoom4PublicationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.Zoom4PublicationsDocument, options);
};
export type PageZoom4PublicationsComp = React.FC<{data?: Types.Zoom4PublicationsQuery, error?: Apollo.ApolloError}>;
export const withPageZoom4Publications = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.Zoom4PublicationsQuery, Types.Zoom4PublicationsQueryVariables>) => (WrappedComponent:PageZoom4PublicationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.Zoom4PublicationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoom4Publications = {
      getServerPage: getServerPageZoom4Publications,
      withPage: withPageZoom4Publications,
      usePage: useZoom4Publications,
    }
export async function getServerPageArchivesRelations
    (options: Omit<Apollo.QueryOptions<Types.ArchivesRelationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ArchivesRelationsQuery>({ ...options, query: Operations.ArchivesRelationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useArchivesRelations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ArchivesRelationsQuery, Types.ArchivesRelationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ArchivesRelationsDocument, options);
};
export type PageArchivesRelationsComp = React.FC<{data?: Types.ArchivesRelationsQuery, error?: Apollo.ApolloError}>;
export const withPageArchivesRelations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ArchivesRelationsQuery, Types.ArchivesRelationsQueryVariables>) => (WrappedComponent:PageArchivesRelationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ArchivesRelationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrArchivesRelations = {
      getServerPage: getServerPageArchivesRelations,
      withPage: withPageArchivesRelations,
      usePage: useArchivesRelations,
    }
export async function getServerPageObjectRelations
    (options: Omit<Apollo.QueryOptions<Types.ObjectRelationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ObjectRelationsQuery>({ ...options, query: Operations.ObjectRelationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useObjectRelations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ObjectRelationsQuery, Types.ObjectRelationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ObjectRelationsDocument, options);
};
export type PageObjectRelationsComp = React.FC<{data?: Types.ObjectRelationsQuery, error?: Apollo.ApolloError}>;
export const withPageObjectRelations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ObjectRelationsQuery, Types.ObjectRelationsQueryVariables>) => (WrappedComponent:PageObjectRelationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ObjectRelationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrObjectRelations = {
      getServerPage: getServerPageObjectRelations,
      withPage: withPageObjectRelations,
      usePage: useObjectRelations,
    }
export async function getServerPagePeopleRelations
    (options: Omit<Apollo.QueryOptions<Types.PeopleRelationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.PeopleRelationsQuery>({ ...options, query: Operations.PeopleRelationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePeopleRelations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PeopleRelationsQuery, Types.PeopleRelationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.PeopleRelationsDocument, options);
};
export type PagePeopleRelationsComp = React.FC<{data?: Types.PeopleRelationsQuery, error?: Apollo.ApolloError}>;
export const withPagePeopleRelations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PeopleRelationsQuery, Types.PeopleRelationsQueryVariables>) => (WrappedComponent:PagePeopleRelationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.PeopleRelationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPeopleRelations = {
      getServerPage: getServerPagePeopleRelations,
      withPage: withPagePeopleRelations,
      usePage: usePeopleRelations,
    }
export async function getServerPagePublicationRelations
    (options: Omit<Apollo.QueryOptions<Types.PublicationRelationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.PublicationRelationsQuery>({ ...options, query: Operations.PublicationRelationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePublicationRelations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PublicationRelationsQuery, Types.PublicationRelationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.PublicationRelationsDocument, options);
};
export type PagePublicationRelationsComp = React.FC<{data?: Types.PublicationRelationsQuery, error?: Apollo.ApolloError}>;
export const withPagePublicationRelations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.PublicationRelationsQuery, Types.PublicationRelationsQueryVariables>) => (WrappedComponent:PagePublicationRelationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.PublicationRelationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPublicationRelations = {
      getServerPage: getServerPagePublicationRelations,
      withPage: withPagePublicationRelations,
      usePage: usePublicationRelations,
    }
export async function getServerPageStoriesRelations
    (options: Omit<Apollo.QueryOptions<Types.StoriesRelationsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.StoriesRelationsQuery>({ ...options, query: Operations.StoriesRelationsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useStoriesRelations = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoriesRelationsQuery, Types.StoriesRelationsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.StoriesRelationsDocument, options);
};
export type PageStoriesRelationsComp = React.FC<{data?: Types.StoriesRelationsQuery, error?: Apollo.ApolloError}>;
export const withPageStoriesRelations = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.StoriesRelationsQuery, Types.StoriesRelationsQueryVariables>) => (WrappedComponent:PageStoriesRelationsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.StoriesRelationsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrStoriesRelations = {
      getServerPage: getServerPageStoriesRelations,
      withPage: withPageStoriesRelations,
      usePage: useStoriesRelations,
    }
export async function getServerPageZoomLevel5Archives
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5ArchivesQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5ArchivesQuery>({ ...options, query: Operations.ZoomLevel5ArchivesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5Archives = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesQuery, Types.ZoomLevel5ArchivesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5ArchivesDocument, options);
};
export type PageZoomLevel5ArchivesComp = React.FC<{data?: Types.ZoomLevel5ArchivesQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5Archives = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesQuery, Types.ZoomLevel5ArchivesQueryVariables>) => (WrappedComponent:PageZoomLevel5ArchivesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5ArchivesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5Archives = {
      getServerPage: getServerPageZoomLevel5Archives,
      withPage: withPageZoomLevel5Archives,
      usePage: useZoomLevel5Archives,
    }
export async function getServerPageZoomLevel5ArchivesFonds
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5ArchivesFondsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5ArchivesFondsQuery>({ ...options, query: Operations.ZoomLevel5ArchivesFondsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5ArchivesFonds = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesFondsQuery, Types.ZoomLevel5ArchivesFondsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5ArchivesFondsDocument, options);
};
export type PageZoomLevel5ArchivesFondsComp = React.FC<{data?: Types.ZoomLevel5ArchivesFondsQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5ArchivesFonds = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesFondsQuery, Types.ZoomLevel5ArchivesFondsQueryVariables>) => (WrappedComponent:PageZoomLevel5ArchivesFondsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5ArchivesFondsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5ArchivesFonds = {
      getServerPage: getServerPageZoomLevel5ArchivesFonds,
      withPage: withPageZoomLevel5ArchivesFonds,
      usePage: useZoomLevel5ArchivesFonds,
    }
export async function getServerPageZoomLevel5ArchivesOther
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5ArchivesOtherQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5ArchivesOtherQuery>({ ...options, query: Operations.ZoomLevel5ArchivesOtherDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5ArchivesOther = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesOtherQuery, Types.ZoomLevel5ArchivesOtherQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5ArchivesOtherDocument, options);
};
export type PageZoomLevel5ArchivesOtherComp = React.FC<{data?: Types.ZoomLevel5ArchivesOtherQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5ArchivesOther = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ArchivesOtherQuery, Types.ZoomLevel5ArchivesOtherQueryVariables>) => (WrappedComponent:PageZoomLevel5ArchivesOtherComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5ArchivesOtherDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5ArchivesOther = {
      getServerPage: getServerPageZoomLevel5ArchivesOther,
      withPage: withPageZoomLevel5ArchivesOther,
      usePage: useZoomLevel5ArchivesOther,
    }
export async function getServerPageZoomLevel5Object
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5ObjectQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5ObjectQuery>({ ...options, query: Operations.ZoomLevel5ObjectDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5Object = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ObjectQuery, Types.ZoomLevel5ObjectQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5ObjectDocument, options);
};
export type PageZoomLevel5ObjectComp = React.FC<{data?: Types.ZoomLevel5ObjectQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5Object = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5ObjectQuery, Types.ZoomLevel5ObjectQueryVariables>) => (WrappedComponent:PageZoomLevel5ObjectComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5ObjectDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5Object = {
      getServerPage: getServerPageZoomLevel5Object,
      withPage: withPageZoomLevel5Object,
      usePage: useZoomLevel5Object,
    }
export async function getServerPageZoomLevel5Publication
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PublicationQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PublicationQuery>({ ...options, query: Operations.ZoomLevel5PublicationDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5Publication = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationQuery, Types.ZoomLevel5PublicationQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PublicationDocument, options);
};
export type PageZoomLevel5PublicationComp = React.FC<{data?: Types.ZoomLevel5PublicationQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5Publication = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationQuery, Types.ZoomLevel5PublicationQueryVariables>) => (WrappedComponent:PageZoomLevel5PublicationComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PublicationDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5Publication = {
      getServerPage: getServerPageZoomLevel5Publication,
      withPage: withPageZoomLevel5Publication,
      usePage: useZoomLevel5Publication,
    }
export async function getServerPageZoomLevel5PublicationsArticle
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PublicationsArticleQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PublicationsArticleQuery>({ ...options, query: Operations.ZoomLevel5PublicationsArticleDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5PublicationsArticle = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsArticleQuery, Types.ZoomLevel5PublicationsArticleQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PublicationsArticleDocument, options);
};
export type PageZoomLevel5PublicationsArticleComp = React.FC<{data?: Types.ZoomLevel5PublicationsArticleQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5PublicationsArticle = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsArticleQuery, Types.ZoomLevel5PublicationsArticleQueryVariables>) => (WrappedComponent:PageZoomLevel5PublicationsArticleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PublicationsArticleDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5PublicationsArticle = {
      getServerPage: getServerPageZoomLevel5PublicationsArticle,
      withPage: withPageZoomLevel5PublicationsArticle,
      usePage: useZoomLevel5PublicationsArticle,
    }
export async function getServerPageZoomLevel5PublicationsAudiovisual
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PublicationsAudiovisualQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PublicationsAudiovisualQuery>({ ...options, query: Operations.ZoomLevel5PublicationsAudiovisualDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5PublicationsAudiovisual = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsAudiovisualQuery, Types.ZoomLevel5PublicationsAudiovisualQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PublicationsAudiovisualDocument, options);
};
export type PageZoomLevel5PublicationsAudiovisualComp = React.FC<{data?: Types.ZoomLevel5PublicationsAudiovisualQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5PublicationsAudiovisual = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsAudiovisualQuery, Types.ZoomLevel5PublicationsAudiovisualQueryVariables>) => (WrappedComponent:PageZoomLevel5PublicationsAudiovisualComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PublicationsAudiovisualDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5PublicationsAudiovisual = {
      getServerPage: getServerPageZoomLevel5PublicationsAudiovisual,
      withPage: withPageZoomLevel5PublicationsAudiovisual,
      usePage: useZoomLevel5PublicationsAudiovisual,
    }
export async function getServerPageZoomLevel5PublicationsBook
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PublicationsBookQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PublicationsBookQuery>({ ...options, query: Operations.ZoomLevel5PublicationsBookDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5PublicationsBook = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsBookQuery, Types.ZoomLevel5PublicationsBookQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PublicationsBookDocument, options);
};
export type PageZoomLevel5PublicationsBookComp = React.FC<{data?: Types.ZoomLevel5PublicationsBookQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5PublicationsBook = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsBookQuery, Types.ZoomLevel5PublicationsBookQueryVariables>) => (WrappedComponent:PageZoomLevel5PublicationsBookComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PublicationsBookDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5PublicationsBook = {
      getServerPage: getServerPageZoomLevel5PublicationsBook,
      withPage: withPageZoomLevel5PublicationsBook,
      usePage: useZoomLevel5PublicationsBook,
    }
export async function getServerPageZoomLevel5PublicationsSerial
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PublicationsSerialQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PublicationsSerialQuery>({ ...options, query: Operations.ZoomLevel5PublicationsSerialDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5PublicationsSerial = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsSerialQuery, Types.ZoomLevel5PublicationsSerialQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PublicationsSerialDocument, options);
};
export type PageZoomLevel5PublicationsSerialComp = React.FC<{data?: Types.ZoomLevel5PublicationsSerialQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5PublicationsSerial = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PublicationsSerialQuery, Types.ZoomLevel5PublicationsSerialQueryVariables>) => (WrappedComponent:PageZoomLevel5PublicationsSerialComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PublicationsSerialDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5PublicationsSerial = {
      getServerPage: getServerPageZoomLevel5PublicationsSerial,
      withPage: withPageZoomLevel5PublicationsSerial,
      usePage: useZoomLevel5PublicationsSerial,
    }
export async function getServerPageZoomLevel5Person
    (options: Omit<Apollo.QueryOptions<Types.ZoomLevel5PersonQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.ZoomLevel5PersonQuery>({ ...options, query: Operations.ZoomLevel5PersonDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useZoomLevel5Person = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PersonQuery, Types.ZoomLevel5PersonQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ZoomLevel5PersonDocument, options);
};
export type PageZoomLevel5PersonComp = React.FC<{data?: Types.ZoomLevel5PersonQuery, error?: Apollo.ApolloError}>;
export const withPageZoomLevel5Person = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.ZoomLevel5PersonQuery, Types.ZoomLevel5PersonQueryVariables>) => (WrappedComponent:PageZoomLevel5PersonComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ZoomLevel5PersonDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrZoomLevel5Person = {
      getServerPage: getServerPageZoomLevel5Person,
      withPage: withPageZoomLevel5Person,
      usePage: useZoomLevel5Person,
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
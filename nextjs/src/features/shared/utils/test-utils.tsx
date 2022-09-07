import { render, renderHook, RenderOptions } from '@testing-library/react'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import defaultStore from 'src/features/shared/configs/store'
import { client } from 'src/features/graphql/config/apollo'
import { ApolloProvider } from '@apollo/client'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    store?: typeof defaultStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    { store = defaultStore, ...renderOptions }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return (
            <ApolloProvider client={client}>
                <Provider store={store}>{children}</Provider>
            </ApolloProvider>
        )
    }

    return { store: store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export function renderHookWithProviders<T>(
    hook: () => T,
    { store = defaultStore, ...renderOptions }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    return { store: store, ...renderHook(hook, { wrapper: Wrapper, ...renderOptions }) }
}

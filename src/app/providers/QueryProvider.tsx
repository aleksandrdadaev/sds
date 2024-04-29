'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { FC, PropsWithChildren } from 'react'

import { IError } from '@/shared/model/types/error.type'

declare module '@tanstack/react-query' {
	interface Register {
		defaultError: AxiosError<IError>
	}
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default QueryProvider

import { FC, PropsWithChildren } from 'react'

import QueryProvider from './QueryProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return <QueryProvider>{children}</QueryProvider>
}

export default MainProvider

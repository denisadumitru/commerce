import '@assets/main.css'
import 'keen-slider/keen-slider.min.css'

import { FC } from 'react'
import type { AppProps } from 'next/app'
import {
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";

import { ManagedUIContext } from '@components/ui/context'
import { Head } from '@components/common'
import useMain from "@hooks/useMain";

const Noop: FC = ({ children }) => <>{children}</>

const queryCache = new QueryCache();

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  const { status, data, error, isFetching } = useMain();

  return (
    <>
      <Head />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </ReactQueryCacheProvider>
    </>
  )
}

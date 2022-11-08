import '../styles/_reset.css'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

import { Fira_Code, Oswald } from '@next/font/google'
const firacode = Fira_Code({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin']})

import * as gtag from '../utils/gtag'
import Analytics from '../components/Analytics/Analytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const queryClient = React.useRef(new QueryClient());

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <QueryClientProvider client={queryClient.current} contextSharing={true}>
      <Hydrate state={pageProps.dehydratedState}>
        <style jsx global>{`
          html {
            font-family: ${firacode.style.fontFamily}
          }
          h1, h2, h3, h4, h5, h6{
            font-family: ${oswald.style.fontFamily}
          }
        `}</style>
        <Component {...pageProps} />
        <Analytics 
          id="gtag-cvViniDigital"
          trakingID="G-ZK3PFQGFJ0"
        />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

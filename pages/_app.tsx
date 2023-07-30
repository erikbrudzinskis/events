import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Header from "@/components/Header";
import {FeaturedContextProvider} from "@/store/featured-context";
import {SearchContextProvider} from "@/store/search-context";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <FeaturedContextProvider>
                <SearchContextProvider>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <title>Mt</title>
                    </Head>
                    <Header/>
                    <Component {...pageProps} />
                </SearchContextProvider>
            </FeaturedContextProvider>
        </>
    )
}

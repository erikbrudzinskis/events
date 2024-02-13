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
                        <title>NextJS Events</title>
                        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet"/>
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"/>
                    </Head>
                    <Header/>
                    <Component {...pageProps} />
                </SearchContextProvider>
            </FeaturedContextProvider>
        </>
    )
}

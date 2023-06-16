import type {AppProps} from 'next/app'
import '@/styles/globals.css'
import {store} from '../redux/store'
import {Provider} from 'react-redux'
import Layout from "@/components/Layout";
import {Toaster} from "react-hot-toast";
import {ThemeProvider} from "@material-tailwind/react";
import { SessionProvider } from "next-auth/react";
import {session} from "next-auth/core/routes";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({Component,pageProps: {session, ...pageProps}  }: AppProps) {

    return (
        <SessionProvider session={session}>
        <Provider store={store}>
            <ThemeProvider>
                <Layout>
                    <Toaster/>
                    <Component {...pageProps} />
                </Layout>
                </ThemeProvider>
        </Provider>
         </SessionProvider>
)
}
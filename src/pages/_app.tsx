import Footer from '@components/Footer';
import MobileNav from '@components/MobileNav';
import NavBar from '@components/NavBar';
import { trpc } from '@lib/trpc';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<Head>
				<link rel='icon' href='/logo.png' />
				<title>Nairol Spotify Stats</title>
				<meta name='description' content='Nairol Spotify Stats ist ein selbst entwickelter Spotify Client, der ein paar zusätzliche Features wie Top Songs bietet.' />
				<meta name='author' content='nairol203' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='shortcut icon' href='/logo.png' />
				<link rel='apple-touch-icon' sizes='192x192' href='/logo.png' />
				<meta property='og:title' content='Nairol Spotify Stats' />
				<meta property='og:image' content='/logo.png' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://spotify-stats.nairol.me' />
				<meta property='og:site_name' content='spotify.nairol.me' />
				<meta
					property='og:description'
					content='Nairol Spotify Stats ist ein selbst entwickelter Spotify Client, der ein paar zusätzliche Features wie Top Songs bietet.'
				/>
				<meta name='twitter:title' content='Nairol Spotify Stats' />
				<meta
					name='twitter:description'
					content='Nairol Spotify Stats ist ein selbst entwickelter Spotify Client, der ein paar zusätzliche Features wie Top Songs bietet.'
				/>
				<meta name='twitter:image' content='https://spotify-stats.nairol.me' />
				<meta name='twitter:site' content='@nairol203' />
				<meta name='twitter:creator' content='@nairol203' />
				<meta name='twitter:ccrard' content='summary' />
			</Head>
			<div className='grid h-screen bg-red-300 dark:bg-red-500/60 '>
				<div className='md:hidden'>
                    <MobileNav />
                </div>
				<div className='overflow-y-auto md:grid md:grid-cols-[15rem_1fr]'>
					<NavBar />
					<main className='relative overflow-y-auto'>
						<div className='mx-4'>
							<Component {...pageProps} />
							<Footer />
						</div>
					</main>
				</div>
			</div>
		</SessionProvider>
	);
}

export default trpc.withTRPC(App);

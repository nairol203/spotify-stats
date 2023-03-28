import NavBar from '@components/NavBar';
import UserDropdown from '@components/UserDropdown';
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
				<meta name='description' content='Track your Spotify listening history and discover your top tracks with Nairol Spotify Stats, the ultimate Spotify statistics tool. Gain insights into your music habits and share your favorite artists with friends.' />
				<meta name='author' content='nairol203' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='shortcut icon' href='/logo.png' />
				<link rel='apple-touch-icon' sizes='192x192' href='/logo.png' />
				<meta property='og:title' content='Nairol Spotify Stats' />
				<meta property='og:image' content='/logo.png' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://spotify-stats.nairol.me' />
				<meta property='og:site_name' content='spotify-stats.nairol.me' />
				<meta
					property='og:description'
					content='Track your Spotify listening history and discover your top tracks with Nairol Spotify Stats, the ultimate Spotify statistics tool. Gain insights into your music habits and share your favorite artists with friends.'
				/>
				<meta name='twitter:title' content='Nairol Spotify Stats' />
				<meta
					name='twitter:description'
					content='Track your Spotify listening history and discover your top tracks with Nairol Spotify Stats, the ultimate Spotify statistics tool. Gain insights into your music habits and share your favorite artists with friends.'
				/>
				<meta name='twitter:image' content='https://spotify-stats.nairol.me' />
				<meta name='twitter:site' content='@nairol203' />
				<meta name='twitter:creator' content='@nairol203' />
				<meta name='twitter:card' content='summary' />
			</Head>
			<div className='grid h-screen'>
				<div className='md:grid md:grid-cols-[15rem_1fr] md:overflow-y-auto'>
					<NavBar />
					<main className='relative overflow-y-auto'>
						<UserDropdown />
						<div className='mx-4'>
							<Component {...pageProps} />
						</div>
					</main>
				</div>
			</div>
		</SessionProvider>
	);
}

export default trpc.withTRPC(App);

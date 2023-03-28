import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';

export default function Login() {
	return (
		<div className='mt-10 flex flex-col items-center gap-3 py-4'>
			<h1>Log in to your Spotify Stats</h1>
			<span className='max-w-sm'>Discover your top tracks and gain insights into your Spotify listening habits with Nairol Spotify Stats.</span>
			<button className='flex items-center gap-2 rounded-md bg-white/25 p-2 duration-100 ease-in hover:bg-white/30' onClick={() => signIn('spotify')}>
				{
					// @ts-expect-error
					<FontAwesomeIcon icon={faSpotify} height={25} width={25} />
				}
				<span>Continue with Spotify</span>
			</button>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
	const session = await getServerSession(req, res, authOptions);

	if (session) {
		return { redirect: { destination: query['callbackUrl']?.toString() ?? '/', permanent: false } };
	}

	return {
		props: {},
	};
};

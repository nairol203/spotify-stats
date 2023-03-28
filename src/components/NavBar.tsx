import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faClockRotateLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();

	return (
		<nav className='background-blur-lg my-4 ml-4 hidden flex-col gap-4 overflow-y-auto rounded-lg bg-white/25 py-4 px-3 shadow-md md:flex'>
			<Link href='/' className='flex items-center gap-3'>
				{
					// @ts-expect-error
					<FontAwesomeIcon icon={faSpotify} height={50} width={50} />
				}
				<h1 className='grid'>
					Nairol
					<span className='text-lg'>Spotify Stats</span>
				</h1>
			</Link>
			<div>
				<Link className={`${router.pathname === '/' ? 'bg-white/25' : 'hover:bg-white/25'} flex items-center gap-4 rounded p-2`} href='/'>
					<FontAwesomeIcon icon={faHome} height={20} width={20} />
					<span>Home</span>
				</Link>
				<Link className={`${router.pathname === '/recently-played' ? 'bg-white/25' : 'hover:bg-white/25'} flex items-center gap-4 rounded p-2`} href='/recently-played'>
					<FontAwesomeIcon icon={faClockRotateLeft} height={20} width={20} />
					<span>Recently Played</span>
				</Link>
				<Link className={`${router.pathname === '/top/artists' ? 'bg-white/25' : 'hover:bg-white/25'} flex items-center gap-4 rounded p-2`} href='/top/artists'>
					<FontAwesomeIcon icon={faChartLine} height={20} width={20} />
					<span>Top Artists</span>
				</Link>
				<Link className={`${router.pathname === '/top/tracks' ? 'bg-white/25' : 'hover:bg-white/25'} flex items-center gap-4 rounded p-2`} href='/top/tracks'>
					<FontAwesomeIcon icon={faChartLine} height={20} width={20} />
					<span>Top Tracks</span>
				</Link>
			</div>
			<a href='https://nairol.me' target='_blank' rel='noreferrer' className='mt-auto flex justify-center text-sm hover:underline'>
				© 2023 nairol203
			</a>
		</nav>
	);
}

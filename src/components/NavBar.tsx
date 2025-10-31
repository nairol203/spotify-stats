import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faClockRotateLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();

	return (
		<nav className='background-blur-lg m-4 mb-0 flex flex-col gap-4 overflow-y-auto rounded-lg bg-white/25 px-3 py-2 shadow-md md:mb-4 md:mr-0 md:py-4'>
			<Link href='/' className='flex items-center gap-3'>
				<FontAwesomeIcon icon={faSpotify} height={50} width={50} />
				<h1 className='hidden md:grid'>
					Nairol
					<span className='text-lg'>Spotify Stats</span>
				</h1>
				<h1 className='md:hidden'>Nairol Spotify Stats</h1>
			</Link>
			<div className='hidden md:block'>
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
			<div className='mt-auto hidden justify-center md:grid'>
				<a href='https://nairol.me' target='_blank' rel='noreferrer' className='text-sm hover:underline '>
					© 2025 nairol203
				</a>
				<div className='flex gap-1'>
					<Link className='hover:underline' href='/imprint'>
						Imprint
					</Link>
					<span>•</span>
					<Link className='hover:underline' href='/privacy'>
						Privacy
					</Link>
				</div>
			</div>
		</nav>
	);
}

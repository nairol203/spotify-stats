import { faChartLine, faClockRotateLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();

	return (
		<nav className='flex flex-col gap-4 overflow-y-auto py-4 px-3 dark:bg-black dark:text-white'>
			<Link href='/' className='flex items-center gap-2'>
				<Image
					src='/logo.png'
					alt='Logo von Nairol Price Check'
					width={30}
					height={30}
					className='md:hover:underline md:hover:underline-offset-4 md:hover:brightness-110'
				/>
				<h1>Nairol Spotify</h1>
			</Link>
			<div>
				<Link className={`${router.pathname === '/' ? '' : 'hover:text-gray-500 dark:hover:text-white'} flex items-center gap-4 p-2`} href='/'>
					<FontAwesomeIcon icon={faHome} height={20} width={20} />
					<span>Home</span>
				</Link>
				<Link
					className={`${router.pathname === '/recently-played' ? '' : 'hover:text-gray-500 dark:hover:text-white'} flex items-center gap-4 p-2`}
					href='/recently-played'
				>
					<FontAwesomeIcon icon={faClockRotateLeft} height={20} width={20} />
					<span>Recently Played</span>
				</Link>
				<Link className={`${router.pathname === '/top/artists' ? '' : 'hover:text-gray-500 dark:hover:text-white'} flex items-center gap-4 p-2`} href='/top/artists'>
					<FontAwesomeIcon icon={faChartLine} height={20} width={20} />
					<span>Top Artists</span>
				</Link>
				<Link className={`${router.pathname === '/top/tracks' ? '' : 'hover:text-gray-500 dark:hover:text-white'} flex items-center gap-4 p-2`} href='/top/tracks'>
					<FontAwesomeIcon icon={faChartLine} height={20} width={20} />
					<span>Top Tracks</span>
				</Link>
			</div>
		</nav>
	);
}

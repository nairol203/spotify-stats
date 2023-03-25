import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
	const router = useRouter();
	const { data: session } = useSession();

	return (
		<nav className='fixed top-0 z-10 flex h-14 w-full items-center gap-8 bg-card px-4 shadow-sm dark:bg-darkMode-card'>
			<Link href={session?.user.image ? `/user/${session.user.id}` : '/'}>
				<Image
					src={session?.user.image ?? '/logo.png'}
					alt='Logo von Nairol Price Check'
					width={30}
					height={30}
					className='rounded-full md:hover:underline md:hover:underline-offset-4 md:hover:brightness-110'
				/>
			</Link>
			<div className='flex gap-8'>
				<Link className={`${router.pathname === '/' ? 'underline' : 'hover:opacity-70'} decoration-1 underline-offset-8 hover:underline`} href='/'>
					Home
				</Link>
				<Link className={`${router.pathname === '/top/artists' ? 'underline' : 'hover:opacity-70'} decoration-1 underline-offset-8 hover:underline`} href='/top/artists'>
					Top Artists
				</Link>
				<Link className={`${router.pathname === '/top/tracks' ? 'underline' : 'hover:opacity-70'} decoration-1 underline-offset-8 hover:underline`} href='/top/tracks'>
					Top Tracks
				</Link>
			</div>
		</nav>
	);
}

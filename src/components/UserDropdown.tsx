import { faArrowUpRightFromSquare, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function UserDropdown() {
	const { data: session } = useSession();
	const [active, setActive] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setActive(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropdownRef]);

	if (!session || !session?.user.image) return <></>;

	return (
		<div className='fixed right-8 top-4 z-10 hidden md:grid' ref={dropdownRef}>
			<div className='relative'>
				<button className='flex items-center gap-2 rounded-3xl bg-white p-0.5 pr-1.5 text-black shadow' onClick={() => setActive(!active)}>
					<Image src={session?.user.image} height={30} width={30} alt='User Profile Picture' className='aspect-square rounded-full' />
					<span className='max-w-[7rem] overflow-hidden text-ellipsis whitespace-nowrap'>{session.user.name}</span>
					<FontAwesomeIcon height={20} width={20} icon={active ? faCaretUp : faCaretDown} />
				</button>
				{active && (
					<div className='absolute right-0 top-10 flex w-44 flex-col rounded bg-white p-1 text-black shadow'>
						<a
							onClick={() => setActive(false)}
							className='flex items-center justify-between rounded px-3 py-2 hover:bg-black/10'
							href='https://www.spotify.com/us/account/overview'
							target='_blank'
							rel='noreferrer'
						>
							<span>Spotify Account</span>
							<FontAwesomeIcon height={15} width={15} icon={faArrowUpRightFromSquare} />
						</a>
						<button onClick={() => signOut()} className='flex rounded px-3 py-2 hover:bg-black/10'>
							Log Out
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

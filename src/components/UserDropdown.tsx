import { faArrowUpRightFromSquare, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function UserDropdown() {
	const { data: session } = useSession();
	const [active, setActive] = useState(false);

	if (!session || !session?.user.image) return <></>;

	return (
		<div className='fixed z-10 top-4 right-8 hidden gap-2 md:grid'>
			<div className='relative bg-violet-500 rounded-3xl shadow'>
				<button className='flex items-center gap-2 rounded-3xl bg-white/25 p-0.5' onClick={() => setActive(!active)}>
					<Image src={session?.user.image} height={30} width={30} alt='User Profile Picture' className='aspect-square rounded-full' />
					<span>{session.user.name}</span>
					<FontAwesomeIcon height={20} width={20} icon={active ? faCaretUp : faCaretDown} />
				</button>
				{active && (
					<div className='absolute top-10 right-0  bg-violet-500'>
						<div className='flex w-44 flex-col rounded bg-white/25 p-1'>
							<a
								onClick={() => setActive(false)}
								className='flex items-center justify-between rounded px-3 py-2 hover:bg-white/25'
								href='https://www.spotify.com/us/account/overview'
								target='_blank'
								rel='noreferrer'
							>
								<span>Spotify Account</span>
								<FontAwesomeIcon height={15} width={15} icon={faArrowUpRightFromSquare} />
							</a>
							<button onClick={() => signOut()} className='flex rounded px-3 py-2 hover:bg-white/25'>
								Log Out
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

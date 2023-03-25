import Image from 'next/image';
import logo from '@public/logo.png';

export default function Footer() {
	return (
		<footer className='flex flex-wrap items-center justify-center gap-4 bg-card p-4 shadow-sm dark:bg-darkMode-card'>
			<Image src={logo} alt='Logo' width={30} height={30} />
			<a href='https://nairol.me' target='_blank' rel='noreferrer' className='text-sm text-gray-400 hover:underline'>
				© 2022 nairol203
			</a>
		</footer>
	);
}

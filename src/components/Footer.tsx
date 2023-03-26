import Image from 'next/image';
import logo from '@public/logo.png';

export default function Footer() {
	return (
		<footer className='flex flex-wrap items-center justify-center gap-4 p-4'>
			<Image src={logo} alt='Logo' width={25} height={25} />
			<a href='https://nairol.me' target='_blank' rel='noreferrer' className='text-sm hover:underline dark:text-gray-400'>
				© 2023 nairol203
			</a>
		</footer>
	);
}

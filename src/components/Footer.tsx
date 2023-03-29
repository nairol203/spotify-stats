import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='grid justify-center p-4 md:hidden'>
			<a href='https://nairol.me' target='_blank' rel='noreferrer' className='text-sm '>
				© 2023 nairol203
			</a>
			<div className='flex gap-1'>
				<Link href='/imprint'>Imprint</Link>
				<span>•</span>
				<Link href='/privacy'>Privacy</Link>
			</div>
		</footer>
	);
}

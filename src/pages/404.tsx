import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='mt-10 flex flex-col items-center gap-3 py-4'>
			<h1>Page not found</h1>
			<span className='max-w-sm'>Oops! It seems like your favorite tunes have gone rogue and led you to a non-existent page.</span>
			<Link className='rounded-md bg-white/25 p-2 duration-100 ease-in hover:bg-white/30' href='/'>
				Go back home
			</Link>
		</div>
	);
}

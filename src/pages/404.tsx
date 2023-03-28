import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='mt-10 flex flex-col items-center gap-4 py-4'>
			<h1>Page not found</h1>
			<Link className='rounded-md bg-white/25 p-2' href='/'>
				Go back home
			</Link>
		</div>
	);
}

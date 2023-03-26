import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='mt-10 inline-flex min-h-screen w-full flex-col items-center gap-4 py-4'>
			<h1>Page not found</h1>
			<Link className='primary-button' href='/'>
				Back to Home
			</Link>
		</div>
	);
}

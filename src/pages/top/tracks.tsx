import { SkeletonObjectDynamic } from '@components/SkeletonObject';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { trpc } from '@lib/trpc';
import Image from 'next/image';
import React, { useState } from 'react';
import { SPOTIFY_RANGE } from 'src/server/routers/_app';
import { z } from 'zod';
import { msToString } from '../../lib/helpers';

export default function Home() {
	const [range, setRange] = useState<z.infer<typeof SPOTIFY_RANGE>>('short_term');
	const topTracks = trpc.topTracks.useQuery({ range });

	return (
		<div className='my-4 grid gap-4 rounded-xl bg-white/25 p-6 py-4 shadow-md backdrop-blur-lg'>
			<h1>Top Tracks</h1>
			<div className='flex justify-center gap-10 sm:justify-start sm:gap-6'>
				<button className={`${range === 'short_term' ? 'underline' : 'opacity-80'} decoration-1 underline-offset-8 hover:underline`} onClick={() => setRange('short_term')}>
					4 Weeks
				</button>
				<button
					className={`${range === 'medium_term' ? 'underline' : 'opacity-80'} decoration-1 underline-offset-8 hover:underline`}
					onClick={() => setRange('medium_term')}
				>
					6 Months
				</button>
				<button className={`${range === 'long_term' ? 'underline' : 'opacity-80'} decoration-1 underline-offset-8 hover:underline`} onClick={() => setRange('long_term')}>
					All time
				</button>
			</div>
			<div>
				<div className='grid grid-cols-[1.25rem_6fr_1fr] items-center gap-4 py-2'>
					<span className='flex justify-center'>#</span>
					<span>Title</span>
					<span className='flex justify-end'>
						<FontAwesomeIcon icon={faClock} height={20} width={20} />
					</span>
				</div>
				<div className='mb-4 h-[1px] w-full rounded-full bg-white/30' />
				<div>
					{topTracks.data ? (
						topTracks.data.items.map((track, index) => (
							<div className='grid grid-cols-[1.25rem_6fr_1fr] items-center justify-between gap-4 rounded py-2' key={track.id + index}>
								<span className='flex w-5 justify-center'>{index + 1}</span>
								<div className='flex items-center gap-4 overflow-hidden text-ellipsis whitespace-nowrap'>
									<Image className='aspect-square max-w-none rounded' src={track.album.images[0].url} height={50} width={50} alt='Album Cover' />
									<div className='overflow-hidden text-ellipsis'>
										<h3 className='overflow-hidden text-ellipsis'>{track.name}</h3>
										<div className='flex flex-wrap items-center gap-x-1'>
											{track.explicit && (
												<span className='rounded bg-slate-300 py-[1px] px-[5.5px] text-[10px] text-black' aria-label='Explicit'>
													E
												</span>
											)}
											{track.artists.map((artist, index) => (
												<div key={artist.id + index}>
													<span className='text-sm' key={artist.id}>
														{artist.name}
													</span>
													{index < track.artists.length - 1 && ','}
												</div>
											))}
										</div>
									</div>
								</div>
								<span className='flex justify-end'>{msToString(track.duration_ms)}</span>
							</div>
						))
					) : (
						<SkeletonObjectDynamic count={25} type='track' ranking />
					)}
				</div>
			</div>
		</div>
	);
}

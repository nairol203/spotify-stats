import { SkeletonObjectDynamic } from '@components/SkeletonObject';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calcTime, msToString } from '@lib/helpers';
import { trpc } from '@lib/trpc';
import Image from 'next/image';

export default function Home() {
	const recentTracks = trpc.recentlyPlayed.useQuery({});

	return (
		<div className='grid gap-4 rounded-xl bg-white/25 p-6 shadow-md backdrop-blur-lg'>
			<h1>Recently Played</h1>
			<div>
				<div className='grid grid-cols-[6fr_1fr] items-center gap-4 py-2 lg:grid-cols-[7fr_2fr_1fr]'>
					<span>Title</span>
					<span className='hidden lg:block'>Played at</span>
					<span className='flex justify-end'>
						<FontAwesomeIcon icon={faClock} height={20} width={20} />
					</span>
				</div>
				<div className='mb-4 h-[1px] w-full rounded-full bg-white/30' />
				<div>
					{recentTracks.data ? (
						recentTracks.data.items.map((item, index) => (
							<div className='grid grid-cols-[6fr_1fr] items-center justify-between gap-2 rounded py-2 lg:grid-cols-[7fr_2fr_1fr]' key={item.track.id + index}>
								<div className='flex items-center gap-4 overflow-hidden text-ellipsis whitespace-nowrap'>
									<Image className='aspect-square max-w-none rounded' src={item.track.album.images[0].url} height={50} width={50} alt='Album Cover' />
									<div className='overflow-hidden text-ellipsis'>
										<h3 className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.track.name}</h3>
										<div className='flex flex-wrap items-center gap-1'>
											{item.track.explicit && (
												<span className='rounded bg-slate-300 py-[1px] px-[5.5px] text-[10px] text-black' aria-label='Explicit'>
													E
												</span>
											)}

											{item.track.artists.map((artist, index) => (
												<div key={artist.id + index}>
													<span className='text-sm'>{artist.name}</span>
													{index < item.track.artists.length - 1 && ','}
												</div>
											))}
										</div>
									</div>
								</div>
								<span className='hidden lg:block'>
									{new Date().getTime() - new Date(item.played_at).getTime() > 86400000
										? new Date(item.played_at).toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })
										: calcTime(new Date(item.played_at))}
								</span>
								<span className='flex justify-end sm:mr-2'>{msToString(item.track.duration_ms)}</span>
							</div>
						))
					) : (
						<SkeletonObjectDynamic count={25} type='trackRecently' />
					)}
				</div>
			</div>
		</div>
	);
}

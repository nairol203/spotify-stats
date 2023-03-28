import { faChartLine, faClockRotateLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { trpc } from '@lib/trpc';
import Link from 'next/link';
import { useState } from 'react';
import { SPOTIFY_RANGE } from 'src/server/routers/_app';
import { z } from 'zod';

export default function Home() {
    return (
        <div className='min-h-screen py-4'>
            <div className='grid md:flex flex-wrap gap-4'>
                <RecentlyPlayedCard />
                <TopTracksCard />
                <TopArtistsCard />
            </div>
        </div>
    );
}

const RecentlyPlayedCard: React.FC<{}> = ({}) => {
    const recentTracks = trpc.recentlyPlayed.useQuery({ limit: 6 });

    return (
        <div className='flex md:w-96 flex-col gap-4 rounded-xl bg-white/25 p-6 shadow-xl backdrop-blur-lg cursor-default'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faClockRotateLeft} height={20} width={20} />
                <h2>Recently Played</h2>
            </div>
            <div className='flex flex-col gap-2'>
                {recentTracks.data ? (
                    recentTracks.data.items.map((item, index, array) => (
                        <div className={`${index + 1 === array.length && 'bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent'} flex items-center gap-2`}>
                            <img src={item.track.album.images[0].url} height={40} width={40} className='rounded-sm' />
                            <h3>{item.track.name}</h3>
                        </div>
                    ))
                ) : (
                    <>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                    </>
                )}
                <Link href='/recently-played' className='flex items-center gap-2'>
                    <div className='flex h-10 w-10 items-center justify-center'>
                        <FontAwesomeIcon icon={faPlus} height={30} width={30} />
                    </div>
                    <h3>Show more</h3>
                </Link>
            </div>
        </div>
    );
};

const TopTracksCard: React.FC<{}> = ({}) => {
    const [range, setRange] = useState<z.infer<typeof SPOTIFY_RANGE>>('short_term');
    const topTracks = trpc.topTracks.useQuery({ range, limit: 5 });

    return (
        <div className='flex md:w-96 flex-col gap-4 rounded-xl bg-white/25 p-6 shadow-xl backdrop-blur-lg cursor-default'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faChartLine} height={20} width={20} />
                <h2>Your Top Tracks</h2>
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={() => setRange('short_term')}
                    className={`${range === 'short_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    4 Weeks
                </button>
                <button
                    onClick={() => setRange('medium_term')}
                    className={`${range === 'medium_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    6 Months
                </button>
                <button
                    onClick={() => setRange('long_term')}
                    className={`${range === 'long_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    All time
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                {topTracks.data ? (
                    topTracks.data.items.map((track, index, array) => (
                        <div className={`${index + 1 === array.length && 'bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent'} flex items-center gap-2`}>
                            <img src={track.album.images[0].url} height={40} width={40} className='rounded-sm ' />
                            <h3>{track.name}</h3>
                        </div>
                    ))
                ) : (
                    <>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                    </>
                )}
                <Link href='/top/tracks' className='flex items-center gap-2'>
                    <div className='flex h-10 w-10 items-center justify-center'>
                        <FontAwesomeIcon icon={faPlus} height={30} width={30} />
                    </div>
                    <h3>Show more</h3>
                </Link>
            </div>
        </div>
    );
};

const TopArtistsCard: React.FC<{}> = ({}) => {
    const [range, setRange] = useState<z.infer<typeof SPOTIFY_RANGE>>('short_term');
    const topArtists = trpc.topArtists.useQuery({ range, limit: 5 });

    return (
        <div className='flex md:w-96 flex-col gap-4 rounded-xl bg-white/25 p-6 shadow-xl backdrop-blur-lg cursor-default'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faChartLine} height={20} width={20} />
                <h2>Your Top Artists</h2>
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={() => setRange('short_term')}
                    className={`${range === 'short_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    4 Weeks
                </button>
                <button
                    onClick={() => setRange('medium_term')}
                    className={`${range === 'medium_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    6 Months
                </button>
                <button
                    onClick={() => setRange('long_term')}
                    className={`${range === 'long_term' ? 'bg-white/90 text-black' : 'hover:bg-white/90 hover:text-black'} rounded-full bg-white/20 p-1 px-2 duration-100 ease-in`}
                >
                    All time
                </button>
            </div>
            <div className='flex flex-col gap-2'>
                {topArtists.data ? (
                    topArtists.data.items.map((artist, index, array) => (
                        <div className={`${index + 1 === array.length && 'bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent'} flex items-center gap-2`}>
                            <img src={artist.images[0].url} height={40} width={40} className='aspect-square rounded-sm' />
                            <h3>{artist.name}</h3>
                        </div>
                    ))
                ) : (
                    <>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='skeleton h-10 w-10' />
                            <h2 className='skeleton'>Lorem, ipsum.</h2>
                        </div>
                    </>
                )}
                <Link href='/top/artists' className='flex items-center gap-2'>
                    <div className='flex h-10 w-10 items-center justify-center'>
                        <FontAwesomeIcon icon={faPlus} height={30} width={30} />
                    </div>
                    <h3>Show more</h3>
                </Link>
            </div>
        </div>
    );
};

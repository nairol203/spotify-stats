import { z } from 'zod';
import { procedure, router } from '../trpc';

export const API_ENDPOINT = 'https://api.spotify.com/v1';
export const SPOTIFY_RANGE = z.enum(['short_term', 'medium_term', 'long_term']);
export const ALBUM_GROUPS = z.enum(['album', 'single', 'appears_on', 'compilation']);

export const appRouter = router({
	topTracks: procedure
		.input(
			z.object({
				range: SPOTIFY_RANGE,
				limit: z.optional(z.number()),
			})
		)
		.query(async ({ ctx, input }) => {
			const res = await fetch(`${API_ENDPOINT}/me/top/tracks?limit=${input.limit || 50}&time_range=${input.range}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${ctx.session?.user?.access_token}`,
					'Content-Type': 'application/json',
				},
			});
			return (await res.json()) as SpotifyApi.UsersTopTracksResponse;
		}),
	topArtists: procedure
		.input(
			z.object({
				range: SPOTIFY_RANGE,
				limit: z.optional(z.number()),
			})
		)
		.query(async ({ ctx, input }) => {
			const res = await fetch(`${API_ENDPOINT}/me/top/artists?limit=${input.limit || 50}&time_range=${input.range}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${ctx.session?.user?.access_token}`,
					'Content-Type': 'application/json',
				},
			});

			return (await res.json()) as SpotifyApi.UsersTopArtistsResponse;
		}),
	recentlyPlayed: procedure
		.input(
			z.object({
				limit: z.optional(z.number()),
			})
		)
		.query(async ({ ctx, input }) => {
			const res = await fetch(`${API_ENDPOINT}/me/player/recently-played?limit=${input.limit || 50}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${ctx.session?.user?.access_token}`,
					'Content-Type': 'application/json',
				},
			});

			return (await res.json()) as SpotifyApi.UsersRecentlyPlayedTracksResponse;
		}),
	currentlyPlaying: procedure.query(async ({ ctx }) => {
		const res = await fetch(`${API_ENDPOINT}/me/player/currently-playing`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${ctx.session?.user?.access_token}`,
				'Content-Type': 'application/json',
			},
		});

		if (res.status === 204) {
			return null;
		}

		return (await res.json()) as SpotifyApi.CurrentlyPlayingResponse;
	}),
});

// export type definition of API
export type AppRouter = typeof appRouter;

# Spotify Stats

Track your Spotify listening history and discover your top tracks with Nairol Spotify Stats, the ultimate Spotify statistics tool. Gain insights into your music habits and share your favorite artists with friends.

https://spotify-stats.nairol.me

## Self host

You can self host this project with docker. You can use the prebuilt images from the github container registry or built it yourself.

Note: You will need to create your own app in the [Spotify Developers Portal](https://developer.spotify.com) for the client id and secret.

```bash
docker run -p 3000:3000 -e SPOTIFY_CLIENT_SECRET=<secret> -e SPOTIFY_CLIENT_ID=<secret> -e NEXTAUTH_SECRET=<secret> -e NEXTAUTH_URL=<url> ghcr.io/nairol203/spotify-stats:main
```

## Development

### 1. Clone the repository

```bash
git clone https://github.com/nairol203/spotify-stats.git
cd spotify-stats
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Licence

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

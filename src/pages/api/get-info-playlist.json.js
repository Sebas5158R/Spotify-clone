import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
    // Recuperar el id de la playlist de los parámetros
    const { url } = request;
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get("id");

    // Buscar la playlist por el id
    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId);

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
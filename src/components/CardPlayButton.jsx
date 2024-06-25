import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {
    const { currentSong, isPlaying, setCurrentSong, setIsPlaying } = usePlayerStore(state => state);

    const handleClick = () => {
        if(isPlaying) {
            setIsPlaying(false);
            return;
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data;
                setIsPlaying(true);
                setCurrentSong({ songs, playlist, song: songs[0] });
            });
    }

    const isPlayingPlayList = isPlaying && currentSong?.playlist.id === id;

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4">
            {isPlayingPlayList ? <Pause /> : <Play />}
        </button>
    );
}
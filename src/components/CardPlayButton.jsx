import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id, size = 'small' }) {
    const { currentSong, isPlaying, setCurrentSong, setIsPlaying } = usePlayerStore(state => state);

    const isPlayingPlayList = isPlaying && currentSong?.playlist.id === id;

    const handleClick = () => {
        if(isPlayingPlayList) {
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

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-6 h-6';


    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
            {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    );
}
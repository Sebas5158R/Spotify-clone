import { create } from "zustand";

// Crea un store para el reproductor de música
// El store debe tener dos propiedades las cuales son isPlaying y currentSong:
export const usePlayerStore = create((set) => ({
    isPlaying: false, // - isPlaying: booleano que indica si la música está sonando
    currentSong: { playlist: null, song: null, songs: [] }, // - currentSong: objeto que contiene la información de la canción actual
    setIsPlaying: (isPlaying) => set({ isPlaying }), // - setIsPlaying: función que actualiza el estado de reproducción
    setCurrentSong: (currentSong) => set({ currentSong }), // - setCurrentSong: función que actualiza la canción actual
}));
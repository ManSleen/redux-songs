// Action Creator

export const SONG_SELECTED = "SONG_SELECTED";

export const selectSong = song => {
  // Return an object
  return {
    type: SONG_SELECTED,
    payload: song
  };
};

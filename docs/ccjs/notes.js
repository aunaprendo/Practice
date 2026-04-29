






Y

You should create a function named remixPlaylist that accepts an array of playlists and the maximum number of allowed occurrences per artist. The function should return the final broadcast schedule as an array of { slot, trackId } objects, by calling flattenPlaylists, scoreTracks, dedupeTracks, enforceArtistQuota, and buildSchedule in order.

Waiting: 1. You should have a function named flattenPlaylists.
Waiting: 2. You should return an empty array from flattenPlaylists when the input is not an array.
Waiting: 3. Each track returned by flattenPlaylists should include a source field that is an array containing the playlist index and the track index.
Waiting: 4. You should have a function named scoreTracks.
Waiting: 5. Each track returned by scoreTracks should include a numeric score field.
Waiting: 6. You should calculate score using a target BPM of 120 and this formula: votes * 10 - Math.abs(bpm - 120).
Waiting: 7. You should have a function named dedupeTracks.
Waiting: 8. When duplicate trackId values exist, dedupeTracks should keep only the first occurrence of the track.
Waiting: 9. You should have a function named enforceArtistQuota.
Waiting: 10. enforceArtistQuota should ensure no artist appears more than maxPerArtist times by removing extra tracks while keeping the earliest ones.
Waiting: 11. You should have a function named buildSchedule.
Waiting: 12. buildSchedule should return an array of objects with the shape { slot, trackId }, where slot starts at 1.
Waiting: 13. You should have a function named remixPlaylist.
Waiting: 14. remixPlaylist should call the helper functions in order to produce the final schedule
const URL =
  "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=06b9520b33dbb8d67cc8e5092e9ccd3a&format=json";

function getMusicData() {
  return fetch(`${URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.topartists.artist)
    .then((artists) =>
      Promise.all(
        artists.map((artist) => {
          const URL = `https://api.deezer.com/search?q='${artist.name}'`;
          return fetch(URL)
            .then((response) => response.json())
            .then((data) => {
              return {
                id: artist.mbid,
                name: artist.name,
                image: data.data[0].artist.picture_medium,
                listeners: artist.listeners,
                stremeable: artist.stremeable,
              };
            });
        })
      )
    );
}

export { getMusicData };
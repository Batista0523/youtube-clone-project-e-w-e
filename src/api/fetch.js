const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export function getBaseUrl() {
  return BASE_URL;
}

async function fetchData() {
    const responde = await fetch(URL);
    const data = await responde.json();
    console.log(responde)
}

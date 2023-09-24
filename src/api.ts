const BASE_URL = "https://disney_api.nomadcoders.workers.dev/characters";

export function fetchCharacter() {
  return fetch(`${BASE_URL}`).then((response) =>response.json());
}

export function fetchCharacterDetail(characterId: string) {
  return fetch(`${BASE_URL}/${characterId}`).then((response) =>
    response.json()
  );
}
export class PokemonApi {
  private baseUrl(): string {
    return "https://pokeapi.co/api/v2";
  }

  static async get(endpoint: string) {
    const api = new PokemonApi();

    try {
      const response = await fetch(`${api.baseUrl()}/${endpoint}`);
      const data = await response.json();

      console.log({ data });

      return data;
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  }
}

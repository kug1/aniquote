export const environment = {
  // baseUrl for the API.
  baseUrl: "https://animechan.vercel.app/api/",

  // Possible API endpoints.

  random: "random",
  list: "available/anime",
  byCharacter: "quotes/character?name=",
  byAnime: "quotes/anime?title=",

  // Adding caching would be really good. Allthough im not sure how i can implement it.
};

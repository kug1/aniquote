import { join } from "https://deno.land/std@0.147.0/path/mod.ts";
import home_dir from "https://deno.land/x/dir@1.4.0/home_dir/mod.ts";

export const environment = {
  // baseUrl for the API.
  baseUrl: "https://animechan.vercel.app/api/",

  // Possible API endpoints.

  random: "random",
  list: "available/anime",
  byCharacter: "quotes/character?name=",
  byAnime: "quotes/anime?title=",

  // How often the cache will be updated.
  syncInterval: 7,

  // Directory that will store the data.
  cacheDir: join(home_dir() as string, ".cache", "aniquote"),
};

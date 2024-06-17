import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { CategoryController } from "./controllers/category/category-controller";
import { ListGamesCategoryController } from "./controllers/games/list-games-category-controller";
import { ListGamesMostAdsController } from "./controllers/games/list-games-most-ads-controller";
import { ListGamesController } from "./controllers/games/list-games-controller";
import { ShowDiscordAdController } from "./controllers/ad/show-discord-ad-controller";
import { ListRecentAdsController } from "./controllers/ad/list-recent-ads-controller";
import { ListAdsGameController } from "./controllers/ad/list-ads-game-controller";
import { CreateAdController } from "./controllers/ad/create-ad-controller";
import { UserDeleteAdController } from "./controllers/user/user-delete-ad-controller";
import { UserAdsController } from "./controllers/user/user-ads-controller";
import { AuthController } from "./controllers/user/auth-controller";
import { listCategorySchema } from "./routes-schemas/category/list-categories-schema";
import { listGamesByCategogySchema } from "./routes-schemas/games/list-games-by-category-shema";
import { listFamousGamesSchema } from "./routes-schemas/games/list-famous-games-schema";
import { listGamesSchema } from "./routes-schemas/games/list-games-schema";
import { getDiscordFromAnAdSchema } from "./routes-schemas/ad/get-discord-from-an-ad-schema";
import { listAdsRecentsSchema } from "./routes-schemas/ad/list-ads-recents-schema";
import { listAdsForAGameSchema } from "./routes-schemas/ad/list-ads-for-a-game-schema";
import { createAdSchema } from "./routes-schemas/ad/create-ad-schema";
import { deleteAUserAdSchema } from "./routes-schemas/user/delete-a-user-ad-schema";
import { listAdsFromAUserSchema } from "./routes-schemas/user/list-ads-from-a-user-schema";
import { createUserWithDataComingFromDiscordSchema } from "./routes-schemas/user/create-user-with-data-coming-from-discord-schema";
import { listGameSchema } from "./routes-schemas/games/list-game-schema";
import { ListGameController } from "./controllers/games/list-game-controller";

export default async function AppRoutes(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post("/auth", createUserWithDataComingFromDiscordSchema, AuthController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/user/ads", listAdsFromAUserSchema, UserAdsController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .delete("/user/delete/:adId", deleteAUserAdSchema, UserDeleteAdController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .post("/ad", createAdSchema, CreateAdController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/ads/:gameId", listAdsForAGameSchema, ListAdsGameController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/ad/recents", listAdsRecentsSchema, ListRecentAdsController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/discord/:adId", getDiscordFromAnAdSchema, ShowDiscordAdController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/games", listGamesSchema, ListGamesController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/famous/game", listFamousGamesSchema, ListGamesMostAdsController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get(
      "/game/:categoryId",
      listGamesByCategogySchema,
      ListGamesCategoryController
    );

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/game/view/:gameId", listGameSchema, ListGameController);

  app
    .withTypeProvider<ZodTypeProvider>()
    .get("/category", listCategorySchema, CategoryController);
}

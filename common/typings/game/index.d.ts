declare module "game" {
    export * from "game/constants";
    export * as constants from "game/constants";
    export * from "game/prototypes";
    export * as prototypes from "game/prototypes";
    export * from "game/path-finder";
    export * as pathFinder from "game/path-finder";
    export * from "game/utils";
    export * as utils from "game/utils";
    export * from "game/visual";
    export * as visual from "game/visual";

    export interface ArenaInfo {
        name: string;
        season: string;
        level: number;
        ticksLimit: number;
        cpuTimeLimit: number;
        cpuTimeLimitFirstTick: number;
    }

    export const arenaInfo: ArenaInfo;
}

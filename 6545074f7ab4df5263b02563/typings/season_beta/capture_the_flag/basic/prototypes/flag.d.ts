declare module "arena/season_beta/capture_the_flag/basic/prototypes" {
    import {GameObject} from "game/prototypes";

    /** A flag is a key game object for this arena. Capture all flags to win the game */
    export class Flag extends GameObject {
        /** Equals to true or false if the flag is owned. Returns undefined if it is neutral */
        readonly my?: boolean
    }
}

declare module "arena/season_beta/capture_the_flag/basic/prototypes" {
    import {BodyPartType, GameObject} from "game/prototypes";

    /** A separate part of creep body */
    export class BodyPart extends GameObject {

        /** The type of the body part */
        readonly type: BodyPartType;

        /** The number of ticks until this object disappears */
        readonly ticksToDecay: number;
    }
}

import {
    BlockExplodeAfterEvent,
    ButtonPushAfterEvent,
    ChatSendAfterEvent,
    ChatSendBeforeEvent,
    DataDrivenEntityTriggerAfterEvent,
    EffectAddAfterEvent,
    EffectAddBeforeEvent,
    EntityDieAfterEvent,
    EntityHealthChangedAfterEvent,
    EntityHitBlockAfterEvent,
    EntityHitEntityAfterEvent,
    EntityHurtAfterEvent,
    EntityLoadAfterEvent,
    EntityRemoveAfterEvent,
    EntityRemoveBeforeEvent,
    EntitySpawnAfterEvent,
    ExplosionAfterEvent,
    ExplosionBeforeEvent,
    GameRuleChangeAfterEvent,
    ItemCompleteUseAfterEvent,
    ItemReleaseUseAfterEvent,
    ItemStartUseAfterEvent,
    ItemStartUseOnAfterEvent,
    ItemStopUseAfterEvent,
    ItemStopUseOnAfterEvent,
    ItemUseAfterEvent,
    ItemUseBeforeEvent,
    ItemUseOnAfterEvent,
    ItemUseOnBeforeEvent,
    LeverActionAfterEvent,
    MessageReceiveAfterEvent,
    PistonActivateAfterEvent,
    PlayerBreakBlockAfterEvent,
    PlayerBreakBlockBeforeEvent,
    PlayerDimensionChangeAfterEvent,
    PlayerEmoteAfterEvent,
    PlayerGameModeChangeAfterEvent,
    PlayerGameModeChangeBeforeEvent,
    PlayerInputPermissionCategoryChangeAfterEvent,
    PlayerInteractWithBlockAfterEvent,
    PlayerInteractWithBlockBeforeEvent,
    PlayerInteractWithEntityAfterEvent,
    PlayerInteractWithEntityBeforeEvent,
    PlayerJoinAfterEvent,
    PlayerLeaveAfterEvent,
    PlayerLeaveBeforeEvent,
    PlayerPlaceBlockAfterEvent,
    PlayerPlaceBlockBeforeEvent,
    PlayerSpawnAfterEvent,
    PressurePlatePopAfterEvent,
    PressurePlatePushAfterEvent,
    ProjectileHitBlockAfterEvent,
    ProjectileHitEntityAfterEvent,
    TargetBlockHitAfterEvent,
    TripWireTripAfterEvent,
    WeatherChangeAfterEvent,
    WeatherChangeBeforeEvent,
    WorldInitializeAfterEvent,
    WorldInitializeBeforeEvent,
} from "@minecraft/server";
import { EntityResurrectBeforeEvent } from "./custom/entity/EntityResurrectBeforeEvent";

const EventMappings = {
    // Custom events
    EntityResurrectBeforeEvent,
    // Vanila events
    WorldInitializeAfterEvent,
    GameRuleChangeAfterEvent,
    MessageReceiveAfterEvent,
    WeatherChangeAfterEvent,
    ChatSendAfterEvent,
    ButtonPushAfterEvent,
    LeverActionAfterEvent,
    PlayerPlaceBlockAfterEvent,
    BlockExplodeAfterEvent,
    ExplosionAfterEvent,
    PlayerBreakBlockAfterEvent,
    EntityLoadAfterEvent,
    EntitySpawnAfterEvent,
    DataDrivenEntityTriggerAfterEvent,
    EffectAddAfterEvent,
    ProjectileHitEntityAfterEvent,
    ProjectileHitBlockAfterEvent,
    EntityHitEntityAfterEvent,
    EntityHitBlockAfterEvent,
    EntityHurtAfterEvent,
    EntityHealthChangedAfterEvent,
    EntityDieAfterEvent,
    EntityRemoveAfterEvent,
    ItemStartUseOnAfterEvent,
    ItemUseOnAfterEvent,
    ItemUseAfterEvent,
    ItemStopUseOnAfterEvent,
    ItemStartUseAfterEvent,
    ItemCompleteUseAfterEvent,
    ItemReleaseUseAfterEvent,
    ItemStopUseAfterEvent,
    PlayerJoinAfterEvent,
    PlayerSpawnAfterEvent,
    PlayerLeaveAfterEvent,
    PlayerGameModeChangeAfterEvent,
    PlayerDimensionChangeAfterEvent,

    PlayerInputPermissionCategoryChangeAfterEvent,
    PlayerInteractWithEntityAfterEvent,
    PlayerInteractWithBlockAfterEvent,
    PistonActivateAfterEvent,
    PressurePlatePushAfterEvent,
    PressurePlatePopAfterEvent,
    TargetBlockHitAfterEvent,
    TripWireTripAfterEvent,
    PlayerEmoteAfterEvent,
    ChatSendBeforeEvent,
    ExplosionBeforeEvent,
    ItemUseBeforeEvent,
    ItemUseOnBeforeEvent,
    PlayerBreakBlockBeforeEvent,
    PlayerPlaceBlockBeforeEvent,
    EntityRemoveBeforeEvent,
    PlayerInteractWithBlockBeforeEvent,
    PlayerInteractWithEntityBeforeEvent,
    PlayerLeaveBeforeEvent,
    PlayerGameModeChangeBeforeEvent,
    EffectAddBeforeEvent,
    WeatherChangeBeforeEvent,
    WorldInitializeBeforeEvent,
};

export default EventMappings;

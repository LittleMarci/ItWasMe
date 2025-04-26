ServerEvents.recipes(event=>{
    event.shapeless("kubejs:adrenaline_shot",["cure:syringe","minecraft:glowstone_dust","immersive_weathering:tallow","farmersdelight:melon_juice"])
    event.shapeless("kubejs:adrenaline_shot_enhanced",["kubejs:adrenaline_shot","2x minecraft:glowstone_dust","immersive_weathering:tallow","minecraft:blaze_powder","immersive_weathering:golden_moss_clump"])
    event.shapeless("kubejs:morphine_shot",["cure:syringe","minecraft:glow_ink_sac","immersive_weathering:tallow","farmersdelight:brown_mushroom_colony","minecraft:glow_berries"])
    event.shapeless("kubejs:morphine_shot_enhanced",["kubejs:morphine_shot","minecraft:blaze_powder","minecraft:honeycomb","2x minecraft:glistering_melon_slice","immersive_weathering:tallow"])
    event.shapeless("kubejs:steriod_shot",["cure:syringe","farmersdelight:onion","minecraft:golden_carrot","immersive_weathering:tallow"])
    event.shapeless("kubejs:steriod_shot_enhanced",["kubejs:steriod_shot","minecraft:nether_wart","minecraft:slime_ball","immersive_weathering:tallow","psg:saltpetre"])

})
global.getRandomInt = (max) =>
{
    //random number generator, minimum of 0 & maximum of max-1
    return Math.floor(Math.random() * max);
}
global.getPosEffectIndex = () =>
{
    return global.getRandomInt(12); //Make sure this value is set to the number of entries for possible positive effects
}
global.getNegEffectIndex = () =>
{
    return global.getRandomInt(12); //Make sure this value is set to the number of entries for possible negative effects
}
global.PossiblePosEffects = 
[
 "minecraft:strength", //1. Array index is 0, but the offset is already compensated for by subtracting of one happening during getRandomInt()
 "minecraft:speed", //2. index is 1, etc etc
 "minecraft:regeneration",
 "minecraft:haste",
 "minecraft:absorption",
 "minecraft:fire_resistance",
 "minecraft:night_vision",
 "minecraft:resistance",
 "minecraft:jump_boost",
 "minecraft:health_boost",
 "farmersdelight:comfort",
 "farmersdelight:nourishment" //12
];
global.PossibleNegEffects = 
[
"minecraft:weakness", //1
"minecraft:slowness", //2
"minecraft:poison",
"minecraft:mining_fatigue",
"minecraft:hunger",
"minecraft:blindness",
"minecraft:darkness",
"minecraft:nausea",
"minecraft:wither",
"attributeslib:grievous",
"attributeslib:sundering",
"cofh_core:wrenched", //12
];

StartupEvents.registry('item', event => {
    event.create('adrenaline_shot').displayName('§bAdrenaline Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("resistance",20*20);
        effects.add("instant_health",1);
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:adrenaline_shot',30*20);
        return itemStack;
    });
    event.create('adrenaline_shot_enhanced').displayName('§bEnhanced Adrenaline Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("resistance",10*20,1);
        effects.add("instant_health",1,1);
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:adrenaline_shot_enhanced',30*20);
        return itemStack;
    });
    event.create('morphine_shot').displayName('§bMorphine Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("farmersdelight:comfort",30*20);
        effects.add("attributeslib:vitality",20*20)
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:morphine_shot',30*20);
        return itemStack;
    });
    event.create('morphine_shot_enhanced').displayName('§bEnhanced Morphine Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("farmersdelight:comfort",30*20);
        effects.add("attributeslib:vitality",10*20,1)
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:morphine_shot_enhanced',30*20);
        return itemStack;
    });
    event.create('steriod_shot').displayName('§bSteriod Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("minecraft:speed",20*20);
        effects.add("minecraft:haste",20*20)
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:steriod_shot',30*20);
        return itemStack;
    });
    event.create('steriod_shot_enhanced').displayName('§bEnhanced Steriod Shot').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        let effects = entity.potionEffects;
        effects.add("minecraft:speed",10*20,1);
        effects.add("minecraft:haste",10*20,1)
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`)
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:steriod_shot_enhanced',30*20);
        return itemStack;
    });
    event.create('suspicious_medicine').displayName('§bSuspicious Medicine').unstackable().use((level,player,hand)=>true).useDuration(itemstack => 15).useAnimation("drink")
    .finishUsing((itemStack, level, entity) => {
        //let effects = entity.potionEffects;
        let rPosEffect = global.getPosEffectIndex();
        let rNegEffect = global.getNegEffectIndex();
        let posEffect = global.PossiblePosEffects[rPosEffect];
        let negEffect = global.PossibleNegEffects[rNegEffect];
        //effects.add(posEffect,10*20,1);
        //effects.add(negEffect,10*20);
        entity.server.runCommandSilent(`effect give ${entity.uuid} ${posEffect} 10 1`)
        entity.server.runCommandSilent(`effect give ${entity.uuid} ${negEffect} 10 0`)
        entity.server.runCommandSilent(`execute at ${entity.uuid} run playsound entity.player.breath player @a ~ ~ ~ 1 1`);
        itemStack.shrink(1);
        entity.addItemCooldown('kubejs:suspicious_medicine',30*20);
        return itemStack;
    });
    
})
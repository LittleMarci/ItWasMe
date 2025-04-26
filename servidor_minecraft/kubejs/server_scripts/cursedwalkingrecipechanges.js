ServerEvents.recipes(event => {
    console.log('CW Recipe Tweaks has fired.')
    
    //Changes the recipe of refined bismuth.
    event.shaped(
      Item.of('the_deep_void:refined_bismuth'),
      [
        'BAB',
        'ACA', 
        'BAB'
      ],
      {
        A: 'the_deep_void:refined_onyx',
        B: 'mcore:titanium_ingot',
        C: 'the_deep_void:bismuth'
      }
    )
/*
    //Changes the recipe of the tacz gun workbench.
    event.shaped(
      Item.of('the_deep_void:refined_bismuth'),
      [
        'BAB',
        'ACA', 
        'BAB'
      ],
      {
        A: 'the_deep_void:refined_onyx',
        B: 'mcore:titanium_ingot',
        C: 'the_deep_void:bismuth'
      }
    )
*/
    // Removes the overpowered create netherless netherite recipe. 
    //event.remove({ id: 'create_netherless:netherite_fragment_by_crushing'})
    //Removes gold and diamond armor. Edit: Why Pond? why?
    /*
    event.remove({ output: 'minecraft:diamond_helmet'})
    event.remove({ output: 'minecraft:diamond_chestplate'})
    event.remove({ output: 'minecraft:diamond_leggings'})
    event.remove({ output: 'minecraft:diamond_boots'})
    event.remove({ output: 'minecraft:golden_helmet'})
    event.remove({ output: 'minecraft:golden_chestplate'})
    event.remove({ output: 'minecraft:golden_leggings'})
    event.remove({ output: 'minecraft:golden_boots'})
    */
    // adds gun components. tacz recipes have been changed in their config.
    // adds small springs, however appears to be bugged. Will fix in a later release.
  // event.recipes.createSequencedAssembly([
 //   'kubejs:small_spring'
 //  ], 'kubejs:iron_wire',
 //  [
 //  event.recipes.createCutting('kubejs:incomplete_small_spring', 'kubejs:incomplete_small_spring').processingTime(50)
//   ]).transitionalItem('kubejs:incomplete_small_spring').loops(6)
   //reinforced barrel beginnings
  // event.recipes.createSequencedAssembly([
  //  'kubejs:cw_additions:reinforced_barrel'
 //  ], 'marbledsapi:hardened_steel_ingot',
 //  [
 //  event.recipes.createCutting('cw_additions:reinforced_barrel', 'cw_additions:reinforced_barrel').processingTime(100)
 //  ]).transitionalItem('cw_additions:reinforced_barrel').loops(3)
   //rb end - CURRENTLY IS THE ENTIRE RECIPE
   /*
   event.recipes.createSequencedAssembly([
    'cw_additions:reinforced_barrel'
   ], 'cw_additions:reinforced_barrel',
   [
   event.recipes.createCutting('cw_additions:reinforced_barrel', 'cw_additions:reinforced_barrel').processingTime(100)
   event.recipes.createCutting('cw_additions:reinforced_barrel', 'cw_additions:reinforced_barrel').processingTime(100),
   event.recipes.createFilling('cw_additions:reinforced_barrel', ['cw_additions:reinforced_barrel', Fluid.of('minecraft:lava', 250)])
   ]).transitionalItem('cw_additions:reinforced_barrel').loops(3)
  //recipe for rubber sheet: 250 mb liquid rubber + mold = ~~rubber sheet + mold~~ FILLED MOLD
  event.recipes.createFilling('kubejs:filled_rubber_mold', ['cw_additions:rubber_mold', Fluid.of('kubejs:molten_rubber', 250)])
  //recipe for liquid rubber
  event.recipes.createMixing(Fluid.of('kubejs:molten_rubber', 50), 'cw_additions:rubber_scrap').heated()
  //removal of all recipes from spore
  event.remove({ mod: 'spore' })
// hardened steel recipe
  event.recipes.createCompacting('marbledsapi:hardened_steel_ingot', [Fluid.of('minecraft:lava', 150), 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'cw_additions:gunsteel', 'cw_additions:gunsteel', 'cw_additions:gunsteel']).superheated()
// gunsteel recipe
  event.recipes.createCompacting('cw_additions:gunsteel', ['pointblank:gunmetal_nugget', 'pointblank:gunmetal_nugget', 'pointblank:gunmetal_nugget', 'pointblank:gunmetal_nugget', 'pointblank:gunmetal_nugget', 'create:zinc_nugget', 'create:zinc_nugget', 'create:zinc_nugget', 'create:zinc_nugget', 'minecraft:flint' ]).heated()
// buffed cinder flour recipe
  event.recipes.createCrushing(['create:cinder_flour', 'create:cinder_flour', 'create:cinder_flour', Item.of('create:cinder_flour').withChance(0.75), Item.of('create:cinder_flour').withChance(0.5), Item.of('create:cinder_flour').withChance(0.1), Item.of('create:cinder_flour').withChance(0.1)], 'minecraft:netherrack')
// disable old lava recipe, buffed lava recipe
  event.remove({ id: 'create:mixing/lava_from_cobble'})
  event.recipes.createMixing(Fluid.of('minecraft:lava', 100), '#forge:cobblestone').superheated().id('more_lava_from_cobble')
// MA rebalance: planned !
*/

// END OF RECIPE TWEAKS

})

// BEGINNING OF ITEM CODE - PLEASE LEAVE UNDISTURBED - IS FUNCTIONAL
/*
ItemEvents.rightClicked( 'kubejs:filled_rubber_mold', event => 
{
  event.item.count--
  event.player.give('cw_additions:rubber_sheet')
  event.player.give('cw_additions:rubber_mold')
})
//END OF ITEM CODE
*/


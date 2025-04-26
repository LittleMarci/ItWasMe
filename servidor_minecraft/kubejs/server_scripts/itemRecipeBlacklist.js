global.itemAsOutputRecipeBlacklist = [
    "the_deep_void:void_cloak_chestplate",
    "the_deep_void:void_core",
    "the_deep_void:rotten_dart",
    "the_deep_void:stalker_treat",
    "the_deep_void:void_dagger",
    "the_deep_void:void_pendant",
    "the_deep_void:licker_hook",
    "the_deep_void:grim_scythe",
    "the_deep_void:voidrium_boots",
    "the_deep_void:voidrium_leggings",
    "the_deep_void:voidrium_chestplate",
    "the_deep_void:voidrium_helmet",
    "the_deep_void:forbidden_tome",
    "alexsmobs:transmutation_table",
    "alexsmobs:shattered_dimensional_carver",
    "alexsmobs:dimensional_carver",
    "alexsmobs:shield_of_the_deep",
    "alexsmobs:stink_ray",
];

global.itemAsInputRecipeBlacklist = [
    "create_netherless:netherite_fragment"
];
global.recipeBlacklist = [
    "immersive_weathering:iron_ingot_from_clean_block",
    "immersive_weathering:iron_ingot_from_clean_block_blasting",
    "immersive_weathering:iron_ingot_from_exposed_block",
    "immersive_weathering:iron_ingot_from_exposed_block_blasting",
    "immersive_weathering:iron_ingot_from_rusted_block",
    "immersive_weathering:iron_ingot_from_rusted_block_blasting",
    "immersive_weathering:iron_ingot_from_weathered_block",
    "immersive_weathering:iron_ingot_from_weathered_block_blasting",
    "the_deep_void:refined_bismuth",
];
ServerEvents.tags('item',event=>{
    // //removes k_turret's titanium ingot from the titanium tags for the purpose of removing it from recipes that use any titanium. this is needed because simply doing "event.remove({input: k_turret:titanium_ingot})" would unfortunately delete the entirety of any recipe that includes it
    event.remove('forge:ingots/titanium','k_turrets:titanium_ingot')
    event.remove('forge:titanium','k_turrets:titanium_ingot')
})
/* IN-PROGRESS CODE FOR LOGGING THE LOCATION OF PVP DEATHS. CURRENTLY WOULD JUST LOG TO CONSOLE, OPTIMALLY WE WANT THE RESULTS PRINTED IN A WAY THAT MAKES THEM SHOW UP IN #server-logs CHANNEL. WOULD ALSO PUT IN A SEPERATE SCRIPT FILE AS WELL SINCE ITS NOT RECIPE RELATED
EntityEvents.death('minecraft:player',e=>{
  let killerName = e.source.getPlayer().username;
  let victimName = e.getEntity().username;

  let killerX = e.source.getPlayer().x;
  let killerY = e.source.getPlayer().y;
  let killerZ = e.source.getPlayer().z;
  let victimX = e.getEntity().x;
  let victimY = e.getEntity().y;
  let victimZ = e.getEntity().z;

  let killerPos = killerX + " " + killerY + " " + killerZ;
  let victimPos = victimX + " " + victimY + " " + victimZ;
  console.log("[KILLLOG: Killer] " + killerName + ": " + killerPos);
  console.log("[KILLLOG: Victim] " + victimName + ": " + victimPos);
})
  */
ServerEvents.recipes(event=>{
    console.log(global.recipeBlacklist)
    global.itemAsOutputRecipeBlacklist.forEach(element => 
        {
            event.remove({output: element})  //removes recipes in which create the element
        }
    );
    global.itemAsInputRecipeBlacklist.forEach(element => 
        {
            event.remove({input: element}) //removes recipes in which the element is used as an ingredient of the created item
        }
    );
    global.recipeBlacklist.forEach(element =>
      {
        event.remove(element); //removes recipes specified in recipeBlacklist
      }
    );
    //===SPECIAL CASES====//

    event.remove([{ type: 'minecraft:smelting', output: 'k_turrets:titanium_ingot' }, { type: 'minecraft:blasting', output: 'k_turrets:titanium_ingot' }])

    event.remove('create_netherless:netherite_fragment_by_crushing') //deletion & recreation of create mod blackstone crushing recipe to remove netherite fragment
    event.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "minecraft:blackstone"
          }
        ],
        "results": [
          {
            "item": "coal",
            "count": 1,
            "chance": 0.5
          }
        ],
        "processingTime": 250
      })

    //replaces k turret titanium ingot with mcore titanium ingot in certain recipes unnaccounted for by previous code.   
    event.replaceInput({id:'k_turrets:gauss_bullet'},'k_turrets:titanium_ingot','minecraft:obsidian'); //making gause bullets require mcore titanium would be absurdly expensive.
    event.replaceInput({id:'k_turrets:reloader'},'k_turrets:titanium_ingot','mcore:titanium_ingot');
    event.replaceInput({id:'k_turrets:wrench'},'k_turrets:titanium_ingot','mcore:titanium_ingot');
})

//For all code related to k_turret titanium in this script: even though the ore is disabled from generation if disabledOres.js is running, it still needs to be removed from JEI menus as well to prevent confusion among new players
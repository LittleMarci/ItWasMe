/*console.info('CW Tweaks Startup scripts successfully loaded.')
//untested vvv
Platform.mods.kubejs.name = 'Cursed Walking'
//untested ^^^
StartupEvents.registry('item', event => {
   // event.create('hardened_spring').maxStackSize(64).tooltip('not barel').displayName('Hardened Spring')
    //deprecated features.
  //  event.create('hardened_trigger').maxStackSize(64).tooltip('trigah').displayName('Trigger')
   // event.create('rubber_sheet').maxStackSize(64).tooltip('rubbahsheeet').displayName('Rubber Sheet')
  //  event.create('advanced_gun_interals').maxStackSize(64).displayName('Advanced Gun Internals')
   // event.create('stock').maxStackSize(64).displayName('Stock')
   // event.create('bipod').maxStackSize(64).displayName('Bipod')
   // event.create('magazine').maxStackSize(64).displayName('Magazine')
   // event.create('small_spring').maxStackSize(64).displayName('Small Spring')
  //event.create('unfinished_reinforced_barrel').maxStackSize(1).displayName('Unfinished Reinforced Barrel')
    //event.create('reinforced_barrel').maxStackSize(1).displayName('Reinforced Barrel')
// create sequenced assembly stuff.
// bugged. Will fix in later release.    event.create('incomplete_small_spring', 'create:sequenced_assembly').displayName('Incomplete Small Spring')
  event.create('kubejs:incomplete_reinforced_barrel', 'create:sequenced_assembly').displayName('Incomplete Reinforced Barrel')
  event.create('kubejs:filled_rubber_mold').maxStackSize(16).displayName('Filled Rubber Mold')
// lack of cwa stuff
  event.create('rubbersheet').maxStackSize(1).displayName('Rubber Sheet')
  event.create('gunsteel').maxStackSize(1).displayName('Gunsteel')
  event.create('unfinished_reinforced_barrel').maxStackSize(1).displayName('Unfinished Reinforced Barrel')
})
StartupEvents.registry('fluid', event => {
    event.create('molten_rubber')
      .thickTexture(2302244)
      .bucketColor(2302244)
      .displayName('Molten Rubber')
})
*/
//to test this as of 11/10/2024, make a world of seed 1872 and teleport to -857 51 416 with and without this script loaded in

WorldgenEvents.remove(event=>{
    event.removeOres(props=>{
        props.blocks = ['k_turrets:titanium_ore','k_turrets:deepslate_titanium_ore']
        //for the record, the wiki states tags cannot be used here. if we want more blocks disabled, add more block ids individually in the array like ['k_turrets:titanium_ore','OTHERID']
    })
})
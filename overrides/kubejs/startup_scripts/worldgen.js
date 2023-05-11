onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ['minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore']
    })
})
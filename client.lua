
-- Would recommend not touching this
local function shprogress(text, duration, color)
    color = color or 'rgb(87, 196, 199)'
    SendNUIMessage({
        type = "progress",
        text = text,
        duration = duration,
        color = color,
    })
end

exports('progressbar', shprogress)


-- Examples Below

-- RegisterCommand('progress', function()
--     exports['sh-progressbar']:progressbar('Grabbing Weed', 5000, 'rgb(87, 196, 199)')
-- end)

-- exports['sh-progressbar']:progressbar('Grabbing Weed', 5000, 'rgb(87, 196, 199)') -- For colour can use text, HEX and RGB (E.g Blue, ##285a5c, rgb(87, 196, 199))

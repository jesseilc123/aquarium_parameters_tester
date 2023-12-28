const fowlrParamters = [
    {name:"Salinity", min: parseFloat(1.020).toFixed(3), max: 1.025},
    {name:"Temperature", min: 72, max: 78},
    {name:"PH", min: 8.1, max: 8.4 },
    {name:"Alkalinity", min: 8, max: 12},
    {name: "Ammonia", min: 0,  max: 0},
    {name: "Nitrite", min: 0,  max: 0},
    {name: "Nitrate", min: 0,  max: 30},
    {name:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {name:"Calcium", min: 350,  max: 450},
    {name:"Magnesium", min: 1150,  max: 1350},
    {name:"Iodine", min: 0.04,  max: parseFloat(0.10).toFixed(2)},
    {name:"Strontium", min: 8,  max: 14},
]

const reefParamters = [
    {name:"Salinity", min: parseFloat(1.023).toFixed(3), max: 1.025},
    {name:"Temperature", min: 72, max: 78},
    {name:"PH", min: 8.1, max: 8.4 },
    {name:"Alkalinity", min: 8, max: 12},
    {name: "Ammonia", min: 0,  max: 0},
    {name: "Nitrite", min: 0,  max: 0},
    {name: "Nitrate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {name:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {name:"Calcium", min: 350,  max: 450},
    {name:"Magnesium", min: 1250,  max: 1350},
    {name:"Iodine", min: 0.06,  max: parseFloat(0.10).toFixed(2)},
    {name:"Strontium", min: 8,  max: 14},
]

export { fowlrParamters, reefParamters };
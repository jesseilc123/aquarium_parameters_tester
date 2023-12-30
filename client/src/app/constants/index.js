const fowlrParamters = [
    {parameter:"Salinity", min: parseFloat(1.020).toFixed(3), max: 1.025},
    {parameter:"Temperature", min: 72, max: 78},
    {parameter:"PH", min: 8.1, max: 8.4 },
    {parameter:"Alkalinity", min: 8, max: 12},
    {parameter: "Ammonia", min: 0,  max: 0},
    {parameter: "Nitrite", min: 0,  max: 0},
    {parameter: "Nitrate", min: 0,  max: 30},
    {parameter:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Calcium", min: 350,  max: 450},
    {parameter:"Magnesium", min: 1150,  max: 1350},
    {parameter:"Iodine", min: 0.04,  max: parseFloat(0.10).toFixed(2)},
    {parameter:"Strontium", min: 8,  max: 14},
]

const reefParamters = [
    {parameter:"Salinity", min: parseFloat(1.023).toFixed(3), max: 1.025},
    {parameter:"Temperature", min: 72, max: 78},
    {parameter:"PH", min: 8.1, max: 8.4 },
    {parameter:"Alkalinity", min: 8, max: 12},
    {parameter: "Ammonia", min: 0,  max: 0},
    {parameter: "Nitrite", min: 0,  max: 0},
    {parameter: "Nitrate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Phosphate", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Calcium", min: 350,  max: 450},
    {parameter:"Magnesium", min: 1250,  max: 1350},
    {parameter:"Iodine", min: 0.06,  max: parseFloat(0.10).toFixed(2)},
    {parameter:"Strontium", min: 8,  max: 14},
]

const communityParameters = [
    {parameter:"Temperature", unit: "(°F)", min: 72, max: 82},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 50},
    {parameter:"PH", unit: "", min: 6.5, max: 7.5},
    {parameter:"Alkalinity", unit: "(KH)", min: 4,  max: 8},
    {parameter:"General Hardness", unit: "(GH)", min: 4,  max: 12},
]

const cichlidParameters = [
    {parameter:"Temperature", unit: "(°F)", min: 72, max: 82},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 50},
    {parameter:"PH", unit: "", min: 7.8, max: 8.5},
    {parameter:"Alkalinity", unit: "(KH)", min: 10,  max: 18},
    {parameter:"General Hardness", unit: "(GH)", min: 12,  max: 20},
]

const plantsDiscusParameters = [
    {parameter:"Temperature", unit: "(°F)", min: 76, max: 86},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 30},
    {parameter:"PH", unit: "", min: 6.0, max: 7.5},
    {parameter:"Alkalinity", unit: "(KH)", min: 3,  max: 8},
    {parameter:"General Hardness", unit: "(GH)", min: 3,  max: 8},
]

const brackishParameters = [
    {parameter:"Temperature", unit: "(°F)", min: 72, max: 82},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 50},
    {parameter:"PH", unit: "", min: 7.5, max: 8.4},
    {parameter:"Alkalinity", unit: "(KH)", min: 10,  max: 18},
    {parameter:"General Hardness", unit: "(GH)", min: 12,  max: 20},
]

const pondParameters = [
    {parameter:"Temperature", unit: "(°F)", min: 33, max: 86},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 50},
    {parameter:"PH", unit: "", min: 6.5, max: 7.5},
    {parameter:"Alkalinity", unit: "(KH)", min: 4,  max: 8},
    {parameter:"General Hardness", unit: "(GH)", min: 4,  max: 12},
]

const saltwaterParametersAll = [
    {parameter: "Specific Gravity", reef: "1.023 - 1.025", fowlr: "1.020 - 1.025", ocean: "1.025"},
    {parameter: "Temperature", reef: "72 - 78°F", fowlr: "72 - 78°F", ocean: "82°F"},
    {parameter: "pH", reef: "8.1 - 8.4", fowlr: "8.1 - 8.4", ocean: "8.0 - 8.5"},
    {parameter: "Alkalinity", reef: "8 - 12 dKH", fowlr: "8 - 12 dKH", ocean: "6 - 8 dKH"},
    {parameter: "Ammonia ", reef: "0", fowlr: "0", ocean: "0"},
    {parameter: "Nitrite", reef: "0", fowlr: "0", ocean: "0"},
    {parameter: "Nitrate", reef: "< 1.0 ppm", fowlr: "< 30 ppm", ocean: "0.25 ppm"},
    {parameter : "Phosphate", reef: "< 0.2 ppm", fowlr: "< 1.0 ppm", ocean: "0.13 ppm"},
    {parameter : "Calcium", reef: "350 - 450 ppm", fowlr: "350 - 450 ppm", ocean: "1.025"},
    {parameter : "Magnesium", reef: "1250 - 1350 ppm", fowlr: "1150 - 1350 ppm", ocean: "1300 ppm"},
    {parameter : "Iodine", reef: "0.06 - 0.10 ppm", fowlr: "0.04 - 0.10 ppm", ocean: "0.06 ppm"},
    {parameter : "Strontium", reef: "8 - 14 ppm", fowlr: "4 - 10 ppm", ocean: "8 - 10 ppm"},
]

const freshwaterParametersAll = [
    {parameter: "Temperature", community: "72 - 82°F", cichlid: "72 - 82°F", plantsDiscus: "76 - 86°F", brackish: "72 - 82°F", pond: "33 - 86°F"},
    {parameter: "pH", community: "6.5 - 7.5", cichlid: "7.8 - 8.5", plantsDiscus: "6.0 - 7.5", brackish: "7.5 - 8.4", pond: "6.5 - 7.5"},
    {parameter: "Ammonia", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
    {parameter: "Nitrite", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
    {parameter: "Nitrate", community: "< 50 ppm", cichlid: "< 50 ppm", plantsDiscus: "< 30 ppm", brackish: "< 50 ppm", pond: "< 50 ppm"},
    {parameter: "Alkalinity", community: "4 - 8 KH", cichlid: "10 - 18 KH", plantsDiscus: "3 - 8 KH", brackish: "10 - 18 KH", pond: "4 - 8 KH"},
    {parameter: "General Hardness", community: "4 - 12 GH", cichlid: "12 - 20 GH", plantsDiscus: "3 - 8 GH", brackish: "12 - 20 GH", pond: "4 - 12 GH"},
]

const communities = [
    {route: "community", name: "Freshwater Community", image: "/fish-aquariums.jpg", description: "A Freshwater Community Tank is diverse mix of fish species including tetras, rasboras, gouramis, barbs, catfish and loaches.", parameters: communityParameters},
    {route: "african_cichlid", name: "African Cichlid", image: "/african_cichlid.jpg", description: "An African Cichlid come from lakes known for their alkaline water, often characterized by higher pH levels and mineral content.", parameters: cichlidParameters},
    {route: "plants_discus",name: "Freshwater Plants & Discus", image: "/discus.jpg", description: "", parameters: plantsDiscusParameters},
    {route: "brackish", name: "Brackish", image: "/brackish.jpg", description: "", parameters: brackishParameters},
    {route: "pond", name: "Pond", image: "/pond.jpg", description: "", parameters: pondParameters},
    {route: "all", name: "All", image: "/all.jpg", description: "", parameters: freshwaterParametersAll}
]

export { 
    fowlrParamters, 
    reefParamters, 
    communityParameters, 
    cichlidParameters,
    plantsDiscusParameters, 
    brackishParameters,
    pondParameters,
    communities,
};
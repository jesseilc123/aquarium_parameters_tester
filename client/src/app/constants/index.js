const fowlrParameters = [
    {parameter:"Salinity", unit: "(SG)", min: parseFloat(1.020).toFixed(3), max: 1.025},
    {parameter:"Temperature", unit: "(°F)", min: 72, max: 78},
    {parameter:"PH", unit: "(°F)", min: 8.1, max: 8.4 },
    {parameter:"Alkalinity", unit: "(dKH)", min: 8, max: 12},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: 30},
    {parameter:"Phosphate", unit: "(ppm)", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Calcium", unit: "(ppm)", min: 350,  max: 450},
    {parameter:"Magnesium", unit: "(ppm)", min: 1150,  max: 1350},
    {parameter:"Iodine", unit: "(ppm)", min: 0.04,  max: parseFloat(0.10).toFixed(2)},
    {parameter:"Strontium", unit: "(ppm)", min: 8,  max: 14},
]

const reefParameters = [
    {parameter:"Salinity", unit: "(SG)", min: parseFloat(1.023).toFixed(3), max: 1.025},
    {parameter:"Temperature", unit: "(°F)", min: 72, max: 78},
    {parameter:"PH", min: 8.1, max: 8.4 },
    {parameter:"Alkalinity", unit: "(dKH)", min: 8, max: 12},
    {parameter: "Ammonia", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrite", unit: "(ppm)", min: 0,  max: 0},
    {parameter: "Nitrate", unit: "(ppm)", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Phosphate", unit: "(ppm)", min: 0,  max: parseFloat(1.00).toFixed(2)},
    {parameter:"Calcium", unit: "(ppm)", min: 350,  max: 450},
    {parameter:"Magnesium", unit: "(ppm)", min: 1250,  max: 1350},
    {parameter:"Iodine", unit: "(ppm)", min: 0.06,  max: parseFloat(0.10).toFixed(2)},
    {parameter:"Strontium", unit: "(ppm)", min: 8,  max: 14},
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
    {parameter: "Salinity (SG)", reef: "1.023 - 1.025", fowlr: "1.020 - 1.025", ocean: "1.025"},
    {parameter: "Temperature (°F)", reef: "72 - 78", fowlr: "72 - 78", ocean: "82"},
    {parameter: "pH", reef: "8.1 - 8.4", fowlr: "8.1 - 8.4", ocean: "8.0 - 8.5"},
    {parameter: "Alkalinity (dKH)", reef: "8 - 12", fowlr: "8 - 12", ocean: "6 - 8"},
    {parameter: "Ammonia (ppm)", reef: "0", fowlr: "0", ocean: "0"},
    {parameter: "Nitrite (ppm)", reef: "0", fowlr: "0", ocean: "0"},
    {parameter: "Nitrate (ppm)", reef: "< 1.0", fowlr: "< 30", ocean: "0.25"},
    {parameter : "Phosphate (ppm)", reef: "< 0.2", fowlr: "< 1.0", ocean: "0.13"},
    {parameter : "Calcium (ppm)", reef: "350 - 450", fowlr: "350 - 450", ocean: "1.025"},
    {parameter : "Magnesium (ppm)", reef: "1250 - 1350", fowlr: "1150 - 1350", ocean: "1300"},
    {parameter : "Iodine (ppm)", reef: "0.06 - 0.10", fowlr: "0.04 - 0.10", ocean: "0.06"},
    {parameter : "Strontium (ppm)", reef: "8 - 14", fowlr: "4 - 10", ocean: "8 - 10"},
]

const freshwaterParametersAll = [
    {parameter: "Temperature (°F)", community: "72 - 82", cichlid: "72 - 82", plantsDiscus: "76 - 86", brackish: "72 - 82", pond: "33 - 86"},
    {parameter: "Ammonia (ppm)", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
    {parameter: "Nitrite (ppm)", community: "0", cichlid: "0", plantsDiscus: "0", brackish: "0", pond: "0"},
    {parameter: "Nitrate (ppm)", community: "< 50", cichlid: "< 50", plantsDiscus: "< 30", brackish: "< 50", pond: "< 50"},
    {parameter: "pH", community: "6.5 - 7.5", cichlid: "7.8 - 8.5", plantsDiscus: "6.0 - 7.5", brackish: "7.5 - 8.4", pond: "6.5 - 7.5"},
    {parameter: "Alkalinity (KH)", community: "4 - 8", cichlid: "10 - 18", plantsDiscus: "3 - 8", brackish: "10 - 18", pond: "4 - 8"},
    {parameter: "General Hardness (GH)", community: "4 - 12", cichlid: "12 - 20", plantsDiscus: "3 - 8", brackish: "12 - 20", pond: "4 - 12"},
]

const communities = [
    {route: "fresh_all", name: "All", image: "/all.jpg", description: "", parameters: freshwaterParametersAll},
    {route: "fresh_community", name: "Freshwater Community", image: "/fish-aquariums.jpg", description: "", parameters: communityParameters},
    {route: "fresh_african_cichlid", name: "African Cichlid", image: "/african_cichlid.jpg", description: "", parameters: cichlidParameters},
    {route: "fresh_plants_discus",name: "Freshwater Plants & Discus", image: "/discus.jpg", description: "", parameters: plantsDiscusParameters},
    {route: "fresh_brackish", name: "Brackish", image: "/brackish.jpg", description: "", parameters: brackishParameters},
    {route: "fresh_pond", name: "Pond", image: "/pond.jpg", description: "", parameters: pondParameters},  
]

const reefs = [
    {route: "salt_all", name: "All", image: "/reef_all.jpg", description: "", parameters: saltwaterParametersAll},
    {route: "salt_fowlr", name: "Fish only with Live Rock", image: "/fowlr.jpg", description: "", parameters: fowlrParameters},
    {route: "salt_reef", name: "Reef", image: "/reef.jpg", description: "", parameters: reefParameters}, 
]

export { 
    fowlrParameters, 
    reefParameters, 
    communityParameters, 
    cichlidParameters,
    plantsDiscusParameters, 
    brackishParameters,
    pondParameters,
    communities,
    reefs,
};
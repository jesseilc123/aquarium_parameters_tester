"use client";  // This is a client component
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "@/app/providers";
import { useRouter } from 'next/navigation'
import { LineChart } from '@mui/x-charts/LineChart';
import { Button, Menu, MenuItem, Typography, Box, InputLabel, FormControl, Select, Card, Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

export default function TankPage({ params }){
    const [currentGraph, setCurrentGraph] = useState("Temperature")
    const [timeFrame, setTimeFrame] = useState(30)
    const [tankType, setTankType] = useState(null)
    const { user, tanks, currentTank, setCurrentTank } = useContext(UserContext)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/")
        }

        if (tanks) {
            tanks.filter((tank) => {
                if(tank.id == params.id) {
                    setCurrentTank(tank)
                }
            })
        } 
    }, [setCurrentTank, user ])

    useEffect(() => {
        let list = []
        if (currentTank) {
            if (currentTank.type.toLowerCase() === "freshwater") {
                list = [
                    {
                        name: "Temperature", 
                        value: typeof(currentTank.temperatures[0]) !== "undefined" ? currentTank.temperatures.slice(-1)[0].value : null, 
                        created: typeof(currentTank.temperatures[0]) !== "undefined" ? currentTank.temperatures.slice(-1)[0].created_at : null,
                        route: "temperatures",
                        unit: "°F",
                    }, 
                    {
                        name: "Ammonia", 
                        value: typeof(currentTank.ammonias[0]) !== "undefined" ? currentTank.ammonias.slice(-1)[0].value : null,
                        created: typeof(currentTank.ammonias[0]) !== "undefined" ? currentTank.ammonias.slice(-1)[0].created_at : null,
                        route: "ammonias",
                        unit: "ppm",
                    }, 
                    {
                        name: "Nitrite", 
                        value: typeof(currentTank.nitrites[0]) !== "undefined" ? currentTank.nitrites.slice(-1)[0].value : null,
                        created: typeof(currentTank.nitrites[0]) !== "undefined" ? currentTank.nitrites.slice(-1)[0].created_at : null,
                        route: "nitrites",
                        unit: "ppm",
                    }, 
                    {
                        name: "Nitrate", 
                        value: typeof(currentTank.nitrates[0]) !== "undefined" ? currentTank.nitrates.slice(-1)[0].value : null,
                        created: typeof(currentTank.nitrates[0]) !== "undefined" ? currentTank.nitrates.slice(-1)[0].created_at : null,
                        route: "nitrates",
                        unit: "ppm",
                    }, 
                    {
                        name: "PH", 
                        value: typeof(currentTank.phs[0]) !== "undefined" ? currentTank.phs.slice(-1)[0].value : null,
                        created: typeof(currentTank.phs[0]) !== "undefined" ? currentTank.phs.slice(-1)[0].created_at : null,
                        route: "phs",
                        unit: "",
                    }, 
                    {
                        name: "Alkalinity", 
                        value: typeof(currentTank.alkalinities[0]) !== "undefined" ? currentTank.alkalinities.slice(-1)[0].value : null,
                        created: typeof(currentTank.alkalinities[0]) !== "undefined" ? currentTank.alkalinities.slice(-1)[0].created_at : null,
                        route: "alkalinities",
                        unit: "KH",
                    }, 
                    {
                        name: "GH", 
                        value: typeof(currentTank.ghs[0]) !== "undefined" ? currentTank.ghs.slice(-1)[0].value : null,
                        created: typeof(currentTank.ghs[0]) !== "undefined" ? currentTank.ghs.slice(-1)[0].created_at : null,
                        route: "ghs",
                        unit: "GH",
                    }
                ]
            } else if (currentTank.type.toLowerCase() === "saltwater") {
                list = [
                    {
                        name: "Temperature",
                        value: typeof(currentTank.temperatures[0]) !== "undefined" ? currentTank.temperatures.slice(-1)[0].value  : null,
                        created: typeof(currentTank.temperatures[0]) !== "undefined" ? currentTank.temperatures.slice(-1)[0].created_at : null,
                        route: "temperatures",
                        unit: "°F",
                    }, 
                    {
                        name: "Salinity",
                        value: typeof(currentTank.salinities[0]) !== "undefined" ? currentTank.salinities.slice(-1)[0].value : null,
                        created: typeof(currentTank.salinities[0]) !== "undefined" ? currentTank.salinities.slice(-1)[0].created_at : null,
                        route: "salinities",
                        unit: "SG",
                    }, 
                    {
                        name: "PH",
                        value: typeof(currentTank.phs[0]) !== "undefined" ? currentTank.phs.slice(-1)[0].value : null,
                        created: typeof(currentTank.phs[0]) !== "undefined" ? currentTank.phs.slice(-1)[0].created_at : null,
                        route: "phs",
                        unit: "",
                    }, 
                    {
                        name: "Alkalinity",
                        value: typeof(currentTank.alkalinities[0]) !== "undefined" ? currentTank.alkalinities.slice(-1)[0].value : null,
                        created: typeof(currentTank.alkalinities[0]) !== "undefined" ? currentTank.alkalinities.slice(-1)[0].created_at : null,
                        route: "alkalinities",
                        unit: "KH",
                    }, 
                    {
                        name: "Ammonia",
                        value: typeof(currentTank.ammonias[0]) !== "undefined" ? currentTank.ammonias.slice(-1)[0].value : null,
                        created: typeof(currentTank.ammonias[0]) !== "undefined" ? currentTank.ammonias.slice(-1)[0].created_at : null,
                        route: "ammonias",
                        unit: "ppm",
                    }, 
                    {
                        name: "Nitrite",
                        value: typeof(currentTank.nitrites[0]) !== "undefined" ? currentTank.nitrites.slice(-1)[0].value : null,
                        created: typeof(currentTank.nitrites[0]) !== "undefined" ? currentTank.nitrites.slice(-1)[0].created_at : null,
                        route: "nitrites",
                        unit: "ppm",
                    }, 
                    {
                        name: "Nitrate",
                        value: typeof(currentTank.nitrates[0]) !== "undefined" ? currentTank.nitrates.slice(-1)[0].value : null,
                        created: typeof(currentTank.nitrates[0]) !== "undefined" ? currentTank.nitrates.slice(-1)[0].created_at : null,
                        route: "nitrates",
                        unit: "ppm",
                    }, 
                    {
                        name: "Phosphate",
                        value: typeof(currentTank.phosphates[0]) !== "undefined" ? currentTank.phosphates.slice(-1)[0].value : null,
                        created: typeof(currentTank.phosphates[0]) !== "undefined" ? currentTank.phosphates.slice(-1)[0].created_at : null,
                        route: "phosphates",
                        unit: "ppm",
                    }, 
                    {
                        name: "Calcium", 
                        value: typeof(currentTank.calciums[0]) !== "undefined" ? currentTank.calciums.slice(-1)[0].value : null,
                        created: typeof(currentTank.calciums[0]) !== "undefined" ? currentTank.calciums.slice(-1)[0].created_at : null,
                        route: "calciums",
                        unit: "ppm",
                    }, 
                    {
                        name: "Magnesium", 
                        value: typeof(currentTank.magnesiums[0]) !== "undefined" ? currentTank.magnesiums.slice(-1)[0].value : null,
                        created: typeof(currentTank.magnesiums[0]) !== "undefined" ? currentTank.magnesiums.slice(-1)[0].created_at : null,
                        route: "magnesiums",
                        unit: "ppm",
                    }, 
                    {
                        name: "Iodine",
                        value: typeof(currentTank.iodines[0]) !== "undefined" ? currentTank.iodines.slice(-1)[0].value : null,
                        created: typeof(currentTank.iodines[0]) !== "undefined" ? currentTank.iodines.slice(-1)[0].created_at : null,
                        route: "iodines",
                        unit: "ppm",
                    }, 
                    {
                        name: "Strontium",
                        value: typeof(currentTank.strontiums[0]) !== "undefined" ? currentTank.strontiums.slice(-1)[0].value : null,
                        created: typeof(currentTank.strontiums[0]) !== "undefined" ? currentTank.strontiums.slice(-1)[0].created_at : null,
                        route: "strontiums",
                        unit: "ppm",
                    }
                ]
            }
        }
        setTankType(list)
    }, [setTankType, currentTank ])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setTimeFrame(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
        if (event.target.value){
            setCurrentGraph(event.target.value)
        }
    };

    function handleXAxis(param) {
        let arr = []
        let newParam
        if(param) {
            if (currentGraph === "Temperature") {
                newParam = param.temperatures
            } else if (currentGraph === "Ammonia") {
                newParam = param.ammonias
            } else if (currentGraph === "Nitrite") {
                newParam = param.nitrites
            } else if (currentGraph === "Nitrate") {
                newParam = param.nitrates
            }  else if (currentGraph === "PH") {
                newParam = param.phs
            } else if (currentGraph === "Alkalinity") {
                newParam = param.alkalinities
            } else if (currentGraph === "GH") {
                newParam = param.ghs
            } else if (currentGraph === "Salinity") {
                newParam = param.salinities
            } else if (currentGraph === "Phosphate") {
                newParam = param.phosphates
            } else if (currentGraph === "Calcium") {
                newParam = param.calciums
            } else if (currentGraph === "Magnesium") {
                newParam = param.magnesiums
            } else if (currentGraph === "Iodine") {
                newParam = param.iodines
            } else if (currentGraph === "Strontium") {
                newParam = param.strontiums
            }
        }

        let sortedArr = null
        if (newParam){
            sortedArr = newParam.sort(function(a, b) {
                return new Date(a.created_at) - new Date(b.created_at)
            })
            newParam.forEach((element) => {
                const newElement = new Date(element.created_at)
                arr.push(newElement)
            })
        }

        return arr.slice((arr.length >= timeFrame ? arr.length - timeFrame : 0), arr.length)
    }

    function handleSeries(param) {
        let arr = []
        let sortedArr = null
        let newParam
        if(param) {
            if (currentGraph === "Temperature") {
                newParam = param.temperatures
            } else if (currentGraph === "Ammonia") {
                newParam = param.ammonias
            } else if (currentGraph === "Nitrite") {
                newParam = param.nitrites
            } else if (currentGraph === "Nitrate") {
                newParam = param.nitrates
            }  else if (currentGraph === "PH") {
                newParam = param.phs
            } else if (currentGraph === "Alkalinity") {
                newParam = param.alkalinities
            } else if (currentGraph === "GH") {
                newParam = param.ghs
            } else if (currentGraph === "Salinity") {
                newParam = param.salinities
            } else if (currentGraph === "Phosphate") {
                newParam = param.phosphates
            } else if (currentGraph === "Calcium") {
                newParam = param.calciums
            } else if (currentGraph === "Magnesium") {
                newParam = param.magnesiums
            } else if (currentGraph === "Iodine") {
                newParam = param.iodines
            } else if (currentGraph === "Strontium") {
                newParam = param.strontiums
            }
        }
        if (newParam){
            sortedArr = newParam.sort(function(a, b) {
                return new Date(a.created_at) - new Date(b.created_at)
            })
            newParam.forEach((element) => {
                const newElement = new Date(element.value)
                arr.push(newElement)
            })
        }
        return arr.slice((arr.length >= timeFrame ? arr.length - timeFrame : 0), arr.length)
    }

    return (
        <div className="flex justify-center items-center mt-[80px]">
            <div className="flex flex-col w-full md:w-[50%]">
                <div className="flex justify-start items-start flex-col ml-2 gap-2">
                    <Button variant="outlined" className="flex w-[90px] h-full items-center">
                        <Link href="/dashboard" className="flex flex-row">
                            <ArrowBackIcon />
                            <Typography className="mr-1">Back</Typography>
                        </Link>
                    </Button>
                    <Typography variant="h4" className="flex justify-center">{currentTank ? currentTank.name : null}</Typography>
                    <div className="flex flex-row items-center justify-center outline outline-[1px] pr-2 rounded-md outline-blue-400">
                        <Button
                            id="basic-but"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Parameter:
                        </Button>
                        <Typography>{currentGraph}</Typography>
                    </div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {currentTank && tanks && tankType ? tankType.map(item => (
                            <MenuItem key={item.name}>
                                <button
                                    value={item.name}
                                    className='items-center justify-center'
                                    onClick={(e) => handleClose(e)}
                                >
                                    {item.name}
                                </button>
                            </MenuItem>
                        )) : null}
                    </Menu>
                </div>
                <div >
                    <LineChart
                        xAxis={[{
                            data : currentTank ? handleXAxis(currentTank) : [0], 
                            label: "Days", 
                            scaleType: "time", 
                            valueFormatter: (date) => {
                                const month = date.getMonth()
                                return monthNames[month] + " " + date.getDate().toString()
                            }
                        }]}
                        yAxis={[{label: currentGraph}]}
                        series={[{data: currentTank ?  handleSeries(currentTank) : [0]}]}
                        height={400}
                    />
                </div>
                <Box sx={{ width: 80, marginLeft: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Entries</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={timeFrame}
                            label="Time Frame"
                            onChange={handleChange}
                        >
                            <MenuItem value={30}>30 </MenuItem>
                            <MenuItem value={60}>60 </MenuItem>
                            <MenuItem value={90}>90 </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="flex flex-row gap-4 flex-wrap justify-evenly my-5">
                    {currentTank && tankType ? tankType.map(item => {
                        return (
                            <Link key={item.name} href={`/dashboard/${currentTank.id}/${item.route}`}>
                                <Card sx={{width: {xs: "100%", sm: 200}, height: 125}} elevation={8}>       
                                    <div className="flex flex-col justify-center h-full w-full">
                                        <Typography align="justify" className="font-bold flex justify-center items-center h-[30px] mb-1">
                                            {item.name}
                                        </Typography>
                                        <Divider />
                                        <Typography align="left" className="ml-1">Last Entry</Typography>
                                        <div className="flex flex-row justify-between mx-4">
                                            <Typography align="left" className="font-bold">Date:</Typography>
                                            <Typography align="right">{item.created ? item.created.slice(0, 10) : item.created}</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between mx-4">
                                            <Typography align="left" className="font-bold">Value:</Typography>
                                            <Typography align="right">{item.value ? item.value + " " + item.unit: item.value}</Typography>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}
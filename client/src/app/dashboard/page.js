"use client";

import React, { useEffect, useContext, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Dialog, Button } from '@mui/material';
import { UserContext } from '../providers';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import NewTankForm from './NewTankForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteConfirm from './DeleteConfirm';
import TankEdit from './TankEdit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Dashboard() {
    const router = useRouter()
    const { user, tanks, setTanks } = useContext(UserContext)
    const [openNew, setOpenNew] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [tankId, setTankId] = useState(null)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState("")

    useEffect(() => {
        if (!user) {
            router.push("/")
        }

        fetch("http://localhost:5555/tanks")
            .then((r) => r.json())
            .then(data => setTanks(data))
        console.log(user)
    }, [setTanks, user])

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
  
    // New
    const handleClickOpenNew = () => {
        setOpenNew(true);
    };

    const handleCloseNew = () => {
        setOpenNew(false);
    }

    const renderNew = (r) => {
        handleCloseNew()
        const newList = [...tanks, r]
        setTanks(newList)
        setSnackbarMessage("Tank successfully added")
        setOpenSnackbar(true)
    }

    // Edit
    const handleClickOpenEdit = (id) => {
        setOpenEdit(true);
        setTankId(id);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setTankId(null);
    }

    const renderEdit = (t) => {
        const newTanks = tanks.map(tank => {
            if (tank.id === t.id) {
                tank.name = t.name
            }
            return tank
        })
        setTanks(newTanks)
        handleCloseEdit()
        setSnackbarMessage("Tank successfully edited")
        setOpenSnackbar(true)
    }

    // Delete
    const handleCloseDelete = () => {
        setOpenDelete(false);
        setTankId(null);
    }

    const handleClickOpenDelete = (id) => {
        setOpenDelete(true);
        setTankId(id);
    };

    const renderDelete = (id) => {
        const newList = tanks.filter(tank => {
            if (tank.id !== id) {
                return tank
            }
        })
        setTanks(newList)
        setSnackbarMessage("Tank successfully deleted")
        setOpenSnackbar(true)
    }
    
    return (
        <main className="flex h-full w-full items-center flex-col mt-[80px]">
            <Typography variant='h2' className='mb-4'>Your Aquariums</Typography>
            <div className='flex flex-row flex-wrap justify-center'>
                {tanks && user ? tanks.filter((tank) => {
                    if (tank.user_id === user.id){
                        return tank
                    }
                }).map(tank => (
                    <Card 
                        key={tank.name} 
                        sx={{ width: 400, height: 425, margin: 1, display: "flex", flexDirection: "column"}} 
                        elevation={4} 
                    >
                        <div className='flex justify-between'>
                            <Button className='hover:text-white' onClick={() => handleClickOpenEdit(tank.id)}>
                                <EditIcon />
                            </Button>
                            <Button className='hover:text-red-500' onClick={() => handleClickOpenDelete(tank.id)}>
                                <DeleteIcon />
                            </Button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <CardMedia
                                component="img"
                                sx={{ height: 260, width: 360}}
                                src="/aqurium_stock_image.png"
                                alt="tank image"
                            />
                        </div>
                        <CardActionArea>
                            <Link key={tank.id} href={`/dashboard/${tank.id}`}>
                                <CardContent sx={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column"}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {tank.name}
                                    </Typography>
                                    <Typography gutterBottom component="div">
                                        Type: {tank.type}
                                    </Typography>
                                    <Typography size="small" color="primary" sx={{marginBottom: "4px"}}>
                                        View Parameters
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                    )) : null
                }
                <Card 
                    sx={{ width: 400, height: 425, margin: 1, display: "flex", justifyContent: "center" }} 
                    elevation={4} 
                    onClick={handleClickOpenNew}
                >
                    <CardActionArea className='flex flex-col items-center justify-center'>
                        <AddCircleOutlineIcon />
                        <Typography gutterBottom variant="h5" component="div" align='center' alignSelf="center" className='mt-1'>
                            Create new Tank
                        </Typography>
                    </CardActionArea>
                </Card>
                <Dialog onClose={handleCloseNew} open={openNew}>
                    <NewTankForm renderNew={renderNew} handleCloseNew={handleCloseNew}/>
                </Dialog>
                <Dialog onClose={handleCloseDelete} open={openDelete}>
                    <DeleteConfirm tankId={tankId} renderDelete={renderDelete} setOpenDelete={setOpenDelete} tanks={tanks}/>
                </Dialog>
                <Dialog onClose={handleCloseEdit} open={openEdit}>
                    <TankEdit setOpenEdit={setOpenEdit} tankId={tankId} renderEdit={renderEdit}/>
                </Dialog>
                <div>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleCloseSnackbar}
                        message={`${snackbarMessage}`}
                        action={action}
                    />
                </div>
            </div>
        </main>
    );
};
"use client";  // This is a client component
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/navigation'
import { UserContext } from "@/app/providers";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, Button, Dialog} from "@mui/material";
import Link from "next/link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NewParamForm from "./NewParamForm";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function ParamPage({ params }){
    const [parameter, setParameter] = useState(null)
    const { user, currentTank, renderGraphDelete } = useContext(UserContext)
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [openSnackDelete, setOpenSnackDelete] = useState(false)
    const [openSnackNew, setOpenSnackNew] = useState(false)

    useEffect(() => {
        if (!user) {
            router.push("/")
        }
        fetch(`http://localhost:5555/${params.param}`)
        .then((r) => r.json())
        .then(data => {
            const newData = data.filter(d => {
                if (d.tank_id === currentTank.id){
                    return d
                }
            })
            setParameter(newData)
        })

    }, [setParameter, user])

    function handleDeleteClick(id) {
        fetch(`http://localhost:5555/${params.param}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": id,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((r) => {
                    const newParams = parameter.filter(param => {
                        if (param.id !== id) {
                            return param
                        }
                    })
                    renderGraphDelete(params.param, id)
                    setParameter(newParams)
                    setOpenSnackDelete(true)
                })
            } else {
                r.json().then((err) => console.log(err))
            }
        })
    }

    function renderNewParam (p) {
        handleClose()
        const newlist = [p, ...parameter]
        setParameter(newlist)
        setOpenSnackNew(true)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'created_at', headerName: 'Booked', width: 170 },
        { field: 'value', headerName: 'Value', type: 'number', width: 120},
        { 
            field: 'actions', 
            headerName: 'Actions', 
            type: 'actions', 
            width: 130,
            align: 'right',
            headerAlign: 'right',
            getActions: ({id}) => {
                return [
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => handleDeleteClick(id)}
                        color="inherit"
                    />,
                ]
            }
        },
    ];

    const handleClickOpenDelete = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSnackDelete = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackDelete(false);
    };

    const handleCloseSnackNew = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackNew(false);
    };

    const actionDelete = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackDelete}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const actionNew = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackNew}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <main className="flex flex-col justify-center items-center mt-[80px]">
            <div className="flex flex-row items-center justify-between w-full md:w-[50%] px-1 flex-wrap mb-3">
                <div className="flex flex-row gap-2">
                    <Button variant="outlined" className="flex w-[90px] h-full items-center">
                        <Link href={currentTank ? `/dashboard/${currentTank.id}` : `/dashboard`} className="flex flex-row">
                            <ArrowBackIcon />
                            <Typography className="mr-1">Back</Typography>
                        </Link>
                    </Button>
                    <Button variant="outlined" className="hover:border-green-400 hover:text-green-400 gap-1" onClick={handleClickOpenDelete}>
                        <AddCircleOutlineIcon />
                        <Typography className="">Add</Typography>
                    </Button>
                </div>
                <Typography  variant="h4" >{params.param.toUpperCase()}</Typography>
            </div>
            <div className="w-full md:w-[75%] lg:w-[50%] px-1 pb-5">
                {parameter ? (
                    <DataGrid
                        rows={parameter}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                                },
                            sorting: {
                                sortModel: [{ field: 'id', sort: 'desc' }],
                            },
                        }}
                        pageSizeOptions={[10, 25, 50]}
                        checkboxSelection
                    />) : null
                }
            </div>
            <Dialog onClose={handleClose} open={open}>
                <NewParamForm handleClose={handleClose} param={params.param} renderNewParam={renderNewParam} parameter={parameter}/>
            </Dialog>
            <Snackbar
                open={openSnackDelete}
                autoHideDuration={6000}
                onClose={handleCloseSnackDelete}
                message="Successfully deleted entry"
                action={actionDelete}
            />
            <Snackbar
                open={openSnackNew}
                autoHideDuration={6000}
                onClose={handleCloseSnackNew}
                message="Successfully added new entry"
                action={actionNew}
            />
        </main>
    )
}
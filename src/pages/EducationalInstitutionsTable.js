import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';
import { data } from "../Table/dat"
import ExportButton from '../Exportbutton/Exportbutton';
import jsPDF from 'jspdf';
import "jspdf-autotable"
// import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import { educationalinstitutionsData } from '../MockData/educationalInstitionsData';

import { Button, Stack, TextField, Typography } from '@mui/material';



export default function EducationalInstitutionalTable() {
    const [search, setSearch] = useState("")
    // console.log(search)
    const searchData = educationalinstitutionsData.filter((item) => {
        return search.toLowerCase() === "" ? item : item.first_name.toLocaleLowerCase().includes(search);
    })
    // console.log(searchData)

    //  const dataArray = data.map(item => [item.id, item.first_name, item.last_name, item.email, item.gender]);
    //     console.log(dataArray);

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = searchData.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(searchData.length / recordsPerPage);
    // const numbers = [...Array(nPage+1).keys()].slice(1)
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    const [active, setactive] = useState("3")

    const styles = {
        buttonStyle: {
            // width: '238.74612426757812px',
            // height: '59px',
            // top: '270px',
            // left: '600.064453125px',
            border: '1px solid rgba(161, 172, 184, 1)',
            background: 'rgba(255, 255, 255, 1)',
            padding:"10px",
            borderRadius:'10px',
            color: 'rgba(161, 172, 184, 1)',
            transition: 'background 0.3s, box-shadow 0.3s',
            width:"100%",

            '&:hover': {
                background: 'rgba(200, 86, 160, 1)',
                color: "white",
                boxShadow: '1.4966504573822021px 2.9933009147644043px 8.979903221130371px 0px rgba(100, 52, 248, 0.15)',
            },
        },
        buttonStyle_active: {
            background: 'rgba(200, 86, 160, 1)',
            color: "white",
            padding:"10px",
            width:"100%",
            borderRadius:'10px',
            boxShadow: '1.4966504573822021px 2.9933009147644043px 8.979903221130371px 0px rgba(100, 52, 248, 0.15)',
            border: '1px solid rgba(161, 172, 184, 1)',
            '&:hover': {
                background: 'rgba(200, 86, 160, 1)',
                color: "white",
            },
        }
    }

    return (
        <>
            {/* <Paper sx={{width:"100%", height:"300px" ,backgroundColor:"purple"}}> */}

            {/* </Paper> */}
            <TableContainer component={Paper} sx={{
                margin: "20px auto",
                padding: "40px",
                boxSizing: "border-box",
                width: "90%",
                // transform:"translateY(-200px)",
                borderRadius: 5,
                boxShadow: "1.4966504573822021px 2.9933009147644043px 8.979903221130371px 0px rgba(100, 52, 248, 0.15)",

            }}>
                <Stack direction={'row'} sx={{ justifyContent: "space-between" }}>
                    <Stack direction={'column'}>
                        <Typography
                            sx={{
                                fontFamily: 'Almarai', // Font family
                                fontSize: "28px", // Font size in pixels
                                fontWeight: 700, // Font weight (bold)
                                lineHeight: '50px', // Line height
                                letterSpacing: 0, // Letter spacing
                                textAlign: 'left', // Text alignment
                                color: 'rgba(83, 47, 130, 1)', // Background color

                            }}
                        >
                            Finential Tracking Data
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Almarai', // Font family
                                fontSize: '24px', // Font size in pixels
                                fontWeight: 400, // Font weight (bold)
                                lineHeight: '23px', // Line height
                                letterSpacing: 0, // Letter spacing
                                textAlign: 'left', // Text alignment
                                color: ' rgba(161, 172, 184, 1)',
                                padding: "20px 0px"



                            }}
                        >
                            Tracking Data
                        </Typography>
                    </Stack>
                    {/* <Button variant="outlined"
                sx={{
                    height:"56px",
                    width:"170px",
                    border:"2px solid rgba(83, 47, 130, 1)",
                    color:"rgba(83, 47, 130, 1)",
                    borderRadius:"20px",
                    '&:hover': {
                        color: 'white',
                        backgroundColor: 'rgba(83, 47, 130, 1)',
                      },


                }}
                > */}
                    <ExportButton  active={active}/>
                    {/* </Button> */}
                </Stack>
                <Stack sx={{ display: "grid", gridTemplateColumns: "auto auto auto auto", margin: "10px 0", columnGap: "15px" }}>
                <Link to="/"><Button onClick={() => setactive("1")} 
                sx={active === "1" ? styles.buttonStyle_active : styles.buttonStyle}>User</Button></Link>
                <Link to="/instructors"><Button onClick={() => setactive("2")} 
                sx={active === "2" ? styles.buttonStyle_active : styles.buttonStyle}>Instructors</Button></Link>
                <Link to="/educationalInstitutions"><Button onClick={() => setactive("3")} 
                sx={active === "3" ? styles.buttonStyle_active : styles.buttonStyle}>Educational Institutions</Button></Link>
                <Link to="/admins"><Button onClick={() => setactive("4")} 
                sx={active === "4" ? styles.buttonStyle_active : styles.buttonStyle}>admins</Button></Link>


                </Stack>
                <Stack direction={"row"}>
                    <TextField variant='standard' InputProps={{ disableUnderline: true }}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            background: "rgba(244, 246, 249, 1)",
                            padding: "15px",
                            boxSizing: "border-box",
                            borderRadius: "8px",
                            height: "56px",
                            width: "50%",
                            margin: "10px 0"

                        }}>

                    </TextField>

                </Stack>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Institution Name </TableCell>
                            <TableCell align="center"> Email</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.first_name.toLocaleLowerCase().includes(search);
                        }).map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.educationalinstitutions_name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone_number}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">icons </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Pagination
                    count={nPage}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                        display: 'flex',
                        '& .MuiPaginationItem-root': {
                            fontSize: '18px',
                            // border:'1px solid purple',
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            transition: 'background-color 0.3s, color 0.3s', // Add transition
                            '&:hover': {
                                backgroundColor: 'rgba(83, 47, 130, 1)',
                                color: 'white',
                            },
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'rgba(83, 47, 130, 1)',
                            color: 'white',
                            // '&:hover': {
                            //     backgroundColor: 'rgba(83, 47, 130, 1)',
                            //     color: 'white',
                            // },
                        },

                        width: "100%",
                        justifyContent: 'flex-end',
                        marginTop: '20px'
                    }}
                />
            </TableContainer>
        </>
    );
}

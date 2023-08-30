import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LineChart from '../chart/Chart';
import { ReactComponent as ReactLogo } from '../svg/Icon.svg';
import { Grid, Paper } from '@mui/material';


const ShadowBox = () => {
    return (
        <>
        <Paper
                sx={{
                    width: "90%",
                    margin:"20px auto",
                    boxSizing:"border-box",
                    height: "fit-content",
                    // height: 200,
                    // boxShadow: '2px 4px 8px rgba(100, 52, 248, 0.15)',
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 5,
                    p: 2, // Padding
                    boxShadow: "1.4966504573822021px 2.9933009147644043px 8.979903221130371px 0px rgba(100, 52, 248, 0.15)",
                    backgroundColor: 'white',
                }}
            >

                <Typography
                    sx={{
                        fontFamily: 'Almarai', // Font family
                        fontSize: 18, // Font size in pixels
                        fontWeight: 700, // Font weight (bold)
                        lineHeight: '50px', // Line height
                        letterSpacing: 0, // Letter spacing
                        textAlign: 'left', // Text alignment
                        color: 'rgba(83, 47, 130, 1)', // Background color

                    }}
                >
                    Growth Rate
                </Typography>
                <Grid container
                    sx={{
                        // display: "flex",
                        // flexDirection: "row",
                    }}
                >
                    <Grid item xs={8}>
                        <LineChart />
                    </Grid>
                    <Grid item xs={4}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "10px",
                            padding: "10px",
                            paddingLeft:"50px",
                            borderLeft: "1px solid rgba(232, 232, 232, 1)",
                        }}>
                        <Box>
                            <ReactLogo />
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Almarai',
                                fontSize: "12px",
                                fontWeight: 400,
                                color: "rgba(100, 116, 139, 1)",
                                textAlign: 'left',
                                padding:"10px 0px "
                            }}>
                                Number of Visitors
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: "rgba(77, 44, 119, 1)",
                                fontFamily: 'Almarai',
                                fontWeight: 700,
                                fontSize: "20px",

                            }}>
                                576
                            </Typography>
                        </Box>
                        <Box>
                            <ReactLogo />
                        </Box>
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Almarai',
                                fontSize: "12px",
                                fontWeight: 400,
                                color: "rgba(100, 116, 139, 1)",
                                textAlign: 'left',
                                padding:"10px 0px "

                            }}>
                                Number of Visitors
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: "rgba(77, 44, 119, 1)",
                                fontFamily: 'Almarai',
                                fontWeight: 700,
                                fontSize: "20px",

                            }}>
                                576
                            </Typography>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default ShadowBox;

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ReactComponent as ReactLogo } from '../svg/Icon.svg';
import { Paper, Stack, Typography } from '@mui/material';


export default function BasicTimeline() {

  const timelinedata = [
    {
      "courseName": "Introduction to Programming",
      "coursePrice": "$49.99",
      "courseDate": "2023-09-15",
      "courseLogo": "https://example.com/intro-to-programming.png"
    },
    {
      "courseName": "Digital Marketing Fundamentals",
      "coursePrice": "$29.99",
      "courseDate": "2023-10-02",
      "courseLogo": "https://example.com/digital-marketing.png"
    },
    {
      "courseName": "Data Science for Beginners",
      "coursePrice": "$59.99",
      "courseDate": "2023-09-28",
      "courseLogo": "https://example.com/data-science.png"
    },
    {
      "courseName": "Graphic Design Masterclass",
      "coursePrice": "$39.99",
      "courseDate": "2023-10-10",
      "courseLogo": "https://example.com/graphic-design.png"
    }
  ]

  return (
    <Paper
      sx={{
        // width: "90%",
        margin: "20px auto",
        boxSizing: "border-box",
        height: "fit-content",
        // height: 200,
        // boxShadow: '2px 4px 8px rgba(100, 52, 248, 0.15)',
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        // p: 2, // Padding
        boxShadow: "1.4966504573822021px 2.9933009147644043px 8.979903221130371px 0px rgba(100, 52, 248, 0.15)",
        backgroundColor: 'white',
      }}
    >

      <Timeline>
        {timelinedata.map((item) => (

          <TimelineItem sx={{'&::before': { content: 'none' }}}>
            <TimelineSeparator>
              {/* <TimelineDot /> */}
              <div>
                <ReactLogo />
              </div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Stack direction="row" sx={{justifyContent:"space-between",gap:"50px"}} >
                <Stack direction="column">
                  <Typography sx={{
                    fontFamily: 'Almarai', // Font family
                    fontSize:"14px",
                    fontWeight:700,
                    lineHeight:"50px",
                  }}>
                    {item.courseName}
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Almarai', // Font family
                    fontSize:"12px",
                    fontWeight:700,
                    lineHeight:"18px",
                    color:"rgba(160, 174, 192, 1)",
                  }}>
                    {item.courseDate}
                  </Typography>
                </Stack>
                <Typography sx={{
                    fontFamily: 'Almarai', // Font family
                    fontSize:"14px",
                    fontWeight:700,
                    lineHeight:"50px",
                  }}>
                  {item.coursePrice}
                </Typography>
              </Stack>
            </TimelineContent>
          </TimelineItem>

        ))}
      </Timeline>
    </Paper>
  );
}

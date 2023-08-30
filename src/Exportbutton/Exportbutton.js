import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ExcelJs from "exceljs";
import jsPDF from 'jspdf';
// import {data} from "../Table/dat"
import "jspdf-autotable"
import { data } from "../Table/dat"
import { studentData } from '../MockData/Student';
import { instructorData } from '../MockData/instructordata';
import { educationalinstitutionsData } from '../MockData/educationalInstitionsData';
import { adminsData } from '../MockData/admins';

export default function ExportButton(active) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // console.log(data)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    // console.log(data)
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // console.log(active.active)
  let newdata,tableHead,dataArray;
// console.log(active.active)
if (active.active === "1") {
    newdata = studentData;
    dataArray = newdata.map(item => [item.student_name, item.email, item.phone_number, item.gender,]);
    tableHead= [['Student Name', 'Email', 'Phone', "Gender",]]
} else if (active.active === "2") {
    newdata = instructorData;
    dataArray = newdata.map(item => [item.instructor_name, item.email, item.phone_number, item.gender,]);
    tableHead= [['Instructor Name', 'Email', 'Phone', "Gender",]]

} else if (active.active === "3") {
    newdata = educationalinstitutionsData;
    dataArray = newdata.map(item => [item.educationalinstitutions_name, item.email, item.phone_number, item.gender,]);
    tableHead= [['Institution Name', 'Email', 'Phone', "Gender",]]

} else if (active.active === "4") {
  newdata = adminsData;
  dataArray = newdata.map(item => [item.admins_name, item.email, item.phone_number, item.gender,]);
  tableHead= [['Admin Name', 'Email', 'Phone', "Gender",]]

} else {
    // Handle other cases or provide a default value for newdata
}

  // const dataArray = newdata.map(item => [item.id, item.first_name, item.last_name, item.email, item.gender]);
  // console.log(dataArray);

  const downloadPdf = async () => {
    // const doc = new jsPDF({orientation:"landscape"})
    const doc = new jsPDF()
    await doc.autoTable({
      head: tableHead,
      body: dataArray,

    })
    doc.save('table.pdf')
    setOpen(false);

  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // ||||||||||||||||||||||||||||||||||   Convert to Excel ||||||||||||||||||||||||||   

  const exportToExcel = (data) => {
    let sheetName = "Table.xlsx";
    let headerName = "RequestsList";


    let workbook = new ExcelJs.Workbook();
    let sheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: false }]
    });



    let columnArr = [];
    for (let i in data[0]) {
      let tempObj = { name: "" };
      tempObj.name = i;
      columnArr.push(tempObj);
    }


    sheet.addTable({
      name: `Header`,
      ref: "A1",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "",
        showRowStripes: false,
        showFirstColumn: true,
        width: 200
      },
      columns: [{ name: "Table Name" }, { name: "John Doe" }],
      rows: [[``], [``]]
    });


    sheet.addTable({
      name: headerName,
      ref: "A5",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "TableStyleMedium2",
        showRowStripes: false,
        width: 200
      },
      columns: columnArr ? columnArr : [{ name: "" }],
      rows: data.map((e) => {
        let arr = [];
        for (let i in e) {
          arr.push(e[i]);
        }
        return arr;
      })
    });

    sheet.getCell("A1").font = { size: 20, bold: true };


    sheet.columns = sheet.columns.map((e) => {
      const expr = e.values[5];
      switch (expr) {
        case "Name":
          return { width: 50 };
        case "Gender":
          return { width: 40 };
        case "Height":
          return { width: 30 };
        default:
          return { width: 20 };
      }
    });

    const table = sheet.getTable(headerName);
    for (let i = 0; i < table.table.columns.length; i++) {

      sheet.getCell(`${String.fromCharCode(65 + i)}5`).font = { size: 12 };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "c5d9f1" }
      };


      for (let j = 0; j < table.table.rows.length; j++) {
        let rowCell = sheet.getCell(`${String.fromCharCode(65 + i)}${j + 6}`);
        rowCell.alignment = { wrapText: true };
        rowCell.border = {
          bottom: {
            style: "thin",
            color: { argb: "a6a6a6" }
          }
        };
      }
    }
    table.commit();

    const writeFile = (fileName, content) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;"
      });
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
    };


    workbook.xlsx.writeBuffer().then((buffer) => {
      writeFile(sheetName, buffer);
    });
    setOpen(false);

  };


  return (
    <Stack direction="row" spacing={2} sx={{zIndex:3}}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          variant="outlined"
          sx={{
            height: "56px",
            width: "170px",
            border: "2px solid rgba(83, 47, 130, 1)",
            color: "rgba(83, 47, 130, 1)",
            borderRadius: "20px",
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(83, 47, 130, 1)',
            },


          }}
        >
          Export
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ width: "170px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={downloadPdf}>PDF</MenuItem>
                    <MenuItem onClick={() => {
                      exportToExcel(data);
                    }}>CSV</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

import React from 'react';
import LineChart from './chart/Chart'; // Import as default
import ShadowBox from './box/Box';
import { Box, Stack } from '@mui/material';
import {
  Routes,
  Route,
} from "react-router-dom";
import Table from './Table/Table';
import Practice from './practice/Timeline';
import UserAccount from './practice/UserAccount';
import UserTable from './pages/UserTable';
import InstructorTable from './pages/InstructorTable';
import EducationalInstitutionalTable from './pages/EducationalInstitutionsTable';
import AdminTable from './pages/AdminsTable';
import BgVector from './backgroundVector/BgVector';



function App() {

  return (
    
    <Box sx={{
      display:"flex",
      flexDirection:"row",
      
    }}>
      <Box sx={{
        width:"260px !important",
        height:"100vh",
        backgroundColor:"rgba(250, 247, 255, 1)",
        
      }}>
        <p style={{width:"260px" , color:"rgba(250, 247, 255, 1)"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam sit distinctio laborum quibusdam velit maxime! Exercitationem dolorum quam esse id non architecto sed aliquid similique asperiores accusantium, sit cum? Eos ab corrupti magni, cum necessitatibus minus esse officia. Error nulla neque itaque porro laudantium cumque ducimus. Animi, cupiditate nemo! Adipisci dolorum, facilis voluptatem voluptas ipsum tenetur inventore ullam saepe reprehenderit soluta eius? Quibusdam debitis enim eaque quam obcaecati officiis optio, commodi dolorem possimus quis temporibus, impedit sed, illo veniam quaerat iusto. Consequuntur ipsa nemo asperiores quidem reprehenderit praesentium? Rem vitae obcaecati repellendus velit laudantium temporibus ipsa quis nostrum! Quibusdam.</p>
      </Box>
      <Stack width={"100%"}>
      {/* <ShadowBox /> */}
      {/* <Table/> */}
      {/* <Practice/> */}
      {/* <UserAccount/> */}
      {/* <UserTable/> */}
     <Box sx={{height:"80px"}}>

     </Box>
    {/* <BgVector/> */}
    {/* <Box sx={{transform:"translateY(-150px)"}}> */}
      <ShadowBox />

      <Routes>
          <Route path="/" element={<UserTable/>} />
          <Route path="/instructors" element={<InstructorTable/>} />
          <Route path="/educationalInstitutions" element={<EducationalInstitutionalTable/>} />
          <Route path="/admins" element={<AdminTable/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} /> */}

        </Routes>
        {/* </Box> */}
      </Stack> 

    </Box>
    
  );
}

export default App;

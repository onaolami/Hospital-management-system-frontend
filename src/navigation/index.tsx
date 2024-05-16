import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/loginpage";
import DashBoardPage from "../page/dashboardpage";

const RootNavigation =()=>{
    return(
    <BrowserRouter>
      <Routes>
        <Route path="loginpage" element = {<LoginPage/>} />
        <Route path="dashboardpage" element = {<DashBoardPage/>} />
      </Routes>
    </BrowserRouter>
    );
};

export default RootNavigation;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../page/loginpage";

const RootNavigation =()=>{
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    );
};

export default RootNavigation;

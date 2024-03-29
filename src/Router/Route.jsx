import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";
// import Card from "../pages/Card/Card";

const myCreatedRoute = createBrowserRouter([
    {
        path :"/",
        element : <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children :[
            {
                path : "/",
                element :<Home></Home>,
                loader : () =>fetch('/donation.json')
                
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/src/components/Cards/:id",
                element : <Card></Card>,
                loader: () => fetch('/donation.json')
            }
           
        ]
        
    }
]) 
   

export default myCreatedRoute;
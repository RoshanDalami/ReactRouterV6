import { Link } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation";

const Error = ()=>{
    return<main>
    <MainNavigation/>
        <h1>Page not found <Link to={'/'}>Go To Home</Link></h1>
    </main>
}

export default Error ;
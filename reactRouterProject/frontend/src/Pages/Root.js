import { Outlet } from "react-router-dom";
// import { Outlet,useNavigation } from "react-router-dom";
import MainNavigation from '../components/MainNavigation';

const RootLayout = ()=>{
    // const navigation = useNavigation();
    return <>
    {/* {navigation.state === 'loading' && <p>loading...</p>} */}
        <MainNavigation/>
        <Outlet/>
    </>
}

export default RootLayout;

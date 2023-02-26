import React from "react";
import {Routes,Route} from 'react-router-dom'
import config from "../pages/config";


const RouteProvider = () => {
    return(
        <Routes>
            {
                config.map(({path,element,Layout},idx)=> (
                    <Route element={<Layout>{element}</Layout>} path={path}  key={idx} />
                ))
            }
        </Routes>
    )
}
export default RouteProvider
import React from "react";
import {Services as ServicesExport} from "./Services.controller"

export  const ServicesController = (props:any) => {
    return <ServicesExport {...props}/>
}
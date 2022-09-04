import React from "react";

import { FooterController } from "../../controllers/Footer";
import { Events as EventsExport }  from "../../controllers/Events/Events.controller";
import { HeaderController } from "../../controllers/Header";

export const Events = () => {
    return(
        <>
        <HeaderController/>
        <EventsExport />
        <FooterController />
        </>
    )
}
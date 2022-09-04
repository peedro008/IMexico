import React from "react";

import { FooterController } from "../../controllers/Footer";
import { EventPhotos as EventPhotosExport }  from "../../controllers/EventPhotos/EventPhotos.controller";
import { HeaderController } from "../../controllers/Header";

export const EventPhotos = () => {
    return(
        <>
        <HeaderController/>
        <EventPhotosExport />
        <FooterController />
        </>
    )
}
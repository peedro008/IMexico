import React from "react";

import { FooterController } from "../../controllers/Footer";
import { Conduct as ConductExport } from "../../controllers/Conduct/Conduct.controller";
import { HeaderController } from "../../controllers/Header";

export const Conduct = () => {
    return(
        <>
        <HeaderController/>
        <ConductExport />
        <FooterController />
        </>
    )
}
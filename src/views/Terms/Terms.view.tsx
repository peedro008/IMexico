import React from "react";

import { FooterController } from "../../controllers/Footer";
import { HeaderController } from "../../controllers/Header";
import { Terms as TermsExport } from "../../controllers/Terms/Terms.controller";

export const Terms = () => {
    return(
        <>
        <HeaderController/>
        <TermsExport />
        <FooterController/>
        </>
    )
}
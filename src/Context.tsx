import React, { createContext, useState, useEffect } from 'react'

import config from './store/actions/config'

/* import { Landing2, Landing } from "./controllers/Landing";
import { Register } from "./controllers/Register";
import { Terms } from "./controllers/Terms";
import { Stream } from "./controllers/Stream";
import { Login } from "./controllers/Login";
import { Poll } from "./controllers/Poll";
import { Building } from "./controllers/Building"; */

export interface ComponentListState {
	/* components: JSX.Element[] */
}

export const initialState: ComponentListState = {
	/* components: [
		{
		 <Building/>
		},
	], */
}

const Context = createContext({})

const Provider = ({ children }: any) => {
	const [componentList, setComponentList] = useState(initialState)

	/*    let appUrl = config.company;
  switch (appUrl) {
    case "sanofi_julio":
      return ;

    case "sanofi_octubre":
      return  */
	return <Context.Provider value={componentList}>{children}</Context.Provider>
}

export default {
	Provider,
	Consumer: Context.Consumer,
}

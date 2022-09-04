import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import SPINERMOBILE from "./images/SPINERMOBILE.gif"
import VIDEOINICIAL1 from "./images/VIDEOINICIAL1.gif"
import reportWebVitals from './reportWebVitals'
import { store } from './store/index';
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

/* import { Provider } from 'react-redux';
import { store } from './store'; */
//  const App = React.lazy(() => import('./App')
//  						.then(({ App})=>({default: App})));

				

ReactDOM.render(
	// <React.Suspense  fallback={<img style={{height:"700px", width:"auto", display:"flex", alignSelf:"center"}} src={VIDEOINICIAL1}/>}>
	<Provider store={store}>
		<React.StrictMode>
			<ColorModeScript />
			<App />
		</React.StrictMode>
	</Provider>,
	// </React.Suspense>,

	document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

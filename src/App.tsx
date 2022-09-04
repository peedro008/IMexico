import * as React from 'react'
import SPINERMOBILE from "./images/SPINERMOBILE.gif"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { HomeView } from './views/Home'
import { HomeView as HomeBlogView  } from './views/HomeBlog'
import { CategoryView } from './views/Category'
import { PostView } from './views/Post'
import { DetailsView } from './views/Details'
import { SearchView } from './views/Search'
import { DevelopmentView } from './views/Development'
import { ResaleView } from './views/Resale'
import { ZoneSearchView } from './views/Search'
import { ServicesView } from './views/Services'
import { AdminAgentsView } from './views/Agents'
import { AgentScheduleView } from './views/Agents'
import { AppointmentView } from './views/Appointment'
import { CompareView } from './views/Compare'
import { RegisterView } from './views/Register'
import { LoginView } from './views/Login'
import { ResetPassView } from './views/Login'
import { NewPassView } from './views/Login'
import { UsView } from './views/Us'
import { Terms } from './views/Terms/Terms.view'
import { Conduct } from './views/Conduct/Conduct.view'
import { Events } from './views/Events/Events.view'
import { EventPhotos } from './views/EventPhotos/EventPhotos.view'
import { TeamLeader } from './views/TeamLeader/TeamLeader.view'
import { ReserveView } from './views/Reserve'
import { DevelopmentDetailsView } from './views/DevelopmentDetails'


const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#F2F2F2'
			}
		}
	},
	fonts: {
		body: "Raleway"
	},
	components: {
		Tooltip: {
			variants: {
				white: {
					'--popper-arrow-bg': 'colors.white',
					bg: 'white',
					color: 'black',
				},
			},
		},
	},
})

export const App = () => {


	return (
		<>
		
			<ChakraProvider theme={theme}>
				<Router>
					<Switch>
						<Route component={TeamLeader} path='/teamleader' />
						<Route component={ReserveView} path='/reserve' />
						<Route component={Events} path='/events' />
						<Route component={EventPhotos} path='/photos' />
						<Route component={CategoryView} path='/blog/category/:categoryId' />
						<Route component={Terms} path='/terms' />
						<Route component={Conduct} path='/conduct' />
						<Route component={PostView} path='/blog/post/:postId' />
						<Route component={HomeBlogView} path='/blog' />
						<Route component={UsView} path='/us' />
						<Route component={NewPassView} path='/newpass/:id' />
						<Route component={ResetPassView} path='/resetpass' />
						<Route component={LoginView} path='/login' />
						<Route component={RegisterView} path='/register' />
						<Route component={CompareView} path='/compare' />
						<Route component={AppointmentView} path='/appointment' />
						<Route component={AgentScheduleView} path='/agents/schedule' />
						<Route component={AdminAgentsView} path='/agents' />
						<Route component={ServicesView} path='/services' />
						<Route component={ZoneSearchView} path='/zonesearch' />
						<Route component={SearchView} path='/search' />
						<Route component={ResaleView} path='/resale' />
						<Route component={DevelopmentView} path='/developments' />
						<Route component={DetailsView} path='/details/:id' />
						<Route component={HomeView} exact path='/' />
						<Route component={DevelopmentDetailsView} path='/devdetails/:id' />
					</Switch>
				</Router>
			</ChakraProvider>
		</>
	)
	
}


let asd = () => {

	let host: string = window.location.hostname

	let app: string = ''

	if (!!process.env.REACT_APP_COMPANY) app = process.env.REACT_APP_COMPANY
	if (!(host === 'localhost' || host === '127.0.0.1')) {

		switch (host) {
			case 'congresodepediatria2021.com.ar':
				app = 'sanofi_octubre'
				break;

			case 'encuentrosdepediatria.com.ar':
				app = 'sanofi_expertos'
				break;
		
			default:
				break;
		}

	}
	
	return {
		securityIP: '172.22.0.7',
		localIP: '127.0.0.1:8000',
		url: process.env.REACT_APP_BASE_URL,
		urlSocket: process.env.REACT_APP_BASE_URL_SOCKET,
		company: app
	};
	
}

export default asd();
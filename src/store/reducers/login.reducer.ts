import entities from "../actions/entities";
import State from "./interface.reducer";

const ENTITY = entities.LOGIN;

export default function Reducer(
	state: State = {
		status: 0,
		message: "",
		data: {},
		fetching: false,
		fetched: false,
		error: null,
	},
	action: { type: string; payload: any }
) {
	switch (action.type) {
		case "GET_" + ENTITY.ENTITY_MAYUS + "_PENDING": {
			return {
				...state,
				fetching: true,
			};
		}

		case "GET_" + ENTITY.ENTITY_MAYUS + "_REJECTED": {
			let data: any = action?.payload?.response?.data || {};
			let status: any = action?.payload?.response?.status || 500;
			let message: string = action?.payload?.response?.data?.message || "";

			if (status === 500) {
				if (message === "") {
					message =
						"Servidor deshabilitado. Reporte el problema a su proveedor de servicio.";
				}
			}

			return {
				...state,
				fetching: false,
				status: status,
				data: data,
				error: action.payload,
				message: message,
			};
		}

		case "GET_" + ENTITY.ENTITY_MAYUS + "_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: action.payload.data.result,
			};
		}

		case "GET_" + ENTITY.ENTITY_MAYUS + "_BY_ID_PENDING": {
			return {
				...state,
				fetching: true,
			};
		}

		case "GET_" + ENTITY.ENTITY_MAYUS + "_BY_ID_REJECTED": {
			let data: any = action?.payload?.response?.data || {};
			let status: any = action?.payload?.response?.status || 500;
			let message: string = action?.payload?.response?.data?.message || "";

			if (status === 500) {
				if (message === "") {
					message =
						"Servidor deshabilitado. Reporte el problema a su proveedor de servicio.";
				}
			}

			return {
				...state,
				fetching: false,
				status: status,
				data: data,
				error: action.payload,
				message: message,
			};
		}

		case "GET_" + ENTITY.ENTITY_MAYUS + "_BY_ID_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: action.payload.data.result,
			};
		}

		case "REINTENTAR_" + ENTITY.ENTITY_MAYUS: {
			return {
				...state,
				fetching: false,
				fetched: false,
				status: 0,
				message: "",
				data: {},
			};
		}

		case "E": {
			throw new Error(
				"Este error se manejo asi: " + ENTITY.ENTITY + "Reducer.js"
			);
		}
		case "SET_" + ENTITY.ENTITY_MAYUS + "_PENDING": {
			return {
				...state,
				fetching: true,
			};
		}

		case "SET_" + ENTITY.ENTITY_MAYUS + "_REJECTED": {
			let data: any = action?.payload?.response?.data || {};
			let status: any = action?.payload?.response?.status || 500;
			let message: string = action?.payload?.response?.data?.message || "";

			if (status === 500) {
				if (message === "") {
					message =
						"Servidor deshabilitado. Reporte el problema a su proveedor de servicio.";
				}
			}
			

			return {
				...state,
				fetching: false,
				status: status,
				data: data,
				error: action?.payload?.response?.data?.error,
				message: message,
			};
		}
		case "SET_" + ENTITY.ENTITY_MAYUS + "_FULFILLED": {
			const token = action.payload.data.result.token.token
			const userid = action.payload.data.result.user._id
			const session = action.payload.data.result.session._id

			localStorage.setItem('session_token', token)
			localStorage.setItem('session_id', session)
			localStorage.setItem('user', JSON.stringify(action.payload.data.result.user))
			localStorage.setItem('permissions', userid)

			return {
				...state,
				fetching: false,
				fetched: true,
				error: null,
				status: action.payload.data.status,
				message: action.payload.data.message,
				data: action.payload.data.result,
			};
		}

		default: {
			break;
		}
	}

	return state;
}

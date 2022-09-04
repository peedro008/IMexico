import entities from "../actions/entities";
import State from "./interface.reducer";

const ENTITY = entities.CONFIGURATION;

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

		default: {
			break;
		}
	}

	return state;
}

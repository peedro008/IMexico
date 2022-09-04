import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.PROPERTY;

export function getAll() {
	let project = {};
	let match = {};
	let sort = {};
	let group = {};
	let limit = 0;
	let skip = 0;

	let payload: any = axios.get(
		config.url +
		`/${ENTITY.ENTITY}/withauth` +
		`?project=${JSON.stringify(project)}&match=${JSON.stringify(
			match
		)}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
			group
		)}&limit=${limit}&skip=${skip}`
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS,
		payload: payload,
	};
}

export function getManyByQuery(
	countryId: number,
	locationId: number,
	propertyTypeIds: number[],
	priceFrom?: number,
	operationTypes?: number[],
	currency?: string,
	bathroomAmount?: number,
	suiteAmount?: number,
	tagsList?: number[]
) {

	console.log({ tagsList })
	let project = {};
	let match = {
		data: {
			current_localization_id: locationId ? locationId : 14/* countryId */,
			current_localization_type: locationId ? "division" :  "country",
			"price_from": priceFrom ? priceFrom : 0,
			price_to: 1500000,
			property_types: propertyTypeIds,
			operation_types: operationTypes ? operationTypes : [1, 2, 3],
			currency: currency ? currency : "USD",
			filters: bathroomAmount ? [["bathroom_amount", ">", `${bathroomAmount}`], suiteAmount ? ["suite_amount", ">", `${suiteAmount}`] : []] : [],
			with_tags: tagsList ? tagsList : [5],
		}
	};


	let sort = {};
	let group = {};
	let limit = 0;
	let skip = 0;

	let payload: any = axios.get(
		config.url +
		`/${ENTITY.ENTITY}/withauth/` +
		`${config.company}?project=${JSON.stringify(project)}` +
		`&match=${JSON.stringify(match)}&sort={}&group={}&limit=0&skip=0`
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL,
		payload: payload,
	};
}

export function getMany(limit: number, skip: number) {
	let project = {};
	let match = {};
	let sort = {};
	let group = {};

	let payload: any = axios.get(
		config.url +
		"/" +
		ENTITY.ENTITY +
		"/withauth/" +
		config.company +
		`?project=${JSON.stringify(project)}&match=${JSON.stringify(
			match
		)}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
			group
		)}&limit=${limit}&skip=${skip}`
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL,
		payload: payload,
	};
}

export function compareManyById(body: { properties: number[] }) {
	let project = {};
	let match = {};
	let sort = {};
	let group = {};
	let limit = 0;
	let skip = 0;

	let payload: any = axios.post(
		config.url + "/" + ENTITY.ENTITY + "/compare/" + config.company,
		body
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL,
		payload: payload,
	};
}

export function getById(id: number) {
	let payload: any = axios.get(
		config.url +
		"/" +
		ENTITY.ENTITY +
		"/" +
		id +
		"?project={}&match={}&sort={}&group={}&limit=0&skip=0"
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS + "_BY_ID",
		payload: payload,
	};
}

export function reintentar() {
	return {
		type: "REINTENTAR_" + ENTITY.ENTITY_MAYUS,
		payload: "",
	};
}
export function updateWithAuth(id: string, object: object) {
	let payload: any = axios.put(
		config.url + "/" + ENTITY.ENTITY + "/withauth/" + config.company + "/" + id,
		object
	);

	return {
		type: "UPDATE_" + ENTITY.ENTITY_MAYUS + "_WITH_AUHT",
		payload: payload,
	};
}

export function deleteWithAuth(id: string) {
	let payload: any = axios.delete(
		config.url + "/" + ENTITY.ENTITY + "/withauth/" + config.company + "/" + id
	);

	return {
		type: "DELETE_" + ENTITY.ENTITY_MAYUS + "_WITH_AUHT",
		payload: payload,
	};
}

export function setWithAuth(object: object) {
	let payload: any = axios.post(
		config.url + "/" + ENTITY.ENTITY + "/withauth/" + config.company,
		object
	);

	return {
		type: "SET_" + ENTITY.ENTITY_MAYUS + "_WITH_AUHT",
		payload: payload,
	};
}

export function getByIdWithAuth(id: string) {
	let project = {};
	let match = {
		operationType: { $ne: "D" },
		_id: {
			$oid: id,
		},
	};
	let sort = {};
	let group = {};
	let limit = 1;
	let skip = 0;

	let payload: any = axios.get(
		config.url +
		"/" +
		ENTITY.ENTITY +
		"/withauth/" +
		config.company +
		`?project=${JSON.stringify(project)}&match=${JSON.stringify(
			match
		)}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
			group
		)}&limit=${limit}&skip=${skip}`
	);

	return {
		type: "GET_" + ENTITY.ENTITY_MAYUS + "_WITH_AUHT_BY_ID",
		payload: payload,
	};
}

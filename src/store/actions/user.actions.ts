import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.USER;

export function get(
  idUser: string
) {

	let project = {
    aceptTC: 1,
    creationDate: 1,
    creationUser: 1,
    email: 1,
    enabled: 1,
    mailVerified: 1,
    operationType: 1,
    password: 1,
    phone: 1,
    "rol.name": 1,
    sendAlert: 1,
    tokenExpiration: 1,
    updateDate: 1,
    updateUser: 1,
    user: 1,
    wingcoins: 1,

  }
	let match = {
		_id: {
			$oid: idUser
		},
	}
	let sort = {}
	let group = {}
	let limit = 1
	let skip = 0

	let payload: any = axios.get(config.url + '/user' + `?project=${JSON.stringify(project)}&match=${JSON.stringify(match)}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(group)}&limit=${limit}&skip=${skip}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem(storage.session_token),
      'session': localStorage.getItem(storage.session_id)
    }
  })

  return {
		type: 'GET_USER',
		payload: payload
	}

}

export function getById(id: string) {
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
      `?project=${JSON.stringify(project)}&match=${JSON.stringify(
        match
      )}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
        group
      )}&limit=${limit}&skip=${skip}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(storage.session_token),
        session: localStorage.getItem(storage.session_id),
      },
    }
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



import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.AGENT;

export function getAll() {

  let project = {};
  let match = { operationType: {
    $ne: 'D',
  },};
  let sort = {};
  let group = {};
  let limit = 0;
  let skip = 0;
  

  let payload: any = axios.get(
    config.url +
      `/${ENTITY.ENTITY}/withauth/${config.company}` +
      `?project=${JSON.stringify(project)}&match=${JSON.stringify(
        match
      )}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
        group
      )}&limit=${limit}&skip=${skip}`,
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS,
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

export function getManyWithAuth() {
  let project = {};
  let match = {
    operationType: { $ne: "D" },
  };
  let sort = {};
  let group = {};
  let limit = 0;
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
    type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL + "_WITH_AUTH",
    payload: payload,
  };
}

export function getMany() {
  let project = {};
  let match = {
    operationType: { $ne: "D" },
  };
  let sort = {};
  let group = {};
  let limit = 0;
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
    type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL,
    payload: payload,
  };
}



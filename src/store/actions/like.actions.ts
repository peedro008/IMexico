import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.LIKE;

export function getAll() {

  let match = {
    operationType: {
      $ne: 'D',
    },
  };

  let payload: any = axios.get(
    config.url +
    `/${ENTITY.ENTITY}` +
    `/${config.company}?match=${JSON.stringify(match)}`,
    {
    }
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function getManyByPostWithAuth(comment: string) {
  let project = {};
  let match = {
    operationType: { $ne: "D" },
    comment: { $oid: comment }
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

export function setByCommentOrPost(object: object) {
  let payload: any = axios.post(
    config.url + "/" + ENTITY.ENTITY,
    object,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(storage.session_token),
        session: localStorage.getItem(storage.session_id),
      },
    }
  );

  return {
    type: "SET_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function updateById(id: string, object: object) {
  let payload: any = axios.put(
    config.url + "/" + ENTITY.ENTITY + "/" + id,
    object,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(storage.session_token),
        session: localStorage.getItem(storage.session_id),
      },
    }
  );

  return {
    type: "UPDATE_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function deleteById(id: string) {
  let payload: any = axios.delete(
    config.url + "/" + ENTITY.ENTITY + "/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(storage.session_token),
        session: localStorage.getItem(storage.session_id),
      },
    }
  );

  return {
    type: "DELETE_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function reintentar() {
  return {
    type: "REINTENTAR_" + ENTITY.ENTITY_MAYUS,
    payload: "",
  };
}



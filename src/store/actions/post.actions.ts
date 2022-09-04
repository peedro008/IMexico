import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.POST;

export function getAll() {

  let project = {};
  let match = {
    operationType: {
      $ne: 'D',
    },
  };
  let sort = {};
  let group = {};
  let limit = 0;
  let skip = 0;

  let payload: any = axios.get(
    config.url +
    `/${ENTITY.ENTITY}` +
    `/withoutauth/${config.company}`,
    {
    }
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function getByCategoryWithAuth(category: string, limit: number, skip: number) {

  let project = {
    category: 1,
    creationDate: 1,
    description: 1,
    operationType: 1,
    principalImg: 1,
    title: 1,
    _id: 1,
  };
  let match = {
    operationType: {
      $ne: 'D',
    },
    category: {
      $oid: category,
    }
  };

  let sort = {
    creationDate: -1,
  };
  let group = {
    _id: null,
    count: { $sum: 1 },
    items: { $push: '$$ROOT' },
  };

  let payload: any = axios.get(
    config.url +
    `/${ENTITY.ENTITY}` +
    `/withoutauth/${config.company}?match=${JSON.stringify(
      match
    )}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
      group
    )}&project=${JSON.stringify(
      project
    )}&limit=${limit}&skip=${skip}`,
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS + "_BY_CATEGORY",
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

export function getByIdWithAuth(id: string) {
  let project = {
    "author.name": 1,
    "author.instagram": 1,
    "author.profileImg": 1,
    "category.name": 1,
    "category._id": 1,
    body: 1,
    editor: 1,
    photographer: 1,
    comments: 1,
    creationDate: 1,
    creationUser: 1,
    description: 1,
    operationType: 1,
    principalImg: 1,
    title: 1,
    updateDate: 1,
    updateUser: 1,
    _id: 1,
  };
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
    "/withoutauth/" +
    `${config.company}` +
    `?project=${JSON.stringify(project)}&match=${JSON.stringify(
      match
    )}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
      group
    )}&limit=${limit}&skip=${skip}`
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS + "_BY_ID",
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



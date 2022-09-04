import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.CATEGORY;

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
    config.url + "/" +
      `${ENTITY.ENTITY}` +
      `/withauth/${config.company}`,
    {
    }
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS,
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

export function reintentar() {
  return {
    type: "REINTENTAR_" + ENTITY.ENTITY_MAYUS,
    payload: "",
  };
}

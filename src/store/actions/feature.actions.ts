import axios from "axios";
import config from "./config";
import entities from "./entities";

const ENTITY = entities.FEATURE;

export function get() {

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
  };
  let sort = {
    creationDate: -1,
  };
  let limit = 1;
  let skip = 0;

  let payload: any = axios.get(
    config.url +
      `/post/withoutauth/` +
      config.company +
      `?project=${JSON.stringify(project)}&match=${JSON.stringify(
        match
      )}&sort=${JSON.stringify(sort)}&limit=${limit}&skip=${skip}`,
    {
    }
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS,
    payload: payload,
  };
}

export function getByCategoryId(categoryId: string) {

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
          $oid: categoryId,
    }
  };
  let sort = {
    creationDate: -1,
  };
  let limit = 1;
  let skip = 0;

  let payload: any = axios.get(
    config.url +
      `/post/withoutauth/` +
      config.company +
      `?project=${JSON.stringify(project)}&match=${JSON.stringify(
        match
      )}&sort=${JSON.stringify(sort)}&limit=${limit}&skip=${skip}`,
    {
    }
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

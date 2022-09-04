import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.COMMENT;

export function getManyByPostWithAuth(post: string, limit: number, skip: number) {

  let project = {
    comment: 1,
    likes: 1,
    dislikes: 1,
    anonymous: 1,
    creationDate: 1,
    operationType: 1,
    post: 1,
    "user.user": 1,
    "user._id": 1,
    _id: 1,
    email: 1
  };
  let match = {
    operationType: {
      $ne: 'D',
    },
    post: {
      $oid: post,
    }
  };
  let sort = {
    creationDate: -1,
  };
  let group = {};

  let payload: any = axios.get(
    config.url +
      `/${ENTITY.ENTITY}/withoutauth/` +
      `${config.company}` +
      `?project=${JSON.stringify(project)}&match=${JSON.stringify(
        match
      )}&sort=${JSON.stringify(sort)}&group=${JSON.stringify(
        group
      )}&limit=${limit}&skip=${skip}`,
  );

  return {
    type: "GET_" + ENTITY.ENTITY_MAYUS_PLURAL + "_BY_POSTID_WITH_AUHT",
    payload: payload,
  };
}

export function setByPost(object: object) {
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

export function reintentar() {
  return {
    type: "REINTENTAR_" + ENTITY.ENTITY_MAYUS,
    payload: "",
  };
}



import axios from "axios";
import config from "./config";
import entities from "./entities";
import storage from "./../../config";

const ENTITY = entities.RELATEDPOSTS;

export function getMany(postId: string, limit: number, skip: number) {
  let project = {
    "author.name": 1,
    "category.name": 1,
    "category._id": 1,
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
      $ne: {
        $oid: postId,
      }
    }
  };
  let sort = {
    creationDate: -1,
  };
  let group = {};

  let payload: any = axios.get(
    config.url +
      "/post/withoutauth/" +
      config.company +
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

export function reintentar() {
  return {
    type: "REINTENTAR_" + ENTITY.ENTITY_MAYUS,
    payload: "",
  };
}

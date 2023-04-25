import type { Sequelize } from "sequelize";
import { test as _test } from "./test";
import type { testAttributes, testCreationAttributes } from "./test";

export {
  _test as test,
};

export type {
  testAttributes,
  testCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const test = _test.initModel(sequelize);


  return {
    test: test,
  };
}

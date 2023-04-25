import type { Sequelize } from "sequelize";
import { t_test as _t_test } from "./t_test";
import type { t_testAttributes, t_testCreationAttributes } from "./t_test";

export {
  _t_test as t_test,
};

export type {
  t_testAttributes,
  t_testCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const t_test = _t_test.initModel(sequelize);


  return {
    t_test: t_test,
  };
}

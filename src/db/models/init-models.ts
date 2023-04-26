import type { Sequelize } from "sequelize";
import { t_tags as _t_tags } from "./t_tags";
import type { t_tagsAttributes, t_tagsCreationAttributes } from "./t_tags";
import { t_test as _t_test } from "./t_test";
import type { t_testAttributes, t_testCreationAttributes } from "./t_test";

export {
  _t_tags as t_tags,
  _t_test as t_test,
};

export type {
  t_tagsAttributes,
  t_tagsCreationAttributes,
  t_testAttributes,
  t_testCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const t_tags = _t_tags.initModel(sequelize);
  const t_test = _t_test.initModel(sequelize);


  return {
    t_tags: t_tags,
    t_test: t_test,
  };
}

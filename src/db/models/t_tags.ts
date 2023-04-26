import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_tagsAttributes {
  id: number;
  name?: any;
  age?: number;
}

export type t_tagsPk = "id";
export type t_tagsId = t_tags[t_tagsPk];
export type t_tagsOptionalAttributes = "name" | "age";
export type t_tagsCreationAttributes = Optional<t_tagsAttributes, t_tagsOptionalAttributes>;

export class t_tags extends Model<t_tagsAttributes, t_tagsCreationAttributes> implements t_tagsAttributes {
  id!: number;
  name?: any;
  age?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_tags {
    return t_tags.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

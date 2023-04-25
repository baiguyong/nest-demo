import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface t_testAttributes {
  name: string;
  age: number;
  id: number;
}

export type t_testPk = "id";
export type t_testId = t_test[t_testPk];
export type t_testOptionalAttributes = "id";
export type t_testCreationAttributes = Optional<t_testAttributes, t_testOptionalAttributes>;

export class t_test extends Model<t_testAttributes, t_testCreationAttributes> implements t_testAttributes {
  name!: string;
  age!: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof t_test {
    return t_test.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 't_test',
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

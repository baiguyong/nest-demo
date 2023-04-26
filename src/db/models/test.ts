import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface testAttributes {
  id: number;
  name: string;
  age: number;
}

export type testPk = "id";
export type testId = test[testPk];
export type testOptionalAttributes = "id";
export type testCreationAttributes = Optional<testAttributes, testOptionalAttributes>;

export class test extends Model<testAttributes, testCreationAttributes> implements testAttributes {
  id!: number;
  name!: string;
  age!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof test {
    return test.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'test',
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

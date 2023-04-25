import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface testAttributes {
  name: string;
  age: number;
  id: number;
}

export type testPk = "id";
export type testId = test[testPk];
export type testOptionalAttributes = "id";
export type testCreationAttributes = Optional<testAttributes, testOptionalAttributes>;

export class test extends Model<testAttributes, testCreationAttributes> implements testAttributes {
  name!: string;
  age!: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof test {
    return test.init({
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

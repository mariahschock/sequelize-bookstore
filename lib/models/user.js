'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    async comparePassword(password) {
      return await bcrypt.compare(password, this.passwordHash);
    }
    toJSON() {
      const attributes = Object.assign({}, this.get());
      delete attributes['passwordHash'];
      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Not a valid email',
        },
      },
      unique: {
        msg: 'Email already exists',
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.VIRTUAL,
      set(password) {
        const passwordHash = bcrypt.hashSync(
          password,
          Number(process.env.SALT_ROUNDS)
        );
        this.setDataValue('passwordHash', passwordHash);
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

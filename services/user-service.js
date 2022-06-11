const UserModel = require('../models/user-model');

class UserService {
  async register(body) {
    try {
      await UserModel.create({ ...body, orders: [] });
      return { status: 200 };
    } catch (e) {
      console.log('!!!register!!!', e);
      return { status: 500 }
    }
  }

  async getUsers() {
    try {
      let users = await UserModel.find();
      return { status: 200, users };
    } catch (e) {
      console.log(e, '!!!getUsers!!!');
      return { status: 500 };
    }
  }

  async getUser(body) {
    try {
      let user = await UserModel.findOne(body);
      return { status: 200, exists: !!user };
    } catch (e) {
      console.log(e, '!!!getUser!!!');
      return { status: 500 };
    }
  }

  async createOrder(body) {
    try {
      const { userId, _id, cafeName, description, dateTime, numberOfPersons} = body;
      let users = await UserModel.findById(userId)
      users.orders.push({ _id, cafeName, description, dateTime, numberOfPersons });
      await users.save();

      return { status: 200 };
    } catch (e) {
      console.log('!!!createOrder!!!', e);
      return { status: 500 };
    }
  }
}

module.exports = new UserService();

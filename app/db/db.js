import mongoose from 'mongoose';

module.exports = {
  connect: function () {
    mongoose.connect('mongodb://localhost/new-SD');
  },
  close: function () {
    mongoose.connection.close();
  }
};

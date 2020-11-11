module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    code: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    categoryId: {
      type: Sequelize.INTEGER,
      primaryKey: false
    },
    updatedBy: {
      type: Sequelize.STRING
    },
    createdBy: {
      type: Sequelize.STRING
    }
  });

  return Item;
};

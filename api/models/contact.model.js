module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name
        adress
    });
  
    return Contact;
};
// You need to put your code contact.model.js here
//and explain as much as you can
module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name : {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
    });

    return Contact;
};
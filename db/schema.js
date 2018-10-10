const Sequelize = require('sequelize-oracle');

module.exports.schema = {

    tenantId: {
        type: Sequelize.STRING
    },
    wfInstanceId: {
        type: Sequelize.STRING
    },
    entityCode: {
        type: Sequelize.STRING
    },
    entityId: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    accessLevel: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    enableFlag: {
        type: Sequelize.STRING,
        defaultValue: "false"
    },
    activationStatus: {
        type: Sequelize.STRING,
        defaultValue: "INACTIVE"
    },
    selectedFlag: {
        type: Sequelize.STRING,
        defaultValue: "falses"
    },
    processingStatus: {
        type: Sequelize.STRING,
        defaultValue: "IN_PROGRESS"
    },
    createdBy: {
        type: Sequelize.STRING
    },
    parent: {
        type: Sequelize.STRING
    }
}

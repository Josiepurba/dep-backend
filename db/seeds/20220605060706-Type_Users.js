"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Type_Users",
            [
                {
                    type_user: "Superadmin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    type_user: "Admin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    type_user: "Member",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Type_Users", null, {});
    },
};

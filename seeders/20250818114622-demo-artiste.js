module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artistes', [
      {
        id: crypto.randomUUID(),
        name: 'Jao Felix',
        gender: 'Male',
        genre: 'Pop',
        country: 'unknown',
          is_married: false,
          record_label: "DBA Music",
          CreatedAt: new Date(),
          updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artistes', null, {});
  },
};
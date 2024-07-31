// Задача. Удалить всех юзеров с отрицательным балансом из USA и France
db.users.deleteMany({
    country: { $in: ["USA", "France"] },
    balance: { $lt: 0 },
  });
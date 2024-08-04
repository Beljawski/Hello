// Заблокировать всех не заблокированных юзеров не из China и уменьшить их баланс на 25 EUR

db.users.update(
  {
    is_blocked: { $ne: true },
    country: { $ne: "China" },
  },
  { $inc: { balance: -25 } }
);

// Вывести имена и баланс заблокированных юзеров из China и из France, если их баланс находится в диапазоне значений от 10 до 1000 (вкл.)

db.users.find(
  {
    is_blocked: { $eq: true },
    country: { $in: ["China", "France"] },
    balance: { $gte: 10, $lte: 1000 },
  },
  {
    name: 1,
    balance: 1,
    _id: 0,
  }
);

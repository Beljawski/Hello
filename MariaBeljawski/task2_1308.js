// Задача. Увеличить баланс всех не заблокированных юзеров не из China на 15.5% (баланс юзеров должен быть положительным)

db.users.updateMany(
  {
    is_blocked: false,
    country: { $ne: "China" },
    balance: { $gt: 0 },
  },
  {
    $mul: { balance: 1.155 },
  }
);

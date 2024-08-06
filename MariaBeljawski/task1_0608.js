// Задача. Вывести ко-во заблокированных юзеров не из China

db.users.countDocuments({
  country: { $ne: "China" },
  is_blocked: true,
});

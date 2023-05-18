const express = require('express');
const router = express.Router();

const users = [
   {
      id: 1,
      name: 'Ivanov Ivan Ivanovich',
      email: 'ivanov@neoflex.ru',
   },
   {
      id: 2,
      name: 'Petrov Petr Petrovich',
      email: 'petrov@neoflex.ru ',
   },
   {
      id: 3,
      name: 'Sidorov Ivan Alexandrovich',
      email: 'sidorov@neoflex.ru',
   },
];

// router.get('/', (req, res) => {
//    res.send(users);
// });

router.get('/', (req, res) => {
   const userName = req.query.name;

   const getUser = users.filter(({ name }) => name.includes(userName));

   if (getUser.length > 0) {
      res.send(getUser);
   }

   res.send(users);
});

router.get('/:id', (req, res) => {
   const userId = Number(req.params.id);

   const getUser = users.filter(({ id }) => id === userId);

   if (getUser.length === 0) {
      res.status(404);
   }

   res.send(getUser);
});

module.exports = router;

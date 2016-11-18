const db = require('../db/db');

function getAllPuppies(req, res, next) {

  db.any('SELECT * from puppies;')
    .then((puppies) => {
      res.puppies = puppies;
      next();
    })
    .catch(error => next(error));
}

function createPuppy(req, res, next) {
  db.none('INSERT INTO puppies (name, url) VALUES ($1, $2)', [req.body.name, req.body.url])
    .then((puppy) => {
      res.puppy = puppy;
      next();
    })
    .catch(error => next(error));
}

function abandonPuppy(req, res, next) {
  const query = `DELETE from puppies WHERE id = ${req.params.id}`;
  db.any(`${query};`)
    .then((puppy) => {
      res.puppy = puppy;
      next();
    })
    .catch(error => next(error));
}

function likePuppy(req, res, next) {
  const query = `UPDATE puppies SET likes = likes + 1 WHERE id = ${req.params.id}`;
  db.any(`${query};`)
    .then((puppy) => {
      res.puppy = puppy;
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getAllPuppies,
  createPuppy,
  abandonPuppy,
  likePuppy
};

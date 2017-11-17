const studentsRouter = require('express').Router();
const studentsController = require('./controller');

studentsRouter.get('/', studentsController.getStudents);
studentsRouter.post('/add', studentsController.addStudent);
studentsRouter.get('/byemail', studentsController.getByEmail);
studentsRouter.post('/greet', studentsController.greet);

module.exports = studentsRouter;

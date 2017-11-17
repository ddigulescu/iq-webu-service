const appRouter = require("express").Router();
const appRoutes = require("./modules");

appRouter.use("/students", appRoutes.studentsRouter);

module.exports = appRouter;

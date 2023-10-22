const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/VideoController");
const VideoMiddleware = require("./middlewares/VideoMiddleware")
//Rotas do CRUD
routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);
routes.put("/videos/:id", VideoMiddleware.validateId, VideoController.update);
routes.delete("/videos/:id", VideoMiddleware.validateId, VideoController.delete);
routes.patch("/videos/:id", VideoMiddleware.validateId, VideoController.updateLike);
module.exports = routes;
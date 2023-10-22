//Valida a entrada antes de executar a função de update
const { validate: isUuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;
        //Formato incorreto
        if (!isUuid(id)) {
            return response.status(400).json({ error: "Invalid ID." });
        }
        //Formato correto mas com id não identificado
        try {
            const video = await Video.findById(id);
            response.video = video;
            if (!video) {
                return response.status(404).json({ error: "Video not found." });
            }
            //Erro não identificado
        } catch (err) {
            return response.status(500).json({ error: err.message });
        }
        next();
    },
};
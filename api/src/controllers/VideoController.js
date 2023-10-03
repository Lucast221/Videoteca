const { v4: uuid } = require("uuid");
const Video = require("../models/Video");

module.exports = {
    async index(request, response) {
        try {
            const videos = await Video.find();  //Função vai demandar algum tempo para localizar
            return response
                .status(200)
                .json({ videos });
        } catch (err) {
            response
                .status(500)
                .json({ error: err.message });
        }
    },

    //Controle de criação
    async store(request, response) {
        const { title, link } = request.body;
        //Verificação de preenchimento do titulo e link
        if (!title || !link) {
            return response
                .status(400)
                .json({ error: "Missing tittle or link" });
        }

        const video = new Video({
            _id: uuid(),
            title,
            link,
            liked: false,
        })
        //salvar vídeo criado
        try {
            await video.save();

            return response
                .status(201)
                .json({ message: "Video added sucessfully!" });
        } catch (err) {
            response
                .status(400)
                .json({ error: err.message });
        }
    },
    //Controle de atualização
    async update(request, response) {
        const { title, link } = request.body;
        //Só permite alteração informando um titulo ou link
        if (!title && !link) {
            return response
                .status(400)
                .json({ error: "You must inform a new tittle or new link" });
        }
        //Atualiza com o valor desejado
        if (title) response.video.title = title;
        if (link) response.video.link = link;

        try {
            await response.video.save();
            return response
                .status(200)
                .json({ message: "Video updated sucessfully" })
        } catch (err) {
            response
                .status(500)
                .json({ error: err.message });
        }
    },
    //Controle de delete
    async delete(request, response) {
        try {
            await response.video.deleteOne();
            return response
                .status(200)
                .json({ message: "Video deleted sucessfully!" })
        } catch (err) {
            return response
                .status(500)
                .json({ error: err.message })
        }
    },
    //Controle de like
    async updateLike(request, response) {
        response.video.liked = !response.video.liked;
        try {
            await response.video.save();
            return response
                .status(200)
                .json({ message: `Video ${response.video.liked ? "liked" : "unliked"} sucessfully! ` })
        } catch (err) {
            return response
                .status(400)
                .json({ error: "You must inform a title to like!" });
        }
    },
};



const mongoose = require("mongoose");

//Função para conexão com o banco de dados mongo
function connectToDatabse() {
    mongoose.connect(
        process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));
    db.once("open", () => console.log("📦 Connected to the database!"));
}
module.exports = connectToDatabse;
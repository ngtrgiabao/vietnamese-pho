const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.utils");

const startServer = async () => {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("connected to db");

        const PORT = config.app.port;

        app.listen(PORT, () => {
            console.log("running on port ", PORT);
        });
    } catch (error) {
        console.log("Cannot connect to db", error);
        process.exit();
    }
};

startServer();

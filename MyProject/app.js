const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routers/auth.routes");
const usersRouter = require("./routers/user.routes")
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");

app.use(cors());
app.use(express.json({extended: true}));
app.use("/api/auth", authRouter);
app.use("/api/user", usersRouter);


const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log("Server started on port", PORT);
        });
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

start();
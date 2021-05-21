require("./database/database");
const express = require("express");
const app = express();
const router = require("./routes/index.routes");

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.set("port", process.env.PORT || 4000);
app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});

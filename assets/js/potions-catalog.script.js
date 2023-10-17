import { Render } from "./render.script.js"
import { renderData } from "./renderData.script.js"

const app = new Render("app");

app.fetchData("https://api.open5e.com/v1/magicitems/?search=Potion of", renderData);
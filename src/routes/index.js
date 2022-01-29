import Header from "../templates/header";
import Home from "../pages/home";
import Characters from "../pages/character";
import Error404 from "../pages/error404";

const routes = {
    "/": Home,
    "/:id": Characters,
    "/contact": "contact",
}

const router = async() => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Header();
}

export default router;
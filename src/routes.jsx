import App from "./App";
import { Home } from "./layout/pages/Home";
import { Ingredients } from "./layout/pages/Ingredients";
import { Recipes } from "./layout/pages/Recipes";
import { Recipes_details } from "./layout/pages/Recipes_details";
import { Contact } from "./layout/pages/Contact";
import { NotFound } from "./layout/pages/NotFound";
import { Login } from "./layout/pages/Login";

export const routes = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "ingredients_recoltes",
        Component: Ingredients,
      },
      {
        path: "recipes",
        Component: Recipes,
      },
      {
        path: "recipes_details",
        Component: Recipes_details,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

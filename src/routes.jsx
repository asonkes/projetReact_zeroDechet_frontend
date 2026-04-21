import App from "./App";
import { Home } from "./layout/pages/Home";
import { Ingredients } from "./layout/pages/Ingredients";
import { Recipes } from "./layout/pages/Recipes";
import { Contact } from "./layout/pages/Contact";
import { NotFound } from "./layout/pages/NotFound";

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
        path: "ingredients",
        Component: Ingredients,
      },
      {
        path: "recipes",
        Component: Recipes,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

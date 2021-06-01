import App from "./App";
import LandingPage from "./components/LandingPage";

const routes = [
  {
    path: "/",
    name: "TODO-APP",
    component: LandingPage,
  },
  {
    path: "/todo",
    name: "todo",
    component: App,
  },
];
export default routes;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@store";
import { transformQuery } from "@utils";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const routerContext = require.context("./", true, /Router\w+\.js$/);
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route);
  const o = routerModule.default || routerModule;
  Array.isArray(o) ? o.forEach(item => routes.push(item)) : routes.push(o);
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let newfullPath = "";
  const { hash, path, query } = to;
  const language = from.query.lang || "cn";
  if (query.lang !== "en" && store.state.language.type === "en") {
    const queryString = transformQuery({ query, language });
    newfullPath = path + queryString + hash;
    return next(newfullPath);
  }
  next();
});

export default router;

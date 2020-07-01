export default [
  {
    path: "/about",
    name: "About",
    component: () => import("../../views/About.vue")
  },
  {
    path: "/about/",
    name: "About",
    component: () => import("../../views/about/index.vue"),
    children: [
      {
        path: "brandStory",
        name: "BrandStory",
        component: () => import("../../components/about/brandStory.vue")
      },
      {
        path: "brandConcept",
        name: "brandConcept",
        component: () => import("../../components/about/brandConcept.vue")
      }
    ]
  }
];

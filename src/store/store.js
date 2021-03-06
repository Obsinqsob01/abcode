import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {
  DailyUpdatesMutations,
  courseMutations,
  temaMutations,
  lessonMutations,
  quizMutations
} from "./mutations";
import {
  courseActions,
  temaActions,
  lessonActions,
  quizActions
} from "./actions";
import {
  courseGetters,
  temaGetters,
  lessonGetters,
  categoriesGetters
} from "./getters";

export default new Vuex.Store({
  state: {
    title: "ABCode",
    showLoader: false,
    courses: [],
    course: {},
    tema: [],
    temas: [],
    lesson: [],
    lessons: [],
    temasByCourse: [],
    lessonsByTema: [],
    course: {},
    quiz: [],
    courseCategories: [
      {
        title: "Fundamentos de Programación",
        categoryName: "fundamentos",
        description:
          "Eres nuevo en la programación? Estas en el lugar indicado, aqui contarás con todo lo necesario para empezar",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/luces.svg?alt=media&token=5236705f-c69f-4db7-8913-6fc9f495321d",
        color: "is-success"
      },
      {
        title: "Programación Orientada a Objetos",
        categoryName: "poo",
        description:
          "Ya conoces los fundamentos? Que tal algo más? Aprende POO!",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/orientado_objetos.svg?alt=media&token=e673c365-3444-487a-bff8-8698720975c6",
        color: "is-primary"
      },
      {
        title: "Desarrollo Web",
        categoryName: "web",
        description:
          "Domina HTML5, CSS3 y Javascript para crear hermosos sitios web!",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/desarrollo_web.svg?alt=media&token=3655edd7-df02-45b5-a380-3da16e4450bd",
        color: "is-danger"
      },
      {
        title: "Desarrollo de Apps",
        categoryName: "apps",
        description:
          "Aprende a desarrollar aplicaciones para dispositivos moviles.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/desarrollo_apps.svg?alt=media&token=d4e6b3ab-a023-4389-834f-948d0838dadb",
        color: "is-warning"
      },
      {
        title: "Servidores",
        categoryName: "servidores",
        description:
          "Aprende a trabajar con servidores y administrar redes de computadoras.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/cbcode-cd76e.appspot.com/o/redes.svg?alt=media&token=e83ba034-2788-455d-823e-02630041e478",
        color: "is-primary"
      }
    ],
    dailyUpdates: [
      {
        id: 0,
        date: new Date(Date.now()).toLocaleString(),
        content: "@usuario ha terminado un curso"
      },
      {
        id: 1,
        date: new Date(Date.now()).toLocaleString(),
        content: "Tienes nuevos mensajes en la bandeja"
      },
      {
        id: 2,
        date: new Date(Date.now()).toLocaleString(),
        content: "Hay un nuevo usuario"
      },
      {
        id: 3,
        date: new Date(Date.now()).toLocaleString(),
        content: "Otra notificación"
      }
    ]
  },
  mutations: Object.assign(
    {},
    DailyUpdatesMutations,
    courseMutations,
    temaMutations,
    lessonMutations,
    quizMutations
  ),
  actions: Object.assign(
    {},
    courseActions,
    temaActions,
    lessonActions,
    quizActions
  ),
  getters: Object.assign(
    {},
    courseGetters,
    temaGetters,
    lessonGetters,
    categoriesGetters,
    quizMutations
  )
});

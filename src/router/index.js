import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from "@/views/AdminView.vue";
import UserCenter from "@/components/admin/UserCenter.vue";
import EditArticle from "@/components/admin/EditArticle.vue";
import ManagePicture from "@/components/admin/ManagePicture.vue";
import ManageArticle from "@/components/admin/ManageArticle.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children:[
      {
        path:"user/center",
        name:"UserCenter",
        component:UserCenter
      },
      {
        path:"edit/article",
        name:"EditArticle",
        component:EditArticle
      },
      {
        path:"manage/article",
        name:"ManageArticle",
        component:ManageArticle
      },
      {
        path:"manage/picture",
        name:"ManagePicture",
        component:ManagePicture
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

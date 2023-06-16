import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: '/', redirect: '/home' },
    { path: "/home", component: '@/pages/Home' },
    { path: "/web", component: '@/pages/Web' },
    { path: "/mobile", component: '@/pages/Mobile' },
  ],
  npmClient: 'yarn',
});

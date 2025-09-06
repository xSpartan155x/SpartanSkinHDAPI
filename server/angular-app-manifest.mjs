
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/SpartanSkinHDAPI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/about-us"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/catalog"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/hot-it-works"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services/how-it-works"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services/HD-Skin"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services/HD-Capes"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services/HD-Elytras"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/services/Base-Skin"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/login"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/SpartanSkinHDAPI/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10961, hash: '66fa87bcb9d9a407f55c29d4b7c96d124e3cace3ae42a13a16f8dcf7e13e6bff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1236, hash: '71c45dd3a951e075d63faf0bed9366b8362420cee06f66e5c84f21561960ea97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VMYNYJYR.css': {size: 104413, hash: 'x+s7Ef/Q2OA', text: () => import('./assets-chunks/styles-VMYNYJYR_css.mjs').then(m => m.default)}
  },
};

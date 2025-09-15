import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from '../pages/home/home.component';
import { ServicesComponent } from '../pages/services/services.component';
import { TemplateComponent } from '../libs/template/template.component';
import { HowItWorksComponent } from '../pages/how-it-works/how-it-works.component';
import { HDSkinsComponent } from '../pages/hd-skins/hd-skins.component';
import { HDCapesComponent } from '../pages/hd-capes/hd-capes.component';
import { HDElytrasComponent } from '../pages/hd-elytras/hd-elytras.component';
import { BaseSkinComponent } from '../pages/base-skin/base-skin.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../libs/dashboard/dashboard.component';
import { HomePrivateComponent } from '../private-area/home-private/home-private.component';
import { UploadSkinComponent } from '../private-area/upload-skin/upload-skin.component';
import { UploadCatalogComponent } from '../private-area/upload-catalog/upload-catalog.component';
import { RequestsComponent } from '../private-area/requests/requests.component';

export const routes: Routes = [
{
  path: '',
  component: TemplateComponent,
  children: [
    // pagine con footer
    { path: '', component: HomeComponent, data: { footer: true } },
    { path: 'about-us', component: AboutUsComponent, data: { footer: true } },
    { path: 'catalog', component: CatalogComponent, data: { footer: true } },
    { path: 'hot-it-works', component: HowItWorksComponent, data: { footer: true } },
    { path: 'services', component: ServicesComponent, data: { footer: true } },
    { path: 'services/how-it-works', component: HowItWorksComponent, data: { footer: true } },
    { path: 'services/HD-Skin', component: HDSkinsComponent, data: { footer: true } },
    { path: 'services/HD-Capes', component: HDCapesComponent, data: { footer: true } },
    { path: 'services/HD-Elytras', component: HDElytrasComponent, data: { footer: true } },
    { path: 'services/Base-Skin', component: BaseSkinComponent, data: { footer: true } },

    // pagine senza footer
    { path: 'login', component: LoginComponent, data: { footer: false, type: 'login' } },
    { path: 'register', component: LoginComponent, data: { footer: false, type: 'register' } },

    // 🔒 area protetta
    { 
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],   // 👈 qui mettiamo la guardia
      children: [
        { path: '', component: HomePrivateComponent, data: { footer: false }},
        { path: 'upload-skin', component: UploadSkinComponent, data: { footer: false }},
        { path: 'upload-catalog', component: UploadCatalogComponent, data: { footer: false }},
        { path: 'requests', component: RequestsComponent , data: { footer: false }},
      ]
    },
  ],
},

];

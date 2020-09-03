import { DataResolverService } from './data-resolver.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full'
  },
  {
    path: 'loginbene',
    loadChildren: () => import('./loginbene/loginbene.module').then(m => m.LoginbenePageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'choix',
    loadChildren: () => import('./choix/choix.module').then( m => m.ChoixPageModule)
  },
  {
    path: 'registerbene',
    loadChildren: () => import('./registerbene/registerbene.module').then( m => m.RegisterbenePageModule)
  },
  {
    path: 'resterasso',
    loadChildren: () => import('./resterasso/resterasso.module').then( m => m.ResterassoPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'loginasso',
    loadChildren: () => import('./loginasso/loginasso.module').then( m => m.LoginassoPageModule)
  },
  {
    path: 'loginbene2',
    loadChildren: () => import('./loginbene2/loginbene2.module').then( m => m.Loginbene2PageModule)
  },
  {
    path: 'accountpublicasso',
    loadChildren: () => import('./accountpublicasso/accountpublicasso.module').then( m => m.AccountpublicassoPageModule)
  },
  {
    path: 'accountprivebene',
    loadChildren: () => import('./accountprivebene/accountprivebene.module').then( m => m.AccountprivebenePageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

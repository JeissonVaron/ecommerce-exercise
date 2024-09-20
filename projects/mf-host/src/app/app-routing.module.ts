import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'catalogo',
    loadChildren: () => import('mfCatalog/CatalogModule').then(m => m.CatalogoModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('mfCarritoCompras/CarritoModule').then(m => m.CarritoModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('mfPago/PagoModule').then(m => m.PagoModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('mfUsuario/UsuarioModule').then(m => m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

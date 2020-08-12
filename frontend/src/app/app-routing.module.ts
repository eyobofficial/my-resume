import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('@resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('@portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('@contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('@blog/blog.module').then(m => m.BlogModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

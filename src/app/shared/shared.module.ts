//modulos
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//componentes

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
/* import { NotFoundComponent } from '../pages/not-found/not-found.component'; */
import { PagesComponent } from '../components/pages/pages.component';

@NgModule({
    imports: [
    RouterModule,
    CommonModule,
    ],
    declarations: [
  
    NavbarComponent,
    FooterComponent, 
    /* NotFoundComponent, */
    PagesComponent  
    ],
    exports: [
       
        NavbarComponent,
        FooterComponent,
        /* NotFoundComponent, */
        PagesComponent
    ]
})
export class SharedModule {}
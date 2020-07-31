import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './@material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { ProfileComponent }from './components/profile/profile.component'; 
import { NavbarComponent } from './shared/navbar/navbar.component'; */
/* import { FooterComponent } from './shared/footer/footer.component'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { LoginComponent } from './components/user/login/login.component';
import { LiquidityComponent } from './components/business/liquidity/liquidity.component';
import { SaleComponent } from './components/business/sale/sale.component';
import { SaleEquipmentComponent } from './components/business/sale-equipment/sale-equipment.component';
import { MemberComponent } from './components/investment/member/member.component';
import { TranferComponent } from './components/investment/tranfer/tranfer.component';
import { SaleEquiComponent } from './components/investment/sale-equi/sale-equi.component';
import { MembershipComponent } from './components/membership/membership.component';
import { InfoHelpComponent } from './components/esp/info-help/info-help.component';
import { InfoIversComponent } from './components/esp/info-ivers/info-ivers.component';
import { HomeComponent } from './components/esp/home/home.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { BusinessComponent } from './components/business/business.component';
import { PersonalInfoComponent } from './components/profile/personal-info/personal-info.component';
import { PublicacionComponent } from './components/profile/publicacion/publicacion.component';
import { ResultSaleEquipamentComponent } from './components/result/result-sale-equipament/result-sale-equipament.component';
import { ResultSaleComponent } from './components/result/result-sale/result-sale.component';
import { ResultLiquidityComponent } from './components/result/result-liquidity/result-liquidity.component';
import { ResulCLiquidityComponent } from './components/resultComplete/resul-cliquidity/resul-cliquidity.component';
import { ResulCSaleComponent } from './components/resultComplete/resul-csale/resul-csale.component';
import { PayComponent } from './components/membership/pay/pay.component';
import { InverComponent } from './components/user/register/inver/inver.component';
import { EmpreComponent } from './components/user/register/empre/empre.component'; */
import { HttpClientModule } from '@angular/common/http';
import { safeUrlPipe } from './shared/pipes/safe-url.pipe';
/* import { ModalLiquidezComponent } from './components/modals/modal-liquidez/modal-liquidez.component';
import { ModalTraspasoComponent } from './components/modals/modal-traspaso/modal-traspaso.component';
import { ModalEquiposComponent } from './components/modals/modal-equipos/modal-equipos.component'; */
import { FctrlxAngularFileReader } from 'fctrlx-angular-file-reader';

import { PageModule} from './components/pages.module';


@NgModule({
  entryComponents:[
  /*   ModalLiquidezComponent, */
  ],
  declarations: [
    AppComponent,
    
   /*  ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LiquidityComponent,
    SaleComponent,
    SaleEquipmentComponent,
    MemberComponent,
    TranferComponent,
    SaleEquiComponent,
    MembershipComponent,
    InfoHelpComponent,
    InfoIversComponent,
    HomeComponent,
    InvestmentComponent,
    BusinessComponent,
    PersonalInfoComponent,
    PublicacionComponent,
    ResultSaleEquipamentComponent,
    ResultSaleComponent,
    ResultLiquidityComponent,
    ResulCLiquidityComponent,
    ResulCSaleComponent,
    PayComponent,
    InverComponent,
    EmpreComponent, */
    safeUrlPipe,
    /* ModalLiquidezComponent,
    ModalTraspasoComponent,
    ModalEquiposComponent */
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FctrlxAngularFileReader,
    PageModule,
    
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

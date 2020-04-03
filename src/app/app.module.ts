import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { LoginComponent } from "./login/login.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { AuthService } from "./Services/auth.service";
import { AuthGuardService } from "./Services/auth-guard.service";
import { UserService } from "./Services/user.service";
import { AdminAuthGuardService } from "./Services/admin-auth-guard.service";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "src/environments/environment";
import { Routes, RouterModule } from "@angular/router";
import { CategoryService } from "./Services/category.service";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./Services/product.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "my-orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuardService]
  },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "order-success", component: OrderSuccessComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin/products",
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  },
  {
    path: "admin/orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    ProductFormComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

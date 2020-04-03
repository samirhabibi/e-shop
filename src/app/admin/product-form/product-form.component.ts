import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/Services/category.service";
import { ProductService } from "src/app/Services/product.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(
    cateGoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = cateGoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
  }

  ngOnInit() {}
}

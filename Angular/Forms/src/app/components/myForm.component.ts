import { Component } from "@angular/core";
import { Apple } from "../models/apple.model";

@Component({
  selector: "myForm",
  templateUrl: "./myForm.component.html"
})
export class MyForm {
  apples: Apple[] = [];
  apple: Apple = new Apple("");
  addApple() {
    this.apples.push(this.apple);
    this.apple = new Apple("");
  }
}

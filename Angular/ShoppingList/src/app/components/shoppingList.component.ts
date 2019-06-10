import { Component } from "@angular/core";
import { ShoppingItem } from "../models/shoppingItem.model";

@Component({
  selector: "shopping-list",
  templateUrl: "./shoppingList.component.html"
})
export class ShoppingList {
  items: ShoppingItem[] = [];
  item: ShoppingItem = new ShoppingItem(" ", 0, 0);
  addItem() {
    this.items.push(this.item);
    this.item = new ShoppingItem("", 0, 0);
  }
  removeFromList(index) {
    console.log(index);
    this.items.splice(index, 1);
  }
}

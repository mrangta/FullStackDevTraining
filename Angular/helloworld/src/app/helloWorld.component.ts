import { Component, Input } from "@angular/core";

@Component({
  selector: "hello-world",
  templateUrl: "./helloWorld.component.html"
})
export class HelloWorld {
  @Input() name = "World";
}

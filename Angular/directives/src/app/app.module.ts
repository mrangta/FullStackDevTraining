import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactList } from "./components/contactList.component";
import { ConditionalRender } from "./components/conditional.component";

@NgModule({
  declarations: [AppComponent, ContactList, ConditionalRender],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

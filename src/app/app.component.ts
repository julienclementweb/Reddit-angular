import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
addArticle(title:HTMLInputElement, link:HTMLInputElement): boolean {
  console.log(`Ajouter article titre:${title.value} et le lien :${link.value}`);
  return false;
}

}

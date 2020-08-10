import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  today = new Date();
  twitterProfile = 'https://twitter.com/eyobofficial';
  githubProfile = 'https://github.com/eyobofficial';
  linkedInProfile = 'https://www.linkedin.com/in/eyob-tariku/';
  facebookProfile = 'https://www.facebook.com/eyobofficial/';

  openExternalLink(link: string): void {
    window.open(link);
  }
}

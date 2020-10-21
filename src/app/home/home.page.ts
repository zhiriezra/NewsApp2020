import { Component } from '@angular/core'; 
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  theNation: string = 'http://thenationonlineng.net/category/health';
  leadership: string = 'https://leadership.ng/category/news/health';
  tribune: string = 'https://www.tribuneonlineng.com/health';
  dailyTimes: string = 'https://dailytimes.ng/category/health';
  nationalMirror: string = 'https://www.nationalmirroronline.net/health';

  constructor(private iab: InAppBrowser) {}

  openTheNation(){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.iab.create(this.theNation, '_blank');
  }

  openTheLeadership() {
    const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}
    
    this.iab.create(this.leadership, '_blank');
  }

  openTribune() {
    const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

    this.iab.create(this.tribune, '_blank');
  }

  openDailyTimes() {
    const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

    this.iab.create(this.dailyTimes, '_blank');
  }

  openNationalMirror() {
    const options: InAppBrowserOptions = {
  		zoom: 'no'
  	}

    this.iab.create(this.nationalMirror, '_blank');
  }
}

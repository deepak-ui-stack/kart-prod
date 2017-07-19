import { browser, by, element } from 'protractor';

export class KartProdPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('$-root h1')).getText();
  }
}

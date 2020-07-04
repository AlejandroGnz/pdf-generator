const puppeteer = require('puppeteer');

class BrowserManager {
  constructor() {
    this.browser = null;
    this.page = null;
    this.setupBrowser();
  }

  async setupBrowser() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  async renderPDF(content, options) {
    try {
      await this.page.setContent(content);
      await this.page.pdf(options);
    } catch (error) {
      await this.setupBrowser();
      this.renderPDF(content, options);
    }
  }
}

module.exports = {
  browserManager: new BrowserManager(),
};

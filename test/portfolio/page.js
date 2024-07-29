const { browser } = require('@wdio/globals');
const { $ } = require('@wdio/globals');

class Page {
    get menu() {
        return $('#menu');
    }

    get menuItems() {
        return this.menu.$$('li');
    }
    
    get expectedMenuItems() {
        return ["About", "Experience", "Education", "Projects", "Skills", "Contact"];
    } 

    get about() {
        return $('.heading');
    }

    get demoLink() {
        return $('#demoLink');
    }

    get githubLink() {
        return $('#githubLink');
    }

    open () {
        return browser.url('https://patrickkimportfolio.netlify.app/');
    }
}

module.exports = new Page();

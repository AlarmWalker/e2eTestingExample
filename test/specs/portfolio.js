const { expect } = require('@wdio/globals')
const page = require('../portfolio/page')

describe('my portfolio page', () => {

    it('should display menu items', async () => {
        await page.open();
        for (let i = 0; i < page.expectedMenuItems.length; i++) {
            const menuItem = await page.menuItems[i].getText();
            expect(menuItem).toBe(page.expectedMenuItems[i]);
        }
    })

    it('should display about me', async () => {
        await page.menuItems[0].click();
        expect(await page.about.getText()).toBe("About Me");
    })

    it('should open a demo page', async () => {
        await page.demoLink.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        const url = await browser.getUrl();
        expect(url).toBe('https://chat-app-patrick-kim.netlify.app/');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    })

    it('should open a github page', async () => {
        await page.githubLink.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        const url = await browser.getUrl();
        expect(url).toBe('https://github.com/AlarmWalker/VideoChat');
    })
})
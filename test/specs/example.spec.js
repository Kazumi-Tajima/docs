// `browser` and `expect` are injected globally by WebdriverIO at runtime.
describe('Example Test Suite', () => {
    it('should have a title on the WebdriverIO homepage', async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        expect(title).toContain('WebdriverIO');
    });
});

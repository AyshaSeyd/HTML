require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("selenium tests", function () {
  this.timeout(30_000); // changes how long the mocha test will run for before failing automatically

  // let driver; //declaring a driver variable

  //setting up our browser to be ready for testing - before each test
  // beforeEach(async () => {
  //   driver =  await new Builder().forBrowser("chrome").build();
  // });


  it("24", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      await search.sendKeys("15", Key.ENTER);
      // await search.sendKeys(Key.ENTER);
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("24");
    } finally {
      await driver.quit();
    }
  })

  it("24", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      await search.sendKeys("15", Key.ENTER);
      // await search.sendKeys(Key.ENTER);
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("24");
    } finally {
      await driver.quit();
    }
  })

  /*it.skip("should find a surprise", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      driver.get("https://christophperrins.github.io/TestingSite/");
      const surprise = await driver.wait(until.elementLocated(By.css("#quote > h1")));
      expect(await surprise.getText()).to.equal("Surprise!")
    } finally{
      driver.quit();
    }
    return;
  });*/
  //terminating the browser after each test
  // afterEach(async () => {
  //   await driver.quit();
  // });

});
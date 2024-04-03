import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

const pages = {
  login: LoginPage,
};

const generateRandomString = function (length = 6) {
  return Math.random().toString(20).substr(2, length);
};

const randstr = generateRandomString();
const rndstr2 = generateRandomString(10);

const MyNewsletterPage = await $('//button[text()="My Newsletters"]');
const NewsletterPage = await $('//a[text()="Newsletters"]');
const manageyourDetailsBtn = await $('//button[text()="Manage your details"]');
const CustFirstNameZ = "Akshat";
const CustLasttNameZ = "Tembhare";
const CustFirstLastNameZ = CustFirstNameZ.concat(" ", CustLasttNameZ);
const pianoID = "akshat.tembhare@telegraph.co.uk";
const pianoPsswd = "Ayt@akshat123";
const CustPasswrd = "Ayt@akshat123";
const CustEmail = rndstr2 + "@telegraph.co.uk";
const DigitalCustEmail = "Digit67@telegraph.co.uk";
const paypalID = "tarun.sharma+20180523personal@telegraph.co.uk";
const paypalpasswrd = "tmgsw1w0dt";
var RecordSubID;

//Then Validate Access details in Piano

Then("Validate Access details in Piano for wine", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const pianoAccessMenu = await $(
    '//span[contains(text(),".co")]//following::span[text()="Access"][1]'
  );
  const pianoWineaccess = await $('//div[@class="ellipsis"]');
  const mainIframe = await $('//iframe[@id="tabs-iframe"]');
  await pianoAccessMenu.waitForDisplayed({ timeout: 50000 });
  await pianoAccessMenu.click();

  await browser.pause(1000);
  //await expect(mainIframe).toExist()
  await browser.switchToFrame(mainIframe);

  await pianoWineaccess.waitForDisplayed({ timeout: 50000 });
  await pianoWineaccess.isExisting();

  await browser.switchToFrame(null);
  await browser.switchToParentFrame();
});

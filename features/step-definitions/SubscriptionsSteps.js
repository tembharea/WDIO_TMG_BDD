import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

const pages = {
  login: LoginPage,
};

When("Click on View Subscription Offer", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://secure-staging-ams64.telegraph.co.uk/customer/subscribe/?icid=myaccount"
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const ViewSubofferBTN = await $('//a[text()="View subscription offers"]');
  await ViewSubofferBTN.waitForDisplayed({ timeout: 50000 });
  await ViewSubofferBTN.click();
});

Then("Validate user is redirected to Payment page", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const paymentText = await $('//h2[text()="Express Checkout"]');
  await paymentText.waitForDisplayed({ timeout: 50000 });
  await paymentText.isExisting();
});

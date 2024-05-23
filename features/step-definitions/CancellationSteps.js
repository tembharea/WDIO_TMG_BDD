import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

const pages = {
  login: LoginPage,
};

const cancelYourSubscriptionBtn = await $(
  '//button[text()="Cancel your subscription"]'
);
const firstContinueToCancelBtn = await $('//a[text()="Continue to cancel"]');
const continueToCancelBtn = await $('//span[text()="Continue to cancel"]');
const cancelMySubscriptionBtn = await $('//a[text()="Cancel my subscription"]');
var RecordSubID;

Then("Click on Cancel your subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await cancelYourSubscriptionBtn.waitForDisplayed({ timeout: 20000 });
  await cancelYourSubscriptionBtn.isExisting();
  await cancelYourSubscriptionBtn.click();
});

Then("Click on Continue to cancel button on the downgrade offers", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await continueToCancelBtn.waitForDisplayed({ timeout: 20000 });
  await continueToCancelBtn.isExisting();
  await continueToCancelBtn.click();

  await browser.pause(200);

  await continueToCancelBtn.waitForDisplayed({ timeout: 60000 });
  await continueToCancelBtn.click();

  await browser.pause(200);

  await continueToCancelBtn.waitForDisplayed({ timeout: 60000 });
  await continueToCancelBtn.click();
  await browser.pause(200);
  // await continueToCancelBtn.waitForDisplayed({ timeout: 60000 });
  // await continueToCancelBtn.click();
  // await browser.pause(200);
});

Then("Finally click on Cancel my subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const lastChancePopup = await $(
    '//h1[text()="Last chance. Stay with us and save."]'
  );
  // await browser.pause(55000);

  await browser.pause(5000);
  const cancelMySubscriptionBtnNew = await $(
    '//span[text()="Continue to cancel"]'
  );
  await cancelMySubscriptionBtnNew.isExisting();
  await cancelMySubscriptionBtnNew.doubleClick();
  await browser.pause(5000);
  await lastChancePopup.waitForDisplayed({ timeout: 50000 });
  await lastChancePopup.isExisting();
  await cancelMySubscriptionBtn.isExisting();
  await cancelMySubscriptionBtn.doubleClick();
  await browser.pause(5000);
  //  const cancelledverificaion = await $('//h1[text()="Your subscription has been cancelled"]');
  //  await cancelledverificaion.waitForDisplayed({ timeout: 50000 });
});

Then("User clicks on Subscriptions tab", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SFSubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SFSubscriptionTab.waitForDisplayed({ timeout: 20000 });
  await SFSubscriptionTab.click();
});

Then(
  "Validate the status of the subscription as Pending Cancellation before the Cancellation process",
  async () => {
    const SubsValidation = await $(
      '(//span[@class="slds-truncate slds-m-right--xx-small"]//following::span[@class="lds-shrink-none slds-m-right--xx-small"])[2]'
    );
    await SubsValidation.waitForDisplayed({ timeout: 50000 });
    await SubsValidation.isExisting();
    await browser.pause(1000);
    const statusPendingCancellation = await $(
      '//span[text()="Pending Cancellation"]'
    );
    await statusPendingCancellation.waitForDisplayed({ timeout: 50000 });
    await statusPendingCancellation.isExisting();
    await browser.pause(5000);
    const SubID = await $(
      '//span[@title="Z-Subscriptions"]//following::span[contains(text(),"A-")]'
    );

    RecordSubID = await SubID.getText();
    console.log("Recordsubid2" + RecordSubID);
    await browser.pause(5000);
  }
);

Then(
  "Validate the status of the subscription view in Zuora as Cancelled after the Cancellation process",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const statusViewInZuora = await $(
      '//lightning-base-formatted-text[text()="Cancelled"]'
    );
    await statusViewInZuora.waitForDisplayed({ timeout: 50000 });
    await statusViewInZuora.isExisting();
    await browser.pause(5000);
  }
);

Then(
  "Click on Continue to cancel button to verify the availability of one downgrade offer",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await continueToCancelBtn.waitForDisplayed({ timeout: 20000 });
    await continueToCancelBtn.isExisting();
    await continueToCancelBtn.click();

    await continueToCancelBtn.waitForDisplayed({ timeout: 60000 });
    await continueToCancelBtn.click();

    await continueToCancelBtn.waitForDisplayed({ timeout: 20000 });
    await continueToCancelBtn.click();
    await browser.pause(100);

    const verifydownsellofer = await $(
      '//h1[contains(text(),"here’s our final offer")]'
    );
    await verifydownsellofer.waitForDisplayed({ timeout: 50000 });
  }
);

Then(
  "Click on Continue to cancel button to verify the availability of one downsell offer",
  async () => {
    await browser.pause(100);
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    await continueToCancelBtn.waitForDisplayed({ timeout: 20000 });
    await continueToCancelBtn.isExisting();
    await continueToCancelBtn.click();

    await continueToCancelBtn.waitForDisplayed({ timeout: 60000 });
    await continueToCancelBtn.click();

    const verifydownsellofer = await $(
      '//h1[contains(text(),"stay with us and save")]'
    );
    await verifydownsellofer.waitForDisplayed({ timeout: 50000 });
  }
);

Then("Validate if user has active subscription", async () => {
  const SubsValidation = await $(
    '(//span[@class="slds-truncate slds-m-right--xx-small"]//following::span[@class="lds-shrink-none slds-m-right--xx-small"])[2]'
  );
  await SubsValidation.waitForDisplayed({ timeout: 50000 });
  await SubsValidation.isExisting();
  await browser.pause(1000);
  const statusActive = await $('(//span[@title="Active"])[1]');
  await statusActive.waitForDisplayed({ timeout: 50000 });
  await statusActive.isExisting();
  const SubID = await $(
    '//span[@title="Z-Subscriptions"]//following::span[contains(text(),"A-")]'
  );

  RecordSubID = await SubID.getText();
  console.log("Recordsubid1" + RecordSubID);
  await browser.pause(5000);
});

Then("Search the subscription in Zuora", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  await browser.url(
    "https://apisandbox.zuora.com/platform/apps/com_zuora/subscription?~(clearFilter~true)"
  );
  const ZuoraCustRecordSerchBox = await $(
    '//input[@placeholder="Starts with text"]'
  );
  await ZuoraCustRecordSerchBox.waitForDisplayed({ timeout: 50000 });
  console.log("Recordsubid2" + RecordSubID);
  await ZuoraCustRecordSerchBox.setValue(RecordSubID);
  await browser.keys("Enter");
  await browser.pause(40000);
});

Then(
  "validate the status of the subscription before cancellation",
  async () => {
    const zuoraStatusActive = await $('//span[text()="Active"]');
    await zuoraStatusActive.waitForDisplayed({ timeout: 50000 });
    await zuoraStatusActive.isExisting();
  }
);

Then("validate the status of the subscription after cancellation", async () => {
  const zuoraStatusCancelled = await $('//span[text()="Cancelled"]');
  await zuoraStatusCancelled.waitForDisplayed({ timeout: 50000 });
  await zuoraStatusCancelled.isExisting();
  const zuoraSubID = await $('//span[contains(text(),"A-")]');
  await zuoraSubID.click();
  const zuoraCancelled = await $('//span[contains(text(),"CANCELLED")]');
  await zuoraCancelled.waitForDisplayed({ timeout: 50000 });
  await zuoraCancelled.isExisting();
});

Then("Click on Restart your subscription", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const restartSubscriptionButton = await $(
    '//button[text()="Restart your subscription"]'
  );
  await restartSubscriptionButton.waitForDisplayed({ timeout: 50000 });
  await restartSubscriptionButton.isExisting();
  await restartSubscriptionButton.click();
  await browser.pause(5000);
});

Then("Verify Subscription is restarted successfully", async () => {
  await browser.pause(100);
  await browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // await cancelMySubscriptionBtn.waitForDisplayed({ timeout: 40000 });
  // await cancelMySubscriptionBtn.isExisting();
  // const yourCurrentPlan = await $('//span[text()="Your current plan"]');
  // await yourCurrentPlan.waitForDisplayed({ timeout: 50000 });
  // await yourCurrentPlan.isExisting();
});

Then("Cancel Subscription in Zoura", async () => {
  // Write code here that turns the phrase above into concrete actions
  await browser.pause(100);

  const zuoraSubCancel = await $('//span[text()="Cancel"]');
  await zuoraSubCancel.waitForDisplayed({ timeout: 50000 });
  await zuoraSubCancel.isExisting();
  await zuoraSubCancel.click();
  await browser.pause(5000);

  const startOfCurrentTerm = await $(
    '//div[text()="Cancellation Date"]//following::label[3]'
  );
  await startOfCurrentTerm.waitForDisplayed({ timeout: 50000 });
  await startOfCurrentTerm.isExisting();
  await startOfCurrentTerm.click();

  const cancelsubmitsub = await $('//button[text()="Submit"]');
  await cancelsubmitsub.waitForDisplayed({ timeout: 50000 });
  await cancelsubmitsub.isExisting();
  await cancelsubmitsub.click();

  const cancelsubStatus = await $('//span[text()="Cancelled"]');
  await cancelsubStatus.waitForDisplayed({ timeout: 50000 });
  await cancelsubStatus.isExisting();

  await browser.pause(5000);
});

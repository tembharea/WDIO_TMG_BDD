import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";
import { CucumberJsJsonReporter } from "wdio-cucumberjs-json-reporter";

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
var varurl;
const BonusCustEmail = rndstr2 + "bonus@telegraph.co.uk";

// Given("Validate Digital Subscriber has 1 bonus account", async () => {
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   const BonusTile = await $(
//     '//a[@href="https://www.telegraph.co.uk/"]//following::button[@class="account-section-card"][1]'
//   );
//   await BonusTile.waitForDisplayed({ timeout: 50000 });
//   await BonusTile.click();

//   const BonusCopyBtn = await $('//button[text()="Copy"]');
//   //await BonusCopyBtn.waitForDisplayed({ timeout: 50000 });
//   await BonusCopyBtn.isExisting({ timeout: 50000 });
// });
// Given("Validate 1 bonus promo code is generated", async () => {
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   await browser.pause(5000);
//   const BonusUrl = await $('//input[@class="express-input-control"]');
//   await BonusUrl.waitForDisplayed({ timeout: 50000 });
//   await BonusUrl.isExisting({ timeout: 50000 });
// });

// Given("Validate bonus promo code is Unused", async () => {
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );
//   const BonusCopyLink = await $('//input[@class="express-input-control"]');
//   await BonusCopyLink.waitForDisplayed({ timeout: 50000 });
//   await BonusCopyLink.isExisting({ timeout: 50000 });
// });
Given("I copy the bonus url", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.scroll(0, 200);
  const urlbutton = await $('//input[@class="express-input-control"]');
  await urlbutton.waitForDisplayed({ timeout: 50000 });
  const BonusUrlStr = await $('//input[contains(@value, "https://secure")]');
  await BonusUrlStr.waitForDisplayed({ timeout: 50000 });
  varurl = await BonusUrlStr.getAttribute("value");
  console.log(varurl);
});
Given("I open the bonus URL", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(varurl);
  browser.pause(5000);
});

Given("I fill in new bonus email", async () => {
  await browser.pause(500);
  await browser.refresh();
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  //await browser.refresh();
  await browser.pause(500);
  //await browser.refresh();
  const EmailInput = await $('//input[@id="email"]');
  await EmailInput.waitForDisplayed();
  await EmailInput.doubleClick();
  await EmailInput.click();
  await EmailInput.click();
  await browser.pause(100);
  await EmailInput.setValue(BonusCustEmail);

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + BonusCustEmail,
    "text/plain"
  );
});

Given("I validate bonus subscription is not redeem", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  const bonusvalidationtitle = await $(
    '//h1[text()="Activate your bonus subscription"]'
  );
  await bonusvalidationtitle.waitForDisplayed({ timeout: 50000 });
  await bonusvalidationtitle.isDisplayed();
});

Given(
  "I check the bonus subscription start date with current plan",
  async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    const digitalsubcheck = await $(
      '//div[@class="content"]//span[text()="Digital"]'
    );
    await digitalsubcheck.waitForDisplayed({ timeout: 50000 });
    await digitalsubcheck.isDisplayed();
    const startdate = await $(
      '//div[@class="tsno" and text()="You’ve been with us since "]'
    );
    await startdate.isDisplayed();
    await browser.pause(5000);
  }
);

Given("I Validate Payment details do not exist for Bonus account", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const yourpayment = await $(
    '//div[@class="account-link-wrapper"]//p[text()="We do not hold an active payment method for you."]'
  );
  await yourpayment.waitForDisplayed({ timeout: 50000 });
  await yourpayment.isDisplayed();
  await browser.pause(5000);
});

Then("Enter the Bonus Sub email id in the search box", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const SearchBarClick = await $(
    '//button[contains(@class,"slds-button slds-button_neutral search")]'
  );
  await SearchBarClick.waitForDisplayed({ timeout: 50000 });
  await SearchBarClick.click();
  await browser.pause(3000);

  const SearchBarInput = await $(
    '//div[contains(@class,"icon_left-right")]//input[@class="slds-input"]'
  );
  await SearchBarInput.waitForDisplayed({ timeout: 50000 });
  await SearchBarInput.setValue(BonusCustEmail);
  await browser.keys("Enter");

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + BonusCustEmail,
    "text/plain"
  );
});

When("Enter Bonus subscriber email in search box", async () => {
  await browser.pause(100);
  const pianoSearchBtnInput = await $('//button[@id="userMiningBtn"]');
  const pianoAdvanceSearchInput = await $('//input[@id="advanced-search"]');
  const pianoAdvanceSearchBTN = await $('//span[text()=" Search "]');
  const pianoUserSrchResultSelect = await $(
    '//*[@class="pn-table__cell pn-table__cell--head pn-table__cell--users-user sortable"]//following::div[@id="user-name-0"]'
  );

  await pianoSearchBtnInput.waitForDisplayed({ timeout: 50000 });
  await pianoSearchBtnInput.click();

  await pianoAdvanceSearchInput.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchInput.setValue(BonusCustEmail);

  await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
  await pianoAdvanceSearchBTN.click();

  await browser.pause(4000);
  await pianoUserSrchResultSelect.waitForDisplayed({ timeout: 50000 });
  await pianoUserSrchResultSelect.click();

  CucumberJsJsonReporter.attach(
    "Test ID used for Bonus Receiver is: " + BonusCustEmail,
    "text/plain"
  );
});

Given("I validate promo code is redeemed by bonus user", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const RemoveTheirAccess = await $(
    '//button[@class="card-button-big remove-bonus mini-spinner" and text()="Remove their access"]'
  );
  await RemoveTheirAccess.waitForDisplayed({ timeout: 50000 });

  const subredeemedby = await $('(//p[text()="Redeemed by "]//span)[1]');
  await subredeemedby.waitForDisplayed({ timeout: 50000 });
  await subredeemedby.isDisplayed({ timeout: 50000 });
});
Given(
  "I open the promocode from salesforce and verify the user name",
  async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
    const Showall = await $(
      '//div[@class="rlql-toggle slds-text-align_center"]//a'
    );
    //await RemoveTheirAccess.waitForDisplayed({ timeout: 50000 });
    await Showall.isDisplayed();
    await Showall.click();
    await browser.scroll(0, 200);
    const promocodes = await $(
      '//span[text()="Has Downgrade"]//following::span[contains(text(),"Promo")][1]'
    );
    await promocodes.waitForDisplayed({ timeout: 50000 });
    await promocodes.click();

    const PrmocodeName = await $(
      '(//th[@data-label="Promo Code Name"]//span)[2]'
    );
    await PrmocodeName.waitForDisplayed({ timeout: 50000 });
    await PrmocodeName.click();

    const redeemeremail = await $(
      '(//lightning-formatted-text//a[contains(text(),"tele")])[2]'
    );
    await redeemeremail.waitForDisplayed({ timeout: 50000 });
    await redeemeremail.isDisplayed();
  }
);

Given(
  "Validate 1 bonus promo code is generated in the salesforce",
  async () => {
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    await browser.scroll(0, 200);
    await browser.scroll(0, 200);
    await browser.scroll(0, 200);
    const Showall = await $('(//a[contains(text(), "Show All (24)" )])');
    await browser.pause(5000);
    //await RemoveTheirAccess.waitForDisplayed({ timeout: 50000 });
    await Showall.waitForDisplayed({ timeout: 5000 });
    //await Showall.isDisplayed();
    await Showall.click();

    await browser.pause(5000);

    await browser.scroll(0, 200);

    const promocodes = await $(
      '//span[text()="Has Downgrade"]//following::span[contains(text(),"Promo")][1]'
    );
    await browser.pause(5000);
    await promocodes.waitForDisplayed({ timeout: 50000 });
    await promocodes.click();

    const PrmocodeName = await $('//th[@data-label="Promo Code Name"]');
    await PrmocodeName.waitForDisplayed({ timeout: 50000 });
    await PrmocodeName.isDisplayed();
  }
);

Then("I open zuora", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.url(
    "https://apisandbox.zuora.com/platform/apps/com_zuora/account?~(clearFilter~true)"
  );
});

Then("In Zoura I validate subscriberID is present", async () => {
  //await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  // const ZuoraCustRecordSerchBox = await $(
  //   '//p[@class="MuiTypography-root MuiTypography-body1  css-t0fwix"]//span[contains(text(),"A-")]'
  // );
  // await ZuoraCustRecordSerchBox.waitForDisplayed({ timeout: 50000 });
  // await ZuoraCustRecordSerchBox.isDisplayed();
  //await browser.keys("Enter");
});

Given("Validate bonus promo code is Unused in salesforce", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const BonusCopyLink = await $('//span[@title="Un-used"]');
  await BonusCopyLink.waitForDisplayed({ timeout: 5000 });
  await BonusCopyLink.isExisting({ timeout: 5000 });
});
Given("I activate bonus subscription", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const activatebonussubscription = await $(
    '//button[text()="Activate my subscription"]'
  );
  const exploreyourbenifitsbutton = await $(
    '//button[text()="Explore your benefits"]'
  );
  await browser.scroll(0, 200);
  await activatebonussubscription.waitForDisplayed({ timeout: 50000 });

  await browser.pause(2000);
  await browser.scroll(0, 200);
  await activatebonussubscription.click();
  await browser.pause(10000);
  await browser.scroll(0, 200);
  await exploreyourbenifitsbutton.waitForDisplayed({ timeout: 50000 });
  await browser.pause(4000);
  await exploreyourbenifitsbutton.click();
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Given("I close opened tabs from salesforce", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  let tabs = await $$(
    '//button[@class="slds-button slds-button_icon slds-button_icon-x-small slds-button_icon-container"]'
  );
  console.log(tabs);
  console.log(tabs.length);
  if (tabs.length > 0) {
    tabs.forEach((el) => {
      el.click();
    });
  }
});
Then("Validate Access details in Piano for Bonus user", async () => {
  await browser.pause(100);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const pianoAccessTablet = await $('(//span[contains(text(),"TABLET")])[1]');
  await browser.pause(4000);
  await pianoAccessTablet.waitForDisplayed({ timeout: 50000 });
  await pianoAccessTablet.isDisplayed();

  const pianoAccessWine = await $('(//span[contains(text(),"WINE")])[1]');
  await browser.pause(4000);
  await pianoAccessWine.waitForDisplayed({ timeout: 50000 });
  await pianoAccessWine.isDisplayed();
  await browser.scroll(0, 100);

  const pianoAccessPodcast = await $('(//span[contains(text(),"PODCAST")])[1]');
  await browser.pause(4000);
  await pianoAccessPodcast.waitForDisplayed({ timeout: 50000 });
  await pianoAccessPodcast.isDisplayed();
});

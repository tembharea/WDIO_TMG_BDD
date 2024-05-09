import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { Key } from "webdriverio";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import { start } from "chromedriver";

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

Then("Input CreditCard Payment details for puzzle ", async () => {
  //var parentWindow = browser.getWindowHandle();
  //console.log(parentWindow);
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  await browser.pause(5000);
  const checkoutpageIframe = await $('//iframe[@id="z_hppm_iframe"]');
  await browser.pause(5000);
  await browser.switchToFrame(checkoutpageIframe);

  const creditcardholdername = await $(
    '//input[@id="input-creditCardHolderName"]'
  );
  await creditcardholdername.waitForDisplayed();
  await creditcardholdername.doubleClick();
  await creditcardholdername.setValue("Test");
  await browser.scroll(0, 200);
  const creditcardholdernum = await $('//input[@id="input-creditCardNumber"]');
  await creditcardholdernum.waitForDisplayed();
  await creditcardholdernum.doubleClick();
  await creditcardholdernum.setValue("4444333322221111");
  await browser.scroll(0, 200);

  const creditcardExmonth = await $(
    '//select[@id="input-creditCardExpirationMonth"]'
  );
  await creditcardExmonth.waitForDisplayed();
  await creditcardExmonth.selectByAttribute("value", "12");

  const creditcardExyear = await $(
    '//select[@id="input-creditCardExpirationYear"]'
  );
  await creditcardExyear.waitForDisplayed();
  await creditcardExyear.selectByAttribute("value", "2025");

  const creditcardcvc = await $('//input[@id="input-cardSecurityCode"]');
  await creditcardcvc.waitForDisplayed();
  await creditcardcvc.doubleClick();
  await creditcardcvc.setValue("123");

  await browser.switchToFrame(null);

  const CardSubmitBtn = await $('//button[@id="express-card-cta"]');
  await CardSubmitBtn.waitForDisplayed({ timeout: 50000 });
  await CardSubmitBtn.click();

  await browser.pause(20000);

  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Given("I continue the flow till puzzle subscription onboarding", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );

  const afterPaymentFirstName = await $('//input[@id="firstName"]');
  const afterPaymentlastName = await $('//input[@id="lastName"]');
  const afterPaymentSubmitButton = await $('//button[@id="password_submit"]');

  try {
    await afterPaymentFirstName.waitForDisplayed({ timeout: 20000 });
    await afterPaymentFirstName.setValue("Akshat");
    await afterPaymentlastName.waitForDisplayed({ timeout: 10000 });
    await afterPaymentlastName.setValue("Tembhare");
    await afterPaymentSubmitButton.waitForDisplayed({ timeout: 10000 });
    await afterPaymentSubmitButton.click();
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(100);
    await browser.scroll(0, 200);
    // const continueButton = await $(
    //   '//div[@class="onboarding-sms-btns non-uk"]//button[text()="Continue"]'
    // );
    //button[text()="Continue"]
    const continueButton = await $('//button[text()="Continue"]');
    await continueButton.waitForDisplayed({ timeout: 40000 });
    await continueButton.click();

    const offerForPuzzleHeading = await $(
      '//h1[text()="Add Puzzles to your package"]'
    );
    await offerForPuzzleHeading.waitForDisplayed({ timeout: 50000 });
    await offerForPuzzleHeading.isDisplayed();

    const claimPuzzleOffer = await $('//button[@type="button"]');
    await claimPuzzleOffer.waitForDisplayed({ timeout: 50000 });
    await claimPuzzleOffer.click();

    const subscriptionConfirmation = await $(
      '//span[contains(text(),"has been successfully")]'
    );
    await subscriptionConfirmation.waitForDisplayed({ timeout: 50000 });
    await subscriptionConfirmation.click();

    const subContinueBtnn = await $(
      '//a[@href="https://www.telegraph.co.uk/"]//following::button[text()="Continue"]'
    );

    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();

    await subContinueBtnn.waitForDisplayed({ timeout: 50000 });
    await subContinueBtnn.click();

    // const pickwhrleftoff = await $(
    //   '//span[text()="Pick up where you left off"]'
    // );
    //a[@href="https://staging-ams64.telegraph.co.uk/"]
    const pickwhrleftoff = await $(
      '//a[@href="https://staging-ams64.telegraph.co.uk/"]'
    );
    await pickwhrleftoff.waitForDisplayed({ timeout: 50000 });
    await pickwhrleftoff.click();
    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );

    browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: "Message on failure",
      }
    );
  }
});

// Given("I verify puzzle subscription is added to benifits", async () => {
//   browser.waitUntil(
//     () => browser.execute(() => document.readyState === "complete"),
//     {
//       timeout: 60 * 1000, // 60 seconds
//       timeoutMsg: "Message on failure",
//     }
//   );

//   const puzzleBenifitsHeader = await $('//header[contains(text(),"Your subscriber benefits")]/..//header[contains(text(),"Telegraph Puzzles")]');
//   await puzzleBenifitsHeader.waitForDisplayed({ timeout: 50000 });

// });

Given("I verify puzzle subscription from my account details", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const digitalsub = await $(
    '//div[@class="content"]//span[contains(text(),"Digital")]'
  );
  await digitalsub.isDisplayed({ timeout: 50000 });

  const startDate = await $('(//div[@class="content"]//span)[4]');
  await startDate.isDisplayed({ timeout: 50000 });

  const puzzleSubscription = $(
    '//header[contains(text(),"Your Puzzles subscription")]'
  );
  await puzzleSubscription.isDisplayed({ timeout: 50000 });

  const tSNumber = await $('//div[contains(text(),"Subscriber number:")]');
  await tSNumber.isDisplayed({ timeout: 50000 });
});

Given("I verify puzzle subscription is active from salesforce", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const digitalStatus = await $(
    '//p//lightning-formatted-text[contains(text(),"Active")]'
  );
  await digitalStatus.isDisplayed({ timeout: 50000 });

  const SubscriptionTab = await $('//a[text()="Subscriptions"]');
  await SubscriptionTab.waitForDisplayed({ timeout: 50000 });
  await SubscriptionTab.click();

  const PuzzleSubProduct = await $(
    '//span[@title="Puzzles Annual Subscription"]'
  );
  await PuzzleSubProduct.isDisplayed({ timeout: 50000 });
});

Then("Validate Access details in Piano for puzzles user", async () => {
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

  const pianoAccessPodcast = await $('(//span[contains(text(),"PUZZLES")])[1]');
  await browser.pause(4000);
  await pianoAccessPodcast.waitForDisplayed({ timeout: 50000 });
  await pianoAccessPodcast.isDisplayed();
});

When(
  "Enter Digital subscriber email in search box and check user is present",
  async () => {
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
    await pianoAdvanceSearchInput.setValue(DigitalCustEmail);

    await pianoAdvanceSearchBTN.waitForDisplayed({ timeout: 50000 });
    await pianoAdvanceSearchBTN.click();

    await browser.pause(4000);
    await pianoUserSrchResultSelect.isDisplayed({ timeout: 50000 });
  }
);

Then("I logout from Zuora", async () => {
  await browser.url("https://apisandbox.zuora.com/apps/logout.do");
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
});

Given("I go to the zuora subscription details", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  const zuorasubidbutton = await $(
    '//p[@class="MuiTypography-root MuiTypography-body1  css-t0fwix"]//span[contains(text(),"A-")]'
  );
  await zuorasubidbutton.waitForDisplayed({ timeout: 50000 });
  await yourpayment.click();

  const zuorasubtext = await $(
    '//h5[@class="MuiTypography-root MuiTypography-h5 subscription-name css-1gsg9qa"]'
  );
  await zuorasubtext.waitForDisplayed({ timeout: 50000 });
  await zuorasubtext.isDisplayed();
});

Given("I do basic zuora validation on subscription level", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    await browser.scroll(0, 200);
    await browser.pause(4000);
    const termSetting = $('//div[@class=" value" and text()="Termed"]');
    await termSetting.isDisplayed({ timeout: 50000 });

    const subscriptionstartdate = await $(
      '//span[contains(@class,"subscription_start_")]/..//div[@class=" value"]'
    );
    await subscriptionstartdate.isDisplayed({ timeout: 50000 });

    const subscriptionenddate = $(
      '//span[contains(@class,"subscription_end_")]/..//div[@class=" value"]'
    );
    await subscriptionenddate.isDisplayed({ timeout: 50000 });

    const currentTerm = $(
      '//span[contains(@class,"current")]/..//div[@class=" value"]'
    );
    await currentTerm.isDisplayed({ timeout: 50000 });

    const currentTermStartDate = $(
      '//span[contains(@class,"term_start")]/..//div[@class=" value"]'
    );
    await currentTermStartDate.isDisplayed({ timeout: 50000 });

    const currentTermEnddate = $(
      '//span[contains(@class,"term_end")]/..//div[@class=" value"]'
    );
    await currentTermEnddate.isDisplayed({ timeout: 50000 });

    const renewalSetting = $(
      '//span[contains(@class,"renewal_setting")]/..//div[@class=" value" and text()="Renew with specific term" ]'
    );
    await renewalSetting.isDisplayed({ timeout: 50000 });

    const renewalTerm = $(
      '//span[contains(@class,"renewal_term")]/..//div[@class=" value" and text()="12 Month(s)"]'
    );
    await renewalTerm.isDisplayed({ timeout: 50000 });

    const autoRenewal = $(
      '//span[contains(@class,"auto_renew")]/..//div[@class=" value"]//p[text()="Enabled"]'
    );
    await autoRenewal.isDisplayed({ timeout: 50000 });
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(4000);
  }
});

Given("I do additional zuora validation on subscription level", async () => {
  browser.waitUntil(
    () => browser.execute(() => document.readyState === "complete"),
    {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: "Message on failure",
    }
  );
  try {
    await browser.scroll(0, 400);
    await browser.pause(4000);
    const additionalInfo = $('//button[text()="Additional Information"]');
    await additionalInfo.isDisplayed({ timeout: 50000 });

    const acquisitionChannel = $(
      '//span[contains(@class,"acquisition ")]/..//div[@class=" value" and text()="TCUK"]'
    );
    await acquisitionChannel.isDisplayed({ timeout: 50000 });

    const campaignCode = $(
      '//span[contains(@class,"campaign")]/..//div[@class=" value" and text()="118A"]'
    );
    await campaignCode.isDisplayed({ timeout: 50000 });

    const continent = $(
      '//span[contains(@class,"continent")]/..//div[@class=" value" and text()="AS"]'
    );
    await continent.isDisplayed({ timeout: 50000 });

    const country = $(
      '//span[contains(@class,"country")]/..//div[@class=" value" and text()="IN"]'
    );
    await country.isDisplayed({ timeout: 50000 });

    const priceRiseCancellation = $(
      '//span[contains(@class,"price rise")]/..//div[@class=" value" and text()="false"]'
    );
    await priceRiseCancellation.isDisplayed({ timeout: 50000 });

    const priceSegmentCode = $(
      '//span[contains(@class,"price segment")]/..//div[@class=" value" and text()="2021 RRP"]'
    );
    await acquisitionChannel.isDisplayed({ timeout: 50000 });

    const sourceSystem = $(
      '//span[contains(@class,"source system")]/..//div[@class=" value" and text()="GooglePlay"]'
    );
    await sourceSystem.isDisplayed({ timeout: 50000 });

    const subscriptionOrigin = $(
      '//span[contains(@class,"origin")]/..//div[@class=" value" and text()="Online"]'
    );
    await subscriptionOrigin.isDisplayed({ timeout: 50000 });

    const ratePlanTermType = $(
      '//span[contains(@class,"rate plan")]/..//div[@class=" value" and text()="Monthly"]'
    );
    await ratePlanTermType.isDisplayed({ timeout: 50000 });

    const supressCancellationEvent = $(
      '//span[contains(@class,"cancellation event")]/..//div[@class=" value" and text()="false"]'
    );
    await supressCancellationEvent.isDisplayed({ timeout: 50000 });

    const typeOfSubscription = $(
      '//span[contains(@class,"type of subscription")]/..//div[@class=" value" and text()="Standard"]'
    );
    (await typeOfSubscription).isDisplayed({ timeout: 50000 });
  } catch (error) {
    console.error("no such element");
  } finally {
    await browser.pause(4000);
  }
});

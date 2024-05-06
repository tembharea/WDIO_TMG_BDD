import fs from "node:fs/promises";
// Import the module
import { generate } from "multiple-cucumber-html-reporter";
import { isDate } from "node:util/types";
import { timeStamp } from "node:console";
import { CucumberJsJsonReporter } from "wdio-cucumberjs-json-reporter";
const jsonReports = process.cwd() + "/Reports/json";
//import { zip } from "zip-a-folder";
//import { zip } from "adm-zip";

// class TestMe {
//   static async main() {
//     await zip("./Reports/", "./Reports/archive.zip");
//   }
// }

//TestMe.main();
//const dayjs = require("dayjs");
// import pkg from "multiple-cucumber-html-reporter";
// const { dayjs } = pkg;
// const data = fs.readFileSync("./Reports/json/", {
//   encoding: "utf8",
//   flag: "r",
// });
// const runInfo = JSON.parse(data);
//const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
// Import the module
//import { generate } from 'multiple-cucumber-html-reporter'
//const report = require('multiple-cucumber-html-reporter');
export const config = {
  //port: 4444,
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //C:\Users\10703317\WDIO_Workspace\WDIO_TMG_BDD\features\SubscriptionAcquisitionDigital.feature
  specs: [
    "./features/**/ETE11_AccountcreationRegisterflow.feature",
    //   "./features/**/ETE3_SubscriptionAcquisitionDigitalPlus.feature",
    //   "./features/**/ETE7_SubscriptionAcquisitionPuzzles.feature",
    //"./features/**/ETE20_PuzzlesOneClickOnboarding.feature",
    //  "./features/**/ETE21_AddPuzzlesfromMyAccount.feature",
    //  "./features/**/ETE22_AddPuzzlesAsBolton.feature",
    //  "./features/**/ETE23_AddDigitalAsBoltonToPuzzles.feature",
    // "./features/**/ETE5_SubscriptionAcquisitionBonus.feature",
    //  "./features/**/ETE8_SubscriptionAcquisitionGifts.feature",
    //   "./features/**/ETE2_SubscriptionAcquisitionMyAccount.feature",
    //  "./features/**/ETE4_SubscriptionAcquisitionOnlineCancellation.feature",
    //  "./features/**/ETE10_SubscriptionAcquisitionDigital.feature",
    // "./features/**/ETE12_Backdated.feature",
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "120",
      //port: 61973,
      //"wdio:chromedriverOptions": {
      //binary:
      //"/chromedriver/win64-116.0.5845.96/chromedriver-win64/chromedriver.exe",
      //"C:/Users/10703317/WDIO_Workspace/WDIO_TMG_BDD/chromedriver/win64-116.0.5845.96/chromedriver-win64/chromedriver.exe",
      //v"./chromedriver/win64-116.0.5845.96/chromedriver-win64/chromedriver.exe",
      //"./chromedriverforlinux/chromedriver-linux64/chromedriver",
      //port: 61973,
      //args: ["whitelisted-ips", "allowed-origins"],
      //},
      "goog:chromeOptions": {
        // binary: "/chrome/win64-116.0.5845.96/chrome-win64/",
        args: [
          "disable-infobars",
          "disable-popup-blocking",
          "disable-notifications",
          "enable-automation",
          "--headless",
          "--disable-gpu",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--no-sandbox",
        ],
      },
      "cjson:metadata": {
        browser: {
          name: "chrome",
          version: "116",
        },
        // device: "MacBook Pro M2",
        // platform: {
        //   name: "OSX",
        //   version: "13.6.4",
        device: "Windows",
        platform: {
          name: "windows",
          version: "11",
        },
      },
    },
    //},
  ],

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 12000,
  //
  // Default request retries count
  connectionRetryCount: 2,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    //"selenium-standalone",
    // [
    //   "chromedriver",
    //   {
    //     outputDir: "./chromedriver/",
    //     //logFileName: "wdio-chromedriver.log",
    //     port: 9515,
    //     chromedriverCustomPath: "./chromedriver/",
    //   },
    // ],
    // ["safaridriver", {
    //     outputDir: './logs',
    //     logFileName: 'wdio-safaridriver.log'
    // }]
  ],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    "spec",

    [
      "cucumberjs-json",
      {
        jsonFolder: process.cwd() + "/Reports/json",
        //jsonFolder: "./Reports/CucumberReports/",
        //jsonFolder: process.cwd() + "/Reports/json",
        language: "en",
        disableHooks: true,
        reportFilePerRetry: false,
      },
    ],
    [
      "junit",
      {
        outputDir: "./Reports/JunitReport/",
        outputFileFormat: function (options) {
          // optional
          return `results-${options.cid}.${options.capabilities}.xml`;
        },
      },
    ],
    // [
    //   "multiple-cucumber-html",
    //   {
    //     jsonFolder: "./Reports/CucumberReports/",
    //     reportFolder: `"./Reports/CucumberReports/`,
    //     // ... other options, see Options
    //   },
    // ],
    // [
    //   "allure",
    //   {
    //     outputDir: "./Reports/allure-results/",
    //     disableWebdriverStepsReporting: false,
    //     disableWebdriverScreenshotsReporting: false,
    //   },
    // ],
    // [
    //   "junit",
    //   {
    //     outputDir: "./Reports/JunitReport/",
    //     outputFileFormat: function (options) {
    //       return "junit-report.xml";
    //     },
    //   },
    // ],
  ],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
      "./features/step-definitions/steps.js",
      "./features/step-definitions/PuzzlesSteps.js",
      "./features/step-definitions/BonusSteps.js",
      "./features/step-definitions/AcquisitionMyAccount.js",
      "./features/step-definitions/CancellationSteps.js",
    ],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 120000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: async () => {
    //CucumberJsJsonReporter.deleteDirectory(jsonReports);
    // var today = new Date();
    // cucumberReporterOptions.customData.data[0].value = `${env.name}`
    // cucumberReporterOptions.customData.data[1].value = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`
    fs.rm("./Reports/CucumberReports", { recursive: true, force: true });
    fs.rm("./Reports/json", { recursive: true, force: true });
    fs.rm("./Reports/JunitReport", { recursive: true, force: true });
    await browser.pause(600);
    fs.mkdir("./Reports/json", { recursive: true, force: true });

    //CucumberJsJsonReporter.createDirectory(jsonReports);
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  // before: function (capabilities, specs) {
  //   // npm install -g
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {object}                 context  Cucumber World object
   */
  // beforeScenario: function (world, context) {
  // },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {object}             context  Cucumber World object
   */
  // beforeStep: function (step, scenario, context) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {object}             context          Cucumber World object
   */
  // afterStep: async function (step, scenario, result, context) {
  //   var date = Date.now();
  //   //browser.saveScreenshot('./Reports/screenShots/Chrome - '+date+'.png')
  //   const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
  //   cucumberJson.attach(
  //     await browser.saveScreenshot(
  //       "./Reports/CucumberReports/SnapShots/Chrome - " + date + ".png"
  //     )
  //   );
  // },

  // afterStep: function afterStep(stepResult) {
  //   if (stepResult.status == "passed") {
  //     console.log("===============Step passed===============");
  //   } else {
  //     console.log("===============Step Failed===============");
  //     console.log("Feature : " + stepResult.feature);
  //     console.log("Scenario : " + stepResult.scenario);
  //     console.log("Step Text : " + stepResult.text);
  //     var d = new Date();
  //     var datetime =
  //       d.getDate() +
  //       "_" +
  //       (d.getMonth() + 1) +
  //       "_" +
  //       d.getFullYear() +
  //       "_" +
  //       d.getHours() +
  //       "_" +
  //       d.getMinutes() +
  //       "_" +
  //       d.getSeconds();
  //     var fileName =
  //       encodeURIComponent(stepResult.scenario.replace(/\s+/g, "-")) +
  //       "_" +
  //       datetime;
  //     var filePath = this.screenshotPath + fileName + ".png";
  //     browser.saveScreenshot(filePath);
  //     console.log("\n\t Screenshot location:", filePath, "\n");
  //   }
  // },

  // afterStep: (uri, feature, scenario, step, result) => {
  //     const cucumber = require('cucumber');
  //     if (result.status === cucumber.Status.FAILED) {
  //         console.log("FAILED");
  //         const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
  //         cucumberJson.attach(browser.takeScreenshot());
  //         var date = Date.now();
  //         cucumberJson.attach(browser.saveScreenshot('./Reports/CucumberReports/SnapShots/'));
  //     }
  // },

  afterStep: async function (scenario, step, result) {
    if (!result.passed) {
      const screenShot = await browser.takeScreenshot();
      //const screenShot = await browser.takeScreenshot();
      CucumberJsJsonReporter.attach(screenShot, "image/png");
    }
  },

  // afterStep: async function (scenario, step, result) {
  //   // if (!result.passed) {
  //   const screenShot = await browser.takeScreenshot();
  //   //const screenShot = await browser.takeScreenshot();
  //   CucumberJsJsonReporter.attach(screenShot, "image/png");
  //   //}
  // },

  /**
   *
   * Runs after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
   * @param {object}                 result           results object containing scenario results
   * @param {boolean}                result.passed    true if scenario has passed
   * @param {string}                 result.error     error stack if scenario failed
   * @param {number}                 result.duration  duration of scenario in milliseconds
   * @param {object}                 context          Cucumber World object
   */
  // afterScenario: function (world, result, context) {
  // },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {string}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {number} result 0 - command success, 1 - command error
   * @param {object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {object} exitCode 0 - success, 1 - fail
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  //const report = require('multiple-cucumber-html-reporter');
  onComplete: async function (exitCode, config, capabilities, results) {
    generate({
      jsonDir: "./Reports/json",
      reportPath: "./Reports/CucumberReports/",
      language: "en",
      disableHooks: true,
      reportFilePerRetry: false,
      displayDuration: true,
      customData: {
        title: "Run Info",
        data: [
          { label: "Project", value: "TMG Automation" },
          {
            label: "Execution Time",
            value: new Date().toLocaleString() + " " + "IST",
          },
          {
            label: "Release",
            value: "24.08",
          },
          {
            label: "Apps Tested",
            value: "Telegraph/Salesforce/Piano/Zuora/MPP",
          },
          {
            label: "Environment",
            value: "Staging",
          },
        ],
      },
    });
    //////zip creation
    // await browser.pause(5000);
    // TestMe.main();
    // zip(
    //   "./Reports/CucumberReports/CompleteReport.html",
    //   "./Reports/CucumberReports/archive.zip"
    // );
    //// var zip = new AdmZip();
  },

  //   const {After, Status} = require('cucumber');
  //   After((scenarioResult)=>{
  //     if (scenarioResult.result.status === Status.FAILED) {
  //         // It will add the screenshot to the JSON
  //         multipleCucumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png', 'after');
  //         // Or with
  //         multipleCucumberHtmlReporter.attach(browser.screenshot(), 'image/png', 'after');
  //     }
  //     return scenarioResult.status;
  // });

  //const report = require('multiple-cucumber-html-reporter');
  // onComplete: async () => {

  //     var today = new Date();
  //     let date = today.toDateString().substring(4).replace(/ /g, '')
  //     let time = today.toLocaleTimeString().replace(/:/g, '').replace(/ PM/g, '').replace(/ AM/g, '')
  //     cucumberReporterOptions.jsonDir = jsonReports;
  //     cucumberReporterOptions.customData.data[2].value = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`
  //     cucumberReporterOptions.reportPath = path.join(jsonReports.replace('/json', ''), `/${env.name.replace(/ /g, '')}E2ETestReport_${date}_${time}`);
  //     Reporter.createHTMLReport();
  //     generate({
  //         jsonDir: process.cwd() + "/Reports/json",
  //         reportPath: './Reports/CucumberReports/',
  //       });
  //     // fs.unlinkSync(`${cucumberReporterOptions.jsonDir}.json`) //Removes json file after html creation
  //   },

  /**
   * Gets executed when a refresh happens.
   * @param {string} oldSessionId session ID of the old session
   * @param {string} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};

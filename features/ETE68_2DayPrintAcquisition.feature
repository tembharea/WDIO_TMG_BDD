Feature: ETE 68 2 day Print Acquisition

    Scenario: TC_01:User purchasing 2 day Print Monthly subscription
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print2dayMontly email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Print Subshop Page
        Then  Click on Print2dayMontly Subscription
        Then  Print Tell Us about Yourslef details
        Then  Input MPP payment details for Print
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_02:Validate 2 day Print Monthly subscription details in Telegraph
        Given I launch login from homepage
        And   I fill in existing Print2dayMontly email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section
        Then  Validate Your Payment section
        When  Go to My Account page
        Then  Logout from Customer application


    Scenario: TC_03:Validate 2 day Print Monthly Subscription details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print2dayMontly email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_04:Validate 2 day Print Monthly Subscription details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the Print2dayMontly email id in the MPP search box
        # Then Open the Account Page in MPP
        # Then Validate Payment details in MPP
        Then Logout from MPP platform
    
    Scenario: TC_05:User purchasing 2 day Print Quarterly subscription
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print2dayQuarterly email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Print Subshop Page
        Then  Click on Print2dayQuarterly Subscription
        Then  Print Tell Us about Yourslef details
        Then  Input MPP payment details for Print
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_06:Validate 2 day Print Quarterly subscription details in Telegraph
        Given I launch login from homepage
        And   I fill in existing Print2dayQuarterly email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section
        Then  Validate Your Payment section
        When  Go to My Account page
        Then  Logout from Customer application


    Scenario: TC_07:Validate 2 day Print Quarterly Subscription details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print2dayQuarterly email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_08:Validate 2 day Print Quarterly Subscription details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the Print2dayQuarterly email id in the MPP search box
        # Then Open the Account Page in MPP
        # Then Validate Payment details in MPP
        Then Logout from MPP platform
Feature: ETE 69 7 day Print Renewal

Scenario: TC_01:Registrant Account creation from FE
        Given I launch login from homepage
        And   I fill in new Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        #Then  Logout from Customer application
        Then  I logout from customer app

Scenario: TC_02:Verify Registrant Account is reflecting in SF
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce

Scenario: TC_03:Offline Subscription Purchase
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Oflline 7Day print Sub Purchase
        Then Close Opened tabs in salesforce


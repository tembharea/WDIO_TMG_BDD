Feature: ETE 69 7 day Print Renewal

Scenario: TC_1.1:Registrant Account creation from FE
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.2:Verify Registrant Account is reflecting in SF
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce

Scenario: TC_1.3:Offline Subscription Purchase
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Oflline 7Day print Sub Purchase
        Then Close Opened tabs in salesforce

Scenario: TC_1.4:Validate Subscription Details are reflecting in Telegraph web app
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Expiry date of subscription before renewal
        Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.5:Validate Print Renewal Flow
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Go to Subscription Tab
        Then Print Renewal Flow Print Subscription status Active
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Go to Subscription Tab
        Then Print Renewal Flow Print Subscription status InRenewal
        Then Close Opened tabs in salesforce

Scenario: TC_1.6:Validate Subscription Details in Telegraph after Renewal
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Expiry date of subscription after renewal
        Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.7:Verify Print Account in SF after Renewal
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate two subscription are present in subscription tab
        Then Close Opened tabs in salesforce

Scenario: TC_1.8:Validate Print Renewal is successful
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Print Renewal is successful
        Then  Logout from Customer application
        #Then  I logout from customer app

        #########################################################################################################


Scenario: TC_1.1:Registrant Account creation from FE
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        # Then  I enter "right" first name and last name
        # When  I click continue button on registration page
        # Then  Validate HomePage
        # When  Go to My Account page
        # Then  Click on Manage Your Details button
        # Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.2:Verify Registrant Account is reflecting in SF
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce

Scenario: TC_1.3:Offline Subscription Purchase
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        # And  Oflline 7Day print Sub Purchase
        # Then Close Opened tabs in salesforce

Scenario: TC_1.4:Validate Subscription Details are reflecting in Telegraph web app
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Expiry date of subscription before renewal
        Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.5:Validate Print Renewal Flow
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Go to Subscription Tab
        Then Print Renewal Flow Print Subscription status Active second
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Go to Subscription Tab
        Then Print Renewal Flow Print Subscription status InRenewal
        Then Close Opened tabs in salesforce

Scenario: TC_1.6:Validate Subscription Details in Telegraph after Renewal
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Expiry date of subscription after renewal
        Then  Logout from Customer application
        #Then  I logout from customer app

Scenario: TC_1.7:Verify Print Account in SF after Renewal
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayRenewal email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate two subscription are present in subscription tab
        Then Close Opened tabs in salesforce

Scenario: TC_1.8:Validate Print Renewal is successful
        Given I launch login from homepage
        Then  I fill in existing Print7dayRenewal email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Print Renewal is successful
        Then  Logout from Customer application
        #Then  I logout from customer app
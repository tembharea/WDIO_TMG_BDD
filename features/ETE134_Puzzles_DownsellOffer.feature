Feature: ETE 134 Subscription Acquisition puzzles- and Downsell flow Test

    Scenario: TC_01:User purchasing puzzles subscription using Paypal
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new PuzzleOne email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Navigate to Puzzles Subscription option in View Subscription page
        Then  Select Annual plan of Puzzles
        Then  Validate user is redirected to Payment gateway page
        Then  Input paypal Payment details
        Then  Post Payment redirect to Puzzles
        Then  Validate Puzzles Homepage
        Then  Navigate to MyAccount from Puzzles Page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_02:User purchasing puzzles subscription using card
        Given I launch login from homepage
        And   I fill in new PuzzleTwo email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Navigate to Puzzles Subscription option in View Subscription page
        Then  Select Annual plan of Puzzles
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  Post Payment redirect to Puzzles
        Then  Validate Puzzles Homepage
        Then  Navigate to MyAccount from Puzzles Page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_03:Validate Puzzles Only Subscriber Homepage in Customer web app
        Given I launch login from homepage
        And   I fill in existing PuzzleTwo email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Validate Puzzles MyAccount Page
        Then  Logout from Customer application

    Scenario: TC_04:Validate Puzzles Only Subscriber subscription details in Customer web app
        Given I launch login from homepage
        And   I fill in existing PuzzleTwo email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section for puzzles
        Then  Logout from Customer application

Scenario: TC_05:Validate Registrant Exclusive Newsletter details in Customer web app
    Given I launch login from homepage
    Then  I fill in existing PuzzleTwo email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    Then  Validate HomePage
    When  Go to My Account page
    When  Navigate to My Newsletters page
    Then  Validate Exclusive newsletters
    Then  Logout from Customer application

Scenario: TC_06:Validate Puzzles Subscriber Payment details in Customer web app
    Given I launch login from homepage
    And   I fill in existing PuzzleTwo email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Payment section for Puzzles
    Then  Logout from Customer application

Scenario: TC_07:Validate Puzzles Subscriber data in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Puzzle subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano for Puzzles

Scenario: TC_08:Validate Digital Subscriber Print status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And  Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Verify the Print Status is "Inactive"
    Then Close Opened tabs in salesforce

Scenario: TC_09:Validate Digital status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Digital status is Active
    Then Close Opened tabs in salesforce

Scenario: TC_10:Validate Replatform Digital Status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Replatform Digital status is Active
    Then Close Opened tabs in salesforce

Scenario: TC_11:Validate Puzzles Subscriber name in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    Then Validate if user has any active subscription
    Then Validate the name in Salesforce for Puzzles
    Then Close Opened tabs in salesforce

Scenario: TC_12:Validate Puzzles Subscriber TS number in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    Then Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then Validate TS number is generated in Subscriber Number field
    Then Close Opened tabs in salesforce

Scenario: TC_13:Validate account Origin
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And  Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then Validate Account Origin is empty
    Then Close Opened tabs in salesforce

Scenario: TC_14:Validate Puzzles Subscriber Piano ID in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then Validate a GUID and PianoID are generated
    Then Close Opened tabs in salesforce

Scenario: TC_15:Validate account channel is Premium
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then Validate account channel is "Premium"
    Then Close Opened tabs in salesforce

Scenario: TC_16:Validate Billing Currency is GBP
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then Validate Billing Currency is GBP
    Then Close Opened tabs in salesforce

Scenario: TC_17:Validate Billing Account and invoice is created with 0 balance
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Payment tab
    Then Validate Billing Account balance
    Then Validate Invoice balance
    Then Close Opened tabs in salesforce

Scenario: TC_18:Validate Puzzles Subscriber Entitlements data in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    When User clicks on System tab
    Then Validate Entitlements are added for Puzzle subscription
    Then Close Opened tabs in salesforce

Scenario: TC_19:Validate Puzzles Subscriber Lock In Expiry in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate Lock in Expiry date
    Then Close Opened tabs in salesforce

Scenario: TC_20:Validate Puzzles Subscriber Type of Offer in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    #When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate Type of Offer for Puzzles
    Then Close Opened tabs in salesforce

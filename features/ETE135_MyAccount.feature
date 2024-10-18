Feature: ETE 135 My Account Tests

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

    Scenario: TC_01:User purchasing Digital 2024 plan Monthly with credit card
        Given I launch login from homepage
        And  Action Keys Set One
        When   I fill in new Digital email
        And  I click login-register button
        And   I enter "valid" register password
        And  I enter "right" first name and last name
        And  I click continue button on registration page
        And  Validate HomePage
        And  Go to My Account page
        And  Click on View Subscription Offers
        And  User clicks on Digital 2024 Monthly
        And  Validate user is redirected to Payment gateway page
        And  Input CreditCard Payment details
        And  User completes the purchase
        And   Validate onboarding journey for Digital 2024
        And  Go to My Account page
        Then  Click on Manage Your Details button
        And  Logout from Customer application  

      Scenario: TC_01:User purchasing Digital Plus Monthly plan with Paypal
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new DigitalPLusMPaypal email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase for DigitalPlus
        Then  Validate HomePage
        When  Go to My Account page
        Then  Logout from Customer application

     Scenario: TC_01:User purchasing Puzzles Gift subscription
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Gift email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Gift Subshop Page
        Then  Click on Gift Puzzles Subscription
        Then  Input Gift Address details
        Then  Input Receipent name details
        Then  Add Personal Touch message
        Then  Input MPP payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_02:Validate Promo Code for Gift is Generated
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Gift email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Promo Code is Generated
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_03:Redeem Gift Subscription
        Given I launch Gift Redeem URL
        When  Redemption of gift subscription
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC : Validate Payment Method Update for Puzzles Account
        Given I launch login from homepage
        And   I fill existing PuzzleOne email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Change Payment method details
        Then  Logout from Customer application

      Scenario: TC : Validate password Update for Puzzles Account
        Given I launch login from homepage
        And   I fill existing PuzzleOne email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Change password details
        Then  Login to piano and search for puzzles account
        Then  Validating Piano inbox for password Change
        Then Validating Password 
        Then  Logout from Customer application

    Scenario: TC_01:User purchasing Digital Plus Monthly plan with Paypal
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new DigitalPLusMPaypal email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase for DigitalPlus
        Then  Validate HomePage
        When  Go to My Account page
        Then  Logout from Customer application

    Scenario: TC_02:User purchasing Digital Plus Annual plan with Paypal
        Given I launch login from homepage
        And   I fill in new DigitalPLusAPaypal email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Annual
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase for DigitalPlus
        Then  Validate HomePage
        When  Go to My Account page
        Then  Logout from Customer application

    Scenario: TC_03:User Purchasing Digital Plus Plan Monthly as logged out registrant
        Given I launch Telegraph homepage
        And   I click on subscribeNow button on homepage
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        And   User Enters Email ID as a logged out registrant
        Then  Input CreditCard Payment details
        Then  Validate User is asked to create password
        And   User Enters First and Last with password
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_04:User Purchasing Digital Plus Plan Annual as logged out registrant
        Given I launch Telegraph homepage
        And   I click on subscribeNow button on homepage
        Then  User clicks on Digital Plus Plan Annual
        Then  Validate user is redirected to Payment gateway page
        And   User Enters Email ID as a logged out registrant Annual
        Then  Input CreditCard Payment details
        Then  Validate User is asked to create password
        And   User Enters First and Last with password
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_05:User purchasing Digital Plus Monthly plan with Credit Card
        Given I launch login from homepage
        And   I fill in new DigitalPlusCC email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase for DigitalPlus
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

Scenario: TC_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    Then  Action Keys Set One
    And   I fill in new digitalMPaypal email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  Click on View Subscription Offers
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application   

Scenario: TC_02:Validate Digital Monthly Sub bought via credit card details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalMPaypal email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    Then  Validate Your Payment section
    When  Go to My Account page
    Then  Logout from Customer application

Scenario: TC_03:Validate Digital Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypal in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital Monthly Plan in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_04:Validate Digital Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalMPaypal subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    Then LogOut from Piano


Scenario: TC_05:User purchasing Digital plan Annually with credit card
    Given I launch login from homepage
    And   I fill in new digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  Click on View Subscription Offers
    Then  User clicks on Digital Plan Annually
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

Scenario: TC_06:Validate Digital Annual Sub bought via CreditCard details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    Then  Validate Your Payment section
    When  Go to My Account page
    Then  Logout from Customer application

Scenario: TC_07:Validate Digital Annual Sub bought via CreditCard details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalACC in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital Annual Plan in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_08:ValidateDigital Annual Sub bought via CreditCard details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_09:User Purchasing Digital Plan Monthly as logged out registrant
    Given I launch Telegraph homepage
    And   I click on subscribeNow button on homepage
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    And   User Enters Email ID as a logged out registrant for Digital Monthly
    Then  Input CreditCard Payment details
    Then  Validate User is asked to create password
    And   User Enters First and Last with password
    Then  User completes the purchase as loggedout Registrant
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

Scenario: TC_10:Validate logged out registrant Digital Monthly Sub details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalLoggedOutUser in the search box of salesforce
    Then Open the Account Page
    # When User clicks on Details tab
    Then Validate subscription for digital Annual Plan in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_11:Validate logged out registrant Digital Monthly Sub details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter DigitalCustMRegistrant subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

 Scenario: TC_01:User purchasing 7 day Print Monthly subscription
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print7dayMontly email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Print Subshop Page
        Then  Click on Print7dayMontly Subscription
        # Then  Print Tell Us about Yourslef details
        # Then  Input MPP payment details for Print
        # When  Go to My Account page
        # Then  Click on Manage Your Details button
        # Then  Logout from Customer application

    Scenario: TC_02:Validate 7 day Print Monthly subscription details in Telegraph
        Given I launch login from homepage
        And   I fill in existing Print7dayMontly email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section
        Then  Validate Your Payment section
        When  Go to My Account page
        Then  Logout from Customer application


    Scenario: TC_03:Validate 7 day Print Monthly Subscription details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Print7dayMontly email id in the search box in salesforce
        Then Open the Account Page
        When User clicks on Details tab
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_04:Validate 7 day Print Monthly Subscription details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the Print7dayMontly email id in the MPP search box
        # Then Open the Account Page in MPP
        # Then Validate Payment details in MPP
        Then Logout from MPP platform
    
    Scenario: TC_05:User purchasing 7 day Print Quarterly subscription
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new Print7dayQuarterly email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Print Subshop Page
        Then  Click on Print7dayQuarterly Subscription
        # Then  Print Tell Us about Yourslef details
        # Then  Input MPP payment details for Print
        # When  Go to My Account page
        # Then  Click on Manage Your Details button
        # Then  Logout from Customer application

    Scenario: TC_06:Validate 7 day Print Quarterly subscription details in Telegraph
        Given I launch login from homepage
        And   I fill in existing Print7dayQuarterly email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section
        Then  Validate Your Payment section
        When  Go to My Account page
        Then  Logout from Customer application
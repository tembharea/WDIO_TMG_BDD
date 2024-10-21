Feature: ETE 143 Subscription Acquisition Digital 2024

Scenario: TC_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    And  Action Keys Set One
    When I fill in new digital2024 email
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
    And  Validate onboarding journey for Digital 2024
    And  Go to My Account page
    Then Click on Manage Your Details button
    And  Logout from Customer application  

Scenario: TC_01.1:Validate Digital 2024 Monthly via CreditCard details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_01.2:Validate Digital 2024 Monthly via CreditCard details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_1.3:Validate Digital 2024 Monthly via CreditCard details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_1.4:Validate Digital 2024 Monthly via CreditCard details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora   

Scenario: TC_02:User purchasing Digital plan Monthly with Paypal
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
    And  Input Paypal Payment details
    And  User completes the purchase
    And   Validate onboarding journey for Digital 2024
    And  Go to My Account page
    Then  Click on Manage Your Details button
    And  Logout from Customer application   

Scenario: TC_02.1:Validate Digital 2024 Monthly via Paypal details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_02.2:Validate Digital 2024 Monthly via Paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_2.3:Validate Digital 2024 Monthly via Paypal details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_2.4:Validate Digital 2024 Monthly via Paypal details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  

Scenario: TC_03:User purchasing Digital plan Annual with credit card
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
    And  User clicks on Digital 2024 Annual
    And  Validate user is redirected to Payment gateway page
    And  Input CreditCard Payment details
    And  User completes the purchase
    And   Validate onboarding journey for Digital 2024
    And  Go to My Account page
    Then  Click on Manage Your Details button
    And  Logout from Customer application  

Scenario: TC_03.1:Validate Digital 2024 Annual via CreditCard details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_03.2:Validate Digital 2024 Annual via CreditCard details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_3.3:Validate Digital 2024 Annual via CreditCard details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_3.4:Validate Digital 2024 Annual via CreditCard details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  

Scenario: TC_04:User purchasing Digital plan Annual with Paypal
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
    And  User clicks on Digital 2024 Annual
    And  Validate user is redirected to Payment gateway page
    And  Input Paypal Payment details
    And  User completes the purchase
    And   Validate onboarding journey for Digital 2024
    And  Go to My Account page
    Then  Click on Manage Your Details button
    And  Logout from Customer application   

Scenario: TC_04.1:Validate Digital 2024 Annual via Paypal details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_04.2:Validate Digital 2024 Annual via Paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_4.3:Validate Digital 2024 Annual via Paypal details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_4.4:Validate Digital 2024 Annual via Paypal details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  

Scenario: TC_05:User Purchasing Digital 2024 Monthly as logged out registrant
    Given I launch Telegraph homepage
    And   I click on subscribeNow button on homepage
    Then  User clicks on Digital 2024 Monthly
    Then  Validate user is redirected to Payment gateway page
    And   User Enters Email ID as a logged out registrant for Digital Monthly
    Then  Input CreditCard Payment details
    Then  Validate User is asked to create password
    And   User Enters First and Last with password
    Then  User completes the purchase as loggedout Registrant
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

Scenario: TC_05.1:Validate Digital 2024 Monthly via CreditCard details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_05.2:Validate Digital 2024 Monthly via CreditCard details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_5.3:Validate Digital 2024 Monthly via CreditCard details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_5.4:Validate Digital 2024 Monthly via CreditCard details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora   

Scenario: TC_06:User Purchasing Digital 2024 Annual as logged out registrant
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

Scenario: TC_06.1:Validate Digital 2024 Monthly via Paypal details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_06.2:Validate Digital 2024 Monthly via Paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_6.3:Validate Digital 2024 Monthly via Paypal details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_6.4:Validate Digital 2024 Monthly via Paypal details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  

Scenario: TC_07:User Purchasing Digital 2024 Monthly as logged out registrant
    Given I launch Telegraph homepage
    And   I click on subscribeNow button on homepage
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    And   User Enters Email ID as a logged out registrant for Digital Monthly
    Then  Input Paypal Payment details
    Then  Validate User is asked to create password
    And   User Enters First and Last with password
    Then  User completes the purchase as loggedout Registrant
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

Scenario: TC_07.1:Validate Digital 2024 Monthly via Paypal details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_07.2:Validate Digital 2024 Monthly via Paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_7.3:Validate Digital 2024 Monthly via Paypal details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_7.4:Validate Digital 2024 Monthly via Paypal details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  

Scenario: TC_08:User Purchasing Digital 2024 Annual as logged out registrant
    Given I launch Telegraph homepage
    And   I click on subscribeNow button on homepage
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    And   User Enters Email ID as a logged out registrant for Digital Monthly
    Then  Input Paypal Payment details
    Then  Validate User is asked to create password
    And   User Enters First and Last with password
    Then  User completes the purchase as loggedout Registrant
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application


Scenario: TC_08.1:Validate Digital 2024 Annual via Paypal details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitalACC email
    When  I click login-register button
    And   I enter "valid" register password
    And  I click login-register button
    And  Go to My Account page
    And  Click on Manage Your Details button
    Then  Validate Bonus Account do not exist for Digital 2024 sub
    And  Validate Your Subscription section
    And  Validate Your Payment section
    And  Validate Default Newsletter details for Digital 2024
    And  Validate Puzzles is not added by default in Digital 2024
    And  Go to My Account page
    And  Logout from Customer application

Scenario: TC_08.2:Validate Digital 2024 Annual via Paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital 2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital 2024 Plan in salesforce
    And  Validate Digital Status is Active
    And Validate Current Product Details
    And Validate Subscription Type Details
    And Validate Account Origin Details
    And Validate Account Channel Details
    And Validate Billing Currency Details
    And Validate Subscription Date and Tenure Details
    And Validate Invoice Details
    And Validate High level Subscription Details
    And Validate Payment details
    Then Close Opened tabs in salesforce

Scenario: TC_8.3:Validate Digital 2024 Annual via Paypal details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalACC subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_8.4:Validate Digital 2024 Annual via Paypal details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And Validate Auto Pay Details
    And Validate Subscription Page Details for Digital 2024 in Zuora
    And I logout from Zuora  
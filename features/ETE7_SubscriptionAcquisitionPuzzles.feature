Feature: ETE 7 Subscription Acquisition puzzles
    #This is ticket number 3206, now known in JIRA as ETE-7


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
    Then Validate the name in Salesforce for Puzzles
    Then Open the Account Page
    Then Close Opened tabs in salesforce

Scenario: TC_11A:Validate Puzzle subscription status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if user has any active subscription
    Then Close Opened tabs in salesforce

Scenario: TC_12:Validate Puzzles Subscriber TS number in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    Then Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate TS number is generated in Subscriber Number field
    Then Close Opened tabs in salesforce

Scenario: TC_13:Validate account Origin
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And  Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Account Origin is empty
    Then Close Opened tabs in salesforce

Scenario: TC_14:Validate Puzzles Subscriber Piano ID in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate a GUID and PianoID are generated
    Then Close Opened tabs in salesforce

Scenario: TC_15:Validate account channel is Premium
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate account channel is "Premium"
    Then Close Opened tabs in salesforce

Scenario: TC_16:Validate Billing Currency is GBP
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
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
    When User clicks on Details tab
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
    When User clicks on Details tab
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
    When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate Type of Offer for Puzzles
    Then Close Opened tabs in salesforce

Scenario: TC_21:Validate Puzzles Subscriber Payment details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    When User clicks on Payment tab
    Then Validate Default Payment Method for Puzzles in Payment Tab
    Then Validate CMRR matches with the price selected on telegraph customer app
    Then Close Opened tabs in salesforce

Scenario: TC_22:Validate External ID is craeted for Puzzles only user in salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    And  User Opens Subscription page
    Then Validate Subscription External ID is generated
    Then Close Opened tabs in salesforce

Scenario: TC_23:Validate subscription product name is Puzzles Monthly Subscription
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate if user has any subscription for puzzle in salesforce
    Then Validate Product name is Puzzles Monthly Subscription
    Then Close Opened tabs in salesforce

Scenario: TC_24:Validate the correct Price Segment Code is generated based on the offer
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    And  User Opens Subscription page
    Then Validate Price Segment code is generated
    Then Close Opened tabs in salesforce

Scenario: TC_25:Validate Acquisition Channel is set to TCUK
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    And  User Opens Subscription page
    Then Validate Acquisition Channel is set to TCUK
    Then Close Opened tabs in salesforce

Scenario: TC_26:Validate Promo Code field has generated the correct offer name which was used in the frontend URL
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Puzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    And  User Opens Subscription page
    Then Validate Promo Code is generated for PuzzlesOnly
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_27:Validate Name and Account number in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Name and Account number in Zoura
    Then I logout from Zuora

Scenario: TC_28:Validate Payment details in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Payment details for Puzzles in Zoura
    Then I logout from Zuora

Scenario: TC_29:Validate Auto Pay details in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Auto Pay details in Zoura
    Then I logout from Zuora

Scenario: TC_30:Validate Term setting and current term in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Term setting and current term in Zoura
    Then I logout from Zuora

Scenario: TC_31:Validate Subscription and Curent term dates in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Subscription and Curent term dates in Zoura
    Then I logout from Zuora

Scenario: TC_32:Validate Renewal Settings, term and auto Renew
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Renweal Settings
    And  Valiadate Renewal term
    And  Validate AutoRenew
    Then I logout from Zuora

Scenario: TC_33:Validate Price Segment Code and Promo code in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura Subscription Page for Puzzles
    And  Open Subscription in Zoura for Puzzles
    Then Validate Price Segment code in Zoura
    And  Validate Promo code in Zoura
    Then I logout from Zuora

Scenario: TC_34:Validate Price Rise Cancellation in Zoura
    When I launch Zoura application
    Then Login to Zoura
    And  Enter Subscription ID in search box
    Then Validate Price Rise Cancellation in Zoura
    Then I logout from Zuora

Scenario: TC_35:Validate Source System in Zoura
    When I launch Zoura application
    Then Login to Zoura
    And  Enter Subscription ID in search box
    Then Validate Source System in Zoura
    Then I logout from Zuora













# To complete a puzzles MONTHLY and ANNUAL acquisition on online flow Using a Valid Email/facebook/google/apple
# Types of users:
# Anonymous user (with no TMG account)
# Registrant user Logged in flow and Logged out flow
# Flow:
# User clicks subscribe now from home page
# User clicks ‘puzzles’ CTA on Subshop and is taken to puzzles Subshop
# User clicks ‘pay monthly or pay annually’ for puzzles subscription
# If user is an registrant in a logged in state then user is taken directly to payment page (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user is logged out registrant or a anonymous then users enters Valid Email/facebook/google/apple and continues
# User enters valid payment methods (credit card, Debit card, Paypal and Direct debit) (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user ANONYMOUS users enters first and last name and creates password. If user is an REGISTRANT in a LOGGED OUT STATE then user enters password to continue. If user is an REGISTRANT in a LOGGED in STATE then user is taken directly to The Puzzles site.
# MyAccount validations:
# Validate user is a Puzzles subscriber on MyAccount page
# Validate there is a active subscription
# Validate first/last name and email
# Validate you subscription details pulls the correct data from Salesforce including TS number, Start date, price, next billing date and type of subscription.
# Validate correct payment method is stored
# Validate Exclusive newsletters have a Sign up CTA and not a ADD CTA
# Piano Validations:
# Navigate to piano
# click users
# From dropdown click all users and enter email in search bar
# Validate user is in piano
# Validate member since field matches the date the subscription was taken out
# validate subscription has the correct Access (Entitlements) Puzzles
# Validate user has a Piano ID generated and the same ID is passed to Salesforce
# Salsforce validations:
# OnAccount level in details Tab
# validate name
# Validate TS number is generated in Subscriber Number field
# Validate a GUID (SAM) is generated
# Validate a piano ID is generated and matches the ID in piano
# Validate Digital status is Active
# Validate Replatform Digital Status is Active
# Validate Current product is Puzzles
# Validate current subscription type is Standard
# Validate account record type is Registrant
# Validate Print Status is Inactive
# Validate account Origin is express_checkout (If user is a registrant then the account origin field is BLANK)
# Validate account channel is Premium
# Validate Billing Currency is GBP
# OnAccount level in Subscriptions Tab
# Validate a active subscription is created
# Validate the subscription has a 3 month Lock-In Expiry date from the date created if the type of offer was a free trial
# Validate subscription product name is Puzzle Annual or Puzzle Monthly
# Validate status is active
# Validate subscription start date is set to the day the subscription was taken out
# Validate subscription end date has a 12 month duration from when it was taken out
# OnAccount level in System Tab
# Validate that the following entitlements are added in the current entitlements table
# Puzzles
# OnAccount level in Payment Tab
# Validate Billing Accounts is created
# Validate Invoice is created
# OnSubscription level (This is when you click on the actual subscription)
# Validate account billing preview is generated accurately based on the subscription offer
# Validate type of subscriptions is standard
# Validate status is Active
# Validate Zuora subscription status is Active\
# Validate Auto renew is set to true
# Validate external ID is generated
# Validate Initial Subscription Price is £0.00 if free trial
# Validate On-Going Subscription Price, based on offer
# Validate subscription start date is the same as the day the subscription was taken out
# Validate subscription end date is 12 months from the start date
# Validate subscription renewal date is 12 months from the start date and matches the end date
# Validate Service Activation Date and Contract Effective Date is the same as the subscription start date
# Validate Next Charge Date is 1 month after subscription start date for a monthly subscription
# Validate Next Charge Date is 1 year after subscription start date for a yearly subscription
# Validate Subscription Product is Puzzles Monthly Subscription or Puzzles Annual subscription
# Validate Subscription Rate Plan Term Type Monthly or Annual
# Validate Campaign Code is generated based on the offer name
# Validate Promo Code field has generated the correct offer name which was used in the frontend URL
# Validate the correct Price Segment Code is generated based on the offer
# Validate Acquisition Channel is set to TCUK
# Validate Subscription Origin is set to Online
# Validate Current Payment Method is set to whatever payment method was used in the frontend
# Validate Current Payment Status is set to Active
# Validate Zuora Id is generated
# Zuora validation On Account level
# Validate name
# Validate Account number is generated
# Validate Auto-Pay is set to Yes
# Validate default payment method is set to what was used on he front-end
# Validate electronic payment method
# Validate Subscription Number/CMRR/List Of Products/Contract Effective Date/Next Renewal Date/Status based on subscription offer and started date.
# Under Transactions validate Invoice Date, Invoice number, Due Date, Total Amount and Balance
# Zuora validation On Subscription level
# Validate the following fields
# Term Setting = Termed
# Subscription Start Date
# Subscription End Date
# Current Term = 12 Month(s)
# Current Term Start Date
# Current Term End Date
# Renewal Settings = Renew with specific term
# Renewal Term = 12 Month(s)
# Auto Renew = Enabled
# Acquisition Channel = TCUK
# Campaign Code = (This is based on the offer/product)
# Cancellation Method = Direct
# Continent = EU (depends on geo location)
# Country = GB (depends on geo location)
# FC_Puzzle = None
# Price Rise Cancellation = false
# Price Segment Code = 2021 RRP
# Promo Code = (based on offer url in the frontend)
# Source System = GooglePlay
# Subscription Origin = Online
# Subscription Rate Plan Term Type = Monthly or Annually
# Suppress Cancellation Event = false
# Suppress Created Event = false
# Type of Subscription = Standard
# Product = Website+ UK (based on offer taken)
# Rate Plan = Open Offer - Monthly or Annual
Feature: ETE 10 Subscription Acquisition Digital monthly & Annual
    #This is ticket number 3138, now known in JIRA as ETE-10
    #Scenario count : 44 as of 3rd Jan 2024

Scenario: TC_01:User purchasing Digital plan Monthly with Paypal
    Given I launch login from homepage
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
    Then  Input paypal Payment details
    Then  User completes the purchase
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application   

Scenario: TC_02:Validate Digital Monthly Sub bought via paypal details in Telegraph
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

Scenario: TC_03:Validate Digital Monthly Sub bought via paypal details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypal in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digital Monthly Plan in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_04:Validate Digital Monthly Sub bought via paypal details in Piano
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
    # Then Open the Account Page
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

# Scenario: TC_12:User Purchasing Digital Plan Annually as logged out registrant
#     Given I launch Telegraph homepage
#     And   I click on subscribeNow button on homepage
#     Then  User clicks on Digital Plan Annually
#     Then  Validate user is redirected to Payment gateway page
#     And   User Enters Email ID as a logged out registrant for Digital Annually
#     Then  Input CreditCard Payment details
#     Then  Validate User is asked to create password
#     And   User Enters First and Last with password
#     Then  User completes the purchase as loggedout Registrant
#     When  Go to My Account page
#     Then  Click on Manage Your Details button
#     Then  Logout from Customer application

# Scenario: TC_13:Validate logged out registrant Digital Annually Sub details in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the digitalLoggedOutDSAUser in the search box of salesforce
#     # Then Open the Account Page
#     # When User clicks on Details tab
#     Then Validate subscription for digital Annual Plan in salesforce
#     Then Close Opened tabs in salesforce

# Scenario: TC_14:Validate logged out registrant Digital Annually Sub details in Piano
#     Given User opens Piano URL
#     When User logins to Piano account
#     When Navigate to All Users page
#     And  Enter DigitalCustDSARegistrant subscriber email in search box
#     Then Validate Registration date in Piano
#     Then Validate Piano UiD
#     Then Validate Access details in Piano
#     Then LogOut from Piano

Scenario: TC_12:User purchasing Digital plan with any working payment method
    Given I launch login from homepage
    And   I fill in new digital email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  Click on View Subscription Offers
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    Then  Input paypal Payment details
    Then  User completes the purchase
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application  

Scenario: TC_13:Validate Digital Subscriber has One Bonus Account in Telegraph app
    Given I launch login from homepage
    And   I fill in existing digital email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Validate Digital Subscriber has 1 bonus account
    When  Go to My Account page
    Then  Logout from Customer application

Scenario: TC_14:Validate Digital subscription and Payment details in Customer web app
    Given I launch login from homepage
    And   I fill in existing digital email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    Then  Validate Your Payment section
    When  Go to My Account page
    Then  Logout from Customer application

# Scenario: TC_18:Validate Digital Subscriber Newsletter details in Customer web app
#     Given I launch login from homepage
#     And   I fill in existing digital email
#     When  I click login-register button
#     When  Go to My Account page
#     When  Navigate to My Newsletters page
#     Then  Validate The From The Editor Newsletters is added by default in customer app
#     Then  Validate Subscriber rewards is added by default in customer app
#     When  Go to My Account page
#     Then  Logout from Customer application

# Scenario: TC_19:Validate Digital subscriber Exclusive Newsletter details in Customer web app
#     Given I launch login from homepage
#     And   I fill in existing digital email
#     When  I click login-register button
#     When  Go to My Account page
#     When  Navigate to My Newsletters page
#     Then  Validate Exclusive newsletters have signup CTA or not
#     When  Go to My Account page
#     Then  Logout from Customer application

Scenario: TC_15:Validate Digital Subscriber data in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Digital subscriber email in search box
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_16:Validate Digital Subscriber Print status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Verify the Print Status is "Inactive"
    Then Close Opened tabs in salesforce

Scenario: TC_17:Validate Digital Subscriber account channel type in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Validate the name in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate account channel is "Premium"
    Then Close Opened tabs in salesforce

Scenario: TC_18:Validate Digital Subscriber subscription status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate subscription for digitalsub in salesforce
    #Then Validate if user has active subscription Digital subscription
    Then Close Opened tabs in salesforce

Scenario: TC_19:Validate Digital Subscriber newsletters in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Verify The From The Editor Newsletter is added by default
    #Then Verify Subscriber rewards is added by default
    Then Close Opened tabs in salesforce

Scenario: TC_20:Validate Digital Subscriber has 1 bonus account in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate 1 bonus promo code is generated
    Then Validate bonus promo code is Unused
    Then Close Opened tabs in salesforce

Scenario: TC_21:Validate Digital Subscriber billing Currency in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Billing Currency is GBP
    Then Close Opened tabs in salesforce

Scenario: TC_22:Validate Digital Subscriber current plan in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Current plan is Website UK
    Then Close Opened tabs in salesforce

Scenario: TC_23:Validate Digital Subscriber Subscription start and end date in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Subscriptions tab
    Then Validate Active subscription is created
    Then Validate Subscription start date
    Then Validate Subscription end date
    Then Close Opened tabs in salesforce

Scenario: TC_24:Validate Digital Subscriber social acoount data in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    Then Verify if registrant signed up via email then validate no Social Account is linked
    Then Close Opened tabs in salesforce

Scenario: TC_25:Validate Digital Subscriber newsletters data in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Newsletter tab
    Then Validate The From The Editor Newsletters is added
    #Then Validate Subscriber rewards is added
    Then Close Opened tabs in salesforce

Scenario: TC_26:Validate Digital Subscriber product name in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Subscriptions tab
    Then Validate Subscription product name is Website Monthly
    Then Close Opened tabs in salesforce

Scenario: TC_27:Validate Digital Subscriber Entitlements data in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on System tab
    Then Validate Entitlements are added for digital subscription
    Then Close Opened tabs in salesforce

Scenario: TC_28:Validate Digital Subscriber type of subscription in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    Then Validate type of subscription is standard
    Then Close Opened tabs in salesforce

Scenario: TC_29:Validate Digital Subscriber Zuora details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on the Subscription
    Then Validate Zoura subscription status is active
    Then Close Opened tabs in salesforce

Scenario: TC_30:Validate Digital Subscriber billing account is created in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Payment tab
    Then Validate Billing account is created
    Then Invoice is created
    Then Close Opened tabs in salesforce

Scenario: TC_31:Validate Digital Subscriber name in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Validate the name in Salesforce
    Then Open the Account Page
    Then Close Opened tabs in salesforce

Scenario: TC_32:Validate Digital Subscriber TS number in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Validate the name in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate TS number is generated in Subscriber Number field
    Then Close Opened tabs in salesforce

Scenario: TC_33:Validate Digital Subscriber Piano ID in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate a GUID and PianoID are generated
    Then Close Opened tabs in salesforce

Scenario: TC_34:Validate Digital Subscriber has digital status as Registered in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the Digital Sub email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Verify the Digital Status is Registered and Account Record Type is Registrant
    Then Close Opened tabs in salesforce

Scenario: TC_35:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate account number is generated
    And I logout from Zuora   

Scenario: TC_36:Validate Digital Subscriber Auto Renew is Enabled in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then In Zoura I validate that Subscription is active
    Then Validate Auto pay is set to True
    And I logout from Zuora   

Scenario: TC_37:Validate Digital Subscriber subscription start and end date in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then Validate Subscription End date
    Then Validate Subscription start date
    Then Validate Current Term
    Then Validate Current term start date
    Then Validate Current term end date
    And I logout from Zuora

Scenario: TC_38:Validate Digital Subscriber Renewal data in Zoura
    When I launch Zoura application
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then Validate Renewal Setting
    Then Validate Renewal term
    And I logout from Zuora

Scenario: TC_39:Validate Digital Subscriber Aquisition channel data in Zoura
    When I launch Zoura application
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then Validate Aquisition channel
    And I logout from Zuora

Scenario: TC_40:Validate Digital Subscriber Price Segment code data in Zoura
    When I launch Zoura application
    And Login to Zoura
    When Go to Zoura Subscription Page for Digital
    Then Validate Price Segment Code
    Then Validate Subscription origin
    And I logout from Zuora




# To complete a digital MONTHLY and ANNUAL acquisition on online flow Using a Valid Email/facebook/google/apple
# Types of users:
# Anonymous user (with no TMG account)
# Registrant user Logged in flow and Logged out flow
# Flow:
# User clicks subscribe now from home page
# User clicks ‘Start your free trial’ for digital monthly
# User clicks ‘Save Now’ for digital annual
# If user is an registrant in a logged in state then user is taken directly to payment page (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user is logged out registrant or a anonymous then users enters Valid Email/facebook/google/apple and continues
# User enters valid payment methods (credit card, Debit card, Paypal and Direct debit) (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user ANONYMOUS users enters first and last name and creates password. If user is an REGISTRANT in a LOGGED OUT STATE then user enters password to continue. If user is an REGISTRANT in a LOGGED in STATE then user is taken directly to OnBoarding.
# user completes the onboarding journey and is redirected to the home page.
# MyAccount validations:
# Validate user is a Digital subscriber with blue banner on MyAccount page
# Validate there is a active subscription
# Validate first/last name and email
# Validate you subscription details pulls the correct data from Salesforce including TS number, Start date, price, next billing date and type of subscription.
# Validate user has 1 bonus share option
# Validate user has wine explore CTA
# Validate correct payment method is stored
# Validate ‘The From The Editor Newsletters’ is added by default in the My Newsletters tab
# Validate ‘Subscriber rewards’ which is a exclusive newsletter is added by default in the My Newsletters tab
# Validate Exclusive newsletters have a ADD CTA and not a Sign up CTA
# Piano Validations:
# Navigate to piano
# click users
# From dropdown click all users and enter email in search bar
# Validate user is in piano
# Validate member since field matches the date the subscription was taken out
# validate subscription has the correct Access (Entitlements) Tablet and Wine
# Validate user has a Piano ID generated and the same ID is passed to Salesforce
# Salsforce validations:
# OnAccount level in details Tab
# validate name
# Validate TS number is generated in Subscriber Number field
# Validate a GUID (SAM) is generated
# Validate a piano ID is generated and matches the ID in piano
# Validate Digital status is Active
# Validate Replatform Digital Status is Active
# Validate Current product is Website+ UK
# Validate current subscription type is Standard
# Validate account record type is Registrant
# Validate Print Status is Inactive
# Validate account Origin is express_checkout (If user is a registrant then the account origin field is BLANK)
# Validate account channel is Premium
# Validate Billing Currency is GBP
# Validate 1 bonus promo code is generated and is in a un-used status
# OnAccount level in Subscriptions Tab
# Validate a active subscription is created
# Validate the subscription has a 3 month Lock-In Expiry date from the date created if the type of offer was a free trial
# Validate subscription product name is Website+ Monthly or Website+ Annual
# Validate status is active
# Validate subscription start date is set to the day the subscription was taken out
# Validate subscription end date has a 12 month duration from when it was taken out
# Validate subscription has M001 tenure group for monthly
# Validate subscription has Annu tenure group for monthly
# OnAccount level in Newsletter tab
# Validate ‘The From The Editor Newsletters’ is added by default
# Validate ‘Subscriber rewards’ which is a exclusive newsletter is added by default in the My Newsletters tab
# OnAccount level in System Tab
# Validate that the following entitlements are added in the current entitlements table
# WINE
# REWARDS
# WEB
# SALESFORCE
# TABLET
# OnAccount level in Payment Tab
# Validate Billing Accounts is created
# Validate Invoice is created
# OnSubscription level (This is when you click on the actual subscription)
# Validate account billing preview is generated accurately based on the subscription offer
# Validate type of subscriptions is standard
# Validate status is Active
# Validate Zuora subscription status is Active
# Validate Auto renew is set to true
# Validate external ID is generated
# Validate Initial Subscription Price is £0.00
# Validate On-Going Subscription Price, based on offer
# Validate subscription start date is the same as the day the subscription was taken out
# Validate subscription end date is 12 months from the start date
# Validate subscription renewal date is 12 months from the start date and matches the end date
# Validate Service Activation Date and Contract Effective Date is the same as the subscription start date
# Validate Next Charge Date is 1 month after subscription start date for a monthly subscription
# Validate Next Charge Date is 1 year after subscription start date for a yearly subscription
# Validate Subscription Product is Website+ Monthly Subscription or Website+ Annual subscription
# Validate Subscription Rate Plan Term Type Monthly or Annual
# Validate Campaign Code is generated based on the offer name
# Validate  Promo Code field has generated the correct offer name which was used in the frontend URL
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
# Country = GB (depends on geo location)\
# FC_Puzzle = None
# Price Rise Cancellation = false
# Price Segment Code = 2021 RRP
# Promo Code = freetrial3m-digital-month-RP360 (based on offer url in the frontend)
# Source System = GooglePlay
# Subscription Origin = Online
# Subscription Rate Plan Term Type = Monthly or Annually\
# Suppress Cancellation Event = false
# Suppress Created Event = false
# Type of Subscription = Standard
# Product = Website+ UK (based on offer taken)
# Rate Plan = Open Offer - Monthly or Annual
Feature: ETE 3 Subscription Acquisition Digital plus monthly & Annual
    #This is ticket number 3204, now known in JIRA as ETE-3
    #Scenario count : 43 as of 3rd Jan 2024

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
        Then  Input paypal Payment details
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
        Then  Input paypal Payment details
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

    # Scenario: TC_06:Validate Digital Plus Subscriber Homepage in Customer web app
    #     Given I launch login from homepage
    #     And   I fill in existing DigitalPlusCC email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     When  I click login-register button
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Click on Manage Your Details button
    #     Then  Logout from Customer application

    # Scenario: TC_06:Validate Digital Plus Subscriber Bonus account details in Customer web app
    #     Given I launch login from homepage
    #     And   I fill in existing DigitalPlusCC email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     When  I click login-register button
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Validate Digital Subscriber has 1 bonus account
    #     Then  Logout from Customer application

    Scenario: TC_06:Validate Digital Plus Subscriber subscription details in Customer web app
        Given I launch login from homepage
        And   I fill in existing DigitalPlusCC email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Subscription section
        Then  Logout from Customer application

    Scenario: TC_07:Validate Digital Plus Subscriber Payment details in Customer web app
        Given I launch login from homepage
        And   I fill in existing DigitalPlusCC email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Validate Your Payment section
        Then  Logout from Customer application

    # Scenario: TC_09:Validate Digital Plus Subscriber Newsletter details in Customer web app
    #     Given I launch login from homepage
    #     And   I fill in existing DigitalPlusCC email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     When  I click login-register button
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     When  Navigate to Newsletters page
    #     Then  Validate The From The Editor Newsletters is added by default in customer app
    #     #Then  Validate "Subscriber rewards" is added by default in customer app
    #     Then  Logout from Customer application

    # Scenario: TC_10:Validate Digital Plus subscriber Exclusive Newsletter details in Customer web app
    #     Given I launch login from homepage
    #     And   I fill in existing DigitalPlusCC email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     When  I click login-register button
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     When  Navigate to Newsletters page
    #     Then  Validate Exclusive newsletters can be added and do not have signup CTA
    #     Then  Logout from Customer application

    # Scenario: TC_11:Validate Digital Plus Subscriber Wine details in Customer web app
    #     Given I launch login from homepage
    #     And   I fill in existing DigitalPlusCC email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     When  I click login-register button
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Validate Wine CTA
    #     Then  Logout from Customer application

    Scenario: TC_08:Validate Digital Plus Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        And  Enter DigitalPlus subscriber email in search box
        Then Validate Registration date in Piano
        Then Validate Piano UiD
        Then Validate Access details in Piano
        Then Validate Subscription details
        Then LogOut from Piano

    Scenario: TC_09:Validate Digital Plus Subscriber Print status in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Verify the Print Status is "Inactive"
        Then Close Opened tabs in salesforce

    Scenario: TC_10:Validate Digital Plus Subscriber account channel type in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate the name in Salesforce
        Then Validate account channel is Premium
        Then Close Opened tabs in salesforce

    Scenario: TC_11:Validate Digital Plus Subscriber subscription status in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate subscription for digitalPlussub in salesforce
        #Then Validate if user has active subscription Digital subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_12:Validate Digital Plus Subscriber newsletters in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Verify The From The Editor Newsletter is added by default
        #Then Verify Subscriber rewards is added by default
        Then Close Opened tabs in salesforce

    Scenario: TC_13:Validate Digital Plus Subscriber has 1 bonus account in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate 3 bonus promo code is generated
        Then Validate bonus promo code is Unused
        Then Close Opened tabs in salesforce

    Scenario: TC_14:Validate Digital Plus Subscriber billing Currency in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Billing Currency is GBP
        Then Close Opened tabs in salesforce

    Scenario: TC_15:Validate Digital Plus Subscriber current plan in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Current plan is Website UK
        Then Close Opened tabs in salesforce

    Scenario: TC_16:Validate Digital Plus Subscriber Subscription start and end date in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Subscriptions tab
        Then Validate Active subscription is created
        Then Validate Subscription start date
        Then Validate Subscription end date
        Then Close Opened tabs in salesforce

    Scenario: TC_17:Validate Digital Plus Subscriber social acoount data in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        Then Verify if registrant signed up via email then validate no Social Account is linked
        Then Close Opened tabs in salesforce

    Scenario: TC_18:Validate Digital Plus Subscriber newsletters data in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Newsletter tab
        Then Validate The From The Editor Newsletters is added
        # Then Validate Subscriber rewards is added
        Then Close Opened tabs in salesforce

    Scenario: TC_19:Validate Digital Plus Subscriber product name in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Subscriptions tab
        Then Validate Subscription product name
        Then Close Opened tabs in salesforce

    Scenario: TC_20:Validate Digital Plus Subscriber Entitlements data in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on System tab
        Then Validate Entitlements are added for digitalPlus subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_21:Validate Digital Plus Subscriber type of subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Payment tab
        When User clicks on the Subscription
        Then Validate tyep of subscription is standard
        Then Close Opened tabs in salesforce

    Scenario: TC_22:Validate Digital Plus Subscriber Zuora details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Payment tab
        When User clicks on the Subscription
        Then Validate Zoura subscription status is active
        Then Validate auto renew is set to true
        Then Close Opened tabs in salesforce

    Scenario: TC_23:Validate Digital Plus Subscriber billing account and invoice is created in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Payment tab
        Then Validate Billing account is created
        Then Invoice is created
        Then Close Opened tabs in salesforce

    Scenario: TC_24:Validate Digital Plus Subscriber name in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate the name in Salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_25:Validate Digital Plus Subscriber TS number in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate the name in Salesforce
        Then Validate TS number is generated in Subscriber Number field
        Then Close Opened tabs in salesforce

    Scenario: TC_26:Validate Digital Plus Subscriber Piano ID in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate a GUID and PianoID are generated
        Then Close Opened tabs in salesforce

    Scenario: TC_27:Validate Digital Plus Subscriber has digital status as Registered in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlusCC email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Verify the Digital Status is Registered and Account Record Type is Registrant
        Then Close Opened tabs in salesforce

    Scenario: TC_28:Validate Digital Plus Subscriber Account number is generated in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate account number is generated
        And I logout from Zuora
        
    Scenario: TC_29:Validate Digital Plus Subscriber Auto pay data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Auto pay is set to True
        And I logout from Zuora

    Scenario: TC_30:Validate Digital Plus Subscriber subscription start and end date in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Subscription End date
        Then Validate Subscription start date
        And I logout from Zuora

    Scenario: TC_31:Validate Digital Plus Subscriber current term data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Current Term
        Then Validate Current term start date
        Then Validate Current term end date
        And I logout from Zuora

    Scenario: TC_32:Validate Digital Plus Subscriber Renewal data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Renewal Setting
        Then Validate Renewal term
        And I logout from Zuora

    Scenario: TC_33:Validate Digital Plus Subscriber Aquisition channel data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Aquisition channel
        And I logout from Zuora

    Scenario: TC_34:Validate Digital Plus Subscriber Cancellation method in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Cancellation method
        And I logout from Zuora

    Scenario: TC_35:Validate Digital Plus Subscriber Continent Country data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Continent and Country
        And I logout from Zuora

    Scenario: TC_36:Validate Digital Plus Subscriber Price Segment code data in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Price Segment Code
        And I logout from Zuora

    Scenario: TC_37:Validate Digital Plus Subscriber subscription origin in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Subscription origin
        And I logout from Zuora

    Scenario: TC_38:Validate Digital Plus Subscriber Source System in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Source System
        Then Validate Type of Subscription
        Then Validate Product
        Then Validate Rate Plan
        And I logout from Zuora

    Scenario: TC_39:Validate Digital Plus Subscriber Type of Subscription in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Type of Subscription
        Then Validate Product
        Then Validate Rate Plan
        And I logout from Zuora

    Scenario: TC_40:Validate Digital Plus Subscriber Product and Rate Plan in Zoura
        When I launch Zoura application
        And Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlusCC
        Then Validate Product
        Then Validate Rate Plan
        And I logout from Zuora







#To complete a digital plus MONTHLY and ANNUAL acquisition on online flow Using a Valid Email/facebook/google/apple
# Types of users:
# Anonymous user (with no TMG account)
# Registrant user Logged in flow and Logged out flow
# Flow:
# User clicks subscribe now from home page
# User clicks ‘Start your free trial’ for digital plus monthly
# User clicks ‘Save Now’ for digital plus annual
# If user is an registrant in a logged in state then user is taken directly to payment page (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user is logged out registrant or a anonymous then users enters Valid Email/facebook/google/apple and continues
# User enters valid payment methods (credit card, Debit card, Paypal and Direct debit) (On payment page validate that the correct offer and description is being shown on the right side of the page)
# If user ANONYMOUS users enters first and last name and creates password. If user is an REGISTRANT in a LOGGED OUT STATE then user enters password to continue. If user is an REGISTRANT in a LOGGED in STATE then user is taken directly to OnBoarding.
# user completes the onboarding journey and is redirected to the home page.
# MyAccount validations:
# Validate user is a Digital plus subscriber with blue banner on MyAccount page
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
# From dropdown click all users and enter email in search bar\
# Validate user is in piano
# Validate member since field matches the date the subscription was taken out
# validate subscription has the correct Access (Entitlements) Tablet Wine and Puzzles
# Validate use has a Piano ID generated and the same ID is passed to Salesforce
# Salsforce validations:
# OnAccount level in details Tab
# validate name
# Validate TS number is generated in Subscriber Number field
# Validate a GUID (SAM) is generated
# Validate a piano ID is generated and matches the same ID in Piano
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
# PUZZLEZ
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
# Validate Campaign Code is generated based on the offer name\
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
# Promo Code = freetrial-digitalplus-month-intro-RP245(based on offer url in the frontend)
# Source System = GooglePlay
# Subscription Origin = Online
# Subscription Rate Plan Term Type = Monthly or Annually
# Suppress Cancellation Event = false
# Suppress Created Event = false
# Type of Subscription = Standard
# Product = Website+ UK (based on offer taken)
# Rate Plan = Open Offer - Monthly or Annual
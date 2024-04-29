Feature: Subscription Acquisition wine cellar
    #This is ticket number 3205, now known in JIRA as ETE-9
    #Scenario count : 55 as of 15th Jan 2024

    Scenario: TC_01:Valiadate Telegraph Wine Cellar Subscription Page can be accesed
        Given I launch login from homepage
#         Then  I fill in new Wine email
#         When  I click login-register button
#         And   I enter "valid" register password
#         Then  I enter "right" first name and last name
#         When  I click continue button on registration page
#         Then  Validate HomePage
#         Then  Go to My Account page
#         Then  Click on Manage Your Details button
#         Then  Click on View Subscription Offers
#         Then  Click Wine CTA
#         Then  Validate User is navigated to Wine Cellar page
#         Then  Go to My Account page
#         Then  Logout from Customer application

#     Scenario: TC_02:Valiadate User successfully purchases Wine Cellar Plan
#         Given I launch login from homepage
#         Then  I fill in existing Wine email
#         When  I click login-register button
#         And   I enter "valid" register password
#         When  I click login-register button
#         Then  Validate HomePage
#         Then  Go to My Account page
#         Then  Click on Manage Your Details button
#         Then  Click on View Subscription Offers
#         Then  Click Wine CTA
#         Then  Validate User is navigated to Wine Cellar page
#         Then  User clicks on Join today in Wine Cellar page
#         #Then  User applies discount coupon for Wine Cellar
#         #Then  Validate user can edit the order by edit basket
#         Then  User Checksout for Wine Cellar Subscription
#         Then  Validate user is redirected to Enotria payment page
#         Then  User fills delivery address details in Enotria Payment page
#         Then  User fills Gift Message
#         Then  User enters payment card details in Enotria Payment page
# #     Then  Validate User is able to place order successfully by clicking on Place order button
# #     Then  Validate Order summary
# #     Then  Validate delivery Addressees in wine page
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app


# # # Scenario: TC_03:Valiadate User successfully purchases Wine Cellar Plan in logged out state
# # #     Given I launch Wine homepage
# # #     Then  Validate user is redirected to telegraph page when signIn button is clicked
# # #     Then  I fill in new email
# # #     When  I click login-register button
# # #     And   I enter "valid" register password
# # #     Then  I enter "right" first name and last name
# # #     When  I click continue button on registration page
# # #     Then  Validate user is redirected back to wine page
# # #     Then  User clicks on Join today in Wine Cellar page
# # #     Then  User applies discount coupon for Wine Cellar
# # #     Then  Validate user can edit the order by edit basket
# # #     Then  User Checksout for Wine Cellar Subscription
# # #     Then  Validate user is redirected to Enotria payment page
# # #     Then  User fills delivery address details in Enotria Payment page
# # #     Then  User enters payment card details in Enotria Payment page
# # #     Then  Validate User is able to place order successfully by clicking on Place order button
# # #     Then  Validate Order summary
# # #     Then  Validate delivery Addressees in wine page
# # #     Then  Validate Settings tab redirects to telegraph site
# # #     Then  I logout from customer app

# # Scenario: TC_04:Valiadate Enotria My Account opens with a Active Telegraph Subscriber Status
# #     Given I launch login from homepage
# #     And   I fill in existing Wine email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Your account button in wine app
# #     When  User clicks on Shop now button
# #     Then  Validate status is Active Telegraph Subscriber on Wine Homepage
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app

# # Scenario: TC_05:Valiadate User sees 4 tabs Orders Favourites Addressees Settings
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  User clicks on Your account button in wine app
# #     Then  Validate four tabs exist on wine page
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app

# # Scenario: TC_06:Valiadate user sees a order summary on the orders tab
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  User clicks on Your account button in wine app
# #     When  User clicks on orders tab
# #     Then  Validate user sees order details
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app

# # Scenario: TC_07:Valiadate User can purchase products available on wine application
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  Validate user can view product catalogue on clicking Start shopping button
# #     When  User selects wine product to add in basket
# #     When  User clicks on checkout button
# #     When  Validate user has existing address to select
# #     Then  User enters payment card details in Enotria Payment page
# #     Then  Validate User is able to place order successfully by clicking on Place order button
# #     When  User clicks on orders tab
# #     Then  Validate user sees order details
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app

# # Scenario: TC_08:Valiadate delivery address appears in the Addressees tab
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  User clicks on Your account button in wine app
# #     When  User clicks on Addressees tab
# #     Then  Validate user is able to view saved address details
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app


# # Scenario: TC_09:Valiadate the Setting tab redirects the user to the TMG MyAccount
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  User clicks on Your account button in wine app
# #     Then  Validate Settings tab redirects to telegraph site
# #     Then  I logout from customer app

# # Scenario: TC_10:Valiadate if the user clicks Logout then they are logged out both the Telegraph and Enotria website.
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     When  User clicks on Shop now button
# #     When  User clicks on Your account button in wine app
# #     When  User clicks on LogOut button in wine page
# #     Then  Validate user is logged out of both enotria and telegraph app

# # Scenario: TC_11:Valiadate Wine Only Subscriber Wine details in Customer web app
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     Then  Click on Manage Your Details button
# #     Then  Validate Your Subscription section contains Wine plan
# #     Then  Logout from Customer application

# # Scenario: TC_12:Valiadate Wine Only Subscriber Payment details in Customer web app
# #     Given I launch login from homepage
# #     And   I fill in existing email
# #     When  I click login-register button
# #     When  Go to My Account page
# #     Then  Click on Manage Your Details button
# #     Then  Validate payment details do not exist for wine
# #     Then  Logout from Customer application

# # Scenario: TC_13:Validate Wine Subscriber data in Piano
# #     Given User opens Piano URL
# #     When User logins to Piano account
# #     When Navigate to All Users page
# #     And  Enter subscriber email in search box
# #     Then Validate Registration date in Piano
# #     Then Validate Piano UiD
# #     Then Validate Access details in Piano
# #     Then LogOut from Piano

# # Scenario: TC_14:Valiadate Wine Only Subscriber name in Salesforce
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And  Enter the email id in the search box
# #     Then Validate the name in Salesforce
# #     Then Open the Account Page
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_15:Valiadate TS number is generated in Subscriber Number field for Wine Subscriber
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     Then Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate TS number is generated in Subscriber Number field
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_16:Valiadate Wine Only Subscriber GUI ID is generated in Salesforce
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate GUID is generated in Subscriber Number field
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_17:Validate a piano ID is generated and matches the same ID in Piano
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate PianoID is generated
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_18:Validate Digital status is Active
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Digital status is Active
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_19:Validate Replatform Digital Status is Active
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Replatform Digital status is Active
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_20:Validate Current product is Wine
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Current Product is Wine
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_21:Validate current subscription type is Standard
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Current Subscription type is Standard
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_22:Validate account record type is Registrant
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Account Record Type is registrant
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_23:Validate Print Status is Inactive
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And  Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Verify the Print Status is "Inactive"
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_24:Validate account Origin
# #     When I launch Salesforce URL
# #     Then I login to Salesforcep
# #     And  Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Account Origin is empty
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_25:Validate account channel is Premium
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate account channel is "Premium"
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_25:Validate Billing Currency is GBP
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     Then Open the Account Page
# #     When User clicks on Details tab
# #     Then Validate Billing Currency is GBP
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_26:Validate there are no bonus promo codes associated with the account
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Details tab
# #     Then Validate no bonus promo codes exists for wine
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_27:Validate a active subscription is created for Wine Subscriber
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     Then Validate Active Subscription is created
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_28:Validate subscription product name is Wine One Time Subscription
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     Then Validate Product name is wine one time
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_29:Validate wine status is active
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     Then Valiadate Wine Subscription status is active
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_30:Validate subscription start date and End date
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     Then Valiadate Wine Subscription start date
# #     Then Valiadate Wine Subscription end date
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_31:Validate The From The Editor Newsletters is added by default
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Newsletter tab
# #     Then Validate The From The Editor Newsletters is added
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_32:Validate that the wine entitlements are added
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on System tab
# #     Then Validate Entitlements are added for Wine subscription
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_33:Validate Billing Account and invoice is created with 0 balance
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Payment tab
# #     Then Validate Billing Account balance
# #     Then Validate Invoice balance
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_34:Validate Account Billing Preview should be empty for Wine Only Subscription
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Account Billing Preview is empty
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_35:Validate type of subscriptions is standard and status is active
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate type of Subscription is Standard
# #     Then Valiadate Status is Active
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_36:Validate Auto Renew is set to False for Wine Only
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Auto Renew checkbox is unchecked
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_37:Validate External ID is generated
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Subscription External ID is generated
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_38:Validate Initial and Ongoing Subscription price is 0
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Initial Subscription Price is 0
# #     Then Valiadate On-Going Subscription Price is 0
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_39:Validate Start and end date for Wine only subscription
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Subscription Start Date
# #     Then Valiadate Subscription End Date
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_39:Validate activation date and countereffective date is same
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Activation and countereffective Date is same
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_40:Validate Rate Term plan is Onetime
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Subscription Rate Plan Term Type is Onetime
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_41:Validate Promo Code field has generated the correct offer name which was used in the frontend URL
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Promo Code is generated for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_42:Validate the correct Price Segment Code is generated based on the offer
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Price Segment code is generated for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_43:Validate Acquisition Channel is set to TCUK
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Acquisition Channel is set to TCUK for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_44:Validate Subscription Origin is set to Online
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Subscription Origin is set to Online for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_45:Validate Payment Status and method is blank for WineOnly
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Payment Status and method is blank for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_46:Validate Zuora Id is generated for WineOnly
# #     When I launch Salesforce URL
# #     Then I login to Salesforce
# #     And Enter the email id in the search box
# #     When User clicks on Subscription tab
# #     And  User Opens Subscription page
# #     Then Validate Zuora Id is generated for WineOnly
# #     Then Close Recently Opened Tab in Salesforce

# # Scenario: TC_47:Validate Name and Account number in Zuora
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     And  Open Subscription in Zoura
# #     Then Validate Name and Account number in Zuora

# # Scenario: TC_48:Validate Auto Pay details in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     And  Open Subscription in Zoura
# #     Then Validate Auto Pay details in Zoura

# # Scenario: TC_49:Validate Term setting and current term in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Term setting and current term in Zoura

# # Scenario: TC_50:Validate Subscription and Curent term dates in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Subscription and Curent term dates in Zoura

# # Scenario: TC_51:Validate Renewal Settings, term and auto Renew
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Renweal Settings
# #     And  Valiadate Renewal term
# #     And  Validate AutoRenew

# # Scenario: TC_52:Validate Price Segment Code and Promo code in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Price Segment code in Zoura
# #     And  Validate Promo code in Zoura

# # Scenario: TC_53:Validate Price Rise Cancellation in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Price Rise Cancellation in Zoura

# # Scenario: TC_54:Validate Source System in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Source System in Zoura

# # Scenario: TC_55:Validate Subscription Origin and Rate Plan type in Zoura
# #     When I launch Zoura application
# #     Then Login to Zoura
# #     And  Enter Subscription ID in search box
# #     Then Validate Subscription Origin in Zoura
# #     And  Validate Rate Plan Type in Zoura































# To complete £5 a year wine only membership acquisition on online flow Using a Valid Email/facebook/google/apple
# Types of users:
# Anonymous user (with no TMG account)
# Registrant user
# Digital light
# Puzzles only
# Logged in flow and Logged out flow
# Flow:
# User clicks subscribe now from home page
# User clicks ‘Wine Cellar’ cta from subshop
# User is navigated to https://wine-qa.telegraph.co.uk/splash 
# Points 5,6 and 7 are 3 different flows on how a user can reach the Enotria payment page.
# If user is in a logged in state then user is taken to Enotria wine subshop with the sign-in option not visible. User clicks ‘Join Today’ CTA for £5 a year on wine subshop the ‘Your Basket’ overlay appears. On Basket user can click on discount and add a discount to reduce the price. User can click on ‘Wine Cellar Annual Membership’ to see information about the subscription. User clicks ‘Checkout’ and user is taken to the Enotria payment page.
# If user is an in a logged out state then user is taken to Enotria wine subshop with the sign-in option is available and upon clicking sign-in user is taken to TMG sign page where there can sign in or create a new account, after a sign-in or new account creation user is redirected back to wine subshop where the sign-in button is no longer visible.  User clicks ‘Join Today’ CTA for £5 a year on wine subshop the ‘Your Basket’ overlay appears. On Basket user can click on discount and add a discount to reduce the price. User can click on ‘Wine Cellar Annual Membership’ to see information about the subscription. User clicks ‘Checkout’ and user is taken to the Enotria payment page.
# If user is an in a logged out state then user is taken to Enotria wine subshop where User clicks ‘Join Today’ CTA for £5 a year on wine subshop the ‘Your Basket’ overlay appears. On Basket user can click on discount and add a discount to reduce the price. User can click on ‘Wine Cellar Annual Membership’ to see information about the subscription. User clicks ‘Checkout’ and user is taken to sign-in/register page. User signs in or creates a new account and is redirected Enotria payment page.
# On the Enotria payment page user sees a order summery with their wine subscription details.
# User can click on ‘Edit basket' which will redirect the back to the basket whey they can make changes and click 'Checkout’ again to land back on the payment page.
# User fills out Delivery Address details and adds a gift message and selects ‘Save this address in my address book’
# If user selects my ‘My billing address is the same as my delivery address’ then user jumps to payment details. If billing address is different and the new address fields will be populated where billing address will be entered.
# User enters payment details (4111 1111 1111 1111) valid exp, security code 123
# User selects I agree with the Telegraph Wine Cellar Privacy policy and terms of sale and clicks ‘Place Order’
# User is take to a thank you page with a ‘Order ref number & Order summary’  
# Enotria MyAccount validations:
# User clicks Your Account' from top right of page and Enotria My Account opens with a Active Telegraph Subscriber Status
# User sees 4 tabs 'Orders, Favourites, Addressees, Settings and Logout.
# Validate user sees a order summary on the orders tab with a ‘View Orders Details’ button
# Validate if user clicks ‘View order details’ button then the order details page expands with additional details on and  if the user click Hide order details then the page collapses 
# Validate delivery address appears in the Addressees tab
# Validate the ‘Setting’ tab redirects the user to the TMG MyAccount
# Validate if the user clicks ‘Logout’ then they are logged out both the Telegraph and Enotria website.
# MyAccount validations:
# For MyAccount validations please refer to New MyAccount tickets and test cases for wine only subscriptions  
# Piano Validations:
# Navigate to piano
# click users
# From dropdown click all users and enter email in search bar
# Validate user is in piano
# Validate member since field matches the date the subscription was taken out
# validate subscription has the correct Access (Entitlements) Wine 
# Validate user has a Piano ID generated and the same ID is passed to Salesforce
# Salsforce validations:
# OnAccount level in details Tab
# validate name
# Validate TS number is generated in Subscriber Number field
# Validate a GUID (SAM) is generated
# Validate a piano ID is generated and matches the same ID in Piano
# Validate Digital status is Active
# Validate Replatform Digital Status is Active
# Validate Current product is Wine
# Validate current subscription type is Standard
# Validate account record type is Registrant
# Validate Print Status is Inactive
# Validate account Origin is express_checkout (If user is a registrant then the account origin field is BLANK)
# Validate account channel is Premium
# Validate Billing Currency is GBP
# Validate there are no bonus promo codes associated with the account 
# OnAccount level in Subscriptions Tab
# Validate a active subscription is created
# Validate subscription product name is Wine One Time Subscription
# Validate status is active
# Validate subscription start date is set to the day the subscription was taken out
# Validate subscription end date has a 12 month duration from when it was taken out]
# OnAccount level in Newsletter tab
# Validate ‘The From The Editor Newsletters’ is added by default
# OnAccount level in System Tab
# Validate that the following entitlements are added in the current entitlements table
# WINE
# OnAccount level in Payment Tab
# Validate Billing Accounts is created with 0 balance
# Validate Invoice is created 0 balance
# OnSubscription level (This is when you click on the actual subscription)
# Validate account billing preview is generated accurately based on the subscription offer (for wine only it should be empty)
# Validate type of subscriptions is standard
# Validate status is Active
# Validate Zuora subscription status is Active
# Validate Auto renew is set to false
# Validate external ID is generated
# Validate Initial Subscription Price is £0.00
# Validate On-Going Subscription Price is £0.00
# Validate subscription start date is the same as the day the subscription was taken out
# Validate subscription end date is 12 months from the start date
# Validate subscription renewal date is 12 months from the start date and matches the end date
# Validate Service Activation Date and Contract Effective Date is the same as the subscription start date
# Validate Next Charge Date is empty
# Validate Subscription Product is Wine One Time Subscription
# Validate Subscription Rate Plan Term Type OneTime
# Validate Campaign Code is generated based on the offer name\
# Validate Promo Code field has generated the correct offer name which was used in the frontend URL
# Validate the correct Price Segment Code is generated based on the offer
# Validate Acquisition Channel is set to TCUK
# Validate Subscription Origin is set to Online
# Validate Current Payment Method is blank
# Validate Current Payment Status is blank
# Validate Zuora Id is generated
# Zuora validation On Account level
# Validate name
# Validate Account number is generated
# Validate Auto-Pay is set to Yes
# Validate default payment method is set to what was used on he front-end\
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
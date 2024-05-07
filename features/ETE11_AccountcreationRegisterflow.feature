Feature: ETE 11 Account creation Register flow
    #This is ticket number 3132, now known in JIRA as ETE-11
    #Scenario count : 17 as of 3rd Jan 2024

    Scenario: TC_01:User Registration in Customer
        Given I launch login from homepage
        Then  Action Keys Set One
        Then  I fill in new email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        Then  Go to My Account page
        Then  Go to My Account page
        Then  Logout from Customer application

#     Scenario: TC_02:Validate Registrant Homepage in Customer web app
#         Given I launch login from homepage
#         Then   I fill in existing email
#         When  I click login-register button
#         And   I enter "valid" register password
#         When  I click login-register button
#         Then  Validate HomePage
#         Then  Go to My Account page
#         Then  Logout from Customer application

#     Scenario: TC_03:Validate Registrant subscription details in Customer web app
#         Given I launch login from homepage
#         Then  I fill in existing email
#         When  I click login-register button
#         And   I enter "valid" register password
#         When  I click login-register button
#         Then  Validate HomePage
#         When  Go to My Account page
#         Then  Click on Manage Your Details button
#         Then  Validate No Active Subscription Exists for Registrant
#         Then  Logout from Customer application

#     Scenario: TC_04:Validate Registrant Newsletter details in Customer web app
#         Given I launch login from homepage
#         Then   I fill in existing email
#         When  I click login-register button
#         And   I enter "valid" register password
#         When  I click login-register button
#         Then  Validate HomePage
#         When  Go to My Account page
#         When  Navigate to My Newsletters page
#         Then  Validate The From The Editor Newsletters is added by default in customer app
#         Then  Logout from Customer application

#     Scenario: TC_05:Validate Registrant Exclusive Newsletter details in Customer web app
#         Given I launch login from homepage
#         Then  I fill in existing email
#         When  I click login-register button
#         And   I enter "valid" register password
#         When  I click login-register button
#         Then  Validate HomePage
#         When  Go to My Account page
#         When  Navigate to My Newsletters page
#         Then  Validate Exclusive newsletters have signup CTA or not
#         Then  Logout from Customer application

#     Scenario: TC_06:Validate Registrant data in Piano
#         Given User opens Piano URL
#         When User logins to Piano account
#         When Navigate to All Users page
#         And  Enter subscriber email in search box
#         Then Validate Registration date in Piano
#         Then Validate Piano UiD
#         Then Validate Access details for Registrant user in Piano
#         Then LogOut from Piano

#     Scenario: TC_07:Validate Registrant name in Salesforce
#         When I launch Salesforce URL
#         Then I login to Salesforce
#         Then Close Opened tabs in salesforce
#         And Enter the email id in the search box
#         Then Validate the name in Salesforce
#         Then Open the Account Page
#         Then Close Opened tabs in salesforce

#     Scenario: TC_08:Validate Registrant TS number in Salesforce
#         When I launch Salesforce URL
#         Then I login to Salesforce
#         Then Close Opened tabs in salesforce
#         Then Enter the email id in the search box
#         Then Open the Account Page
#         When User clicks on Details tab
#         Then Validate TS number is generated in Subscriber Number field
#         Then Close Opened tabs in salesforce


# Scenario: TC_09:Validate Registrant Piano ID in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Validate a GUID and PianoID are generated
#     Then Close Opened tabs in salesforce

# Scenario: TC_10:Validate Registrant has digital status as Registered in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Verify the Digital Status is "Registered" and Account Record Type is "Registrant"
#     Then Close Opened tabs in salesforce


# Scenario: TC_11:Validate Registrant Print status in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Verify the Print Status is "Inactive"
#     Then Close Opened tabs in salesforce

# Scenario: TC_12:Validate Registrant account channel type in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     Then Validate account channel is "Premium"
#     Then Close Opened tabs in salesforce

# Scenario: TC_13:Validate Registered subscription status in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Validate user has no subscription
#     Then Close Opened tabs in salesforce

# Scenario: TC_14:Validate Registered social account data in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Verify if registrant signed up via email then validate no Social Account is linked
#     Then Close Opened tabs in salesforce

# Scenario: TC_15:Validate Registered newsletters data in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Validate The From The Editor Newsletters is added
#     Then Close Opened tabs in salesforce

# Scenario: TC_16:Validate Registered Entitlements data in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     When User clicks on System tab
#     Then Validate Entitlements are added for digital subscription
#     Then Close Opened tabs in salesforce

# Scenario: TC_17:Validate Registrant User data in Zoura
#     When I launch Zoura application
#     Then Login to Zoura
#     Then Validate Registrant Account details do not exist in Zoura
#     Then I logout from Zuora






# ##Description
# # To create a registrant on online flow Using a Valid Email/facebook/google/apple
# # Flow:
# # User clicks login from home page
# # User creates a registrant account using all methods above
# # User redirected to home page after account creation
# # user navigates to MyAccount
# # MyAccount validations:
# # Validate user is a registrant with yellow banner on MyAccount page
# # Validate there is no active subscription
# # Validate ‘The From The Editor Newsletters’ is added by default in the My Newsletters tab
# # Validate Exclusive news letters cant be added and have a ‘Sign up’ CTA
# # Piano Validations:
# # Navigate to piano
# # click users
# # From dropdown click all users and enter email in search bar
# # Validate user is in piano
# # Validate member since field matches the date the registration date
# # validate registrant has no Access (Entitlements)
# # Validate user has a Piano ID generated and the same ID is passed to Salesforce
# # Salsforce validations:
# # OnAccount level in details Tab
# # validate name
# # Validate TS number is generated in Subscriber Number field
# # Validate a GUID (SAM) is generated
# # Validate a piano ID is generated and matches the ID in piano
# # Validate Digital status is Registrant
# # Validate account record type is Registrant
# # Validate Print Status is Inactive
# # Validate account channel is Premium
# # OnAccount level in Subscriptions Tab
# # Validate no subscription s created
# # OnAccount level in Newsletter tab
# # Validate ‘The From The Editor Newsletters’ is added by default
# # OnAccount level in System Tab
# # Validate that no entitlements are added in the current entitlements table
# # If registrant signed up via email then validate no Social Account is linked
# # If registrant signed up via facebook/apple or google then Validate Social account is linked
# # During registration if the user selects the checkbox “I would like to receive by email other offers, promotions and services from Telegraph Media Group Ltd and its group companies.“ Then in Salesforce and frontend MyAccount validate under market preferences that Email is selected.
# # During Registration if the user adds additional newsletters then validate the Newsletters are added on the account in Salesforce under newsletter tab and also on Frontend Myaccount under My Newsletters tab.
# # As there is no subscription there should be no account details stored in Zuora
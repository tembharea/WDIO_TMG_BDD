Feature: ETE 20 Puzzles One Click OnBoarding

  Scenario: TC_01:User purchasing Digital plan with credit card for PuzzleOnboarding
    Given I launch login from homepage
    And I fill in new digitalete20 email
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    When Click on View Subscription Offers
    And User clicks on Digital Plan Monthly
    Then Validate user is redirected to Payment gateway page
    And Input CreditCard Payment details
    And I continue the flow till puzzle subscription onboarding
    When  Go to My Account page
    Then  Logout from Customer application

#   Scenario: TC_02: Validate Digital and Puzzle Subscription Deatil
#     Given I launch login from homepage
#     And I fill in existing digitalete20 email
#     And I click login-register button
#     And I enter "valid" register password
#     When I click login-register button
#     Then Validate HomePage
#     And Go to My Account page
#     And Click on Manage Your Details button
#     And I verify puzzle subscription from my account details
#     When Go to My Account page
#     Then Logout from Customer application

#   Scenario: TC_03:Validate both Digital and Puzzle Subscription Exists
#     Given I launch login from homepage
#     And   I fill in existing digitalete20 email
#     When  I click login-register button
#     And   I enter "valid" register password
#     When  I click login-register button
#     When  Go to My Account page
#     Then  Click on Manage Your Details button
#     Then  Validate Your Subscription section
#     Then  Logout from Customer application

#   Scenario: TC_04:Validate Digital Puzzle Bonus Subscriber data in Piano
#     Given User opens Piano URL
#     And User logins to Piano account
#     And Navigate to All Users page
#     And Enter digitalete20 subscriber email in search box for piano
#     When Validate Registration date in Piano
#     Then Validate Piano UiD
#     And Validate Access details in Piano for puzzles user

#   Scenario: TC_05:Validate Digital Puzzle Account details in Salesforce
#     Given I launch Salesforce URL
#     And I login to Salesforce
#     Then Close Opened tabs in salesforce
#     Then Close Opened tabs in salesforce
#     When Enter the digitalete20 Sub email id in the search box
#     And Open the Account Page
#     Then Validate a GUID and PianoID are generated
#     Then Close Opened tabs in salesforce
#     Then Close Opened tabs in salesforce

#   Scenario: TC_06:Validate Digital Puzzle Subscriber Account details in Salesforce
#     Given I launch Salesforce URL
#     And I login to Salesforce
#     Then Close Opened tabs in salesforce
#     Then Close Opened tabs in salesforce
#     When Enter the digitalete20 Sub email id in the search box
#     And Open the Account Page
#     Then Validate if user has any active subscription for ete20
#     And I verify puzzle subscription is active from salesforce
#     Then Close Opened tabs in salesforce
#     Then Close Opened tabs in salesforce

#   Scenario: TC_07:Validate Digital Puzzle Subscriber TS number in Salesforce
#     Given I launch Salesforce URL
#     And I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the digitalete20 Sub email id in the search box
#     When Open the Account Page
#     Then Validate TS number is generated in Subscriber Number field
#     Then Close Opened tabs in salesforce

#    Scenario: TC_08:Validate Digital Puzzle Subscriber Print status in Salesforce
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And  Enter the digitalete20 Sub email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Verify the Print Status is "Inactive"
#     Then Close Opened tabs in salesforce

# Scenario: TC_09:Validate Digital Puzzle status is Active
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the digitalete20 Sub email id in the search box   
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Validate Digital status is Active
#     Then Close Opened tabs in salesforce

# Scenario: TC_10:Validate Digital Puzzle Replatform Digital Status is Active
#     When I launch Salesforce URL
#     Then I login to Salesforce
#     Then Close Opened tabs in salesforce
#     And Enter the digitalete20 Sub email id in the search box
#     Then Open the Account Page
#     When User clicks on Details tab
#     Then Validate Replatform Digital status is Active
#     Then Close Opened tabs in salesforce

#   Scenario: TC_11:Validate Digital Puzzle Subscriber subscription start and end date in Zoura
#     Given I launch Zoura application
#     When Validate Subscription End date
#     Then Validate Subscription start date
#     And I logout from Zuora

#   Scenario: TC_12:Validate Digital Puzzle Subscriber in Zuora
#     Given I open zuora
#     And Login to Zoura
#     When Go to Zoura Subscription Page for digitalete20
#     And In Zoura I validate subscriberID is present
#     Then In Zoura I validate that Subscription is active
#     And I logout from Zuora

#   Scenario: TC_13:Validate Digital Puzzle Subscriber in Zuora for basic info
#     Given I open zuora
#     And Login to Zoura
#     When Go to Zoura Subscription Page for digitalete20
#     Then In Zoura I validate that Subscription is active
#     Then I do basic zuora validation on subscription level
#     And I logout from Zuora

#   Scenario: TC_14:Validate Digital Puzzle Subscriber in Zuora for additional info
#     Given I open zuora
#     And Login to Zoura
#     When Go to Zoura Subscription Page for digitalete20
#     Then In Zoura I validate that Subscription is active
#     Then I do additional zuora validation on subscription level
#     And I logout from Zuora

#    Scenario: TC_15:Validate Term setting and current term in Zoura
#     Given I open zuora
#     Then Login to Zoura
#     Then Go to Zoura Subscription Page for digitalete20
#     Then Validate Term setting and current term in Zoura
#     Then I logout from Zuora








# # # After successful payment of a digital subscription, user land on the onboarding journey.
# # # Step 1 of 5 is the down load telegraph app page
# # # Step 2 of 5 is the puzzles 1 click page
# # # On step 2 is where user sees a copy ‘Add puzzles to your package’
# # # User has the option to claim this offer or skip and continue
# # # If user clicks skips and continue then no puzzles will be added and they complete onboarding as a regular digital customer
# # # If user clicks ‘Claim this offer’ user sees a adding puzzles spinner and taken to stepm 3 of 5 where they can see puzzles conformation.
# # # User will continue the rest of the onboarding journey as usual.
# # # All validations apply for My account/SF/Zuora and Piano
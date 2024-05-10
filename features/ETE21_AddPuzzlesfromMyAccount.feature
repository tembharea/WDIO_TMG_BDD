Feature: ETE 21 Add Puzzles from MyAccount

 
  #   Scenario: TC_01_PreRequisite:User purchasing Digital plan Monthly
  #       Given I launch login from homepage
  #       And   I fill in new digitalMPaypalforPuzzles email
  #       When  I click login-register button
  #       And   I enter "valid" register password
  #       Then  I enter "right" first name and last name
  #       When  I click continue button on registration page
  #       Then  Validate HomePage
  #       When  Go to My Account page
  #       Then  Click on View Subscription Offers
  #       Then  User clicks on Digital Plan Monthly
  #       Then Validate user is redirected to Payment gateway page
  #       And  Input CreditCard Payment details
  #       Then  User completes the purchase
  #       When  Go to My Account page
  #       Then  Click on Manage Your Details button
  #       Then  Logout from Customer application

  # Scenario: TC_02:Validate Digital Subscriber has can pruchase Puzzles from MyAccount Page
  #   Given I launch login from homepage
  #   And   I fill in existing digitalMPaypalforPuzzles email
  #   When  I click login-register button
  #   And   I enter "valid" register password
  #   When  I click login-register button
  #   When  Go to My Account page
  #   Then  Validate User able to purchase Puzzles from MyAccount page
  #   When  Go to My Account page
  #   Then  Logout from Customer application


 Scenario: TC_01_PreRequisite:User purchasing Digital plan Monthly
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new digitalMPaypalforPuzzles email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plan Monthly
        Then Validate user is redirected to Payment gateway page
        Then  Input paypal Payment details
        Then  User completes the purchase
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

  Scenario: TC_02:Validate Digital Subscriber can pruchase Puzzles from MyAccount Page
    Given I launch login from homepage
    And   I fill in existing digitalMPaypalforPuzzles email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Validate User able to purchase Puzzles from MyAccount page
    When  Go to My Account page
    Then  Logout from Customer application




  Scenario: TC_03:Validate Digital Subscriber has Puzzle Subscription
    Given I launch login from homepage
    And   I fill in existing digitalMPaypalforPuzzles email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    Then  Logout from Customer application

  Scenario: TC_04:Validate Digital Puzzle Subscriber details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitalMPaypalforPuzzles subscriber email in search box in Piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano for Puzzles
    Then LogOut from Piano

Scenario: TC_05:Validate Digital Puzzle Subscriber GUID PianoID details in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    When Enter the digitalMPaypalforPuzzles email id in the search box
    And Open the Account Page
    Then Validate a GUID and PianoID are generated
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

  Scenario: TC_06:Validate Digital Puzzle Subscriber details in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    When Enter the digitalMPaypalforPuzzles email id in the search box
    And Open the Account Page
    Then Validate subscription for digitalMPaypalforPuzzles in salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

  Scenario: TC_07:Validate Digital Puzzle Subscriber TS number in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypalforPuzzles email id in the search box
    When Open the Account Page
    Then Validate TS number is generated in Subscriber Number field
    Then Close Opened tabs in salesforce

  Scenario: TC_08:Validate Digital Subscriber Print status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And  Enter the digitalMPaypalforPuzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Verify the Print Status is "Inactive"
    Then Close Opened tabs in salesforce

Scenario: TC_09:Validate Digital status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypalforPuzzles email id in the search box    
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Digital status is Active
    Then Close Opened tabs in salesforce

Scenario: TC_10:Validate Replatform Digital Status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypalforPuzzles email id in the search box
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Replatform Digital status is Active
    Then Close Opened tabs in salesforce

  Scenario: TC_11:Validate Digital Puzzle Subscriber subscription start and end date in Zoura
    Given I open zuora
    And Login to Zoura
    When Validate Subscription End date
    Then Validate Subscription start date
    And I logout from Zuora

  Scenario: TC_12:Validate Digital Puzzle Subscriber in Zuora
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitalMPaypalforPuzzles
    And In Zoura I validate subscriberID is present
    Then In Zoura I validate that Subscription is active
    And I logout from Zuora

  Scenario: TC_13:Validate Digital Puzzle Subscriber in Zuora for basic info
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitalMPaypalforPuzzles
    Then In Zoura I validate that Subscription is active
    Then I do basic zuora validation on subscription level
    And I logout from Zuora

  Scenario: TC_14:Validate Digital Puzzle Subscriber in Zuora for additional info
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitalMPaypalforPuzzles
    Then In Zoura I validate that Subscription is active
    Then I do additional zuora validation on subscription level
    And I logout from Zuora

  Scenario: TC_15:Validate Term setting and current term in Zoura
    Given I open zuora
    Then Login to Zoura
    Then Go to Zoura Subscription Page for digitalMPaypalforPuzzles
    Then Validate Term setting and current term in Zoura
    Then I logout from Zuora

  











































# # pre requisite:
# # User is a Digital Subscriber.
# # Description:
# # As a digital subscriber is able to add a puzzles subscriptions within their my-account using their existing payment method.
# # Steps:
# # User clicks ‘ADD PUZZLES’
# # User clicks 'Confirm Payment'
# # User sees adding puzzles spinner
# # User sees play puzzles cta
# # ON clicking the play puzzles user is redirected to the puzzles website.
# # Once the subscription is added all the usual validations apply in myaccount/sf/zuora/piano
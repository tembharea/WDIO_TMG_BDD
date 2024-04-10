Feature: ETE 22 Add Puzzles As Bolton

 # Scenario: TC_01:User purchasing Digital plan with credit card
  #   Given I launch login from homepage
  #   And I fill in new digital email
  #   And I click login-register button
  #   And I enter "valid" register password
  #   And I enter "right" first name and last name
  #   And I click continue button on registration page
  #   And Validate HomePage
  #   And Go to My Account page
  #   When Click on View Subscription Offers
  #   And User clicks on Digital Plan "Annual"
  #   Then Validate user is redirected to Payment gateway page
  #   And Input CreditCard Payment details
  #   And I continue the flow till puzzle subscription onboarding

    Scenario: TC_01_PreRequisite:User purchasing Digital plan Monthly
        Given I launch login from homepage
        And   I fill in new digitalMPaypaletePuzzles email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        And  Input CreditCard Payment details
        Then  User completes the purchase
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

  Scenario: TC_02:Validate Digital Subscriber can pruchase Puzzles as bolt on sub
    Given I launch login from homepage
    And   I fill in existing digitalMPaypaletePuzzles email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on View Subscription Offers
    Then  Navigate to Puzzles Subscription option in View Subscription page
    Then  Select Annual plan of Puzzles
    Then  Validate user is redirected to Payment gateway
    Then  Click on Confirm Payment button
    Then  Validate User can pruchase Puzzles as bolt on sub
    When  Go to My Account page
    Then  Logout from Customer application

  Scenario: TC_03:Validate Digital Subscriber has Bolt on Puzzle Subscription
    Given I launch login from homepage
    And   I fill in existing digitalMPaypaletePuzzles email
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
    And  Enter digitalMPaypaletePuzzles subscriber email in search box in Piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano for Puzzles
    Then LogOut from Piano

Scenario: TC_05:Validate Digital Puzzle Subscriber GUID PianoID details in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    When Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce
    And Open the Account Page
    Then Validate a GUID and PianoID are generated
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_06:Validate DigitalPuzzleAsBolton Subscriber Digital status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce    
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Digital status is Active
    Then Close Opened tabs in salesforce

Scenario: TC_07:Validate DigitalPuzzleAsBolton Subscriber Replatform Digital Status is Active
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate Replatform Digital status is Active
    Then Close Opened tabs in salesforce

  Scenario: TC_08:Validate DigitalPuzzleAsBolton Subscriber details in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    When Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce
    And Open the Account Page
    Then Validate subscription for digitalMPaypalforPuzzlete in salesforce
    Then Close Opened tabs in salesforce

  Scenario: TC_09:Validate Digital Puzzle Subscriber TS number in Salesforce
    Given I launch Salesforce URL
    And I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitalMPaypaletePuzzles email id in the search box in Salesforce
    When Open the Account Page
    Then Validate TS number is generated in Subscriber Number field
    Then Close Opened tabs in salesforce

  Scenario: TC_10:Validate Digital Puzzle Subscriber subscription start and end date in Zoura
    Given I launch Zoura application
    And Login to Zoura
    When Validate Subscription End date
    Then Validate Subscription start date
    And I logout from Zuora

  Scenario: TC_11:Validate Digital Puzzle Subscriber in Zuora
    Given I open zuora
    And Login to Zoura
    When Go to Zoura digitalMPaypaletePuzzles Subscription Page
    And In Zoura I validate subscriberID is present
    Then In Zoura I validate that Subscription is active
    And I logout from Zuora

  Scenario: TC_12:Validate Digital Puzzle Subscriber in Zuora for basic info
    Given I open zuora
    And Login to Zoura
    When Go to Zoura digitalMPaypaletePuzzles Subscription Page
    #Then In Zoura I validate that Subscription is active
    Then I do basic zuora validation on subscription level
    And I logout from Zuora

  Scenario: TC_13:Validate Name and Account number in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura digitalMPaypaletePuzzles Subscription Page
    #And  Open Subscription in Zoura for Puzzles
    Then Validate Name and Account number in Zoura
    Then I logout from Zuora

  Scenario: TC_14:Validate Payment details in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zoura digitalMPaypaletePuzzles Subscription Page
    #And  Open Subscription in Zoura for Puzzles
    Then Validate Payment details for Puzzles in Zoura
    Then I logout from Zuora

  Scenario: TC_15:Validate Digital Puzzle Subscriber in Zuora for additional info
    Given I open zuora
    And Login to Zoura
    When Go to Zoura digitalMPaypaletePuzzles Subscription Page
    Then In Zoura I validate that Subscription is active
    Then I do additional zuora validation on subscription level
    And I logout from Zuora



















































# As a Digital subscriber the user can go to the TMG subshop and click on puzzles and add puzzles as a bolt on with the existing payment method .
# User can also update their existing payment method successfully before completing checkout.
# Once the subscription is added all the validations apply across Myaccount/SF/Zuora and piano
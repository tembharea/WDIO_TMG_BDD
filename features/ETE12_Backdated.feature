Feature: ETE 12 Backdated Subscription

    Scenario: 1:User purchasing puzzles subscription using card
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

    Scenario: 2:Validate Puzzle subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And Enter the Puzzles email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate if user has any subscription for puzzle in salesforce
        Then Close Opened tabs in salesforce

    Scenario: 3:Cancel subscription from zuora
        When I launch Zoura application
        Then Login to Zoura
        Then Go to Zoura Subscription Page for Puzzles
        And  Open Subscription in Zoura for Puzzles
        And  Cancel Subscription in Zoura
        Then I logout from Zuora
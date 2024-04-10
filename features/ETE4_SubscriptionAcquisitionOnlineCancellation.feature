Feature: ETE 4 Online Cancellation

  Scenario: TC_01_User purchasing Digital plan with credit card
    Given I launch login from homepage
    Then  I fill in new email for Onlinecancellation
    When I click login-register button
    And I enter "valid" register password
    Then I enter "right" first name and last name
    When I click continue button on registration page
    Then Validate HomePage
    When Go to My Account page
    Then Click on View Subscription Offers
    Then User clicks on Digital Plan Monthly
    Then Validate user is redirected to Payment gateway page
    Then Input CreditCard Payment details
    Then  User completes the purchase
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Logout from Customer application

  Scenario: TC_02_Validate the status of Digital Subscriber in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Cancellation email id in the search box in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate if Cancellation user has active subscription
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

  Scenario: TC_03_Validate Registrant User data in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zuora Subscription URL
    Then Search the subscription in Zuora for OnlineCancellationTest
    Then validate the status of the subscription before cancellation
    And I logout from Zuora

  Scenario: TC_04_During the cancelation cancelation flow user will be presented with one downsell offer
    Given I launch login from homepage
    Then I fill in existing email for Onlinecancellation
    When I click login-register button
    And I enter "valid" register password
    When I click login-register button
    Then Validate HomePage
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Click on Cancel your subscription
    Then Click on Continue to cancel button to verify the availability of one downsell offer
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

  Scenario: TC_05_During the cancelation cancelation flow user will be presented with 1 downgrade offer
    Given I launch login from homepage
    Then I fill in existing email for Onlinecancellation
    When I click login-register button
    And I enter "valid" register password
    When I click login-register button
    Then Validate HomePage
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Click on Cancel your subscription
    Then Click on Continue to cancel button to verify the availability of one downgrade offer
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

  Scenario: TC_06_User cancelling Digital plan subscription
    Given I launch login from homepage
    Then I fill in existing email for Onlinecancellation
    When I click login-register button
    And I enter "valid" register password
    When I click login-register button
    Then Validate HomePage
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Click on Cancel your subscription
    Then Click on Continue to cancel button on the downgrade offers
    Then Finally click on Cancel my subscription
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application


  #####################################SALESFORCE#########################################

  Scenario: TC_07_Validate status of the subscription after Cancellation in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Cancellation email id in the search box in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate the status of the subscription view in Zuora as Cancelled after the Cancellation process
    Then Validate the status of the subscription as Pending Cancellation before the Cancellation process
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    


  ##############################################ZUORA##########################################

  Scenario: TC_08_Validate Registrant User data in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zuora Subscription URL
    Then Search the subscription in Zuora for OnlineCancellationTest
    Then validate the status of the subscription after cancellation
    And I logout from Zuora


  ########################################## RESTART SUBSCRIPTION ####################################

  Scenario: TC_09_User restart the Digital plan subscription again
    Given I launch login from homepage
    Then I fill in existing email for Onlinecancellation
    When I click login-register button
    And I enter "valid" register password
    When I click login-register button
    Then Validate HomePage
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Click on Restart your subscription
    Then Verify Subscription is restarted successfully
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Logout from Customer application

  Scenario: TC_10_Validate the status of Digital Subscriber in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce
    And Enter the Cancellation email id in the search box in Salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then User clicks on Subscriptions tab
    Then Validate if user has active subscription
    Then Close Opened tabs in salesforce
    Then Close Opened tabs in salesforce

  Scenario: TC_11_Validate Registrant User data in Zoura
    When I launch Zoura application
    Then Login to Zoura
    Then Go to Zuora Subscription URL
    Then Search the subscription in Zuora for OnlineCancellationTest
    Then validate the status of the subscription before cancellation
    And I logout from Zuora











# pre requisite: User has a active digital subscription
# User can soft cancel their subscription in their myaccount
# During the cancelation cancelation flow user will be presented with 2 offers ( 1 downsell and 1 downgrade )
# If user choses to ignore the offers and complete the cancelation flow the users subscription will change from Active to pending cancelation in SF and from Active to canceled in Zuora. The subscription will remain in a pending cancellation until the end of their billing term and when reached  the subscription will be switched from pending cancelation to cancelled/Inactive in salesforce and all entitlements will be removed and user will convert back to a registrant.
# User will receive a conformation of their cancellation in their inbox at the end of their billing term
# Cancelation restart flow: Once user has soft cancelled their subscription, user should have the option to restart their subscription.
# There are 2 CTAs to restart the subscription.
# 1. is the cancel conformation page
# 2. is with Manage you details in My Account
# Once the subscription has been restarted the same validations should apply accross frontend SF etc to verify user status  has been updated.

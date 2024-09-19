Feature: ETE 131 Digital Plus monthly and Annual subscription completes Downsell offer

# ##################################################-----------Digital Plus Monthly Subscription-------##########################################

Scenario: TC_A_01:User purchasing Digital Plus plan Monthly with credit card
    Given I launch login from homepage
    Then  Action Keys Set One
    And   I fill in new digitaltest131_1 email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  Click on View Subscription Offers
    Then  User clicks on Digital Plan Monthly
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_A_02:Validate Digital Plus Monthly Sub bought via credit card details in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitaltest131_1 email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    When  Copy the bonus url for digitaltest131_1
    When  Copy the bonus url for digitaltest131_1_2
    When  Copy the bonus url for digitaltest131_1_3
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    Then  Validate Your Payment section
    When  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_A_03:Validate Digital Plus Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_1 in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digitaltest131_1 user has active subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_A_04:Validate Digital Plus Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitaltest131_1 subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    Then LogOut from Piano

Scenario: TC_A_05:Validate Digital Plus Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_1
    Then In Zoura I validate that Subscription is active for digitaltest131_1
    And I logout from Zuora 

Scenario: TC_A_06:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new first bonus email digitaltest131_1
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_1Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then Go to My Account page
    Then Logout from Customer application
    #Then I logout from customer app

Scenario: TC_A_07:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new second bonus email digitaltest131_1
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_1_2Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then Go to My Account page
    Then Logout from Customer application
    #Then I logout from customer app

Scenario: TC_A_08:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new third bonus email digitaltest131_1
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_1_3Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then Go to My Account page
    Then Logout from Customer application
    #Then I logout from customer app

Scenario: TC_A_09:Validate Bonus Subscriber subscription status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_1Bonus in the search box in SF
    And Open the Account Page
    Then Validate if digitaltest131_1Bonus has active subscription in SF
    Then Close Opened tabs in salesforce

Scenario: TC_A_10:Validate Bonus user Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_1Bonus
    Then In Zoura I validate that Subscription is active for digitaltest131_1Bonus
    And I logout from Zuora

Scenario: TC_A_11:Validate User can claim Downsell offer
    Given I launch login from homepage
    And   I fill in existing digitaltest131_1 email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Digital User can claim Downsell offer
    When  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_A_12:Validate Digital Plus Monthly Sub Downsell details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_1 in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digitaltest131_1 Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_A_13:Validate Digital Plus Subscriber Downsell details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_1
    Then validate downgrade details for digitaltest131_1 in zuora
    And I logout from Zuora 

Scenario: TC_A_14:Validate Bonus sub is working after Downsell offer claim in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitaltest131_1Bonus email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    When  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

    ##################################################-----------Digital Plus Annual Subscription-------##########################################

Scenario: TC_B_01:User purchasing Digital Plus plan Annually with credit card
    Given I launch login from homepage
    And I fill in new digitaltest131_2 email
    When I click login-register button
    And I enter "valid" register password
    Then I enter "right" first name and last name
    When I click continue button on registration page
    Then Validate HomePage
    When Go to My Account page
    Then Click on View Subscription Offers
    Then User clicks on Digital Plan Annually
    Then Validate user is redirected to Payment gateway page
    Then Input CreditCard Payment details
    Then User completes the purchase
    When Go to My Account page
    Then Click on Manage Your Details button
    Then Logout from Customer application
    #Then I logout from customer app

Scenario: TC_B_02:Validate Digital Plus Annual Sub bought via CreditCard details in Telegraph
    Given I launch login from homepage
    And I fill in existing digitaltest131_2 email
    When I click login-register button
    And I enter "valid" register password
    When I click login-register button
    When Go to My Account page
    When Copy the bonus url for digitaltest131_2
    When Copy the bonus url for digitaltest131_2_2
    When Copy the bonus url for digitaltest131_2_3
    Then Click on Manage Your Details button
    Then Validate Your Subscription section
    Then Validate Your Payment section
    When Go to My Account page
    Then Logout from Customer application
    #Then I logout from customer app

Scenario: TC_B_03:Validate Digital Annual Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_2 in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digitaltest131_2 user has active subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_B_04:Validate Digital Annual Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter digitaltest131_2 subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    Then LogOut from Piano

Scenario: TC_B_05:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_2
    Then In Zoura I validate that Subscription is active for digitaltest131_2
    And I logout from Zuora

Scenario: TC_B_06:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new bonus email digitaltest131_2
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_2Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_B_07:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new second bonus email digitaltest131_2
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_2_2Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_B_08:Redeem Bonus account from donors bonus link
    Given I launch login from homepage
    And I fill in new third bonus email digitaltest131_2_3
    And I click login-register button
    And I enter "valid" register password
    And I enter "right" first name and last name
    And I click continue button on registration page
    And Validate HomePage
    And Go to My Account page
    And I open the digitaltest131_2_3Bonus URL
    And I validate bonus subscription is not redeem
    And I activate bonus subscription
    And User completes Bonus Onboarding Journey
    And Go to My Account page
    And Go to My Account page
    When Click on Manage Your Details button
    Then I check the bonus subscription start date with current plan
    And I Validate Payment details do not exist for Bonus account
    Then  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_B_09:Validate Bonus Subscriber subscription status in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_2Bonus in the search box in SF
    And Open the Account Page
    Then Validate if digitaltest131_2Bonus has active subscription in SF
    Then Close Opened tabs in salesforce

Scenario: TC_B_10:Validate Bonus user Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_2Bonus
    Then In Zoura I validate that Subscription is active for digitaltest131_2Bonus
    And I logout from Zuora

Scenario: TC_B_11:Validate User can claim Downsell offer
    Given I launch login from homepage
    And   I fill in existing digitaltest131_2 email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Digital User can claim Downsell offer
    When  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app

Scenario: TC_B_12:Validate Digital Annual Sub Downsell details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digitaltest131_2 in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digitaltest131_2 Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_B_13:Validate Digital Subscriber Downsell details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for digitaltest131_2
    Then validate downgrade details for digitaltest131_2 in zuora
    And I logout from Zuora

Scenario: TC_B_14:Validate Bonus sub is working after Downsell offer claim in Telegraph
    Given I launch login from homepage
    And   I fill in existing digitaltest131_2Bonus email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate Your Subscription section
    When  Go to My Account page
    Then Logout from Customer application
    #Then  I logout from customer app


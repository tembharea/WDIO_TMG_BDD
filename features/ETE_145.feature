Feature: ETE 128 Digital monthly and Annual subscription completes Downsell offer

#######################################-----------Digital User Downsell Offer Claim For Digital Sub-------##########################################

Scenario: TC_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    And   I fill in new digital2024 email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  I navigate to digital 2024 subscription page
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase and adds Puzzle as a bolt on
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then I verify that i have both digital 2024 and puzzle subscriptions
    

Scenario: TC_02:Validate Digital Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024 email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if Custnewdigi2024 user has active subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_03:Validate Digital Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Custnewdigi2024 subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    Then LogOut from Piano

Scenario: TC_04:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Custnewdigi2024
    Then In Zoura I validate that Subscription is active for Custnewdigi2024
    And I logout from Zuora 

Scenario: TC_05:Validate User can claim Downsell offer
    Given I launch login from homepage
    And   I fill in existing newDigital email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate newDigital User can claim downsell offer
    When  Go to My Account page
    Then  I logout from customer app

Scenario: TC_06:Validate Digital Monthly Sub Downsell details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024a email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digital2024 Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_7:Validate Digital Subscriber Downsell details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Custnewdigi2024
    Then validate downgrade details for newDigital in zuora
    And I logout from Zuora 

# ##############################-----------Digital User Downgrade Offer claim For Digital Sub-------------#################################

Scenario: TC_A_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    And   I fill in new digital2024a email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  I navigate to digital 2024 subscription page
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase and adds Puzzle as a bolt on
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then I verify that i have both digital 2024 and puzzle subscriptions
    

Scenario: TC_A_02:Validate Digital Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024a email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if Custnewdigi2024a user has active subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_A_03:Validate Digital Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Custnewdigi2024a subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    Then LogOut from Piano

Scenario: TC_A_04:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Custnewdigi2024a
    Then In Zoura I validate that Subscription is active for Custnewdigi2024a
    And I logout from Zuora 

Scenario: TC_A_05:Validate User can claim Downgrade offer
    Given I launch login from homepage
    And   I fill in existing newDigitala email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate newDigital User can claim downgrade offer
    When  Go to My Account page
    Then  I logout from customer app

Scenario: TC_A_6:Validate Digital Monthly Sub downgrade details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024a email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if digital2024a Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_A_07:Validate Digital Subscriber downgrade details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for Custnewdigi2024a
    Then validate downgrade details for newDigital in zuora
    And I logout from Zuora 


######################################-----------Digital User Downsell Offer Claim For Puzzle Add On Sub-------##########################################

Scenario: TC_B_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    And   I fill in new digital2024b email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  I navigate to digital 2024 subscription page
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase and adds Puzzle as a bolt on
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then I verify that i have both digital 2024 and puzzle subscriptions
    

Scenario: TC_B_02:Validate Digital Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024b email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if addedOnPuzzle user has active puzzle subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_B_03:Validate Digital Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Custnewdigi2024b subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano

Scenario: TC_B_04:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for addONPuzzle
   Then In Zoura I validate that Subscription is active for addOnPuzzle
    And I logout from Zuora 

Scenario: TC_B_05:Validate User can claim Downsell offer
    Given I launch login from homepage
    And   I fill in existing newDigitalb email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate newDigital User can claim downsell offer for Puzzle subscription
    When  Go to My Account page
    Then  I logout from customer app

Scenario: TC_B_06:Validate Digital Monthly Sub downgrade details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024b email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if addOnPuzzle Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_B_07:Validate Digital Subscriber downgrade details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for addONPuzzle
    Then validate downgrade details for newDigital in zuora
    And I logout from Zuora 

    ######################################-----------Digital User Downgrade Offer Claim For Puzzle Add On Sub-------##########################################

Scenario: TC_C_01:User purchasing Digital plan Monthly with credit card
    Given I launch login from homepage
    And   I fill in new digital2024c email
    When  I click login-register button
    And   I enter "valid" register password
    Then  I enter "right" first name and last name
    When  I click continue button on registration page
    Then  Validate HomePage
    When  Go to My Account page
    Then  I navigate to digital 2024 subscription page
    Then  Validate user is redirected to Payment gateway page
    Then  Input CreditCard Payment details
    Then  User completes the purchase and adds Puzzle as a bolt on
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then I verify that i have both digital 2024 and puzzle subscriptions
    

Scenario: TC_C_02:Validate Digital Monthly Sub bought via credit card details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024c email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if addedOnPuzzlea user has active puzzle subscription in salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_C_03:Validate Digital Monthly Sub bought via credit card details in Piano
    Given User opens Piano URL
    When User logins to Piano account
    When Navigate to All Users page
    And  Enter Custnewdigi2024c subscriber email in search box in piano
    Then Validate Registration date in Piano
    Then Validate Piano UiD
    Then Validate Access details in Piano
    Then LogOut from Piano
    

Scenario: TC_C_04:Validate Digital Subscriber Account number is generated in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for addONPuzzlea
    Then In Zoura I validate that Subscription is active for addOnPuzzlea
    And I logout from Zuora 

Scenario: TC_C_05:Validate User can claim Downsell offer
    Given I launch login from homepage
    And   I fill in existing newDigitalc email
    When  I click login-register button
    And   I enter "valid" register password
    When  I click login-register button
    When  Go to My Account page
    Then  Click on Manage Your Details button
    Then  Validate newDigital User can claim downgrade offer for Puzzle subscription
    When  Go to My Account page
    Then  I logout from customer app

Scenario: TC_C_06:Validate Digital Monthly Sub downgrade details in Salesforce
    When I launch Salesforce URL
    Then I login to Salesforce
    Then Close Opened tabs in salesforce
    And Enter the digital2024c email in the search box of salesforce
    Then Open the Account Page
    When User clicks on Details tab
    Then Validate if addOnPuzzle Downsell offer is displayed salesforce
    Then Close Opened tabs in salesforce

Scenario: TC_C_07:Validate Digital Subscriber downgrade details in Zoura
    Given I open zuora
    And Login to Zoura
    When Go to Zoura Subscription Page for addONPuzzlea
    Then validate downgrade details for newDigitalc in zuora
    And I logout from Zuora 
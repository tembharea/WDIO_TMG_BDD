Feature: ETE 6 Bonus Subscription
    #This is ticket number 3207, now known in JIRA as ETE-6
    #Scenario count : 5 as of 3rd Jan 2024

    Scenario: TC_01:User purchasing Digital plan with credit card
        Given I launch login from homepage
        Then  Action Keys Set One
        And   I fill in new digital for bonus email
        And  I click login-register button
        And   I enter "valid" register password
        And  I enter "right" first name and last name
        And  I click continue button on registration page
        And  Validate HomePage
        And  Go to My Account page
        And  Click on View Subscription Offers
        And  User clicks on Digital Plan Monthly
        And  Validate user is redirected to Payment gateway page
        And  Input CreditCard Payment details
        Then  User completes the purchase
        When  Go to My Account page
        Then  Validate 1 bonus promo code is generated
        And   Validate bonus promo code is Unused
        And   I copy the bonus url
        Then  Go to My Account page
        Then  Logout from Customer application

    Scenario: TC_02:Validate Registered subscription status in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalForBonus email in the sf search box
        Then Open the Account Page
        Then Validate if user has any active subscription
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_03:Validate Digital Subscriber Bonus Account details in Salesforce
        Given I launch Salesforce URL
        And I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalForBonus email in the sf search box
        And Open the Account Page
        Then Validate 1 bonus promo code is generated in the salesforce
        And Validate bonus promo code is Unused in salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_04:Redeem Bonus account from donors bonus link
        Given I launch login from homepage
        And I fill in new bonus email
        And I click login-register button
        And I enter "valid" register password
        And I enter "right" first name and last name
        And I click continue button on registration page
        And Validate HomePage
        And Go to My Account page
        And I open the bonus URL
        And I validate bonus subscription is not redeem
        And I activate bonus subscription
        And User completes Bonus Onboarding Journey
        And Go to My Account page
        And Go to My Account page
        When Click on Manage Your Details button
        Then I check the bonus subscription start date with current plan
        And I Validate Payment details do not exist for Bonus account
        Then  Go to My Account page
        Then  Logout from Customer application

    Scenario: TC_05:Validate Bonus Subscriber Account details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And Enter the Bonus Sub email id in the search box
        Then Open the Account Page
        Then Validate a GUID and PianoID are generated
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_06:Validate Bonus Subscriber subscription status in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the Bonus Sub email id in the search box
        Then Validate if user has active subscription Digital subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_07:Validate Digital Bonus Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        And  Enter Bonus subscriber email in search box
        Then Validate Registration date in Piano
        Then Validate Piano UiD
        Then Validate Access details in Piano for Bonus user

    Scenario: TC_08: Validate Bonus User name after redeemption of Bonus Promocode
        Given I launch login from homepage
        And I fill in existing digitalforBonus email
        When I click login-register button
        And I enter "valid" register password
        When I click login-register button
        Then Validate HomePage
        When Go to My Account page
        And I validate promo code is redeemed by bonus user


    Scenario: TC_09:Validate Bonus Subscriber Account details in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalForBonus email in the sf search box
        Then Open the Account Page
        And I open the promocode from salesforce and verify the user name
        Then Close Opened tabs in salesforce

    Scenario: TC_10:Validate Digital Subscriber in Zuora
        Given I open zuora
        And Login to Zoura
        And Go to Zoura Subscription Page for Bonus
        And In Zoura I validate subscriberID is present for Bonus
        Then I logout from Zuora





# User is able to redeem a bonus subscription.
# A user with no active subscription is eligible to redeem a bonus subscription.
# The user should be able to redeem the subscription successfully.
# User should receive a conformation email after redeeming their bonus subscription
# The user should have a subscription created in Zuora and Salesforce
# The users Subscription product in salesforce = Evergreen Subscription
# Type of subscription = Bonus
# In Salesforce the partner account should be generated with the name of the Donor account
# The bonus promo code in the Donors account should be set to used once the promo code has been redeemed
Feature: ETE 2 Subscription Acquisition MyAccount

    Scenario: TC_01:Verify a registrant user can navigate to the subshop where can view all subscriptions.
        Given I launch login from homepage
        Then  Action Keys Set One
        Then  I fill in new emailOne for Subscription Acquisition
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Select the View your subscriptions CTA in MyAccount
        Then  Verify navigate to the subshop
        Then  User can view all subscriptions
        Then  Logout from Customer application

    Scenario: TC_02:User purchasing Digital plan with credit card
        Given I launch login from homepage
        Then I fill in existing Digital ete2One email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plan Annually
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application 

    Scenario: TC_03:Verify the status of the subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And Enter the Digital ete2One id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on Subscriptions tab
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_04:Verify the Entitlements of Digital Subscriber in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the Digital ete2One id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on System tab
        Then Validate Entitlements are added in Salesforce for active subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_05:Validate Digital Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        Then Enter existing etee2One subscriber email in search box
        Then Validate Access details in Piano

    Scenario: TC_06:Validate Digital Subscriber User data in Zoura
        When I launch Zoura application
        Then Login to Zoura
        Then Search the subscription in Zuora for ete2
        Then validate Zuora Data for ete2


    Scenario: TC_07:User purchasing Digital plan with paypal
        Given I launch login from homepage
        Then  I fill in new email for Subscriptiontwo Acquisition
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plan Annually
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        When  Go to My Account page
        Then  Logout from Customer application

    Scenario: TC_08:Verify the status of the subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the email id in the search box in Salesforce for DigitalMonthly in ete2
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on Subscriptions tab
        Then Validate if user has active subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_09:Verify the Entitlements of Digital Subscriber in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the email id in the search box in Salesforce for DigitalMonthly in ete2
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on System tab
        Then Validate Entitlements are added in Salesforce for active subscription
        Then Close Open tabs in Salesforce


    Scenario: TC_10:Validate Digital Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        Then Enter existing subscriber email in search box
        Then Validate Access details in Piano

    Scenario: TC_11:Validate Digital Subscriber User data in Zoura
        When I launch Zoura application
        Then Login to Zoura
        Then Search the subscription in Zuora in ete2
        Then validate the status of the subscription in Zuora

    Scenario: TC_12:User purchasing Digital plan with American Express Card
        Given I launch login from homepage
        Then  I fill in new email for Subscriptionthree Acquisition
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plan Annually
        Then  Validate user is redirected to Payment gateway page
        Then  Input American Express Payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_13:Verify the status of the subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the email id in the search box in Salesforce for NewCustEmailthree
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on Subscriptions tab
        Then Validate if user has active subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_14:Verify the Entitlements of Digital Subscriber in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the email id in the search box in Salesforce for NewCustEmailthree
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on System tab
        Then Validate Entitlements are added in Salesforce for active subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_15:Validate Digital Subscriber User data in Zoura
        When I launch Zoura application
        Then Login to Zoura
        Then Search the subscription in Zuora for NewCustEmailthree
        # Then validate the status of the subscription for NewCustEmailthree

    Scenario: TC_16:Validate Digital Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        Then Enter digial username and search
        Then Validate Accesss details in Piano for Digital

    Scenario: TC_17:User purchasing Digital Plus plan with credit card
        Given I launch login from homepage
        And   I fill in new DigitalPlusCC emailtwo
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        Then  Input CreditCard Payment details
        Then  User completes the purchase for DigitalPlus
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_18:Verify the Entitlements of Digital Plus Subscriber in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlus ete2ame2 id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on System tab
        Then Validate Entitlements are added in Salesforce for active subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_19:Verify the status of the subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And Enter the DigitalPlus ete2ame2 id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on Subscriptions tab
        Then Validate if user has activee subscription
        Then Close Opened tabs in salesforce

    Scenario: TC_20:Validate Digital Plus Subscriber User data in Zoura
        When I launch Zoura application
        Then Login to Zoura
        When Go to Zoura Subscription Page for DigitalPlus
        Then Validate Subscription End date
        Then Validate Subscription start date

    # Scenario: TC_10:Validate Digital Plus Subscriber data in Piano
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     Then Enter existing subscriber email in search box
    #     Then Validate Access details in Piano

    # Scenario: TC_22:User purchasing Digital Plus plan with paypal
    #     Given I launch login from homepage
    #     Then  I fill in new email for Digital Plus for ete2
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     Then  I enter "right" first name and last name
    #     When  I click continue button on registration page
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Click on View Subscription Offers
    #     Then  User clicks on Digital Plus Plan Monthly
    #     Then  Validate user is redirected to Payment gateway page
    #     Then  Input CreditCard Payment details
    #     Then  User completes the purchase for DigitalPlus
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Logout from Customer application


    # Scenario: TC_23:Verify the status of the subscription in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     Then Close Opened tabs in salesforce
    #     And Enter the DigitalPlus ete2 id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     Then User clicks on Subscriptions tab
    #     Then Validate if user has active subscription
    #     Then Close Opened tabs in salesforce

    # Scenario: TC_24:Verify the Entitlements of Digital Plus Subscriber in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     Then Close Opened tabs in salesforce
    #     And Enter the DigitalPlus ete2 id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     Then User clicks on System tab
    #     Then Validate Entitlements are added in Salesforce for active subscription
    #     Then Close Opened tabs in salesforce

    # Scenario: TC_25:Validate Digital Plus Subscriber data in Piano
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     Then Enter Digital Plus user subscriber email in search box
    #     Then Validate Access details in Piano for Digital Plus sub

    # Scenario: TC_26:Validate Digital Plus Subscriber User data in Zoura
    #     When I launch Zoura application
    #     Then Login to Zoura
    #     Then Search the subscription in Zuora
    #     Then validate the status of the subscription before cancellation

    Scenario: TC_21:User purchasing Digital Plus plan with American Express Card
        Given I launch login from homepage
        Then  I fill in new email for Digital Plus for ete2 american express
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  User clicks on Digital Plus Plan Monthly
        Then  Validate user is redirected to Payment gateway page
        Then  Input American Express Payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_22:Verify the status of the subscription in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        And Enter the DigitalPlus ete2ame id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on Subscriptions tab
        Then Validate if user has active subscription
        Then Close Open tabs in Salesforce

    Scenario: TC_23:Verify the Entitlements of Digital Plus Subscriber in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        And Enter the DigitalPlus ete2ame id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then User clicks on System tab
        Then Validate Entitlements are added in Salesforce for active subscription
        Then Close Open tabs in Salesforce

    Scenario: TC_24:Validate Digital Plus Subscriber User data in Zoura
        When I launch Zoura application
        Then Login to Zoura
        Then Search the subscription in Zuora for Digital Plus
        Then Validate the digital plus subs details in Zoura

    Scenario: TC_25:Validate Digital Plus Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        Then Enter Digital Plus user subscriber email in search box
        Then Validate Access details in Piano for Digital Plus sub


            #########################################PUZZLE#######################################

    # Scenario: TC_32:User purchasing puzzles subscription using Credit card
    #     Given I launch login from homepage
    #     And   I fill in new PuzzleTwo email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     Then  I enter "right" first name and last name
    #     When  I click continue button on registration page
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Click on View Subscription Offers
    #     Then  Navigate to Puzzles Subscription option in View Subscription page
    #     Then  Select Annual plan of Puzzles
    #     Then  Validate user is redirected to Payment gateway page
    #     Then  Input CreditCard Payment details
    #     Then  Post Payment redirect to Puzzles
    #     Then  Validate Puzzles Homepage
    #     Then  Navigate to MyAccount from Puzzles Page
    #     Then  Click on Manage Your Details button
    #     Then  Logout from Customer application

    # Scenario: TC_33:Validate Puzzle subscription status in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     Then Validate if user has any active subscription
    #     Then Close Recently Opened Tab in Salesforce


    # Scenario: TC_34:Validate Puzzles Subscriber Entitlements data in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     When User clicks on System tab
    #     Then Validate Entitlements are added in Salesforce for active subscription
    #     Then Close Recently Opened Tab in Salesforce

    # Scenario: TC_35:Validate Puzzle Subscriber User data in Zoura
    #     When I launch Zoura application
    #     Then Login to Zoura
    #     Then Search the subscription in Zuora
    #     Then validate the status of the subscription before cancellation

    # Scenario: TC_36:Validate Puzzles Subscriber data in Piano
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     And  Enter Puzzle subscriber email in search box
    #     Then Validate Registration date in Piano
    #     Then Validate Piano UiD
    #     Then Validate Access details in Piano for Puzzles



    # Scenario: TC_37:User purchasing puzzles subscription using American Express Card
    #     Given I launch login from homepage
    #     And   I fill in new PuzzleTwo email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     Then  I enter "right" first name and last name
    #     When  I click continue button on registration page
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Click on View Subscription Offers
    #     Then  Navigate to Puzzles Subscription option in View Subscription page
    #     Then  Select Annual plan of Puzzles
    #     Then  Validate user is redirected to Payment gateway page
    #     Then  Input American Express Payment details
    #     Then  Post Payment redirect to Puzzles
    #     Then  Validate Puzzles Homepage
    #     Then  Navigate to MyAccount from Puzzles Page
    #     Then  Click on Manage Your Details button
    #     Then  Logout from Customer application

    # Scenario: TC_38:Validate Puzzle subscription status in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     Then Validate if user has any active subscription
    #     Then Close Recently Opened Tab in Salesforce


    # Scenario: TC_39:Validate Puzzles Subscriber Entitlements data in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     When User clicks on System tab
    #     Then Validate Entitlements are added in Salesforce for active subscription
    #     Then Close Recently Opened Tab in Salesforce

    # Scenario: TC_40:Validate Puzzle Subscriber User data in Zoura
    #     When I launch Zoura application
    #     Then Login to Zoura
    #     Then Search the subscription in Zuora
    #     Then validate the status of the subscription before cancellation

    # Scenario: TC_41:Validate Puzzles Subscriber data in Piano
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     And  Enter Puzzle subscriber email in search box
    #     Then Validate Registration date in Piano
    #     Then Validate Piano UiD
    #     Then Validate Access details in Piano for Puzzles


    # Scenario: TC_42:User purchasing puzzles subscription using paypal
    #     Given I launch login from homepage
    #     And   I fill in new PuzzleTwo email
    #     When  I click login-register button
    #     And   I enter "valid" register password
    #     Then  I enter "right" first name and last name
    #     When  I click continue button on registration page
    #     Then  Validate HomePage
    #     When  Go to My Account page
    #     Then  Click on View Subscription Offers
    #     Then  Navigate to Puzzles Subscription option in View Subscription page
    #     Then  Select Annual plan of Puzzles
    #     Then  Validate user is redirected to Payment gateway page
    #     Then  Input paypal Payment details
    #     Then  Post Payment redirect to Puzzles
    #     Then  Validate Puzzles Homepage
    #     Then  Navigate to MyAccount from Puzzles Page
    #     Then  Click on Manage Your Details button
    #     Then  Logout from Customer application

    # Scenario: TC_43:Validate Puzzle subscription status in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     Then Validate if user has any active subscription
    #     Then Close Recently Opened Tab in Salesforce


    # Scenario: TC_44:Validate Puzzles Subscriber Entitlements data in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     And Enter the Puzzles email id in the search box
    #     Then Open the Account Page
    #     When User clicks on Details tab
    #     When User clicks on System tab
    #     Then Validate Entitlements are added in Salesforce for active subscription
    #     Then Close Recently Opened Tab in Salesforce

    # Scenario: TC_45:Validate Puzzle Subscriber User data in Zoura
    #     When I launch Zoura application
    #     Then Login to Zoura
    #     Then Search the subscription in Zuora
    #     Then validate the status of the subscription before cancellation

    # Scenario: TC_46:Validate Puzzles Subscriber data in Piano
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     And  Enter Puzzle subscriber email in search box
    #     Then Validate Registration date in Piano
    #     Then Validate Piano UiD
    #     Then Validate Access details in Piano for Puzzles



            # As a registrant user i should able to select the View your subscriptions cta in MyAccount and be navigated to the subshop where i can view all subscriptions.
            # The Registrant should be able to purchase all subscriptions via any payment method successfully.
            # The registrant should be changed to a active subscriber with all in entitlements in piano and salesforce
            # The registrant should now have a active subscription in salesforce and Zuora
            # If The registrant purchases a print subscription then they should be a active subscriber however in sf there status should be pending based on their start date, they should also have a account created in MPP and piano
            # Registrants should receive conformation emails of their subscriptions in their inbox

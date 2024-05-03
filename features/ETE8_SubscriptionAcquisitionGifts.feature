Feature: ETE 8 Subscription Acquisition Gifts
    #This is ticket number 3207, now known in JIRA as ETE-8
    #Scenario count : 15 as of 3rd Jan 2024

    Scenario: TC_01:User purchasing Puzzles Gift subscription
        Given I launch login from homepage
        And   I fill in new Gift email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Gift Subshop Page
        Then  Click on Gift Puzzles Subscription
        Then  Input Gift Address details
        Then  Input Receipent name details
        Then  Add Personal Touch message
        Then  Input MPP payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_02:Validate Promo Code for Gift is Generated
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Gift email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Promo Code is Generated
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_03:Redeem Gift Subscription
        Given I launch Gift Redeem URL
        When  Redemption of gift subscription
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_04:Validate Promo Code for Gift is Used
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Gift email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Promo Code is Used
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_05:Validate no subscription details exists for Gift Donor
        Given I launch login from homepage
        And   I fill in existing Gift email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application
        

    Scenario: TC_06:Validate subscription details exists for Gift receipent user
        Given I launch login from homepage
        And   I fill in existing Gift receipent email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_07:Validate Gift Receipent Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        And  Enter Gift Receipenet email in search box
        Then Validate Registration date in Piano
        Then Validate Piano UiD
        Then Validate Access details in Piano for Gift
        Then LogOut from Piano

    Scenario: TC_08:Validate no subscription details exists for Gift Donor in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Gift email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate no Subscription exists for Gift Donor in salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_09:Validate subscription details exists for Gift Receipent user in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce
        And  Enter the Gift redeem email id in the search box
        Then Open the Account Page for GiftReceipent
        When User clicks on Details tab
        Then Validate Subscription exists for Gift Receipent in salesforce
        Then Close Opened tabs in salesforce
        Then Close Opened tabs in salesforce

    Scenario: TC_10:Validate Gift Donor Payent details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the Gift Donor email id in the MPP search box
        Then Open the Account Page in MPP
        Then Validate Payment details in MPP
        Then Logout from MPP platform

    Scenario: TC_11:User purchasing Gift subscription Digital
        Given I launch login from homepage
        And   I fill in new GiftTwo email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Gift Subshop Page
        Then  Click on Gift Digital Subscription
        Then  Input Gift Address details
        Then  Input Receipent name details
        Then  Add Personal Touch message
        Then  Input MPP payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_12:User purchasing Gift subscription Digital Plus
        Given I launch login from homepage
        And   I fill in new GiftThree email
        When  I click login-register button
        And   I enter "valid" register password
        Then  I enter "right" first name and last name
        When  I click continue button on registration page
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on View Subscription Offers
        Then  Naviagate to Gift Subshop Page
        Then  Click on Gift Digital Plus Subscription
        Then  Input Gift Address details
        Then  Input Receipent name details
        Then  Add Personal Touch message
        Then  Input MPP payment details
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_13:Validate Promo Code for Digital Gift is Generated
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the GiftTwo email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Digital Promo Code is Generated
        Then Close Opened tabs in salesforce

    Scenario: TC_14:Validate Promo Code for DigitalPlus Gift is Generated
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the GiftThree email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Digital Plus Promo Code is Generated
        Then Close Opened tabs in salesforce

    Scenario: TC_15:Redeem Gift Subscription for Digital
        Given I launch GiftDigital Redeem URL
        When  Redemption of GiftTwo subscription
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_16:Redeem Gift Subscription for DigitalPlus
        Given I launch GiftDigitalPlus Redeem URL
        When  Redemption of GiftThree subscription
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_17:Validate Promo Code for Gift Digital Sub is Used
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the GiftTwo email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Promo Code is Used
        Then Close Opened tabs in salesforce

    Scenario: TC_18:Validate Promo Code for Gift DigitalPlus Sub is Used
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the GiftThree email id in the search box
        Then Open the Account Page
        When User clicks on Details tab
        Then Validate Gift Promo Code is Used
        Then Close Opened tabs in salesforce

    Scenario: TC_19:Validate Digital subscription details exists for Gift receipent user
        Given I launch login from homepage
        And   I fill in existing GiftTwo receipent email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_20:Validate DigitalPlus subscription details exists for Gift receipent user
        Given I launch login from homepage
        And   I fill in existing GiftThree receipent email
        When  I click login-register button
        And   I enter "valid" register password
        When  I click login-register button
        Then  Validate HomePage
        When  Go to My Account page
        Then  Click on Manage Your Details button
        Then  Logout from Customer application

    Scenario: TC_21:Validate Digital Gift Receipent Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        And  Enter GiftTwo Receipent email in search box
        Then Validate Registration date in Piano
        Then Validate Piano UiD
        Then Validate Access details in Piano for Gift
        Then LogOut from Piano

    Scenario: TC_22:Validate DigitalPlus Gift Receipent Subscriber data in Piano
        Given User opens Piano URL
        When User logins to Piano account
        When Navigate to All Users page
        And  Enter GiftThree Receipent email in search box
        Then Validate Registration date in Piano            
        Then Validate Piano UiD
        Then Validate Access details in Piano for Gift
        Then LogOut from Piano

    Scenario: TC_23:Validate Digital Gift Donor Payent details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the GiftTwo Donor email id in the search box
        Then Open the Account Page for DigitalSubDonor in MPP
        Then Validate Payment details in MPP
        Then Logout from MPP platform

    Scenario: TC_24:Validate DigitalPlus Gift Donor Payent details in MPP
        When I launch MPP URL
        Then I login to MPP application
        And  Enter the GiftThree Donor email id in the search box
        Then Open the Account Page for DigitalPlusSubDonor in MPP
        Then Validate Payment details in MPP
        Then Logout from MPP platform

    Scenario: TC_25:Validate subscription details exists for Digital Gift Receipent user in Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        And  Enter the GiftTwo redeem email id in the search box
        Then Open the Account Page for GiftReceipent
        When User clicks on Details tab
        Then Validate Subscription exists for Gift Receipent in salesforce
        Then Close Opened tabs in salesforce

    # Scenario: TC_26:Validate subscription details exists for DigitalPlus Gift Receipent user in Salesforce
    #     When I launch Salesforce URL
    #     Then I login to Salesforce
    #     Then Close Opened tabs in salesforce
    #     And  Enter the GiftThree redeem email id in the search box
    #     Then Open the Account Page for GiftReceipent
    #     When User clicks on Details tab
    #     Then Validate Subscription exists for Gift Receipent in salesforce
    #     Then Close Opened tabs in salesforce









    #         # User is successfully able to purchase a gift subscription.
    #         # User can navigate to the gift subshop and and select digital, digital+ or puzzles to purchase as a gift.
    #         # If user has a account they cann directly login if they are a registrant they can create a account.
    #         # User can enter first/last name name and postcode and click continue
    #         # User can personalise there gift by entering recipients fist and last name and a personalised message
    #         # User can successfully complete payment via credit card and be redirected to the thank you page.
    #         # User will receive 2 emails one is  Confirmation of your purchase and the other is Welcome to your Telegraph gift subscription the second email is where the gift can be redeemed from via a cta.
    #         # In salesforce the gift Donors account will have generated a AO (account order) and within that there will be a AOI (account order item) which is where there will be the gift promocode in a un-used state untill the gift is redeemed
    #         # Payment details of the gift can be validated in MPP
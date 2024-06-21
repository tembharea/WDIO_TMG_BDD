Feature: Test
    

    #  Scenario: TC_01:Validate Piano Login Logout
    #     Given User opens Piano URL
    #     When User logins to Piano account
    #     When Navigate to All Users page
    #     #Then LogOut from Piano

    # Scenario: TC_A:Validate Registrant name in Salesforce
    #     When I launch Salesforce URL

    #  Scenario: TC_02:Validate Piano Login Logout
    #     Given User opens Piano URL
    #     #When User logins to Piano account
    #     When Navigate to All Users page
    #     #Then LogOut from Piano

    # Scenario: TC_B:Validate Registrant name in Salesforce
    #     When I launch Salesforce URL
        
    #   Scenario: TC_03:Validate Piano Login Logout
    #     Given User opens Piano URL
    #     #When User logins to Piano account
    #     When Navigate to All Users page
    #     #Then LogOut from Piano

    # Scenario: TC_D:Validate details in MPP
    #     When I launch MPP URL
    #     Then I login to MPP application
    #     And  Enter the Test email id in the search box
    #     Then Open the Account Page for Test in MPP
    #     Then Validate Payment details in MPP
    #     Then Logout from MPP platform


    # Scenario: TC_E:Validate details in MPP
    #     When I launch MPP URL
    #     Then I login to MPP application
    #     And  Enter the Test email id in the search box
    #     Then Open the Account Page for Test in MPP
    #     Then Validate Payment details in MPP
    #     Then Logout from MPP platform

    Scenario: TC_00:Testing Dev Console of Salesforce
        When I launch Salesforce URL
        Then I login to Salesforce
        Then Close Opened tabs in salesforce
        Then DevConsole Test
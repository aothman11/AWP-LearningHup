# V2_Bank Master

| **Bank Account Management**** ** |
| --- |

## Definition 

Company's banks accounts is represented in the system by a bank ID and bank Ids as maintain under a house bank whcih represent the company's bank

## Requirements & Expectations

With Bank Account Management, cash managers and bank accountants are able to centralize the management of bank accounts using bank account master data, a table view of banks and bank accounts, workflow processes (for opening, changing or closing bank accounts), and workflow processes for periodic review of master data.

Sample scenarios where Bank Account Management is required are listed as follows:

Scenario : Bank account master data management

Scenario : Manual Bank Statement

Bank Accounts should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| 01 | Workflow processes for opening, changing, or closing bank accounts | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Bank Accounts | Qassim |

## Data Conversion Requirements

Data Migration for Bank Accounts will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Watania Poultry team with coordination with Wi-Sys team

## Data Cleansing Requirements

Bank Accounts will be extracted from legacy system and cleaned using S4/HANA templates 

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Bank Accounts Data will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative Bank Accounts data will be done as well as by financial. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Bank Accounts.

| **Key Control Levels** | **Org. Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Bank Accounts Data | Company Code | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Bank Account management requires three responsibilities to be created and assigned to three different users in the organization. 

Three responsibilities are involved in the whole workflow of bank account management:

- Cash Manager (Rule number 74300006)

Tasks: Approve the change request of opening/changing/closing bank accounts.

- Bank Accountant (Rule number 74300007)

Tasks: Create the bank account opening/changing/closing request. After request is approved by cash manager, notify bank to create/change/close bank account. Update the bank key. Confirm that the bank account has been updated from the business perspective.

- Key User (Rule 74300008)

Task: Confirms that the relevant configuration for bank accounts is completed in the system  

## Configuration Considerations

- Creating the three responsibilities and assigning the rules to users

- Cash Manager (Rule number 74300006)

- Bank Accountant (Rule number 74300007)

- Key User (Rule 74300008)

								2 of 2

							1 of 2
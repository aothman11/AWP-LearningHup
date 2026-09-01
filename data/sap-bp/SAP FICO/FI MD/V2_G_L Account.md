# V2_G_L Account

| **General Ledger account**** ** |
| --- |

## Definition 

G/L account master records contain the data that is always needed by the General Ledger to determine the account's function. The G/L account master records control the posting of accounting transactions to G/L accounts and the processing of the posting data.

G/L account master records are divided into two areas so that company codes with the same chart of accounts can use the same G/L accounts.

**Chart of accounts area**

The chart of accounts area contains the data that is valid for all company codes, such as the account number.

**Company code specific area**

The company code specific area contains data that may vary from one company code to another, such as the currency in which the account may be posted.

## Requirements & Expectations

The G/L account master records control the posting of accounting transactions to G/L accounts and the processing of the posting data.

Sample scenarios where General Ledger Account is required are listed as follows:

Scenario: Procure to pay    

Scenario: Order to Cash   	

General Ledger Account should cover the below requirements:

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | All business transactions which are posted to G/L accounts are updated in the general ledger | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | GL accounts | Qassim |

## Data Conversion Requirements

Data Migration for GL accounts will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

## Data Cleansing Requirements

New chart of account will be created, creating GL accounts will use external number ranges based on GL account groups defined below. Old GL account Balances will be mapped to the new GL accounts with coordination between Watania Poultry team and WI-SYS team.

- Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

General Ledger accounts will be administrated centrally by Master Data Management (MDM) team located in Qassim.

For other branches, they will have access to display GL accounts and for changing or creation they should contact Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative GL master data will be done as well as by financial. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for GL accounts

| **Key Control Levels** | **Org****.**** Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| GL Master Data – In Chart of account | Client | MDM |  |
| GL Master Data – In Company Code | Company Code | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

G/L account master records contain the data that is always needed by the General Ledger to determine the account's function. The G/L account master records control the posting of accounting transactions to G/L accounts and the processing of the posting data.

G/L account master records are divided into two areas so that company codes with the same chart of accounts can use the same G/L accounts.

Chart of accounts area

The chart of accounts area contains the data that is valid for all company codes, such as the account number.

Company code specific area

The company code specific area contains data that may vary from one company code to another, such as the currency in which the account may be posted

## Configuration Considerations

- General Ledger Account Groups

| **G/L Account groups** | **Number range** |
| --- | --- |
| **Code** | **AR Description** | **EN Description** | **From** | **To** |
| 1AST | الأصول | Assets | 10000000 | 19999999 |
| 2LIB | الخصوم | Liabilities | 20000000 | 29999999 |
| 3OE | حقوق الملكية | Equity | 30000000 | 39999999 |
| 4REV | الإيرادات | Revenues | 40000000 | 49999999 |
| 5EXP | مصاريف تشغيلية | Operating Expenses | 50000000 | 59999999 |
| 6NOE | الإيرادات والمصاريف غير التشغيلية | Non-Operating Income and Expense | 60000000 | 69999999 |
| 7TAX | ذكاة و ضرائب الدخل | Zakat & Income Tax | 70000000 | 79999999 |
| 8SEC | عناصر تكلفة ثانويه | Secondary Costs | 80000000 | 89999999 |

- Master data template for **1AST**, **2****OE** and **3LIB** account group

| **Account Group****s** |
| --- |
| **Field Name** | **Data type** | **Length** | **Description** | **Optional** | **Mandatory** |
| Company Code | Alphanumeric | 4 | Company Code number |  | X |
| Account Number | Numeric | 10 | The G/L Account Number |  | X |
| GL Account Type | Alphanumeric |  | Account is balance sheet, P&L or secondary cost |  | X |
| Account Group | Alphanumeric | 30 | The account group determines the fields for the entry screens if you create or change a master record in the company code. The account group also determines in which number interval the account number must be. |  | X |
| Account Short Description | Alphanumeric | 20 | Short Description of the G/L Account |  | X |
| Account Long Description | Alphanumeric | 50 | Long Description of the G/L Account |  | X |
| Account Currency | Alphabetic | 3 | The currency code of the G/L account |  | X |
| Only balances in local currency | Binary | 1 | Indicates that balances are updated only in local currency when users post items to this account. | X |  |
| Tax category | Alphanumeric | 2 | You decide whether you want to use the account as a G/L account to which you make tax-relevant postings. | X |  |
| Posting without tax allowed? | Binary 1 | 1 |  | X |  |
| Recon. Account for Acc. Type |  |  | An entry in this field characterizes the G/L account as a reconciliation account. The reconciliation account ensures the integration of a sub ledger account into the general ledger. It is Vendor , customer, …. | X |  |
| Enable line item display | Binary | 1 | Enables line item display for the account |  | X |
| Open item management | Binary | 1 | To define this account is a clearing account or not | X |  |
| Sort Key | Numeric | 3 |  | X |  |
| Field Status Group | Alphanumeric | 4 | Determines the screen layout for document entry, Fields can have the following statuses: Optional entry, Mandatory entry, and Suppressed |  | X |
| Post Automatically only | Binary | 1 | The account can only accept postings automatically (by other modules) | X |  |
| Planning Level | Alphanumeric | 2 | The planning level is used to control displays in Cash Management. | X |  |
| Relevant to cash flow | Binary | 1 | Indicator that determines that the G/L account is a cash flow account | X |  |
| House bank | Alphanumeric | 5 | The code of the house bank | X |  |
| Bank account | Alphanumeric | 17 | The number of an bank account | X |  |

- Master data template for **4REV, 5EXP, 6NOE , 7TAX **and **8SEC **account group

| **Account Group****s** |
| --- |
| **Field Name** | **Data type** | **Length** | **Description** | **Optional** | **Mandatory** |
| Company Code | Alphanumeric | 4 |  |  | X |
| Account Number | Numeric | 10 | The G/L Account Number |  | X |
| GL Account Type | Alphanumeric |  |  |  | X |
| Account Group | Alphanumeric | 30 | The account group determines the fields for the entry screens if you create or change a master record in the company code. The account group also determines in which number interval the account number must be. |  | X |
| Account Short Description | Alphanumeric | 20 | Short Description of the G/L Account |  | X |
| Account Long Description | Alphanumeric | 50 | Long Description of the G/L Account |  | X |
| Account Currency | Alphabetic | 3 | The currency code of the G/L account |  | X |
| Only balances in local currency | Binary | 1 | Indicates that balances are updated only in local currency when users post items to this account. | X |  |
| Tax category | Alphanumeric | 2 | You decide whether you want to use the account as a G/L account to which you make tax-relevant postings. | X |  |
| Posting without tax allowed? | Binary 1 | 1 |  | X |  |
| Sort Key | Numeric | 3 |  | X |  |
| Cost element category | Numeric | 2 | Define the type of the cost element |  | X |
| Field Status Group | Alphanumeric | 4 | Determines the screen layout for document entry, Fields can have the following statuses: Optional entry, Mandatory entry, and Suppressed |  | X |
| Post Automatically only | Binary | 1 | The account can only accept postings automatically (by other modules) | X |  |
| Planning Level | Alphanumeric | 2 | The planning level is used to control displays in Cash Management. | X |  |

- Field Status Groups

| **Field Status Groups** |
| --- |
| **Field status group** | **Field status group description** |
| SECC | Secondary GL |
| YB01 | General (with text & assignment) |
| YB03 | Material consumption accounts |
| YB04 | Cost accounts |
| YB05 | Bank accounts (obligatory value date) |
| YB06 | Material accounts |
| YB07 | Asset accts |
| YB08 | Assets area clearing accounts |
| YB11 | Clearing accounts (with settlement per.) |
| YB14 | MM adjustment accounts |
| YB17 | Freight/customs provisions/clearing (MM) |
| YB29 | Revenue accounts |
| YB36 | Revenue accts (with cost center) |
| YB39 | Accts for pmnts on acct made for assets |
| YB45 | Goods/invoice received clearing accounts |
| YB59 | Inventory accounting material stock acct |
| YB67 | Reconciliation accounts AP |
| YB68 | Reconciliation accounts AR |

								2 of 6

							1 of 6
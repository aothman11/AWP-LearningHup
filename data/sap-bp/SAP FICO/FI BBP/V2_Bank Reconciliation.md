# V2_Bank Reconciliation

| **Banks Reconciliation** |
| --- |

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Record Bank Statements | S |  |
| 02 | Record Bank Loans (Metals Contracts) | S |  |
| 03 | Record Bank Facilities | S |  |

## Business Process Description

The bank credits the collection, the direct debit, the deposited checks, and a bank transfer from a customer and vendor to your account. As in the case currently under consideration, some open items have already been cleared by the automatic payment and the check deposit. The posting of the bank statement in these cases clears the open items bank clearing account.

| Process Characteristics |
| --- |
| Process Trigger | Online Bank statement or Bank statement received by e-mail |
| Process Input | Bank Statement recorded |
| Process Output | Open items bank clearing accounts cleared |
| Process Owner | Bank Accountant |
| Process Volumes | 6 |
| Process Frequencies | Daily |

## Business Process Diagrams

- Manual Bank Statement

- Bank Loans

- Bank Facilities

## Process Step Detailed Requirements & Solution

- Manual Bank Statement

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Bank Accountant** | **A/R Accountant** | **A/P Accountant** |
| Trigger | Bank Statement Received |  |  |  |  |  |
| 01 | Prepare Bank Statement in proper format | Manual |  | R |  |  |
| 02 | Record Manual Bank Statement | FF67 | Manage Bank Statements | R | I | I |
| 03 | Post Process the Bank Statement | FEBA_BANK_STATEMENT | Reprocess Bank Statement Items | R | I | I |
| 05 | Clear Bank Incoming Clearing Accounts | F-03 | Clear G/L Accounts | I | R | I |
| 06 | Clear Bank Outgoing Clearing Accounts | F-03 | Clear G/L Accounts | I | I | R |
| Output | Bank Statement Recorded, posted and clearing accounts cleared. |  |  |  |  |  |

- Bank Loans

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **Journal Entry** | **FIORI App.** | **Bank Accountant** | **Note** |
| Trigger | Bank “X” grant loan for the company |  |  |  |  |  |
| 01 | Receipt Loan Cash on Bank account | FF67 | Dr. Bank Main Acc. | Manage Bank Statements | R |  |
|  |  |  | Cr. Bank Loan Acc. |  |  |  |
| 02 | Post Process The Bank Statement | FEBA_BANK_STATEMENT |  | Reprocess Bank Statement Items | R | To check that all bank statement transactions have been posted successfully |
| 03 | Loan Liability Record | FB60 | Dr. Bank Loan Acc. | Create Incoming Invoice | R | Banks will be mapped as vendors on reconciliation account Creditor Banks - Loan number should be entered in Reference, Assignment & line item text field. - Enter suitable payment term to track the due dates of these loans  - User Choose Special GL for Long or short term Metals Contracts loan. |
|  |  |  | Dr. Financial Burden Acc. |  |  |  |
|  |  |  | Cr. Vendor (Metal Contracts) |  |  |  |
| 04 | Record Recurring Entries (The burden of financing) |  | Dr. Financial Burden Expense Acc. | Enter Recurring Entry | R | To Distribute the financial burdens on Metals Contracts Loan periods. |
|  |  |  | Cr. Financial Burden Acc. |  |  |  |
| 05 | Monitor Bank Due Date | FBL1N |  | Manage Vendor Line Items | R |  |
| 06 | Record Loan Refund with bank statement | FF67 | Dr. Bank Loan Acc. | Manage Bank Statements | R | To refund the total loan (loan + financial burden) when it is due |
|  |  |  | Cr. Bank Main Acc. |  |  |  |
| 07 | Post Process the bank statement and clear the loan open item on bank vendor (Loans) | FEBA_BANK_STATEMENT | Dr. Vendor (Metal Contracts) | Reprocess Bank Statement Items | R | Clear the Metals Contracts loan line item |
|  |  |  | Cr. Bank Loan Acc. |  |  |  |
| Output | Loan Recorded, financial burdens distributed and loan refunded. |  |  |  |  |  |

- Bank Facilities

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **Journal Entry** | **FIORI App.** | **Bank Accountant** | **Note** |
| Trigger | Record Bank Facilities |  |  |  |  |  |
| 01 | Record bank facilities (Letter of Credit) | FB50 | Dr. Bank-LC Acc. |  | R | To record the bank facility amount per year |
|  |  |  | Cr. Bank Clearing Acc. |  |  |  |
| 02 | Open LC for Vendor | F-41 | Dr. Vendor (LC) |  | R | Posting Key 29. Write LC number in reference and assignment fields |
|  |  |  | Dr. Bank-LC Acc. |  |  |  |
| 03 | Monitor Vendor LCs | FBL1N |  | Manage Supplier Line Items |  | Special GL C |
| Output | Bank LC recorded and consumed |  |  |  |  |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 4 | Bank Accountants |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

Main Bank GL Accounts Balances equals Bank Account Balances. 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Accounts Payables | FI-AP |
| 02 | Accounts Receivable | FI-AR |

## Potential Future Process Improvements (out of scope for this implementation)

N/A

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grandparent |
| 4000 | AWP Agriculture |
| 5000 | Al-Watania Super Market |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Bank Account |
| GL account |

- Banks will be mapped in Accounts payables as vendor under the following vendor account group

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **External** |
| Y007 | Banks Payable | Y7 | 900000 | 999999 | X |

Bank vendor master data number will be starting with 9 & last 5 digits of the bank account numb.

## System Configuration Considerations

| **Transaction** | **+/-** | **Transaction Description** | **G/L Account** |
| --- | --- | --- | --- |
| BT01 | **+** | Incoming Checks | ++++++01 |
| BT02 | **+** | Incoming Transfer | ++++++02 |
| BT03 | **+** | Incoming Cash | ++++++03 |
| BT04 | **-** | Outgoing Checks | ++++++04 |
| BT05 | **-** | Outgoing Transfer | ++++++05 |
| BT06 | **-** | Outgoing Cash | ++++++06 |
| BT07 | **+/-** | Loans | ++++++07 |
| BT08 | **-** | Bank Charges | 70140000 |

- Define Other Alternative Reconciliation Account.

| **Special G/L Indicator** | **Description** | **Reconciliation Account** | **Special G/L account** |
| --- | --- | --- | --- |
| L | Long Term Loans | 20090000 | 28000000 |
| S | Short Term Loans | 20090000 | 21000000 |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_CASH_SPECIALIST | Cash Management Specialist |  |
| YFI_CASH_MANAGER | Cash Manager |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Bank Accountants | Key User |

							1 of 10

								10 of 10
# V2_FI-J78-01-Cash Daily Operation

| **Cash Journals** |
| --- |

# **Process Description**

The cash journal is a subledger of Bank Accounting. It is used to manage a company's cash transactions. The system automatically calculates and displays the opening and closing balances, and the receipts and payments totals. You can run several cash journals for each company code. You can also carry out postings to G/L accounts, as well as vendor and customer accounts.

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Cash Journal Transactions | S | H |

## Business Process Description

| Process Characteristics |
| --- |
| Process Trigger | Cash Journals |
| Process Input | Cash Journal Transaction |
| Process Output | Printed Form |
| Process Owner | Cashier |
| Process Volumes | 10 |
| Process Frequencies | Daily |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| ID | Process Step Description | Execution | Roles |
|  |  | T-Code | Journal Entry | FIORI App. | Cashier | Cash Manager |
| Trigger | Cash issue order | Manual |  |  |  |  |
| 01 | Record cash journal Payment | FBCJ | Dr. GL or Vendor Acc. |  | R | I |
|  |  |  | Cr. Cash Acc. |  |  |  |
| 02 | Record cash journal Receipt | FBCJ | Dr. Cash Acc. |  | R | I |
|  |  |  | Cr. Customer/GL Account. |  |  |  |
| 03 | Record cash journal - Check Receipt | FBCJ | Dr. Cash Acc. |  | R | I |
|  |  |  | Cr. Customer Acc. |  |  |  |
| 04 | Present check to Bank | FBCJ | Dr. Bank Incoming Cash Acc. |  | R | I |
|  |  |  | Cr. Cash Acc. |  |  |  |
| 05 | Cash Position |  |  | Cash Position | I | R |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Cashier |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | GL Accounts | FI-GL |

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
| GL account |
| Vendor |
| Customer |

## System Configuration Considerations

- Setup Cash Journals 

| **Company Code** | **Cash Journal** | **GL account** | **Crcy** | **Cash Journal Name** |
| --- | --- | --- | --- | --- |
| 1000 | 1A49 | 10100101 | SAR | PETTY CASH ADMIN |

- Create, Change, Delete Business Transactions

| **Company Code** | **Trans.Num** | **Bus.Tran.Typ** | **SP.GL** | **Trans.Classif** | **GL.Acc** | **Acc Mod.** | **Cash Journal Transaction Name** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1000 | 1 | E |  | 1 | 20240103 |  | مصاريف رواتب كاش |
| 1000 | 2 | E |  | 1 |  | X | مصاريف |
| 1000 | 3 | K | I | 1 |  |  | صرف عهد موظفين |
| 1000 | 4 | K |  | 1 |  |  | صرف نقدى لمورد |
| 1000 | 5 | B |  | 1 |  | X | تحويل نقدى للبنك |
| 1000 | 6 | D |  | 2 |  |  | أستلام نقدى من عميل |
| 1000 | 7 | C |  | 2 |  | X | استلام نقدى من البنك |
| 1000 | 8 | D |  | 3 |  |  | أستلام شيك من عميل |
| 1000 | 9 | B |  | 3 |  | X | إداع شيك عميل بالبنك |

- Define Numbering Groups

| **Cash Journal** | **Group for Payments** | **From No.** | **To Number** | **Group for Receipt** | **From No.** | **To Number** |
| --- | --- | --- | --- | --- | --- | --- |
| 1A49 | P1A49 | 0104910000 | 0104959999 | R1A49 | 0104960000 | 0104969999 |

- Cash Journal number ranges are per fiscal year.

# **Technical/Development Related Items**

| WRICEF |  |  |
| --- | --- | --- |
| WRICEF ID | Type | Description | Correspondence Type | Type of correspondence |
| F_FI-10_2 | Form | Cash Payment Form | SAP18 | Cash document |
| F_FI-10_2 | Form | Cash Receipt Form | SAP18 | Cash document |
| F_FI-10_2 | Form | Check Receipt Form | SAP18 | Cash document |

	

# Authorization 

| **Authorizations** |
| --- |
| ID | Authorization | Comments |
| 01 | YFI_CASHJOURNAL_ADIMN_49 |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Cashiers | Key User |

							1 of 5

								5 of 5
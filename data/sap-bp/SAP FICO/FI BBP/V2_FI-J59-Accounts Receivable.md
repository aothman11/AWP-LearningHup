# V2_FI-J59-Accounts Receivable

| **Accounts ****Receivables** |
| --- |

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Accounts Receivable is an integral part of sales management | S |  |
| 02 | Accounts Receivable postings are recorded directly in the General Ledger | S |  |
| 03 | Manage Customer line items | S |  |
| 04 | Monitor Customer due dates |  |  |
| 05 | Reconcile open invoices with Incoming payments | S |  |

## Business Process Description

With Accounts Receivables, you can manage your open receivables invoices that are automatically created from sales processes. You can manage and control open items with various analytical tools to optimize accounts receivables handling. Incoming payments are automatically reconciled with open invoices. Easy-to-use screens make the post processing of open items easy and efficient.

| Process Characteristics |
| --- |
| Process Trigger | Customer sales invoices to be cleared |
| Process Input | Customer Invoices |
| Process Output | Cleared Customer Invoices |
| Process Owner | AR accountant |
| Process Volumes | 500 |
| Process Frequencies | Daily |

## Business Process Diagrams

- Main Process Diagram

-  Prepare Customer Collection 

- Invoice Management Reporting

- Customer Down Payment 

## Process Step Detailed Requirements & Solution

- Main Process Diagram

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AR Accountant** | **AR Manager** |
| Trigger | Customer Invoices to be collected |  |  |  |  |
| 01 | Prepare Customer Collections |  |  | R | I |
| 02 | Invoice Management Reporting |  |  | I | R |
| 03 | Customer Down Payment |  |  | R | I |
| 04 | Post Incoming Payments | F-28 | Post Incoming Payments | R | I |
| 05 | Print Customer Balances | F.27 | Create Periodic Account Statement | R | I |
| Output | Customer Invoices Cleared |  |  |  |  |

- Prepare Customer Collection 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AR Accountant** | **AR Manager** |
| Trigger | Customer Invoices to be collected |  |  |  |  |
| 01 | Display Customer Balances | FD10N | Display Customer Balances | R | I |
| 02 | Manage Customer Line Items | FBL5N | Manage Customer Line Items | R | I |
| Output | Customer Invoices Managed |  |  |  |  |

 

- Invoice Management Reporting

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AR Accountant** | **AR Manager** |
| Trigger | Customer Invoices in system |  |  |  |  |
| 01 | Overdue Receivables |  | Overdue Receivables | I | R |
| 02 | Display Reprocessing Rate of Incoming Payments |  | Display Reprocessing Rate of Incoming Payments | I | R |
| Output | Customer Invoices reported |  |  |  |  |

 

- Customer Down Payment

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AR Accountant** | **AR Manager** |
| Trigger | Customer Down Payment Request |  |  |  |  |
| 01 | Create Down Payment Request | F-37 | Manage Down Payment Request for Customers | I | R |
| 02 | Display Down Payment Request | FBL5N | Manage Down Payment Request | R | I |
| 03 | Post Down Payment | F-29 | Post Incoming Payments | R | I |
| 04 | Post Incoming Payments | F-28 | Post Incoming Payments | R | I |
| Output | Clear Invoices, Down Payment and Incoming Payment |  |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 1 |  | Credit Limit Utilization |  | X |
| 2 |  | Overdue Receivables |  | X |
| 3 | S_ALR_87012167 | Accounts Receivable Information System | X |  |
| 4 | S_ALR_87012172 | Customer Balances in Local Currency | X |  |
| 5 | S_ALR_87012186 | Customer Sales | X |  |
| 6 | S_ALR_87012169 | Transaction Figures: Account Balance | X |  |
| 7 | S_ALR_87012168 | Due Date Analysis for Open Items | X |  |
| 8 | S_ALR_87012197 | List of Customer Line Items | X |  |
| 9 | S_ALR_87012173 | List of Customer Open Items for Printing | X |  |
| 10 | S_ALR_87012175 | Open Items Customer Due Date Forecast | X |  |
| 11 | S_ALR_87012178 | Customer Open Item Analysis by Balance of Overdue Items | X |  |
| 12 | S_ALR_87012199 | List Of Down Payments Open On Key Date Customers | X |  |
| 13 | FIAR_OVERDUE_TOPLIST | Top 10 List of Customers by Overdue Item Balance | X |  |
| 14 | S_ALR_87012198 | List of Cleared Customer Items for Printing | X |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 5 | AR Accountants |

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
| 01 | Customer Sales Invoices | SD |
| 02 | General Ledger | FI-GL |

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
| Business Partner (Customer) |
| GL account |

## System Configuration Considerations

- Define Special G/L Transactions

| **Ch/Ac** | **Account type** | **Special G/L Ind.** | **Recon.Acc** | **GL Acc.** |
| --- | --- | --- | --- | --- |
| WAPO | D | A | Down Payment | 10160101 | 20160101 |
| WAPO | D | A | Down Payment | 10160102 | 20160101 |
| WAPO | D | A | Down Payment | 10160103 | 20160101 |
| WAPO | D | A | Down Payment | 10160104 | 20160101 |
| WAPO | D | A | Down Payment | 10160105 | 20160101 |
| WAPO | D | A | Down Payment | 10160106 | 20160101 |
| WAPO | D | F | Down Payment Request | 10160101 | 20160102 |
| WAPO | D | F | Down Payment Request | 10160102 | 20160102 |
| WAPO | D | F | Down Payment Request | 10160103 | 20160102 |
| WAPO | D | F | Down Payment Request | 10160104 | 20160102 |
| WAPO | D | F | Down Payment Request | 10160105 | 20160102 |
| WAPO | D | G | Guarantees Given | 10160101 | 10270101 |
| WAPO | D | G | Guarantees Given | 10160102 | 10270101 |
| WAPO | D | G | Guarantees Given | 10160103 | 10270101 |
| WAPO | D | G | Guarantees Given | 10160104 | 10270101 |
| WAPO | D | G | Guarantees Given | 10160105 | 10270101 |

- Define Document Types 

| **Code** | **Description** | **Number Range** |
| --- | --- | --- |
|  |  | **From** | **To** |
| YC | Billing doc.Canceled | 0990000000 | 0999999999 |
| YR | Billing doc.Return | 0910000000 | 0929999999 |

- Terms of payment 

| **Terms of Payment** |
| --- |
| **Code** | **Description** |
| Y001 | Within 10 days 3% , within 14 days 2% |
| Y002 | Within 14 days 2% |
| Y003 | Within 15 days 3% , within 25 days 2% |

- Define Accounts for Cash Discount Granted 

| **Code** | **Description** |
| --- | --- |
|  |  |
| 40300108 | Cash Discounts Expense |

# **Technical/Development Related Items**

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| R_FI-010_2 | Report | Customer Payments | YFI002 |
| R_FI-010_4 | Report | Customer VAT Documents | YFI005 |
| R_FI-010_7 | Report | Due Date Analysis for Open Items | YFI008 |
| R_FI-010_8 | Report | Customer Open Items | YFI009 |
| R_FI-010_11 | Report | VAT Tax Line Items | YFI012 |
| F_FI-10_3 | Form | Customer Vat tax notice | ZF140_AR_TAX_NOTICE_01 |
| R_FI-010_13 | Report | Output tax line items | YFI014 |
| R_FI-010_14 | Report | Customer Accounts Statement | YFI030 |
| R_FI-010_15 | Report | Customer By Sales Rep. Credit Limit | YFI027 |
| R_FI-010_16 | Report | Payer Credit Limit Check | YFI026 |

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_AR_ACC_B48 | YFI_AR_ACC_Jedda |  |
| YFI_AR_ACC_B49 | YFI_AR_ACC_QASSIM |  |
| YFI_AR_ACC_B50 | YFI_AR_ACC_Riyadh |  |
| YFI_AR_ACC_B51 | YFI_AR_ACC_Dammam |  |
| YFI_AR_ACC_B52 | YFI_AR_ACC_Abha |  |
| YFI_AR_ACC_B53 | YFI_AR_ACC_Madina |  |
| YFI_AR_ACC_B54 | YFI_AR_ACC_Taef |  |
| YFI_AR_ACC_B55 | YFI_AR_ACC_Bolgorashi |  |
| YFI_AR_ACC_B56 | YFI_AR_ACC_Nagran |  |
| YFI_AR_ACC_B57 | YFI_AR_ACC_Sakaka |  |
| YFI_AR_ACC_B58 | YFI_AR_ACC_Tabuk |  |
| YFI_AR_ACC_B59 | YFI_AR_ACC_Mekka |  |
| YFI_AR_ACC_B60 | YFI_AR_ACC_Ehsaa |  |
| YFI_AR_ACC_B61 | YFI_AR_ACC_Hafr Elbatin |  |
| YFI_AR_ACC_B62 | YFI_AR_ACC_Wadi addawaser |  |
| YFI_AR_ACC_B63 | YFI_AR_ACC_Addawadmi |  |
| YFI_AR_ACC_B64 | YFI_AR_ACC_Jizan |  |
| YFI_AR_ACC_B65 | YFI_AR_ACC_Yanboa |  |
| YFI_AR_ACC_B66 | YFI_AR_ACC_Hael |  |
| YFI_AR_ACC_B80 | YFI_AR_ACC_Export |  |
| YFI_AR_ACC_B84 | YFI_AR_ACC_Agriculture |  |
| YFI_AR_ACC_B85 | YFI_AR_ACC_By Products |  |
| YFI_AR_ACC_HO | YFI_AR_ACC_Head Office |  |
| YFI_AR_ACC_HO_2000 | YFI_AR_ACC_Head Office |  |
| YFI_AR_ACC_HO_3000 | YFI_AR_ACC_Head Office |  |
| YFI_AR_AGING | Accounts Receivables Aging |  |
| YFI_AR_REPORTS | Accounts Receivables Reports |  |
| YFI_AR_REPORTS_HCM | Accounts Receivables Reports |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| AR accountants | Key User |
| AR Managers | Key User |

								12 of 12

							1 of 12
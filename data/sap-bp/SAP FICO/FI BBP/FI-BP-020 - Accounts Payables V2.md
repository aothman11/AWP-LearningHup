# FI-BP-020 - Accounts Payables V2

| **Accounts Payables** |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Accounts payable postings are recorded directly in the general ledger | S |  |
| 02 | Manage Supplier line items | S |  |
| 03 | Monitor supplier due dates | S |  |
| 04 | Automatic and Manual Payments | S |  |

##  Business Process Description

With Accounts Payables, you can manage your open payables invoices that are automatically created from purchasing processes. You can manage and control open items with various analytical tools to optimize accounts payable handling. You can process payments automatically, ensure approval of all payments before payment, and monitor payment progress.

| Process Characteristics |
| --- |
| Process Trigger | Record Supplier Invoices |
| Process Input | Supplier invoice recorded |
| Process Output | Supplier open items cleared |
| Process Owner | AP accountant |
| Process Volumes | 50 |
| Process Frequencies | Daily |

## Business Process Diagrams

01: Main Process

02: Invoice Payment Preparation 

03: Post Down payment

04: Create Payment Run

05: Print Checks

06: Invoice Management Reporting

 

07: Employee's Imprest 

## Process Step Detailed Requirements & Solution

01: Main Process

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | Incoming Vendor Invoices |  |  |  |  |
| 01 | Complete Supplier Master Data | BP | Maintain Business Partner | R | I |
| 02 | Complete Withholding tax data | BP | Maintain Business Partner | R | I |
| 03 | Maintain Check Lots | FCHI | Manage Checkbooks | R | I |
| 04 | Entry of manual invoice | FB60 | Create Incoming invoice | R | I |
| 05 | 02. Invoice Payment Preparation |  |  | R | I |
| 06 | 03. Down Payment |  |  | R | I |
| 07 | 04. Create Payment Run |  |  | R | I |
| 08 | Create Single Outgoing Payment | F-58 | Post Outgoing Payment | R | I |
| 09 | 05. Print Checks |  |  | R | I |
| 10 | Create Correspondence | F.27 | Create Balance Confirmation | R | I |
| 11 | Reset Clearing for invoices and payments | FBRA | Reset Cleared Items | R | I |
| 12 | 06. Invoice Management Report |  |  | I | R |
| Output | Due Payments Handled |  |  |  |  |

02: Invoice Payment Preparation 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | 02. Invoice Payment Preparation |  |  |  |  |
| 01 | View Supplier Line Items | FBL1N | Manage Supplier Line Items | R | I |
| 02 | Manage Payment Block | FBL1N | Manage Payment Blocks | R | I |
| 03 | View Vendor Balance | FK10N | Display Supplier Balance | R | I |
| Output | Supplier Line Items managed |  |  |  |  |

03: Post Down payment

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | Issue Down Payment to vendor |  |  |  |  |
| 01 | Create Down Payment Request | F-47 | Manage Down Payment Request For Suppliers | R | I |
| 02 | Post Down Payment | F-48 | Post Outgoing Payments | R | I |
| 03 | Post Outgoing Payment | F-58 | Post Outgoing Payments | R | I |
| 04 | Clear Open Items | F-44 | Clear Outgoing Payments Manual Clearing | R | I |
| Output | Down Payment posted and invoices cleared |  |  |  |  |

04: Create Payment Run

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | Invoices are posted and are open for payment |  |  |  |  |
| 01 | Schedule Payment Proposals | F110 | Manage Automatic Payments | R | I |
| 02 | Revise Payment Proposal | F110 | Revise Payment Proposal | R | I |
| 03 | Release Payment Proposal | F110 | Manage Automatic Payments | R | I |
| Output | Payment Run posted |  |  |  |  |

05: Print Checks

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | Print Checks |  |  |  |  |
| 01 | Display Check Details | S_P99_41000101 | Manage Outgoing Checks | R | I |
| 02 | Display Check Details | S_P99_41000101 | Display Check Details | R | I |
| 03 | Printing of checks | FCH5 | Print Payment Forms | R | I |
| 04 | Void Checks (Optional) | FCH8 | Void Checks | R | I |
| 05 | Maintain Check Lots | FCHI | Manage Check Books | R | I |
| Output | Checks Printed |  |  |  |  |

06: Invoice Management Reporting

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Manager** |
| Trigger | Invoice Reporting |  |  |  |
| 01 | Days Payable Outstanding |  | Days Payable Outstanding | R |
| 02 | Overdue Payables |  | Overdue Payables Today | R |
| 03 | Future Payables |  | Future Payables Today | R |
| 04 | Cash Discount Forecast |  | Cash Discount Forecast – Expiring in 1 Month | R |
| 05 | Cash Discount Utilization |  | Cash Discount Utilization – Today | R |
| 06 | Invoice Processing Time |  | Invoice Processing Time Today | R |
| 07 | Aging Analysis |  | Aging Analysis Payable Amount | R |
| 08 | Automatic and Manual Payments Analysis |  | Automatic and Manual Payments - Payments for Last Year | R |
| Output | Supplier Items analyzed |  |  |  |

07: Employee's Imprest 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **Journal Entry** | **Cash Specialist** | **Employee** | **Note** |
| Trigger | Requirement for Employee Imprest |  |  |  |  |  |
| 01 | Finance the employee's Imprest from Cash journal | FBCJ | Dr. Vendor(I) | R | I | Use defined journal transaction |
|  |  |  | Cr. Petty Cash |  |  |  |
| 02 | Finance the employee's Imprest from bank transfer | F-41 | Dr. Vendor(I) | R | I | Posting Key 29, special GL ind.I |
|  |  |  | Cr. Outgoing transfer |  |  |  |
| 03 | Expense Invoices Posted | F-43 | Dr. Expenses | I | R | Posting Key 39 , special GL indicator I |
|  |  |  | Cr. Vendor(I) |  |  |  |
| 04 | Monitor employee's Imprest balance | FBL1N |  | I | R | Subtotal on special GL ind.I |
| 05 | Clearing employee's Imprest with expenses invoices | F-44 | Dr. Vendor(I) | I | R | Special GL ind. I only |
|  |  |  | Cr. Vendor(I) |  |  |  |
| 06 | Refinance employee's Imprest via step 1 or 2 |  |  |  |  |  |
| Output | Employee Imprest cleared and refinanced |

05: Print Checks ( Manually ) Without Vendor 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **AP Accountant** | **AP Manager** |
| Trigger | Print Checks from Payment Document without Vendor |  |  |  |  |
| 01 | Maintain Check Lots | FCHI | Manage Check Books | R | I |
| 02 | Post Payment Document | FB50 | Post General Ledger Entries | R | I |
| 03 | Create Check Information | FCH5 | Create Manual Checks | R | I |
| 04 | Print Check Manually | FBZ5 | Print Payment Forms | R | I |
| Output | Checks Printed |  |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 1 |  | Days Payable Outstanding |  | X |
| 2 |  | Overdue Payables Today |  | X |
| 3 |  | Future Payables Today |  | X |
| 4 |  | Cash Discount Forecast – Expiring in 1 Month |  | X |
| 5 |  | Cash Discount Utilization - Today |  | X |
| 6 |  | Invoice Processing Time Today |  | X |
| 7 |  | Aging Analysis Payable Amount |  | X |
| 8 |  | Automatic and Manual Payments - Payments for Last Year |  | X |
| 9 |  | Supplier Payment Analysis |  | X |
| 10 | S_ALR_87012082 | Vendor Balances in Local Currency | X |  |
| 11 | S_ALR_87012079 | Transaction Figures: Account Balance | X |  |
| 12 | S_ALR_87012078 | Due Date Analysis for Open Items | X |  |
| 13 | S_ALR_87012103 | List of Vendor Line Items | X |  |
| 14 | S_ALR_87012083 | List of Vendor Open Items for Printing | X |  |
| 15 | S_ALR_87012084 | Open Items Vendor Due Date Forecast | X |  |
| 16 | S_ALR_87012104 | List of Cleared Vendor Items for Printing | X |  |
| 17 | S_P99_41000101 | Check Register | X |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 4 | AP Accountants |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Days Payables Outstanding | Days | Maximize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 02 | General Ledger | FI-GL |
| 03 | Logistics Invoice Verification | MM-INV |

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
| Business Partner (Vendor) |
| GL account |

- Vendor Account Groups

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **External** |
| Y000 | Domestic Suppliers | Y0 | 100000 | 199999 | X (during migration only) |
| Y001 | Foreign Suppliers | Y1 | 200000 | 299999 | X (during migration only) |
| Y002 | Service & Construction Suppliers | Y2 | 300000 | 399999 | X (during migration only) |
| Y003 | Affiliated Companies | Y3 | 400000 | 499999 | X (during migration only) |
| Y004 | Government Authorities Payables | Y4 |  |  | X (during migration only) |
| Y005 | Trade Payables Domestic - One Time Accounts | Y5 | 500000 | 599999 | X (during migration only) |
| Y006 | Employees | Y6 | 800000 | 899999 | X |
| Y007 | Banks Payable | Y7 | 900000 | 999999 | X |

- Vendor Account group Y006 will be used to create the company's employees as vendors and the vendor master data number will be 8+personal number. 

## System Configuration Considerations

- Payment methods 

| **Payment methods** |
| --- |
| **Code** | **Description** |
| 1 | Outgoing Check |
| 2 | Outgoing transfer |
| 3 | Incoming Check |
| 4 | Incoming transfer |

-  Terms of payment 

| **Terms of payment** | **Vendor** | **No. of days** | **Fixed date** | **% Cash discount** | **Default for baseline date** |
| --- | --- | --- | --- | --- | --- |
| **Code** | **Description** |  |  |  |  | **No Default** | **Posting Date** | **Document Date** | **Entry Date** |
| Y100 | Pay immediately w/o deduction | X |  |  | 0 |  |  | X |  |
|  |  |  |  |  |  |  |  |  |  |
| Y101 | Within 7 days Due net | X | 7 |  | 0 |  |  | X |  |
|  |  |  |  |  |  |  |  |  |  |
| Y102 | Within 21 days Due net | X | 21 |  | 0 |  |  | X |  |
|  |  |  |  |  |  |  |  |  |  |

-  Define Special GL indicators

| **Ch/Ac** | **Account type** | **Special G/L Ind.** | **Recon.Acc** | **GL Acc.** |
| --- | --- | --- | --- | --- |
| WAPO | K | A | Down Payments, Current Assets | 20100101 | 10220101 |
| WAPO | K | A | Down Payments, Current Assets | 20100102 | 10220101 |
| WAPO | K | A | Down Payments, Current Assets | 20100103 | 10220102 |
| WAPO | K | A | Down Payments, Current Assets | 20100104 | 10220103 |
| WAPO | K | A | Down Payments, Current Assets | 20100105 | 10220104 |
| WAPO | K | A | Down Payments, Current Assets | 20100106 | 10220105 |
| WAPO | K | B | CAD DP , Current Assets | 20100101 | 10220101 |
| WAPO | K | B | CAD DP , Current Assets | 20100102 | 10220101 |
| WAPO | K | B | CAD DP , Current Assets | 20100103 | 10220102 |
| WAPO | K | B | CAD DP , Current Assets | 20100104 | 10220103 |
| WAPO | K | B | CAD DP , Current Assets | 20100105 | 10220104 |
| WAPO | K | B | CAD DP , Current Assets | 20100106 | 10220105 |
| WAPO | K | F | Down Payment Requests | 20100101 | 10220199 |
| WAPO | K | F | Down Payment Requests | 20100102 | 10220199 |
| WAPO | K | F | Down Payment Requests | 20100103 | 10220199 |
| WAPO | K | F | Down Payment Requests | 20100104 | 10220199 |
| WAPO | K | F | Down Payment Requests | 20100105 | 10220199 |
| WAPO | K | F | Down Payment Requests | 20100106 | 10220199 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100101 | 10240104 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100102 | 10240104 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100103 | 10240104 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100104 | 10240104 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100105 | 10240104 |
| WAPO | K | G | Letters-of-Guarantee-Insurance | 20100106 | 10240104 |
| WAPO | K | L | Bank-Margins-Letter of Credit | 20100101 | 10320101 |
| WAPO | K | L | Bank-Margins-Letter of Credit | 20100102 | 10320101 |
| WAPO | K | L | Bank-Margins-Letter of Credit | 20100103 | 10320201 |
| WAPO | K | M | Prepayment Accommodations | 20100101 | 10200104 |
| WAPO | K | M | Prepayment Accommodations | 20100102 | 10200104 |
| WAPO | K | M | Prepayment Accommodations | 20100103 | 10200104 |
| WAPO | K | M | Prepayment Accommodations | 20100104 | 10200104 |
| WAPO | K | M | Prepayment Accommodations | 20100105 | 10200104 |
| WAPO | K | M | Prepayment Accommodations | 20100106 | 10200104 |
| WAPO | K | N | Prepayment Rents | 20100101 | 10200101 |
| WAPO | K | N | Prepayment Rents | 20100102 | 10200101 |
| WAPO | K | N | Prepayment Rents | 20100103 | 10200101 |
| WAPO | K | N | Prepayment Rents | 20100104 | 10200101 |
| WAPO | K | N | Prepayment Rents | 20100105 | 10200101 |
| WAPO | K | N | Prepayment Rents | 20100106 | 10200101 |
| WAPO | K | O | Insurance-for-others | 20100101 | 10240103 |
| WAPO | K | O | Insurance-for-others | 20100102 | 10240103 |
| WAPO | K | O | Insurance-for-others | 20100103 | 10240103 |
| WAPO | K | O | Insurance-for-others | 20100104 | 10240103 |
| WAPO | K | O | Insurance-for-others | 20100105 | 10240103 |
| WAPO | K | O | Insurance-for-others | 20100106 | 10240103 |
| WAPO | K | R | Vendor-Retentions | 20100101 | 20260101 |
| WAPO | K | R | Vendor-Retentions | 20100102 | 20260101 |
| WAPO | K | R | Vendor-Retentions | 20100103 | 20260101 |
| WAPO | K | R | Vendor-Retentions | 20100104 | 20260101 |
| WAPO | K | R | Vendor-Retentions | 20100105 | 20260101 |
| WAPO | K | R | Vendor-Retentions | 20100106 | 20260101 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100101 | 10200102 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100102 | 10200102 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100103 | 10200102 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100104 | 10200102 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100105 | 10200102 |
| WAPO | K | S | Prepayment Fees & Subscription | 20100106 | 10200102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100101 | 10360102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100102 | 10360102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100103 | 10360102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100104 | 10360102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100105 | 10360102 |
| WAPO | K | T | Down Payments, Tangible Assets | 20100106 | 10360102 |
| WAPO | K | X | Vendor Bill of Exchange | 20120101 | 20130101 |
| WAPO | K | Y | Guarantees-Received-Vendors | 20100101 | 20140101 |
| WAPO | K | Y | Guarantees-Received-Vendors | 20100102 | 20140101 |
| WAPO | K | Y | Guarantees-Received-Vendors | 20100103 | 20140101 |
| WAPO | K | Y | Guarantees-Received-Vendors | 20100104 | 20140101 |
| WAPO | K | Y | Guarantees-Received-Vendors | 20100105 | 20140101 |
| WAPO | K | Y0 | Guarantees-Received-Vendors | 20100106 | 20140101 |

- Define Accounts for Cash Discount Taken

| 70100106 | Cash Discounts Taken |
| --- | --- |

- Bank Determination for Payment Transactions 

| **Set Up Bank Determination for Payment Transactions** |
| --- |
| House Bank | House Bank Desc. | Pymt Meth. | Curr. | Acc.ID | Account ID Desc. | Bank Subacc. |
| ANB | ANB | 1 | SAR | S0016 | ANB - Expenses Account SAR | 10120604 |
| ANB | ANB | 1 | EUR | E0016 | ANB -  EUR | 10120704 |
| RAJHI | Al Rajhi Bank | 1 | SAR | S0083 | Al Rajhi Bank - Administration Account SAR | 10120404 |
| RAJHI | Al Rajhi Bank | 1 | SAR | S7002 | Al Rajhi Bank - Revenues Account SAR | 10120204 |
| RAJHI | Al Rajhi Bank | 1 | SAR | S8000 | Al Rajhi Bank - Expenses Account SAR | 10120104 |
| Riyad | Al Riyadh Bank | 1 | SAR | S9940 | Al Riyadh Bank | 10121105 |
| SABB | SABB | 1 | SAR | S9001 | SABB - Expenses Account SAR | 10120804 |
| RAJHI | Al Rajhi Bank | 1 | SAR | S0510 | Al Rajhi Bank - Revenues Account SAR | 10120204 |
| RAJHI | Al Rajhi Bank | 1 | SAR | S0536 | Al Rajhi Bank - Expenses Account SAR | 10120104 |

# **Technical/Development Related Items**

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| E_FI-010_2 | Enhancement | Transaction Copy of MR11 without posting | ZMR11 |
| R_FI-010_1 | Report | Vendor Master Data | YFI001 |
| R_FI-010_5 | Report | Accounts Payables Due Date Analysis | YFI006 |
| R_FI-010_6 | Report | Vendor Trial Balance | YFI007 |
| F_FI-10_3 | Form | Vendor Statement | ZF140_ACC_STAT_01 |
| R_FI-010_9 | Report | Vendor Open Items | YFI010 |
| F_FI-10_9 | Form | AP Due Date Analysis | YFI033 |
| F_FI-10_11 | Form | Check Form | ZFICO_AP_0123 |

F-AP-001

| **Vendor Number:** |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Vendor Name:** |  |  |  |  |  |  |  |  |  |
| **Date From:** |  | **Date To:** |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
| **Doc. Date** | **Invoice****. No**** ** | **Doc. No** | **Net Due Date** | **Doc. ****Type** | **Transa-ction** | **Local Currency** | **Dr.** | **Cr.** | **Balance** |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
| ** ** | ** ** | ** ** | ** ** | ** ** | ** ** | ** ** | **0** | **0** | **0** |

F-AP-002

| **Vendor Number:** |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Vendor Name:** |  |  |  |  |  |  |
| **Date From:** |  | **Date To:** |  |  |  |  |
|  |  |  |  |  |  |  |
| **Document Date** | **Invoice Number** | **Document Number** | **Net Due Date** | **Document Type** | **Document Currency** | **Amount** |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| ** ** | ** ** | ** ** | ** ** | ** ** | ** ** | ** ** |

Check Form:  F_FI-10_11

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_AP_ACC | Accounts Payables Accountant |  |
| YFI_AP_ACC_2000 | Accounts Payables Accountant |  |
| YFI_AP_ACC_3000 | Accounts Payables Accountant |  |
| YFI_AP_ACC_MNGR | Accounts Payables Accountant |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| AP accountants | Key User |
| AP Managers | Key User |

								20 of 22

							1 of 22
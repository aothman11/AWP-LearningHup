# V2_FI-J58-Accounting and Financial Close

| **Accounting and Financial Close** |
| --- |

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Recording all business transactions ensures complete and accurate accounting data | S |  |
| 02 | Maintain accounts: Automatic and manual clearing | S |  |
| 03 | Perform month-end closing | S |  |
| 04 | Perform year-end closing | S |  |
| 05 | Carry out recurring entries | S |  |

##  Business Process Description

This process covers all required period end-closing steps, related to do local period-end closing and steps that are identical for local ledger 

General Ledger Accountant serves as a complete record of all business transactions. It is the centralized, up-to-date reference for the rendering of accounts. Actual individual transactions can be checked at any time in real-time processing by displaying the original documents, line items, and transaction figures at various levels such as:

- Account information

- Journals

- Totals

- Transaction figures

- Balance sheet

- Profit and loss evaluations

Closing operations are periodic tasks and can be subdivided in FI as follows:

- Month-end closing

- Year-end closing

| Process Characteristics |
| --- |
| Process Trigger | Closing previous month |
| Process Input | All other modules have run their closing procedures |
| Process Output | Closed period and financial statements displayed |
| Process Owner | GL Accountant |
| Process Volumes | 500 |
| Process Frequencies | Monthly |

## Business Process Diagrams

Master Data

Parked Document 

Operational Processing 

Period-End-Closing

 

Year-End-Closing

## Process Step Detailed Requirements & Solution

Accounting and Financial Close - GL Master Data 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Closing Previous month |  |  |  |
| 01 | Manage GL Account Master | FS00 | Manage G/L Account Master Data | R |
| 02 | GL Account Mass Maintenance |  | G/L Account Mass Maintenance (Company Code) | R |
| 03 | GL Account Mass Maintenance |  | G/L Account Mass Maintenance (Description) | R |
| 04 | GL Account Mass Maintenance |  | G/L Account Mass Maintenance (Chart of Accounts) | R |
| 05 | Maintain Financial Statement Version | FSE2 | Maintain Financial Statement Version | R |
| 06 | Display Changes in GL Accounts | S_ALR_87012308 | Display Changes in G/L Account | R |
| 07 | Display Chart of Accounts | S_ALR_87012326 | Display Chart of Accounts | R |
| Output | GL Accounts Maintained |  |  |  |

Accounting and Financial Close - Profit Center Master Data

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Closing Previous month |  |  |  |
| 01 | Manage Profit Center Groups | KCH2 | Manage Profit Center Group | R |
| 02 | Manage Profit Center | KE52 | Manage Profit Centers | R |
| 03 | Mass Maintenance for Profit Center | KE55 | Edit Master Data - Profit Centers - Collective | R |
| 04 | Manage Assignment of Profit Centers to Company Code | KE56 | Edit Company Code Assignment Profit Centers | R |
| 05 | Profit Center Assignment Monitor | 1KE4 | Profit Center Assignment Monitor | R |
| Output | Profit Centers Maintained |  |  |  |

Accounting and Financial Close – Parked Documents

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Manage Parked Documents |  |  |  |
| 01 | Parked Document Entry | FB50 | Park Journal Entry | R |
| 02 | Upload Parked Document | ZDOC_UPLOAD |  | R |
| 03 | Change Parked Document | FBV2 | Change Parked Document | R |
| 04 | Change Parked Journal Entry (Header) | FBV4 | Change Parked Journal Entry (Header) | R |
| 05 | Display Parked Document | FBV3 | Display Parked Document | R |
| 06 | Display Changes in Parked Journal Entry | FBV5 | Display Changes in Parked Journal Entry | R |
| 07 | Post Parked Document | FBV0 | Post Parked Journal Entry | R |
| Output | Parked Documents Managed |  |  |  |

Accounting and Financial Close - Operational Processing

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Operational Processing |  |  |  |
| 01 | Manage Journal Entries | FAGLL03 | Manage Journal Entries | R |
| 02 | Post General Journal Entries | FB50 | Post General Journal Entries | R |
| 03 | Display GL Account Balances | FAGLB03 | Display GL Account Balances | R |
| 04 | Display GL Account Line item | FAGLL03 | Display GL Account Line item | R |
| 05 | Audit Journal |  | Audit Journal | R |
| 06 | Enter recurring entry | FBD1 | Enter recurring entry | R |
| 07 | Change Recurring Entry | FBD2 | Change Recurring Entry | R |
| 08 | Display Recurring Entry | FBD3 | Display Recurring Entry | R |
| 09 | Display Changes of Recurring Entry | FBD4 | Display Changes of Recurring Entry | R |
| 10 | Delete Recurring Entry | F.56 | Delete Recurring Entry | R |
| 11 | Carry Out Recurring Entries | F.14 | Carry Out Recurring Entries | R |
| 12 | Clear G/L Accounts | F-03 | Clear G/L Accounts | R |
| 13 | Run Automatic Clearing | F.13 | Run Automatic Clearing | R |
| 15 | Post with Clearing | F-04 | Post with Clearing | R |
| 16 | Reset Cleared Items | FBRA | Reset Cleared Items | R |
| 17 | Maintain Exchange Rates | S_BCE_68000174 | Maintain Exchange Rates | R |
| Output | Operational Processing Maintained |  |  |  |

Accounting and Financial Close – Period End Closing

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Period End Closing |  |  |  |
| 01 | Carry Out Recurring Entries | F.14 | Manage Recurring Journals | R |
| 02 | Run Automatic Clearing | F.13 | Clear Open Items Automatically | R |
| 03 | Repost GR/IR Clearing | F.19 | Repost GR/IR Clearing | R |
| 04 | Perform Foreign Currency Valuation | FAGL_FCV | Perform Foreign Currency Valuation | R |
| 05 | Process Batch Input Session | SM35 | Process Batch Input Session | R |
| 06 | Post Tax Payable |  | Post Tax Payable | R |
| 07 | Advanced Return for Tax on Sales/Purchase | S_ALR_87012357 | Create Advance Return on Sales/Purchase | R |
| 08 | Open Posting Periods | OB52 | Open Posting Periods | R |
| 09 | Display Financial Statement | S_ALR_87012284 | Display Financial Statement | R |
| 10 | Trial Balance | S_PL0_86000030 | Trial Balance | R |
| 11 | Trial Balance Comparison |  | Trial Balance Comparison | R |
| Output | Period End Closing performed |  |  |  |

Accounting and Financial Close – Year End Closing

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **GL Accountant** |
| Trigger | Year End Closing |  |  |  |
| 01 | Carry Forward Balances | FAGLGVTR | Carry Forward Balances | R |
| 02 | Regroup Receivables/Payables |  | Regroup Receivables / payables | R |
| 03 | Open Posting Periods | OB52 | Open Posting Periods | R |
| Output | Year End Closing performed |  |  |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 4 | GL Accountants |

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
| 01 | Accounts Payables | FI-AP |
| 02 | Accounts Receivables | FI-AR |

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
| Business Partner (Customer) |
| GL account |

## System Configuration Considerations

- Fiscal Year Variant

| **FV Code** | **Description** | **Year-dependent** | **Calendar year** | **No. posting periods** | **No. special periods** |
| --- | --- | --- | --- | --- | --- |
| K4 |  |  | x | 12 | 4 |

- Tax on Sales/Purchases Procedures

| **Tax on Sales/Purchases Procedures** |
| --- |
| Step | Condition Type | Description | From | Account Key |
| 100 | BASB | Base Amount |  |  |
| 110 | MWAS | Output Tax | 100 | MWS |
| 120 | MWVS | Input tax | 100 | VST |

- Tax on Sales/Purchases Procedures Code

| **Tax on Sales/Purchases Codes** |
| --- |
| **Ch/Ac** | **Acc.key** | **Tax code** | **G/L account** | **G/L account description** | **Transaction Description** |
| WAPO | MWS | S0 | 20200101 | Output VAT | الضريبة على المبيعات المحلية المعفاة |
| WAPO | MWS | S1 | 20200101 | Output VAT | 0% الضريبة على المبيعات المحلية بنسبة |
| WAPO | MWS | S2 | 20200101 | Output VAT | 5% الضريبة على المبيعات المحلية بنسبة |
| WAPO | MWS | S3 | 20200101 | Output VAT | 0% الضريبة على المبيعات الخدمات |
| WAPO | MWS | S4 | 20200101 | Output VAT | 5% الضريبة على المبيعات الخدمات |
| WAPO | MWS | S5 | 20200101 | Output VAT | 0% GCC الضريبة على الصادرات خارج |
| WAPO | MWS | S6 | 20200101 | Output VAT | 0% GCC الضريبة على الصادرات لـ |
| WAPO | MWS | S7 | 20200101 | Output VAT | الضريبة على مبيعات الأصول الثابتة %5 |
| WAPO | MWS | S8 | 20200101 | Output VAT | الضريبة على المبيعات افتراضية - إيرادات أخرى %5 |
| WAPO | MWS | SJ | 20200101 | Output VAT | Internal Transaction 0% |
| WAPO | VST | V0 | 10230101 | Input VAT | الضريبة على المشتريات المحلية المعفاة |
| WAPO | VST | V1 | 10230101 | Input VAT | الضريبة على المشتريات المحلية %0 |
| WAPO | VST | V2 | 10230101 | Input VAT | الضريبة على المشتريات المحلية %5 |
| WAPO | VST | V3 | 10230101 | Input VAT | الضريبة على المشتريات المستوردة - جمارك%5 |
| WAPO | VST | V4 | 10230101 | Input VAT | الضريبة على مشتريات العهد النقدية%5 |
| WAPO | VST | V5 | 10230101 | Input VAT | الضريبة على الخدمات المحلية%5 |
| WAPO | VST | V6 | 10230101 | Input VAT | الضريبة على الخدمات المستوردة - التكليف العكسي%5 |
| WAPO | VST | V7 | 10230101 | Input VAT | الضريبة على مشتريات الأصول الثابتة و قطع غيار %5 |
| WAPO | VST | V8 | 10230101 | Input VAT | الضريبة على المشروعات تحت التنفيذ%5 |
| WAPO | VST | V9 | 10230101 | Input VAT | ضريبة أصول غير ملموسة% 5 |
| WAPO | VST | VA | 10230101 | Input VAT | ضريبة أصول حيوية %5 |
| WAPO | VST | VJ | 10230101 | Input VAT | Internal transactions 0% |
| WAPO | VST | VN | 10230101 | Input VAT | مشتريات غير مسجلين%0 |
| WAPO | VST | VX | 10230101 | Input VAT | ضريبة مشتريات خارجية%0 |

- Accounts for Automatic Tax Payable Transfer Posting 25600000

- Valuation method for foreign currency valuation 

| **Valuation Methods** |
| --- |
| **Valuation Methods** | **Description** | **Valuation Procedure** | **Document Type** | **Exchange Rate** | **Valuation Area** | **Currency Type** | **Acc.Princ****.** | **target ledger group** |
| IFRS | Valuation for IFRS | Always evaluate | SA | M | IF | Company code currency | IFRS | 0L |

- Account Determination for Open Item Exchange Rate Differences

| **Account Determination for Open Item Exchange Rate Differences** |
| --- |
| **Chart of Accts** | **GL Account** | **Bal.sheet**** adj.** | **Real.ex.losses** | **Real.ex.gains** |
| WAPO | 10030701 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030702 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030703 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030704 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030705 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030706 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030707 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030708 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030709 | 10030799 | 70200000 | 70210000 |
| WAPO | 10030710 | 10030799 | 70200000 | 70210000 |
| WAPO | 12010000 | 12060000 | 70200000 | 70210000 |
| WAPO | 12010100 | 12060000 | 70200000 | 70210000 |
| WAPO | 12011000 | 12060000 | 70200000 | 70210000 |
| WAPO | 12020000 | 12060000 | 70200000 | 70210000 |
| WAPO | 12040000 | 12060000 | 70200000 | 70210000 |
| WAPO | 12050000 | 12060000 | 70200000 | 70210000 |
| WAPO | 20010000 | 20010400 | 70200000 | 70210000 |
| WAPO | 20010100 | 20010400 | 70200000 | 70210000 |
| WAPO | 20020000 | 20020300 | 70200000 | 70210000 |
| WAPO | 20040000 | 20040300 | 70200000 | 70210000 |
| WAPO | 20050000 | 20050300 | 70200000 | 70210000 |
| WAPO | 20060000 | 20060100 | 70200000 | 70210000 |
| WAPO | 20090000 | 20091000 | 70200000 | 70210000 |
| WAPO | 21000000 | 20091000 | 70200000 | 70210000 |

- Define Adjustment Accounts for GR/IR Clearing

| **Define Adjustment Accounts for GR/IR Clearing** |
| --- |
| **Chart of Accts** | **Transaction** | **Account to Be Adjusted** | **Adjustment Account** | **Target Account** |
| WAPO | Invoiced but not yet delivered | 21151000 | 21152000 | 21153000 |
| WAPO | Delivered but not yet invoiced | 21151000 | 21152000 | 21154000 |

- Document Splitting is Activate

- Define Document Splitting Characteristics for General Ledger Accounting

| Field | Zero Balance | Mandatory Field |
| --- | --- | --- |
| SEGMENT | X | X |
| Profit Centre |  | X |

- Document splitting method Z000000012 copy of 0000000012

- Prepare Automatic Clearing

| **Automatic Clearing Procedure** |
| --- |
| **COA** | **Acc.Type** | **From** | **To** | **Criterion1** |
| WAPO | D | 0 | 9999999 | REBZG | Invoice reference |
| WAPO | K | 0 | 9999999 | ZUONR | Assignment |
| WAPO | S | 0 | 9999999 | ZUONR | Assignment |

- Revenue Account Determination

| **Revenue ****Account Determination** |
| --- |
| **Condition type** | **Chart of Accounts** | **Sales Org.** | **Account Key** | **G/L** | **G/L Description** |
| KOFI | WAPO | 1000 | YRD | 40001000 | Revenue |
| KOFI | WAPO | 1000 | YCD | 40010100 | Commercial Discount |
| KOFI | WAPO | 1000 | YPD | 40010300 | Selling Promotions Discount |
| KOFI | WAPO | 1000 | YND | 40010200 | Nearly expired Discount |

	

- Valuation Classes

| **Valuation Classes** |
| --- |
| **Val.Classes**** ** | **Description** |
| 3100 | Raw Materials |
| 3200 | Auxiliary Materials |
| 3300 | Spare Parts Materials |
| 3400 | Packing Materials |
| 3500 | Fuel & Oils Materials |
| 3600 | Materials and waste |
| 3700 | Consumables Materials |
| 7100 | Semi-Finished Goods |
| 5300 | Poultry Animal material |
| 5400 | Poultry By-Product |
| 7200 | Finished Goods |
| 5100 | WIP Parent Rearing |
| 5200 | WIP Layer Rearing |

- Accounts for Materials Management

 

| **Accounts for Materials Management** |
| --- |
| ChAc | Trs | Transaction Description | AM | ValCl | G/L Acct | Acct cat. ref. | Material type | Mat.type descr. |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3100 | 50100401 | 0001 | YROH | Watania Raw Material |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3101 | 50100402 | 0001 | YROH | Watania Raw Material |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3200 | 50100402 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3300 | 50100403 | 0003 | YRSA | Watania Spare Parts |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3400 | 50100404 | 0014 | YVRP | Watania Packing |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3500 | 50100405 | 0013 | YFLM | Watania Fuel |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3700 | 50100406 | 0002 | YGEN | Watania General Items |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 3800 | 50100404 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 5100 | 50100412 | 0007 | YANM | Watania Live Materials |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 5200 | 50100413 | 0007 | YANM | Watania Live Materials |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 5300 | 50100409 | 0007 | YANM | Watania Live Materials |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 5400 | 50100410 | 0006 | YBYP | Watania By-Product |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 7100 | 50100408 | 0008 | YHLB | Watania Semifinished |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 7200 | 50100411 | 0009 | YFRT | Watania Finished Goods |
| WAPO | AKO | Expense/revenue from consign.mat.consum. |  | 7210 | 50100407 | 0009 | YFRT | Watania Finished Goods |
| WAPO | ANC | Additional accounts for Asset Accounting |  |  | 30900103 |  |  |  |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3100 | 50100601 | 0001 | YROH | Watania Raw Material |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3101 | 50100602 | 0001 | YROH | Watania Raw Material |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3200 | 50100602 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3300 | 50100603 | 0003 | YRSA | Watania Spare Parts |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3400 | 50100604 | 0014 | YVRP | Watania Packing |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3500 | 50100605 | 0013 | YFLM | Watania Fuel |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3700 | 50100606 | 0002 | YGEN | Watania General Items |
| WAPO | AUM | Expense/revenue from stock transfer |  | 3800 | 50100604 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | AUM | Expense/revenue from stock transfer |  | 5100 | 50100612 | 0007 | YANM | Watania Live Materials |
| WAPO | AUM | Expense/revenue from stock transfer |  | 5200 | 50100613 | 0007 | YANM | Watania Live Materials |
| WAPO | AUM | Expense/revenue from stock transfer |  | 5300 | 50100609 | 0007 | YANM | Watania Live Materials |
| WAPO | AUM | Expense/revenue from stock transfer |  | 5400 | 50100610 | 0006 | YBYP | Watania By-Product |
| WAPO | AUM | Expense/revenue from stock transfer |  | 7100 | 50100608 | 0008 | YHLB | Watania Semifinished |
| WAPO | AUM | Expense/revenue from stock transfer |  | 7200 | 50100611 | 0009 | YFRT | Watania Finished Goods |
| WAPO | AUM | Expense/revenue from stock transfer |  | 7210 | 50100607 | 0009 | YFRT | Watania Finished Goods |
| WAPO | AUM | Expense/revenue from stock transfer |  | 7300 | 50100614 | 0009 | YFRT | Watania Finished Goods |
| WAPO | BIL | Balance carried forward | X |  | 30200101 |  |  |  |
| WAPO | BSP | Bank charges |  |  | 60600113 |  |  |  |
| WAPO | BSX | Inventory posting |  | 3100 | 10280101 | 0001 | YROH | Watania Raw Material |
| WAPO | BSX | Inventory posting |  | 3101 | 10280102 | 0001 | YROH | Watania Raw Material |
| WAPO | BSX | Inventory posting |  | 3200 | 10280102 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | BSX | Inventory posting |  | 3300 | 10280103 | 0003 | YRSA | Watania Spare Parts |
| WAPO | BSX | Inventory posting |  | 3400 | 10280104 | 0014 | YVRP | Watania Packing |
| WAPO | BSX | Inventory posting |  | 3500 | 10280105 | 0013 | YFLM | Watania Fuel |
| WAPO | BSX | Inventory posting |  | 3700 | 10280106 | 0002 | YGEN | Watania General Items |
| WAPO | BSX | Inventory posting |  | 3800 | 10280104 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | BSX | Inventory posting |  | 5100 | 10300101 | 0007 | YANM | Watania Live Materials |
| WAPO | BSX | Inventory posting |  | 5200 | 10300201 | 0007 | YANM | Watania Live Materials |
| WAPO | BSX | Inventory posting |  | 5300 | 10280401 | 0007 | YANM | Watania Live Materials |
| WAPO | BSX | Inventory posting |  | 5400 | 10280501 | 0006 | YBYP | Watania By-Product |
| WAPO | BSX | Inventory posting |  | 7100 | 10280201 | 0008 | YHLB | Watania Semifinished |
| WAPO | BSX | Inventory posting |  | 7200 | 10280601 | 0009 | YFRT | Watania Finished Goods |
| WAPO | BSX | Inventory posting |  | 7210 | 10280107 | 0009 | YFRT | Watania Finished Goods |
| WAPO | BSX | Inventory posting |  | 7300 | 10280108 | 0009 | YFRT | Watania Finished Goods |
| WAPO | COC | Revaluation of other consumables |  |  | 50400103 |  |  |  |
| WAPO | DIF | Materials management small differences |  |  | 70100106 |  |  |  |
| WAPO | FRN | Incidental costs of external activities |  |  | 60600118 |  |  |  |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 5100 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 5200 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 5300 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 5400 | 50900101 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 7100 | 50900101 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 7200 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 7210 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUA | 7300 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 5100 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 5200 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 5300 | 50900101 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 5400 | 50900101 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 7100 | 50900101 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 7200 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 7210 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUF | 7300 | 50900101 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | AUI |  | 50400201 |  |  |  |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3100 | 30900102 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3101 | 30900102 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3200 | 30900102 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3300 | 30900102 | 0003 | YRSA | Watania Spare Parts |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3400 | 30900102 | 0014 | YVRP | Watania Packing |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3500 | 30900102 | 0013 | YFLM | Watania Fuel |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3700 | 30900102 | 0002 | YGEN | Watania General Items |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 3800 | 30900102 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 5100 | 30900102 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 5200 | 30900102 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 5300 | 30900102 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 5400 | 30900102 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 7100 | 30900102 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 7200 | 30900102 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 7210 | 30900102 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | BSA | 7300 | 30900102 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3100 | 50100301 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3101 | 50100302 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3200 | 50100302 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3300 | 50100303 | 0003 | YRSA | Watania Spare Parts |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3400 | 50100304 | 0014 | YVRP | Watania Packing |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3500 | 50100305 | 0013 | YFLM | Watania Fuel |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3700 | 50100306 | 0002 | YGEN | Watania General Items |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 3800 | 50100304 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 5100 | 50100312 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 5200 | 50100313 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 5300 | 50100309 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 5400 | 50100310 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 7100 | 50100308 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 7200 | 50100311 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 7210 | 50100307 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | INV | 7300 | 50100314 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 5300 | 50100100 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 5400 | 50100100 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 7100 | 50100100 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 7200 | 50100100 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 7210 | 50100100 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAX | 7300 | 50100100 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 3800 | 50100000 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 5300 | 50100000 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 5400 | 50100000 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 7100 | 50100000 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 7200 | 50100000 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 7210 | 50100000 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VAY | 7300 | 50100000 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3100 | 50100201 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3101 | 50100202 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3200 | 50100202 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3300 | 50100203 | 0003 | YRSA | Watania Spare Parts |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3400 | 50100204 | 0014 | YVRP | Watania Packing |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3500 | 50100205 | 0013 | YFLM | Watania Fuel |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3700 | 50100206 | 0002 | YGEN | Watania General Items |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 3800 | 50100204 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 5100 | 50100212 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 5200 | 50100213 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 5300 | 50100209 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 5400 | 50100210 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 7100 | 50100208 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 7200 | 50100211 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 7210 | 50100207 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 7300 | 50100216 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 8001 |  |  |  |  |
| WAPO | GBB | Offsetting entry for inventory posting | VBR | 9100 | 60600118 | 0011 |  |  |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3100 | 50100501 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3101 | 50100502 | 0001 | YROH | Watania Raw Material |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3200 | 50100502 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3300 | 50100503 | 0003 | YRSA | Watania Spare Parts |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3400 | 50100504 | 0014 | YVRP | Watania Packing |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3500 | 50100505 | 0013 | YFLM | Watania Fuel |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3700 | 50100506 | 0002 | YGEN | Watania General Items |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 3800 | 50100504 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 5100 | 50100512 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 5200 | 50100513 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 5300 | 50100509 | 0007 | YANM | Watania Live Materials |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 5400 | 50100510 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 7100 | 50100508 | 0008 | YHLB | Watania Semifinished |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 7200 | 50100511 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 7210 | 50100507 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | VNG | 7300 | 50100514 | 0009 | YFRT | Watania Finished Goods |
| WAPO | GBB | Offsetting entry for inventory posting | Z01 |  | 50100201 |  |  |  |
| WAPO | GBB | Offsetting entry for inventory posting | ZOF | 5400 | 50100210 | 0006 | YBYP | Watania By-Product |
| WAPO | GBB | Offsetting entry for inventory posting | ZOF | 7100 | 50900101 | 0008 | YHLB | Watania Semifinished |
| WAPO | HRA | HR postings, technical accounts |  |  | 19900102 |  |  |  |
| WAPO | HRA | HR postings, technical accounts |  |  | 19900101 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100101 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100102 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100103 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100104 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100105 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100107 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100109 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100110 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100111 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100111 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100112 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100201 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100202 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100203 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100204 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100205 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100206 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100301 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100302 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100302 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100305 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100306 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100307 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100308 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60800102 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60800103 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60800104 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60800105 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60200101 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60100106 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60200121 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60200103 |  |  |  |
| WAPO | HRC | HR postings, expense accounts | 2 |  | 60600106 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 10240102 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 10260101 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240101 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240103 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240106 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240110 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 60800102 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240107 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240108 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20380101 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20380103 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20380104 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20380105 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240111 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 10240101 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240111 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20380104 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240115 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20240116 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 20100205 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 10260101 |  |  |  |
| WAPO | HRF | HR postings, financial accounts | 2 |  | 10260102 |  |  |  |
| WAPO | KDM | Materials management exch.rate diffs |  |  | 50200102 |  |  |  |
| WAPO | KON | Consignment payables |  |  | 20280199 |  |  |  |
| WAPO | LKW | Accruals and defer.acct(material ledger) |  | 5300 | 10280499 | 0007 | YANM | Watania Live Materials |
| WAPO | LKW | Accruals and defer.acct(material ledger) |  | 5400 | 10280599 | 0006 | YBYP | Watania By-Product |
| WAPO | LKW | Accruals and defer.acct(material ledger) |  | 7100 | 10280299 | 0008 | YHLB | Watania Semifinished |
| WAPO | LKW | Accruals and defer.acct(material ledger) |  | 7200 | 10280699 | 0009 | YFRT | Watania Finished Goods |
| WAPO | LKW | Accruals and defer.acct(material ledger) |  | 7210 | 10280199 | 0009 | YFRT | Watania Finished Goods |
| WAPO | PRD | Cost (price) differences |  |  | 50200101 |  |  |  |
| WAPO | PRD | Cost (price) differences | PRA |  | 50200201 |  |  |  |
| WAPO | PRD | Cost (price) differences | PRF |  | 50300101 |  |  |  |
| WAPO | PRD | Cost (price) differences | PRU |  | 50200301 |  |  |  |
| WAPO | PRL | Differences Tariffs |  |  | 10289901 |  |  |  |
| WAPO | PRV | Material ledger fr.low.levels price dif. |  |  | 50400101 |  |  |  |
| WAPO | PRY | Cost (price) differences (mater.ledger) |  |  | 50400102 |  |  |  |
| WAPO | SKE | Cash discount received |  |  | 70100106 |  |  |  |
| WAPO | SKT | Cash discount expenses |  |  | 40300108 |  |  |  |
| WAPO | UMB | Gain/loss from revaluation |  | 3100 | 50100701 | 0001 | YROH | Watania Raw Material |
| WAPO | UMB | Gain/loss from revaluation |  | 3101 | 50100702 | 0001 | YROH | Watania Raw Material |
| WAPO | UMB | Gain/loss from revaluation |  | 3200 | 50100702 | 0012 | YAUX | Watania Auxiliary Materil |
| WAPO | UMB | Gain/loss from revaluation |  | 3300 | 50100703 | 0003 | YRSA | Watania Spare Parts |
| WAPO | UMB | Gain/loss from revaluation |  | 3400 | 50100704 | 0014 | YVRP | Watania Packing |
| WAPO | UMB | Gain/loss from revaluation |  | 3500 | 50100705 | 0013 | YFLM | Watania Fuel |
| WAPO | UMB | Gain/loss from revaluation |  | 3700 | 50100706 | 0002 | YGEN | Watania General Items |
| WAPO | UMB | Gain/loss from revaluation |  | 3800 | 50100704 | 0004 | YLEH | Watania Retur. Packag. |
| WAPO | UMB | Gain/loss from revaluation |  | 5100 | 50100712 | 0007 | YANM | Watania Live Materials |
| WAPO | UMB | Gain/loss from revaluation |  | 5200 | 50100713 | 0007 | YANM | Watania Live Materials |
| WAPO | UMB | Gain/loss from revaluation |  | 5300 | 50100709 | 0007 | YANM | Watania Live Materials |
| WAPO | UMB | Gain/loss from revaluation |  | 5400 | 50100710 | 0006 | YBYP | Watania By-Product |
| WAPO | UMB | Gain/loss from revaluation |  | 7100 | 50100708 | 0008 | YHLB | Watania Semifinished |
| WAPO | UMB | Gain/loss from revaluation |  | 7200 | 50100711 | 0009 | YFRT | Watania Finished Goods |
| WAPO | UMB | Gain/loss from revaluation |  | 7210 | 50100707 | 0009 | YFRT | Watania Finished Goods |
| WAPO | UMB | Gain/loss from revaluation |  | 7300 | 50100714 | 0009 | YFRT | Watania Finished Goods |
| WAPO | UMS | Tax payable posting (advance tax return) |  |  | 20340101 |  |  |  |
| WAPO | WPM | WIP from Price Differences (Material) |  |  | 10280300 |  |  |  |
| WAPO | WRX | GR/IR clearing account |  |  | 20280101 |  |  |  |
| WAPO | Y03 | Freight Amount |  |  | 20300102 |  |  |  |
| WAPO | Y04 | Documentation |  |  | 20300103 |  |  |  |
| WAPO | Y05 | Clache Amount |  |  | 20300101 |  |  |  |
| WAPO | Y06 | Handling Cost |  |  | 20300104 |  |  |  |
| WAPO | Y07 | Clearance |  |  | 20300105 |  |  |  |
| WAPO | Y08 | Landing |  |  | 20300106 |  |  |  |
| WAPO | Y09 | Demurrage |  |  | 20300107 |  |  |  |
| WAPO | Y10 | Transport |  |  | 20300108 |  |  |  |
| WAPO | Y11 | Custom Due |  |  | 20300109 |  |  |  |
| WAPO | Y12 | Bank expenses |  |  | 20300110 |  |  |  |
| WAPO | Y13 | Murabaha |  |  | 20300111 |  |  |  |
| WAPO | Y14 | insurance |  |  | 20300112 |  |  |  |
| WAPO | Y15 | Port charges |  |  | 20300113 |  |  |  |
| WAPO | Y16 | Unloading expenses |  |  | 20300114 |  |  |  |
| WAPO | Y17 | Analysis expenses |  |  | 20300115 |  |  |  |
| WAPO | Y18 | Steaming expenses |  |  | 20300116 |  |  |  |
| WAPO | Y19 | Mansur Almusaeid |  |  | 20300117 |  |  |  |
| WAPO | Y20 | Nethira Expenses |  |  | 20300118 |  |  |  |
| WAPO | Y21 | Agricultural fine |  |  | 20300119 |  |  |  |

- Accounts for Splitting the Cost of Goods Sold 

| **Splitting Scheme** |
| --- |
| **Scheme** | **CO Area** | **Chrt****/Accts** | **Ccomp.Str** |
| WAPO | WAPO | WAPO | Y1 |

| **Details COGS Accounts** |
| --- |
| **COGS Acct** | **CCOMP** | **Name of Cost Component** | **Target Acc.** | **G/L account short text** | **Default** |
| 50000000 | 10 | Raw Material | 50010000 | COGS - Row Materials | X |
| 50000000 | 11 | Auxiliary Materials | 50020000 | COGS - Auxiliary Materials |  |
| 50000000 | 12 | Fuel, Oil and Gas | 50030000 | COGS - Fuel, Oil and Gas |  |
| 50000000 | 20 | Semi-Finished Materials | 50040000 | COGS - Semi-Finished Materials |  |
| 50000000 | 21 | Animal Material | 50050000 | COGS - Animal Material |  |
| 50000000 | 30 | Packing Materials | 50060000 | COGS - Packing Materials |  |
| 50000000 | 40 | Machine Depreciation | 50070000 | COGS - Machine Depreciation |  |
| 50000000 | 41 | Animal Depreciation | 50080000 | COGS - Animal Depreciation |  |
| 50000000 | 42 | Labor | 50090000 | COGS - Labor |  |
| 50000000 | 43 | Overhead | 50100000 | COGS - Overhead |  |

- Financial Statement Version

| **ASSETS** | ** ** |
| --- | --- |
|  | Cash & Cash Equivalents |
|  | Accounts Receivable |
|  | Other receivables& advance payments |
|  | Inventories |
|  | Due form related parties |
|  | Accrued revenue-Subsidies |
|  | Prepaid Expenses |
|  | Property, Plant, and Equipment |
|  | Less: Accumulated Depreciation |
|  | Investments |
|  | Other Long Term Assets |
| **Liabilities and Equity** | ** ** |
|  | Current Liabilities |
|  | Short term loans |
|  | Account payables |
|  | Notes payable |
|  | Due to related parties |
|  | Delayed government subsidies |
|  | Long term liability |
|  | End of service bonus |
|  | Shareholder's Equity |
|  | Capital |
|  | Contributions of capital |
|  | Statutory reserves |
|  | Owner's Current Account |
|  | Retained Earnings |
|  | Data Migration Accounts |
| **Income Statement** | ** ** |
|  | Net Income |
|  | Cost of Sales |
|  | Selling, General & Admin (SG&A) Expenses |
|  | Provisions for Doubtful Accounts |
|  | Non-Operating Income |
|  | Interest Income and Interest Expense |
|  | Non-Operating Expenses |
|  | Income Before Income Taxes |

# **Technical/Development Related Items**

# **Technical/Development Related Items**

                               

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F_FI-10_1 | Form | Internal Document form | ZF140_INT_DOCU_01 |
| E_FI-010_1 | Enhancement | FI line Item Substitution |  |
| R_FI-010_10 | Report | Upload Accounting Document | YFI011 |
| R_FI-010_17 | Report | Accounting Entries | YFI025 |
| R_FI-010_18 | Report | Check offsetting account | YFI023 |
| F_FI-10_4 | Form | Profit and Loss Statement | YFI016 |
| F_FI-10_5 | Form | TR Profit and Loss Statement Report | YFI017 |
| F_FI-10_6 | Form | Balance Sheet Statement | YFI018 |
| F_FI-10_7 | Form | TR Balance Sheet Statement | YFI019 |
| F_FI-10_8 | Form | G/L Account - Balances | YFI031 |

	

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_GL_ACCOUNTANT | General Ledger Accountant |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| GL accountants | Key User |

							1 of 16

								29 of 30
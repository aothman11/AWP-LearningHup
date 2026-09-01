# V3-MM-J60 Logistics Invoice Verification

| logistics invoice verification |
| --- |

## Process Description

Logistics Invoice Verification is a part of Materials Management (MM). It situated at the end of the logistics supply chain that includes Purchasing, Inventory Management, and Invoice Verification. It is in Logistics Invoice Verification that [incoming invoices](https://help.sap.com/saphelp_erp60_sp/helpdata/en/dc/6eb6531de6b64ce10000000a174cb4/content.htm) verified in terms of their content, prices and arithmetic. When the invoice posted, the invoice data saved in the system. The system updates the data saved in the invoice documents in Materials Management and Financial Accounting.

Logistic Invoice Verification closely connected with the SAP components Finance (FI) and Controlling (CO). It provides the information for payment or evaluation of invoices to these components. All functions of normal invoice verification are available in logistic invoice verification. Normal invoice verification and logistic invoice verification used alongside each other if needed. 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | It completes the material procurement process, which started with the purchase requisition and resulted in a goods receipt. | S | H |
| 02 | Allows invoices that do not originate in materials procurement (such as services, expenses, course costs) to be processed. | S | H |
| 03 | Allows credit memos be processed, as either invoice reversals or return deliveries. | S | H |
| 04 | A part of the conditions agreed with the vendor applied retroactively instead of directly with the merchandise invoice. | S | H |
| 05 | An incoming invoice contains a wealth of information | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Vendor invoice entry |
| **Process Input** | Goods Receipt of Purchase order |
| **Process Output** | Posted invoice document |
| **Process Owner** | Accounting Payable Department |
| **Process Volumes** | 50 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Goods Receipt-Based Invoice verification with Reference to purchase order or delivery note | MIRO | 1-Supplier Invoice ID F0346A 2- Manage Supplier Invoices ID F0859 | AP Accountant |
| 02 | Cancel Invoice Document | MR8M |  | AP Accountant |
| 03 | List of GR/IR Balances | MB5S ZMR11 |  | AP Accountant |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MIR5 | Display List of Invoice Documents | X |  |
| 02 | MIR6 | Invoice Overview | X |  |
| 03 | MR11 | Maintain GR/IR Clearing Account | X |  |
| 04 | MR51 | Accounting Documents for Material | X |  |
| 07 | ZMR11 | GR/IR Clearing Report |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim |  | AP Accountants |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Invoice Processing Time (S/4HANA)  FIORI APP ID F1745 |  | Minimize |
| 02 | Invoice Price Variance FIORI APP ID F0682 |  | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Inventory | MM-IM |
| 02 | Purchasing | MM-PUR |
| 03 | Invoice Verification | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |

| **Plant** |
| --- |
| 1010 | Qassim Central |  |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1120 | Feed Mill |  |
| 1140 | Yanbu Grain Hub |  |
| 1150 | Feed Mill Watania1 | Obsolete |
| 1160 | Feed Mill Watania2 - FM3 | Obsolete |
| 1170 | Feed Mill Watania2 - FM6 | Obsolete |
| 1180 | Feed Mill Wadi FM4 | Obsolete |
| 1190 | Feed Mill Wadi FM5 | Obsolete |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1220 | Parents - Laying |  |
| 1221 | Grading Station - Dulfa | Obsolete |
| 1222 | Grading Station - Wadi | Obsolete |
| 1223 | Grading Station - Kubid | Obsolete |
| 1224 | Grading Station - Shery | Obsolete |
| 1230 | Parents - Rearing |  |
| 1231 | Parents - Laying - Dulfa | Obsolete |
| 1232 | Parents - Laying - Wadi | Obsolete |
| 1233 | Parents - Laying - Kubid | Obsolete |
| 1234 | Parents - Laying - Shery | Obsolete |
| 1241 | Parents - Rearing - Dulfa | Obsolete |
| 1242 | Parents - Rearing - Wadi | Obsolete |
| 1244 | Parents - Rearing - Shery | Obsolete |
| 1250 | C Layer - Laying |  |
| 1260 | C Layer - Rearing |  |
| 1310 | Fleet Central Workshop |  |
| 1410 | Live Operation Maintenance |  |
| 1800 | Qassim Export | Obsolete |
| 1840 | Qassim Agri. | Obsolete |
| 2100 | Transportation | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Laying |  |
| 3300 | GP-Rearing |  |
| 4100 | Qassim Agri. |  |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Business Partner (Supplier ) Master Record |

### System Configuration Considerations

| Maintain Default Values for Tax Codes |
| --- |
| Company Code | Default Domestic | Default Unplanned DELV Cost |
| 1000 | V0 | V0 |

| Determine Payment Block |
| --- |
| Payment Block | Description |
| A | WAPO Block for Payment |

| Activate Direct Posting to G/L Accounts and Material Accounts |
| --- |
| Posting to G/L Account Is Active | Posting to Material Is Active |
| X | X |

## Technical/Development Related Items

	N/A	

## Authorization

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 1 | YFI_AP_ACC | Accounts Payables Accountant |
| 2 | YFI_AP_ACC_2000 | Accounts Payables Accountant |
| 3 | YFI_AP_ACC_3000 | Accounts Payables Accountant |
| 4 | YFI_AP_ACC_4000 | Accounts Payables Accountant 4000 |
| 5 | YFI_AP_ACC_MNGR | Accounts Payables Accountant |
| 6 | YFI_AR_ACC_B48 | YFI_AR_ACC_Jedda |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Payable Accountants | AP Key User |

In end user training, we should collect different users for AP Department and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 6 |
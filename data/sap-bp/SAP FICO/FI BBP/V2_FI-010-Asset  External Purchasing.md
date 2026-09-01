# V2_FI-010-Asset  External Purchasing

| **Asset external Purchasing** |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard****/ Gap** | **Priority** |
| 01 | Asset Purchase with reference to PO | S | H |
| 02 | Asset start date depreciation will be on 1st of the current month if purchasing is before 20th of the month | S | H |
| 03 | Asset start date depreciation will be on 1st of the next month if purchasing is after 20th of the month | S | H |

## Business Process Description

An external asset acquisition is a business transaction resulting from the acquisition of an asset from a business partner.** **The acquisition is posted integrated with Accounts payable and purchasing.

 

| Process Characteristics |
| --- |
| Process Trigger | Need for purchasing new asset for the company |
| Process Input | Purchase Requisition from the asset purchase requester |
| Process Output | Asset received, invoiced and recorder in asset book |
| Process Owner | Asset accountant |
| Process Volumes | Around 5 Assets / day |
| Process Frequencies | Daily |

## Business Process Diagrams

**Process Steps Details and Responsibility Assignment Matrix (RACI)**

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Asset Receiving Employee** | **AP Accountant** |
| Trigger | Daily Check on new assets PRs |  |  |  |  |  |
| 1 | Check Asset Purchase Requisitions list | ME5A | Display Purchase Requisitions | R | I | I |
| 2 | Create Asset Master and assign budget | AS01 | Create Asset Master Record | R | I | I |
| 3 | Update Purchase Requisition with Asset Number | ME52N | Display Purchase Requisition | R | I | I |
| 4 | Release Assets Purchase Requisition | ME54N | Release Purchase Requisition | R | I | I |
| 5 | Monitor Asset Purchase Orders | ME2L | Display Purchasing Documents by Supplier | R | I | I |
| 6 | Goods Receipt at the Asset Receiving Area | MIGO | Post Goods Movement | I | R | I |
| 7 | Assign personal number if required | AS02 | Change Asset | R | I | I |
| 8 | Send PO, Asset Receipt and original vendor invoice |  |  | I | R | I |
| 9 | Receive PO, Asset Receipt and original vendor invoice |  |  | I | I | R |
| 10 | Post Asset Invoice | MIRO | Create Supplier Invoice | I | I | R |
| 11 | Asset Locked to Acquisition Postings | AS05 | Block Assets | R | I | I |
| Output | Asset Purchased, Received and invoiced |  |  |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 1 | S_ALR_87011963 | Asset Balances by Asset Number | X |  |
| 2 | S_ALR_87011964 | Asset Balances by Asset Class | X |  |
| 3 | S_ALR_87011966 | Asset Balances by Cost Center | X |  |
| 4 | S_ALR_87011967 | Asset Balances by Plant | X |  |
| 5 | S_ALR_87011968 | Asset Balances by Location | X |  |
| 6 | S_ALR_87011979 | Physical Inventory List by Cost Center | X |  |
| 7 | S_ALR_87011980 | Physical Inventory List by Location | X |  |
| 8 | S_ALR_87011981 | Physical Inventory List by Asset Class | X |  |
| 9 | S_ALR_87011982 | Physical Inventory List by Plant | X |  |
| 10 | S_ALR_87011990 | Asset History Sheet | X | X |
| 11 | S_ALR_87011994 | Asset Balances | X |  |
| 12 | S_ALR_87012006 | Ordinary Depreciation | X |  |
| 13 |  | Total Depreciation | X | X |
| 14 |  | Asset Transactions | X | X |
| 15 |  | Depreciation Reporting | X | X |
| 16 |  | Asset Values | X | X |
| 17 |  | Asset Balances | X | X |
| 18 |  | 360° view on asset (Asset Explorer) | X | X |
| 19 |  | Asset Acquisitions for mid quarter | X | X |
| 20 |  | Retirement Revenue Analysis | X | X |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 2 | AA Accountant |

## Operational Decisions or Logic within the Process

Asset receipt transaction to be done via new department (Material and Asset Receipt Unit).

Three documents are required to record the asset vendor invoice which are the PO document, asset receipt document and original/Copy vendor invoice.  

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

| **Process KPIs** |
| --- |
| **ID** | **KPI** | **Description** | **Interpretation** | **Calculation Formula** | **Unit of Measure** | **Direction of Improvement** |
| 1 | Asset Turnover Ratio | A measure to indicate the relationship between Assets and Revenue | Asset turnover Ratio is useful to determine the amount of sales that are generated for each value of assets. It generally indicates the Pricing Strategy. | Revenue / Total Assets *100 | % | Maximize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistics Invoice Verification | MM-IV |

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

| **Purchasing Organization** |
| --- |
| 1000 | Poultry Purchasing Organization |

| **Purchasing Group ** |
| --- |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Vendor) |
| Asset Master |

## System Configuration Considerations 

- Chart of Depreciation

| **ChDep** | **Description** |
| --- | --- |
| 1000 | Watania Poultry Chart of Depreciation |

- Separate screen layout and account determination for each asset Class 

| **Asset Class** | **Description** | **Create Screen Layout Rules** | **Specify Account Determination** | **Status Of ****Auc** |
| --- | --- | --- | --- | --- |
| Y11000 | Land | Y110 | Y11000 | No AUC |
| Y12000 | Wells | Y120 | Y12000 | No AUC |
| Y13000 | Buildings & Improvements | Y130 | Y13000 | No AUC |
| Y14000 | Plant & Machinery | Y140 | Y14000 | No AUC |
| Y15000 | Transportation & Vehicles | Y150 | Y15000 | No AUC |
| Y16000 | Tools | Y160 | Y16000 | No AUC |
| Y17000 | Furniture & Furnishings | Y170 | Y17000 | No AUC |
| Y18000 | Fixtures & Fittings | Y180 | Y18000 | No AUC |
| Y19000 | Computers & Hardware | Y190 | Y19000 | No AUC |
| Y20000 | Spare Parts | Y200 | Y20000 | No AUC |
| Y21000 | Trees | Y210 | Y21000 | No AUC |
| Y22000 | Intangibles Assets | Y220 | Y22000 | Line Item Settlement |
| Y40000 | Asset Under Construction | Y400 | Y40000 | No AUC |
| Y91000 | Parent Laying | Y910 | Y91000 | No AUC |
| Y92000 | Layer Laying | Y920 | Y92000 | No AUC |
| Y93000 | GP Parent Laying Bio Asset | Y930 | Y93000 | No AUC |

  

- Define Depreciation Areas  

| **Watania Poultry Chart of Depreciation** |
| --- |
| **Dep.Area** | **Name of depreciation area** | **Real** | **Target Group** | **Acc.Princ****.** | **GL** |
| 01 | IFRS in local currency | X | 0L | IFRS | 1 |
| 02 | Tax depreciation area | X | 0L | IFRS | 0 |

- No negative postings allowed. 

-  Activate Account Assignment Objects

| **Account Assignment Objects** |
| --- |
| **AccAsgnOb** | **Account Assignment object name** | **Active** |
| CAUFN | Internal Order | X |
| EAUFN | Investment Order | X |
| FKBER | Functional Area | X |
| KOSTL | Cost Center | X |
| LSTAR | Activity Type | X |

  

-    Both Depreciation Areas are activated in all asset classes in the Asset Class

| **Maintain Depreciation Key** |
| --- |
| **Depreciation Key** | **Method** | **Active** |
| 0000 | No depreciation and no interest | X |
| Z001 | Str.-line over rem.life pro rata to zero | X |

-    Depreciation Key for all asset classes is Z001 except classes (11000 Land and 40000 AUC) is 0000.

# **Technical/Development Related Items**

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| R_FI-010_3 | Report | Asset Acquisition Tax | YFI004 |
| R_FI-010_12 | Report | Asset Master Data Report | YFI013 |

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_AA_AP | Asset External Purchasing |  |
| YFI_AA_AP_2000 | Asset External Purchasing_2000 |  |
| YFI_AA_AP_3000 | Asset External Purchasing_3000 |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| AA Accountants | Key User |

							1 of 8

								8 of 8
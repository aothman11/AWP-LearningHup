# V2_FI-020-Asset Accounting

| **Asset ****Accounting** |
| --- |

# **Process Description**

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard****/ Gap** | **Priority** |
| 01 | Transparent view of asset acquisition | S | H |
| 02 | Automated, efficient processing | S | H |
| 03 | Automatic Calculation of values for depreciation | S | H |
| 04 | Depreciation forecast | S | H |

##  Business Process Description

Asset accounting is a subsidiary ledger of the general ledger and is used to manage and document fixed asset transactions in detail. In general ledger accounting, you can update depreciation and changes to asset balance sheet values in asset accounting. You can also make various account assignments to cost accounting for these transactions.

| Process Characteristics |
| --- |
| Process Trigger | Asset Transaction |
| Process Input | Asset maintenance |
| Process Output | Asset year end closing |
| Process Owner | Asset accountant |
| Process Volumes | Around 5 Assets / day |
| Process Frequencies | Daily/Monthly/Yearly |

## Business Process Diagrams

01- Asset Accounting - Direct Acquisition

02 - Asset Accounting - Unplanned Depreciation

03 - Asset Accounting – Retirement 

04 - Asset Accounting -  Asset Revaluation

05 - Asset Accounting - Month End Closing 

06 - Asset Accounting - Year End Closing 

**Process Steps Details and Responsibility Assignment Matrix (RACI)**

01- Asset Accounting - Direct Acquisition

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger | Receive Email From top Management to direct asset purchase |  |  |  |  |
| 01 | Acquisition without order (integrated AP) | F-90 | Acquisition without order (integrated AP) | R | I |
| Output | Asset Purchased and invoiced |  |  |  |  |

02 - Asset Accounting - Unplanned Depreciation

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger | Post permanent reduction in the value of an asset value |  |  |  |  |
| 01 | Receive Technical Report to Devaluate an Asset |  |  | R | I |
| 02 | Approve Asset devaluation |  |  | I | R |
| 03 | Asset Unplanned Depreciation | ABAA | Asset Unplanned Depreciation | R | I |
| Output | The unplanned depreciation has been posted to the depreciation area specified and is displayed separately. The unplanned depreciation is posted to Financial Accounting during the depreciation posting run. |  |  |  |  |

03 - Asset Accounting – Retirement 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger |  |  |  |  |  |
| 01 | Receive Technical Report to Retire an Asset |  |  | R | I |
| 02 | Approve Asset retirement |  |  | I | R |
| 03 | Asset Sale with Invoice (AR Integrated) | F-92 | Asset Sale with Invoice | R | I |
| 04 | Retirement Due to Scrapping | ABAVN | Post Asset Retirement by Scrapping | R | I |
| 05 | Retirement Due to Scrapping | ZABAVN | Post Asset Retirement by Scrapping | R | I |
| Output | Asset removed from asset portfolio |  |  |  |  |

04 - Asset Accounting - Asset Revaluation

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger | Asset Revaluation |  |  |  |  |
| 01 | Post Asset Revaluation | ABAW | Asset Revaluation | R | I |
| 02 | Manage Depreciation Run | AFAB | Manage Depreciation Run | R | I |
| Output | Assets depreciation run |  |  |  |  |

05 - Asset Accounting - Month End Closing 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger | Month End Closing |  |  |  |  |
| 01 | Manage Depreciation Run | AFAB | Manage Depreciation Run | R | I |
| 02 | Depreciation Reporting |  | Depreciation Reporting | R | I |
| 03 | Asset Total Depreciation |  | Asset Total Depreciation | R | I |
| Output | Assets depreciation run |  |  |  |  |

06 - Asset Accounting - Year End Closing 

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Asset Accountant** | **Financial Manager** |
| Trigger |  |  |  |  |  |
| 01 | Asset History Sheet |  | Asset History Sheet | R | I |
| 02 | Asset Transaction List |  | Asset Transaction List | R | I |
| 03 | Depreciation Reporting |  | Depreciation Reporting | R | I |
| 04 | Asset Balances |  | Asset Balances | R | I |
| 05 | Asset Total Depreciation |  | Asset Total Depreciation | R | I |
| 06 | AA Fiscal Year Change | FAGLGVTR |  | R | I |
| 07 | AA Year-End Closing | AJAB |  | R | I |
| Output | New Fiscal Year Changed for Assets |  |  |  |  |

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

Assets are always purchased with purchase order integration unless it is an argent requirement from top management only so it will be directly posted from FI.

For asset retirement and asset devaluation via unplanned depreciation, it is required to be approved from the financial manager.

Asset sales will be done from FI with integration to FI-AR.  

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
| 01 | Accounts Receivable | FI-AR |
| 02 | Accounts Payables | FI-AP |
| 03 | General Ledger | FI-GL |

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
| Asset Master |

## System Configuration Considerations

| **Asset Classes Account Determination** |
| --- |
| **Asset Class** | **Description** | **Acquisition** | **Accumulated dep.** | **Acquisition: down payments** | **Down-payments clearing** | **Depreciation expenses** |
| Y11000 | Land | 10340101 | ** ** | ** ** | ** ** | ** ** |
| Y12000 | Wells | 10340201 | 10340299 | ** ** | ** ** | 60400101 |
| Y13000 | Buildings & Improvements | 10340301 | 10340399 | ** ** | ** ** | 60400101 |
| Y14000 | Plant & Machinery | 10340401 | 10340499 | ** ** | ** ** | 60400101 |
| Y15000 | Transportation & Vehicles | 10340501 | 10340599 | ** ** | ** ** | 60400101 |
| Y16000 | Tools | 10340601 | 10340699 | ** ** | ** ** | 60400101 |
| Y17000 | Furniture & Furnishings | 10340701 | 10340799 | ** ** | ** ** | 60400101 |
| Y18000 | Fixtures & Fittings | 10340801 | 10340899 | ** ** | ** ** | 60400101 |
| Y19000 | Computers & Hardware | 10340901 | 10340999 | ** ** | ** ** | 60400101 |
| Y20000 | Spare Parts | 10341001 | 10341099 | ** ** | ** ** | 60400101 |
| Y21000 | Trees | 10341101 | 10341299 | ** ** | ** ** | 60400101 |
| Y22000 | Intangibles Assest | 10341101 | 10341199 | ** ** | ** ** | 60400101 |
| Y40000 | Asset Under Construction | 10360101 | ** ** | 10360103 | 10360104 | ** ** |
| Y91000 | Parent Laying | 10300102 | 10300199 | ** ** | ** ** | 50100214 |
| Y92000 | Layer Laying | 10300202 | 10300299 | ** ** | ** ** | 50100214 |
| Y93000 | GP Parent Laying Bio Assets | 10300102 | 10300199 | ** ** | ** ** | 50100214 |

| **Asset Classes Account Determination** |
| --- |
| **Asset Class** | **Description** | **Loss made on asset retirement w/o ****reven****.** | **Clearing acct. revenue from asset sale** | **Gain from sales** | **Loss from sales** | **Unplanned. Dep.** |
| Y11000 | Land | 70200104 | 70200101 | 70200102 | 70200103 | ** ** |
| Y12000 | Wells | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y13000 | Buildings & Improvements | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y14000 | Plant & Machinery | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y15000 | Transportation & Vehicles | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y16000 | Tools | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y17000 | Furniture & Furnishings | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y18000 | Fixtures & Fittings | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y19000 | Computers & Hardware | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y20000 | Spare Parts | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y21000 | Trees | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y22000 | Intangibles Assest | 70200104 | 70200101 | 70200102 | 70200103 | 60400199 |
| Y40000 | Asset Under Construction | ** ** | ** ** | ** ** | ** ** | ** ** |
| Y91000 | Parent Laying | 50100509 | 50100509 | ** ** | ** ** | 50100509 |
| Y92000 | Layer Laying | 50100509 | 50100509 | ** ** | ** ** | 50100509 |
| Y93000 | GP Parent Laying Bio Assets | 50100509 | 50100509 | ** ** | ** ** | 50100509 |

| **Technical Clearing Account for Integrated Asset Acquisition** |
| --- |
| **Chart** | **Account** |
| WPO | 10349901 |

- Net book value of the asset after total depreciation is 1 SAR.

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_AA_ACC | FI: Asset Accountant |  |
| YFI_AA_ACC_2000 | FI: Asset Accountant_2000 |  |
| YFI_AA_ACC_3000 | FI: Asset Accountant_3000 |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| AA Accountants | Key User |

							1 of 15

								15 of 15
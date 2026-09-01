# V2_Overhead Cost Accounting

# **Overhead Cost Accounting**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-060-001 | Accurate allocations on cost centers | S | H |
| CO-060-002 | Transparent view of Plan/Actual expenses on cost center | S | H |

##  Business Process Description

Cost center accounting takes the costs incurred in a company and allocates them to the actual subareas that caused them. During period-end closing, these costs are distributed to the cost centers through automatic allocation. By allocating the cost elements to cost centers in overhead cost controlling, you can control your costs and compare plan and actual costs. The plan/actual comparison at the end of the period helps you to plan, control, and monitor cost behavior.

| Process Characteristics |
| --- |
| Process Trigger | Expenses on Cost center |
| Process Input | Primary cost element postings |
| Process Output | Costs allocated to other cost objects |
| Process Owner | Controller |
| Process Volumes |  |
| Process Frequencies | Monthly/Yearly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **GL Accountant** | **Controller** | **Internal Controller** |
| Trigger | Expenses on Cost center |  |  |  |  |  |
| 1 | Enter GL Account Document | FB50 | Post General Journal Entries | R | I | I |
| 2 | Enter Manual Reposting | KB11N |  | I | R | I |
| 3 | Record Statistical Key Figures | KB31N | Post Statistical Key Figures | I | R | I |
| 4 | Run Assessment of Shared Expenses (Services) | KSU5 | Execute Actual Assessment GL | I | R | I |
| 5 | Run Assessment of Shared Expenses (Manufacturing) | KSU5 | Execute Actual Assessment GL | I | R | I |
| 6 | Cost Centers: Actual/Plan/Commitments | S_ALR_87013620 | Cost Centers Actuals | I | I | R |
| 7 | Cost Centers: Quarterly Comparison | S_ALR_87013623 | Cost Center Plan/Actual YTD | I | I | R |
| 8 | Cost centers: Actual/Plan/Variance | S_ALR_87013611 | Cost Center Plan/Actual | I | R | I |
| Output | Costs allocated to other cost objects |  |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Controller |

## Operational Decisions or Logic within the Process

N/A 

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Financial Accounting | FI-GL |

## Potential Future Process Improvements (out of scope for this implementation)

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Controlling Area ** |
| --- |
| WAPO | Al-Watania Poultry |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Cost Elements |
| Cost Centers |

## System Configuration Considerations

- Edit Automatic Account Assignment 

| **Automatic account assignment - default assignments** |
| --- |
| **Company Code** | **Cost Element** | **Cost Center** | **Account Assignment Detail** |
| 1000 | 50100301 |  | 3 | Profit center is mandatory |
| 1000 | 50100302 |  | 3 | Profit center is mandatory |
| 1000 | 50100303 |  | 3 | Profit center is mandatory |
| 1000 | 50100304 |  | 3 | Profit center is mandatory |
| 1000 | 50100305 |  | 3 | Profit center is mandatory |
| 1000 | 50100306 |  | 3 | Profit center is mandatory |
| 1000 | 50100307 |  | 3 | Profit center is mandatory |
| 1000 | 50100308 |  | 3 | Profit center is mandatory |
| 1000 | 50100309 |  | 3 | Profit center is mandatory |
| 1000 | 50100310 |  | 3 | Profit center is mandatory |
| 1000 | 50100311 |  | 3 | Profit center is mandatory |
| 1000 | 50100312 |  | 3 | Profit center is mandatory |
| 1000 | 50100313 |  | 3 | Profit center is mandatory |
| 1000 | 50100314 |  | 3 | Profit center is mandatory |
| 1000 | 50100501 |  | 3 | Profit center is mandatory |
| 1000 | 50100502 |  | 3 | Profit center is mandatory |
| 1000 | 50100503 |  | 3 | Profit center is mandatory |
| 1000 | 50100504 |  | 3 | Profit center is mandatory |
| 1000 | 50100505 |  | 3 | Profit center is mandatory |
| 1000 | 50100506 |  | 3 | Profit center is mandatory |
| 1000 | 50100507 |  | 3 | Profit center is mandatory |
| 1000 | 50100508 |  | 3 | Profit center is mandatory |
| 1000 | 50100509 |  | 3 | Profit center is mandatory |
| 1000 | 50100510 |  | 3 | Profit center is mandatory |
| 1000 | 50100511 |  | 3 | Profit center is mandatory |
| 1000 | 50100512 |  | 3 | Profit center is mandatory |
| 1000 | 50100513 |  | 3 | Profit center is mandatory |
| 1000 | 50100601 |  | 3 | Profit center is mandatory |
| 1000 | 50100602 |  | 3 | Profit center is mandatory |
| 1000 | 50100603 |  | 3 | Profit center is mandatory |
| 1000 | 50100604 |  | 3 | Profit center is mandatory |
| 1000 | 50100605 |  | 3 | Profit center is mandatory |
| 1000 | 50100606 |  | 3 | Profit center is mandatory |
| 1000 | 50100607 |  | 3 | Profit center is mandatory |
| 1000 | 50100608 |  | 3 | Profit center is mandatory |
| 1000 | 50100609 |  | 3 | Profit center is mandatory |
| 1000 | 50100610 |  | 3 | Profit center is mandatory |
| 1000 | 50100611 |  | 3 | Profit center is mandatory |
| 1000 | 50100612 |  | 3 | Profit center is mandatory |
| 1000 | 50100613 |  | 3 | Profit center is mandatory |
| 1000 | 50100614 |  | 3 | Profit center is mandatory |
| 1000 | 50100701 |  | 3 | Profit center is mandatory |
| 1000 | 50100702 |  | 3 | Profit center is mandatory |
| 1000 | 50100703 |  | 3 | Profit center is mandatory |
| 1000 | 50100704 |  | 3 | Profit center is mandatory |
| 1000 | 50100705 |  | 3 | Profit center is mandatory |
| 1000 | 50100706 |  | 3 | Profit center is mandatory |
| 1000 | 50100707 |  | 3 | Profit center is mandatory |
| 1000 | 50100708 |  | 3 | Profit center is mandatory |
| 1000 | 50100709 |  | 3 | Profit center is mandatory |
| 1000 | 50100710 |  | 3 | Profit center is mandatory |
| 1000 | 50100711 |  | 3 | Profit center is mandatory |
| 1000 | 50100712 |  | 3 | Profit center is mandatory |
| 1000 | 50100713 |  | 3 | Profit center is mandatory |
| 1000 | 50100714 |  | 3 | Profit center is mandatory |
| 1000 | 50200101 |  | 3 | Profit center is mandatory |
| 1000 | 50200102 |  | 3 | Profit center is mandatory |
| 1000 | 50200201 |  | 3 | Profit center is mandatory |
| 1000 | 50200301 |  | 3 | Profit center is mandatory |
| 1000 | 50300101 |  | 3 | Profit center is mandatory |
| 1000 | 50400102 |  | 3 | Profit center is mandatory |
| 1000 | 50400103 |  | 3 | Profit center is mandatory |
| 1000 | 60600113 | 14000 |  |  |
| 1000 | 60600119 | 14000 |  |  |
| 1000 | 60600120 | 14000 |  |  |
| 1000 | 60600121 | 14000 |  |  |
| 1000 | 60600122 | 14000 |  |  |
| 1000 | 60800102 | 12071 |  |  |
| 1000 | 60800103 | 12073 |  |  |
| 1000 | 60800104 | 12030 |  |  |
| 1000 | 60800105 | 14000 |  |  |
| 1000 | 70100112 | 14000 |  |  |
| 1000 | 70100113 | 14000 |  |  |
| 2000 | 60600113 | 24000 |  |  |
| 2000 | 60600119 | 24000 |  |  |
| 2000 | 60600120 | 24000 |  |  |
| 2000 | 60600121 | 24000 |  |  |
| 2000 | 60600122 | 24000 |  |  |
| 2000 | 60800102 | 24000 |  |  |
| 2000 | 60800103 | 24000 |  |  |
| 2000 | 60800104 | 24000 |  |  |
| 2000 | 60800105 | 24000 |  |  |
| 2000 | 70100112 | 24000 |  |  |
| 2000 | 70100113 | 24000 |  |  |
| 3000 | 50100000 |  |  |  |
| 3000 | 50100301 |  | 3 | Profit center is mandatory |
| 3000 | 50100302 |  | 3 | Profit center is mandatory |
| 3000 | 50100303 |  | 3 | Profit center is mandatory |
| 3000 | 50100304 |  | 3 | Profit center is mandatory |
| 3000 | 50100306 |  | 3 | Profit center is mandatory |
| 3000 | 50100308 |  | 3 | Profit center is mandatory |
| 3000 | 50100309 |  | 3 | Profit center is mandatory |
| 3000 | 50100608 |  | 3 | Profit center is mandatory |
| 3000 | 50100708 |  | 3 | Profit center is mandatory |
| 3000 | 50100709 | 32200 |  |  |
| 3000 | 50200101 |  | 3 | Profit center is mandatory |
| 3000 | 50200201 |  | 3 | Profit center is mandatory |
| 3000 | 50400102 |  | 3 | Profit center is mandatory |
| 3000 | 50400103 |  | 3 | Profit center is mandatory |
| 3000 | 60600113 | 35000 |  |  |
| 3000 | 60600119 | 35000 |  |  |
| 3000 | 60600120 | 35000 |  |  |
| 3000 | 60600121 | 35000 |  |  |
| 3000 | 60600122 | 35000 |  |  |
| 3000 | 60800102 | 35000 |  |  |
| 3000 | 60800103 | 35000 |  |  |
| 3000 | 60800104 | 35000 |  |  |
| 3000 | 60800105 | 35000 |  |  |
| 3000 | 70100112 | 35000 |  |  |
| 3000 | 70100113 | 35000 |  |  |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_OVERHEAD_COST_ACCOUNTING | OVERHEAD COST ACCOUNTING |  |
| YCO_OVERHEAD_COST_ACC_3000 | OVERHEAD COST ACCOUNTING_3000 |  |
| YCO_OVERHEAD_ACTUAL_PRICES | OVERHEAD ACTUAL PRICES |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Controller | Key User |

							1 of 7

								2 of 7
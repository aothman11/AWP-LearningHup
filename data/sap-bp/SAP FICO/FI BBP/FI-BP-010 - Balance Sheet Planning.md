# FI-BP-010 - Balance Sheet Planning

| **Balance sheet Accounts Planning** |
| --- |

# **Process Description**

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard****/ Gap** | **Priority** |
| 01 | Plan Balance sheet GL Accounts | S | H |
| 02 | Present Planned Financial statements | S | H |
| 03 | Compare actual and plan data | S | H |
| 04 | Display totals records of your plan data | S | H |

##  Business Process Description

Planning balance sheet general ledger accounts for the next year budget. This planning will cover all types of balance sheet accounts including working capital and revenue accounts on main ledger. Profit and loss accounts will come from cost center accounting. 

| Process Characteristics |
| --- |
| Process Trigger | Preparing Next year budget |
| Process Input | Balance sheet planning amounts |
| Process Output | Planned financial statements |
| Process Owner | Enterprise budget Controller |
| Process Volumes | 500 |
| Process Frequencies | Yearly |

## Business Process Diagrams

- Balance sheet GL Accounts

**Process Steps Details and Responsibility Assignment Matrix (RACI)**

- Balance sheet GL Accounts

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Enterprise Budget Controller** | **Financial Manager** |
| Trigger | Balance sheet planning amounts |  |  |  |  |
| 01 | Define Plan Period | GCP5 |  | R/A | I |
| 02 | Set Planner Profile | GLPLSET |  | R/A | I |
| 03 | Enter planning data as total balance | GP12N |  | R/A | I |
| 04 | Display Planned Financial Statement amount | S_ALR_87012284 |  | R/A | I |
| 05 | Lock fiscal year dependent | GLP2 |  | R/A | I |
| Output | Asset Purchased and invoiced |  |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 1 | S_ALR_87012284 | Financial Statement | X |  |
| 2 | S_ALR_87013611 | Cost Centers: Actual/Plan/Variance | X |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Enterprise budget controller |

## Operational Decisions or Logic within the Process

- Planning will be on main ledger and local currency SAR

- Planning amounts will be as total balances and can be distributed on periods.

- Planning Version 0 will be used to plan the balance sheet accounts  and profit and loss accounts(Same as CO planning version)

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

| **Process KPIs** |
| --- |
| **ID** | **KPI** | **Description** | **Unit of Measure** | **Direction of Improvement** |
| 1 | Plan/Actual Variance % | Monitor the variance percentage between plan and actual amounts | % | Maximize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Cost center Planning | CO-OM |

## Potential Future Process Improvements (out of scope for this implementation)

N/A

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |
|  |  |
|  |  |
|  |  |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| General Ledger Accounts |
| Profit Centers |
| Cost Centers |

## System Configuration Considerations

-  Balance sheet planning will be through ECC classic planning tool 

-  SAP notes **2270407** and **2253067** will be implemented to reactivate the classic planning tool. 

| **Planner Profile** |
| --- |
| **Code** | **Description** |
| ZSAPFAGL | Planner Profile for Planning in Gen. Ledger (New) |

| **Planning Layout** |
| --- |
| **Code** | **Description** |
| Z0FAGL-01 | Profit Center, GL Account |

| **Plan Versions** |
| --- |
| **Ledger** | **Ver****.** | **Manual planning** | **Integrated planning** | **Version Text** |
| 0L | 0 | X | X | Balance sheet Planning Version |

| **Planning Document Type** |
| --- |
| **Doc.Type** | **Document Type** |
| P0 | Planning Document Type |

| **Number Range** |
| --- |
| **Doc.Type** | **Yearly** | **From No.** | **To Number** |
| 01 | X | 0000000001 | 9999999999 |

 

- Plan line items activated.

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_GL_Planning | Planning Accountant |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Planning Accountants | Enterprise budget Controller |

							1 of 6

								6 of 6
# V2_General Cost Center Planning

# **General Cost Center Planning**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-010-001 | Copy Previous year plan or actual to current year plan | S | H |
| CO-010-002 | Comparison of planned and actual costs, monitoring of costs on cost centers | S | H |
| CO-010-003 | The planned depreciation on fixed assets is transferred separately to the cost center plan version | S | H |

##  Business Process Description

During the annual budgeting process, the managers of non-operational cost centers such as sales, marketing, administrative, research and development etc. plan the costs for various cost elements on their respective cost centers.

The respective cost center managers review and update the budget values according to their requirements and plans.

| Process Characteristics |
| --- |
| Process Trigger | Prepare next year budget for cost centers |
| Process Input | Copy of previous year plan or actual expenses on cost centers |
| Process Output | Annual operating plan prepared |
| Process Owner | Cost center Managers |
| Process Volumes |  |
| Process Frequencies | Yearly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Enterprise Controller** | **Cost Center Manager** |
| Trigger | Prepare next year budget for cost centers |  |  |  |  |
| 1 | Check Version Validity for Current Budget Period | S_ALR_87005830 |  | R | I |
| 2 | Copying Previous Year Plan | KP97 |  | R | I |
| 3 | Copying Previous Year Actual | KP98 |  | R | I |
| 4 | Transfer Plan Depreciation of Assets | S_ALR_87099918 |  | R | I |
| 5 | Cost Elements Activity Independent Planning | KP06 |  | A | R |
| 6 | Plan Statistical Key figures for Cost Center Assessments only | KP46 |  | R | I |
| 7 | Execute Plan Assessment Cost Center | KSUB |  | R | I |
| 8 | Cost centers: Planning overview | KSBL |  | A | R |
| 9 | Confirm Operational Budget | S_ALR_87013611 |  | R | R |
| Output | next year plan prepared |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Enterprise Controller |

## Operational Decisions or Logic within the Process

- General Cost center Planning to be done on planning version 3 (General Planning) and to be copied to version 1 (Annual Operation Plan (AOP)) after confirmation. 

- Structure of plan assessment cycle is not fully complete and will be considered as master data to be designed on production server directly. 

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Asset Accounting - Transfer Planned Depreciation | FI-AA |

## Potential Future Process Improvements (out of scope for this implementation)

Planning Processes will be done using Integrated Business Planning (IBP).

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Controlling Area ** |
| --- |
| WAPO | Al-Watania Poultry |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Cost Centers |
| Cost Elements |

## System Configuration Considerations

- Maintain Versions

| **Planning Version** |
| --- |
| **Version** | **Name** | **Plan** | **Actual** | **WIP/RA** | **Variance** |
| 0 | Plan/actual version | X | X | X | X |
| 1 | Annual Operation Plan (AOP) | X |  |  |  |
| 2 | Plan Activity Type Requirement from MRP | X |  |  |  |
| 3 | General Cost center Planning | X |  |  |  |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_GEN_COST_CENTER_PLANNING | GENERAL COST CENTER PLANNING |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Enterprise controller | Key User |
| Cost center Managers | Key User |

							1 of 5

								5 of 5
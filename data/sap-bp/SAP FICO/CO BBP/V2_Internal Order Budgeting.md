# V2_Internal Order Budgeting

# **Internal Order Budgeting**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-030-001 | Budget Internal Orders and monitor budget consumption | S | H |

##  Business Process Description

Budgeting internal orders to control expensed amounts on projects or some events via assigning internal orders to assets or direct posting on internal orders the settle on other cost objects.

| Process Characteristics |
| --- |
| Process Trigger | Annual budget for Assets, Projects or Events |
| Process Input | Yearly Budget |
| Process Output | Budget Assigned |
| Process Owner | Budget Controller |
| Process Volumes |  |
| Process Frequencies | Yearly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Budget Controller** | **Asset Accountant** |
| Trigger | Yearly Budget |  |  |  |  |
| 1 | Create Internal Orders | KO01 |  | R | I |
| 2 | Maintain Order Budget | KO22 |  | R | A |
| 3 | Maintain Settlement Rule | KO02 |  | R | I |
| 4 | Assign budget Order to Asset Master | AS02 |  | I | R |
| 5 | Confirm Budget Line Items | KOB4 |  | R | I |
| Output | Budget Assigned |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim |  | Budget Controller |

## Operational Decisions or Logic within the Process

N/A

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Asset Master for checking budget | FI-AA |

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
| Internal Orders |
| Asset Master |

## System Configuration Considerations

- Order Types

| **Internal Order Types** |
| --- |
| **Code** | **Description** |
| Z100 | Investment Capital Expenses (AUC) |
| Z200 | Overhead Operational Cost Real |
| Z400 | Trucks Expenses Statistical |
| Z500 | Pullet Goods Issue |
| Z600 | Laying-Depreciation |
| Z700 | Plants Overhead Costing Sheet Allocation |
| Z800 | Farms |

- Status Profiles 

| **Status Profile** | **Description** | **Copy Of** |
| --- | --- | --- |
| Z0000001 | Internal Orders | Standard 00000002 |

- Budget Profile

| **Budget Profile** | **Description** | **Time Frame** | **Exchange Rate Type** | **Availability Control ** | **Budget Currency** |
| --- | --- | --- | --- | --- | --- |
| Z00001 | General budget profile | **Past** | **Future** | M | **Activation Type** | **Overall ** | Controlling Area Currency |
|  |  | 0 | 3 |  | 1 |  |  |

 

- Tolerance Limits for Availability Control 

| **COAr** | **Budget ****Profile** | **Tr.Grp** | **Action** | **Usage** |
| --- | --- | --- | --- | --- |
| WAPO | Z00001 | ++ | 1 | 90 |
| WAPO | Z00001 | ++ | 3 | 100 |

 

- Settlement Profiles

| **Settlement profile ****Z****010** |
| --- |
| **Actual Costs** | **Default Values** | **Indicators** | **Valid Receivers** |
| To be settled in full | **Allocation Structure** | Y1 | **100%-Validation** | X | **G/L Account** | X |
|  | **Source Structure** |  | **100%-Settlement** | X | **Cost Center** | X |
|  | **Default Object type** | CTR | **Equivalence number** | X | **Order** | X |
|  |  |  | **Amount Settlement** | X | **Fixed Assets** | X |

- Allocation Structure Y1

| **Assignments** | **Sources** | **Settlement cost elements** |
| --- | --- | --- |
|  | **Cost ****Elem.Group** | **All Categories** |
| 01 | Inventory Consumption | YB010 | Inventory Consumption | By Cost Element |
| 02 | Personnel Expenses | YB020 | Personnel Expenses | By Cost Element |
| 03 | Operating Expenses | YB030 | Operating Expenses | By Cost Element |
| 04 | Indirect Expenses | YB040 | Indirect Expenses | By Cost Element |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_INTERNAL_ORDER_BUDGETING | INTERNAL ORDER BUDGETING |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Enterprise controller | Key User |
| Internal Controller | Key User |

							1 of 6

								5 of 6
# V2_Manufacturing Cost Center Planning

# **Manufacturing Cost Center Planning**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-020-001 | Activity types Quantity to be transferred from production automatically | S | H |
| CO-020-002 | Allocation of production and overhead costs to products (via activity types) | S | H |
| CO-020-003 | Automatic Price Calculation of Activity types | S | H |

##  Business Process Description

Managers of manufacturing cost centers plan the costs for various cost types or elements for their respective cost centers. The actual data of the current and previous year is usually taken as the basis for developing these plans.

The resource requirements in the form of planned activity quantities are transferred from sales and operations (SOP) planning to the cost centers as planned activity consumption. Plan reconciliation between the SOP activity requirements and manually planned requirements on the operational cost centers is carried out. Once the activity quantities and budget amounts are finalized, planned activity prices are calculated in the system.

| Process Characteristics |
| --- |
| Process Trigger | Transfer Planned Activity Requirements for Production |
| Process Input | Copy of previous year plan or actual expenses on cost centers |
| Process Output | Activity Type Prices calculated |
| Process Owner | Enterprise Controller |
| Process Volumes |  |
| Process Frequencies | Yearly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Enterprise Controller** | **Internal Controller** |
| Trigger | Transfer Planned Activity Requirements for Production |  |  |  |  |
| 1 | Transfer Planned Activity Requirements for Production | KSPP |  | R | I |
| 2 | Plan Activity Based on Capacity | KP26 |  | A | R |
| 3 | Cost Elements Activity Dependent Planning | KP06 |  | A | R |
| 4 | Plan Reconciliation | KPSI |  | R | I |
| 5 | Confirm Allocation of Operations Cost Budget | S_ALR_87013611 |  | R | I |
| 6 | Split Plan Costs | KSS4 |  | R | I |
| 7 | Activity Price Calculation | KSPI |  | R | I |
| 8 | Confirming Accurate Calculation of Activity type prices | KSPT |  | R | I |
| 9 | Cost centers: Planning overview | S_ALR_87013611 |  | R | I |
| 10 | Copying AOP to Active Version | KP97 |  | R | I |
| 11 | Lock AOP and Active Version for Planning | S_ALR_87005830 |  | R | I |
| Output | Activity Prices Calculated |  |  |  |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim |  | Enterprise Controller |

## Operational Decisions or Logic within the Process

- Manufacturing Cost centers cost element planning and activity types prices planning to be done on planning versions 2 then to be copied to AOP version (1).

- After confirming the full planning picture on AOP version, Copy AOP version to Active version 0 then lock AOP version.  

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Production Planning – Transfer Planned Activity Requirements for Production | PP- MRP |

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
| Activity Types |

## System Configuration Considerations

- Maintain Versions

| **Planning Version** |
| --- |
| **Version** | **Name** | **Plan** | **Actual** | **WIP/RA** | **Variance** |
| 0 | Plan/actual version | X | X | X | X |
| 1 | Annual Operation Plan (AOP) | X |  |  |  |
| 2 | Plan Activity Type Requirement from MRP | X |  |  |  |
| 3 | General Cost center Planning | X |  |  |  |

- Maintain Transfer Control

| **Transfer Control** |
| --- |
| **CO Area** | **Version** | **Fiscal Year** | **SOP** | **MRP** | **LTP** |
| WAPO | 2 | 2017 |  | X |  |
| WAPO | 2 | 2018 |  | X |  |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_GEN_COST_CENTER_PLANNING | GENERAL COST CENTER PLANNING |  |

# Organizational Change Related Items

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Enterprise controller | Key User |
| Internal Controller | Key User |

							1 of 6

								6 of 6
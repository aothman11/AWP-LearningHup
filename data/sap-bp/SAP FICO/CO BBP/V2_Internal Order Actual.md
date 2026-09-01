# V2_Internal Order Actual

# **Internal Order Actual**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-050-001 | Collect and settle operation expenses | S | H |

##  Business Process Description

Internal orders used to collect resources and expenses issued on internal projects or operational expenses that needs to be settled periodically on cost centers. 

Internal orders give a transparent view of outstanding orders, cost plan, budget and actual line items. 

| Process Characteristics |
| --- |
| Process Trigger | Internal project or operational expenses |
| Process Input | Internal order creation |
| Process Output | Internal order settled |
| Process Owner | Controller |
| Process Volumes | 500 |
| Process Frequencies | Monthly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Controller** | **GL Accountant** | **Purchaser** | **Warehouse Clerk** |
| Trigger | Collect Internal project or operational expenses |  |  |  |  |  |  |
| 1 | Create Internal Order | KO01 | Manage Internal Order | R | I | I | I |
| 2 | Post to General Ledger Account | FB50 | Post General Journal Entries | I | R/A |  |  |
| 3 | Consumable Purchasing | ME21N | Create Purchase Order | I | R/A |  | I |
| 4 | Post Goods Issue to Internal Order | MIGO | Post Goods Receipt for Purchase Order / Post Goods Movements | A |  | I | R |
| 5 | Create/Check Settlement Rules | KO02 | Manage Internal Orders | R | I | I | I |
| 6 | Settle Internal Orders | KO88 | Execute Actual Settlement | R | I | I | I |
| 7 | Internal Order Actual Data Report | S_ALR_87012993 | Internal Order Plan/Actual | R | I | I | I |
| Output | Internal order settled |  |  |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Controller |

## Operational Decisions or Logic within the Process

- Inventory reservations will be required for goods receipt and goods issue on internal orders

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Material Management | MM |
| 02 | Purchasing | MM-PO |
| 03 | Financial Accounting | FI-GL |

## Potential Future Process Improvements (out of scope for this implementation)

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Controlling Area ** |
| --- |
| WAPO | Al-Watania Poultry |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Internal Orders |
| Cost Elements |
| Cost Centers |
| Material Master |

## System Configuration Considerations

# **Technical/Development Related Items**

		

N/A

# Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_INTERNAL_ORDER_ACTUAL | INTERNAL ORDER ACTUAL |  |

# Organizational Change Related Items

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Controller | Key User |

							1 of 5

								5 of 5
# V2_Internal Order

# **Internal Order **

## Definition 

Internal orders are normally used to plan, collect, and settle the costs of internal jobs and tasks. These can provide more detail for an individual cost center (such as orders for individual trade fairs being supported by the marketing cost center) or represent activities separate from the cost center (such as a research and development project or an investment project).

## Requirements & Expectations

Internal orders are normally used to plan, collect, and settle the costs of internal jobs and tasks. The SAP system enables you to monitor your internal orders throughout their entire life-cycle; from initial creation, through the planning and posting of all the actual costs, to the final settlement and archiving.

Sample scenarios where Internal Orders is required are listed as follows:

Scenario : Monitor and budget expenses 

Internal Orders should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| MD004_01 | Internal orders to be created using diffident order types | S | H |
| MD004_02 | Profit center and functional area to be required in order creation | S | H |
| MD004_03 | Order created with status (Release) | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| N/A |  |  |

## Data Conversion Requirements

Data Migration for Internal Orders will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

| **Process name** | Internal Orders( Create, Change ) |
| --- | --- |
| **Frequency at which the process takes place** | Daily |
| **Data Volume** | 4000 |
| **Other Systems Affected ** | N/A |
| **Historical Data** | N/A |
| **Development Request** | N/A |

## Data Cleansing Requirements

New Internal Orders will be created as required per order types.  

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Internal Orders will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative Internal Order data will be done as well as by financial and control department. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Internal Orders.

| **Key Control Levels** | **Org****.**** Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Create Internal Orders | Controlling Area | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Internal Order Accounting for controlling purposes within the organization. The costs incurred by your organization should be transparent. This enables you to monitor and budget specific expenses then to be settled to different cost centers or assets.

Real Internal Order is assigned to a profit center and functional area to categories the type of expenses and affect the net profit of specific area (profit centers).

## Business Process Model

| **Process Step** | **Description** | **GUI T.CODE** | **Fiori App.** | **Business Role** |
| --- | --- | --- | --- | --- |
| Input | Request New Internal Order | N/A | N/A | CO Accountant |
| 1 | Fill Master Data Form | N/A | N/A | CO Accountant |
| 2 | Receive Master Data Form | N/A | N/A | FICO MDA |
| 3 | Approve/Reject New Master Data | N/A | N/A | Financial Manager |
| 4 | Open New Internal Order | KO01 | Manage Internal Order | FICO MDA |

# Configuration Considerations

- Order types  

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

							1 of 4

								4 of 4
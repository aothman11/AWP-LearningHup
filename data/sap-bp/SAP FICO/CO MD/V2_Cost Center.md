# V2_Cost Center

# **Cost center**

## Definition 

Organizational unit within a controlling area that represents a clearly delimited location where costs occur. You can make organizational divisions on the basis of functional, settlement-related, activity-related, spatial, and/or responsibility-related standpoints.

## Requirements & Expectations

Organizational unit within a controlling area that represents a clearly delimited location where costs occur, you can make organizational divisions on the basis of functional, settlement-related, activity-related, spatial, and/or responsibility-related standpoints.

	- Dividing an organization into cost centers allows you to follow several goals, depending on the cost accounting method.

	- Assigning costs to cost centers lets you determine where costs are incurred within the organization.

	- If you plan costs at cost center level, you can check cost efficiency at the point where costs are incurred.

	- If you want to assign overhead costs accurately to individual products, services, or market segments, you need to further allocate the costs to those cost centers directly involved in the creation of the products or services.

Sample scenarios where Cost centers is required are listed as follows:

- Scenario : Entering actual costs

- Scenario : Allocating actual costs

- Scenario : Allocating plan costs  	

Cost element should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| MD002_01 | Define Person responsible for each cost center | S | H |
| MD002_02 | Assign profit center in cost center master data | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Cost centers | Qassim |

## Data Conversion Requirements

Data Migration for Cost centers will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

| **Process name** | Cost centers( Create, Change ) |
| --- | --- |
| **Frequency at which the process takes place** | Yearly |
| **Data Volume** | 800 |
| **Other Systems Affected ** | N/A |
| **Historical Data** | N/A |
| **Development Request** | N/A |

## Data Cleansing Requirements

Existing cost centers will be cleansed and new cost centers will be created to correctly map the areas in the organization where costs incurred.

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Cost centers will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative cost center data will be done as well as by financial and control department. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Cost centers.

| **Key Control Levels** | **Org****.**** Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Create Cost centers | Controlling Area | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Cost Center Accounting for controlling purposes within the organization. The costs incurred by your organization should be transparent. This enables you to check the profitability of individual functional areas and provide decision-making data for management. 

Each Cost Center is assigned to a profit center where revenues and expenses are incurred to draw a complete P&L Statements.

## Business Process Model 

| **Process Step** | **Description** | **GUI T.CODE** | **Fiori App.** | **Business Role** |
| --- | --- | --- | --- | --- |
| Input | Request New Cost Center | N/A | N/A | GL Accountant |
| 1 | Fill Master Data Form | N/A | N/A | GL Accountant |
| 2 | Receive Master Data Form | N/A | N/A | FICO MDA |
| 3 | Approve/Reject New Master Data | N/A | N/A | Financial Manager |
| 4 | Open New Cost Center | KS01 | Manage Cost Centers | FICO MDA |

# Configuration Considerations

- For every cost center created will be assigned to the cost center standard hierarchy. 

| **Standard Hierarchy** |
| --- |
| Code | Description |
| WAPO | Watania Poultry Standard Hierarchy |

- Cost center Category 

| **Cost Center Category** |
| --- |
| Code | Description |
| A | Administration |
| F | Production |
| K | Marketing |
| M | Manufacturing |
| O | Other |
| P | Operation |
| S | Service cost center |
| V | Sales |

- Functional Areas 

| **Functional Areas** |
| --- |
| Code | Description |
| YB00 | Cost-of-Goods-Sold |
| YB01 | Sales Revenue |
| YB02 | Sales discounts and allow |
| YB03 | Production |
| YB04 | Manufacturing |
| YB05 | Service |
| YB06 | Sales and Distribution |
| YB07 | Marketing |
| YB08 | Administration |
| YB09 | Research & Development |
| YB10 | Other expenses |
| YB11 | Gain from investments |
| YB12 | Gain From Capital |
| YB13 | Gain From Subsidies |
| YB14 | Other Income |
| YB15 | Gain from shares & loans |
| YB16 | Operation |
| YB18 | Taxes from income and rev |
| YB19 | Zakat |

							1 of 4

								4 of 4
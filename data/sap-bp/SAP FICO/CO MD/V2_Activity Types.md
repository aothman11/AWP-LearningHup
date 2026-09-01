# V2_Activity Types

| **Activity Type** |
| --- |

## Definition 

Activity types classify the activities produced in the cost centers within a controlling area .

## Use

To plan and allocate the activities, the system records quantities that are measured in activity units. Activity quantities are valuated using a price (allocation price).

In Overhead Cost Controlling, costs based on the activity quantity of an activity type are posted separately in fixed and variable portions. When you divide the activities of a cost center into activity types, you should consider whether the costs can be allocated effectively to the activity types.

The prices of the activity types of a cost center can be either entered manually, or calculated by the system based on the costs allocated to the activities. Prices can be calculated either using plan costs or actual costs.

## Requirements & Expectations

The activities performed by Activity Type are expressed in activity types. You specify the activity types in the work center. You use activity type planning in Activity Type Accounting to assign activity types to Activity Types.

Activities are valued using activity prices, which are either set manually or calculated automatically using cost planning in the form of iterative activity price calculation.

Actual costs are accumulated for each Activity Type. You can calculate actual activity prices for the individual activity types and use these values in costing to value the activities.

The following are relevant for costing:

Activity type category: The activity category determines whether the activity type is taken into account in costing.

Cost element: The activity type must be assigned to a secondary cost element so that the costs for this activity type can be included in costing under this cost element. This cost element must have cost element type 43 (internal activity allocation).

Sample scenarios where Activity Types is required are listed as follows:

Scenario : Allocating Activity Type expenses to production costs

Activity types should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| MD003_01 | Different unit of measures for each activity type | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| N/A |  |  |

## Data Conversion Requirements

Data Migration for Activity Types will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

| **Process name** | Activity Types( Create, Change ) |
| --- | --- |
| **Frequency at which the process takes place** | Yearly |
| **Data Volume** | 10 |
| **Other Systems Affected ** | N/A |
| **Historical Data** | N/A |
| **Development Request** | N/A |

## Data Cleansing Requirements

New Activity Types will be created reallocate costs from cost centers to production cost via work center assignment. 

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Activity Types will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative Activity Type data will be done as well as by financial and control department. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Activity Types.

| **Key Control Levels** | **Org****.**** Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Create Activity Types | Controlling Area | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Activity Type Accounting for controlling purposes within the organization. The costs incurred by your organization should be transparent. This enables you to check the profitability of individual functional areas and provide decision-making data for management. 

Each Activity Type is assigned to a profit center where revenues and expenses are incurred to draw a complete P&L Statements.

## Business Process Model 

| **Process Step** | **Description** | **GUI T.CODE** | **Fiori App.** | **Business Role** |
| --- | --- | --- | --- | --- |
| Input | Request New Activity Type | N/A | N/A | CO Accountant |
| 1 | Fill Master Data Form | N/A | N/A | CO Accountant |
| 2 | Receive Master Data Form | N/A | N/A | FICO MDA |
| 3 | Approve/Reject New Master Data | N/A | N/A | Financial Manager |
| 4 | Open New Activity Type | KL01 | Manage Activity Types | FICO MDA |

## Master Data list

| **Profit Center** |
| --- |
| **Code ** | **Description** |
| 100 | MACHINE DEPRECIATION |
| 200 | LABOR COST |
| 300 | OVERHEAD COSTS |
| 400 | MAINTENANCE WORK |
| 900 | AGRICULTURE OH |

## Configuration Considerations

Secondary Cost Elements should have been created to be assigned in each activity type. 

							1 of 3

								2 of 3
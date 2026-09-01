# V2_Cost Element

| **Cost Element** |
| --- |

## Definition 

Cost elements classify an organization's valued consumption of production factors within a controlling area. They provide information concerning the value flow and value consumption within the organization. A cost element corresponds to a cost-relevant item in the chart of accounts.

**Primary Cost or Revenue Elements**

Primary cost or revenue elements are G/L accounts of the G/L account type Primary Costs or Revenue. Primary cost elements reflect operating expenses such as payroll, selling expenses, or administration costs.

Examples of primary cost elements:

Material costs

Personnel costs

**Secondary Cost Elements**

Secondary cost elements are G/L accounts of the G/L account type Secondary Costs. Secondary cost elements represent costs resulting from value flows within the organization, such as internal activity cost allocations, overhead allocations, and settlement transactions.

Examples of secondary cost elements:

Overhead allocation

**Cost Element Groups**

You can create hierarchical groups of cost elements with similar characteristics.

## Requirements & Expectations

The Cost element master records control the posting of profit and loss transactions to CO objects and the processing the reallocation costs.

Sample scenarios where Cost element is required are listed as follows:

- Scenario : Analyze the P&L statements   

- Scenario : Costs and Overheads reallocation  	

Cost element should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| MD001_01 | Differentiate between Primary and Secondary Cost elements | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Cost elements | Qassim |

## Data Conversion Requirements

Data Migration for Cost elements will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

| **Process name** | Cost elements( Create, Change ) |
| --- | --- |
| **Frequency at which the process takes place** | Yearly |
| **Data Volume** | 200 |
| **Other Systems Affected ** | N/A |
| **Historical Data** | N/A |
| **Development Request** | N/A |

## Data Cleansing Requirements

New primary cost elements will be created as a mirror master data to the GL P&L accounts to reflect the FI postings in CO objects and new secondary cost elements will be created to be used for internal reallocations between CO objects.

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Cost elements will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative cost element data will be done as well as by financial and control department. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Cost elements.

| **Key Control Levels** | **Org. Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Cost elements | Controlling Area | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Reallocation of expenses and overheads in the organization will be done using secondary cost elements to differentiate between direct expenses on the cost centers and the reallocated costs. 

## Business Process Model 

| **Process Step** | **Description** | **GUI T.CODE** | **Fiori App.** | **Business Role** |
| --- | --- | --- | --- | --- |
| Input | Request New Cost Element | N/A | N/A | GL Accountant |
| 1 | Fill Master Data Form | N/A | N/A | GL Accountant |
| 2 | Receive Master Data Form | N/A | N/A | FICO MDA |
| 3 | Approve/Reject New Master Data | N/A | N/A | Financial Manager |
| 4 | Open New Cost Element | FS00 | Manage G/L Account Master Data | FICO MDA |

## Configuration Considerations

For every cost element created a cost element category should be assigned to determine which cost elements can be used for which business transactions

- Cost element categories

| **Primary cost element categories** |
| --- |
| **Code** | **Description** |
| 01 | Primary costs/cost-reducing revenues |
| 11 | Revenues |
| 12 | Sales deduction |
| 22 | External settlement |
| **Secondary cost element categories** |
| **Code** | **Description** |
| 21 | Internal settlement |
| 41 | Overhead Rates |
| 42 | Assessment |
| 43 | Internal activity allocation |

 

							1 of 4

								3 of 4
# PP-100 Broiler Cycle Planning-V2

| PP-100: Broiler Cycle Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Get a production plan & assigned house orders for all farms with relative house capacity per cycle | S | H |

### Business Process Description

In this process, we make the  cycle planning for broiler production, we have expected demand for broiler production per day for all the year, and then run MPS to load all farms according to its houses capacity & the number of houses include in the farm. 

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | Due date come for creating new cycle |
| Process Input | Production plan per day |
| Process Output | Production order per house. And planned orders per farm |
| Process Owner | Broiler Production Planner |
| Process Volumes | 920 Order / Cycle. (8.1 Cycle / Year) |
| Process Frequencies | Every 45 day. |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** | **GAP** **Solution** |
| Trigger | Due date come for creating new cycle |  |  |  |  |  |
| 010 | Check that all old requirement/receipt are closed | MD04 | Monitor Stock/ Requirements List | Check that all old requirement/receipt are closed (Ex. STO, prod orders) | Broiler Production Planner |  |
| 020 | Reorganize old requirement "PIR" | MD74 | - | We have to reorganize all old requirements "PIR" exist before the start of the Planning run (ex. Today) minus 2 days to consider the demand delayed houses orders | Broiler Production Planner |  |
| 030 | Run Master production schedule MPS | MD40 | - | MPS will generate planned orders using quota arrangements to load farms by the required sequence according to broiler cycle | Broiler Production Planner |  |
| 040 | Evaluate MRP Result | MD04 COOIS | *Monitor Stock/ Requirements List *Monitor Production/ Planned Orders | Check the result of MPS and see the loaded order and if there is any planned order not assigned to farm "over capacity" or there is any exceptions | Broiler Production Planner | E_PP-090_1 |
| 050 | Convert Planned order to Production orders & assign house numbers | MD04 CO40 CO41 CO01 | Convert Orders to Production Orders | At the beginning of each cycle, we will convert all planned orders related to this cycle once - and add the WBS element related to each house number, cycle number and crop number. | Broiler Production Planner | E_PP-100_1 |
| 060 | Release Production order | CO02 CO05N | Release production orders | Release Production orders of the new cycle | Broiler Production Manager |  |
| 070 | Send production orders of new cycle to hatchery department to prepare DOC placement | By email COOIS | Monitor Production/ Planned Orders | Send production orders of new cycle to hatchery department to prepare DOC placement | Broiler Production Planner |  |
| 080 | Send production orders of new cycle to cleaning team. | By email COOIS | Monitor Production/ Planned Orders | Send production orders of new cycle to cleaning team. | Broiler Production Planner |  |
| **090** | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller** |  |
| Output | Production order per house Planned order per farm |  |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 2 | Broiler Production planner |

### Operational Decisions or Logic within the Process

- Update the quota arrangement to each broiler material breed with the assigned houses capacity in all farms per cycle

- Cycle quota period will be 45 days, and this period represent the start of cycle to start delivery to processing until end of delivering to processing department. 

- Create production supervisor: for trials and control houses, assign them to the production orders.

### Legal Considerations and Company-Specific Policies

- In the same time, we have two cycles one deliver to processing department & one receive from hatchery department.

- Around 24 house delivered to processing & the same number received from hatchery. 

### Reference to Key Process Changes and Process KPIs

- Plan per day should be distributed per breed.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual processed broiler chicken VS target. | 95% |
| 2 | Production achievement per cycle per farm per breed | Actual processed broiler chicken VS farm target from cycle quota. | 95% |

### Integration Points

N/A

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft providing or any other vertical solution. 

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1200 | Broiler Plant |

| **Live Operation Area** |
| --- |
| Broiler Area |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Quota Arrangement |

### System Configuration Considerations

| **Production order type Types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YPP1 | Live Operation Order | 0010000000 | 0019999999 |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_PP-100_1 | Enhancement | Need to assign Cycle number & Crop number to all related production order. Add enhancement to Prod order to add this extra info |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Broiler Production Planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
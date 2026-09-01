# PP-240 Feed Mill Daily Planning

| PP-240: Feed Mill Daily Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Make daily production plan | S | H |
| 2 | Make raw materials transfer plan | S | H |

### Business Process Description

In this process, we make a daily production plan for feed mill products considering STOs to other plants & sales orders to Grandparent Company.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | Receive new STOs |
| Process Input | Stock transport orders STO / Planned Independent Requirement PIR |
| Process Output | Planned orders |
| Process Owner | Feed Mill Production Planner |
| Process Volumes | 25 Planned order |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Receive new STOs |  |  |  |  |
| 010 | Create STO from farms to feed mill plants | ME21N | Create Purchase Order | Create STO from farms to feed mill plants | Farm Responsible |
| 020 | Update demand plan for Feed for grand parents company into SOP | MC88 MC82 | - | Update demand plan for Feed for grand parents company into SOP version A00 | GP Planner |
| 030 | Update demand plan for Feed Fish into SOP | MC88 MC82 | - | Update demand plan for Feed Fish into SOP version A00 | Production Planner |
| 040 | Transfer to demand management | MC74 MC75 | - | Transfer to demand management to the active version 00 | Production Planner |
| 050 | Check the transferred plan | MD63 | Display PIRs | Check the transferred plan | Production Planner |
| 060 | Check that all old requirement/receipts are closed | MD04 | Monitor Stock/ Requirements List | Check that all old requirement/receipts closed (Ex. STO, Sales orders, production orders) | Production Planner |
| 070 | Run Master production schedule (MPS) | MD01N | - | Run Master production schedule (MPS) | Production Planner |
| 080 | Check stock requirement list | MD04 | Monitor Stock/ Requirements List | Check MPS result for production materials | Production Planner |
| 090 | Release STR of raw materials (Stock transport request) | MD04 ME54N | Release PR | Request raw materials from Yanbou to feed mills on a **weekly basis**, by STO for every day | Production Planner |
| 100 | Convert STR to STO | ME21N | Create Purchase Order | Convert stock transport request to STO | Production Planner |
| 110 | **FM Manufacturing Exection Process** | ** ** | ** ** | **FM Manufacturing Exection Process** | **SFC Responsible** |
| 120 | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller** |
| 130 | **Sale from Stock Process** | ** ** | ** ** | **Sale from Stock Process** | **Feed Sales Responsible** |
| 140 | **Transfer to Farms Process** | ** ** | ** ** | **Transfer to Farms Process** | **Transportation Planner** |
| Output | Planned orders |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 1 | Feed Mill Production Planner |

### Operational Decisions or Logic within the Process

- GP products using planning strategy make to stock  net requirement (MTS) 10

- Product lot size will be TB daily lot size, generated planned orders for products will be loaded on the first production version then a human decision to distribute quantity or change the line.

- STO & sales order requirement reduction will happened at goods issue

- Using range of coverage to make dynamic safety stock using a planning calendar with periods all days. 

### Legal Considerations and Company-Specific Policies

	N/A

### Reference to Key Process Changes and Process KPIs

- The operation of filtering & cleaning corn should be handled in Yanbou hub by manufacturing execution process not write off process. 

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual vs Target. | 80% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1140 | Yanbou Grain Hub |
| 1150 | Feed Mill Watania1 |
| 1160 | Feed Mill Watania2 - FM3 |
| 1170 | Feed Mill Watania2 - FM6 |
| 1180 | Feed Mill Wadi FM4 |
| 1190 | Feed Mill Wadi FM5 |

| **Purchasing group** |
| --- |
| YM1 | Feed Mill group |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Planning Calendar |

### System Configuration Considerations

| **Coverage Profile** | **Description** | **Plant** | **Period Indicator** | **Determine Average Req.** | **Target Range of Coverage in 1st Period** | **Target Range of Coverage in 2nd Period** | **Target Range of Coverage in rest of Period** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | **No. Of Period** | **Type of period length** |  |  |  |
| Z1 | 2 days ( from next 30 days) | 1150 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1160 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1170 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1180 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1190 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1150 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1160 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1170 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1180 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1190 | W | 4 | Calendar days | 2 | 2 | 2 |

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | Farm Responsible |  |
| 20 | GP Planner |  |
| 30 | Production Planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 6 |
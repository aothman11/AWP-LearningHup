# PP-040 Further Processing Fresh Daily Planning (MTO)

| PP-040: Further Processing Fresh Daily Planning (MTO) |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Daily production plan | S | H |

### Business Process Description

In this process we make a daily production plan for fresh products considering STOs to branches & sales orders to distributers.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | STO Created, Sales Order Created |
| Process Input | STOs, Sales Orders |
| Process Output | Planned orders |
| Process Owner | Further Processing Production Planner |
| Process Volumes | 110 Planned Orders |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | STO Created, Sales Order Created |  |  |  |  |
| 010 | Create STO from branches to FP plant | ME21N | Create Purchase Order | Create STO from branches to FP plant, one STO per branch per day | DRP Planner |
| 020 | Create sales order for distributors | VA01 | Manage Sales Orders | Create sales order for distributers | Sales Responsible |
| 030 | Check that all old requirement are closed | MD04 | Monitor Stock / Requirements List | Check that all old requirement closed (Ex. STO, Sales orders) | FP Production Planner |
| 040 | Run master production schedule (MPS) | MD01N | Schedule MRP Runs | Run master production schedule (MPS) | FP Production Planner |
| 050 | Check stock requirement list | MD04 COOIS | Monitor Stock / Requirements List | Check MPS result for production materials | FP Production Planner |
| **060** | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller ** |
| **070** | **Further Processing Manufacturing Exection Process** | ** ** | ** ** | **Further Processing Manufacturing Exection Process** | **SFC Responsible** |
| **080** | **Transfer to Sales Branches Process** | ** ** | ** ** | **Transfer to Sales Branches Process** | **DRP Planner** |
| **090** | **Sale from Stock Process** | ** ** | ** ** | **Sale from Stock Process** | **Sales Responsible** |
| Output | Planned orders |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 2 | 2 | FP Production planner |

### Operational Decisions or Logic within the Process

- For fresh products will be planned with Y2 planning strategy with backward consumption mode 1, and mixed indicator 3

- Fresh Finished product lot size will be TB daily lot size

- We have to respect the production batch size by adding the rounding value equal to production batch size

### Legal Considerations and Company-Specific Policies

- Total of sales orders & STOs must be multiples of production batch size.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual VS target. | 85% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 1 | Sales orders | SD-SLS |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1050 | Further Processing Plant |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |

### System Configuration Considerations

| **Planning Strategy** | **Description** | **Comment** |
| --- | --- | --- |
| Y2 | Plng at assembly lvl w/o final assembly | Copy from standard planning strategy 74 with requirement class KSVS to be used with fresh products |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | DRP Planner |  |
| 20 | Sales Responsible |  |
| 30 | FP Production Planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
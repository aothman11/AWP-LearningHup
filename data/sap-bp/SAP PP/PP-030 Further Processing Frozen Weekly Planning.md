# PP-030 Further Processing Frozen Weekly Planning

| PP-030: Further Processing Frozen Weekly Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Get weekly master production schedule | S | H |

### Business Process Description

In this process, we make a weekly production plan considering the remaining planned independent requirement & remaining products stock.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | New week started |
| Process Input | Planned independent requirement |
| Process Output | Planned orders |
| Process Owner | Further Processing Production Planner |
| Process Volumes | 25 Planned orders |
| Process Frequencies | Weekly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | New week started |  |  |  |  |
| 010 | Check that all old requirement are closed | MD04 | Monitor Stock / Requirements List | Check that all old requirement closed (Ex. STO, Sales orders) | FP Production Planner |
| 020 | Run master production schedule (MPS) | MD01N | Schedule MRP Runs | Run Master production schedule (MPS) | FP Production Planner |
| 030 | Check stock requirement list | MD04 COOIS | Monitor Stock / Requirements List | Check MPS result for production materials | FP Production Planner |
| 040 | Capacity planning | CM25 | - | Distribute planned orders over the all week on the production lines | FP Capacity Planner |
| **050** | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller** |
| **060** | **Further Processing Manufacturing Exection Process** | ** ** | ** ** | **Further Processing Manufacturing Exection Process** | **SFC Responsible** |
| **070** | **Transfer to Sales Branches Process** | ** ** | ** ** | **Transfer to Sales Branches Process** | **DRP Planner** |
| **080** | **Sale from Stock Process** | ** ** | ** ** | **Sale from Stock Process** | **Sales Responsible** |
| Output | Planned orders |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 2 | 2 | FP Production planner |

### Operational Decisions or Logic within the Process

- For Frozen products will be planned with Y1 planning strategy with backward, forward consumption mode 2, and mixed indicator 1

- Frozen Finished product lot size will be "Z4" four weeks lot size

- PIR consumption will done by STO & sales orders from FP plant

- We have to respect the production batch size by adding the rounding value equal to production batch size

### Legal Considerations and Company-Specific Policies

- Planned lead time for finished product from FP production to receipt in branches 1 days

### Reference to Key Process Changes and Process KPIs

	N/A

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
| Y1 | Planning at assembly level | Copy from standard planning strategy 70 with requirement class KSV to be used with frozen products |

| **Lot Size** | **Description** | **Comment** |
| --- | --- | --- |
| Z4 | Four weeks lot size | To be used for frozen products |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | FP Production Planner |  |
| 20 | FP Capacity Planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
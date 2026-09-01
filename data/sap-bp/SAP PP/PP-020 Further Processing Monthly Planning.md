# PP-020 Further Processing Monthly Planning

| PP-020: Further Processing Monthly Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Get monthly master production schedule | S | H |

### Business Process Description

In this process we make a monthly production plan considering the updated sales plan and the remaining products stock.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | The new monthly sales plan |
| Process Input | Monthly sales plan |
| Process Output | Planned orders |
| Process Owner | Further Processing Production Planner |
| Process Volumes | 160 Planned order |
| Process Frequencies | Monthly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Receive new monthly sales plan |  |  |  |  |
| 010 | Transfer sales plan from COPA to SOP | KE1E | - | Transfer updated sales plan from CO/PA to SOP A00 Version | FP Production Planner |
| 020 | Update SOP production plan | MC88 MC76 | - | Update production quantity of A00 version | FP Production Planner |
| 030 | Transfer production plan from SOP to demand management | MC74 MC75 | - | Transfer production plan from SOP A00 Version to demand management 00 active Version | FP Production Planner |
| 040 | Check planned independent requirement (PIR) | MD63 | Display PIRs | Check PIR after transfer | FP Production Planner |
| 050 | Weekly split of PIR | MD61 MD67 | Create PIRs | Weekly Split of planned independent requirement for coming 2 months (Needed in Frozen & fresh MTS) | FP Production Planner |
| 060 | Check that all old requirement are closed | Zorders1 MD04 | Monitor Stock / Requirements List | Check that all old requirement are closed (Ex. STO, Sales orders) „Close open orders“ | FP Production Planner |
| 070 | Reorganize old requirement (PIR) | MD74 | - | We have to reorganize all old requirements "PIR" exist before the start of the new month (Key date last day of previous month) | FP Production Planner |
| 080 | Run Master production schedule (MPS) | MD01N | Schedule MRP Runs | Run master production schedule (MPS) | FP Production Planner |
| 090 | Check stock requirement list | MD04 COOIS | Monitor Stock / Requirements List | Check MPS result for production materials | FP Production Planner |
| 100 | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller** |
| Output | Planned orders |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 2 | 2 | FP Production planner |

### Operational Decisions or Logic within the Process

- For fresh products will be planned with Y2 planning strategy with backward consumption mode 1, and mixed indicator 3

- For Frozen products will be planned with Y1 planning strategy with backward, forward consumption mode 2, and mixed indicator 1

- Fresh Finished product lot size will be TB daily lot size

- Frozen Finished product lot size will be "Z4" four weeks lot size

- We have to respect the production batch size by adding the rounding value equal to production batch size

### Legal Considerations and Company-Specific Policies

- Sales plan must be multiples of production batch size.

- Sales department must update sales plan on COPA for the next 3 month per product.

### Reference to Key Process Changes and Process KPIs

- The finished products with different packaging should have different material codes

- To be able to make a smoothly planning across all department the sales should provide a realistic updated plan every month per finished product code

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual vs Target. | 85% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Sales Plan | XX-MJC-CO-PA |

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
| Y2 | Plng at assembly lvl w/o final assembly | Copy from standard planning strategy 74 with requirement class KSVS to be used with fresh products |

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
| 20 | MRP Controller |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 3 of 5 |
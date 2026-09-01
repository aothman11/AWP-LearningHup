# PP-010 Budget Yearly Planning

| PP-010: budget Yearly Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Make a simulation scenario for budget study across all production departments | S | H |
| 2 | Get a production plan for all farms with relative house capacity | S | H |
| 3 | Get procurement plan | S | H |
| 4 | Get capacity plan | S | H |

### Business Process Description

In this process, we can make:

**Sales ****&**** Operation planning:**

Sales & Operations Planning (SOP) which is a flexible forecasting and planning tool with which sales, production, and other supply chain targets can be set on the basis of historical, existing, and estimated future data. 

Use SOP to streamline and consolidate your company’s sales and production operations.

SOP is particularly suitable for long- and medium-term planning.

SOP constitutes the planning functionality of the LIS information systems.

You pass on SOP plans to Demand Management (PP-MP-DEM) in the form of independent requirements. In turn, this data is fed to Master Production Scheduling (PP-MP-MPS) and Material Requirements Planning (PP-MRP).

An interface with Profitability Analysis (CO-PA) allows you to use CO-PA data as the basis for sales planning in SOP.

**What-if Simulation Scenarios:**

SAP production planning has the feature of doing a simulation with the long-term planning. This is a very useful tool which can be used in handy.

To carry out an annual planning or a rolling quarterly planning run you require information on the future stock and requirements situation.

The purchasing department can also use the results of long-term planning. They use the information on the future requirements quantities to estimate future orders. This provides them with a basis for negotiating delivery schedules and contracts with vendors.

**Live Operation planning:**

In the budget planning, we have to make planning across all live operation departments (broiler, hatchery, parent - laying, parent – rearing, commercial layer – laying, and commercial layer rearing) to check the capabilities of the new budget plan if it is realistic or not, and where it will be overloaded. And what is the placement & procurement plan according to that.

| **Process Characteristics** |
| --- |
| **Process Trigger** | The new budget plan received |
| **Process Input** | Sales Plan |
| **Process Output** | Planned orders |
| **Process Owner** | Production Planner |
| **Process Volumes** | Once |
| **Process Frequencies** | Yearly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | New budget plan received |  |  |  |  |
| 010 | Transfer Sales Plan from CO/PA to SOP | KE1E | - | Transfer updated sales plan from CO/PA to SOP A00 version | Production Planner |
| 020 | Update SOP production plan | MC88 | - | Update production quantity of A00 version | Production Planner |
| 030 | Transfer production plan from SOP to demand management | MC74 MC75 | - | Transfer production plan from SOP A00 version to demand management inactive version | Production Planner |
| 040 | Check PIR | MD63 | - | Check PIR after transfer | Production Planner |
| 050 | Create LTP scenario | MS31 | Create LTP Scenario | Create LTP scenario, with the selected plants & selected demand version | Production Planner |
| 060 | Run MRP of LTP Scenario | MS01 | - | Run MRP of LTP Scenario | Production Planner |
| 070 | Evaluation | MS06 | Long-term plnng: collective MRP list | MRP result evaluation | Production Planner MRP Controller |
| 080 | Create laying production plan manually | MS11 | Create LTP Order | Create Laying production plan manually | Laying Production Planner |
| 090 | Run MRP of LTP scenario | MS01 | - | Run MRP of LTP scenario | Laying Production Planner |
| 100 | Evaluation | MS06 | - | MRP result evaluation | Laying Production Planner MRP Controller |
| 110 | Run capacity requirement Report | CM38 | - | Run capacity requirement Report | Production Planner |
| 120 | Setup purchasing data | MS70 | - | Setup purchasing data | Production Planner MRP Controller |
| 130 | Run material analysis report | MCEC | - | Run material analysis report | Production Planner MRP Controller |
| 140 | Setup inventory data | MCB& | - | Setup inventory data | Production Planner MRP Controller |
| 150 | Run inventory evaluation report | MCB) | - | Run inventory evaluation report | Production Planner MRP Controller |
| Output | Planned orders |  |  |  |  |

### Locations where this business process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 3 | Live Operations Production planner |
| Watania 2 | 2 | Further Processing Production Planner |
| Watania 1 | 1 | Feed Mill Production Planner |
| Watania 1 | 3 | Processing Production Planner |

### Operational Decisions or Logic within the Process

- For processing & further processing, use the same in the normal yearly and monthly planning but in the simulation mode.

- For live operation planning use the same steps for normal planning across live operation departments but in the simulation mode

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

- In live operation departments should make a BOM from scratch.

- In live operation departments, we have to add plan per breed and assign capacity per breed.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Finish the study on time. | As per due date | On time |
| 2 | Finish the study within one week for further processing | As per due date | On time |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Sales Plan | XX-MJC-CO-PA |

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft providing or any other vertical solution. 

## Functional Solution Design 

### Organization Structure Considerations

- All company codes

- All sales area

- All purchasing organization

- All Plants/DCs

- All live operation areas

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production Version |
| Quota Arrangement |

### System Configuration Considerations

SAP Standard

## Technical/Development Related Items

	

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_PP-010_1 | Enhancement | **First day of the week to be Saturday:** In SAP Standard the first day of week is Monday We can use the guidance of SAP Note **1063178** To use **BADI CALENDAR_DEFINITION** To change the first day of the week |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Production Planner |  |
| 20 | MRP Controller |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 6 of 7 |
# PP-060 Processing FG Daily Planning & Execution

| PP-060: Processing FG Daily Planning & Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Daily production plan | S | H |
| 2 | Collect all movement & cost per order | S | H |

### Business Process Description

In this process, we make a daily production plan for processing products considering STOs to branches, further processing STOs & sales orders to distributers. Also, make the manufacturing execution steps to produce the finished products.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

| Process Characteristics |
| --- |
| Process Trigger | STO Created, Sales Order Created, Planned independent requirement PIR created |
| Process Input | STOs, Sales Orders, PIR |
| Process Output | Production orders, Confirmations |
| Process Owner | Processing Production Planner |
| Process Volumes | 400 Copm. Backflush Confirmations, 144 collective GR confirmation = 9600 confirmation |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des** | **Business Role** |
| Trigger | STO, Sales Order, PIR Created |  |  |  |  |
| 010 | Create finished product STO per sales branch | ME21N | Create Purchase Order | Create STO per sales branch every day for fresh Product | DRP Planner |
| 020 | Create sales order for distributors | VA01 | Manage Sales Orders | Create sales order for distributers | Sales Responsible |
| 030 | Create further processing semi-finished STO | ME21N | Create Purchase Order | Create STO every day for semi-finished FP products | FP Production Planning |
| 040 | Run MRP background | MD01N | Schedule MRP Run | Run MRP that will create planned orders for finished product per packing line as per quota arrangement & production version to each product | Processing Production Planning |
| 050 | Run report for required fresh products | YPP001 | Daily Sales quantity | Display report for required quantity of fresh products per day | Processing Production Planning |
| 060 | Material Staging | MB21 | Stage Materials for production | Request packing materials from ware house store to slaughter house production area | SFC Responsible |
| 070 | Transfer materials | MIGO_TR | Post Goods Movement | Goods Issue materials from packing materials store location to production area store location | Stock Keeper |
| 080 | Goods Receipt from REM collective confirmation | MF42N | Collective Entry of Confirmations | Make collective confirmation for each finished product / production line | SFC Responsible |
| 090 | Create transfer reservation | MB21 | *Create Reservation | Create transfer reservation for FG from palletizing to FG warehouse storage location. Per hour per processing plant. | SFC Responsible |
| 100 | Transfer posting from production location into FG storage location | MIGO_TR | Post Goods Movement | Transfer posting from production location into FG storage location, print & sign the receipt document | Stock Keeper |
| 110 | Post process pending records | COGI | REM Confirmation | Post process pending records | Production supervisor |
| 120 | **Processing Month End Closing process** |  |  | **Processing Month End Closing process** | Production supervisor |
| Output | REM Confirmations |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 12 | Processing Production planner |
| Watania 2 | 16 | Processing Production planner |

### Operational Decisions or Logic within the Process

- Adding product counter per production line:

- To make each packing line as separate work center with a separate production line then Eng. Khaled Abdo will add bar code counter on packaging production line to count the produced quantity for each line from each product.

- Also will contact IT department to make an application to get the bar code and count the produced quantity for each Product/production Line 

- But if we couldn't able to count the produced quantity for each production line then we have to make all packing lines as one work center and one production version for each product per processing plant.

- Batch code for fresh products will be per day :Fresh

- Batch code for frozen products will be monthly YYYYMM

- Need to create quota arrangement per production version to each line

- We will use MRP area to stop planning requirements come from sales demand to carcass in processing department, MRP type for carcass for MRP area (1100ND) will be “ND” no planning. The reason for that not affecting the carcass & broiler planning from sales requirement whereas they have its own planned independent requirement. (the concept of bull, push and balancing in disassembly planning)

- We will use material carcass in KG 910 with planning type ND to stop planning requirements come from sales demand to carcass in processing department

- Using planning strategy 11 make to stock gross requirement for finished products. 

### Legal Considerations and Company-Specific Policies

- STOs to sales branches & sales orders to distributers must be create by minimum 3 days from delivery date.

- STOs to further processing It must be created by minimum 1 days from delivery date

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Daily fresh products sales requirement achievement | Orders vs Produced | 90% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Sales orders | SD-SLS |
| 3 | Batch management | LO-BM |
| 4 | Inventory Management | MM-IM |
| 5 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft-providing or any other vertical solution

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1100 | Processing Plant |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| P05 | Whole bird Fresh finished products | 1100 | Processing Plant |
| P06 | Whole bird Frozen finished products | 1100 | Processing Plant |
| P07 | Cutups Fresh finished products | 1100 | Processing Plant |
| P08 | Cutups Frozen finished products | 1100 | Processing Plant |

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
| YPP3 | Semi-Finished Order | 30000000 | 39999999 |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | DRP Planner |  |
| 20 | Sales Responsible |  |
| 30 | FP Production Planner |  |
| 40 | Processing Production Planning |  |
| 50 | SFC Responsible |  |
| 60 | Stock Keeper |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 3 of 6 |
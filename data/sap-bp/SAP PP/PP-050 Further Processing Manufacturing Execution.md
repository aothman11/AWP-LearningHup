# PP-050 Further Processing Manufacturing Execution

| PP-050: Further Processing Manufacturing Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per order | S | H |

### Business Process Description

In this process, we handle the manufacturing process for further processing department, start from create orders, staging the components, confirm orders and goods receipt the product.

| Process Characteristics |
| --- |
| Process Trigger | Planned orders created |
| Process Input | Planned order |
| Process Output | Production order confirmation |
| Process Owner | Shop floor control responsible |
| Process Volumes | 80 Production order / 800 confirmation |
| Process Frequencies | daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Planned orders created |  |  |  |  |
| 010 | Convert planned orders to production orders | MD04 CO40 CO41 | Convert Orders to Production Orders | Convert planned orders to production orders | FP Production Planner |
| 020 | Check & close old reservations | MB22 MB25 | *Change reservation *Display reservation list | Check & close old reservations | SFC Responsible |
| 030 | Material staging | ZMF60 MB21 | *Stage Materials for production *Create reservation | Material Staging for components - Request materials from raw material warehouse to production area location | SFC Responsible |
| 040 | Transfer materials | MIGO_TR | Goods Movement | Goods issue materials from row materials store location to production area store location (Mvt 311) | Stock Keeper |
| 050 | Create STO for raw meat from processing to  FP | ME21N | Create Purchase Order | Create STO for raw meat for fresh products from processing to  FP (in case of fresh products) * It must be created by minimum 2 days from delivery date | SFC Responsible |
| 060 | GI materials to STO | MIGO_GI | Goods Movement | GI materials to STO (Mvt 351) | Stock Keeper |
| 070 | GR raw materials from STO | MIGO_GR | Goods Movement | GR raw materials from STO (Mvt 101) | SFC Responsible |
| 080 | Release production order | CO02 | Change production order | Release production order after material availability check | FP Production Planner |
| 090 | Production order confirmation | CO11N | Confirm Production order operation | Production order confirmation & backflush consumed materials | SFC Responsible |
| 100 | GR from production order | MIGO_GR | Goods Movement | GR from production order | Stock Keeper |
| 110 | Production order TECO | CO02 | Change production order | Set completed technically status to production order | SFC Responsible |
| Output | Production Order Confirmation |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 2 | 2 | FP Production planner |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- One batch per day for fresh products, batch code YYYYMMDD

- One batch per month for frozen products, batch code YYYYMM

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual vs Target. | 85% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Batch management | LO-BM |
| 3 | Inventory Management | MM-IM |
| 4 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1050 | Further Processing Plant |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| F2 | Finished Fresh | 1050 | Further Processing |
| F3 | Finished Frozen | 1050 | Further Processing |
| F4 | Semi-Finished | 1050 | Further Processing |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |

### System Configuration Considerations

| **Production order type Types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YPP2 | Finished Product Order | 20000000 | 29999999 |
| YPP3 | Semi-Finished Order | 30000000 | 39999999 |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | FP Production Planner |  |
| 20 | SFC Responsible |  |
| 30 | Stock Keeper |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 2 of 5 |
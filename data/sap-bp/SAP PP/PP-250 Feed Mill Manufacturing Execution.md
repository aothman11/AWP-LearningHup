# PP-250 Feed Mill Manufacturing Execution

| PP-250: Feed Mill Manufacturing Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per order | S | H |

### Business Process Description

In this process, we handle the manufacturing process for feed mill department, start from create orders, staging the components, confirm orders and goods receipt the product.

| Process Characteristics |
| --- |
| Process Trigger | Planned orders created |
| Process Input | Planned order |
| Process Output | Production order confirmation |
| Process Owner | Shop floor control responsible |
| Process Volumes | 25 Production order / confirmation |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Planned orders created |  |  |  |  |
| 010 | Convert planned orders to production orders | MD04 CO40 CO41 | Convert Orders to Production Orders | Convert planned orders to production orders | Production Planner |
| 020 | Check & close old reservations | MB22 MB25 | Change Reservation | Check & close old reservations | SFC Responsible |
| 030 | Material staging | ZMF60 MB21 | Stage Materials for production | Material Staging for components - Request materials from row material warehouse to production area location | SFC Responsible |
| 040 | Transfer materials | MIGO_TR | Post Goods Movement | Goods issue materials from row materials store location to production area store location (Mvt 311) | Stock Keeper |
| 050 | Create STO for premixes & additives | ME21N | Create Purchase Order | Create STO for premixes & additives from other FM plant- raw material storage location | SFC Responsible |
| 060 | GI materials to STO | MIGO_GI | Post Goods Movement | GI materials to STO (Mvt 351) | Stock Keeper |
| 070 | GR raw materials from STO | MIGO_GR | Post Goods Movement | GR raw materials from STO (Mvt 101) | SFC Responsible |
| 080 | Release production order | CO02 | Change Production Order | Release production order after material availability check | Production Planner |
| 090 | Production order confirmation (Backflush & goods Receipt) | CO11N | Confirm Production Order Operation | Production order confirmation & backflush consumed materials & Goods receipt the product | SFC Responsible |
| 100 | Production order TECO | CO02 | Change Production Order | Set completed technically status to production order | SFC Responsible |
| Output | Production Order Confirmation |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 2 | SFC Responsible |
| Watania 2 | 2 | SFC Responsible |
| Wadi | 2 | SFC Responsible |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual vs Target. | 80% |

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
| 1150 | Feed Mill Watania1 |
| 1160 | Feed Mill Watania2 - FM3 |
| 1170 | Feed Mill Watania2 - FM6 |
| 1180 | Feed Mill Wadi FM4 |
| 1190 | Feed Mill Wadi FM5 |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| FM1 | Broiler | 1150 | Feed Mill Watania1 |
| FM2 | Layer | 1150 | Feed Mill Watania1 |
| FM3 | Fish | 1150 | Feed Mill Watania1 |
| FM4 | Parent | 1150 | Feed Mill Watania1 |
| FM5 | Grand Parent | 1150 | Feed Mill Watania1 |
| FM1 | Broiler | 1160 | Feed Mill Watania2 - FM3 |
| FM2 | Layer | 1160 | Feed Mill Watania2 - FM3 |
| FM3 | Fish | 1160 | Feed Mill Watania2 - FM3 |
| FM4 | Parent | 1160 | Feed Mill Watania2 - FM3 |
| FM5 | Grand Parent | 1160 | Feed Mill Watania2 - FM3 |
| FM1 | Broiler | 1170 | Feed Mill Watania2 - FM6 |
| FM2 | Layer | 1170 | Feed Mill Watania2 - FM6 |
| FM3 | Fish | 1170 | Feed Mill Watania2 - FM6 |
| FM4 | Parent | 1170 | Feed Mill Watania2 - FM6 |
| FM5 | Grand Parent | 1170 | Feed Mill Watania2 - FM6 |
| FM1 | Broiler | 1180 | Feed Mill Wadi FM4 |
| FM2 | Layer | 1180 | Feed Mill Wadi FM4 |
| FM3 | Fish | 1180 | Feed Mill Wadi FM4 |
| FM4 | Parent | 1180 | Feed Mill Wadi FM4 |
| FM5 | Grand Parent | 1180 | Feed Mill Wadi FM4 |
| FM1 | Broiler | 1190 | Feed Mill Wadi FM5 |
| FM2 | Layer | 1190 | Feed Mill Wadi FM5 |
| FM3 | Fish | 1190 | Feed Mill Wadi FM5 |
| FM4 | Parent | 1190 | Feed Mill Wadi FM5 |
| FM5 | Grand Parent | 1190 | Feed Mill Wadi FM5 |

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
| 10 | Production Planner |  |
| 20 | SFC Responsible |  |
| 30 | Stock Keeper |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 6 |
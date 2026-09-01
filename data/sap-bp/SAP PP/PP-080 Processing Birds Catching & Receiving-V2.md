# PP-080 Processing Birds Catching & Receiving-V2

| PP-080: Processing Birds Catching & Receiving |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per order | S | H |

### Business Process Description

In this process, we handle the birds catching & receiving of birds from broiler, parent & layer & delivering into slaughter houses, start from create GR at broiler, transfer truck stock, create slaughter orders, confirm orders and goods receipt the carcass.

| Process Characteristics |
| --- |
| Process Trigger | New House Received |
| Process Input | Production order |
| Process Output | Production order Goods Receipts |
| Process Owner | Shop floor control responsible |
| Process Volumes | 161 Confirmation |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des** | **Business Role** |
| Trigger | New House Received |  |  |  |  |
| 010 | Catching & receiving into slaughter house | Manual Step |  | Catching & receiving process into slaughter house manual Step without SAP | Catching Responsible |
| 020 | Wieghting truck | Manual Step |  | Wieghting truck before  & after unloading birds into slaughter house | Wieghting Responsible |
| 030 | Counting birds | Manual Step |  | Counting birds (Live - DoA - Culls - Rejects) | Processing Receiving Responsible |
| 040 | GR of broiler house production order | MIGO_GR | Post Goods Movement | GR of broiler house production order into slaughter Line storage location (Create a new batch to every truck quantity based on real counted quantity in hanging in slaughter house line) | Processing Receiving Responsible |
| 050 | Enter broiler truck batch data | MSC2N BMBC | Change Batch | Enter wieghting (before & After) of each truck and record this info in batch charcterstic | Processing Receiving Responsible |
| Output | Production order Goods Receipts |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 3 | Processing Receiving Responsible |
| Watania 2 | 2 | Processing Receiving Responsible |

### Operational Decisions or Logic within the Process

- Use of batch classification for culls & rejects & DoA & truck weights.

### Legal Considerations and Company-Specific Policies

- One batch per truck, automatic batch creation. Record truck weight before & after in the batch master record characteristic classification. 

- Use the same batch code for every info. (Carcass, broiler, rejects, DoA, culls) related to truck to keep the traceability. 

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Hanging Efficiency | Target duration time vs Actual duration time | 98% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 10 | Batch management | LO-BM |
| 20 | Inventory Management | MM-IM |
| 30 | Standard Cost Estimate | CO-PC-PCP |
| 40 | Cost Object Controlling | CO-PC-OBJ |

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft-providing or any other vertical solution

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1100 | Processing Plant |
| 1200 | Broiler |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| P01 | Carcass | 1100 | Processing |

| **MRP Area** | ** ** | ** ** | ** ** | ** ** |
| --- | --- | --- | --- | --- |
| **MRP Area** | **Area Type** | **MRP Area Text** | **Plant** | **Plant Description** | **Rec. S Loc.** | **S Loc. ****Desc****.** | **Assigned S. ****Loc** |
| 1100 | 01 | Processing Plant | 1100 | Processing Plant |  |  |  |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Batch Master record |

### System Configuration Considerations

N/A

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | Processing Receiving Responsible |  |

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
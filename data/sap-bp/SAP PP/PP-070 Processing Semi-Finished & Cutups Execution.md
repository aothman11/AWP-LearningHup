# PP-070 Processing Semi-Finished & Cutups Execution

| PP-070: Processing Semi-Finished & Cutups Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per order | S | H |

### Business Process Description

In this process, we handle the manufacturing process for cutups in processing department, start from create orders, confirm orders and goods receipt the product.

| Process Characteristics |
| --- |
| Process Trigger | New House Received |
| Process Input | Production order |
| Process Output | Production order confirmation |
| Process Owner | Shop floor control responsible |
| Process Volumes | 11 Production order / 166 Confirmation |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des** | **Business Role** |
| Trigger | New House Received |  |  |  |  |
| 010 | Create & release production order | CO01 | Create Production Order | Create production order of semi-finished items | SFC Responsible |
| 020 | Production order confirmation/GI & GR | CO11N | Confirm Production order operation | Production order confirmation & GI & GR. one time per order | SFC Responsible |
| 030 | Production order TECO | CO02 | Change Production Order | Set completed technically status to production order | SFC Responsible |
| Output | Production Order Confirmation |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 3 | SFC Responsible |
| Watania 2 | 2 | SFC Responsible |

### Operational Decisions or Logic within the Process

- Using co-product manufacturing to distribute the cost over produced cutups

- Also use concept of by-products in BOM

### Legal Considerations and Company-Specific Policies

	One batch per day, batch code YYYYMMDD

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Batch management | LO-BM |
| 2 | Inventory Management | MM-IM |
| 3 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft-providing or any other vertical solution

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1100 | Processing Plant |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| P02 | Whole bird | 1100 | Processing |
| P03 | Cutups | 1100 | Processing |
| P04 | Giblets | 1100 | Processing |

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
| YPP3 | Semi-Finished Order | 30000000 | 39999999 |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | SFC Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 4 |
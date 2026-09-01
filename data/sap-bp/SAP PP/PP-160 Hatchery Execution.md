# PP-160 Hatchery Execution

| PP-160: Hatchery Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per setter/hatcher | S | H |

### Business Process Description

This process is started by hatchable eggs from laying farms, then transfer them to cold storage and when the batch quantity is reached, they are placed in setter trollies and place them into pre-warming area then add to setters, transfer to hatchers, vaccination, then getting the day old chicks.

| Process Characteristics |
| --- |
| Process Trigger | New daily production orders |
| Process Input | Different stages of eggs Production orders |
| Process Output | Production orders confirmation |
| Process Owner | Hatchery responsible |
| Process Volumes | 44 production order confirmation (12 hatchers + 32 setters) |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Egg storage has Batch Size Quantity |  |  |  |  |
| 010 | Check the placement plan | COOIS | Monitor Production/ Planned Orders | Check the placement plan | Hatchery Setters Responsible |
| 020 | Adjust setter target quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust setter order target quantity based on the actual placement quantity and dates | Hatchery Setters Responsible |
| 030 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccine or medication. | Hatchery Setters Responsible |
| 040 | DAY000 QM Results Recording | QA32 ZPPH3 | Record Results | Enter results for MICs related to eggs rejects/losses | Hatchery Setters Responsible |
| 050 | Daily Confirmations | CO11N | Confirm Production Order Operations | Daily operation confirmation to post age of eggs in setters and activity costs | Hatchery Setters Responsible |
| 060 | GR of Setted Eggs production order | CO11N | Post Goods Movement | Do a confirmation with an auto GR of Setted Eggs production order into hatchery storage location (Mvt 101). | Hatchery Setters Responsible |
| 070 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Hatchery Setters Responsible |
| 080 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Hatchery Setters Responsible |
| Trigger | Check GR of Setted Eggs | COOIS | Monitor Production | DAY018 of Setted eggs order GR posted | Hatchery Hatchers Responsible |
| 090 | Adjust Hatcher target quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust Hatcher order target quantity based on the actual placement quantity and dates | Hatchery Hatchers Responsible |
| 100 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccine for DOC. | Hatchery Hatchers Responsible |
| 110 | Daily Confirmations | CO11N | Confirm Production Order Operations | Daily operation confirmation to post age of eggs in setters and activity costs | Hatchery Hatchers Responsible |
| 120 | DAY021 QM Results Recording | QA32 ZPPH3 | Record Results | Enter results for MICs related to DOC CV, Uniformity etc | Hatchery Hatchers Responsible |
| 130 | GR of DOC production order | CO11N | Post Goods Movement | Do a confirmation with an auto GR of DOC production order all lines (A, B, C and Parent Male) except main female line into hatchery storage location (Mvt 101). | Hatchery Hatchers Responsible |
| 140 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Hatchery Hatchers Responsible |
| 150 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Hatchery Hatchers Responsible |
|  | ***** ****Financial Activity to settle cost**** ***** | ** ** |  | ** ** |  |
| 160 | GI Posting (A, B, C and Parent Male line) | MIGO | Goods Issue | Consume stocks of all lines to main Female order with Movement type 261 | Hatchery Hatchers Responsible |
| 170 | GI Posting (A, B, C and Parent Male line) | MIGO | Goods Issue | GR as By-Product stocks of all lines from main Female order with Movement type 531 | Hatchery Hatchers Responsible |
| 180 | GR of **Main Female** DOC production order | CO11N | Post Goods Movement | Do a confirmation with an auto GR of **Main Female** DOC production order into hatchery storage location (Mvt 101). | Hatchery Hatchers Responsible |
| 190 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Hatchery Hatchers Responsible |
| 200 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Hatchery Hatchers Responsible |
| Output | *Production order confirmations per house/per section *Daily activity recording & component consumption *Birds delivered to laying |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Jouf | 1 | Hatchery Responsible |

### Operational Decisions or Logic within the Process

- Batch of hatchable laying eggs will be like **YYMMDD****FF** where **FF** is for GP laying farm number.

- One batch per site per farm per day

- The same batch code for setted egg and DOC

### Legal Considerations and Company-Specific Policies

- To achieve financial requirement of complete cost being posted to female, incase of parent and D line in case of grand parents, other lines will have live operation orders as usual for recording production activities in hatching stage as intermediate/semi-finished materials but after GR of DOC, these materials will be consumed in main female line order using 261 Mvt and then another transaction will be done to receive them in stock as by-product using 531 Mvt.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Hatchability percentage. | Total number of DOC produced / total number of egg set | 83.5% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Batch management | LO-BM |
| 3 | Inventory Management | MM-IM |
| 4 | Standard Cost Estimate | CO-PC-PCP |
| 5 | Quality Management | QM |

### Potential Future Process Improvements (out of scope for this implementation)

- Setter and hatcher trollies tractability can be done in next implementation phase under Extended warehouse management module

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 3100 | GP-Hatchery |

| **Live Operation Area** |
| --- |
| GP Hatchery Area |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Quota Arrangement |

| **Production supervisor** |
| --- |
| C1 | Control |
| N1 | Normal (full Settlement) |
| T1 | Trial |

### System Configuration Considerations

| **STO order types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| ZZ04 | Live Operation STO | 7700000000 | 7799999999 |

| **Production**** order types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YPP1 | Live Operation Order(Full Settlement) | 10000000 | 19999999 |

## Technical/Development Related Items

	

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user group** |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Enhancement | E_PP-070 | Posting date of confirmation should be in the same period/month of production order start date | Confirmation | CO11N | ZXCOFU14 |
| 180 | Enhancement | E_PP-090 | WBS Element check on Order Save | Order | CO01 | ZXCO1U06 |
| 181 | Enhancement | E_PP-100 | Storage Location Change for House level backflush | Order | CO01 | ZXCO1U05 |
| 151 | Enhancement | E_QM-010 | QM Change Specification limits of 03 Inspection lots proportional to Order header quantity | Inspection Lot | CO01 | Z_QPAP_FLEX_PLAN_03 |
| 177 | Report | R_PP-160 | ZPPH3 - Production Order Live Operation Data | Production Order | ZPPH3 | PP\ZPP_PRD_ORD_LV |
| 179 | Report | R_PP-180 | ZPPHLWEEKLY - Production Order Live Operation Data - Weekly | Production Order | ZPPHLWEEKLY | PP\ZPP_PRDO_LV_WK\Z20 |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Hatchery DRP Planner |  |
| 20 | Hatchery Setters Responsible |  |
| 30 | Hatchery Hatchers Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
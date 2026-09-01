# PP-214 Laying Growing-Pre-Production-V2

| PP-214: Laying Growing/Pre-Production |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | House prepared in cost effective manner | S | H |
| 2 | Collect all movements & cost related to every house per cycle | S | H |
| 3 | Have clear visibility for all houses planned and actual movement | S | H |

### Business Process Description

In this process, the farm in-charge responsible handle the process of growing birds in the laying house which starts from birds placement from rearing farm until birds are ready for laying eggs.

| Process Characteristics |
| --- |
| Process Trigger | House preparation completed |
| Process Input | Production orders |
| Process Output | *Production order confirmations per section *Daily activity recording & component consumption *Birds delivered of age (25WK for GP/Parent) capable of laying eggs |
| Process Owner | Laying Farm Responsible |
| Process Volumes | 64 Orders GP/Cycle 319 Orders Parent /Cycle |
| Process Frequencies | Daily. |

### Business Process Diagrams

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | House Preparation completed |  |  |  |  |
| **0****1****0** | **"****PP-110 ****House Preparation" Business Process** | ** ** |  | **"House Preparation" Business Process** | **CT Responsible** |
| 020 | Check the placement plan | COOIS | Monitor Production/ Planned Orders | Check the placement plan | Laying Production Planner/ Laying Farm Responsible |
| 030 | Adjust house order target quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust house order target quantity based on the actual placement quantity and dates | Laying Production Planner |
| 040 | If needed, change the receiving planned age for the house by adding/deleting the number of operations | CO02 | Change Production Order | In case need to change the planned receiving production age, we have to change production order by adding/ deleting operations and components to the new days. Operations will be added through Reference Operation set and components to be added using Phantom materials. Operations can be added or deleted at the beginning or at the end | Laying Production Planner |
| 050 | Adjust Monthly Lab Operation | CO02 | Change Production Order | Adjust Monthly Lab Operation to be at first of each month | Laying Production Planner |
| 060 | Adjust house utilization (if needed) | CO02 | Change Production Order | If we have more than one production order in one house, we have to adjust house utilization accordingly. Adjust operation utilization and adjust fixed quantity components like house prepared & fuel. | Laying Production Planner |
| 070 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccines or medications. | Laying Production Planner |
| 080 | **“****MM-60 Live Operations Logistics Operations****” Business Process** |  |  | **“****MM-60 Live Operations Logistics Operations****” Business Process** | **Laying Farm Responsible** |
| 090 | Daily activity recording - QM | QA32 ZPPH3 | Record Results | Daily QM data recording.  Culls – Mortality and other MICs. | Laying Farm Responsible |
| 100 | Daily Confirmations | CO11N | Confirm Production Order Operation | On the first day of confirmation Issue Pullets directly from Rearing house to order, (Mvt 261), and Issue House prepared to the order as well (Mvt 261). Daily operation confirmation.  Component consumptions will be done as backflush (Mvt 261) | Laying Farm Responsible |
| 110 | **“****PP-216 Laying Growing-Spare Male****” Business Process** |  |  | **“****Laying Growing-Spare Male****” Business Process** | **Laying Farm Responsible** |
| 120 | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** |  |  | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** | **PHD Responsible** |
| 130 | GR of pre-production birds | CO11N | Post Goods Movement | Get closing balance from ZPPH3 and do a confirmation with an auto GR of birds house production order into house storage location (Mvt 101) with that balance. | Laying Farm Responsible |
| 140 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Laying Production Planner |
| 150 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Laying Production Planner |
| 160 | **BioAsset Business Process** |  |  | **BioAsset Business Process** | **BioAsset Controller** |
| Output | *Production order confirmations per section *Daily activity recording & component consumption *Birds of age ready for laying delivered to house storage location |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Jouf | 1 | GP Laying – Production Planner |
| Jouf | 4 | GP Laying – Farm Responsible |
| Dulfa | 8 | Parent Laying - Farm Responsible |
| Wadi | 11 | Parent Laying - Farm Responsible |
| Kubid | 17 | Parent Laying - Farm Responsible |
| Shery | 13 | Parent Laying - Farm Responsible |

### Operational Decisions or Logic within the Process

- For GP we have two orders per section of the house. 

- Two sections per house.

- Two houses per farm.

- There will be separate orders for female and male, which are placed in one section. For example if the house is divided in 2 sections and both sections are having female and male chicks then there will be 4 production orders.

- The Pullets (females/males) materials from rearing farm will be issued to the respective production order with CO11N on the first day of the placement. Taking care of pullets batch received from Rearing farm/house/section.

- Floor/Cage House prepared material will also be issued to production order with CO11N on the first day of the placement with quantity representing the house utilization. If one house has 2 sections and 4 orders then house utilization will be 0.25 each order. 

- Batch will be generated automatically, “one batch per order”.

- Below MICs are considered when calculating Opening and Closing balance for each order in report ZPPH3

- DOA (Female/Male)

- Mortality (Female/Male)

- Culls (Female/Male)

- Sample Taken Live (Female/Male)

- Spare Male – In

- Depleted (Female/Male)

- To maintain the quantity of males in section in case of mortality/culls, the “**Spare Male – In**” MIC will be used to specify the quantity of males which are brought in the section from spare male section.

- Every 50 days a new flock (1 Farm/2 Houses) Pullets is received in **GP** Laying. 

### Legal Considerations and Company-Specific Policies

- N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Mortality % | Total losses / chicks placed | 5% or less |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Batch management | LO-BM |
| 3 | Inventory Management | MM-IM |
| 4 | Quality Management | QM |
| 5 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

- N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 3200 | Grand Parent - Laying |
| 1220 | Parent - Laying |

| **Live Operation Area** |
| --- |
| Grand Parent – Laying Area |
| Parent – Laying Area |

| **Production supervisor** |
| --- |
| C1 | Control |
| N1 | Normal |
| N2 | Normal (Periodic Settlement) |
| T1 | Trial |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Routing – In-process Inspection Plan |
| Production version |

### System Configuration Considerations

| **Production**** order types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YPP1 | Live Operation Order | 10000000 | 19999999 |
| YPP3 | Semi-Finished Order | 30000000 | 39999999 |
| YPP5 | House Preparation Order | 50000000 | 59999999 |

## Technical/Development Related Items

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user group** |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Enhancement | E_PP-070 | Posting date of confirmation should be in the same period/month of production order start date | Confirmation | CO11N | ZXCOFU14 |
| 180 | Enhancement | E_PP-090 | WBS Element check on Order Save | Order | CO01 | ZXCO1U06 |
| 181 | Enhancement | E_PP-100 | Storage Location Change for House level backflush | Order | CO01 | ZXCO1U05 |
| 151 | Enhancement | E_QM-010 | QM Change Specification limits of 03 Inspection lots proportional to Order header quantity | Inspection Lot | CO01 | Z_QPAP_FLEX_PLAN_03 |
| 177 | Report | R_PP-160 | ZPPH3 - Production Order Live Operation Data | Production Order | ZPPH3 | PP\ZPP_PRD_ORD_LV |
| 178 | Report | R_PP-170 | ZPPHLWEEKLY - Production Order Live Operation Data - Weekly | Production Order | ZPPHLWEEKLY | PP\ZPP_PRDO_LV_WK\Z20 |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Laying Production Planner |  |
| 20 | Laying Farm Responsible |  |
| 30 | Laying Cost Controller |  |
| 40 | Stock Keeper |  |
| 50 | PHD Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 7 |
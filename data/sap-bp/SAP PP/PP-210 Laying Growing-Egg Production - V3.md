# PP-210 Laying Growing-Egg Production - V3

| PP-210: Laying Growing/egg production |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | House prepared in cost effective manner | S | H |
| 2 | Collect all movements & cost related to every house\section per cycle | S | H |
| 3 | Have clear visibility for all houses\sections planned and actual movement | S | H |

### Business Process Description

In this process, the farm in-charge responsible handle the process of getting eggs from laying & feeding birds in the laying house start from birds placement until finalizing the house to be ready for catching & receiving into processing plant.

| Process Characteristics |
| --- |
| Process Trigger | House preparation completed for Commercial Layer Pre-production Pullets are ready for GP laying |
| Process Input | Production orders |
| Process Output | *Production order confirmations per house / per section *Daily activity recording & component consumption *Delivered eggs to store *Commercial Layer birds delivered to processing plant *GP birds depleted |
| Process Owner | Laying Farm Responsible |
| Process Volumes | 380 Orders (319 parent / C layer 36 / GP 32) |
| Process Frequencies | Daily. |

### Business Process Diagrams

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | House Prepared\pre-production pullet ready |  |  |  |  |
| **0****1****0** | **"** **PP-110 House Preparation ****" Business Process** | ** ** |  | **"House Preparation" Business Process** | **Laying Farm Responsible** |
| **020** | **"****PP-214 Laying Growing-Pre-Production****" Business Process** | ** ** |  | **"**** Laying Growing-****Pre Production**** ****" Business Process** | **Laying Farm Responsible** |
| 030 | Adjust house order target egg quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust order target quantity based on the actual placement of pullets quantity and dates. | Laying Production Planner |
| 040 | Final issue capitalized materials on asset | CO02 | Change Production Order | *For commercial layer laying house prepared and pullets components “Final Issue” flag will be checked. * For GP Laying & Parent Laying – Pre production pullets will be flagged as final issue. | Laying Production Planner |
| 050 | Adjust Monthly Lab Operation | CO02 | Change Production Order | Adjust Monthly Lab Operation to be at first of each month | Laying Production Planner |
| 060 | Adjust house utilization (if needed) | CO02 | Change Production Order | If we have more than one production order in one house, we have to adjust house utilization accordingly. Adjust operation utilization and adjust fixed quantity components like house prepared & fuel. | Laying Production Planner |
| 070 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccine or medication. | Laying Production Planner |
| 080 | **“****MM-60 Live Operations Logistics Operations****” Business Process** |  |  | **“****MM-60 Live Operations Logistics Operations****” Business Process** | **Laying Farm Responsible** |
| 090 | Daily activity recording - QM | QA32 ZPPH3 | Record Results | Daily QM data recording.  Culls – Mortality etc. | Laying Farm Responsible |
| 100 | Daily Confirmations | CO11N | Confirm Production Order Operations | Daily operation confirmation.  Component consumptions will be done as backflush (Mvt 261) | Laying Farm Responsible |
| 110 | Daily Eggs GR | MIGO_GO | Production Order Goods Movements | Daily production of eggs will be done as GR against production order (Mvt 101) | Laying Farm Responsible |
| 120 | **“****PP-216 Laying Growing-Spare Male****” Business Process** |  |  | **“****Laying Growing-Spare Male****” Business Process** | **Laying Farm Responsible** |
| 130 | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** |  |  | **“****Vaccination ****&**** Medication ****&**** Lab****” Business Process** | **PHD Responsible** |
| 140 | If needed, change the planned age for the house by adding/deleting the number of operations | CO02 | Change Production Order | In case need to change the planned production age, we have to change production order by adding/ deleting operations and components to the new days. Operations will be added through Reference Operation set and components to be added using Phantom materials. Operations can be added or deleted at the beginning or at the end | Laying Production Planner |
| 150 | For CL - GR of birds of age >80 wk | CO11N | Confirm Production Order Operation | Commercial Layer - GR of of age  >80 wk house production order into house storage location as by product (Mvt 531) | Laying Farm Responsible |
| 160 | For GP - Depletion of birds female/male at age >60 wk for GP Laying | QA32 | Record Results | GP & Parent  -  Depletion of birds female/male at planned age. | Laying Farm Responsible |
| 170 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Laying Production Planner |
| 180 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Laying Production Planner |
| Output | *Production order confirmations per house/section *Daily activity recording & component consumption *Delivered eggs to store. * commercial layer Birds delivered to processing plant *GP Laying Birds depleted |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 1 | Parent Laying Production Planner |
| Watania 1 – Main office | 1 | C Layer – Laying production planner |
| Jouf | 1 | GP Laying – Laying production planner |
| Dulfa | 8 | Parent Laying - Farm Responsible |
| Wadi | 11 | Parent Laying - Farm Responsible |
| Kubid | 17 | Parent Laying - Farm Responsible |
| Shery | 13 | Parent Laying - Farm Responsible |
| Watania 1 | 2 | C Layer Laying – farm Responsible |
| Watania 1 | 2 | C Layer Laying – G station Responsible |
| Jouf | 4 | GP Laying – farm Responsible |

### Operational Decisions or Logic within the Process

- For Commercial Layer, Batch will be generated automatically, “one batch per order”.

- For Parent, Batch will be created as YYMMDDFF, where FF represents farm no.

- The items will be issued to production order with CO11N like (Feed, Vaccines etc ) which are backflush.

- For layer – laying Pullet & house prepared will have “Final Issue” flag checked because it will be capitalized on a biological asset.

- Pullets from GP & Parent Laying Pre Production will have “Final Issue” flag checked.

- GR of Eggs batch will be done using MIGO_GO against the production order

- For CL: GR storage location will be grading station storage location 

- For GP & Parent: GR storage location will be farm storage location. 

- For Commercial layer and Parent Laying we have one order per house but in some cases, we can add more than one order per house if we have different breeds in the same house. Therefore, we have to adjust the house utilization and fixed components quantities to distribute the cost over the production orders.

- For GP laying two orders will be created for each house, one order per section.

- For GP we have one order per sections of the house. 

- Two sections per house.

- Two houses per farm.

- Below MICs are considered when calculating Opening and Closing balance for each order in report ZPPH3

- Dead on Arrival (Female/Male)

- Mortality (Female/Male)

- Culls (Female/Male)

- Sex Error

- Sample Taken Live (Female/Male)

- Rejected Male – Out

- Depleted (Female/Male)

- Spare Male - In

- In GP, in case of male mortality/culls and to maintain the standard sex ratio the MIC Spare Male-In will be used. And to increase the sex ratio also the MIC Spare Male-In will be used. 

- In GP, For the male performance replacement of spare male it will not be recorded.

### Legal Considerations and Company-Specific Policies

- N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Total eggs per hen housed at 62 weeks for parent | Ross: (Total egg production / total hens at point of lay) / 178.6 % Cobb: (Total egg production / total hens at point of lay) / 175.7 % | 95% |
| 2 | Total hatching eggs per hen housed at 62 weeks for parent | Ross: (Total egg production / total hens at point of lay) / 171.6 % Cobb: (Total egg production / total hens at point of lay) / 170.7 % | 95% |
| 3 | Total eggs per hen housed at 80 weeks for c layer | Total eggs production / total hens at point of lay % | 95% |
| 4 | Total net eggs per hen housed at 80 weeks for c layer | Total net eggs production / total hens at point of lay % | 95% |
| 5 | Total eggs per hen housed at 60 weeks for GP | Total eggs production / total hens at point of lay % | 95% |
| 6 | Total net eggs per hen housed at 80 weeks for GP | Total net eggs production / total hens at point of lay % | 95% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Batch management | LO-BM |
| 3 | Inventory Management | MM-IM |
| 4 | Standard Cost Estimate | CO-PC-PCP |
| 5 | Asset Master | FI-AA |
| 6 | Quality Management | QM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1220 | Parent - Laying |
| 1250 | Commercial layer – Laying |
| 3200 | Grand Parent - Laying |

| **Live Operation Area** |
| --- |
| Parent Laying Area |
| Commercial layer – Laying Area |
| Grand Parent – Laying Area |

| **Production supervisor** |
| --- |
| C1 | Control |
| N1 | Normal (full Settlement) |
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
| Asset Master |
| Internal order |

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
| YPP1 | Live Operation Order (full Settlement) | 10000000 | 19999999 |
| YPP4 | Live Operation (Periodic Settlement) | 40000000 | 49999999 |
| YPP3 | Semi Finished | 30000000 | 39999999 |
| YPP5 | House Preparation Order | 50000000 | 59999999 |

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
| 10 | Laying Production Planner |  |
| 20 | Laying Farm Responsible |  |
| 30 | Laying Cost Controller |  |
| 40 | Stock Keeper |  |
| 50 | Processing Production Planner |  |
| 60 | Processing Receiving Responsible |  |
| 70 | PHD Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 8 |
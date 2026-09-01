# PP-230 Rearing Growing-V4

| PP-230: Rearing Growing |
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

In this process, the farm in-charge responsible handle the process of growing chicks in the rearing house start from DOC placement until finalizing the house to be ready for delivering to laying.

| Process Characteristics |
| --- |
| Process Trigger | House preparation completed |
| Process Input | Production orders |
| Process Output | *Production order confirmations per house/Per Section for GP *Daily activity recording & component consumption *Birds delivered to laying/Pre-Production |
| Process Owner | Rearing Farm Responsible |
| Process Volumes | 115 Order / Cycle. (2.2 parent Cycle / Year). 12 Order / Cycle. (2 layer Cycle / Year). 96 Order / Cycle. (2 GP Cycle / Year). |
| Process Frequencies | Daily |

### Business Process Diagrams

 

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | House Preparation completed |  |  |  |  |
| 010 | **"House Preparation" Business Process** | ** ** | ** ** | **"House Preparation" Business Process** | **Rearing Farm Responsible** |
| 020 | Check the placement plan | COOIS | Monitor Production/ Planned Orders | Check the placement plan | Rearing Farm Responsible |
| 030 | Goods receipt of DOC in house store location | MIGO_GR | Post Goods Movement | Goods receipt DOC purchase order in house store location (Mvt 101) | Rearing Farm Responsible |
| 040 | Adjust house order target quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust house order target quantity based on the actual placement quantity and dates | Rearing Production Planner |
| 050 | Adjust Monthly Lab Operation | CO02 | Change Production Order | Adjust Monthly Lab Operation to be at first of each month | Rearing Production Planner |
| 060 | Adjust house utilization (if needed) | CO02 | Change Production Order | If we have more than one production order in one house, we have to adjust house utilization accordingly. Adjust operation utilization and adjust fixed quantity components like house prepared & fuel. | Rearing Production Planner |
| 070 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccine or medication. | Rearing Production Planner |
| 080 | **“****MM-60 Live Operations Logistics Operations****” Business Process** |  |  | **“****MM-60 Live Operations Logistics Operations****” Business Process** | **Rearing Farm Responsible** |
| 090 | Daily activity recording - QM | QA32 | Record Results | Daily QM data recording.  DoA (DAY000 only) - Culls – Mortality. | Rearing Farm Responsible |
| 100 | Daily Confirmations | CO11N | Confirm Production Order Operations | Daily operation confirmation.  Component consumptions will be done as backflush (Mvt 261) | Rearing Farm Responsible |
| 110 | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** |  |  | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** | **PHD Responsible** |
| 120 | Check "transfer plan" production orders | COOIS | Monitor Production/ Planned Orders | Check "transfer plan" production orders | Rearing Farm Responsible |
| 130 | If needed, change the planned age for the house/section by changing the operations | CO02 | Change Production Order | *In case need to change the planned growing age we have to change production order by adding/removing operations and also have to add components to the new days Operations are added using Ref. Operation Set and components are added using Phantom BOM of respective material. | Rearing Production Planner |
| 140 | Adjust GR operation control key | CO02 | Change Production Order | Change Operation text to include “.GR” and control key to ZQM3 | Rearing Farm Responsible |
| 150 | GR of birds house production order | CO11N | Post Goods Movement | Get closing balance from ZPPH3 and do a confirmation with an auto GR of birds house production order into house storage location (Mvt 101) with that balance. | Rearing Farm Responsible |
| 160 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Rearing Farm Responsible |
| 170 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Rearing Farm Responsible |
| 180 | **BioAsset Business Process** |  |  | **BioAsset Business Process** | **BioAsset Controller** |
|  | ***** In case of ****complete depletion**** ***** | ** ** |  | ** ** |  |
| 140 | Enter Depleted Quantity | QA32 | Record Results | Enter the quantity which is remaining in MIC Depleted. It will make closing balance zero and GR will not be done for this production order. | Rearing Farm Responsible |
| 150 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Rearing Farm Responsible |
| 160 | Transfer Production order balance to live operation loss GL account | FB50 | Enter GL Account Document | Transfer Production order balance amount to live operation loss GL account | Cost Controller |
| 170 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Rearing Farm Responsible |
| Output | *Production order confirmations per house/per section *Daily activity recording & component consumption *Birds delivered to laying |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Dulfa | 2 | Parent –Rearing farm responsible |
| Wadi | 3 | Parent –Rearing farm responsible |
| Shery | 5 | Parent –Rearing farm responsible |
| Watania 1 – Main office | 1 | Parent -Rearing Production Planner |
| Watania 1 – Main office | 1 | C Layer - Rearing Production Planner |
| Watania 1 | 8 | C Layer –Rearing farm responsible |
| Jouf | 8 | GP - Rearing farm responsible |

### Operational Decisions or Logic within the Process

- If there is a decision to change the age at rearing for more or less, we have adjust rearing & laying orders accordingly.

- Batch will be generated automatically, “one batch per order”.

- For Commercial layer we have one order per house but in some cases, we can add more than one order per house if we have different breeds in the same house. Therefore, we have to adjust the house utilization and fixed components quantities to distribute the cost over the production orders.

- For GP we have one order per sections of the house. 

- Two sections per house.

- Three houses per farm.

- Below MICs are considered when calculating Opening and Closing balance for each order in report ZPPH3

- Dead on Arrival

- Mortality

- Culls

- Sex Error

- Sample Taken Live

- Rejected Male – Out

- Depleted

- In GP, for rejected males which are detected inside the house we have to enter that quantity to in MIC Rejected Male, and when rejected males are taken out of the house then the quantity has to be entered in MIC Rejected Male-Out, which will reduce the closing balance.

- For old rearing flocks production orders which was in the rearing farms at the go live date we add production supervisor ZZ1 in the order to use it for calculating the DOCs placement quantity in report ZPPH3 from production order components instead of the quantity of DOCs issued to the production orders. Also removing all components and make final confirmation with yield zero. 

- Around one house prepared for transfer from **parent** - rearing to laying daily.

- Every 3-month six houses transferred from **commercial layer** - rearing to laying.

- Every 40 days a new flock(1 Farm/3 Houses) DOC is received in **GP** Rearing 

### Legal Considerations and Company-Specific Policies

	N/A

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
| 1230 | Parent - Rearing |
| 1260 | Commercial layer – Rearing |
| 3300 | GP - Rearing |

| **Live Operation Area** |
| --- |
| Parent Rearing Area |
| Commercial layer – Rearing Area |
| GP – Rearing Area |

| **Production supervisor** |
| --- |
| C1 | Control |
| N1 | Normal |
| T1 | Trial |
| ZZ1 | Old Data |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production Version |
| Master Inspection Characteristic |
| Sampling Procedure |

| **Class**** / Class Type** |  |
| --- | --- |
| Y007 / 023 | Rearing & Laying Live Operation |

### System Configuration Considerations

N/A

## Technical/Development Related Items

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user ****group** |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | Enhancement | E_PP-070 | Posting date of confirmation should be in the same period/month of production order start date | Confirmation | CO11N | ZXCOFU14 |
| 180 | Enhancement | E_PP-090 | WBS Element check on Order Save | Order | CO01 | ZXCO1U06 |
| 181 | Enhancement | E_PP-100 | Storage Location Change for House level backflush | Order | CO01 | ZXCO1U05 |
| 151 | Enhancement | E_QM-010 | QM Change Specification limits of 03 Inspection lots proportional to Order header quantity | Inspection Lot | CO01 | Z_QPAP_FLEX_PLAN_03 |
| 177 | Report | R_PP-160 | ZPPH3 - Production Order Live Operation Data | Production Order | ZPPH3 | PP\ZPP_PRD_ORD_LV |
| 178 | Report | R_PP-170 | ZPPHRWEEKLY - Production Order Live Operation Data - Weekly | Production Order | ZPPHRWEEKLY | PP\ZPP_PRDO_LV_WK\Z10 |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Rearing Farm Responsible |  |
| 20 | Rearing Production Planner |  |
| 30 | PHD Responsible |  |
| 40 | Bio Asset Controller |  |
| 50 | Cost Controller |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 2 of 8 |
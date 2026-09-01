# PP-120 Broiler Growing_V2

| PP-120: Broiler Growing |
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

In this process, the farm in-charge responsible handle the process of growing chicks in the broiler house start from DOC placement until finalizing the house to be ready for catching & receiving into processing plant.

| Process Characteristics |
| --- |
| Process Trigger | House preparation completed |
| Process Input | Production orders |
| Process Output | Production order confirmations per house Daily activity recording & component consumption Broiler delivered to processing plant |
| Process Owner | Broiler Farm Responsible |
| Process Volumes | 980 Order / Cycle. (8.49 Cycle / Year). Approximately 30 order per day. |
| Process Frequencies | Daily |

### Business Process Diagrams

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | House Preparation completed |  |  |  |  |
| 010 | **"House Preparation" Business Process** | ** ** |  | **"House Preparation" Business Process** | **Broiler BCT Responsible** |
| 020 | Check the placement plan | COOIS | Monitor Production/ Planned Orders | Check the placement plan | Broiler Farm Responsible |
| 030 | GP Broiler- Create STO for DOC from GP | ME21N | Create Purchase Order | Create STO for DOC from GP hatchery to broiler house | Broiler Farm Responsible |
| 040 | GP Broiler- Post Goods Issue | MIGO_GI | Post Goods Movement | Post Goods Issue to STO (Mvt 351) | Broiler Farm Responsible |
| 050 | GP Broiler- Goods receipt of GP Broiler DOC in house storeLoc | MIGO_GR | Post Goods Movement | Goods receipt DOC in house store location (Mvt 101) | Broiler Farm Responsible |
| 060 | Parent Broiler – Goods receipt of Broiler DOC in house storeLoc | MIGO_GO | Post Goods Movement | Goods receipt Broiler DOC in house store location (Mvt 101) against Monthly breed wise production order | Broiler Farm Responsible |
| 070 | Adjust house order target quantity & order dates based on the actual placement quantity | CO02 | Change Production Order | Adjust house order target quantity based on the actual placement quantity and dates | Broiler Production Planner |
| 080 | Adjust Monthly Lab Operation | CO02 | Change Production Order | Adjust Monthly Lab Operation to be at first of each month | Broiler Production Planner |
| 090 | Adjust Vaccine Operations (If vaccine plan changed) | CO02 | Change Production Order | Adjust Vaccine Operations according to PHD plan | Broiler Production Planner |
| 100 | Change planned components (if needed) | CO02 | Change Production Order | Change the planned components if needed. For example vaccine or medication. | Broiler Production Planner |
| 110 | **“****MM-60 Live Operations Logistics Operations****” Business Process** |  |  | **“****MM-60 Live Operations Logistics Operations****” Business Process** | **Broiler**** Farm Responsible** |
| 120 | Daily activity recording - QM | QA32/ ZPPH3 | Record Results | Daily QM data recording.  DOA (DAY000 only) - Culls – Mortality and others. | Broiler Farm Responsible |
| 130 | Daily Confirmations | CO11N | Confirm Production Order Operations | Daily operation confirmation.  Component consumptions will be done as backflush (Mvt 261) | Broiler Farm Responsible |
| 140 | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” ****Business Process** |  |  | **“****PP-130 Vaccination ****&**** Medication ****&**** Lab****” Business Process** | **PHD ****Responsible** |
| 150 | Check "Catching Plan" production orders | COOIS | Monitor Production/ Planned Orders | Check "Catching Plan" as per Processing Department | Broiler Farm Responsible |
| 160 | If needed, change the planned age for the house by changing the catching operation | CO02 | Change Production Order | *In case need to change the planned growing age we have to change production order by adding/removing operations and also have to add components to the new days Catching operation control key to be PP04 | Broiler Production Planner |
| 170 | Catching Day Activity Recording | QA32/ ZPPH3 | Record Results | On catching day, data in QM is recorded for Catching Loss and delay times | Broiler Farm Responsible |
| 180 | **“****PP-080: Processing Birds Catching ****&**** Receiving****”** |  |  | **“****PP-080: Processing Birds Catching ****&**** Receiving****” Business Process** | Processing Receiving Responsible |
| 190 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Broiler Production Planner |
| 200 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Broiler Production Planner |
|  | ***** In case of ****complete depletion**** ***** | ** ** |  | ** ** |  |
| 180 | Enter Depleted Quantity | QA32/ ZPPH3 | Record Results | Enter the quantity which is remaining in MIC Depleted. It will make closing balance ZERO and GR will not be done for this production order. | Broiler Farm Responsible |
| 190 | Production Order TECO | CO02 | Change Production Order | Set completed technically status to production order | Broiler Production Planner |
| 200 | Inspection Lot UD | QA32 | Give Usage Decision | Give the usage decision to the inspection lot, it will mark the completion of QM Data | Broiler Production Planner |
| 210 | Transfer Production order balance to live operation loss GL account | FB50 | Enter GL Account Document | Transfer Production order balance amount to live operation loss GL account | Product Cost Controller |
| Output | *Production order confirmations per house/per section *Daily activity recording & component consumption *Birds delivered to Processing |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 4 | Broiler Production Planner |
| Butain1 | 2 | Broiler Farm Responsible |
| Butain2 | 2 | Broiler Farm Responsible |
| Butain3 | 2 | Broiler Farm Responsible |
| Butain5 | 2 | Broiler Farm Responsible |
| Butain 8 | 2 | Broiler Farm Responsible |
| Butain 9 | 2 | Broiler Farm Responsible |
| Butain11 | 2 | Broiler Farm Responsible |
| Shmalia | 2 | Broiler Farm Responsible |
| Watania 1 | 2 | Broiler Farm Responsible |
| Watania 2 | 2 | Broiler Farm Responsible |

### Operational Decisions or Logic within the Process

- To address 27 days and 35 days catching age separate materials will be created and orders will be created according to planned age.

- If there is a decision to change the catching age of any broiler (27/35 days) for more or less, we have to adjust Broiler orders accordingly.

- Batch will be not be generated automatically, Flock details are entered in production order header “Flock Detail” Tab.

- Only one order per house will be created.

- Stock for DOC (From Parent Hatchery) will be generated using REM cost collector orders in  respective storage location of Hatchery and will be consumed on Broiler orders.

- If DOC coming from multiple Farms/Hatchery/Age, for each combination a separate batch will be created.

- In case of Hatch Brood Stock (From Parent Hatchery) will be generated using YPP9 orders in broiler house storage location against monthly hatch brood material wise orders and broiler order operations upto DAY 004 will be deleted. Hatch brood materials will be assigned to DAY005 operation. 

- Below MICs are considered when calculating Opening and Closing balance for each day in report ZPPH3

- Dead on Arrival - MIX

- Mortality - MIX

- Culls - MIX

- Sample Taken Live  - MIX

- Catching Loss

- Depleted

- Around 30 houses are prepared for DOC placement daily.

- Every 40 days a new flock(1 Farm/3 Houses) DOC is received in **GP** Rearing 

### Legal Considerations and Company-Specific Policies

- Around 30 houses prepared for catching day.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Efficiency production factor (PN) | Average livability % * average live weight / catching age * FCR (feed conversion ration) | 85% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 10 | Stock Transport Order | MM-PUR-PO |
| 20 | Batch management | LO-BM |
| 30 | Inventory Management | MM-IM |
| 40 | Quality Management | QM |
| 50 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

- N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1200 | Broiler Plant |
| 1210 | Hatchery |

| **Live Operation Area** |
| --- |
| Broiler Area |

| **Production supervisor** |
| --- |
| C1 | Control |
| N1 | Normal |
| T1 | Trial |
| F5 | House Preparation |
| F4 | Semi-Finished |
| ZZ1 | Old Data |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Master Inspection Characteristic |
| Sampling Procedure |

| **Batch Class** |  |
| --- | --- |
| Y008/023 | Broiler DOC (Parent/GP) |
| Y004/023 | Broiler |

### System Configuration Considerations

| **STO order types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| ZZ04 | Live Operation STO | 7700000000 | 7799999999 |

| **Availability Check ** | **Checking Rule** | **Stock Overview** | **In/outward movements** |
| --- | --- | --- | --- |
| Y2 | YP To be assigned to order type YPP1 – YPP3 Availability check | Include Safety stock | Include reservation Incl.depen.reservat. (Include all reservations) Incl. production orders (Respect all production orders) |

| **MRP Group** | **Requirement** |
| --- | --- |
| Z1 | MRP Group Z1 makes production version issue storage location priority than material master. |

## Technical/Development Related Items

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user group** |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Enhancement | E_PP-020 | BADI - ZWORKORDER_INFOSYSTE to add extra fields in COOIS | Order | COOIS | ZWORKORDER_INFOSYSTE |
| 7 | Enhancement | E_PP-070 | Posting date of confirmation should be in the same period/month of production order start date | Confirmation | CO11N | ZXCOFU14 |
| 180 | Enhancement | E_PP-090 | WBS Element check on Order Save | Order | CO01 | ZXCO1U06 |
| 181 | Enhancement | E_PP-100 | Storage Location Change for House level backflush | Order | CO01 | ZXCO1U05 |
| 151 | Enhancement | E_QM-010 | QM Change Specification limits of 03 Inspection lots proportional to Order header quantity | Inspection Lot | CO01 | Z_QPAP_FLEX_PLAN_03 |
| 177 | Report | R_PP-160 | ZPPH3 - Production Order Live Operation Data | Production Order | ZPPH3 | PP\ZPP_PRD_ORD_LV |
| 4 | Enhancement | E_PP-040 | Add additional Tab "Flock Detail" and additional fields for Cycle , Flock and Crop number to all related production order | Production Order | CO01 | Z9\ZXCO1U12 |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Broiler BCT Responsible |  |
| 20 | Stock Keeper |  |
| 30 | Brolier Farm Responsible |  |
| 40 | Broiler Production Planner |  |
| 50 | Processing Receiving Responsible |  |
| 60 | PHD Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 7 |
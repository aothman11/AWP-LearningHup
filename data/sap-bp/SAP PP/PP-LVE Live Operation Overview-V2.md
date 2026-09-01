# PP-LVE Live Operation Overview-V2

| PP-LVE: live operation overview |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Predefined steps to develop new farm/hatchery in the company | S | H |
| 2 | Predefined steps to develop new House/Hatcher/Setter in the company | S | H |
| 3 | Predefined steps to develop new product in the company | S | H |
| 4 | Get a production plan per farms & houses with relative farm/house capacity per cycle | S | H |
| 5 | Get a hatcher & setter plan for all hatchery with relative to hatchery hatchers/setters capacity | S | H |
| 6 | Achieve the preparation plan on time | S | H |
| 7 | Collect all movement & cost per order house/setter/hatcher/grading station per cycle | S | H |
| 8 | Have clear visibility for all houses planned and actual movement and operations | S | H |
| 9 | House prepared in cost effective manner | S | H |
| 10 | Plan & execute the surplus eggs | S | H |
| 11 | Plan & execute the table eggs | S | H |

### Business Process Description

For this complete live operations overview contain the list of processes involved for planning & manufacturing execution for live operations department (broiler, hatchery, parents, layer, preparation, PHD)

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **ID** | **Business ****Process****es** | **Department** |
| --- | --- | --- |
| PP-010 | Budget Yearly Planning | All |
| PP-090 | Broiler-Yearly Planning | Live Operation - Broiler |
| PP-100 | Broiler-Cycle Planning | Live Operation - Broiler |
| PP-110 | House Preparation | Live Operation |
| PP-120 | Broiler Growing | Live Operation - Broiler |
| PP-130 | Vaccination & Medication & Lab | Live Operation |
| PP-140 | Hatchery Setting Daily Planning | Live Operation - Hatchery |
| PP-150 | Hatcher Daily Planning | Live Operation - Hatchery |
| PP-160 | Hatchery Execution | Live Operation - Hatchery |
| PP-170 | Surplus Hatching Eggs Planning & Execution | Live Operation - Hatchery |
| PP-180 | Central Grading Station Planning & Execution | Live Operation - Hatchery |
| PP-190 | C Layer Egg Planning & Execution | Live Operation - C Layer |
| PP-200 | Laying - Yearly Cycle Planning | Live Operation - Parent/C Layer |
| PP-210 | Laying Growing/Egg production | Live Operation - Parent/C Layer |
| PP-220 | Rearing Cycle Planning | Live Operation - Parent/C Layer |
| PP-230 | Rearing Growing | Live Operation - Parent/C Layer |
| PP-270 | Create New Product | All |
| PP-280 | Create House\Hatcher\Setter | Live Operation |
| PP-290 | Create New Farm\Hatchery | Live Operation |

### Locations where this Business Process is performed

### Operational Decisions or Logic within the Process

| **Products ** | **Area** | **Batch format** | **Comment** |
| --- | --- | --- | --- |
| Row materials & packing materials |  | Batch will be generated automatically |  |
| Live operations | Rearing (GP/Parent/Layer) | Batch will be generated automatically, “one batch per house”. |  |
|  | Laying (GP/Parent/Layer) | Egg batch will be YYMMDD, 2 digit for farm code , 2 digit for house code | Batch tractability per farm & house per day |
|  | Grading Station & Hatchery | Batch of graded eggs will be like **YYMMDD** and one character for site (K kubid - S Shery - D Dulfa - W Wadi) then 2 characters for the farm number inside the site ex. 170108K11 One batch per grading station site per farm per day The same batch code for graded, transferred, settered egg, rejects and DOC | Here loss tractability of house and keep the tractability of farm per day |
| Broiler & Processing | Broiler output & Carcass | One batch per truck, automatic batch creation. Record truck weight before & after in the batch master record characteristic classification. Use the same batch code for every info. (Carcass, broiler, rejects, DoA, culls) related to truck to keep the traceability. | Tractability here per truck as well as farms (come from DOC of broiler houses) |
| Finished products | Fresh products | YYYYMMDD | Here we loss the tractability of farms |
|  | Frozen products | YYYYMM | Here we loss the tractability of farms |

| **Department** | **No. of Farms** | **No. of Houses** |
| --- | --- | --- |
| Broiler | 94 | 1018 |
| Parent - Laying | 49 | 319 |
| Parent - Rearing | 23 | 127 |
| GP - Laying | 8 | 16 |
| GP - Rearing | 4 | 12 |
| Layer - Laying | 2 | 36 |
| Layer - Rearing | 2 | 12 |

| **Department** | **No. of Hatchers** | **No. of Setters** | **No. of Batches in Setters** |
| --- | --- | --- | --- |
| Hatchery | 252 | 282 | 972 |

### Legal Considerations and Company-Specific Policies

- One approval step for DOC STO by hatchery manager

- Around 30 house prepared for catching day.

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
| 20 | PO Release Strategy | MM-PUR-PO |
| 30 | Batch management | LO-BM |
| 40 | Inventory Management | MM-IM |
| 50 | Standard Cost Estimate | CO-PC-PCP |
| 60 | Quality Management | QM |

### Potential Future Process Improvements (out of scope for this implementation)

- Hatch brood system process implemented by creating separate materials.

- Weighting of birds samples (0 day, 4 day, 7 day, 14 day, 21 day, 25 day) CV , Uniformity % this is done in QM by using MICs

## Functional Solution Design 

### Organization Structure Considerations

| **Plant ** | **Description** |
| --- | --- |
| 1200 | Broiler |
| 1210 | Hatchery |
| 1220 | Parents - Laying |
| 3300 | GP - Rearing |
| 3200 | GP - Laying |
| 1230 | Parents - Rearing |
| 1250 | C Layer - Laying |
| 1260 | C Layer - Rearing |

| **Live Operation Area** |
| --- |
| Broiler Area |
| Hatchery Area |
| Parent - Laying Area |
| Parent - Rearing Area |
| C Layer - Laying Area |
| C layer - Rearing Area |
| GP - Laying Area |
| GP - Rearing Area |

| **Material Type** | **MRP Code** | **MRP Controller Description** | **Further Processing** | **Processing** | **Feed Mill** | **Broiler** | **Hatchery** | **Grading Stations** | **Parent- Laying** | **Parent- Rearing** | **Layer- Laying** | **Layer-Rearing** | **Qassim Central** | **Agriculture** | **Yanbou**** Hub** | **Branches** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Finished | 100 | FP Fresh Finished | X |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 110 | FP Frozen Finished | X |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 120 | Processing Fresh Finished |  | X |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 130 | Processing Frozen Finished |  | X |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 140 | Egg Products |  |  |  |  | X |  |  |  | X |  |  |  |  | X |
| Finished | 150 | Feed Mill Finished |  |  | X |  |  |  |  |  |  |  |  |  |  |  |
| Finished | 160 | Agri. products |  |  |  |  |  |  |  |  |  |  |  | X |  |  |
| Live Stock | 200 | Live Stock |  | X |  | X | X | X | X | X | X | X |  |  |  |  |
| Semi-Finished | 210 | Semi-Finished | X | X | X | X | X | X | X | X | X | X |  | X | X |  |
| Raw material | 300 | Raw material | X | X | X | X | X |  | X | X | X | X |  | X | X |  |
| Packing | 310 | Packing | X | X |  | X |  |  | X | X | X | X |  | X |  |  |
| Spare parts | 400 | Spare Parts Vehicle |  |  |  |  |  |  |  |  |  |  | X |  |  |  |
| Spare parts | 410 | Spare Parts Machine | X | X | X | X | X |  | X | X | X | X |  | X |  |  |
| Spare parts | 420 | Spare Parts General |  |  |  |  |  |  |  |  |  |  | X |  |  |  |
| General | 500 | General Items |  |  |  | X | X |  | X | X | X | X | X | X |  |  |

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** |
| --- | --- | --- | --- |
| C1 | Control |  | Broiler Parent – Laying Parent – Rearing Layer – Laying Layer – Rearing |
| N1 | Normal |  | Broiler Parent – Laying Parent – Rearing Layer – Laying Layer – Rearing |
| N2 | Normal (Periodic Settlement |  | Layer - Laying Parent – Laying GP – Laying |
| T1 | Trial |  | Broiler Parent – Laying Parent – Rearing Layer – Laying Layer – Rearing |
| S1 | Setter | 1210 | Hatchery |
| H1 | Hatcher | 1210 | Hatchery |
| TR1 | Transfer | 1210 | Hatchery |
| F1 | Finished Product | 1210 | Hatchery |
| F1 | Finished Product | 1250 | C Layer - Laying |

| **Purchasing group** |
| --- |
| **ID** | **Description** | **Comment** |
| YF1 | Feed Mill group |  |
| YL1 | Live operations department | for GP purchase orders |
| YL2 | Vaccine |  |
| YL3 | Medicine |  |
| YL4 | Cleaning Team |  |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Quota Arrangement |
| Master Inspection Characteristics |
| Sampling Procedures |

| **Batch ****Classes** |
| --- |
| YFINISHED | Finished Materials |
| YROH | ROH Materials |
| YLIVE | Live Operation Materials |

| **Batch ****Class and Characteristics Assignment ** |
| --- |
| **Class** | **Characteristic** | **Characteristic**** Description** |
| YFINISHED | LOBM_VFDAT | Expiration date, shelf life |
|  | LOBM_HSDAT | Date when Batch Was Produced |
| YROH | LOBM_VFDAT | Expiration date, shelf life |
|  | LOBM_HSDAT | Date when Batch Was Produced |
| YLIVE | LOBM_VFDAT | Expiration date, shelf life |
|  | LOBM_HSDAT | Date when Batch Was Produced |
|  | YWEIGHT_BEFOR | Weight Before Loading |
|  | YWEIGHT_AFTER | Weight After Loading |

### System Configuration Considerations

| **Production order types** | ** ** | ** ** |  |
| --- | --- | --- | --- |
| **Type** | **Description** | **Number Range** | **Av****a****ilability Check** | **Plants** |
|  |  | **From** | **To** | **Creation** | **Release** |  |
| YPP1 | Live Operation Order | 10000000 | 19999999 |  |  | 1200 1210 1221 1222 1223 1224 1231 1232 1233 1234 1241 1242 1244 1250 1260 |
| YPP2 | Finished Product Order | 20000000 | 29999999 | YP | YP | 1050 1100 1150 1160 1170 1180 1190 1210 1250 |
| YPP3 | Semi-Finished Order | 30000000 | 39999999 | YP | YP | 1050 1100 1140 1150 1160 1170 1180 1190 |
| YPP4 | Catching & Receiving Order | 40000000 | 49999999 |  |  | 1100 |

| **Production Scheduling Profile** | ** ** | ** ** | ** ** | ** ** | ** ** |
| --- | --- | --- | --- | --- | --- |
| **ID** | **Description** | **On Creation: Release** | **On Release: Schedule Order** | **Confirm Available Partial Qty** | **Avil.Ck****: ****Cnfrm**** ****Cpcty** | ** ** | **Order Type MTS** | **Plants** |
|  |  |  |  |  |  | **Auto. GR** |  |  |
| YPP01 | Live Operation Order |  | X | X |  |  | YPP1 | 1200 |
|  |  |  |  |  |  |  |  | 1210 |
|  |  |  |  |  |  |  |  | 1221 |
|  |  |  |  |  |  |  |  | 1222 |
|  |  |  |  |  |  |  |  | 1223 |
|  |  |  |  |  |  |  |  | 1224 |
|  |  |  |  |  |  |  |  | 1231 |
|  |  |  |  |  |  |  |  | 1232 |
|  |  |  |  |  |  |  |  | 1233 |
|  |  |  |  |  |  |  |  | 1234 |
|  |  |  |  |  |  |  |  | 1241 |
|  |  |  |  |  |  |  |  | 1242 |
|  |  |  |  |  |  |  |  | 1244 |
|  |  |  |  |  |  |  |  | 1250 |
|  |  |  |  |  |  |  |  | 1260 |
| YPP02 | Finished Product Order |  | X | X |  |  | YPP2 | 1050 |
|  |  |  |  |  |  |  |  | 1100 |
|  |  |  |  |  |  |  |  | 1150 |
|  |  |  |  |  |  |  |  | 1160 |
|  |  |  |  |  |  |  |  | 1170 |
|  |  |  |  |  |  |  |  | 1180 |
|  |  |  |  |  |  |  |  | 1190 |
|  |  |  |  |  |  |  |  | 1210 |
|  |  |  |  |  |  |  |  | 1250 |
| YPP03 | Semi-Finished Order |  | X | X |  |  | YPP3 | 1050 |
|  |  |  |  |  |  |  |  | 1100 |
|  |  |  |  |  |  |  |  | 1140 |
|  |  |  |  |  |  |  |  | 1150 |
|  |  |  |  |  |  |  |  | 1160 |
|  |  |  |  |  |  |  |  | 1170 |
|  |  |  |  |  |  |  |  | 1180 |
|  |  |  |  |  |  |  |  | 1190 |
| YPP04 | Catching & Receiving Order | X | X |  |  | X | YPP4 | 1100 |

| **Area** | **Availability Check ** | **Checking Rule** | **Stock Overview** | **In/outward movements** | **Checking Control** |
| --- | --- | --- | --- | --- | --- |
| Production | Y2 | YP | Include Safety stock | Include reservation Incl.depen.reservat. (Include all reservations) Incl. production orders (Respect all production orders) | Assign YP to production order types YPP2, YPP3 |
| Sales Order | Y2 | A | Include Safety stock | Include reservation Include Sales Reqmts With Delivey Note |  |
| Delivery | Y2 | B | Include Safety stock | Include reservation Include Sales Reqmts With Delivey Note |  |
| STO Without Delivery | Y2 | Y1 | Include Safety stock | Include reservation Include Sales Reqmts With Delivey Note |  |

| **System Status** | **Requirement** |
| --- | --- |
| CNF | Can’t confirm after this status is set |
| TECO | Can’t confirm & GR after this status is set |

| **MRP Group** | **Requirement** |
| --- | --- |
| Z1 | MRP Group Z1 makes production version issue storage location priority than material master. |

| **Planning Calendar** | **Description** | **Plant** | **Calculation Rule** | **Workdays** | **Calculation Start Date** | **Valid To** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Z1 | Feed Mill -All Calendar days | 1150 1160 1170 1180 1190 | Workdays | 1 | 01.01.2016 | 31.12.2030 | Generate all Calendar days |
| Z2 | Hatcher No Friday- No 23 Sept, No Holiday | 1210 | Workdays | 1 | 01.01.2016 | 31.12.2030 | Remove Fridays & 23Sept & Holidays |
| Z3 | Setter just days no exclude holidays | 1210 | Workdays | 1 | 01.01.2016 | 31.12.2030 | Setter just days no exclude holidays |

| **Control Key** | **Key Description** | **Copy from** | **Comment** |
| --- | --- | --- | --- |
| ZP01 | Routing/Ref. op. set - internal proc. | PP01 | Confirmation required not milestone (for live operation) |
| ZP03 | Routing - in-house prod. auto. goods rct | PP03 | Confirmation required not milestone (for live operation) |
| ZP10 | Routing/Ref. op. set - internal proc. No. Scheduling | PP01 | without scheduling |

| **Automatic ****Conversion Planned order to Production order** |
| --- |
| **Plants** | **Order Type** |
| Further Processing | - |
| Processing | - |
| Feed Mill | - |
| Broiler | YPP1 |
| Hatchery | - |
| Parent- Laying | YPP1 |
| Parent- Rearing | - |
| Layer- Laying | - |
| Layer-Rearing | YPP1 |
| Qassim Central | - |
| Agriculture | - |
| Yanbou Hub | YPP3 |
| Branches | - |

| **Purchase order type****s** |
| --- |
| **Type** | **Description** |  | **Number Range** |
|  |  | **ID** | **From** | **To** |
| YLVE | Live operations department | YV | 4300000000 | 4399999999 |

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| YLVS | Live Operation STO | 7700000000 | 7799999999 | 10 |
| Y1UB | PHD STO | 6600000000 | 6699999999 | 10 |
| Y2UB | Cleaning Team STO | 5500000000 | 5599999999 | 10 |
| Y3UB | Catching & Receiving STO | 3300000000 | 3399999999 | 10 |

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** | **Release Strategy** |
|  |  | **From** | **To** |  |  |
| YLVS | Live Operation STO | 7700000000 | 7799999999 | 10 |  |
| Y1UB | PHD STO | 6600000000 | 6699999999 | 10 | PH |
| Y2UB | Cleaning Team STO | 5500000000 | 5599999999 | 10 | CT |
| Y3UB | Catching & Receiving STO | 3300000000 | 3399999999 | 10 |  |

| **STO Release Strategy** |  |  |
| --- | --- | --- |
| **ID** | **Description** | **Release Group** | **Release Codes** | **Classification** |
| PH | PHD STO | S1 | P2 PHD Manager | Y_PURCH_ORD_TYPE = **Y1UB** |
| CT | Cleaning STO | S1 | P1 PHD Cordinator P2 PHD Manager | Y_PURCH_ORD_TYPE = **Y2UB** |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_PP-010_1 | Enhancement | Change first day of the week to be Saturday - SAP Note 1063178 |
| E_PP-090_1 | Enhancement | BADI - ZWORKORDER_INFOSYSTE to add extra fields in COOIS |
| E_PP-100_1 | Enhancement | • Need to assign Cycle number & Crop number to all related production order. • Add enhancement to production order to add this extra info • Add field for compared house prod. Order |
| E_PP-120_1 | Enhancement | ZMF60 tcode to default variant zreservation to tcode MF60 |
| E_PP-200_1 | Enhancement | Create program to upload planned orders from file with predefined format |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 1 | Production Planner |  |
| 10 | Broiler Production Planner |  |
| 11 | GP Purchaser |  |
| 12 | Brolier Farm Responsible |  |
| 20 | Hatchery Planner |  |
| 21 | Hatchery Manager |  |
| 22 | Hatchery Hatchers Responsible |  |
| 23 | Hatchery Setters Responsible |  |
| 24 | Hatchery Transfer Responsible |  |
| 25 | Hatchery DRP Planner |  |
| 26 | Grading Station Responsible |  |
| 30 | Laying Production Planner |  |
| 31 | Layer Production Planner |  |
| 32 | Laying Cost Controller |  |
| 33 | Laying Farm Responsible |  |
| 40 | Rearing Production Planner |  |
| 41 | Rearing Farm Responsible |  |
| 50 | CT Responsible |  |
| 60 | PHD Manager |  |
| 61 | PHD Coordinator |  |
| 62 | PHD Responsible |  |
| 70 | MRP Controller |  |
| 80 | Stock Keeper |  |
| 90 | Processing Production Planner |  |
| 91 | Processing Receiving Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 8 of 13 |
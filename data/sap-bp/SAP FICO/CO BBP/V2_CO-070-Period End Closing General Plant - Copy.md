# V2_CO-070-Period End Closing General Plant - Copy

# **Period End Closing General Plant**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-070-001 | Transparent view of production costs for materials manufactured in-house | S | H |
| CO-070-002 | Transparent view of production costs variances | S | H |
| CO-070-003 | Revaluate inventory stock at actual stock value | S | H |

##  Business Process Description

Period-end closing in a plant ensures that all costs incurred in production of company activities (such as materials manufactured in-house) are assigned to those activities. The costs are settled to the respective products. 

Track direct costs and allocated costs on each production order and compare actual costs with target cost and analyze production variances.

| Process Characteristics |
| --- |
| Process Trigger | Period end closing for production orders |
| Process Input | Review production orders |
| Process Output | Production orders variances analyzed and settled |
| Process Owner | Controller- Production Costs |
| Process Volumes | 500 |
| Process Frequencies | Monthly |

## Business Process Diagrams

    

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Controller-Production Costs** | **Controller** | **Product Cost Controller** | **Inventory Accountant** |
| Trigger | Period end closing for production orders |  |  |  |  |  |  |
| 1 | Monitor production orders costs | COOIS | Production Cost Analysis | R | I | I | I |
| 2 | Open new MM Period | MMPV | Close Periods | I | R | I | I |
| 3 | Actual Cost Splitting: Cost Centers | KSS2 | Split Costs | I | R | I | I |
| 4 | Actual Price Determination: CCtrs | KSII | Run Actual Price Calculation | I | R | I | I |
| 5 | Maintain quantity-based overhead | KZM2 | Define quantity-based Overhead Rates | I | R | I | I |
| 6 | Revaluation at Actual Prices | MFN1 / CON2 | Run Price Revaluation | R | I | I | I |
| 7 | Actual Overheads Calculation Production Order | KGI2 / CO43 | Run Overhead Calculation - Production Orders | R | I | I | I |
| 8 | Preliminary Settlement for Co-Products, Rework | CO8B / CO8A | Presettle Co-Products or Rework | R | I | I | I |
| 9 | Maintain Cutoff Period | KKA0 | Set Results Analysis Cutoff Period | R | I | I | I |
| 10 | Calculation of Work in Progress (WIP) | KKAX / KKAO | Calculate Work in Process-Orders Collective | R | I | I | I |
| 11 | Analyze Variances | KKS2 / KKS1H | Run Variance Calculation Orders-By Period | R | I | I | I |
| 12 | Settle Variances | KO88 / CO88H | Settle Orders Optimized | R | I | I | I |
| 13 | Analyze Summarized Hierarchy | KKBC_HOE_H | Analyze Summarized Hierarchy | R | I | I | I |
| 14 | Close Completed Production Orders | COHV | Mass Processing Production Orders | R | I | I | I |
| 15 | Run Material Ledger Actual Costing | CKMLCP | Edit Actual Costing Run | I | I | I | R |
| 16 | Target/Actual/Prod.Variances: Cum. | S_ALR_87013139 |  | I | I | R | I |
| 17 | Target/Actual Comparison: Cumulative | S_ALR_87013142 |  | I | I | R | I |
| 18 | Variance Categories: Cumulative | S_ALR_87013148 |  | I | I | R | I |
| Output | Production orders variances settled, Closed and stock revaluated with actual cost |  |  |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Controller |
| Qassim | 1 | Controller-Production Costs |
| Qassim | 1 | Inventory Accountant |

## Operational Decisions or Logic within the Process

- A Production Costs controller needs to be assigned on each production plant to monitor the costs allocated on production orders

- Cost controlling man power for cost controlling department needs to be reconsidered. 

 

## Reference to Key Process Changes and Process KPIs

- Monitor production variance and see how accurate the target cost was set via Target/Actual/Production Variances reports

- Categorize the production variances to make accurate decisions to avoid these variances in the next periods via Variance Categories reports

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Financial Accounting | FI-GL |
| 02 | Material Management | MM-INV |
| 03 | Production Planning | PP |

## Potential Future Process Improvements (out of scope for this implementation)

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Controlling Area ** |
| --- |
| WAPO | Al-Watania Poultry |

| **Plants** |
| --- |
| **Plant ** | **Description** |
| 1010 | Qassim Central |
| 1050 | Further Processing |
| 1100 | Processing |
| 1120 | Feed Mill |
| 1200 | Broiler |
| 1210 | Hatchery |
| 1220 | Parents - Laying |
| 1230 | Parents - Rearing |
| 1250 | C Layer - Laying |
| 1260 | C Layer - Rearing |
| 1310 | Fleet Central Workshop |
| 1480 | Jeddah Branch |
| 1490 | Qassim Branch |
| 1500 | Riyadh Branch |
| 1510 | Dammam Branch |
| 1520 | Abha Branch |
| 1530 | Medina Branch |
| 1540 | Taif Branch |
| 1550 | Baljurashi Branch |
| 1560 | Najran Branch |
| 1570 | Sakaka Branch |
| 1580 | Tabuk Branch |
| 1590 | Mecca Branch |
| 1600 | Al Ahsa Branch |
| 1610 | Hafar Al Batin Branch |
| 1630 | Addawadmi Branch |
| 1640 | Jazan Branch |
| 1650 | Yanbu Branch |
| 1660 | Hail Branch |
| 3010 | GP - Central |
| 3100 | GP-Hatchery |
| 3200 | GP-Laying |
| 3300 | GP-Rearing |
| 4100 | Qassim Agri. |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Cost Elements |
| Cost Centers |
| Activity Types |
| Material Master |
| Production Order |

## System Configuration Considerations

- Valuation Variants for Manufacturing Orders (PP)

| **Valuation Variant** | **Name** |
| --- | --- |
| P01 | Production Order: Planned |
| P02 | Production Order: Actual |

| ** ** | **Material Value** |
| --- | --- |
|  | **Prio****.** | **Strategy sequence** |
| P01 | 1 | 7 Valuation Price According to Price Control in material master |
| P02 | 1 | 7 Valuation Price According to Price Control in material master |
|  | **Activity Types/processes** |
|  | **Prio** | **Strategy sequence** | **CO version** |
| P01 | 1 | 1 Plan price for the period | 0 |
| P02 | 1 | 1 Plan price for the period | 0 |
|  | **Subcontracting: quotation in purchasing** |
| P01 | 3 Net Quotation Price |
| P02 | 3 Net Quotation Price |
|  | **External processing** |
|  | **Prio** | **Strategy sequence** |
| P01 | 1 | 1 Price from Operation |
| P01 | 2 | 3 Net quotation price |
| P02 | 1 | 1 Price from Operation |
| P02 | 2 | 3 Net quotation price |
|  | **Overhead** |
|  | **CODE ** | **DESCRIPTION** |
| P01 | YP-PC1 | Standard |
| P02 | YP-PC1 | Standard |

- Costing Variants for Manufacturing Orders (PP)

| **Costing Variant** | **Name** |
| --- | --- |
| PPP1 | Prod. Order: Planned |
| PPP2 | Prod. Order: Actual |

|  | **Control** |
| --- | --- |
|  | **Costing Type** | **Val. Variant** |
| PPP1 | 06 Production Order: Planned | P01 |
|  |  | Production Order: Planned |
| PPP2 | 07 Production Order: Actual | P02 |
|  |  | Production Order: Actual |

- Results Analysis Version

| **RA Key** | **Text** |
| --- | --- |
| Y000002 | WIP Calculation at Actual Costs |

| **CoArea** | **RA Version** | **Text** |
| --- | --- | --- |
| WAPO | 0 | WIP/Results Analysis |

| Actual Results Analysis / WIP Calculation |
| --- |
| Version relevant to settlement | X |
| Transfer to Financial Accounting | X |
| Multiple Valuation | Legal Valuation |
| Extended control |
| Assignment/RA Key | X |
| Update/RA Key | X |
| Save WIP Details | X |
| Update Plan Values | X |
| Status control | A |
| Cutoff period for actual | *06.2017* |
| Actual RA | X |
| Planned Results Analysis |
| Cutoff period for planned RA | 0 |
| Cost Elements |
| Technical RA cost Element | 83100000 |

  

- Valuation Method (Actual Costs)

| CoAr | RA-Version | RA-Key | Status | Status Nr | Description |
| --- | --- | --- | --- | --- | --- |
| WAPO | 0 | Y000002 | PREL | 1 | WIP Calculation on Basis of Actual Costs |
| WAPO | 0 | Y000002 | REL | 2 | WIP Calculation on Basis of Actual Costs |
| WAPO | 0 | Y000002 | DLV | 3 | Cancel Data of WIP Calculation and Results Ana |
| WAPO | 0 | Y000002 | TECO | 4 | Cancel Data of WIP Calculation and Results Ana |

 

-  Define Line IDs

| CoArea | Line ID | Name |
| --- | --- | --- |
| WAPO | LBR | Labor Costs |
| WAPO | MAT | Material Costs |
| WAPO | OVH | Overhead Costs |
| WAPO | STL | Settled Costs |
| WAPO | REV | Revenues |

-  Define Assignment

| Assignment of Cost Elements for WIP and Result Analysis |
| --- |
| **CO Area** | **RA Version** | **RA Key** | **Masked Cost Element** | **Origin** | **Debit/Credit Indic.** | **Vble****/Fixed Ind** | **Accounting Indicator** | Requirement to Capitalize |
| A000 | 0 | Y000002 | ++++++ | ++++ | + | + | ++ | MAT |
| A000 | 0 | Y000002 | ++++++ | ++++ | + | + | ++ | STL |
| A000 | 0 | Y000002 | ++++++ | ++++ | + | + | ++ | OVH |
| A000 | 0 | Y000002 | ++++++ | ++++ | + | + | ++ | LBR |

- Posting Rules for Settling Work in Process

| Defining Results Analysis Version |
| --- |
| **CO Area** | **Company Code** | **RA version** | **RA category** | **Rec number** | **P/L Acct** | **BalSheetAcct** | **Acct ****Princ** |
| WAPO | 1000 | 0 | WIPR | 0 |  | 13900000 | 55010000 |
| WAPO | 1000 | 0 | RUCR | 0 |  | 13900000 | 55020000 |

Define Variance Keys

| **Define Variance Keys** |
| --- |
| **Variance Key** | **Name** |
| Z00001 | Variance Calculation for Orders |
| **Variance Keys Details** |
| **Calculate Scrap** | **Write Line Items** |
| X | X |

- Variance Key Z00001 for all Plants

| **Variance Variant** |
| --- |
| **Variance Variant** | **Name** |
| Z01 | Poultry Variance Variant |
| **Variance Variant Details** |
| **Variance Categories** |
| Input price variances | X |
| Resource-usage variances | X |
| Input quantity variances | X |
| Remaining input variances | X |
| Scrap variances | X |
| Mixed price variances (only in Cost Object Controlling) | X |
| Output price variances | X |
| Lot size variances (Cost Object Controlling only) | X |
| Fixed-cost variances (Cost Center Accounting only) | X |
| Remaining variances | X |

| **Target Cost Versions** |
| --- |
| **CO Area** | **Target Cost Version** | **Name** | **Active** |
| WAPO | 0 | Target costs for total variances | X |
| **Variance Variant** | **Control Cost** | **Target Cost** | ** ** |
| Z01 | Actual Costs | Current Standard Cost Estimate for Target Cost Calculation |

- Settlement Profile

| **Settlement profile YBMFP1     PP Valuated to COPA** |
| --- |
| **Actual Costs** | **Default Values** | **Indicators** | **Valid Receivers** |
| To be settled in full | **Allocation Structure** | YP | **100%-Validation** | X | **Order** | X |
|  | **PA Transfer Structure** | Y1 | **100%-Settlement** | X | **Material** | X |
|  | **Default Object type** |  | **Equivalence number** | X | **Profitability Segment** | X |
|  |  |  | **Settle Variances to COPA** | X | **Order Item** | X |

- Allocation Structure YP

| **Assignments** | **Sources** | **Settlement cost elements** |
| --- | --- | --- |
|  | **Cost ****Elem.Group** | **All Categories** |
| 100 | PP Valuated | YB_ALL | All cost elements | By Cost Element |

- PA Transfer Structure

| **PA Transfer Structure** |
| --- |
| **CO Area** | **Operating Concern** | **PA Transfer Structure** |
| WAPO | WAPO | Y1 | PP Variance Settlement |

| **PA Transfer Structure Details** | ** ** | ** ** |
| --- | --- | --- |
| **Assignment** | **Text** | **QNT/delivered** | **Source Assigned ****Element Grp.** | **Variance Category** | **Fixed/**** variable I****nd****.** | **Value Field** |
| 10 | Quantity Delivered | X |  |  | 3 | VVCQD |
| 20 | Input Price Variance |  | YB_ALL | PRIV | 3 | VVC01 |
| 30 | Input Quantity Variance |  | YB_ALL | QTYV | 3 | VVC02 |
| 40 | Resource-Usage Variance |  | YB_ALL | RSUV | 3 | VVC03 |
| 50 | Remaining Input Variance |  | YB_ALL | INPV | 3 | VVC04 |
| 60 | Mixed-Price Variance |  | YB_ALL | MXPV | 3 | VVC05 |
| 70 | Output Price Variance |  | YB_ALL | OPPV | 3 | VVC06 |
| 80 | Lot Size Variance |  | YB_ALL | LSFV | 3 | VVC07 |
| 90 | Remaining Variance |  | YB_ALL | REMV | 3 | VVC08 |
| 100 | Scrap |  | YB_ALL | SCRP | 3 | VVC09 |

- Maintain Number Ranges for Settlement Documents

| **Number Ranges for Settlement Documents** | ** ** |
| --- | --- |
| **No.** | **From No.** | **To Number** |
| 01 | 0000000001 | 0009000000 |

- Currency Types and Material Ledger Types

| **Currency Types and Material Ledger Types** |
| --- |
| **ML Type** | **CO ****Crcy**** ****Typ** | **Description** |
| Z001 | X | Controlling Area Currency |

- Assign Material Ledger Types to Valuation Area

| **Assign Material Ledger Types to Valuation Area** |
| --- |
| **Valuation Area** | **Description** | **Mat. Ledger Type** |
| 1010 | Qassim Central | Z001 |
| 1050 | Further Processing | Z001 |
| 1100 | Processing | Z001 |
| 1120 | Feed Mill | Z001 |
| 1200 | Broiler | Z001 |
| 1210 | Hatchery | Z001 |
| 1220 | Parents - Laying | Z001 |
| 1230 | Parents - Rearing | Z001 |
| 1250 | C Layer - Laying | Z001 |
| 1260 | C Layer - Rearing | Z001 |
| 1310 | Fleet Central Workshop | Z001 |
| 1480 | Jeddah Branch | Z001 |
| 1490 | Qassim Branch | Z001 |
| 1500 | Riyadh Branch | Z001 |
| 1510 | Dammam Branch | Z001 |
| 1520 | Abha Branch | Z001 |
| 1530 | Medina Branch | Z001 |
| 1540 | Taif Branch | Z001 |
| 1550 | Baljurashi Branch | Z001 |
| 1560 | Najran Branch | Z001 |
| 1570 | Sakaka Branch | Z001 |
| 1580 | Tabuk Branch | Z001 |
| 1590 | Mecca Branch | Z001 |
| 1600 | Al Ahsa Branch | Z001 |
| 1610 | Hafar Al Batin Branch | Z001 |
| 1630 | Addawadmi Branch | Z001 |
| 1640 | Jazan Branch | Z001 |
| 1650 | Yanbu Branch | Z001 |
| 1660 | Hail Branch | Z001 |
| 3010 | GP - Central | Z001 |
| 3100 | GP-Hatchery | Z001 |
| 3200 | GP-Laying | Z001 |
| 3300 | GP-Rearing | Z001 |
| 4100 | Qassim Agri. | Z001 |

- Activate Material Ledgers for Valuation Areas

| **Activate Material Ledgers for Valuation Areas** |
| --- |
| **Valuation Area** | **Company Code** | **Mat. Ledger Type** | **ML.Act** | **Price Deter.** | **Price Determination Is Binding in Valuation Area** |
| 1010 | 1000 | Z001 | X | 2 |  |
| 1050 | 1000 | Z001 | X | 2 |  |
| 1100 | 1000 | Z001 | X | 2 |  |
| 1120 | 1000 | Z001 | X | 2 |  |
| 1200 | 1000 | Z001 | X | 2 |  |
| 1210 | 1000 | Z001 | X | 2 |  |
| 1220 | 1000 | Z001 | X | 2 |  |
| 1230 | 1000 | Z001 | X | 2 |  |
| 1250 | 1000 | Z001 | X | 2 |  |
| 1260 | 1000 | Z001 | X | 2 |  |
| 1310 | 1000 | Z001 | X | 2 |  |
| 1480 | 1000 | Z001 | X | 2 |  |
| 1490 | 1000 | Z001 | X | 2 |  |
| 1500 | 1000 | Z001 | X | 2 |  |
| 1510 | 1000 | Z001 | X | 2 |  |
| 1520 | 1000 | Z001 | X | 2 |  |
| 1530 | 1000 | Z001 | X | 2 |  |
| 1540 | 1000 | Z001 | X | 2 |  |
| 1550 | 1000 | Z001 | X | 2 |  |
| 1560 | 1000 | Z001 | X | 2 |  |
| 1570 | 1000 | Z001 | X | 2 |  |
| 1580 | 1000 | Z001 | X | 2 |  |
| 1590 | 1000 | Z001 | X | 2 |  |
| 1600 | 1000 | Z001 | X | 2 |  |
| 1610 | 1000 | Z001 | X | 2 |  |
| 1630 | 1000 | Z001 | X | 2 |  |
| 1640 | 1000 | Z001 | X | 2 |  |
| 1650 | 1000 | Z001 | X | 2 |  |
| 1660 | 1000 | Z001 | X | 2 |  |
| 3010 | 1000 | Z001 | X | 2 |  |
| 3100 | 1000 | Z001 | X | 2 |  |
| 3200 | 1000 | Z001 | X | 2 |  |
| 3300 | 1000 | Z001 | X | 2 |  |
| 4100 | 1000 | Z001 | X | 2 |  |

- Material Update Structure

| **Material Update Structure** |
| --- |
| **MatlUpdateSt****.** | **Name** | **PCat** | **Cat.** | **Description** |
| Z001 | WAPO Standard | B+ | ZU | Procurement |
| Z001 | WAPO Standard | V+ | VN | Consumption |

- Material Update Structure to a Valuation Area

| **Activate Material Ledgers for Valuation Areas** |
| --- |
| **Valuation Area** | **Mat. Ledger Type** |
| 1010 | Z001 |
| 1050 | Z001 |
| 1100 | Z001 |
| 1120 | Z001 |
| 1200 | Z001 |
| 1210 | Z001 |
| 1220 | Z001 |
| 1230 | Z001 |
| 1250 | Z001 |
| 1260 | Z001 |
| 1310 | Z001 |
| 1480 | Z001 |
| 1490 | Z001 |
| 1500 | Z001 |
| 1510 | Z001 |
| 1520 | Z001 |
| 1530 | Z001 |
| 1540 | Z001 |
| 1550 | Z001 |
| 1560 | Z001 |
| 1570 | Z001 |
| 1580 | Z001 |
| 1590 | Z001 |
| 1600 | Z001 |
| 1610 | Z001 |
| 1630 | Z001 |
| 1640 | Z001 |
| 1650 | Z001 |
| 1660 | Z001 |
| 3010 | Z001 |
| 3100 | Z001 |
| 3200 | Z001 |
| 3300 | Z001 |
| 4100 | Z001 |

 

- Activate Actual Costing

| **Activate Actual Costing** |
| --- |
| **Valuation Area** | **Description** | **Act. Costing** | **ActAct** |
| 1010 | Qassim Central | X | 2 |
| 1050 | Further Processing | X | 2 |
| 1100 | Processing | X | 2 |
| 1120 | Feed Mill | X | 2 |
| 1200 | Broiler | X | 2 |
| 1210 | Hatchery | X | 2 |
| 1220 | Parents - Laying | X | 2 |
| 1230 | Parents - Rearing | X | 2 |
| 1250 | C Layer - Laying | X | 2 |
| 1260 | C Layer - Rearing | X | 2 |
| 1310 | Fleet Central Workshop | X | 2 |
| 1480 | Jeddah Branch | X | 2 |
| 1490 | Qassim Branch | X | 2 |
| 1500 | Riyadh Branch | X | 2 |
| 1510 | Dammam Branch | X | 2 |
| 1520 | Abha Branch | X | 2 |
| 1530 | Medina Branch | X | 2 |
| 1540 | Taif Branch | X | 2 |
| 1550 | Baljurashi Branch | X | 2 |
| 1560 | Najran Branch | X | 2 |
| 1570 | Sakaka Branch | X | 2 |
| 1580 | Tabuk Branch | X | 2 |
| 1590 | Mecca Branch | X | 2 |
| 1600 | Al Ahsa Branch | X | 2 |
| 1610 | Hafar Al Batin Branch | X | 2 |
| 1630 | Addawadmi Branch | X | 2 |
| 1640 | Jazan Branch | X | 2 |
| 1650 | Yanbu Branch | X | 2 |
| 1660 | Hail Branch | X | 2 |
| 3010 | GP - Central | X | 2 |
| 3100 | GP-Hatchery | X | 2 |
| 3200 | GP-Laying | X | 2 |
| 3300 | GP-Rearing | X | 2 |
| 4100 | Qassim Agri. | X | 2 |

- Activate Actual Cost Component Split 

| **Activate Actual Cost Component Split** |
| --- |
| **Valuation Area** | **Description** | **Company Code** | **Active Actual Cost Component Split** |
| 1010 | Qassim Central | 1000 | X |
| 1050 | Further Processing | 1000 | X |
| 1100 | Processing | 1000 | X |
| 1120 | Feed Mill | 1000 | X |
| 1200 | Broiler | 1000 | X |
| 1210 | Hatchery | 1000 | X |
| 1220 | Parents - Laying | 1000 | X |
| 1230 | Parents - Rearing | 1000 | X |
| 1250 | C Layer - Laying | 1000 | X |
| 1260 | C Layer - Rearing | 1000 | X |
| 1310 | Fleet Central Workshop | 1000 | X |
| 1480 | Jeddah Branch | 1000 | X |
| 1490 | Qassim Branch | 1000 | X |
| 1500 | Riyadh Branch | 1000 | X |
| 1510 | Dammam Branch | 1000 | X |
| 1520 | Abha Branch | 1000 | X |
| 1530 | Medina Branch | 1000 | X |
| 1540 | Taif Branch | 1000 | X |
| 1550 | Baljurashi Branch | 1000 | X |
| 1560 | Najran Branch | 1000 | X |
| 1570 | Sakaka Branch | 1000 | X |
| 1580 | Tabuk Branch | 1000 | X |
| 1590 | Mecca Branch | 1000 | X |
| 1600 | Al Ahsa Branch | 1000 | X |
| 1610 | Hafar Al Batin Branch | 1000 | X |
| 1630 | Addawadmi Branch | 1000 | X |
| 1640 | Jazan Branch | 1000 | X |
| 1650 | Yanbu Branch | 1000 | X |
| 1660 | Hail Branch | 1000 | X |
| 3010 | GP - Central | 1000 | X |
| 3100 | GP-Hatchery | 1000 | X |
| 3200 | GP-Laying | 1000 | X |
| 3300 | GP-Rearing | 1000 | X |
| 4100 | Qassim Agri. | 1000 | X |

- Activate Distribution of Consumption Differences

| **Activate Distribution of Consumption Differences** |
| --- |
| **Plnt** | **SLoc** | **S** | **Dist.Act****.** | **Def.Dif.Id** | **Dist.Bind****.** |
| 1010 | Q031 |  | X | 1 |  |
| 1010 | Q070 |  | X | 1 |  |
| 1010 | Q071 |  | X | 1 |  |
| 1010 | Q072 |  | X | 1 |  |
| 1010 | Q073 |  | X | 1 |  |
| 1010 | Q074 |  | X | 1 |  |
| 1010 | Q080 |  | X | 1 |  |
| 1050 | 1056 |  | X | 1 |  |
| 1100 | 1120 |  | X | 1 |  |
| 1100 | 1121 |  | X | 1 |  |
| 1100 | 1122 |  | X | 1 |  |
| 1100 | 1123 |  | X | 1 |  |
| 1100 | 1124 |  | X | 1 |  |
| 1100 | 1125 |  | X | 1 |  |
| 1100 | 1126 |  | X | 1 |  |
| 1100 | 1127 |  | X | 1 |  |
| 1100 | 1128 |  | X | 1 |  |
| 1100 | 1129 |  | X | 1 |  |
| 1100 | 1130 |  | X | 1 |  |
| 1100 | 1131 |  | X | 1 |  |
| 1100 | 1132 |  | X | 1 |  |
| 1100 | 1133 |  | X | 1 |  |
| 1120 | 1123 |  | X | 1 |  |
| 1120 | 1128 |  | X | 1 |  |
| 1120 | 1129 |  | X | 1 |  |
| 1120 | 1133 |  | X | 1 |  |
| 1120 | 1134 |  | X | 1 |  |
| 1140 | 1141 |  | X | 1 |  |
| 1150 | 1154 |  | X | 1 |  |
| 1160 | 1164 |  | X | 1 |  |
| 1170 | 1171 |  | X | 1 |  |
| 1180 | 1184 |  | X | 1 |  |
| 1190 | 1191 |  | X | 1 |  |
| 1200 | B001 |  | X | 1 |  |
| 1200 | B002 |  | X | 1 |  |
| 1200 | B003 |  | X | 1 |  |
| 1200 | B004 |  | X | 1 |  |
| 1200 | B005 |  | X | 1 |  |
| 1200 | B006 |  | X | 1 |  |
| 1200 | B007 |  | X | 1 |  |
| 1200 | B008 |  | X | 1 |  |
| 1200 | B009 |  | X | 1 |  |
| 1200 | B010 |  | X | 1 |  |
| 1200 | B011 |  | X | 1 |  |
| 1200 | B012 |  | X | 1 |  |
| 1200 | B013 |  | X | 1 |  |
| 1200 | B014 |  | X | 1 |  |
| 1200 | B015 |  | X | 1 |  |
| 1200 | B016 |  | X | 1 |  |
| 1200 | B017 |  | X | 1 |  |
| 1200 | B018 |  | X | 1 |  |
| 1200 | B019 |  | X | 1 |  |
| 1200 | B020 |  | X | 1 |  |
| 1200 | B021 |  | X | 1 |  |
| 1200 | B022 |  | X | 1 |  |
| 1200 | B023 |  | X | 1 |  |
| 1200 | B024 |  | X | 1 |  |
| 1200 | B025 |  | X | 1 |  |
| 1200 | B026 |  | X | 1 |  |
| 1200 | B027 |  | X | 1 |  |
| 1200 | B028 |  | X | 1 |  |
| 1200 | B029 |  | X | 1 |  |
| 1200 | B030 |  | X | 1 |  |
| 1200 | B031 |  | X | 1 |  |
| 1200 | B032 |  | X | 1 |  |
| 1200 | B033 |  | X | 1 |  |
| 1200 | B034 |  | X | 1 |  |
| 1200 | B035 |  | X | 1 |  |
| 1200 | B036 |  | X | 1 |  |
| 1200 | B037 |  | X | 1 |  |
| 1200 | B038 |  | X | 1 |  |
| 1200 | B039 |  | X | 1 |  |
| 1200 | B040 |  | X | 1 |  |
| 1200 | B041 |  | X | 1 |  |
| 1200 | B042 |  | X | 1 |  |
| 1200 | B043 |  | X | 1 |  |
| 1200 | B044 |  | X | 1 |  |
| 1200 | B045 |  | X | 1 |  |
| 1200 | B046 |  | X | 1 |  |
| 1200 | B047 |  | X | 1 |  |
| 1200 | B048 |  | X | 1 |  |
| 1200 | B049 |  | X | 1 |  |
| 1200 | B050 |  | X | 1 |  |
| 1200 | B051 |  | X | 1 |  |
| 1200 | B052 |  | X | 1 |  |
| 1200 | B053 |  | X | 1 |  |
| 1200 | B054 |  | X | 1 |  |
| 1200 | B055 |  | X | 1 |  |
| 1200 | B056 |  | X | 1 |  |
| 1200 | B057 |  | X | 1 |  |
| 1200 | B058 |  | X | 1 |  |
| 1200 | B059 |  | X | 1 |  |
| 1200 | B060 |  | X | 1 |  |
| 1200 | B061 |  | X | 1 |  |
| 1200 | B062 |  | X | 1 |  |
| 1200 | B063 |  | X | 1 |  |
| 1200 | B064 |  | X | 1 |  |
| 1200 | B065 |  | X | 1 |  |
| 1200 | B066 |  | X | 1 |  |
| 1200 | B067 |  | X | 1 |  |
| 1200 | B068 |  | X | 1 |  |
| 1200 | B069 |  | X | 1 |  |
| 1200 | B070 |  | X | 1 |  |
| 1200 | B071 |  | X | 1 |  |
| 1200 | B072 |  | X | 1 |  |
| 1200 | B073 |  | X | 1 |  |
| 1200 | B074 |  | X | 1 |  |
| 1200 | B075 |  | X | 1 |  |
| 1200 | B076 |  | X | 1 |  |
| 1200 | B077 |  | X | 1 |  |
| 1200 | B078 |  | X | 1 |  |
| 1200 | B079 |  | X | 1 |  |
| 1200 | B080 |  | X | 1 |  |
| 1200 | B081 |  | X | 1 |  |
| 1200 | B082 |  | X | 1 |  |
| 1200 | B083 |  | X | 1 |  |
| 1200 | B084 |  | X | 1 |  |
| 1200 | B085 |  | X | 1 |  |
| 1200 | B086 |  | X | 1 |  |
| 1200 | B087 |  | X | 1 |  |
| 1200 | B088 |  | X | 1 |  |
| 1200 | B089 |  | X | 1 |  |
| 1200 | B090 |  | X | 1 |  |
| 1200 | B091 |  | X | 1 |  |
| 1200 | B092 |  | X | 1 |  |
| 1200 | B093 |  | X | 1 |  |
| 1200 | B094 |  | X | 1 |  |
| 1210 | H003 |  | X | 1 |  |
| 1210 | H004 |  | X | 1 |  |
| 1210 | H005 |  | X | 1 |  |
| 1210 | H006 |  | X | 1 |  |
| 1210 | H007 |  | X | 1 |  |
| 1210 | H008 |  | X | 1 |  |
| 1220 | PL01 |  | X | 1 |  |
| 1220 | PL02 |  | X | 1 |  |
| 1220 | PL03 |  | X | 1 |  |
| 1220 | PL04 |  | X | 1 |  |
| 1220 | PL05 |  | X | 1 |  |
| 1220 | PL06 |  | X | 1 |  |
| 1220 | PL07 |  | X | 1 |  |
| 1220 | PL08 |  | X | 1 |  |
| 1220 | PL09 |  | X | 1 |  |
| 1220 | PL10 |  | X | 1 |  |
| 1220 | PL11 |  | X | 1 |  |
| 1220 | PL12 |  | X | 1 |  |
| 1220 | PL13 |  | X | 1 |  |
| 1220 | PL14 |  | X | 1 |  |
| 1220 | PL15 |  | X | 1 |  |
| 1220 | PL16 |  | X | 1 |  |
| 1220 | PL17 |  | X | 1 |  |
| 1220 | PL18 |  | X | 1 |  |
| 1220 | PL19 |  | X | 1 |  |
| 1220 | PL20 |  | X | 1 |  |
| 1220 | PL21 |  | X | 1 |  |
| 1220 | PL22 |  | X | 1 |  |
| 1220 | PL23 |  | X | 1 |  |
| 1220 | PL24 |  | X | 1 |  |
| 1220 | PL25 |  | X | 1 |  |
| 1220 | PL26 |  | X | 1 |  |
| 1220 | PL27 |  | X | 1 |  |
| 1220 | PL28 |  | X | 1 |  |
| 1220 | PL29 |  | X | 1 |  |
| 1220 | PL30 |  | X | 1 |  |
| 1220 | PL31 |  | X | 1 |  |
| 1220 | PL32 |  | X | 1 |  |
| 1220 | PL33 |  | X | 1 |  |
| 1220 | PL34 |  | X | 1 |  |
| 1220 | PL35 |  | X | 1 |  |
| 1220 | PL36 |  | X | 1 |  |
| 1220 | PL37 |  | X | 1 |  |
| 1220 | PL38 |  | X | 1 |  |
| 1220 | PL39 |  | X | 1 |  |
| 1220 | PL40 |  | X | 1 |  |
| 1220 | PL41 |  | X | 1 |  |
| 1220 | PL42 |  | X | 1 |  |
| 1220 | PL43 |  | X | 1 |  |
| 1220 | PL44 |  | X | 1 |  |
| 1220 | PL45 |  | X | 1 |  |
| 1220 | PL46 |  | X | 1 |  |
| 1220 | PL47 |  | X | 1 |  |
| 1220 | PL48 |  | X | 1 |  |
| 1220 | PL49 |  | X | 1 |  |
| 1220 | PL50 |  | X | 1 |  |
| 1230 | PR01 |  | X | 1 |  |
| 1230 | PR02 |  | X | 1 |  |
| 1230 | PR03 |  | X | 1 |  |
| 1230 | PR04 |  | X | 1 |  |
| 1230 | PR05 |  | X | 1 |  |
| 1230 | PR06 |  | X | 1 |  |
| 1230 | PR07 |  | X | 1 |  |
| 1230 | PR08 |  | X | 1 |  |
| 1230 | PR09 |  | X | 1 |  |
| 1230 | PR10 |  | X | 1 |  |
| 1230 | PR11 |  | X | 1 |  |
| 1230 | PR12 |  | X | 1 |  |
| 1230 | PR13 |  | X | 1 |  |
| 1230 | PR14 |  | X | 1 |  |
| 1230 | PR15 |  | X | 1 |  |
| 1230 | PR16 |  | X | 1 |  |
| 1230 | PR17 |  | X | 1 |  |
| 1230 | PR18 |  | X | 1 |  |
| 1230 | PR19 |  | X | 1 |  |
| 1230 | PR20 |  | X | 1 |  |
| 1230 | PR21 |  | X | 1 |  |
| 1230 | PR22 |  | X | 1 |  |
| 1230 | PR23 |  | X | 1 |  |
| 1250 | 0101 |  | X | 1 |  |
| 1250 | 0102 |  | X | 1 |  |
| 1250 | 0103 |  | X | 1 |  |
| 1250 | 0104 |  | X | 1 |  |
| 1250 | 0105 |  | X | 1 |  |
| 1250 | 0106 |  | X | 1 |  |
| 1250 | 0107 |  | X | 1 |  |
| 1250 | 0108 |  | X | 1 |  |
| 1250 | 0109 |  | X | 1 |  |
| 1250 | 0110 |  | X | 1 |  |
| 1250 | 0111 |  | X | 1 |  |
| 1250 | 0112 |  | X | 1 |  |
| 1250 | 0113 |  | X | 1 |  |
| 1250 | 0114 |  | X | 1 |  |
| 1250 | 0115 |  | X | 1 |  |
| 1250 | 0116 |  | X | 1 |  |
| 1250 | 0117 |  | X | 1 |  |
| 1250 | 0118 |  | X | 1 |  |
| 1250 | 0201 |  | X | 1 |  |
| 1250 | 0202 |  | X | 1 |  |
| 1250 | 0203 |  | X | 1 |  |
| 1250 | 0204 |  | X | 1 |  |
| 1250 | 0205 |  | X | 1 |  |
| 1250 | 0206 |  | X | 1 |  |
| 1250 | 0207 |  | X | 1 |  |
| 1250 | 0208 |  | X | 1 |  |
| 1250 | 0209 |  | X | 1 |  |
| 1250 | 0210 |  | X | 1 |  |
| 1250 | 0211 |  | X | 1 |  |
| 1250 | 0212 |  | X | 1 |  |
| 1250 | 0213 |  | X | 1 |  |
| 1250 | 0214 |  | X | 1 |  |
| 1250 | 0215 |  | X | 1 |  |
| 1250 | 0216 |  | X | 1 |  |
| 1250 | 0217 |  | X | 1 |  |
| 1250 | 0218 |  | X | 1 |  |
| 1250 | 1254 |  | X | 1 |  |
| 1250 | 1255 |  | X | 1 |  |
| 1250 | LL01 |  | X | 1 |  |
| 1250 | LL02 |  | X | 1 |  |
| 1260 | 0101 |  | X | 1 |  |
| 1260 | 0102 |  | X | 1 |  |
| 1260 | 0103 |  | X | 1 |  |
| 1260 | 0104 |  | X | 1 |  |
| 1260 | 0105 |  | X | 1 |  |
| 1260 | 0106 |  | X | 1 |  |
| 1260 | 0201 |  | X | 1 |  |
| 1260 | 0202 |  | X | 1 |  |
| 1260 | 0203 |  | X | 1 |  |
| 1260 | 0204 |  | X | 1 |  |
| 1260 | 0205 |  | X | 1 |  |
| 1260 | 0206 |  | X | 1 |  |
| 1260 | LR01 |  | X | 1 |  |
| 1260 | LR02 |  | X | 1 |  |
| 1310 | Q021 |  | X | 1 |  |
| 1310 | Q022 |  | X | 1 |  |
| 1310 | Q023 |  | X | 1 |  |
| 1310 | Q024 |  | X | 1 |  |
| 1310 | Q061 |  | X | 1 |  |
| 1310 | Q062 |  | X | 1 |  |
| 1310 | Q085 |  | X | 1 |  |
| 3200 | 0101 |  | X | 1 |  |
| 3200 | 0102 |  | X | 1 |  |
| 3200 | 0201 |  | X | 1 |  |
| 3200 | 0202 |  | X | 1 |  |
| 3200 | 0301 |  | X | 1 |  |
| 3200 | 0302 |  | X | 1 |  |
| 3200 | 0401 |  | X | 1 |  |
| 3200 | 0402 |  | X | 1 |  |
| 3200 | 0501 |  | X | 1 |  |
| 3200 | 0502 |  | X | 1 |  |
| 3200 | 0601 |  | X | 1 |  |
| 3200 | 0602 |  | X | 1 |  |
| 3200 | 0701 |  | X | 1 |  |
| 3200 | 0702 |  | X | 1 |  |
| 3200 | 0801 |  | X | 1 |  |
| 3200 | 0802 |  | X | 1 |  |
| 3200 | GL01 |  | X | 1 |  |
| 3200 | GL02 |  | X | 1 |  |
| 3200 | GL03 |  | X | 1 |  |
| 3200 | GL04 |  | X | 1 |  |
| 3200 | GL05 |  | X | 1 |  |
| 3200 | GL06 |  | X | 1 |  |
| 3200 | GL07 |  | X | 1 |  |
| 3200 | GL08 |  | X | 1 |  |
| 3300 | 0101 |  | X | 1 |  |
| 3300 | 0102 |  | X | 1 |  |
| 3300 | 0103 |  | X | 1 |  |
| 3300 | 0201 |  | X | 1 |  |
| 3300 | 0202 |  | X | 1 |  |
| 3300 | 0203 |  | X | 1 |  |
| 3300 | 0301 |  | X | 1 |  |
| 3300 | 0302 |  | X | 1 |  |
| 3300 | 0303 |  | X | 1 |  |
| 3300 | 0401 |  | X | 1 |  |
| 3300 | 0402 |  | X | 1 |  |
| 3300 | 0403 |  | X | 1 |  |
| 3300 | GR01 |  | X | 1 |  |
| 3300 | GR02 |  | X | 1 |  |
| 3300 | GR03 |  | X | 1 |  |
| 3300 | GR04 |  | X | 1 |  |

-  Activate WIP at Actual Costs

 

| **Activate WIP at Actual Costs** |
| --- |
| **Plnt** | **Name 1           ** | **WIP Active** | **From Per.** | **From Year** |
| 1220 | Parents - Laying | X | 4 | 2019 |
| 1230 | Parents - Rearing | X | 4 | 2019 |
| 1250 | C Layer - Laying | X | 4 | 2019 |
| 1260 | C Layer - Rearing | X | 4 | 2019 |
| 3100 | GP-Hatchery | X | 1 | 2020 |
| 3200 | GP-Laying | X | 1 | 2020 |
| 3300 | GP-Rearing | X | 1 | 2019 |

- COGS Split

| Cost Splitting Profile | Source Account | Cost Component | Name of Cost Component | Target Account | Short Text |
| --- | --- | --- | --- | --- | --- |
| 0YWAPO | 50100000 | 110 | Raw Material | 50100001 | COGS-Raw Material |
| 0YWAPO | 50100000 | 120 | Auxiliary Materials | 50100002 | COGS AUX MAT |
| 0YWAPO | 50100000 | 130 | Live Material | 50100003 | COGS LIVE Material |
| 0YWAPO | 50100000 | 140 | WIP Parent-Rearing | 50100004 | COGS WIP Parent Mate |
| 0YWAPO | 50100000 | 150 | WIP Layer-Rearing | 50100005 | COGS WIP Layer-Reari |
| 0YWAPO | 50100000 | 160 | Fuel, Oil and Gas | 50100006 | COGS Fuel,Oil & Gas |
| 0YWAPO | 50100000 | 170 | Common&General Item | 50100007 | COGS Common&General |
| 0YWAPO | 50100000 | 180 | By-Product | 50100008 | COGS By-Product |
| 0YWAPO | 50100000 | 190 | Semi-Finished Materi | 50100009 | COGS S.F.Material |
| 0YWAPO | 50100000 | 200 | Packing Materials | 50100010 | COGS Packing Materia |
| 0YWAPO | 50100000 | 210 | Labor | 50100011 | COGS Labor |
| 0YWAPO | 50100000 | 220 | Machine Depreciation | 50100012 | COGS Machine Depreci |
| 0YWAPO | 50100000 | 230 | Live Depreciation | 50100013 | COGS Live Depreciati |
| 0YWAPO | 50100000 | 240 | Overhead | 50100014 | COGS Overhead |
| 0YWAPO | 50100000 | 250 | By-Product Finished | 50100015 | COGS By-Product Fini |
| 0YWAPO | 50100000 | 260 | Finished Product | 50100016 | COGS Finished Produc |
| 0YWAPO | 50100000 | 270 | Feed Semi-Finished | 50100017 | COGS Feed Semi-Finis |
| 0YWAPO | 50100000 | 280 | Grains | 50100018 | COGS Grains Material |
| 0YWAPO | 50100000 | 290 | Scrap | 50100019 | COGS Scrap Material |

# **Technical/Development Related Items**

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| R_CO-010_1 | Report | Costing Sheets | YCO001 |
| R_CO-010_2 | Report | Product Prices | YCO003 |
| R_CO-010_2 | Report | Production Cost | YCO004 |
| R_CO-010_3 | Report | PP Confirmed Activity Types | YCO007 |
| R_CO-010_4 | Report | Assessment Cycles | YFI021 |
| R_CO-010_5 | Report | PP Orders CO-Line Items | YCO013 |

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_OVERHEAD_COST_ACCOUNTING | OVERHEAD COST ACCOUNTING |  |
| YCO_PROD_COST_ORDER_CLOSTING | PRODUCT COST BY ORDER CLOSING |  |
| YCO_MATERIAL_LEDGER | MATERIAL LEDGER |  |
| YCO_PROD_REPORTS | Production Information System |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Controller | Key User |

							1 of 21

								21 of 21
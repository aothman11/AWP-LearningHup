# V2_Standard Cost Calculation

# **Standard Cost Calculation**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-030-001 | Calculate Standard Cost Estimate for | S | H |

##  Business Process Description

Annually, the standard costs for products are updated as part of the annual operations planning (AOP). This is necessary to reflect the changes in the prices of purchased parts, change in labor and overhead costs and change in bills of materials and operations needed to manufacture the semi-finished and finished goods.

Once the planned prices for purchased parts are updated and planned activity prices are calculated, a costing run is done to calculate the new standard planned prices of the materials. The calculated standards are checked. The responsible persons are asked to make necessary corrections, e.g. in master data. Once the calculations are considered to be correct, the prices are updated as future planned costs in the respective material master records.

| Process Characteristics |
| --- |
| Process Trigger | Annual Budget or monthly update for standard prices |
| Process Input | Yearly Budget |
| Process Output | Revaluation of existing inventory to the new standard prices |
| Process Owner | Product Cost Controller |
| Process Volumes | 200 |
| Process Frequencies | Monthly/Yearly |

## Business Process Diagrams

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Product Cost Controller** |
| Trigger | Calculating New Standard Prices |  |  |  |
| 1 | Check Cost Centers: Activity Prices | KSBT | Analyze Prices for Activity Types | R |
| 2 | Edit Procurement Alternatives | CK91N | Edit Procurement Alternatives | R |
| 3 | Change Mixing Ratios | CK94 | Change Mixing Ratios | R |
| 4 | Create Costing Run | CK40N | Create and Execute Costing Run | R |
| 5 | Execute Costing Run | CK40N | Create and Execute Costing Run | R |
| 6 | Analyze Results of Costing Run | S_ALR_87099930 | Analyze Results of Costing Run | R |
| Output | Revaluation of existing inventory to the new standard prices |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 1 |  | Cost Components - Materials | X | X |
| 2 |  | Itemization - Materials | X | X |
| 3 |  | Costed Multilevel BOM - Materials | X | X |
| 4 |  | Costing Run Results | X | X |
| 5 |  | Comparison of Itemizations | X | X |
| 6 |  | Costing Run Comparison | X | X |
| 7 |  | Material Inventory Values | X | X |
| 8 | S_ALR_87099930 | Results of Costing Run | X |  |
| 9 | S_ALR_87099931 | Price vs Cost Estimate | X |  |
| 10 | S_ALR_87099932 | Variances Between Costing Runs | X |  |
| 11 | CKAPP01 | Display Materials to be Costed | X |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Product Cost Controller |

## Operational Decisions or Logic within the Process

- Start working on new costing run for the next period at 25th of the current month. 

- Procurement alternatives and mixing ratios should be maintained for life operation according to different house types (Production versions) and for finished products according to different production lines (Production versions)  

- Once new standard prices are ready to be updated for the next period, Mark the new standard prices to be updated as future prices for the next period. 

- By the end of last working day in current periods IT should lock all users on the system except product cost controller user. 

- Once the product cost control user releases the new standard prices for the new period and check that all prices have been updated as current prices for the new period. The IT shall unlock all other users. 

## Reference to Key Process Changes and Process KPIs

N/A 

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 010 | Material Master | LO-MD-MM |
| 020 | Material BOM | LO-MD-BOM |
| 030 | Routing | PP-BD-RTG |
| 040 | Production Version | PP-PI-MD |
| 050 | Purchasing Info Record | MM-PUR |

## Potential Future Process Improvements (out of scope for this implementation)

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Controlling Area ** |
| --- |
| WAPO | Al-Watania Poultry |

| **Plant ** | **Description** | **Type** |
| --- | --- | --- |
| 1480 | Jeddah | DC |
| 1490 | Qassim Branch | DC |
| 1500 | Riyadh | DC |
| 1510 | Dammam | DC |
| 1520 | Abha | DC |
| 1530 | Madinah | DC |
| 1540 | Taif | DC |
| 1550 | Baljurashi | DC |
| 1560 | Najran | DC |
| 1570 | Sakaka | DC |
| 1580 | Tabuk | DC |
| 1590 | Makkah | DC |
| 1600 | Ehsaa | DC |
| 1610 | Hafr Elbatin | DC |
| 1620 | Wadi Addawaser | DC |
| 1630 | Addawadmi | DC |
| 1640 | Jizan | DC |
| 1650 | Yanbou | DC |
| 1660 | Hail | DC |
| 1800 | Qassim Export | DC |
| 1840 | Qassim Agri. | Prod |
| 1010 | Qassim Central | Hub |
| 1050 | Further Processing | Prod |
| 1100 | Slaughter | Prod |
| 1140 | Yanbou Grain Hub | Hub |
| 1150 | Feed Mill Watania1 | Prod |
| 1160 | Feed Mill Watania2 - FM3 | Prod |
| 1170 | Feed Mill Watania2 - FM6 | Prod |
| 1180 | Feed Mill Wadi FM4 | Prod |
| 1190 | Feed Mill Wadi FM5 | Prod |
| 1200 | Broiler | Prod |
| 1210 | Hatchery | Prod |
| 1221 | Grading Station - Dulfa | Prod |
| 1222 | Grading Station - Wadi | Prod |
| 1223 | Grading Station - Kubid | Prod |
| 1224 | Grading Station - Shery | Prod |
| 1231 | Parents - Laying - Dulfa | Prod |
| 1232 | Parents - Laying - Wadi | Prod |
| 1233 | Parents - Laying - Kubid | Prod |
| 1234 | Parents - Laying - Shery | Prod |
| 1241 | Parents - Rearing - Dulfa | Prod |
| 1242 | Parents - Rearing - Wadi | Prod |
| 1244 | Parents - Rearing - Shery | Prod |
| 1250 | C Layer - Laying | Prod |
| 1260 | C Layer - Rearing | Prod |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Cost Centers |
| Cost Elements |
| Activity Types |
| Material Master |

## System Configuration Considerations

- Cost Component Structure

| **Cost Comp. Str.** | **Active** | **Name** | **Primary Cost Component Split** |
| --- | --- | --- | --- |
| Y1 | X | Cost Component Layout |  |
| YP |  | Product drilldown |  |

- Cost Component Groups

| **Cost Component** | **Cost Component Desc.** |
| --- | --- |
| 110 | Raw Material |
| 120 | Auxiliary Materials |
| 130 | Live Material |
| 140 | WIP Parent-Rearing |
| 150 | WIP Layer-Rearing |
| 160 | Fuel, Oil and Gas |
| 170 | Common&General Item |
| 180 | By-Product |
| 190 | Semi-Finished Materi |
| 200 | Packing Materials |
| 210 | Labor |
| 220 | Machine Depreciation |
| 230 | Live Depreciation |
| 240 | Overhead |
| 250 | By-Product Finished |
| 260 | Finished Product |
| 270 | Feed Semi-Finished |
| 280 | Grains |
| 290 | Scrap |

- Cost Component Structure – Cost Component with Attributes

| **Cost ****Comp.Struct****.** | **Cost Component** | **Cos Comp Grp** | **Name of Cost Comp.** | **Indicators** |
| --- | --- | --- | --- | --- |
|  |  |  |  | **Control** | **Cost of Goods Sold** | **Inventory Valuation** |
|  |  |  |  | **Fixed and Variable Costs** | **Cost Rollup** | **Costs of Goods Manufactured** | **Fix and variable Costs** | **Not relevant** |
| WP | 110 | 110 | Raw Material | Set | Set | Set | Set |  |
| WP | 120 | 120 | Auxiliary Materials | Set | Set | Set | Set |  |
| WP | 130 | 130 | Live Material | Set | Set | Set | Set |  |
| WP | 140 | 140 | WIP Parent-Rearing | Set | Set | Set | Set |  |
| WP | 150 | 150 | WIP Layer-Rearing | Set | Set | Set | Set |  |
| WP | 160 | 160 | Fuel, Oil and Gas | Set | Set | Set | Set |  |
| WP | 170 | 170 | Common&General Item | Set | Set | Set | Set |  |
| WP | 180 | 180 | By-Product | Set | Set | Set | Set |  |
| WP | 190 | 190 | Semi-Finished Materi | Set | Set | Set | Set |  |
| WP | 200 | 200 | Packing Materials | Set | Set | Set | Set |  |
| WP | 210 | 210 | Labor | Set | Set | Set | Set |  |
| WP | 220 | 220 | Machine Depreciation | Set | Set | Set | Set |  |
| WP | 230 | 230 | Live Depreciation | Set | Set | Set | Set |  |
| WP | 240 | 240 | Overhead | Set | Set | Set | Set |  |
| WP | 250 | 250 | By-Product Finished | Set | Set | Set | Set |  |
| WP | 260 | 260 | Finished Product | Set | Set | Set | Set |  |
| WP | 270 | 270 | Feed Semi-Finished | Set | Set | Set | Set |  |
| WP | 280 | 280 | Grains | Set | Set | Set | Set |  |
| WP | 290 | 290 | Scrap | Set | Set | Set | Set |  |

** **

- Cost Component Structure – Assign Cost Elements

| **Cost Comp. Str.** | **Chart of Accts** | **Cost Component** | **Cost Component Desc.** | **From cost element** | **To cost element** |
| --- | --- | --- | --- | --- | --- |
| WP | WAPO | 110 | Raw Material | 50100201 | 50100201 |
| WP | WAPO | 110 | Raw Material | 50100216 | 50100216 |
| WP | WAPO | 120 | Auxiliary Materials | 50100202 | 50100202 |
| WP | WAPO | 130 | Live Material | 50100209 | 50100209 |
| WP | WAPO | 140 | WIP Parent-Rearing | 50100212 | 50100212 |
| WP | WAPO | 150 | WIP Layer-Rearing | 50100213 | 50100213 |
| WP | WAPO | 160 | Fuel, Oil and Gas | 50100205 | 50100205 |
| WP | WAPO | 170 | Common&General Item | 50100206 | 50100206 |
| WP | WAPO | 180 | By-Product | 50100210 | 50100210 |
| WP | WAPO | 190 | Semi-Finished Materi | 50100208 | 50100208 |
| WP | WAPO | 200 | Packing Materials | 50100204 | 50100204 |
| WP | WAPO | 200 | Packing Materials | 50100217 | 50100217 |
| WP | WAPO | 210 | Labor | 81000003 | 81000003 |
| WP | WAPO | 220 | Machine Depreciation | 81000001 | 81000001 |
| WP | WAPO | 230 | Live Depreciation | 50100509 | 50100509 |
| WP | WAPO | 230 | Live Depreciation | 60400102 | 60400102 |
| WP | WAPO | 230 | Live Depreciation | 81000002 | 81000002 |
| WP | WAPO | 240 | Overhead | 80100116 | 80100116 |
| WP | WAPO | 240 | Overhead | 80200101 | 80200101 |
| WP | WAPO | 240 | Overhead | 80300100 | 80300100 |
| WP | WAPO | 240 | Overhead | 81000004 | 81000004 |
| WP | WAPO | 240 | Overhead | 81000007 | 81000007 |
| WP | WAPO | 240 | Overhead | 81000009 | 81000009 |
| WP | WAPO | 240 | Overhead | 88000001 | 88000001 |
| WP | WAPO | 250 | By-Product Finished | 50100207 | 50100207 |
| WP | WAPO | 260 | Finished Product | 50100211 | 50100211 |
| WP | WAPO | 260 | Finished Product | 50900101 | 50900101 |
| WP | WAPO | 260 | Finished Product | 50900101 | 50900101 |
| WP | WAPO | 270 | Feed Semi-Finished | 50100218 | 50100218 |
| WP | WAPO | 280 | Grains | 50100219 | 50100219 |
| WP | WAPO | 290 | Scrap | 50100220 | 50100220 |

- Cost Component Structure – Assign Organiz. Units

| **Company Code** | **Plant** | **Costing Variant** | **Valid from** | **Cost Comp Structure (Main CCS)** |
| --- | --- | --- | --- | --- |
| ++++ | ++++ | ++++ | 01/01/2017 | Y1 |

- Origin Groups

 

| **Origin Group** | **Origin ****Grp.Text** |
| --- | --- |
| 1100 | Feed |
| 1200 | Breeder |
| 1300 | Hatcheries |
| 1400 | Broiler |
| 1500 | Processing |
| 1600 | Further Processing |
| 1700 | Layer |

- Costing Sheet: Components: 

-  Define Calculation Bases

| **Calculation Bases** |
| --- |
| **Base** | **Name** | **Cost Portion** | **Cost ****Elem.Group** |
| F100 | Feed | Total | BOH_Feed |
| S100 | Processing | Total | BOH_Processeing |

-  Define Quantity-Based Overhead Rates

| **Overhead Rates** |
| --- |
| **O/H Rate** | **Name** | **Dependency** | **Description** |
| F16 | 1120 Overhead | D010 | Overhead Type/Plant |
| S116 | 1100 Overhead | D010 | Overhead Type/Plant |

 

-  Define Credits

| **Credits** |
| --- |
| **O/H Rate** | **Name** | **Cost Elem.** | **OrGp** | **Cost Center** |
| F16 | 1120 Other Operating | 84001100 | 1100 |  |
| S16 | 1100 Other Operating | 84001500 | 1500 |  |

 

- Define Costing Sheets

| **Costing Sheet  PP-PC Standard****  ****ZF1120****-****Feed Mill 11200 OH**** ** |
| --- |
| **Row** | **Base** | **Overhead Rate** | **Description** | **From ** | **To Row** | **Credit** |
| 10 | F100 |  | Feed Factories | 0 | 0 |  |
| 516 |  | F16 | 1120 Overhead | 10 | 10 | F16 |
|  |  |  |  |  |  |  |
| **Costing Sheet  PP-PC Standard****  ****ZSLAGH****-****Slaughtering Factories 1100 OH** |
| 10 | S100 |  | Slaughtring Factory | 0 | 0 |  |
| 116 |  | S116 | 1100 Overhead | 10 | 0 | S16 |

- Costing Variant: Components

- Define Costing Type

| **Costing type** | **Name** | **Price Update** | **Save Parameters** |
| --- | --- | --- | --- |
| 01 | Standard Cost Est. (Mat.) | 1 Standard Cost | 3 With Start of Period |
| 02 | Ad Hoc Cost Estimates | No Update | Without Date |

- Valuation Variants

| **Valuation Variant** | **Name** |
| --- | --- |
| Y01 | Valuation: Standard |
| Y02 | Valuation: Plan |

| ** ** | **Material Value** |
| --- | --- |
|  | **Prio****.** | **Strategy sequence** | **Incl. add co** |
| Y01 | 1 | 7 Valuation Price According to Price Control in material master | Not set |
| Y02 | 1 | L Price From Purchasing Info Record | Not set |
| Y02 | 2 | 4 Planned Price 1 | Not set |
| Y02 | 3 | 7 Valuation Price According to Price Control in material master | Not set |
|  | **Activity Types/processes** |
|  | **Prio** | **Strategy sequence** | **P/A Version** |
| Y01 | 1 | 1 Plan price for the period | 0 |
| Y02 | 1 | 2 Plan price as average of all fiscal year periods | AOP |
|  | **Subcontracting: quotation in purchasing** |
| Y01 | 3 Net Quotation Price         Quot. in purchasing: Actual Quota Arrangement |
| Y02 | 3 Net Quotation Price         Quot. in purchasing: Actual Quota Arrangement |
|  | **External processing** |
|  | **Prio** | **Strategy sequence** | * * |
| Y01 | 1 | 1 Price from Operation |
| Y01 | 2 | 3 Net quotation price |
| Y02 | 1 | 1 Price from Operation |
| Y02 | 2 | 3 Net quotation price |
|  | **Overhead** |
|  | **Materials** | **Components** | **OH**** on ****subc****. Mat.** |
| Y01 | YP-PC1 | Standard | Not set |
| Y02 | YP-PC1 | Standard | Not set |

 

- Date Control

| **Date Control** | **Name** | **Costing Date From** | **Costing Date To** | **Quantity Structure Date** | **Valuation Date** |
| --- | --- | --- | --- | --- | --- |
| **Manual Entry** | **X** | **X** | **X** | **X** |
| PC01 | Std Cost Est. - Month | N Start of Next Month | Q Maximum Value | A Costing Date | A Costing Date |
| PC02 | Std Cost Est. - Subseq.FY | J Start of Next Fiscal Year | K End of Next Fiscal Year | A Costing Date | A Costing Date |

- Transfer Control

| **Transfer Control** | **Name** |
| --- | --- |
| PC01 | Transfer w/ Plant Change |

- Costing Variant

|  | **Control** |
| --- | --- |
|  | **Costing Type** | **Val. Variant** | **Date Control** | **Qty. Str. Ctrl** | **Transf. Ctrl** |
| ZPC1 | 01 Stand. Cost Est. (Mat) | Z01  Valuation: Standard | PC01 Std.Cost Est. - Month | PC01 Std Qty. Structure Ctrl2 | PC01 Transfer w/ Plant Change |
| ZPC2 | 12 Ad Hoc Cost Estimates | Z02 Valuation: Plan | PC05 Std Cost Est. - Subseq.FY | PC01 Std Qty. Structure Ctrl2 | PC01 Transfer w/ Plant Change |
|  | **Qty. Struct.** |
|  | **Pass on Lot size** | **Ignore PCE** | **TrCtrl can be chd** | **Transf. act. SCE** |
| ZPC1 | No | not set | not set | not set |
| ZPC2 | No | not set | not set | not set |
|  | **Additive Costs** |
| ZPC1 | 1 Ignore; include AC with Stock Transfers: not set |
| ZPC2 | 1 Ignore; include AC with Stock Transfers: not set |
|  | **Update** |
|  | **Saving allowed ** | **Save Itemization** | **Save Error Log** | **Defaults changes** |
| ZPC1 | set | Set | set | not set |
| ZPC2 | set | Set | set | not set |
|  | **Misc.** |
| ZPC1 | 2 Log and save messages, Mail inactive |
| ZPC2 | 2 Log and save messages, Mail inactive |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_STANDARD_COST_CALCULATION | STANDARD COST CALCULATION |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Product Cost Controller | Key User |

							1 of 13

								13 of 13
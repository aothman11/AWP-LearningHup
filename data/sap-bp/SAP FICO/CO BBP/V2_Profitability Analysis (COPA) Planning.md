# V2_Profitability Analysis (COPA) Planning

# **Profitability Analysis (COPA) Planning**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-080-001 | Sales Plan per different levels | S | H |
| CO-080-002 | Transfer Sales Plan to SOP | S | H |

##  Business Process Description

Profitability Analysis (CO-PA) enables you to evaluate market segments, which can be classified according to products, customers, orders or any combination of these, or strategic business units, such as sales organizations or business areas, with respect to your company’s profit or contribution margin.

The aim of the system is to provide your sales, marketing, product management and corporate planning departments with information to support internal accounting and decision-making.

Two forms of Profitability Analysis are supported: costing-based and account-based.

- Costing-based Profitability Analysis is the form of profitability analysis that groups costs and revenues according to value fields and costing-based valuation approaches, both of which you can define yourself. It guarantees you access at all times to a complete, short-term profitability report.

- Account-based Profitability Analysis is a form of profitability analysis organized in accounts and using an account-based valuation approach. The distinguishing characteristic of this form is its use of cost and revenue elements. It provides you with a profitability report that is permanently reconciled with financial accounting.

| Process Characteristics |
| --- |
| Process Trigger | Sales Plan |
| Process Input | Sales Plan data |
| Process Output | Profitability Plan Reports |
| Process Owner | Controller |
| Process Volumes |  |
| Process Frequencies | Yearly/Monthly |

## Business Process Diagrams

    

## Process Step Detailed Requirements & Solution

| **Process Step Description** |  |
| --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Controller** | **Sales Manager** |
| Trigger |  |  |  |  |  |
| 1 | Create Planning Layout | KE14 |  | R | I |
| 2 | CO-PA Planning | KEPM |  | R | I |
| 3 | Send Planning layout in sample excel sheet | Manual |  | I | R |
| 4 | Enter sales plan data in sample excel sheet | Manual |  | I | R |
| 5 | Upload from Excel | KE13N |  | R | I |
| 6 | Line Item Display - Plan Data | KE25 |  | R | I |
| 7 | Transfer Plan Data to SOP | KE1E |  | R | I |
| Output | Sales Plan Uploaded and Transferred to SOP |  |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Controller |
| Qassim | 1 | Sales Manager |

## Operational Decisions or Logic within the Process

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Sales and Operation Planning | FI-GL |
| 02 | Material Master | MM-INV |

## Potential Future Process Improvements (out of scope for this implementation)

N/A

## Organization Structure Considerations

| **Operating Concern**** ** |
| --- |
| WAPO | Al-Watania Poultry |

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
| Material Master |
| Customer Master |

## System Configuration Considerations

-  Maintain Characteristics  

| **Maintain Characteristics** |
| --- |
| **Characteristics** |
| Billing Type |
| Bill-To Party |
| Business Area |
| CO Area |
| Company Code |
| Cost Object |
| Country |
| Customer |
| Customer Group |
| Distr. Channel |
| Division |
| Functional Area |
| Industry |
| Item Category |
| Material Group |
| Material Group 1 |
| Order |
| Payer |
| Plant |
| Product |
| Profit Center |
| Sales District |
| Sales Group |
| Sales Office |
| Sales ord. item |
| Sales Order |
| Sales Org. |
| Sales Representative |
| Segment |
| Ship-To Party |

 

-  Maintain Value Fields 

| **Maintain Value Fields** |
| --- |
| **Code** | **Description** | **Amount** | **Quantity** |
| VVSQT | Sales quantity |  | X |
| VVGWT | Gross weight |  | X |
| VVNWT | Net weight |  | X |
| VVCAR | Sales Quantity in Carton |  | X |
| VVS01 | Revenue | X |  |
| VVS02 | Commercial Discount | X |  |
| VVS03 | Selling Promotions Discount | X |  |
| VVS04 | Nearly expired Discount | X |  |
| VVS05 | Cash discount | X |  |
| VVS06 | Customer Discount | X |  |
| VVS07 | Material discount | X |  |
| VVS08 | Quantity discount | X |  |
| VVSTV | Stock Value | X |  |
| VVACT | Actual COGS | X |  |
| VVCQD | Quantity Delivered |  | X |
| VVC01 | Input Price Variance | X |  |
| VVC02 | Input Quantity Variance | X |  |
| VVC03 | Resource-Usage Variance | X |  |
| VVC04 | Remaining Input Variance | X |  |
| VVC05 | Mixed-Price Variance | X |  |
| VVC06 | Output Price Variance | X |  |
| VVC07 | Lot Size Variance | X |  |
| VVC08 | Remaining Variance | X |  |
| VVC09 | Scrap | X |  |
| VVN01 | Plan Raw Material | X |  |
| VVN02 | Plan Parent Rearing | X |  |
| VVN03 | Plan Layer Rearing | X |  |
| VVN04 | Plan Auxiliary Materials | X |  |
| VVN05 | Plan Fuel, Oil and Gas | X |  |
| VVN06 | Plan Semi-Finished Materials | X |  |
| VVN07 | Plan Animal Material | X |  |
| VVN08 | Plan Packing Materials | X |  |
| VVN09 | Plan Machine Depreciation | X |  |
| VVN10 | Plan Animal Depreciation | X |  |
| VVN11 | Plan Labor | X |  |
| VVN12 | Plan Overhead | X |  |
| VVP01 | Actual Raw Material | X |  |
| VVP02 | Actual Parent Rearing | X |  |
| VVP03 | Actual Layer Rearing | X |  |
| VVP04 | Actual Auxiliary Materials | X |  |
| VVP05 | Actual Fuel, Oil and Gas | X |  |
| VVP06 | Actual Semi-Finished Materials | X |  |
| VVP07 | Actual Animal Material | X |  |
| VVP08 | Actual Packing Materials | X |  |
| VVP09 | Actual Machine Depreciation | X |  |
| VVP10 | Actual Animal Depreciation | X |  |
| VVP11 | Actual Labor | X |  |
| VVP12 | Actual Overhead | X |  |
| VVR01 | RealTime Raw Material | X |  |
| VVR02 | RealTime Parent Rearing | X |  |
| VVR03 | RealTime Layer Rearing | X |  |
| VVR04 | RealTime Auxiliary Materials | X |  |
| VVR05 | RealTime Fuel, Oil and Gas | X |  |
| VVR06 | RealTime Semi-Finished Materials | X |  |
| VVR07 | RealTime Animal Material | X |  |
| VVR08 | RealTime Packing Materials | X |  |
| VVR09 | RealTime Machine Depreciation | X |  |
| VVR10 | RealTime Animal Depreciation | X |  |
| VVR11 | RealTime Labor | X |  |
| VVR12 | RealTime Overhead | X |  |
| VVD01 | Sales & marketing | X |  |

- Define Characteristic Derivation 

| **Table Lookup** | **VBPA Sales Document: Partner** |
| --- | --- |
| **Step Description** | **Derive Sales Representative** |
| **Source Fields for table Lookup** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Det.** | **Name** |
| VBPA | VBELN | Sales and Distribution Document Number | = | CO-PA | KAUFN |  | Sales Order Number |
| VBPA | POSNR | Item number of the SD document | = | CO-PA | KDPOS | X | 000000 |
| VBPA | PARVW | Partner Function | = | GLOBAL | USERTEMP1 | X | YS |
| **Assignment of table to target fields** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Details** | **Name** |
| VBPA | KUNNR | Customer Number | = | CO-PA | WWSYS |  | Sales Representative |

| **Table Lookup** | **VBPA Sales Document: Partner** |
| --- | --- |
| **Step Description** | **Derive Ship to party** |
| **Source Fields for table Lookup** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Det.** | **Name** |
| VBPA | VBELN | Sales and Distribution Document Number | = | CO-PA | KAUFN |  | Sales Order Number |
| VBPA | POSNR | Item number of the SD document | = | CO-PA | KDPOS | X | 000000 |
| VBPA | PARVW | Partner Function | = | GLOBAL | USERTEMP1 | X | WE |
| **Assignment of table to target fields** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Details** | **Name** |
| VBPA | KUNNR | Customer Number | = | CO-PA | WWSWE |  | Ship to party |

| **Table Lookup** | **VBPA Sales Document: Partner** |
| --- | --- |
| **Step Description** | **Derive PAYER** |
| **Source Fields for table Lookup** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Det.** | **Name** |
| VBPA | VBELN | Sales and Distribution Document Number | = | CO-PA | KAUFN |  | Sales Order Number |
| VBPA | POSNR | Item number of the SD document | = | CO-PA | KDPOS | X | 000000 |
| VBPA | PARVW | Partner Function | = | GLOBAL | USERTEMP1 | X | RG |
| **Assignment of table to target fields** |
| **Origin** | **Field Name** | **Name** |  | **Origin** | **Field Name** | **Details** | **Name** |
| VBPA | KUNNR | Customer Number | = | CO-PA | WWSRG |  | Payer |

- Copa Planning Version 

| **COPA Planning Version** |
| --- |
| **Version** | **Name** | **Plan** | **Actual** | **WIP/RA** | **Variance** |
| 0 | Plan/actual version | X | X | X | X |
| 10 | Annual Sales Plan | X |  |  |  |
| 20 | Monthly Sales Plan | X |  |  |  |
| 30 | Sales Reps Sales Plan | X |  |  |  |

-  Define and Assign Valuation Strategy 

| **Define and Assign Valuation Strategy** |
| --- |
| **Val.Strategy** | **Name** | **Sequence** | **Appl.** | **Costing sheet** | **Mat.Cstg** | **Qty**** Field** |
| Z01 | Real time valuation of actual data | 10 |  |  | X | VVSQT |
| Z02 | Manual & Automatic planning | 10 | V | ZCOPA |  | VVSQT |
|  |  | 20 |  |  | X | VVSQT |

| **Assignment of valuation strategy** |
| --- |
| **PV** | **Rec.** | **Plan ver.** | **Val.strat** |
| 01 | B |  | Z01 |
| 01 | C |  | Z01 |
| 01 | F |  | Z01 |
| 03 | B | 0 | Z02 |
| 03 | C | 0 | Z02 |
| 03 | F | 0 | Z02 |
| 04 | B | 0 | Z02 |
| 04 | C | 0 | Z02 |
| 04 | F | 0 | Z02 |
| 03 | B | 10 | Z02 |
| 03 | C | 10 | Z02 |
| 03 | F | 10 | Z02 |
| 04 | B | 10 | Z02 |
| 04 | C | 10 | Z02 |
| 04 | F | 10 | Z02 |
| 03 | B | 20 | Z02 |
| 03 | C | 20 | Z02 |
| 03 | F | 20 | Z02 |
| 04 | B | 20 | Z02 |
| 04 | C | 20 | Z02 |
| 04 | F | 20 | Z02 |
| 03 | B | 30 | Z02 |
| 03 | C | 30 | Z02 |
| 03 | F | 30 | Z02 |
| 04 | B | 30 | Z02 |
| 04 | C | 30 | Z02 |
| 04 | F | 30 | Z02 |

- Access to Standard Cost Estimates  

| **Define Access to Standard Cost Estimates** |
| --- |
| **Costing Key** | **Name** |
| Z01 | Current standard cost estimate Real Time |
| **Determine Material Cost** |
| X | Transfer Standard Cost Estimate |
| **Control Data for Standard Cost Estimate** |
| Costing Variant | PC01 |
| Costing Version | 1 |
| Period Indicator | 1 Current Standard Cost |
| Plant Used for Reading Cost | Use Line Item Plant |

| **Define Access to Standard Cost Estimates** |
| --- |
| **Costing Key** | **Name** |
| Z02 | Yearly standard cost estimate For planning |
| **Determine Material Cost** |
| X | Transfer Standard Cost Estimate |
| **Control Data for Standard Cost Estimate** |
| Costing Variant | PC02 |
| Costing Version | 2 |
| Period Indicator | 1 Current Standard Cost |
| Plant Used for Reading Cost | Use Line Item Plant |

 

-  Define Access to Actual Costing/Material Ledger 

| **Define Access to Actual Costing/Material Ledger** |
| --- |
| **Costing Key** | **Name** |
| ZML | Actual Split Cost |
| **Details** | ** ** |
| Valuation View | 0 Legal Valuation |
| Type of Valuation | 1 Transfer Cost Component Split and total Cost |
| Specify Time Reference | Period a/c to line Item |
| Plant Used for read cost | Use Line Item Plant |
| Value Field | VVACT |

 

- Assign Costing Keys to Any Characteristics 

| **Define Access to Actual Costing/Material Ledger** |
| --- |
| **Poi** | **Point of ****valuati** | **Rec** | **Record Type Name** | **Pla** | **Plan version (CO** | **Mate** | **Material type Na** | **Fir** | **First costing ****ke** |
| 01 | Realtime valuati | F | Billing data |  |  | YLEH | Watania Retur. P |  |  |
| 01 | Realtime valuati | F | Billing data |  |  | YBYP | Watania By-Produ | Z01 | Current standard |
| 01 | Realtime valuati | C | Order/proj.settl |  |  | YBYP | Watania By-Produ | Z01 | Current standard |
| 01 | Realtime valuati | B | Dir.posting from |  |  | YBYP | Watania By-Produ | Z01 | Current standard |
| 01 | Realtime valuati | F | Billing data |  |  | LEIH | Returnable packa |  |  |
| 01 | Realtime valuati | F | Billing data |  |  | YANM | Watania Live Mat | Z01 | Current standard |
| 01 | Realtime valuati | F | Billing data |  |  | YHLB | Watania Semifini | Z01 | Current standard |
| 01 | Realtime valuati | F | Billing data |  |  | YFRT | Watania Finished | Z01 | Current standard |
| 01 | Realtime valuati | F | Billing data |  |  | NLAG | Non-Stock Materi |  |  |
| 01 | Realtime valuati | C | Order/proj.settl |  |  | YHLB | Watania Semifini | Z01 | Current standard |
| 01 | Realtime valuati | C | Order/proj.settl |  |  | YFRT | Watania Finished | Z01 | Current standard |
| 01 | Realtime valuati | C | Order/proj.settl |  |  | YANM | Watania Live Mat | Z01 | Current standard |
| 01 | Realtime valuati | B | Dir.posting from |  |  | YHLB | Watania Semifini | Z01 | Current standard |
| 01 | Realtime valuati | B | Dir.posting from |  |  | YFRT | Watania Finished | Z01 | Current standard |
| 01 | Realtime valuati | B | Dir.posting from |  |  | YANM | Watania Live Mat | Z01 | Current standard |
| 02 | Periodic revalua | F | Billing data |  |  | YLEH | Watania Retur. P |  |  |
| 02 | Periodic revalua | F | Billing data |  |  | YBYP | Watania By-Produ | ZML | Actual Split Cos |
| 02 | Periodic revalua | F | Billing data |  |  | YANM | Watania Live Mat | ZML | Actual Split Cos |
| 02 | Periodic revalua | F | Billing data |  |  | NLAG | Non-Stock Materi |  |  |
| 02 | Periodic revalua | F | Billing data |  |  | LEIH | Returnable packa |  |  |
| 02 | Periodic revalua | F | Billing data |  |  | YHLB | Watania Semifini | ZML | Actual Split Cos |
| 02 | Periodic revalua | F | Billing data |  |  | YFRT | Watania Finished | ZML | Actual Split Cos |
| 03 | Manual planning | F | Billing data | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | F | Billing data | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | C | Order/proj.settl | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 03 | Manual planning | B | Dir.posting from | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S30 | Sales Reps Sales | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S20 | Monthly Sales Pl | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S10 | Annual Sales Pla | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | 0 | Plan/actual vers | YBYP | Watania By-Produ | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | F | Billing data | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | C | Order/proj.settl | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S30 | Sales Reps Sales | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S30 | Sales Reps Sales | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S30 | Sales Reps Sales | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S20 | Monthly Sales Pl | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S20 | Monthly Sales Pl | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S20 | Monthly Sales Pl | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S10 | Annual Sales Pla | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S10 | Annual Sales Pla | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | S10 | Annual Sales Pla | YANM | Watania Live Mat | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | 0 | Plan/actual vers | YHLB | Watania Semifini | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | 0 | Plan/actual vers | YFRT | Watania Finished | Z02 | Yearly standard |
| 04 | Automatic planni | B | Dir.posting from | 0 | Plan/actual vers | YANM | Watania Live Mat | Z02 | Yearly standard |

- Assign Value Fields 

| **Assign Value Fields** |
| --- |
| **POV** | ** ** | **Cco** | **Name of Cost Component** | **F/V** | **Fld**** name 1** |
| 01 | Realtime valuation of actual data | 110 | Raw Material | 3 | VVR01 | RealTime Raw Material |
| 01 | Realtime valuation of actual data | 120 | Parent Rearing | 3 | VVR02 | RealTime Parent Rearing |
| 01 | Realtime valuation of actual data | 130 | Layer Rearing | 3 | VVR03 | RealTime Layer Rearing |
| 01 | Realtime valuation of actual data | 140 | Auxiliary Materials | 3 | VVR04 | RealTime Auxiliary Materials |
| 01 | Realtime valuation of actual data | 150 | Fuel, Oil and Gas | 3 | VVR05 | RealTime Fuel, Oil and Gas |
| 01 | Realtime valuation of actual data | 160 | Semi-Finished Materials | 3 | VVR06 | RealTime Semi-Finished Materials |
| 01 | Realtime valuation of actual data | 170 | Animal Material | 3 | VVR07 | RealTime Animal Material |
| 01 | Realtime valuation of actual data | 180 | Packing Materials | 3 | VVR08 | RealTime Packing Materials |
| 01 | Realtime valuation of actual data | 190 | Machine Depreciation | 3 | VVR09 | RealTime Machine Depreciation |
| 01 | Realtime valuation of actual data | 200 | Animal Depreciation | 3 | VVR10 | RealTime Animal Depreciation |
| 01 | Realtime valuation of actual data | 210 | Labor | 3 | VVR11 | RealTime Labor |
| 01 | Realtime valuation of actual data | 220 | Overhead | 3 | VVR12 | RealTime Overhead |
| 02 | Periodic revaluation of actual data | 110 | Raw Material | 3 | VVP01 | Actual Raw Material |
| 02 | Periodic revaluation of actual data | 120 | Parent Rearing | 3 | VVP02 | Actual Parent Rearing |
| 02 | Periodic revaluation of actual data | 130 | Layer Rearing | 3 | VVP03 | Actual Layer Rearing |
| 02 | Periodic revaluation of actual data | 140 | Auxiliary Materials | 3 | VVP04 | Actual Auxiliary Materials |
| 02 | Periodic revaluation of actual data | 150 | Fuel, Oil and Gas | 3 | VVP05 | Actual Fuel, Oil and Gas |
| 02 | Periodic revaluation of actual data | 160 | Semi-Finished Materials | 3 | VVP06 | Actual Semi-Finished Materials |
| 02 | Periodic revaluation of actual data | 170 | Animal Material | 3 | VVP07 | Actual Animal Material |
| 02 | Periodic revaluation of actual data | 180 | Packing Materials | 3 | VVP08 | Actual Packing Materials |
| 02 | Periodic revaluation of actual data | 190 | Machine Depreciation | 3 | VVP09 | Actual Machine Depreciation |
| 02 | Periodic revaluation of actual data | 200 | Animal Depreciation | 3 | VVP10 | Actual Animal Depreciation |
| 02 | Periodic revaluation of actual data | 210 | Labor | 3 | VVP11 | Actual Labor |
| 02 | Periodic revaluation of actual data | 220 | Overhead | 3 | VVP12 | Actual Overhead |
| 03 | Manual planning | 110 | Raw Material | 3 | VVN01 | Plan Raw Material |
| 03 | Manual planning | 120 | Parent Rearing | 3 | VVN02 | Plan Parent Rearing |
| 03 | Manual planning | 130 | Layer Rearing | 3 | VVN03 | Plan Layer Rearing |
| 03 | Manual planning | 140 | Auxiliary Materials | 3 | VVN04 | Plan Auxiliary Materials |
| 03 | Manual planning | 150 | Fuel, Oil and Gas | 3 | VVN05 | Plan Fuel, Oil and Gas |
| 03 | Manual planning | 160 | Semi-Finished Materials | 3 | VVN06 | Plan Semi-Finished Materials |
| 03 | Manual planning | 170 | Animal Material | 3 | VVN07 | Plan Animal Material |
| 03 | Manual planning | 180 | Packing Materials | 3 | VVN08 | Plan Packing Materials |
| 03 | Manual planning | 190 | Machine Depreciation | 3 | VVN09 | Plan Machine Depreciation |
| 03 | Manual planning | 200 | Animal Depreciation | 3 | VVN10 | Plan Animal Depreciation |
| 03 | Manual planning | 210 | Labor | 3 | VVN11 | Plan Labor |
| 03 | Manual planning | 220 | Overhead | 3 | VVN12 | Plan Overhead |
| 04 | Automatic planning | 110 | Raw Material | 3 | VVN01 | Plan Raw Material |
| 04 | Automatic planning | 120 | Parent Rearing | 3 | VVN02 | Plan Parent Rearing |
| 04 | Automatic planning | 130 | Layer Rearing | 3 | VVN03 | Plan Layer Rearing |
| 04 | Automatic planning | 140 | Auxiliary Materials | 3 | VVN04 | Plan Auxiliary Materials |
| 04 | Automatic planning | 150 | Fuel, Oil and Gas | 3 | VVN05 | Plan Fuel, Oil and Gas |
| 04 | Automatic planning | 160 | Semi-Finished Materials | 3 | VVN06 | Plan Semi-Finished Materials |
| 04 | Automatic planning | 170 | Animal Material | 3 | VVN07 | Plan Animal Material |
| 04 | Automatic planning | 180 | Packing Materials | 3 | VVN08 | Plan Packing Materials |
| 04 | Automatic planning | 190 | Machine Depreciation | 3 | VVN09 | Plan Machine Depreciation |
| 04 | Automatic planning | 200 | Animal Depreciation | 3 | VVN10 | Plan Animal Depreciation |
| 04 | Automatic planning | 210 | Labor | 3 | VVN11 | Plan Labor |
| 04 | Automatic planning | 220 | Overhead | 3 | VVN12 | Plan Overhead |

-  Assign Quantity Fields 

| **Assign Quantity Fields** |
| --- |
| **SD ****qty**** Field** | **Name** | **CO-PA ****qty**** field** | **Name** |
| BRGEW | Gross weight | VVGWT | Gross weight |
| FKLMG | Billing qty in SKU | VVSQT | Sales quantity |
| NTGEW | Net weight | VVNWT | Net weight |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_COPA_PLAN | COPA PLANING |  |

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Controller | Key User |

							1 of 18

								2 of 18
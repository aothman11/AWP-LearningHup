# V2_Profitability Analysis (COPA) Actual

# **Profitability Analysis (COPA) Actual**

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| CO-090-001 | Actual Sales reporting on many sales levels | S | H |
| CO-090-002 | Actual/Target Comparison | S | H |

##  Business Process Description

Profitability Analysis (CO-PA) enables you to evaluate market segments, which can be classified according to products, customers, orders or any combination of these, or strategic business units, such as sales organizations or business areas, with respect to your company’s profit or contribution margin.

The aim of the system is to provide your sales, marketing, product management and corporate planning departments with information to support internal accounting and decision-making.

Two forms of Profitability Analysis are supported: costing-based and account-based.

- Costing-based Profitability Analysis is the form of profitability analysis that groups costs and revenues according to value fields and costing-based valuation approaches, both of which you can define yourself. It guarantees you access at all times to a complete, short-term profitability report.

- Account-based Profitability Analysis is a form of profitability analysis organized in accounts and using an account-based valuation approach. The distinguishing characteristic of this form is its use of cost and revenue elements. It provides you with a profitability report that is permanently reconciled with financial accounting.

| Process Characteristics |
| --- |
| Process Trigger | Analyze profitability |
| Process Input | Sale/Overhead Actual Data |
| Process Output | Profitability Plan/Actual Reports |
| Process Owner | Controller |
| Process Volumes |  |
| Process Frequencies | Daily |

## Business Process Diagrams

    

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App.** | **Controller** |
| Trigger |  |  |  |  |
| 1 | Perform act. cost-ctr cost transfer | KEU5 |  | R |
| 2 | Periodic valuation | KE27 |  | R |
| 3 | Execute profitability report | Ke30 |  | R |
| Output | Plan/Actual Sales Comparison COPA reports |  |  |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Controller |

## Operational Decisions or Logic within the Process

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Sales and Distribution | SD |
| 02 | Cost Center Accounting | CO-OH |
| 03 | Material Ledger | CO-ML |

## Potential Future Process Improvements (out of scope for this implementation)

# **Functional Solution Design**** **

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

-  Store Quantities in CO-PA Standard Unit of Measure 

 

| **Store Quantities in CO-PA Standard Unit of Measure** |
| --- |
| **Source Quantity** | **Description** | **Quantity** | **Description** | **Unit** |
| VVSQT | Sales quantity | VVCAR | Sales Quantity in Carton | CAR |

-  Transfer of Billing Documents 

| **Maintain Assignment of SD Conditions to CO-PA Value Fields** |
| --- |
| **Ctyp** | **Name** | **Val.fld** | **Description** | **Transfer +/-** |
| YPR0 | Circular Price | VVS01 | Revenue |  |
| YCOM | Commercial Dis. % | VVS02 | Commercial Discount |  |
| YPRM | Promotions % | VVS03 | Selling Promotions Discount |  |
| YNEX | Near Expire Dis. % | VVS04 | Nearly expired Discount |  |
| SKTO | Cash Discount | VVS05 | Cash discount |  |
| PCIP | Internal Price | VVSTV | Stock Value |  |

- Activate Profitability Analysis 

| **Activate Profitability Analysis** |
| --- |
| **COAr** | **Name** | **From FY** | **Op.Concern** | **Active Status** | ** ** |
| WAPO | Al-Watania Poultry | 2017 | WAPO | 4 | Component active for both types of Profitability Analysis |

# **Technical/Development Related Items**

		

N/A

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YCO_COPA_ACTUAL | YCO_COPA_ACTUAL |  |
| YSD_COPA_ACTUAL | YSD_COPA_ACTUAL |  |

# Organizational Change Related Items

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Controller | Key User |

							1 of 6

								5 of 6
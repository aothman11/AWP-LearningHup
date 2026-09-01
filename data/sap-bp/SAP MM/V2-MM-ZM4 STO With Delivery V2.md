# V2-MM-ZM4 STO With Delivery V2

| MM-ZM4 STO With Delivery |
| --- |

## Process Description

The execution of stock transfers via stock transport orders has more control and processing options than simple stock transfers in the one- and two-step procedures.

With the help of the delivery date specified in the stock transport order, you can plan stock transfers exactly. In addition, monitor the stock in transit and print the order out to be the reference to the complete process

In addition, you have the option of entering delivery costs.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | The quantity posted from stock is firstly managed as stock in transit of the receiving plant. The quantity posted to the unrestricted-use stock of the receiving plant in the goods receipt posting. This enables the quantity "on the way" to be checked | S | H |
| 02 | The transfer posting valuated at the valuation price of the material in the issuing plant. | S | H |
| 03 | Monitor the Stock in transit between plants to manage the transfer process | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Request for transfer between plants |
| **Process Input** | Stock transport Order |
| **Process Output** | Material Document at the receiving Plant |
| **Process Owner** | Production and Inventory Departments |
| **Process Volumes** | 150 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Create Stock transport Order | ME21N |  | STO DRP Planner |
| 02 | Create Outbound Delivery | VL10D |  | Shipping Responsible Issuing Branch |
| 03 | STO Goods Issue | VL02N |  | Stock Keeper |
| 04 | Monitor Stock in transit | MB5T MB5TD | Display Stock in Transit Stock in Transit on Key Date | Transport Specialist |
| 05 | Receive Stock transport Order | MIGO_GR | Post Goods Movement | Stock Keeper |
|  |  |  |  |  |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 03 | MMBE | Stock Overview | X |  |
| 05 | MB5T | Stock in transit CC | X |  |
| 06 | ME2W | Purchase Orders for Supplying Plant | X |  |
| 07 | VL06O | Delivery monitor for outbound delivery | X |  |
| 08 | VL06G | Deliveries for Goods Issue | X |  |
| 09 | YMM013 | Deliveries Of STO | X |  |
| 10 | YMM014 | Corn & Soya Deliveries | X |  |
| 11 | YMM_DLV | Delivery Report | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| All Branches | 50 | Inventory and distribution Departments |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Every STO Must Be Printed with the Driver Code and Name 

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Stock in transit Empty Weekly | Close period Open items | Small or Zero |
| 02 | Quantities Equality Issued Quantity = Received Quantity | Number of STOs at the in-transit report | 100% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Delivery Processing | LE-SHP-DL |
| 03 | Goods Issue | LE-SHP-GI |
| 04 | Inventory Management | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 999 | Branches Stock Transport |

| **Plant** |
| --- |
| 1120 | Feed Mill |  |
| 1140 | Yanbu Grain Hub |  |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1480 | Jeddah |  |
| 1490 | Qassim Branch |  |
| 1500 | Riyadh |  |
| 1510 | Dammam |  |
| 1520 | Abha |  |
| 1530 | Madina |  |
| 1540 | Taef |  |
| 1550 | Bolgorashi |  |
| 1560 | Nagran |  |
| 1570 | Sakaka |  |
| 1580 | Tabuk |  |
| 1590 | Mecca |  |
| 1600 | Ehsaa |  |
| 1610 | Hafr elbatin |  |
| 1620 | Wadi addawaser | Obsolete |
| 1630 | Addawadmi |  |
| 1640 | jizan |  |
| 1650 | Yanbu |  |
| 1660 | Hail |  |
| 1800 | Qassim Export | Obsolete |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| Batch Management |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| YUD | STO With Delivery | 9900000000 | 9999999999 | 010 |
| Z001 | Fresh Products | 9500000000 | 9599999999 | 010 |
| Z002 | Frozen Products STO | 9500000000 | 9599999999 | 010 |
| Z003 | Egg Products STO | 9500000000 | 9599999999 | 010 |
| YZ01 | Live Op. Purch. Ord. | 7700000000 | 7799999999 | 010 |
| YRUD | Returns STO Expired | 7500000000 | 7599999999 | 010 |
| YRUC | Returns STO (Sales) | 7600000000 | 7699999999 | 010 |
| ZZ04 | Live Operations STO | 7700000000 | 7799999999 | 010 |

| **Type** | **Description** | **Doc Type Job ****Description** |
| --- | --- | --- |
| YUD | STO With Delivery | خاص بتحويلات الذره والصويا من ينبع للقصيم |
| Z001 | Fresh Products | خاص بتحويل المنتجات الطازجة فقط من المشروع للفروع |
| Z002 | Frozen Products STO | خاص بتحويل المنتجات المجمده فقط من المشروع للفروع |
| Z003 | Egg Products STO | خاص بتحويل منتجات البيض فقط من المشروع للفروع |
| YZ01 | Live Op. Purch. Ord. | أمر توريد للصيصان من شركة الجدود لدواجن الوطنية |
| YRUD | Returns STO Expired | تحويل المنتجات التالفه من الفروع  من مستودعات التوالف **مسئولية** **( أمين المستودع )** |
| YRUC | Returns STO (Sales) | نقل البضاعه بين الفروع أو إرجاع التوالف من الفروع للمشروع **مسئولية المبيعات** |
| ZZ04 | Live Operations STO | خاص بعمليات تحويل الأعلاف لمزارع الطيور الحيه |

| **Field Selection** |
| --- |
| **Field** | **Mandatory** | **Optional ** |
| Suppling Plant | X |  |
| Issuing Storage Location | X |  |
| Receiving Plant | X |  |
| Receiving Storage Location | X |  |

| **Define Shipping Data for Plants** |
| --- |
| **Plant** | **Customer Plant** | **Sales Org. ** | **Distribution Channel** | **Division** |  |
| 1480 | Jeddah | P1480 | 1000 | 20 | 00 |  |
| 1490 | Qassim Branch | P1490 | 1000 | 20 | 00 |  |
| 1500 | Riyadh | P1500 | 1000 | 20 | 00 |  |
| 1510 | Dammam | P1510 | 1000 | 20 | 00 |  |
| 1520 | Abha | P1520 | 1000 | 20 | 00 |  |
| 1530 | Madina | P1530 | 1000 | 20 | 00 |  |
| 1540 | Taef | P1540 | 1000 | 20 | 00 |  |
| 1550 | Bolgorashi | P1550 | 1000 | 20 | 00 |  |
| 1560 | Nagran | P1560 | 1000 | 20 | 00 |  |
| 1570 | Sakaka | P1570 | 1000 | 20 | 00 |  |
| 1580 | Tabuk | P1580 | 1000 | 20 | 00 |  |
| 1590 | Mekka | P1590 | 1000 | 20 | 00 |  |
| 1600 | Ehsaa | P1600 | 1000 | 20 | 00 |  |
| 1610 | Hafr elbatin | P1610 | 1000 | 20 | 00 |  |
| 1620 | Wadi addawaser | P1620 | 1000 | 20 | 00 | Obsolete |
| 1630 | Addawadmi | P1630 | 1000 | 20 | 00 |  |
| 1640 | jizan | P1640 | 1000 | 20 | 00 |  |
| 1650 | Yanboa | P1650 | 1000 | 20 | 00 |  |
| 1660 | Hail | P1660 | 1000 | 20 | 00 |  |
| 1010 | Qassim centeral | P1010 | 1000 | 20 | 00 |  |
| 1120 | Feed Mill | P1120 | 1000 | 20 | 00 |  |
| 1100 | Processing | P1100 | 1000 | 20 | 00 |  |
| 1050 | Further Processing | P1050 | 1000 | 20 | 00 |  |

| **Assign Delivery Type and Checking Rule** |
| --- |
| **Document Type** | **Supplying Plant** | **Delivery Type** |
| YRUC | 1050 | Further Processing | YNL2 |
| YRUC | 1100 | Processing | YNL2 |
| YRUC | 1250 | C Layer - Laying | YNL2 |
| YRUC | 1480 | Jeddah Branch | YNL2 |
| YRUC | 1490 | Qassim Branch | YNL2 |
| YRUC | 1500 | Riyadh Branch | YNL2 |
| YRUC | 1510 | Dammam Branch | YNL2 |
| YRUC | 1520 | Abha Branch | YNL2 |
| YRUC | 1530 | Medina Branch | YNL2 |
| YRUC | 1540 | Taif Branch | YNL2 |
| YRUC | 1550 | Baljurashi Branch | YNL2 |
| YRUC | 1560 | Najran Branch | YNL2 |
| YRUC | 1570 | Sakaka Branch | YNL2 |
| YRUC | 1580 | Tabuk Branch | YNL2 |
| YRUC | 1590 | Mecca Branch | YNL2 |
| YRUC | 1600 | Al Ahsa Branch | YNL2 |
| YRUC | 1610 | Hafar Al Batin Branch | YNL2 |
| YRUC | 1620 | Wadi ad-Dawasir Branch | YNL2 |
| YRUC | 1630 | Al Duwadimi Branch | YNL2 |
| YRUC | 1640 | Jazan Branch | YNL2 |
| YRUC | 1650 | Yanbu Branch | YNL2 |
| YRUC | 1660 | Hail Branch | YNL2 |
| YRUD | 1100 | Processing | YNL2 |
| YRUD | 1480 | Jeddah Branch | YNL2 |
| YRUD | 1490 | Qassim Branch | YNL2 |
| YRUD | 1500 | Riyadh Branch | YNL2 |
| YRUD | 1510 | Dammam Branch | YNL2 |
| YRUD | 1520 | Abha Branch | YNL2 |
| YRUD | 1530 | Medina Branch | YNL2 |
| YRUD | 1540 | Taif Branch | YNL2 |
| YRUD | 1550 | Baljurashi Branch | YNL2 |
| YRUD | 1560 | Najran Branch | YNL2 |
| YRUD | 1570 | Sakaka Branch | YNL2 |
| YRUD | 1580 | Tabuk Branch | YNL2 |
| YRUD | 1590 | Mecca Branch | YNL2 |
| YRUD | 1600 | Al Ahsa Branch | YNL2 |
| YRUD | 1610 | Hafar Al Batin Branch | YNL2 |
| YRUD | 1620 | Wadi ad-Dawasir Branch | YNL2 |
| YRUD | 1630 | Al Duwadimi Branch | YNL2 |
| YRUD | 1640 | Jazan Branch | YNL2 |
| YRUD | 1650 | Yanbu Branch | YNL2 |
| YRUD | 1660 | Hail Branch | YNL2 |
| YUD | 1140 | Yanbu Grain Hub | YNL1 |
| YZ01 | 1120 | Feed Mill | NLCC |
| YZ01 | 3010 | GP - Central | NLCC |
| YZ01 | 3100 | GP-Hatchery | NLCC |
| Z001 | 1050 | Further Processing | YNL1 |
| Z001 | 1100 | Processing | YNL1 |
| Z002 | 1050 | Further Processing | YNL1 |
| Z002 | 1100 | Processing | YNL1 |
| Z002 | 1480 | Jeddah Branch | YNL1 |
| Z002 | 1490 | Qassim Branch | YNL1 |
| Z002 | 1500 | Riyadh Branch | YNL1 |
| Z002 | 1510 | Dammam Branch | YNL1 |
| Z002 | 1520 | Abha Branch | YNL1 |
| Z002 | 1530 | Medina Branch | YNL1 |
| Z002 | 1540 | Taif Branch | YNL1 |
| Z002 | 1550 | Baljurashi Branch | YNL1 |
| Z002 | 1560 | Najran Branch | YNL1 |
| Z002 | 1570 | Sakaka Branch | YNL1 |
| Z002 | 1580 | Tabuk Branch | YNL1 |
| Z002 | 1590 | Mecca Branch | YNL1 |
| Z002 | 1600 | Al Ahsa Branch | YNL1 |
| Z002 | 1610 | Hafar Al Batin Branch | YNL1 |
| Z002 | 1620 | Wadi ad-Dawasir Branch | YNL1 |
| Z002 | 1630 | Al Duwadimi Branch | YNL1 |
| Z002 | 1640 | Jazan Branch | YNL1 |
| Z002 | 1650 | Yanbu Branch | YNL1 |
| Z002 | 1660 | Hail Branch | YNL1 |
| Z003 | 1050 | Further Processing | YNL1 |
| Z003 | 1100 | Processing | YNL1 |
| Z003 | 1250 | C Layer - Laying | YNL1 |
| Z003 | 1480 | Jeddah Branch | YNL1 |
| Z003 | 1490 | Qassim Branch | YNL1 |
| Z003 | 1500 | Riyadh Branch | YNL1 |
| Z003 | 1510 | Dammam Branch | YNL1 |
| Z003 | 1520 | Abha Branch | YNL1 |
| Z003 | 1530 | Medina Branch | YNL1 |
| Z003 | 1540 | Taif Branch | YNL1 |
| Z003 | 1550 | Baljurashi Branch | YNL1 |
| Z003 | 1560 | Najran Branch | YNL1 |
| Z003 | 1570 | Sakaka Branch | YNL1 |
| Z003 | 1580 | Tabuk Branch | YNL1 |
| Z003 | 1590 | Mecca Branch | YNL1 |
| Z003 | 1600 | Al Ahsa Branch | YNL1 |
| Z003 | 1610 | Hafar Al Batin Branch | YNL1 |
| Z003 | 1620 | Wadi ad-Dawasir Branch | YNL1 |
| Z003 | 1630 | Al Duwadimi Branch | YNL1 |
| Z003 | 1640 | Jazan Branch | YNL1 |
| Z003 | 1650 | Yanbu Branch | YNL1 |
| Z003 | 1660 | Hail Branch | YNL1 |
| ZZ04 | 1120 | Feed Mill | YNL3 |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-110-01 | Form | STO Form | Y_STO_BRNCH |
| F-MM-110-02 | Form | STO Form | Y_STO |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Role** | **Description** |
| 2 | YMM_STO_REPORT_ALL | MM: Stock Transport Order Reports All Types All Plants |
| 3 | YMM_STO_1010_YRUD | MM: Stock Transport Order Requester Returns Expired From Branches |
| 4 | YMM_STO_1120_YUD | MM: Stock Transport Order Requester Yanbu Hub To Feed Mill |
| 5 | YMM_STO_REPORT_1010_YRUD | MM: Stock Transport Order Reports Returns Expired From Branches |
| 6 | YMM_STO_REPORT_1120_YUD | MM: Stock Transport Order Reports Yanbu Grain Hub |
| 7 | YMM_STO_REPORT_1250 | MM: Stock Transport Order Reports C Layer - Rearing |
| 8 | YMM_STO_REPORT_1260 | MM: Stock Transport Order Reports C Layer - Rearing |
| 9 | YMM_STO_REPORT_ALL_BRANCHES | MM: Stock Transport Order Reports All Branches |
| 10 | YMM_STO_YRUC | MM: Stock Transport Order Requester Returns Sales Department |
| 11 | YMM_STO_YUD_KEY_USER | MM: Stock Transport Order Requester Yanbu Hub To Feed Mill Key User Change |
| 12 | YMM_STO_Z001 | MM: Stock Transport Order Requester Fresh STO |
| 13 | YMM_STO_Z002 | MM: Stock Transport Order Requester Frozen STO |
| 14 | YMM_STO_Z003 | MM: Stock Transport Order Requester Eggs STO |
| 15 | YMM_STO_1250_ZZ04_E01 | MM: Stock Transport Order Requester C Layer - Laying - Farm 01 |
| 16 | YMM_STO_1250_ZZ04_E02 | MM: Stock Transport Order Requester C Layer - Laying - Farm 02 |
| 17 | YMM_STO_1260_ZZ04_L01 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 01 |
| 18 | YMM_STO_1260_ZZ04_L02 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 02 |
| 19 | YMM_STO_YRUC | MM: Stock Transport Order Requester Cross Branches / Not Sold Stock Transfer |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Transport Shipping Specialist | Key User |
| Warehouse Clerks | Key User |

In end user training, we should collect different users into groups and repeat the training for every group.

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 9 of 10 |
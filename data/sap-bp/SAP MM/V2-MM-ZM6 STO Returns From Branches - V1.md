# V2-MM-ZM6 STO Returns From Branches - V1

# ZMM-M6 Returns From Branches Process

## Process Description

This Process to manage the Returns from Distribution centers from All Country to the Qassim Branch.

This process will be the input for scrapping process

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Control Returns From All Branches | S | H |
| 02 | Differentiate between Expired and Un Expired Transfers | S | H |
| 03 | Get the Volume of Expired Returns Per Branch |  |  |
| 04 | The transfer posting valuated at the valuation price of the material in the issuing plant. | S | H |
| 05 | Monitor the Stock in transit between plants to manage the transfer process | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Expiration return from branch |
| **Process Input** | Stock transport Order |
| **Process Output** | Material Document at the receiving Plant |
| **Process Owner** | Inventory Departments |
| **Process Volumes** | 19 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

|  | **Process Steps Description**** ** |
| --- | --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI ** **Application** | **Responsibility** |
| **Expired Return From Branches ****(Expired at Branch**** and not sold****)** |  |  |
| 01 | Internal transfer qty. to Blocked stock with same Batch | MIGO_TR |  | Branch Stock Keeper |
| 02 | Create STO (YRUD) | ME21N |  | Sales |
| 03 | Create Outbound Delivery | VL10D |  | Branch Stock Keeper |
| 04 | Goods Issue from Unrestricted stock type | VL02N |  | Branch Stock Keeper |
| 05 | Monitor Stock in transit | MB5T MB5TD | Display Stock in Transit Stock in Transit on Key Date | Stock Keeper (Q099) |
| 06 | Receive Stock transport Order | MIGO_GR | Post Goods Movement | Stock Keeper (Q099) |
| 07 | Scrap the qty. with same batch | MIGO |  | Finance Accounts |
| **Damage**** Return From Branches ****(****Packing / Smell)** **Either Sold or not.** |  |  |
| 01 | Quantity transfer to Quality stock type | MIGO_TR |  | Quality |
| 02 | Create STO (YRUC) | ME21N |  | Quality |
| 03 | Transfer the quantity to Unrestricted stock type | MIGO_TR |  | Quality |
| 04 | Create Outbound Delivery | VL10D |  | Branch Stock Keeper |
| 05 | Goods Issue from Unrestricted stock type | VL02N |  | Branch Stock Keeper |
| 06 | Receive the qty. at Complain store Q098 | MIGO_GR |  | Quality |
| **Expired Return From ****Customer to the Branch****, then to Q099** |  |  |
| 01 | Create RSO | VA01 |  | Branch Account |
| 02 | Create Outbound Delivery | VL10C |  | Branch Stock Keeper |
| 03 | Receive the Qty. at Expired store at branch | VL02N |  | Branch Stock Keeper |
| 04 | Create Outbound Delivery | VL10D |  | Branch Stock Keeper |
| 05 | Posting goods issue | VL02N |  | Branch Stock Keeper |
| 06 | Receive the qty. at Expired store Q099 | MIGO_GR |  | Stock Keeper (Q099) |
| 07 | Scrap the qty. | MIGO |  | Finance Accounts |
| **Return From**** Main**** ****Customer to Qassim direct** |  |  |
| 01 | Create RSO | VA01 |  | Branch Account |
| 02 | Create Outbound Delivery | VL10C |  | Quality |
| 03 | Post Goods receipt at Q098 | VL02N |  | Quality |
| 04 | If damage (can’t use), then transfer to Q099 | MB21 |  | Quality |
|  | If Usable, then create STO (ZZ01) for the concern site. | ME21N |  | WHs Supervisor |
| 05 | Scrap the qty. | MIGO |  | Finance Accounts |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 02 | ID F1595 | Stock - Multiple Materials |  | X |
| 03 | MMBE | Stock Overview | X |  |
| 04 | ID F1076 | Stock - Single Material |  | X |
| 05 | MB5T | Stock in transit CC | X |  |
| 06 | ME2W | Purchase Orders for Supplying Plant | X |  |
| 07 | VL06O | Delivery monitor for outbound delivery | X |  |
| 08 | VL06G | Deliveries for Goods Issue | X |  |

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
| **ID** | **KPI** | **How to Measure** | **Expected R****esult** |
| 01 | Stock in transit Empty Weekly | Close period Open items | Small or Zero |
| 02 | Quantities Equality Issued Quantity = Received Quantity | Number of STOs at the in transit report | 100% |

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
| 999 | Returns From Branches Stock Transport |

| **Plant** |
| --- |
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
| 1660 | Hael |  |
| 1800 | Qassim Export |  |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Batch Management |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| YRUD | Returns STO With Delivery | 7500000000 | 7599999999 | 10 |

| **Field Selection** |
| --- |
| **Field** | **Mandatory** | **Optional ** |
| Supplying Plant | X |  |
| Issuing Storage Location | X |  |
| Receiving Plant | X |  |
| Receiving Storage Location | X |  |

| **Define Shipping Data for Plants** |
| --- |
| **Plant** | **Customer Number of Plant** | **Sales Org. ** | **Distribution Channel** | **Division** |
| 1480 | Jeddah | P1480 | 1000 | 20 | 00 |
| 1490 | Qassim Branch | P1490 | 1000 | 20 | 00 |
| 1500 | Riyadh | P1500 | 1000 | 20 | 00 |
| 1510 | Dammam | P1510 | 1000 | 20 | 00 |
| 1520 | Abha | P1520 | 1000 | 20 | 00 |
| 1530 | Madina | P1530 | 1000 | 20 | 00 |
| 1540 | Taef | P1540 | 1000 | 20 | 00 |
| 1550 | Bolgorashi | P1550 | 1000 | 20 | 00 |
| 1560 | Nagran | P1560 | 1000 | 20 | 00 |
| 1570 | Sakaka | P1570 | 1000 | 20 | 00 |
| 1580 | Tabuk | P1580 | 1000 | 20 | 00 |
| 1590 | Mekka | P1590 | 1000 | 20 | 00 |
| 1600 | Ehsaa | P1600 | 1000 | 20 | 00 |
| 1610 | Hafr elbatin | P1610 | 1000 | 20 | 00 |
| 1620 | Wadi addawaser | P1620 | 1000 | 20 | 00 |
| 1630 | Addawadmi | P1630 | 1000 | 20 | 00 |
| 1640 | Jizan | P1640 | 1000 | 20 | 00 |
| 1650 | Yanboa | P1650 | 1000 | 20 | 00 |
| 1660 | Hael | P1660 | 1000 | 20 | 00 |

| **Assign Delivery Type and Checking Rule** |
| --- |
| **Document Type** | **Supplying Plant** | **Delivery Type** |
| YRUD | 1480 | Jeddah | YNL2 |
| YRUD | 1490 | Qassim Branch | YNL2 |
| YRUD | 1500 | Riyadh | YNL2 |
| YRUD | 1510 | Dammam | YNL2 |
| YRUD | 1520 | Abha | YNL2 |
| YRUD | 1530 | Madina | YNL2 |
| YRUD | 1540 | Taef | YNL2 |
| YRUD | 1550 | Bolgorashi | YNL2 |
| YRUD | 1560 | Nagran | YNL2 |
| YRUD | 1570 | Sakaka | YNL2 |
| YRUD | 1580 | Tabuk | YNL2 |
| YRUD | 1590 | Mekka | YNL2 |
| YRUD | 1600 | Ehsaa | YNL2 |
| YRUD | 1610 | Hafr elbatin | YNL2 |
| YRUD | 1620 | Wadi addawaser | YNL2 |
| YRUD | 1630 | Addawadmi | YNL2 |
| YRUD | 1640 | jizan | YNL2 |
| YRUD | 1650 | Yanboa | YNL2 |
| YRUD | 1660 | Hael | YNL2 |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-110-01 | Form | STO Form | YMM_STO |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Role** | **Description** |
| 01 | YMM_STO_1010_YRUD | MM: Stock Transport Order Requester Returns Expired From Branches |

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
| Confidential | Page 3 of 8 |
# PP-260 Material Requirement Planning (MRP)

| PP-260: Material Requirement Planning (MRP) |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Guarantee Material availability & No stock shortage | S | H |
| 2 | Keep low inventory levels. | S | H |
| 3 | Plan purchasing & deliveries activates | S | H |

### Business Process Description

In this process, we make a weekly production plan considering the remaining planned independent requirement & remaining products stock.

The business process includes analysis, planning according to MRP logic, and evaluation of the planning results. Extensive planning steps such as material requirements planning usually run in the background, although they may also be planned manually.

- The main aim of MRP is to guarantee the material availability. It is used to produce or procure the requirement quantities on time for either internal production or external procurement.

- This process involves monitoring of stocks, in particular automatic creation of procurement proposals for purchasing and production.

- The MRP Component assists and relieves the MRP Controller in their area of responsibility. The MRP controller is responsible for specifying the type, quantity and time of requirements. In addition, he calculates when and for what quantity procurement proposals need to be created. The MRP controller defines suitable MRP type and lot sizing procedure for each material to determine the procurement proposals.

-  During MRP the system calculates the Net requirements calculation based on the formula.  

Plant stock - safety stock +receipts quantity - requirements quantity = Available stock

If this available stock is negative i.e. Available stock < requirements quantity

Then the system creates a procurement proposal for the shortage quantity.

- Then the system calculates the procurement quantity based on the lot sizing procedure.

- Then the system carries out scheduling to calculate the order start date and order finish date.

- Then the system calculates the type of procurement proposals.ie planned orders or purchase requisitions

- Then the system explodes the BOM and determines the dependent requirements.

| Process Characteristics |
| --- |
| Process Trigger | New day/week/month started |
| Process Input | Requirements/Receipts |
| Process Output | Purchase Requisition |
| Process Owner | MRP Controller |
| Process Volumes |  |
| Process Frequencies | Daily, Weekly, Monthly |

### Business Process Diagrams

- **Supply Chain Network**

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | New day/week/month started |  |  |  |  |
| 010 | Check that all old requirement & orders for procured materials are closed | MD04 | Monitor Stock/ Requirements List | Check that all old requirement & orders are closed (Ex. STO, Sales orders, PR, PO, reservations) or delivery date ort quantity are updated | MRP Controller |
| 020 | Run material requirement planning (MRP) | MD01 | - | Run material requirement planning (MRP) | MRP Controller |
| 030 | Evaluate MRP result | MD04 | Monitor Stock/ Requirements List | Evaluate MRP result for external procurement materials | MRP Controller |
| 040 | Convert planned orders to purchase requestions | MD04 MD14 MD15 MD16 MD19 | Convert Planned Orders | Convert planned orders to purchase requestions | MRP Controller |
| Output | Purchase Requisition |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 15 | MRP Controllers |

### Operational Decisions or Logic within the Process

- MRP classic will be used instead of MRP live because generating a planned order first before generating automatic purchase requisition is necessary to be reviewed from MRP controller first then convert it to purchase requisitions.

### Legal Considerations and Company-Specific Policies

	N/A

### Reference to Key Process Changes and Process KPIs

- The operation of filtering & cleaning corn should be handled in Yanbou hub by manufacturing execution process not write off process. 

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Stock level | Must be in between min. & max. predefined stock level | 90% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 1 | Purchase Requisition | MM-PUR |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

- All Plants

| **Material Type** | **MRP Code** | **MRP Controller Description** | **Further Processing** | **Processing** | **Feed Mill** | **Broiler** | **Hatchery** | **Grading Stations** | **Parent- Laying** | **Parent- Rearing** | **Layer- Laying** | **Layer-Rearing** | **Qassim Central** | **Agriculture** | **Yanbou Hub** | **Branches** |
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

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |

### System Configuration Considerations

| **Processing time required by purchasing department** |
| --- |
| Zero days, this time must be considered in the planned delivery time of the materials |

| **Start in Past** |
| --- |
| Checked in all plants |

| **MRP Group** | **Requirement** |
| --- | --- |
| Z1 | MRP Group Z1 makes production version issue storage location priority than material master. |

| **Error handling in the planning run** |
| --- |
| **Plants** | **Max. proposals** | **Substitute MRP controller/group for requirements planning** **Missing Parts MRP Controller** |
| Further Processing | 999 | 100 |
| Processing | 999 | 120 |
| Feed Mill | 999 | 150 |
| Broiler | 999 | 200 |
| Hatchery | 999 | 200 |
| Parent- Laying | 999 | 200 |
| Parent- Rearing | 999 | 200 |
| Layer- Laying | 999 | 200 |
| Layer-Rearing | 999 | 200 |
| Qassim Central | 999 | 500 |
| Agriculture | 999 | 160 |
| Yanbou Hub | 999 | 210 |
| Branches | 999 | 120 |

| **Conversion Planned order to Production order** |
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

| **Objects** | **Days supply** | **1st days supply** | **2nd days supply** |
| --- | --- | --- | --- |
| Plant stock minus safety stock defined in material master | X | X | X |
| Production ord./process order |  | X | X |
| Firmed plnnd ord. |  |  |  |
| Assigned planned orders |  |  |  |
| PO/SN/SL/DS |  | X | X |
| Shipping notif. |  | X | X |
| Frmed purch.requisition |  |  | X |
| QM InspLot |  | X | X |
| Receipt reservations |  |  | X |
| Safety Stock | X | X | X |

| **Lot Size** | **Comment** | **Comment** |
| --- | --- | --- |
| ZM | Monthly lot size  with Scheduling parameter: Planned order start date at period start and availability date at period end |  |
| Z4 | Four weeks lot size |  |
| ZD | Daily - with quota split | Copy from TB and add quota split flag |
| Z2 | Two  weeks lot size |  |
| Z3 | Three weeks lot size |  |
| Y2 | Two  Month lot size |  |
| Y3 | Three  Month lot size |  |

| **Special Procurement Code** | **Description** | **Plant** |
| --- | --- | --- |
| Z1 | Stock transfer from Qassim Central 1010 | 1480 1490 1500 1510 1520 1530 1540 1550 1560 1570 1580 1590 1600 1610 1620 1630 1640 1650 1660 1800 1840 1050 1100 1140 1150 1160 1170 1180 1190 1200 1210 1221 1222 1223 1224 1231 1232 1233 1234 1241 1242 1244 1250 1260 |
| Z2 | Stock transfer from FP 1050 | All DCs |
| Z3 | Stock transfer from Processing 1100 | 1050 1210 1231 1232 1233 1234 All DCs |
| Z4 | Stock transfer from Yanbou 1140 | 1150 1160 1170 1180 1190 |
| Z5 | Stock transfer from FM W1 1150 | 1200 1250 1260 |
| Z6 | Stock transfer from W2-FM3 1160 | 1200 |
| Z7 | Stock transfer from Wadi-FM4 1180 | 1231 1232 1233 1234 1241 1242 1244 |
| Y1 | Stock transfer from Broiler 1200 | 1100 |
| Y2 | Stock transfer from Hatchery 1210 | 1200 |
| Y3 | Stock transfer from P Laying Dulfa 1231 | 1221 1100 |
| Y4 | Stock transfer from P Laying Wadi 1232 | 1222 1100 |
| Y5 | Stock transfer from P Laying Kubid 1233 | 1223 1100 |
| Y6 | Stock transfer from P Laying Shery 1234 | 1224 1100 |
| Y7 | Stock transfer from C Laying 1250 | All DCs 1100 |
| Y8 | Stock transfer from C Rearing 1260 | 1250 |

| **Coverage Profile** | **Description** | **Plant** | **Period Indicator** | **Determine Average Req.** | **Target Range of Coverage in 1st Period** | **Target Range of Coverage in 2nd Period** | **Target Range of Coverage in rest of Period** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | **No. Of Period** | **Type of period length** |  |  |  |
| Z1 | 2 days ( from next 30 days) | 1150 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1160 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1170 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1180 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z1 | 2 days ( from next 30 days) | 1190 | K | 30 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1150 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1160 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1170 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1180 | W | 4 | Calendar days | 2 | 2 | 2 |
| Z2 | 4 Weeks | 1190 | W | 4 | Calendar days | 2 | 2 | 2 |

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | MRP Controller |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 7 of 11 |
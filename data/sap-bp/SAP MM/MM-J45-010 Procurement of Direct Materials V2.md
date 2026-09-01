# MM-J45-010 Procurement of Direct Materials V2

# MM-J45-010 Procurement of Direct Materials

## Process Description

Firstly, the Purchasing specialist monitor the new purchase requisitions that are generated either via the Material Requirements Planning (MRP) process or manually by a requester (MRP controller) on daily basis after revising the delivery dates and its Sources of supply.

Secondly, Some Materials supplied according to Contracts.

In this case, assigning source of supply is a mandatory step and the Purchase order creation will be with reference to the Purchase requisition.

The other case will initiate the process **MM-ZM2 Quotation for Procurement** from start point to end and the creation of the purchase order will be with reference to the selected Quotation 

After that the Purchasing Specialist Finalize the entry of the purchase order and save it to take the specified approval path according to the Poultry Policy, System must send an inbox message on the SAP inbox for Release of all POs by the first level “Division Head” there is seven Heads for this level :

- Strategic Items Division Head, 

- Services & Oils Division Head

- Sp. Parts & Assets Division Head

- General Items Division Head

- Projects Division Head

- Constructions Department Manager

- Asset Division Head

The second level is Department manager and the third and fourth level is the Vice President who approve only the POs more than or equal to 100000 SAR and the fifth level is CEO only the POs more than 500000.

After approval print out from the PO sent to the Supplier through mail from SAP, Hard copy and soft copies.

In case of rejecting the PO from the supplier, side the purchase order deleted and create a new one for another supplier

Purchasing Department start monitoring the PO, follow up with supplier, and enter the acknowledgement and confirmation with the actual quantities and delivery dates to the PO to help the planning department take the appropriate decision.

If there are expenses or delivery, cost updated at the PO conditions before the goods receipt step.

System must send an inbox message on the SAP inbox to the Buyer with the receipt confirmation. A request for quotation (RFQ) is an invitation extended to a vendor by a purchasing organization to submit a quotation (bid) for the supply of materials or performance of services.

In Purchasing, the RFQ and the quotation form a single document. Prices and conditions quoted by vendors are entered in the original RFQ. If you have issued an RFQ to several vendors, you can have the system determine the most favorable quotation submitted and automatically generate letters of rejection to the unsuccessful bidders. You can also store the prices and terms of delivery from certain quotations in an info record for future accessing.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Operate more efficiently and cost-effectively with streamlined procurement that brings more spend under management | S | H |
| 02 | Ensure highly automated procurement processes for direct materials | S | H |
| 03 | Document and Organize Watania Poultry Purchase Orders | S | H |
| 04 | Complete all the Production and MRP requirements in an organized and fast way | S | H |
| 05 | Simplify and fasten the Purchase Order creation and follow up Process | S | H |
| 06 | Document suppling conditions based on the type of shipping | S | H |
| 07 | Complete the release orders process systematically | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Requirement |
| **Process Input** | Released Purchase Requisition |
| **Process Output** | Released / Printed Purchase Order |
| **Process Owner** | Purchasing Groups |
| **Process Volumes** | 50 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** |  |
|  |  |  |  |  |  |  |  |  |  |
| 01 | Monitor Purchase requisitions | ME5A |  | Purchaser |
| 02 | Call Process **<****<**** ****MM-ZM2 Quotation for Procurement**** ****>****>** | Purchaser |
| 03 | Create Purchase order with reference to Purchase requisition or Quotation | ME21N |  | Purchaser |
| In Case Purchase Order Net Value Less Than or Equal 100,000 SAR |
| 04 | Release Purchase Order | ME28 ME29N |  | Division Head Department manager |
| In Case Purchase Order Net Value From 100,000 To 500,000 SAR |
| 05 | Release Purchase Order | ME28 ME29N |  | Division Head Department manager Vice President |
| In Case Purchase Order Net Value More Than 500,000 SAR |
| 06 | Release Purchase Order | ME28 |  | Division Head Department manager Vice President CEO |
| 07 | Output Purchase order | ME9F |  | Purchaser |
| 08 | Update Purchase order with vendor acknowledgements | ME22N |  | Purchaser |
| 09 | Goods Receipt of PO and System send GR message to Buyer | MIGO_GR |  | Stock Keeper |
| 10 | Close Purchase order either automatically or Manually if completed | ME22N |  | Purchaser |
|  |  |  |  |  |  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME2C | Purchase Orders by Material Group | X |  |
| 02 | ME2K | Purchase Orders by Account Assignment | X |  |
| 03 | ME2L | Purchase Orders by Vendor | X |  |
| 04 | ME2M | Purchase Orders by Material | X |  |
| 05 | ME2N | Purchase Orders by PO Number | X |  |
| 06 | ME80FN | General Evaluations | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 35 | Purchasing Groups |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Feed Additives suppliers must finalize all the required analysis before proceeding goods shipping. 

- Suppliers must send acknowledgment for the order with terms and conditions. 

- Local suppliers must send the original invoice and copy of the purchase order at the receiving time.

- Foreign Suppliers must send copy of the shipping documents before shipping to start issuing the authority import licenses

- Foreign Suppliers must send original of the shipping documents after issuing the bill of lading to clear the goods from the customs authority 

Any Purchase order print out must contain the terms conditions based on the origin (Local & foreign) of the Goods and the mean of transportation (sea or Air)

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected R****esult** |
| 01 | Purchase Order Items per Buyer | Number | Evaluated |
| 02 | Purchasing Spend Trend | Number | Evaluated |
| 03 | Purchase Requisition No Touch Rate | Number | Minimize |
| 04 | Purchase Requisition to Order Cycle Time | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistics Invoice Verification | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 007 | Workshop Pett.Cach |
| 008 | Constructions Cash |

| **Storage Locations ** | **Plants** |  |
| --- | --- | --- |
| **Code** | **Storage Location** | **Code** | **Plant** |  |
| Q003 | Grand Parent | 1010 | Qassim Central |  |
| Q006 | Expansion |  |  |  |
| Q007 | Stationary-Sund. |  |  |  |
| Q009 | Central Store ** |  |  |  |
| Q010 | Food Store |  |  |  |
| Q011 | Fuel S. Wat1 |  |  |  |
| Q012 | Fuel S. Wat2 |  |  |  |
| Q013 | Fuel S. Wadi |  |  |  |
| Q015 | Pharmacy |  |  |  |
| Q016 | Fixed Assets |  |  |  |
| Q019 | Medicine-Disinf. |  |  |  |
| Q020 | Maintenance |  |  |  |
| Q021 | Motor Pool 1 |  |  |  |
| Q022 | Motor Pool 2 |  |  |  |
| Q023 | Motor Pool 3 |  |  |  |
| Q024 | Tires |  |  |  |
| Q025 | Hiten. SParts W1 |  |  |  |
| Q026 | Hiten. SParts W2 |  |  |  |
| Q027 | Construction |  |  |  |
| Q028 | Batching-Concre. |  |  |  |
| Q030 | Manure Sp. Part |  |  |  |
| Q041 | Prod.Sectr Maint |  |  |  |
| 1842 | Agri. Raw Mat. | 1840 | Agri | Obsolete |
| 1843 | Agri. S Parts |  |  |  |
| 1141 | Raw Material | 1140 | Yanbu hub |  |
| 1143 | S Parts |  |  |  |
| 1121 | W1-Feed Add. | 1120 | Feed Mill |  |
| 1122 | W1-S.Parts |  |  |  |
| 1126 | W2-Feed Add. |  |  |  |
| 1127 | W2-S.Parts |  |  |  |
| 1131 | Wadi-Feed Add. |  |  |  |
| 1132 | Wadi-S.Parts |  |  |  |
| 1101 | Packing - Wat1 | 1100 | Processing |  |
| 1102 | S Parts - Wat1 |  |  |  |
| 1103 | Packing - Wat2 |  |  |  |
| 1104 | S Parts - Wat2 |  |  |  |
| 1053 | Packing | 1050 | Further Processing |  |
| 1054 | Spices |  |  |  |
| 1055 | S parts |  |  |  |
| 1211 | Hat Cent. SParts | 1210 | Hatchery |  |
| H003 | Hatchery 3 |  |  |  |
| H004 | Hatchery 4 |  |  |  |
| H005 | Hatchery 5 |  |  |  |
| H006 | Hatchery 6 |  |  |  |
| H007 | Hatchery 7 |  |  |  |
| H008 | Hatchery 8 |  |  |  |
| Y003 | S Parts - H3 |  |  |  |
| Y004 | S Parts - H4 |  |  |  |
| Y005 | S Parts - H5 |  |  |  |
| Y006 | S Parts - H6 |  |  |  |
| Y007 | S Parts - H7 |  |  |  |
| Y008 | S Parts - H8 |  |  |  |
| BCT1 | BCT S.Loc | 1200 | Broiler |  |
| M001 | C. Main. Store |  |  |  |
| PCT1 | PCT - Laying | 1231 | Parents - Laying - Dulfa | Obsolete |
| PCT1 | PCT - Laying | 1232 | Parents - Laying - Wadi | Obsolete |
| PCT1 | PCT - Laying | 1233 | Parents - Laying - Kubid | Obsolete |
| PCT1 | PCT - Laying | 1234 | Parents - Laying - Shery | Obsolete |
| PCT1 | PCT - Rearing | 1241 | Parents - Rearing - Dulfa | Obsolete |
| PCT1 | PCT - Rearing | 1242 | Parents - Rearing - Wadi | Obsolete |
| PCT1 | PCT - Rearing | 1244 | Parents - Rearing - Shery | Obsolete |
| LCT1 | LCT - Laying | 1250 | C Layer – Laying |  |
| 1253 | Packing | 1250 | C Layer – Laying |  |
| 1254 | Grading Station1 |  |  |  |
| 1255 | Grading Station2 |  |  |  |
| LL01 | Layer-Laying-F01 |  |  |  |
| LL02 | Layer-Laying-F02 |  |  |  |
| 0101 | LL01-01 |  |  |  |
| 0102 | LL01-02 |  |  |  |
| 0103 | LL01-03 |  |  |  |
| 0104 | LL01-04 |  |  |  |
| 0105 | LL01-05 |  |  |  |
| 0106 | LL01-06 |  |  |  |
| 0107 | LL01-07 |  |  |  |
| 0108 | LL01-08 |  |  |  |
| 0109 | LL01-09 |  |  |  |
| 0110 | LL01-10 |  |  |  |
| 0111 | LL01-11 |  |  |  |
| 0112 | LL01-12 |  |  |  |
| 0113 | LL01-13 |  |  |  |
| 0114 | LL01-14 |  |  |  |
| 0115 | LL01-15 |  |  |  |
| 0116 | LL01-16 |  |  |  |
| 0117 | LL01-17 |  |  |  |
| 0118 | LL01-18 |  |  |  |
| 0201 | LL02-01 |  |  |  |
| 0202 | LL02-02 |  |  |  |
| 0203 | LL02-03 |  |  |  |
| 0204 | LL02-04 |  |  |  |
| 0205 | LL02-05 |  |  |  |
| 0206 | LL02-06 |  |  |  |
| 0207 | LL02-07 |  |  |  |
| 0208 | LL02-08 |  |  |  |
| 0209 | LL02-09 |  |  |  |
| 0210 | LL02-10 |  |  |  |
| 0211 | LL02-11 |  |  |  |
| 0212 | LL02-12 |  |  |  |
| 0213 | LL02-13 |  |  |  |
| 0214 | LL02-14 |  |  |  |
| 0215 | LL02-15 |  |  |  |
| 0216 | LL02-16 |  |  |  |
| 0217 | LL02-17 |  |  |  |
| 0218 | LL02-18 |  |  |  |
| LR01 | Lyer-Rearing-F01 | 1260 | Layer - Rearing |  |
| LR02 | Lyer-Rearing-F02 |  |  |  |
| 0101 | LR01-01 |  |  |  |
| 0102 | LR01-02 |  |  |  |
| 0103 | LR01-03 |  |  |  |
| 0104 | LR01-04 |  |  |  |
| 0105 | LR01-05 |  |  |  |
| 0106 | LR01-06 |  |  |  |
| 0201 | LR02-01 |  |  |  |
| 0202 | LR02-02 |  |  |  |
| 0203 | LR02-03 |  |  |  |
| 0204 | LR02-04 |  |  |  |
| 0205 | LR02-05 |  |  |  |
| 0206 | LR02-06 |  |  |  |
| LR01 | Lyer-Rearing-F01 |  |  |  |
| LR02 | Lyer-Rearing-F02 |  |  |  |
| G001 | GP General Items | 3010 | GP - Central |  |
| G003 | GP Qassim |  |  |  |
| G004 | GP Common Feed |  |  |  |
| GH01 | GP Hatchery 1 |  |  |  |
| GL01 | GP Feed - Laying |  |  |  |
| GR01 | GP Feed - Rearin | 3100 | GP-Hatchery |  |
| GL01 | GP Feed - Laying | 3200 | GP-Parent-Laying |  |
| GR01 | GP Feed - Rearin | 3300 | GP-Parent-Rearing |  |
| Q021 | Heavy Equi-S.P. | 1310 | Fleet Central Workshop |  |
| Q022 | Light Trans-S.P. |  |  |  |
| Q023 | Heavy Trans-S.P. |  |  |  |
| Q024 | Tires |  |  |  |
| Q032 | EWS&Heavy M. S.P |  |  |  |
| Q061 | W/SHOP OIL WH |  |  |  |
| Q062 | AG/MACH OIL WH |  |  |  |
| Q021 | Heavy Equi-S.P. |  |  |  |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Business Partner (Supplier) |
| Conditions |
| Output messages conditions |
| Batch Management |

### System Configuration Considerations

| Purchase Order Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| Y001 | Foreign Purchase Order | YL |  |  |
| Y002 | Local Purchase Order | YF |  |  |
| YZ01 | Live Operation Pur. Order | YV |  |  |

| Purchase Orders Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| YL | 4500000000 | 4599999999 | Internal | 010 |
| YF | 4400000000 | 4499999999 | Internal | 010 |
| YV | 4300000000 | 4399999999 | Internal | 010 |

| Purchase Order Release Strategy Class |
| --- |
| ID | Description |
| Y_PO_RELEASE | Poultry PO Release at Header Level |

| Release Groups |
| --- |
| ID | Description |
| A1 | Poultry PO Release |

| Purchase Order Release Strategy Characteristics |
| --- |
| ID | Description |
| Y_PURCH_ORD_VALUE | PO Total net order value |
| Y_PURCH_GRP | PO Purchasing Group |
| Y_PURCH_ORD_TYPE | Order Type (Purchasing) |
| Y_PUR_DOC_CATEG | Purchasing document category |

| **Release  Characteristics** |
| --- |
| **Characteristics** | **Value** |
| **ID** | **Description** | **ID** | **Description** |
| Y_PURCH_ORD_TYPE | Order Type (Purchasing) | Y002 | Local Purchase Orders |
|  |  | Y001 | Foreign Purchase Orders |
|  |  | YLP1 | Planner Managd Sched |
|  |  | YLP2 | Purchaser Mngd Sched |
|  |  | YZ01 | Live Operation Order |
|  |  | Y0PS | Projects Purchase Orders |
|  |  | YUD | STO With Delivery |
|  |  | Y0UB | STO Without Delivery |
|  |  | YRUD | Returns STO Expired |
|  |  | YRUC | Returns STO |
|  |  | ZZ02 | PHD STO |
| Y_PURCH_GRP | Purchasing Group | 001 | Strategic Items |
|  |  | 002 | Services & Project |
|  |  | 003 | Spare Parts |
|  |  | 004 | Assets |
|  |  | 005 | General Items |
|  |  | 006 | Projects |
|  |  | 008 | Constructions Cash |
|  |  | YL1 | Live operations department |
|  |  | 888 | STO Without Dlv. |
|  |  | 999 | Branches STO Group |
|  |  | YF1 | Feed Mill group |
|  |  | YL4 | Cleaning Team |
|  |  | YL2 | PHD |
| Y_PURCH_ORD_VALUE | Total net order value X | 01 | 0 < X < 100000 |
|  |  | 02 | 100000 <= X <1000000 |
|  |  | 03 | 100000 <= X <5000000 |
|  |  | 04 | X >=5000000 |
|  |  | 05 | X > 50000.00 SAR |
|  |  | 06 | <= 50000.00 SAR |
| Y_PUR_DOC_CATEG | Purchasing document category | A | Request for quotation |
|  |  | B | Purchase requisition |
|  |  | F | Purchase order |
|  |  | I | Info record |
|  |  | K | Contract |
|  |  | L | Scheduling agreement |
|  |  | Q | Service entry sheet |
|  |  | W | Source list |
|  |  | S | Simplified service entry sheet |
|  |  | R | Bid Invitation |
|  |  | O | Quotation |

| Purchase Order Release Codes |
| --- |
| ID | Description | Release Group | User Name |
| D1 | Strategic Items Division Head | A1 | Brahim Alrajeh |
| D2 | Services & Oils Division Head | A1 | Wael Hammad |
| D3 | Sp. Parts & Assets Division Head | A1 | Mansour Almansour |
| D4 | General Items Division Head | A1 | Ali AL Rajhi |
| D6 | Projects Div HD | A1 | Abduldaim Mahdy |
| D7 | Constructions DepMgr | A1 | Tammam Nasif |
| DM | Department Manager | A1 | Abdulaziz.Monem |
| VP | Vice President | A1 | Fahd Al-Majid |
| CE | CEO | A1 | Mohammed Abu Hemid |

| **PO Release Strategy** |
| --- |
| **Strategy** | **Rel Group** | **Release Characteristic** | **Release Characteristic** | **Release Characteristic** | **Release  Codes** |
|  | **Code** | **Description** | **Order Type** | **Net order value** | **Purchasing Group** |  |
| P1 | Strategic Items Rel< | A1 | Poultry PO Release | YLO,YFO | 0 < X < 100000 | 001 | D1,DM |
| P2 | Services&Project Re< | A1 | Poultry PO Release | YLO,YFO | 0 < X < 100000 | 002 | D2,DM |
| P3 | Spare Parts Release< | A1 | Poultry PO Release | YLO,YFO | 0 < X < 100000 | 003 | D3,DM |
| P4 | Assets order Releas< | A1 | Poultry PO Release | YLO,YFO | 0 < X < 100000 | 004 | D3,DM |
| P5 | General Items Relea< | A1 | Poultry PO Release | YLO,YFO | 0 < X < 100000 | 005 | D4,DM |
| P6 | Strategic Items Re<> | A1 | Poultry PO Release | YLO,YFO | 100000 <= X <1000000 | 001 | D1,DM,VP |
| P7 | Services&Project R<> | A1 | Poultry PO Release | YLO,YFO | 100000 <= X <1000000 | 002 | D1,DM,VP |
| P8 | Spare Parts Releas<> | A1 | Poultry PO Release | YLO,YFO | 100000 <= X <1000000 | 003 | D1,DM,VP |
| P9 | Assets order Relea<> | A1 | Poultry PO Release | YLO,YFO | 100000 <= X <1000000 | 004 | D1,DM,VP |
| Q1 | General Items Rele<> | A1 | Poultry PO Release | YLO,YFO | 100000 <= X <1000000 | 005 | D1,DM,VP |
| Q2 | Strategic Items Rel> | A1 | Poultry PO Release | YLO,YFO | X >=1000000 | 001 | D1,DM,VP,CE |
| Q3 | Services&Project Re> | A1 | Poultry PO Release | YLO,YFO | X >=1000000 | 002 | D1,DM,VP,CE |
| Q4 | Spare Parts Release> | A1 | Poultry PO Release | YLO,YFO | X >=1000000 | 003 | D1,DM,VP,CE |
| Q5 | Assets order Releas> | A1 | Poultry PO Release | YLO,YFO | X >=1000000 | 004 | D1,DM,VP,CE |
| Q6 | General Items Relea> | A1 | Poultry PO Release | YLO,YFO | X >=1000000 | 005 | D1,DM,VP,CE |

| Purchase Order Output Types |
| --- |
| ID | Description | Form | Program | Form Routine |
| YFO | Foreign Purch. order | YPO | SAPFM06P | ADOBE_ENTRY_NEU |
| YLO | Local Purchase order | YMEDRUCK_PO_LOCAL | SAPFM06P | ADOBE_ENTRY_NEU |
| YLO2 | Arabic Purchase Ord. | YPO_LOCAL | SAPFM06P | ADOBE_ENTRY_NEU |

| Condition Type |
| --- |
| Condition | Calculation type | Condition Category | Plus/Minus | Header | Item | Schema Group |
| Code | Description | Quantity | Percentage | Value | Delivery Cost | Not |  |  |  | Local | Foreign |
| Y001 | Discount Amount |  |  | X |  | X | - | X | X | X | X |
| Y002 | Discount % |  | X |  |  | X | - | X | X | X | X |
| Y003 | Freight Amount |  |  | X | X |  | + | X | X | X | X |
| Y004 | Documentation |  |  | X | X |  | + | X | X |  | X |
| Y005 | Clache Amount |  |  | X | X |  | + | X |  | X | X |
| Y006 | Handling |  |  | X | X |  | + |  | X | X | X |
| Y007 | Clearance |  |  | X | X |  | + |  | X |  | X |
| Y008 | Landing |  |  | X | X |  | + |  | X |  | X |
| Y009 | Demurrage |  |  | X | X |  | + |  | X |  | X |
| Y010 | Transport |  |  | X | X |  | + |  | X |  | X |
| Y011 | Custom Due |  |  | X | X |  | + |  | X |  | X |
| Y012 | Bank expenses |  |  | X | X |  | + |  | X | X | X |
| Y013 | مرابحة |  |  | X | X |  | + |  | X |  | X |
| Y014 | insurance |  |  | X | X |  | + |  | X |  | X |
| Y015 | Port charges |  |  | X | X |  | + |  | X |  | X |
| Y016 | Unloading expenses |  |  | X | X |  | + |  | X |  | X |
| Y017 | Analysis expenses |  |  | X | X |  | + |  | X |  | X |
| Y018 | Steaming expenses |  |  | X | X |  | + |  | X |  | X |
| Y019 | Mansur Almusaeid |  |  | X | X |  | + |  | X |  | X |
| Y020 | مصاريف نثريه |  |  | X | X |  | + |  | X |  | X |
| Y021 | Agricultural fine |  |  | X | X |  | + |  | X |  | X |
| Y022 | Discount Item VLU |  |  | X |  |  | - |  | X | X | X |
| Y023 | Discount Item % |  | X |  |  |  | - |  | X | X | X |
| Y024 | Subsidies | X |  |  |  | X | - |  | X | X | X |
| Y025 | Discount Item Qty | X |  |  |  |  | - |  | X | X | X |

| Calculation Schemas |
| --- |
| Local Schema (Y00001) |
| Step | Counter | Condition Type | From | To | Subtotal |
| 10 | 0 | PB00 | Gross Price |  |  |  |  |
| 10 | 1 | PBXX | Gross Price |  |  |  |  |
| 20 | 1 | Y002 | Discount Header % |  |  |  |  |
| 20 | 4 | Y001 | Discount Header VLU |  |  |  |  |
| 20 | 5 | Y023 | Discount Item % |  |  |  |  |
| 20 | 10 | Y022 | Discount Item VLU |  |  |  |  |
| 20 | 15 | Y025 | Discount Item Qty |  |  |  |  |
| 22 | 10 | Y024 | Subsidies |  |  |  |  |
| 30 | 0 |  | Net Amount After Discount | السعر بعد الخصم | 10 | 30 | X |
| 40 | 10 | Y005 | Clache Amount | قيمة الكلاشية - التصميم | 30 |  |  |
| 50 | 20 | Y003 | Freight Amount | قيمة الشحن | 30 |  |  |
| 60 | 30 | Y006 | Handling Cost | مصاريف التنزيل | 30 |  |  |
| 60 | 31 | Y014 | Insurance |  | 30 |  |  |
| 70 | 0 |  | Expenses | اجمالي المصروفات | 40 | 60 | X |
| 80 | 0 |  | Total Amount Before VAT | قيمة الطلبية الاجمالي | 30 | 69 |  |
| 90 | 1 | MWVS | Input tax manually |  | 80 |  |  |
| 100 | 0 |  | Total Amount After VAT |  | 80 | 99 |  |
| 110 | 10 | RA01 | Discount % on Gross |  |  |  |  |

| Calculation Schemas |
| --- |
| Foreign Schema (Y00002) |
| Step | Counter | Condition Type | From | To | Subtotal |
| 10 | 0 | PB00 | Gross Price |  |  |  |  |
| 10 | 1 | PBXX | Gross Price |  |  |  |  |
| 20 | 1 | Y002 | Discount Header % |  |  |  |  |
| 20 | 4 | Y001 | Discount Header VLU |  |  |  |  |
| 20 | 5 | Y023 | Discount Item % |  |  |  |  |
| 20 | 10 | Y022 | Discount Item VLU |  |  |  |  |
| 20 | 15 | Y025 | Discount Item Qty |  |  |  |  |
| 22 | 10 | Y024 | Subsidies |  |  |  |  |
| 30 | 0 |  | Net Amount After Discount |  | 10 | 30 | X |
| 40 | 10 | Y003 | Freight Amount | قيمة الشحن | 30 |  |  |
| 50 | 20 | Y004 | Documentation |  |  |  |  |
| 60 | 30 | Y005 | Clache Amount | قيمة الكلاشية - التصميم | 30 |  |  |
| 70 | 0 | Y006 | Handling Cost | مصاريف التنزيل | 30 |  |  |
| 80 | 0 | Y007 | Clearance |  |  |  |  |
| 120 | 0 | Y011 | Custom Due |  |  |  |  |
| 122 | 10 | Y012 | Bank Expenses |  |  |  |  |
| 124 | 10 | Y013 | Murabaha |  |  |  |  |
| 126 | 10 | Y014 | Insurance |  | 30 |  |  |
| 128 | 10 | Y015 | Port Charges |  |  |  |  |
| 130 | 10 | Y016 | Unloading Expenses |  |  |  |  |
| 200 | 0 |  | Expenses |  | 40 | 130 | X |
| 210 | 0 |  | Total Amount |  | 30 | 140 |  |
| 220 | 10 | RA01 | Discount % on Gross |  | 0 | 0 |  |

### Account Determination

| Define Transaction/Event Keys |
| --- |
| Key | Description |
| Y03 | Freight Amount |
| Y04 | Documentation |
| Y05 | Clache Amount |
| Y06 | Handling Cost |
| Y07 | Clearance |
| Y08 | Landing |
| Y09 | Demurrage |
| Y10 | Transport |
| Y11 | Custom Due |
| Y12 | Bank expenses |
| Y13 | مرابحة |
| Y14 | insurance |
| Y15 | Port charges |
| Y16 | Unloading expenses |
| Y17 | Analysis expenses |
| Y18 | Steaming expenses |
| Y19 | Mansur Almusaeid |
| Y20 | مصاريف نثريه |
| Y21 | Agricultural fine |

| Assign Transaction/Event Keys to Condition Type |
| --- |
| Account Key | Description | Condition Type |
| Y003 | Freight Amount | Y03 |
| Y004 | Documentation | Y04 |
| Y005 | Clache Amount | Y05 |
| Y006 | Handling Cost | Y06 |
| Y007 | Clearance | Y07 |
| Y008 | Landing | Y08 |
| Y009 | Demurrage | Y09 |
| Y010 | Transport | Y10 |
| Y011 | Custom Due | Y11 |
| Y012 | Bank expenses | Y12 |
| Y013 | مرابحة | Y13 |
| Y014 | insurance | Y14 |
| Y015 | Port charges | Y15 |
| Y016 | Unloading expenses | Y16 |
| Y017 | Analysis expenses | Y17 |
| Y018 | Steaming expenses | Y18 |
| Y019 | Mansur Almusaeid | Y19 |
| Y020 | مصاريف نثريه | Y20 |
| Y021 | Agricultural fine | Y21 |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| WRICEFID | TYPE | Description | Item Code |
| F-MM-J45-001 | Form | Foreign Purchase order | YPO |
| F-MM-J45-002 | Form | Local Purchase order | YMEDRUCK_PO_LOCAL |
| F-MM-J45-002 | Form | Local Purchase order | YPO_LOCAL |
| R_MM-150 | Report | Corn and Soya Subsides | YMM016 |
| R_MM-220 | Report | Delayed Days of Delivery of PO | YPO_INFO |
| R_MM-270 | Report | Return to Supplier Items | YMM031 |
| R_MM-280 | Report | Open Purchase Orders | YOPENPO |
| R_MM-380 | Report | link the PO and the PR to list the requisitioner and recipient | YMM022 |
| R_MM-350 | Report | Last Purchase Order Price | YMM035 |
| R_MM-460 | Report | Saving Report | YMM017 |
| R_MM-440 | Report | link PO with purchase requisitions and the requisitioner | YMM042 |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PO_REL_001_D1 | MM: Purchase Order Strategic items Division Head Release | Release Code |
| YMM_PO_REL_002_D2 | MM: Purchase Order Services & Project  Division Head Release | Release Code |
| YMM_PO_REL_003_D3 | MM: Purchase Order Spare Parts Division Head Release | Release Code |
| YMM_PO_REL_004_DA | MM: Purchase Order Asset Division Head Release | Release Code |
| YMM_PO_REL_005_D4 | MM: Purchase Order General Items Division Head Release | Release Code |
| YMM_PO_REL_ALL_CE | MM: Purchase Order CEO  Release | Release Code |
| YMM_PO_REL_ALL_DM | MM: Purchase Order Department Manager Release | Release Code |
| YMM_PO_REL_ALL_VP | MM: Purchase Order Vice President Release | Release Code |
| YMM_PO_REL_YL1_L1 | MM: Purchase Order Production Sector MRP Controller Live | Release Code |
| YMM_PO_REL_YL1_L2 | MM: Purchase Order Production Sector Production V.P | Release Code |
| YMM_PO_ALL_001 | MM: Purchase Order Processing Strategic items | As Roles Sheet |
| YMM_PO_ALL_002 | MM: Purchase Order Processing Services & Project | As Roles Sheet |
| YMM_PO_ALL_003 | MM: Purchase Order Processing Spare Parts | As Roles Sheet |
| YMM_PO_ALL_004 | MM: Purchase Order Processing Assets | As Roles Sheet |
| YMM_PO_ALL_005 | MM: Purchase Order Processing General Items | As Roles Sheet |
| YMM_PO_ALL_007 | MM: Purchase Order Processing Workshop Petty Cach | As Roles Sheet |
| YMM_PO_REPORT_1140_WO_PRICE | MM: Purchase order Reports Yanbu Local And Foreign Without Display Prices | As Roles Sheet |
| YMM_PO_REPORT_ALL_001 | MM: Purchase order Reports All Plants With Prices Strategic | As Roles Sheet |
| YMM_PO_REPORT_ALL_002 | MM: Purchase order Reports All Plants With Prices Services & Project | As Roles Sheet |
| YMM_PO_REPORT_ALL_003 | MM: Purchase order Reports All Plants With Prices Spare Parts | As Roles Sheet |
| YMM_PO_REPORT_ALL_004 | MM: Purchase order Reports All Plants With Prices Spare Parts | As Roles Sheet |
| YMM_PO_REPORT_ALL_005 | MM: Purchase order Reports All Plants With Prices General Items | As Roles Sheet |
| YMM_PO_REPORT_ALL_007 | MM: Purchase order Reports All Plants With Prices For Workshop Petty Cach | As Roles Sheet |
| YMM_PO_REPORT_ALL_007_NO_PRICE | MM: Purchase order Reports All Plants With Prices For Workshop Petty Cach | As Roles Sheet |
| YMM_PO_REPORT_ALL_W_PRICE | MM: Purchase order Reports All Plants Local And Foreign With Prices Displayed | As Roles Sheet |
| YMM_PO_REPORT_ALL_WO_PRICE | MM: Purchase order Reports All Plants Local And Foreign Without Display Prices | As Roles Sheet |
| YMM_PO_REPORT_ALL_YZ01 | MM: Purchase order Reports Live Operation Without Display Prices | As Roles Sheet |
| YMM_PO_YZ01_YL1 | MM: Purchase Order Processing Live Operation - Production Sector | As Roles Sheet |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Purchaser Of Direct Material | Key User |
| Purchasing Division Head | Key User |
| Department Manager | Key User |
| Procurement Vice President | Key User |

In the end user training, we should collect different Purchasers and purchasing managers to groups and repeat the training for every group.

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 14 of 18 |
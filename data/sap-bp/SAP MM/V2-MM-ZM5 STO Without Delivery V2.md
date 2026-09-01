# V2-MM-ZM5 STO Without Delivery V2

# stock transport order Without Delivery 

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
| **Process Volumes** | 20 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

|  | **Process Steps Description**** ** |
| --- | --- |
| **ID** | **Process Step Description** | **Execution** |  | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **STO Requester** | **Issuing **** ****Stock**** Keeper** | **Receiving  Stock**** Keeper** |
|  |  |  |  |  |  |  |
| 01 | Create Stock transport Order | ME21N |  | R |  |  |
| 02 | STO Goods Issue | MIGO_GI |  |  | R |  |
| 03 | Monitor Stock in transit | MB5T MB5TD |  |  | R | R |
| 04 | Receive STO | MIGO_GR |  |  |  | R |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 03 | MMBE | Stock Overview | X |  |
| 05 | MB5T | Stock in transit CC | X |  |
| 06 | ME2W | Purchase Orders for Supplying Plant | X |  |
| 07 | MB51 | Material Document List | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 11 | Inventory and production Key users |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Stock in transit Empty Weekly | Close period Open items | Small or Zero |
| 02 | Quantities Equality Issued Quantity = Received Quantity | Number of STOs at the in transit report | 100% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Inventory Management | MM-IM |
| 02 | Purchasing | MM-PUR |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| E01 | Layer-Laying-F01 |
| E02 | Layer-Laying-F02 |
| H03 | Hatchery3 |
| H04 | Hatchery4 |
| H05 | Hatchery5 |
| H06 | Hatchery6 |
| H07 | Hatchery7 |
| H08 | Hatchery8 |
| L01 | Layer-Rearing-F01 |
| L02 | Layer-Rearing-F02 |
| YF1 | Feed Mill group |
| YL2 | PHD |
| 888 | STO Without Dlv. |
| YL1 | Live Operation Dep |
| B01 | B-Butn8-01 |
| B02 | B-Butn8-11 |
| B03 | B-Butn8-02 |
| B04 | B-Butn8-03 |
| B05 | B-Butn8-04 |
| B06 | B-Butn8-10 |
| B07 | B-Butn8-09 |
| B08 | B-Butn8-08 |
| B09 | B-Butn8-05 |
| B10 | B-Butn8-06 |
| B11 | B-Butn8-07 |
| B12 | B-Butn9-01 |
| B13 | B-Butn9-02 |
| B14 | B-Butn9-03 |
| B15 | B-Butn9-04 |
| B16 | B-Butn9-05 |
| B17 | B-Butn1-01 |
| B18 | B-Butn1-02 |
| B19 | B-Butn1-08 |
| B20 | B-Butn1-03 |
| B21 | B-Butn1-04 |
| B22 | B-Butn1-05 |
| B23 | B-Butn1-06 |
| B24 | B-Butn1-07 |
| B25 | B-AP-01 |
| B26 | B-AP-02 |
| B27 | B-W1-Big-01 |
| B28 | B-W1-Big-02 |
| B29 | B-W1-Big-03 |
| B30 | B-W1-Big-04 |
| B31 | B-W1-Big-05 |
| B32 | B-W1-Big-06 |
| B33 | B-W1-Big-07 |
| B34 | B-W1-Big-08 |
| B35 | B-W1-Big-09 |
| B36 | B-W1-Big-10 |
| B37 | B-W1-Big-11 |
| B38 | B-W1-Big-12 |
| B39 | B-W1-Exp.-01 |
| B40 | B-W1-Mini-05 |
| B41 | B-W1-Mini-01 |
| B42 | B-W1-Mini-02 |
| B43 | B-W1-Mini-03 |
| B44 | B-W1-Mini-04 |
| B45 | B-W1-Mini-08 |
| B46 | B-W1-Mini-09 |
| B47 | B-W1-Mini-10 |
| B48 | B-W1-Mini-11 |
| B49 | B-W1-Mini-12 |
| B50 | B-W1-Mini-13 |
| B51 | B-W1-Mini-14 |
| B52 | B-W1-Mini-15 |
| B53 | B-Butn11-01 |
| B54 | B-Butn11-02 |
| B55 | B-Butn11-03 |
| B56 | B-Butn5-01 |
| B57 | B-Butn5-02 |
| B58 | B-W2-P1-04 |
| B59 | B-W2-P1-03 |
| B60 | B-W2-P1-02 |
| B61 | B-W2-P1-01 |
| B62 | B-W2-P1-05 |
| B63 | B-W2-P1-06 |
| B64 | B-W2-P1-10 |
| B65 | B-W2-P1-07 |
| B66 | B-W2-P1-08 |
| B67 | B-W2-P1-09 |
| B68 | B-W2-P1-11 |
| B69 | B-W2-P1-12 |
| B70 | B-W2-P3-13 |
| B71 | B-W2-P3-14 |
| B72 | B-W2-P3-22 |
| B73 | B-W2-P3-24 |
| B74 | B-W2-P3-26 |
| B75 | B-W2-P3-25 |
| B76 | B-W2-P3-23 |
| B77 | B-W2-P3-21 |
| B78 | B-W2-P2-16 |
| B79 | B-W2-P2-15 |
| B80 | B-W2-P2-17 |
| B81 | B-W2-P2-18 |
| B82 | B-W2-P2-20 |
| B83 | B-W2-P2-19 |
| B84 | B-Butn2-03 |
| B85 | B-Butn2-04 |
| B86 | B-Butn2-02 |
| B87 | B-Butn2-01 |
| B88 | B-Butn3-04 |
| B89 | B-Butn3-01 |
| B90 | B-Butn3-03 |
| B91 | B-Butn3-02 |
| B92 | B-Shmalia-01 |
| B93 | B-Shmalia-02 |
| B94 | B-Shmalia-03 |
| G01 | GP-Laying-F01 |
| G02 | GP-Laying-F02 |
| G03 | GP-Laying-F03 |
| G04 | GP-Laying-F04 |
| G05 | GP-Laying-F05 |
| G06 | GP-Laying-F06 |
| G07 | GP-Laying-F07 |
| G08 | GP-Laying-F08 |
| M01 | GP-Rearing-F01 |
| M02 | GP-Rearing-F02 |
| M03 | GP-Rearing-F03 |
| M04 | GP-Rearing-F04 |
| P01 | PL-Dulfa-F01 |
| P02 | PL-Dulfa-F02 |
| P03 | PL-Dulfa-F03 |
| P04 | PL-Dulfa-F04 |
| P05 | PL-Dulfa-F05 |
| P06 | PL-Dulfa-F06 |
| P07 | PL-Dulfa-F07 |
| P08 | PL-Dulfa-F08 |
| P09 | PL-Kubid-F07 |
| P10 | PL-Kubid-F08 |
| P11 | PL-Kubid-F09 |
| P12 | PL-Kubid-F10 |
| P13 | PL-Kubid-F11 |
| P14 | PL-Kubid-F12 |
| P15 | PL-Kubid-F13 |
| P16 | PL-Kubid-F14 |
| P17 | PL-Kubid-F15 |
| P18 | PL-Kubid-F16 |
| P19 | PL-Kubid-F17 |
| P20 | PL-Kubid-F18 |
| P21 | PL-Kubid-F19 |
| P22 | PL-Kubid-F20 |
| P23 | PL-Kubid-F21 |
| P24 | PL-Kubid-F22 |
| P25 | PL-Kubid-F23 |
| P26 | PL-Wadi-F01 |
| P27 | PL-Wadi-F02 |
| P28 | PL-Wadi-F03 |
| P29 | PL-Wadi-F04 |
| P30 | PL-Wadi-F05 |
| P31 | PL-Wadi-F06 |
| P32 | PL-Wadi-F07 |
| P33 | PL-Wadi-F08 |
| P34 | PL-Wadi-F09 |
| P35 | PL-Wadi-F10 |
| P36 | PL-Wadi-F11 |
| P37 | PL-Sheri-F01 |
| P38 | PL-Sheri-F02 |
| P39 | PL-Sheri-F03 |
| P40 | PL-Sheri-F04 |
| P41 | PL-Sheri-F05 |
| P42 | PL-Sheri-F06 |
| P43 | PL-Sheri-F07 |
| P44 | PL-Sheri-F08 |
| P45 | PL-Sheri-F09 |
| P46 | PL-Sheri-F10 |
| P47 | PL-Sheri-F11 |
| P48 | PL-Sheri-F12 |
| P49 | PL-Sheri-F13 |
| P50 | PL-Dulfa-F09 |
| R01 | PR-Dulfa-F01 |
| R02 | PR-Dulfa-F02 |
| R03 | PR-Dulfa-F03 |
| R04 | PR-Dulfa-F04 |
| R05 | PR-Wadi-F01 |
| R06 | PR-Wadi-F02 |
| R07 | PR-Wadi-F03 |
| R08 | PR-Wadi-F04 |
| R09 | PR-Wadi-F05 |
| R10 | PR-Wadi-F06 |
| R11 | PR-Wadi-F07 |
| R12 | PR-Sheri-F01 |
| R13 | PR-Sheri-F02 |
| R14 | PR-Sheri-F03 |
| R15 | PR-Sheri-F04 |
| R16 | PR-Sheri-F05 |
| R17 | PR-Sheri-F06 |
| R18 | PR-Sheri-F07 |
| R19 | PR-Sheri-F08 |
| R20 | PR-Sheri-F09 |
| R21 | PR-Sheri-F10 |
| R22 | PR-Sheri-F11 |
| R23 | PR-Sheri-F12 |

	

| **Plant** |
| --- |
| 1010 | Qassim Central |  |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1120 | Feed Mill |  |
| 1140 | Yanbu Grain Hub |  |
| 1150 | Feed Mill Watania1 | Obsolete |
| 1160 | Feed Mill Watania2 - FM3 | Obsolete |
| 1170 | Feed Mill Watania2 - FM6 | Obsolete |
| 1180 | Feed Mill Wadi FM4 | Obsolete |
| 1190 | Feed Mill Wadi FM5 | Obsolete |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1220 | Parents - Laying |  |
| 1221 | Grading Station - Dulfa | Obsolete |
| 1222 | Grading Station - Wadi | Obsolete |
| 1223 | Grading Station - Kubid | Obsolete |
| 1224 | Grading Station - Shery | Obsolete |
| 1230 | Parents - Rearing |  |
| 1231 | Parents - Laying - Dulfa | Obsolete |
| 1232 | Parents - Laying - Wadi | Obsolete |
| 1233 | Parents - Laying - Kubid | Obsolete |
| 1234 | Parents - Laying - Shery | Obsolete |
| 1241 | Parents - Rearing - Dulfa | Obsolete |
| 1242 | Parents - Rearing - Wadi | Obsolete |
| 1244 | Parents - Rearing - Shery | Obsolete |
| 1250 | C Layer - Laying |  |
| 1260 | C Layer - Rearing |  |
| 1310 | Fleet Central Workshop |  |
| 1410 | Live Operation Maintenance |  |
| 1800 | Qassim Export | Obsolete |
| 1840 | Qassim Agri. | Obsolete |
| 2100 | Transportation | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Laying |  |
| 3300 | GP-Rearing |  |
| 4100 | Qassim Agri. |  |

Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Batch Management |

### System Configuration Considerations

- Activate Stock Transfer between Storage Locations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| Y0UB | STO Without Delivery | 8800000000 | 8899999999 | 10 |
| ZZ01 | STO W/O Delivery 2 | 7700000000 | 7799999999 | 10 |
| ZZ02 | PHD STO | 7700000000 | 7799999999 | 10 |
| ZZ04 | Live Operation STO | 7700000000 | 7799999999 | 10 |

| STO Release Strategy Characteristics |
| --- |
| ID | Description |
| Y_PURCH_ORD_TYPE | Order Type (Purchasing) |

| Purchase Order Release Codes |
| --- |
| ID | Description | Release Group | User Name |
| P2 | PHD Manager |  |  |

| **Field Selection** |
| --- |
| **Field** | **Mandatory** | **Optional ** |
| Suppling Plant | X |  |
| Issuing Storage Location | X |  |
| Receiving Plant | X |  |
| Receiving Storage Location | X |  |

## Technical/Development Related Items

| **Area** | **Availability Check ** | **Checking Rule** | **Stock Overview** | **In/outward movements** | **Checking Control** |
| --- | --- | --- | --- | --- | --- |
| STO Without Delivery | Y2 | Z1 | Include Safety stock | Include reservation Include Sales Reqmts With Delivery Note |  |

	

	

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-110-01 | Form | STO Form | YMM_STO |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_STO_REPORT_ALL | MM: Stock Transport Order Reports All Types All Plants | At Roles Sheet |
| YMM_STO_1050_ZZ01 | MM: Stock Transport Order Requester FP W/o Delivery2 | At Roles Sheet |
| YMM_STO_1120_ZZ01 | MM: Stock Transport Order Requester FP W/o Delivery2 Feed Mill | At Roles Sheet |
| YMM_STO_1210_ZZ04_H03 | MM: Stock Transport Order Requester Hatchery Live Operation H03 | At Roles Sheet |
| YMM_STO_1210_ZZ04_H04 | MM: Stock Transport Order Requester Hatchery Live Operation H04 | At Roles Sheet |
| YMM_STO_1210_ZZ04_H05 | MM: Stock Transport Order Requester Hatchery Live Operation H05 | At Roles Sheet |
| YMM_STO_1210_ZZ04_H06 | MM: Stock Transport Order Requester Hatchery Live Operation H06 | At Roles Sheet |
| YMM_STO_1210_ZZ04_H07 | MM: Stock Transport Order Requester Hatchery Live Operation H07 | At Roles Sheet |
| YMM_STO_1210_ZZ04_H08 | MM: Stock Transport Order Requester Hatchery Live Operation H08 | At Roles Sheet |
| YMM_STO_1250_Y0UB_888 | MM: Stock Transport Order Requester Transfer To C Layer - Laying | At Roles Sheet |
| YMM_STO_1250_ZZ02_YL2 | MM: Stock Transport Order Requester C Layer - Laying PHD | At Roles Sheet |
| YMM_STO_1250_ZZ04_E01 | MM: Stock Transport Order Requester C Layer - Laying - Farm 01 | At Roles Sheet |
| YMM_STO_1250_ZZ04_E02 | MM: Stock Transport Order Requester C Layer - Laying - Farm 02 | At Roles Sheet |
| YMM_STO_1260_ZZ02_YL2 | MM: Stock Transport Order Requester C Layer - Rearing - PHD | At Roles Sheet |
| YMM_STO_1260_ZZ04_L01 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 01 | At Roles Sheet |
| YMM_STO_1260_ZZ04_L02 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 02 | At Roles Sheet |
| YMM_STO_3010_Y0UB | MM: Stock Transport Order Requester Transfer To GP Central | At Roles Sheet |
| YMM_STO_3010_ZZ04 | MM: Stock Transport Order Requester  GP Central YL1 | At Roles Sheet |
| YMM_STO_3100_ZZ04 | MM: Stock Transport Order Requester  GP-Parent-Laying YL1 | At Roles Sheet |
| YMM_STO_3200_ZZ04 | MM: Stock Transport Order Requester GP-Parent-Rearing YL1 | At Roles Sheet |
| YMM_STO_3300_ZZ04 | MM: Stock Transport Order Requester Transfer FM To GP-Parent-Rearing | At Roles Sheet |
| YMM_STO_REL_ST_P2 | MM: Release Stock Transport Order PHD Manager | At Roles Sheet |
| YMM_STO_Y0UB | MM: Stock Transport Order Requester Doc Type Y0UB All Plants | At Roles Sheet |
| YMM_STO_Y0UB_1010 | MM: Stock Transport Order Requester Doc Type Y0UB Qassim Center | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN1 | MM: Stock Transport Order Requester Broiler Site Butain 1 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN11 | MM: Stock Transport Order Requester Broiler Site Butain 11 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN2 | MM: Stock Transport Order Requester Broiler Site Butain 2 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN3 | MM: Stock Transport Order Requester Broiler Site Butain 3 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN5 | MM: Stock Transport Order Requester Broiler Site Butain 5 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 | At Roles Sheet |
| YMM_STO_1200_ZZ04_BTN9 | MM: Stock Transport Order Requester Broiler Site Butain 9 | At Roles Sheet |
| YMM_STO_1200_ZZ04_SHML | MM: Stock Transport Order Requester Broiler Site Shmalia | At Roles Sheet |
| YMM_STO_1200_ZZ04_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 | At Roles Sheet |
| YMM_STO_1200_ZZ04_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 | At Roles Sheet |
| YMM_STO_1220_ZZ04_DLFA | MM: Stock Transport Order Requester Feed Parent Site Dulfa Laying | At Roles Sheet |
| YMM_STO_1220_ZZ04_KUBD | MM: Stock Transport Order Requester Feed Parent Site Kubid Laying | At Roles Sheet |
| YMM_STO_1220_ZZ04_SHRI | MM: Stock Transport Order Requester Feed Parent Site Sherri Laying | At Roles Sheet |
| YMM_STO_1220_ZZ04_WADI | MM: Stock Transport Order Requester Feed Parent Site Wadi Laying | At Roles Sheet |
| YMM_STO_1230_ZZ04_DLFA | MM: Stock Transport Order Requester Feed Parent Site Dulfa Rearing | At Roles Sheet |
| YMM_STO_1230_ZZ04_SHRI | MM: Stock Transport Order Requester Feed Parent Site Sherri Rearing | At Roles Sheet |
| YMM_STO_1230_ZZ04_WADI | MM: Stock Transport Order Requester Feed Parent Site Wadi Rearing | At Roles Sheet |
| YMM_STO_3010_ZZ04 | MM: Stock Transport Order Requester  GP Centeral YL1 | At Roles Sheet |
| YMM_STO_3100_ZZ04 | MM: Stock Transport Order Requester  GP-Hatchery YL1 | At Roles Sheet |
| YMM_STO_3200_ZZ04 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G01 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 01 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G02 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 02 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G03 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 03 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G04 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 04 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G05 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 05 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G06 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 05 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G07 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 07 | At Roles Sheet |
| YMM_STO_3200_ZZ04_G08 | MM: Stock Transport Order Requester GP-Parent-Laying YL1 Farm 08 | At Roles Sheet |
| YMM_STO_3300_ZZ04 | MM: Stock Transport Order Requester Transfer GP-Parent-Rearing YL1 | At Roles Sheet |
| YMM_STO_3300_ZZ04_M01 | MM: Stock Transport Order Requester GP-Parent-Rearing YL1 Farm 01 | At Roles Sheet |
| YMM_STO_3300_ZZ04_M02 | MM: Stock Transport Order Requester GP-Parent-Rearing YL1 Farm 02 | At Roles Sheet |
| YMM_STO_3300_ZZ04_M03 | MM: Stock Transport Order Requester GP-Parent-Rearing YL1 Farm 03 | At Roles Sheet |
| YMM_STO_3300_ZZ04_M04 | MM: Stock Transport Order Requester GP-Parent-Rearing YL1 Farm 04 | At Roles Sheet |
| YMM_STO_1010_ZZ01 | MM: Stock Transport Order Requester FP W/o Delivery2 From Q099 | At Roles Sheet |
| YMM_STO_1100_ZZ01 | MM: Stock Transport Order Requester W/o Delivery 2 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN1 | MM: Stock Transport Order Requester Broiler Site Butain 1 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN11 | MM: Stock Transport Order Requester Broiler Site Butain 11 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN2 | MM: Stock Transport Order Requester Broiler Site Butain 2 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN3 | MM: Stock Transport Order Requester Broiler Site Butain 3 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN5 | MM: Stock Transport Order Requester Broiler Site Butain 5 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 | At Roles Sheet |
| YMM_STO_1200_ZZ01_BTN9 | MM: Stock Transport Order Requester Broiler Site Butain 9 | At Roles Sheet |
| YMM_STO_1200_ZZ01_SHML | MM: Stock Transport Order Requester Broiler Site Shmalia | At Roles Sheet |
| YMM_STO_1200_ZZ01_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 | At Roles Sheet |
| YMM_STO_1200_ZZ01_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 | At Roles Sheet |
| YMM_STO_1250_ZZ01 | MM: Stock Transport Order Requester W/o Delivery2 C Layer | At Roles Sheet |
| YMM_STO_Y0UB_1310 | MM: Stock Transport Order Requester Doc Type Y0UB Fleet Central Workshop | At Roles Sheet |
| YMM_STO_Y0UB_4100 | MM: Stock Transport Order Requester Doc Type Y0UB Agriculture | At Roles Sheet |
| YMM_STO_1100_Y0UB | MM: Stock Transport Order Requester Transfer To Processing | At Roles Sheet |
| YMM_STO_3010_Y0UB | MM: Stock Transport Order Requester Transfer To GP Centeral | At Roles Sheet |
| YMM_STO_3010_Y0UB_888 | MM: Stock Transport Order Requester Transfer To GP Centeral For General Items | At Roles Sheet |
| YMM_STO_3010_Y0UB_YL1 | MM: Stock Transport Order Requester To GP Centeral For Live Operations Requests | At Roles Sheet |
| YMM_STO_1010_ZZ02_YL2 | MM: Stock Transport Order Return PHD Items From Farms To Qassim Medicine-Disinf. | At Roles Sheet |
| YMM_STO_1200_ZZ02_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 | At Roles Sheet |
| YMM_STO_1200_ZZ02_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 | At Roles Sheet |
| YMM_STO_1200_ZZ02_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 | At Roles Sheet |
| YMM_STO_1200_ZZ02_YL2 | MM: Stock Transport Order Requester Brolier PHD | At Roles Sheet |
| YMM_STO_1210_ZZ02_YL2 | MM: Stock Transport Order Requester Hatchery PHD | At Roles Sheet |
| YMM_STO_1220_ZZ02_YL2 | MM: Stock Transport Order Requester Parent PHD | At Roles Sheet |
| YMM_STO_1230_ZZ02_DLFA | MM: Stock Transport Order Requester Parent Site Wadi Rearing | At Roles Sheet |
| YMM_STO_1230_ZZ02_SHRI | MM: Stock Transport Order Requester Parent Site Sherri Rearing | At Roles Sheet |
| YMM_STO_1230_ZZ02_WADI | MM: Stock Transport Order Requester Parent Site Wadi Rearing | At Roles Sheet |
| YMM_STO_1230_ZZ02_YL2 | MM: Stock Transport Order Requester Parent PHD | At Roles Sheet |
| YMM_STO_3010_ZZ02_YL2 | MM: PHD Stock Transport Order Requester Transfer To GP Centeral | At Roles Sheet |
| YMM_STO_3100_ZZ02_YL2 | MM: PHD Stock Transport Order Requester Transfer To GP Hatchery | At Roles Sheet |
| YMM_STO_3200_ZZ02_YL2 | MM: PHD Stock Transport Order Requester Transfer To GP Laying | At Roles Sheet |
| YMM_STO_3300_ZZ02_YL2 | MM: PHD Stock Transport Order Requester Transfer To GP Rearing | At Roles Sheet |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Stock Transport order responsible | Key User |
| Stock Keepers | Key User |

In end user training, we should collect different users into groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 7 of 8 |
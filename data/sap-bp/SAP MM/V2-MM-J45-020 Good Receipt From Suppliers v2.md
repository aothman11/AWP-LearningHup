# V2-MM-J45-020 Good Receipt From Suppliers v2

# MM-J45-020 Goods Receipt From Suppliers

## Process Description

The purchase order is not only the document with which the purchasing department orders goods from the vendor; it is also an important planning and tracking tool for the following departments: Purchasing, Material Requirements Planning (MRP), Inventory Management, and Invoice Verification.

If a material delivered for a purchase order, it is important for all of the departments involved that the goods receipt entry in the system references this purchase order, for the following reasons:

- Goods receiving can check whether the delivery actually corresponds to the order.

- The system can propose data from the purchase order during entry of the goods receipt (for example, the material ordered, its quantity, and so on). This simplifies both data entry and checking (over deliveries and under deliveries).

- The delivery is marked in the purchase order history. This allows the Purchasing department to monitor the purchase order history and initiate reminder procedures in the event of a late delivery.

- The vendor invoice checked against the ordered quantity and the delivered quantity.

- The goods receipt valuated based on the purchase order price or the invoice price.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Full integration with the purchasing department documents. | S | H |
| 02 | Monitor Purchase order delivery dates on daily basis. | S | H |
| 03 | Update the system directly with the actual material cost. | S | H |
| 04 | Management of materials by quantity and value. | S | H |
| 05 | Control the Shelf life of the receiving materials at the time of receiving for the batch management materials to be able to work with FIFO policy | S | H |
| 06 | Checking the quality of the receiving materials and checking any damaged goods as per Poultry policies | G | M |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Purchasing goods from supplier on Poultry Site |
| **Process Input** | Released purchase order |
| **Process Output** | Printed Material Document (Goods receipt document) also accounting document |
| **Process Owner** | Stock keeper |
| **Process Volumes** | 40 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Stock Keeper check the Goods and Supplier Document | Manual |  | Stock keeper |
| 02 | Goods Receipt | MIGO_GR | 1-Post Goods Receipt for Purchase Order ID F0843 2- Post Goods Movement | Stock keeper |
| 03 | Print Material Document For 101 | MB90 | Print Material Document | Stock keeper |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME2V | Expected Goods Receipt | X |  |
| 02 | ME2N | Purchasing documents per document number | X |  |
| 03 | MB51 | Material Document List | X |  |
| 05 | MB52 | Display Warehouse Stocks of material | X |  |
| 07 | MMBE | Stock Overview | X |  |
| 09 | MB5B | Stock on Posting Date | X |  |
| 10 | MB90 | Output Messages | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 39 | Ammar Albaz |
| Yanbu | 2 | Ammar Albaz |

### Operational Decisions or Logic within the Process

- Every material must be received at the specific storage location and not accepted to be received at other locations.

- Expiration date for the receiving goods must be valid 80% of shelf life.

- The receiving goods must be accepted and in good quality condition.

- Only the ordered Goods to be received.

- The receiving of goods must be at the delivery dates +/-   2 weeks.

### Legal Considerations and Company-Specific Policies

- All the Supplier and goods information must be clarified for the Saudi Arabia authorities.

- Dangerous materials report can be requested from the Saudi Arabia Authorities

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Number of Process errors | Revered documents for the receiving materials with Movement type 102 per storage location | 99% No Reversal% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistics Invoice Verification | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

## Implement Mobile Solution to simplify the receiving Process.

- Implement Solution EWM for spare parts handling.

## Functional Solution Design 

### Organization Structure Considerations

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

| **Storage Locations ** | **Plants** |
| --- | --- |
| **Code** | **Storage Location** | **Code** | **Plant** |
| Q003 | Grand Parent | 1010 | Qassim Central |
| Q004 | Manure |  |  |
| Q005 | Finished Protein |  |  |
| Q006 | Expansion |  |  |
| Q007 | Stationary-Sund. |  |  |
| Q009 | Central Store ** |  |  |
| Q010 | Food Store |  |  |
| Q011 | Fuel S. Wat1 |  |  |
| Q012 | Fuel S. Wat2 |  |  |
| Q013 | Fuel S. Wadi |  |  |
| Q014 | Non Moving Stock |  |  |
| Q015 | Pharmacy |  |  |
| Q016 | Fixed Assets |  |  |
| Q019 | Medicine-Disinf. |  |  |
| Q020 | Maintenance |  |  |
| Q021 | Motor Pool 1 |  |  |
| Q022 | Motor Pool 2 |  |  |
| Q023 | Motor Pool 3 |  |  |
| Q024 | Tires |  |  |
| Q025 | Hiten. SParts W1 |  |  |
| Q026 | Hiten. SParts W2 |  |  |
| Q027 | Construction |  |  |
| Q028 | Batching-Concre. |  |  |
| Q029 | Scrap |  |  |
| Q030 | Manure Sp. Part |  |  |
| Q031 | Manure Fact. WIP |  |  |
| Q051 | H/S OIL WH |  |  |
| Q052 | PS/1 OIL WH |  |  |
| Q053 | PS/2 OIL WH |  |  |
| Q054 | PS/3 OIL WH |  |  |
| Q055 | PS/4 OIL WH |  |  |
| Q056 | PS/5 OIL WH |  |  |
| Q057 | W/S OIL WH |  |  |
| Q058 | WADI OIL WH |  |  |
| Q059 | KUBID OIL WH |  |  |
| Q060 | SHERY OIL WH |  |  |
| Q061 | W/SHOP OIL WH |  |  |
| Q062 | AG/MACH OIL WH |  |  |
| Q070 | Finished Water |  |  |
| Q071 | Water-Watania1 |  |  |
| Q072 | Water-Watania2 |  |  |
| Q073 | Water-Watnia2-FM |  |  |
| Q074 | Water-Wadi |  |  |
| Q080 | Protein Fact.WIP |  |  |
| Q085 | Supplier Returns |  |  |
| 1841 | Finished | 1840 | Agri |
| 1842 | Agri. Raw Mat. |  |  |
| 1843 | Agri. S Parts |  |  |
| Q085 | Supplier Returns |  |  |
| 1141 | Raw Material | 1140 | Yanbu hub |
| 1143 | S Parts |  |  |
| 1121 | W1-Feed Add. | 1120 |  |
| 1122 | W1-S.Parts |  |  |
| 1126 | W2-Feed Add. |  |  |
| 1127 | W2-S.Parts |  |  |
| 1131 | Wadi-Feed Add. |  |  |
| 1132 | Wadi-S.Parts |  |  |
| 1139 | Weighting Diff. |  |  |
| Q085 | Supplier Returns |  |  |
| 1121 | P1 - L1 Rec - W1 |  |  |
| 1124 | P2 - L1 Rec - W1 |  |  |
| 1126 | P2 - L2 Rec - W1 |  |  |
| 1127 | P3 - WIP - W2 |  |  |
| 1129 | P3 - L1 Rec - W2 |  |  |
| 1131 | P3 - L2 Rec - W2 |  |  |
| 1133 | P3 - L3 Rec - W2 |  |  |
| 1101 | Packing - Wat1 |  |  |
| 1102 | S Parts - Wat1 |  |  |
| 1103 | Packing - Wat2 |  |  |
| 1104 | S Parts - Wat2 |  |  |
| 1053 | Packing |  |  |
| 1054 | Spices |  |  |
| 1055 | S parts |  |  |
| 1211 | Hat Cent. SParts | 1210 | Hatchery |
| Y003 | S Parts - H3 |  |  |
| Y004 | S Parts - H4 |  |  |
| Y005 | S Parts - H5 |  |  |
| Y006 | S Parts - H6 |  |  |
| Y007 | S Parts - H7 |  |  |
| Y008 | S Parts - H8 |  |  |
| BCT1 | BCT S.Loc | 1200 | Broiler |
| M001 | C. Main. Store |  |  |
| PR01 | PR-Dulfa-F01 | 1230 | Parents - Rearing |
| PR02 | PR-Dulfa-F02 |  |  |
| PR03 | PR-Dulfa-F03 |  |  |
| PR04 | PR-Dulfa-F04 |  |  |
| PR05 | PR-Wadi-F01 |  |  |
| PR06 | PR-Wadi-F02 |  |  |
| PR07 | PR-Wadi-F03 |  |  |
| PR08 | PR-Wadi-F04 |  |  |
| PR09 | PR-Wadi-F05 |  |  |
| PR10 | PR-Wadi-F06 |  |  |
| PR11 | PR-Wadi-F07 |  |  |
| PR12 | PR-Sheri-F01 |  |  |
| PR13 | PR-Sheri-F02 |  |  |
| PR14 | PR-Sheri-F03 |  |  |
| PR15 | PR-Sheri-F04 |  |  |
| PR16 | PR-Sheri-F05 |  |  |
| PR17 | PR-Sheri-F06 |  |  |
| PR18 | PR-Sheri-F07 |  |  |
| PR19 | PR-Sheri-F08 |  |  |
| PR20 | PR-Sheri-F09 |  |  |
| PR21 | PR-Sheri-F10 |  |  |
| PR22 | PR-Sheri-F11 |  |  |
| PR23 | PR-Sheri-F12 |  |  |
| PCT1 | PCT - Laying | 1231 | Parents - Laying - Dulfa |
| PCT1 | PCT - Laying | 1232 | Parents - Laying - Wadi |
| PCT1 | PCT - Laying | 1233 | Parents - Laying - Kubid |
| PCT1 | PCT - Laying | 1234 | Parents - Laying - Shery |
| PCT1 | PCT - Rearing | 1241 | Parents - Rearing - Dulfa |
| PCT1 | PCT - Rearing | 1242 | Parents - Rearing - Wadi |
| PCT1 | PCT - Rearing | 1244 | Parents - Rearing - Shery |
| LCT1 | LCT - Laying | 1250 | C Layer – Laying |
| 1253 | Packing |  |  |
| LR01 | Lyer-Rearing-F01 | 1260 | C Layer - Rearing |
| LR02 | Lyer-Rearing-F02 |  |  |
| G001 | GP General Items | 3010 | GP - Central |
| G003 | GP Qassim |  |  |
| G004 | GP Common Feed |  |  |
| Q085 | Supplier Returns |  |  |
| GH01 | GP Hatchery 1 | 3100 | GP-Hatchery |
| GL01 | GP Feed - Laying |  |  |
| GR01 | GP Feed - Rearin |  |  |
| GL01 | GP Feed - Laying | 3200 | GP-Parent-Laying |
| GR01 | GP Feed - Rearin | 3300 | GP-Parent-Rearing |
| 4101 | Agri Finished | 4100 | Qassim Agri. |
| 4110 | Agri Raw |  |  |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Business Partner (Supplier) |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

| Goods Receipt  Output Types |
| --- |
| ID | Description | Form | Program | Form Routine |
| WE03 | GR Note Vers.3 | YMM_GR_SUPL | SAPM07DR | ENTRY_WA03_PDF |

| Create Storage Location Automatically |
| --- |
| Plant | Create Storage Location Automatically | Movement Types | Create Storage Location Automatically |
| All Plants | Uncheck | All Movements | Uncheck |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-120-01 | Form | Goods Receipt/ Supplier Slip | YMM_GR_SUPL |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Data Objects** |
| 01 | YMM_STK_KPR | MM: Stock Keeper ( Parent Role ) |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Inventory Administrators | Key User |
| Warehouse Clerks | Key User |

In the end user training, we should collect different Stock keepers into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 8 of 9 |
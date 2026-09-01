# MM-18J-020 Requisitioning - Asset Requisitions V3

# MM-18J-020 Requisitioning – Asset Requisitions

## Process Description

This Requisition type to collect the departments' Assets requisitions based on the definition of the asset at the company and linked to the Asset procurement process (**MM-BNX-010**** ****Asset Procurement Process)** in the Blueprint

The process starts at the department, which needs a new asset then, transferred to the asset accountant after approval from the department manager then the asset accountant fills the asset master data at the PR to bypass finally to Purchasing department

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Collect ,document and Organize Poultry Assets requirements | S | H |
| 02 | Differentiate between Assets requisitions and Other Purchase Requisitions | S | H |
| 03 | Prioritize the urgency of the Assets requisitions | S | H |
| 04 | Approve the Purchase requisitions Systematically | S | H |
| 05 | Follow up requisitions on the system | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New requirement for asset |
| **Process Input** | Purchase requisition Manual |
| **Process Output** | Released Purchase Requisition |
| **Process Owner** | All Departments |
| **Process Volumes** | 2 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

|  |  |  |
| --- | --- | --- |
| **ID** | **Process Step Description** | **Execution** |  |
|  |  | **T-Code** | **FIORI App****.** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Requested Department send an asset requisition to assets account to confirm the capital budget and approve | Manual |  | **Asset Requester** |
| 02 | If no code exist, required to create a new code with using M.type YNAS and Mgrp. A0002 | MM01 | X | **Asset Accountant** |
| 03 | Requested Department send an asset requisition to the Technically department based on the asset Class. | Manual |  | **Asset Requester** |
| 04 | Create Asset Purchase Requisition with account assignment “U” Unknown | ME51N | X | **Technically Department** |
| 05 | Technically Department Manager Release the Purchase Requisition | ME55 ME54N | X | **Technically Department** |
| 06 | Create New Asset Master | AS01 |  | **Asset Accountant** |
| 07 | Change the Account Assignment from U to A then Assign Asset Number at the PR item and final Release the PR | ME54N | X | **Asset Accountant** |
| 08 | Monthly confirm the issuance of all assets to its cost center and change if required. | YMM047 |  | **Asset Accountant** |
| 09 | Asset receive in asset WH Q016 as qty. Only without value | MIGO | X | **Store Keeper** |
| 010 | Issue asset against reservation cost center | MIGO | X | **Store Keeper** |
|  |  |  |  |  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME5A | Purchase Requisition List Displays | X |  |
| 02 | YMM020 | Assets Requisitions/Purchasing/Inventory | X |  |
| 03 | YMM022 | Account Assignement Data for Purchasing Documents | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 10 |  |

### Operational Decisions or Logic within the Process

### Legal Considerations and Company-Specific Policies

- Documenting asset Details at the purchase requisition and the delivery date.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Purchase Requisition to Order Cycle Time | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inv. Management | MM-INV |
| 03 | Asset Accounting | FI-AA |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 004 | Assets |

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
| 1480 | Jeddah Branch |  |
| 1490 | Qassim Branch |  |
| 1500 | Riyadh Branch |  |
| 1510 | Dammam Branch |  |
| 1520 | Abha Branch |  |
| 1530 | Medina Branch |  |
| 1540 | Taif Branch |  |
| 1550 | Baljurashi Branch |  |
| 1560 | Najran Branch |  |
| 1570 | Sakaka Branch |  |
| 1580 | Tabuk Branch |  |
| 1590 | Mecca Branch |  |
| 1600 | Al Ahsa Branch |  |
| 1610 | Hafar Al Batin Branch |  |
| 1620 | Wadi ad-Dawasir Branch | Obsolete |
| 1630 | Addawadmi Branch |  |
| 1640 | Jazan Branch |  |
| 1650 | Yanbu Branch |  |
| 1660 | Hail Branch |  |
| 1800 | Qassim Export | Obsolete |
| 1840 | Qassim Agri. | Obsolete |
| 2100 | Transportation | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Laying |  |
| 3300 | GP-Rearing |  |
| 4100 | Qassim Agri. |  |

### Master Data Considerations (including all relevant data relationships)

| **List of Related Master Data** |
| --- |
| Business Partner (Supplier) |
| Asset Master Record |

### System Configuration Considerations

| No | Asset Class | Dept. | الإدارة المختصة | نوع الأصل | م |
| --- | --- | --- | --- | --- | --- |
| 1 | Cars and Trucks | Transportation Dept. | إدارة الإمداد والنقل | السيارات | 1 |
| 2 | Computers | IT Dept. | إدارة تقنية المعلومات | حاسب آلي وملحقاته | 2 |
| 3 | Tools | Technical Services Sector | الصيانة المركزية | عدد وأدوات | 3 |
| 4 | Machines and Equipment | Manufacturing Sector | قطاع المصانع | الآلات والمعدات | 4 |
| 5 | Furniture | Housing Dept. | إدارة الإسكان | الأثاث | 5 |
| 6 | Production Equipment | Production | قطاع الإنتاج | معدات المزارع | 6 |

| Purchase  Requisition  Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YAS1 | Asset-Transpor Dept. | A1 |  |  |
| YAS2 | Asset-IT Deptar. | A2 |  |  |
| YAS3 | Asset-Tool&Gen.Mach. | A3 |  |  |
| YAS4 | Asset-Manufa. Sector | A4 |  |  |
| YAS5 | Asset-Housing Dept. | A5 |  |  |
| YAS6 | Production Sector | Z5 |  |  |

| Purchase Requisition  Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| A1 | 0031000000 | 0031999999 | Internal | 10 |
| A2 | 0032000000 | 0032999999 | Internal | 10 |
| A3 | 0033000000 | 0033999999 | Internal | 10 |
| A4 | 0034000000 | 0034999999 | Internal | 10 |
| A5 | 0035000000 | 0035999999 | Internal | 10 |
| Z5 | 0036000000 | 0036999999 | Internal | 10 |
| Release  Class |
| ID | Description |
| Y_PR_Release | Poultry PR Release Item Wise Level |

| Release  Characteristics |
| --- |
| ID | Description |
| Y_PR_DOC_TYPE | Order Type |
| Y_PR_PURCH_GRP | Purchasing Group |
| **Release  Characteristics** |
| **Characteristics** | **Value** |
| **ID** | **Description** | **ID** | **Description** |
| Y_PR_DOC_TYPE | Order Type | YNB | Consuma. Requisitions |
|  |  | YMF0 | Factorie Spare Parts |
|  |  | YMV0 | Vehicles Spare Parts |
|  |  | YMG0 | Gener Maint.SP Parts |
|  |  | YAS1 | Asset-Transpor Dept. |
|  |  | YAS2 | Asset-IT Deptar. |
|  |  | YAS3 | Asset-Tech Serv Sec. |
|  |  | YAS4 | Asset-Manufa. Sector |
|  |  | YAS5 | Asset-Housing Dept. |
|  |  | YAS6 | Production Sector |
| Y_PR_PURCH_GRP | Purchasing Group | 001 | Strategic Items |
|  |  | 002 | Services & Project |
|  |  | 003 | Spare Parts |
|  |  | 004 | Assets |
|  |  | 005 | General Items |

| **PR Release Strategy** |
| --- |
| **Strategy** | **Rel Group** | **Release Characteristic** | **Release  Codes** |
|  | **Code** | **Description** | **Order Type** | **Purchasing Group** |  |
| R4 | Transportation Dept. | Y2 | Assets PRs Release | YAS1 | 004 | M6,M5 |
| R5 | IT Dept. | Y2 | Assets PRs Release | YAS2 | 004 | M7,M5 |
| R6 | Tools&Tech. SRVC DEP | Y2 | Assets PRs Release | YAS3 | 004 | M8,M5 |
| R7 | Manufactu. Sector DEP | Y2 | Assets PRs Release | YAS4 | 004 | M9,M5 |
| R8 | Housing Dept. | Y2 | Assets PRs Release | YAS5 | 004 | NI,M5 |

| **Priority Of P****urchase Requisitions** |
| --- |
| 01 | Critical |
| 02 | Emergency |
| 03 | Normal |
| 04 | Confirmation |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| WRICEFID | TYPE | Description | Item Code |
| R_MM-190 | Report | Assets Requisitions/Purchasing/Inventory | YMM020 |
| R_MM-380 | Report | link the PO and the PR to list the requisitioner | YMM022 |
| R_MM-440 | Report | Follow up the purchasing department orders and the link with purchase requisitions | YMM042 |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PR_ALL_PLANTS_YAS1 | MM: Purchase Requisition Requester Asset-Transport Dept. | At Roles Sheet |
| YMM_PR_ALL_PLANTS_YAS2 | MM: Purchase Requisition Requester Asset-IT Deptar. | At Roles Sheet |
| YMM_PR_ALL_PLANTS_YAS3 | MM: Purchase Requisition Requester Asset-Tool&Gen.Mach. | At Roles Sheet |
| YMM_PR_ALL_PLANTS_YAS4 | MM: Purchase Requisition Requester Asset-Manufa. Sector | At Roles Sheet |
| YMM_PR_ALL_PLANTS_YAS5 | MM: Purchase Requisition Requester Asset-Housing Dept. | At Roles Sheet |
| YMM_PR_ALL_PLANTS_YAS6 | MM: Purchase Requisition Requester Production Sector | At Roles Sheet |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 8 |
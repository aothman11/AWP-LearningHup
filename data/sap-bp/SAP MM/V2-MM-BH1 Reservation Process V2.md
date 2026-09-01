# V2-MM-BH1 Reservation Process V2

# MM-BH1 Reservation

## Process Description

With this component, you make a request to the warehouse to keep materials ready for withdrawal later and for a certain purpose. This simplifies and accelerates the goods receipt process.

Various departments for various account assignment objects (such as cost center, order, asset, etc.) can request a reservation for goods issue.

Reservations enable you to make sure that the reserved material will be available later for a specific purpose. 

The purpose of a reservation is to ensure that a material will be available when it needed. It also serves to simplify and accelerate the goods issue process and prepare the tasks at the point of goods issue.

It is also important that Material Requirements Planning (MRP), which means that required materials are procured in time if they are out of stock, consider reservations.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Referencing Department requirement from current stock | S | H |
| 02 | Manage Quantities requested with reference on SAP | S | H |
| 03 | Availability check for the requested quantities on specified date | S | H |
| 04 | Link maintenance and projects Departments with SAP at this phase till starting implementing its modules next phases | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Department Requirement form current stock |
| **Process Input** | New Reservation for Issue |
| **Process Output** | Posted Material Document |
| **Process Owner** | Inventory Department |
| **Process Volumes** | 25 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Create Manual Reservation | MB21 |  | Requester |
| 02 | Print Reservation | YRES201 |  | Requester |
| 03 | Monitor Reservations | MB25 |  | Stock keepers |
| 04 | Goods issue with reference to reservation | MIGO |  | Stock keepers |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB52 | Stock overview for Multiple Material | X |  |
| 02 | MMBE | Stock overview for One Material | X |  |
| 03 | MB24 | Reservations for Material | X |  |
| 04 | MB25 | Reservations for Account Assignment | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| All Company Locations |  |  |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

N/A

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Batch Management | LO-BM |
| 02 | Production Planning | PP, PP-PI |
| 03 | Inventory Management | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

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

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

N/A

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-BH1-RES-01 | Form | Reservation Form General | YMM_RESERVTION |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Data Objects** |
| 1 | YMM_RES | MM: Reservation Requester #Parent |
| 2 | YMM_RES_1010_201 | MM: Reservation Request Cost Center -Plant Qassim Centeral 1010 |
| 3 | YMM_RES_1010_311 | MM: Reservation Transfer At 1010 |
| 4 | YMM_RES_1010_311_EWS_OIL | MM: Reservation Transfer At 1010 Oils Storage Locations |
| 5 | YMM_RES_1010_REVRS_202_Y62 | MM: Reversal of Reservation Request Cost Center & Projects 1010 |
| 6 | YMM_RES_1010_Y61 | MM: Reservation Order From 1010 |
| 7 | YMM_RES_1050_201 | MM: Reservation Request Cost Center -Plant FPP 1050 |
| 8 | YMM_RES_1100_201 | MM: Reservation Request Cost Center -Plant Processing 1100 |
| 9 | YMM_RES_1100_311 | MM: Reservation Transfer At 1100 |
| 10 | YMM_RES_1100_REVRS_202_Y62 | MM: Reversal of Reservation Request Cost Center & Projects 1100 |
| 11 | YMM_RES_1120_201 | MM: Reservation Request Cost Center -Plant Feed Mill 1120 |
| 12 | YMM_RES_1120_311 | MM: Reservation Transfer At 1120 |
| 13 | YMM_RES_1140_201 | MM: Reservation Cost Center From 1140 |
| 14 | YMM_RES_1140_311 | MM: Reservation Transfer At 1140 Yanbu Grain Hub |
| 15 | YMM_RES_1200_201 | MM: Reservation Cost Center From 1200 |
| 16 | YMM_RES_1200_311 | MM: Reservation Transfer At 1200 Broiler Sites |
| 17 | YMM_RES_1210_201 | MM: Reservation Cost Center From 1210 |
| 18 | YMM_RES_1220_311 | MM: Reservation Transfer At 1220 Parent Sites |
| 19 | YMM_RES_1230_201 | MM: Reservation Cost Center From 1230 |
| 20 | YMM_RES_1230_311 | MM: Reservation Transfer At 1230 Broiler Sites |
| 21 | YMM_RES_1250_201 | MM: Reservation Cost Center From 1250 |
| 22 | YMM_RES_1250_311 | MM: Reservation Transfer At 1250 |
| 23 | YMM_RES_1480_201 | MM: Reservation Cost Center From 1480 |
| 24 | YMM_RES_1480_311 | MM: Reservation Transfer At 1480 |
| 25 | YMM_RES_1480_Y61 | MM: Reservation Order From 1480 |
| 26 | YMM_RES_1490_201 | MM: Reservation Cost Center From 1490 |
| 27 | YMM_RES_1490_311 | MM: Reservation Transfer At 1490 |
| 28 | YMM_RES_1500_201 | MM: Reservation Cost Center From 1500 |
| 29 | YMM_RES_1500_311 | MM: Reservation Transfer At 1500 |
| 30 | YMM_RES_1520_201 | MM: Reservation Cost Center From 1520 |
| 31 | YMM_RES_1570_201 | MM: Reservation Cost Center From 1570 |
| 32 | YMM_RES_1590_201 | MM: Reservation Cost Center From 1590 |
| 33 | YMM_RES_1660_201 | MM: Reservation Cost Center From 1660 |
| 34 | YMM_RES_1840_Y61 | MM: Reservation Order From 1840 |
| 35 | YMM_RES_3010_201 | MM: Reservations Of Production Sector Cost Centers From GP Centeral |
| 36 | YMM_RES_3010_311 | MM: Reservation Transfer At 3010 |
| 37 | YMM_RES_3010_Y01 | MM: Reservations Of Production Sector Feed From GP Centeral |
| 38 | YMM_RES_3100_201 | MM: Reservations Of Production Sector Cost Center From GP-Hatchery |
| 39 | YMM_RES_3100_Y01 | MM: Reservations Of Production Sector FM & Fuel All GP-Hatchery |
| 40 | YMM_RES_3200_201 | MM: Reservations Of Production Sector Cost Center From GP-Parent-Laying |
| 41 | YMM_RES_3200_Y01 | MM: Reservations Of Production Sector FM & Fuel All GP-Parent-Laying |
| 42 | YMM_RES_3300_201 | MM: Reservations Of Production Sector Cost Center From GP-Parent-Rearing |
| 43 | YMM_RES_3300_Y01 | MM: Reservations Of Production Sector FM & Fuel All GP-Parent-Rearing |
| 44 | YMM_RES_ALL_DISPLAY | MM: Display All Reservations For All Plants |
| 45 | YMM_RES_CC_201_ALL | MM:Inventory Department Month End Closing Activites For Reservations at all Plan |
| 46 | YMM_RES_CC_202_ALL | MM: Reservation 202 From Cost Center For All Plants All Cost Centers Reversal |
| 47 | YMM_RES_CC_ADMIN | MM: Reservation Cost Center For Administration |
| 48 | YMM_RES_CC_AGRICULTURE | MM: Reservation Cost Center For Agriculture Division |
| 49 | YMM_RES_CC_ASD | MM: Reservation Cost Center For Administration Service dep. |
| 50 | YMM_RES_CC_AWP_TRANSPORT | MM: Reservation Cost Center For Al Watani Transport Company |
| 51 | YMM_RES_CC_BROILER | MM: Reservation Cost Center For Broiler Department |
| 52 | YMM_RES_CC_CATERING | MM: Reservation Cost Center For Catering Div. |
| 53 | YMM_RES_CC_CLINIC | MM: Reservation Cost Center For Human Medicine |
| 54 | YMM_RES_CC_EPR | MM: Reservation Cost Center For Environment protection & Recycling dep. |
| 55 | YMM_RES_CC_EWS | MM: Reservation Cost Center For Electricity and water system dep. |
| 56 | YMM_RES_CC_EXPANSION | MM: Reservation Cost Center For Expansion Department |
| 57 | YMM_RES_CC_FCW | MM: Reservation Cost Center For Fleet Centeral Workshop dep. |
| 58 | YMM_RES_CC_FEED_MILL | MM: Reservation Cost Center For Feed Mill Department |
| 59 | YMM_RES_CC_FINANCE | MM: Reservation Cost Center For Finance dept. |
| 60 | YMM_RES_CC_FUEL_FCW | MM: Reservation Cost Center For Fuel Needs By Fleet Centeral Workshop dep. |
| 61 | YMM_RES_CC_FURTH_PROC | MM: Reservation Cost Center For Further Processing Department |
| 62 | YMM_RES_CC_GP | MM: Reservation Cost Center For Grand Parent Department |
| 63 | YMM_RES_CC_HATCHERY | MM: Reservation Cost Center For Hatchery Department |
| 64 | YMM_RES_CC_HEAV_EQUIP | MM: Reservation Cost Center For Heavy Equipment Department |
| 65 | YMM_RES_CC_HR | MM: Reservation Cost Center For HR Department |
| 66 | YMM_RES_CC_INV_PLANN | MM: Reservation Cost Center For Inventory Planning dep |
| 67 | YMM_RES_CC_IT | MM: Reservation Cost Center For IT Department |
| 68 | YMM_RES_CC_LAYER | MM: Reservation Cost Center For Layer Departement |
| 69 | YMM_RES_CC_LOGISTICS | MM: Reservation Cost Center For Logistics Department |
| 70 | YMM_RES_CC_MAINTENANCE | MM: Reservation Cost Center For Maintenance Dept. Department |
| 71 | YMM_RES_CC_MARKETING | MM: Reservation Cost Center For Marketing Dept. Department |
| 72 | YMM_RES_CC_PARENT | MM: Reservation Cost Center For Parent Departement Department |
| 73 | YMM_RES_CC_PHD | MM: Reservation Cost Center For PHD General Department |
| 74 | YMM_RES_CC_PROCESSING | MM: Reservation Cost Center For Proc. Plant Department |
| 75 | YMM_RES_CC_PROCUREMENT | MM: Reservation Cost Center For Procurement Department |
| 76 | YMM_RES_CC_PRODUC_SECTOR | MM: Reservation Cost Center For Production Sector Department |
| 77 | YMM_RES_CC_PROJECTS | MM: Reservation Cost Center For Projects General Department |
| 78 | YMM_RES_CC_PUBL_RELA | MM: Reservation Cost Center For Public Relations Department |
| 79 | YMM_RES_CC_QUALITY | MM: Reservation Cost Center For Quality Department |
| 80 | YMM_RES_CC_REFRIG | MM: Reservation Cost Center For Refrigeration |
| 81 | YMM_RES_CC_SALES | MM: Reservation Cost Center For Sales Banches |
| 82 | YMM_RES_CC_TSD | MM: Reservation Cost Center For Internal Transport Service  dep. |
| 83 | YMM_RES_CC_WHS | MM: Reservation Cost Center For Warehouses Department |
| 84 | YMM_RES_CC_YANBU_SILOS | MM: Reservation Cost Center For Yanbu Silos Department |
| 85 | YMM_RES_GP_201 | MM: Reservations Of Production Sector Cost Centers From All GP Sites |
| 86 | YMM_RES_GP_Y01 | MM: Reservations Of Production Sector FM & Fuel All GP Sites |
| 87 | YMM_RES_Y01 | MM: Reservations Of Production Sector FM & Fuel |
| 88 | YMM_RES_Y01_DEL | MM: Reservations Of Production Sector FM & Fuel - Delete |
| 89 | YMM_RES_Y62_ALL | MM: Reservation Y62 For All Plants All Cost Centers |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Maintenance Engineers | Key User |
| Projects Engineers | Key User |
| Warehouse Clerks | Key User |

In end user training, we should collect different Stock keepers, maintenance and projects engineers into three or four groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 5 of 6 |
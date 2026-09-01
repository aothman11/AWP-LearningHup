# V3-MM-1FW Physical Inventory Process

| physical inventory process |
| --- |

## Process Description

In this process, you create physical inventory (PI) documents for a chosen number of storage locations or products on a regular basis to distribute the workload for physical inventory over the year. You carry out the counting on the selected items at the document.

By posting the PI documents, you adjust the book inventory in the storage locations to align it with the physical inventory counts. To adjust the stock accounts, the system automatically posts all differences up to a certain value with a background job. At different points in the process, tolerance checks control the count results and final postings that adjust the stock situation. Along with this process, you monitor the progress of your physical inventory within the warehouse monitor.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Establishes an inventory counting process with a periodic physical counting approach | S | H |
| 02 | Supports efficient examination of the stock situation in your warehouse | S | H |
| 03 | Reduce inventory losses in the warehouse | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Physical inventory requirement |
| **Process Input** | Physical inventory document |
| **Process Output** | Posted Material document |
| **Process Owner** | Costing and inventory control Department |
| **Process Volumes** | 10 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Physical Inventory Responsible** |
|  |  |  |  |  |
| 01 | Create physical inventory documents | MI01 MI31 | Create physical inventory documents | R |
| 02 | Print physical inventory documents | MI21 | Print physical inventory documents | R |
| 03 | Execute physical count or recount | Manual |  | R |
| 04 | Enter physical count | MI04 |  | R |
| 05 | List and post physical count differences | MI07 MI20 | Post Physical Inventory Document (MI07) | R |
|  |  |  |  |  |

## Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 |  | Physical Inventory Document Overview |  | X |
| 02 | MI22 | Phys. Inventory Doc. for Material | X |  |
| 03 | MI23 | Phys. Inventory Data for Material | X |  |
| 04 | MB51 | Material Document for Material | X |  |
| 05 | MM60 | Material list | X |  |
| 06 | MMBE | Stock Overview | X |  |
| 07 | MIDO | MIDO - Physical Inventory Overview | X |  |
| 08 | MI24 | Physical Inventory List | X |  |
| 09 | MI12 | Changes to Physical Inventory Documents | X |  |
| 10 | YMM019 | Physical Inventory Documents Report | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| All Locations at Watania Company |  |  |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Inventory Accuracy | Percentage (Book inventory – counted inventory│)/book inventory | Minimize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Inventory | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| **** | All Plants and Storage Locations |  |
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
| 1620 | Wadi addawaser |  |
| 1630 | Addawadmi |  |
| 1640 | jizan |  |
| 1650 | Yanbu |  |
| 1660 | Hael |  |
| 1800 | Qassim Export |  |
| 1840 | Qassim Agri. |  |
| 1010 | Qassim Central |  |
| 1050 | Further Processing |  |
| 1100 | Slaughter |  |
| 1140 | Yanbu Grain Hub |  |
| 1150 | Feed Mill Watania1 |  |
| 1160 | Feed Mill Watania2 - FM3 |  |
| 1170 | Feed Mill Watania2 - FM6 |  |
| 1180 | Feed Mill Wadi FM4 |  |
| 1190 | Feed Mill Wadi FM5 |  |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1221 | Grading Station - Dulfa | Obsolete |
| 1222 | Grading Station - Wadi | Obsolete |
| 1223 | Grading Station - Kubid | Obsolete |
| 1224 | Grading Station - Shery | Obsolete |
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
| 1220 | Parents - Laying |  |
| 1230 | Parents - Rearing |  |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

- Allow Freezing of Book Inventory Balance in Storage Location

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-1FW-01 | Form | Physical Inventory Document | YMM_PHY_INV |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 09 | YMM_PHY_INV_COUNT_ADMIN | Administrator Of Mass Count For Physical Inventory Documents |
| 10 | YMM_PH_INV_REPORT_ALL | MM: Physical Inventory Reports For All S.Locations |
| 11 | YMM_PH_INV_REPORT | Parent:MM: Physical Inventory Reports |
| 12 | YMM_PH_INV_CNTRL_ALL | MM: Physical Inventory Control Posting For All S.Locations |
| 13 | YMM_PH_INV_CNTRL | Parent:MM: Physical Inventory Control |
| 14 | YMM_PH_INV_ALL | MM: Physical Inventory Execution For All S.Locations |
| 15 | YMM_PH_INV_1660 | MM: Physical Inventory Execution For  Hail Branch |
| 16 | YMM_PH_INV_1650 | MM: Physical Inventory Execution For  Yanbu Branch |
| 17 | YMM_PH_INV_1640 | MM: Physical Inventory Execution For  Jazan Branch |
| 18 | YMM_PH_INV_1630 | MM: Physical Inventory Execution For  Addawadmi Branch |
| 19 | YMM_PH_INV_1620 | MM: Physical Inventory Execution For  Wadi ad-Dawasir Branch |
| 20 | YMM_PH_INV_1610 | MM: Physical Inventory Execution For  Hafar Al Batin Branch |
| 21 | YMM_PH_INV_1600 | MM: Physical Inventory Execution For  Al Ahsa Branch |
| 22 | YMM_PH_INV_1590 | MM: Physical Inventory Execution For  Mecca Branch |
| 23 | YMM_PH_INV_1580 | MM: Physical Inventory Execution For  Tabuk Branch |
| 24 | YMM_PH_INV_1570 | MM: Physical Inventory Execution For  Sakaka Branch |
| 25 | YMM_PH_INV_1560 | MM: Physical Inventory Execution For  Najran Branch |
| 26 | YMM_PH_INV_1550 | MM: Physical Inventory Execution For  Baljurashi Branch |
| 27 | YMM_PH_INV_1540 | MM: Physical Inventory Execution For  Taif Branch |
| 28 | YMM_PH_INV_1530 | MM: Physical Inventory Execution For  Medina Branch |
| 29 | YMM_PH_INV_1520 | MM: Physical Inventory Execution For  Abha Branch |
| 30 | YMM_PH_INV_1510 | MM: Physical Inventory Execution For  Dammam Branch |
| 31 | YMM_PH_INV_1500 | MM: Physical Inventory Execution For  Riyadh Branch |
| 32 | YMM_PH_INV_1490 | MM: Physical Inventory Execution For  Qassim Branch |
| 33 | YMM_PH_INV_1480 | MM: Physical Inventory Execution For  Jeddah Branch |
| 34 | YMM_PH_INV | Parent: MM: Physical Inventory Execution |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Purchasing Users | Purchasing Key User |
| Warehouse Clerks | Inventory Key Users |

In end user training, we should collect different users for Physical inventory Department and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 6 of 7 |
# MM-18J-010 Requisitioning - MRP Requisitions V1

| MM-18J-010 Requisitioning – MRP Requisitions |
| --- |

### Business Process Description

This process initiated by a new requirement as well as stock replenishment at Al-Watania Poultry Company, this process uses purchase requisitions that are generated either via the Material Requirements Planning (MRP) process or manually by MRP Controllers.

All Requisitions transferred to the Purchasing Department to start purchasing processes.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Collect ,document and Organize Poultry Production requirements | S | H |
| 02 | Differentiate between MRP and Manual Purchase Requisitions | S | H |
| 03 | Follow up requisitions on the system | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Requirement |
| **Process Input** | Planned Order |
| **Process Output** | Purchase Requisition |
| **Process Owner** | MRP Controllers |
| **Process Volumes** | 10 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Role** |
|  |  |  |  |  |
| 01 | MRP Live Run | MD01N |  | MRP Controller |
| 02 | Review unreleased Purchase requisitions | MD04 ME5A |  | MRP Controller |
| 03 | Release Purchase requisitions | ME55 ME54N |  | MRP Controller |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME5A | Purchase Requisition List Displays | X |  |
| 02 |  | Purchase Requisition Item ID F0349A |  | X |
| 03 |  | Manage Purchase Requisition Professional ID F2229 |  | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 5 | MRP Controllers |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

Planning Department Must Consider the lead time for Materials

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected Result** |
| 01 | Purchase Requisition to Order Cycle Time | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Production Planning | PP-MP |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 005 | General Items |

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

| **List of related Master Data** |
| --- |
| Material Master |
| Batch Management |

### System Configuration Considerations

| Purchase Requisition document type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| NB | Purchase Requisition | 01 |  |  |

| Purchase Requisition Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| 01 | 0010000000 | 0019999999 | Internal | 010 |

| Release Class |
| --- |
| ID | Description |
| Y_PR_RELEASE | Poultry PR Release Item Wise Level |

| Release Characteristics |
| --- |
| ID | Description |
| Y_PR_ITM_VLU | Total Value of Item |
| Y_PR_PURCH_GRP | PR Purchasing Group |
| Y_PR_DOC_TYPE | Purchase Requisition Document |
| Y_MRP_CNTRLR | MRP Controller |
| Y_PR_PLANTS | Plant |
| Y_PR_ACC_ASSIGNMENT | Account Assignment Category |

| **Release Groups** |
| --- |
| **ID** | **Description** |
| Y3 | MRP Controllers Release |

| **Release Codes** |
| --- |
| **Group** | **Release Code** | **Description** |
| Y3 | 10 | FP Fresh Finished Co |
| Y3 | 11 | FP Frozen Finished C |
| Y3 | 12 | Proc. Fresh Finish C |
| Y3 | 13 | Proc. Frozen Fnish C |
| Y3 | 14 | Egg Products Contro. |
| Y3 | 15 | Feed Mill Finished C |
| Y3 | 16 | Agri. Products Cont. |
| Y3 | 17 | Finished - Other |
| Y3 | 20 | Live Stock Controler |
| Y3 | 21 | Semi-Finished Contr. |
| Y3 | 30 | Raw material Contro. |
| Y3 | 31 | Packing Controller |
| Y3 | 40 | Spare Part Vehicle C |
| Y3 | 41 | Spare Part Machine C |
| Y3 | 42 | Spare Part General C |
| Y3 | 50 | General Items Contr. |
| Y3 | 51 | Food Strategy |
| Y3 | 52 | Operation Gen.Item |
| Y3 | 70 | Auxularies - Control |
| Y3 | 80 | Fuel - Controller |

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** |
| YMM_PR_ALL_PLANTS_NB | MM: Purchase Requisition Rquester MRP All Plants |
| YMM_PR_REL_Y3_80 | PR Releaser (Rel. Group MRP Controllers Rele) Code Fuel - Controller |
| YMM_PR_REL_Y3_70 | PR Releaser (Rel. Group MRP Controllers Rele) Code Auxularies - Control |
| YMM_PR_REL_Y3_50 | PR Releaser (Rel. Group MRP Controllers Rele) Code General Items Contr. |
| YMM_PR_REL_Y3_51 | PR Releaser (Rel. Group MRP Controllers Rele) Code Food Controller |
| YMM_PR_REL_Y3_52 | PR Releaser (Rel. Group MRP Controllers Rele) Code Operation Gen.Item |
| YMM_PR_REL_Y3_42 | PR Releaser (Rel. Group MRP Controllers Rele) Code Spare Part General C |
| YMM_PR_REL_Y3_41 | PR Releaser (Rel. Group MRP Controllers Rele) Code Spare Part Machine C |
| YMM_PR_REL_Y3_40 | PR Releaser (Rel. Group MRP Controllers Rele) Code Spare Part Vehicle C |
| YMM_PR_REL_Y3_31 | PR Releaser (Rel. Group MRP Controllers Rele) Code Packing Controller |
| YMM_PR_REL_Y3_30 | PR Releaser (Rel. Group MRP Controllers Rele) Code Raw material Contro. |
| YMM_PR_REL_Y3_21 | PR Releaser (Rel. Group MRP Controllers Rele) Code Semi-Finished Contr. |
| YMM_PR_REL_Y3_20 | PR Releaser (Rel. Group MRP Controllers Rele) Code Live Stock Controler |
| YMM_PR_REL_Y3_17 | PR Releaser (Rel. Group MRP Controllers Rele) Code Finished - Other |
| YMM_PR_REL_Y3_16 | PR Releaser (Rel. Group MRP Controllers Rele) Code Agri. Products Cont. |
| YMM_PR_REL_Y3_15 | PR Releaser (Rel. Group MRP Controllers Rele) Code Feed Mill Finished C |
| YMM_PR_REL_Y3_14 | PR Releaser (Rel. Group MRP Controllers Rele) Code Egg Products Contro. |
| YMM_PR_REL_Y3_13 | PR Releaser (Rel. Group MRP Controllers Rele) Code Proc. Frozen Fnish C |
| YMM_PR_REL_Y3_12 | PR Releaser (Rel. Group MRP Controllers Rele) Code Proc. Fresh Finish C |
| YMM_PR_REL_Y3_11 | PR Releaser (Rel. Group MRP Controllers Rele) Code FP Frozen Finished C |
| YMM_PR_REL_Y3_10 | PR Releaser (Rel. Group MRP Controllers Rele) Code FP Fresh Finished CoS |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 6 of 7 |
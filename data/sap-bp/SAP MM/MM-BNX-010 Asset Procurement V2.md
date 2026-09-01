# MM-BNX-010 Asset Procurement V2

# MM-BNX-010 Asset Procurement

## Process Description

There is a huge variety of products ordered within a company and therefore various process variants are possible in asset procurement, depending on the value and the complexity of the procured product.

If the product to be procured is of high value and complexity (for example, a new building), the buyer generally works very closely together with the accountant beforehand. 

The fixed asset created in the system before goods and services ordered with an account assignment to this fixed asset.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Link the purchasing Process with the asset master record Data | S | H |
| 02 | Link the requisitioning of Assets with the budget | S | H |
| 03 | Organize and document Assets Supply | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Asset New Requirement |
| **Process Input** | Released Purchase Requisition |
| **Process Output** | Released / Printed asset Purchase Order |
| **Process Owner** | Asset Accountant |
| **Process Volumes** | 10 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Role** |
|  |  |  |  |  |
| 01 | Monitor asset Purchase requisitions YAST account assignment “U” | ME5A YAST_PR |  | Asset Accountant |
| 02 | Create new asset Master | AS01 |  | Asset Accountant |
| 03 | Assign Asset Number at the PR and Release | ME54N ME55 |  | Asset Accountant |
| 04 | Create New Purchase Order account assignment  “A” With reference to the released Asset PR | ME21N |  | Purchaser |
| 05 | Output Purchase order | ME9F |  | Purchaser |
| 06 | Goods Receipt at the Asset Receiving Area | MIGO_GR |  | Asset Stock keeper |
|  |  |  |  |  |

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
| 07 | YMM020 | Assets Requisitions/Purchasing/Inventory | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 6 | Purchasing Groups |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

Poultry will establish a new Area for Receiving and inspecting Assets 

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Purchase Order Items per Buyer | Number | Evaluated |
| 02 | Purchasing Spend Trend | Number | Evaluated |
| 03 | Purchase Requisition touch rate | Number | Evaluated |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Asset Accounting | FI-AA |

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
| 002 | Services & Project |
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

| **List of R****elated Master Data** |
| --- |
| Business Partner (Supplier) |
| Asset Master |
| Conditions |
| Output messages conditions |

### System Configuration Considerations

N/A

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| WRICEFID | TYPE | Description | T.Code |
| R_MM-190 | Report | Create a report to link the Goods receipt Material Document with the PO and the PR to list the requisitioner of the item to simplify delivering to requisitioner | YMM020 |
| R_MM-380 | Report | Create a report to link the PO and the PR to list the requisitioner and recipient of the item to simplify delivering to requisitioner | YMM022 |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PO_ALL_004 | MM: Purchase Order Processing Assets | As Rolls Sheet |
| YMM_PO_REL_004_DA | MM: Purchase Order Asset Division Head Release | As Rolls Sheet |
| YMM_PO_REPORT_ALL_004 | MM: Purchase order Reports All Plants With Prices Assets | As Rolls Sheet |
| YMM_PUR_REPORT_004 | MM: Purchasing Documents Reports Assets | As Rolls Sheet |
| YMM_PO_ALL_002 | MM: Purchase Order Processing Services & Project | As Rolls Sheet |
| YMM_PO_REL_002_D2 | MM: Purchase Order Services & Project  Division Head Release | As Rolls Sheet |
| YMM_PO_REPORT_ALL_002 | MM: Purchase order Reports All Plants With Prices Services & Project | As Rolls Sheet |
| YMM_PUR_REPORT_002 | MM: Purchasing Documents Reports Services & Project | As Rolls Sheet |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Purchasers | Key User |

In end user training, we should collect different Purchasing and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 5 of 6 |
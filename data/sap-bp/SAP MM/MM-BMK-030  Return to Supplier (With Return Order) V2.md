# MM-BMK-030  Return to Supplier (With Return Order) V2

# MM-BMK-030 Return to Supplier (With Return Order)

## Process Description

The return to supplier process begins with a requirement to return an item to a supplier. The buyer creates a return purchase order in the system. The return purchase order is similar to a standard purchase order except for a return flag that sets up the item(s) withdrawn from stock. A credit memo is generated which transfers the liability to the vendor.  

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Covering the returning of goods back to the vendor. | S | H |
| 02 | Monitor supplier returns | S | H |
| 03 | All information for follow-on FI functions is provided | S | H |
| 04 | Goods can be returned with a return reason captured in the document | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Requirement to return an item to a supplier |
| **Process Input** | Return purchase order |
| **Process Output** | Credit Memo for the Supplier |
| **Process Owner** | Purchasing Department |
| **Process Volumes** | 4 |
| **Process Frequencies** | Weekly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Quality or Stock Keeper Inform Purchasing Dep. With returns requirement | Manual By Mail |  | Stock keeper |
| 02 | Create return purchase order | ME21N | ME21N | Purchaser |
| 03 | Stock keeper Issue Returns Order | MIGO_GR | MIGO_GR | Stock keeper |
| 04 | Create credit memo | MIRO | MIRO | AP Accountant |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MMBE | Stock Overview | X |  |
| 02 | MB52 | Display Warehouse Stocks of Material | X |  |
| 03 | MB51 | A list of the material documents | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 30 | Purchasing Groups |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Returned goods must be in the same condition

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Volume of returns Orders | Number of returns orders | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Goods issue | MM-IM |
| 03 | Invoice verification | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

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
| Material Master Record |
| Business Partner Supplier |
| Conditions |

### System Configuration Considerations

| **Reason for Returns** |
| --- |
| **Movement Type** | **Reason Code** | **Description** |
| 161 | 1600 | Poor Quality |
| 161 | 1601 | Expiry Problem |
| 161 | 1602 | Different Packing |
| 161 | 1603 | Damaged |
| 161 | 1604 | Incomplete |
| 161 | 1605 | Not Same ordered |
| 161 | 1606 | Excess Delivery |

- Reason for movement to be mandatory

- Item text field to be mandatory with the reason short description (50 Character)

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_STK_KPR | MM: Stock Keeper | As in the Roles Sheet |
| YMM_PO_ALL_008 | MM: Purchase Order Project materials | As in the Roles Sheet |
| YMM_PO_ALL_007 | MM: Purchase Order Processing Workshop Petty Cache | As in the Roles Sheet |
| YMM_PO_ALL_005 | MM: Purchase Order Processing General Items | As in the Roles Sheet |
| YMM_PO_ALL_004 | MM: Purchase Order Processing Assets | As in the Roles Sheet |
| YMM_PO_ALL_003 | MM: Purchase Order Processing Spare Parts | As in the Roles Sheet |
| YMM_PO_ALL_002 | MM: Purchase Order Processing Services & Project | As in the Roles Sheet |
| YMM_PO_ALL_001 | MM: Purchase Order Processing Strategic items | As in the Roles Sheet |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Purchasers | Key User |
| Stock keepers | Key User |

In the end user training, we should collect different Purchasing and stock keepers to groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 5 of 6 |
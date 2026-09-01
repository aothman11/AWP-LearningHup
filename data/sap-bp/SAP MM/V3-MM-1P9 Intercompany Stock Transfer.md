# V3-MM-1P9 Intercompany Stock Transfer

# MM-19P Intercompany Stock Transfer 

## Process Description

The stock transfer process begins with a requirement to transfer material from one company or plant to another company or plant within the same country. The requester creates the stock transport order under receiving plant.

A warehouse clerk at the issuing plant monitors the materials due to be shipped. Once the STO is created a warehouse clerk gathers the materials and confirms the picked quantities. Once the delivery is complete, the delivery quantities are issued, appropriate documentation is generated, and the goods are shipped, ending the process for the issuing plant.

Goods are received at the receiving plant referencing the purchase documents. Inventory is received into a storage based on fixed parameters proposed from the material master, which can be changed at time of transactional data capture, that is, purchase order creation or goods receipt.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Fulfill the requirement for intercompany stock transfer process between two companies within one country | S | H |
| 02 | Monitor stock in transit status during the stock transfer process. | S | H |
| 03 | Leverage the stock balance between companies and reduce storage value | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Request for transfer between Company Codes |
| **Process Input** | Stock transport Order |
| **Process Output** | Material Document at the receiving Plant |
| **Process Owner** | Production and Inventory Departments |
| **Process Volumes** | 10 |
| **Process Frequencies** | Weekly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **Business Responsible** |
|  |  |  |  |
| 10 | Create intercompany Purchase Order  ( stock transport order with delivery) | ME21N | Purchaser/ Requester |
| 20 | Create Outbound Delivery | VL10D | Stock Keeper |
| 30 | Pick and post goods issue | VL02N | Stock Keeper |
| 40 | Monitor Stock in transit | MB5T | Purchaser/ Requester |
| 50 | Create Billing Document With Reference to Issued Delivery | VF01 VF04 | Billing Clerk |
| 60 | Post goods receipt | MIGO | Stock Keeper |
| 70 | Enter Invoice | MIRO | AP Accountant |
| 80 | Check Customer & Supplier Statement | FBL5N FBL1N | AP Accountant Billing Clerk |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 03 | MMBE | Stock Overview | X |  |
| 05 | MB5T | Stock in transit CC | X |  |
| 06 | ME2W | Purchase Orders for Supplying Plant | X |  |
| 07 | MB51 | Material Document List | X |  |
| 08 | FBL5N | Customer Statement | X |  |
| 09 | FBL1N | Supplier Statement | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 11 | Inventory and production Key users |
| Al-Gouf | 3 | Inventory and production Key users |

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
| 1000 | Al-Watania Poultry |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grand Parent |

| **Purchase Group** |
| --- |
| YL1 | Live Operation Dep |

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
| Batch Management |
| Business Partner - Supplier |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| YZ01 | Live Operation Purchase Order | 4300000000 | 4999999999 | 010 |

- Activate Stock Transfer between Storage Locations

| **Field Selection** |
| --- |
| **Field** | **Mandatory** | **Optional ** |
| Suppling Plant | X |  |
| Receiving Plant | X |  |
| Receiving Storage Location | X |  |

## Technical/Development Related Items

| **Area** | **Availability Check ** | **Checking Rule** | **Stock Overview** | **In/outward movements** | **Checking Control** |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

	

	

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-J45-002 | Form | Local Purchase order | YPO_LOCAL |
| R_SD_210 | Report | List of Billing - Net Amount | YSD018 |
| R_SD-090 | Report | List of billing document | YSD009 |
| E_SD-070 | Enhancement | Authorization in VF04 |  |
| E_SD-080 | Enhancement | Authorization in VF31 |  |
| F_SD-010 | Form | Invoice | YSD_INVOICE_FORM01 |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PO_REPORT_ALL_YZ01 | MM: Purchase order Reports Live Operation Without Display Prices | As rolls Sheet |
| YMM_PO_YZ01_YL1 | MM: Purchase Order Processing Live Operation - Production Sector | As rolls Sheet |

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
| Confidential | Page 6 of 7 |
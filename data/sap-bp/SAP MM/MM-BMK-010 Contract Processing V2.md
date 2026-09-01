# MM-BMK-010 Contract Processing V2

# MM-BMK-010 Contract Processing

## Process Description

Quantity and value contracts for Watania company to order a certain quantity of a product during a specified period. In source determination, contracts replace the purchasing information records 

Target groups are purchasing managers as well as buyers. If they do not exist yet, purchase requisitions and purchase orders created after the contract. You can check the released purchase orders that referenced to contract by monitoring contract.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Reduce procurement costs | S | H |
| 02 | Secure supplies | S | H |
| 03 | Maintain transparency of supplier agreements | S | H |
| 04 | Monitor Contract | S | H |
| 05 | Maintain the contract payment terms and delivery conditions | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Purchasing Plan |
| **Process Input** | Purchase requisition |
| **Process Output** | Released Contract |
| **Process Owner** | Purchasing Manager |
| **Process Volumes** | 100 |
| **Process Frequencies** | Yearly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Receive Annual Purchasing Plan At the First of the Year | Manual |  | Purchasing Manager |
| 02 | Call Quotation For Procurement Process |  |  | Purchaser |
| 03 | Create purchase contract | ME31K | 1-Manage Purchase Contracts ID F1600 2-Manage Purchase Contracts ID F1600A 3-Purchase Contract ID F0350A | Purchasing Manager |
| 04 | Create a purchase requisition | ME51N |  | MRP Controller |
| 05 | Creating purchase order | ME21N | 1-Ordering: Assigned purchase requisition 2-Manage Purchase Requisitions ID F1048 3-Create Purchase Order Via Purchase requisition | Purchaser |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME3C | Outline Agreements by Material Group | X |  |
| 02 | ME3L | Outline Agreements per Vendor | X |  |
| 03 | ME3K | Outline Agreements by Account Assignment | X |  |
| 04 | ME3M | Outline Agreements by Material | X |  |
| 05 | ME3N | Outline Agreements by Agreement No. | X |  |
| 06 | ML95 | List Display: Contracts for Service | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 35 | Purchasing Managers |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Define at the contract to which country Laws will be the reference in case of disagreement.

- Define the delivery terms & conditions at the contract.

- Define the Payment terms at the contract.

- Define the rejection and penalty policies.

- Define the required shipping certificates and specified required analysis.

- Define the Packing terms at the contract.

- To fix and bind the price along the contract period.

- Define the items specifications in details.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Unused Contracts | Number | Minimize |
| 02 | Contract Leakage | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |

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
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 007 | Workshop Pett.Cach |
| 008 | Constructions Cash |

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

| **List of ****R****elated Master Data** |
| --- |
| Material Master |
| Business Partner (Supplier) |

### System Configuration Considerations

| Contract Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YLMK | Local Quantity Contract | LM |  |  |
| YFMK | Foreign Quantity Contract | FM |  |  |
| YLWK | Local Value Contract | LW |  |  |
| YFWK | Foreign Value Contract | FW |  |  |

| Contract Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| LM | 4610000000 | 4619999999 | Internal | 001 |
| FM | 4620000000 | 4629999999 | Internal | 001 |
| LW | 4630000000 | 4639999999 | Internal | 001 |
| FW | 4640000000 | 4649999999 | Internal | 001 |

| **Field S****election Mandatory Fields ** | **Document type** |
| --- | --- |
| Terms of Payment Key | YLMK | YFMK | YLWK | YFWK |
| Inco Term1,2 | YLMK | YFMK | YLWK | YFWK |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| F-MM-BMK-001 | Form | Y_CONT_AR |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 10 | YMM_CONTRACT_006 | MM: Contract Processing Projects |
| 20 | YMM_CONTRACT_REPORT_005 | MM: Contract Processing General Items Reports |
| 30 | YMM_CONTRACT_REPORT_004 | MM: Contract Processing Assets Reports |
| 40 | YMM_CONTRACT_REPORT_003 | MM: Contract Processing Spare Parts Reports |
| 50 | YMM_CONTRACT_REPORT_002 | MM: Contract Processing Services & Project Reports |
| 60 | YMM_CONTRACT_REPORT_001 | MM: Contract Processing Strategic Items Reports |
| 70 | YMM_CONTRACT_ALL | MM: Contract Processing All Purchase Groups |
| 80 | YMM_CONTRACT_005 | MM: Contract Processing General Items |
| 90 | YMM_CONTRACT_004 | MM: Contract Processing Assets |
| 100 | YMM_CONTRACT_003 | MM: Contract Processing Spare Parts |
| 110 | YMM_CONTRACT_002 | MM: Contract Processing Services & Projects |
| 120 | YMM_CONTRACT_001 | MM: Contract Processing Strategic Items |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Purchasing Manager | Key User |
| Different Purchasers | Key User |

In the end-user training, we should collect different Managers and repeat the training for every group.

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 6 of 7 |
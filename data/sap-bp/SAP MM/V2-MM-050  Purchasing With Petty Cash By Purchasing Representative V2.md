# V2-MM-050  Purchasing With Petty Cash By Purchasing Representative V2

# MM-050  Purchasing With Petty Cash BY PURCHASING REPresentative

## Process Description

This Process to manage the workshop petty cash purchasing at Qassim the aim of this process is to document all the items procured directly from the workshop without asking planning department to plan and buy it according to the annual plan.

The main reason for applying of this process was the huge number of items procured from the workshop directly by the cash owned by the department to solve a sudden problem at the maintenance process. the process now completed by sending paper with these procured items to the inventory control department to add on SAP and complete the cycle backward to refund the cash for the maintenance department 

so the aim is to record all of these cases on the System to get the volume of these transactions to find the appropriate decision.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Control Petty Cash for Maintenance Department | S | H |
| 02 | Stop the entry of backwards PRs , release PRs , orders and release purchase orders | S | H |
| 03 | Get the Volume of unplanned items procured by the cash directly | S | H |
| 04 | Save the time for purchasing department and inventory control | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Daily requirement for maintenance |
| **Process Input** | Purchase order |
| **Process Output** | Material Document at the maintenance storage locations |
| **Process Owner** | Maintenance department |
| **Process Volumes** | 50 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

|  |  |  |
| --- | --- | --- |
| **ID** | **Process Step Description** | **Execution** |  |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
| 01 | Create Reservation | MB21 |  | Requester |
| 02 | Create purchase requisition | ME51N |  | Requester |
| 03 | Create Petty Cash Purchase order | ME21N |  | Purchasing Responsible |
| 04 | Recieve the Goods at S.Location | MIGO |  | Stock keeper |
| 05 | Enter the invoice | MIRO |  | AP Accountant |
| 06 | Issue the reservation from S.Location | MIGO |  | Stock keeper |
|  |  |  |  |  |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 02 | MMBE | Stock Overview | X |  |
| 03 | ME2M | Purchase Orders for Supplying Plant | X |  |
| 04 | YOPENPO | Open Purchase Orders | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 50 | Maintenance department |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Inventory Control Must review all these orders every month to take these quantities in consideration at the plan

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected Result** |
| 01 | Number of orders | Standard reports | Small number |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistic invoice verification | MM-LV |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 007 | Workshop – Petty Cash |

| **Plant** |  |
| --- | --- |
| 1010 | Qassim Central |  |
| 1840 | Qassim Agri. | Obsolete |
| 1100 | Processing |  |
| 1310 | Fleet Central Workshop |  |

| **Storage Location ** |  |  |
| --- | --- | --- |
| 1010 | Qassim Central | Q021 | Motor Pool 1 |  |
| 1010 | Qassim Central | Q022 | Motor Pool 2 |  |
| 1010 | Qassim Central | Q023 | Motor Pool 3 |  |
| 1010 | Qassim Central | Q024 | Tires |  |
| 1010 | Qassim Central | Q032 | EWS&Heavy M. S.P |  |
| 1100 | Processing | 1104 | Proc. W2 S.Parts |  |
| 1310 | Fleet CentralWorkshop | Q021 | Heavy Equi-S.P. |  |
| 1310 | Fleet Central Workshop | Q022 | Light Trans-S.P. |  |
| 1310 | Fleet Central Workshop | Q032 | Heavy Trans-S.P. |  |
| 1310 | Fleet Central Workshop | Q023 | Tires |  |
| 1310 | Fleet Central Workshop | Q024 | EWS&Heavy M. S.P |  |
| 1310 | Fleet Central Workshop | Q032 | Heavy Equi-S.P. |  |
| 1840 | Qassim Agri. | 1843 | Agri. S Parts | Obsolete |

### Master Data Considerations (including all relevant data relationships)

| **List of Related Master Data** |
| --- |
| Material Master |
| Batch Management |
| Business Partner |

`

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| Y011 | Direct Procurement - Cash | 4100000000 | 4199999999 | 010 |

| **Purchase Group** |
| --- |
| **Code** | **Description** |
| 007 | Workshop – Petty Cash |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-J45-002 | Form | Local Purchase order | YPO_LOCAL |
| F-MM-120-01 | Form | Material Document | Y_S4P_INV |
| F-MM-BH1-RES-01 | Form | Reservation | YRESERV_201 |
| R_MM-280 | Report | Purchase Orders by PO Number – YOPENPO | YOPENPO |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Role** | **Description** |
| 01 | YMM_PO_1010_Y011 | MM: Purchase Order Processing Maintenance Petty Cash |
| 02 | YMM_PO_ALL_007 | MM: Purchase Order Processing Workshop Petty Cach |
| 03 | YMM_PO_REPORT_ALL_007 | MM: Purchase order Reports All Plants With Prices For Workshop Petty Cach |
| 04 | YMM_PO_REPORT_ALL_007_NO_PRICE | MM: Purchase order Reports All Plants Without Prices For Workshop Petty Cach |
| 05 | YMM_PR_REPORTS_007 | MM: Purchase Requisition Reports Workshop Pett.Cach |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User Groups ** | **Trainer** |
| --- | --- |
| Maintenance Engineers | Key User |
| Warehouse Clerks | Key User |

In end user training, we should collect different users into groups and repeat the training for every group.	

| Explore Phase  MM Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
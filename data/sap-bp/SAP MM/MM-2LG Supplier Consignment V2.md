# MM-2LG Supplier Consignment V2

| MM-2LG: Supplier Consignment |
| --- |

## Process Description

Consignment means that the material provided to you by a vendor is stored in your warehouse but is still owned by the vendor. A liability toward the vendor only arises when you withdraw material from the consignment stores.

In more details :

Vendor Consignment is a process wherein the supplier provides materials and stocks them in the purchaser’s premises. The material remains in the books of the supplier (vendor) until the same is withdrawn from the stock of the consignment and put to use. The inventory gets transferred to the books of the purchaser only when the same is removed from the consignment stock. The supplier (vendor) would not invoice the purchaser initially when they come into the premises of the purchaser. The purchaser is liable to pay the supplier (Vendor) only when the stock is withdrawn (consumed).

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Manage Supplier consignment process | S | H |
| 02 | Manage Consignment Stock on Poultry | S | H |
| 03 | Manage the settlement of consignment liabilities | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Consignment Requirement |
| **Process Input** | New Purchase order. |
| **Process Output** | Settlement Document. |
| **Process Owner** | Purchaser. |
| **Process Volumes** | 1 |
| **Process Frequencies** | Yearly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **Description ** | **Business Role** |
|  |  |  |  |  |
| 01 | Create Info record | ME11 | Create a purchasing info record (PIR) of the category, Consignment. | Purchaser |
| 02 | Create Purchase order | ME21N | Create purchase order with item category K. | Purchaser |
| 03 | Release Purchase Order By Division head | ME29N | Approve Purchase Order | Purchasing Division Head |
| 04 | Release Purchase Order By Department manager | ME29N | Approve Purchase Order | Department manager |
| 05 | Goods Receipt of PO | MIGO | Post Goods Receipt for Purchase Order. | Stock Keeper |
| 06 | Transfer consignment stock to own stock. | MIGO | Transfer consignment stock to your own stock in MVT 411 K. | Stock Keeper |
| 07 | Create Settlement Document. | MRKO | Create Settlement Document. | AP Accountant |
| ** Return consignment stock to supplier ** |
| 08 | Transfer own stock to consignment stock. | MIGO | Transfer consignment stock to your own stock in MVT 412 K. | Stock Keeper |
| 09 | Call process MM-BMK-040 : Returns to Supplier (With Return Movement) |
| 10 | Create Settlement Document. | MRKO | Create Settlement Document. | AP Accountant |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB52 | Stock overview for Multiple Material | X |  |
| 02 | MMBE | Stock overview for One Material | X |  |
| 03 | MB54 | Display Consignment Stock | X |  |
| 04 | MRKO | Display Settlement Document. | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| All Company Locations |  |  |

### Operational Decisions or Logic within the Process

## N/A

### Legal Considerations and Company-Specific Policies

## N/A

### Reference to Key Process Changes and Process KPIs

## N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistics Invoice Verification | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1010 | Qassim Central |
| 1050 | Further Processing |
| 1100 | Processing |
| 1120 | Feed Mill |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Vendor Master |
| Consignment Info Record |
| Batch Master Record |

### System Configuration Considerations

N/A

## Technical/Development Related Items

N/A

		

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** |
| YMM_PO_REL | MM: PO Releaser |
| YMM_PO | MM: Purchase order processing |
| YMM_STK_KPR | MM: Stock Keeper |  | MM: Purchase order processing |
| YFI_AP_ACC | Accounts Payables Accountant |  | MM: Stock Keeper |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Purchaser | Key User |
| Stock Keeper | Key User |
| AP Accountant | Key User |

In end user training, we should collect different Stock keepers, maintenance and projects engineers into three or four groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 5 |
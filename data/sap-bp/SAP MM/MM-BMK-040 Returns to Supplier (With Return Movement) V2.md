# MM-BMK-040 Returns to Supplier (With Return Movement) V2

| MM-BMK-040 Returns to Supplier (With Return Movement) |
| --- |

## Process Description

The return to supplier process begins with a requirement to return an item to a supplier. Two ways will be followed to complete this process.

The first way the stock keeper transfer the quantity will be returned to the supplier to the Returns storage location and this quantity to be labelled with the number of the order and the material document of the receiving this quantity to categorize the physical stock and The buyer creates a return purchase order in the system. The return purchase order is similar to a standard purchase order except for a return flag that sets up the item(s) withdrawn from stock. 

The second way the stock keeper transfer the quantity will be returned to block stock type at his storage location then transfer from his blocked stock to the Returns storage location under the blocked stock type Mvt 350.

Then inform the purchasing department to contact the supplier and coordinate with him to got his quantity or negotiate the requester of the items about the reason for rejection to accept or complete the returns process 

Purchasing department will be responsible of transferring the returns quantity from the blocked stock to unrestricted with Mvt 344 

Then the stock keeper will return delivery the quantity with reference to the material document of the original receiving document.

A credit memo is generated which transfers the liability to the vendor.  

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
| **Process Input** | Return purchase order or return delivery |
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
| 10 | Stock keeper transfer stock from Unrestricted to Blocked with Mvt 343 his own stock | MIGO_TR |  | Stock keeper |
| 20 | Stock Keeper Inform Purchasing Dep. With returns requirement | Manual |  | Stock keeper |
| 30 | Transfer Team transfer the stock from receiving storage location blocked stock to the returns storage location Q085 blocked stock with Mvt 325 | MIGO_TR |  | Stock keeper |
| 40 | Purchaser Monitor Returns Stock at Returns storage location blocked stock | MB52 MMBE |  | Purchaser |
| 50 | Purchaser negotiation with requester and supplier | Manual |  | Purchaser |
|  | **In Case of ** Return with reference to same PO |  |  |  |
| 60 | Purchaser transfer the returns quantity from blocked stock to unrestricted with Mvt 343 this Movement Consider approval from Purchasing department | MIGO_TR |  | Purchaser |
| 70 | Stock keeper return delivery with reference to the original Receiving material document or the delivery Note with Mvt 122 | MIGO_GR |  | Stock keeper |
| 80 | Account Payable Accountant enter the credit Memo with reference to the same PO for this Movement to adjust the Supplier Balance | MIRO |  | AP Accountant |
|  | **In Case of ** Return with new Returns PO |  |  |  |
| 60 | Purchaser transfer the returns quantity from blocked stock to unrestricted with Mvt 344 this Movement Consider approval from Purchasing department | MIGO_TR |  | Purchaser |
| 70 | Purchaser Create new PO for the quantity required to be returned | ME21N |  | Purchaser |
| 80 | Stock Keeper will issue the quantity from returns storage location with reference to the new PO |  |  | Stock keeper |
| 90 | Account Payable Accountant enter the invoice with reference to the old order with the received quantity then enter the credit Memo with reference to the new PO returns to adjust the Supplier Balance | MIRO |  | AP Accountant |
|  | **In Case of ** Returns to supplier cancelled |  |  |  |
|  | Transfer Team will re-transfer the quantity from the returns storage location blocked to the original storage location unrestricted |  |  | Stock keeper |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MMBE | Stock Overview | X |  |
| 02 | MB52 | Display Warehouse Stocks of Material | X |  |
| 03 | MB51 | A list of the material documents | X |  |
| 04 | MIR6 | Invoice Overview Selection | X |  |
| 05 | YMM031 | Returns Orders For Suppliers |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 4 | Purchasing Groups |

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
| 01 | Goods issue | MM-IM |
| 02 | Invoice verification | MM-IV |

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
| 1250 | Layer - Laying |  |
| 1120 | Feed Mill |  |
| 1840 | Agriculture | Obsolete |
| 1210 | Hatchery |  |
| 1244 | Parent Rearing Sherry | Obsolete |
| 1241 | Parent Rearing Dulfa | Obsolete |
| 1200 | Broiler |  |
| 1242 | Parent Rearing Wadi | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Parent-Laying |  |
| 3300 | GP-Parent-Rearing |  |
| 4100 | Qassim Agri. |  |
| **Plant** | **Storage Location** |  |
| 1010 | Q085 | Return To Suppliers |  |
| 1050 | Q085 | Return To Suppliers |  |
| 1100 | Q085 | Return To Suppliers |  |
| 1250 | Q085 | Return To Suppliers |  |
| 1120 | Q085 | Return To Suppliers |  |
| 1840 | Q085 | Return To Suppliers | Obsolete |
| 1210 | Q085 | Return To Suppliers |  |
| 1244 | Q085 | Return To Suppliers | Obsolete |
| 1241 | Q085 | Return To Suppliers | Obsolete |
| 1200 | Q085 | Return To Suppliers |  |
| 1242 | Q085 | Return To Suppliers | Obsolete |
| 3010 | Q085 | Return To Suppliers |  |
| 3100 | Q085 | Return To Suppliers |  |
| 3200 | Q085 | Return To Suppliers |  |
| 3300 | Q085 | Return To Suppliers |  |
| 4100 | Q085 | Supplier Returns |  |

### Master Data Considerations (including all relevant data relationships)

| **List of Related Master Data** |
| --- |
| Material Master Record |
| Business Partner Supplier |
| Conditions |

### System Configuration Considerations

| **Reason for Returns** |
| --- |
| **Movement Type** | **Reason Code** | **Description** |  |
| 122 | 1220 | Poor Quality |  |
| 122 | 1221 | Expiry Problem |  |
| 122 | 1222 | Different Packing |  |
| 122 | 1223 | Damaged |  |
| 122 | 1224 | Incomplete |  |
| 122 | 1225 | Not Same ordered |  |
| 122 | 1226 | Excess Delivery |  |

- Reason for movement to be mandatory

- Item text field to be mandatory with the reason short description (50 Character)

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_STK_KPR_Q085 | MM: Stock Keeper Returns To Suppliers |  |
| YMM_STK_KPR_PUR_Q085 | MM: Purchasing Returns Admin |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Purchasers | Key User |
| Stock keepers | Key User |
| AP Accountant | Key User |

In the end user training, we should collect different Purchasing and stock keepers to groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 9 |
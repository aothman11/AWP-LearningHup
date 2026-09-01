# MM (BDW) Returnables Packaging Processing V4

**BDW ****Returnable Packaging Processing**

## Process Description

Returnable packaging is one of the types of packaging that may be used in a company. This type of packaging is generally very expensive and is loaned to customers at a charge. The returnable packaging processing function enables you to calculate the rental fees due when returnable packaging is loaned to customers.

During the pick and ship steps a pallet (returnable packaging) is added to the delivery. During the billing step, pallets can be returned using a pallet return order with pallet return delivery and goods receipt, or a pallet return delivery without reference and goods receipt.

If a customer does not return the pallets, you can issue a debit memo request. Triggered by billing, the system issues the debit memo based on the debit memo request. Once done, you synchronize the consignment stock quantity and value, then post a manual goods issue for the unreturned pallet.

The following individual functions are included in returnable packaging processing:

- Returnable packaging logistics

- Returnable packaging shipment

- Stock overview of returnable packaging using returnable packaging logistics

- Definition of rental-free times for each sales organization, customer group or customer

- Sales documents for returnable packaging pick-up and returnable packaging issue

- Interim and final settlement of rental fees plus creation of credit and debit memos

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Comprises the management of returnable using the ERP returnable packaging logistics function | S | H |
| 02 | Track returnable | S | H |
| 03 | Charge the customers with the amount of damaged Returnable materials after exceeding the allowed percentage | S | H |
| 04 | Using the Crates will save the amount of packaging used to finished goods | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer request |
| **Process Input** | Sales Order |
| **Process Output** | Consignment Stock movement |
| **Process Owner** | Logistics Sector, Sales and Accounts Receivable |
| **Process Volumes** | 80 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **Business Role** |
|  |  |  |  |
| *Filling the returnable packaging Storage location* |  |
| 10 | Create Purchase Order with the Qty required | ME21N | Purchaser |
| 20 | Post Goods Receipt at the Packing Storage Location | MIGO | Stock keeper |
| 30 | Create Reservation Mvt 311 | MB21 | Transfer Responsible |
| 40 | Stock Transfer | MIGO | Station Stock keeper |
| *In Case Distributers Orders / Branches Transfer (Daily Work) * |  |
| 50 | Create Sales Order  For the Distributers / STO For Branches with the Goods Plus the Returnable packaging items | VA01 ME21N | Sales data entry |
| 60 | Change the sales orders and STOs with the actual loaded Qty for the products and returnable packaging items | VA02 ME22N | Shipping Specialist |
| 70 | Create Delivery with reference to the Sales order / STO | VL10C VL10D | Shipping Specialist |
| 80 | Post goods Issue the Quantities | VL02N VL06G | Finished Stock keepers |
| 90 | Check the Stock in transient in case of STO | MB5T | Transfer Responsible |
| 100 | Create Billing Document for products without returnable items | VF04 | Sales data entry |
| 110 | Check the consignment stock with the customer | MB58 | Sales data entry Billing Accountants Branch AR Accountant Accounting Department |
| 120 | Receive the Quantity at Branch in case of STO | MIGO | ranch Stock keeper |
| *In case of customer Return the packaging ( Daily Work )* |  |
| 130 | Create returnable packaging return order | VA01 | Station Stock keeper |
| 140 | Create return delivery | VL10C | Station Stock keeper |
| 150 | Receive the Qty at the Washing station | MIGO | Station Stock keeper |
| 160 | Check the consignment stock with the customer | MB58 | Billing Accountants Station Stock keeper |
| 170 | Transfer the Produced returnable packages from Washing Station to finished goods storage locations (Daily Work) | MB21 | Transfer Responsible Station Stock keeper |
| *In case of Return the empty packaging from the Branch (Daily Work)* |  |
| 180 | Create returns STO from the branch for the returnable packaging items | ME21N | Branch AR Accountant |
| 190 | Create Delivery with reference to the STO | VL10D | Branch AR Accountant |
| 200 | Post goods Issue the Quantities | VL02N VL06G | Branch AR Accountant |
| 210 | Receive the Qty at the Washing station | MIGO | Station Stock keeper |
| * (Monthly activities with customers)* |  |
| 220 | Do Monthly Inventory with the customer to calculate the deficit quantities | Manually | Branch AR Accountant |
| 230 | Calculate the allowed percentage of deficit quantities | Manually | Branch AR Accountant |
| 240 | Goods Issue the Allowed Qty from the customer consignment stock on the specified Cost Centre based on the agreed Allowed percentage Mvt 551 Special stock V | MIGO | Branch AR Accountant |
| 250 | Create Issue Order for the doesn't returned items based on the agreed Allowed percentage | VA01 | Branch AR Accountant |
| 260 | Create delivery | VL10C | Station Stock keeper |
| 270 | Post Goods issue | VL02N VL06G | Station Stock keeper |
| 280 | Create billing document | VF04 | Branch AR Accountant |
| * (Internal Monthly activities)* |  |
| 290 | Physical inventory Branches locations | Manually | Accounting Department |
| 300 | Physical inventory Qassim Finished Goods Locations | Manually | Accounting Department |
| 310 | Adjust the difference for the Pallets on Pallets Cost Centre with 201 Mvt | MIGO | Accounting Department |
| 320 | Adjust the difference for the Crates on Crates Internal Order (Order type Z200) with 201 Mvt | MIGO | Accounting Department |
| 330 | Distribute the cost of Crates difference and Crates retired on two cost centres (one for processing plant and the other for further processing plant) based on FRESH products actually produces in the each plant (Equivalent Number in order) | KO88 | Accounting Department |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB58 | Consignment stock | X |  |
| 02 | MMBE | Stock Overview | X |  |
| 03 | MB52 | Material Stock | X |  |
| 04 | VL06G | List of Deliveries | X |  |
| 05 | MB25 | Reservation List | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim Slaughters Storage Locations | 10 | Logistics Supervisor |

### Operational Decisions or Logic within the Process

| لابد من تحديد نسبة مقبولة للهالك متفق عليها مع العملاء والفروع 10% | 01 |
| --- | --- |
| لابد من جرد رصيد العملاء شهريا وتحديد الرصيد الفعلي من البالتات الصالحة | 02 |
| عمل تسوية على النظام خاصه بالنسبة المسموحه للعملاء وهي صرف هذه النسبة على مركز تكلفة معين من الماليه وإعادة توزيع هذه الكميات شهريا على تكلفة المنتجات | 03 |
| عمل فاتورة تسوية على حساب العميل بالكميات الزائدة عن النسبة المسموحة حسب الخطوات المذكوره للعمليات | 04 |
| لابد من جرد جميع مستودعات الإنتاج من WIP  ومنتج تام في نهاية كل شهر وعمل تسويتين الأولى صرف الكميات الزائدة على مركزي تكلفة البالتات والأخرى على مركز تكلفة الصناديق البلاستيك | 05 |
| المتابعة الدورية للارصده مع العملاء والفروع والتأكد من إتمام المهام | 06 |

### Legal Considerations and Company-Specific Policies

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
|  |  |  |  |
|  |  |  |  |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
|  |  |  |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org. |

| **Shipping Points** |
| --- |
| 1100 | Processing Shipping Point |
| 1050 | Further Processing Shipping Pt |

| **Distribution Channel** |
| --- |
| 1000 | 10 | Distributers |

| **Sales Office** |
| --- |
| 48 | Jeddah |
| 49 | Qassim |
| 50 | Riyadh |
| 51 | Dammam |
| 52 | Abha |
| 53 | Medina |
| 54 | Taif |
| 55 | Baljurashi |
| 56 | Najran |
| 57 | Sakaka |
| 58 | Tabuk |
| 59 | Mecca |
| 60 | Al Ahsa |
| 61 | Hafar Al Batin |
| 62 | Wadi ad-Dawasir |
| 63 | Al Duwadimi |
| 64 | Jazan |
| 65 | Yanbu |
| 66 | Hail |

| **Plant** |
| --- |
| 1050 | Further Processing |
| 1100 | Slaughter |

| **Storage Locations** |
| --- |
| 1010 | Further Processing | Q009 | Central Store ** |
| 1100 | Slaughter | 1111 | Washing Station Returnable Packaging |

### Master Data Considerations (including all relevant data relationships)

		

| **G/L** |
| --- |
| New G/L |  |

	

| **Cost Centre** |
| --- |
| Cost Centre for Crates under processing plant | ------------ |
| Cost Centre for Crates under further processing plant | ----------- |

	

| **New Routing** |
| --- |
| To be filled By Zeeshan |  |
|  |  |

		

	

| **Work Centre** |
| --- |
| Work Centre for Crates under processing plant | Assigned to a new operation in the routing of fresh products |
| Work Centre for Crates under Further processing plant | Assigned to a new operation in the routing of fresh products |

	

	

| **List of Related Master Data** |
| --- |
| Material Master |
| Customer Master |
| Batch Master |

### System Configuration Considerations

| Sales Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YOR2 | Distributer Order |  |  |  |
| YLA | AWP- Ret. Packaging Pickup |  |  |  |
| YLN | AWP- Ret. Packaging Issue |  |  |  |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
|  |  |  |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 01 | YMM_STK_KPR_1100_1111 | MM: Stock Keeper Washing Station Returnable packaging |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User Groups ** | **Trainer** |
| --- | --- |
|  |  |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 8 |
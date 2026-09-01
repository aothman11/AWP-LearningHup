# V2-MM-BD9 Goods Issue For Sales V2

# MM-BD9 Goods issue for sales

## Process Description

The process starts with the creation of a standard sales order. Depending on the customer and the material, various special events take place during order entry, such as customer or material pricing, availability check and credit check.

If enough material exists in the required storage location, the process proceeds normally. If not, a stock movement takes place. Once picked, the physically shipped quantity registered in the system to ensure that there are no differences between the sales order and the delivery document. 

After the completion of picking, the shipping specialist relieves the inventory. This inventory relief is the actual recording of the physical quantity that shipped to the customer. The cost of goods sold recorded in financial accounting.

Once the inventory is relieved, you can invoice the delivery and record the revenue and the cost of goods sold in management accounting. 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Full integration with the Sales and shipping Departments | S | H |
| 02 | Monitor and Track quantities to be Issued to customers | S | H |
| 03 | Management of materials by quantity and value. | S | H |
| 04 | Control the Shelf life of the materials at the time of issuing for the batch management materials to be able to work with FIFO policy | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Order from Sales department |
| **Process Input** | Sales order entry ( Customer , materials and Quantities ) |
| **Process Output** | Material document for the issued delivery |
| **Process Owner** | Stock keeper |
| **Process Volumes** | 1000 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Sales Administrator** | **Shipping Specialist** | **Warehouse Clerk** | **Stock keeper** |
|  |  |  |  |  |  |  |  |
| 01 | Create Sales Order | VA01 | Sales Order IDF1814 | R | I |  |  |
| 02 | Create Delivery Document (Print picking list) | VL10C |  |  | R | I |  |
| 03 | Physical picking and check batches | Manual |  |  |  | R | I |
| 04 | Post Goods Issue | VL06G VL02N | 1-Change Outbound Delivery 2-Outbound Deliveries for Goods Issue(VL06G) |  |  |  | R |
|  |  |  |  |  |  |  |  |

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 02 | ID F1595 | Stock - Multiple Materials |  | X |
| 03 | MMBE | Stock Overview | X |  |
| 04 | ID F1076 | Stock - Single Material |  | X |
| 05 | VL06O | Delivery monitor for outbound delivery | X |  |
| 06 | VL06G | Deliveries for Goods Issue | X |  |
| 07 |  | Analyze Outbound Deliveries |  | X |
| 08 |  | Outbound Deliveries |  | X |
| 09 |  | My Sales Orders(VL10A) |  | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Processing Plant | 8 | Inventory Manager |
| Further processing | 7 | Inventory Manager |
| Jeddah | 3 | Inventory Manager |
| Qassim | 3 | Inventory Manager |
| Riyadh | 4 | Inventory Manager |
| Dammam | 2 | Inventory Manager |
| Abha | 2 | Inventory Manager |
| Madina | 2 | Inventory Manager |
| Taef | 1 | Inventory Manager |
| Bolgorashi | 1 | Inventory Manager |
| Nagran | 1 | Inventory Manager |
| Sakaka | 1 | Inventory Manager |
| Tabuk | 1 | Inventory Manager |
| Makkah | 2 | Inventory Manager |
| Al-Ahsa | 1 | Inventory Manager |
| Hafr Elbatin | 1 | Inventory Manager |
| Wadi Addawaser | 1 | Inventory Manager |
| Addawadmi | 1 | Inventory Manager |
| Jizan | 1 | Inventory Manager |
| Yanbu | 1 | Inventory Manager |
| Hail | 1 | Inventory Manager |
| Qassim Agri. | 1 | Inventory Manager |

### Operational Decisions or Logic within the Process

- No change in batches in delivery document; sales administrator should do any change on sales order.

- The nearest expire batch should be determined by default in Delivery.

- The sales administrator have an authority to delete sales order, for sales order cancellation he can choose one of the rejection reason.

- At the end of day, the Sales administrator should review and solve any sales order issue.

### Legal Considerations and Company-Specific Policies

- Original and four copies from the invoice will be signed from the driver and he is responsible to get the customer sign on them and deliver the original to customer.

### Reference to Key Process Changes and Process KPIs

- Sales administrator will not has any authority to issue warehouse stock like old system; it is the responsibility of stock keeper.

- Current printers to be changed, either A4 printers or dot matrix printers that supports PDF printing (PCL or postscript).

- Shipping Specialist Must Check, the batches suggested from SAP and physically Issue It.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Completed Deliveries | % | Maximize |
| 02 | Branch Expired Batches | Quantity & Amount | Minimize |
| 03 | Analyze Outbound Deliveries(FIORI APP) | No of Errors& Warning | Minimize |
| 04 | Inventory Turnover (FIORI APP) | (Inventory/COGS)*365 | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Sales Orders | SD-SLS-SO |
| 02 | Outbound Delivery Document | LE-SHP-DL |
| 03 | Batch management | LO-BM |
| 04 | Inventory Management | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design  

### Organization Structure Considerations

| **Plant** |  |
| --- | --- |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
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
| 1620 | Wadi addawaser | Obsolete |
| 1630 | Addawadmi |  |
| 1640 | jizan |  |
| 1650 | Yanbu |  |
| 1660 | Hail |  |
| 4100 | Qassim Agri. |  |
| 1800 | Qassim Export | Obsolete |

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org |

| **Distribution  Channel**** ** |
| --- |
| 10 | Distributers |
| 20 | Direct Sales |
| 30 | Export |

| **D****ivision** |
| --- |
| 10 | Fresh |
| 20 | Frozen |
| 30 | Eggs |
| 40 | By Products |
| 50 | Agriculture |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Business Partner (Customer) |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

| **Delivery Item Category** |
| --- |
| **Delivery Type ** | **Item Category** | **Check quantity 0** | **Check minimum quantity** | **Check over-delivery** | **Relevant for Picking** |
| YLF | TAN | B | B | B | No |
| YLF | TANN | B | B | B | No |

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Role** | **Description** |
| 01 | YMM_SHP_OUT_DLV_SHPT_1010 | MM: Shipping Specialist Process Outbound Deliveries Qassim Centeral |
| 02 | YMM_SHP_OUT_DLV_SHPT_1050 | MM: Shipping Specialist Process Outbound Deliveries Further Processing |
| 03 | YMM_SHP_OUT_DLV_SHPT_1100 | MM: Shipping Specialist Process Outbound Deliveries Processing |
| 04 | YMM_SHP_OUT_DLV_SHPT_1120 | MM: Shipping Specialist Process Outbound Deliveries Feed Mill |
| 05 | YMM_SHP_OUT_DLV_SHPT_1140 | MM: Shipping Specialist Process Outbound Deliveries Yanbu Grain Hub |
| 06 | YMM_SHP_OUT_DLV_SHPT_1210 | MM: Shipping Specialist Process Outbound Deliveries  Hatchery |
| 07 | YMM_SHP_OUT_DLV_SHPT_1250 | MM: Shipping Specialist Process Outbound Deliveries  Laying |
| 08 | YMM_SHP_OUT_DLV_SHPT_1250_40 | MM: Shipping Specialist Process Outbound Deliveries  Laying By Product Products |
| 09 | YMM_SHP_OUT_DLV_SHPT_1480 | MM: Shipping Specialist Process Outbound Deliveries Jeddah |
| 10 | YMM_SHP_OUT_DLV_SHPT_1490 | MM: Shipping Specialist Process Outbound Deliveries Qassim |
| 11 | YMM_SHP_OUT_DLV_SHPT_1500 | MM: Shipping Specialist Process Outbound Deliveries Riyadh |
| 12 | YMM_SHP_OUT_DLV_SHPT_1510 | MM: Shipping Specialist Process Outbound Deliveries Dammam |
| 13 | YMM_SHP_OUT_DLV_SHPT_1520 | MM: Shipping Specialist Process Outbound Deliveries Abha |
| 14 | YMM_SHP_OUT_DLV_SHPT_1530 | MM: Shipping Specialist Process Outbound Deliveries Medina |
| 15 | YMM_SHP_OUT_DLV_SHPT_1540 | MM: Shipping Specialist Process Outbound Deliveries Medina |
| 16 | YMM_SHP_OUT_DLV_SHPT_1550 | MM: Shipping Specialist Process Outbound Deliveries Baljurashi |
| 17 | YMM_SHP_OUT_DLV_SHPT_1560 | MM: Shipping Specialist Process Outbound Deliveries Najran |
| 18 | YMM_SHP_OUT_DLV_SHPT_1570 | MM: Shipping Specialist Process Outbound Deliveries Sakaka |
| 19 | YMM_SHP_OUT_DLV_SHPT_1580 | MM: Shipping Specialist Process Outbound Deliveries Tabuk |
| 20 | YMM_SHP_OUT_DLV_SHPT_1590 | MM: Shipping Specialist Process Outbound Deliveries Mecca |
| 21 | YMM_SHP_OUT_DLV_SHPT_1600 | MM: Shipping Specialist Process Outbound Deliveries Al Ahsa |
| 22 | YMM_SHP_OUT_DLV_SHPT_1610 | MM: Shipping Specialist Process Outbound Deliveries Hafar Al Batin |
| 23 | YMM_SHP_OUT_DLV_SHPT_1620 | MM: Shipping Specialist Process Outbound Deliveries Wadi ad-Dawasir |
| 24 | YMM_SHP_OUT_DLV_SHPT_1630 | MM: Shipping Specialist Process Outbound Deliveries Al Duwadimi |
| 25 | YMM_SHP_OUT_DLV_SHPT_1640 | MM: Shipping Specialist Process Outbound Deliveries Jazan |
| 26 | YMM_SHP_OUT_DLV_SHPT_1650 | MM: Shipping Specialist Process Outbound Deliveries Yanbu |
| 27 | YMM_SHP_OUT_DLV_SHPT_1660 | MM: Shipping Specialist Process Outbound Deliveries Hail |
| 28 | YMM_SHP_OUT_DLV_SHPT_1850 | MM: Shipping Specialist Process Outbound Deliveries  By Products |
| 29 | YMM_SHP_OUT_DLV_SHPT_3010 | MM: Shipping Specialist Process Outbound Deliveries 3010 Shipping Point |
| 30 | YMM_SHP_OUT_DLV_SHPT_3100 | MM: Shipping Specialist Process Outbound Deliveries 3100 Shipping Point |
| 31 | YMM_SHP_OUT_DLV_SHPT_3200 | MM: Shipping Specialist Process Outbound Deliveries 3200 Shipping Point |
| 32 | YMM_SHP_OUT_DLV_SHPT_3300 | MM: Shipping Specialist Process Outbound Deliveries 3300 Shipping Point |
| 33 | YMM_SHP_OUT_DLV_SHPT_ALL | MM: Shipping Specialist Process Outbound Deliveries All Shipping Points |
| 34 | YMM_SHP_OUT_DLV_SHPT_EXPORT | MM: Shipping Specialist Process Outbound Deliveries Export |
| 35 | YMM_STK_KPR | MM: Stock Keeper( Parent) |
| 36 | YMM_SHP_OUT_DLV_SHPT_4100 | MM: Shipping Specialist Process Outbound Deliveries 4100 Shipping Point |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Sales Administrators | Key User |
| Branches Warehouse Clerks | Key User |

In end user training, we should collect different branches (19 branches) into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 7 of 8 |
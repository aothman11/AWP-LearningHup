# V3_01-SD-001 Van Sales

| **Van sales** |
| --- |

## Process Description

Spirit Smart sales is an android application that simplifies complex direct store delivery processes, integrates SAP back office with customer facing activities to empower Sales Representatives and their managers to make real time decisions on the spot.

**In the sales system there are two stages**

**Van Loading**** **

It is the process of loading the sales representative inventory, the relevant quantity is removed from regular inventory in your plant and is added to the special stock for the sales Rep. The total valuated stock for the plant remains the same.

**Uploading**

If the sales rep returns consignment stock to the branch, the relevant quantity is deducted from the sales rep's special stock and is added back into regular stock at the plant where the goods are returned. Total valuated stock remains the same since the returned stock was regarded as part of your own inventory even while it was with the sales rep.

**Inventory the sales representative**

An inventory is taken of the sales representative at any time to see if there is an inventory deficit in the sales representative, When there is a deficiency in the inventory of the sales representative, the sales representative is billed with the value of the deficit

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 10 | One serial ( Number Range ) across all branches | S | H |
| 20 | Any sales order should has only one delivery document , no partial delivery and no over delivery | S | H |
| 30 | No saving for incomplete order | S | H |
| 40 | Availability check should be on storage location and batch level not Plant level and the batch should be determined in sales order automatically based on the nearest expiration date | S | H |
| 50 | No fraction in sales order quantity, for example it is not allowed to order 0.5 PC | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer request |
| **Process Input** | Sales Order |
| **Process Output** | Consignment Stock movement |
| **Process Owner** | Logistics Sector and Sales |
| **Process Volumes** | 120 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **Sales Representative** | **Internal Sales Rep.** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** |
| ***In Case Van Loading (Daily Work) *** |  |  |  |  |  |  |
| **01** | Create sales order for loading materials from branch store to sales rep. store | VA01 | Manage Sales Orders | I | R | I |  |  |
| **02** | Create delivery with reference to the Sales order | VL10C | Create Outbound Deliveries | I |  | R/A |  |  |
| **03** | Post goods issue the quantities | VL02N VL06G | My Outbound Delivery Monitor | I |  | R/A |  |  |
| ***In case Van Unloading ( Daily Work )*** |  |  |  |  |  |  |
| **04** | Create sales order for unloading materials from sales rep. store to branch store. | VA01 | Manage Sales Orders | I | R | I |  |  |
| **05** | Create return delivery | VL10C | Create Outbound Deliveries | I |  | R/A |  |  |
| **06** | Post goods receipt the quantities | VL02N VL06G | My Outbound Delivery Monitor | I |  | R/A |  |  |
| ***In case Inventory Sales Rep.( Daily Work )*** |  |  |  |  |  |  |
| **07** | Create sales rep. physical inventory | YRPC | Physical Inventory Monitor | I |  | I | R |  |
| **08** | Create delivery with reference to the sales order | VL10C | Create Outbound Deliveries | I |  | R/A | I |  |
| **09** | Post goods issue the quantities | VL02N VL06G | My Outbound Delivery Monitor | I |  | R/A | I |  |
| **10** | Generate billing document | VF04 | Create Billing Documents | I |  |  | R/A | I |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB58 | Consignment stock | X |  |
| 02 | MMBE | Stock Overview | X |  |
| 03 | MB52 | Material Stock | X |  |
| 04 | VL06G | List of Deliveries | X |  |
| 05 | YSD003 | List of sales order | X |  |
| 06 | YSD009 | List of billing document | X |  |
| 07 | YVS001 | Van sales summary report | X |  |
| 08 | YVS002 | Van sales return details report | X |  |
| 09 | YVS003 | Van sales – Invoices not posted | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 4 |  |
| Riyadg | 14 |  |
| Jeddah | 7 |  |
| Medina | 2 |  |
| Mecca | 2 |  |
| Dammam | 4 |  |
| Abha | 2 |  |
| Taif | 2 |  |
| Bolgorashi | 2 |  |
| Nagran | 2 |  |
| Sakaka | 2 |  |
| Tabuk | 2 |  |
| Ehsaa | 2 |  |
| Hafr elbatin | 2 |  |
| wadi addawaser | 2 |  |
| Addawadmi | 2 |  |
| Jizan | 2 |  |
| Yanboa | 2 |  |
| Hael | 2 |  |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 02 | Batch management | LO-BM |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org. |

| **Shipping Points** |
| --- |
| 1480 | Jeddah Shipping Point |
| 1490 | Qassim Shipping Point |
| 1500 | Riyadh Shipping Point |
| 1510 | Dammam Shipping Point |
| 1530 | Medina Shipping Point |
| 1590 | Mecca Shipping Point |
| 1520 | Abha Shipping Point |
| 1540 | Taif Shipping Point |
| 1550 | Bolgorashi Shipping Point |
| 1560 | Nagran Shipping Point |
| 1570 | Sakaka Shipping Point |
| 1580 | Tabuk Shipping Point |
| 1600 | Ehsaa Shipping Point |
| 1610 | Hafr elbatin Shipping Point |
| 1620 | wadi addawaser Shipping Point |
| 1630 | Addawadmi Shipping Point |
| 1640 | Jizan Shipping Point |
| 1650 | Yanboa Shipping Point |
| 1660 | Hael Shipping Point |

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

| **Storage Locations** |
| --- |
| 1480 | Jeddah Branch | 1481 | Fresh |
|  |  | 1483 | Returns Expired |
| 1490 | Qassim Branch | 1491 | Fresh |
|  |  | 1493 | Returns Expired |
| 1500 | Riyadh Branch | 1501 | Fresh |
|  |  | 1503 | Returns Expired |
| 1510 | Dammam Branch | 1511 | Fresh |
|  |  | 1513 | Returns Expired |
| 1530 | Medina Branch | 1531 | Fresh |
|  |  | 1533 | Returns Expired |
| 1590 | Mecca Branch | 1591 | Fresh |
|  |  | 1593 | Returns Expired |
| 1520 | Abha Branch | 1521 | Fresh |
|  |  |  | Returns Expired |
|  |  |  |  |
| 1540 | Taif Branch | 1541 | Fresh |
|  |  | 1543 | Returns Expired |
| 1550 | Bolgorashi Branch | 1551 | Fresh |
|  |  | 1553 | Returns Expired |
| 1560 | Nagran Branch | 1561 | Fresh |
|  |  | 1563 | Returns Expired |
| 1570 | Sakaka Branch | 1571 | Fresh |
|  |  | 1573 | Returns Expired |
| 1580 | Tabuk Branch | 1581 | Fresh |
|  |  | 1583 | Returns Expired |
| 1600 | Ehsaa Branch | 1601 | Fresh |
|  |  | 1603 | Returns Expired |
| 1610 | Hafr elbatin Branch | 1611 | Fresh |
|  |  | 1613 | Returns Expired |
| 1620 | wadi addawaser Branch | 1621 | Fresh |
|  |  | 1623 | Returns Expired |
| 1630 | Addawadmi Branch | 1631 | Fresh |
|  |  | 1633 | Returns Expired |
| 1640 | Jizan Branch | 1641 | Fresh |
|  |  | 1643 | Returns Expired |
| 1650 | Yanboa Branch | 1651 | Fresh |
|  |  | 1653 | Returns Expired |
| 1660 | Hael Branch | 1661 | Fresh |
|  |  | 1663 | Returns Expired |

		

### System Configuration Considerations

| **Sales Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** | **Credit Check** | **Credit Group** | **Check Division** |
|  |  | **From** | **To** |  |  |  |  |  |
| YVLO | Van Loading | 0140000000 | 0149999999 | YVLO |  |  |  |  |
| YVUL | Van Unloading | 0150000000 | 0159999999 | YVUL |  |  |  |  |

| Sales Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YVLO | Van Loading | 14 |  |  |
| YVUL | Van Unloading | 15 |  |  |

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YVLO | 1000 | 20 | 00 |
| YVUL | 1000 | 20 | 00 |

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YVLO | KBN |
| YVUL | KAN |

| **Delivery Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Order Required** |
|  |  | **From** | **To** |  |
| YVLO | Van Loading Delivery | 0810000000 | 0819999999 | Yes |
| YVUL | Van Unloading | 0820000000 | 0829999999 | Yse |

| **Copying Control for Deliveries** |
| --- |
| **Delivery Type ** | **Order Type** | **Item Category** | **Update doc. flow** |
| YVLO | YVLO | KBN | Yes |
| YVUL | YVUL | KAN | Yes |
|  |  |  |  |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_SD-010 | Enhancement | Hide material cost from sales order conditions |
| E_SD-020 | Enhancement | USEREXIT_FIELD_MODIFICATION |
| E_SD-030 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAK |
| E_SD-040 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAP |
| E_SD-050 | Enhancement | USEREXIT_SAVE_DOCUMENT_PREPARE |
| E_SD-060 | Enhancement | USEREXIT_CHECK_VBAK |
| E_SD-070 | Enhancement | Authorization in VF04 |
| E_SD-080 | Enhancement | Authorization in VF31 |
| E_SD-090 | Enhancement | change Rounding behaviour in pricing in case of quantity rounding |
| F_SD-010 | Form | YSD_INVOICE_FORM01 Invoice |
| F_SD-020 | Form | YSD_SDOC_FORM01 Order Confirmation |
| F_SD-030 | Form | ZSD_OUTBOUND_DEL01 Outbound Delivery |
| R_SD-010 | Report | YSD001 Customers List |
| R_SD-020 | Report | YSD002 Stock Overview by CAR |
| R_SD-030 | Report | YSD003 List of sales orders |
| R_SD-040 | Report | YSD004 List of Deliveries |
| R_SD-050 | Report | YSD005 Sales Order Status |
| R_SD-070 | Report | YSD007 Sales Orders items |
| R_SD-080 | Report | YSD008 Allocated Qty |
| R_SD-090 | Report | YSD009 List of billing document |
| R_SD-110 | Report | YSD011 Aging Report |
| R_SD-140 | Report | YSD014 Customer Statements |
| R_SD-170 | Report | YVS001 Van Sales – Sales Summary |
| R_SD-180 | Report | YVS002 Van Sales – Sales Return Details |
| R_SD-190 | Report | YVS003 Van Sales – Invoices not Posted |
| J_SD_010 | Job | SMART SALES CP |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 01 | YSD_Sales_Order_1480_20_YVLO | SD: Sales Order Processing Jeddah Branch Direct Sales Van Loading |
| 02 | YSD_Sales_Order_1490_20_YVLO | SD: Sales Order Processing Qassim Branch Direct Sales Van Loading |
| 03 | YSD_Sales_Order_1500_20_YVLO | SD: Sales Order Processing Riyadh Branch Direct Sales Van Loading |
| 04 | YSD_Sales_Order_1510_20_YVLO | SD: Sales Order Processing Dammam Branch Direct Sales Van Loading |
| 05 | YSD_Sales_Order_1530_20_YVLO | SD: Sales Order Processing Medina Branch Direct Sales Van Loading |
| 06 | YSD_Sales_Order_1590_20_YVLO | SD: Sales Order Processing Mecca Branch Direct Sales Van Loading |
| 07 | YSD_Sales_Order_1480_20_YVUL | SD: Sales Order Processing Jeddah Branch Direct Sales Van Unloading |
| 08 | YSD_Sales_Order_1490_20_YVUL | SD: Sales Order Processing Qassim Branch Direct Sales Van Unloading |
| 09 | YSD_Sales_Order_1500_20_YVUL | SD: Sales Order Processing Riyadh Branch Direct Sales Van Unloading |
| 10 | YSD_Sales_Order_1510_20_YVUL | SD: Sales Order Processing Dammam Branch Direct Sales Van Unloading |
| 11 | YSD_Sales_Order_1530_20_YVUL | SD: Sales Order Processing Medina Branch Direct Sales Van Unloading |
| 12 | YSD_Sales_Order_1590_20_YVUL | SD: Sales Order Processing Mecca Branch Direct Sales Van Unloading |

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
| Confidential | Page 10 of 10 |
# V3-SD-ZS1 Consignment Processing

# Consignment processing

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | One serial ( Number Range ) across all branches | S | H |
| 02 | Any sales order should has only one delivery document , no partial delivery and no over delivery | S | H |
| 03 | No Manual price or discounts in sales . | S | H |
| 04 | No saving for incomplete order | S | H |
| 05 | Availability check should be on storage location and batch level not Plant level and the batch should be determined in sales order automatically based on the nearest expiration date | S | H |

### Business Process Description

Consignment goods are goods which are stored at the customer location but still owned by your company. The customer is not obliged to pay for these goods until they remove them from consignment stock. Otherwise, the customer can usually return consignment goods which are not required.

Consignment processing offers the participating partners several advantages. Customers store the consignment goods at their own warehouses. The customer can access the goods in the consignment warehouse at any time. They are only billed for the goods when they are removed from the warehouse and only for the actual quantity taken.

There are four main transactions for processing consignment stock, all of which support separate management of stock:

- [Creating a Consignment Fill-Up](http://help.sap.com/saphelp_erp60_sp/helpdata/en/e3/65b65334e6b54ce10000000a174cb4/content.htm)

- [Creating Consignment Issue](http://help.sap.com/saphelp_erp60_sp/helpdata/en/e6/65b65334e6b54ce10000000a174cb4/content.htm)

- [Creating a Consignment Pick-Up](http://help.sap.com/saphelp_erp60_sp/helpdata/en/e9/65b65334e6b54ce10000000a174cb4/content.htm)

- [Creating a Consignment Return](http://help.sap.com/saphelp_erp60_sp/helpdata/en/ec/65b65334e6b54ce10000000a174cb4/content.htm) ( not applicable in Al-Watania Poultry)

##### **Consignment fill-up**

Consignment fill up is used to supplement the customer’s consignment stock.

Goods issue of the appropriate stock is posted from the unrestricted-use stock to consignment stock (special stock).

When you ship consignment stock to the customer, you record the transaction by creating a consignment fill-up order. As a result, the system carries out the following actions:

- If special stock does not yet exist in your inventory for the customer (or special stock partner), the system creates it when goods issue is posted.

- The relevant quantity is removed from regular inventory in your plant and is added to the special stock for the customer. The total valuated stock for the plant remains the same.

- The transaction is not relevant for billing since the consignment stock remains the property of your company.

##### **Consignment issue**

Consignment issue enables the customer to take consignment goods from the special stock for their use or to sell.

Consignment issue involves removing the goods from the special stock and making it the property of the customer.

When the customer removes consignment stock to use or sell, you record the transaction in the system by creating a consignment issue order. As a result, the system carries out the following actions:

- When goods issue is posted, the relevant quantity is deducted from both the customer’s special stock and your own total valuated stock.

- The transaction is relevant for billing since the goods now become the property of the customer.

##### **Consignment pick-up**

Any consignment goods stored at the customer’s warehouse that haven’t been used can be reposted to your company’s warehouse with a consignment pick-up.

If the customer returns consignment stock to you, you record the transaction in the system by creating a consignment pick-up order. As a result, the system carries out the following actions:

- When goods issue is posted, the relevant quantity is deducted from the customer’s special stock and is added back into your regular stock at the plant where the goods are returned. Your total valuated stock remains the same since the returned stock was regarded as part of your own inventory even while it was at the customer’s premises.

- This transaction is not relevant for billing.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer Order by email , fax , phone or by hand |
| **Process Input** | Sales order entry ( Customer , materials and Quantities ) |
| **Process Output** | Billing document number and accounting documents generated |
| **Process Owner** | Sales Administrator |
| **Process Volumes** | Around 10 orders / day |
| **Process Frequencies** | Daily |

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | ** Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** |
| **Consignment Fill-Up** |  |  |  |  |  |  |
| 01 | Consignment Fill-Up Sales Order Entry | VA01 | Manage Sales Orders | R | I |  |  |
| 02 | Delivery Creation | VL10C | Create Outbound Deliveries |  | R |  |  |
| 03 | Check Batches | Manual | Manual |  | R/A |  |  |
| 04 | Post Goods Issue | VL06G | My Outbound Delivery Monitor |  | R |  |  |
| **Consignment Issue** |  |  |  |  |  |  |
| 01 | Consignment Issue Order Entry | VA01 | Manage Sales Orders | R | I |  |  |
| 02 | Delivery Creation | VL10C | Create Outbound Deliveries |  | R |  |  |
| 03 | Check Batches | Manual | Manual |  | R/A |  |  |
| 04 | Post Goods Issue | VL06G | My Outbound Delivery Monitor |  | R | I |  |
| 05 | Generate Billing Document | VF04 | Create Billing Documents |  |  | R | I |
| **Consignment Pick-Up** |  |  |  |  |  |  |
| 01 | Consignment Pick-Up Sales Order Entry | VA01 | Manage Sales Orders | R | I |  |  |
| 02 | Delivery Creation | VL10C | Create Outbound Deliveries |  | R |  |  |
| 03 | Check Batches | Manual | Manual |  | R/A |  |  |
| 04 | Post Goods Receipt | VL06G | My Outbound Delivery Monitor |  | R |  |  |
| **Consignment ****Return** |  |  |  |  |  |  |
| 01 | Consignment Pick-Up Sales Order Entry | VA01 | Manage Sales Orders | R | I |  |  |
| 02 | Delivery Creation | VL10C | Create Outbound Deliveries |  | R |  |  |
| 03 | Check Batches | Manual | Manual |  | R/A |  |  |
| 04 | Post Goods Receipt | VL06G | My Outbound Delivery Monitor |  | R |  |  |
| 05 | Generate Billing Document | VF04 | Create Billing Documents |  |  | R | I |

	

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Jeddah | 4 | Branch Manager |
| Qassim | 3 | Branch Manager |
| Riyadh | 4 | Branch Manager |
| Dammam | 2 | Branch Manager |
| Abha | 2 | Branch Manager |
| Madina | 2 | Branch Manager |
| Taif | 2 | Branch Manager |
| Bolgorashi | 2 | Branch Manager |
| Nagran | 2 | Branch Manager |
| Sakaka | 2 | Branch Manager |
| Tabuk | 2 | Branch Manager |
| Mekka | 3 | Branch Manager |
| Ehsaa | 2 | Branch Manager |
| Hafr elbatin | 2 | Branch Manager |
| wadi addawaser | 2 | Branch Manager |
| Addawadmi | 2 | Branch Manager |
| jizan | 2 | Branch Manager |
| Yanboa | 2 | Branch Manager |
| Hael | 2 | Branch Manager |

### Legal Considerations and Company-Specific Policies

- Manual invoices should be collected and filed with SAP invoices.

- Any difference in driver stock should be settled in the same day.

### Reference to Key Process Changes and Process KPIs

- Sales order document will not be considered as invoice like the old system, Billing document will be generated after Physical post goods issue.

- Internal sales representative will not has any authority to issue warehouse stock like old system, it is the responsibility of Shipping Specialist (In case of consignment issue we will create deliveries and post them collectively).

- Current printers will be changed, either A4 printers or dot matrix printers that supports PDF printing (PCL or post script).

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit ****of  Measure** | **Direction of Improvement** |
| 01 | Consignment Stock | Quantity | Zero ( at the end of the day) |
| 02 | Blocked sales orders for credit check | % | Minimize |
| 03 | Rejected sales orders | % | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 02 | Credit management | FSCM-CR |
| 03 | Batch management | LO-BM |
| 04 | Account Determination | SD-BF-ACT |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org |

| **Distribution  Channel**** ** |
| --- |
| 20 | Direct Sales |

| **D****ivision** |
| --- |
| 10 | Fresh |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Customer) |
| Material Master |
| Conditions |
| Customer Material Info |
| Free Goods |

### System Configuration Considerations

| **Sales Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** | **Credit Check** | **Credit Group** | **Check Division** |
|  |  | **From** | **To** |  |  |  |  |  |
| YKB | Consignment Fill-up | 0110000000 | 0119999999 | YLF | N/A | D | Y1 |  |
| YKA | Consignment Pick-up | 0120000000 | 0129999999 | YLR | N/A | - | - |  |
| YKE | Consignment Issue | 0120000000 | 0129999999 | YLF | YF2 | D | Y1 |  |
| YKR | Consignment Returns | 0120000000 | 0129999999 | YLR | YR1 | - | - |  |

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YKB | 1000 | 20 | 10 |
| YKA | 1000 | 20 | 10 |
| YKE | 1000 | 20 | 10 |
| YKR | 1000 | 20 | 10 |

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YKB | KBN |
| YKA | KAN |
| YKE | KEN |
| YKR | KEN - REN |

| **Assign Document Pricing Procedure to Document Type** |
| --- |
| **Document Pricing Procedure** | **Description** | **Document Type** |
| Y1 | Poultry - Sales | YKB |
| Y1 | Poultry - Sales | YKA |
| Y1 | Poultry - Sales | YKE |
| Y1 | Poultry - Sales | YKR |

| **Define Pricing Procedure Determination** |
| --- |
| **Sales Org.** | **Distribution Channel** | **Division** | **Document Pr. Procedure** | **Customer Pr. Procedure** | **Pricing Procedure** |
| 1000 | 20 | 00 | Y1 | 1 | Y00001 |
|  |  |  |  |  |  |
| **Pricing Procedures (Y00001)** |
| **Step** | **Condition Type** | **Description** | **From** | **To** | **Account key** |
| 20 | YPR0 | Circular Price | 0 | 0 | YR1 |
| 30 | R100 | 100% discount | 0 | 0 | YD3 |
| 40 | YCOM | Commercial Dis. % | 0 | 0 | YD1 |
| 100 |  | Price After Commercial Dis. | 0 | 0 |  |
| 145 | YPRM | Promotions Disc. % | 100 | 0 | YD3 |
| 146 | YPRV | Promotions Disc. Val | 100 | 0 | YD3 |
| 150 | YEXP | Near Expire Dis. % | 100 | 146 | YD2 |
| 153 |  | Price A (Comm & Pro) | 0 | 0 |  |
| 155 | ZCR2 | CR Monthly Inc. % | 153 | 0 | YD4 |
| 160 | YPRT | Transportation Cost | 0 | 0 | YTC |
| 500 |  | Net Value | 0 | 0 |  |
| 600 | MWST | Output Tax | 0 | 0 | MWS |
| 900 |  | Total Amount | 0 | 0 |  |
| 910 | SKTO | Cash Discount |  |  |  |
| 930 | VPRS | Internal Price |  |  |  |
| 931 | YCMG | Customer/Mat.Pr.Grp | 0 | 0 |  |

	

| **Partner Function Determination at Header Level** |
| --- |
| **Partner Function** | **Description** | **Not Modifiable ** | **Mandatory** |
| SP | Sold-To Party | Yes | Yes |
| BP | Bill-To Party | Yes | Yes |
| PY | Payer | Yes | Yes |
| SH | Ship-To Party | Yes | Yes |
| YS | Sales Rep. | Yes | Yes |

| **Incompleteness Procedures** |
| --- |
| **Header / Item** | **Field** | **Warning** |
| Header | Document Date |  |
| Header | Document Currency |  |
| Header | Customer Reference | Yes |
| Header | Pricing Date |  |
| Header | Terms of Payment | Yes |
| Item | Material Description |  |
| Item | Order Quantity | Yes |
| Item | Net Value |  |
| Item | Pricing |  |
| Item | Shipping Point/Receiving Pt |  |
|  |
| **Delivery Types** |
| **Type** | **Description** | **Number Range** | **Order Required** |
|  |  | **From** | **To** |  |
| YLF | Outbound Delivery | 0810000000 | 0819999999 | Yes |
| YLR | Returns Delivery | 0820000000 | 0829999999 | Yes |

| **Delivery Item Category** |
| --- |
| **Delivery Type ** | **Item Category** | **Check quantity 0** | **Check minimum quantity** | **Check over-delivery** | **Relevant for Picking** |
| YLF | KBN | B | B | B | No |
| YLR | KAN | B | B | B | No |
| YLF | KEN | B | B | B | No |
| YLR | KEN - REN | B | B | B | No |

| **Copying Control for Deliveries** |
| --- |
| **Delivery Type ** | **Order Type** | **Item Category** | **Update doc. flow** |
| YLF | YKB | KBN | Yes |
| YLR | YKA | KAN | Yes |
| YLF | YKE | KEN | Yes |
| YLR | YKR | KEN - REN | Yes |

| **Billing Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Posting Block** | **Cancellation Type** |
|  |  | **From** | **To** |  |  |
| YF2 | Invoice | 0910000000 | 0919999999 | No | YSF2 |
| YR1 | Return w Reference | 0910000000 | 0929999999 | No | YSR1 |

| **Copying Control form Deliveries to Billing ****( Consignment**** Issue )** |
| --- |
| **Delivery Type ** | **Billing Type** | **Copy Item Number** | **Assignment Number** |
| YLF | YF2 | YES | PO Number |
| YLR | YR1 | Yes | PO Number |

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
| E_SD-090 | Enhancement | change Rounding behaviour in pricing in case  of quantity rounding |
| F_SD-010 | Form | YSD_INVOICE_FORM01 Invoice |
| F_SD-020 | Form | YSD_SDOC_FORM01 Order Confirmation |
| F_SD-030 | Form | ZSD_OUTBOUND_DEL01 Outbound Delivery |
| R_SD-010 | Report | YSD001 Customers List |
| R_SD-020 | Report | YSD002 Stock Overview by CAR |
| R_SD-030 | Report | YSD003 List of sales orders |
| R_SD-040 | Report | YSD004 List of Deliveries |
| R_SD-050 | Report | YSD005 Sales Order Status |
| R_SD-060 | Report | YSTOCK CROSS Stock Report |
| R_SD-070 | Report | YSD007 Sales Orders items |
| R_SD-080 | Report | YSD008 Allocated Qty |
| R_SD-090 | Report | YSD009 List of billing document |
| R_SD-100 | Report | YSD010 Profitability by Material |
| R_SD-110 | Report | YSD011 Aging Report |
| R_SD-120 | Report | YSD012 Collections |
| R_SD-130 | Report | YSD013 Profitability by Sales Office  Sales Group |
| R_SD-140 | Report | YSD014 Customer Statements |
| R_SD-150 | Report | YSD015 PRICE LIST |
| R_SD-160 | Report | YSD016 Aging Report by Payment terms |
| R_SD_200 | Report | YSD017 Profitability line items |
| R_SD_210 | Report | YSD018 List of Billing - Net Amount |
| R_SD_220 | Report | YSD019 Customer Sales |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YSD_AR_MANAGER | A/R Manager |  |
| YSD_BILLING_ADMIN | Billing Admin - Parent role |  |
| YSD_BILLING_ADMINISTRATOR_1480 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1490 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1500 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1510 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1520 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1530 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1540 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1550 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1560 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1570 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1580 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1590 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1600 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1610 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1620 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1630 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1640 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1650 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1660 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1800 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1840 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1850 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_3000 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_ALL | Common for all branches |  |
| YSD_BILLING_ADMINISTRATOR_HO | Billing Administrator |  |
| YSD_COLLECTIO_REPORT | Collection Report |  |
| YSD_COPA_ACTUAL | YSD_COPA_ACTUAL |  |
| YSD_CREATE_BATCH | Batch Master |  |
| YSD_CREDIT_MANAGER | Credit Manager |  |
| YSD_CUSTOMER_MATERIAL_INFO | Customer Material info |  |
| YSD_CUSTOMER_STATEMENT | Follow up post activities |  |
| YSD_CUSTOMERS_DISPLAY | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM_3000 | Customers Master Data Manager For GP |  |
| YSD_DELETE_DELIVERY | Delete Dellivery 1010,1100,1050,1800,1840 |  |
| YSD_DISTRIBUTER_FROM_BRANCH | YSD_DISTRIBUTER_FROM_BRANCH |  |
| YSD_FOLLOW_UP | Follow up post activities |  |
| YSD_GENERAL_REPORTS_01 | YSD_GENERAL_REPORTS_01 |  |
| YSD_INTERNAL_SALES_REP_1480 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1490 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1500 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1510 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1520 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1530 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1540 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1550 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1560 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1570 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1580 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1590 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1600 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1610 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1620 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1630 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1640 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1650 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1660 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1800 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1840 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1850 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_3000 | Sales Data Entry For Grand Parent Company Live Stock Division |  |
| YSD_INTERNAL_SALES_REP_HO | Sales Data Entry |  |
| YSD_ISR_DISTRIBUTERS | Internal Sales Rep for distributers |  |
| YSD_KEY_USER1 | SD Key user |  |
| YSD_PRINT_BILLING_DOCUMENT | PRINT BILLING DOCUMENT |  |
| YSD_PRINT_INVOICE | Print Invoice |  |
| YSD_PROFITABILITY | Profitability Reports |  |
| YSD_SALES_OFFICE_48 | Sales Office |  |
| YSD_SALES_OFFICE_49 | Sales Office |  |
| YSD_SALES_OFFICE_50 | Sales Office |  |
| YSD_SALES_OFFICE_51 | Sales Office |  |
| YSD_SALES_OFFICE_52 | Sales Office |  |
| YSD_SALES_OFFICE_53 | Sales Office |  |
| YSD_SALES_OFFICE_54 | Sales Office |  |
| YSD_SALES_OFFICE_55 | Sales Office |  |
| YSD_SALES_OFFICE_56 | Sales Office |  |
| YSD_SALES_OFFICE_57 | Sales Office |  |
| YSD_SALES_OFFICE_58 | Sales Office |  |
| YSD_SALES_OFFICE_59 | Sales Office |  |
| YSD_SALES_OFFICE_60 | Sales Office |  |
| YSD_SALES_OFFICE_61 | Sales Office |  |
| YSD_SALES_OFFICE_62 | Sales Office |  |
| YSD_SALES_OFFICE_63 | Sales Office |  |
| YSD_SALES_OFFICE_64 | Sales Office |  |
| YSD_SALES_OFFICE_65 | Sales Office |  |
| YSD_SALES_OFFICE_66 | Sales Office |  |
| YSD_SALES_OFFICE_GENERAL | Sales Office General |  |
| YSD_SALES_OFFICE_HO | Sales Office |  |
| YSD_SALES_ORDER_DELETE | Delete Sales Order |  |
| YSD_SALES_ORDER_STATUS_F_CUST | Sales Order Status for Fixed Customer Report |  |
| YSD_SALES_PLANNER | YSD_SALES_PLANNER |  |
| YSD_SALES_PRICES_ADMIN | Sales Price Admin |  |
| YSD_SALES_PRICES_DISPLAY | Sales Price Display |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Internal Sales Representative | Power User |
| Branches Shipping Specialist | Power User |
| Branches Billing Clerks | Power User |

In end user training we should collect different branches (19 branches) into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – SD Business Process Document |
| --- |
|  | Page 11 of 12 |
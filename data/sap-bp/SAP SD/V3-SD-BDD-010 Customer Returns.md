# V3-SD-BDD-010 Customer Returns

| Customer Returns |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Different  serial ( Number Range ) than sales orders | S | H |
| 02 | Assignment field in generated accounting document should be PO number in case of return without reference and expired returns. | S | H |
| 03 | Assignment field in generated accounting document should be the original billing document ( reference document ) in case of return with reference | S | H |
| 04 | Order reason is mandatory in return order | S | M |
| 05 | No change in price is allowed | S | H |

### Business Process Description

The process starts with a customer request to return goods, the driver get the request for return material authorization (RMA) from the customer and return back with the goods to the plant receiving area.

The Warehouse Clerk inspect and count the goods and fill the return template then send it to Internal Sales Representative to enter the return order.

The shipping specialist create the return delivery and check the real batches and quantities and post goods receipt, the received goods is posted to unrestricted stock .

A credit memo is created from the billing run and posted to the customer's account.

In Al-Watania Poultry we have two types for returns:

- Return with reference to last invoice.

- Return for Expired goods.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer RMA |
| **Process Input** | Return order entry ( Customer , materials and Quantities ) |
| **Process Output** | Credit memo number and accounting documents generated |
| **Process Owner** | Internal Sales Representative |
| **Process Volumes** | Around 100 / day |
| **Process Frequencies** | Daily |

### Business Process Diagrams

––

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Sales representative** | **Internal Sales Representative** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** | **Driver** | **Warehouse Clerk** |
| Trigger | Customer Return |  |  | R |  |  |  |  | R | I |
| 01 | Count Returned Materials Quantities and Batches | Manual | Manual |  | I |  |  |  |  | R |
| 02 | Create Return Order | VA01 | Manage Sales Orders |  | R |  |  |  |  |  |
| 03 | Enter PO Number | VA01 | Manage Sales Orders |  | R/A |  |  |  |  |  |
| 04 | Enter Order Reason | VA01 | Manage Sales Orders |  | R | I |  |  |  |  |
| 05 | Create Return Delivery | VL10C | Create Outbound Deliveries |  |  | R |  |  |  |  |
| 06 | Check Batches | Manual | Manual |  |  | R/A |  |  |  |  |
| 07 | Post Goods Receipt | VL06G | My Outbound Delivery Monitor |  |  | R | I |  |  |  |
| 08 | Billing | VF04 | Create Billing Documents |  |  |  | R | I |  |  |
| Output | Credit memo created and trigger for A/R incoming payment |  |  |  |  |  |  | R |  |  |

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

### Operational Decisions or Logic within the Process

- No change in quantities or batches should be done in return delivery document, any change should be done on return order by internal sales representative.

- The batch will be entered manually in return order, before that the warehouse clerk inform the ISR with the actual batches after counting and inspection.

- It is mandatory to enter invoice reference.

- Order reason is mandatory and the ISR is accountable to put a valid reason.

- Warehouse clerk is accountable to check the batches in return delivery and the actual received batches before posting goods receipt.

- All expired returns will be on one defined batch named "EXPIRED" 

### Legal Considerations and Company-Specific Policies

- Return order should be on the same day of the reference billing document.

- Expired returns is isolated in a physical different location.

- The returns is accepted from the customer as it is within the accepted limit for returns.

Please refer to "**Management and Sales Policies for Sales Department - Al-****Watania**** Poultry – 2016**", from page 62 to page 76. 

### Reference to Key Process Changes and Process KPIs

- Enter correct batches for returns, old system tagged it as "No Batch".

- Return order and delivery should be entered before physical receiving, in old system it was received manually before system.

- Internal sales representative should be exist near to warehouse for work flow simplification.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit of  Measure** | **Direction of Improvement** |
| 01 | Blocked Return orders for billing | % | Minimize |
| 02 | Open Return orders | % | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 04 | Account Determination | SD-BF-ACT |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org |
| 3000 | Grand-Parents S.Org |

| **Distribution  Channel**** ** |
| --- |
| 10 | Distributers |
| 20 | Direct Sales |
| 30 | Export |

| **D****ivision** |
| --- |
| 00 | Cross Division |
| 10 | Fresh |
| 20 | Frozen |
| 30 | Eggs |
| 40 | By Products |
| 50 | Agriculture |

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
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** | **Check Division** |
|  |  | **From** | **To** |  |  |  |
| YRE1 | Return W. Ref. | 0120000000 | 0129999999 | YLR | YR1 | 2 |
| YRE2 | Return W. Ref. | 0120000000 | 0129999999 | YLR | YR2 | 2 |
| YRE3 | Expired Returns | 0120000000 | 0129999999 | YLR | YR3 | 2 |

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YRE1 | 1000 | 10 | 00 |
| YRE1 | 1000 | 20 | 00 |
| YRE1 | 1000 | 30 | 00 |
| YRE2 | 1000 | 10 | 00 |
| YRE2 | 1000 | 20 | 00 |
| YRE2 | 1000 | 30 | 00 |
| YRE2 | 1000 | 20 | 00 |
| YRE3 | 1000 | 10 | 00 |
| YRE3 | 1000 | 20 | 00 |
| YRE3 | 1000 | 30 | 00 |
| YRE1 | 3000 | 10 | 00 |
| YRE1 | 3000 | 20 | 00 |
| YRE1 | 3000 | 30 | 00 |
| YRE2 | 3000 | 10 | 00 |
| YRE2 | 3000 | 20 | 00 |
| YRE2 | 3000 | 30 | 00 |
| YRE3 | 3000 | 10 | 00 |
| YRE3 | 3000 | 20 | 00 |
| YRE3 | 3000 | 30 | 00 |

	9								

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YRE1 | REN |
| YRE1 | RENN |
| YRE2 | REN |
| YRE2 | RENN |
| YRE3 | REN |
| YRE3 | RENN |

| **Order Reason** |
| --- |
| **Reason** | **Description** |
| Y01 | RET: Normal Return |
| Y02 | RET: Expired Goods |
| Y03 | RET: Damage Goods |
| Y04 | RET: Bad Smell |
| Y05 | RET: Broken |
| Y06 | RET: Damage in Delivery |

| **Assign Document Pricing Procedure to Document Type** |
| --- |
| **Document Pricing Procedure** | **Description** | **Document Type** |
| Y1 | Poultry - Sales | YRE1 |
| Y1 | Poultry - Sales | YRE2 |
| Y1 | Poultry - Sales | YRE3 |

| **Define Pricing Procedure Determination** |
| --- |
| **Sales Org.** | **Distribution Channel** | **Division** | **Document Pr. Procedure** | **Customer Pr. Procedure** | **Pricing Procedure** |
| 1000 | 10 | 00 | Y1 | 1 | Y00001 |
| 1000 | 10 | 80 | Y1 | 1 | Y00001 |
| 1000 | 20 | 00 | Y1 | 1 | Y00001 |
| 1000 | 20 | 80 | Y1 | 1 | Y00001 |
| 1000 | 30 | 10 | Y1 | 1 | Y00001 |
| 1000 | 30 | 00 | Y1 | 1 | Y00001 |
| 1000 | 30 | 80 | Y1 | 1 | Y00001 |
| 3000 | 20 | 00 | Y1 | 1 | Y00001 |
| 3000 | 30 | 80 | Y1 | 1 | Y00001 |
| 3000 | 30 | 00 | Y1 | 2 | YP0002 |
| 3000 | 99 | 00 | Y1 | 1 | Y00001 |
| 3000 | 99 | 00 | Y1 | 2 | YP0002 |

| **Pricing Procedures (Y****P****0001)** |
| --- |
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
|  |  |  |  |  |  |

| **Pricing Procedures (Y00002)** |
| --- |
| **Step** | **Condition Type** | **Description** | **From** | **To** | **Account key** |
| 25 | YPR1 | Circual Price (M) |  |  | YR1 |
| 30 | R100 | 100% discount |  |  | YR3 |
| 40 | YCOM | Commercial Disc. % |  |  | YD1 |
| 100 |  | Price after Commercial Dis. |  |  |  |
| 145 | YPRM | Promotions Disc. % | 100 | 0 | YD3 |
| 146 | YPRV | Promotions Disc. Val | 100 | 0 | YD3 |
| 150 | YEXP | Near Expire Disc. % | 100 | 146 | YD2 |
| 500 |  | Net Value |  |  |  |
| 600 | MWST | Output Tax |  |  | MWS |
| 900 |  | Total Amount |  |  |  |
| 910 | SKTO | Cash Discount |  |  |  |
| 930 | VPRS | Internal price |  |  |  |

| **Account Determination** |
| --- |
| **Condition type** | **Chart of Accounts** | **Sales Org.** | **Distribution Channel** | **Order Reason** | **Account Key** | **G/L** | **G/L Description** |
| KOFI | WAPO | 1000 |  | Y01 | YR1 | 40200101 | Sales Returns |
| KOFI | WAPO | 1000 |  | Y02 | YR1 | 40200101 | Sales Returns |
| KOFI | WAPO | 1000 |  | Y03 | YR1 | 40200101 | Sales Returns |
| KOFI | WAPO | 1000 |  | Y04 | YR1 | 40200101 | Sales Returns |
| KOFI | WAPO | 1000 |  | Y05 | YR1 | 40200101 | Sales Returns |
| KOFI | WAPO | 1000 |  | Y06 | YR1 | 40200101 | Sales Returns |

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
| Header | Order Reason | Yes |
| Item | Material Description |  |
| Item | Order Quantity | Yes |
| Item | Net Value |  |
| Item | Pricing |  |
| Item | Shipping Point/Receiving Pt |  |
| Item | Plant |  |

| **Delivery Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Order Required** |
|  |  | **From** | **To** |  |
| YLR | Outbound Delivery | 0820000000 | 0829999999 | Yes |

| **Delivery Item Category** |
| --- |
| **Delivery Type ** | **Item Category** | **Check quantity 0** | **Check minimum quantity** | **Check over-delivery** | **Relevant for Picking** |
| YLR | REN | B | B | B | No |
| YLR | RENN | B | B | B | No |

| **Copying Control for Deliveries** |
| --- |
| **Delivery Type ** | **Order Type** | **Item Category** | **Update doc. flow** |
| YLR | YRE1 | REN | Yes |
| YLR | YRE1 | RENN | Yes |
| YLR | YRE2 | REN | Yes |
| YLR | YRE2 | RENN | Yes |
| YLR | YRE3 | REN | Yes |
| YLR | YRE3 | RENN | Yes |

| **Billing Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Posting Block** | **Cancellation Type** |
|  |  | **From** | **To** |  |  |
| YR1 | Return w Reference | 0920000000 | 0929999999 | No | YS2 |
| YR2 | Return w Reference | 0920000000 | 0929999999 | No | YS2 |
| YR3 | Return - Expired | 0920000000 | 0929999999 | No | YS2 |

| **Copying Control form Order to Billing** |
| --- |
| **Order Type ** | **Billing Type** | **Copy Item Number** | **Assignment Number** |
| YRE1 | YR1 | YES |  |
| YRE2 | YR2 | YES |  |
| YRE3 | YR3 | YE3 |  |

| **Billing Block Reasons** |
| --- |
| **Block** | **Billing Block Description** |
| Y1 | Check Credit memo |
| Y2 | Check Debit memo |
| Y3 | Review Prices |

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
| R_SD-070 | Report | YSD007 Sales Orders items |
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
| Confidential | Page 9 of 14 |
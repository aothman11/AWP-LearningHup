# V3-SD-BDA-010 Free of Charge Delivery

| Free of Charge Delivery |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Ability to process free samples from order processing | S | H |

### Business Process Description

A unique sales order type is created that is not billing relevant. The order is confirmed based on the availability of goods. A delivery is created. The goods are then picked, confirmed, and delivered to the customer.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer Order by email , fax , phone or by hand |
| **Process Input** | Sales order entry ( Customer , materials and Quantities ) |
| **Process Output** | Billing document number and accounting documents generated |
| **Process Owner** | Internal Sales Representative |
| **Process Volumes** | Less than 100 orders / month |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** |
| Trigger | Customer Order |  |  |  |  |  |  |
| 01 | Sales Order Entry | VA01 | Manage Sales Orders | R | I |  |  |
| 02 | Delivery Creation | VL10C | Create Outbound Deliveries |  | R |  |  |
| 03 | Check Batches | Manual | Manual |  | R/A |  |  |
| 04 | Post Goods Issue | VL06G | My Outbound Delivery Monitor |  | R/A | I |  |
| 05 | Generate Billing | VF04 | Create Billing Documents |  |  | R | I |
| Output | Billing document created and trigger for A/R incoming payment |  |  |  |  |  | I |

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

- Free samples should be approved from branch manager before delivery (remove delivery block).

### Legal Considerations and Company-Specific Policies

- No billing document in this process, legally we can't generate invoice with zero amount.

### Reference to Key Process Changes and Process KPIs

- Sales administrator will not has any authority to issue warehouse stock like old system, it is the responsibility of Shipping Specialist.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit ****of  Measure** | **Direction of Improvement** |
| 02 | Blocked sales orders for delivery | % | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 03 | Batch management | LO-BM |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

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

### System Configuration Considerations

| **Sales Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** | **Check Division** |
|  |  | **From** | **To** |  |  |  |
| YFOC | Free of Charge Delivery | 0110000000 | 0119999999 | YLF | YF2 | 2 |
| ZFOC | Free of Charge Delivery | 0110000000 | 0119999999 | YLF | YF2 | 2 |

The difference between YFOC and ZFOC is that the 100% discount condition in YFOC depend on access sequence and it should has condition record for limited customers but ZFOC will depend only on item category and limited users will have authority on ZFOC.

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YFOC | 1000 | 10 | 00 |
| YFOC | 1000 | 20 | 00 |
| YFOC | 1000 | 30 | 00 |
| ZFOC | 1000 | 10 | 00 |
| ZFOC | 1000 | 20 | 00 |
| ZFOC | 1000 | 30 | 00 |
| YFOC | 2000 | 20 | 00 |
| YFOC | 2000 | 99 | 00 |
| ZFOC | 2000 | 20 | 00 |
| ZFOC | 2000 | 99 | 00 |
| YFOC | 3000 | 20 | 00 |
| YFOC | 3000 | 30 | 00 |
| YFOC | 3000 | 99 | 00 |
| ZFOC | 3000 | 20 | 00 |
| ZFOC | 3000 | 30 | 00 |
| ZFOC | 3000 | 99 | 00 |

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YOR | TANN |

| **Order Reason** |
| --- |
| **Reason** | **Description** |
| Y07 | FOC: Free Sample |
| Y08 | FOC: New Product Samples |
| Y09 | FOC: Alrajhi Family |
| Y10 | FOC: Monthly Incentive |
| Y11 | FOC: Customer Compensation |

| **Assign Document Pricing Procedure to Document Type** |
| --- |
| **Document Pricing Procedure** | **Description** | **Document Type** |
| Y1 | Poultry - Sales | YFOC |

| **Define Pricing Procedure Determination** |
| --- |
| **Sales Org.** | **Distribution Channel** | **Division** | **Document Pr. Procedure** | **Customer Pr. Procedure** | **Pricing Procedure** |
| 1000 | 10 | 10 | Y1 | 1 | Y00001 |
| 1000 | 10 | 30 | Y1 | 1 | Y00001 |
| 1000 | 20 | 10 | Y1 | 1 | Y00001 |
| 1000 | 20 | 20 | Y1 | 1 | Y00001 |
| 1000 | 20 | 30 | Y1 | 1 | Y00001 |
| 1000 | 30 | 10 | Y1 | 1 | Y00001 |
| 1000 | 30 | 20 | Y1 | 1 | Y00001 |
| 1000 | 30 | 30 | Y1 | 1 | Y00001 |
| 1000 | 20 | 40 | Y1 | 1 | Y00001 |
| 1000 | 20 | 50 | Y1 | 1 | Y00002 |

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
| YLF | Outbound Delivery | 0810000000 | 0819999999 | Yes |

| **Delivery Item Category** |
| --- |
| **Delivery Type ** | **Item Category** | **Check quantity 0** | **Check minimum quantity** | **Check over-delivery** | **Relevant for Picking** |
| YLF | TANN | B | B | B | No |

| **Copying Control for Deliveries** |
| --- |
| **Delivery Type ** | **Order Type** | **Item Category** | **Update doc. flow** |
| YLF | YFOC/ZFOC | TANN | Yes |

| **Delivery Block Reasons** |
| --- |
| **Block** | **Billing Block Description** |
| Y1 | Check Payment Terms |
| Y2 | Missing Credit Limit |
| Y3 | Change in Quantity |
| Y4 | Check Free of Charge |

## Technical/Development Related Items

	

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_SD-010 | Enhancement | Hide material cost from sales order conditions |
| E_SD-020 | Enhancement | USEREXIT_FIELD_MODIFICATION |
| E_SD-030 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAK |
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
| YSD_FREE_OF_CHARGE | Free of charge order |  |
| YSD_GENERAL_REPORTS_01 | YSD_GENERAL_REPORTS_01 |  |
| YSD_KEY_USER1 | SD Key user |  |
| YSD_PRINT_BILLING_DOCUMENT | PRINT BILLING DOCUMENT |  |
| YSD_PRINT_INVOICE | Print Invoice |  |
| YSD_SALES_ORDER_DELETE | Delete Sales Order |  |

		

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Internal Sales Representative | Power User |
| Branches Shipping Specialist | Power User |
| Branch Manager | Power User |

In end user training we should collect different branches (19 branches) into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 10 of 11 |
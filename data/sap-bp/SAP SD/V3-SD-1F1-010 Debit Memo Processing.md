# V3-SD-1F1-010 Debit Memo Processing

| Debit Memo Processing |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Process debit memo requests with distributed  amount on items | S | H |
| 02 | See effect of debit memos in sales reports | S | H |

### Business Process Description

A debit memo request is created with the amount to be debited, and placed on a billing block for review. It is then released to become billing relevant, and appear on the billing due list. Periodic billing process creates a debit memo to be sent to the customer, and posts an accounting document.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Debit memo request |
| **Process Input** | Debit memo request ( Customer , materials and Quantities ) |
| **Process Output** | Debit memo number and accounting documents generated |
| **Process Owner** | Internal sales representative |
| **Process Volumes** | Around 200 / Month |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Billing clerk** | **A/R Accountant** |
| Trigger | Customer to receive debit |  |  |  |  |  |
| 01 | Create Debit Memo Request | VA01 | Manage Debit Memo Request | R |  |  |
| 02 | Remove Billing Block | VA02 | Manage Debit Memo Request | R | I |  |
| 03 | Create Debit Memo | VF04 | Create Billing Documents |  | R | I |
| Output | Credit memo generated and trigger to A/R |  |  |  |  |  |

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

- Debit memo request amount should be distributed on items and quantities for better reporting.

- Debit memo request should be reviewed by A/R accounting manager and remove billing block.

### Legal Considerations and Company-Specific Policies

- Debit memo printout should communicated with customer and a detailed text should be added to request.

### Reference to Key Process Changes and Process KPIs

Debit memo request will be initiated from sales department and affects sales analysis

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Debit memos request blocked for billing | % | Minimize |

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
| 4000 | Agricul. Sales Org. |

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
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** |
|  |  | **From** | **To** |  |  |
| YDR1 | Debit Memo Request | 0110000000 | 0119999999 | N/A | YL1 |
| YDR2 | DR Monthly Incentive | 0110000000 | 0119999999 | N/A | YL2 |
| YDR3 | DR Cust.Compensation | 0110000000 | 0119999999 | N/A | YL3 |
| YDR4 | DR Promotions Disc | 0110000000 | 0119999999 | N/A | YL4 |
| YDR5 | DR Commercial Disc | 0110000000 | 0119999999 | N/A | YL5 |
| YDR6 | Debit Memo N. Expire | 0110000000 | 0119999999 | N/A | YL6 |
| YDR7 | DR Shortage Quantity | 0110000000 | 0119999999 | N/A | YL7 |
| YDR8 | DR Quarterly Inc. | 0110000000 | 0119999999 | N/A | YL8 |
| YDR9 | DR Annual Incentive | 0110000000 | 0119999999 | N/A | YL9 |
| ZDR1 | DR Monthly Inc. Rest | 0110000000 | 0119999999 | N/A | YL10 |

All types has similar configurations but each one has different pricing procedure to simplify the user inputs as each type should has different price condition with different account.

We will use YDR as reference for them all in this document. 

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YDR | 1000 | 10 | 00 |
| YDR | 1000 | 20 | 00 |
| YDR | 1000 | 30 | 00 |
| YDR | 3000 | 10 | 00 |
| YDR | 3000 | 20 | 00 |
| YDR | 3000 | 30 | 00 |
| YDR | 4000 | 10 | 00 |
| YDR | 4000 | 20 | 00 |
| YDR | 4000 | 30 | 00 |

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YDR | L2N |

| **Order Reason** |
| --- |
| **Reason** | **Description** |
| Y17 | DBT: Adjustment |
| Y19 | DBT: Expired Goods |

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

| **Billing Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Posting Block** | **Cancellation Type** |
|  |  | **From** | **To** |  |  |
| YL1 | Debit Memo | 0910000000 | 0919999999 | No | YSL1 |
| YL2 | DR Monthly Incentive | 0910000000 | 0919999999 |  | YSL2 |
| YL3 | DR Cust.Compensation | 0910000000 | 0919999999 |  | YSL3 |
| YL4 | DR Promotions Disc | 0910000000 | 0919999999 |  | YSL4 |
| YL5 | DR Commercial Disc | 0910000000 | 0919999999 |  | YSL5 |
| YL6 | DR  Near Expire Disc | 0910000000 | 0919999999 |  | YSL6 |
| YL7 | DR Shortage Quantity | 0910000000 | 0919999999 |  | YSL7 |
| YL8 | DR Quarterly Incentive | 0910000000 | 0919999999 |  | YSL8 |
| YL9 | DR Annual Incentive | 0910000000 | 0919999999 |  | YSL9 |
| YL10 | DR Monthly Inc. Restaurants | 0910000000 | 0919999999 |  | ZSL1 |

| **Copying Control form Order to Billing** |
| --- |
| **Order Type ** | **Billing Type** | **Copy Item Number** | **Assignment Number** |
| YDR | YL | YES | PO Number |

| **Billing Block Reasons** |
| --- |
| **Block** | **Billing Block Description** |
| Y6 | Check Debit Memo |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_SD-020 | Enhancement | USEREXIT_FIELD_MODIFICATION |
| E_SD-030 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAK |
| E_SD-050 | Enhancement | USEREXIT_SAVE_DOCUMENT_PREPARE |
| E_SD-060 | Enhancement | USEREXIT_CHECK_VBAK |
| E_SD-070 | Enhancement | Authorization in VF04 |
| E_SD-080 | Enhancement | Authorization in VF31 |
| F_SD-010 | Form | YSD_INVOICE_FORM01 Invoice |
| F_SD-020 | Form | YSD_SDOC_FORM01 Order Confirmation |
| R_SD-010 | Report | YSD001 Customers List |
| R_SD-030 | Report | YSD003 List of sales orders |
| R_SD-050 | Report | YSD005 Sales Order Status |
| R_SD-090 | Report | YSD009 List of billing document |
| R_SD-100 | Report | YSD010 Profitability by Material |
| R_SD-110 | Report | YSD011 Aging Report |
| R_SD-130 | Report | YSD013 Profitability by Sales Office  Sales Group |
| R_SD-140 | Report | YSD014 Customer Statements |
| R_SD-160 | Report | YSD016 Aging Report by Payment terms |

	

	

	

	

	

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
| YSD_CREDIT_MANAGER | Credit Manager |  |
| YSD_CUSTOMER_STATEMENT | Follow up post activities |  |
| YSD_CUSTOMERS_DISPLAY | Customers Master Data Manager |  |
| YSD_FOLLOW_UP | Follow up post activities |  |
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
| YSD_INTERNAL_SALES_REP_HO | Sales Data Entry |  |
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

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Internal Sales Representative | Power User |
| Branches Billing Clerks | Power User |

In end user training we should collect different branches (19 branches) into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 9 of 10 |
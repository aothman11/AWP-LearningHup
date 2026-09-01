# V3-SD-BKK-010 Sales Period End Closing Operations

| Sales Period End Closing Operations |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Month-end closing activity for sales department on SAP | S | H |

### Business Process Description

Several periodic activities can be reviewed including (but not limited to):

Review Blocked Sales Orders: For sales orders that fail the credit check, you review these blocked sales orders and resolve any credit issues.

Review Incomplete Sales Orders: This activity displays a list of all incomplete documents based on the specified selection criteria.

Review Sales Documents Blocked for Delivery: This activity shows sales orders that are on credit hold that require release by the credit department.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Monthly clothing procedures |
| **Process Input** | N/A |
| **Process Output** | Sales period end closing procedures completed |
| **Process Owner** | Billing Clerk |
| **Process Volumes** | 1 per month |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Billing clerk** | **Shipping Specialist** | **Credit Manager** |
| 01 | Review Sales Order Fulfillment Issues |  | Sales Order Fulfillment Analyze Issues | R |  |  |  |
| 02 | Review Incomplete Sales Orders | V.02 | Sales Order Fulfillment – Resolve Incomplete Data | R |  |  |  |
| 03 | Review Sales Documents Blocked for Delivery | VA14L | Sales Order Fulfillment Resolve Delivery Block | R |  |  |  |
| 04 | Release Orders for Billing | V.23 | Schedule Billing Release | R |  |  |  |
| 05 | Credit Blocked Sales Orders | VKM1 | Sales Order Fulfillment Resolve Credit Block |  |  |  | R |
| 06 | Review Incomplete SD Documents (Deliveries) | V_UC | My Outbound Delivery Monitor |  |  | R |  |
| 07 | Review Sales Orders Due for Delivery | VL10C | My Sales Order Items Due for Delivery |  |  | R |  |
| 08 | Review Outbound Deliveries for Goods Issue | VL06G | My Outbound Delivery Monitor |  |  | R |  |
| 09 | Review Log of Collective Delivery Creation | V_SA | Analyze Outbound Delivery Logs |  |  | R |  |
| 10 | Review Billing Due List | VF04 | Create Billing Documents |  | R |  |  |
| 11 | Review Log of Collective Invoice Creation | V.21 | Schedule Billing Creation |  | R |  |  |
| 12 | Review List Blocked (for Accounting) Billing Documents | VFX3 | Manage Billing Documents |  | R |  |  |
| 13 | Sales order Status | YSD005 |  |  | R |  |  |
| 14 | Review average sales price | YSD010 |  |  | R |  |  |
| 15 | Make sure all credit memos for incentive and compensations are generated | YSD009 |  |  | R |  |  |

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

- Sales closing activities should be done before FI closing.

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit ****of  Measure** | **Direction of Improvement** |
| 01 | Closing procedures time | Hours | Minimize |

### Integration Points

## N/A

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
| 10 | Fresh |
| 20 | Frozen |
| 30 | Eggs |
| 40 | By Products |
| 50 | Agriculture |
| 60 | Feed |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Customer) |
| Material Master |
| Conditions |
| Customer Material Info |
| Free Goods |

### System Configuration Considerations

N/A

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
| YSD_BILLING_ADMINISTRATOR_ALL | Common for all branches |  |
| YSD_BILLING_ADMINISTRATOR_HO | Billing Administrator |  |
| YSD_COLLECTIO_REPORT | Collection Report |  |
| YSD_COPA_ACTUAL | YSD_COPA_ACTUAL |  |
| YSD_CREDIT_MANAGER | Credit Manager |  |
| YSD_CUSTOMER_STATEMENT | Follow up post activities |  |
| YSD_CUSTOMERS_DISPLAY | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM_3000 | Customers Master Data Manager For GP |  |
| YSD_DELETE_DELIVERY | Delete Dellivery 1010,1100,1050,1800,1840 |  |
| YSD_DISTRIBUTER_FROM_BRANCH | YSD_DISTRIBUTER_FROM_BRANCH |  |
| YSD_FOLLOW_UP | Follow up post activities |  |
| YSD_KEY_USER1 | SD Key user |  |
| YSD_PRINT_BILLING_DOCUMENT | PRINT BILLING DOCUMENT |  |
| YSD_PRINT_INVOICE | Print Invoice |  |
| YSD_PROFITABILITY | Profitability Reports |  |
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

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 1 of 8 |
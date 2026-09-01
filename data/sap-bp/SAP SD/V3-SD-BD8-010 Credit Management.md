# V3-SD-BD8-010 Credit Management

| Credit Management |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Automate and accelerate the process of checking a customer credit limit | S | H |
| 02 | Track customers exposure | S | H |
| 03 | Manage customers credit based on credit limits and overdue invoices | S | H |

### Business Process Description

The credit worthiness and payment behavior of your business partners has an immediate effect on the business results of your company.

Efficient receivables and credit management reduces the risk of financial losses and helps you to optimize business relationships with your business partners. SAP Credit Management supports your company in making early determination of the risk of losses on receivables from your business partners and in efficiently making credit decisions.

SAP Credit Management checks the exposure against the current credit limit for the business partner. In addition, you can also perform other checks, such as oldest open item, maximum dunning level, or last payment. If the new order is blocked the blocked order can be released or rejected by authorized staff.

### Business Process Diagrams

**Set Limit**

**Calculation of Exposure**

**Reporting**

 

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Credit Controller** |
| **Set Limit** |  |  |  |  |
| 01 | Set limit manually | UKM_BP | Maintain Business Partner |  | R |
| **Calculation of Exposure** |  |  |  |  |
| 01 | Various credit check steps | System | System | R | I |
| 02 | Review and release or reject sales orders | VKM1 | Manage Credit Cases |  | R |
| 03 | Release or reject sales orders | VKM1 | Manage Credit Cases |  | R |
| **Reporting** |  |  |  |  |
| 01 | Display credit data | UKM_MASS_DSP2 | Credit Controller |  | R |
| 02 | Display credit exposure | UKM_COMMITMENTS | Credit Controller |  | R |
| 03 | Display log | UKM_LOGS_DISPLAY | Credit Controller |  | R |
| 04 | Credit Limit Utilization | UKM_MALUS_DSP | Credit Controller |  | R |
| 05 | Display credit master data | UKM_BP_DISPLAY | Credit Controller |  | R |

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

- Decision to release credit block or reject order should be taken on the same day.

### Legal Considerations and Company-Specific Policies

- We should attach all documents related to customer credit amount to business partner.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit ****of  Measure** | **Direction of Improvement** |
| 01 | Blocked sales orders for credit check | % | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 04 | Accounts Receivables | FI-AR |

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

### System Configuration Considerations

| **Maintain Pricing Procedures** |
| --- |
| **Step Description** | **Su****b ****Tot****al** | **CalType** | **Description ****SuTot** |
| Total Amount (after VAT) | A | 4 | Carry over price to KOMP-CMPRE (credit price) |

| **Assign Permitted Credit Control Area to Company Code** |
| --- |
| **Company Code** | **Credit Control Area** |
| 1000 | WAPO |
| 2000 | WAPO |
| 3000 | WAPO |
| 4000 | WAPO |

| **Define Blocking Reasons** |
| --- |
| **Block Reason** | **Name of Block Reason** | **Event Category** |
| 01 | Credit Limit Exceeded | UU Limit Utilization over 100% |
| 02 | No Insurance available |  |
| 03 | Fraud possible |  |
| 04 | Insufficient credit worthiness |  |
| 20 | Credit limit to be approved |  |
| 21 | Credit limit changed | CL Credit Limit Invalid |
| 22 | Credit limit rejected | IS Score Invalid |
| 23 | Credit limit invalid |  |
| 24 | Score invalid |  |
| Z1 | Manual Block |  |
| Z2 | Contract Termination |  |
| Z3 | Rejected confirm balance |  |
| Z9 | Legal Affairs |  |

| **Define Checking Rules** |
| --- |
| **Check Rule** | **Name of Check Rule** | **Logging** | **Check Exceptions** |
| 1 | Poultry Checking Rule | 2 Extensive | Selected |

| **Checking Rule Steps** |
| --- |
| **Individual Step ** | **Name of Individual Step** |
| 10 | Statistical Check of Credit Exposure |
| 20 | Check for Maximum Document Value |
| 30 | Check for Overdue Open Items |

| **Maximum Document Value** |
| --- |
| **Credit Segment**** ** | **Maximum Document**** Value** |
| 1000 | 100000 |

## Integration with Sales and Distribution

| **CG** | **Document Credit Grp** |
| --- | --- |
| 1 | Credit Group for Sales Order |
| 2 | Credit Group for Delivery |
| 3 | Credit Group for Goods Issue |

| **Risk Category** | **CCAr** | **Name** |
| --- | --- | --- |
| A | 1000 | Default Risk |

| **ItCa** | **Description** | **Credit Active** |
| --- | --- | --- |
| TAN | Standard Item | Select |

| **Credit control Area** | **Risk category ** | **Document credit group** | **Credit control** |
| --- | --- | --- | --- |
| 1000 | Y | 1 | Default Risk Orders |

| **Checks** |
| --- |
| **Field name** | **Check** | **Reaction ** | **Status/Block** | **Open Orders** | **Open delivery** | **Max. ****doc.value** |
| SAP Credit Mngt | X | A (Warning) | X | X | X | X |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_SD-020 | Enhancement | USEREXIT_FIELD_MODIFICATION |
| E_SD-030 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAK |
| E_SD-050 | Enhancement | USEREXIT_SAVE_DOCUMENT_PREPARE |
| E_SD-060 | Enhancement | USEREXIT_CHECK_VBAK |
| F_SD-020 | Form | YSD_SDOC_FORM01 Order Confirmation |
| R_SD-010 | Report | YSD001 Customers List |
| R_SD-030 | Report | YSD003 List of sales orders |
| R_SD-050 | Report | YSD005 Sales Order Status |
| R_SD-090 | Report | YSD009 List of billing document |
| R_SD-110 | Report | YSD011 Aging Report |
| R_SD-140 | Report | YSD014 Customer Statements |
| R_SD-160 | Report | YSD016 Aging Report by Payment terms |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YSD_CREDIT_MANAGER | Credit Manager |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Internal Sales Representative | Power User |
| Branches Billing Clerks | Power User |
| Credit Controller | Power user |

		

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 9 of 10 |
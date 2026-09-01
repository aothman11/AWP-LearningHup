# MM-BMR-010 Schedule Agreement V2

# MM-BMR-010 Scheduling Agreement

## Process Description

A form of outline purchase agreement under which materials are procured on predetermined dates within a certain period.

Delivery of the total quantity of material specified in a scheduling agreement item is spread over a certain period in a delivery schedule, consisting of lines indicating the individual quantities with their corresponding planned delivery dates.

Conditions can apply to the entire scheduling agreement. Conditions at item level apply specifically to the material to be supplied in each case.

Working with scheduling agreements can shorten processing times and reduce the amount of paperwork you are faced with. One delivery schedule can replace a large number of discrete purchase orders or contract release orders.

Inventories can be reduced to a minimum. You can carry out your manufacturing operations on the Just-in-Time (JIT) principle.

Your vendors require shorter lead times. Smaller deliveries are required, which can be spaced out over a longer period. Delivery scheduling enables vendors to plan and allocate their resources more efficiently.

Schedule agreement for Al-Watania Company to order a certain quantity of a product during a specified period in a specified delivery dates.  

Target groups are purchasing managers as well as buyers and material controllers. 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Reduce procurement costs | S | H |
| 02 | Reduce the amount of paperwork you are faced | S | H |
| 03 | Secure supplies | S | H |
| 04 | Maintain transparency of supplier agreements | S | H |
| 05 | Monitor Agreements | S | H |
| 06 | Maintain the Agreement payment terms and delivery conditions | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Purchasing Plan |
| **Process Input** | Purchase requisition |
| **Process Output** | Released |
| **Process Owner** | Planning |
| **Process Volumes** | 10 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Roles ** |
|  |  |  |  |  |
|  | Create Schedule Agreement with the Supplier | ME31L ME32L ME33L |  | Purchaser |
|  | Approve the Agreement | ME35L |  | Purchasing Manager |
|  | Print Delivery Schedule | ME9L |  | Purchaser |
|  | Send to Supplier | By Mail |  | Purchaser |
|  | ****In case**** **<**** Planner Coordinate Delivery Schedule With Supplier directly ****>** |  |  |  |
|  | Maintain Delivery Schedule | ME38 |  | MRP Controller |
|  | Print Delivery Schedule | ME9E |  | MRP Controller |
|  | Send to Supplier | By Mail |  | MRP Controller |
|  | Post Goods Receipt at storage location with reference to the S. Agreement | MIGO |  | Stock keeper |
|  | Enter Invoice of the supplier | MIRO |  | AP Accountant |
|  | ****In case**** **<**** ****Purchaser**** Coordinate Delivery Schedule With Supplier directly ****>** |  |  |  |
|  | Create Purchase Requisition | ME51N |  | MRP Controller |
|  | Maintain Delivery Schedule with reference to PR | ME38 |  | Purchaser |
|  | Send to Supplier | By Mail |  | Purchaser |
|  | Post Goods Receipt at storage location with reference to SA | MIGO |  | Stock keeper |
|  | Enter Invoice of the supplier | MIRO |  | AP Accountant |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 02 | ME3L | Outline Agreements per Vendor | X |  |
| 04 | ME3M | Outline Agreements by Material | X |  |
| 05 | ME3N | Outline Agreements by Agreement No. | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 10 | Purchasing Managers |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Define at the agreement to which country Laws will be the reference in case of disagreement.

- Define the delivery terms & conditions at the agreement.

- Define the Payment terms at the agreement.

- Define the rejection and penalty policies.

- Define the required shipping certificates and specified required analysis.

- Define the Packing terms at the agreement.

- Define the items specifications in details.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
|  |  |  |  |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 007 | Workshop Pett.Cach |
| 008 | Constructions Cash |

| **Plant** |
| --- |
| 1010 | Qassim Central |  |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1120 | Feed Mill |  |
| 1140 | Yanbu Grain Hub |  |
| 1150 | Feed Mill Watania1 | Obsolete |
| 1160 | Feed Mill Watania2 - FM3 | Obsolete |
| 1170 | Feed Mill Watania2 - FM6 | Obsolete |
| 1180 | Feed Mill Wadi FM4 | Obsolete |
| 1190 | Feed Mill Wadi FM5 | Obsolete |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1220 | Parents - Laying |  |
| 1221 | Grading Station - Dulfa | Obsolete |
| 1222 | Grading Station - Wadi | Obsolete |
| 1223 | Grading Station - Kubid | Obsolete |
| 1224 | Grading Station - Shery | Obsolete |
| 1230 | Parents - Rearing |  |
| 1231 | Parents - Laying - Dulfa | Obsolete |
| 1232 | Parents - Laying - Wadi | Obsolete |
| 1233 | Parents - Laying - Kubid | Obsolete |
| 1234 | Parents - Laying - Shery | Obsolete |
| 1241 | Parents - Rearing - Dulfa | Obsolete |
| 1242 | Parents - Rearing - Wadi | Obsolete |
| 1244 | Parents - Rearing - Shery | Obsolete |
| 1250 | C Layer - Laying |  |
| 1260 | C Layer - Rearing |  |
| 1310 | Fleet Central Workshop |  |
| 1410 | Live Operation Maintenance |  |
| 1800 | Qassim Export | Obsolete |
| 1840 | Qassim Agri. | Obsolete |
| 2100 | Transportation | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Laying |  |
| 3300 | GP-Rearing |  |
| 4100 | Qassim Agri. |  |

### Master Data Considerations (including all relevant data relationships)

| **List of Related Master Data** |
| --- |
| Material Master |
| Business Partner (Supplier) |

### System Configuration Considerations

| Agreement Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YLP1 | Sch. Agreement Planner Managed | 55 |  |  |
| YLP2 | Sch. Agreement Purchaser Managed | 54 |  |  |

| Contract Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| 54 | 5400000000 | 5499999999 | Internal | 10 |
| 55 | 5500000000 | 5599999999 | Internal | 10 |

| **Field Selection Mandatory Fields ** | **Document type** |
| --- | --- |
| Terms of Payment Key | YLMK | YFMK | YLWK | YFWK |
| Inco Term1,2 | YLMK | YFMK | YLWK | YFWK |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |  |
| F-MM-BMK-003 | Form | Purchasing Schedule Agreement | Y_S_AGR_AR |
| F-MM-BMK-03 | Form | Purchasing Schedule Agreement Schedule Line | Y_SCHED_AGRE_SCHED_LINE |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |  |
| 01 | YMM_Schdl_Agrmnt | Parent: MM: Schedule Agreement Processing |  |
| 02 | YMM_Schl_Agrmnt_Rel | Parent: MM: Schedule Agreement Release |  |
| 03 | YMM_Schl_Agr_Dlv_Schedl | Parent: MM: Schedule Agreement Delivery Schedule |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User Groups ** | **Trainer** |
| --- | --- |
| Purchasing Manager | Key User |
| Different Purchasers | Key User |

In the end-user training, we should collect different Managers and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 8 of 8 |
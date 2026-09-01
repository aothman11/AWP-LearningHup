# V3-MM-18J-04 Requisitioning - Spare Parts {2

| Requisitioning – SPARE PARTS |
| --- |

## Process Description

This process to collect the factories department and Vehicles workshop department requirements for spare parts items. 

Differentiated to two types and every type has its own number range and release strategy structure

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Every Maintenance Department Will be responsible for checking and approving requisitions | S | H |
| 02 | Differentiate between the huge amount of requisitions come from maintenance departments Factories and Vehicles | S | H |
| 03 | Collect, document and Organize Poultry Spare parts requirements | S | H |
| 04 | Prioritize the urgency of the requisitions | S | H |
| 05 | Approve the Purchase requisitions Systematically | S | H |
| 06 | Follow up requisitions on the system | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Maintenance departments requirement |
| **Process Input** | Purchase Requisition |
| **Process Output** | Purchase Requisition |
| **Process Owner** | Responsible Technician |
| **Process Volumes** | 15 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

**In case Plant Maintenance**

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |  |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Create purchase requisition | ME51N | Create Purchase Requisition | Maintenance Dep. Employee |
| 02 | Release the Purchase requisition | ME55 ME54N | My Inbox - Approve Purchase Requisitions | Maintenance Manager |
| 03 | Inventory Controller Revise requisition and Release | ME54N | My Inbox - Approve Purchase Requisitions | Controller Specialist |
|  |  |  |  |  |  |  |

| **Process Steps Description ** |
| --- |
| **ID** | **Process Step Description** | **FIORI App****. / T. Code** | **                 ** **Business ****Roles** |
|  |  |  |  |
| 01 | Request Maintenance | Request Maintenance (F1511) /(IW21) | Employee/Operator Maintenance Supervisor |
| 02 | Monitor Maintenane Requests | Monitor Maintenane Requests (F1511)/Find Maintenance Notification (F2071)/Manage Notification List/(IW28) | Employee/Operator Maintenance Planner |
| 03 | Change Maintenance Request | Manage Orders and Notifications in Information Center (W0019) /Change PM Notification, Change Maintenance Notification (IW22) | Employee/Operator Maintenance Planner |
| 04 | Create Maintenance Order | Manage Orders and Notifications in Information Center (W0019) /Create Order, Create Maintenance Order (IW22, IW31) | Maintenance Planner |
| 05 | Release Order | Manage Orders and Notifications in Information Center (W0019) / Change Order, Change Maintenance Order (IW32) | Maintenance Planner |
| 06 | Review Created PR from Order | Manage Orders and Notifications in Information Center (W0019) / Change Order (IW32), Change Maintenance Order List (IW38) | Maintenance Planner |

**In case Plant Maintenance**

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME5A | Purchase Requisition List Displays | X |  |
| 02 |  | Purchase Requisition Item ID F0349A |  | X |
| 03 |  | Manage Purchase Requisition Professional ID F2229 |  | X |
| 04 | MD15 | Collective Conversion Of Planned Orders | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 6 | Maintenance Engineers |

### Operational Decisions or Logic within the Process

In case of the price unit of the spare part is more than or equal 20000 SAR new process will be initiated as in the process - MM-18J-046 Handling High Value Spare Parts As Assets

### Legal Considerations and Company-Specific Policies

- Planning Department Must Consider the lead time for Materials

- Requisition must contain the part number and full specification details for the required item

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Purchase Requisition to Order Cycle Time | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Production Planning | PP-MP |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 003 | Spare Parts |
| 005 | General Items |

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
| Manufacturing Part Number |
| Business Partner (Supplier) |
| Purchasing Info Record |

### System Configuration Considerations

| Purchase Requisition document type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YMF0 | Factorie Spare Parts | Y3 |  |  |
| YMV0 | Vehicles Spare Parts | Y4 |  |  |
| YMG0 | Gener Maint.SP Parts | Y5 |  |  |

| Purchase Requisition Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| Y3 | 22000000 | 22999999 | Internal | 001 |
| Y4 | 23000000 | 23999999 | Internal | 001 |
| Y5 | 24000000 | 24999999 | Internal | 001 |

| Release  Class |
| --- |
| ID | Description |
| Y_PR_Release | Poultry PR Release Item Wise Level |

| Release  Characteristics |
| --- |
| ID | Description |
| Y_PR_DOC_TYPE | Order Type |
| Y_PR_PURCH_GRP | Purchasing Group |

| **Release  Characteristics** |
| --- |
| **Characteristics** | **Value** |
| **ID** | **Description** | **ID** | **Description** |
| Y_PR_DOC_TYPE | Order Type | YNB | Consuma. Requisitions |
|  |  | YMF0 | Factorie Spare Parts |
|  |  | YMV0 | Vehicles Spare Parts |
|  |  | YMG0 | Gener Maint.SP Parts |
| Y_PR_PURCH_GRP | Purchasing Group | 001 | Strategic Items |
|  |  | 002 | Services & Project |
|  |  | 003 | Spare Parts |
|  |  | 004 | Assets |
|  |  | 005 | General Items |

| Release  Codes |
| --- |
| ID | Description |
| M1 | Facto. SP Maint. MGR |
| M2 | Vehic. SP Maint. MGR |
| M3 | General Mainten. MGR |
| M4 | S. Parts Specialist |

| Release  Groups |
| --- |
| ID | Description |
| Y1 | Spare Parts RLS. GRP |

| **PR Release Strategy** |
| --- |
| **Strategy** | **Rel Group** | **Release Characteristic** | **Release  Codes** |
|  | **Code** | **Description** | **Order Type** | **Purchasing Group** |  |
| R1 | Factory. SP. Mainte. | Y1 | Spare Parts RLS. GRP | YMF0 | 003 | M1,M4 |
| R2 | Vehicle. SP. Mainte. | Y1 | Spare Parts RLS. GRP | YMV0 | 003 | M2,M4 |
| R3 | General SP. Mainten. | Y1 | Spare Parts RLS. GRP | YMG0 | 003 | M3,M4 |

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PUR_PR_MAIN_FACTORIES_PLNT | Maintenance Factories Employee | At Roles Sheet |
| YMM_PUR_PR_MAIN_FACTOR_RELEASE | Factories Maintenance Manager | At Roles Sheet |
| YMM_PUR_PR_MAIN_VEHICALES_PLNT | Maintenance Vehicles Employee | At Roles Sheet |
| YMM_PUR_PR_MAIN_VEHICLE_RELEAS | Vehicles Maintenance Manager | At Roles Sheet |
| YMM_PUR_PR_INV_CONTROLLER_SPEC | Inventory Controller Specialist | At Roles Sheet |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 3 of 7 |
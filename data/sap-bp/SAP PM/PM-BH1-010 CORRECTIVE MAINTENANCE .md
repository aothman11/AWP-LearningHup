# PM-BH1-010 CORRECTIVE MAINTENANCE 

| PM-BH1-010 CORRECTIVE Maintenance |
| --- |

## Process Description

In SAP, this business process is used to plan, perform, and document all the necessary maintenance tasks that crop up outside of regular maintenance. All the resources used, costs, and technical details of the maintenance tasks are recorded centrally and will be evaluated.

Usually, this process is relevant if a major technical asset exhibits a defect, and its repair must be planned. Employees will report the defect to the responsible maintenance planner, who then plans and initiates how the defect will be processed further.

This scope item describes Operator from operations department of the Transportation Company will create a ‘Maintenance Notification’ reporting Breakdown/Fault in the free text and assign the technical object “Fleet Equipment” and then he can select the Object part, Damage code, Cause code, Task code and activity code is not Mandatory field for Operation.

Both created Maintenance Request or Maintenance Notification can be shown by maintenance planner throw list of maintenance notifications application or by adding pm notification direct in maintenance order creation screen.

Maintenance planner will specify the criticality of breakdown/fault, discipline involved, planning for Manpower, Spare Parts, Service and check whether equipment is available for maintenance. 

Based on that, Maintenance Planner will ‘Create Maintenance Order’, and maintenance team will perform all tasks 

 If the stock is not available or need outside service, PR will automatically generate and forwarded to purchasing department.

 After the Maintenance Planner release the maintenance order, the Maintenance Supervisor will ‘**Print the Job Card**’ (If required) to withdraw the spare parts will be used for the maintenance execution.

Once the job is completed, Maintenance technician will inform Maintenance Supervisor, Maintenance Supervisor will ‘**Confirm Maintenance Order**’ by do confirmation of Man-hours, spare parts consumed, and a detailed description of what was done (**Time Confirmation**), and Maintenance Planner can fill Cause code along with activity code (Not Mandatory) in Notification before closing the order in Technical Completion phase “Closing”. 

Maintenance planner can ‘Show Costs on Maintenance Order’ by review the cost report and detailed description has been filled and check the completed jobs “Maintenance Activities.”

The Last Step, Maintenance Planner will **“T****echnically Complete Maintenance** **Order****“** by inspection in site.

If still defect is there, there are two options to do it:

- Maintenance Planner can add a new Order (**Follow-On Order**) with reference to the current maintenance order to check and fix the defect again, then confirm the maintenance order and complete it technically. 

- Maintenance Planner can Cancel the Technically Complete action and create a new maintenance operation and assign the related manpower, spare parts and service if needed, After the defect has been fixed, Maintenance Supervisor will do time confirmation, then Maintenance Planner closing the maintenance order (Technically Complete). 

The main phases of the corrective maintenance are:

- Identify the work.

- Plan the work.

- Perform the work.

- Record completed work.

- History / Analysis

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | used to plan, perform, and document all the necessary maintenance tasks that crop up outside of regular maintenance | S | H |
| 02 | The maintenance scheduler determines the scope and schedule of work and releases order at a suitable date | S | H |
| 03 | The Maintenance orders represent regular workload for the PM workshops | S | H |
| 04 | Maximizing the availability of the physical assets | S | H |
| 05 | Keeping physical assets in a workable and safe state | S | H |
| 06 | Reduce the operating costs caused by equipment downtime and damage | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Equipment Fault/Defect |
| **Process Input** | Request Maintenance Notification |
| **Process Output** | Corrective Maintenance |
| **Process Owner** | Operation and Maintenance Department- FCW |
| **Process Volumes** | 100 to 110 Maintenance Notification /Maintenance Order |
| **Process Frequencies** | Depending on requirement, it can be daily |

### Business Process Diagrams

**Pro****cess Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description ** |
| --- |
| **ID** | **Process Step Description** | **FIORI App****. / T. Code** | **                 ** **Business ****Roles** |
|  |  |  |  |
| 01 | Create notification | Request Maintenance (F1511) /(IW21) | Employee/Operator Maintenance Supervisor |
| 02 | Create Maintenance Order | Manage Orders and Notifications in Information Center (W0019) /Create Order, Create Maintenance Order (IW22, IW31) | Maintenance Planner |
| 03 | Release Order | Manage Orders and Notifications in Information Center (W0019) / Change Order, Change Maintenance Order (IW32) | Maintenance Planner |
| 04 | Print Job Card / issue slip | Print Order (IW3D) | Maintenance Supervisor  Maintenance Planner |
| 05 | GI againest WO Reservation | Post Goods Movement (MIGO) | Warehouse Clerk |
| 06 | Confirm Maintenance order | Enter PM Order Confirmation (IW41), Overall Completion Confirmation  (IW42) | Maintenance Supervisor  Maintenance Planner |
| 07 | Technically Complete | Manage Orders and Notifications in Information Center (W0019) / Chane Order (IW32), Change Maintenance Order List (IW38) | Maintenance Planner |

### Reports / Key Performance Indicators KPIs 

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | IW28 | List Change Notification | X | X |
| 02 | IW29 | List Display Notification | X | X |
| 03 | IW38 | List Change Order | X | X |
| 04 | IW39 | List Display Order | X | X |
| 05 | IW40 | Display Orders (Multilevel) | X | X |
| 06 | IW30 | Notification List (Multilevel) | X | X |
| 07 | IW49 | Display Operations | X | X |
| 08 | IW37N | Change Order and Operations List | X | X |
| 09 | IW47 | Display Confirmations | X | X |
| 10 | IW12 | Document flow list | X | X |
| 11 | IWBK | Material Availability Information | X | X |
| 14 | IW3M | List of Goods Movement for Order | X | X |
| 15 | IE06,IH08 | List of Equipment | X | X |
| 16 | ME2k | Purchasing Documents Per Account Assignment | X | X |
| 17 | ML84 | List of Service Entery Sheets | X | X |
| 18 | CR05 | Work Center List | X | X |
| 19 | IK07, IK08 | List of Measuring Points | X | X |
| 20 | IK17,IK18 | List of Measuring Documents | X | X |
| 21 | MCI8 | Cost Analysis | X | X |
| 22 | MCJB | MTTR/MTBR – Equipment | X | X |

### Locations where this Business Process is performed.

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim – Central Fleet Workshop “FCW” | 24 | Maintenance Planner |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Process Step ** | System/ **Module Integrated with** | **Integration Details** |
| 01 | Plan Resources (Components/Services/Manpower) | MM | -During the planning of material and services depending on their category of material i.e. “L” Stock or “N” Non-Stock item, reservations or Purchase Requestion will be created automatically on order release. -For External services as detremine by operation control key PM03, PR will be gereated automatically on order release. |
| 02 | Goods Issue againest WO reservations | MM, FI-CO | During Goods Issue the actual cost will be determined and Inventory will updated. |
| 03 | Time Confirmation | FI-CO | During time confirmation the actual cost will be determind. |
| 04 | Settle the Maintenance Order | FI-CO | - The cost of the maintenance order must be settled to a receiver such as Cost Center only. - Settlement for maintenance order can be done by Full (FUL) or Periodically (PER) as a Settlement Types (Cross Month Settlement). - Cost elements group can be used or selected cost elements to be used for settlement. |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grandparent |
| 4000 | Al-Watania Agriculture |

| **Maintenance Planning Plant ** |
| --- |
| 1310 | Fleet Central Workshop-FCW |

| **Location** |
| --- |
| **Code ** | **Employees Group Responsible ** |
| Z1 | Watania1 |

| **Planner Group** |
| --- |
| **Code ** | **Employees Group Responsible ** |
| 100 | FCW Planner Group |

### Master Data Considerations/High Level Data Migration 

| List of Related Master Data |
| --- |
| ID | Description |
| 01 | Equipment Master-Fleet Objects |
| 02 | Main. Work Centers |

**Process WorkFlow **** **

N/A

### System Configuration Considerations

- **Maintenance Notification / Maintenance request **

The following notification type will be used for Corrective Maintenance process for AWP-FCW (Fleet Centeral Workshop)

| Maintenance Notification Type |
| --- |
| Type/Code | Description |
| Y1 | FCW Maintenance Notification |

| Maintenance Notification Number Range |
| --- |
| ID | From | To | Internal / External |
| Y1 | 000010000000 | 000019999999 | Internal |

| Maintenance Notification Priority |
| --- |
| ID | PM Priority | PM Corrective |
| 1 | Very High | Within 1 Day |
| 2 | High | Within 3 Days |
| 3 | Medium | Within 5 Days |
| 4 | Low | Within 7 Days |

Maintenance Notification Standard System Status will be used for AWP-FCW (Fleet Central Workshop)

- **Maintenance Order **

The following maintenance order type will be maintained and used for AWP-FCW (Fleet Centeral Workshop)

| Maintenance Order Type |
| --- |
| Type/Code | Description |
| YM01 | FCW Maintenance Order |

| Corrective Maintenance Order Number Range |
| --- |
| ID | From | To | Internal / External |
| YM01 | 000070000000 | 000079999999 | Internal |

| PM Activity Type for Corrective Maintenance Order |
| --- |
| Type/Code | Maintenance Activity Type Description |
| 003 | Repair |

- **Maintenance Order ****Statutes****  **

- **System Status **

The Standard System Status will be used for the Corrective Maintenance Order type **YM01** for AWP-FCW (Fleet Centeral Workshop)  

- **User Status **

The following User Status profile of the Corrective Maintenance Order type **YM01** for AWP-FCW (Fleet Centeral Workshop) will be maintenaied

| User Statuses for Corrective Maintenance Order YM01 |
| --- |
| Sequence No | Short | User status | Lowest | Highest | System Status |
| 10 | CRTD | Order Opened | 10 | 20 | CRTD |
| 20 | COMP | Work Completed | 20 | 20 | TECO |

| User Statuses for Corrective Maintenance Order YM01 |
| --- |
| Sequence No | Short | User status | System Status |
|  | AWSP | Awaiting Spares | REL |
|  | AWXS | Awaiting External Service | REL |
|  | AWMP | Awaiting Manpower | REL |

Activity Type

## Definition

Activity type is the classification of activities that are performed in [cost centers](https://erproof.com/co/sap-co-training/sap-cost-center-master-data/) in a controlling area. SAP activity types are used to allocate internal activities cost which are incurred by specific cost center. In other words, it identifies the activities or work that has to be done by an organization for one or several cost centers.

| **Activity Type ** |  |
| --- | --- |
| **A. Type ID ** | **Name** | **Description** |
| 400 | Maintenance Activity Costs | Maintenance Activity Costs |

## Requirements & Exceptions 

You specify the activity types in the work center. You use activity type planning in Activity Type Accounting to assign activity types to work centers. Planned price will be set manual for the first time on cost centers level and it will be different from cost center to another.

Actual costs are accumulated for each Activity Type and calculate actual activity prices for the activity type and use these values in costing to value the activities. 

Cost element: The activity type must be assigned to a secondary cost element so that the costs for this activity type can be included in costing under this cost element. This cost element must have cost element type 43 (internal activity allocation). 

*Scenarios where Activity Type is required are listed as follows:

**Allocating Activity Type expenses to maintenance costs**

There will be one activity type it will be assigned to Four work centers each work center assigned to different cost centers, each cost center is related to different company code. This cost centers that are assigned on this work centers are under one company code which is (1000) Al-Watania Poultry this is because that the maintenance will be performed in one company code, also the prices for maintenance will be different from company code to another this is based on the business requirement.

**For the period end closing activities:**

Once the maintenance order is settled from the maintenance department the cost accountant will make activity type calculation to maintain the actual price for activity after the calculation, he will reevaluate the activity and the last step he will resettle the maintenance order again to distribute the remaining balance on the maintenance cost centers.

## Allocation Cost Element

| **Activity Type **** ** | **Cost Element ** |
| --- | --- |
| **Code** | **Description** | **Code** | **Company Code Description** |
| 400 | Maintenance Activity Costs | 81000009 | Maintenance Activity Costs |

## System Configuration Considerations

**Allocation Structure**** (PM) ****WAPO-Plant Maintenance**

| **           ****Assignments** | **                  Sources ** | **Settlement cost elements ** |
| --- | --- | --- |
|  | **            Cost element ** |  |
| 100 | Maintenance cost | 50000000 | 81000008 |  |

| **Settlement Profile** |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Settlement Profile Z40** | ** ** |
| **Actual Costs** | ** Default Values** | ** ** | **Indicators** | ** ** | **Valid Receivers** |
| **To be settled ** **in ful****l** | **Allocation Structure** | **PM** | **100%-Validation** | **X** | **Cost Center** |
|  |  |  | **100%-Settlement** | **X** |  |
|  |  |  | **Default Object type** | **CTR** |  |

## Technical/Development Related Items

	N/A
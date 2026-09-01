# PP-MD-030 Work Center-V2

| PP-MD-030: Work center |
| --- |

## Definition

Operations are carried out at a work center. In the SAP system work centers are business objects that can represent the following real work centers, for example:

- Machines, machine groups

- Production lines

- Assembly work centers

- Employees, groups of employees

**Use**

Together with bills of material and routings, work centers belong to the most important master data in the production planning and control system. Work centers are used in task list operations and work orders. Task lists are for routings. Production orders are created for production.

Work center data is used within the following business functions:

- **Costing**: The internal labor costs are calculated per unit of finished product, thereby allocating costs to the individual cost objects that generate them.

Operations are linked with cost accounting via cost centers and activity types specified in the work center. You can use standard values for activity types in an operation by defining them in the work center and then using the work center in the operation.

The valuation of in-house activities uses the charge rates planned for these activity types in product costing. The activity types determine how the standard values are calculated in costing.

- **Scheduling**: The operation dates are determined via scheduling. Before you carry out scheduling, you must calculate execution times in relation to the time that the work center is used.

The standard values and quantities in the operations are the basis for calculating execution time in scheduling. The start and finish dates of operations and phases are calculated in scheduling with the help of formulas for scheduling maintained in the work center.

- **Capacity requirements planning**: In capacity requirements planning, capacity requirements for operations are calculated from the orders and are compared with the available capacity defined in the work center. 

Standard values and quantities from the operations are the basis for calculating capacity requirements. For this, it is necessary to maintain formulas for capacity requirements planning in the work center.

You can summarize available capacity and capacity requirements from subordinate to higher-level work center using work center hierarchies.

**Standard Formula**

In the simplest case, the result of a formula is a standard value entered for the operation:

F = DURAT

If the operation duration is, for example, dependent on the operation quantity, you can also include additional "general operation values":

F = DURAT * OPQT/ BASEQT

If the operation duration is, for example, dependent on the work center used for this operation, you can also enter " work center constants" in the formula:

F = DURAT * OPQT/ BASEQT x BASEOUT /RESOUT

The meaning and the origin of the above parameters is displayed in the following table.

| **Parameter ID** | **Meaning** | **Origin** |
| --- | --- | --- |
| DURAT | Duration | Standard value |
| OPQT | Operation quantity | General operation value |
| BASEQT | Base quantity | General operation value |
| RESOUT | work center output | work center constant |
| BASEOUT | Base output | work center constant |

- Integration points:

- PP Organization Level: 

- Location

- Person responsible

- Capacity Planner

- PP master data:

- Shift sequence 

- CO master data:

- Cost Center

## Requirements & Expectations

|  |  | **Formula used** |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  | **Capacity** | **Scheduling** | **Costing** |
| **Work Center Category** | **Standard Value Key** | **Capacity Category** | **Processing Formula** | **Setup formula** | **Processing formula** | **Setup formula** | **Setup activity** | **Machine/ Duration** **activity** | **Labor activity** | **Overhead**** activity** |
| ZFR1 Normal1 farm ZFR2 Cage1 farm ZFR3 Cage 2 farm ZFR4 Normal2 farm | ZP01 | ZFM farm | ZLV3 | - | ZLV1 | - | - | ZLV3 | ZLV4 | ZLV3 |
| ZHS1 Hatchery Setters | ZP02 | ZHS Hatchery setter | SAPC00 | - | SAPC00 | - | - | SAPC00 | - |  |
| ZHH1 Hatchery hatcher | ZP02 | ZHH Hatchery Hatcher | SAPC00 | - | SAPC00 | - | - | SAPC00 | - |  |
| ZHT1 hatchery transfer | ZP02 | ZHT Hatchery transfer | SAPC00 | - | SAPC00 | - | - | SAPC00 | - |  |
| 0001 machine | ZP01 | 001 machine | SAP006 machine requirements | SAP005 setup req. | SAP002 machine time | SAP001 setup time | SAP005 setup req. | SAP006 machine requirements | SAP007 labour requirements |  |
| 0003 labor | SAP1 | 002 person | SAP007 labour requireZFR1ments | - | SAP003 labour requirements | - | - | - | SAP007 labour requirements |  |
| ZA1 | ZAG1 |  |  |  |  |  |  | ZAGRI1 Value requirement |  |  |

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Using work center for modeling the live operation farms/hatchers and setters for planning & costing. Number of individual capacities to represent the number of houses per farm | S | H |
| 02 | Using work center for modeling machines, labors work centers and production lines for planning & costing | S | H |
| 03 | Authorization of changing & displaying work center according to plants (departments) | S | H |

## Systems List

This list gives an overview about all the current systems that use this master data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Excel | Work center | Qassim |

## Data Conversion and  Data Cleansing Requirements

Data conversion for work center will be done by extraction from existing systems to an interim database for consolidation and conversion to be complied with SAP format. For this SAP Legacy System Migration Workbench (LSMW) can be used. Planning and execution is in the responsibility of WI-SYS team.

For cleansing production planning key users will collect all work center in excel sheet template and consultant will consolidate it in one sheet and make validation against routing and production version sheets to make sure that:

- Check that all work center must be in use in a routing

- Check work center duplication

## Master Data Ownership

Maintenance of work center will be the responsibility of production planning master data administrator per department. (Role: PP Master Data Admin)

## Authorization/Security Considerations

Maintenance of the master data will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## Organization Impact Considerations

Work center master records are defined with the following areas.

- Department (**Plant**** level**) 

## Configuration Considerations

| **Work ****center**** category** |
| --- |
| **Work ****C****enter**** category** | **WC Cat. Description** |
| ZFR1 | Normal1 Farm |
| ZFR2 | Cage1 Farm |
| ZFR3 | Cage2 Farm |
| ZFR4 | Normal2 Farm |
| ZHS1 | Hatchery - Setter |
| ZHH1 | Hatchery - Hatcher |
| ZHT1 | Hatchery - Transfer |
| ZA1 | Agri Farm |

| **Work ****center**** category** |
| --- |
| **Capacity category** | **Capacity Cat. Description** |
| ZF1 | Farm |
| ZHS | Hatchery - Setter |
| ZHH | Hatchery - Hatcher |
| ZHT | Hatchery - Transfer |

| **Plant** | **Shift Group** | **Grp ****desc** | **Shift code** | **Shift ****Desc** | **From** | **To** | **Break start** | **Break End** | **Comment** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Feed Mill | FM1 | 2 Shifts | S1 | 1st Shift | 06:00 | 15:00 |  |  |  |
|  |  |  | S2 | 2nd Shift | 18:00 | 03:00 |  |  |  |
|  |  |  | S3 | 1st Shift-Fridy | 06:00 | 11:00 |  |  |  |
|  |  |  | S4 | 2nd Shift-Fridy | 13:30 | 18:30 |  |  |  |
|  | FM2 | 3 shifts | S1 | 1st Shift | 06:00 | 14:00 |  |  |  |
|  |  |  | S2 | 2nd Shift | 14:00 | 22:00 |  |  |  |
|  |  |  | S8 | 3rd Shift | 22:00 | 06:00 |  |  |  |
|  |  |  | S3 | 1st Shift-Fridy | 06:00 | 11:00 |  |  |  |
|  |  |  | S4 | 2nd Shift-Fridy | 13:30 | 18:30 |  |  |  |
|  |  |  | S5 | 3rd Shift-Fridy | 18:30 | 23:30 |  |  |  |
|  | FM3 | 1 shift | S1 | 1st Shift | 06:00 | 15:00 |  |  |  |
|  | FM4 | 2 Shifts | S6 | 1st Shift | 06:00 | 18:00 |  |  |  |
|  |  |  | S7 | 2nd Shift | 18:00 | 06:00 |  |  |  |
| Further Processing | FP1 | 2 Shifts1 | S1 | 1st Shift | 06:00 | 14:00 | 09:30 | 10:00 | All Days except Friday & Saturday |
|  |  |  | S2 | 2nd Shift | 14:00 | 22:00 |  |  | All Days except Friday |
|  |  |  | S4 | 1st Shift - Friday | 04:30 | 11:30 |  |  |  |
|  |  |  | S5 | 2nd Shift - Friday | 14:00 | 21:00 |  |  |  |
|  | FP2 | 2 Shifts2 | S1 | 1st Shift | 06:00 | 14:00 | 09:30 | 10:00 |  |
|  |  |  | S3 | 2nd Shift2 | 14:00 | 01:00 | 23:00 | 00:00:00 |  |
|  | FP3 | 2 Shifts3 | S6 | 1st Shift - R | 06:00 | 12:00 |  |  | All Days except Friday & Saturday |
|  |  |  | S7 | 2nd Shift - R | 12:00 | 20:00 | 18:45 | 19:15 | All Days except Friday |
|  |  |  | S8 | 1st Shift - Friday - R | 05:30 | 11:30 |  |  |  |
|  |  |  | S9 | 2nd Shift - Friday - R | 13:00 | 19:00 |  |  |  |
| Processing | P01 | 1 Shift1 | S1 | 1st Shift1 | 06:00 | 18:00 |  |  |  |
|  | P02 | 1 Shift2 | S2 | 1st Shift2 | 08:00 | 20:00 |  |  |  |
|  | P03 | 1 Shift3 | S3 | 1st Shift3 | 18:00 | 06:00 |  |  |  |
|  | P04 | 2 Shifts1 | S1 | 1st Shift1 | 06:00 | 18:00 |  |  |  |
|  |  |  | S4 | 2nd Shift4 | 18:00 | 00:00 |  |  |  |
|  | P05 | 2 Shifts2 | S1 | 1st Shift1 | 06:00 | 18:00 |  |  |  |
|  |  |  | S5 | 2nd Shift5 | 00:00 | 06:00 |  |  |  |
|  | P06 | 2 Shifts3 | S2 | 1st Shift2 | 08:00 | 20:00 |  |  |  |
|  |  |  | S6 | 2nd Shift6 | 20:00 | 02:00 |  |  |  |
|  | P07 | 2 Shifts4 | S2 | 1st Shift2 | 08:00 | 20:00 |  |  |  |
|  |  |  | S7 | 2nd Shift7 | 02:00 | 08:00 |  |  |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 3 of 6 |
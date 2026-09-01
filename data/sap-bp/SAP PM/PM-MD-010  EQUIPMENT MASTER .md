# PM-MD-010  EQUIPMENT MASTER 

| PM-MD-010  EQUIPMENT Master |
| --- |

## Definition 

Equipment is an individual physical object that is to be maintained as an autonomous unit. Pieces of equipment usually represent single objects (e.g., pumps, motors, vehicles) for which maintenance tasks should be recorded and history is kept. Equipment moves & can be installed & dismantled at functional locations.

Equipment can be sequentially numbered by the system if a number range is assigned. The Equipment can also be classified in the same manner as Functional Locations using the same Classification system.

The Equipment is connected to a Functional Location. History and cost of the interventions on equipment will "follow" it wherever it is installed in the Pyramid in a given Plant.

Equipment ABC Indicator

This indicator allows you to specify the criticality of your equipment from a production point of view.

Creating Equipment

Equipment master record is created to represent an object that requires maintenance history to be recorded. A new Equipment master record is created when:

A new Equipment is purchased or

Existing Equipment is replaced.

During the creation of the Equipment, it is possible to:

Create Measuring Points and Counters

Assign Classes and Characteristics

Important fields when creating a master record are:

Equipment Type:

Determines the layout of the master record screen.

Shows which type of equipment it is, for example, MOTR is the equipment type for Motor.

Equipment Number is a unique number assigned to each Equipment.

The view profile for the Equipment Category will be the **STANDARD** View Profile.

Status Management

Status Management is used to describe the condition of a technical object. Equipment at AWP-FCW will use the system statuses.

System Status

System statuses are set internally by the system. System statuses are used to control the business transactions that can be performed against a technical object.

System Status

System Status is set internally by the system for the particular business transactions within general status management. They inform you whether a particular business transaction has been performed at a technical object, and which business transactions you may now perform for the technical object based on this status. System Status cannot be changed directly by the user and are set automatically by the system when you perform a particular business transaction.

You are only able to display them.

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Equipment Category “Fleet” should be defined | S | H |
| 02 | Internal Number range should & will be defined and assigned | S | H |
| 03 | Object Types will be defined | S | H |
| 04 | Expecting to Manage individual data for objects | S | H |
| 05 | Recording the maintenance tasks | S | H |
| 06 | Objects-based recording of the accurate costs | S | H |
| 07 | Evaluate of the technical data | S | H |
| 08 | Recording of the usage time | S | H |

## Systems List

N/A

## Data Conversion and Data Cleansing Requirements

Data conversion for Equipment will be consolidated and collected to be complied with SAP format. For this purpose, MS. Excel will be used.

For cleansing and migration of consolidated Data, SAP recommends that the internal number range assignment should be used. It is intended to use Data Migration Tools, for planning and execution is in the responsibility of Wi-Sys team.

Planned Mandatory fields should be filled on data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration. 

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Master Data Management (MDM) team located in Qassim will administrate Equipment Master Records centrally.

## Authorization/Security Considerations

Maintenance of operative EAM Master Data will be centrally. For this, transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

N/A

## Data Archiving Requirements

| **Data** | **Scraped / Deactivated** |
| --- | --- |
| Scraped/Phased out Equipment Master record | Yes |

## Organization Impact Considerations

The Equipment Master Record “**Fleet Object**” will be maintained with the below Views and Tabs:

| **Fleet Equipment ** |
| --- |
| **Data Group ** | **Description** |
|  |  |
| General Data | This is fixed data, which generally does not change in the course of time It contains information like Fleet Object Type, size, dimensions, type, and year of construction, manufacturer details, and model number. |
| Plant Maintenance Data Location Data | This is time-dependent data. It can change in the course of time. It contains information like Maintenance Planner Group, work centers, planning Plant and maintenance Plant and the cost centers. |
| Measuring points, counters, and measurement documents | In the SAP System, one can use measurement documents to enter measurement values and counter readings that are taken from measuring points and counters. A measurement value describes the condition at a measuring point at a specified point in time for example: For Fleet Equipment & Vehicles: Measuring Point Category: M “General” Measuring Point is a Counter Fuel Measure with UOM Liter “L” Kilo Meter Milage with UOM Kilometer “KM” |
| Equipment Number | It is unique identification number for the equipment. Internal numbering will be used, and the system-generated numbers will be assigned to the equipment. |
| Main Work Center | The work center is an organizational unit, this is a   Responsible Work centers. |
| Cost Center | Organizational unit within a controlling area that represents a defined location of cost incurred |
| Maintenance Planning Plant | The Plant which is responsible for planning the Maintenance Activities |
| Asset | This filed will contain Asset number for assigning a piece of equipment to an asset. |
| ABC indicator | ABC indicator identified level of important of functional location. A –Critical (Breakdown of this will result in System failure). B – Important (Break Down will not affect System, operation can be managed with standby) C- Less important. |
| Maintenance Plant | Plant where the Equipment is existing |
| Object Type | To perform Structuring in Greater Depth Object Type is used. |
| Technical Identification Number | The Site Number of the Fleet Equipment or Vehicle will be used and maintained in that field. |
| Vehicle ID/Measurements | Collecting the most important details of the fleet object” Vehicles” like Fleet Object Type, Fleet object Number, License plate number, License validity End Date, Vehicle Identification number, Chassis Number, Transport-relevant data, and Dimensions. |
| Vehicle Technology | Collecting the Fleet Usage indicator, Fuel details and Engine Data. |

## Configuration Considerations

| **Equipment Category ** |
| --- |
| **Equipment Category ** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| F | Fleet Equipment | 000000000060000000 | 000000000069999999 |
| M | Machine | 000000000070000000 | 000000000079999999 |

| **Object Types ** |
| --- |
| **Code** | **Description** |
| Y1100 | Big Truck |
| Y1101 | Med Truck |
| Y1102 | Small Truck |
| Y1103 | Jeep/Sedan/Pickup |
| Y1104 | Trailers |
| Y1105 | Heavy Equipment |
| Y1106 | Earth Moving |
| Y1107 | Agri Machinery |
| Y1108 | Welding Machine |
| Y1109 | Oxygen Acetylene |
| Y1110 | Trolly |
| Y1111 | Air Compressor |
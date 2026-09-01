# PM-MD-030 MEASURING POINTS  

| PM-MD-030 measuring points |
| --- |

## Definition 

**Measuring Point**

A Measuring point is a physical or logical position for a technical object where a condition can be recorded. A counter is a type of measuring point that accumulates performance-based readings. Measuring points and counters are created for technical objects to record a condition for the technical object at a given point in time. 

Examples of the type of conditions are: 

- Temperature as measuring points 

- Liters as counters 

- Kilometers as counters 

- Operating hours as counters

- The Measuring point or counter defines the location and the specific condition to be recorded for the technical object. 

- Each Measuring point or counter will have its own Identification number. 

- Each Measuring point or counter will reference a class characteristic. 

- The class characteristic defines the format of the value entered against the Measuring point or counter. 

- Measurement and counter readings are entered as Measurement Documents in the system. 

- A Measuring point list can be created to list a group of Measuring points or counters that assist in the recording of Measurement or counter readings. 

- A technical object can have multiple Measuring points and counters.

**Possible uses of Measuring Points**

The possible uses for Measuring Points are:

- **Activity Recording **which

- Shows the hours of utilization

- Can be linked with preventive maintenance

- Number of copies per copier

- **Settings recording**

- Instrument parameters recording (upper & lower limits, actual settings & changes)

- **Measurement for inspection**

- Qualitative and/or quantitative inspection

Measuring Points can be attached to Functional Locations or Equipment and Fleet Equipment. Many measuring points can be created for any given Technical Object.

Measuring Point Category

A measurement point is driven by the measurement point category. The measurement point category can influence the number range. But only internal number range is allowed for measuring points (sequentially numbered). This category also allows the uniqueness of Measurement points of one type at an object level.

**Measuring Points Naming**

Measurement point positions are named accordingly to the following categories:

- Instrument Set Points (I)

- Inspection (N)

- General (M) --> Counters 

 

**Counter Measuring Points **

A counter is used to record continuous values. (e.g., accumulative values, run time hours). A counter is a kind of special measuring point. It is flagged as counter. A Counter forms the basis of counter-based maintenance.** **

Counters can be used in maintenance plans to schedule preventive maintenance. An annual estimate is entered for a counter. When a measuring point is defined for preventive maintenance, it has to be flagged as counter. The data required is slightly different. A special block appears where you can define data important for preventive maintenance such as:

- Counter over reading 

- Annual estimate 

**Warning**: Backward counting cannot be used for counter-based maintenance.

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Measuring point categories should be defined to record counter readings or measurement readings for Equipment | S | H |
| 02 | Measurement categories and counters refer to [characteristics](http://mysaplib.com/00000046/3455c58d98482bc0e10000009b38f91f/content.htm) in the Classification System | S | H |
| 03 | Documenting the condition of a technical object at a particular point in time | S | H |
| 04 | Counter and Condition based in maintenance can be performed with preventive maintenance | S | H |

## Systems List

N/A

## Data Conversion and Data Cleansing Requirements

Data conversion for Measuring Points will be collected to be complied with SAP format. For this purpose, MS. Excel will be used.

For cleansing and migration of consolidated Data, SAP recommends that the internal number range assignment should be used. It is intended to use Data Migration Tools, for planning and execution is in the responsibility of Wi-Sys team.

Planned Mandatory fields should be filled on data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration. 

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Master Data Management (MDM) team located in Qassim will administrate Measuring points creation and assignment to the technical objects centrally.

## Authorization/Security Considerations

Maintenance of operative EAM Master Data will be centrally. For this, transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

N/A

## Data Archiving Requirements

N/A

## Organization Impact Considerations

[Basic functions](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/9b/4815de8f4311d29e8a0000e8323350/content.htm)

which are the prerequisites for using measuring points and counters?

These functions are obligatory if you are using measuring points, counters, and measurement documents in the SAP system. You use them in the SAP user interface to create master records for measuring points and counters, to process the master records and to create measurement documents for them.

The following functions are basic functions:

·        [Creating Measuring Points and Counters](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/9b/4462a1454711d189430000e829fbbd/content.htm)

You create the master records for measuring points and counters and assign them to a technical object. This can be a piece of equipment or a functional location.

·        [Processing Measuring Points and Counters](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/01/206fc66a5011d19d7c0000e8323350/content.htm)

If you want to make changes in the master record of a measuring point or counter, you can either call up this master record directly, or from the master record of the technical object that is assigned to it.

·        [Creating Measurement Documents](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/74/aba7a6786211d19d8d0000e8323350/content.htm)

·        [Editing Measurement Documents](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/d8/1c9c96876e11d19d920000e8323350/content.htm)

There is Three measuring points Master Recorded will be used for AWP-FCW and assign for the Fleet Objects as below:

- Kilometer driven as Counter. 

- Fuel as a Counter 

- Shipment

Classifications & Characteristics:

- There are three classes will be used for AWP-FCW with class type 037 Measuring Point

- There are three Unit of Measure will be used and assigned to the particular class.

- Unit of Measures are Kilometer “KM” , Liter “L” and “Case”

GAS Station:

- There is a one Gas Station will be created for AWP-FCW 

- Measurement Documents and counter reading will be entered by user with using the Fiori App for Fuel Consumption in Gas station.

- The three measurement documents and record for the three measuring points of the object will be mandatory to fill it by user in Gas station.  

- Consumable Materials should be defined Diesel, Petrol or GAS 

## Configuration Considerations

| **Measuring Points ****&**** Measuring Documents ** |
| --- |
| **No.** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| 01 | Measuring Points | 000000000001 | 000009999999 |
| 02 | Measurement Documents | 00000000000000000001 | 00000000000099999999 |

| **M****easuring Point ** |
| --- |
| **Field ** | **Code ** | **Description** |
| Measuring Point Object | IEQ | Equipment |
| Measuring Point Category | M | Measuring point (General) |
| Counter | Counter Marked | Measuring Point is Counter |
| Measuring Point Position | FUEL | FUEL |
| Measuring Point Description | Fuel Consumption | Fuel Consumption |
| Characteristics | Y_FUEL_CONSUMPTION | Fuel Consumption Measure |
| Class | Y_FUEL_EQUIPMENT | Equipment Fuel Consumption |
| Class Type | 037 | Measuring Point |

| **Measuring Point Unit of Measure ** |
| --- |
| **Code** | **Description** |
| L | Liter |
| KM | Kilo Meter |
| Case | Case |

| **Fuel Station ** |
| --- |
| **Code** | **Description** |
| W011 | Fuel S. Wat1 |
| W012 | Fuel S. Wat2 |
| W013 | Fuel S. Wat3 |

| **Fuel Station ****&**** Storage Location ****&**** Plant Assignment list  ** |
| --- |
| **Code** | **Description** | **Plant** | **Storage Location** | **Materials** |
| W011 | Fuel S. Wat1 | 1010 | Q011 | Diesel |
| W012 | Fuel S. Wat2 | 1010 | Q012 | Diesel |
| W013 | Fuel S. Wat3 | 1010 | Q013 | Diesel |
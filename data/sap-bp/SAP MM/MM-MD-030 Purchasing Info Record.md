# MM-MD-030 Purchasing Info Record

# MM-MD-030 Purchasing Info Record

## Definition 

Serves as a source of information for Purchasing. The purchasing info record (also referred to in abbreviated form as the "info record") contains information on a specific material and a vendor supplying the material. For example, the vendor's current pricing is stored in the info record. 

The info record allows buyers to quickly determine:

- Which materials have been previously offered or supplied by a specific vendor

- Which vendors have offered or supplied a specific material

**Structure**** **

**Content of an Info Record**** ****The info record contains: **

- Data such as prices and conditions that you can store for the relevant purchasing organization or plant

- The number of the last purchase order

- Tolerance limits for over deliveries and under deliveries

- The planned delivery time (lead time required by the vendor to deliver the material)

- Vendor evaluation data

- An indicator showing whether the vendor counts as the regular vendor for the material

- The vendor sub-range to which the material belongs

- The availability period during which the vendor can supply the material

The info record contains quotations and ordering data. The data in the info record (prices for example) is also used as default data for purchase orders.

For instance, you can store the current and future quotation conditions (discounts, fixed costs, etc.) in the info record, in order to be able to copy them into Pos. You can also maintain the vendor’s conditions directly in the info record.

**Organizational Levels **

**An info record can apply to the following organizational levels: **

- Purchasing organization

- Plant

**Procurement Types in Info Records **

- **Standard **

A standard info record contains information for standard purchase orders. The info records can be created for materials and services with and without master records.

**• Subcontracting **

A subcontractor info record contains ordering information for subcontract orders. For example, if you subcontract the assembly of a component, the subcontractor info record would include the vendor's (subcontractor’s) price for assembling the component.

**• ****Pipeline **

A pipeline info record contains information on a vendor’s commodity that is supplied through a pipeline or pipes (for example, oil or water) or by similar means (for example, electricity through the mains). The info record contains the vendor’s price for the consumption of such commodities by the buyer ("pipeline withdrawals"). You can store withdrawal/usage prices for different validity periods.

**• ****Consignment **

A consignment info record contains information on a material that vendors keep available at their own cost on the order’s premises. The info record contains the vendor’s price for withdrawals by the order from consignment stock. As in the case of the pipeline info record, you can store prices for different validity periods.

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Responsibility for info record is Purchasing department | S | H |
| 02 | Some fields will be mandatory for reporting purpose | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Prices of Suppliers Materials | Qassim |

## Data Conversion and  Data Cleansing Requirements

Data conversion for info records will be by extraction from existing Systems to an interim database for consolidation and conversion to comply with SAP format. For this Excel or SAP Data Services can be used. 

 

For cleansing and migration of consolidated info records SAP recommends that you use the internal number assignment. It is intended to use SAP Data Services Tool for Data Migration, planning and execution are in the responsibility of the Wi-Sys team.

 

Planned Mandatory fields should be filled on the data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration (Prices , phone numbers, etc.).

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP.

## Master Data Ownership

Master Data Management (MDM) team located in Qassim will administrate info record master centrally.

## Authorization/Security Considerations

Maintenance of operative info record master data will be centrally based on the authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team holds the governance and overall responsibility for info record Master. For maintenance of info record data, the functional teams from  Purchasing department are in charge. 

| **Key Control Levels** | **Org. Level** | **Ownership** | **C****omment** |
| --- | --- | --- | --- |
| Info record – General View | Client | MDM |  |
| Info record – Purchasing View | Purchasing | MDM |  |
| Info record – Conditions | Purchasing | MDM |  |

## Data Archiving Requirements

| **Data** | **Length of Time (Years)** |
| --- | --- |
| Info record – General View | 10 |
| Info record – Purchasing View | 10 |
| Info record – Conditions | 10 |

## Organization Impact Considerations

Purchasing info record master records divided into the following areas so that each plant and each Purchasing Organization can store its own information for doing business with Suppliers and materials.

- General data (**Client level**) 

- Purchasing organization data (**Purchasing Dep.**** level**)

- Plant Level

## Configuration Considerations

N/A

## Reports

| **Reports** |
| --- |
| **Code** | **Description** |
| ME1L | Info records By Vendor |
| ME1M | Info records By Material |
| ME1P | Order Price History |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 3 |
# MM-MD-010 Business Partner - Suppliers V2

# MM-MD-010 Business Partner – Suppliers 

## Definition 

An organization (company, subsidiary), person, group of people or organizations in your company has a business interest.

You can enter and manage your business partner centrally concerning various business transactions. This is particularly relevant if a business partner has various roles for a company, such as sold-to party and ship-to party.

A business partner is created in various business partner roles and can take on additional business partner roles throughout the business relationship. It is not necessary to reenter general data for a business partner, which is not dependent on their function or application-specific enhancements, meaning that entry and storage of redundant data avoided.

A company deals with different natural and legal persons during business transactions: A vendor is a party in the supply chain that makes goods and services available to companies or consumers. The term "vendor" used to describe the entity that paid for goods that are provided, rather than the manufacturer of the goods itself.

You enter data on business partners with whom your company has a business relationship in master records. Master records contain all data necessary for processing business transactions. This is known as master data.

If you enter all master data, you spend less time processing business transactions because the system proposes the master data in these transactions.

Financial Accounting and Logistics use master data. General data and data relevant to both departments is stored in shared master records to avoid duplication.

You can create and change master records using groups of data that differ in the level of detail.

Master records for business partners who are Suppliers have the following business partner roles:

- **General Role**

Contains all general data like; Name, Address, E-mail and Phone … etc.

- **Supplier**** Role**** (FLVN01)**

Contains data related to Purchasing Organization level.

- **FI ****Supplier**** Role**** (FLVN00)**

Contains data related to finance (Company Code related data).

- **Truck**** (****T00001****)**

             Contains data related to transportation.

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Responsibility for Suppliers should be centralized in Purchasing | S | H |
| 02 | Some fields will be mandatory for reporting purpose | S | H |
| 03 | Keep the current Vendors with the same numbers and new records will use internal number range for every branch | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Suppliers in finance | Qassim |

## Data Conversion and  Data Cleansing Requirements

Data conversion for Suppliers will be by extraction from existing Systems to an interim database for consolidation and conversion to comply with SAP format. For this Excel or SAP Data Services can be used. 

 

For cleansing and migration of consolidated Suppliers, usage of external number ranges is necessary. After migration, these number ranges should be switched to an additional internal number range starting with the latest external plus 1. With an internal number assignment, you can start search functions for supplier master records using the search term. This largely eliminates the need for mnemonic supplier numbers. For this reason, SAP recommends that you use the internal number assignment. It is intended to use SAP Data Services Tool for Data Migration, planning and execution are in the responsibility of the Wi-Sys team.

 

Planned Mandatory fields should be filled on the data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration (E-mails format, phone numbers, etc.).

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP.

## Master Data Ownership

Master Data Management (MDM) team located in Qassim will administrate supplier master centrally.

## Authorization/Security Considerations

Maintenance of operative Supplier master data will be centrally. For this, transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team holds the governance and overall responsibility for Supplier-Master. For maintenance of the above-listed business partner roles, the functional teams from finance and Purchasing are in charge. To do this effort, strict rules for coordination and synchronization between both areas are needed. So far, no separate system for Master Data Management is planned.

| **Key Control Levels** | **Org. Level** | **Ownership** | **C****omment** |
| --- | --- | --- | --- |
| Supplier Master – General View | Client | MDM |  |
| Supplier Master – Purchasing View | Purchasing | MDM |  |
| Supplier Master – Company code View | Company code | MDM |  |

## Data Archiving Requirements

| **Data** | **Length of Time (Years)** |
| --- | --- |
| Supplier Master – General View | 10 |
| Supplier Master – Purchasing View | 10 |
| Supplier Master – Company code View | 10 |

## Organization Impact Considerations

Supplier master records divided into the following areas so that each Company Code and each Purchasing Organization can store its own information for doing business with Suppliers.

- General data (**Client level**) 

- Company code data (**Company code level**)

- Purchasing organization data (**Purchasing Dep.**** level**)

## Configuration Considerations

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **External** |
| Y000 | Domestic Suppliers | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y001 | Foreign Suppliers | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y002 | Service & Construction Suppliers | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y003 | Affiliated Companies | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y004 | Government Authorities Payables | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y005 | **Trade Payables Domestic - One Time Accounts** | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y006 | Employees | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y007 | Banks Payable | 01 | 0000000001 | 0000999999 | X(during migration only) |
| Y099 | One Time Supplier | 01 | 0000000001 | 0000999999 | X(during migration only) |

| **Define Number Assignment for Direction BP to ****Supplier**** (CVI ****Inttegeration****)** |
| --- |
| **Grouping** | **Account group** | **Same Numbers** |
| Y000 | Y000 | X |
| Y001 | Y001 | X |
| Y002 | Y002 | X |
| Y003 | Y003 | X |
| Y004 | Y004 | X |
| Y005 | Y005 | X |
| Y006 | Y006 | X |
| Y007 | Y007 | X |
| Y099 | Y099 | X |

| **Configure Field Attributes per BP Role** |
| --- |
| **Role** | **Tab** | **Field** | **O/M** |
| General | Address | Title | M |
| General | Address | Name | M |
| General | Address | Name2 | O |
| General | Address | Search Term | M |
| General | Address | Street | O |
| General | Address | House No | O |
| General | Address | Postal Code | O |
| General | Address | City | M |
| General | Address | Country | M |
| General | Address | Region | O |
| General | Address | Language | M |
| General | Address | Telephone | M |
| General | Address | Fax | M |
| General | Address | Email | M |
| FI Vendor | Supplier : Account Management | Reconciliation Account | M |
| FI Vendor | Supplier : Payment Transactions | Terms of Payment | M |
| Supplier | Purchasing Data | Order Currency | M |
| Supplier | Purchasing Data | Terms Of Payment | M |
| Supplier | Purchasing Data | Incoterms (Part 1) | M |
| Supplier | Purchasing Data | Incoterms Location 1 | M |
| Supplier | Purchasing Data | Sales Person | O |
| Supplier | Purchasing Data | Telephone | O |
| Supplier | Purchasing Data | Purchasing group | M |
| Supplier | Purchasing Data | Planned delivery time in days | M |
| Supplier | Purchasing Data | Group for Calculation Schema (Supplier) | M |
| Supplier | Purchasing Data | GR Based Invoice Verification | M |

| **Region (Saudi Arabia)** |
| --- |
| **Code** | **Region** | **Region** |
| 01 | Riyadh Region | الرياض |
| 02 | Makkah Region | مكة المكرمة |
| 03 | Al Madinah Region | المدينة المنورة |
| 04 | Eastern Province | الشرقية |
| 05 | Al-Qassim Region | القصيم |
| 06 | Ha'il Region | حائل |
| 07 | Tabuk Region | تبوك |
| 08 | Northern Borders Region | الحدود الشمالية |
| 09 | Jizan Region | جازان |
| 10 | Najran Region | نجران |
| 11 | Al Bahah Region | الباحة |
| 12 | Al Jawf Region | الجوف |
| 14 | Asir Region | عسير |
| **Terms of Payment** |
| **Code** | **Description** |
| Y101 | CAD throw Bank |
| Y102 | CAD throw Watania |
| Y103 | COD 0 Days |
| Y104 | COD 15 days |
| Y105 | COD 30 days |
| Y106 | COD 45 days |
| Y107 | COD 60 Days |
| Y108 | D/P 100% |
| Y109 | D/P 10% |
| Y110 | D/P 15% |
| Y111 | D/P 20% |
| Y112 | D/P 25% |
| Y113 | D/P 50% |
| Y114 | L.C 30 Days |
| Y115 | L.C 60 Days |
| Y116 | L.C 90 Days |
| Y117 | FOC |

## Reports

| **Reports** |
| --- |
| **Code** | **Description** |
| MKVZ | List of Suppliers Purchasing |
| YMM005 | Suppliers Master List |
| YMM034 | Suppliers Per Company Codes |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 5 |
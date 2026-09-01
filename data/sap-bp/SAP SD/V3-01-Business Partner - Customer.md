# V3-01-Business Partner - Customer

| Business Partner – Customer |
| --- |

## Definition 

An organization (company, subsidiary), person or group of people or organizations in which your company has a business interest.

A company deals with different natural and legal persons during business transactions: A customer orders goods from your company. A forwarding agent might deliver goods to the customer. An employee within the company processes the business transactions. All roles a natural or legal person can assume are represented by business partners in the SAP System.

You enter data on business partners with whom your company has a business relationship in master records. Master records contain all data necessary for processing business transactions. This is known as master data.

If you enter all master data, you spend less time processing business transactions because the system proposes the master data in these transactions.

Financial Accounting and Logistics use master data. General data and data relevant to both departments is stored in shared master records to avoid duplication.

You can create and change master records using groups of data that differ in the level of detail.

Master records for business partners who are customers have the following business partner roles roles:

- **General Role**

Contains all general data like Name, Address, Email, Phone, etc.

- **Customer Role (FLCU01)**

Contains data related to sales and distribution (Sales Area related data).

- **FI Customer Role (FLCU00)**

Contains data related to finance (Company Code related data).

- **Customer Credit Mgt. (UKM000)**

Contains data related to credit management.

Sample business processes where Customer business partner is required are listed as follows:

- Sell from Stock

- Account Receivables 

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Responsibility for customer should be centralized in finance | S | H |
| 02 | Some fields will be mandatory for reporting purpose | S | H |
| 03 | Different number range for every branch as the current coding | S | H |
| 04 | Keep the current customers with the same numbers and newly customers in SAP will use internal number range for every branch | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Customers in finance | Riyadh |
| Route Pro | Customers in van sales | Riyadh |

## Data Conversion and  Data Cleansing Requirements

Data conversion for customer will be done by extraction from existing Systems to an interim data base for consolidation and conversion to be complied with SAP format. For this Excel or SAP Data Services can be used. 

For cleansing and migration of consolidated customers, usage of external number ranges is necessary. After migration, these number ranges should be switched to an additional internal number range starting with the latest external plus 1. With internal number assignment, you can start search functions for customer master records using match codes. This largely eliminates the need for mnemonic customer numbers. For this reason, SAP recommends that you use internal number assignment. It is intended to use SAP Data Services Tool for Data Migration, planning and execution is in the responsibility of Wi-Sys team.

Planned Mandatory fields should be filled on data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration (E-mails format, phone numbers, etc.).

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Customer master will be administrated centrally by Master Data Management (MDM) team located in Qassim.

For other branches, they will have access to display customers and for changing or creation they should contact Master Data Management (MDM) team located in Qassim.

For third party applications (Mobile van sales), the customers will be created on SAP and then distributed to other third party systems either manually before integration or automatically after integration project. 

## Authorization/Security Considerations

Maintenance of operative customer master data will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Customer-Master. For maintenance of above listed business partner roles the functional teams from finance and sales are in charge. To do this effort, strict rules for coordination and synchronization between both areas are needed. So far no separate system for Master Data Management is planned.

| **Key Control Levels** | **Org. Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Business Partner – General Role | Client | MDM |  |
| Business Partner – Customer Role | Sales Area | MDM | A signed form from SD team should be filled for data |
| Business Partner – FI Customer | Company code | MDM | A signed form from FI team should be filled for data |
| Business Partner – Credit Management | Credit Segment | MDM | A signed form from FI team should be filled for data |

## Data Archiving Requirements

| **Data** | **Length of Time (Years)** |
| --- | --- |
| Business Partner – General Role | 10 |
| Business Partner – Customer Role | 10 |
| Business Partner – FI Customer | 10 |

## Organization Impact Considerations

Customer master records are divided into the following areas so that each Company Code and each Sales Organization can store its own information for doing business with customers.

- General data (Client level) 

- Company code data (Company code level)

- Sales organization data (Sales Area level)

## Configuration Considerations

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **External** |
| Y001 | Customers | 01 | 0000000001 | 0000999999 | X |
| Y002 | Sales Rep. | 01 | 0000000001 | 0000999999 | X |

| **Configure Field Attributes per BP Role** |
| --- |
| **Role** | **Tab** | **Field** | **O/M** |
| General | Address | Title | M |
| General | Address | Name | M |
| General | Address | Name2 | O |
| General | Address | Search Term | O |
| General | Address | Search Term2 | O |
| General | Address | Street | O |
| General | Address | Street 2 | O |
| General | Address | House No | O |
| General | Address | City | M |
| General | Address | Country | M |
| General | Address | Region | M |
| General | Address | Language | English |
| General | Address | Telephone | O |
| General | Address | Fax | O |
| General | Address | Email | O |
| FI Customer | Accountant Management | Reconciliation Account | M |
| FI Customer | Accountant Management | Head Office | O |
| FI Customer | Payment Transactions | Terms of Payment | M |
| Customer | Orders | Sales Office | M |
| Customer | Orders | Sales district | M |
| Customer | Orders | Customer Group | M |
| Customer | Orders | Currency | SAR |
| Customer | Orders | Cust.pic.proc. | M |
| Customer | Orders | Customer Stats.Group | M |
| Customer | Shipping | Shipping Conditions | M |
| Customer | Shipping | Delivering Plant | M |
| Customer | Shipping | Complete Delivery | O |
| Customer | Shipping | POD-Relevant | O |
| Customer | Billing Document | Terms of Payment | M |
| Customer | Partner Function | Sold-To Party | M |
| Customer | Partner Function | Bill-To Party | M |
| Customer | Partner Function | Payer | M |
| Customer | Partner Function | Ship-To Party | M |
| Customer | Partner Function | Sales Rep. ( Except YS00) | M |

Master Data Synchronization: CVI Integration  

| **Define Number Assignment for Direction BP to Customer** |
| --- |
| **Grouping** | **Account group** | **Same Numbers** |
| Y001 | Y001 | X |
| Y002 | Y002 | X |

| **Districts** |
| --- |
| **Code** | **District** | **District** |
| SA001 | Central Region | المنطقة الوسطى |
| SA002 | Western Region | المنطقة الغربية |
| SA003 | Eastern Region | المنطقة الشرقية |
| SA004 | Southern Region | المنطقة الجنوبية |
| SA005 | Northern Region | المنطقة الشمالية |
| EX001 | Export | التصدير |

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
| --- |
| **Code** | **Description** |
| Y001 | Within 10 days 3% , within 14 days 2% |
| Y002 | Within 14 days 2%, Before End of the next month ;; Due net |
| Y003 | Within 15 days 3% , within 25 days 2% , within 45 days due net |
| Y004 | within 45 days Due net , Baseline date on End of the month |
| Y005 | within 90 days Due net |
| Y006 | Immediately Due net |
| Y007 | within 7 days Due net |
| Y008 | within 60 days Due net , Baseline date on End of the month |
| Y009 | within 45 days Due net , Baseline date on End of the month |
| Y010 | within 45 days Due net |
| Y011 | within 30 days Due net, Baseline date on End of the month |
| Y012 | within 10 days Due net |
| Y013 | within 14 days 3 % cash discount , within 30 days 2 % cash discount |
| Y014 | within 30 days Due net |
| Y015 | within 15 days 2 % cash discount, within 45 days Due net |
| Y016 | within 14 days 2 % cash discount, within 60 days Due net, Baseline date on End of the month |
| Y017 | within 14 days Due net |
| Y018 | within 10 days 4 % cash discount, within 14 days 2 % cash discount |
| Y019 | within 70 days Due net, Baseline date on End of the month |
| Y020 | within 40 days Due net |
| Y021 | within 50 days Due net |
| Y022 | within 15 days 2 % cash discount |
| Y023 | within 51 days Due net |
| Y024 | within 15 days 3 % cash discount, within 25 days 2 % cash discount, within 30 days Due net |
| Y025 | within 4 days 4 % cash discount |

## Creation Business Process

| Explore Phase – SD Business Process Document |
| --- |
|  | Page 6 of 7 |
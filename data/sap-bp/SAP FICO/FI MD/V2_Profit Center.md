# V2_Profit Center

| **Profit center**** ** |
| --- |

## Definition

A profit center is an organizational unit in accounting that reflects a management-oriented structure of the organization for the purpose of internal control.

You can analyze operating results for profit centers using either the cost-of-sales or the period accounting approach.

Profit center accounting at the profit center level is based on costs and revenues. These are assigned statistically by multiple parallel updating to all logistical activities and other allocations of relevance for a profit center.

## Requirements & Expectations

A profit center is a management oriented organizational unit used for internal controlling purposes. Dividing your company up into profit centers allows you to analyze areas of responsibility and to delegate responsibility to decentralized units, thus treating them as “companies within the company”.

Sample scenarios where Profit center is required are listed as follows:

- Scenario : Analyze profit and loss statement for the company   

Profit center should cover the below requirements:

 

| **Requirement ID ** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| 01 | To be assigned per company code | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Profit Centers | Qassim |

## Data Conversion Requirements

Data Migration for profit center will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Wi-Sys team

## Data Cleansing Requirements

New profit centers will be created to cover the company code profitable areas.

Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Profit centers will be administrated centrally by Master Data Management (MDM) team located in Qassim.

## Authorization/Security Considerations

Maintenance of operative profit center master data will be done as well as by financial. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Profit centers.

| **Key Control Levels** | **Org****.**** Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Profit center Master Data | Controlling Area | MDM |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

A profit center is an organizational unit in accounting that reflects a management-oriented structure of the organization for the purpose of internal control.

## Master Data list

| **Profit Center** |
| --- |
| **Code ** | **Description** |
| 1001 | Sales & Administration |
| 1002 | Shared Service |
| 1003 | Protein Plant |
| 1004 | Manure Plant |
| 1005 | Projects |
| 1006 | Supermarket |
| 1010 | Qassim Central |
| 1050 | Further processing |
| 1100 | Processing |
| 1120 | Feed Mill |
| 1201 | Live Operation- Broiler |
| 1210 | Live Operation- Hatchery |
| 1231 | Live Operation- Parent |
| 1250 | Layer |
| 1310 | Fleet Central Workshop |
| 1840 | Agricultural |
| 2000 | Watania Transportation |
| 2001 | Transport of F.P(Refrigerator Section |
| 2002 | Transport of bulk raw materials |
| 2003 | Transport of fuel (Tanker Section) |
| 2004 | Transport of General Goods |
| 2005 | Monthly Lessor |
| 3000 | Watania Grand Parent |
| 3010 | GP-Central |
| 3100 | GP-Hatchery |
| 3200 | GP-Parent |
| 3300 | مصانع الأعلاف - الجدود |
| 4100 | دواجن الوطنية - النشاط الزراعي |
| 4200 | نشاط الخضروات |
| 4300 | نشاط الفواكه |
| 4400 | نشاط الأسماك |
| 4500 | نشاط المناحل |
| 4600 | نشاط زراعة الأعلاف |
| 4700 | نشاط النخيل |

## Configuration Considerations

- Profit center Standard Hierarchy 

| **Profit center Standard Hierarchy ** |
| --- |
| **Code ** | **Description** |
| WAPO | Watania Poultry Standard Hierarchy |

- Segments		

| **Segments** |
| --- |
| **Code ** | **Description** |
| 1100 | Al-Watania Poultry |
| 1840 | Al-Watania Agriculture |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grandparent |
| 4000 | AWP Agriculture |
| 5000 | AWP Super Market |

								2 of 2

							1 of 2
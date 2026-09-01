# V2_Asset Master

| **Asset Master** |
| --- |

## Definition 

Using the asset master record, you can create, edit, and manage the master data needed for Asset Accounting. manage and evaluate master data, the data is structured according to its use and function in the system. ou can specify depreciation terms in the asset master record for each depreciation area in the chart of depreciation. To enable you to make these specifications, the master record contains an overview of the depreciation areas. In addition, there is a detailed display available for each depreciation area. If there are depreciation areas proposed from the asset class that are not needed for a specific asset, you can deactivate these depreciation areas at the asset level.

## Requirements & Expectations

The varied demands on master data management for Asset Accounting are met FI-AA component by:

- Asset master records that are structured according to functional and goal-oriented requirements 

- Master data maintenance that is organized according to this structure, and allows for individual adaptation 

Sample scenarios where Asset Master is required are listed as follows:

- Scenario : Asset Acquisitions

- Scenario : Asset Transfers

- Scenario : Asset Retirements

- Scenario : Asset Value corrections

- Scenario : Assets Under Construction

- Scenario : Asset Depreciations

Asset Master should cover the below requirements:

 

| **Requirement ID** | **Description** | **Standard / Gap** | **Priority** |
| --- | --- | --- | --- |
| 01 | Each asset assigned to a cost center | S | H |
| 02 | Asset to be counted in a physical inventory list | S | H |
| 03 | Validation on Evaluation groups 1. | S | H |
| 04 | Serial Number field equal normal serials or chasse numbers for Vehicles | S | H |
| 05 | Type name field is the asset old number | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Asset records | Qassim |

## Data Conversion Requirements

Data Migration for Asset Master will be done by extraction from existing Systems to an interim data base for consolidation. For this SAP Data Services can be used. 

Planning and Execution is in the Responsibility of Watania Poultry team with coordination with Wi-Sys team

## Data Cleansing Requirements

Asset masters will be extracted from legacy system and cleaned using S4/HANA templates and renumbered and classified according to the new asset classes.  

- Fields length (especially Codes, names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Asset Master Data will be administrated centrally by Asset Accountant located in Qassim.

## Authorization/Security Considerations

Maintenance of operative Asset master data will be done as well as by financial. For this, separate transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team hold the governance and overall responsibility for Asset Master.

| **Key Control Levels** | **Org. Level** | **Ownership** | **comment** |
| --- | --- | --- | --- |
| Asset Master Data | Asset Class / Company Code | AA. Accountant |  |

## Data Archiving Requirements

None

## Organization Impact Considerations

Master record contains concrete information about the fixed asset. There are the following field groups:

- General information (description, quantity, and so on)

- Account assignment information

- Posting information (for example, activation date)

- Time-dependent assignments (such as, cost center)

- Investment support measures

- Information on the origin of the asset

- Physical inventory data

- User fields/evaluation groups

## Configuration Considerations

- Asset Classes

| **Asset Classes** |
| --- |
| **Code** | **Description** | **Number Range** | **External** |
|  |  | **From** | **To** |  |
| Y11000 | Land | 11000000 | 11999999 |  |
| Y12000 | Wells | 12000000 | 12999999 |  |
| Y13000 | Buildings & Improvements | 13000000 | 13999999 |  |
| Y14000 | Plant & Machinery | 14000000 | 14999999 |  |
| Y15000 | Transportation & Vehicles | 15000000 | 15999999 |  |
| Y16000 | Tools | 16000000 | 16999999 |  |
| Y17000 | Furniture & Furnishings | 17000000 | 17999999 |  |
| Y18000 | Fixtures & Fittings | 18000000 | 18999999 |  |
| Y19000 | Computers & Hardware | 19000000 | 19999999 |  |
| Y20000 | Spare Parts | 20000000 | 20999999 |  |
| Y21000 | Trees | 21000000 | 21999999 |  |
| Y22000 | Intangibles Assets | 22000000 | 22999999 |  |
| Y40000 | Asset Under Construction | 40000000 | 40999999 |  |
| Y91000 | Parent Laying | 91000000 | 91999999 |  |
| Y92000 | Layer Laying | ZL000 | ZL999 | X |
| Y93000 | GP Parent Laying Bio Asset | ZG000 | ZG999 | X |

- Asset User fields/evaluation groups

| **Asset ****User fields/evaluation groups** |
| --- |
| **Eval.No**** ** | **Evaluation groups 1 – 4 Code** | **Description** |
| EV1 | 1101 | اراضى فضاء |
| EV1 | 1102 | اراضى عقارية |
| EV1 | 1103 | اراضى مزروعة |
| EV1 | 1301 | مبانى وانشاءات خرسانية |
| EV1 | 1302 | قواعد وارضيات وخرسانية |
| EV1 | 1303 | طرق |
| EV1 | 1304 | ابار المياه |
| EV1 | 1305 | مبانى معدنية |
| EV1 | 1306 | هياكل معدنية |
| EV1 | 1307 | خزانات |
| EV1 | 1308 | مبانى خشبية سابقة التجهيز |
| EV1 | 1309 | البيوت المحمية للزراعة |
| EV1 | 1310 | تمديدات |
| EV1 | 1311 | اسوار |
| EV1 | 1401 | الات ومعدات حظائر |
| EV1 | 1402 | الات ومعدات مصانع |
| EV1 | 1403 | الات ومعدات ورش |
| EV1 | 1404 | الات ومعدات قوى |
| EV1 | 1405 | الات ومعدات زراعية |
| EV1 | 1406 | الات ومعدات ثقيلة |
| EV1 | 1407 | مقطورات زراعية |
| EV1 | 1408 | سيارات اطفاء |
| EV1 | 1501 | سطحات |
| EV1 | 1502 | هوابر |
| EV1 | 1503 | مقطورات لنقل المواد البترولية والمياه |
| EV1 | 1504 | برادات |
| EV1 | 1505 | ثيرموكنج |
| EV1 | 1506 | راس تريلا |
| EV1 | 1507 | قلاب |
| EV1 | 1508 | رؤوس سيارات للبرادات الصغيرة |
| EV1 | 1509 | سيارات النقل (شاسيه طويل) |
| EV1 | 1510 | صالون |
| EV1 | 1511 | اتوبيس |
| EV1 | 1512 | بيكاب |
| EV1 | 1513 | جيب |
| EV1 | 1514 | دراجات |
| EV1 | 1515 | سيارات اسعاف |
| EV1 | 1601 | عدد وادوات يدوية |
| EV1 | 1602 | عدد وادوات كهربائية |
| EV1 | 1603 | عدد وادوات بضغط الهواء |
| EV1 | 1604 | عدد وادوات طبية |
| EV1 | 1605 | عدد وادوات زراعية |
| EV1 | 1606 | عدد وادوات اجهزة قياس |
| EV1 | 1607 | عدد وادوات الامن والسلامة |
| EV1 | 1608 | ادوات رياضية |
| EV1 | 1701 | اثاث مكتبى |
| EV1 | 1702 | اثاث مكتبى معمر |
| EV1 | 1703 | اثاث منزلى |
| EV1 | 1704 | مفروشات |
| EV1 | 1705 | اجهزة اتصالات |
| EV1 | 1706 | اجهزة كهربائية منزلية |
| EV1 | 1707 | اجهزة كهربائية مكتبية |
| EV1 | 1708 | اجهزة كهربائية 5 سنوات |
| EV1 | 1709 | اجهزة كهربائية 4 سنوات |
| EV1 | 1801 | ارفف وقواطع |
| EV1 | 1802 | اسقف |
| EV1 | 1803 | لوحات اعلانية |
| EV1 | 1804 | لوحات ارشادية |
| EV1 | 1805 | ديكورات |
| EV1 | 1806 | توصيلات هاتف |
| EV1 | 1807 | ارضيات |
| EV1 | 1808 | عدادت كهرباء |
| EV1 | 1901 | وحدات تشغيل |
| EV1 | 1902 | شاشات |
| EV1 | 1903 | طابعات |
| EV1 | 1904 | برامج |
| EV1 | 1905 | موزع قنوات |
| EV1 | 1906 | مودم |
| EV1 | 1907 | بارت هوب |
| EV1 | 2001 | مصروفات التاسيس |
| EV1 | 2002 | الاشجار |

- Validation Rule

| **Asset Master Validation Rule** |
| --- |
| Setp1 | Prerequisite | Asset Class = 11000 |
|  | Check | fields/evaluation group1 (1101:1199) |
|  | Error Message | Kindly choose correct valuation group from 1101 to 1199 |
| Setp2 | Prerequisite | Asset Class = 12000 |
|  | Check | fields/evaluation group1 ( 1201 : 1299 ) |
|  | Message | Kindly choose correct valuation group from 1210 to 1299 |
| Setp3 | Prerequisite | Asset Class = 13000 |
|  | Check | fields/evaluation group1 ( 1301 : 1399 ) |
|  | Message | Kindly choose correct valuation group from 1301 to 1399 |
| Setp4 | Prerequisite | Asset Class = 14000 |
|  | Check | fields/evaluation group1 ( 1401 : 1499 ) |
|  | Message | Kindly choose correct valuation group from 1401 to 1499 |
| Setp5 | Prerequisite | Asset Class = 15000 |
|  | Check | fields/evaluation group1 ( 1501 : 1599 ) |
|  | Message | Kindly choose correct valuation group from 1501 to 1599 |
| Setp6 | Prerequisite | Asset Class = 16000 |
|  | Check | fields/evaluation group1 ( 1601 : 1699 ) |
|  | Message | Kindly choose correct valuation group from 1601 to 1699 |
| Setp7 | Prerequisite | Asset Class = 17000 |
|  | Check | fields/evaluation group1 ( 1701 : 1799 ) |
|  | Message | Kindly choose correct valuation group from 1701 to 1799 |
| Setp8 | Prerequisite | Asset Class = 18000 |
|  | Check | f+C73ields/evaluation group1 ( 1801 : 1899 ) |
|  | Message | Kindly choose correct valuation group from 8010 to 8999 |
| Setp9 | Prerequisite | Asset Class = 19000 |
|  | Check | fields/evaluation group1 ( 1901 : 1999 ) |
|  | Message | Kindly choose correct valuation group from 1901 to 1999 |
| Setp10 | Prerequisite | Asset Class = 20000 |
|  | Check | fields/evaluation group1 ( 2001 : 2099 ) |
|  | Message | Kindly choose correct valuation group from 2001 to 2099 |

								5 of 5

							1 of 5
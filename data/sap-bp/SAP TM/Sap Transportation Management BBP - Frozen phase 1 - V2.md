# Sap Transportation Management BBP - Frozen phase 1 - V2

AL-WATANIA POULTRY
SAP TRANSPORTATION MANAGEMENT BUSINESS BLUEPRINT

SAP S4/HANA
TABLE OF CONTENTS
TABLE OF CONTENTS ............................................................................................1
PROJECT INFORMATION ........................................................................................2
DOCUMENT CONTROL............................................................................................2
APPROVAL ................................................................................................................2
SD-ORG-001: SALES ORGANIZATION .................................................................3
SD-ORG-002: DISTRIBUTION CHANNEL ..............................................................4
SD-ORG-003: DIVISION............................................................................................4
MM-ORG-001: PURCHASING ORGANIZATION ....................................................5
MM-ORG-002: PURCHASING GROUP ...................................................................6
TM-ORG-002: FORWARDING HOUSE ...................................................................6
TM-MD-001: MASTER DATA ELEMENTS ..............................................................8
TM-PRC-001: LOGISTIC SERVICE PROVIDER PROCESS ...............................11
TM-PRC-002: GROUP LOGISTIC SCENARIO .....................................................15
TM-PRC-003: SERVICE AND RENTAL PROCESS SCENARIO ........................20
TM-PRC-004: DRIVER INCENTIVE SOLUTION ...................................................22




1|Page
PROJECT INFORMATION
Project Identification

Project Name                                           Project Type
Sap Transportation Management                          S4/HANA Implementation
Customer Name                                          SAP Service Partner
Al Watania Poultry                                     Wi-Sys
Project Manager (Partner)                              Project Sponsor
Magdy Abul-Hassan                                      Sultan AL-Sultan

DOCUMENT CONTROL
Version              Date             Prepared/Revised by
V0.1                 13.12.2023       Ahmed Rashed
V0.2                 27.04.2026       Ahmed Rashed


APPROVAL
No. Name                          Organization/Title                      Signature/Date

01   Ahmed Rashed                 Sap TM Consultant

02   Mosab Ehab                   FICO Consultant

03   Magdy Abul-Hassan            WIsys Project Manager

04   Abouelfadl Selim             AWP Project Manager

04   Sultan Alsutan               Project Sponsor

08   Fahad Abdul Aziz Al-Majid    Business Owner

10   Mohamed Shareef              Business Owner

12   Ammar Taha Al-Baz            Key User

13   Saleh Abdullah Alkhudhayri   Key User




2|Page
 Abbreviation            Meaning
 TM                      Transportation management
 AWT                     AL-Watania transportation
 AWP                     AL-Watania Poultry
 FO                      Freight order
 FU                      Freight unit
 OTR                     Order transportation request
 DTR                     Delivery transportation request




 SD-ORG-001: SALES ORGANIZATION
Definition
The Sales organization is an organizational unit within SAP. The sales organization represents the
selling unit in the legal sense. It is responsible for example for product liability and other rights of
recourse; customer deliveries; business partner contacts. Since a sales organization cannot share
master data with other sales organizations, you must create master data separately for each sales
organization.



 Sales Organization
        Code                                               Description
 2000               Al-Watania Transportation



Assign Maintenance Sales organization to Company Code

                 Sales organization                                       Company code
     Code                  Description                       Code                Description
     2000       Al-Watania Transportation                    2000        Al-Watania Transportation




3|Page
SD-ORG-002: DISTRIBUTION CHANNEL
The Distribution Channel determines how materials or services are sold and how they are distributed
to customers, for example, import and export.
Each business transaction in sales is linked with a distribution channel that is usually derived from data
in the sales document header.


 Distribution Channel
 Code              Description
 40                Transportation service
 50                Rent Service
 60                General Services



SD-ORG-003: DIVISION
The Division is an organizational unit which can be used to group and organize Products and services.


 Division
 Code              Description
 98                Transportation service



Sales organization structure (Sales Area)


A sales area is a specific combination of the organizational units:
    • Sales organization
    • Distribution channel
    • Division



There will be the following combination of sales org, distribution channel and division as below:

 Sales organization                   Distribution Channel                 Division
 2000                                 40                                   98
 2000                                 50                                   98
 2000                                 60                                   98




4|Page
Alwatania Transportation ( Sales organization )
   Company Code


                                                       2000
                                                    Al-Watania
                                                  Transportation
organization




                                                       2000
   Sales




                                                    Al-Watania
                                                  Transportation
Distribution
  channel




                           40                          50                  60
                  Transportation service           Rent Service       General service
   Division




                                                      98
                                             Transportation service




MM-ORG-001: PURCHASING ORGANIZATION
Division
Code                  Description
2000                  Transportation Purchasing organization




5|Page
MM-ORG-002: PURCHASING GROUP
 Purchasing Group
 Code             Description
 T01              Transportation Purchasing Group




TM-ORG-002: FORWARDING HOUSE
A forwarding house in TM is represented as an organizational unit maintained within the organizational
management application.
In TM you can use a forwarding house as a sales organization and as a purchasing organization.


 Forwarding House
 Code             Description
 FWH              Transportation Forwarding house




6|Page
Alwatania Transportation ( TM org structure )
   Company



                                            2000
                                   Alwatania transportation
                                          company
organization
 Purchase




                                            2000
                                   Alwatania transportation
                                   purchasing organization
Purchasing




                                             T01
  Group




                                   Alwatania transportation
                                      purchasing Group
Forwarding




                                            FWH
  House




                                   Alwatania transportation
                                      Forwarding House




7|Page
TM-MD-001: MASTER DATA ELEMENTS
SAP Master Data
Master data comprises data records that are stored in the database for a long period of time. These
data records are stored centrally and are used and processed on a cross-application basis. In this way,
the multiple storage (redundancy) of data are avoided.
Data that remains unchanged over a long period of time is called master data.
For example, the customer master record contains the customer's name, address and bank details.
Similarly, the material master record contains the material description, unit of measure, gross weight,
net weight etc and the pricing master contains information on customer and material related prices.

Master data in Transportation management will consist of:
  • Customer master data (will be replicated from ERP system)
  • Material master data (will be replicated from ERP system)
  • Locations
  • Rate tables
  • Transportation lanes
  • Vehicle master data
  • Carrier master data


1- Customer Master

The customer master groups data into categories: general data, sales area data, and company code
data. It is valid for all organizational units within a client.
The data in the Customer master record is subdivided into the following categories:

   o General data:
     The general data is data that is common to all the departments of the company.
     The general data will be used by both the finance department and by the sales department.
     It includes customer name, address, telephone number…etc.
     The general data is relevant for sales and distribution and for accounting. It is stored centrally
     (client-specific), to avoid data redundancy.

   o Company code data:
     Company code data only applies to one company code.
     This data is only relevant to Financial Accounting, and includes the account management data,
     Insurance data and Payment related data.
     You can only invoice a business transaction in the system if the Financial Accounting data on the
     customer has been maintained.

   o Sales Area Data:
     The system allows maintenance of different sets of data on customers. The term "customer" is
     used to define all customers with whom the company has sales business contact.
     Data about the products as well as about the business partners is the basis for sales processing.
     Sales processing with the system require that the master data has been stored in the system such
     as :( Payment terms, Inco terms, Tax eligibility... ETC ).

8|Page
       We can only process sales and distribution transactions, for example, a sales order, if the sales
       data for a customer has been maintained.



2- Material master

The material master contains information on all the materials that a company procures or produces,
stores, and sells. It is the company's central source for retrieving material-specific data. This
information is stored in individual material master records.

3- Locations

A logical or physical place in which products or resources are managed on a quantity basis.

We use this business object as the basis for transportation processes. In transportation processes, you
name a source location, a destination location, and any transshipment locations necessary to complete
the transportation process. For this purpose, you define locations.

4- Transportation lanes

A relationship between two locations, two transportation zones, or a combination of locations and
zones that expresses the direct reachability of the locations or of all locations within the zones for a
specific means of transport.

5- Vehicle master data

Vehicle master data contains all information related to the vehicles the help transportation planner to
plan the trips in efficient way.

6- Carrier master data

Carriers are the transportation service providers that support Al-Watania transportation company to
transport their product if needed, their master data is very important to be able to involve them in the
transportation process and invoicing process.

7- Rate tables

A rate table is a grouping of prices for transportation services. The prices (or rates) are listed by validity
period in the rate table. You can maintain up to 14 dimensions in a rate table.

Calculation sheet in Al-Watania Transportation:

   •   Z00001 – internal transportation calculation sheet (will use it with sister companies)
   •   Z00002 – External transportation calculation sheet (will use it with external customers)




9|Page
  Scales:

    Scale for Rate table                Criteria
    001                                 Source location – Destination location
    002                                 Source location – Destination location – Quantities
    003                                 Source location – Destination location – Gross Weight


  Charge Calculation Sheet:

                                                                       Manual /         Calculation
Steps   Charge Type   Description                   Calculation type   Automatic        Base        Sign
   10   Z001                             ‫ سعر النقل‬Value               Automatic                    Positive
   20                                        ‫اجمال‬
   30   Z002                                 ‫ تعقيم‬Value               Manual                       Positive
   40   Z003                        ‫ تخليص وتعقيب‬Value                 Manual                       Positive
                           ‫ ذهاب تحميل‬/ ‫اجور انتظار‬
  50 Z004                                   ‫ وتفري غ‬Value              Manual                       Positive
                           ‫ عوده تحميل‬/ ‫اجور انتظار‬
  60    Z005                                ‫ وتفري غ‬Value              Manual                       Positive
  70    Z006                             ‫تغيي مسار‬
                                                ‫ر‬   Value              Manual                       Positive
  80    Z009                            Back load Value                Manual                       Positive
  90                           ‫اجمال بعد االضافات‬
 100    Z007                            ‫ خصم نسبه‬Percentage            Manual           90          Negative
 110    Z008                            ‫خصم قيمه‬                       Manual           90          Negative
 120                             ‫اجمال بعد الخصم‬
 130    MWST                                ‫الضيبه‬‫ر‬                    Automatic        110         Positive
 140                                 ‫اجمال بعد ر‬
                                 ‫الضيبه‬




  10 | P a g e
TM-PRC-001: LOGISTIC SERVICE PROVIDER
PROCESS
Process Description
Logistic service provider process mainly focuses on the process of selling transportation services to the
external customer so you can receive the requirements from external customers and transport their
products to their premises.

LSP scenario generally starts with a Forwarding order. Freight units can be created automatically from
Forwarding order based on the transportation requirement. LSP also can subcontract the
transportation to another company and can create Freight order.

LSP scenario can have two separate charge calculations as below:
   • Charge calculation on Forwarding order: Freight charges are calculated based on the
       Forwarding agreement (FWA) of LSP with their customer (a Shipper company like Ericsson,
       Nestle).
   • Charge calculation on Freight order or freight booking: Freight charges are calculated on the
       freight order (or freight booking) based on the Freight agreement (FA) of the LSP with their
       subcontractors (or carriers).


In Al-Watania transportation we have two scenarios:

   1. The customer will provide all information required for the trip like quantities, material weight
      and destinations, in this case we will user logistic service provider scenario.
   2. The customer will not provide any information he just needs a vehicle for one trip, in that case
      we will use rental process per trip.




11 | P a g e
Business Process diagram




12 | P a g e
Process Steps Description

                                                                                          Business Roles
ID      Process Step Description        FIORI App. / T. Code


01      Create Forwarding order         Forwarding Orders - Worklist                      Transportation planner
        FU created automatically
02      based on the quantities in      Freight Units - Worklist
        Forwarding Orders
        Create Freight order
03      Usig transportaion cockpit or   Freight Orders - Worklist                         Transportation planner
        manully bu assign FU to FO
04      Print freight order             Freight Orders - Worklist                         Transportation planner

        Insert driver and vehicle
05                                      Freight Orders - Worklist                         Transportation planner
        number in freight order
        Create forwarding
06      settelment document with        Forwarding Settlements - Worklist                 Billing clerk
        refrence to forwarding order
        Billling document created
        automatically in ERP based
07                                      Forwarding Settlements - Worklist                 Billing clerk
        on forwarding settelment
        document
08      Print billing document          Create billing document                           Billing clerk




 Integration Points
                                               System/
 ID     Process Step                           Module               Integration Details
                                               Integrated with
                                                                    Customer billing will be created based on
 01 Create billing document                           SD
                                                                    settlement document




     13 | P a g e
 System Configuration Considerations
 Coding based on transportation Document Types:


Document Types
          Description                 Number Range
Type                                                                                     Item Interval
                                          From                         To
ZFWL        Forwarding order            310000000                   319999999                    10
ZFUL        Freight unit                320000000                   329999999                    10
ZSTL        Settlement document         330000000                   339999999                    10
ZBIL        Billing document            340000000                   349999999                    10


 Technical/Development Related Items
                                                                                                Form/Query
                             Requirement                                          Object T-
 #     Enhancement                       Object Description                                     Name-user
                             / Req.ID                                             Name Code
                                                                                                group
001 Freight order form       001               Design of freight order form
       Billing document                        Design of billing document
002                          002
       form                                    form
                                               Collect all costs every month
                                               (drivers salary, fuel
       Distribute the cost                     consuming, maintenance cost)
003                          003
       on billing Document                     and distribute it based on
                                               (Trip, driver number, vehicle
                                               number and the department)
                                               Add new field in FO to carry the
                                               actual number of consumed fuel
                                               litter
004 New custom field         004
                                               and also the expected number of
                                               litter he should get from petrol
                                               station


 Authorization
Authorizations
ID                                 Authorization Role                         Comments
ZTM_PLANNER                        Transportation planner
ZTM_BILLING_CLERK                  Billing clerk
ZTM_MASTERDATA_ADMIN               Master data admin




 14 | P a g e
 TM-PRC-002: GROUP LOGISTIC SCENARIO
 Process Description
 You can use a group logistics company process to consolidate all the transportation requirements from
 all the companies in your enterprise into one central logistics company. Your core business activity can
 be something other than providing transportation services. For example, you have a group of
 companies that manufacture products. You need to transport the products to your customers. You can
 have one of the following business scenarios:

 One company in your group of companies manufactures products and plans and organizes
 transportation services for your other internal manufacturing companies.

 One company in your group of companies does not manufacture products but instead is a dedicated
 group logistics company. All your manufacturing companies use the group logistics company for
 transportation services.

 In Al-Wataniya transportation they receive the transportation requirements from AWP poultry all
 these requirements will be sent from ERP system to TM system
  So, Al-Wataniya transportation transport all this requirement to AWP customers and locations as per
 needed.


 Business Requirements

Business requirements
Req. ID        Requirement Description                                               Requirement Status
               Process starts when Al-Wataniya poultry needs to transfer a
               product from location to another location as per the need.
TM_001         This can be happened by sending a schedule every day to AWT or
               for some times they send an email to AWT requesting a
               transportation service
TM_002          AWT starts preparing the vehicles for the trips
                For some times they send the vehicles for washing first before
TM_003
                loading the product
                Then the vehicles go to the petrol station to get the fuel before
                starting the trip
TM_004
                For every destination he gets amount of fuel based on that
                destination
                After filling the tank with fuel, they write the number of fuels
TM_005
                filled in the vehicle in the waybill
TM_006          Then the vehicle go to the warehouse to collect the materials
TM_007          Then travel to the requires destination to deliver the goods




 15 | P a g e
                After they came back to the main depot location they deliver the
TM_008
                waybill to transportation planner



 Business Process diagram




 16 | P a g e
Process Steps Description

                                                                                     Business Roles
ID      Process Step Description              FIORI App. / T. Code


                                              Create sales order / create purchase   Sales representative /
01      Create sales order / PO in ERP
                                              order                                  purchasing
        Create delivery document (inbound
02                                            Create delivery document               Shipping specialist
        / outbound) in ERP
        OTR / DTR created automatically
03      with reference to delivery                                                   Automatically created
        document in TM
        FU created automatically based on
04                                            Freight Units - Worklist               Automatically created
        the quantities in OTR / DTR
        Create Freight order
05      Usig transportaion cockpit or         Freight Orders - Worklist              Transportation planner
        manully bu assign FU to FO
        Assign driver and vehicle number in
06                                            Freight Orders - Worklist              Transportation planner
        freight order

07      Print freight order                   Freight Orders - Worklist              Transportation planner

        Calculate tranpsortaion Fees (
08                                            Freight Orders - Worklist              Billing clerk
        internal )
        Create internal settelment
09      document with refrence to OTR /       Forwarding Settlements - Worklist      Billing clerk
        DTR
        Billling document created
10      automatically in ERP based on         Forwarding Settlements - Worklist      Billing clerk
        forwarding settelment document
11      Print billing document                Create billing document                Billing clerk




     17 | P a g e
Integration Points
                                           System/
ID     Process Step                        Module            Integration Details
                                           Integrated with
                                                             Creation of OTR / DTR integrated and
01 Creation of OTR / DTR                    SD / MM / TM
                                                             replicated from ERP system to TM system
                                                             Customer billing will be created based on
02 Create billing document                   SD / TM / FI
                                                             internal settlement document


 System Configuration Considerations
 Coding based on transportation Document Types:


Document Types
          Description              Number Range
Type                                                                                Item Interval
                                        From                      To
DTR1         DTR document            3200000000               3299999999
ZAFO         Freight order           6100000000               6199999999
ZAFU         Freight unit            4100000000               4199999999
             Internal Settlement
ZFIS                                  7100000000              7199999999
             document
             Freight settlement
ZFIS                                  8100000000              8199999999
             document
YATM         Billing document          940000000               949999999



 Technical/Development Related Items
                                                                                           Form/Query
                             Requirement                                   Object T-
 #     Enhancement                       Object Description                                Name-user
                             / Req.ID                                      Name Code
                                                                                           gorup
001 Freight order form       001           Design of freight order form
       Billing document                    Design of billing document
002                          002
       form                                form
                                           Collect all costs every month
                                           (drivers salary, fuel
       Distribute the cost                 consuming, maintenance cost)
003                          003
       on billing Document                 and distribute it based on
                                           (Trip, driver number, vehicle
                                           number and the department)
                                           Add new custom filed to carry
       Add new custom
004                          004           the total number or Fuel
       field
                                           collected from petrol station

 18 | P a g e
    Add new custom
                                  Add new custom field to add
005 field to add the  005
                                  the department
    department
    Pricing
                                  Add custom logic to get the
006 enhancement based 006
                                  price based on events in FO
    on Event in FO


 Authorization
Authorizations
ID                               Authorization Role             Comments
ZPOWL_INTERNAL                   Role for internal settlement
ZTM_ADMIN                        TM - Cancel & Delete FO
ZTM_CALCULATION_SHEET            TM - Calculation sheet
                                 TM - delivery based TR
ZTM_DTR
                                 requirement
ZTM_FORWARDING_ORDER             TM - Forwarding orders
ZTM_FORWARDING_SETTLEMENTS       TM - Forwarding Settlements
ZTM_FREIGHT_AGREEMENT            TM -Freight agreements
ZTM_FREIGHT_ORDER                TM - Freight orders
                                 TM - Freight settlements
ZTM_FREIGHT_SETTLEMENTS
                                 document
ZTM_FREIGHT_UNIT                 TM - Freight unit
                                 TM - Forwarding Orders for
ZTM_FWO_FOR_INTERNAL_SETTELMNT
                                 Internal Settlement
ZTM_INTERNAL_AGREEMENT           TM - Internal agreements
ZTM_MD_BP_CARRIER                TM - BP (Carrier)
ZTM_MD_BP_CUSTOMER               TM - BP (Customer)
ZTM_MD_BP_DRIVER                 TM - Driver
ZTM_MD_LOCATION                  TM - location
ZTM_MD_RESOURCES                 TM - Resources
ZTM_MD_TRANSPORTATION_LANE       TM - Transportation Lane
ZTM_MD_TRANSPORTATION_ZONE       TM - Transportation zone
ZTM_RATE_TABLE                   TM - Rate table
ZTM_RATE_TABLE_DEFINITION        TM - Rate table definition
ZTM_SCALE                        TM - Scale
ZTM_TRANSPORTAION_COCKPIT        TM - Transportaion cockpit



 19 | P a g e
TM-PRC-003: SERVICE AND RENTAL PROCESS
SCENARIO

Process Description
Service process will happen when Al-watania transportation needs to bill their customers (internal or
external) for specific services.

This process will handle the below cases:
    1. washing service for Al-Watania poultry
    2. Rent a car for internal and external customers (Daily, weekly, Monthly and per Trip)




Business Process diagram




20 | P a g e
Integration Points
                                                System/
ID     Process Step                             Module              Integration Details
                                                Integrated with
                                                                    Customer billing will be created based on
01 Create billing document                           SD / FI
                                                                    Service order



 System Configuration Considerations
 Coding based on transportation Document Types:


Document Types
          Description                        Number Range
Type                                                                                       Item Interval
                                                From                     To
ZSRV           Service order document         420000000               429999999                       10
ZSRV           Service billing document       430000000               439999999                       10



 Technical/Development Related Items
                                                                                                      Form/Query
                               Requirement                                        Object T-
 #        Enhancement                      Object Description                                         Name-user
                               / Req.ID                                           Name Code
                                                                                                      group
          Billing document                      Design of billing document
002                            002
          form                                  form




     Process Steps Description

     ID           Process Step Description     FIORI App. / T. Code                   Business Roles

     01           Create Service order         Create sales order                     Sales representative
     02           Create billing document      Create billing document app            Billing clerk




 21 | P a g e
Authorization
 Authorizations
 ID                                          Authorization Role               Comments
 ZSD_SERVICE_ORDER                           Service order creation
 ZSD_SERVICEBILLING_CLERK                    Service Billing clerk




TM-PRC-004: DRIVER INCENTIVE SOLUTION
We got the initial requirement for business users, for first phase we will prepare a report to help the
user to calculate the incentive.

Process Description
in Al-Watania transportation they give an incentive for the driver as below
       1. Driver incentive
       2. Fuel incentive

This process steps and requirements in the below attachments



 Initial design for     Fuel incentive and      ‫تجميع الحوافز‬-
driver incentive.xlsx    Thermoking.xlsx           ‫نظام‬.xlsx




We will prepare the below report
Report columns

 ‫رقم الرحله‬                    FO document number
 ‫القطاع‬                        Department
 ‫نوع الرحله‬                    Trip type
 ‫رقم السائق‬                    Driver number
 ‫اسم السائق‬                    Driver name
 ‫مرحله‬                         Stage
 ‫من‬                            Source location
 ‫ال‬                            Destination location
 ‫بلد الوصول‬                    Destination Country
 ‫وقت االنتظار للتحميل‬
                               ‫وقت االنتظار للتحميل والتفري غ‬
 ‫والتفري غ‬
 ‫تغيي السائق‬
           ‫تم ر‬                ‫تغيي السائق‬
                                        ‫تم ر‬
 ‫المسافه‬                       Distance
                               Utilization
 ‫محمل ام فارغ‬                  ‫محمل ام فارغ‬




22 | P a g e
# PM Maintenance Permit Business Blueprint Documentation V0.3

AL-WATANIA POULTRY
BUSINESS BLUEPRINT DOCUMENTATION FOR MAINTENANCE PERMIT
SAP S4/HANA 2022
Confidential
TABLE OF CONTENTS
TABLE OF CONTENTS ................................................................................................................................................... 1
PROJECT INFORMATION .............................................................................................................................................. 2
DOCUMENT CONTROL .................................................................................................................................................. 2
APPROVAL ....................................................................................................................................................................... 2

Master Data
PM-MD-010: CHARACTERISTICS ................................................................................................................................. 3
PM-MD-020: CLASSES ................................................................................................................................................... 3
PM-MD-030: MAINTENANCE PERMIT .......................................................................................................................... 4
PM-MD-040: MAINTENANCE ACTIVITY TYPE ............................................................................................................ 5

Business Process
PM-EAM-01: MAINTENANCE PERMIT .......................................................................................................................... 5




  Explore Phase – PM Business Process Document
  Confidential                                                                                                                                                Page 1 of 7
PROJECT INFORMATION
Project Identification

Project Name                                      Project Type
SAP Maintenance Permit Implementation for AWP     S4/HANA Implementation
Customer Name                                     SAP Service Partner
Al Watania Poultry                                Wi-Sys
Project Manager (Partner)                         Project Sponsor
Magdy Abul-Hassan                                 Abu El Fadel Selim

DOCUMENT CONTROL
Version        Date           Additions/Modifications            Prepared/Revised by
V0.0           07.10.2025     Initial Version                    Musaad Almansour
V0.1           13.10.2025     Second Version                     Musaad Almansour
V0.2           13.10.2025     Third Version                      Musaad Almansour
V0.3           15.10.2025     Fourth Version                     Musaad Almansour

APPROVAL
No. Name                              Organization/Title                  Signature/Date

01

02

03

04

05

06

07

08

09

10

11




Explore Phase – PM Business Process Document
Confidential                                                                           Page 2 of 7
 PM-MD-010: CHARACTERISTICS
Definition
Characteristics are sorting keys, such as company code, product, customer group, fiscal year, period, or
region.
They specify classification options for the dataset and are therefore reference objects for the key figures.
The characteristics specify the granularity (the degree of detail) at which the key figures are stored in
the InfoProvider. In general, an InfoProvider contains only a sub-quantity of the characteristic values
from the master data table. The attributes include the permitted values for a characteristic.
In this project the characteristics used are as follows:
   1. Order Type
      This characteristic is used to identify the order type that permit should trigger for.
   2. Maintenance Activity Type
      This characteristic is used to give the choice for the user wither if this order needs a permit to be
      trigger for, this option is on the user responsibility.

Master Data Ownership
  Master Data Management (MDM) team will administrate Characteristics Master Records centrally.


Authorization/Security Considerations
     Maintenance of operative EAM Master Data will be centrally. For this, transactions (roles) are
                available, which is part of authorization role definition accordingly.



PM-MD-020: CLASSES
Definition

 The class type is a central concept in the classification system. The class type determines how classes
     are processed, and how objects can be classified and retrieved in these classes. In Customizing
  for Classification , you define the settings for a class type. You define class types for a specific object
type, such as materials. You can then use classes of this class type to classify objects of this object type.

 The usage of Classes in PM Permits is to gather all the Characteristics needed in one class then assign
                       this class to needed order types for triggering the Permit.




 Explore Phase – PM Business Process Document
 Confidential                                                                                    Page 3 of 7
PM-MD-030: MAINTENANCE PERMIT
Definition

For some order types, certain regulations or conditions must be considered when performing
maintenance work. These regulations are managed in the system as permits.

Use

When a maintenance task has to be performed for a technical object and you want a special permit for
this to be issued in the maintenance order, you must assign this permit to the maintenance order type.


Master Data Ownership

  Master Data Management (MDM) team will administrate Characteristics Master Records centrally.


Authorization/Security Considerations

      Maintenance of operative EAM Master Data will be centrally. For this, transactions (roles) are
                 available, which is part of authorization role definition accordingly.


Configuration Considerations
Permit Group

Indicator that enables you to identify that this permit is a maintenance permit.

 Permit Group
 Group Code             Description
          PM            PERMIT


Permit Categories

These categories are to specify the usage of these permits.

 Permit Categories
 Category Code          Description
           A            Work approval
           S            Safety Permits


 Explore Phase – PM Business Process Document
 Confidential                                                                                Page 4 of 7
PM-MD-040: MAINTENANCE ACTIVITY TYPE
Definition

The maintenance activity type categorizes the specific labor or service required for a maintenance task,
helping to define task details, issue permits, and group maintenance orders for reporting and analysis.


    PM Activity Type
      Activity Type Code      Description
              O01             Working at heights
              O02             Confined spaces
              O03             Boiler maintenance works
              O04             Electrical maint.above380volts
              O05             Work in Explosive Atmospheres
              O06             Treatment plant maint.works
              O07             Cutting and welding
              O08             Excavation works
              O09             Comissioning/Energization(NE)
              O10             Maintenance of heavy Equipment




PM-EAM-01: MAINTENANCE PERMIT
Process Description

   •   In SAP Plant Maintenance (PM), permits are used to control and authorize work that requires
       special conditions, such as safety permits for hot work or confined space entry. You can create
       permits, manage their categories and assignments, and link them to maintenance orders.

   •   To trigger the Maintenance Permit you need to make sure about the following:
       1- The permit is assigned to maintenance order.
       2- Use the configured PM activity type.




 Explore Phase – PM Business Process Document
 Confidential                                                                               Page 5 of 7
     Process Steps Detailed Requirements & Solution


Process Steps Description

ID         Process Step Description            FIORI App. / T. Code              Business Roles

01         Create Maintenance Order            Create Order (IW31/IW34)          Maintenance Planner

02         Enter Order details                 Change Maintenance Order (IW32)   Maintenance Planner

03         Enter configured PM Activity Type   Change Maintenance Order (IW32)   Maintenance Planner

04         Save the Order                      Change Maintenance Order (IW32)   Maintenance Planner




     Operational Decisions or Logic within the Process
     N/A



     Legal Considerations and Company-Specific Policies
     N/A




     Potential Future Process Improvements (out of scope for this implementation)
     N/A




     Functional Solution Design


     Master Data Considerations/High Level Data Migration

      List of Related Master Data
      ID      Description
      01      Characteristics
      02        Classes
      03        Maintenance Permits




      Explore Phase – PM Business Process Document
      Confidential                                                                           Page 6 of 7
Technical/Development Related Items
Sending Email notification for OHS Team regarding work orders with safety permits.



Authorization
The following roles will be used.

 Authorizations
 ID                                  Description
 YPM_ORDER_SF_PERMIT                 Parent: Maintenance Order Sifty Approval
 YPM_ORDER_SF_PERMIT_1310            Maintenance Order Sifty Approval 1310
 YPM_ORDER_SF_PERMIT_1410            Maintenance Order Sifty Approval 1410
 YPM_ORDER_SF_PERMIT_1320            Maintenance Order Sifty Approval 1320
 YPM_ORDER_SF_PERMIT_1100            Maintenance Order Sifty Approval 1100
 YPM_ORDER_SF_PERMIT_3010            Maintenance Order Sifty Approval 3010
 YPM_ORDER_SF_PERMIT_1120            Maintenance Order Sifty Approval 1120
 YPM_PERMIT_ADMIN                    PM Permits Master Data Administrator




 Explore Phase – PM Business Process Document
 Confidential                                                                        Page 7 of 7
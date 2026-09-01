# AWP - Weighbridge Business Process Document V1.0

SAP S/4HANA Implementation
   Weighbridge Process




                        1|Page
1 Table of Contents
2    Project Information ............................................................................................................3
3    Document Control..............................................................................................................3
4    Approval ............................................................................................................................. 3
5    Introduction .......................................................................................................................4
6    Business Process Overview ................................................................................................ 4
7    Key Business Requirements ............................................................................................... 4
8    Structure ............................................................................................................................ 5
9    Business Process ................................................................................................................6
     8.1 External Procurement (Inbound) ................................................................................6
     8.2 Outbound Delivery (Stock Transfer Order) ................................................................ 8
     8.3 Outbound Delivery (Sales) ........................................................................................11
     8.4 Outbound Delivery (Return Sales) ............................................................................13
     8.5 Calibrations................................................................................................................15
10      Report and Forms ........................................................................................................16
11      Authorization ...............................................................................................................17




                                                                                                                            2|Page
2 Project Information
Project Identification

Project Name                               Project Type
AWP - SAP Implementation                   S/4HANA Implementation
Customer Name                              SAP Service Partner
Al Watania Poultry (AWP)                   WISYS
Project Manager (Partner)                  Project Sponsor
Magdy Abul-Hassan                          Abu El Fadel Selim


3 Document Control
Version      Date            Additions/Modifications    Prepared by
V1.0         22.06.2023      Initial Version            Osama Hussien



4 Approval
No.                Name                  Organization/Title      Signature    Date

01    Mohammad Salem AL Washmy       AWP Weighbridge

02    Abdullah Al-Sarrah             AWP Weighbridge

03    Ayman Maher                    AWP Finance

04    Eslam Mohammed Hassanein       AWP Finance

05    Saleh Abdullah Alkhudhayri     AWP SAP Key User

06    Ammar El Baz                   AWP SAP Key User

07    Abu El Fadel Selim             AWP Project Manager

08    Magdy Abul-Hassan              WISYS Project Manager

09    Hesham Nabil                   WISYS Practice Manager




                                                                             3|Page
5 Introduction
The purpose of this document is to define the SAP Weighbridge process,
outlining the business requirements, process flows, and system configurations
necessary for implementation.




6 Business Process Overview
The Weighbridge process in SAP is used to record and monitor the weight of
inbound and outbound goods to ensure accurate inventory and Logistic
reporting.




7 Key Business Requirements
   •   Integration of weighbridge data with SAP ERP.
   •   Real-time weight capture and validation.
   •   Automatic document creation (Goods Receipt, Goods Issue, etc.).
   •   Real-time updates to inventory levels based on weighbridge data.




                                                                     4|Page
8 Structure
                                                                     Field   Function
 ID            Description                       ‫الموقع‬
                                                                   Selection
WS01    Weight Scale Main Gate 2                              ‫ز‬
                                         2 ‫ميان البوابة الرئيسية‬    WS01    IN & OUT
WS02 Weight Scale Proc. Plant W1                            ‫ز‬
                                       1 ‫ وطنية‬2 – 1 ‫ميان مسلخ‬      WS02    IN & OUT
WS03    Weight Scale Feed Mill W1                           ‫ز‬
                                       1 ‫ميان مصنع اعالف وطنية‬      WS03    IN & OUT
WS04   Weight Scale 1 Proc. Plant 3                       ‫ز‬
                                         2 ‫ وطنية‬3 ‫ميان مسلخ‬        WS04    IN & OUT
WS05   Weight Scale 2 Proc. Plant 3                       ‫ز‬
                                         2 ‫ وطنية‬3 ‫ميان مسلخ‬        WS05    IN & OUT
WS06 Weight Scale Feed Mill 3 W2                            ‫ز‬
                                       2 ‫ميان مصنع اعالف وطنية‬      WS06    IN & OUT
WS07 Weight Scale Feed Mill 6 W2                            ‫ز‬
                                       2 ‫ميان مصنع اعالف وطنية‬      WS07    IN & OUT
WS08 Weight Scale Feed Mill 4 Wadi      ‫ميان مصنع اعالف وادي ز‬
                                      4‫عنية‬                 ‫ز‬       WS08    IN & OUT
WS09 Weight Scale Feed Mill 5 Wadi      ‫ميان مصنع اعالف وادي ز‬
                                      5‫عنية‬                 ‫ز‬       WS09    IN & OUT
WS10   Weight Scale Manure Plant                        ‫ز‬
                                          ‫ميان مصنع السماد‬          WS10    IN & OUT
WS11    Weight Scale 1 Yanbu Silo                        ‫ز‬
                                           1‫ميان صوامع ينبع‬         WS11       OUT
WS12    Weight Scale 2 Yanbu Silo                        ‫ز‬
                                           2‫ميان صوامع ينبع‬         WS12        IN
WS13    Weight Scale 3 Yanbu Silo                        ‫ز‬
                                           3‫ميان صوامع ينبع‬         WS13       OUT
WS14    Weight Scale 4 Yanbu Silo                        ‫ز‬
                                           4‫ميان صوامع ينبع‬         WS14        IN
WS15    Weight Scale Grand Parent                     ‫ز‬
                                              ‫ميان الجوف‬            WS15    IN & OUT




                                                                           5|Page
9 Business Process
8.1 External Procurement (Inbound)
Overview:

Starting with the creation of a purchase order, the actual supply situation can
be monitored and planned. The subsequent creation of an inbound delivery
enables the user to process enhanced procurement processes, including the
goods receipt.

After the inbound delivery is created, the Weighbridge Process is carried out to
verify the weight of the received goods. Upon arrival, the vehicle is first
weighed to determine the gross weight. After unloading, it is weighed again to
determine the net weight of the goods. This ensures accurate quantity
validation before processing the goods receipt.

Business Process:

   Process Steps Description
                                              Execution
        Process Step
   ID                                               FIORI                     Roles
        Description                 T-Code
                                                    Application
    Start of the resale process in branches for Quantity with remaining expiry days is 3 Days
                                                       Manage
   01 Create purchase orders           ME21N          Purchase             Purchaser
                                                       Orders
                                                       Manage
   02 Create Inbound Delivery           VL31N         Inbound             Stock Keeper
                                                      Deliveries
                                                       Manage
   03     Create Weight Ticket       ZWS_TICKET        Weight        Weighbridge Key User
                                                       Tickets
                                                       Manage
   04      First Weight Record      ZWS_WEIGHT                         Weighbridge User
                                                       Weights
   05         Unload Goods                                                 Warehouse
                                                       Manage
   06 Second Weight Record ZWS_WEIGHT                                  Weighbridge User
                                                       Weights
                                                       Manage
   07      Post Goods Receipt        ZWS_CONFM         Weights       Weighbridge Manager
                                                    Confirmation



                                                                                 6|Page
System Configuration Considerations

Scale Document Type
                                                          Number Range
  Type    Description   Field Selection
                                          Code     From                  To
           External
  ZEXI   Procurement         ZEXI          Z1    1010000000       1019999999
          (Inbound)

Process Flow:




                                                                   7|Page
8.2 Outbound Delivery (Stock Transfer Order)

Overview:

The stock transfer process begins with a requirement to transfer material from
one plant to another plant within the same country. The purchaser creates
purchase orders under the receiving plant.

At the issuing plant, a warehouse clerk monitors the materials due to be
shipped and creates deliveries as required. Before shipment, the Weighbridge
Process is conducted to record the gross weight of the loaded vehicle. Once
the delivery is complete, the delivery quantities are issued, appropriate
documentation is generated, and the goods are shipped, ending the process
for the issuing plant.

Upon arrival at the receiving plant, the Weighbridge Process is carried out
again to verify the weight of the goods received. The vehicle is first weighed to
determine the gross weight. After unloading, it is weighed again to determine
the net weight of the materials. This ensures accurate quantity validation
before processing the goods receipt.

Goods are then received at the receiving plant, referring to the purchase
documents. Inventory is received into a storage location.

Key Process Flow:

   Process Steps Description
                                            Execution
   ID   Process Step Description                  FIORI                  Roles
                                 T-Code
                                                  Application
                             **** Process in Issue Location****
                                                     Manage
         Create purchase orders
   01                                ME21N           Purchase          Purchaser
                 (STO)
                                                      Orders
                                                     Manage
            Create Outbound
   02                                VL01N          Outbound          Stock Keeper
                Delivery
                                                    Deliveries
                                                     Manage
   03     Create Weight Ticket    ZWS_TICKET          Weight      Weighbridge Key User
                                                      Tickets

                                                                            8|Page
                                                           Manage
   04       First Weight Record      ZWS_WEIGHT                             Weighbridge User
                                                           Weights
   05           load Goods                                                     Warehouse
                                                       Manage
   06      Second Weight Record      ZWS_WEIGHT                      Weighbridge User
                                                       Weights
   07         Post Goods Issue                Background             Weighbridge User
                              ****Process In Receiving Location****
                                                       Manage
   08       Create Weight Ticket     ZWS_TICKET         Weight      Weighbridge Key User
                                                        Tickets
                                                       Manage
   09       First Weight Record     ZWS_WEIGHT                       Weighbridge User
                                                       Weights
   10          Unload Goods                                             Warehouse
                                                       Manage
   11      Second Weight Record     ZWS_WEIGHT                       Weighbridge User
                                                       Weights
   12        Post Goods Receipt               Background             Weighbridge User
              Post the Weight
   13                                         Background             Weighbridge User
                 Differences


Handling Differences Between Issue Weight and Receive Weight:
  •     If the Receive Weight is greater than the Issue Weight, the system will record the
        Issue Weight as the Receive Weight.

  •     If the Receive Weight is less than the Issue Weight, the system will record the
        Receive Weight, and the difference will be moved to a Difference Storage Location.

  •     Addressing the differences in scales that Posted to the Difference Storage location
        need to have Action for Authorized Persons.
  System Configuration Considerations

Scale Document Type
                                                                              Number Range
  Type             Description           Field Selection
                                                            Code           From           To
            Outbound Delivery (Stock
  ZSTO                                        ZSTO            Z2       1020000000         1029999999
                Transfer Order)

Differences Storage Locations

                Storage Location                                        Description

                       9999                                          Weight Differences


                                                                                      9|Page
* Process Flow




                 10 | P a g e
8.3 Outbound Delivery (Sales)
The process begins with the creation of a standard sales order, based on
customer and business process requirements. Once the order is confirmed, the
warehouse team picks and packs the required materials for shipment. Before
dispatch, the vehicle undergoes the Weighbridge Process to verify the
shipment weight.
The vehicle is first weighed to capture the tare weight (empty weight). After
loading, it is weighed again to determine the gross weight (loaded weight). The
net weight, calculated as the difference between the gross weight and tare
weight, is recorded to ensure it matches the picked quantity. This step finalizes
inventory relief, accurately recording the physical quantity being shipped to
the customer.

Key Process Flow:

   Process Steps Description
                                         Execution
        Process Step
   ID                                          FIORI                  Roles
        Description             T-Code
                                               Application
                                                  Manage
   01     Create Sales Orders       VA01                         Sales Specialist
                                               Sales Orders
                                                  Manage
           Create Outbound
   02                              VL01N         Outbound         Stock Keeper
               Delivery
                                                 Deliveries
                                                  Manage
   03    Create Weight Ticket    ZWS_TICKET       Weight      Weighbridge Key User
                                                  Tickets
                                                  Manage
   04     First Weight Record   ZWS_WEIGHT                     Weighbridge User
                                                  Weights
   05         load Goods                                      Warehouse
                                             Manage
   06    Second Weight Record   ZWS_WEIGHT                 Weighbridge User
                                             Weights
                                             Manage
   07      Post Goods Issue     ZWS_CONFM    Weights    Weighbridge Confirmation
                                           Confirmation




                                                                        11 | P a g e
System Configuration Considerations

Scale Document Type
                                                              Number Range
  Type           Description    Field Selection
                                                  Code     From           To
            Outbound Delivery
  ZSOR                                ZSOR         Z3    1030000000      1039999999
                 (Sales)



* Process Flow




                                                                      12 | P a g e
8.4 Outbound Delivery (Return Sales)
A return sales order is created in SAP based on the customer's request for
return. The order includes details such as material, quantity, return reason,
and pricing adjustments. The vehicle carrying the returned goods arrives at the
weighbridge. The system records the gross weight of the vehicle before
unloading. After unloading, the vehicle is weighed again to record the tare
weight (empty weight). The net weight of the returned goods is calculated.
After Receiving The stock is updated in SAP inventory, and financial
implications are recorded.

Key Process Flow:

Process Steps Description
                                             Execution
ID    Process Step Description                   FIORI                       Roles
                                   T-Code
                                                 Application
         Create Return Sales                       Manage Sales
 01                                    VA01                           Sales Specialist
               Orders                                 Orders
                                                      Manage
          Create Outbound
 02                                    VL01N         Outbound          Stock Keeper
              Delivery
                                                     Deliveries
                                                  Manage Weight
 03      Create Weight Ticket       ZWS_TICKET                     Weighbridge Key User
                                                      Tickets
 04      First Weight Record       ZWS_WEIGHT     Manage Weights     Weighbridge User
 05        Unload Goods                                                Warehouse
 06    Second Weight Record        ZWS_WEIGHT     Manage Weights     Weighbridge User
                                                  Manage Weights      Weighbridge
 07      Post Goods Receive        ZWS_CONFM
                                                   Confirmation       Confirmation



System Configuration Considerations

Scale Document Type
                                                                      Number Range
  Type            Description          Field Selection
                                                         Code      From           To
               Outbound Delivery
  ZREO                                     ZREO           Z4    1040000000      1049999999
                 (Return Sales)



                                                                             13 | P a g e
* Process Flow




                 14 | P a g e
8.5 Calibrations
The Calibration Process in SAP Weighbridge ensures accurate weight
measurements Without any Reference to SAP Object.

Key Process Flow:

   Process Steps Description
                                         Execution
         Process Step
   ID                                          FIORI                  Roles
         Description             T-Code
                                               Application
                                                 Manage
   01     Create Weight Ticket    ZWS_TICKET      Weight       Weighbridge Key User
                                                  Tickets
                                                 Manage
   02      First Weight Record   ZWS_WEIGHT                     Weighbridge User
                                                 Weights
   03     Unload & Load Goods                                      Warehouse
                                                  Manage
   04     Second Weight Record   ZWS_WEIGHT                     Weighbridge User
                                                  Weights



System Configuration Considerations

Scale Document Type
                                                                  Number Range
  Type            Description       Field Selection
                                                      Code     From           To
  ZCLB            Calibrations           ZCLB          Z5    1050000000       1059999999




                                                                          15 | P a g e
* Process Flow




10 Report and Forms
Weight Report

   T-CODE / App ID        Description                                Details

                                                     Include all Weight ticket Details (Data of
 ZWS_WEIGHT_REPORT   Weight System Report           entry – first Weight – Second Weight – Net
                                                             Weight – Driver - …... etc.)


Weight Forms
      Form Name             Description                                Action
      Frist Weight   All Details for Frist Weight              After Save Frist Weight


Weight Forms
      Form Name               Description                                Action
     Second Weight   All Details for Weight Process            After Save Second Weight


                                                                            16 | P a g e
          11 Authorization
Authorizations
Parent
                    Chilled ID                       Description                 APP / T-CODE           Comments
  ID

ZWE_WEIGHT_TICKET                   Parent: WS: Weight Ticket                     ZWS_TICKET

         ZWE_WEIGHT_TICKET_ WS01    Child WS: Weight Ticket Main Gate 2
         ZWE_WEIGHT_TICKET_ WS02    Child WS: Weight Ticket Plant W1
         ZWE_WEIGHT_TICKET_ WS03    Child WS: Weight Ticket Feed Mill W1
         ZWE_WEIGHT_TICKET_ WS04    Child WS: Weight Ticket Proc. Plant 3 (1)
         ZWE_WEIGHT_TICKET_ WS05    Child WS: Weight Ticket Proc. Plant 3 (2)
         ZWE_WEIGHT_TICKET_ WS06    Child WS: Weight Ticket Feed Mill 3 W2
                                                                                                      Restricted by the
         ZWE_WEIGHT_TICKET_ WS07    Child WS: Weight Ticket Feed Mill 6 W2                          Authorization object
                                                                                                     for Scale type and
         ZWE_WEIGHT_TICKET_ WS08    Child WS: Weight Ticket Feed Mill 4 Wadi                           Weighbridge ID
         ZWE_WEIGHT_TICKET_ WS09    Child WS: Weight Ticket Feed Mill 5 Wadi
         ZWE_WEIGHT_TICKET_ WS10    Child WS: Weight Ticket Manure Plant
         ZWE_WEIGHT_TICKET_ WS11    Child WS: Weight Ticket Yanbu Silo (1)
         ZWE_WEIGHT_TICKET_ WS12    Child WS: Weight Ticket Yanbu Silo (2)
         ZWE_WEIGHT_TICKET_ WS13    Child WS: Weight Ticket Yanbu Silo (3)
         ZWE_WEIGHT_TICKET_ WS14    Child WS: Weight Ticket Yanbu Silo (4)
         ZWE_WEIGHT_TICKET_ WS15    Child WS: Weight Ticket Grand Parent
ZWE_WEIGHT_PROCESS                  Parent: WS: Weight Ticket Process            ZWS_WEIGHT
         ZWE_WEIGHT_PROCESS_ WS01   Child WS: Weight Process Main Gate 2
         ZWE_WEIGHT_PROCESS_ WS02   Child WS: Weight Process Plant W1
         ZWE_WEIGHT_PROCESS_ WS03   Child WS: Weight Process Feed Mill W1
         ZWE_WEIGHT_PROCESS_ WS04   Child WS: Weight Process Proc. Plant 3 (1)
         ZWE_WEIGHT_PROCESS_ WS05   Child WS: Weight Process Proc. Plant 3 (2)
         ZWE_WEIGHT_PROCESS_ WS06   Child WS: Weight Process Feed Mill 3 W2
                                                                                                      Restricted by the
         ZWE_WEIGHT_PROCESS_ WS07   Child WS: Weight Process Feed Mill 6 W2                         Authorization object
         ZWE_WEIGHT_PROCESS_ WS08   Child WS: Weight Process Feed Mill 4 Wadi                        for Scale type and
                                                                                                       Weighbridge ID
         ZWE_WEIGHT_PROCESS_ WS09   Child WS: Weight Process Feed Mill 5 Wadi
         ZWE_WEIGHT_PROCESS_ WS10   Child WS: Weight Process Manure Plant
         ZWE_WEIGHT_PROCESS_ WS11   Child WS: Weight Process Yanbu Silo (1)
         ZWE_WEIGHT_PROCESS_ WS12   Child WS: Weight Process Yanbu Silo (2)
         ZWE_WEIGHT_PROCESS_ WS13   Child WS: Weight Process Yanbu Silo (3)
         ZWE_WEIGHT_PROCESS_ WS14   Child WS: Weight Process Yanbu Silo (4)
         ZWE_WEIGHT_PROCESS_ WS15   Child WS: Weight Process Grand Parent
ZWE_WEIGHT_CONFIRM                  Parent: WS: Weight Confirmation              ZWS_CONFM            Restricted by the
                                                                                                    Authorization object
         ZWE_WEIGHT_CONFIRM_ WS01   Child WS: Weight Confirm Main Gate 2
                                                                                                     for Scale type and
         ZWE_WEIGHT_CONFIRM_ WS02   Child WS: Weight Confirm Plant W1                               Weighbridge ID and
                                                                                                17 | P a g e
                                                                                                    has the Posting
       ZWE_WEIGHT_CONFIRM_ WS03   Child WS: Weight Confirm Feed Mill W1
                                                                                                   goods Movement
       ZWE_WEIGHT_CONFIRM_ WS04   Child WS: Weight Confirm Proc. Plant 3 (1)                       Authorization for
                                                                                                    the Plants and
       ZWE_WEIGHT_CONFIRM_ WS05   Child WS: Weight Confirm Proc. Plant 3 (2)                       Storage Location
       ZWE_WEIGHT_CONFIRM_ WS06   Child WS: Weight Confirm Feed Mill 3 W2
       ZWE_WEIGHT_CONFIRM_ WS07   Child WS: Weight Confirm Feed Mill 6 W2
       ZWE_WEIGHT_CONFIRM_ WS08   Child WS: Weight Confirm Feed Mill 4 Wadi
       ZWE_WEIGHT_CONFIRM_ WS09   Child WS: Weight Confirm Feed Mill 5 Wadi
       ZWE_WEIGHT_CONFIRM_ WS10   Child WS: Weight Confirm Manure Plant
       ZWE_WEIGHT_CONFIRM_ WS11   Child WS: Weight Confirm Yanbu Silo (1)
       ZWE_WEIGHT_CONFIRM_ WS12   Child WS: Weight Confirm Yanbu Silo (2)
       ZWE_WEIGHT_CONFIRM_ WS13   Child WS: Weight Confirm Yanbu Silo (3)
       ZWE_WEIGHT_CONFIRM_ WS14   Child WS: Weight Confirm Yanbu Silo (4)
       ZWE_WEIGHT_CONFIRM_ WS15   Child WS: Weight Confirm Grand Parent
ZWE_WEIGHT_REPORT                 Parent: WS: Weight Report                    ZWS_WEIGHT_REPORT
                                                                                                    No Restrictions
       ZWE_WEIGHT_REPORT          Child WS: Weight Report




                                                                                             18 | P a g e
# SAP TM - Camion Integration BBP

AL-WATANIA TRANSPORTATION
SAP TRANSPORTATION MANAGEMENT – CAMION INTEGRATION BBP
CONTENTS
 INTEGRATION DESIGN DOCUMENT: SAP S/4HANA TM AND
 CAMION TMS ................................................................................ 3
 1. INTRODUCTION ............................................................................ 3
 2. SYSTEM LANDSCAPE .................................................................. 3
 3. DATA FLOW DESIGN ................................................................... 4




1|Page
Project Information
Project Identification

Project Name                                           Project Type
SAP TM – Camion Integration                            Integration
Customer Name                                          SAP Service Partner
Al Watania Poultry                                     Wi-Sys
Program Manager (Partner)                              AWP - Project Sponsor
Magdy Abul-Hassan                                      Sultan AL-Sultan
AWP – Project manager                                  Project TeamLead
Abulfadel Selim                                        Ahmed Rashed

Document Control
Version              Date             Prepared/Revised by
V0.1                 07.05.2025       Ahmed Rashed

Approval
No. Name                          Organization/Title                      Signature/Date




2|Page
Integration Design Document: SAP S/4HANA TM and CAMION TMS
   1. Introduction
This document outlines the design for the integration between SAP Transportation Management (TM)
within SAP S/4HANA and the CAMION Transportation Management System (TMS). The primary
purpose of this integration is to facilitate the seamless and efficient exchange of critical transportation-
related data, specifically focusing on resource master data (drivers and trucks) and detailed shipment
information originating from SAP TM.
This document will serve as a comprehensive guide for the development, implementation, and ongoing
maintenance of this integration. It details the scope of the integration, the systems involved, the
business requirements driving the initiative, the proposed data flows, integration methodologies, data
mapping considerations.

   2. System Landscape
This section provides a high-level overview of the key systems involved in this integration: SAP
S/4HANA with its Transportation Management (TM) module and the CAMION Transportation
Management System (TMS).
SAP S/4HANA TM will serve as the source system for resource master data (drivers and trucks) and
Freight information. It is responsible for transportation planning, execution, and freight settlement
within the organization.
The CAMION TMS, on the other hand, will be the receiving system, utilizing the data from SAP TM for
its specific transportation management functions, which may include last-mile delivery optimization,
real-time tracking, or carrier communication. Understanding the roles and responsibilities of each
system is crucial for designing an effective and efficient integration. The integration aims to ensure that
CAMION TMS has access to accurate and timely data from SAP S/4HANA TM to perform its designated
tasks. A clear depiction of the architectural relationship between these systems, including any
intermediary middleware or platforms, is essential for a comprehensive understanding of the
integration environment.




3|Page
    3. Data Flow Design
Master data Flow Design

TM – Camion – Master data Integration Flow

                        SAP TMS                                           Camion




              Drivers                                                     Drivers




               Truck                                                       Truck


           • Truck                                                   • Truck
           • Trailer                                                 • Trailer
           • Combination                                             • Combination




Master data details design flow


SN    Process Details                                    Related system              Integration type

1     Driver details will be replicated from SAP TM to   SAP TMS – Camion TMS        One way
      Camion TMS                                                                     integration

2     Truck Details will be replicated from SAP TM to    SAP TMS – Camion TMS        Two-way
      Camion TMS (Truck – Trailer – Combination)                                     integration




4|Page
Process Flow Design
TM – Camion – Driver App Integration Flow

                         SAP TMS                               Camion TMS


                                                             SMS To Driver
              Freight order


       •   FO number                                            Shipment
       •   Creation date
       •   Creation Time                               •   FO number
       •   Driver                                      •   Creation date




                                                                                                     The fields in the flow is just an
       •   Resource                                    •   Creation Time
       •                                   Save
           Source location                             •   Driver




                                                                                           BAYAN




                                                                                                             example Fields
       •   Destination location                        •   Resource
       •   Location sequence                           •   Source location
       •   Material                                    •   Destination location
       •   Carrier                                     •   Location sequence
                                                       •   Material




                                                      Driver Records an Events




                                                                                           WASL
                                                      • Load begin
                                                      • Load end
                                                      • Unload begin
                                   FO Events
                                                      • Unload end
                                                      ( For Each location )




Process flow Details steps:

SN    Process Details                               Related system                Integration type

1     Freight orders will be created By AWT user    SAP TMS                       Two-way integration

2     SMS will be sent to Driver mobile number to   SAP TMS                       One-way integration
      start the trip

3     Shipment will be created automatically        Camion TMS                    One-way integration




5|Page
4   BAYAN and WASL integration will be done       Camion TMS   One-way integration

5   Event records will be created for each step   Camion TMS   Two-way integration

6   Event records will be updated in SAP TMS      SAP TMS      Two-way integration




6|Page
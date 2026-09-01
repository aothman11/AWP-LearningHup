# EHS Incident Management  BP 2

AL-WATANIA POULTRY
BUSINESS BLUEPRINT DOCUMENTATION FOR EHS INCIDENT MANAGEMENT
SAP S4/HANA 2022
Confidential
TABLE OF CONTENTS
TABLE OF CONTENTS ................................................................................................................................................... 1
PROJECT INFORMATION .............................................................................................................................................. 2
DOCUMENT CONTROL .................................................................................................................................................. 2
APPROVAL ....................................................................................................................................................................... 2

Organizational Structure
EHS-ORG-010: ORGANIZATION STRUCTURE CONSIDERATION .......................................................................... 3

Master Data
EHS-MD-010: LOCATION ............................................................................................................................................... 3
EHS-MD-020: EMPLOYEE (BUSINESS PARTNER) .................................................................................................... 4

Business Process
EHS-3FP: INCIDENT MANAGEMENT PROCESS ........................................................................................................ 5




 Explore Phase – EHS Business Process Document
 Confidential                                                                                                                                                Page 1 of 14
 EHS-ORG-010: ORGANIZATION STRUCTURE CONSIDERATION

Location Structure and Emplyees from HCM module:
Existed Functional Location structure from Plant Maintenance module will be replicated as the
Location structure in Incident management.

Business Partners (Employees) will be replicated from HCM module.




 EHS-MD-010: LOCATION
Definition

The location is a central master data object that can be organized in a structure to represent where a
location exists spatially or functionally in a company. Examples of a location are a plant, a piece of
equipment, or a work area.

In incident management, locations specify precisely where an incident took place, in health and safety
management, locations specify precisely where hazards exist.

The location makes it possible to utilize existing technical objects and functional locations from the Plant
Maintenance (PM) component, and work areas from existing EHS solution in Environment, Health, and
Safety.




Master Data Ownership

All exited data from PM (Functional Location Structure) will be replicated into a Location Structure in
EHS and the new Master Data will be administrated by Master Data Management (MDM) team.




 Explore Phase – EHS Business Process Document
 Confidential                                                                                  Page 3 of 14
Authorization/Security Considerations

EHS Master Data will be entered centrally. For this, transactions (roles) are available, which is part of
authorization role definition accordingly.




Configuration Considerations
LOCATION CATEGORY

Indicator that enables you to differentiate individual locations according to how they are used

 Location Category
 Category code          Description
 EHFND_LTY_BU           Business Unit
 EHFND_LTY_CO           Company
 EHFND_LTY_EQ           Equipment
 EHFND_LTY_PU           Production Unit
 EHFND_LTY_SI           Site
 EHFND_LTY_SL           Storage Location
 EHFND_LTY_WC           Work Center




EHS-MD-020: EMPLOYEE (BUSINESS PARTNER)

The Master Data of employees will be replicated from HCM module for new and exist employees.




 Explore Phase – EHS Business Process Document
 Confidential                                                                               Page 4 of 14
 EHS-3FP: INCIDENT MANAGEMENT PROCESS
Process Description
The EHS Incident Management solution aims to provide you with a centralized solution to track all types
of incidents, drive a consistent process for incident entry, investigation, and corrective tasks.


The process of EHS Incident / Near Miss / Safety Observation starts with initial recording, you can collect
additional information from the people involved, investigate why an incident occurred, and track the
financial impact on the organization and its assets. In detail, the process of managing incidents include
the following steps:

   1- Report an incident / Near Miss / Safety Observation (initial incident entry / injury illness log entry).
       -   The incident reporter has the task of recording the occurred event. The Report Incident app
           provides a single-entry screen to record the initial information of the occurred event.
           Depending on the type of event (incident, near miss or safety observation) different set of
           fields will be displayed.
           When you have entered all information in the app, you choose the Send button to record the
           details. The responsible incident manager receives a task in his or her My Inbox app to review
           and complete the record in the incident management application.

   2- Review and complete an incident record.
      - The incident manager receives a task in My Inbox to review and complete the incidents (also
         near misses and safety observations) that have been created during the incident reporting.
         The incident manager can perform the following activities during this step:
            o Maintain all involved persons
            o Maintain all involved assets
            o Maintain release data
            o Send inquiries to get more information about the incident
            o Assess the incident in a risk matrix
            o Track the financial impact of the incident
            o Report the incident to authorities or for internal purposes
            o Trigger corrective and preventive tasks

   3- Report to HR Team
      - The incident manager can create a report and send it to HR to communicate with insurance
         provider.

   4- Perform an incident investigation and root-cause analysis.
      - The Investigation step and root-cause analysis in AWP is skipped from SAP process and will
         be maintained externally using Excel file and attach it as an attachment with the Incident.




 Explore Phase – EHS Business Process Document
 Confidential                                                                                   Page 5 of 14
   5- Generate analytical reports.
      - The system can generate reports that are necessary to fulfill legal, regulatory, and reporting
         requirements. Also generate data that you process in incident management in the following
         types of reports:

              o Legal reports
                        Used to report incidents to authorities, for example, to the Occupational
                        Safety and Health Administration (OSHA) or to an insurance company.

              o Incident summary reports
                       Contains data of more than one incident, for example, a log of all incidents
                       involving an injury that occurred during the year.

      -   In the Manage Summary Reports - Incident Management app, you can manage incident
          summary reports that are based on legal standards. When generating an incident summary
          report, you must select the location, including its sub-locations and the output format such
          as PDF file (print version) or CSV file.

   6- Determine and conduct corrective actions.
      - In this step the incident manager can create a task that has to be fulfilled by the assigned
         person. The system communicates the tasks to the My Inbox app of the assigned implementor
         who must trigger the task in Environment, Health, and Safety or in the integrated SAP
         components.

   7- Close incident.
      - After reviewing and completing the incident details and ensuring all sub-processes has been
         completed (besides recurrent tasks), the incident manager can initiate the closure of the
         incident. With this step the workflow of the incident will be closed, and the data can no longer
         be edited.
         In case further details need to be document, the incident can be re-opened.



Business Process Characteristics


Process Characteristics
Process Trigger            Incident Report
Process Input              Creation of Detail Incident (Detailed Recording)
Process Output             Incident Created with subsequent information to be maintained
Process Owner              OSH Department
Process Volumes            NA
Process Frequencies        NA



Explore Phase – EHS Business Process Document
Confidential                                                                                Page 6 of 14
Business Process Diagrams


                                                  Incident
                                                Management




Explore Phase – EHS Business Process Document
Confidential                                                 Page 7 of 14
     Process Steps Detailed Requirements & Solution


Process Steps Description

                                                                                 Business Roles
ID      Process Step Description FIORI App. / T. Code


01      Create Incident                          Report Incident / F1992              Incident Reporter

02      Approve Incident               My Inbox - Incident Management / F7992         Incident Manager

        Review and complete
03                                            Manage Incidents / F4759                Incident Manager
        Incident record

04      Attach Investagation                  Manage Incidents / F4759                Incident Manager

05      Report to HR                          Manage Incidents / F4759                Incident Manager

06      Print reports                         Manage Incidents / F4759                Incident Manager

        Define and manage
07                                            Manage Incidents / F4759                Incident Manager
        Tasks

08      Perform Tasks                  My Inbox - Incident Management / F7992     Responsible personnel

09      Close Incident                        Manage Incidents / F4759                Incident Manager


     Reports / Key Performance Indicators KPIs

      Reports
      ID    FIORI App.               Description                                GUI          Fiori
      01    F2628                    Incident Detailed Analysis                       -           X
      02    F4759                    DART Rate                                        -           X
      03    F5240                    Incident Rate                                    -           X
      04    F2103                    Number of Recordable Cases                       -           X


     Printing Forms
     In AWP the printing forms will be as used now in business.



      Explore Phase – EHS Business Process Document
      Confidential                                                                         Page 8 of 14
 Locations where this Business Process is performed.

     Locations
     Location                      Number of Users              Point of Contact
     All Plants                                                 Eng. Mohamed Ahmed Fathi


 Operational Decisions or Logic within the Process
 N/A




 Legal Considerations and Company-Specific Policies
 N/A




 Integration Points

Integration Points
                                              System/Module
ID     Process Step                                           Integration Details
                                              Integrated with

                                                               Read the PM Master Data for choosing the
01 Report damaged assets                             PM
                                                               damaged asset


                                                               Create Notification with datailes of
02 Create PM Notification                            PM
                                                               corrective task


                                                               Read Employees data and assign the injured
03 Report injures for employees                      HCM
                                                               employee

                                                               Leave datilas should be linked with the
04 Enter Leave information                           HCM
                                                               incident

                                                               Show the value of the PM order settlement
03 Track the Financial impact                        FI-CO
                                                               or any other costs incurred by the incident




 Potential Future Process Improvements (out of scope for this implementation)
 N/A




     Explore Phase – EHS Business Process Document
     Confidential                                                                             Page 9 of 14
Functional Solution Design
Organization Structure Considerations

Company Code
1000                           Al-Watania Poultry
2000                           Al-Watania Transportation
3000                           Al-Watania Grandparent
4000                           Al-Watania Agriculture
5000                           Al-Watania Super Market


Master Data Considerations/High Level Data Migration

List of Related Master Data
ID      Description
01      Locations
02      Employees


Process WorkFlow
N/A

System Configuration Considerations

     1- Locations

        The following Location types will be used for Incident Management.


 Location Types
 Location Type                            Type Description
 EHFND_LTY_BU                             Business Unit
 EHFND_LTY_CO                             Company
 EHFND_LTY_EQ                             Equipment
 EHFND_LTY_PU                             Production Unit
 EHFND_LTY_SI                             Site
 EHFND_LTY_SL                             Storage Location
 EHFND_LTY_WC                             Work Center




Explore Phase – EHS Business Process Document
Confidential                                                                 Page 10 of 14
  2- Incident Groups
      The following Incident groups will be maintained and used for Incident Management.

Incident Groups
Incident Group                                   Description
EHHSS_IGR_NOT_OF_VIOL                            Notice of Violation
EHHSS_IGR_OCC_INC                                Injury / Illness
EHHSS_IGR_RELEASE                                Release
ZEHS_WORK_ACCIDENT                               ‫ حادث عمل‬Work Accident
ZEHS_COMMUTE_INCIDENT                            ‫ حادث مروري‬Commute incidents
ZEHS_FIRE_CASE                                   ‫ حادث ح ق‬Fire Case
ZEHS_CHEMICAL_SPILL                               ‫ حادث ب ك م ا‬Chemical Spill

  3- Near Miss Groups

      The following Near Miss groups will be maintained and used for Incident Management.

Near Miss Groups
Near Miss Group                                  Description
EHHSS_NMG_UNS_ACTION                             Unsafe Action
EHHSS_NMG_UNS_COND                               Unsafe Condition
EHHSS_NMG_UNS_EQU                                Unsafe Equipment
EHHSS_NMG_UNS_USE_EQU                            Unsafe Use of Equipment

  4- Safety Observation Groups

      The following Safety Observation groups will be maintained and used for Incident Management.

Safety Observation Groups
Safety Observation Group                         Description
EHHSS_SOG_DOC_PROC_NF                            Documented Procedure not Followed
EHHSS_SOG_FAIL_USE_PE                            Failure to Use Personal Protect. Equip.
EHHSS_SOG_HORSEPLAY                              Horseplay
EHHSS_SOG_UNS_LIF_CAR                            Unsafe Lifting or Carrying
EHHSS_SOG_UNS_USE_ETV                            Unsafe Use of Equipment, Tool or Vehicle
EHHSS_SOG_UNS_USE_MAT                            Unsafe Use of Material
EHHSS_SOG_USE_DEF_ETV                            Use of Defective Equipment, Tool or Veh.
EHHSS_SOG_USE_DEF_MAT                            Use of Defective Material
EHHSS_SOG_DOC_PROC_NF                            Documented Procedure not Followed



Explore Phase – EHS Business Process Document
Confidential                                                                          Page 11 of 14
  5- Incident types

      The following types will be maintained and used for Incident types.

Incident Types
Incident Type                                      Incident Type Description
ZEHS_FAC                                           ‫( حالة اﻹسعافات اﻷول ة‬FAC)
ZEHS_MTC                                            ‫( اﻹصا ة مع العﻼج‬MTC)
ZEHS_RWC                                           ‫( إصا ة العمل المحددة‬RWC)
ZEHS_LWC                                           ‫( إصا ة العمل وفقد أ ام‬LWC )
ZEHS_PDC                                           ‫( حادث إتﻼف الممتل ات‬PDC)
ZEHS_FAT                                           ‫( وفاة‬Fat)


  6- Correction Task Types

      The following types will be maintained and used for Correction Tasks.

Task Types
Class Type                                         Class Type Description
CREATE_CHANGE_REQUEST                              Change Request
CREATE_MAINTENANCE_NOTIFI                          Maintenance Notification
CREATE_REPORTING_TASK                              Reporting Task
TASK_REQUESTED                                     Task
TASK_WITH_APPR_REQUESTED                           Task with Approval



  7- Notice of Violation Types (Gaps)

      The following types will be maintained and used for Notice of Violation.


Notice of Violation
Violation Type                                     Description
ZEHS_MATERIAL                                      Material - ‫المادة‬
ZEHS_MACHINE                                       Machine - ‫اﻵلة‬
ZEHS_MAN                                           Man – ‫الشخص‬
ZEHS_METHOD                                        Method - ‫الطريقة‬
ZEHS_MANAGEMENT                                    Management - ‫اﻹدارة‬




Explore Phase – EHS Business Process Document
Confidential                                                                      Page 12 of 14
  8- Injury Types
      The following types will be maintained and used for Injury.

Injury
Injury Type                                        Description
ZEHS_LACERATION                                    ‫تمزقات‬
ZEHS_CUT                                           ‫قطﻊ‬
ZEHS_CONTUSSION                                    ‫رضوض‬
ZEHS_BRUISE                                        ‫ﻛﺪﻣة‬
ZEHS_FRACTURE                                      ‫ﻛﺴر‬
ZEHS_EYE INJURY                                    ‫إصابة العين‬
ZEHS_AMPUTATION                                    ‫بﺘر‬
ZEHS_BURN                                          ‫حرق‬
ZEHS_HEARING_LOSS                                  ‫فقﺪان الﺴمﻊ‬
ZEHS_SPRAINS_STRAINS                               ‫الﺘواءات وإجهادات‬
ZEHS_ABRASIONS                                     ‫ﻛشطات‬
ZEHS_SPLINTERS_PUNCTURES                           ‫شظايا وثقوب‬
ZEHS_INHALATION_TOXIC_CORROSIVE_GASES              ‫اسﺘنشاق غازات ساﻣة أو أﻛالة‬
ZEHS_TENDONITIS                                    ‫الﺘهاب اﻷوتار‬
ZEHS_SHOULDER_IMPINGEMENT                          ‫اصطﺪام الكﺘف‬
ZEHS_TORN_LEGMENT_TENDON_REQUIRING_SRGRY           ‫تمزق الﺴاق أو الوتر الذي يﺘطلب إجراء عملية جراحية‬
ZEHS_HERNIA                                        ‫فﺘﻖ‬
ZEHS_MENTAL ILLNESS                                ‫المرض العقلي‬
ZEHS_OTHER                                         ... ‫أخرى‬

  9- Body Part Types

      The following types will be maintained and used for Body Parts.

Injury
Injury Type                                        Description
ZEHS_BODY_PART_HEAD                                 ‫الرأس‬Head
ZEHS_BODY_PART_EYE                                  ‫العين‬Eye
ZEHS_BODY_PART_NECK                                 ‫الرقبة‬Neck
ZEHS_BODY_PART_CHEST                                ‫الصﺪر‬Chest
ZEHS_BODY_PART_BACK                                 ‫الظهر‬Back
ZEHS_BODY_PART_ARM                                  ‫ الذراع‬Arm
ZEHS_BODY_PART_HAND                                 ‫اليﺪ‬Hand
ZEHS_BODY_PART_LEGS                                 ‫ الﺴاقين‬Legs
ZEHS_BODY_PART_KNEES                                ‫الرﻛبﺘين‬Knees
ZEHS_BODY_PART_FEET                                 ‫القﺪﻣين‬Feet




Explore Phase – EHS Business Process Document
Confidential                                                                                      Page 13 of 14
      10- Incident / Near Miss / Safety Observation Number Range

         The following number range will be maintained and used for Incident / Near Miss / Safety
         Observation cumulatively.

 Incident / Near Miss / Safety Observation Number Range
     Number                     From                                         To
        IE             00000000000100000000                         00000000000199999999

      11- Correction Tasks Number Range

         The following number range will be maintained and used for Correction Tasks.

 Task Number Range
    Number                 From                                              To
       IE          00000000000100000000                             00000000000199999999




      12- Incident Recording Configuration
         The incident recording containing the configuration of People, Assets, Releases, Risk Matrix,
         Notice of violation and Financial Tracking.
         All these objects will use the standard configuration from SAP.

            Incident / Near Miss / Safety Observation Status
             The Standard System Status will be used for the Incident Management.


Technical/Development Related Items
N/A




Explore Phase – EHS Business Process Document
Confidential                                                                            Page 14 of 14
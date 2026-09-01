# Feed Mill User Manual - EAM Corrective Maintenance V2 1

SAP S/4HANA Plant Maintenance (PM)
 User Manual-EAM Corrective Maintenance




Prepared by: SAP Department - SAP PM TEAM
Contents

 1.     Introduction ....................................................................................................................3
 2.     Notification Creation .....................................................................................................3
 2.1.      Create PM Notification: Corrective Maintenance ..................................................5
 2.2.      Notification list display ..............................................................................................7
 3.     Creation of Corrective Maintenance Order ..............................................................10
 3.1.      Resource Planning in Corrective Maintenance Order .........................................12
 3.2.      Releasing of Maintenance Order ............................................................................14
 3.3.      Material withdrawal for the Maintenance Order:................................................16
 3.4.      Issue of Materials From the Store ..........................................................................17
 3.5.      Time Confirmation of Maintenance Order Operations .......................................19
 3.6.      Maintenance Order: Technical Completion ..........................................................22




                                                                                                                             Page | 2
1. Introduction
The Corrective Maintenance process shall consist of the following major activities:
   1. Raising a Corrective Maintenance Notification to inform the responsible Maintenance
       Department or main work center.
   2. Notification Release (Put in Process) by the Maintenance Department.
   3. Creation of a Corrective Maintenance Order by the Maintenance Department if
       materials or external services (contractual jobs) are required to carry out the
       maintenance. This includes:
       •   Planning of operations (activities)
       •   Planning of required materials
       •   Planning of required manpower
       •   Planning of required external service quantities
   4. Order Release by an authorized person in the Maintenance Department.
   5. Printing of the Material Reservation Slip (SIV) for issuing materials from the store by
       the Maintenance Department.
   6. Issuance of Materials from the store by the Storekeeper.
   7. Execution of Work on Site by internal manpower and/or an external agency.
   8. Time Confirmation of Order Operations (internal) by the Maintenance Department.
   9. Entry of Findings (defect, cause, tasks, etc.) in the general notification by the
       Maintenance Department.
   10. Completion of Tasks in the notification and Notification Completion (NOCO).
   11. Creation of a Service Entry Sheet for external operations (if performed by an external
       agency) by the Maintenance Department.
   12. Entry and Approval of Consumed External Services in the service entry sheet.
   13. Technical Completion (TECO) of the maintenance order.
   14. Month-End Settlement of the maintenance order by the Finance & Accounts (F&A)
       Department.
   15. Business Completion by the Maintenance Department.

2. Notification Creation

When the Production Department identifies an abnormality or a job requirement that falls under
the Corrective Maintenance category, it shall raise a Corrective Maintenance Notification.
The notification should include the following details:
       •   Brief Description of the work to be performed.




                                                                                      Page | 3
         •   Reference Object, such as the Functional Location or Equipment associated with the
             issue.
         •   Detailed Description (optional), which can be entered in the subject long text field.
         •   Tasks Required, outlining the specific actions to be taken.
This notification serves as the initial trigger for the corrective maintenance workflow and
ensures that the Maintenance Department is informed promptly and accurately.


 Steps          Definition                          Instructions

 1              Log in                             Log In To SAP FIORI Launchpad

 2               Go to the app                     Create PM Notification – IW21


Upon executing Transaction Code IW21, the initial screen will appear as shown below:




                                                                                          Page | 4
Field Entry Guidelines
  Ser.    Field                  Req./Opt.         Field Entry
   1      Notification                R            Select the appropriate notification type for a
          Type                                     Corrective    Maintenance      Request.      Use     the
                                                   dropdown list or press F4 for help.


After selecting the notification type, press the Enter key.

    2.1. Create PM Notification: Corrective Maintenance

On the next screen:
    1. Enter the Equipment Number or Functional Location of the plant.
    2. Click the structure icon       (located to the right of the Functional Location field).
    3. A hierarchical structure list of the top-level Functional Location will appear.
    4. Expand the list to navigate to the specific equipment where the corrective work is
         required.
    5. Double-click on the desired equipment. The exact Functional Location and Equipment
         Number will automatically populate the Reference Object fields in the Notification
         Header.
This ensures that the notification is accurately linked to the correct asset, which is essential
for tracking maintenance history and planning future activities.




                                                                                             Page | 5
         If the Equipment Number is known, it can be entered directly into the Equipment
         field. Alternatively, if the Equipment Number is not known, use the F4 Help on the
         Equipment field. In the selection option "Equipment by Equipment List", apply
         appropriate selection criteria such as: Equipment Description, Equipment Category,
         Plant, Functional Location, Plant Section, Planner Group, etc.


Click on enter and enter the following details as shown below.

 Ser. Field                       Req./Opt. Field Entry
  1    Notification description       R        Briefly describe the issue or request.

  2    Functional location            R        Enter the related technical location.
  3    Equipment                      R        Enter the equipment number.
  4    Reported by                    O        Name of the person reporting.
  5    Priority                       O        Select urgency level from the list.
  6    Required start date            O        Enter the preferred/required start date.


                                                                                          Page | 6
Scroll down and enter the Reason Code. If needed, add details in the Subject Long Text field
as shown below:




Once a priority is selected, the system will prompt you to enter the required start and end
dates based on the priority definition. Click "Yes" to proceed with entering the dates and
times. Fields such as Damage and Cause are optional in a Corrective Maintenance
Notification. Scroll down to select the appropriate Catalog Codes, if needed. After entering all
required and relevant details, click Save.
The system will then generate a Notification Number, confirming successful creation.




   2.2. Notification list display

To display maintenance notifications in SAP, users typically use transaction code IW28. Users
enter the appropriate selection criteria and execute the report to generate a list of notifications.
This list can then be used for tracking, reviewing, or updating maintenance activities.




                                                                                            Page | 7
 Steps             Definition          Instructions

  1               Log in                Log In to SAP FIORI Launchpad

 2                Go to the app        Change PM Notification – IW22, IW28

Proceed by running transaction code IW28 to access the notification list display.




Once you are in the transaction, you can enter selection criteria to filter the notifications.




                                                                                            Page | 8
Fill in the relevant fields, such as notification type and notification status Scroll down the
screen to provide additional selection values, including the main work center and planner
group (Maintenance department), or choose from the available drop-down lists. Enter all
necessary data in the input screen to display the notification list in Change mode.

  Ser.   Field                      Req./Opt.    Field Entry
   1     Outstanding, Postponed         R        Check this status indicator – Outstanding, Postponed
         & In process                            & In process
   2     Notification date              R        Default from and to dates will appear with to date as
         (From & To)                             today’s date. Change them if require.

   3     Notification type              R        Should include Notification type.
   4     Status included                R        Enter the value as OSNO for selection. The system
                                                 selects only those PM notifications which have this
                                                 status and which also fulfill all the other selection
                                                 criteria you have entered.
   5     Plant                          R        Enter your plant code or select from dropdown list.


Once you have entered the required details, click the Execute button              at the top left of the
screen to display the list of notifications. The system will then show all the notifications that
match the selection criteria you provided.




Click on the notification number to open the notification in Change mode.
   •     A user-specific selection variant can be saved after entering the required selection
         inputs. This allows the selection criteria to be automatically defaulted each time the
         user runs transaction IW28.
   •     Similarly, a user-specific layout variant for the notification list can be saved after
         adjusting the columns and their sequence. This ensures the preferred layout is applied
         by default whenever the user executes transaction IW28.
Once the notification is opened, the screen titled Change PM Notification: General
Maintenance will be displayed. The Maintenance Department should review the notification
data, such as the Planner Group, Maintenance Work Center, and Job Priority. If any changes



                                                                                                 Page | 9
are needed, they should be made accordingly. If no changes are required, the notification
should be marked as In Process (Released).




Now, click the              button at the top left of the screen to set the notification In Process,
as shown in the screen above.
Once the notification is put in process, its status will change from OSNO (Outstanding
Notification) to NOPR (Notification In Process).

3. Creation of Corrective Maintenance Order
After the notification is released, if materials or external services (e.g., contractual jobs) are
required to carry out the maintenance, the Maintenance Department will proceed with
planning. This includes specifying external services, materials, and other resources. To act
upon the notification, a Maintenance Order is then created.
An order can be created directly from the notification screen. To do this, click the Create

Order button      (as shown in the screenshot below).




                                                                                           Page | 10
A pop-up window will appear, where fields such as Order Type, Plant, and Work Center are
automatically defaulted.

Press Enter or click Continue      to proceed.




Press the Enter key. The Create Corrective Maintenance Order: Central Header screen
will open. Relevant data from the notification - such as the Order Short Text, Planner
Group, Maintenance Work Center, and Reference Object - will be automatically copied
into the order. If any changes are needed, they can be made at this stage.




                                                                                    Page | 11
    3.1. Resource Planning in Corrective Maintenance Order
Regarding the job planning, assign the operations in the order, which need to be carried out.
The first operation in the operations screen gets copied from the order header description as
default by the system. It can be replaced with some other operation text as required.
If any Task list is available to carry out the required job then operations of that Task list can
also be copied directly to the order using menu function: Extras > Task list selection > To
reference object task lists.

Go to Operations tab page by clicking on
In the Control Key field of the operation details, enter PM01 for internal operations or
PM03 for external services, where the tasks are performed by a contractor.




If an external service is required for any operation, select the corresponding external operation,
then click the External button            . In the Services tab, enter the necessary detail such as
Material Group, Recipient, Requisitioner, Service Activity Number, Quantity, Gross Price, and
Cost Element.




If a material is required for any of the operations, go to the Components screen by clicking on
the Components tab.


                                                                                          Page | 12
Enter the material code if known, or click the Select: Structure List button           if a
BOM (Bill of Materials) is maintained for the functional location or equipment. This will
display the BOM list, from which you can select the required material. Alternatively, use the
drop-down help to search for the material. Enter the required quantity as needed and press
Enter.




The system will then prompt you to assign the material to an operation. Either enter the
operation number directly or click the Operation List button to select the appropriate
operation.




                                                                                      Page | 13
For stock items, enter “L – Stock Item” in the Item Category (IC) field to issue the material
from the internal store. Enter the required quantity and press Enter—a reservation will be
created.

If the material needs to be procured externally, enter the material code (if known) or select it
using the drop-down help. Then, enter “N” in the Item Category field to create a Purchase
Requisition directly from the maintenance order. Enter the required quantity and press Enter.
The system will again prompt you to assign the material to an operation—either enter the
operation number or select it from the Operation List.




System will give a message in the message bar that your order saved as shown above.

   3.2. Releasing of Maintenance Order
A maintenance order must be released by an authorized maintenance person. Only after the
order is released can materials be withdrawn from the store using the Material Reservation
Number generated by the system for any stock materials assigned to the order. This step is
essential for starting the work at the site.
Additionally, if any external services are assigned in the order, the system will generate a
Purchase Requisition at the time of order release. This requisition may either reference an


                                                                                        Page | 14
existing contract or, in the absence of a contract, create a new service purchase requisition for
the required services.




Now click         button at application toolbar at top to release the order.
Now the order gets REL status by replacing CRTD, as shown below.




Click    button to check the system status on order, shown below:




                                                                                        Page | 15
Now click back button     .
   Materials cannot be withdrawn from the store for a maintenance order unless the order is
    released and has the system status REL. Always ensure that the order has been released
    before going to the store to collect materials. The system will display a message in the
    message bar confirming that your order has been saved, as shown above.System will
    give a message in the message bar that your order saved as shown above.

   3.3. Material withdrawal for the Maintenance Order:
If any spares are required before executing the actual work and stock of which is available in
the store, then the maintenance department will first withdraw that material from the store.
When the order will be released system will automatically check the availability of material (If
assigned in the order) in the store and generate a Reservation no. for that material(s), against




                                                                                         Page | 16
which that material can be drawn from the store. To get that reservation no., open Component
tab of your order and note the Reservation number as shown below:




Now the maintenance person will go to store with the printed Material Requisition Slip (if
required and if defined in MM module process), duly signed by authorized person from his
department and draw the material.



           Materials cannot be withdrawn from stores for the order unless it is released and has
           got the status REL. Always check before going to the store to draw the material that
           order has got released or not.


   3.4. Issue of Materials From the Store
If any materials have been assigned to any operations in the order, with stock available in
store then store person will issue that materials against the order with reference to the
reservation no. generated for the order.
       •     The maintenance person will go to store for picking the materials against order
             no./Reservation number.
       •     Store person will run goods movement transaction MIGO in SAP MM module,
             enter the Reservation no./Order no. & execute the goods issue in the system. This
             will result in posting of Material document with following system message



                                                                                            Page | 17
       •    Then store person will physically issue the materials to the maintenance person.
       •    Also if any materials have been assigned to any operations in the order, with Non
            stock materials then the purchased requisition and purchase order will be done and
            the store person

                                              will make Goods Receipt and physically receive
the materials and issue to maintenance person.

           When the material gets issued from the store against Maintenance order, the order
           gets a new status GMPS (Goods movement posted) as shown below. The Actual cost
           of Materials is also updated in the Costs tab as shown below.




Click on Save button           in the standard toolbar at top of the screen to save the order.




                                                                                          Page | 18
     3.5. Time Confirmation of Maintenance Order Operations
The actual time consumed for each operation in a work order is known only after the work has
been executed at the site. Once the work is completed, time confirmation for internal
operations can be entered in the system to record how much time was spent on each task. This
helps improve planning accuracy by comparing the planned work time in the order with the
actual time confirmed.
To enter time confirmation, run transaction IW41 and enter the order number as shown below.

Steps      Definition                        Instructions                                           Steps

 1        Log in                             Log In To SAP FIORI Launchpad

2         Go to the app                     Time Confirmation – IW41




On the initial screen, enter the order no. as shown above. Press “Enter .
PM Order Confirmation: Operation Overview screen will open.

         You can do the time confirmation only for internal operations (with Control key
         PM01) and not for external operations (with Control key PM03).

Select the operations for which you want to confirm the time by clicking on the line, then click

the 'Actual Data' button.




                                                                                        Page | 19
Press Enter and enter the following details.
  Ser.   Field                            Req./Opt.   Field Entry
   1     Personnel no                          O      Enter the person number
   2     Actual work                           R      Enter the actual hours
   3     Work start date                       O      Actual start date
   4     Work end date                         O      Actual end date

   5     Actual duration                       O      Enter the actual duration
   6     Final confirmation                    R      Once the work is finished need to select the
                                                      check box
   7     No Remaining work                     R      If there is not remaining work pending, then
                                                      select this check box
   8     Clear Open Reservation                R      Clear all open reservation



Click the right button        to open the detail screen for the next selected operation, if
available. Enter the personnel number of the person who performed the job, along with the
actual time details for executing the operation. (The system will default to the planned time
from the order.) Then, click 'Final Confirmation', select 'No Remaining Work', clear open




                                                                                              Page | 20
reservations, and proceed to the next operation on the following screen. Repeat this process
until you reach the last operation.

Click Save        button to save the confirmation.



The system will display a message in the message bar indicating that your confirmations have
been saved, as shown above. This confirms that the operations for the order have been
successfully recorded.

         After all the confirmable operations of Order are confirmed, the order gets status
         CNF (confirmed) as shown below.




Next go to Items tab to maintain the technical findings. Update the Damage and Couses in
the Damage page, if any, by selecting its code from the dropdown help.




                                                                                      Page | 21
    3.6. Maintenance Order: Technical Completion
Maintenance Department will technically complete the order.
For technical completion, open the order in change mode as described above.




button, After order completion flag is clicked system gives a pop-
up screen asking the reference date and time, as shown below. If you want to change that time or date
you can change it otherwise system will take today’s date and time as default.




                                                                                             Page | 22
Order will get new status TECO (Technically completed) by replacing previous status REL
(Released) as shown below. This means that order is technically complete now. The Order
and all its field becomes grey (display mode) and cannot be edited since after Order
completion, no changes are allowed in the order except actual cost updating by other
processes e.g. vendor payment for external services consumed, by Finance and Order
closing (business completion).




Now the order is technically complete in all respects from maintenance side.
Cost Settlement of the Maintenance Order By Finance Dept.
    • The actual cost of resources consumption (materials and external services) for
   Maintenance order is loaded on order itself as and when resources are consumed during
   order processing cycle.
    • At the month end finance department settles the actual cost of all the maintenance
   orders which are technically completed to the respective cost centers.
    • After the settlement, the actual cost of the order is transferred to the cost center.
    • After the order cost settlement activity, the order is marked as "Business Completed"
   and receives the status "CLSD" (Closed). At this point, the Accounting Team takes over
T-Codes for PM

 T-Code                    Description


                                                                                         Page | 23
 IW21                 Create PM Notification

 IW22                 Change PM Notification

 IW23                 Display PM Notification

 IW31                 Create PM Order

 IW32                 Change PM Order

 IW33                 Display PM Order

 IW34                 Create Notification Order

 IW41                 PM Order Confirmation

 IW42                 Overall Completion Confirmation

 IW43                 Display PM Order Confirmation

 IW45                 Cancel PM Order Confirmation
T-Codes Reports

 T-Code           Description

 IW38             PM Order List Change

 IW39             PM Order List Display

 IW47             Display PM Order Confirmation using Operation List

 IW28             PM Notification List Change

 IW29             PM Notification List Display

 MM60             Materials List

 MMBE             Display Material Stock Overview




                                                                       Page | 24
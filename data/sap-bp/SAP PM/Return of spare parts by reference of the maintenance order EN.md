# Return of spare parts by reference of the maintenance order EN

: Date
                                                                                                                                                                               11.01.2025


                                                     Return of spare parts by reference of
                                                           the maintenance order
  Steps
1 Introduction ............................................................................................................................................................................................... 2
2 Steps .......................................................................................................................................................................................................... 2
Update of the maintenance order for the return process ...................................................................................................................... 2
.Objective ...................................................................................................................................................................................................... 2




                                                                                                                                                                                                                1
1 Introduction

The purpose of this is to:
       1-      The purpose of the return of a spare part issued by reference to a maintenance order is to address cases in which a
       part has been disbursed and has not been actually used, in order to achieve the following:
       2-     Reverse the depreciation recorded on the maintenance order.
       3-     Correcting the costs charged on the maintenance order and cost center.
       4-     Maintain accurate accounting and operational records.
       5-     Allow the item to be reused if it is in good condition.
       6-     Prevent maintenance order closure with incorrect or unused costs.
       7-     This process is a necessary systemic procedure to ensure the integrity of data and the accuracy of reports in the SAP
       system.


2 Steps Modifying the maintenance order to make a return for a spare part


Objective

The process of returning a spare part issued with a reference to a maintenance order is the treatment of cases where a part is
disbursed and not actually used or a quantity has been disbursed by mistake

2.2.2 Implementation Procedures

     Comments         Outputs                          Instructions                                     Definition           Steps

                                                         Maintenance Planner SAP FIORI Launchpad         Log in                   1
                                                                        Login to
                                                       Open the IW38/IW32 Change Maintenance             Go to App                2
                                                       Order app



                                                                                                                                      2
The code of the Spare part in which the             In     the    Edit   3
quantity is to be recovered is added with the       maintenance
quantity specified by minus (-) then a save is       order screen
made for the maintenance order, the item is
selected and the item no. with a double click to
extract the store reservation number and print
it or deliver it to the storekeeper or specialist




                                                                             3
4
2 Steps for a Storekeeper


 Upon receipt of the store reservation number for the return process, the maintenance specialist prints it or sends the storage
reservation number to the storekeeper or specialist with the spare parts to be retrieved



Objective

Return the quantity by reference of the warehouse reservation number that was created by the reference of the maintenance
order for the return process



2.2.2 Implementation Procedures

   Comments        Outputs                            Instructions                                     Definition           Steps

                                                        Maintenance Planner SAP FIORI Launchpad        Log in                     1
                                                                       Login to
                                                      Open the MIGO app                                 Go to App                 2




                                                                                                                                      5
Add the warehouse reservation number, select
                                                    The return screen
the type of transaction Goods Receipt, and the                          3
                                                    opens
return process for the quantity is done




After the return process, the pre-paid value will
be deducted from the maintenance order and           Results            4
the cost center.

                                                                            6
7
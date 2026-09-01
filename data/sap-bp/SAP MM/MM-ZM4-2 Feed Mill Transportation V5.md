# MM-ZM4-2 Feed Mill Transportation V5

| MM-ZM4-2 feedmill transportation (feedbulker) |
| --- |

## Process Description

The execution of feed transfers to live operation farms via stock transport orders has more control and processing options.

With the help of the delivery date specified in the stock transport order, you can plan stock transfers exactly by the live operation department. Besides, monitor the stock in transit and print the order out to be the reference to the complete process.

In addition, you have the option of entering the shipping data, which is mandatory like driver number and Truck number in the delivery generated from the Stock transport order.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | The quantity requested from live operations departments like Commercial layer, broiler and parent is the input for the schedule of the feed production and the feed bulker department to schedule the trips and drivers for the transportation process | S | H |
| 02 | The transfer posting valuated at the valuation price of the material in the issuing plant. | S | H |
| 03 | Monitor the Stock in transit between plants to manage the transfer process | S | H |
| 04 | Calculating the trips incentive amount per drivers on daily and monthly basis. | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Request for transfer from Live operation departments |
| **Process Input** | Stock transport Order |
| **Process Output** | Material Document at the receiving Plant |
| **Process Owner** | Live Operation / Feed Mill / Light Transportation departments |
| **Process Volumes** | 150 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 1 | Create Stock transport Order | ME21N |  | Live Operation Coordinator |
| 2 | Create Outbound Delivery | VL10D |  | Transportation Coordinator |
| 3 | Assign Shipping Data Truck/Driver | VL06G VL02N |  | Transportation Coordinator |
| 4 | Print Deliveries | VL71 |  | Transportation Coordinator |
| 5 | Delivery Goods Issue | VL02N |  | Feed Mill Stock Keeper |
| 6 | Monitor Stock in transit | MB5T |  | Farm Responsible - Accountant |
| 7 | Receive Delivery | MIGO |  | Farm Responsible |
| 8 | Run Incentive Report | YMM_TA |  | Accountant |
|  |  |  |  |  |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 02 | MMBE | Stock Overview | X |  |
| 03 | MB5T | Stock in transit CC | X |  |
| 04 | ME2W | Purchase Orders for Supplying Plant | X |  |
| 05 | VL06G | Deliveries for Goods Issue | X |  |
| 06 | YMM_DLV | Delivery Report | X |  |
| 07 | YMM_TA | Feed Transport Drivers Incentive | X |  |
| 08 | ZTM3 | Feed Mill Trip Allowance Schema | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Head office , Feed Mill Locations and Farms | 50 | MM Key user |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

- Every delivery must be filled with 

- Driver (employee Number ) Partner Function **Z2**** (Employee Number)**

- Truck number  Partner Function 	**Z1** **(Contact Person Assigned to the Plant Customer )**

- Every delivery Must Be Printed with the Driver Code and Name and Truck number

- Calculation of incentive for the driver based on the following data:

- Delivery date

- Feed Mill Issuing area

- Receiving Farm

- Trip Counter

- The Trip coordinator must make sure all the deliveries issued at the planned date, if not to delete the delivery not issued and recreate it for the new Delivery date or change the current one with the updated delivery date.

- All Quantities issued by the feed mill must be received at the farms sites no quantities difference allowed on the system.

- Changing at the rates of the allowance for the trips is the finance department authority by transaction ZTM1.

- Running the incentive report monthly run by Finance department monthly and sent to Trips Coordinator to review and confirm to start the HR and Finance Payment.

- Running the inventive report monthly must be making sure all deliveries completed by report YMM_DLV

- Planner Has the option to exclude some trips from the calculation of the incentive by entering tap “X” at the filed External Identification of Delivery Note (LIKP-LIFEX)at the delivery header on administration.

- All Trucks must be assigned to the receiving Plant Customer of the Live Operation Plants **(For Example P1250 Commercial Layer Laying )**

### AWP Feed bulker Incentive Calculation:

Calculating the drivers’ incentives for transporting the daily feed to the farms is applied based on the company, so that each trip number has a specified amount by the company, and all the incentive amounts are collected at the end of each month per driver based on the number of daily trips.

**Calculation parameters **

**Data from the STO:**

- Supplying Plant 	- Feed Mill

- Purchase group	- Farms

- Receiving Plant	- Department like (Broiler, Laying)

- Receiving Storage Locations	- Houses 

**Data From Delivery document:**

- Delivery Date

- Issuing Storage Locations	- Feed mill WIPs

- Driver personnel number assigned to the header partner function Z2

- Truck Number Assigned to the header partner function Z1

Delivery type YNL3 is used for this scenario 

The incompleteness profile assigned to this Scenario is to check before Posting goods issue of the Delivery that the driver and Truck assigned to it.

**Below Z table is the pricing table used at the final calculation ****Tcode**** (ZTM3)**

- Equation based on Delivery date = Price.Trip1 + Price.Trip2 + Price.Trip3 + Price.Trip4 + Price.Trip5 + Price.Trip6 + Price.Trip7 + Price.Trip8 + in case if the driver has more than 8 trip in same day the incentive will be same price of the Trip.8

- Purchasing group that will be fill it on creation of STO represent the receiving location 

- Every delivery must be filled with 

- Driver (employee Number) Partner Function **Z2**** (Employee Number)**

- Truck number Partner Function 	**Z1** **(Contact Person Assigned to the Plant Customer)**

| **Purchasing group** |
| --- |
| **Purchasing**** ****group** | **Purchasing group Dec** |
| B01 | B-Butn8-01 |
| B02 | B-Butn8-11 |
| B03 | B-Butn8-02 |
| B04 | B-Butn8-03 |
| B05 | B-Butn8-04 |
| B06 | B-Butn8-10 |
| B07 | B-Butn8-09 |
| B08 | B-Butn8-08 |
| B09 | B-Butn8-05 |
| B10 | B-Butn8-06 |
| B11 | B-Butn8-07 |
| B12 | B-Butn9-01 |
| B13 | B-Butn9-02 |
| B14 | B-Butn9-03 |
| B15 | B-Butn9-04 |
| B16 | B-Butn9-05 |
| B17 | B-Butn1-01 |
| B18 | B-Butn1-02 |
| B19 | B-Butn1-08 |
| B20 | B-Butn1-03 |
| B21 | B-Butn1-04 |
| B22 | B-Butn1-05 |
| B23 | B-Butn1-06 |
| B24 | B-Butn1-07 |
| B25 | B-AP-01 |
| B26 | B-AP-02 |
| B27 | B-W1-Big-01 |
| B28 | B-W1-Big-02 |
| B29 | B-W1-Big-03 |
| B30 | B-W1-Big-04 |
| B31 | B-W1-Big-05 |
| B32 | B-W1-Big-06 |
| B33 | B-W1-Big-07 |
| B34 | B-W1-Big-08 |
| B35 | B-W1-Big-09 |
| B36 | B-W1-Big-10 |
| B37 | B-W1-Big-11 |
| B38 | B-W1-Big-12 |
| B39 | B-W1-Exp.-01 |
| B40 | B-W1-Mini-05 |
| B41 | B-W1-Mini-01 |
| B42 | B-W1-Mini-02 |
| B43 | B-W1-Mini-03 |
| B44 | B-W1-Mini-04 |
| B45 | B-W1-Mini-08 |
| B46 | B-W1-Mini-09 |
| B47 | B-W1-Mini-10 |
| B48 | B-W1-Mini-11 |
| B49 | B-W1-Mini-12 |
| B50 | B-W1-Mini-13 |
| B51 | B-W1-Mini-14 |
| B52 | B-W1-Mini-15 |
| B53 | B-Butn11-01 |
| B54 | B-Butn11-02 |
| B55 | B-Butn11-03 |
| B56 | B-Butn5-01 |
| B57 | B-Butn5-02 |
| B58 | B-W2-P1-04 |
| B59 | B-W2-P1-03 |
| B60 | B-W2-P1-02 |
| B61 | B-W2-P1-01 |
| B62 | B-W2-P1-05 |
| B63 | B-W2-P1-06 |
| B64 | B-W2-P1-10 |
| B65 | B-W2-P1-07 |
| B66 | B-W2-P1-08 |
| B67 | B-W2-P1-09 |
| B68 | B-W2-P1-11 |
| B69 | B-W2-P1-12 |
| B70 | B-W2-P3-13 |
| B71 | B-W2-P3-14 |
| B72 | B-W2-P3-22 |
| B73 | B-W2-P3-24 |
| B74 | B-W2-P3-26 |
| B75 | B-W2-P3-25 |
| B76 | B-W2-P3-23 |
| B77 | B-W2-P3-21 |
| B78 | B-W2-P2-16 |
| B79 | B-W2-P2-15 |
| B80 | B-W2-P2-17 |
| B81 | B-W2-P2-18 |
| B82 | B-W2-P2-20 |
| B83 | B-W2-P2-19 |
| B84 | B-Butn2-03 |
| B85 | B-Butn2-04 |
| B86 | B-Butn2-02 |
| B87 | B-Butn2-01 |
| B88 | B-Butn3-04 |
| B89 | B-Butn3-01 |
| B90 | B-Butn3-03 |
| B91 | B-Butn3-02 |
| B92 | B-Shmalia-01 |
| B93 | B-Shmalia-02 |
| B94 | B-Shmalia-03 |

| **Issuing Locations (Issuing Area)** |
| --- |
| **Location** | **Plant** | **Plant Dec** | **Storage location ** | **Storage location Dec** | **SAP Object (****Search term****1)** |
| WAT1 | 1120 | Feed Mill | 1123 | W1-WIP | WATANIA1 |
| WAT2 | 1120 | Feed Mill | 1128 | W2-FM3- WIP | WATANIA2 |
| WAT2 | 1120 | Feed Mill | 1129 | W2-FM6- WIP | WATANIA2 |
| WADI | 1120 | Feed Mill | 1133 | Wadi-FM4 - WIP. | WADI |

| **Receiving Locations (Purchasing Group)** |
| --- |
| **Location** | **Plant** | **Plant Dec** | **Pur.Grp**** ** | **Purchasing Group Dec** |
| BTN8 | 1200 | Broiler | B01 | B-Butn8-01 |
| BTN8 | 1200 | Broiler | B02 | B-Butn8-11 |
| BTN8 | 1200 | Broiler | B03 | B-Butn8-02 |
| BTN8 | 1200 | Broiler | B04 | B-Butn8-03 |
| BTN8 | 1200 | Broiler | B05 | B-Butn8-04 |
| BTN8 | 1200 | Broiler | B06 | B-Butn8-10 |
| BTN8 | 1200 | Broiler | B07 | B-Butn8-09 |
| BTN8 | 1200 | Broiler | B08 | B-Butn8-08 |
| BTN8 | 1200 | Broiler | B09 | B-Butn8-05 |
| BTN8 | 1200 | Broiler | B10 | B-Butn8-06 |
| BTN8 | 1200 | Broiler | B11 | B-Butn8-07 |
| BTN9 | 1200 | Broiler | B12 | B-Butn9-01 |
| BTN9 | 1200 | Broiler | B13 | B-Butn9-02 |
| BTN9 | 1200 | Broiler | B14 | B-Butn9-03 |
| BTN9 | 1200 | Broiler | B15 | B-Butn9-04 |
| BTN9 | 1200 | Broiler | B16 | B-Butn9-05 |
| BTN1 | 1200 | Broiler | B17 | B-Butn1-01 |
| BTN1 | 1200 | Broiler | B18 | B-Butn1-02 |
| BTN1 | 1200 | Broiler | B19 | B-Butn1-08 |
| BTN1 | 1200 | Broiler | B20 | B-Butn1-03 |
| BTN1 | 1200 | Broiler | B21 | B-Butn1-04 |
| BTN1 | 1200 | Broiler | B22 | B-Butn1-05 |
| BTN1 | 1200 | Broiler | B23 | B-Butn1-06 |
| BTN1 | 1200 | Broiler | B24 | B-Butn1-07 |
| WAT1 | 1200 | Broiler | B27 | B-W1-Big-01 |
| WAT1 | 1200 | Broiler | B28 | B-W1-Big-02 |
| WAT1 | 1200 | Broiler | B29 | B-W1-Big-03 |
| WAT1 | 1200 | Broiler | B30 | B-W1-Big-04 |
| WAT1 | 1200 | Broiler | B31 | B-W1-Big-05 |
| WAT1 | 1200 | Broiler | B32 | B-W1-Big-06 |
| WAT1 | 1200 | Broiler | B33 | B-W1-Big-07 |
| WAT1 | 1200 | Broiler | B34 | B-W1-Big-08 |
| WAT1 | 1200 | Broiler | B35 | B-W1-Big-09 |
| WAT1 | 1200 | Broiler | B36 | B-W1-Big-10 |
| WAT1 | 1200 | Broiler | B37 | B-W1-Big-11 |
| WAT1 | 1200 | Broiler | B38 | B-W1-Big-12 |
| WAT1 | 1200 | Broiler | B39 | B-W1-Exp.-01 |
| WAT1 | 1200 | Broiler | B40 | B-W1-Mini-05 |
| WAT1 | 1200 | Broiler | B41 | B-W1-Mini-01 |
| WAT1 | 1200 | Broiler | B42 | B-W1-Mini-02 |
| WAT1 | 1200 | Broiler | B43 | B-W1-Mini-03 |
| WAT1 | 1200 | Broiler | B44 | B-W1-Mini-04 |
| WAT1 | 1200 | Broiler | B45 | B-W1-Mini-08 |
| WAT1 | 1200 | Broiler | B46 | B-W1-Mini-09 |
| WAT1 | 1200 | Broiler | B47 | B-W1-Mini-10 |
| WAT1 | 1200 | Broiler | B48 | B-W1-Mini-11 |
| WAT1 | 1200 | Broiler | B49 | B-W1-Mini-12 |
| WAT1 | 1200 | Broiler | B50 | B-W1-Mini-13 |
| WAT1 | 1200 | Broiler | B51 | B-W1-Mini-14 |
| WAT1 | 1200 | Broiler | B52 | B-W1-Mini-15 |
| BTN11 | 1200 | Broiler | B53 | B-Butn11-01 |
| BTN11 | 1200 | Broiler | B54 | B-Butn11-02 |
| BTN11 | 1200 | Broiler | B55 | B-Butn11-03 |
| BTN5 | 1200 | Broiler | B56 | B-Butn5-01 |
| BTN5 | 1200 | Broiler | B57 | B-Butn5-02 |
| WAT2 | 1200 | Broiler | B58 | B-W2-P1-04 |
| WAT2 | 1200 | Broiler | B59 | B-W2-P1-03 |
| WAT2 | 1200 | Broiler | B60 | B-W2-P1-02 |
| WAT2 | 1200 | Broiler | B61 | B-W2-P1-01 |
| WAT2 | 1200 | Broiler | B62 | B-W2-P1-05 |
| WAT2 | 1200 | Broiler | B63 | B-W2-P1-06 |
| WAT2 | 1200 | Broiler | B64 | B-W2-P1-10 |
| WAT2 | 1200 | Broiler | B65 | B-W2-P1-07 |
| WAT2 | 1200 | Broiler | B66 | B-W2-P1-08 |
| WAT2 | 1200 | Broiler | B67 | B-W2-P1-09 |
| WAT2 | 1200 | Broiler | B68 | B-W2-P1-11 |
| WAT2 | 1200 | Broiler | B69 | B-W2-P1-12 |
| WAT2 | 1200 | Broiler | B70 | B-W2-P3-13 |
| WAT2 | 1200 | Broiler | B71 | B-W2-P3-14 |
| WAT2 | 1200 | Broiler | B72 | B-W2-P3-22 |
| WAT2 | 1200 | Broiler | B73 | B-W2-P3-24 |
| WAT2 | 1200 | Broiler | B74 | B-W2-P3-26 |
| WAT2 | 1200 | Broiler | B75 | B-W2-P3-25 |
| WAT2 | 1200 | Broiler | B76 | B-W2-P3-23 |
| WAT2 | 1200 | Broiler | B77 | B-W2-P3-21 |
| WAT2 | 1200 | Broiler | B78 | B-W2-P2-16 |
| WAT2 | 1200 | Broiler | B79 | B-W2-P2-15 |
| WAT2 | 1200 | Broiler | B80 | B-W2-P2-17 |
| WAT2 | 1200 | Broiler | B81 | B-W2-P2-18 |
| WAT2 | 1200 | Broiler | B82 | B-W2-P2-20 |
| WAT2 | 1200 | Broiler | B83 | B-W2-P2-19 |
| BTN2 | 1200 | Broiler | B84 | B-Butn2-03 |
| BTN2 | 1200 | Broiler | B85 | B-Butn2-04 |
| BTN2 | 1200 | Broiler | B86 | B-Butn2-02 |
| BTN2 | 1200 | Broiler | B87 | B-Butn2-01 |
| BTN3 | 1200 | Broiler | B88 | B-Butn3-04 |
| BTN3 | 1200 | Broiler | B89 | B-Butn3-01 |
| BTN3 | 1200 | Broiler | B90 | B-Butn3-03 |
| BTN3 | 1200 | Broiler | B91 | B-Butn3-02 |
| SHML | 1200 | Broiler | B92 | B-Shmalia-01 |
| SHML | 1200 | Broiler | B93 | B-Shmalia-02 |
| SHML | 1200 | Broiler | B94 | B-Shmalia-03 |
| Dulfa | 1220 | Parents - Laying | P01 | PL-Dulfa-F01 |
| Dulfa | 1220 | Parents - Laying | P02 | PL-Dulfa-F02 |
| Dulfa | 1220 | Parents - Laying | P03 | PL-Dulfa-F03 |
| Dulfa | 1220 | Parents - Laying | P04 | PL-Dulfa-F04 |
| Dulfa | 1220 | Parents - Laying | P05 | PL-Dulfa-F05 |
| Dulfa | 1220 | Parents - Laying | P06 | PL-Dulfa-F06 |
| Dulfa | 1220 | Parents - Laying | P07 | PL-Dulfa-F07 |
| Dulfa | 1220 | Parents - Laying | P08 | PL-Dulfa-F08 |
| Kubid | 1220 | Parents - Laying | P09 | PL-Kubid-F07 |
| Kubid | 1220 | Parents - Laying | P10 | PL-Kubid-F08 |
| Kubid | 1220 | Parents - Laying | P11 | PL-Kubid-F09 |
| Kubid | 1220 | Parents - Laying | P12 | PL-Kubid-F10 |
| Kubid | 1220 | Parents - Laying | P13 | PL-Kubid-F11 |
| Kubid | 1220 | Parents - Laying | P14 | PL-Kubid-F12 |
| Kubid | 1220 | Parents - Laying | P15 | PL-Kubid-F13 |
| Kubid | 1220 | Parents - Laying | P16 | PL-Kubid-F14 |
| Kubid | 1220 | Parents - Laying | P17 | PL-Kubid-F15 |
| Kubid | 1220 | Parents - Laying | P18 | PL-Kubid-F16 |
| Kubid | 1220 | Parents - Laying | P19 | PL-Kubid-F17 |
| Kubid | 1220 | Parents - Laying | P20 | PL-Kubid-F18 |
| Kubid | 1220 | Parents - Laying | P21 | PL-Kubid-F19 |
| Kubid | 1220 | Parents - Laying | P22 | PL-Kubid-F20 |
| Kubid | 1220 | Parents - Laying | P23 | PL-Kubid-F21 |
| Kubid | 1220 | Parents - Laying | P24 | PL-Kubid-F22 |
| Kubid | 1220 | Parents - Laying | P25 | PL-Kubid-F23 |
| Wadi | 1220 | Parents - Laying | P26 | PL-Wadi-F01 |
| Wadi | 1220 | Parents - Laying | P27 | PL-Wadi-F02 |
| Wadi | 1220 | Parents - Laying | P28 | PL-Wadi-F03 |
| Wadi | 1220 | Parents - Laying | P29 | PL-Wadi-F04 |
| Wadi | 1220 | Parents - Laying | P30 | PL-Wadi-F05 |
| Wadi | 1220 | Parents - Laying | P31 | PL-Wadi-F06 |
| Wadi | 1220 | Parents - Laying | P32 | PL-Wadi-F07 |
| Wadi | 1220 | Parents - Laying | P33 | PL-Wadi-F08 |
| Wadi | 1220 | Parents - Laying | P34 | PL-Wadi-F09 |
| Wadi | 1220 | Parents - Laying | P35 | PL-Wadi-F10 |
| Wadi | 1220 | Parents - Laying | P36 | PL-Wadi-F11 |
| Sheri | 1220 | Parents - Laying | P37 | PL-Sheri-F01 |
| Sheri | 1220 | Parents - Laying | P38 | PL-Sheri-F02 |
| Sheri | 1220 | Parents - Laying | P39 | PL-Sheri-F03 |
| Sheri | 1220 | Parents - Laying | P40 | PL-Sheri-F04 |
| Sheri | 1220 | Parents - Laying | P41 | PL-Sheri-F05 |
| Sheri | 1220 | Parents - Laying | P42 | PL-Sheri-F06 |
| Sheri | 1220 | Parents - Laying | P43 | PL-Sheri-F07 |
| Sheri | 1220 | Parents - Laying | P44 | PL-Sheri-F08 |
| Sheri | 1220 | Parents - Laying | P45 | PL-Sheri-F09 |
| Sheri | 1220 | Parents - Laying | P46 | PL-Sheri-F10 |
| Sheri | 1220 | Parents - Laying | P47 | PL-Sheri-F11 |
| Sheri | 1220 | Parents - Laying | P48 | PL-Sheri-F12 |
| Sheri | 1220 | Parents - Laying | P49 | PL-Sheri-F13 |
| Dulfa | 1220 | Parents - Laying | P50 | PL-Dulfa-F09 |
| Dulfa | 1230 | Parents - Rearing | R01 | PR-Dulfa-F01 |
| Dulfa | 1230 | Parents - Rearing | R02 | PR-Dulfa-F02 |
| Dulfa | 1230 | Parents - Rearing | R03 | PR-Dulfa-F03 |
| Dulfa | 1230 | Parents - Rearing | R04 | PR-Dulfa-F04 |
| Wadi | 1230 | Parents - Rearing | R05 | PR-Wadi-F01 |
| Wadi | 1230 | Parents - Rearing | R06 | PR-Wadi-F02 |
| Wadi | 1230 | Parents - Rearing | R07 | PR-Wadi-F03 |
| Wadi | 1230 | Parents - Rearing | R08 | PR-Wadi-F04 |
| Wadi | 1230 | Parents - Rearing | R09 | PR-Wadi-F05 |
| Wadi | 1230 | Parents - Rearing | R10 | PR-Wadi-F06 |
| Wadi | 1230 | Parents - Rearing | R11 | PR-Wadi-F07 |
| Sheri | 1230 | Parents - Rearing | R12 | PR-Sheri-F01 |
| Sheri | 1230 | Parents - Rearing | R13 | PR-Sheri-F02 |
| Sheri | 1230 | Parents - Rearing | R14 | PR-Sheri-F03 |
| Sheri | 1230 | Parents - Rearing | R15 | PR-Sheri-F04 |
| Sheri | 1230 | Parents - Rearing | R16 | PR-Sheri-F05 |
| Sheri | 1230 | Parents - Rearing | R17 | PR-Sheri-F06 |
| Sheri | 1230 | Parents - Rearing | R18 | PR-Sheri-F07 |
| Sheri | 1230 | Parents - Rearing | R19 | PR-Sheri-F08 |
| Sheri | 1230 | Parents - Rearing | R20 | PR-Sheri-F09 |
| Sheri | 1230 | Parents - Rearing | R21 | PR-Sheri-F10 |
| Sheri | 1230 | Parents - Rearing | R22 | PR-Sheri-F11 |
| Sheri | 1230 | Parents - Rearing | R23 | PR-Sheri-F12 |

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Stock in transit Empty Weekly | Close period Open items | Small or Zero |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Delivery Processing | LE-SHP-DL |
| 03 | Goods Issue | LE-SHP-GI |
| 04 | Inventory Management | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| E01 | Layer-Laying-F01 |
| E02 | Layer-Laying-F02 |
| H03 | Hatchery3 |
| H04 | Hatchery4 |
| H05 | Hatchery5 |
| H06 | Hatchery6 |
| H07 | Hatchery7 |
| H08 | Hatchery8 |
| L01 | Layer-Rearing-F01 |
| L02 | Layer-Rearing-F02 |

| **Plant** |
| --- |
| 1120 | Feed Mill |  |
| 1200 | Broiler |  |
| 1231 | Parents - Laying - Dulfa | Obsolete |
| 1232 | Parents - Laying - Wadi | Obsolete |
| 1233 | Parents - Laying - Kubid | Obsolete |
| 1234 | Parents - Laying - Shery | Obsolete |
| 1241 | Parents - Rearing - Dulfa | Obsolete |
| 1242 | Parents - Rearing - Wadi | Obsolete |
| 1244 | Parents - Rearing - Shery | Obsolete |
| 1250 | C Layer - Laying |  |
| 1260 | C Layer - Rearing |  |
| 1220 | Parents - Laying |  |
| 1230 | Parents - Rearing |  |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| Plants Customer Master Data |
| Trucks Master Data |
| Employee Master Data (Driver) |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| ZZ04 | Live Operation STO | 7700000000 | 7799999999 | 010 |
| **Delivery ****Types** |
| **Type** | **Description** | **Number Range** | **Item Interval** |
|  |  | **From** | **To** |  |
| YNL3 | Feed STO Delivery | 0730000000 | 0739999999 | 010 |

| **Define Shipping Data for Plants** |
| --- |
| **Plant** | **Customer Plant** | **Sales Org. ** | **Distribution Channel** | **Division** |
| 1200 | Broiler | P1200 | 1000 | 20 | 00 |
| 1231 | Parents - Laying - Dulfa | P1231 | 1000 | 20 | 00 |
| 1232 | Parents - Laying - Wadi | P1232 | 1000 | 20 | 00 |
| 1233 | Parents - Laying - Kubid | P1233 | 1000 | 20 | 00 |
| 1234 | Parents - Laying - Shery | P1234 | 1000 | 20 | 00 |
| 1241 | Parents - Rearing - Dulfa | P1241 | 1000 | 20 | 00 |
| 1242 | Parents - Rearing - Wadi | P1242 | 1000 | 20 | 00 |
| 1244 | Parents - Rearing - Shery | P1244 | 1000 | 20 | 00 |
| 1250 | C Layer - Laying | P1250 | 1000 | 20 | 00 |
| 1220 | Parents - Laying | P1220 | 1000 | 20 | 00 |
| 1230 | Parents - Rearing | P1230 | 1000 | 20 | 00 |
| 1260 | C Layer - Rearing | P1260 | 1000 | 20 | 00 |

| **Assign Delivery Type and Checking Rule** |
| --- |
| **Document Type** | **Supplying Plant** | **Delivery Type** |
| ZZ04 | 1120 | Feed Mill | YNL3 |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-ZM4-2 | Form | Feed Mill Delivery | ZMM_FARMS_FEEDING |
| R-MM-ZM4 | Report | Feed Transport Drivers Incentive | YMM_TM1 |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Role** | **Description** |
| 1 | YMM_SHP_OUT_DLV_SHPT_1120 | MM: Shipping Specialist Process Outbound Deliveries Feed Mill |
| 2 | YMM_STK_KPR_1120_1121 | MM: Stock Keeper F. Additive W1 |
| 3 | YMM_STK_KPR_1120_1123 | MM: Stock Keeper FM W1- WIP |
| 4 | YMM_STK_KPR_1120_1128 | MM: Stock Keeper FM3 W2- WIP |
| 5 | YMM_STK_KPR_1120_1129 | MM: Stock Keeper FM6 W2- WIP |
| 6 | YMM_STK_MGR_1120_1128 | MM: Inventory Supervisor W2-FM3- WIP |
| 7 | YMM_STK_MGR_1120_1129 | MM: Inventory Supervisor W2-FM6- WIP |
| 8 | YMM_STK_MGR_1120_1133 | MM: Inventory Supervisor Wadi-FM4 - WIP |
| 9 | YMM_STK_MGR_1120_1134 | MM: Inventory Supervisor Wadi-FM5 - WIP |
| 10 | YMM_STO_1250_ZZ04_E01 | MM: Stock Transport Order Requester C Layer - Laying - Farm 01 |
| 11 | YMM_STO_1250_ZZ04_E02 | MM: Stock Transport Order Requester C Layer - Laying - Farm 02 |
| 12 | YMM_STO_1260_ZZ04_L01 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 01 |
| 13 | YMM_STO_1260_ZZ04_L02 | MM: Stock Transport Order Requester C Layer - Rearing - Farm 02 |
| 14 | YMM_STO_REPORT_ALL_ZZ04 | MM: Stock Transport Order Reports All Plants Live Operation STO |
| 15 | YMM_STK_KPR_1250_LL01 | MM: Stock Keeper C Layer F01 |
| 16 | YMM_STK_KPR_1250_LL02 | MM: Stock Keeper C Layer F02 |
| 17 | YMM_STK_KPR_1260_LR01 | MM: Stock Keeper C Layer - Rearing Farm 01 |
| 18 | YMM_STK_KPR_1260_LR02 | MM: Stock Keeper C Layer - Rearing Farm 02 |
|  | YMM_STK_KPR_1200_BCT1 | MM: Stock Keeper Broiler BCT S.Loc |
|  | YMM_STK_KPR_1200_BTN1 | MM: Stock Keeper Broiler- Site Butain1 |
|  | YMM_STK_KPR_1200_BTN11 | MM: Stock Keeper Broiler- Site Butain11 |
|  | YMM_STK_KPR_1200_BTN2 | MM: Stock Keeper Broiler- Site Butain2 |
|  | YMM_STK_KPR_1200_BTN3 | MM: Stock Keeper Broiler- Site Butain3 |
|  | YMM_STK_KPR_1200_BTN5 | MM: Stock Keeper Broiler- Site Butain5 |
|  | YMM_STK_KPR_1200_BTN8 | MM: Stock Keeper Broiler- Site Butain 8 |
|  | YMM_STK_KPR_1200_BTN9 | MM: Stock Keeper Broiler- Site Butain 9 |
|  | YMM_STK_KPR_1200_M001 | MM: Stock Keeper Broiler C. Main. Store |
|  | YMM_STK_KPR_1200_SHML | MM: Stock Keeper Broiler- Site Shmalia |
|  | YMM_STK_KPR_1200_TR_311 | MM: Stock Keeper Boriler Transfer posting 311 |
|  | YMM_STK_KPR_1200_WAT1 | MM: Stock Keeper Broiler- Site Watania 1 |
|  | YMM_STK_KPR_1200_WAT2 | MM: Stock Keeper Broiler- Site Watania 2 |
|  | YMM_STK_MGR_1200 | MM: Inventory Supervisor Broiler |
|  | YMM_STO_1200_ZZ01_BTN1 | MM: Stock Transport Order Requester Broiler Site Butain 1 |
|  | YMM_STO_1200_ZZ01_BTN11 | MM: Stock Transport Order Requester Broiler Site Butain 11 |
|  | YMM_STO_1200_ZZ01_BTN2 | MM: Stock Transport Order Requester Broiler Site Butain 2 |
|  | YMM_STO_1200_ZZ01_BTN3 | MM: Stock Transport Order Requester Broiler Site Butain 3 |
|  | YMM_STO_1200_ZZ01_BTN5 | MM: Stock Transport Order Requester Broiler Site Butain 5 |
|  | YMM_STO_1200_ZZ01_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 |
|  | YMM_STO_1200_ZZ01_BTN9 | MM: Stock Transport Order Requester Broiler Site Butain 9 |
|  | YMM_STO_1200_ZZ01_SHML | MM: Stock Transport Order Requester Broiler Site Shmalia |
|  | YMM_STO_1200_ZZ01_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 |
|  | YMM_STO_1200_ZZ01_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 |
|  | YMM_STO_1200_ZZ02_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 |
|  | YMM_STO_1200_ZZ02_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 |
|  | YMM_STO_1200_ZZ02_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 |
|  | YMM_STO_1200_ZZ02_YL2 | MM: Stock Transport Order Requester Brolier PHD |
|  | YMM_STO_1200_ZZ04_BTN1 | MM: Stock Transport Order Requester Broiler Site Butain 1 |
|  | YMM_STO_1200_ZZ04_BTN11 | MM: Stock Transport Order Requester Broiler Site Butain 11 |
|  | YMM_STO_1200_ZZ04_BTN2 | MM: Stock Transport Order Requester Broiler Site Butain 2 |
|  | YMM_STO_1200_ZZ04_BTN3 | MM: Stock Transport Order Requester Broiler Site Butain 3 |
|  | YMM_STO_1200_ZZ04_BTN5 | MM: Stock Transport Order Requester Broiler Site Butain 5 |
|  | YMM_STO_1200_ZZ04_BTN8 | MM: Stock Transport Order Requester Broiler Site Butain 8 |
|  | YMM_STO_1200_ZZ04_BTN9 | MM: Stock Transport Order Requester Broiler Site Butain 9 |
|  | YMM_STO_1200_ZZ04_SHML | MM: Stock Transport Order Requester Broiler Site Shmalia |
|  | YMM_STO_1200_ZZ04_WAT1 | MM: Stock Transport Order Requester Broiler Site Watania 1 |
|  | YMM_STO_1200_ZZ04_WAT2 | MM: Stock Transport Order Requester Broiler Site Watania 2 |
|  | YMM_STO_REPORT_ZZ01_1200 | MM: Stock Transport Order Requester w/o Delivery2 |
|  | YMM_STO_REPORT_ZZ02_1200 | MM: Stock Transport Order Reports PHD Broiler |
|  | YMM_STO_REPORT_ZZ04_1200 | MM: Stock Transport Order Requester w/o Delivery2 |
|  | YMM_STOCK_REPORT_1200 | MM: Stock Report Broiler 1200 |
|  | YMM_STK_KPR_1220_BIO_ASSET | MM: Stock Keeper Parents - Laying  Bio_Asset Controller |
|  | YMM_STK_KPR_1220_DLFA | MM: Stock Keeper Parent- Site Dulfa Laying |
|  | YMM_STK_KPR_1220_KUBD | MM: Stock Keeper Parent- Site Kubid Laying |
|  | YMM_STK_KPR_1220_SHRI | MM: Stock Keeper Parent- Site Sherri Laying |
|  | YMM_STK_KPR_1220_WADI | MM: Stock Keeper Parent- Site Wadi Laying |
|  | YMM_STK_MGR_1220 | MM: Inventory Supervisor Parent Stock Laying |
|  | YMM_STO_1220_ZZ02_YL2 | MM: Stock Transport Order Requester Parent PHD |
|  | YMM_STO_1220_ZZ04_DLFA | MM: Stock Transport Order Requester Feed Parent Site Dulfa Laying |
|  | YMM_STO_1220_ZZ04_KUBD | MM: Stock Transport Order Requester Feed Parent Site Kubid Laying |
|  | YMM_STO_1220_ZZ04_SHRI | MM: Stock Transport Order Requester Feed Parent Site Sherri Laying |
|  | YMM_STO_1220_ZZ04_WADI | MM: Stock Transport Order Requester Feed Parent Site Wadi Laying |
|  | YMM_STO_REPORT_ZZ02_1220 | MM: Stock Transport Order Reports PHD Parent Laying |
|  | YMM_STO_REPORT_ZZ04_1220 | MM: Stock Transport Order Reports Feed Parent Laying |
|  | YMM_STOCK_REPORT_1220 | MM: Stock Report Parent Laying 1220 |
|  | YMM_STK_KPR_1230_DLFA | MM: Stock Keeper Parent - Site WADI |
|  | YMM_STK_KPR_1230_SHRI | MM: Stock Keeper Parent - Site SHRI |
|  | YMM_STK_KPR_1230_WADI | MM: Stock Keeper Parent - Site WADI |
|  | YMM_STK_MGR_1230 | MM: Inventory Supervisor Parent |
|  | YMM_STO_1230_ZZ02_DLFA | MM: Stock Transport Order Requester Parent Site Wadi Rearing |
|  | YMM_STO_1230_ZZ02_SHRI | MM: Stock Transport Order Requester Parent Site Sherri Rearing |
|  | YMM_STO_1230_ZZ02_WADI | MM: Stock Transport Order Requester Parent Site Wadi Rearing |
|  | YMM_STO_1230_ZZ02_YL2 | MM: Stock Transport Order Requester Parent PHD |
|  | YMM_STO_1230_ZZ04_DLFA | MM: Stock Transport Order Requester Feed Parent Site Dulfa Rearing |
|  | YMM_STO_1230_ZZ04_SHRI | MM: Stock Transport Order Requester Feed Parent Site Sherri Rearing |
|  | YMM_STO_1230_ZZ04_WADI | MM: Stock Transport Order Requester Feed Parent Site Wadi Rearing |
|  | YMM_STO_REPORT_ZZ02_1230 | MM: Stock Transport Order Reports PHD Parent Rearing |
|  | YMM_STO_REPORT_ZZ04_1230 | MM: Stock Transport Order Reports Feed Parent Rearing |
|  | YMM_STOCK_REPORT_1230 | MM: Stock Report Parent 1230 |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Live Operation Requester | MM Key User |
| Warehouse Clerks | MM Key User |
| Farms Responsible | Live Operation Key User |
| Feed Bulker Coordinator | MM Key User |

In end user training, we should collect different users into groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
|  | Page 2 of 8 |
# MM-60 Live Operations Logistics Operations V3

| MM-60: LIve operation logistics |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all material movements & cost related to every farm/house per cycle | S | H |
| 2 | Handle all material types movements to farms and houses | S | H |
| 3 | Have clear visibility for all houses planned and actual movement of materials | S | H |

### Business Process Description

In this process, the Department Planner/Farm Responsible/PHD responsible handle the process of requesting and receiving materials related to the live operations.

All materials will be issued against cost center from the farms and houses storage locations 

Except commercial layer and later other departments like Broiler and Parent once start working with PP/QM modules.

| Process Characteristics |
| --- |
| Process Trigger | New material requirement |
| Process Input | Stock Transport Order/Monthly Quota |
| Process Output | Material Document |
| Process Owner | Department Planner/Farm Responsible/PHD responsible |
| Process Volumes | Broiler: 1800 STO per month. Parent – 800 STO per month. Commercial Layer – 90 STO per month. Grandparent – 56 STO per month |
| Process Frequencies | Daily |

### Business Process Diagrams

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step ** | **T-Code** | **Process**** Step**** Des****cription** | **Business Role** |
| Trigger | New material requirement |  |  |  |
|  | ******** ****In case**** ****of **** "****Feed Request****" ****Scenario** | ** ** |  |  |
| 010 | Create STO for feed materials | ME21N | ZZ04 Doc type. Next week requirement of feed materials. 1 STO item per House per day. | Farm Responsible |
| 020 | Create Outbound Delivery | VL10D |  | Transportation Coordinator |
| 030 | Assign Shipping Data Truck/Driver | VL06G VL02N |  | Transportation Coordinator |
| 040 | Print Deliveries | VL71 |  | Transportation Coordinator |
| 050 | Delivery Goods Issue | VL02N |  | Stock Keeper |
| 060 | Feed STO Goods receipt | MIGO_GR | Goods receipt feed items House wise location for Layer Farm wise for grandparent. | Stock Keeper |
|  | **** In case of ****"Vaccination Request****" ****Scenario** | ** ** |  |  |
| 070 | Create STO for Vaccination materials | ME21N | ZZ02 Doc type. Request required Vaccination components from PHD central store plant to farm store loc. One STO per farm | PHD Responsible |
| 080 | Approval by PHD manager to STO | ME29N ME28 | Approval by PHD manager to STO | PHD Manager |
| 090 | Post Goods Issue to STO | MIGO_GI | Post Goods Issue to STO (Mvt 351) | Stock Keeper |
| 010 | Vaccination STO Goods receipt | MIGO_GR | Goods receipt in farm store location in case of broiler & layer & Grandparent.  Goods receipt in vaccine store location in case of parent.  (Mvt 101) | PHD Responsible |
|  | **** In case of "Medication Request****" ****Scenario** | ** ** |  |  |
| 011 | Create STO for Medication materials | ME21N | ZZ02 Doc type. Request required Medication components from PHD central store plant using STO to farm store loc. One STO per farm | PHD Responsible |
| 012 | Approval by PHD manager to STO | ME29N ME28 | Approval by PHD manager to STO | PHD Manager |
| 100 | Post Goods Issue to STO | MIGO_GI | Post Goods Issue to STO (Mvt 351) | Stock Keeper |
| 110 | Medication STO Goods receipt | MIGO_GR | Goods receipt medication items in farm store location. | Farm Responsible |
|  | **** In case of "Monthly Quota Request****" ****Scenario** | ** ** |  |  |
| 120 | Create Reservation for Monthly Quota materials | MB21 | Request required monthly quota materials from central store plant using reservation (Mvt 201) | Department Planner |
| 130 | Post Goods Issue to Reservation | MIGO_GI | Post Goods Issue to Reservation (Mvt 201) | Stock Keeper |
|  |  |  |  |  |
| Output | * Material Document |  |  |  |

### Reports

| Reports |
| --- |
| ID | Transaction | Description | GUI | Fiori |
| 01 | MB52 | List of Warehouse Stocks on Hand | X |  |
| 02 | MMBE | Stock Overview | X |  |
| 03 | MB5T | Stock in transit CC | X |  |
| 04 | ME2W | STOs By Supplying Plant | X |  |
| 05 | MB25 | Reservation List | X |  |
| 06 | MB51 | Material document list | X |  |
| 07 | MB5B | Stock on posting date | X |  |

### Locations where this Business Process is performed

| **Locations** |  |
| --- | --- |
| **Location** | **Number of Users** | **Point of Contact** | **Department** |
| Watania 1 – Main office | 13 | Broiler PHD Responsible | Broiler |
| Watania 1 – Main office | 7 | Parent PHD Responsible | Parent PHD |
| Watania 1 – Main office | 3 | Layer PHD Responsible | Layer |
| Parent - Laying – Dulfa | 1 | Parent – Laying PHD Responsible | Parent – Laying |
| Parent - Laying - Wadi | 1 | Parent – Laying PHD Responsible | Parent – Laying |
| Parent - Laying - Kubid | 1 | Parent – Laying PHD Responsible | Parent – Laying |
| Parent - Laying - Shery | 2 | Parent – Laying PHD Responsible | Parent – Laying |
| Parent - Rearing - Dulfa | 1 | Parent – Rearing PHD Responsible | Parent - Rearing |
| Parent - Rearing - Wadi | 2 | Parent – Rearing PHD Responsible | Parent - Rearing |
| Parent - Rearing - Shery | 2 | Parent – Rearing PHD Responsible | Parent - Rearing |
| Grand Parent – Jouf | 7 | GP Key user | Grand Parent |

### Operational Decisions or Logic within the Process

- Create stock transport orders for Feed, Vaccination and Medication materials

- Create reservation for Monthly Quota general materials   

### Legal Considerations and Company-Specific Policies

- Approval step to Vaccine/Medication STO by PHD manager

- Quota items requested on farm cost center monthly

### Reference to Key Process Changes and Process KPIs

- Vaccines materials with the same nature but different material codes should be unified in one code with UOM dose and alternative UOMs

- Vaccines could be unified under the scientific names and commercial name can be recorded in the batch data (for Ex. Paracetamol is the scientific name and  Panadol as commercial name)

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 |  |  |  |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 10 | Stock Transport Order | MM-PUR-PO |
| 20 | Release Stratagy | MM-PUR-PO |
| 30 | Batch management | LO-BM |
| 40 | Inventory Management | MM-IM |
| 50 | Reservation | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

- Implementing soft providing or any other vertical solution.

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1200 | Broiler Plant |  |
| 1231 | Parent - Laying - Dulfa | Obsolete |
| 1232 | Parent - Laying - Wadi | Obsolete |
| 1233 | Parent - Laying - Kubid | Obsolete |
| 1234 | Parent - Laying - Shery | Obsolete |
| 1241 | Parent - Rearing - Dulfa | Obsolete |
| 1242 | Parent - Rearing - Wadi | Obsolete |
| 1244 | Parent - Rearing - Shery | Obsolete |
| 1250 | Layer - Laying |  |
| 1260 | Layer - Rearing |  |
| 3010 | Grandparent – Central |  |
| 3100 | Grandparent – Hatchery |  |
| 3200 | Grandparent – Laying |  |
| 3300 | Grandparent – Rearing |  |
| 1230 | Parents - Rearing |  |
| 1220 | Parents - Laying |  |

| **Storage location** | **Plant** |
| --- | --- |
| G001 | GP General Items | 3010 |
| G003 | GP Qassim | 3010 |
| G004 | GP Common Feed | 3010 |
| Q085 | Supplier Returns | 3010 |
| GH01 | GP Hatchery 1 | 3100 |
| GL01 | GP-Laying-F01 | 3200 |
| GL02 | GP-Laying-F02 | 3200 |
| GL03 | GP-Laying-F03 | 3200 |
| GL04 | GP-Laying-F04 | 3200 |
| GL05 | GP-Laying-F05 | 3200 |
| GL06 | GP-Laying-F06 | 3200 |
| GL07 | GP-Laying-F07 | 3200 |
| GL08 | GP-Laying-F08 | 3200 |
| GR01 | GP-Rearing-F01 | 3300 |
| GR02 | GP-Rearing-F02 | 3300 |
| GR03 | GP-Rearing-F03 | 3300 |
| GR04 | GP-Rearing-F04 | 3300 |
| 0101 | GR01-01 | 3300 |
| 0102 | GR01-02 | 3300 |
| 0103 | GR01-03 | 3300 |
| 0201 | GR02-01 | 3300 |
| 0202 | GR02-02 | 3300 |
| 0203 | GR02-03 | 3300 |
| 0301 | GR03-01 | 3300 |
| 0302 | GR03-02 | 3300 |
| 0303 | GR03-03 | 3300 |
| 0401 | GR04-01 | 3300 |
| 0402 | GR04-02 | 3300 |
| 0403 | GR04-03 | 3300 |
| B001 | B-Butn8-01 | 1200 |
| B002 | B-Butn8-11 | 1200 |
| B003 | B-Butn8-02 | 1200 |
| B004 | B-Butn8-03 | 1200 |
| B005 | B-Butn8-04 | 1200 |
| B006 | B-Butn8-10 | 1200 |
| B007 | B-Butn8-09 | 1200 |
| B008 | B-Butn8-08 | 1200 |
| B009 | B-Butn8-05 | 1200 |
| B010 | B-Butn8-06 | 1200 |
| B011 | B-Butn8-07 | 1200 |
| B012 | B-Butn9-01 | 1200 |
| B013 | B-Butn9-02 | 1200 |
| B014 | B-Butn9-03 | 1200 |
| B015 | B-Butn9-04 | 1200 |
| B016 | B-Butn9-05 | 1200 |
| B017 | B-Butn1-01 | 1200 |
| B018 | B-Butn1-02 | 1200 |
| B019 | B-Butn1-08 | 1200 |
| B020 | B-Butn1-03 | 1200 |
| B021 | B-Butn1-04 | 1200 |
| B022 | B-Butn1-05 | 1200 |
| B023 | B-Butn1-06 | 1200 |
| B024 | B-Butn1-07 | 1200 |
| B025 | B-AP-01 | 1200 |
| B026 | B-AP-02 | 1200 |
| B027 | B-W1-Big-01 | 1200 |
| B028 | B-W1-Big-02 | 1200 |
| B029 | B-W1-Big-03 | 1200 |
| B030 | B-W1-Big-04 | 1200 |
| B031 | B-W1-Big-05 | 1200 |
| B032 | B-W1-Big-06 | 1200 |
| B033 | B-W1-Big-07 | 1200 |
| B034 | B-W1-Big-08 | 1200 |
| B035 | B-W1-Big-09 | 1200 |
| B036 | B-W1-Big-10 | 1200 |
| B037 | B-W1-Big-11 | 1200 |
| B038 | B-W1-Big-12 | 1200 |
| B039 | B-W1-Exp.-01 | 1200 |
| B040 | B-W1-Mini-05 | 1200 |
| B041 | B-W1-Mini-01 | 1200 |
| B042 | B-W1-Mini-02 | 1200 |
| B043 | B-W1-Mini-03 | 1200 |
| B044 | B-W1-Mini-04 | 1200 |
| B045 | B-W1-Mini-08 | 1200 |
| B046 | B-W1-Mini-09 | 1200 |
| B047 | B-W1-Mini-10 | 1200 |
| B048 | B-W1-Mini-11 | 1200 |
| B049 | B-W1-Mini-12 | 1200 |
| B050 | B-W1-Mini-13 | 1200 |
| B051 | B-W1-Mini-14 | 1200 |
| B052 | B-W1-Mini-15 | 1200 |
| B053 | B-Butn11-01 | 1200 |
| B054 | B-Butn11-02 | 1200 |
| B055 | B-Butn11-03 | 1200 |
| B056 | B-Butn5-01 | 1200 |
| B057 | B-Butn5-02 | 1200 |
| B058 | B-W2-P1-04 | 1200 |
| B059 | B-W2-P1-03 | 1200 |
| B060 | B-W2-P1-02 | 1200 |
| B061 | B-W2-P1-01 | 1200 |
| B062 | B-W2-P1-05 | 1200 |
| B063 | B-W2-P1-06 | 1200 |
| B064 | B-W2-P1-10 | 1200 |
| B065 | B-W2-P1-07 | 1200 |
| B066 | B-W2-P1-08 | 1200 |
| B067 | B-W2-P1-09 | 1200 |
| B068 | B-W2-P1-11 | 1200 |
| B069 | B-W2-P1-12 | 1200 |
| B070 | B-W2-P3-13 | 1200 |
| B071 | B-W2-P3-14 | 1200 |
| B072 | B-W2-P3-22 | 1200 |
| B073 | B-W2-P3-24 | 1200 |
| B074 | B-W2-P3-26 | 1200 |
| B075 | B-W2-P3-25 | 1200 |
| B076 | B-W2-P3-23 | 1200 |
| B077 | B-W2-P3-21 | 1200 |
| B078 | B-W2-P2-16 | 1200 |
| B079 | B-W2-P2-15 | 1200 |
| B080 | B-W2-P2-17 | 1200 |
| B081 | B-W2-P2-18 | 1200 |
| B082 | B-W2-P2-20 | 1200 |
| B083 | B-W2-P2-19 | 1200 |
| B084 | B-Butn2-03 | 1200 |
| B085 | B-Butn2-04 | 1200 |
| B086 | B-Butn2-02 | 1200 |
| B087 | B-Butn2-01 | 1200 |
| B088 | B-Butn3-04 | 1200 |
| B089 | B-Butn3-01 | 1200 |
| B090 | B-Butn3-03 | 1200 |
| B091 | B-Butn3-02 | 1200 |
| B092 | B-Shmalia-01 | 1200 |
| B093 | B-Shmalia-02 | 1200 |
| B094 | B-Shmalia-03 | 1200 |
| PL01 | PL-Dulfa-F01 | 1220 |
| PL02 | PL-Dulfa-F02 | 1220 |
| PL03 | PL-Dulfa-F03 | 1220 |
| PL04 | PL-Dulfa-F04 | 1220 |
| PL05 | PL-Dulfa-F05 | 1220 |
| PL06 | PL-Dulfa-F06 | 1220 |
| PL07 | PL-Dulfa-F07 | 1220 |
| PL08 | PL-Dulfa-F08 | 1220 |
| PL09 | PL-Kubid-F07 | 1220 |
| PL10 | PL-Kubid-F08 | 1220 |
| PL11 | PL-Kubid-F09 | 1220 |
| PL12 | PL-Kubid-F10 | 1220 |
| PL13 | PL-Kubid-F11 | 1220 |
| PL14 | PL-Kubid-F12 | 1220 |
| PL15 | PL-Kubid-F13 | 1220 |
| PL16 | PL-Kubid-F14 | 1220 |
| PL17 | PL-Kubid-F15 | 1220 |
| PL18 | PL-Kubid-F16 | 1220 |
| PL19 | PL-Kubid-F17 | 1220 |
| PL20 | PL-Kubid-F18 | 1220 |
| PL21 | PL-Kubid-F19 | 1220 |
| PL22 | PL-Kubid-F20 | 1220 |
| PL23 | PL-Kubid-F21 | 1220 |
| PL24 | PL-Kubid-F22 | 1220 |
| PL25 | PL-Kubid-F23 | 1220 |
| PL26 | PL-Wadi-F01 | 1220 |
| PL27 | PL-Wadi-F02 | 1220 |
| PL28 | PL-Wadi-F03 | 1220 |
| PL29 | PL-Wadi-F04 | 1220 |
| PL30 | PL-Wadi-F05 | 1220 |
| PL31 | PL-Wadi-F06 | 1220 |
| PL32 | PL-Wadi-F07 | 1220 |
| PL33 | PL-Wadi-F08 | 1220 |
| PL34 | PL-Wadi-F09 | 1220 |
| PL35 | PL-Wadi-F10 | 1220 |
| PL36 | PL-Wadi-F11 | 1220 |
| PL37 | PL-Sheri-F01 | 1220 |
| PL38 | PL-Sheri-F02 | 1220 |
| PL39 | PL-Sheri-F03 | 1220 |
| PL40 | PL-Sheri-F04 | 1220 |
| PL41 | PL-Sheri-F05 | 1220 |
| PL42 | PL-Sheri-F06 | 1220 |
| PL43 | PL-Sheri-F07 | 1220 |
| PL44 | PL-Sheri-F08 | 1220 |
| PL45 | PL-Sheri-F09 | 1220 |
| PL46 | PL-Sheri-F10 | 1220 |
| PL47 | PL-Sheri-F11 | 1220 |
| PL48 | PL-Sheri-F12 | 1220 |
| PL49 | PL-Sheri-F13 | 1220 |
| PL50 | PL-Dulfa-F09 | 1220 |
| PR01 | PR-Dulfa-F01 | 1230 |
| PR02 | PR-Dulfa-F02 | 1230 |
| PR03 | PR-Dulfa-F03 | 1230 |
| PR04 | PR-Dulfa-F04 | 1230 |
| PR05 | PR-Wadi-F01 | 1230 |
| PR06 | PR-Wadi-F02 | 1230 |
| PR07 | PR-Wadi-F03 | 1230 |
| PR08 | PR-Wadi-F04 | 1230 |
| PR09 | PR-Wadi-F05 | 1230 |
| PR10 | PR-Wadi-F06 | 1230 |
| PR11 | PR-Wadi-F07 | 1230 |
| PR12 | PR-Sheri-F01 | 1230 |
| PR13 | PR-Sheri-F02 | 1230 |
| PR14 | PR-Sheri-F03 | 1230 |
| PR15 | PR-Sheri-F04 | 1230 |
| PR16 | PR-Sheri-F05 | 1230 |
| PR17 | PR-Sheri-F06 | 1230 |
| PR18 | PR-Sheri-F07 | 1230 |
| PR19 | PR-Sheri-F08 | 1230 |
| PR20 | PR-Sheri-F09 | 1230 |
| PR21 | PR-Sheri-F10 | 1230 |
| PR22 | PR-Sheri-F11 | 1230 |
| PR23 | PR-Sheri-F12 | 1230 |

| **Purchasing Group** | **Description** |
| --- | --- |
| YL2 | PHD |
| M01 | GP-Rearing-F01 |
| M02 | GP-Rearing-F02 |
| M03 | GP-Rearing-F03 |
| M04 | GP-Rearing-F04 |
| G01 | GP-Laying-F01 |
| G02 | GP-Laying-F02 |
| G03 | GP-Laying-F03 |
| G04 | GP-Laying-F04 |
| G05 | GP-Laying-F05 |
| G06 | GP-Laying-F06 |
| G07 | GP-Laying-F07 |
| G08 | GP-Laying-F08 |
| K01 | GP-Hatchery |
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
| E01 | Layer-Laying-F01 |
| E02 | Layer-Laying-F02 |
| L01 | Layer-Rearing-F01 |
| L02 | Layer-Rearing-F02 |
| P01 | PL-Dulfa-F01 |
| P02 | PL-Dulfa-F02 |
| P03 | PL-Dulfa-F03 |
| P04 | PL-Dulfa-F04 |
| P05 | PL-Dulfa-F05 |
| P06 | PL-Dulfa-F06 |
| P07 | PL-Dulfa-F07 |
| P08 | PL-Dulfa-F08 |
| P09 | PL-Kubid-F07 |
| P10 | PL-Kubid-F08 |
| P11 | PL-Kubid-F09 |
| P12 | PL-Kubid-F10 |
| P13 | PL-Kubid-F11 |
| P14 | PL-Kubid-F12 |
| P15 | PL-Kubid-F13 |
| P16 | PL-Kubid-F14 |
| P17 | PL-Kubid-F15 |
| P18 | PL-Kubid-F16 |
| P19 | PL-Kubid-F17 |
| P20 | PL-Kubid-F18 |
| P21 | PL-Kubid-F19 |
| P22 | PL-Kubid-F20 |
| P23 | PL-Kubid-F21 |
| P24 | PL-Kubid-F22 |
| P25 | PL-Kubid-F23 |
| P26 | PL-Wadi-F01 |
| P27 | PL-Wadi-F02 |
| P28 | PL-Wadi-F03 |
| P29 | PL-Wadi-F04 |
| P30 | PL-Wadi-F05 |
| P31 | PL-Wadi-F06 |
| P32 | PL-Wadi-F07 |
| P33 | PL-Wadi-F08 |
| P34 | PL-Wadi-F09 |
| P35 | PL-Wadi-F10 |
| P36 | PL-Wadi-F11 |
| P37 | PL-Sheri-F01 |
| P38 | PL-Sheri-F02 |
| P39 | PL-Sheri-F03 |
| P40 | PL-Sheri-F04 |
| P41 | PL-Sheri-F05 |
| P42 | PL-Sheri-F06 |
| P43 | PL-Sheri-F07 |
| P44 | PL-Sheri-F08 |
| P45 | PL-Sheri-F09 |
| P46 | PL-Sheri-F10 |
| P47 | PL-Sheri-F11 |
| P48 | PL-Sheri-F12 |
| P49 | PL-Sheri-F13 |
| P50 | PL-Dulfa-F09 |
| R01 | PR-Dulfa-F01 |
| R02 | PR-Dulfa-F02 |
| R03 | PR-Dulfa-F03 |
| R04 | PR-Dulfa-F04 |
| R05 | PR-Wadi-F01 |
| R06 | PR-Wadi-F02 |
| R07 | PR-Wadi-F03 |
| R08 | PR-Wadi-F04 |
| R09 | PR-Wadi-F05 |
| R10 | PR-Wadi-F06 |
| R11 | PR-Wadi-F07 |
| R12 | PR-Sheri-F01 |
| R13 | PR-Sheri-F02 |
| R14 | PR-Sheri-F03 |
| R15 | PR-Sheri-F04 |
| R16 | PR-Sheri-F05 |
| R17 | PR-Sheri-F06 |
| R18 | PR-Sheri-F07 |
| R19 | PR-Sheri-F08 |
| R20 | PR-Sheri-F09 |
| R21 | PR-Sheri-F10 |
| R22 | PR-Sheri-F11 |
| R23 | PR-Sheri-F12 |

| **Live Operation Area** |
| --- |
| Broiler Area |
| Parent – Rearing Area |
| Parent – Laying Area |
| Layer – Rearing Area |
| Layer – Laying Area |
| Grand Parent – Hatchery Area |
| Grand Parent – Rearing Area |
| Grand Parent – Laying Area |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** | **Release Strategy** |
|  |  | **From** | **To** |  |  |
| ZZ02 | PHD STO | 7700000000 | 7799999999 | 10 | S1 |
| ZZ04 | Live Operation STO |  |  | - | - |

| **STO Release Strategy** |  |  |
| --- | --- | --- |
| **ID** | **Description** | **Release Group** | **Release Codes** | **Classification** |
| ST | PHD STO | S1 | P2 PHD Manager | Y_PURCH_ORD_TYPE = **ZZ02** |

## Technical/Development Related Items

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user ****gorup** |
| --- | --- | --- | --- | --- | --- | --- |
| 69 | Enhancement | E_MM-040 | Plant 1050 : GR against production order for MRP ctrl 100 make batch as FRESH and Manf date as 31.12.9000 for MRP ctrl 110,101 make expiry date last day of month GR against STO in storage loc 1056 make batch as WIP and Manf. date 31.12.9000, for movement type 311 make batch as WIP | Material Document | MIGO | ZMB_MIGO_BADI |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | PHD Responsible |  |
| 20 | PHD Manager |  |
| 30 | Stock Keeper |  |
| 40 | Farm Responsible |  |
| 50 | Department Planner |  |
| 60 | Transportation Coordinator |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 2 of 8 |
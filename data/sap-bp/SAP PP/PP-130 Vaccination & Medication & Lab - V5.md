# PP-130 Vaccination & Medication & Lab - V5

| PP-130: Vaccination & Medication & Lab Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | House prepared in cost effective manner | S | H |
| 2 | Collect all movements & cost related to every house per cycle | S | H |
| 3 | Have clear visibility for all houses planned and actual movement and operations | S | H |

### Business Process Description

In this process, the PHD responsible handle the process of vaccination & medication & lab during the process of growing and laying the chicks in the house/section.

| Process Characteristics |
| --- |
| Process Trigger | New production cycle created |
| Process Input | Production orders |
| Process Output | * Production order confirmations per house *Vaccination recording & component consumption * Lab result recording |
| Process Owner | PHD Responsible |
| Process Volumes | Broiler: 980 order / cycle. (8.49 Cycle / Year) Approximately 30 order per day. Parent - Laying 319 order / yearly cycle. One house per day Parent - Rearing 115 order / 2.2 cycle per year. One house every 2 days. C Layer – Laying 36 order / yearly cycle. Six houses every 3 month. C Layer – Rearing 12 order / 2.6 cycle per year. Six houses every 3 month. GP – Rearing 96 Order / Cycle. (2 GP Cycle / Year). GP – Laying 176 Order / Cycle. (1 GP Cycle / Year) |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | New production cycle created |  |  |  |  |
| 010 | **"Growing" Business Process** | ** ** | ** ** | **"Growing" Business Process** | **Farm Responsible** |
| 020 | Check the plan | COOIS ZPPH3 | Monitor Production/ Planned Orders | Check the plan of the vaccination operations & materials. | PHD Responsible |
| 030 | Request required Vaccination & Medication components by STO | ME21N | Create Purchase Order | Request required Vaccination & Medication components from PHD central store plant using STO to farm store loc. daily. One STO per farm | PHD Responsible |
| 040 | Approval by PHD manager to STO | ME29N | Release Purchase Order | Approval by PHD manager to STO | PHD Manager |
| 050 | Post Goods Issue to STO | MIGO_GI | Post Goods Movement | Post Goods Issue to STO (Mvt 351) | Stock Keeper |
| 060 | Vaccination STO Goods receipt | MIGO_GR | Post Goods Movement | Goods receipt in farm store location in case of broiler & layer.  Goods receipt in vaccine store location in case of parent.   (Mvt 101) | PHD Responsible |
| 070 | Medication STO Goods receipt | MIGO_GR | Post Goods Movement | Goods receipt medication items in farm store location. | Farm Responsible |
| 080 | Add MICs of SERUM bank operations (If carried out) | QA32 |  | Add MICs of SERUM bank operations (If carried out) | PHD Responsible |
| 090 | Record lab results | QA32 ZPPH3 QE01 ZPPINSPRESULTS |  | Record Lab MIC results | PHD Responsible |
| 100 | Confirm vaccination operations | CO11N | Confirm Production Order Operation | Confirm vaccination operations, and backflush vaccines components from farm SLoc. For broiler & layer, vaccine store loc. in case of parent (Mvt 261) | Department Planner |
| 0110 | **"Growing" Business Process** | ** ** | ** ** | **"Growing" Business Process** | **Farm Responsible** |
| Output | *Production order confirmations per house *Vaccination recording & component consumption *Result recording of Lab MICs |  |  |  |  |

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
| Grand Parent - Jouf | 2 | GP PHD Responsible | Grand Parent |
| Butain1 | 1 | Broiler – Production Planner | Broiler |
| Butain2 | 1 | Broiler – Production Planner | Broiler |
| Butain3 | 1 | Broiler – Production Planner | Broiler |
| Butain5 | 1 | Broiler – Production Planner | Broiler |
| Butain 8 | 1 | Broiler – Production Planner | Broiler |
| Butain 9 | 1 | Broiler – Production Planner | Broiler |
| Butain11 | 1 | Broiler – Production Planner | Broiler |
| Shmalia | 1 | Broiler – Production Planner | Broiler |
| Watania 1 | 1 | Broiler – Production Planner | Broiler |
| Watania 2 | 1 | Broiler – Production Planner | Broiler |

### Operational Decisions or Logic within the Process

- Create separate operations in routing regarding vaccination & lab days   

### Legal Considerations and Company-Specific Policies

- Approval step to Vaccine STO by PHD manager

- Around 30 house prepared for catching day in Broiler.

- Cleaning items quota requested on farm cost center monthly

### Reference to Key Process Changes and Process KPIs

- Vaccine materials with the same nature but different material codes should be unified in one code with UOM dose and alternative UOMs

- Vaccines could be unified under the scientific names and commercial name can be recorded in the batch data (for Ex. Paracetamol is the scientific name and  Panadol as commercial name)

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Vaccine injury |  |  |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 10 | Stock Transport Order | MM-PUR-PO |
| 20 | Release Stratagy | MM-PUR-PO |
| 30 | Batch management | LO-BM |
| 40 | Inventory Management | MM-IM |
| 50 | Quality Management | QM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1200 | Broiler |
| 1220 | Parent - Laying |
| 1230 | Parent - Rearing |
| 1250 | Layer - Laying |
| 1260 | Layer - Rearing |
| 3300 | GP – Rearing |
| 3200 | GP - Laying |

| **Storage location** | **Plant** |
| --- | --- |
| 0101 | B-Butn8-01-01N1 | 1200 |
| 0102 | B-Butn8-01-02N1 | 1200 |
| 0103 | B-Butn8-01-03N1 | 1200 |
| 0104 | B-Butn8-01-04N1 | 1200 |
| 0105 | B-Butn8-01-05N1 | 1200 |
| 0106 | B-Butn8-01-06N1 | 1200 |
| 0107 | B-Butn8-01-07N1 | 1200 |
| 0108 | B-Butn8-01-08N1 | 1200 |
| 0109 | B-Butn8-01-09N1 | 1200 |
| 0110 | B-Butn8-01-10N1 | 1200 |
| 0111 | B-Butn8-01-11N1 | 1200 |
| 0112 | B-Butn8-01-12N1 | 1200 |
| 0201 | B-Butn8-11-01N1 | 1200 |
| 0202 | B-Butn8-11-02N1 | 1200 |
| 0203 | B-Butn8-11-03N1 | 1200 |
| 0204 | B-Butn8-11-04N1 | 1200 |
| 0205 | B-Butn8-11-05N1 | 1200 |
| 0206 | B-Butn8-11-06N1 | 1200 |
| 0207 | B-Butn8-11-07N1 | 1200 |
| 0208 | B-Butn8-11-08N1 | 1200 |
| 0209 | B-Butn8-11-09N1 | 1200 |
| 0210 | B-Butn8-11-10N1 | 1200 |
| 0211 | B-Butn8-11-11N1 | 1200 |
| 0212 | B-Butn8-11-12N1 | 1200 |
| 0301 | B-Butn8-02-01N1 | 1200 |
| 0302 | B-Butn8-02-02N1 | 1200 |
| 0303 | B-Butn8-02-03N1 | 1200 |
| 0304 | B-Butn8-02-04N1 | 1200 |
| 0305 | B-Butn8-02-05N1 | 1200 |
| 0306 | B-Butn8-02-06N1 | 1200 |
| 0307 | B-Butn8-02-07N1 | 1200 |
| 0308 | B-Butn8-02-08N1 | 1200 |
| 0309 | B-Butn8-02-09N1 | 1200 |
| 0310 | B-Butn8-02-10N1 | 1200 |
| 0311 | B-Butn8-02-11N1 | 1200 |
| 0312 | B-Butn8-02-12N1 | 1200 |
| 0401 | B-Butn8-03-01N1 | 1200 |
| 0402 | B-Butn8-03-02N1 | 1200 |
| 0403 | B-Butn8-03-03N1 | 1200 |
| 0404 | B-Butn8-03-04N1 | 1200 |
| 0405 | B-Butn8-03-05N1 | 1200 |
| 0406 | B-Butn8-03-06N1 | 1200 |
| 0407 | B-Butn8-03-07N1 | 1200 |
| 0408 | B-Butn8-03-08N1 | 1200 |
| 0409 | B-Butn8-03-09N1 | 1200 |
| 0410 | B-Butn8-03-10N1 | 1200 |
| 0411 | B-Butn8-03-11N1 | 1200 |
| 0412 | B-Butn8-03-12N1 | 1200 |
| 0501 | B-Butn8-04-01N1 | 1200 |
| 0502 | B-Butn8-04-02N1 | 1200 |
| 0503 | B-Butn8-04-03N1 | 1200 |
| 0504 | B-Butn8-04-04N1 | 1200 |
| 0505 | B-Butn8-04-05N1 | 1200 |
| 0506 | B-Butn8-04-06N1 | 1200 |
| 0507 | B-Butn8-04-07N1 | 1200 |
| 0508 | B-Butn8-04-08N1 | 1200 |
| 0509 | B-Butn8-04-09N1 | 1200 |
| 0510 | B-Butn8-04-10N1 | 1200 |
| 0511 | B-Butn8-04-11N1 | 1200 |
| 0512 | B-Butn8-04-12N1 | 1200 |
| 0601 | B-Butn8-10-01N1 | 1200 |
| 0602 | B-Butn8-10-02N1 | 1200 |
| 0603 | B-Butn8-10-03N1 | 1200 |
| 0604 | B-Butn8-10-04N1 | 1200 |
| 0605 | B-Butn8-10-05N1 | 1200 |
| 0606 | B-Butn8-10-06N1 | 1200 |
| 0607 | B-Butn8-10-07N1 | 1200 |
| 0608 | B-Butn8-10-08N1 | 1200 |
| 0609 | B-Butn8-10-09N1 | 1200 |
| 0610 | B-Butn8-10-10N1 | 1200 |
| 0611 | B-Butn8-10-11N1 | 1200 |
| 0612 | B-Butn8-10-12N1 | 1200 |
| 0701 | B-Butn8-09-01N1 | 1200 |
| 0702 | B-Butn8-09-02N1 | 1200 |
| 0703 | B-Butn8-09-03N1 | 1200 |
| 0704 | B-Butn8-09-04N1 | 1200 |
| 0705 | B-Butn8-09-05N1 | 1200 |
| 0706 | B-Butn8-09-06N1 | 1200 |
| 0707 | B-Butn8-09-07N1 | 1200 |
| 0708 | B-Butn8-09-08N1 | 1200 |
| 0709 | B-Butn8-09-09N1 | 1200 |
| 0710 | B-Butn8-09-10N1 | 1200 |
| 0711 | B-Butn8-09-11N1 | 1200 |
| 0712 | B-Butn8-09-12N1 | 1200 |
| 0801 | B-Butn8-08-01N1 | 1200 |
| 0802 | B-Butn8-08-02N1 | 1200 |
| 0803 | B-Butn8-08-03N1 | 1200 |
| 0804 | B-Butn8-08-04N1 | 1200 |
| 0805 | B-Butn8-08-05N1 | 1200 |
| 0806 | B-Butn8-08-06N1 | 1200 |
| 0807 | B-Butn8-08-07N1 | 1200 |
| 0808 | B-Butn8-08-08N1 | 1200 |
| 0809 | B-Butn8-08-09N1 | 1200 |
| 0810 | B-Butn8-08-10N1 | 1200 |
| 0811 | B-Butn8-08-11N1 | 1200 |
| 0812 | B-Butn8-08-12N1 | 1200 |
| 0901 | B-Butn8-05-01N1 | 1200 |
| 0902 | B-Butn8-05-02N1 | 1200 |
| 0903 | B-Butn8-05-03N1 | 1200 |
| 0904 | B-Butn8-05-04N1 | 1200 |
| 0905 | B-Butn8-05-05N1 | 1200 |
| 0906 | B-Butn8-05-06N1 | 1200 |
| 0907 | B-Butn8-05-07N1 | 1200 |
| 0908 | B-Butn8-05-08N1 | 1200 |
| 0909 | B-Butn8-05-09N1 | 1200 |
| 0910 | B-Butn8-05-10N1 | 1200 |
| 0911 | B-Butn8-05-11N1 | 1200 |
| 0912 | B-Butn8-05-12N1 | 1200 |
| 1001 | B-Butn8-06-01N1 | 1200 |
| 1002 | B-Butn8-06-02N1 | 1200 |
| 1003 | B-Butn8-06-03N1 | 1200 |
| 1004 | B-Butn8-06-04N1 | 1200 |
| 1005 | B-Butn8-06-05N1 | 1200 |
| 1006 | B-Butn8-06-06N1 | 1200 |
| 1007 | B-Butn8-06-07N1 | 1200 |
| 1008 | B-Butn8-06-08N1 | 1200 |
| 1009 | B-Butn8-06-09N1 | 1200 |
| 1010 | B-Butn8-06-10N1 | 1200 |
| 1011 | B-Butn8-06-11N1 | 1200 |
| 1012 | B-Butn8-06-12N1 | 1200 |
| 1101 | B-Butn8-07-01N1 | 1200 |
| 1102 | B-Butn8-07-02N1 | 1200 |
| 1103 | B-Butn8-07-03N1 | 1200 |
| 1104 | B-Butn8-07-04N1 | 1200 |
| 1105 | B-Butn8-07-05N1 | 1200 |
| 1106 | B-Butn8-07-06N1 | 1200 |
| 1107 | B-Butn8-07-07N1 | 1200 |
| 1108 | B-Butn8-07-08N1 | 1200 |
| 1109 | B-Butn8-07-09N1 | 1200 |
| 1110 | B-Butn8-07-10N1 | 1200 |
| 1111 | B-Butn8-07-11N1 | 1200 |
| 1112 | B-Butn8-07-12N1 | 1200 |
| 1201 | B-Butn9-01-01N1 | 1200 |
| 1202 | B-Butn9-01-02N1 | 1200 |
| 1203 | B-Butn9-01-03N1 | 1200 |
| 1204 | B-Butn9-01-04N1 | 1200 |
| 1205 | B-Butn9-01-05N1 | 1200 |
| 1206 | B-Butn9-01-06N1 | 1200 |
| 1207 | B-Butn9-01-07N1 | 1200 |
| 1208 | B-Butn9-01-08N1 | 1200 |
| 1209 | B-Butn9-01-09N1 | 1200 |
| 1210 | B-Butn9-01-10N1 | 1200 |
| 1211 | B-Butn9-01-11N1 | 1200 |
| 1212 | B-Butn9-01-12N1 | 1200 |
| 1213 | B-Butn9-01-13N2 | 1200 |
| 1214 | B-Butn9-01-14N2 | 1200 |
| 1215 | B-Butn9-01-15N2 | 1200 |
| 1216 | B-Butn9-01-16N2 | 1200 |
| 1301 | B-Butn9-02-01N1 | 1200 |
| 1302 | B-Butn9-02-02N1 | 1200 |
| 1303 | B-Butn9-02-03N1 | 1200 |
| 1304 | B-Butn9-02-04N1 | 1200 |
| 1305 | B-Butn9-02-05N1 | 1200 |
| 1306 | B-Butn9-02-06N1 | 1200 |
| 1307 | B-Butn9-02-07N1 | 1200 |
| 1308 | B-Butn9-02-08N1 | 1200 |
| 1309 | B-Butn9-02-09N1 | 1200 |
| 1310 | B-Butn9-02-10N1 | 1200 |
| 1311 | B-Butn9-02-11N1 | 1200 |
| 1312 | B-Butn9-02-12N1 | 1200 |
| 1313 | B-Butn9-02-13N2 | 1200 |
| 1314 | B-Butn9-02-14N2 | 1200 |
| 1315 | B-Butn9-02-15N2 | 1200 |
| 1316 | B-Butn9-02-16N2 | 1200 |
| 1401 | B-Butn9-03-01N1 | 1200 |
| 1402 | B-Butn9-03-02N1 | 1200 |
| 1403 | B-Butn9-03-03N1 | 1200 |
| 1404 | B-Butn9-03-04N1 | 1200 |
| 1405 | B-Butn9-03-05N1 | 1200 |
| 1406 | B-Butn9-03-06N1 | 1200 |
| 1407 | B-Butn9-03-07N1 | 1200 |
| 1408 | B-Butn9-03-08N1 | 1200 |
| 1409 | B-Butn9-03-09N1 | 1200 |
| 1410 | B-Butn9-03-10N1 | 1200 |
| 1411 | B-Butn9-03-11N1 | 1200 |
| 1412 | B-Butn9-03-12N1 | 1200 |
| 1413 | B-Butn9-03-13N2 | 1200 |
| 1414 | B-Butn9-03-14N2 | 1200 |
| 1415 | B-Butn9-03-15N2 | 1200 |
| 1416 | B-Butn9-03-16N2 | 1200 |
| 1501 | B-Butn9-04-01N1 | 1200 |
| 1502 | B-Butn9-04-02N1 | 1200 |
| 1503 | B-Butn9-04-03N1 | 1200 |
| 1504 | B-Butn9-04-04N1 | 1200 |
| 1505 | B-Butn9-04-05N1 | 1200 |
| 1506 | B-Butn9-04-06N1 | 1200 |
| 1507 | B-Butn9-04-07N1 | 1200 |
| 1508 | B-Butn9-04-08N1 | 1200 |
| 1509 | B-Butn9-04-09N1 | 1200 |
| 1510 | B-Butn9-04-10N1 | 1200 |
| 1511 | B-Butn9-04-11N1 | 1200 |
| 1512 | B-Butn9-04-12N1 | 1200 |
| 1513 | B-Butn9-04-13N2 | 1200 |
| 1514 | B-Butn9-04-14N2 | 1200 |
| 1515 | B-Butn9-04-15N2 | 1200 |
| 1516 | B-Butn9-04-16N2 | 1200 |
| 1601 | B-Butn9-05-01N1 | 1200 |
| 1602 | B-Butn9-05-02N1 | 1200 |
| 1603 | B-Butn9-05-03N1 | 1200 |
| 1604 | B-Butn9-05-04N1 | 1200 |
| 1605 | B-Butn9-05-05N1 | 1200 |
| 1606 | B-Butn9-05-06N1 | 1200 |
| 1607 | B-Butn9-05-07N1 | 1200 |
| 1608 | B-Butn9-05-08N1 | 1200 |
| 1609 | B-Butn9-05-09N1 | 1200 |
| 1610 | B-Butn9-05-10N1 | 1200 |
| 1611 | B-Butn9-05-11N1 | 1200 |
| 1612 | B-Butn9-05-12N1 | 1200 |
| 1613 | B-Butn9-05-13N2 | 1200 |
| 1614 | B-Butn9-05-14N2 | 1200 |
| 1615 | B-Butn9-05-15N2 | 1200 |
| 1616 | B-Butn9-05-16N2 | 1200 |
| 1701 | B-Butn1-01-01N1 | 1200 |
| 1702 | B-Butn1-01-02N1 | 1200 |
| 1703 | B-Butn1-01-03N1 | 1200 |
| 1704 | B-Butn1-01-04N1 | 1200 |
| 1705 | B-Butn1-01-05N1 | 1200 |
| 1706 | B-Butn1-01-06N1 | 1200 |
| 1707 | B-Butn1-01-07N1 | 1200 |
| 1708 | B-Butn1-01-08C1 | 1200 |
| 1801 | B-Butn1-02-01N1 | 1200 |
| 1802 | B-Butn1-02-02N1 | 1200 |
| 1803 | B-Butn1-02-03N1 | 1200 |
| 1804 | B-Butn1-02-04C1 | 1200 |
| 1805 | B-Butn1-02-05N1 | 1200 |
| 1806 | B-Butn1-02-06N1 | 1200 |
| 1807 | B-Butn1-02-07N1 | 1200 |
| 1808 | B-Butn1-02-08N1 | 1200 |
| 1809 | B-Butn1-02-09C2 | 1200 |
| 1901 | B-Butn1-08-01N1 | 1200 |
| 1902 | B-Butn1-08-02N1 | 1200 |
| 1903 | B-Butn1-08-03N1 | 1200 |
| 1904 | B-Butn1-08-04N1 | 1200 |
| 1905 | B-Butn1-08-05N1 | 1200 |
| 1906 | B-Butn1-08-06C1 | 1200 |
| 1907 | B-Butn1-08-07C1 | 1200 |
| 1908 | B-Butn1-08-08C1 | 1200 |
| 1909 | B-Butn1-08-09C1 | 1200 |
| 1910 | B-Butn1-08-10C1 | 1200 |
| 2001 | B-Butn1-03-01N1 | 1200 |
| 2002 | B-Butn1-03-02N1 | 1200 |
| 2003 | B-Butn1-03-03N1 | 1200 |
| 2004 | B-Butn1-03-04N1 | 1200 |
| 2005 | B-Butn1-03-05N1 | 1200 |
| 2006 | B-Butn1-03-06N1 | 1200 |
| 2007 | B-Butn1-03-07N1 | 1200 |
| 2008 | B-Butn1-03-08N1 | 1200 |
| 2009 | B-Butn1-03-09C1 | 1200 |
| 2101 | B-Butn1-04-01N1 | 1200 |
| 2102 | B-Butn1-04-02N1 | 1200 |
| 2103 | B-Butn1-04-03N1 | 1200 |
| 2104 | B-Butn1-04-04N1 | 1200 |
| 2105 | B-Butn1-04-05N1 | 1200 |
| 2106 | B-Butn1-04-06N1 | 1200 |
| 2107 | B-Butn1-04-07N1 | 1200 |
| 2108 | B-Butn1-04-08C1 | 1200 |
| 2109 | B-Butn1-04-09C2 | 1200 |
| 2201 | B-Butn1-05-01N1 | 1200 |
| 2202 | B-Butn1-05-02N1 | 1200 |
| 2203 | B-Butn1-05-03N1 | 1200 |
| 2204 | B-Butn1-05-04N1 | 1200 |
| 2205 | B-Butn1-05-05N1 | 1200 |
| 2206 | B-Butn1-05-06N1 | 1200 |
| 2207 | B-Butn1-05-07N1 | 1200 |
| 2208 | B-Butn1-05-08N1 | 1200 |
| 2209 | B-Butn1-05-09C1 | 1200 |
| 2210 | B-Butn1-05-10C1 | 1200 |
| 2301 | B-Butn1-06-01N1 | 1200 |
| 2302 | B-Butn1-06-02N1 | 1200 |
| 2303 | B-Butn1-06-03N1 | 1200 |
| 2304 | B-Butn1-06-04N1 | 1200 |
| 2305 | B-Butn1-06-05N1 | 1200 |
| 2306 | B-Butn1-06-06N1 | 1200 |
| 2307 | B-Butn1-06-07N1 | 1200 |
| 2308 | B-Butn1-06-08N1 | 1200 |
| 2309 | B-Butn1-06-09C1 | 1200 |
| 2310 | B-Butn1-06-10C1 | 1200 |
| 2401 | B-Butn1-07-01N1 | 1200 |
| 2402 | B-Butn1-07-02N1 | 1200 |
| 2403 | B-Butn1-07-03N1 | 1200 |
| 2404 | B-Butn1-07-04N1 | 1200 |
| 2405 | B-Butn1-07-05N1 | 1200 |
| 2406 | B-Butn1-07-06N1 | 1200 |
| 2407 | B-Butn1-07-07N1 | 1200 |
| 2408 | B-Butn1-07-08N1 | 1200 |
| 2409 | B-Butn1-07-09C1 | 1200 |
| 2701 | B-W1-Big-01-01N1 | 1200 |
| 2702 | B-W1-Big-01-02N1 | 1200 |
| 2703 | B-W1-Big-01-03N1 | 1200 |
| 2704 | B-W1-Big-01-04N1 | 1200 |
| 2705 | B-W1-Big-01-05N1 | 1200 |
| 2706 | B-W1-Big-01-06N1 | 1200 |
| 2707 | B-W1-Big-01-07N1 | 1200 |
| 2708 | B-W1-Big-01-08N1 | 1200 |
| 2709 | B-W1-Big-01-09N1 | 1200 |
| 2710 | B-W1-Big-01-10N1 | 1200 |
| 2711 | B-W1-Big-01-11N1 | 1200 |
| 2712 | B-W1-Big-01-12N1 | 1200 |
| 2713 | B-W1-Big-01-13N1 | 1200 |
| 2714 | B-W1-Big-01-14N1 | 1200 |
| 2715 | B-W1-Big-01-15N1 | 1200 |
| 2716 | B-W1-Big-01-16N1 | 1200 |
| 2801 | B-W1-Big-02-01N1 | 1200 |
| 2802 | B-W1-Big-02-02N1 | 1200 |
| 2803 | B-W1-Big-02-03N1 | 1200 |
| 2804 | B-W1-Big-02-04N1 | 1200 |
| 2805 | B-W1-Big-02-05N1 | 1200 |
| 2806 | B-W1-Big-02-06N1 | 1200 |
| 2807 | B-W1-Big-02-07N1 | 1200 |
| 2808 | B-W1-Big-02-08N1 | 1200 |
| 2809 | B-W1-Big-02-09N1 | 1200 |
| 2810 | B-W1-Big-02-10N1 | 1200 |
| 2811 | B-W1-Big-02-11N1 | 1200 |
| 2812 | B-W1-Big-02-12N1 | 1200 |
| 2813 | B-W1-Big-02-13N1 | 1200 |
| 2814 | B-W1-Big-02-14N1 | 1200 |
| 2815 | B-W1-Big-02-15N1 | 1200 |
| 2816 | B-W1-Big-02-16N1 | 1200 |
| 2901 | B-W1-Big-03-01N1 | 1200 |
| 2902 | B-W1-Big-03-02N1 | 1200 |
| 2903 | B-W1-Big-03-03N1 | 1200 |
| 2904 | B-W1-Big-03-04N1 | 1200 |
| 2905 | B-W1-Big-03-05N1 | 1200 |
| 2906 | B-W1-Big-03-06N1 | 1200 |
| 2907 | B-W1-Big-03-07N1 | 1200 |
| 2908 | B-W1-Big-03-08N1 | 1200 |
| 2909 | B-W1-Big-03-09N1 | 1200 |
| 2910 | B-W1-Big-03-10N1 | 1200 |
| 2911 | B-W1-Big-03-11N1 | 1200 |
| 2912 | B-W1-Big-03-12N1 | 1200 |
| 2913 | B-W1-Big-03-13N1 | 1200 |
| 2914 | B-W1-Big-03-14N1 | 1200 |
| 2915 | B-W1-Big-03-15N1 | 1200 |
| 2916 | B-W1-Big-03-16N1 | 1200 |
| 3001 | B-W1-Big-04-01N1 | 1200 |
| 3002 | B-W1-Big-04-02N1 | 1200 |
| 3003 | B-W1-Big-04-03N1 | 1200 |
| 3004 | B-W1-Big-04-04N1 | 1200 |
| 3005 | B-W1-Big-04-05N1 | 1200 |
| 3006 | B-W1-Big-04-06N1 | 1200 |
| 3007 | B-W1-Big-04-07N1 | 1200 |
| 3008 | B-W1-Big-04-08N1 | 1200 |
| 3009 | B-W1-Big-04-09N1 | 1200 |
| 3010 | B-W1-Big-04-10N1 | 1200 |
| 3011 | B-W1-Big-04-11N1 | 1200 |
| 3012 | B-W1-Big-04-12N1 | 1200 |
| 3013 | B-W1-Big-04-13N1 | 1200 |
| 3014 | B-W1-Big-04-14N1 | 1200 |
| 3015 | B-W1-Big-04-15N1 | 1200 |
| 3016 | B-W1-Big-04-16N1 | 1200 |
| 3101 | B-W1-Big-05-01N1 | 1200 |
| 3102 | B-W1-Big-05-02N1 | 1200 |
| 3103 | B-W1-Big-05-03N1 | 1200 |
| 3104 | B-W1-Big-05-04N1 | 1200 |
| 3105 | B-W1-Big-05-05N1 | 1200 |
| 3106 | B-W1-Big-05-06N1 | 1200 |
| 3107 | B-W1-Big-05-07N1 | 1200 |
| 3108 | B-W1-Big-05-08N1 | 1200 |
| 3109 | B-W1-Big-05-09N1 | 1200 |
| 3110 | B-W1-Big-05-10N1 | 1200 |
| 3111 | B-W1-Big-05-11N1 | 1200 |
| 3112 | B-W1-Big-05-12N1 | 1200 |
| 3113 | B-W1-Big-05-13N1 | 1200 |
| 3114 | B-W1-Big-05-14N1 | 1200 |
| 3115 | B-W1-Big-05-15N1 | 1200 |
| 3116 | B-W1-Big-05-16N1 | 1200 |
| 3201 | B-W1-Big-06-01N1 | 1200 |
| 3202 | B-W1-Big-06-02N1 | 1200 |
| 3203 | B-W1-Big-06-03N1 | 1200 |
| 3204 | B-W1-Big-06-04N1 | 1200 |
| 3205 | B-W1-Big-06-05N1 | 1200 |
| 3206 | B-W1-Big-06-06N1 | 1200 |
| 3207 | B-W1-Big-06-07N1 | 1200 |
| 3208 | B-W1-Big-06-08N1 | 1200 |
| 3209 | B-W1-Big-06-09N1 | 1200 |
| 3210 | B-W1-Big-06-10N1 | 1200 |
| 3211 | B-W1-Big-06-11N1 | 1200 |
| 3212 | B-W1-Big-06-12N1 | 1200 |
| 3213 | B-W1-Big-06-13N1 | 1200 |
| 3214 | B-W1-Big-06-14N1 | 1200 |
| 3215 | B-W1-Big-06-15N1 | 1200 |
| 3216 | B-W1-Big-06-16N1 | 1200 |
| 3301 | B-W1-Big-07-01N1 | 1200 |
| 3302 | B-W1-Big-07-02N1 | 1200 |
| 3303 | B-W1-Big-07-03N1 | 1200 |
| 3304 | B-W1-Big-07-04N1 | 1200 |
| 3305 | B-W1-Big-07-05N1 | 1200 |
| 3306 | B-W1-Big-07-06N1 | 1200 |
| 3307 | B-W1-Big-07-07N1 | 1200 |
| 3308 | B-W1-Big-07-08N1 | 1200 |
| 3309 | B-W1-Big-07-09N1 | 1200 |
| 3310 | B-W1-Big-07-10N1 | 1200 |
| 3311 | B-W1-Big-07-11N1 | 1200 |
| 3312 | B-W1-Big-07-12N1 | 1200 |
| 3313 | B-W1-Big-07-13N1 | 1200 |
| 3314 | B-W1-Big-07-14N1 | 1200 |
| 3315 | B-W1-Big-07-15N1 | 1200 |
| 3316 | B-W1-Big-07-16N1 | 1200 |
| 3601 | B-W1-Big-10-01N1 | 1200 |
| 3602 | B-W1-Big-10-02N1 | 1200 |
| 3603 | B-W1-Big-10-03N1 | 1200 |
| 3604 | B-W1-Big-10-04N1 | 1200 |
| 3605 | B-W1-Big-10-05N1 | 1200 |
| 3606 | B-W1-Big-10-06N1 | 1200 |
| 3607 | B-W1-Big-10-07N1 | 1200 |
| 3608 | B-W1-Big-10-08N1 | 1200 |
| 3609 | B-W1-Big-10-09N1 | 1200 |
| 3610 | B-W1-Big-10-10N1 | 1200 |
| 3611 | B-W1-Big-10-11N1 | 1200 |
| 3612 | B-W1-Big-10-12N1 | 1200 |
| 3613 | B-W1-Big-10-13N1 | 1200 |
| 3614 | B-W1-Big-10-14N1 | 1200 |
| 3615 | B-W1-Big-10-15N1 | 1200 |
| 3616 | B-W1-Big-10-16N1 | 1200 |
| 3901 | B-W1-Exp-01-01N1 | 1200 |
| 4001 | B-W1-Min-05-01N1 | 1200 |
| 4002 | B-W1-Min-05-02N1 | 1200 |
| 4003 | B-W1-Min-05-03N1 | 1200 |
| 4004 | B-W1-Min-05-04N1 | 1200 |
| 4005 | B-W1-Min-05-05N1 | 1200 |
| 4006 | B-W1-Min-05-06N1 | 1200 |
| 4101 | B-W1-Min-01-01N1 | 1200 |
| 4102 | B-W1-Min-01-02N1 | 1200 |
| 4103 | B-W1-Min-01-03N1 | 1200 |
| 4104 | B-W1-Min-01-04N1 | 1200 |
| 4105 | B-W1-Min-01-05N1 | 1200 |
| 4106 | B-W1-Min-01-06N1 | 1200 |
| 4201 | B-W1-Min-02-01N1 | 1200 |
| 4202 | B-W1-Min-02-02N1 | 1200 |
| 4203 | B-W1-Min-02-03N1 | 1200 |
| 4204 | B-W1-Min-02-04N1 | 1200 |
| 4205 | B-W1-Min-02-05N1 | 1200 |
| 4206 | B-W1-Min-02-06N1 | 1200 |
| 4301 | B-W1-Min-03-01N1 | 1200 |
| 4302 | B-W1-Min-03-02N1 | 1200 |
| 4303 | B-W1-Min-03-03N1 | 1200 |
| 4304 | B-W1-Min-03-04N1 | 1200 |
| 4305 | B-W1-Min-03-05N1 | 1200 |
| 4306 | B-W1-Min-03-06N1 | 1200 |
| 4401 | B-W1-Min-04-01N1 | 1200 |
| 4402 | B-W1-Min-04-02N1 | 1200 |
| 4403 | B-W1-Min-04-03N1 | 1200 |
| 4404 | B-W1-Min-04-04N1 | 1200 |
| 4405 | B-W1-Min-04-05N1 | 1200 |
| 4406 | B-W1-Min-04-06N1 | 1200 |
| 4701 | B-W1-Min-10-01N1 | 1200 |
| 4702 | B-W1-Min-10-02N1 | 1200 |
| 4703 | B-W1-Min-10-03N1 | 1200 |
| 4704 | B-W1-Min-10-04N1 | 1200 |
| 4705 | B-W1-Min-10-05N1 | 1200 |
| 4706 | B-W1-Min-10-06N1 | 1200 |
| 4801 | B-W1-Min-11-01N1 | 1200 |
| 4802 | B-W1-Min-11-02N1 | 1200 |
| 4803 | B-W1-Min-11-03N1 | 1200 |
| 4804 | B-W1-Min-11-04N1 | 1200 |
| 4805 | B-W1-Min-11-05N1 | 1200 |
| 4806 | B-W1-Min-11-06N1 | 1200 |
| 4901 | B-W1-Min-12-01N1 | 1200 |
| 4902 | B-W1-Min-12-02N1 | 1200 |
| 4903 | B-W1-Min-12-03N1 | 1200 |
| 4904 | B-W1-Min-12-04N1 | 1200 |
| 4905 | B-W1-Min-12-05N1 | 1200 |
| 4906 | B-W1-Min-12-06N1 | 1200 |
| 5001 | B-W1-Min-13-01N1 | 1200 |
| 5002 | B-W1-Min-13-02N1 | 1200 |
| 5003 | B-W1-Min-13-03N1 | 1200 |
| 5004 | B-W1-Min-13-04N1 | 1200 |
| 5005 | B-W1-Min-13-05N1 | 1200 |
| 5006 | B-W1-Min-13-06N1 | 1200 |
| 5101 | B-W1-Min-14-01N1 | 1200 |
| 5102 | B-W1-Min-14-02N1 | 1200 |
| 5103 | B-W1-Min-14-03N1 | 1200 |
| 5104 | B-W1-Min-14-04N1 | 1200 |
| 5105 | B-W1-Min-14-05N1 | 1200 |
| 5106 | B-W1-Min-14-06N1 | 1200 |
| 5201 | B-W1-Min-15-01N1 | 1200 |
| 5202 | B-W1-Min-15-02N1 | 1200 |
| 5203 | B-W1-Min-15-03N1 | 1200 |
| 5204 | B-W1-Min-15-04N1 | 1200 |
| 5205 | B-W1-Min-15-05N1 | 1200 |
| 5206 | B-W1-Min-15-06N1 | 1200 |
| 5301 | B-Butn11-01-01N1 | 1200 |
| 5302 | B-Butn11-01-02N1 | 1200 |
| 5303 | B-Butn11-01-03N1 | 1200 |
| 5304 | B-Butn11-01-04N1 | 1200 |
| 5305 | B-Butn11-01-05N1 | 1200 |
| 5306 | B-Butn11-01-06N1 | 1200 |
| 5307 | B-Butn11-01-07N1 | 1200 |
| 5308 | B-Butn11-01-08N1 | 1200 |
| 5309 | B-Butn11-01-09N1 | 1200 |
| 5310 | B-Butn11-01-10N1 | 1200 |
| 5311 | B-Butn11-01-11N1 | 1200 |
| 5312 | B-Butn11-01-12N1 | 1200 |
| 5313 | B-Butn11-01-13N2 | 1200 |
| 5314 | B-Butn11-01-14N2 | 1200 |
| 5401 | B-Butn11-02-01N1 | 1200 |
| 5402 | B-Butn11-02-02N1 | 1200 |
| 5403 | B-Butn11-02-03N1 | 1200 |
| 5404 | B-Butn11-02-04N1 | 1200 |
| 5405 | B-Butn11-02-05N1 | 1200 |
| 5406 | B-Butn11-02-06N1 | 1200 |
| 5407 | B-Butn11-02-07N1 | 1200 |
| 5408 | B-Butn11-02-08N1 | 1200 |
| 5409 | B-Butn11-02-09N1 | 1200 |
| 5410 | B-Butn11-02-10N1 | 1200 |
| 5411 | B-Butn11-02-11N1 | 1200 |
| 5412 | B-Butn11-02-12N1 | 1200 |
| 5413 | B-Butn11-02-13N2 | 1200 |
| 5414 | B-Butn11-02-14N2 | 1200 |
| 5415 | B-Butn11-02-15N2 | 1200 |
| 5416 | B-Butn11-02-16N2 | 1200 |
| 5501 | B-Butn11-03-01N1 | 1200 |
| 5502 | B-Butn11-03-02N1 | 1200 |
| 5503 | B-Butn11-03-03N1 | 1200 |
| 5504 | B-Butn11-03-04N1 | 1200 |
| 5505 | B-Butn11-03-05N1 | 1200 |
| 5506 | B-Butn11-03-06N1 | 1200 |
| 5507 | B-Butn11-03-07N1 | 1200 |
| 5508 | B-Butn11-03-08N1 | 1200 |
| 5509 | B-Butn11-03-09N1 | 1200 |
| 5510 | B-Butn11-03-10N1 | 1200 |
| 5511 | B-Butn11-03-11N1 | 1200 |
| 5512 | B-Butn11-03-12N1 | 1200 |
| 5513 | B-Butn11-03-13N2 | 1200 |
| 5514 | B-Butn11-03-14N2 | 1200 |
| 5601 | B-Butn5-01-01N1 | 1200 |
| 5602 | B-Butn5-01-02N1 | 1200 |
| 5603 | B-Butn5-01-03N1 | 1200 |
| 5604 | B-Butn5-01-04N1 | 1200 |
| 5605 | B-Butn5-01-05N1 | 1200 |
| 5606 | B-Butn5-01-06N1 | 1200 |
| 5607 | B-Butn5-01-07N1 | 1200 |
| 5608 | B-Butn5-01-08N1 | 1200 |
| 5609 | B-Butn5-01-09N1 | 1200 |
| 5610 | B-Butn5-01-10N1 | 1200 |
| 5611 | B-Butn5-01-11N1 | 1200 |
| 5612 | B-Butn5-01-12N1 | 1200 |
| 5613 | B-Butn5-01-13C1 | 1200 |
| 5614 | B-Butn5-01-14C1 | 1200 |
| 5701 | B-Butn5-02-01N1 | 1200 |
| 5702 | B-Butn5-02-02N1 | 1200 |
| 5703 | B-Butn5-02-03N1 | 1200 |
| 5704 | B-Butn5-02-04N1 | 1200 |
| 5705 | B-Butn5-02-05N1 | 1200 |
| 5706 | B-Butn5-02-06N1 | 1200 |
| 5707 | B-Butn5-02-07N1 | 1200 |
| 5708 | B-Butn5-02-08N1 | 1200 |
| 5709 | B-Butn5-02-09N1 | 1200 |
| 5710 | B-Butn5-02-10N1 | 1200 |
| 5711 | B-Butn5-02-11N1 | 1200 |
| 5712 | B-Butn5-02-12N1 | 1200 |
| 5801 | B-W2-P1-04-01N1 | 1200 |
| 5802 | B-W2-P1-04-02N1 | 1200 |
| 5803 | B-W2-P1-04-03N1 | 1200 |
| 5804 | B-W2-P1-04-04N1 | 1200 |
| 5805 | B-W2-P1-04-05N1 | 1200 |
| 5806 | B-W2-P1-04-06N1 | 1200 |
| 5807 | B-W2-P1-04-07N1 | 1200 |
| 5808 | B-W2-P1-04-08N1 | 1200 |
| 5809 | B-W2-P1-04-09N1 | 1200 |
| 5810 | B-W2-P1-04-10N1 | 1200 |
| 5811 | B-W2-P1-04-11N1 | 1200 |
| 5812 | B-W2-P1-04-12N1 | 1200 |
| 5901 | B-W2-P1-03-01N1 | 1200 |
| 5902 | B-W2-P1-03-02N1 | 1200 |
| 5903 | B-W2-P1-03-03N1 | 1200 |
| 5904 | B-W2-P1-03-04N1 | 1200 |
| 5905 | B-W2-P1-03-05N1 | 1200 |
| 5906 | B-W2-P1-03-06N1 | 1200 |
| 5907 | B-W2-P1-03-07N1 | 1200 |
| 5908 | B-W2-P1-03-08N1 | 1200 |
| 5909 | B-W2-P1-03-09N1 | 1200 |
| 5910 | B-W2-P1-03-10N1 | 1200 |
| 5911 | B-W2-P1-03-11N1 | 1200 |
| 5912 | B-W2-P1-03-12N1 | 1200 |
| 6001 | B-W2-P1-02-01N1 | 1200 |
| 6002 | B-W2-P1-02-02N1 | 1200 |
| 6003 | B-W2-P1-02-03N1 | 1200 |
| 6004 | B-W2-P1-02-04N1 | 1200 |
| 6005 | B-W2-P1-02-05N1 | 1200 |
| 6006 | B-W2-P1-02-06N1 | 1200 |
| 6007 | B-W2-P1-02-07N1 | 1200 |
| 6008 | B-W2-P1-02-08N1 | 1200 |
| 6009 | B-W2-P1-02-09N1 | 1200 |
| 6010 | B-W2-P1-02-10N1 | 1200 |
| 6011 | B-W2-P1-02-11N1 | 1200 |
| 6012 | B-W2-P1-02-12N1 | 1200 |
| 6013 | B-W2-P1-02-13N2 | 1200 |
| 6014 | B-W2-P1-02-14N2 | 1200 |
| 6015 | B-W2-P1-02-15N2 | 1200 |
| 6016 | B-W2-P1-02-16N2 | 1200 |
| 6101 | B-W2-P1-01-01N1 | 1200 |
| 6102 | B-W2-P1-01-02N1 | 1200 |
| 6103 | B-W2-P1-01-03N1 | 1200 |
| 6104 | B-W2-P1-01-04N1 | 1200 |
| 6105 | B-W2-P1-01-05N1 | 1200 |
| 6106 | B-W2-P1-01-06N1 | 1200 |
| 6107 | B-W2-P1-01-07N1 | 1200 |
| 6108 | B-W2-P1-01-08N1 | 1200 |
| 6109 | B-W2-P1-01-09N1 | 1200 |
| 6110 | B-W2-P1-01-10N1 | 1200 |
| 6111 | B-W2-P1-01-11N1 | 1200 |
| 6112 | B-W2-P1-01-12N1 | 1200 |
| 6113 | B-W2-P1-01-13N2 | 1200 |
| 6114 | B-W2-P1-01-14N2 | 1200 |
| 6115 | B-W2-P1-01-15N2 | 1200 |
| 6116 | B-W2-P1-01-16N2 | 1200 |
| 6201 | B-W2-P1-05-01N1 | 1200 |
| 6202 | B-W2-P1-05-02N1 | 1200 |
| 6203 | B-W2-P1-05-03N1 | 1200 |
| 6204 | B-W2-P1-05-04N1 | 1200 |
| 6205 | B-W2-P1-05-05N1 | 1200 |
| 6206 | B-W2-P1-05-06N1 | 1200 |
| 6207 | B-W2-P1-05-07N1 | 1200 |
| 6208 | B-W2-P1-05-08N1 | 1200 |
| 6209 | B-W2-P1-05-09N1 | 1200 |
| 6210 | B-W2-P1-05-10N1 | 1200 |
| 6211 | B-W2-P1-05-11N1 | 1200 |
| 6212 | B-W2-P1-05-12N1 | 1200 |
| 6301 | B-W2-P1-06-01N1 | 1200 |
| 6302 | B-W2-P1-06-02N1 | 1200 |
| 6303 | B-W2-P1-06-03N1 | 1200 |
| 6304 | B-W2-P1-06-04N1 | 1200 |
| 6305 | B-W2-P1-06-05N1 | 1200 |
| 6306 | B-W2-P1-06-06N1 | 1200 |
| 6307 | B-W2-P1-06-07N1 | 1200 |
| 6308 | B-W2-P1-06-08N1 | 1200 |
| 6309 | B-W2-P1-06-09N1 | 1200 |
| 6310 | B-W2-P1-06-10N1 | 1200 |
| 6311 | B-W2-P1-06-11N1 | 1200 |
| 6312 | B-W2-P1-06-12N1 | 1200 |
| 6313 | B-W2-P1-06-13N2 | 1200 |
| 6314 | B-W2-P1-06-14N2 | 1200 |
| 6401 | B-W2-P1-10-01N1 | 1200 |
| 6402 | B-W2-P1-10-02N1 | 1200 |
| 6403 | B-W2-P1-10-03N1 | 1200 |
| 6404 | B-W2-P1-10-04N1 | 1200 |
| 6405 | B-W2-P1-10-05N1 | 1200 |
| 6406 | B-W2-P1-10-06N1 | 1200 |
| 6407 | B-W2-P1-10-07N1 | 1200 |
| 6408 | B-W2-P1-10-08N1 | 1200 |
| 6409 | B-W2-P1-10-09N1 | 1200 |
| 6410 | B-W2-P1-10-10N1 | 1200 |
| 6411 | B-W2-P1-10-11N1 | 1200 |
| 6412 | B-W2-P1-10-12N1 | 1200 |
| 6413 | B-W2-P1-10-13N2 | 1200 |
| 6414 | B-W2-P1-10-14N2 | 1200 |
| 6415 | B-W2-P1-10-15N2 | 1200 |
| 6416 | B-W2-P1-10-16N2 | 1200 |
| 6501 | B-W2-P1-07-01N1 | 1200 |
| 6502 | B-W2-P1-07-02N1 | 1200 |
| 6503 | B-W2-P1-07-03N1 | 1200 |
| 6504 | B-W2-P1-07-04N1 | 1200 |
| 6505 | B-W2-P1-07-05N1 | 1200 |
| 6506 | B-W2-P1-07-06N1 | 1200 |
| 6507 | B-W2-P1-07-07N1 | 1200 |
| 6508 | B-W2-P1-07-08N1 | 1200 |
| 6509 | B-W2-P1-07-09N1 | 1200 |
| 6510 | B-W2-P1-07-10N1 | 1200 |
| 6511 | B-W2-P1-07-11N1 | 1200 |
| 6512 | B-W2-P1-07-12N1 | 1200 |
| 6513 | B-W2-P1-07-13N2 | 1200 |
| 6514 | B-W2-P1-07-14N2 | 1200 |
| 6515 | B-W2-P1-07-15N2 | 1200 |
| 6516 | B-W2-P1-07-16N2 | 1200 |
| 6601 | B-W2-P1-08-01N1 | 1200 |
| 6602 | B-W2-P1-08-02N1 | 1200 |
| 6603 | B-W2-P1-08-03N1 | 1200 |
| 6604 | B-W2-P1-08-04N1 | 1200 |
| 6605 | B-W2-P1-08-05N1 | 1200 |
| 6606 | B-W2-P1-08-06N1 | 1200 |
| 6607 | B-W2-P1-08-07N1 | 1200 |
| 6608 | B-W2-P1-08-08N1 | 1200 |
| 6609 | B-W2-P1-08-09N1 | 1200 |
| 6610 | B-W2-P1-08-10N1 | 1200 |
| 6611 | B-W2-P1-08-11N1 | 1200 |
| 6612 | B-W2-P1-08-12N1 | 1200 |
| 6613 | B-W2-P1-08-13N2 | 1200 |
| 6614 | B-W2-P1-08-14N2 | 1200 |
| 6701 | B-W2-P1-09-01N1 | 1200 |
| 6702 | B-W2-P1-09-02N1 | 1200 |
| 6703 | B-W2-P1-09-03N1 | 1200 |
| 6704 | B-W2-P1-09-04N1 | 1200 |
| 6705 | B-W2-P1-09-05N1 | 1200 |
| 6706 | B-W2-P1-09-06N1 | 1200 |
| 6707 | B-W2-P1-09-07N1 | 1200 |
| 6708 | B-W2-P1-09-08N1 | 1200 |
| 6709 | B-W2-P1-09-09N1 | 1200 |
| 6710 | B-W2-P1-09-10N1 | 1200 |
| 6711 | B-W2-P1-09-11N1 | 1200 |
| 6712 | B-W2-P1-09-12N1 | 1200 |
| 6713 | B-W2-P1-09-13N2 | 1200 |
| 6714 | B-W2-P1-09-14N2 | 1200 |
| 6715 | B-W2-P1-09-15N2 | 1200 |
| 6716 | B-W2-P1-09-16N2 | 1200 |
| 6801 | B-W2-P1-11-01N1 | 1200 |
| 6802 | B-W2-P1-11-02N1 | 1200 |
| 6803 | B-W2-P1-11-03N1 | 1200 |
| 6804 | B-W2-P1-11-04N1 | 1200 |
| 6805 | B-W2-P1-11-05N1 | 1200 |
| 6806 | B-W2-P1-11-06N1 | 1200 |
| 6807 | B-W2-P1-11-07N1 | 1200 |
| 6808 | B-W2-P1-11-08N1 | 1200 |
| 6809 | B-W2-P1-11-09N1 | 1200 |
| 6810 | B-W2-P1-11-10N1 | 1200 |
| 6811 | B-W2-P1-11-11N1 | 1200 |
| 6812 | B-W2-P1-11-12N1 | 1200 |
| 6813 | B-W2-P1-11-13N2 | 1200 |
| 6814 | B-W2-P1-11-14N2 | 1200 |
| 6901 | B-W2-P1-12-01N1 | 1200 |
| 6902 | B-W2-P1-12-02N1 | 1200 |
| 6903 | B-W2-P1-12-03N1 | 1200 |
| 6904 | B-W2-P1-12-04N1 | 1200 |
| 6905 | B-W2-P1-12-05N1 | 1200 |
| 6906 | B-W2-P1-12-06N1 | 1200 |
| 6907 | B-W2-P1-12-07N1 | 1200 |
| 6908 | B-W2-P1-12-08N1 | 1200 |
| 6909 | B-W2-P1-12-09N1 | 1200 |
| 6910 | B-W2-P1-12-10N1 | 1200 |
| 6911 | B-W2-P1-12-11N1 | 1200 |
| 6912 | B-W2-P1-12-12N1 | 1200 |
| 6913 | B-W2-P1-12-13N2 | 1200 |
| 6914 | B-W2-P1-12-14N2 | 1200 |
| 7001 | B-W2-P3-13-01N1 | 1200 |
| 7002 | B-W2-P3-13-02N1 | 1200 |
| 7003 | B-W2-P3-13-03N1 | 1200 |
| 7004 | B-W2-P3-13-04N1 | 1200 |
| 7005 | B-W2-P3-13-05N1 | 1200 |
| 7006 | B-W2-P3-13-06N1 | 1200 |
| 7007 | B-W2-P3-13-07N1 | 1200 |
| 7008 | B-W2-P3-13-08N1 | 1200 |
| 7009 | B-W2-P3-13-09N1 | 1200 |
| 7010 | B-W2-P3-13-10N1 | 1200 |
| 7011 | B-W2-P3-13-11N1 | 1200 |
| 7012 | B-W2-P3-13-12N1 | 1200 |
| 7101 | B-W2-P3-14-01N1 | 1200 |
| 7102 | B-W2-P3-14-02N1 | 1200 |
| 7103 | B-W2-P3-14-03N1 | 1200 |
| 7104 | B-W2-P3-14-04N1 | 1200 |
| 7105 | B-W2-P3-14-05N1 | 1200 |
| 7106 | B-W2-P3-14-06N1 | 1200 |
| 7107 | B-W2-P3-14-07N1 | 1200 |
| 7108 | B-W2-P3-14-08N1 | 1200 |
| 7109 | B-W2-P3-14-09N1 | 1200 |
| 7110 | B-W2-P3-14-10N1 | 1200 |
| 7111 | B-W2-P3-14-11N1 | 1200 |
| 7112 | B-W2-P3-14-12N1 | 1200 |
| 7113 | B-W2-P3-14-13N2 | 1200 |
| 7114 | B-W2-P3-14-14N2 | 1200 |
| 7115 | B-W2-P3-14-15N2 | 1200 |
| 7116 | B-W2-P3-14-16N2 | 1200 |
| 7201 | B-W2-P3-22-01N1 | 1200 |
| 7202 | B-W2-P3-22-02N1 | 1200 |
| 7203 | B-W2-P3-22-03N1 | 1200 |
| 7204 | B-W2-P3-22-04N1 | 1200 |
| 7205 | B-W2-P3-22-05N1 | 1200 |
| 7206 | B-W2-P3-22-06N1 | 1200 |
| 7207 | B-W2-P3-22-07N1 | 1200 |
| 7208 | B-W2-P3-22-08N1 | 1200 |
| 7209 | B-W2-P3-22-09N1 | 1200 |
| 7210 | B-W2-P3-22-10N1 | 1200 |
| 7211 | B-W2-P3-22-11N1 | 1200 |
| 7212 | B-W2-P3-22-12N1 | 1200 |
| 7213 | B-W2-P3-22-13N2 | 1200 |
| 7214 | B-W2-P3-22-14N2 | 1200 |
| 7301 | B-W2-P3-24-01N1 | 1200 |
| 7302 | B-W2-P3-24-02N1 | 1200 |
| 7303 | B-W2-P3-24-03N1 | 1200 |
| 7304 | B-W2-P3-24-04N1 | 1200 |
| 7305 | B-W2-P3-24-05N1 | 1200 |
| 7306 | B-W2-P3-24-06N1 | 1200 |
| 7307 | B-W2-P3-24-07N1 | 1200 |
| 7308 | B-W2-P3-24-08N1 | 1200 |
| 7309 | B-W2-P3-24-09N1 | 1200 |
| 7310 | B-W2-P3-24-10N1 | 1200 |
| 7311 | B-W2-P3-24-11N1 | 1200 |
| 7312 | B-W2-P3-24-12N1 | 1200 |
| 7313 | B-W2-P3-24-13N2 | 1200 |
| 7314 | B-W2-P3-24-14N2 | 1200 |
| 7401 | B-W2-P3-26-01N1 | 1200 |
| 7402 | B-W2-P3-26-02N1 | 1200 |
| 7403 | B-W2-P3-26-03N1 | 1200 |
| 7404 | B-W2-P3-26-04N1 | 1200 |
| 7405 | B-W2-P3-26-05N1 | 1200 |
| 7406 | B-W2-P3-26-06N1 | 1200 |
| 7407 | B-W2-P3-26-07N1 | 1200 |
| 7408 | B-W2-P3-26-08N1 | 1200 |
| 7409 | B-W2-P3-26-09N1 | 1200 |
| 7410 | B-W2-P3-26-10N1 | 1200 |
| 7411 | B-W2-P3-26-11N1 | 1200 |
| 7412 | B-W2-P3-26-12N1 | 1200 |
| 7501 | B-W2-P3-25-01N1 | 1200 |
| 7502 | B-W2-P3-25-02N1 | 1200 |
| 7503 | B-W2-P3-25-03N1 | 1200 |
| 7504 | B-W2-P3-25-04N1 | 1200 |
| 7505 | B-W2-P3-25-05N1 | 1200 |
| 7506 | B-W2-P3-25-06N1 | 1200 |
| 7507 | B-W2-P3-25-07N1 | 1200 |
| 7508 | B-W2-P3-25-08N1 | 1200 |
| 7509 | B-W2-P3-25-09N1 | 1200 |
| 7510 | B-W2-P3-25-10N1 | 1200 |
| 7511 | B-W2-P3-25-11N1 | 1200 |
| 7512 | B-W2-P3-25-12N1 | 1200 |
| 7513 | B-W2-P3-25-13N2 | 1200 |
| 7514 | B-W2-P3-25-14N2 | 1200 |
| 7515 | B-W2-P3-25-15N2 | 1200 |
| 7516 | B-W2-P3-25-16N2 | 1200 |
| 7601 | B-W2-P3-23-01N1 | 1200 |
| 7602 | B-W2-P3-23-02N1 | 1200 |
| 7603 | B-W2-P3-23-03N1 | 1200 |
| 7604 | B-W2-P3-23-04N1 | 1200 |
| 7605 | B-W2-P3-23-05N1 | 1200 |
| 7606 | B-W2-P3-23-06N1 | 1200 |
| 7607 | B-W2-P3-23-07N1 | 1200 |
| 7608 | B-W2-P3-23-08N1 | 1200 |
| 7609 | B-W2-P3-23-09N1 | 1200 |
| 7610 | B-W2-P3-23-10N1 | 1200 |
| 7611 | B-W2-P3-23-11N1 | 1200 |
| 7612 | B-W2-P3-23-12N1 | 1200 |
| 7613 | B-W2-P3-23-13N2 | 1200 |
| 7614 | B-W2-P3-23-14N2 | 1200 |
| 7615 | B-W2-P3-23-15N2 | 1200 |
| 7616 | B-W2-P3-23-16N2 | 1200 |
| 7701 | B-W2-P3-21-01N1 | 1200 |
| 7702 | B-W2-P3-21-02N1 | 1200 |
| 7703 | B-W2-P3-21-03N1 | 1200 |
| 7704 | B-W2-P3-21-04N1 | 1200 |
| 7705 | B-W2-P3-21-05N1 | 1200 |
| 7706 | B-W2-P3-21-06N1 | 1200 |
| 7707 | B-W2-P3-21-07N1 | 1200 |
| 7708 | B-W2-P3-21-08N1 | 1200 |
| 7709 | B-W2-P3-21-09N1 | 1200 |
| 7710 | B-W2-P3-21-10N1 | 1200 |
| 7711 | B-W2-P3-21-11N1 | 1200 |
| 7712 | B-W2-P3-21-12N1 | 1200 |
| 7713 | B-W2-P3-21-13N2 | 1200 |
| 7714 | B-W2-P3-21-14N2 | 1200 |
| 7801 | B-W2-P2-16-01N1 | 1200 |
| 7802 | B-W2-P2-16-02N1 | 1200 |
| 7803 | B-W2-P2-16-03N1 | 1200 |
| 7804 | B-W2-P2-16-04N1 | 1200 |
| 7805 | B-W2-P2-16-05N1 | 1200 |
| 7806 | B-W2-P2-16-06N1 | 1200 |
| 7807 | B-W2-P2-16-07N1 | 1200 |
| 7808 | B-W2-P2-16-08N1 | 1200 |
| 7809 | B-W2-P2-16-09N1 | 1200 |
| 7810 | B-W2-P2-16-10N1 | 1200 |
| 7811 | B-W2-P2-16-11N1 | 1200 |
| 7812 | B-W2-P2-16-12N1 | 1200 |
| 7813 | B-W2-P2-16-13N2 | 1200 |
| 7814 | B-W2-P2-16-14N2 | 1200 |
| 7901 | B-W2-P2-15-01N1 | 1200 |
| 7902 | B-W2-P2-15-02N1 | 1200 |
| 7903 | B-W2-P2-15-03N1 | 1200 |
| 7904 | B-W2-P2-15-04N1 | 1200 |
| 7905 | B-W2-P2-15-05N1 | 1200 |
| 7906 | B-W2-P2-15-06N1 | 1200 |
| 7907 | B-W2-P2-15-07N1 | 1200 |
| 7908 | B-W2-P2-15-08N1 | 1200 |
| 7909 | B-W2-P2-15-09N1 | 1200 |
| 7910 | B-W2-P2-15-10N1 | 1200 |
| 7911 | B-W2-P2-15-11N1 | 1200 |
| 7912 | B-W2-P2-15-12N1 | 1200 |
| 7913 | B-W2-P2-15-13N2 | 1200 |
| 7914 | B-W2-P2-15-14N2 | 1200 |
| 8001 | B-W2-P2-17-01N1 | 1200 |
| 8002 | B-W2-P2-17-02N1 | 1200 |
| 8003 | B-W2-P2-17-03N1 | 1200 |
| 8004 | B-W2-P2-17-04N1 | 1200 |
| 8005 | B-W2-P2-17-05N1 | 1200 |
| 8006 | B-W2-P2-17-06N1 | 1200 |
| 8007 | B-W2-P2-17-07N1 | 1200 |
| 8008 | B-W2-P2-17-08N1 | 1200 |
| 8009 | B-W2-P2-17-09N1 | 1200 |
| 8010 | B-W2-P2-17-10N1 | 1200 |
| 8011 | B-W2-P2-17-11N1 | 1200 |
| 8012 | B-W2-P2-17-12N1 | 1200 |
| 8013 | B-W2-P2-17-13N2 | 1200 |
| 8014 | B-W2-P2-17-14N2 | 1200 |
| 8015 | B-W2-P2-17-15N2 | 1200 |
| 8016 | B-W2-P2-17-16N2 | 1200 |
| 8101 | B-W2-P2-18-01N1 | 1200 |
| 8102 | B-W2-P2-18-02N1 | 1200 |
| 8103 | B-W2-P2-18-03N1 | 1200 |
| 8104 | B-W2-P2-18-04N1 | 1200 |
| 8105 | B-W2-P2-18-05N1 | 1200 |
| 8106 | B-W2-P2-18-06N1 | 1200 |
| 8107 | B-W2-P2-18-07N1 | 1200 |
| 8108 | B-W2-P2-18-08N1 | 1200 |
| 8109 | B-W2-P2-18-09N1 | 1200 |
| 8110 | B-W2-P2-18-10N1 | 1200 |
| 8111 | B-W2-P2-18-11N1 | 1200 |
| 8112 | B-W2-P2-18-12N1 | 1200 |
| 8201 | B-W2-P2-20-01N1 | 1200 |
| 8202 | B-W2-P2-20-02N1 | 1200 |
| 8203 | B-W2-P2-20-03N1 | 1200 |
| 8204 | B-W2-P2-20-04N1 | 1200 |
| 8205 | B-W2-P2-20-05N1 | 1200 |
| 8206 | B-W2-P2-20-06N1 | 1200 |
| 8207 | B-W2-P2-20-07N1 | 1200 |
| 8208 | B-W2-P2-20-08N1 | 1200 |
| 8209 | B-W2-P2-20-09N1 | 1200 |
| 8210 | B-W2-P2-20-10N1 | 1200 |
| 8211 | B-W2-P2-20-11N1 | 1200 |
| 8212 | B-W2-P2-20-12N1 | 1200 |
| 8213 | B-W2-P2-20-13N2 | 1200 |
| 8214 | B-W2-P2-20-14N2 | 1200 |
| 8301 | B-W2-P2-19-01N1 | 1200 |
| 8302 | B-W2-P2-19-02N1 | 1200 |
| 8303 | B-W2-P2-19-03N1 | 1200 |
| 8304 | B-W2-P2-19-04N1 | 1200 |
| 8305 | B-W2-P2-19-05N1 | 1200 |
| 8306 | B-W2-P2-19-06N1 | 1200 |
| 8307 | B-W2-P2-19-07N1 | 1200 |
| 8308 | B-W2-P2-19-08N1 | 1200 |
| 8309 | B-W2-P2-19-09N1 | 1200 |
| 8310 | B-W2-P2-19-10N1 | 1200 |
| 8311 | B-W2-P2-19-11N1 | 1200 |
| 8312 | B-W2-P2-19-12N1 | 1200 |
| 8313 | B-W2-P2-19-13N2 | 1200 |
| 8314 | B-W2-P2-19-14N2 | 1200 |
| 8401 | B-Butn2-03-01N1 | 1200 |
| 8402 | B-Butn2-03-02N1 | 1200 |
| 8403 | B-Butn2-03-03N1 | 1200 |
| 8404 | B-Butn2-03-04N1 | 1200 |
| 8405 | B-Butn2-03-05N1 | 1200 |
| 8406 | B-Butn2-03-06N1 | 1200 |
| 8407 | B-Butn2-03-07N1 | 1200 |
| 8408 | B-Butn2-03-08N1 | 1200 |
| 8409 | B-Butn2-03-09N1 | 1200 |
| 8410 | B-Butn2-03-10N1 | 1200 |
| 8411 | B-Butn2-03-11N2 | 1200 |
| 8412 | B-Butn2-03-12N2 | 1200 |
| 8501 | B-Butn2-04-01N1 | 1200 |
| 8502 | B-Butn2-04-02N1 | 1200 |
| 8503 | B-Butn2-04-03N1 | 1200 |
| 8504 | B-Butn2-04-04N1 | 1200 |
| 8505 | B-Butn2-04-05N1 | 1200 |
| 8506 | B-Butn2-04-06N1 | 1200 |
| 8507 | B-Butn2-04-07N1 | 1200 |
| 8508 | B-Butn2-04-08N1 | 1200 |
| 8509 | B-Butn2-04-09N1 | 1200 |
| 8510 | B-Butn2-04-10N1 | 1200 |
| 8511 | B-Butn2-04-11N2 | 1200 |
| 8512 | B-Butn2-04-12N2 | 1200 |
| 8601 | B-Butn2-02-01N1 | 1200 |
| 8602 | B-Butn2-02-02N1 | 1200 |
| 8603 | B-Butn2-02-03N1 | 1200 |
| 8604 | B-Butn2-02-04N1 | 1200 |
| 8605 | B-Butn2-02-05N1 | 1200 |
| 8606 | B-Butn2-02-06N1 | 1200 |
| 8607 | B-Butn2-02-07N1 | 1200 |
| 8608 | B-Butn2-02-08N1 | 1200 |
| 8609 | B-Butn2-02-09N1 | 1200 |
| 8610 | B-Butn2-02-10N1 | 1200 |
| 8611 | B-Butn2-02-11N2 | 1200 |
| 8612 | B-Butn2-02-12N2 | 1200 |
| 8701 | B-Butn2-01-01N1 | 1200 |
| 8702 | B-Butn2-01-02N1 | 1200 |
| 8703 | B-Butn2-01-03N1 | 1200 |
| 8704 | B-Butn2-01-04N1 | 1200 |
| 8705 | B-Butn2-01-05N1 | 1200 |
| 8706 | B-Butn2-01-06N1 | 1200 |
| 8707 | B-Butn2-01-07N1 | 1200 |
| 8708 | B-Butn2-01-08N1 | 1200 |
| 8709 | B-Butn2-01-09N1 | 1200 |
| 8710 | B-Butn2-01-10N1 | 1200 |
| 8801 | B-Butn3-04-01N1 | 1200 |
| 8802 | B-Butn3-04-02N1 | 1200 |
| 8803 | B-Butn3-04-03N1 | 1200 |
| 8804 | B-Butn3-04-04N1 | 1200 |
| 8805 | B-Butn3-04-05N1 | 1200 |
| 8806 | B-Butn3-04-06N1 | 1200 |
| 8807 | B-Butn3-04-07N1 | 1200 |
| 8808 | B-Butn3-04-08N1 | 1200 |
| 8809 | B-Butn3-04-09N1 | 1200 |
| 8810 | B-Butn3-04-10N1 | 1200 |
| 8901 | B-Butn3-01-01N1 | 1200 |
| 8902 | B-Butn3-01-02N1 | 1200 |
| 8903 | B-Butn3-01-03N1 | 1200 |
| 8904 | B-Butn3-01-04N1 | 1200 |
| 8905 | B-Butn3-01-05N1 | 1200 |
| 8906 | B-Butn3-01-06N1 | 1200 |
| 8907 | B-Butn3-01-07N1 | 1200 |
| 8908 | B-Butn3-01-08N1 | 1200 |
| 8909 | B-Butn3-01-09N1 | 1200 |
| 8910 | B-Butn3-01-10N1 | 1200 |
| 8911 | B-Butn3-01-11N2 | 1200 |
| 8912 | B-Butn3-01-12N2 | 1200 |
| 9001 | B-Butn3-03-01N1 | 1200 |
| 9002 | B-Butn3-03-02N1 | 1200 |
| 9003 | B-Butn3-03-03N1 | 1200 |
| 9004 | B-Butn3-03-04N1 | 1200 |
| 9005 | B-Butn3-03-05N1 | 1200 |
| 9006 | B-Butn3-03-06N1 | 1200 |
| 9007 | B-Butn3-03-07N1 | 1200 |
| 9008 | B-Butn3-03-08N1 | 1200 |
| 9009 | B-Butn3-03-09N1 | 1200 |
| 9010 | B-Butn3-03-10N1 | 1200 |
| 9011 | B-Butn3-03-11N2 | 1200 |
| 9012 | B-Butn3-03-12N2 | 1200 |
| 9101 | B-Butn3-02-01N1 | 1200 |
| 9102 | B-Butn3-02-02N1 | 1200 |
| 9103 | B-Butn3-02-03N1 | 1200 |
| 9104 | B-Butn3-02-04N1 | 1200 |
| 9105 | B-Butn3-02-05N1 | 1200 |
| 9106 | B-Butn3-02-06N1 | 1200 |
| 9107 | B-Butn3-02-07N1 | 1200 |
| 9108 | B-Butn3-02-08N1 | 1200 |
| 9109 | B-Butn3-02-09N1 | 1200 |
| 9110 | B-Butn3-02-10N1 | 1200 |
| 9111 | B-Butn3-02-11N2 | 1200 |
| 9112 | B-Butn3-02-12N2 | 1200 |
| 9201 | B-Shmali-01-01N2 | 1200 |
| 9202 | B-Shmali-01-02N2 | 1200 |
| 9203 | B-Shmali-01-03N2 | 1200 |
| 9204 | B-Shmali-01-04N2 | 1200 |
| 9205 | B-Shmali-01-05N2 | 1200 |
| 9206 | B-Shmali-01-06N2 | 1200 |
| 9207 | B-Shmali-01-07N2 | 1200 |
| 9208 | B-Shmali-01-08N2 | 1200 |
| 9209 | B-Shmali-01-09N2 | 1200 |
| 9210 | B-Shmali-01-10N2 | 1200 |
| 9211 | B-Shmali-01-11N2 | 1200 |
| 9212 | B-Shmali-01-12N2 | 1200 |
| 9301 | B-Shmali-02-01N2 | 1200 |
| 9302 | B-Shmali-02-02N2 | 1200 |
| 9303 | B-Shmali-02-03N2 | 1200 |
| 9304 | B-Shmali-02-04N2 | 1200 |
| 9305 | B-Shmali-02-05N2 | 1200 |
| 9306 | B-Shmali-02-06N2 | 1200 |
| 9307 | B-Shmali-02-07N2 | 1200 |
| 9308 | B-Shmali-02-08N2 | 1200 |
| 9309 | B-Shmali-02-09N2 | 1200 |
| 9310 | B-Shmali-02-10N2 | 1200 |
| 9311 | B-Shmali-02-11N2 | 1200 |
| 9312 | B-Shmali-02-12N2 | 1200 |
| 9401 | B-Shmali-03-01N2 | 1200 |
| 9402 | B-Shmali-03-02N2 | 1200 |
| 9403 | B-Shmali-03-03N2 | 1200 |
| 9404 | B-Shmali-03-04N2 | 1200 |
| 9405 | B-Shmali-03-05N2 | 1200 |
| 9406 | B-Shmali-03-06N2 | 1200 |
| 9407 | B-Shmali-03-07N2 | 1200 |
| 9408 | B-Shmali-03-08N2 | 1200 |
| 9409 | B-Shmali-03-09N2 | 1200 |
| 9410 | B-Shmali-03-10N2 | 1200 |
| 9411 | B-Shmali-03-11N2 | 1200 |
| 9412 | B-Shmali-03-12N2 | 1200 |
| 0101 | PL-Dulfa-F01-01N | 1220 |
| 0102 | PL-Dulfa-F01-02N | 1220 |
| 0103 | PL-Dulfa-F01-03N | 1220 |
| 0104 | PL-Dulfa-F01-04N | 1220 |
| 0105 | PL-Dulfa-F01-05N | 1220 |
| 0106 | PL-Dulfa-F01-06N | 1220 |
| 0201 | PL-Dulfa-F02-01N | 1220 |
| 0202 | PL-Dulfa-F02-02N | 1220 |
| 0203 | PL-Dulfa-F02-03N | 1220 |
| 0204 | PL-Dulfa-F02-04N | 1220 |
| 0205 | PL-Dulfa-F02-05N | 1220 |
| 0206 | PL-Dulfa-F02-06N | 1220 |
| 0301 | PL-Dulfa-F03-01N | 1220 |
| 0302 | PL-Dulfa-F03-02N | 1220 |
| 0303 | PL-Dulfa-F03-03N | 1220 |
| 0304 | PL-Dulfa-F03-04N | 1220 |
| 0305 | PL-Dulfa-F03-05N | 1220 |
| 0306 | PL-Dulfa-F03-06N | 1220 |
| 0401 | PL-Dulfa-F04-01N | 1220 |
| 0402 | PL-Dulfa-F04-02N | 1220 |
| 0403 | PL-Dulfa-F04-03N | 1220 |
| 0404 | PL-Dulfa-F04-04N | 1220 |
| 0405 | PL-Dulfa-F04-05N | 1220 |
| 0406 | PL-Dulfa-F04-06N | 1220 |
| 0501 | PL-Dulfa-F05-01N | 1220 |
| 0502 | PL-Dulfa-F05-02N | 1220 |
| 0503 | PL-Dulfa-F05-03N | 1220 |
| 0504 | PL-Dulfa-F05-04N | 1220 |
| 0505 | PL-Dulfa-F05-05N | 1220 |
| 0506 | PL-Dulfa-F05-06N | 1220 |
| 0601 | PL-Dulfa-F06-01N | 1220 |
| 0602 | PL-Dulfa-F06-02N | 1220 |
| 0603 | PL-Dulfa-F06-03N | 1220 |
| 0604 | PL-Dulfa-F06-04N | 1220 |
| 0605 | PL-Dulfa-F06-05N | 1220 |
| 0606 | PL-Dulfa-F06-06N | 1220 |
| 0701 | PL-Dulfa-F07-01N | 1220 |
| 0702 | PL-Dulfa-F07-02N | 1220 |
| 0703 | PL-Dulfa-F07-03N | 1220 |
| 0704 | PL-Dulfa-F07-04N | 1220 |
| 0705 | PL-Dulfa-F07-05N | 1220 |
| 0706 | PL-Dulfa-F07-06N | 1220 |
| 0801 | PL-Dulfa-F08-01N | 1220 |
| 0802 | PL-Dulfa-F08-02N | 1220 |
| 0803 | PL-Dulfa-F08-03N | 1220 |
| 0804 | PL-Dulfa-F08-04N | 1220 |
| 0805 | PL-Dulfa-F08-05N | 1220 |
| 0806 | PL-Dulfa-F08-06N | 1220 |
| 0901 | PL-Kubid-F07-01N | 1220 |
| 0902 | PL-Kubid-F07-02N | 1220 |
| 0903 | PL-Kubid-F07-03N | 1220 |
| 0904 | PL-Kubid-F07-04N | 1220 |
| 0905 | PL-Kubid-F07-05N | 1220 |
| 0906 | PL-Kubid-F07-06N | 1220 |
| 1001 | PL-Kubid-F08-01N | 1220 |
| 1002 | PL-Kubid-F08-02N | 1220 |
| 1003 | PL-Kubid-F08-03N | 1220 |
| 1004 | PL-Kubid-F08-04N | 1220 |
| 1005 | PL-Kubid-F08-05N | 1220 |
| 1006 | PL-Kubid-F08-06N | 1220 |
| 1101 | PL-Kubid-F09-01N | 1220 |
| 1102 | PL-Kubid-F09-02N | 1220 |
| 1103 | PL-Kubid-F09-03N | 1220 |
| 1104 | PL-Kubid-F09-04N | 1220 |
| 1105 | PL-Kubid-F09-05N | 1220 |
| 1106 | PL-Kubid-F09-06N | 1220 |
| 1201 | PL-Kubid-F10-01N | 1220 |
| 1202 | PL-Kubid-F10-02N | 1220 |
| 1203 | PL-Kubid-F10-03N | 1220 |
| 1204 | PL-Kubid-F10-04N | 1220 |
| 1205 | PL-Kubid-F10-05N | 1220 |
| 1206 | PL-Kubid-F10-06N | 1220 |
| 1301 | PL-Kubid-F11-01N | 1220 |
| 1302 | PL-Kubid-F11-02N | 1220 |
| 1303 | PL-Kubid-F11-03N | 1220 |
| 1304 | PL-Kubid-F11-04N | 1220 |
| 1305 | PL-Kubid-F11-05N | 1220 |
| 1306 | PL-Kubid-F11-06N | 1220 |
| 1401 | PL-Kubid-F12-01N | 1220 |
| 1402 | PL-Kubid-F12-02N | 1220 |
| 1403 | PL-Kubid-F12-03N | 1220 |
| 1404 | PL-Kubid-F12-04N | 1220 |
| 1405 | PL-Kubid-F12-05N | 1220 |
| 1406 | PL-Kubid-F12-06N | 1220 |
| 1501 | PL-Kubid-F13-01N | 1220 |
| 1502 | PL-Kubid-F13-02N | 1220 |
| 1503 | PL-Kubid-F13-03N | 1220 |
| 1504 | PL-Kubid-F13-04N | 1220 |
| 1505 | PL-Kubid-F13-05N | 1220 |
| 1506 | PL-Kubid-F13-06N | 1220 |
| 1601 | PL-Kubid-F14-01N | 1220 |
| 1602 | PL-Kubid-F14-02N | 1220 |
| 1603 | PL-Kubid-F14-03N | 1220 |
| 1604 | PL-Kubid-F14-04N | 1220 |
| 1605 | PL-Kubid-F14-05N | 1220 |
| 1606 | PL-Kubid-F14-06N | 1220 |
| 1701 | PL-Kubid-F15-01N | 1220 |
| 1702 | PL-Kubid-F15-02N | 1220 |
| 1703 | PL-Kubid-F15-03N | 1220 |
| 1704 | PL-Kubid-F15-04N | 1220 |
| 1705 | PL-Kubid-F15-05N | 1220 |
| 1706 | PL-Kubid-F15-06N | 1220 |
| 1801 | PL-Kubid-F16-01N | 1220 |
| 1802 | PL-Kubid-F16-02N | 1220 |
| 1803 | PL-Kubid-F16-03N | 1220 |
| 1804 | PL-Kubid-F16-04N | 1220 |
| 1805 | PL-Kubid-F16-05N | 1220 |
| 1806 | PL-Kubid-F16-06N | 1220 |
| 1901 | PL-Kubid-F17-01N | 1220 |
| 1902 | PL-Kubid-F17-02N | 1220 |
| 1903 | PL-Kubid-F17-03N | 1220 |
| 1904 | PL-Kubid-F17-04N | 1220 |
| 1905 | PL-Kubid-F17-05N | 1220 |
| 1906 | PL-Kubid-F17-06N | 1220 |
| 2001 | PL-Kubid-F18-01N | 1220 |
| 2002 | PL-Kubid-F18-02N | 1220 |
| 2003 | PL-Kubid-F18-03N | 1220 |
| 2004 | PL-Kubid-F18-04N | 1220 |
| 2005 | PL-Kubid-F18-05N | 1220 |
| 2006 | PL-Kubid-F18-06N | 1220 |
| 2101 | PL-Kubid-F19-01N | 1220 |
| 2102 | PL-Kubid-F19-02N | 1220 |
| 2103 | PL-Kubid-F19-03N | 1220 |
| 2104 | PL-Kubid-F19-04N | 1220 |
| 2105 | PL-Kubid-F19-05N | 1220 |
| 2106 | PL-Kubid-F19-06N | 1220 |
| 2201 | PL-Kubid-F20-01C | 1220 |
| 2202 | PL-Kubid-F20-02C | 1220 |
| 2301 | PL-Kubid-F21-01N | 1220 |
| 2302 | PL-Kubid-F21-02N | 1220 |
| 2303 | PL-Kubid-F21-03N | 1220 |
| 2304 | PL-Kubid-F21-04N | 1220 |
| 2305 | PL-Kubid-F21-05N | 1220 |
| 2306 | PL-Kubid-F21-06N | 1220 |
| 2307 | PL-Kubid-F21-07N | 1220 |
| 2401 | PL-Kubid-F22-01N | 1220 |
| 2402 | PL-Kubid-F22-02N | 1220 |
| 2403 | PL-Kubid-F22-03N | 1220 |
| 2404 | PL-Kubid-F22-04N | 1220 |
| 2405 | PL-Kubid-F22-05N | 1220 |
| 2406 | PL-Kubid-F22-06N | 1220 |
| 2407 | PL-Kubid-F22-07N | 1220 |
| 2501 | PL-Kubid-F23-01N | 1220 |
| 2502 | PL-Kubid-F23-02N | 1220 |
| 2503 | PL-Kubid-F23-03N | 1220 |
| 2504 | PL-Kubid-F23-04N | 1220 |
| 2505 | PL-Kubid-F23-05N | 1220 |
| 2506 | PL-Kubid-F23-06N | 1220 |
| 2507 | PL-Kubid-F23-07N | 1220 |
| 2601 | PL-Wadi-F01-01N | 1220 |
| 2602 | PL-Wadi-F01-02N | 1220 |
| 2603 | PL-Wadi-F01-03N | 1220 |
| 2604 | PL-Wadi-F01-04N | 1220 |
| 2605 | PL-Wadi-F01-05N | 1220 |
| 2606 | PL-Wadi-F01-06N | 1220 |
| 2701 | PL-Wadi-F02-01N | 1220 |
| 2702 | PL-Wadi-F02-02N | 1220 |
| 2703 | PL-Wadi-F02-03N | 1220 |
| 2704 | PL-Wadi-F02-04N | 1220 |
| 2705 | PL-Wadi-F02-05N | 1220 |
| 2706 | PL-Wadi-F02-06N | 1220 |
| 2801 | PL-Wadi-F03-01N | 1220 |
| 2802 | PL-Wadi-F03-02N | 1220 |
| 2803 | PL-Wadi-F03-03N | 1220 |
| 2804 | PL-Wadi-F03-04N | 1220 |
| 2805 | PL-Wadi-F03-05N | 1220 |
| 2806 | PL-Wadi-F03-06N | 1220 |
| 2901 | PL-Wadi-F04-01N | 1220 |
| 2902 | PL-Wadi-F04-02N | 1220 |
| 2903 | PL-Wadi-F04-03N | 1220 |
| 2904 | PL-Wadi-F04-04N | 1220 |
| 2905 | PL-Wadi-F04-05N | 1220 |
| 2906 | PL-Wadi-F04-06N | 1220 |
| 3001 | PL-Wadi-F05-01N | 1220 |
| 3002 | PL-Wadi-F05-02N | 1220 |
| 3003 | PL-Wadi-F05-03N | 1220 |
| 3004 | PL-Wadi-F05-04N | 1220 |
| 3005 | PL-Wadi-F05-05N | 1220 |
| 3006 | PL-Wadi-F05-06N | 1220 |
| 3101 | PL-Wadi-F06-01N | 1220 |
| 3102 | PL-Wadi-F06-02N | 1220 |
| 3103 | PL-Wadi-F06-03N | 1220 |
| 3104 | PL-Wadi-F06-04N | 1220 |
| 3105 | PL-Wadi-F06-05N | 1220 |
| 3106 | PL-Wadi-F06-06N | 1220 |
| 3201 | PL-Wadi-F07-01N | 1220 |
| 3202 | PL-Wadi-F07-02N | 1220 |
| 3203 | PL-Wadi-F07-03N | 1220 |
| 3204 | PL-Wadi-F07-04N | 1220 |
| 3205 | PL-Wadi-F07-05N | 1220 |
| 3206 | PL-Wadi-F07-06N | 1220 |
| 3301 | PL-Wadi-F08-01N | 1220 |
| 3302 | PL-Wadi-F08-02N | 1220 |
| 3303 | PL-Wadi-F08-03N | 1220 |
| 3304 | PL-Wadi-F08-04N | 1220 |
| 3305 | PL-Wadi-F08-05N | 1220 |
| 3306 | PL-Wadi-F08-06N | 1220 |
| 3401 | PL-Wadi-F09-01N | 1220 |
| 3402 | PL-Wadi-F09-02N | 1220 |
| 3403 | PL-Wadi-F09-03N | 1220 |
| 3404 | PL-Wadi-F09-04N | 1220 |
| 3405 | PL-Wadi-F09-05N | 1220 |
| 3406 | PL-Wadi-F09-06N | 1220 |
| 3501 | PL-Wadi-F10-01N | 1220 |
| 3502 | PL-Wadi-F10-02N | 1220 |
| 3503 | PL-Wadi-F10-03N | 1220 |
| 3504 | PL-Wadi-F10-04N | 1220 |
| 3505 | PL-Wadi-F10-05N | 1220 |
| 3506 | PL-Wadi-F10-06N | 1220 |
| 3601 | PL-Wadi-F11-01N | 1220 |
| 3602 | PL-Wadi-F11-02N | 1220 |
| 3603 | PL-Wadi-F11-03N | 1220 |
| 3604 | PL-Wadi-F11-04N | 1220 |
| 3605 | PL-Wadi-F11-05N | 1220 |
| 3606 | PL-Wadi-F11-06N | 1220 |
| 3701 | PL-Sheri-F01-01N | 1220 |
| 3702 | PL-Sheri-F01-02N | 1220 |
| 3703 | PL-Sheri-F01-03N | 1220 |
| 3704 | PL-Sheri-F01-04N | 1220 |
| 3705 | PL-Sheri-F01-05N | 1220 |
| 3706 | PL-Sheri-F01-06N | 1220 |
| 3707 | PL-Sheri-F01-07N | 1220 |
| 3708 | PL-Sheri-F01-08N | 1220 |
| 3801 | PL-Sheri-F02-01N | 1220 |
| 3802 | PL-Sheri-F02-02N | 1220 |
| 3803 | PL-Sheri-F02-03N | 1220 |
| 3804 | PL-Sheri-F02-04N | 1220 |
| 3805 | PL-Sheri-F02-05N | 1220 |
| 3806 | PL-Sheri-F02-06N | 1220 |
| 3807 | PL-Sheri-F02-07N | 1220 |
| 3808 | PL-Sheri-F02-08N | 1220 |
| 3901 | PL-Sheri-F03-01N | 1220 |
| 3902 | PL-Sheri-F03-02N | 1220 |
| 3903 | PL-Sheri-F03-03N | 1220 |
| 3904 | PL-Sheri-F03-04N | 1220 |
| 3905 | PL-Sheri-F03-05N | 1220 |
| 3906 | PL-Sheri-F03-06N | 1220 |
| 3907 | PL-Sheri-F03-07N | 1220 |
| 3908 | PL-Sheri-F03-08N | 1220 |
| 4001 | PL-Sheri-F04-01N | 1220 |
| 4002 | PL-Sheri-F04-02N | 1220 |
| 4003 | PL-Sheri-F04-03N | 1220 |
| 4004 | PL-Sheri-F04-04N | 1220 |
| 4005 | PL-Sheri-F04-05N | 1220 |
| 4006 | PL-Sheri-F04-06N | 1220 |
| 4007 | PL-Sheri-F04-07N | 1220 |
| 4008 | PL-Sheri-F04-08N | 1220 |
| 4101 | PL-Sheri-F05-01N | 1220 |
| 4102 | PL-Sheri-F05-02N | 1220 |
| 4103 | PL-Sheri-F05-03N | 1220 |
| 4104 | PL-Sheri-F05-04N | 1220 |
| 4105 | PL-Sheri-F05-05N | 1220 |
| 4106 | PL-Sheri-F05-06N | 1220 |
| 4107 | PL-Sheri-F05-07N | 1220 |
| 4108 | PL-Sheri-F05-08N | 1220 |
| 4201 | PL-Sheri-F06-01N | 1220 |
| 4202 | PL-Sheri-F06-02N | 1220 |
| 4203 | PL-Sheri-F06-03N | 1220 |
| 4204 | PL-Sheri-F06-04N | 1220 |
| 4205 | PL-Sheri-F06-05N | 1220 |
| 4206 | PL-Sheri-F06-06N | 1220 |
| 4207 | PL-Sheri-F06-07N | 1220 |
| 4208 | PL-Sheri-F06-08N | 1220 |
| 4301 | PL-Sheri-F07-01N | 1220 |
| 4302 | PL-Sheri-F07-02N | 1220 |
| 4303 | PL-Sheri-F07-03N | 1220 |
| 4304 | PL-Sheri-F07-04N | 1220 |
| 4305 | PL-Sheri-F07-05N | 1220 |
| 4306 | PL-Sheri-F07-06N | 1220 |
| 4307 | PL-Sheri-F07-07N | 1220 |
| 4308 | PL-Sheri-F07-08N | 1220 |
| 4401 | PL-Sheri-F08-01N | 1220 |
| 4402 | PL-Sheri-F08-02N | 1220 |
| 4403 | PL-Sheri-F08-03N | 1220 |
| 4404 | PL-Sheri-F08-04N | 1220 |
| 4405 | PL-Sheri-F08-05N | 1220 |
| 4406 | PL-Sheri-F08-06N | 1220 |
| 4407 | PL-Sheri-F08-07N | 1220 |
| 4408 | PL-Sheri-F08-08N | 1220 |
| 4501 | PL-Sheri-F09-01N | 1220 |
| 4502 | PL-Sheri-F09-02N | 1220 |
| 4503 | PL-Sheri-F09-03N | 1220 |
| 4504 | PL-Sheri-F09-04N | 1220 |
| 4505 | PL-Sheri-F09-05N | 1220 |
| 4506 | PL-Sheri-F09-06N | 1220 |
| 4507 | PL-Sheri-F09-07N | 1220 |
| 4508 | PL-Sheri-F09-08N | 1220 |
| 4601 | PL-Sheri-F10-01N | 1220 |
| 4602 | PL-Sheri-F10-02N | 1220 |
| 4603 | PL-Sheri-F10-03N | 1220 |
| 4604 | PL-Sheri-F10-04N | 1220 |
| 4605 | PL-Sheri-F10-05N | 1220 |
| 4606 | PL-Sheri-F10-06N | 1220 |
| 4607 | PL-Sheri-F10-07N | 1220 |
| 4608 | PL-Sheri-F10-08N | 1220 |
| 4701 | PL-Sheri-F11-01N | 1220 |
| 4702 | PL-Sheri-F11-02N | 1220 |
| 4703 | PL-Sheri-F11-03N | 1220 |
| 4704 | PL-Sheri-F11-04N | 1220 |
| 4705 | PL-Sheri-F11-05N | 1220 |
| 4706 | PL-Sheri-F11-06N | 1220 |
| 4707 | PL-Sheri-F11-07N | 1220 |
| 4708 | PL-Sheri-F11-08N | 1220 |
| 4801 | PL-Sheri-F12-01N | 1220 |
| 4802 | PL-Sheri-F12-02N | 1220 |
| 4803 | PL-Sheri-F12-03N | 1220 |
| 4804 | PL-Sheri-F12-04N | 1220 |
| 4805 | PL-Sheri-F12-05N | 1220 |
| 4806 | PL-Sheri-F12-06N | 1220 |
| 4807 | PL-Sheri-F12-07N | 1220 |
| 4808 | PL-Sheri-F12-08N | 1220 |
| 4901 | PL-Sheri-F13-01N | 1220 |
| 4902 | PL-Sheri-F13-02N | 1220 |
| 4903 | PL-Sheri-F13-03N | 1220 |
| 4904 | PL-Sheri-F13-04N | 1220 |
| 4905 | PL-Sheri-F13-05N | 1220 |
| 4906 | PL-Sheri-F13-06N | 1220 |
| 4907 | PL-Sheri-F13-07N | 1220 |
| 4908 | PL-Sheri-F13-08N | 1220 |
| 5001 | PL-Dulfa-F09-01N | 1220 |
| 5002 | PL-Dulfa-F09-02N | 1220 |
| 5003 | PL-Dulfa-F09-03N | 1220 |
| 5004 | PL-Dulfa-F09-04N | 1220 |
| 5005 | PL-Dulfa-F09-05N | 1220 |
| 5006 | PL-Dulfa-F09-06N | 1220 |
| 5007 | PL-Dulfa-F09-07N | 1220 |
| 0101 | PR-Dulfa-01-01F | 1230 |
| 0102 | PR-Dulfa-01-02F | 1230 |
| 0103 | PR-Dulfa-01-03F | 1230 |
| 0104 | PR-Dulfa-01-04F | 1230 |
| 0105 | PR-Dulfa-01-05M | 1230 |
| 0201 | PR-Dulfa-02-01F | 1230 |
| 0202 | PR-Dulfa-02-02F | 1230 |
| 0203 | PR-Dulfa-02-03F | 1230 |
| 0204 | PR-Dulfa-02-04F | 1230 |
| 0205 | PR-Dulfa-02-05M | 1230 |
| 0301 | PR-Dulfa-03-01F | 1230 |
| 0302 | PR-Dulfa-03-02F | 1230 |
| 0303 | PR-Dulfa-03-03F | 1230 |
| 0304 | PR-Dulfa-03-04F | 1230 |
| 0305 | PR-Dulfa-03-05M | 1230 |
| 0401 | PR-Dulfa-04-01F | 1230 |
| 0402 | PR-Dulfa-04-02F | 1230 |
| 0403 | PR-Dulfa-04-03F | 1230 |
| 0404 | PR-Dulfa-04-04F | 1230 |
| 0405 | PR-Dulfa-04-05M | 1230 |
| 0501 | PR-Wadi-01-01F | 1230 |
| 0502 | PR-Wadi-01-02F | 1230 |
| 0503 | PR-Wadi-01-03F | 1230 |
| 0504 | PR-Wadi-01-04M | 1230 |
| 0505 | PR-Wadi-01-05F | 1230 |
| 0601 | PR-Wadi-02-01F | 1230 |
| 0602 | PR-Wadi-02-02F | 1230 |
| 0603 | PR-Wadi-02-03F | 1230 |
| 0604 | PR-Wadi-02-04M | 1230 |
| 0605 | PR-Wadi-02-05F | 1230 |
| 0701 | PR-Wadi-03-01F | 1230 |
| 0702 | PR-Wadi-03-02F | 1230 |
| 0703 | PR-Wadi-03-03F | 1230 |
| 0704 | PR-Wadi-03-04M | 1230 |
| 0705 | PR-Wadi-03-05F | 1230 |
| 0801 | PR-Wadi-04-01F | 1230 |
| 0802 | PR-Wadi-04-02F | 1230 |
| 0803 | PR-Wadi-04-03F | 1230 |
| 0804 | PR-Wadi-04-04M | 1230 |
| 0805 | PR-Wadi-04-05F | 1230 |
| 0901 | PR-Wadi-05-01F | 1230 |
| 0902 | PR-Wadi-05-02F | 1230 |
| 0903 | PR-Wadi-05-03F | 1230 |
| 0904 | PR-Wadi-05-04M | 1230 |
| 0905 | PR-Wadi-05-05F | 1230 |
| 1001 | PR-Wadi-06-01F | 1230 |
| 1002 | PR-Wadi-06-02F | 1230 |
| 1003 | PR-Wadi-06-03F | 1230 |
| 1004 | PR-Wadi-06-04M | 1230 |
| 1005 | PR-Wadi-06-05F | 1230 |
| 1101 | PR-Wadi-07-01F | 1230 |
| 1102 | PR-Wadi-07-02F | 1230 |
| 1103 | PR-Wadi-07-03F | 1230 |
| 1104 | PR-Wadi-07-04M | 1230 |
| 1105 | PR-Wadi-07-05F | 1230 |
| 1201 | PR-Sheri-01-01F | 1230 |
| 1202 | PR-Sheri-01-02F | 1230 |
| 1203 | PR-Sheri-01-03F | 1230 |
| 1204 | PR-Sheri-01-04F | 1230 |
| 1205 | PR-Sheri-01-05F | 1230 |
| 1206 | PR-Sheri-01-06M | 1230 |
| 1301 | PR-Sheri-02-01F | 1230 |
| 1302 | PR-Sheri-02-02F | 1230 |
| 1303 | PR-Sheri-02-03F | 1230 |
| 1304 | PR-Sheri-02-04F | 1230 |
| 1305 | PR-Sheri-02-05F | 1230 |
| 1306 | PR-Sheri-02-06M | 1230 |
| 1401 | PR-Sheri-03-01F | 1230 |
| 1402 | PR-Sheri-03-02F | 1230 |
| 1403 | PR-Sheri-03-03F | 1230 |
| 1404 | PR-Sheri-03-04F | 1230 |
| 1405 | PR-Sheri-03-05F | 1230 |
| 1406 | PR-Sheri-03-06M | 1230 |
| 1501 | PR-Sheri-04-01F | 1230 |
| 1502 | PR-Sheri-04-02F | 1230 |
| 1503 | PR-Sheri-04-03F | 1230 |
| 1504 | PR-Sheri-04-04F | 1230 |
| 1505 | PR-Sheri-04-05F | 1230 |
| 1506 | PR-Sheri-04-06M | 1230 |
| 1601 | PR-Sheri-05-01F | 1230 |
| 1602 | PR-Sheri-05-02F | 1230 |
| 1603 | PR-Sheri-05-03F | 1230 |
| 1604 | PR-Sheri-05-04F | 1230 |
| 1605 | PR-Sheri-05-05F | 1230 |
| 1606 | PR-Sheri-05-06M | 1230 |
| 1701 | PR-Sheri-06-01F | 1230 |
| 1702 | PR-Sheri-06-02F | 1230 |
| 1703 | PR-Sheri-06-03F | 1230 |
| 1704 | PR-Sheri-06-04F | 1230 |
| 1705 | PR-Sheri-06-05F | 1230 |
| 1706 | PR-Sheri-06-06M | 1230 |
| 1801 | PR-Sheri-07-01F | 1230 |
| 1802 | PR-Sheri-07-02F | 1230 |
| 1803 | PR-Sheri-07-03F | 1230 |
| 1804 | PR-Sheri-07-04F | 1230 |
| 1805 | PR-Sheri-07-05F | 1230 |
| 1806 | PR-Sheri-07-06M | 1230 |
| 1901 | PR-Sheri-08-01F | 1230 |
| 1902 | PR-Sheri-08-02F | 1230 |
| 1903 | PR-Sheri-08-03F | 1230 |
| 1904 | PR-Sheri-08-04F | 1230 |
| 1905 | PR-Sheri-08-05F | 1230 |
| 1906 | PR-Sheri-08-06M | 1230 |
| 2001 | PR-Sheri-09-01F | 1230 |
| 2002 | PR-Sheri-09-02F | 1230 |
| 2003 | PR-Sheri-09-03F | 1230 |
| 2004 | PR-Sheri-09-04F | 1230 |
| 2005 | PR-Sheri-09-05F | 1230 |
| 2006 | PR-Sheri-09-06M | 1230 |
| 2101 | PR-Sheri-10-01F | 1230 |
| 2102 | PR-Sheri-10-02F | 1230 |
| 2103 | PR-Sheri-10-03F | 1230 |
| 2104 | PR-Sheri-10-04F | 1230 |
| 2105 | PR-Sheri-10-05F | 1230 |
| 2106 | PR-Sheri-10-06M | 1230 |
| 2201 | PR-Sheri-11-01F | 1230 |
| 2202 | PR-Sheri-11-02F | 1230 |
| 2203 | PR-Sheri-11-03F | 1230 |
| 2204 | PR-Sheri-11-04F | 1230 |
| 2205 | PR-Sheri-11-05F | 1230 |
| 2206 | PR-Sheri-11-06M | 1230 |
| 2301 | PR-Sheri-12-01F | 1230 |
| 2302 | PR-Sheri-12-02F | 1230 |
| 2303 | PR-Sheri-12-03F | 1230 |
| 2304 | PR-Sheri-12-04F | 1230 |
| 2305 | PR-Sheri-12-05F | 1230 |
| 2306 | PR-Sheri-12-06M | 1230 |
| 0101 | LL01-01 | 1250 |
| 0102 | LL01-02 | 1250 |
| 0103 | LL01-03 | 1250 |
| 0104 | LL01-04 | 1250 |
| 0105 | LL01-05 | 1250 |
| 0106 | LL01-06 | 1250 |
| 0107 | LL01-07 | 1250 |
| 0108 | LL01-08 | 1250 |
| 0109 | LL01-09 | 1250 |
| 0110 | LL01-10 | 1250 |
| 0111 | LL01-11 | 1250 |
| 0112 | LL01-12 | 1250 |
| 0113 | LL01-13 | 1250 |
| 0114 | LL01-14 | 1250 |
| 0115 | LL01-15 | 1250 |
| 0116 | LL01-16 | 1250 |
| 0117 | LL01-17 | 1250 |
| 0118 | LL01-18 | 1250 |
| 0201 | LL02-01 | 1250 |
| 0202 | LL02-02 | 1250 |
| 0203 | LL02-03 | 1250 |
| 0204 | LL02-04 | 1250 |
| 0205 | LL02-05 | 1250 |
| 0206 | LL02-06 | 1250 |
| 0207 | LL02-07 | 1250 |
| 0208 | LL02-08 | 1250 |
| 0209 | LL02-09 | 1250 |
| 0210 | LL02-10 | 1250 |
| 0211 | LL02-11 | 1250 |
| 0212 | LL02-12 | 1250 |
| 0213 | LL02-13 | 1250 |
| 0214 | LL02-14 | 1250 |
| 0215 | LL02-15 | 1250 |
| 0216 | LL02-16 | 1250 |
| 0217 | LL02-17 | 1250 |
| 0218 | LL02-18 | 1250 |
| 1251 | Finished Layer 1 | 1250 |
| 1252 | Finished Layer 2 | 1250 |
| 1253 | C.Layer Packing | 1250 |
| 1254 | Grading Station1 | 1250 |
| 1255 | Grading Station2 | 1250 |
| 1256 | Finish Cold Str. | 1250 |
| 1257 | Egg Proc.Plant 2 | 1250 |
| 1258 | Egg Proc.Plant 3 | 1250 |
| 0101 | LR01-01 | 1260 |
| 0102 | LR01-02 | 1260 |
| 0103 | LR01-03 | 1260 |
| 0104 | LR01-04 | 1260 |
| 0105 | LR01-05 | 1260 |
| 0106 | LR01-06 | 1260 |
| 0201 | LR02-01 | 1260 |
| 0202 | LR02-02 | 1260 |
| 0203 | LR02-03 | 1260 |
| 0204 | LR02-04 | 1260 |
| 0205 | LR02-05 | 1260 |
| 0206 | LR02-06 | 1260 |
| 0101 | GL01-01 | 3200 |
| 0102 | GL01-02 | 3200 |
| 0201 | GL02-01 | 3200 |
| 0202 | GL02-02 | 3200 |
| 0301 | GL03-01 | 3200 |
| 0302 | GL03-02 | 3200 |
| 0401 | GL04-01 | 3200 |
| 0402 | GL04-02 | 3200 |
| 0501 | GL05-01 | 3200 |
| 0502 | GL05-02 | 3200 |
| 0601 | GL06-01 | 3200 |
| 0602 | GL06-02 | 3200 |
| 0701 | GL07-01 | 3200 |
| 0702 | GL07-02 | 3200 |
| 0801 | GL08-01 | 3200 |
| 0802 | GL08-02 | 3200 |
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

| **Live Operation Area** |
| --- |
| Broiler Area |
| Parent – Rearing Area |
| Parent – Laying Area |
| Layer – Rearing Area |
| Layer – Laying Area |
| GP – Rearing Area |
| GP – Laying Area |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Master Inspection Characteristic |
| Sampling Procedure |

### System Configuration Considerations

| **STO Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Item Interval** | **Release Strategy** |
|  |  | **From** | **To** |  |  |
| ZZ02 | PHD STO | 7700000000 | 7799999999 | 10 | S1 |

| **STO Release Strategy** |  |  |
| --- | --- | --- |
| **ID** | **Description** | **Release Group** | **Release Codes** | **Classification** |
| ST | PHD STO | S1 | P2 PHD Manager | Y_PURCH_ORD_TYPE = **ZZ02** |

## Technical/Development Related Items

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user gorup** |
| --- | --- | --- | --- | --- | --- | --- |
| 2 | Enhancement | E_PP-020 | BADI - ZWORKORDER_INFOSYSTE to add extra fields in COOIS | Order | COOIS | ZWORKORDER_INFOSYSTE |
| 7 | Enhancement | E_PP-070 | Posting date of confirmation should be in the same period/month of production order start date | Confirmation | CO11N | ZXCOFU14 |
| 177 | Report | R_PP-160 | ZPPH3 - Production Order Live Operation Data | Production Order | ZPPH3 | PP\ZPP_PRD_ORD_LV |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | PHD Responsible |  |
| 20 | PHD Manager |  |
| 30 | Department Planner |  |
| 40 | Stock Keeper |  |
| 50 | Farm Responsible |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 6 of 7 |
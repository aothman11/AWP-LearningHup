# PP-ORG-050 Broiler Area_V2

| pp-org-050: broiler area |
| --- |

## Definition 

Livestock management organizational unit, that we define the structure of broiler farms & houses.

**Farms:**

- SAP organization to model a broiler farm: 

- Storage location

- Purchasing group

- SAP master data to model a broiler farm:

- WBS element

- Work center (Also number of individuals capacities = number of houses)

- Routing

- Production version

- Quota arrangement for the assigned farm capacity to each broiler breed.

- Naming convention:

- Farm code as WBS & storage location: B & three digit for farm code (Ex. B001)

- Farm code as work center & production version: one digit for farm type B for normal 1 house, A for normal 2 house, C for house type cage 1, and D for house type cage 2.

- Farm Code as purchasing Group: one digit for livestock area B for broiler & two digit for SAP farm code

**Houses:**

- SAP organization to model a broiler house: 

- Storage location

- SAP master data to model a broiler house:

- WBS element

- Consider the house capacity in the farm assigned quota to each broiler breed.

- Naming convention:

- House code as WBS: 4 digit for farm code then  “-“ then 2 digit for house code (Ex. B001-01)

- House code as storage location: two digit SAP farm code & two digit for house code (ex. 0101)

| **Plant** | **Plant Desc****ription** |
| --- | --- |
| 1200 | Broiler Area |

| **Farm Code** | **Farm Code - Type** | **Purchase Grp** | **F-Desc-Long** | **F-Desc-Short** | **No. Of Houses** | ** House Type ** | ** Note ** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **(WBS- S.Loc)** | ** (Work Center- Prod.Ver)** |  |  |  |  |  |  |
| B001 | B001 | B01 | Broiler-Butain8-F01 | B-Butn8-01 | 12 | Normal1 | Operational |
| B002 | B002 | B02 | Broiler-Butain8-F11 | B-Butn8-11 | 12 | Normal1 | Operational |
| B003 | B003 | B03 | Broiler-Butain8-F02 | B-Butn8-02 | 12 | Normal1 | Operational |
| B004 | B004 | B04 | Broiler-Butain8-F03 | B-Butn8-03 | 12 | Normal1 | Operational |
| B005 | B005 | B05 | Broiler-Butain8-F04 | B-Butn8-04 | 12 | Normal1 | Operational |
| B006 | B006 | B06 | Broiler-Butain8-F10 | B-Butn8-10 | 12 | Normal1 | Operational |
| B007 | B007 | B07 | Broiler-Butain8-F09 | B-Butn8-09 | 12 | Normal1 | Operational |
| B008 | B008 | B08 | Broiler-Butain8-F08 | B-Butn8-08 | 12 | Normal1 | Operational |
| B009 | B009 | B09 | Broiler-Butain8-F05 | B-Butn8-05 | 12 | Normal1 | Operational |
| B010 | B010 | B10 | Broiler-Butain8-F06 | B-Butn8-06 | 12 | Normal1 | Operational |
| B011 | B011 | B11 | Broiler-Butain8-F07 | B-Butn8-07 | 12 | Normal1 | Operational |
| B012 | B012 | B12 | Broiler-Butain9-F01 | B-Butn9-01 | 12 | Normal1 | Operational |
| B012 | A012 | B12 | Broiler-Butain9-F01 | B-Butn9-01 | 4 | Normal2 | Operational |
| B013 | B013 | B13 | Broiler-Butain9-F02 | B-Butn9-02 | 12 | Normal1 | Operational |
| B013 | A013 | B13 | Broiler-Butain9-F02 | B-Butn9-02 | 4 | Normal2 | Operational |
| B014 | B014 | B14 | Broiler-Butain9-F03 | B-Butn9-03 | 12 | Normal1 | Operational |
| B014 | A014 | B14 | Broiler-Butain9-F03 | B-Butn9-03 | 4 | Normal2 | Operational |
| B015 | B015 | B15 | Broiler-Butain9-F04 | B-Butn9-04 | 12 | Normal1 | Operational |
| B015 | A015 | B15 | Broiler-Butain9-F04 | B-Butn9-04 | 4 | Normal2 | Operational |
| B016 | B016 | B16 | Broiler-Butain9-F05 | B-Butn9-05 | 12 | Normal1 | Operational |
| B016 | A016 | B16 | Broiler-Butain9-F05 | B-Butn9-05 | 4 | Normal2 | Operational |
| B017 | B017 | B17 | Broiler-Butain1-F01 | B-Butn1-01 | 7 | Normal1 | Operational |
| B017 | C017 | B17 | Broiler-Butain1-F01-Cage1 | B-Butn1-01 | 1 | Cage1 | Operational |
| B018 | B018 | B18 | Broiler-Butain1-F02 | B-Butn1-02 | 7 | Normal1 | Operational |
| B018 | C018 | B18 | Broiler-Butain1-F02-Cage1 | B-Butn1-02 | 1 | Cage1 | Operational |
| B018 | D018 | B18 | Broiler-Butain1-F02-Cage2 | B-Butn1-02 | 1 | Cage2 | Operational |
| B019 | B019 | B19 | Broiler-Butain1-F08 | B-Butn1-08 | 5 | Normal1 | Operational |
| B019 | C019 | B19 | Broiler-Butain1-F08-Cage1 | B-Butn1-08 | 5 | Cage1 | Operational |
| B020 | B020 | B20 | Broiler-Butain1-F03 | B-Butn1-03 | 8 | Normal1 | Operational |
| B020 | C020 | B20 | Broiler-Butain1-F03-Cage1 | B-Butn1-03 | 1 | Cage1 | Operational |
| B021 | B021 | B21 | Broiler-Butain1-F04 | B-Butn1-04 | 7 | Normal1 | Operational |
| B021 | C021 | B21 | Broiler-Butain1-F04-Cage1 | B-Butn1-04 | 1 | Cage1 | Operational |
| B021 | D021 | B21 | Broiler-Butain1-F04-Cage2 | B-Butn1-04 | 1 | Cage2 | Operational |
| B022 | B022 | B22 | Broiler-Butain1-F05 | B-Butn1-05 | 8 | Normal1 | Operational |
| B022 | C022 | B22 | Broiler-Butain1-F05-Cage1 | B-Butn1-05 | 2 | Cage1 | Operational |
| B023 | B023 | B23 | Broiler-Butain1-F06 | B-Butn1-06 | 8 | Normal1 | Operational |
| B023 | C023 | B23 | Broiler-Butain1-F06-Cage1 | B-Butn1-06 | 2 | Cage1 | Operational |
| B024 | B024 | B24 | Broiler-Butain1-F07 | B-Butn1-07 | 8 | Normal1 | Operational |
| B024 | C024 | B24 | Broiler-Butain1-F07-Cage1 | B-Butn1-07 | 1 | Cage1 | Operational |
| B025 | B025 | B25 | Broiler-AP-F01 | B-AP-01 | 8 | Normal1 | Closed |
| B026 | B026 | B26 | Broiler-AP-F02 | B-AP-02 | 8 | Normal1 | Closed |
| B027 | B027 | B27 | Broiler-W1-Big-F01 | B-W1-Big-01 | 16 | Normal1 | Operational |
| B028 | B028 | B28 | Broiler-W1-Big-F02 | B-W1-Big-02 | 16 | Normal1 | Operational |
| B029 | B029 | B29 | Broiler-W1-Big-F03 | B-W1-Big-03 | 16 | Normal1 | Operational |
| B030 | B030 | B30 | Broiler-W1-Big-F04 | B-W1-Big-04 | 16 | Normal1 | Operational |
| B031 | B031 | B31 | Broiler-W1-Big-F05 | B-W1-Big-05 | 16 | Normal1 | Operational |
| B032 | B032 | B32 | Broiler-W1-Big-F06 | B-W1-Big-06 | 16 | Normal1 | Operational |
| B033 | B033 | B33 | Broiler-W1-Big-F07 | B-W1-Big-07 | 16 | Normal1 | Operational |
| B034 | B034 | B34 | Broiler-W1-Big-F08 | B-W1-Big-08 | 16 | Normal1 | Closed |
| B035 | B035 | B35 | Broiler-W1-Big-F09 | B-W1-Big-09 | 16 | Normal1 | Closed |
| B036 | B036 | B36 | Broiler-W1-Big-F10 | B-W1-Big-10 | 16 | Normal1 | Operational |
| B037 | B037 | B37 | Broiler-W1-Big-F11 | B-W1-Big-11 | 16 | Normal1 | Closed |
| B038 | B038 | B38 | Broiler-W1-Big-F12 | B-W1-Big-12 | 16 | Normal1 | Closed |
| B039 | B039 | B39 | Broiler-W1-Exp.-F01 | B-W1-Exp.-01 | 1 | Normal1 | Operational |
| B040 | B040 | B40 | Broiler-W1-Mini-F05 | B-W1-Mini-05 | 6 | Normal1 | Operational |
| B041 | B041 | B41 | Broiler-W1-Mini-F01 | B-W1-Mini-01 | 6 | Normal1 | Operational |
| B042 | B042 | B42 | Broiler-W1-Mini-F02 | B-W1-Mini-02 | 6 | Normal1 | Operational |
| B043 | B043 | B43 | Broiler-W1-Mini-F03 | B-W1-Mini-03 | 6 | Normal1 | Operational |
| B044 | B044 | B44 | Broiler-W1-Mini-F04 | B-W1-Mini-04 | 6 | Normal1 | Operational |
| B045 | B045 | B45 | Broiler-W1-Mini-F08 | B-W1-Mini-08 | 6 | Normal1 | Closed |
| B046 | B046 | B46 | Broiler-W1-Mini-F09 | B-W1-Mini-09 | 6 | Normal1 | Closed |
| B047 | B047 | B47 | Broiler-W1-Mini-F10 | B-W1-Mini-10 | 6 | Normal1 | Operational |
| B048 | B048 | B48 | Broiler-W1-Mini-F11 | B-W1-Mini-11 | 6 | Normal1 | Operational |
| B049 | B049 | B49 | Broiler-W1-Mini-F12 | B-W1-Mini-12 | 6 | Normal1 | Operational |
| B050 | B050 | B50 | Broiler-W1-Mini-F13 | B-W1-Mini-13 | 6 | Normal1 | Operational |
| B051 | B051 | B51 | Broiler-W1-Mini-F14 | B-W1-Mini-14 | 6 | Normal1 | Operational |
| B052 | B052 | B52 | Broiler-W1-Mini-F15 | B-W1-Mini-15 | 6 | Normal1 | Operational |
| B053 | B053 | B53 | Broiler-Butain11-F01 | B-Butn11-01 | 12 | Normal1 | Operational |
| B053 | A053 | B53 | Broiler-Butain11-F01 | B-Butn11-01 | 2 | Normal2 | Operational |
| B054 | B054 | B54 | Broiler-Butain11-F02 | B-Butn11-02 | 12 | Normal1 | Operational |
| B054 | A054 | B54 | Broiler-Butain11-F02 | B-Butn11-02 | 4 | Normal2 | Operational |
| B055 | B055 | B55 | Broiler-Butain11-F03 | B-Butn11-03 | 12 | Normal1 | Operational |
| B055 | A055 | B55 | Broiler-Butain11-F03 | B-Butn11-03 | 2 | Normal2 | Operational |
| B056 | B056 | B56 | Broiler-Butn5-F01 | B-Butn5-01 | 12 | Normal1 | Operational |
| B056 | C056 | B56 | Broiler-Butn5-F01-Cage1 | B-Butn5-01 | 2 | Cage1 | Operational |
| B057 | B057 | B57 | Broiler-Butn5-F02 | B-Butn5-02 | 12 | Normal1 | Operational |
| B058 | B058 | B58 | Broiler-W2-P1-F04 | B-W2-P1-04 | 12 | Normal1 | Operational |
| B059 | B059 | B59 | Broiler-W2-P1-F03 | B-W2-P1-03 | 12 | Normal1 | Operational |
| B060 | B060 | B60 | Broiler-W2-P1-F02 | B-W2-P1-02 | 12 | Normal1 | Operational |
| B060 | A060 | B60 | Broiler-W2-P1-F02 | B-W2-P1-02 | 4 | Normal2 | Operational |
| B061 | B061 | B61 | Broiler-W2-P1-F01 | B-W2-P1-01 | 12 | Normal1 | Operational |
| B061 | A061 | B61 | Broiler-W2-P1-F01 | B-W2-P1-01 | 4 | Normal2 | Operational |
| B062 | B062 | B62 | Broiler-W2-P1-F05 | B-W2-P1-05 | 12 | Normal1 | Operational |
| B063 | B063 | B63 | Broiler-W2-P1-F06 | B-W2-P1-06 | 12 | Normal1 | Operational |
| B063 | A063 | B63 | Broiler-W2-P1-F06 | B-W2-P1-06 | 2 | Normal2 | Operational |
| B064 | B064 | B64 | Broiler-W2-P1-F10 | B-W2-P1-10 | 12 | Normal1 | Operational |
| B064 | A064 | B64 | Broiler-W2-P1-F10 | B-W2-P1-10 | 4 | Normal2 | Operational |
| B065 | B065 | B65 | Broiler-W2-P1-F07 | B-W2-P1-07 | 12 | Normal1 | Operational |
| B065 | A065 | B65 | Broiler-W2-P1-F07 | B-W2-P1-07 | 4 | Normal2 | Operational |
| B066 | B066 | B66 | Broiler-W2-P1-F08 | B-W2-P1-08 | 12 | Normal1 | Operational |
| B066 | A066 | B66 | Broiler-W2-P1-F08 | B-W2-P1-08 | 2 | Normal2 | Operational |
| B067 | B067 | B67 | Broiler-W2-P1-F09 | B-W2-P1-09 | 12 | Normal1 | Operational |
| B067 | A067 | B67 | Broiler-W2-P1-F09 | B-W2-P1-09 | 4 | Normal2 | Operational |
| B068 | B068 | B68 | Broiler-W2-P1-F11 | B-W2-P1-11 | 12 | Normal1 | Operational |
| B068 | A068 | B68 | Broiler-W2-P1-F11 | B-W2-P1-11 | 2 | Normal2 | Operational |
| B069 | B069 | B69 | Broiler-W2-P1-F12 | B-W2-P1-12 | 12 | Normal1 | Operational |
| B069 | A069 | B69 | Broiler-W2-P1-F12 | B-W2-P1-12 | 2 | Normal2 | Operational |
| B070 | B070 | B70 | Broiler-W2-P3-F13 | B-W2-P3-13 | 12 | Normal1 | Operational |
| B071 | B071 | B71 | Broiler-W2-P3-F14 | B-W2-P3-14 | 12 | Normal1 | Operational |
| B071 | A071 | B71 | Broiler-W2-P3-F14 | B-W2-P3-14 | 4 | Normal2 | Operational |
| B072 | B072 | B72 | Broiler-W2-P3-F22 | B-W2-P3-22 | 12 | Normal1 | Operational |
| B073 | B073 | B73 | Broiler-W2-P3-F24 | B-W2-P3-24 | 12 | Normal1 | Operational |
| B073 | A073 | B73 | Broiler-W2-P3-F24 | B-W2-P3-24 | 2 | Normal2 | Operational |
| B074 | B074 | B74 | Broiler-W2-P3-F26 | B-W2-P3-26 | 12 | Normal1 | Operational |
| B075 | B075 | B75 | Broiler-W2-P3-F25 | B-W2-P3-25 | 12 | Normal1 | Operational |
| B075 | A075 | B75 | Broiler-W2-P3-F25 | B-W2-P3-25 | 4 | Normal2 | Operational |
| B076 | B076 | B76 | Broiler-W2-P3-F23 | B-W2-P3-23 | 12 | Normal1 | Operational |
| B076 | A076 | B76 | Broiler-W2-P3-F23 | B-W2-P3-23 | 4 | Normal2 | Operational |
| B077 | B077 | B77 | Broiler-W2-P3-F21 | B-W2-P3-21 | 12 | Normal1 | Operational |
| B077 | A077 | B77 | Broiler-W2-P3-F21 | B-W2-P3-21 | 2 | Normal2 | Operational |
| B078 | B078 | B78 | Broiler-W2-P2-F16 | B-W2-P2-16 | 12 | Normal1 | Operational |
| B078 | A078 | B78 | Broiler-W2-P2-F16 | B-W2-P2-16 | 2 | Normal2 | Operational |
| B079 | B079 | B79 | Broiler-W2-P2-F15 | B-W2-P2-15 | 12 | Normal1 | Operational |
| B079 | A079 | B79 | Broiler-W2-P2-F15 | B-W2-P2-15 | 2 | Normal2 | Operational |
| B080 | B080 | B80 | Broiler-W2-P2-F17 | B-W2-P2-17 | 12 | Normal1 | Operational |
| B080 | A080 | B80 | Broiler-W2-P2-F17 | B-W2-P2-17 | 4 | Normal2 | Operational |
| B081 | B081 | B81 | Broiler-W2-P2-F18 | B-W2-P2-18 | 12 | Normal1 | Operational |
| B082 | B082 | B82 | Broiler-W2-P2-F20 | B-W2-P2-20 | 12 | Normal1 | Operational |
| B082 | A082 | B82 | Broiler-W2-P2-F20 | B-W2-P2-20 | 2 | Normal2 | Operational |
| B083 | B083 | B83 | Broiler-W2-P2-F19 | B-W2-P2-19 | 12 | Normal1 | Operational |
| B083 | A083 | B83 | Broiler-W2-P2-F19 | B-W2-P2-19 | 2 | Normal2 | Operational |
| B084 | B084 | B84 | Broiler-Butain2-F03 | B-Butn2-03 | 10 | Normal1 | Operational |
| B084 | A084 | B84 | Broiler-Butain2-F03 | B-Butn2-03 | 2 | Normal2 | Operational |
| B085 | B085 | B85 | Broiler-Butain2-F04 | B-Butn2-04 | 10 | Normal1 | Operational |
| B085 | A085 | B85 | Broiler-Butain2-F04 | B-Butn2-04 | 2 | Normal2 | Operational |
| B086 | B086 | B86 | Broiler-Butain2-F02 | B-Butn2-02 | 10 | Normal1 | Operational |
| B086 | A086 | B86 | Broiler-Butain2-F02 | B-Butn2-02 | 2 | Normal2 | Operational |
| B087 | B087 | B87 | Broiler-Butain2-F01 | B-Butn2-01 | 10 | Normal1 | Operational |
| B088 | B088 | B88 | Broiler-Butain3-F04 | B-Butn3-04 | 10 | Normal1 | Operational |
| B089 | B089 | B89 | Broiler-Butain3-F01 | B-Butn3-01 | 10 | Normal1 | Operational |
| B089 | A089 | B89 | Broiler-Butain3-F01 | B-Butn3-01 | 2 | Normal2 | Operational |
| B090 | B090 | B90 | Broiler-Butain3-F03 | B-Butn3-03 | 10 | Normal1 | Operational |
| B090 | A090 | B90 | Broiler-Butain3-F03 | B-Butn3-03 | 2 | Normal2 | Operational |
| B091 | B091 | B91 | Broiler-Butain3-F02 | B-Butn3-02 | 10 | Normal1 | Operational |
| B091 | A091 | B91 | Broiler-Butain3-F02 | B-Butn3-02 | 2 | Normal2 | Operational |
| B092 | A092 | B92 | Broiler-Shemalia-F01 | B-Shmalia-01 | 12 | Normal2 | Operational |
| B093 | A093 | B93 | Broiler-Shemalia-F02 | B-Shmalia-02 | 12 | Normal2 | Operational |
| B094 | A094 | B94 | Broiler-Shemalia-F03 | B-Shmalia-03 | 12 | Normal2 | Operational |

| **House Code** | **H Dec - Long** | **House Stor Loc.** | **H Desc - Short** | **House Type** |
| --- | --- | --- | --- | --- |
| **(WBS)** |  |  |  |  |
| B001-01 | Broiler-Butn8-F01-H01-Normal1 | 0101 | B-Butn8-01-01N1 | Normal1 |
| B001-02 | Broiler-Butn8-F01-H02-Normal1 | 0102 | B-Butn8-01-02N1 | Normal1 |
| B001-03 | Broiler-Butn8-F01-H03-Normal1 | 0103 | B-Butn8-01-03N1 | Normal1 |
| B001-04 | Broiler-Butn8-F01-H04-Normal1 | 0104 | B-Butn8-01-04N1 | Normal1 |
| B001-05 | Broiler-Butn8-F01-H05-Normal1 | 0105 | B-Butn8-01-05N1 | Normal1 |
| B001-06 | Broiler-Butn8-F01-H06-Normal1 | 0106 | B-Butn8-01-06N1 | Normal1 |
| B001-07 | Broiler-Butn8-F01-H07-Normal1 | 0107 | B-Butn8-01-07N1 | Normal1 |
| B001-08 | Broiler-Butn8-F01-H08-Normal1 | 0108 | B-Butn8-01-08N1 | Normal1 |
| B001-09 | Broiler-Butn8-F01-H09-Normal1 | 0109 | B-Butn8-01-09N1 | Normal1 |
| B001-10 | Broiler-Butn8-F01-H10-Normal1 | 0110 | B-Butn8-01-10N1 | Normal1 |
| B001-11 | Broiler-Butn8-F01-H11-Normal1 | 0111 | B-Butn8-01-11N1 | Normal1 |
| B001-12 | Broiler-Butn8-F01-H12-Normal1 | 0112 | B-Butn8-01-12N1 | Normal1 |
| B002-01 | Broiler-Butn8-F11-H01-Normal1 | 0201 | B-Butn8-11-01N1 | Normal1 |
| B002-02 | Broiler-Butn8-F11-H02-Normal1 | 0202 | B-Butn8-11-02N1 | Normal1 |
| B002-03 | Broiler-Butn8-F11-H03-Normal1 | 0203 | B-Butn8-11-03N1 | Normal1 |
| B002-04 | Broiler-Butn8-F11-H04-Normal1 | 0204 | B-Butn8-11-04N1 | Normal1 |
| B002-05 | Broiler-Butn8-F11-H05-Normal1 | 0205 | B-Butn8-11-05N1 | Normal1 |
| B002-06 | Broiler-Butn8-F11-H06-Normal1 | 0206 | B-Butn8-11-06N1 | Normal1 |
| B002-07 | Broiler-Butn8-F11-H07-Normal1 | 0207 | B-Butn8-11-07N1 | Normal1 |
| B002-08 | Broiler-Butn8-F11-H08-Normal1 | 0208 | B-Butn8-11-08N1 | Normal1 |
| B002-09 | Broiler-Butn8-F11-H09-Normal1 | 0209 | B-Butn8-11-09N1 | Normal1 |
| B002-10 | Broiler-Butn8-F11-H10-Normal1 | 0210 | B-Butn8-11-10N1 | Normal1 |
| B002-11 | Broiler-Butn8-F11-H11-Normal1 | 0211 | B-Butn8-11-11N1 | Normal1 |
| B002-12 | Broiler-Butn8-F11-H12-Normal1 | 0212 | B-Butn8-11-12N1 | Normal1 |
| B003-01 | Broiler-Butn8-F02-H01-Normal1 | 0301 | B-Butn8-02-01N1 | Normal1 |
| B003-02 | Broiler-Butn8-F02-H02-Normal1 | 0302 | B-Butn8-02-02N1 | Normal1 |
| B003-03 | Broiler-Butn8-F02-H03-Normal1 | 0303 | B-Butn8-02-03N1 | Normal1 |
| B003-04 | Broiler-Butn8-F02-H04-Normal1 | 0304 | B-Butn8-02-04N1 | Normal1 |
| B003-05 | Broiler-Butn8-F02-H05-Normal1 | 0305 | B-Butn8-02-05N1 | Normal1 |
| B003-06 | Broiler-Butn8-F02-H06-Normal1 | 0306 | B-Butn8-02-06N1 | Normal1 |
| B003-07 | Broiler-Butn8-F02-H07-Normal1 | 0307 | B-Butn8-02-07N1 | Normal1 |
| B003-08 | Broiler-Butn8-F02-H08-Normal1 | 0308 | B-Butn8-02-08N1 | Normal1 |
| B003-09 | Broiler-Butn8-F02-H09-Normal1 | 0309 | B-Butn8-02-09N1 | Normal1 |
| B003-10 | Broiler-Butn8-F02-H10-Normal1 | 0310 | B-Butn8-02-10N1 | Normal1 |
| B003-11 | Broiler-Butn8-F02-H11-Normal1 | 0311 | B-Butn8-02-11N1 | Normal1 |
| B003-12 | Broiler-Butn8-F02-H12-Normal1 | 0312 | B-Butn8-02-12N1 | Normal1 |
| B004-01 | Broiler-Butn8-F03-H01-Normal1 | 0401 | B-Butn8-03-01N1 | Normal1 |
| B004-02 | Broiler-Butn8-F03-H02-Normal1 | 0402 | B-Butn8-03-02N1 | Normal1 |
| B004-03 | Broiler-Butn8-F03-H03-Normal1 | 0403 | B-Butn8-03-03N1 | Normal1 |
| B004-04 | Broiler-Butn8-F03-H04-Normal1 | 0404 | B-Butn8-03-04N1 | Normal1 |
| B004-05 | Broiler-Butn8-F03-H05-Normal1 | 0405 | B-Butn8-03-05N1 | Normal1 |
| B004-06 | Broiler-Butn8-F03-H06-Normal1 | 0406 | B-Butn8-03-06N1 | Normal1 |
| B004-07 | Broiler-Butn8-F03-H07-Normal1 | 0407 | B-Butn8-03-07N1 | Normal1 |
| B004-08 | Broiler-Butn8-F03-H08-Normal1 | 0408 | B-Butn8-03-08N1 | Normal1 |
| B004-09 | Broiler-Butn8-F03-H09-Normal1 | 0409 | B-Butn8-03-09N1 | Normal1 |
| B004-10 | Broiler-Butn8-F03-H10-Normal1 | 0410 | B-Butn8-03-10N1 | Normal1 |
| B004-11 | Broiler-Butn8-F03-H11-Normal1 | 0411 | B-Butn8-03-11N1 | Normal1 |
| B004-12 | Broiler-Butn8-F03-H12-Normal1 | 0412 | B-Butn8-03-12N1 | Normal1 |
| B005-01 | Broiler-Butn8-F04-H01-Normal1 | 0501 | B-Butn8-04-01N1 | Normal1 |
| B005-02 | Broiler-Butn8-F04-H02-Normal1 | 0502 | B-Butn8-04-02N1 | Normal1 |
| B005-03 | Broiler-Butn8-F04-H03-Normal1 | 0503 | B-Butn8-04-03N1 | Normal1 |
| B005-04 | Broiler-Butn8-F04-H04-Normal1 | 0504 | B-Butn8-04-04N1 | Normal1 |
| B005-05 | Broiler-Butn8-F04-H05-Normal1 | 0505 | B-Butn8-04-05N1 | Normal1 |
| B005-06 | Broiler-Butn8-F04-H06-Normal1 | 0506 | B-Butn8-04-06N1 | Normal1 |
| B005-07 | Broiler-Butn8-F04-H07-Normal1 | 0507 | B-Butn8-04-07N1 | Normal1 |
| B005-08 | Broiler-Butn8-F04-H08-Normal1 | 0508 | B-Butn8-04-08N1 | Normal1 |
| B005-09 | Broiler-Butn8-F04-H09-Normal1 | 0509 | B-Butn8-04-09N1 | Normal1 |
| B005-10 | Broiler-Butn8-F04-H10-Normal1 | 0510 | B-Butn8-04-10N1 | Normal1 |
| B005-11 | Broiler-Butn8-F04-H11-Normal1 | 0511 | B-Butn8-04-11N1 | Normal1 |
| B005-12 | Broiler-Butn8-F04-H12-Normal1 | 0512 | B-Butn8-04-12N1 | Normal1 |
| B006-01 | Broiler-Butn8-F10-H01-Normal1 | 0601 | B-Butn8-10-01N1 | Normal1 |
| B006-02 | Broiler-Butn8-F10-H02-Normal1 | 0602 | B-Butn8-10-02N1 | Normal1 |
| B006-03 | Broiler-Butn8-F10-H03-Normal1 | 0603 | B-Butn8-10-03N1 | Normal1 |
| B006-04 | Broiler-Butn8-F10-H04-Normal1 | 0604 | B-Butn8-10-04N1 | Normal1 |
| B006-05 | Broiler-Butn8-F10-H05-Normal1 | 0605 | B-Butn8-10-05N1 | Normal1 |
| B006-06 | Broiler-Butn8-F10-H06-Normal1 | 0606 | B-Butn8-10-06N1 | Normal1 |
| B006-07 | Broiler-Butn8-F10-H07-Normal1 | 0607 | B-Butn8-10-07N1 | Normal1 |
| B006-08 | Broiler-Butn8-F10-H08-Normal1 | 0608 | B-Butn8-10-08N1 | Normal1 |
| B006-09 | Broiler-Butn8-F10-H09-Normal1 | 0609 | B-Butn8-10-09N1 | Normal1 |
| B006-10 | Broiler-Butn8-F10-H10-Normal1 | 0610 | B-Butn8-10-10N1 | Normal1 |
| B006-11 | Broiler-Butn8-F10-H11-Normal1 | 0611 | B-Butn8-10-11N1 | Normal1 |
| B006-12 | Broiler-Butn8-F10-H12-Normal1 | 0612 | B-Butn8-10-12N1 | Normal1 |
| B007-01 | Broiler-Butn8-F09-H01-Normal1 | 0701 | B-Butn8-09-01N1 | Normal1 |
| B007-02 | Broiler-Butn8-F09-H02-Normal1 | 0702 | B-Butn8-09-02N1 | Normal1 |
| B007-03 | Broiler-Butn8-F09-H03-Normal1 | 0703 | B-Butn8-09-03N1 | Normal1 |
| B007-04 | Broiler-Butn8-F09-H04-Normal1 | 0704 | B-Butn8-09-04N1 | Normal1 |
| B007-05 | Broiler-Butn8-F09-H05-Normal1 | 0705 | B-Butn8-09-05N1 | Normal1 |
| B007-06 | Broiler-Butn8-F09-H06-Normal1 | 0706 | B-Butn8-09-06N1 | Normal1 |
| B007-07 | Broiler-Butn8-F09-H07-Normal1 | 0707 | B-Butn8-09-07N1 | Normal1 |
| B007-08 | Broiler-Butn8-F09-H08-Normal1 | 0708 | B-Butn8-09-08N1 | Normal1 |
| B007-09 | Broiler-Butn8-F09-H09-Normal1 | 0709 | B-Butn8-09-09N1 | Normal1 |
| B007-10 | Broiler-Butn8-F09-H10-Normal1 | 0710 | B-Butn8-09-10N1 | Normal1 |
| B007-11 | Broiler-Butn8-F09-H11-Normal1 | 0711 | B-Butn8-09-11N1 | Normal1 |
| B007-12 | Broiler-Butn8-F09-H12-Normal1 | 0712 | B-Butn8-09-12N1 | Normal1 |
| B008-01 | Broiler-Butn8-F08-H01-Normal1 | 0801 | B-Butn8-08-01N1 | Normal1 |
| B008-02 | Broiler-Butn8-F08-H02-Normal1 | 0802 | B-Butn8-08-02N1 | Normal1 |
| B008-03 | Broiler-Butn8-F08-H03-Normal1 | 0803 | B-Butn8-08-03N1 | Normal1 |
| B008-04 | Broiler-Butn8-F08-H04-Normal1 | 0804 | B-Butn8-08-04N1 | Normal1 |
| B008-05 | Broiler-Butn8-F08-H05-Normal1 | 0805 | B-Butn8-08-05N1 | Normal1 |
| B008-06 | Broiler-Butn8-F08-H06-Normal1 | 0806 | B-Butn8-08-06N1 | Normal1 |
| B008-07 | Broiler-Butn8-F08-H07-Normal1 | 0807 | B-Butn8-08-07N1 | Normal1 |
| B008-08 | Broiler-Butn8-F08-H08-Normal1 | 0808 | B-Butn8-08-08N1 | Normal1 |
| B008-09 | Broiler-Butn8-F08-H09-Normal1 | 0809 | B-Butn8-08-09N1 | Normal1 |
| B008-10 | Broiler-Butn8-F08-H10-Normal1 | 0810 | B-Butn8-08-10N1 | Normal1 |
| B008-11 | Broiler-Butn8-F08-H11-Normal1 | 0811 | B-Butn8-08-11N1 | Normal1 |
| B008-12 | Broiler-Butn8-F08-H12-Normal1 | 0812 | B-Butn8-08-12N1 | Normal1 |
| B009-01 | Broiler-Butn8-F05-H01-Normal1 | 0901 | B-Butn8-05-01N1 | Normal1 |
| B009-02 | Broiler-Butn8-F05-H02-Normal1 | 0902 | B-Butn8-05-02N1 | Normal1 |
| B009-03 | Broiler-Butn8-F05-H03-Normal1 | 0903 | B-Butn8-05-03N1 | Normal1 |
| B009-04 | Broiler-Butn8-F05-H04-Normal1 | 0904 | B-Butn8-05-04N1 | Normal1 |
| B009-05 | Broiler-Butn8-F05-H05-Normal1 | 0905 | B-Butn8-05-05N1 | Normal1 |
| B009-06 | Broiler-Butn8-F05-H06-Normal1 | 0906 | B-Butn8-05-06N1 | Normal1 |
| B009-07 | Broiler-Butn8-F05-H07-Normal1 | 0907 | B-Butn8-05-07N1 | Normal1 |
| B009-08 | Broiler-Butn8-F05-H08-Normal1 | 0908 | B-Butn8-05-08N1 | Normal1 |
| B009-09 | Broiler-Butn8-F05-H09-Normal1 | 0909 | B-Butn8-05-09N1 | Normal1 |
| B009-10 | Broiler-Butn8-F05-H10-Normal1 | 0910 | B-Butn8-05-10N1 | Normal1 |
| B009-11 | Broiler-Butn8-F05-H11-Normal1 | 0911 | B-Butn8-05-11N1 | Normal1 |
| B009-12 | Broiler-Butn8-F05-H12-Normal1 | 0912 | B-Butn8-05-12N1 | Normal1 |
| B010-01 | Broiler-Butn8-F06-H01-Normal1 | 1001 | B-Butn8-06-01N1 | Normal1 |
| B010-02 | Broiler-Butn8-F06-H02-Normal1 | 1002 | B-Butn8-06-02N1 | Normal1 |
| B010-03 | Broiler-Butn8-F06-H03-Normal1 | 1003 | B-Butn8-06-03N1 | Normal1 |
| B010-04 | Broiler-Butn8-F06-H04-Normal1 | 1004 | B-Butn8-06-04N1 | Normal1 |
| B010-05 | Broiler-Butn8-F06-H05-Normal1 | 1005 | B-Butn8-06-05N1 | Normal1 |
| B010-06 | Broiler-Butn8-F06-H06-Normal1 | 1006 | B-Butn8-06-06N1 | Normal1 |
| B010-07 | Broiler-Butn8-F06-H07-Normal1 | 1007 | B-Butn8-06-07N1 | Normal1 |
| B010-08 | Broiler-Butn8-F06-H08-Normal1 | 1008 | B-Butn8-06-08N1 | Normal1 |
| B010-09 | Broiler-Butn8-F06-H09-Normal1 | 1009 | B-Butn8-06-09N1 | Normal1 |
| B010-10 | Broiler-Butn8-F06-H10-Normal1 | 1010 | B-Butn8-06-10N1 | Normal1 |
| B010-11 | Broiler-Butn8-F06-H11-Normal1 | 1011 | B-Butn8-06-11N1 | Normal1 |
| B010-12 | Broiler-Butn8-F06-H12-Normal1 | 1012 | B-Butn8-06-12N1 | Normal1 |
| B011-01 | Broiler-Butn8-F07-H01-Normal1 | 1101 | B-Butn8-07-01N1 | Normal1 |
| B011-02 | Broiler-Butn8-F07-H02-Normal1 | 1102 | B-Butn8-07-02N1 | Normal1 |
| B011-03 | Broiler-Butn8-F07-H03-Normal1 | 1103 | B-Butn8-07-03N1 | Normal1 |
| B011-04 | Broiler-Butn8-F07-H04-Normal1 | 1104 | B-Butn8-07-04N1 | Normal1 |
| B011-05 | Broiler-Butn8-F07-H05-Normal1 | 1105 | B-Butn8-07-05N1 | Normal1 |
| B011-06 | Broiler-Butn8-F07-H06-Normal1 | 1106 | B-Butn8-07-06N1 | Normal1 |
| B011-07 | Broiler-Butn8-F07-H07-Normal1 | 1107 | B-Butn8-07-07N1 | Normal1 |
| B011-08 | Broiler-Butn8-F07-H08-Normal1 | 1108 | B-Butn8-07-08N1 | Normal1 |
| B011-09 | Broiler-Butn8-F07-H09-Normal1 | 1109 | B-Butn8-07-09N1 | Normal1 |
| B011-10 | Broiler-Butn8-F07-H10-Normal1 | 1110 | B-Butn8-07-10N1 | Normal1 |
| B011-11 | Broiler-Butn8-F07-H11-Normal1 | 1111 | B-Butn8-07-11N1 | Normal1 |
| B011-12 | Broiler-Butn8-F07-H12-Normal1 | 1112 | B-Butn8-07-12N1 | Normal1 |
| B012-01 | Broiler-Butn9-F01-H01-Normal1 | 1201 | B-Butn9-01-01N1 | Normal1 |
| B012-02 | Broiler-Butn9-F01-H02-Normal1 | 1202 | B-Butn9-01-02N1 | Normal1 |
| B012-03 | Broiler-Butn9-F01-H03-Normal1 | 1203 | B-Butn9-01-03N1 | Normal1 |
| B012-04 | Broiler-Butn9-F01-H04-Normal1 | 1204 | B-Butn9-01-04N1 | Normal1 |
| B012-05 | Broiler-Butn9-F01-H05-Normal1 | 1205 | B-Butn9-01-05N1 | Normal1 |
| B012-06 | Broiler-Butn9-F01-H06-Normal1 | 1206 | B-Butn9-01-06N1 | Normal1 |
| B012-07 | Broiler-Butn9-F01-H07-Normal1 | 1207 | B-Butn9-01-07N1 | Normal1 |
| B012-08 | Broiler-Butn9-F01-H08-Normal1 | 1208 | B-Butn9-01-08N1 | Normal1 |
| B012-09 | Broiler-Butn9-F01-H09-Normal1 | 1209 | B-Butn9-01-09N1 | Normal1 |
| B012-10 | Broiler-Butn9-F01-H10-Normal1 | 1210 | B-Butn9-01-10N1 | Normal1 |
| B012-11 | Broiler-Butn9-F01-H11-Normal1 | 1211 | B-Butn9-01-11N1 | Normal1 |
| B012-12 | Broiler-Butn9-F01-H12-Normal1 | 1212 | B-Butn9-01-12N1 | Normal1 |
| B012-13 | Broiler-Butn9-F01-H13-Normal2 | 1213 | B-Butn9-01-13N2 | Normal2 |
| B012-14 | Broiler-Butn9-F01-H14-Normal2 | 1214 | B-Butn9-01-14N2 | Normal2 |
| B012-15 | Broiler-Butn9-F01-H15-Normal2 | 1215 | B-Butn9-01-15N2 | Normal2 |
| B012-16 | Broiler-Butn9-F01-H16-Normal2 | 1216 | B-Butn9-01-16N2 | Normal2 |
| B013-01 | Broiler-Butn9-F02-H01-Normal1 | 1301 | B-Butn9-02-01N1 | Normal1 |
| B013-02 | Broiler-Butn9-F02-H02-Normal1 | 1302 | B-Butn9-02-02N1 | Normal1 |
| B013-03 | Broiler-Butn9-F02-H03-Normal1 | 1303 | B-Butn9-02-03N1 | Normal1 |
| B013-04 | Broiler-Butn9-F02-H04-Normal1 | 1304 | B-Butn9-02-04N1 | Normal1 |
| B013-05 | Broiler-Butn9-F02-H05-Normal1 | 1305 | B-Butn9-02-05N1 | Normal1 |
| B013-06 | Broiler-Butn9-F02-H06-Normal1 | 1306 | B-Butn9-02-06N1 | Normal1 |
| B013-07 | Broiler-Butn9-F02-H07-Normal1 | 1307 | B-Butn9-02-07N1 | Normal1 |
| B013-08 | Broiler-Butn9-F02-H08-Normal1 | 1308 | B-Butn9-02-08N1 | Normal1 |
| B013-09 | Broiler-Butn9-F02-H09-Normal1 | 1309 | B-Butn9-02-09N1 | Normal1 |
| B013-10 | Broiler-Butn9-F02-H10-Normal1 | 1310 | B-Butn9-02-10N1 | Normal1 |
| B013-11 | Broiler-Butn9-F02-H11-Normal1 | 1311 | B-Butn9-02-11N1 | Normal1 |
| B013-12 | Broiler-Butn9-F02-H12-Normal1 | 1312 | B-Butn9-02-12N1 | Normal1 |
| B013-13 | Broiler-Butn9-F02-H13-Normal2 | 1313 | B-Butn9-02-13N2 | Normal2 |
| B013-14 | Broiler-Butn9-F02-H14-Normal2 | 1314 | B-Butn9-02-14N2 | Normal2 |
| B013-15 | Broiler-Butn9-F02-H15-Normal2 | 1315 | B-Butn9-02-15N2 | Normal2 |
| B013-16 | Broiler-Butn9-F02-H16-Normal2 | 1316 | B-Butn9-02-16N2 | Normal2 |
| B014-01 | Broiler-Butn9-F03-H01-Normal1 | 1401 | B-Butn9-03-01N1 | Normal1 |
| B014-02 | Broiler-Butn9-F03-H02-Normal1 | 1402 | B-Butn9-03-02N1 | Normal1 |
| B014-03 | Broiler-Butn9-F03-H03-Normal1 | 1403 | B-Butn9-03-03N1 | Normal1 |
| B014-04 | Broiler-Butn9-F03-H04-Normal1 | 1404 | B-Butn9-03-04N1 | Normal1 |
| B014-05 | Broiler-Butn9-F03-H05-Normal1 | 1405 | B-Butn9-03-05N1 | Normal1 |
| B014-06 | Broiler-Butn9-F03-H06-Normal1 | 1406 | B-Butn9-03-06N1 | Normal1 |
| B014-07 | Broiler-Butn9-F03-H07-Normal1 | 1407 | B-Butn9-03-07N1 | Normal1 |
| B014-08 | Broiler-Butn9-F03-H08-Normal1 | 1408 | B-Butn9-03-08N1 | Normal1 |
| B014-09 | Broiler-Butn9-F03-H09-Normal1 | 1409 | B-Butn9-03-09N1 | Normal1 |
| B014-10 | Broiler-Butn9-F03-H10-Normal1 | 1410 | B-Butn9-03-10N1 | Normal1 |
| B014-11 | Broiler-Butn9-F03-H11-Normal1 | 1411 | B-Butn9-03-11N1 | Normal1 |
| B014-12 | Broiler-Butn9-F03-H12-Normal1 | 1412 | B-Butn9-03-12N1 | Normal1 |
| B014-13 | Broiler-Butn9-F03-H13-Normal2 | 1413 | B-Butn9-03-13N2 | Normal2 |
| B014-14 | Broiler-Butn9-F03-H14-Normal2 | 1414 | B-Butn9-03-14N2 | Normal2 |
| B014-15 | Broiler-Butn9-F03-H15-Normal2 | 1415 | B-Butn9-03-15N2 | Normal2 |
| B014-16 | Broiler-Butn9-F03-H16-Normal2 | 1416 | B-Butn9-03-16N2 | Normal2 |
| B015-01 | Broiler-Butn9-F04-H01-Normal1 | 1501 | B-Butn9-04-01N1 | Normal1 |
| B015-02 | Broiler-Butn9-F04-H02-Normal1 | 1502 | B-Butn9-04-02N1 | Normal1 |
| B015-03 | Broiler-Butn9-F04-H03-Normal1 | 1503 | B-Butn9-04-03N1 | Normal1 |
| B015-04 | Broiler-Butn9-F04-H04-Normal1 | 1504 | B-Butn9-04-04N1 | Normal1 |
| B015-05 | Broiler-Butn9-F04-H05-Normal1 | 1505 | B-Butn9-04-05N1 | Normal1 |
| B015-06 | Broiler-Butn9-F04-H06-Normal1 | 1506 | B-Butn9-04-06N1 | Normal1 |
| B015-07 | Broiler-Butn9-F04-H07-Normal1 | 1507 | B-Butn9-04-07N1 | Normal1 |
| B015-08 | Broiler-Butn9-F04-H08-Normal1 | 1508 | B-Butn9-04-08N1 | Normal1 |
| B015-09 | Broiler-Butn9-F04-H09-Normal1 | 1509 | B-Butn9-04-09N1 | Normal1 |
| B015-10 | Broiler-Butn9-F04-H10-Normal1 | 1510 | B-Butn9-04-10N1 | Normal1 |
| B015-11 | Broiler-Butn9-F04-H11-Normal1 | 1511 | B-Butn9-04-11N1 | Normal1 |
| B015-12 | Broiler-Butn9-F04-H12-Normal1 | 1512 | B-Butn9-04-12N1 | Normal1 |
| B015-13 | Broiler-Butn9-F04-H13-Normal2 | 1513 | B-Butn9-04-13N2 | Normal2 |
| B015-14 | Broiler-Butn9-F04-H14-Normal2 | 1514 | B-Butn9-04-14N2 | Normal2 |
| B015-15 | Broiler-Butn9-F04-H15-Normal2 | 1515 | B-Butn9-04-15N2 | Normal2 |
| B015-16 | Broiler-Butn9-F04-H16-Normal2 | 1516 | B-Butn9-04-16N2 | Normal2 |
| B016-01 | Broiler-Butn9-F05-H01-Normal1 | 1601 | B-Butn9-05-01N1 | Normal1 |
| B016-02 | Broiler-Butn9-F05-H02-Normal1 | 1602 | B-Butn9-05-02N1 | Normal1 |
| B016-03 | Broiler-Butn9-F05-H03-Normal1 | 1603 | B-Butn9-05-03N1 | Normal1 |
| B016-04 | Broiler-Butn9-F05-H04-Normal1 | 1604 | B-Butn9-05-04N1 | Normal1 |
| B016-05 | Broiler-Butn9-F05-H05-Normal1 | 1605 | B-Butn9-05-05N1 | Normal1 |
| B016-06 | Broiler-Butn9-F05-H06-Normal1 | 1606 | B-Butn9-05-06N1 | Normal1 |
| B016-07 | Broiler-Butn9-F05-H07-Normal1 | 1607 | B-Butn9-05-07N1 | Normal1 |
| B016-08 | Broiler-Butn9-F05-H08-Normal1 | 1608 | B-Butn9-05-08N1 | Normal1 |
| B016-09 | Broiler-Butn9-F05-H09-Normal1 | 1609 | B-Butn9-05-09N1 | Normal1 |
| B016-10 | Broiler-Butn9-F05-H10-Normal1 | 1610 | B-Butn9-05-10N1 | Normal1 |
| B016-11 | Broiler-Butn9-F05-H11-Normal1 | 1611 | B-Butn9-05-11N1 | Normal1 |
| B016-12 | Broiler-Butn9-F05-H12-Normal1 | 1612 | B-Butn9-05-12N1 | Normal1 |
| B016-13 | Broiler-Butn9-F05-H13-Normal2 | 1613 | B-Butn9-05-13N2 | Normal2 |
| B016-14 | Broiler-Butn9-F05-H14-Normal2 | 1614 | B-Butn9-05-14N2 | Normal2 |
| B016-15 | Broiler-Butn9-F05-H15-Normal2 | 1615 | B-Butn9-05-15N2 | Normal2 |
| B016-16 | Broiler-Butn9-F05-H16-Normal2 | 1616 | B-Butn9-05-16N2 | Normal2 |
| B017-01 | Broiler-Butn1-F01-H01-Normal1 | 1701 | B-Butn1-01-01N1 | Normal1 |
| B017-02 | Broiler-Butn1-F01-H02-Normal1 | 1702 | B-Butn1-01-02N1 | Normal1 |
| B017-03 | Broiler-Butn1-F01-H03-Normal1 | 1703 | B-Butn1-01-03N1 | Normal1 |
| B017-04 | Broiler-Butn1-F01-H04-Normal1 | 1704 | B-Butn1-01-04N1 | Normal1 |
| B017-05 | Broiler-Butn1-F01-H05-Normal1 | 1705 | B-Butn1-01-05N1 | Normal1 |
| B017-06 | Broiler-Butn1-F01-H06-Normal1 | 1706 | B-Butn1-01-06N1 | Normal1 |
| B017-07 | Broiler-Butn1-F01-H07-Normal1 | 1707 | B-Butn1-01-07N1 | Normal1 |
| B017-08 | Broiler-Butn1-F01-H08-Normal1 | 1708 | B-Butn1-01-08C1 | Normal1 |
| B018-01 | Broiler-Butn1-F02-H01-Normal1 | 1801 | B-Butn1-02-01N1 | Normal1 |
| B018-02 | Broiler-Butn1-F02-H02-Normal1 | 1802 | B-Butn1-02-02N1 | Normal1 |
| B018-03 | Broiler-Butn1-F02-H03-Normal1 | 1803 | B-Butn1-02-03N1 | Normal1 |
| B018-04 | Broiler-Butn1-F02-H04-Normal1 | 1804 | B-Butn1-02-04C1 | Normal1 |
| B018-05 | Broiler-Butn1-F02-H05-Normal1 | 1805 | B-Butn1-02-05N1 | Normal1 |
| B018-06 | Broiler-Butn1-F02-H06-Normal1 | 1806 | B-Butn1-02-06N1 | Normal1 |
| B018-07 | Broiler-Butn1-F02-H07-Normal1 | 1807 | B-Butn1-02-07N1 | Normal1 |
| B018-08 | Broiler-Butn1-F02-H08-Normal1 | 1808 | B-Butn1-02-08N1 | Normal1 |
| B018-09 | Broiler-Butn1-F02-H09-Normal1 | 1809 | B-Butn1-02-09C2 | Normal1 |
| B019-01 | Broiler-Butn1-F08-H01-Normal1 | 1901 | B-Butn1-08-01N1 | Normal1 |
| B019-02 | Broiler-Butn1-F08-H02-Normal1 | 1902 | B-Butn1-08-02N1 | Normal1 |
| B019-03 | Broiler-Butn1-F08-H03-Normal1 | 1903 | B-Butn1-08-03N1 | Normal1 |
| B019-04 | Broiler-Butn1-F08-H04-Normal1 | 1904 | B-Butn1-08-04N1 | Normal1 |
| B019-05 | Broiler-Butn1-F08-H05-Normal1 | 1905 | B-Butn1-08-05N1 | Normal1 |
| B019-06 | Broiler-Butn1-F08-H06-Normal1 | 1906 | B-Butn1-08-06C1 | Normal1 |
| B019-07 | Broiler-Butn1-F08-H07-Normal1 | 1907 | B-Butn1-08-07C1 | Normal1 |
| B019-08 | Broiler-Butn1-F08-H08-Normal1 | 1908 | B-Butn1-08-08C1 | Normal1 |
| B019-09 | Broiler-Butn1-F08-H09-Normal1 | 1909 | B-Butn1-08-09C1 | Normal1 |
| B019-10 | Broiler-Butn1-F08-H10-Normal1 | 1910 | B-Butn1-08-10C1 | Normal1 |
| B020-01 | Broiler-Butn1-F03-H01-Normal1 | 2001 | B-Butn1-03-01N1 | Normal1 |
| B020-02 | Broiler-Butn1-F03-H02-Normal1 | 2002 | B-Butn1-03-02N1 | Normal1 |
| B020-03 | Broiler-Butn1-F03-H03-Normal1 | 2003 | B-Butn1-03-03N1 | Normal1 |
| B020-04 | Broiler-Butn1-F03-H04-Normal1 | 2004 | B-Butn1-03-04N1 | Normal1 |
| B020-05 | Broiler-Butn1-F03-H05-Normal1 | 2005 | B-Butn1-03-05N1 | Normal1 |
| B020-06 | Broiler-Butn1-F03-H06-Normal1 | 2006 | B-Butn1-03-06N1 | Normal1 |
| B020-07 | Broiler-Butn1-F03-H07-Normal1 | 2007 | B-Butn1-03-07N1 | Normal1 |
| B020-08 | Broiler-Butn1-F03-H08-Normal1 | 2008 | B-Butn1-03-08N1 | Normal1 |
| B020-09 | Broiler-Butn1-F03-H09-Normal1 | 2009 | B-Butn1-03-09C1 | Normal1 |
| B021-01 | Broiler-Butn1-F04-H01-Normal1 | 2101 | B-Butn1-04-01N1 | Normal1 |
| B021-02 | Broiler-Butn1-F04-H02-Normal1 | 2102 | B-Butn1-04-02N1 | Normal1 |
| B021-03 | Broiler-Butn1-F04-H03-Normal1 | 2103 | B-Butn1-04-03N1 | Normal1 |
| B021-04 | Broiler-Butn1-F04-H04-Normal1 | 2104 | B-Butn1-04-04N1 | Normal1 |
| B021-05 | Broiler-Butn1-F04-H05-Normal1 | 2105 | B-Butn1-04-05N1 | Normal1 |
| B021-06 | Broiler-Butn1-F04-H06-Normal1 | 2106 | B-Butn1-04-06N1 | Normal1 |
| B021-07 | Broiler-Butn1-F04-H07-Normal1 | 2107 | B-Butn1-04-07N1 | Normal1 |
| B021-08 | Broiler-Butn1-F04-H08-Normal1 | 2108 | B-Butn1-04-08C1 | Normal1 |
| B021-09 | Broiler-Butn1-F04-H09-Normal1 | 2109 | B-Butn1-04-09C2 | Normal1 |
| B022-01 | Broiler-Butn1-F05-H01-Normal1 | 2201 | B-Butn1-05-01N1 | Normal1 |
| B022-02 | Broiler-Butn1-F05-H02-Normal1 | 2202 | B-Butn1-05-02N1 | Normal1 |
| B022-03 | Broiler-Butn1-F05-H03-Normal1 | 2203 | B-Butn1-05-03N1 | Normal1 |
| B022-04 | Broiler-Butn1-F05-H04-Normal1 | 2204 | B-Butn1-05-04N1 | Normal1 |
| B022-05 | Broiler-Butn1-F05-H05-Normal1 | 2205 | B-Butn1-05-05N1 | Normal1 |
| B022-06 | Broiler-Butn1-F05-H06-Normal1 | 2206 | B-Butn1-05-06N1 | Normal1 |
| B022-07 | Broiler-Butn1-F05-H07-Normal1 | 2207 | B-Butn1-05-07N1 | Normal1 |
| B022-08 | Broiler-Butn1-F05-H08-Normal1 | 2208 | B-Butn1-05-08N1 | Normal1 |
| B022-09 | Broiler-Butn1-F05-H09-Normal1 | 2209 | B-Butn1-05-09C1 | Normal1 |
| B022-10 | Broiler-Butn1-F05-H10-Normal1 | 2210 | B-Butn1-05-10C1 | Normal1 |
| B023-01 | Broiler-Butn1-F06-H01-Normal1 | 2301 | B-Butn1-06-01N1 | Normal1 |
| B023-02 | Broiler-Butn1-F06-H02-Normal1 | 2302 | B-Butn1-06-02N1 | Normal1 |
| B023-03 | Broiler-Butn1-F06-H03-Normal1 | 2303 | B-Butn1-06-03N1 | Normal1 |
| B023-04 | Broiler-Butn1-F06-H04-Normal1 | 2304 | B-Butn1-06-04N1 | Normal1 |
| B023-05 | Broiler-Butn1-F06-H05-Normal1 | 2305 | B-Butn1-06-05N1 | Normal1 |
| B023-06 | Broiler-Butn1-F06-H06-Normal1 | 2306 | B-Butn1-06-06N1 | Normal1 |
| B023-07 | Broiler-Butn1-F06-H07-Normal1 | 2307 | B-Butn1-06-07N1 | Normal1 |
| B023-08 | Broiler-Butn1-F06-H08-Normal1 | 2308 | B-Butn1-06-08N1 | Normal1 |
| B023-09 | Broiler-Butn1-F06-H09-Normal1 | 2309 | B-Butn1-06-09C1 | Normal1 |
| B023-10 | Broiler-Butn1-F06-H10-Normal1 | 2310 | B-Butn1-06-10C1 | Normal1 |
| B024-01 | Broiler-Butn1-F07-H01-Normal1 | 2401 | B-Butn1-07-01N1 | Normal1 |
| B024-02 | Broiler-Butn1-F07-H02-Normal1 | 2402 | B-Butn1-07-02N1 | Normal1 |
| B024-03 | Broiler-Butn1-F07-H03-Normal1 | 2403 | B-Butn1-07-03N1 | Normal1 |
| B024-04 | Broiler-Butn1-F07-H04-Normal1 | 2404 | B-Butn1-07-04N1 | Normal1 |
| B024-05 | Broiler-Butn1-F07-H05-Normal1 | 2405 | B-Butn1-07-05N1 | Normal1 |
| B024-06 | Broiler-Butn1-F07-H06-Normal1 | 2406 | B-Butn1-07-06N1 | Normal1 |
| B024-07 | Broiler-Butn1-F07-H07-Normal1 | 2407 | B-Butn1-07-07N1 | Normal1 |
| B024-08 | Broiler-Butn1-F07-H08-Normal1 | 2408 | B-Butn1-07-08N1 | Normal1 |
| B024-09 | Broiler-Butn1-F07-H09-Normal1 | 2409 | B-Butn1-07-09C1 | Normal1 |
| B027-01 | Broiler-W1-Big-F01-H01-Normal1 | 2701 | B-W1-Big-01-01N1 | Normal1 |
| B027-02 | Broiler-W1-Big-F01-H02-Normal1 | 2702 | B-W1-Big-01-02N1 | Normal1 |
| B027-03 | Broiler-W1-Big-F01-H03-Normal1 | 2703 | B-W1-Big-01-03N1 | Normal1 |
| B027-04 | Broiler-W1-Big-F01-H04-Normal1 | 2704 | B-W1-Big-01-04N1 | Normal1 |
| B027-05 | Broiler-W1-Big-F01-H05-Normal1 | 2705 | B-W1-Big-01-05N1 | Normal1 |
| B027-06 | Broiler-W1-Big-F01-H06-Normal1 | 2706 | B-W1-Big-01-06N1 | Normal1 |
| B027-07 | Broiler-W1-Big-F01-H07-Normal1 | 2707 | B-W1-Big-01-07N1 | Normal1 |
| B027-08 | Broiler-W1-Big-F01-H08-Normal1 | 2708 | B-W1-Big-01-08N1 | Normal1 |
| B027-09 | Broiler-W1-Big-F01-H09-Normal1 | 2709 | B-W1-Big-01-09N1 | Normal1 |
| B027-10 | Broiler-W1-Big-F01-H10-Normal1 | 2710 | B-W1-Big-01-10N1 | Normal1 |
| B027-11 | Broiler-W1-Big-F01-H11-Normal1 | 2711 | B-W1-Big-01-11N1 | Normal1 |
| B027-12 | Broiler-W1-Big-F01-H12-Normal1 | 2712 | B-W1-Big-01-12N1 | Normal1 |
| B027-13 | Broiler-W1-Big-F01-H13-Normal1 | 2713 | B-W1-Big-01-13N1 | Normal1 |
| B027-14 | Broiler-W1-Big-F01-H14-Normal1 | 2714 | B-W1-Big-01-14N1 | Normal1 |
| B027-15 | Broiler-W1-Big-F01-H15-Normal1 | 2715 | B-W1-Big-01-15N1 | Normal1 |
| B027-16 | Broiler-W1-Big-F01-H16-Normal1 | 2716 | B-W1-Big-01-16N1 | Normal1 |
| B028-01 | Broiler-W1-Big-F02-H01-Normal1 | 2801 | B-W1-Big-02-01N1 | Normal1 |
| B028-02 | Broiler-W1-Big-F02-H02-Normal1 | 2802 | B-W1-Big-02-02N1 | Normal1 |
| B028-03 | Broiler-W1-Big-F02-H03-Normal1 | 2803 | B-W1-Big-02-03N1 | Normal1 |
| B028-04 | Broiler-W1-Big-F02-H04-Normal1 | 2804 | B-W1-Big-02-04N1 | Normal1 |
| B028-05 | Broiler-W1-Big-F02-H05-Normal1 | 2805 | B-W1-Big-02-05N1 | Normal1 |
| B028-06 | Broiler-W1-Big-F02-H06-Normal1 | 2806 | B-W1-Big-02-06N1 | Normal1 |
| B028-07 | Broiler-W1-Big-F02-H07-Normal1 | 2807 | B-W1-Big-02-07N1 | Normal1 |
| B028-08 | Broiler-W1-Big-F02-H08-Normal1 | 2808 | B-W1-Big-02-08N1 | Normal1 |
| B028-09 | Broiler-W1-Big-F02-H09-Normal1 | 2809 | B-W1-Big-02-09N1 | Normal1 |
| B028-10 | Broiler-W1-Big-F02-H10-Normal1 | 2810 | B-W1-Big-02-10N1 | Normal1 |
| B028-11 | Broiler-W1-Big-F02-H11-Normal1 | 2811 | B-W1-Big-02-11N1 | Normal1 |
| B028-12 | Broiler-W1-Big-F02-H12-Normal1 | 2812 | B-W1-Big-02-12N1 | Normal1 |
| B028-13 | Broiler-W1-Big-F02-H13-Normal1 | 2813 | B-W1-Big-02-13N1 | Normal1 |
| B028-14 | Broiler-W1-Big-F02-H14-Normal1 | 2814 | B-W1-Big-02-14N1 | Normal1 |
| B028-15 | Broiler-W1-Big-F02-H15-Normal1 | 2815 | B-W1-Big-02-15N1 | Normal1 |
| B028-16 | Broiler-W1-Big-F02-H16-Normal1 | 2816 | B-W1-Big-02-16N1 | Normal1 |
| B029-01 | Broiler-W1-Big-F03-H01-Normal1 | 2901 | B-W1-Big-03-01N1 | Normal1 |
| B029-02 | Broiler-W1-Big-F03-H02-Normal1 | 2902 | B-W1-Big-03-02N1 | Normal1 |
| B029-03 | Broiler-W1-Big-F03-H03-Normal1 | 2903 | B-W1-Big-03-03N1 | Normal1 |
| B029-04 | Broiler-W1-Big-F03-H04-Normal1 | 2904 | B-W1-Big-03-04N1 | Normal1 |
| B029-05 | Broiler-W1-Big-F03-H05-Normal1 | 2905 | B-W1-Big-03-05N1 | Normal1 |
| B029-06 | Broiler-W1-Big-F03-H06-Normal1 | 2906 | B-W1-Big-03-06N1 | Normal1 |
| B029-07 | Broiler-W1-Big-F03-H07-Normal1 | 2907 | B-W1-Big-03-07N1 | Normal1 |
| B029-08 | Broiler-W1-Big-F03-H08-Normal1 | 2908 | B-W1-Big-03-08N1 | Normal1 |
| B029-09 | Broiler-W1-Big-F03-H09-Normal1 | 2909 | B-W1-Big-03-09N1 | Normal1 |
| B029-10 | Broiler-W1-Big-F03-H10-Normal1 | 2910 | B-W1-Big-03-10N1 | Normal1 |
| B029-11 | Broiler-W1-Big-F03-H11-Normal1 | 2911 | B-W1-Big-03-11N1 | Normal1 |
| B029-12 | Broiler-W1-Big-F03-H12-Normal1 | 2912 | B-W1-Big-03-12N1 | Normal1 |
| B029-13 | Broiler-W1-Big-F03-H13-Normal1 | 2913 | B-W1-Big-03-13N1 | Normal1 |
| B029-14 | Broiler-W1-Big-F03-H14-Normal1 | 2914 | B-W1-Big-03-14N1 | Normal1 |
| B029-15 | Broiler-W1-Big-F03-H15-Normal1 | 2915 | B-W1-Big-03-15N1 | Normal1 |
| B029-16 | Broiler-W1-Big-F03-H16-Normal1 | 2916 | B-W1-Big-03-16N1 | Normal1 |
| B030-01 | Broiler-W1-Big-F04-H01-Normal1 | 3001 | B-W1-Big-04-01N1 | Normal1 |
| B030-02 | Broiler-W1-Big-F04-H02-Normal1 | 3002 | B-W1-Big-04-02N1 | Normal1 |
| B030-03 | Broiler-W1-Big-F04-H03-Normal1 | 3003 | B-W1-Big-04-03N1 | Normal1 |
| B030-04 | Broiler-W1-Big-F04-H04-Normal1 | 3004 | B-W1-Big-04-04N1 | Normal1 |
| B030-05 | Broiler-W1-Big-F04-H05-Normal1 | 3005 | B-W1-Big-04-05N1 | Normal1 |
| B030-06 | Broiler-W1-Big-F04-H06-Normal1 | 3006 | B-W1-Big-04-06N1 | Normal1 |
| B030-07 | Broiler-W1-Big-F04-H07-Normal1 | 3007 | B-W1-Big-04-07N1 | Normal1 |
| B030-08 | Broiler-W1-Big-F04-H08-Normal1 | 3008 | B-W1-Big-04-08N1 | Normal1 |
| B030-09 | Broiler-W1-Big-F04-H09-Normal1 | 3009 | B-W1-Big-04-09N1 | Normal1 |
| B030-10 | Broiler-W1-Big-F04-H10-Normal1 | 3010 | B-W1-Big-04-10N1 | Normal1 |
| B030-11 | Broiler-W1-Big-F04-H11-Normal1 | 3011 | B-W1-Big-04-11N1 | Normal1 |
| B030-12 | Broiler-W1-Big-F04-H12-Normal1 | 3012 | B-W1-Big-04-12N1 | Normal1 |
| B030-13 | Broiler-W1-Big-F04-H13-Normal1 | 3013 | B-W1-Big-04-13N1 | Normal1 |
| B030-14 | Broiler-W1-Big-F04-H14-Normal1 | 3014 | B-W1-Big-04-14N1 | Normal1 |
| B030-15 | Broiler-W1-Big-F04-H15-Normal1 | 3015 | B-W1-Big-04-15N1 | Normal1 |
| B030-16 | Broiler-W1-Big-F04-H16-Normal1 | 3016 | B-W1-Big-04-16N1 | Normal1 |
| B031-01 | Broiler-W1-Big-F05-H01-Normal1 | 3101 | B-W1-Big-05-01N1 | Normal1 |
| B031-02 | Broiler-W1-Big-F05-H02-Normal1 | 3102 | B-W1-Big-05-02N1 | Normal1 |
| B031-03 | Broiler-W1-Big-F05-H03-Normal1 | 3103 | B-W1-Big-05-03N1 | Normal1 |
| B031-04 | Broiler-W1-Big-F05-H04-Normal1 | 3104 | B-W1-Big-05-04N1 | Normal1 |
| B031-05 | Broiler-W1-Big-F05-H05-Normal1 | 3105 | B-W1-Big-05-05N1 | Normal1 |
| B031-06 | Broiler-W1-Big-F05-H06-Normal1 | 3106 | B-W1-Big-05-06N1 | Normal1 |
| B031-07 | Broiler-W1-Big-F05-H07-Normal1 | 3107 | B-W1-Big-05-07N1 | Normal1 |
| B031-08 | Broiler-W1-Big-F05-H08-Normal1 | 3108 | B-W1-Big-05-08N1 | Normal1 |
| B031-09 | Broiler-W1-Big-F05-H09-Normal1 | 3109 | B-W1-Big-05-09N1 | Normal1 |
| B031-10 | Broiler-W1-Big-F05-H10-Normal1 | 3110 | B-W1-Big-05-10N1 | Normal1 |
| B031-11 | Broiler-W1-Big-F05-H11-Normal1 | 3111 | B-W1-Big-05-11N1 | Normal1 |
| B031-12 | Broiler-W1-Big-F05-H12-Normal1 | 3112 | B-W1-Big-05-12N1 | Normal1 |
| B031-13 | Broiler-W1-Big-F05-H13-Normal1 | 3113 | B-W1-Big-05-13N1 | Normal1 |
| B031-14 | Broiler-W1-Big-F05-H14-Normal1 | 3114 | B-W1-Big-05-14N1 | Normal1 |
| B031-15 | Broiler-W1-Big-F05-H15-Normal1 | 3115 | B-W1-Big-05-15N1 | Normal1 |
| B031-16 | Broiler-W1-Big-F05-H16-Normal1 | 3116 | B-W1-Big-05-16N1 | Normal1 |
| B032-01 | Broiler-W1-Big-F06-H01-Normal1 | 3201 | B-W1-Big-06-01N1 | Normal1 |
| B032-02 | Broiler-W1-Big-F06-H02-Normal1 | 3202 | B-W1-Big-06-02N1 | Normal1 |
| B032-03 | Broiler-W1-Big-F06-H03-Normal1 | 3203 | B-W1-Big-06-03N1 | Normal1 |
| B032-04 | Broiler-W1-Big-F06-H04-Normal1 | 3204 | B-W1-Big-06-04N1 | Normal1 |
| B032-05 | Broiler-W1-Big-F06-H05-Normal1 | 3205 | B-W1-Big-06-05N1 | Normal1 |
| B032-06 | Broiler-W1-Big-F06-H06-Normal1 | 3206 | B-W1-Big-06-06N1 | Normal1 |
| B032-07 | Broiler-W1-Big-F06-H07-Normal1 | 3207 | B-W1-Big-06-07N1 | Normal1 |
| B032-08 | Broiler-W1-Big-F06-H08-Normal1 | 3208 | B-W1-Big-06-08N1 | Normal1 |
| B032-09 | Broiler-W1-Big-F06-H09-Normal1 | 3209 | B-W1-Big-06-09N1 | Normal1 |
| B032-10 | Broiler-W1-Big-F06-H10-Normal1 | 3210 | B-W1-Big-06-10N1 | Normal1 |
| B032-11 | Broiler-W1-Big-F06-H11-Normal1 | 3211 | B-W1-Big-06-11N1 | Normal1 |
| B032-12 | Broiler-W1-Big-F06-H12-Normal1 | 3212 | B-W1-Big-06-12N1 | Normal1 |
| B032-13 | Broiler-W1-Big-F06-H13-Normal1 | 3213 | B-W1-Big-06-13N1 | Normal1 |
| B032-14 | Broiler-W1-Big-F06-H14-Normal1 | 3214 | B-W1-Big-06-14N1 | Normal1 |
| B032-15 | Broiler-W1-Big-F06-H15-Normal1 | 3215 | B-W1-Big-06-15N1 | Normal1 |
| B032-16 | Broiler-W1-Big-F06-H16-Normal1 | 3216 | B-W1-Big-06-16N1 | Normal1 |
| B033-01 | Broiler-W1-Big-F07-H01-Normal1 | 3301 | B-W1-Big-07-01N1 | Normal1 |
| B033-02 | Broiler-W1-Big-F07-H02-Normal1 | 3302 | B-W1-Big-07-02N1 | Normal1 |
| B033-03 | Broiler-W1-Big-F07-H03-Normal1 | 3303 | B-W1-Big-07-03N1 | Normal1 |
| B033-04 | Broiler-W1-Big-F07-H04-Normal1 | 3304 | B-W1-Big-07-04N1 | Normal1 |
| B033-05 | Broiler-W1-Big-F07-H05-Normal1 | 3305 | B-W1-Big-07-05N1 | Normal1 |
| B033-06 | Broiler-W1-Big-F07-H06-Normal1 | 3306 | B-W1-Big-07-06N1 | Normal1 |
| B033-07 | Broiler-W1-Big-F07-H07-Normal1 | 3307 | B-W1-Big-07-07N1 | Normal1 |
| B033-08 | Broiler-W1-Big-F07-H08-Normal1 | 3308 | B-W1-Big-07-08N1 | Normal1 |
| B033-09 | Broiler-W1-Big-F07-H09-Normal1 | 3309 | B-W1-Big-07-09N1 | Normal1 |
| B033-10 | Broiler-W1-Big-F07-H10-Normal1 | 3310 | B-W1-Big-07-10N1 | Normal1 |
| B033-11 | Broiler-W1-Big-F07-H11-Normal1 | 3311 | B-W1-Big-07-11N1 | Normal1 |
| B033-12 | Broiler-W1-Big-F07-H12-Normal1 | 3312 | B-W1-Big-07-12N1 | Normal1 |
| B033-13 | Broiler-W1-Big-F07-H13-Normal1 | 3313 | B-W1-Big-07-13N1 | Normal1 |
| B033-14 | Broiler-W1-Big-F07-H14-Normal1 | 3314 | B-W1-Big-07-14N1 | Normal1 |
| B033-15 | Broiler-W1-Big-F07-H15-Normal1 | 3315 | B-W1-Big-07-15N1 | Normal1 |
| B033-16 | Broiler-W1-Big-F07-H16-Normal1 | 3316 | B-W1-Big-07-16N1 | Normal1 |
| B036-01 | Broiler-W1-Big-F10-H01-Normal1 | 3601 | B-W1-Big-10-01N1 | Normal1 |
| B036-02 | Broiler-W1-Big-F10-H02-Normal1 | 3602 | B-W1-Big-10-02N1 | Normal1 |
| B036-03 | Broiler-W1-Big-F10-H03-Normal1 | 3603 | B-W1-Big-10-03N1 | Normal1 |
| B036-04 | Broiler-W1-Big-F10-H04-Normal1 | 3604 | B-W1-Big-10-04N1 | Normal1 |
| B036-05 | Broiler-W1-Big-F10-H05-Normal1 | 3605 | B-W1-Big-10-05N1 | Normal1 |
| B036-06 | Broiler-W1-Big-F10-H06-Normal1 | 3606 | B-W1-Big-10-06N1 | Normal1 |
| B036-07 | Broiler-W1-Big-F10-H07-Normal1 | 3607 | B-W1-Big-10-07N1 | Normal1 |
| B036-08 | Broiler-W1-Big-F10-H08-Normal1 | 3608 | B-W1-Big-10-08N1 | Normal1 |
| B036-09 | Broiler-W1-Big-F10-H09-Normal1 | 3609 | B-W1-Big-10-09N1 | Normal1 |
| B036-10 | Broiler-W1-Big-F10-H10-Normal1 | 3610 | B-W1-Big-10-10N1 | Normal1 |
| B036-11 | Broiler-W1-Big-F10-H11-Normal1 | 3611 | B-W1-Big-10-11N1 | Normal1 |
| B036-12 | Broiler-W1-Big-F10-H12-Normal1 | 3612 | B-W1-Big-10-12N1 | Normal1 |
| B036-13 | Broiler-W1-Big-F10-H13-Normal1 | 3613 | B-W1-Big-10-13N1 | Normal1 |
| B036-14 | Broiler-W1-Big-F10-H14-Normal1 | 3614 | B-W1-Big-10-14N1 | Normal1 |
| B036-15 | Broiler-W1-Big-F10-H15-Normal1 | 3615 | B-W1-Big-10-15N1 | Normal1 |
| B036-16 | Broiler-W1-Big-F10-H16-Normal1 | 3616 | B-W1-Big-10-16N1 | Normal1 |
| B039-01 | Broiler-W1-Exp.-F01-H01-Normal1 | 3901 | B-W1-Exp-01-01N1 | Normal1 |
| B040-01 | Broiler-W1-Mini-F05-H01-Normal1 | 4001 | B-W1-Min-05-01N1 | Normal1 |
| B040-02 | Broiler-W1-Mini-F05-H02-Normal1 | 4002 | B-W1-Min-05-02N1 | Normal1 |
| B040-03 | Broiler-W1-Mini-F05-H03-Normal1 | 4003 | B-W1-Min-05-03N1 | Normal1 |
| B040-04 | Broiler-W1-Mini-F05-H04-Normal1 | 4004 | B-W1-Min-05-04N1 | Normal1 |
| B040-05 | Broiler-W1-Mini-F05-H05-Normal1 | 4005 | B-W1-Min-05-05N1 | Normal1 |
| B040-06 | Broiler-W1-Mini-F05-H06-Normal1 | 4006 | B-W1-Min-05-06N1 | Normal1 |
| B041-01 | Broiler-W1-Mini-F01-H01-Normal1 | 4101 | B-W1-Min-01-01N1 | Normal1 |
| B041-02 | Broiler-W1-Mini-F01-H02-Normal1 | 4102 | B-W1-Min-01-02N1 | Normal1 |
| B041-03 | Broiler-W1-Mini-F01-H03-Normal1 | 4103 | B-W1-Min-01-03N1 | Normal1 |
| B041-04 | Broiler-W1-Mini-F01-H04-Normal1 | 4104 | B-W1-Min-01-04N1 | Normal1 |
| B041-05 | Broiler-W1-Mini-F01-H05-Normal1 | 4105 | B-W1-Min-01-05N1 | Normal1 |
| B041-06 | Broiler-W1-Mini-F01-H06-Normal1 | 4106 | B-W1-Min-01-06N1 | Normal1 |
| B042-01 | Broiler-W1-Mini-F02-H01-Normal1 | 4201 | B-W1-Min-02-01N1 | Normal1 |
| B042-02 | Broiler-W1-Mini-F02-H02-Normal1 | 4202 | B-W1-Min-02-02N1 | Normal1 |
| B042-03 | Broiler-W1-Mini-F02-H03-Normal1 | 4203 | B-W1-Min-02-03N1 | Normal1 |
| B042-04 | Broiler-W1-Mini-F02-H04-Normal1 | 4204 | B-W1-Min-02-04N1 | Normal1 |
| B042-05 | Broiler-W1-Mini-F02-H05-Normal1 | 4205 | B-W1-Min-02-05N1 | Normal1 |
| B042-06 | Broiler-W1-Mini-F02-H06-Normal1 | 4206 | B-W1-Min-02-06N1 | Normal1 |
| B043-01 | Broiler-W1-Mini-F03-H01-Normal1 | 4301 | B-W1-Min-03-01N1 | Normal1 |
| B043-02 | Broiler-W1-Mini-F03-H02-Normal1 | 4302 | B-W1-Min-03-02N1 | Normal1 |
| B043-03 | Broiler-W1-Mini-F03-H03-Normal1 | 4303 | B-W1-Min-03-03N1 | Normal1 |
| B043-04 | Broiler-W1-Mini-F03-H04-Normal1 | 4304 | B-W1-Min-03-04N1 | Normal1 |
| B043-05 | Broiler-W1-Mini-F03-H05-Normal1 | 4305 | B-W1-Min-03-05N1 | Normal1 |
| B043-06 | Broiler-W1-Mini-F03-H06-Normal1 | 4306 | B-W1-Min-03-06N1 | Normal1 |
| B044-01 | Broiler-W1-Mini-F04-H01-Normal1 | 4401 | B-W1-Min-04-01N1 | Normal1 |
| B044-02 | Broiler-W1-Mini-F04-H02-Normal1 | 4402 | B-W1-Min-04-02N1 | Normal1 |
| B044-03 | Broiler-W1-Mini-F04-H03-Normal1 | 4403 | B-W1-Min-04-03N1 | Normal1 |
| B044-04 | Broiler-W1-Mini-F04-H04-Normal1 | 4404 | B-W1-Min-04-04N1 | Normal1 |
| B044-05 | Broiler-W1-Mini-F04-H05-Normal1 | 4405 | B-W1-Min-04-05N1 | Normal1 |
| B044-06 | Broiler-W1-Mini-F04-H06-Normal1 | 4406 | B-W1-Min-04-06N1 | Normal1 |
| B047-01 | Broiler-W1-Mini-F10-H01-Normal1 | 4701 | B-W1-Min-10-01N1 | Normal1 |
| B047-02 | Broiler-W1-Mini-F10-H02-Normal1 | 4702 | B-W1-Min-10-02N1 | Normal1 |
| B047-03 | Broiler-W1-Mini-F10-H03-Normal1 | 4703 | B-W1-Min-10-03N1 | Normal1 |
| B047-04 | Broiler-W1-Mini-F10-H04-Normal1 | 4704 | B-W1-Min-10-04N1 | Normal1 |
| B047-05 | Broiler-W1-Mini-F10-H05-Normal1 | 4705 | B-W1-Min-10-05N1 | Normal1 |
| B047-06 | Broiler-W1-Mini-F10-H06-Normal1 | 4706 | B-W1-Min-10-06N1 | Normal1 |
| B048-01 | Broiler-W1-Mini-F11-H01-Normal1 | 4801 | B-W1-Min-11-01N1 | Normal1 |
| B048-02 | Broiler-W1-Mini-F11-H02-Normal1 | 4802 | B-W1-Min-11-02N1 | Normal1 |
| B048-03 | Broiler-W1-Mini-F11-H03-Normal1 | 4803 | B-W1-Min-11-03N1 | Normal1 |
| B048-04 | Broiler-W1-Mini-F11-H04-Normal1 | 4804 | B-W1-Min-11-04N1 | Normal1 |
| B048-05 | Broiler-W1-Mini-F11-H05-Normal1 | 4805 | B-W1-Min-11-05N1 | Normal1 |
| B048-06 | Broiler-W1-Mini-F11-H06-Normal1 | 4806 | B-W1-Min-11-06N1 | Normal1 |
| B049-01 | Broiler-W1-Mini-F12-H01-Normal1 | 4901 | B-W1-Min-12-01N1 | Normal1 |
| B049-02 | Broiler-W1-Mini-F12-H02-Normal1 | 4902 | B-W1-Min-12-02N1 | Normal1 |
| B049-03 | Broiler-W1-Mini-F12-H03-Normal1 | 4903 | B-W1-Min-12-03N1 | Normal1 |
| B049-04 | Broiler-W1-Mini-F12-H04-Normal1 | 4904 | B-W1-Min-12-04N1 | Normal1 |
| B049-05 | Broiler-W1-Mini-F12-H05-Normal1 | 4905 | B-W1-Min-12-05N1 | Normal1 |
| B049-06 | Broiler-W1-Mini-F12-H06-Normal1 | 4906 | B-W1-Min-12-06N1 | Normal1 |
| B050-01 | Broiler-W1-Mini-F13-H01-Normal1 | 5001 | B-W1-Min-13-01N1 | Normal1 |
| B050-02 | Broiler-W1-Mini-F13-H02-Normal1 | 5002 | B-W1-Min-13-02N1 | Normal1 |
| B050-03 | Broiler-W1-Mini-F13-H03-Normal1 | 5003 | B-W1-Min-13-03N1 | Normal1 |
| B050-04 | Broiler-W1-Mini-F13-H04-Normal1 | 5004 | B-W1-Min-13-04N1 | Normal1 |
| B050-05 | Broiler-W1-Mini-F13-H05-Normal1 | 5005 | B-W1-Min-13-05N1 | Normal1 |
| B050-06 | Broiler-W1-Mini-F13-H06-Normal1 | 5006 | B-W1-Min-13-06N1 | Normal1 |
| B051-01 | Broiler-W1-Mini-F14-H01-Normal1 | 5101 | B-W1-Min-14-01N1 | Normal1 |
| B051-02 | Broiler-W1-Mini-F14-H02-Normal1 | 5102 | B-W1-Min-14-02N1 | Normal1 |
| B051-03 | Broiler-W1-Mini-F14-H03-Normal1 | 5103 | B-W1-Min-14-03N1 | Normal1 |
| B051-04 | Broiler-W1-Mini-F14-H04-Normal1 | 5104 | B-W1-Min-14-04N1 | Normal1 |
| B051-05 | Broiler-W1-Mini-F14-H05-Normal1 | 5105 | B-W1-Min-14-05N1 | Normal1 |
| B051-06 | Broiler-W1-Mini-F14-H06-Normal1 | 5106 | B-W1-Min-14-06N1 | Normal1 |
| B052-01 | Broiler-W1-Mini-F15-H01-Normal1 | 5201 | B-W1-Min-15-01N1 | Normal1 |
| B052-02 | Broiler-W1-Mini-F15-H02-Normal1 | 5202 | B-W1-Min-15-02N1 | Normal1 |
| B052-03 | Broiler-W1-Mini-F15-H03-Normal1 | 5203 | B-W1-Min-15-03N1 | Normal1 |
| B052-04 | Broiler-W1-Mini-F15-H04-Normal1 | 5204 | B-W1-Min-15-04N1 | Normal1 |
| B052-05 | Broiler-W1-Mini-F15-H05-Normal1 | 5205 | B-W1-Min-15-05N1 | Normal1 |
| B052-06 | Broiler-W1-Mini-F15-H06-Normal1 | 5206 | B-W1-Min-15-06N1 | Normal1 |
| B053-01 | Broiler-Butn11-F01-H01-Normal1 | 5301 | B-Butn11-01-01N1 | Normal1 |
| B053-02 | Broiler-Butn11-F01-H02-Normal1 | 5302 | B-Butn11-01-02N1 | Normal1 |
| B053-03 | Broiler-Butn11-F01-H03-Normal1 | 5303 | B-Butn11-01-03N1 | Normal1 |
| B053-04 | Broiler-Butn11-F01-H04-Normal1 | 5304 | B-Butn11-01-04N1 | Normal1 |
| B053-05 | Broiler-Butn11-F01-H05-Normal1 | 5305 | B-Butn11-01-05N1 | Normal1 |
| B053-06 | Broiler-Butn11-F01-H06-Normal1 | 5306 | B-Butn11-01-06N1 | Normal1 |
| B053-07 | Broiler-Butn11-F01-H07-Normal1 | 5307 | B-Butn11-01-07N1 | Normal1 |
| B053-08 | Broiler-Butn11-F01-H08-Normal1 | 5308 | B-Butn11-01-08N1 | Normal1 |
| B053-09 | Broiler-Butn11-F01-H09-Normal1 | 5309 | B-Butn11-01-09N1 | Normal1 |
| B053-10 | Broiler-Butn11-F01-H10-Normal1 | 5310 | B-Butn11-01-10N1 | Normal1 |
| B053-11 | Broiler-Butn11-F01-H11-Normal1 | 5311 | B-Butn11-01-11N1 | Normal1 |
| B053-12 | Broiler-Butn11-F01-H12-Normal1 | 5312 | B-Butn11-01-12N1 | Normal1 |
| B053-13 | Broiler-Butn11-F01-H13-Normal1 | 5313 | B-Butn11-01-13N2 | Normal1 |
| B053-14 | Broiler-Butn11-F01-H14-Normal1 | 5314 | B-Butn11-01-14N2 | Normal1 |
| B054-01 | Broiler-Butn11-F02-H01-Normal1 | 5401 | B-Butn11-02-01N1 | Normal1 |
| B054-02 | Broiler-Butn11-F02-H02-Normal1 | 5402 | B-Butn11-02-02N1 | Normal1 |
| B054-03 | Broiler-Butn11-F02-H03-Normal1 | 5403 | B-Butn11-02-03N1 | Normal1 |
| B054-04 | Broiler-Butn11-F02-H04-Normal1 | 5404 | B-Butn11-02-04N1 | Normal1 |
| B054-05 | Broiler-Butn11-F02-H05-Normal1 | 5405 | B-Butn11-02-05N1 | Normal1 |
| B054-06 | Broiler-Butn11-F02-H06-Normal1 | 5406 | B-Butn11-02-06N1 | Normal1 |
| B054-07 | Broiler-Butn11-F02-H07-Normal1 | 5407 | B-Butn11-02-07N1 | Normal1 |
| B054-08 | Broiler-Butn11-F02-H08-Normal1 | 5408 | B-Butn11-02-08N1 | Normal1 |
| B054-09 | Broiler-Butn11-F02-H09-Normal1 | 5409 | B-Butn11-02-09N1 | Normal1 |
| B054-10 | Broiler-Butn11-F02-H10-Normal1 | 5410 | B-Butn11-02-10N1 | Normal1 |
| B054-11 | Broiler-Butn11-F02-H11-Normal1 | 5411 | B-Butn11-02-11N1 | Normal1 |
| B054-12 | Broiler-Butn11-F02-H12-Normal1 | 5412 | B-Butn11-02-12N1 | Normal1 |
| B054-13 | Broiler-Butn11-F02-H13-Normal1 | 5413 | B-Butn11-02-13N2 | Normal1 |
| B054-14 | Broiler-Butn11-F02-H14-Normal1 | 5414 | B-Butn11-02-14N2 | Normal1 |
| B054-15 | Broiler-Butn11-F02-H15-Normal1 | 5415 | B-Butn11-02-15N2 | Normal1 |
| B054-16 | Broiler-Butn11-F02-H16-Normal1 | 5416 | B-Butn11-02-16N2 | Normal1 |
| B055-01 | Broiler-Butn11-F03-H01-Normal1 | 5501 | B-Butn11-03-01N1 | Normal1 |
| B055-02 | Broiler-Butn11-F03-H02-Normal1 | 5502 | B-Butn11-03-02N1 | Normal1 |
| B055-03 | Broiler-Butn11-F03-H03-Normal1 | 5503 | B-Butn11-03-03N1 | Normal1 |
| B055-04 | Broiler-Butn11-F03-H04-Normal1 | 5504 | B-Butn11-03-04N1 | Normal1 |
| B055-05 | Broiler-Butn11-F03-H05-Normal1 | 5505 | B-Butn11-03-05N1 | Normal1 |
| B055-06 | Broiler-Butn11-F03-H06-Normal1 | 5506 | B-Butn11-03-06N1 | Normal1 |
| B055-07 | Broiler-Butn11-F03-H07-Normal1 | 5507 | B-Butn11-03-07N1 | Normal1 |
| B055-08 | Broiler-Butn11-F03-H08-Normal1 | 5508 | B-Butn11-03-08N1 | Normal1 |
| B055-09 | Broiler-Butn11-F03-H09-Normal1 | 5509 | B-Butn11-03-09N1 | Normal1 |
| B055-10 | Broiler-Butn11-F03-H10-Normal1 | 5510 | B-Butn11-03-10N1 | Normal1 |
| B055-11 | Broiler-Butn11-F03-H11-Normal1 | 5511 | B-Butn11-03-11N1 | Normal1 |
| B055-12 | Broiler-Butn11-F03-H12-Normal1 | 5512 | B-Butn11-03-12N1 | Normal1 |
| B055-13 | Broiler-Butn11-F03-H13-Normal1 | 5513 | B-Butn11-03-13N2 | Normal1 |
| B055-14 | Broiler-Butn11-F03-H14-Normal1 | 5514 | B-Butn11-03-14N2 | Normal1 |
| B056-01 | Broiler-Butn5-F01-H01-Normal1 | 5601 | B-Butn5-01-01N1 | Normal1 |
| B056-02 | Broiler-Butn5-F01-H02-Normal1 | 5602 | B-Butn5-01-02N1 | Normal1 |
| B056-03 | Broiler-Butn5-F01-H03-Normal1 | 5603 | B-Butn5-01-03N1 | Normal1 |
| B056-04 | Broiler-Butn5-F01-H04-Normal1 | 5604 | B-Butn5-01-04N1 | Normal1 |
| B056-05 | Broiler-Butn5-F01-H05-Normal1 | 5605 | B-Butn5-01-05N1 | Normal1 |
| B056-06 | Broiler-Butn5-F01-H06-Normal1 | 5606 | B-Butn5-01-06N1 | Normal1 |
| B056-07 | Broiler-Butn5-F01-H07-Normal1 | 5607 | B-Butn5-01-07N1 | Normal1 |
| B056-08 | Broiler-Butn5-F01-H08-Normal1 | 5608 | B-Butn5-01-08N1 | Normal1 |
| B056-09 | Broiler-Butn5-F01-H09-Normal1 | 5609 | B-Butn5-01-09N1 | Normal1 |
| B056-10 | Broiler-Butn5-F01-H10-Normal1 | 5610 | B-Butn5-01-10N1 | Normal1 |
| B056-11 | Broiler-Butn5-F01-H11-Normal1 | 5611 | B-Butn5-01-11N1 | Normal1 |
| B056-12 | Broiler-Butn5-F01-H12-Normal1 | 5612 | B-Butn5-01-12N1 | Normal1 |
| B056-13 | Broiler-Butn5-F01-H13-Cage1 | 5613 | B-Butn5-01-13C1 | Cage1 |
| B056-14 | Broiler-Butn5-F01-H14-Cage1 | 5614 | B-Butn5-01-14C1 | Cage1 |
| B057-01 | Broiler-Butn5-F02-H01-Normal1 | 5701 | B-Butn5-02-01N1 | Normal1 |
| B057-02 | Broiler-Butn5-F02-H02-Normal1 | 5702 | B-Butn5-02-02N1 | Normal1 |
| B057-03 | Broiler-Butn5-F02-H03-Normal1 | 5703 | B-Butn5-02-03N1 | Normal1 |
| B057-04 | Broiler-Butn5-F02-H04-Normal1 | 5704 | B-Butn5-02-04N1 | Normal1 |
| B057-05 | Broiler-Butn5-F02-H05-Normal1 | 5705 | B-Butn5-02-05N1 | Normal1 |
| B057-06 | Broiler-Butn5-F02-H06-Normal1 | 5706 | B-Butn5-02-06N1 | Normal1 |
| B057-07 | Broiler-Butn5-F02-H07-Normal1 | 5707 | B-Butn5-02-07N1 | Normal1 |
| B057-08 | Broiler-Butn5-F02-H08-Normal1 | 5708 | B-Butn5-02-08N1 | Normal1 |
| B057-09 | Broiler-Butn5-F02-H09-Normal1 | 5709 | B-Butn5-02-09N1 | Normal1 |
| B057-10 | Broiler-Butn5-F02-H10-Normal1 | 5710 | B-Butn5-02-10N1 | Normal1 |
| B057-11 | Broiler-Butn5-F02-H11-Normal1 | 5711 | B-Butn5-02-11N1 | Normal1 |
| B057-12 | Broiler-Butn5-F02-H12-Normal1 | 5712 | B-Butn5-02-12N1 | Normal1 |
| B058-01 | Broiler-W2-P1-F04-H01-Normal1 | 5801 | B-W2-P1-04-01N1 | Normal1 |
| B058-02 | Broiler-W2-P1-F04-H02-Normal1 | 5802 | B-W2-P1-04-02N1 | Normal1 |
| B058-03 | Broiler-W2-P1-F04-H03-Normal1 | 5803 | B-W2-P1-04-03N1 | Normal1 |
| B058-04 | Broiler-W2-P1-F04-H04-Normal1 | 5804 | B-W2-P1-04-04N1 | Normal1 |
| B058-05 | Broiler-W2-P1-F04-H05-Normal1 | 5805 | B-W2-P1-04-05N1 | Normal1 |
| B058-06 | Broiler-W2-P1-F04-H06-Normal1 | 5806 | B-W2-P1-04-06N1 | Normal1 |
| B058-07 | Broiler-W2-P1-F04-H07-Normal1 | 5807 | B-W2-P1-04-07N1 | Normal1 |
| B058-08 | Broiler-W2-P1-F04-H08-Normal1 | 5808 | B-W2-P1-04-08N1 | Normal1 |
| B058-09 | Broiler-W2-P1-F04-H09-Normal1 | 5809 | B-W2-P1-04-09N1 | Normal1 |
| B058-10 | Broiler-W2-P1-F04-H10-Normal1 | 5810 | B-W2-P1-04-10N1 | Normal1 |
| B058-11 | Broiler-W2-P1-F04-H11-Normal1 | 5811 | B-W2-P1-04-11N1 | Normal1 |
| B058-12 | Broiler-W2-P1-F04-H12-Normal1 | 5812 | B-W2-P1-04-12N1 | Normal1 |
| B059-01 | Broiler-W2-P1-F03-H01-Normal1 | 5901 | B-W2-P1-03-01N1 | Normal1 |
| B059-02 | Broiler-W2-P1-F03-H02-Normal1 | 5902 | B-W2-P1-03-02N1 | Normal1 |
| B059-03 | Broiler-W2-P1-F03-H03-Normal1 | 5903 | B-W2-P1-03-03N1 | Normal1 |
| B059-04 | Broiler-W2-P1-F03-H04-Normal1 | 5904 | B-W2-P1-03-04N1 | Normal1 |
| B059-05 | Broiler-W2-P1-F03-H05-Normal1 | 5905 | B-W2-P1-03-05N1 | Normal1 |
| B059-06 | Broiler-W2-P1-F03-H06-Normal1 | 5906 | B-W2-P1-03-06N1 | Normal1 |
| B059-07 | Broiler-W2-P1-F03-H07-Normal1 | 5907 | B-W2-P1-03-07N1 | Normal1 |
| B059-08 | Broiler-W2-P1-F03-H08-Normal1 | 5908 | B-W2-P1-03-08N1 | Normal1 |
| B059-09 | Broiler-W2-P1-F03-H09-Normal1 | 5909 | B-W2-P1-03-09N1 | Normal1 |
| B059-10 | Broiler-W2-P1-F03-H10-Normal1 | 5910 | B-W2-P1-03-10N1 | Normal1 |
| B059-11 | Broiler-W2-P1-F03-H11-Normal1 | 5911 | B-W2-P1-03-11N1 | Normal1 |
| B059-12 | Broiler-W2-P1-F03-H12-Normal1 | 5912 | B-W2-P1-03-12N1 | Normal1 |
| B060-01 | Broiler-W2-P1-F02-H01-Normal1 | 6001 | B-W2-P1-02-01N1 | Normal1 |
| B060-02 | Broiler-W2-P1-F02-H02-Normal1 | 6002 | B-W2-P1-02-02N1 | Normal1 |
| B060-03 | Broiler-W2-P1-F02-H03-Normal1 | 6003 | B-W2-P1-02-03N1 | Normal1 |
| B060-04 | Broiler-W2-P1-F02-H04-Normal1 | 6004 | B-W2-P1-02-04N1 | Normal1 |
| B060-05 | Broiler-W2-P1-F02-H05-Normal1 | 6005 | B-W2-P1-02-05N1 | Normal1 |
| B060-06 | Broiler-W2-P1-F02-H06-Normal1 | 6006 | B-W2-P1-02-06N1 | Normal1 |
| B060-07 | Broiler-W2-P1-F02-H07-Normal1 | 6007 | B-W2-P1-02-07N1 | Normal1 |
| B060-08 | Broiler-W2-P1-F02-H08-Normal1 | 6008 | B-W2-P1-02-08N1 | Normal1 |
| B060-09 | Broiler-W2-P1-F02-H09-Normal1 | 6009 | B-W2-P1-02-09N1 | Normal1 |
| B060-10 | Broiler-W2-P1-F02-H10-Normal1 | 6010 | B-W2-P1-02-10N1 | Normal1 |
| B060-11 | Broiler-W2-P1-F02-H11-Normal1 | 6011 | B-W2-P1-02-11N1 | Normal1 |
| B060-12 | Broiler-W2-P1-F02-H12-Normal1 | 6012 | B-W2-P1-02-12N1 | Normal1 |
| B060-13 | Broiler-W2-P1-F02-H13-Normal2 | 6013 | B-W2-P1-02-13N2 | Normal2 |
| B060-14 | Broiler-W2-P1-F02-H14-Normal2 | 6014 | B-W2-P1-02-14N2 | Normal2 |
| B060-15 | Broiler-W2-P1-F02-H15-Normal2 | 6015 | B-W2-P1-02-15N2 | Normal2 |
| B060-16 | Broiler-W2-P1-F02-H16-Normal2 | 6016 | B-W2-P1-02-16N2 | Normal2 |
| B061-01 | Broiler-W2-P1-F01-H01-Normal1 | 6101 | B-W2-P1-01-01N1 | Normal1 |
| B061-02 | Broiler-W2-P1-F01-H02-Normal1 | 6102 | B-W2-P1-01-02N1 | Normal1 |
| B061-03 | Broiler-W2-P1-F01-H03-Normal1 | 6103 | B-W2-P1-01-03N1 | Normal1 |
| B061-04 | Broiler-W2-P1-F01-H04-Normal1 | 6104 | B-W2-P1-01-04N1 | Normal1 |
| B061-05 | Broiler-W2-P1-F01-H05-Normal1 | 6105 | B-W2-P1-01-05N1 | Normal1 |
| B061-06 | Broiler-W2-P1-F01-H06-Normal1 | 6106 | B-W2-P1-01-06N1 | Normal1 |
| B061-07 | Broiler-W2-P1-F01-H07-Normal1 | 6107 | B-W2-P1-01-07N1 | Normal1 |
| B061-08 | Broiler-W2-P1-F01-H08-Normal1 | 6108 | B-W2-P1-01-08N1 | Normal1 |
| B061-09 | Broiler-W2-P1-F01-H09-Normal1 | 6109 | B-W2-P1-01-09N1 | Normal1 |
| B061-10 | Broiler-W2-P1-F01-H10-Normal1 | 6110 | B-W2-P1-01-10N1 | Normal1 |
| B061-11 | Broiler-W2-P1-F01-H11-Normal1 | 6111 | B-W2-P1-01-11N1 | Normal1 |
| B061-12 | Broiler-W2-P1-F01-H12-Normal1 | 6112 | B-W2-P1-01-12N1 | Normal1 |
| B061-13 | Broiler-W2-P1-F01-H13-Normal2 | 6113 | B-W2-P1-01-13N2 | Normal2 |
| B061-14 | Broiler-W2-P1-F01-H14-Normal2 | 6114 | B-W2-P1-01-14N2 | Normal2 |
| B061-15 | Broiler-W2-P1-F01-H15-Normal2 | 6115 | B-W2-P1-01-15N2 | Normal2 |
| B061-16 | Broiler-W2-P1-F01-H16-Normal2 | 6116 | B-W2-P1-01-16N2 | Normal2 |
| B062-01 | Broiler-W2-P1-F05-H01-Normal1 | 6201 | B-W2-P1-05-01N1 | Normal1 |
| B062-02 | Broiler-W2-P1-F05-H02-Normal1 | 6202 | B-W2-P1-05-02N1 | Normal1 |
| B062-03 | Broiler-W2-P1-F05-H03-Normal1 | 6203 | B-W2-P1-05-03N1 | Normal1 |
| B062-04 | Broiler-W2-P1-F05-H04-Normal1 | 6204 | B-W2-P1-05-04N1 | Normal1 |
| B062-05 | Broiler-W2-P1-F05-H05-Normal1 | 6205 | B-W2-P1-05-05N1 | Normal1 |
| B062-06 | Broiler-W2-P1-F05-H06-Normal1 | 6206 | B-W2-P1-05-06N1 | Normal1 |
| B062-07 | Broiler-W2-P1-F05-H07-Normal1 | 6207 | B-W2-P1-05-07N1 | Normal1 |
| B062-08 | Broiler-W2-P1-F05-H08-Normal1 | 6208 | B-W2-P1-05-08N1 | Normal1 |
| B062-09 | Broiler-W2-P1-F05-H09-Normal1 | 6209 | B-W2-P1-05-09N1 | Normal1 |
| B062-10 | Broiler-W2-P1-F05-H10-Normal1 | 6210 | B-W2-P1-05-10N1 | Normal1 |
| B062-11 | Broiler-W2-P1-F05-H11-Normal1 | 6211 | B-W2-P1-05-11N1 | Normal1 |
| B062-12 | Broiler-W2-P1-F05-H12-Normal1 | 6212 | B-W2-P1-05-12N1 | Normal1 |
| B063-01 | Broiler-W2-P1-F06-H01-Normal1 | 6301 | B-W2-P1-06-01N1 | Normal1 |
| B063-02 | Broiler-W2-P1-F06-H02-Normal1 | 6302 | B-W2-P1-06-02N1 | Normal1 |
| B063-03 | Broiler-W2-P1-F06-H03-Normal1 | 6303 | B-W2-P1-06-03N1 | Normal1 |
| B063-04 | Broiler-W2-P1-F06-H04-Normal1 | 6304 | B-W2-P1-06-04N1 | Normal1 |
| B063-05 | Broiler-W2-P1-F06-H05-Normal1 | 6305 | B-W2-P1-06-05N1 | Normal1 |
| B063-06 | Broiler-W2-P1-F06-H06-Normal1 | 6306 | B-W2-P1-06-06N1 | Normal1 |
| B063-07 | Broiler-W2-P1-F06-H07-Normal1 | 6307 | B-W2-P1-06-07N1 | Normal1 |
| B063-08 | Broiler-W2-P1-F06-H08-Normal1 | 6308 | B-W2-P1-06-08N1 | Normal1 |
| B063-09 | Broiler-W2-P1-F06-H09-Normal1 | 6309 | B-W2-P1-06-09N1 | Normal1 |
| B063-10 | Broiler-W2-P1-F06-H10-Normal1 | 6310 | B-W2-P1-06-10N1 | Normal1 |
| B063-11 | Broiler-W2-P1-F06-H11-Normal1 | 6311 | B-W2-P1-06-11N1 | Normal1 |
| B063-12 | Broiler-W2-P1-F06-H12-Normal1 | 6312 | B-W2-P1-06-12N1 | Normal1 |
| B063-13 | Broiler-W2-P1-F06-H13-Normal2 | 6313 | B-W2-P1-06-13N2 | Normal2 |
| B063-14 | Broiler-W2-P1-F06-H14-Normal2 | 6314 | B-W2-P1-06-14N2 | Normal2 |
| B064-01 | Broiler-W2-P1-F10-H01-Normal1 | 6401 | B-W2-P1-10-01N1 | Normal1 |
| B064-02 | Broiler-W2-P1-F10-H02-Normal1 | 6402 | B-W2-P1-10-02N1 | Normal1 |
| B064-03 | Broiler-W2-P1-F10-H03-Normal1 | 6403 | B-W2-P1-10-03N1 | Normal1 |
| B064-04 | Broiler-W2-P1-F10-H04-Normal1 | 6404 | B-W2-P1-10-04N1 | Normal1 |
| B064-05 | Broiler-W2-P1-F10-H05-Normal1 | 6405 | B-W2-P1-10-05N1 | Normal1 |
| B064-06 | Broiler-W2-P1-F10-H06-Normal1 | 6406 | B-W2-P1-10-06N1 | Normal1 |
| B064-07 | Broiler-W2-P1-F10-H07-Normal1 | 6407 | B-W2-P1-10-07N1 | Normal1 |
| B064-08 | Broiler-W2-P1-F10-H08-Normal1 | 6408 | B-W2-P1-10-08N1 | Normal1 |
| B064-09 | Broiler-W2-P1-F10-H09-Normal1 | 6409 | B-W2-P1-10-09N1 | Normal1 |
| B064-10 | Broiler-W2-P1-F10-H10-Normal1 | 6410 | B-W2-P1-10-10N1 | Normal1 |
| B064-11 | Broiler-W2-P1-F10-H11-Normal1 | 6411 | B-W2-P1-10-11N1 | Normal1 |
| B064-12 | Broiler-W2-P1-F10-H12-Normal1 | 6412 | B-W2-P1-10-12N1 | Normal1 |
| B064-13 | Broiler-W2-P1-F10-H13-Normal2 | 6413 | B-W2-P1-10-13N2 | Normal2 |
| B064-14 | Broiler-W2-P1-F10-H14-Normal2 | 6414 | B-W2-P1-10-14N2 | Normal2 |
| B064-15 | Broiler-W2-P1-F10-H15-Normal2 | 6415 | B-W2-P1-10-15N2 | Normal2 |
| B064-16 | Broiler-W2-P1-F10-H16-Normal2 | 6416 | B-W2-P1-10-16N2 | Normal2 |
| B065-01 | Broiler-W2-P1-F07-H01-Normal1 | 6501 | B-W2-P1-07-01N1 | Normal1 |
| B065-02 | Broiler-W2-P1-F07-H02-Normal1 | 6502 | B-W2-P1-07-02N1 | Normal1 |
| B065-03 | Broiler-W2-P1-F07-H03-Normal1 | 6503 | B-W2-P1-07-03N1 | Normal1 |
| B065-04 | Broiler-W2-P1-F07-H04-Normal1 | 6504 | B-W2-P1-07-04N1 | Normal1 |
| B065-05 | Broiler-W2-P1-F07-H05-Normal1 | 6505 | B-W2-P1-07-05N1 | Normal1 |
| B065-06 | Broiler-W2-P1-F07-H06-Normal1 | 6506 | B-W2-P1-07-06N1 | Normal1 |
| B065-07 | Broiler-W2-P1-F07-H07-Normal1 | 6507 | B-W2-P1-07-07N1 | Normal1 |
| B065-08 | Broiler-W2-P1-F07-H08-Normal1 | 6508 | B-W2-P1-07-08N1 | Normal1 |
| B065-09 | Broiler-W2-P1-F07-H09-Normal1 | 6509 | B-W2-P1-07-09N1 | Normal1 |
| B065-10 | Broiler-W2-P1-F07-H10-Normal1 | 6510 | B-W2-P1-07-10N1 | Normal1 |
| B065-11 | Broiler-W2-P1-F07-H11-Normal1 | 6511 | B-W2-P1-07-11N1 | Normal1 |
| B065-12 | Broiler-W2-P1-F07-H12-Normal1 | 6512 | B-W2-P1-07-12N1 | Normal1 |
| B065-13 | Broiler-W2-P1-F07-H13-Normal2 | 6513 | B-W2-P1-07-13N2 | Normal2 |
| B065-14 | Broiler-W2-P1-F07-H14-Normal2 | 6514 | B-W2-P1-07-14N2 | Normal2 |
| B065-15 | Broiler-W2-P1-F07-H15-Normal2 | 6515 | B-W2-P1-07-15N2 | Normal2 |
| B065-16 | Broiler-W2-P1-F07-H16-Normal2 | 6516 | B-W2-P1-07-16N2 | Normal2 |
| B066-01 | Broiler-W2-P1-F08-H01-Normal1 | 6601 | B-W2-P1-08-01N1 | Normal1 |
| B066-02 | Broiler-W2-P1-F08-H02-Normal1 | 6602 | B-W2-P1-08-02N1 | Normal1 |
| B066-03 | Broiler-W2-P1-F08-H03-Normal1 | 6603 | B-W2-P1-08-03N1 | Normal1 |
| B066-04 | Broiler-W2-P1-F08-H04-Normal1 | 6604 | B-W2-P1-08-04N1 | Normal1 |
| B066-05 | Broiler-W2-P1-F08-H05-Normal1 | 6605 | B-W2-P1-08-05N1 | Normal1 |
| B066-06 | Broiler-W2-P1-F08-H06-Normal1 | 6606 | B-W2-P1-08-06N1 | Normal1 |
| B066-07 | Broiler-W2-P1-F08-H07-Normal1 | 6607 | B-W2-P1-08-07N1 | Normal1 |
| B066-08 | Broiler-W2-P1-F08-H08-Normal1 | 6608 | B-W2-P1-08-08N1 | Normal1 |
| B066-09 | Broiler-W2-P1-F08-H09-Normal1 | 6609 | B-W2-P1-08-09N1 | Normal1 |
| B066-10 | Broiler-W2-P1-F08-H10-Normal1 | 6610 | B-W2-P1-08-10N1 | Normal1 |
| B066-11 | Broiler-W2-P1-F08-H11-Normal1 | 6611 | B-W2-P1-08-11N1 | Normal1 |
| B066-12 | Broiler-W2-P1-F08-H12-Normal1 | 6612 | B-W2-P1-08-12N1 | Normal1 |
| B066-13 | Broiler-W2-P1-F08-H13-Normal2 | 6613 | B-W2-P1-08-13N2 | Normal2 |
| B066-14 | Broiler-W2-P1-F08-H14-Normal2 | 6614 | B-W2-P1-08-14N2 | Normal2 |
| B067-01 | Broiler-W2-P1-F09-H01-Normal1 | 6701 | B-W2-P1-09-01N1 | Normal1 |
| B067-02 | Broiler-W2-P1-F09-H02-Normal1 | 6702 | B-W2-P1-09-02N1 | Normal1 |
| B067-03 | Broiler-W2-P1-F09-H03-Normal1 | 6703 | B-W2-P1-09-03N1 | Normal1 |
| B067-04 | Broiler-W2-P1-F09-H04-Normal1 | 6704 | B-W2-P1-09-04N1 | Normal1 |
| B067-05 | Broiler-W2-P1-F09-H05-Normal1 | 6705 | B-W2-P1-09-05N1 | Normal1 |
| B067-06 | Broiler-W2-P1-F09-H06-Normal1 | 6706 | B-W2-P1-09-06N1 | Normal1 |
| B067-07 | Broiler-W2-P1-F09-H07-Normal1 | 6707 | B-W2-P1-09-07N1 | Normal1 |
| B067-08 | Broiler-W2-P1-F09-H08-Normal1 | 6708 | B-W2-P1-09-08N1 | Normal1 |
| B067-09 | Broiler-W2-P1-F09-H09-Normal1 | 6709 | B-W2-P1-09-09N1 | Normal1 |
| B067-10 | Broiler-W2-P1-F09-H10-Normal1 | 6710 | B-W2-P1-09-10N1 | Normal1 |
| B067-11 | Broiler-W2-P1-F09-H11-Normal1 | 6711 | B-W2-P1-09-11N1 | Normal1 |
| B067-12 | Broiler-W2-P1-F09-H12-Normal1 | 6712 | B-W2-P1-09-12N1 | Normal1 |
| B067-13 | Broiler-W2-P1-F09-H13-Normal2 | 6713 | B-W2-P1-09-13N2 | Normal2 |
| B067-14 | Broiler-W2-P1-F09-H14-Normal2 | 6714 | B-W2-P1-09-14N2 | Normal2 |
| B067-15 | Broiler-W2-P1-F09-H15-Normal2 | 6715 | B-W2-P1-09-15N2 | Normal2 |
| B067-16 | Broiler-W2-P1-F09-H16-Normal2 | 6716 | B-W2-P1-09-16N2 | Normal2 |
| B068-01 | Broiler-W2-P1-F11-H01-Normal1 | 6801 | B-W2-P1-11-01N1 | Normal1 |
| B068-02 | Broiler-W2-P1-F11-H02-Normal1 | 6802 | B-W2-P1-11-02N1 | Normal1 |
| B068-03 | Broiler-W2-P1-F11-H03-Normal1 | 6803 | B-W2-P1-11-03N1 | Normal1 |
| B068-04 | Broiler-W2-P1-F11-H04-Normal1 | 6804 | B-W2-P1-11-04N1 | Normal1 |
| B068-05 | Broiler-W2-P1-F11-H05-Normal1 | 6805 | B-W2-P1-11-05N1 | Normal1 |
| B068-06 | Broiler-W2-P1-F11-H06-Normal1 | 6806 | B-W2-P1-11-06N1 | Normal1 |
| B068-07 | Broiler-W2-P1-F11-H07-Normal1 | 6807 | B-W2-P1-11-07N1 | Normal1 |
| B068-08 | Broiler-W2-P1-F11-H08-Normal1 | 6808 | B-W2-P1-11-08N1 | Normal1 |
| B068-09 | Broiler-W2-P1-F11-H09-Normal1 | 6809 | B-W2-P1-11-09N1 | Normal1 |
| B068-10 | Broiler-W2-P1-F11-H10-Normal1 | 6810 | B-W2-P1-11-10N1 | Normal1 |
| B068-11 | Broiler-W2-P1-F11-H11-Normal1 | 6811 | B-W2-P1-11-11N1 | Normal1 |
| B068-12 | Broiler-W2-P1-F11-H12-Normal1 | 6812 | B-W2-P1-11-12N1 | Normal1 |
| B068-13 | Broiler-W2-P1-F11-H13-Normal2 | 6813 | B-W2-P1-11-13N2 | Normal2 |
| B068-14 | Broiler-W2-P1-F11-H14-Normal2 | 6814 | B-W2-P1-11-14N2 | Normal2 |
| B069-01 | Broiler-W2-P1-F12-H01-Normal1 | 6901 | B-W2-P1-12-01N1 | Normal1 |
| B069-02 | Broiler-W2-P1-F12-H02-Normal1 | 6902 | B-W2-P1-12-02N1 | Normal1 |
| B069-03 | Broiler-W2-P1-F12-H03-Normal1 | 6903 | B-W2-P1-12-03N1 | Normal1 |
| B069-04 | Broiler-W2-P1-F12-H04-Normal1 | 6904 | B-W2-P1-12-04N1 | Normal1 |
| B069-05 | Broiler-W2-P1-F12-H05-Normal1 | 6905 | B-W2-P1-12-05N1 | Normal1 |
| B069-06 | Broiler-W2-P1-F12-H06-Normal1 | 6906 | B-W2-P1-12-06N1 | Normal1 |
| B069-07 | Broiler-W2-P1-F12-H07-Normal1 | 6907 | B-W2-P1-12-07N1 | Normal1 |
| B069-08 | Broiler-W2-P1-F12-H08-Normal1 | 6908 | B-W2-P1-12-08N1 | Normal1 |
| B069-09 | Broiler-W2-P1-F12-H09-Normal1 | 6909 | B-W2-P1-12-09N1 | Normal1 |
| B069-10 | Broiler-W2-P1-F12-H10-Normal1 | 6910 | B-W2-P1-12-10N1 | Normal1 |
| B069-11 | Broiler-W2-P1-F12-H11-Normal1 | 6911 | B-W2-P1-12-11N1 | Normal1 |
| B069-12 | Broiler-W2-P1-F12-H12-Normal1 | 6912 | B-W2-P1-12-12N1 | Normal1 |
| B069-13 | Broiler-W2-P1-F12-H13-Normal2 | 6913 | B-W2-P1-12-13N2 | Normal2 |
| B069-14 | Broiler-W2-P1-F12-H14-Normal2 | 6914 | B-W2-P1-12-14N2 | Normal2 |
| B070-01 | Broiler-W2-P3-F13-H01-Normal1 | 7001 | B-W2-P3-13-01N1 | Normal1 |
| B070-02 | Broiler-W2-P3-F13-H02-Normal1 | 7002 | B-W2-P3-13-02N1 | Normal1 |
| B070-03 | Broiler-W2-P3-F13-H03-Normal1 | 7003 | B-W2-P3-13-03N1 | Normal1 |
| B070-04 | Broiler-W2-P3-F13-H04-Normal1 | 7004 | B-W2-P3-13-04N1 | Normal1 |
| B070-05 | Broiler-W2-P3-F13-H05-Normal1 | 7005 | B-W2-P3-13-05N1 | Normal1 |
| B070-06 | Broiler-W2-P3-F13-H06-Normal1 | 7006 | B-W2-P3-13-06N1 | Normal1 |
| B070-07 | Broiler-W2-P3-F13-H07-Normal1 | 7007 | B-W2-P3-13-07N1 | Normal1 |
| B070-08 | Broiler-W2-P3-F13-H08-Normal1 | 7008 | B-W2-P3-13-08N1 | Normal1 |
| B070-09 | Broiler-W2-P3-F13-H09-Normal1 | 7009 | B-W2-P3-13-09N1 | Normal1 |
| B070-10 | Broiler-W2-P3-F13-H10-Normal1 | 7010 | B-W2-P3-13-10N1 | Normal1 |
| B070-11 | Broiler-W2-P3-F13-H11-Normal1 | 7011 | B-W2-P3-13-11N1 | Normal1 |
| B070-12 | Broiler-W2-P3-F13-H12-Normal1 | 7012 | B-W2-P3-13-12N1 | Normal1 |
| B071-01 | Broiler-W2-P3-F14-H01-Normal1 | 7101 | B-W2-P3-14-01N1 | Normal1 |
| B071-02 | Broiler-W2-P3-F14-H02-Normal1 | 7102 | B-W2-P3-14-02N1 | Normal1 |
| B071-03 | Broiler-W2-P3-F14-H03-Normal1 | 7103 | B-W2-P3-14-03N1 | Normal1 |
| B071-04 | Broiler-W2-P3-F14-H04-Normal1 | 7104 | B-W2-P3-14-04N1 | Normal1 |
| B071-05 | Broiler-W2-P3-F14-H05-Normal1 | 7105 | B-W2-P3-14-05N1 | Normal1 |
| B071-06 | Broiler-W2-P3-F14-H06-Normal1 | 7106 | B-W2-P3-14-06N1 | Normal1 |
| B071-07 | Broiler-W2-P3-F14-H07-Normal1 | 7107 | B-W2-P3-14-07N1 | Normal1 |
| B071-08 | Broiler-W2-P3-F14-H08-Normal1 | 7108 | B-W2-P3-14-08N1 | Normal1 |
| B071-09 | Broiler-W2-P3-F14-H09-Normal1 | 7109 | B-W2-P3-14-09N1 | Normal1 |
| B071-10 | Broiler-W2-P3-F14-H10-Normal1 | 7110 | B-W2-P3-14-10N1 | Normal1 |
| B071-11 | Broiler-W2-P3-F14-H11-Normal1 | 7111 | B-W2-P3-14-11N1 | Normal1 |
| B071-12 | Broiler-W2-P3-F14-H12-Normal1 | 7112 | B-W2-P3-14-12N1 | Normal1 |
| B072-01 | Broiler-W2-P3-F22-H01-Normal1 | 7201 | B-W2-P3-22-01N1 | Normal1 |
| B072-02 | Broiler-W2-P3-F22-H02-Normal1 | 7202 | B-W2-P3-22-02N1 | Normal1 |
| B072-03 | Broiler-W2-P3-F22-H03-Normal1 | 7203 | B-W2-P3-22-03N1 | Normal1 |
| B072-04 | Broiler-W2-P3-F22-H04-Normal1 | 7204 | B-W2-P3-22-04N1 | Normal1 |
| B072-05 | Broiler-W2-P3-F22-H05-Normal1 | 7205 | B-W2-P3-22-05N1 | Normal1 |
| B072-06 | Broiler-W2-P3-F22-H06-Normal1 | 7206 | B-W2-P3-22-06N1 | Normal1 |
| B072-07 | Broiler-W2-P3-F22-H07-Normal1 | 7207 | B-W2-P3-22-07N1 | Normal1 |
| B072-08 | Broiler-W2-P3-F22-H08-Normal1 | 7208 | B-W2-P3-22-08N1 | Normal1 |
| B072-09 | Broiler-W2-P3-F22-H09-Normal1 | 7209 | B-W2-P3-22-09N1 | Normal1 |
| B072-10 | Broiler-W2-P3-F22-H10-Normal1 | 7210 | B-W2-P3-22-10N1 | Normal1 |
| B072-11 | Broiler-W2-P3-F22-H11-Normal1 | 7211 | B-W2-P3-22-11N1 | Normal1 |
| B072-12 | Broiler-W2-P3-F22-H12-Normal1 | 7212 | B-W2-P3-22-12N1 | Normal1 |
| B073-01 | Broiler-W2-P3-F24-H01-Normal1 | 7301 | B-W2-P3-24-01N1 | Normal1 |
| B073-02 | Broiler-W2-P3-F24-H02-Normal1 | 7302 | B-W2-P3-24-02N1 | Normal1 |
| B073-03 | Broiler-W2-P3-F24-H03-Normal1 | 7303 | B-W2-P3-24-03N1 | Normal1 |
| B073-04 | Broiler-W2-P3-F24-H04-Normal1 | 7304 | B-W2-P3-24-04N1 | Normal1 |
| B073-05 | Broiler-W2-P3-F24-H05-Normal1 | 7305 | B-W2-P3-24-05N1 | Normal1 |
| B073-06 | Broiler-W2-P3-F24-H06-Normal1 | 7306 | B-W2-P3-24-06N1 | Normal1 |
| B073-07 | Broiler-W2-P3-F24-H07-Normal1 | 7307 | B-W2-P3-24-07N1 | Normal1 |
| B073-08 | Broiler-W2-P3-F24-H08-Normal1 | 7308 | B-W2-P3-24-08N1 | Normal1 |
| B073-09 | Broiler-W2-P3-F24-H09-Normal1 | 7309 | B-W2-P3-24-09N1 | Normal1 |
| B073-10 | Broiler-W2-P3-F24-H10-Normal1 | 7310 | B-W2-P3-24-10N1 | Normal1 |
| B073-11 | Broiler-W2-P3-F24-H11-Normal1 | 7311 | B-W2-P3-24-11N1 | Normal1 |
| B073-12 | Broiler-W2-P3-F24-H12-Normal1 | 7312 | B-W2-P3-24-12N1 | Normal1 |
| B074-01 | Broiler-W2-P3-F26-H01-Normal1 | 7401 | B-W2-P3-26-01N1 | Normal1 |
| B074-02 | Broiler-W2-P3-F26-H02-Normal1 | 7402 | B-W2-P3-26-02N1 | Normal1 |
| B074-03 | Broiler-W2-P3-F26-H03-Normal1 | 7403 | B-W2-P3-26-03N1 | Normal1 |
| B074-04 | Broiler-W2-P3-F26-H04-Normal1 | 7404 | B-W2-P3-26-04N1 | Normal1 |
| B074-05 | Broiler-W2-P3-F26-H05-Normal1 | 7405 | B-W2-P3-26-05N1 | Normal1 |
| B074-06 | Broiler-W2-P3-F26-H06-Normal1 | 7406 | B-W2-P3-26-06N1 | Normal1 |
| B074-07 | Broiler-W2-P3-F26-H07-Normal1 | 7407 | B-W2-P3-26-07N1 | Normal1 |
| B074-08 | Broiler-W2-P3-F26-H08-Normal1 | 7408 | B-W2-P3-26-08N1 | Normal1 |
| B074-09 | Broiler-W2-P3-F26-H09-Normal1 | 7409 | B-W2-P3-26-09N1 | Normal1 |
| B074-10 | Broiler-W2-P3-F26-H10-Normal1 | 7410 | B-W2-P3-26-10N1 | Normal1 |
| B074-11 | Broiler-W2-P3-F26-H11-Normal1 | 7411 | B-W2-P3-26-11N1 | Normal1 |
| B074-12 | Broiler-W2-P3-F26-H12-Normal1 | 7412 | B-W2-P3-26-12N1 | Normal1 |
| B075-01 | Broiler-W2-P3-F25-H01-Normal1 | 7501 | B-W2-P3-25-01N1 | Normal1 |
| B075-02 | Broiler-W2-P3-F25-H02-Normal1 | 7502 | B-W2-P3-25-02N1 | Normal1 |
| B075-03 | Broiler-W2-P3-F25-H03-Normal1 | 7503 | B-W2-P3-25-03N1 | Normal1 |
| B075-04 | Broiler-W2-P3-F25-H04-Normal1 | 7504 | B-W2-P3-25-04N1 | Normal1 |
| B075-05 | Broiler-W2-P3-F25-H05-Normal1 | 7505 | B-W2-P3-25-05N1 | Normal1 |
| B075-06 | Broiler-W2-P3-F25-H06-Normal1 | 7506 | B-W2-P3-25-06N1 | Normal1 |
| B075-07 | Broiler-W2-P3-F25-H07-Normal1 | 7507 | B-W2-P3-25-07N1 | Normal1 |
| B075-08 | Broiler-W2-P3-F25-H08-Normal1 | 7508 | B-W2-P3-25-08N1 | Normal1 |
| B075-09 | Broiler-W2-P3-F25-H09-Normal1 | 7509 | B-W2-P3-25-09N1 | Normal1 |
| B075-10 | Broiler-W2-P3-F25-H10-Normal1 | 7510 | B-W2-P3-25-10N1 | Normal1 |
| B075-11 | Broiler-W2-P3-F25-H11-Normal1 | 7511 | B-W2-P3-25-11N1 | Normal1 |
| B075-12 | Broiler-W2-P3-F25-H12-Normal1 | 7512 | B-W2-P3-25-12N1 | Normal1 |
| B076-01 | Broiler-W2-P3-F23-H01-Normal1 | 7601 | B-W2-P3-23-01N1 | Normal1 |
| B076-02 | Broiler-W2-P3-F23-H02-Normal1 | 7602 | B-W2-P3-23-02N1 | Normal1 |
| B076-03 | Broiler-W2-P3-F23-H03-Normal1 | 7603 | B-W2-P3-23-03N1 | Normal1 |
| B076-04 | Broiler-W2-P3-F23-H04-Normal1 | 7604 | B-W2-P3-23-04N1 | Normal1 |
| B076-05 | Broiler-W2-P3-F23-H05-Normal1 | 7605 | B-W2-P3-23-05N1 | Normal1 |
| B076-06 | Broiler-W2-P3-F23-H06-Normal1 | 7606 | B-W2-P3-23-06N1 | Normal1 |
| B076-07 | Broiler-W2-P3-F23-H07-Normal1 | 7607 | B-W2-P3-23-07N1 | Normal1 |
| B076-08 | Broiler-W2-P3-F23-H08-Normal1 | 7608 | B-W2-P3-23-08N1 | Normal1 |
| B076-09 | Broiler-W2-P3-F23-H09-Normal1 | 7609 | B-W2-P3-23-09N1 | Normal1 |
| B076-10 | Broiler-W2-P3-F23-H10-Normal1 | 7610 | B-W2-P3-23-10N1 | Normal1 |
| B076-11 | Broiler-W2-P3-F23-H11-Normal1 | 7611 | B-W2-P3-23-11N1 | Normal1 |
| B076-12 | Broiler-W2-P3-F23-H12-Normal1 | 7612 | B-W2-P3-23-12N1 | Normal1 |
| B077-01 | Broiler-W2-P3-F21-H01-Normal1 | 7701 | B-W2-P3-21-01N1 | Normal1 |
| B077-02 | Broiler-W2-P3-F21-H02-Normal1 | 7702 | B-W2-P3-21-02N1 | Normal1 |
| B077-03 | Broiler-W2-P3-F21-H03-Normal1 | 7703 | B-W2-P3-21-03N1 | Normal1 |
| B077-04 | Broiler-W2-P3-F21-H04-Normal1 | 7704 | B-W2-P3-21-04N1 | Normal1 |
| B077-05 | Broiler-W2-P3-F21-H05-Normal1 | 7705 | B-W2-P3-21-05N1 | Normal1 |
| B077-06 | Broiler-W2-P3-F21-H06-Normal1 | 7706 | B-W2-P3-21-06N1 | Normal1 |
| B077-07 | Broiler-W2-P3-F21-H07-Normal1 | 7707 | B-W2-P3-21-07N1 | Normal1 |
| B077-08 | Broiler-W2-P3-F21-H08-Normal1 | 7708 | B-W2-P3-21-08N1 | Normal1 |
| B077-09 | Broiler-W2-P3-F21-H09-Normal1 | 7709 | B-W2-P3-21-09N1 | Normal1 |
| B077-10 | Broiler-W2-P3-F21-H10-Normal1 | 7710 | B-W2-P3-21-10N1 | Normal1 |
| B077-11 | Broiler-W2-P3-F21-H11-Normal1 | 7711 | B-W2-P3-21-11N1 | Normal1 |
| B077-12 | Broiler-W2-P3-F21-H12-Normal1 | 7712 | B-W2-P3-21-12N1 | Normal1 |
| B078-01 | Broiler-W2-P2-F16-H01-Normal1 | 7801 | B-W2-P2-16-01N1 | Normal1 |
| B078-02 | Broiler-W2-P2-F16-H02-Normal1 | 7802 | B-W2-P2-16-02N1 | Normal1 |
| B078-03 | Broiler-W2-P2-F16-H03-Normal1 | 7803 | B-W2-P2-16-03N1 | Normal1 |
| B078-04 | Broiler-W2-P2-F16-H04-Normal1 | 7804 | B-W2-P2-16-04N1 | Normal1 |
| B078-05 | Broiler-W2-P2-F16-H05-Normal1 | 7805 | B-W2-P2-16-05N1 | Normal1 |
| B078-06 | Broiler-W2-P2-F16-H06-Normal1 | 7806 | B-W2-P2-16-06N1 | Normal1 |
| B078-07 | Broiler-W2-P2-F16-H07-Normal1 | 7807 | B-W2-P2-16-07N1 | Normal1 |
| B078-08 | Broiler-W2-P2-F16-H08-Normal1 | 7808 | B-W2-P2-16-08N1 | Normal1 |
| B078-09 | Broiler-W2-P2-F16-H09-Normal1 | 7809 | B-W2-P2-16-09N1 | Normal1 |
| B078-10 | Broiler-W2-P2-F16-H10-Normal1 | 7810 | B-W2-P2-16-10N1 | Normal1 |
| B078-11 | Broiler-W2-P2-F16-H11-Normal1 | 7811 | B-W2-P2-16-11N1 | Normal1 |
| B078-12 | Broiler-W2-P2-F16-H12-Normal1 | 7812 | B-W2-P2-16-12N1 | Normal1 |
| B078-13 | Broiler-W2-P2-F16-H13-Normal2 | 7813 | B-W2-P2-16-13N2 | Normal2 |
| B078-14 | Broiler-W2-P2-F16-H14-Normal2 | 7814 | B-W2-P2-16-14N2 | Normal2 |
| B079-01 | Broiler-W2-P2-F15-H01-Normal1 | 7901 | B-W2-P2-15-01N1 | Normal1 |
| B079-02 | Broiler-W2-P2-F15-H02-Normal1 | 7902 | B-W2-P2-15-02N1 | Normal1 |
| B079-03 | Broiler-W2-P2-F15-H03-Normal1 | 7903 | B-W2-P2-15-03N1 | Normal1 |
| B079-04 | Broiler-W2-P2-F15-H04-Normal1 | 7904 | B-W2-P2-15-04N1 | Normal1 |
| B079-05 | Broiler-W2-P2-F15-H05-Normal1 | 7905 | B-W2-P2-15-05N1 | Normal1 |
| B079-06 | Broiler-W2-P2-F15-H06-Normal1 | 7906 | B-W2-P2-15-06N1 | Normal1 |
| B079-07 | Broiler-W2-P2-F15-H07-Normal1 | 7907 | B-W2-P2-15-07N1 | Normal1 |
| B079-08 | Broiler-W2-P2-F15-H08-Normal1 | 7908 | B-W2-P2-15-08N1 | Normal1 |
| B079-09 | Broiler-W2-P2-F15-H09-Normal1 | 7909 | B-W2-P2-15-09N1 | Normal1 |
| B079-10 | Broiler-W2-P2-F15-H10-Normal1 | 7910 | B-W2-P2-15-10N1 | Normal1 |
| B079-11 | Broiler-W2-P2-F15-H11-Normal1 | 7911 | B-W2-P2-15-11N1 | Normal1 |
| B079-12 | Broiler-W2-P2-F15-H12-Normal1 | 7912 | B-W2-P2-15-12N1 | Normal1 |
| B079-13 | Broiler-W2-P2-F15-H13-Normal2 | 7913 | B-W2-P2-15-13N2 | Normal2 |
| B079-14 | Broiler-W2-P2-F15-H14-Normal2 | 7914 | B-W2-P2-15-14N2 | Normal2 |
| B080-01 | Broiler-W2-P2-F17-H01-Normal1 | 8001 | B-W2-P2-17-01N1 | Normal1 |
| B080-02 | Broiler-W2-P2-F17-H02-Normal1 | 8002 | B-W2-P2-17-02N1 | Normal1 |
| B080-03 | Broiler-W2-P2-F17-H03-Normal1 | 8003 | B-W2-P2-17-03N1 | Normal1 |
| B080-04 | Broiler-W2-P2-F17-H04-Normal1 | 8004 | B-W2-P2-17-04N1 | Normal1 |
| B080-05 | Broiler-W2-P2-F17-H05-Normal1 | 8005 | B-W2-P2-17-05N1 | Normal1 |
| B080-06 | Broiler-W2-P2-F17-H06-Normal1 | 8006 | B-W2-P2-17-06N1 | Normal1 |
| B080-07 | Broiler-W2-P2-F17-H07-Normal1 | 8007 | B-W2-P2-17-07N1 | Normal1 |
| B080-08 | Broiler-W2-P2-F17-H08-Normal1 | 8008 | B-W2-P2-17-08N1 | Normal1 |
| B080-09 | Broiler-W2-P2-F17-H09-Normal1 | 8009 | B-W2-P2-17-09N1 | Normal1 |
| B080-10 | Broiler-W2-P2-F17-H10-Normal1 | 8010 | B-W2-P2-17-10N1 | Normal1 |
| B080-11 | Broiler-W2-P2-F17-H11-Normal1 | 8011 | B-W2-P2-17-11N1 | Normal1 |
| B080-12 | Broiler-W2-P2-F17-H12-Normal1 | 8012 | B-W2-P2-17-12N1 | Normal1 |
| B080-13 | Broiler-W2-P2-F17-H13-Normal2 | 8013 | B-W2-P2-17-13N2 | Normal2 |
| B080-14 | Broiler-W2-P2-F17-H14-Normal2 | 8014 | B-W2-P2-17-14N2 | Normal2 |
| B080-15 | Broiler-W2-P2-F17-H15-Normal2 | 8015 | B-W2-P2-17-15N2 | Normal2 |
| B080-16 | Broiler-W2-P2-F17-H16-Normal2 | 8016 | B-W2-P2-17-16N2 | Normal2 |
| B081-01 | Broiler-W2-P2-F18-H01-Normal1 | 8101 | B-W2-P2-18-01N1 | Normal1 |
| B081-02 | Broiler-W2-P2-F18-H02-Normal1 | 8102 | B-W2-P2-18-02N1 | Normal1 |
| B081-03 | Broiler-W2-P2-F18-H03-Normal1 | 8103 | B-W2-P2-18-03N1 | Normal1 |
| B081-04 | Broiler-W2-P2-F18-H04-Normal1 | 8104 | B-W2-P2-18-04N1 | Normal1 |
| B081-05 | Broiler-W2-P2-F18-H05-Normal1 | 8105 | B-W2-P2-18-05N1 | Normal1 |
| B081-06 | Broiler-W2-P2-F18-H06-Normal1 | 8106 | B-W2-P2-18-06N1 | Normal1 |
| B081-07 | Broiler-W2-P2-F18-H07-Normal1 | 8107 | B-W2-P2-18-07N1 | Normal1 |
| B081-08 | Broiler-W2-P2-F18-H08-Normal1 | 8108 | B-W2-P2-18-08N1 | Normal1 |
| B081-09 | Broiler-W2-P2-F18-H09-Normal1 | 8109 | B-W2-P2-18-09N1 | Normal1 |
| B081-10 | Broiler-W2-P2-F18-H10-Normal1 | 8110 | B-W2-P2-18-10N1 | Normal1 |
| B081-11 | Broiler-W2-P2-F18-H11-Normal1 | 8111 | B-W2-P2-18-11N1 | Normal1 |
| B081-12 | Broiler-W2-P2-F18-H12-Normal1 | 8112 | B-W2-P2-18-12N1 | Normal1 |
| B082-01 | Broiler-W2-P2-F20-H01-Normal1 | 8201 | B-W2-P2-20-01N1 | Normal1 |
| B082-02 | Broiler-W2-P2-F20-H02-Normal1 | 8202 | B-W2-P2-20-02N1 | Normal1 |
| B082-03 | Broiler-W2-P2-F20-H03-Normal1 | 8203 | B-W2-P2-20-03N1 | Normal1 |
| B082-04 | Broiler-W2-P2-F20-H04-Normal1 | 8204 | B-W2-P2-20-04N1 | Normal1 |
| B082-05 | Broiler-W2-P2-F20-H05-Normal1 | 8205 | B-W2-P2-20-05N1 | Normal1 |
| B082-06 | Broiler-W2-P2-F20-H06-Normal1 | 8206 | B-W2-P2-20-06N1 | Normal1 |
| B082-07 | Broiler-W2-P2-F20-H07-Normal1 | 8207 | B-W2-P2-20-07N1 | Normal1 |
| B082-08 | Broiler-W2-P2-F20-H08-Normal1 | 8208 | B-W2-P2-20-08N1 | Normal1 |
| B082-09 | Broiler-W2-P2-F20-H09-Normal1 | 8209 | B-W2-P2-20-09N1 | Normal1 |
| B082-10 | Broiler-W2-P2-F20-H10-Normal1 | 8210 | B-W2-P2-20-10N1 | Normal1 |
| B082-11 | Broiler-W2-P2-F20-H11-Normal1 | 8211 | B-W2-P2-20-11N1 | Normal1 |
| B082-12 | Broiler-W2-P2-F20-H12-Normal1 | 8212 | B-W2-P2-20-12N1 | Normal1 |
| B082-13 | Broiler-W2-P2-F20-H13-Normal2 | 8213 | B-W2-P2-20-13N2 | Normal2 |
| B082-14 | Broiler-W2-P2-F20-H14-Normal2 | 8214 | B-W2-P2-20-14N2 | Normal2 |
| B083-01 | Broiler-W2-P2-F19-H01-Normal1 | 8301 | B-W2-P2-19-01N1 | Normal1 |
| B083-02 | Broiler-W2-P2-F19-H02-Normal1 | 8302 | B-W2-P2-19-02N1 | Normal1 |
| B083-03 | Broiler-W2-P2-F19-H03-Normal1 | 8303 | B-W2-P2-19-03N1 | Normal1 |
| B083-04 | Broiler-W2-P2-F19-H04-Normal1 | 8304 | B-W2-P2-19-04N1 | Normal1 |
| B083-05 | Broiler-W2-P2-F19-H05-Normal1 | 8305 | B-W2-P2-19-05N1 | Normal1 |
| B083-06 | Broiler-W2-P2-F19-H06-Normal1 | 8306 | B-W2-P2-19-06N1 | Normal1 |
| B083-07 | Broiler-W2-P2-F19-H07-Normal1 | 8307 | B-W2-P2-19-07N1 | Normal1 |
| B083-08 | Broiler-W2-P2-F19-H08-Normal1 | 8308 | B-W2-P2-19-08N1 | Normal1 |
| B083-09 | Broiler-W2-P2-F19-H09-Normal1 | 8309 | B-W2-P2-19-09N1 | Normal1 |
| B083-10 | Broiler-W2-P2-F19-H10-Normal1 | 8310 | B-W2-P2-19-10N1 | Normal1 |
| B083-11 | Broiler-W2-P2-F19-H11-Normal1 | 8311 | B-W2-P2-19-11N1 | Normal1 |
| B083-12 | Broiler-W2-P2-F19-H12-Normal1 | 8312 | B-W2-P2-19-12N1 | Normal1 |
| B083-13 | Broiler-W2-P2-F19-H13-Normal2 | 8313 | B-W2-P2-19-13N2 | Normal2 |
| B083-14 | Broiler-W2-P2-F19-H14-Normal2 | 8314 | B-W2-P2-19-14N2 | Normal2 |
| B084-01 | Broiler-Butn2-F03-H01-Normal1 | 8401 | B-Butn2-03-01N1 | Normal1 |
| B084-02 | Broiler-Butn2-F03-H02-Normal1 | 8402 | B-Butn2-03-02N1 | Normal1 |
| B084-03 | Broiler-Butn2-F03-H03-Normal1 | 8403 | B-Butn2-03-03N1 | Normal1 |
| B084-04 | Broiler-Butn2-F03-H04-Normal1 | 8404 | B-Butn2-03-04N1 | Normal1 |
| B084-05 | Broiler-Butn2-F03-H05-Normal1 | 8405 | B-Butn2-03-05N1 | Normal1 |
| B084-06 | Broiler-Butn2-F03-H06-Normal1 | 8406 | B-Butn2-03-06N1 | Normal1 |
| B084-07 | Broiler-Butn2-F03-H07-Normal1 | 8407 | B-Butn2-03-07N1 | Normal1 |
| B084-08 | Broiler-Butn2-F03-H08-Normal1 | 8408 | B-Butn2-03-08N1 | Normal1 |
| B084-09 | Broiler-Butn2-F03-H09-Normal1 | 8409 | B-Butn2-03-09N1 | Normal1 |
| B084-10 | Broiler-Butn2-F03-H10-Normal1 | 8410 | B-Butn2-03-10N1 | Normal1 |
| B084-11 | Broiler-Butn2-F03-H11-Normal2 | 8411 | B-Butn2-03-11N2 | Normal2 |
| B084-12 | Broiler-Butn2-F03-H12-Normal2 | 8412 | B-Butn2-03-12N2 | Normal2 |
| B085-01 | Broiler-Butn2-F04-H01-Normal1 | 8501 | B-Butn2-04-01N1 | Normal1 |
| B085-02 | Broiler-Butn2-F04-H02-Normal1 | 8502 | B-Butn2-04-02N1 | Normal1 |
| B085-03 | Broiler-Butn2-F04-H03-Normal1 | 8503 | B-Butn2-04-03N1 | Normal1 |
| B085-04 | Broiler-Butn2-F04-H04-Normal1 | 8504 | B-Butn2-04-04N1 | Normal1 |
| B085-05 | Broiler-Butn2-F04-H05-Normal1 | 8505 | B-Butn2-04-05N1 | Normal1 |
| B085-06 | Broiler-Butn2-F04-H06-Normal1 | 8506 | B-Butn2-04-06N1 | Normal1 |
| B085-07 | Broiler-Butn2-F04-H07-Normal1 | 8507 | B-Butn2-04-07N1 | Normal1 |
| B085-08 | Broiler-Butn2-F04-H08-Normal1 | 8508 | B-Butn2-04-08N1 | Normal1 |
| B085-09 | Broiler-Butn2-F04-H09-Normal1 | 8509 | B-Butn2-04-09N1 | Normal1 |
| B085-10 | Broiler-Butn2-F04-H10-Normal1 | 8510 | B-Butn2-04-10N1 | Normal1 |
| B085-11 | Broiler-Butn2-F04-H11-Normal2 | 8511 | B-Butn2-04-11N2 | Normal2 |
| B085-12 | Broiler-Butn2-F04-H12-Normal2 | 8512 | B-Butn2-04-12N2 | Normal2 |
| B086-01 | Broiler-Butn2-F02-H01-Normal1 | 8601 | B-Butn2-02-01N1 | Normal1 |
| B086-02 | Broiler-Butn2-F02-H02-Normal1 | 8602 | B-Butn2-02-02N1 | Normal1 |
| B086-03 | Broiler-Butn2-F02-H03-Normal1 | 8603 | B-Butn2-02-03N1 | Normal1 |
| B086-04 | Broiler-Butn2-F02-H04-Normal1 | 8604 | B-Butn2-02-04N1 | Normal1 |
| B086-05 | Broiler-Butn2-F02-H05-Normal1 | 8605 | B-Butn2-02-05N1 | Normal1 |
| B086-06 | Broiler-Butn2-F02-H06-Normal1 | 8606 | B-Butn2-02-06N1 | Normal1 |
| B086-07 | Broiler-Butn2-F02-H07-Normal1 | 8607 | B-Butn2-02-07N1 | Normal1 |
| B086-08 | Broiler-Butn2-F02-H08-Normal1 | 8608 | B-Butn2-02-08N1 | Normal1 |
| B086-09 | Broiler-Butn2-F02-H09-Normal1 | 8609 | B-Butn2-02-09N1 | Normal1 |
| B086-10 | Broiler-Butn2-F02-H10-Normal1 | 8610 | B-Butn2-02-10N1 | Normal1 |
| B086-11 | Broiler-Butn2-F02-H11-Normal2 | 8611 | B-Butn2-02-11N2 | Normal2 |
| B086-12 | Broiler-Butn2-F02-H12-Normal2 | 8612 | B-Butn2-02-12N2 | Normal2 |
| B087-01 | Broiler-Butn2-F01-H01-Normal1 | 8701 | B-Butn2-01-01N1 | Normal1 |
| B087-02 | Broiler-Butn2-F01-H02-Normal1 | 8702 | B-Butn2-01-02N1 | Normal1 |
| B087-03 | Broiler-Butn2-F01-H03-Normal1 | 8703 | B-Butn2-01-03N1 | Normal1 |
| B087-04 | Broiler-Butn2-F01-H04-Normal1 | 8704 | B-Butn2-01-04N1 | Normal1 |
| B087-05 | Broiler-Butn2-F01-H05-Normal1 | 8705 | B-Butn2-01-05N1 | Normal1 |
| B087-06 | Broiler-Butn2-F01-H06-Normal1 | 8706 | B-Butn2-01-06N1 | Normal1 |
| B087-07 | Broiler-Butn2-F01-H07-Normal1 | 8707 | B-Butn2-01-07N1 | Normal1 |
| B087-08 | Broiler-Butn2-F01-H08-Normal1 | 8708 | B-Butn2-01-08N1 | Normal1 |
| B087-09 | Broiler-Butn2-F01-H09-Normal1 | 8709 | B-Butn2-01-09N1 | Normal1 |
| B087-10 | Broiler-Butn2-F01-H10-Normal1 | 8710 | B-Butn2-01-10N1 | Normal1 |
| B088-01 | Broiler-Butn3-F04-H01-Normal1 | 8801 | B-Butn3-04-01N1 | Normal1 |
| B088-02 | Broiler-Butn3-F04-H02-Normal1 | 8802 | B-Butn3-04-02N1 | Normal1 |
| B088-03 | Broiler-Butn3-F04-H03-Normal1 | 8803 | B-Butn3-04-03N1 | Normal1 |
| B088-04 | Broiler-Butn3-F04-H04-Normal1 | 8804 | B-Butn3-04-04N1 | Normal1 |
| B088-05 | Broiler-Butn3-F04-H05-Normal1 | 8805 | B-Butn3-04-05N1 | Normal1 |
| B088-06 | Broiler-Butn3-F04-H06-Normal1 | 8806 | B-Butn3-04-06N1 | Normal1 |
| B088-07 | Broiler-Butn3-F04-H07-Normal1 | 8807 | B-Butn3-04-07N1 | Normal1 |
| B088-08 | Broiler-Butn3-F04-H08-Normal1 | 8808 | B-Butn3-04-08N1 | Normal1 |
| B088-09 | Broiler-Butn3-F04-H09-Normal1 | 8809 | B-Butn3-04-09N1 | Normal1 |
| B088-10 | Broiler-Butn3-F04-H10-Normal1 | 8810 | B-Butn3-04-10N1 | Normal1 |
| B089-01 | Broiler-Butn3-F01-H01-Normal1 | 8901 | B-Butn3-01-01N1 | Normal1 |
| B089-02 | Broiler-Butn3-F01-H02-Normal1 | 8902 | B-Butn3-01-02N1 | Normal1 |
| B089-03 | Broiler-Butn3-F01-H03-Normal1 | 8903 | B-Butn3-01-03N1 | Normal1 |
| B089-04 | Broiler-Butn3-F01-H04-Normal1 | 8904 | B-Butn3-01-04N1 | Normal1 |
| B089-05 | Broiler-Butn3-F01-H05-Normal1 | 8905 | B-Butn3-01-05N1 | Normal1 |
| B089-06 | Broiler-Butn3-F01-H06-Normal1 | 8906 | B-Butn3-01-06N1 | Normal1 |
| B089-07 | Broiler-Butn3-F01-H07-Normal1 | 8907 | B-Butn3-01-07N1 | Normal1 |
| B089-08 | Broiler-Butn3-F01-H08-Normal1 | 8908 | B-Butn3-01-08N1 | Normal1 |
| B089-09 | Broiler-Butn3-F01-H09-Normal1 | 8909 | B-Butn3-01-09N1 | Normal1 |
| B089-10 | Broiler-Butn3-F01-H10-Normal1 | 8910 | B-Butn3-01-10N1 | Normal1 |
| B089-11 | Broiler-Butn3-F01-H11-Normal2 | 8911 | B-Butn3-01-11N2 | Normal2 |
| B089-12 | Broiler-Butn3-F01-H12-Normal2 | 8912 | B-Butn3-01-12N2 | Normal2 |
| B090-01 | Broiler-Butn3-F03-H01-Normal1 | 9001 | B-Butn3-03-01N1 | Normal1 |
| B090-02 | Broiler-Butn3-F03-H02-Normal1 | 9002 | B-Butn3-03-02N1 | Normal1 |
| B090-03 | Broiler-Butn3-F03-H03-Normal1 | 9003 | B-Butn3-03-03N1 | Normal1 |
| B090-04 | Broiler-Butn3-F03-H04-Normal1 | 9004 | B-Butn3-03-04N1 | Normal1 |
| B090-05 | Broiler-Butn3-F03-H05-Normal1 | 9005 | B-Butn3-03-05N1 | Normal1 |
| B090-06 | Broiler-Butn3-F03-H06-Normal1 | 9006 | B-Butn3-03-06N1 | Normal1 |
| B090-07 | Broiler-Butn3-F03-H07-Normal1 | 9007 | B-Butn3-03-07N1 | Normal1 |
| B090-08 | Broiler-Butn3-F03-H08-Normal1 | 9008 | B-Butn3-03-08N1 | Normal1 |
| B090-09 | Broiler-Butn3-F03-H09-Normal1 | 9009 | B-Butn3-03-09N1 | Normal1 |
| B090-10 | Broiler-Butn3-F03-H10-Normal1 | 9010 | B-Butn3-03-10N1 | Normal1 |
| B090-11 | Broiler-Butn3-F03-H11-Normal2 | 9011 | B-Butn3-03-11N2 | Normal2 |
| B090-12 | Broiler-Butn3-F03-H12-Normal2 | 9012 | B-Butn3-03-12N2 | Normal2 |
| B091-01 | Broiler-Butn3-F02-H01-Normal1 | 9101 | B-Butn3-02-01N1 | Normal1 |
| B091-02 | Broiler-Butn3-F02-H02-Normal1 | 9102 | B-Butn3-02-02N1 | Normal1 |
| B091-03 | Broiler-Butn3-F02-H03-Normal1 | 9103 | B-Butn3-02-03N1 | Normal1 |
| B091-04 | Broiler-Butn3-F02-H04-Normal1 | 9104 | B-Butn3-02-04N1 | Normal1 |
| B091-05 | Broiler-Butn3-F02-H05-Normal1 | 9105 | B-Butn3-02-05N1 | Normal1 |
| B091-06 | Broiler-Butn3-F02-H06-Normal1 | 9106 | B-Butn3-02-06N1 | Normal1 |
| B091-07 | Broiler-Butn3-F02-H07-Normal1 | 9107 | B-Butn3-02-07N1 | Normal1 |
| B091-08 | Broiler-Butn3-F02-H08-Normal1 | 9108 | B-Butn3-02-08N1 | Normal1 |
| B091-09 | Broiler-Butn3-F02-H09-Normal1 | 9109 | B-Butn3-02-09N1 | Normal1 |
| B091-10 | Broiler-Butn3-F02-H10-Normal1 | 9110 | B-Butn3-02-10N1 | Normal1 |
| B091-11 | Broiler-Butn3-F02-H11-Normal2 | 9111 | B-Butn3-02-11N2 | Normal2 |
| B091-12 | Broiler-Butn3-F02-H12-Normal2 | 9112 | B-Butn3-02-12N2 | Normal2 |
| B092-01 | Broiler-Shmalia-F01-H01-Normal2 | 9201 | B-Shmali-01-01N2 | Normal2 |
| B092-02 | Broiler-Shmalia-F01-H02-Normal2 | 9202 | B-Shmali-01-02N2 | Normal2 |
| B092-03 | Broiler-Shmalia-F01-H03-Normal2 | 9203 | B-Shmali-01-03N2 | Normal2 |
| B092-04 | Broiler-Shmalia-F01-H04-Normal2 | 9204 | B-Shmali-01-04N2 | Normal2 |
| B092-05 | Broiler-Shmalia-F01-H05-Normal2 | 9205 | B-Shmali-01-05N2 | Normal2 |
| B092-06 | Broiler-Shmalia-F01-H06-Normal2 | 9206 | B-Shmali-01-06N2 | Normal2 |
| B092-07 | Broiler-Shmalia-F01-H07-Normal2 | 9207 | B-Shmali-01-07N2 | Normal2 |
| B092-08 | Broiler-Shmalia-F01-H08-Normal2 | 9208 | B-Shmali-01-08N2 | Normal2 |
| B092-09 | Broiler-Shmalia-F01-H09-Normal2 | 9209 | B-Shmali-01-09N2 | Normal2 |
| B092-10 | Broiler-Shmalia-F01-H10-Normal2 | 9210 | B-Shmali-01-10N2 | Normal2 |
| B092-11 | Broiler-Shmalia-F01-H11-Normal2 | 9211 | B-Shmali-01-11N2 | Normal2 |
| B092-12 | Broiler-Shmalia-F01-H12-Normal2 | 9212 | B-Shmali-01-12N2 | Normal2 |
| B093-01 | Broiler-Shmalia-F02-H01-Normal2 | 9301 | B-Shmali-02-01N2 | Normal2 |
| B093-02 | Broiler-Shmalia-F02-H02-Normal2 | 9302 | B-Shmali-02-02N2 | Normal2 |
| B093-03 | Broiler-Shmalia-F02-H03-Normal2 | 9303 | B-Shmali-02-03N2 | Normal2 |
| B093-04 | Broiler-Shmalia-F02-H04-Normal2 | 9304 | B-Shmali-02-04N2 | Normal2 |
| B093-05 | Broiler-Shmalia-F02-H05-Normal2 | 9305 | B-Shmali-02-05N2 | Normal2 |
| B093-06 | Broiler-Shmalia-F02-H06-Normal2 | 9306 | B-Shmali-02-06N2 | Normal2 |
| B093-07 | Broiler-Shmalia-F02-H07-Normal2 | 9307 | B-Shmali-02-07N2 | Normal2 |
| B093-08 | Broiler-Shmalia-F02-H08-Normal2 | 9308 | B-Shmali-02-08N2 | Normal2 |
| B093-09 | Broiler-Shmalia-F02-H09-Normal2 | 9309 | B-Shmali-02-09N2 | Normal2 |
| B093-10 | Broiler-Shmalia-F02-H10-Normal2 | 9310 | B-Shmali-02-10N2 | Normal2 |
| B093-11 | Broiler-Shmalia-F02-H11-Normal2 | 9311 | B-Shmali-02-11N2 | Normal2 |
| B093-12 | Broiler-Shmalia-F02-H12-Normal2 | 9312 | B-Shmali-02-12N2 | Normal2 |
| B094-01 | Broiler-Shmalia-F03-H01-Normal2 | 9401 | B-Shmali-03-01N2 | Normal2 |
| B094-02 | Broiler-Shmalia-F03-H02-Normal2 | 9402 | B-Shmali-03-02N2 | Normal2 |
| B094-03 | Broiler-Shmalia-F03-H03-Normal2 | 9403 | B-Shmali-03-03N2 | Normal2 |
| B094-04 | Broiler-Shmalia-F03-H04-Normal2 | 9404 | B-Shmali-03-04N2 | Normal2 |
| B094-05 | Broiler-Shmalia-F03-H05-Normal2 | 9405 | B-Shmali-03-05N2 | Normal2 |
| B094-06 | Broiler-Shmalia-F03-H06-Normal2 | 9406 | B-Shmali-03-06N2 | Normal2 |
| B094-07 | Broiler-Shmalia-F03-H07-Normal2 | 9407 | B-Shmali-03-07N2 | Normal2 |
| B094-08 | Broiler-Shmalia-F03-H08-Normal2 | 9408 | B-Shmali-03-08N2 | Normal2 |
| B094-09 | Broiler-Shmalia-F03-H09-Normal2 | 9409 | B-Shmali-03-09N2 | Normal2 |
| B094-10 | Broiler-Shmalia-F03-H10-Normal2 | 9410 | B-Shmali-03-10N2 | Normal2 |
| B094-11 | Broiler-Shmalia-F03-H11-Normal2 | 9411 | B-Shmali-03-11N2 | Normal2 |
| B094-12 | Broiler-Shmalia-F03-H12-Normal2 | 9412 | B-Shmali-03-12N2 | Normal2 |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 12 |
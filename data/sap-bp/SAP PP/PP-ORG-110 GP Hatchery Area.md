# PP-ORG-110 GP Hatchery Area

| pp-org-110: GP Hatchery area |
| --- |

## Definition 

Livestock management organizational unit, that we define the structure of hatcheries, hatchers, setters, transfer area

**Hatchery:**

- SAP organization to model a Hatchery: 

- Storage location

- Purchasing group

- SAP master data to model a Hatchery (hatchers, setters):

- WBS element

- Work center

- Routing

- Production version

- Quota arrangement for the assigned hatchery capacity to each breed.

- Naming convention:

- Hatchery code as WBS & storage location: GH & two digit for hatchery code (Ex. GH01)

- Hatchery (hatchers, setters,) code as work center & production version: one digit for element type S for setter, H for hatcher 

- Hatchery Code as purchasing Group: one digit for livestock area K for hatchery & two digit for SAP hatchery code (Ex. K01).

**Setter/Hatcher:**

- SAP organization to model a setter/hatcher: 

- Storage location

- SAP master data to model a setter/hatcher:

- WBS element

- Consider the setter/hatcher capacity in the hatchery assigned quota to each breed.

- Naming convention :

- Setter/Hatcher code as WBS: 4 digit for hatchery code then  “-“ then one digit for element type S setter or H hatcher then two digit for setter/hatcher code (Ex. GS01-S01, GH01-H01)

| **Plant** | **Plant Desc****ription** |
| --- | --- |
| 3100 | GP-Hatchery |

| Hatchery Code (WBS- S.Loc) | Purchase Grp | Hatchery Description | No. Of Setters | No. Hatchers | Setters  Work Center, Prod.Ver | Setters Description | Hatchers  Work Center, Prod.Ver | Setter Stage Type | Hatchers - Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GH01 | K01 | GP Hatchery 1 | 32 | 12 | GS01 | GP Hatchery1-Setters | GH01 | Multi- Stage | GP Hatchery1-Hatchers |

| **Hatcher Code** | **Hatcher Code WBS** | **Hatcher Store location** | **Long Desc****ription** |
| --- | --- | --- | --- |
| GH01 | GH01-01 | GH01 | GP-Hatchers1-H01 |
| GH01 | GH01-02 | GH01 | GP-Hatchers1-H02 |
| GH01 | GH01-03 | GH01 | GP-Hatchers1-H03 |
| GH01 | GH01-04 | GH01 | GP-Hatchers1-H04 |
| GH01 | GH01-05 | GH01 | GP-Hatchers1-H05 |
| GH01 | GH01-06 | GH01 | GP-Hatchers1-H06 |
| GH01 | GH01-07 | GH01 | GP-Hatchers1-H07 |
| GH01 | GH01-08 | GH01 | GP-Hatchers1-H08 |
| GH01 | GH01-09 | GH01 | GP-Hatchers1-H09 |
| GH01 | GH01-10 | GH01 | GP-Hatchers1-H10 |
| GH01 | GH01-11 | GH01 | GP-Hatchers1-H11 |
| GH01 | GH01-12 | GH01 | GP-Hatchers1-H12 |
| GH01 | GH01-01 | GH01 | GP-Hatchers1-H01 |

| **Setter**** Code** | **Setter Code WBS** | **Setter Store location** | **Long ****Desc** |
| --- | --- | --- | --- |
| GS01 | GS01-01 | GH01 | GP-Setters1-S01 |
| GS01 | GS01-02 | GH01 | GP-Setters1-S02 |
| GS01 | GS01-03 | GH01 | GP-Setters1-S03 |
| GS01 | GS01-04 | GH01 | GP-Setters1-S04 |
| GS01 | GS01-05 | GH01 | GP-Setters1-S05 |
| GS01 | GS01-06 | GH01 | GP-Setters1-S06 |
| GS01 | GS01-07 | GH01 | GP-Setters1-S07 |
| GS01 | GS01-08 | GH01 | GP-Setters1-S08 |
| GS01 | GS01-09 | GH01 | GP-Setters1-S09 |
| GS01 | GS01-10 | GH01 | GP-Setters1-S10 |
| GS01 | GS01-11 | GH01 | GP-Setters1-S11 |
| GS01 | GS01-12 | GH01 | GP-Setters1-S12 |
| GS01 | GS01-13 | GH01 | GP-Setters1-S13 |
| GS01 | GS01-14 | GH01 | GP-Setters1-S14 |
| GS01 | GS01-15 | GH01 | GP-Setters1-S15 |
| GS01 | GS01-16 | GH01 | GP-Setters1-S16 |
| GS01 | GS01-17 | GH01 | GP-Setters1-S17 |
| GS01 | GS01-18 | GH01 | GP-Setters1-S18 |
| GS01 | GS01-19 | GH01 | GP-Setters1-S19 |
| GS01 | GS01-20 | GH01 | GP-Setters1-S20 |
| GS01 | GS01-21 | GH01 | GP-Setters1-S21 |
| GS01 | GS01-22 | GH01 | GP-Setters1-S22 |
| GS01 | GS01-23 | GH01 | GP-Setters1-S23 |
| GS01 | GS01-24 | GH01 | GP-Setters1-S24 |
| GS01 | GS01-25 | GH01 | GP-Setters1-S25 |
| GS01 | GS01-26 | GH01 | GP-Setters1-S26 |
| GS01 | GS01-27 | GH01 | GP-Setters1-S27 |
| GS01 | GS01-28 | GH01 | GP-Setters1-S28 |
| GS01 | GS01-29 | GH01 | GP-Setters1-S29 |
| GS01 | GS01-30 | GH01 | GP-Setters1-S30 |
| GS01 | GS01-31 | GH01 | GP-Setters1-S31 |
| GS01 | GS01-32 | GH01 | GP-Setters1-S32 |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 20 of 37 |
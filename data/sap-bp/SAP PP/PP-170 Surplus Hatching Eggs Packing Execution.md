# PP-170 Surplus Hatching Eggs Packing Execution

Al-Watania Poultry

Business Processes Documentation for Hatchery Packing

Confidential

## Project Information

| **Project Identification** |
| --- |
| Project Name | Project Type |
| S4P - SAP Implementation | S4/HANA Mini-Project |
| Customer Name | SAP Service Partner |
| Al Watania Poultry | Wi-Sys |
| Project Manager (Partner) | Project Manager (Client) |
| Hesham Nabil | Bader Ali Algeffari Sultan Al Sultan |

## Document Control

| ** Version** | **Date** | **Additions/Modifications** | **Prepared/Revised by** |
| --- | --- | --- | --- |
| V1.0 | 28-02-2017 | Phase1 Version | Hesham Nabil |
| V2.0 | 20-05-2018 | Mini-Project Version | Hesham Nabil |

## Approval

| **No.** | **Name** | **Organization/Title** | **Signature/Date** |
| --- | --- | --- | --- |
| 01 | Abulfadel | PP Key User |  |
| 02 | Abdullah Al-Ghonaim | Business Process Owner |  |
| 03 | Mohammad Al-Shayea | Production VP |  |
| 04 | Hesham Nabil | Project Manager/PP Lead |  |
| 05 | Bader Ali Algeffari | Project Manager |  |
| 06 | Sultan Al Sultan | Assistant Project Manager |  |

| PP-170: Surplus Hatching Eggs Packing Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Collect all movement & cost per order-Product/Line/Period | S | H |

### Business Process Description

In this process, the hatchery production supervisor & Shop floor control responsible controls Egg packing production process.

There are three cases of packing:

- Grading stations transfer defect egg to hatcheries to pack them to send them to the market as table egg.

- Hatcheries pack the surplus egg to send them to market as hatching egg.

- Hatcheries pack old surplus egg that has low hatching probability pack them to send them to the market as table egg.

| Process Characteristics |
| --- |
| Process Trigger | New day for packing egg |
| Process Input | Required egg quantity for selling |
| Process Output | Confirmations |
| Process Owner | Hatchery SFC responsible |
| Process Volumes | 18 confirmation |
| Process Frequencies | Daily |

### Business Process Diagrams

Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | New day for packing egg |  |  |  |  |
| 010 | Create Packing STO | ME21N | Create Purchase Order | Create Packing STO from Layer packing store - Weekly | Hatchery SFC Responsible |
| 020 | Post Goods issue | MIGO_GI | Post Goods Movement | Post Goods Issue to STO (Mvt 351) | Layer Packing Stock Keeper |
| 030 | Post Goods receipt | MIGO_GR | Post Goods Movement | Post Goods Receipt from STO (Mvt 101) | Hatchery SFC Responsible |
| 040 | Collective REM Confirmation | MF42N | Collective REM Confirmation | Daily Collective REM Confirmation to GR finished products | Hatchery SFC Responsible |
| 050 | Create STO to transfer products to finished Store | ME21N | Create Purchase Order | Create STO to transfer products to finished Store Daily | Hatchery SFC Responsible |
| 060 | Post Goods issue | MIGO_GI | Post Goods Movement | Post Goods Issue to STO (Mvt 351) | Hatchery SFC Responsible |
| 070 | Post Goods receipt | MIGO_GR | Post Goods Movement | Post Goods Receipt from STO (Mvt 101) | Layer Finished product  Stock Keeper |
| 080 | Unpacked egg price change | MR21 | Change price | Unpacked egg price change | Hatchery Cost controller |
| 090 | Receive unpacked egg from cost center | MIGO_GI | Post Goods Movement | Receive unpacked egg from hatchery cost center Mvt 202 - Monthly | Hatchery Cost controller |
| 100 | **Sale from stock process** | ** ** | ** ** | **Sale from stock process** | **Sales Responsible** |
| Output | Confirmations |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 | 1 | Hatchery responsible |
| Butain 2 | 1 | Hatchery responsible |
| Watania 2 | 4 | Hatchery responsible |

### Operational Decisions or Logic within the Process

Unpacked egg will be:

- by-product 

- Negative Stock

- Its price will be change manually on a month basis.

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Stock Transport Order | MM-PUR-PO |
| 2 | Batch management | LO-BM |
| 3 | Inventory Management | MM-IM |
| 4 | Standard Cost Estimate | CO-PC-PCP |

### Potential Future Process Improvements (out of scope for this implementation)

	N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1210 | Hatchery Plant |

| **Live Operation Area** |
| --- |
| Hatchery Area |

| **Purchasing Grp** |
| --- |
| H03 | Hatchery3 |
| H04 | Hatchery4 |
| H05 | Hatchery5 |
| H06 | Hatchery6 |
| H07 | Hatchery7 |
| H08 | Hatchery8 |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |

### System Configuration Considerations

| **STO order types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| ZZ04 | Live Operation STO | 7700000000 | 7799999999 |

## Technical/Development Related Items

	N/A

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Hatchery SFC Responsible |  |
| 20 | Layer Packing Stock Keeper |  |
| 30 | Layer Finished product  Stock Keeper |  |
| 40 | Hatchery Cost controller |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 3 of 6 |
# V2-MM-BJ8-010 Good Receipt From Production V2

# MM-BJ8-010 Good Receipt From Production 

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Full integration with the Production Department documents. | S | H |
| 02 | Monitor and Track Production order quantities on daily basis. | S | H |
| 03 | Update the system directly with the actual material cost. | S | H |
| 04 | Management of materials by quantity and value. | S | H |
| 05 | Control the Shelf life of the receiving materials at the time of receiving for the batch management materials to be able to work with FIFO policy | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Receiving goods from Production Lines |
| **Process Input** | Transfer reservation from production Dep. |
| **Process Output** | Printed Material Document (Transfer document) also accounting document |
| **Process Owner** | Stock keeper |
| **Process Volumes** | 154 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| ***** ****In Case ****Of  ***********  Further Processing and Feed Mill**** ***** |
| 10 | Goods Receipt with reference to production order (Mvt 101) | MIGO |  | Stock keepers |
| ***** ****In C****ase**** ****Of  *********** **** Processing – Layer –   Manure – Protein –** **Agriculture ********* |
| 10 | Collective Entry Of Confirmation | MF42N |  | SFC responsible |
| 20 | Create transfer Reservation (Mvt 311) | MB21 |  | SFC responsible |
| 30 | Transfer posting from production location into FG storage location one transfer per hour | MIGO | Mange Stock | Stock keepers |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB51 | Material Document List | X |  |
| 03 | MB52 | Display Warehouse Stocks of material | X |  |
| 05 | MMBE | Stock Overview | X |  |
| 07 | MB5B | Stock on Posting Date | X |  |
| 08 | MB90 | Output Messages | X |  |
| 09 | MB25 | Reservation List | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Further Processing |  | Ammar Al-Baz |
| Processing |  | Ammar Al-Baz |
| Laying |  | Ammar Al-Baz |
| Manure |  | Ammar Al-Baz |
| Agriculture |  | Ammar Al-Baz |
| Protein Factory |  | Ammar Al-Baz |
| Feed Mill |  | Ammar Al-Baz |
| Yanbu Grain Hub |  | Ammar Al-Baz |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Number of Process errors | Revered documents for the receiving materials with Movement type 102 per storage location | 99% No Reversal% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Production | PP-SFC |
| 02 | Inventory Management | MM-IM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1140 | Yanbu Grain Hub |  |
| 1120 | Feed Mill |  |
| 1250 | Layer - Laying |  |
| 1260 | Layer – Rearing |  |
| 1010 | Qassim centeral |  |
| 1840 | Agriculture | Obsolete |
| 4100 | Agriculture |  |

### Master Data Considerations (including all relevant data relationships)

| **List of ****R****elated Master Data** |
| --- |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

| Goods Receipt  Output Types |
| --- |
| ID | Description | Form | Program | Form Routine |
| YE03 | GR/PRD  Note Vers.3 | Y_S4P_INV | SAPM07DR | ENTRY_WA03_PDF |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-130-01 | Form | Goods Receipt/ Production Slip | YMM_GR_PRD |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Data Objects** |
| 01 | YMM_STK_KPR | MM: Stock Keeper |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Warehouse Clerks | Key User |

In the end of user training, we should collect different Stock keepers into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 5 |
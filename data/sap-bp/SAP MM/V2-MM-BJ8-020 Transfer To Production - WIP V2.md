# V2-MM-BJ8-020 Transfer To Production - WIP V2

# MM-BJ8-020 Transfer To Production - WIP

## Process Description

	### Business Process Requirements	

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Full integration with the Production Department documents. | S | H |
| 02 | Monitor and Track quantities Issued to production departments | S | H |
| 03 | Management of materials by quantity and value. | S | H |
| 04 | Control the Shelf life of the receiving materials at the time of receiving for the batch management materials to be able to work with FIFO policy | S | H |

### Business Process Description

| **Process Characteristics** |
| --- |
| **Process Trigger** | Replenish the WIP Production Storage Locations |
| **Process Input** | Transfer reservation from Central Storage locations |
| **Process Output** | Printed Material Document (Transfer document) also accounting document |
| **Process Owner** | Stock keeper |
| **Process Volumes** | 80 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **SFC responsible** | **Stock keepers** |
|  |  |  |  |  |  |
| 01 | Material Staging | ZMF60 MB21 |  | R | I |
| 02 | Transfer materials | MIGO_TR | Post Goods Movement |  | R |
|  |  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB51 | Material Document List | X |  |
| 02 | ID F1077 | Material Documents Overview |  | X |
| 03 | MB52 | Display Warehouse Stocks of material | X |  |
| 04 | ID F1595 | Stock - Multiple Materials |  | X |
| 05 | MMBE | Stock Overview | X |  |
| 06 | ID F1076 | Stock - Single Material |  | X |
| 07 | MB5B | Stock on Posting Date | X |  |
| 08 | MB90 | Output Messages | X |  |
| 09 | COOIS | Production Order List | X |  |
| 10 | MB25 | Reservation List | X |  |
| 11 | MBVR | Manage Reservations | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Processing |  | Ammar Al-Baz |
| Further Processing |  |  |
| Layer |  | Ammar Al-Baz |
| Manure |  | Ammar Al-Baz |
| Agriculture |  | Ammar Al-Baz |
| Protein Factory |  | Ammar Al-Baz |
| Qassim Central |  | Ammar Al-Baz |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Number of Process errors | Revered documents for the transferring materials with Movement type 312 per storage location | 99% No Reversal% |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Production | PP-SFC |
| 02 | Inventory Management | MM-IV |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1010 | Qassim Central |  |
| 1100 | Processing |  |
| 1050 | Further Processing |  |
| 1120 | Feed Mill |  |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1221 | Grading Station - Dulfa |  |
| 1140 | Yanbu hub |  |
| 1100 | Processing |  |
| 1240 | Hatchery |  |
| 1250 | C Layer – Laying |  |

| **Storage Locations ** | **Plants** |
| --- | --- |
| **Code** | **Storage Location** | **Code** | **Plant** |
| Q004 | Manure | 1010 | Qassim Centeral |
| Q031 | Manure Fact. WIP |  |  |
| Q005 | Finished Protein |  |  |
| Q071 | Water-Watania1 |  |  |
| Q072 | Water-Watania2 |  |  |
| Q073 | Water-Watnia2-FM |  |  |
| Q074 | Water-Wadi |  |  |
| Q080 | Protein Fact.WIP |  |  |
| 1141 | Raw Material | 1140 | Yanbu hub |
| 1120 | P1 - L1 WIP - W1 | 1100 | Processing |
| 1121 | P1 - L1 Rec - W1 |  |  |
| 1122 | P2 - WIP - W1 |  |  |
| 1123 | P2 - L1 WIP - W1 |  |  |
| 1124 | P2 - L1 Rec - W1 |  |  |
| 1125 | P2 - L2 WIP - W1 |  |  |
| 1126 | P2 - L2 Rec - W1 |  |  |
| 1127 | P3 - WIP - W2 |  |  |
| 1128 | P3 - L1 WIP - W2 |  |  |
| 1129 | P3 - L1 Rec - W2 |  |  |
| 1130 | P3 - L2 WIP - W2 |  |  |
| 1131 | P3 - L2 Rec - W2 |  |  |
| 1132 | P3 - L3 WIP - W2 |  |  |
| 1133 | P3 - L3 Rec - W2 |  |  |
| 1134 | P3 - L4 WIP- W2 |  |  |
| H003 | Hatchery 3 | 1240 | Hatchery |
| H004 | Hatchery 4 |  |  |
| H005 | Hatchery 5 |  |  |
| H006 | Hatchery 6 |  |  |
| H007 | Hatchery 7 |  |  |
| H008 | Hatchery 8 |  |  |
| 1056 | WIP | 1050 | Further Processing |
| 1254 | Grading Station1 | 1250 | C Layer – Laying |
| 1255 | Grading Station2 |  |  |
| 1121 | W2-Feed Add. | 1120 | Feed Mill |
| 1123 | W1-WIP |  |  |
| 1126 | W1-Feed Add. |  |  |
| 1128 | W2-FM3- WIP |  |  |
| 1129 | W2-FM6- WIP |  |  |
| 1131 | Wadi-Feed Add. |  |  |
| 1133 | Wadi-FM4 - WIP |  |  |
| 1134 | Wadi-FM5 - WIP |  |  |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| Batch Master Record |

### System Configuration Considerations

| Goods Issue  Output Types |
| --- |
| ID | Description | Form | Program | Form Routine |
| YE03 | GR Note Vers.3 | Y_S4P_INV | SAPM07DR | ENTRY_WA03_PDF |

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| F-MM-BJ8-01 | Form | Goods Issue / Production Slip | YMM_GI_PRD |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Data Objects** |
| 01 | YMM_STK_KPR | MM: Stock Keeper (Parent Role) |

## Organizational Change Related Items

### Training Requirements

	Prerequisites:	

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Inventory Administrators | Key User |
| Warehouse Clerks | Key User |

In end user training, we should collect different Stock keepers into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 5 of 6 |
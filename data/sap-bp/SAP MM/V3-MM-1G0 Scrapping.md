# V3-MM-1G0 Scrapping

# MM-1G0 Scrapping

## Process Description

This scenario deals with the different processes of returns from customer, rework from production, and other logistic business processes. The target group is warehouse Management.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Provides flexible variations of the scrapping process | S | H |
| 02 | Scrap Expired Stock and write off through SAP | S | H |
| 03 | Monitor Shelf Life stock on daily base | S | H |
| 04 | Classifying the Scrapping Process to reasons for reporting | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer returns /General stock Scrapping |
| **Process Input** | Scrapping Expiration |
| **Process Output** | Posted Write off Document |
| **Process Owner** | Warehouse Administrator |
| **Process Volumes** | 20 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Formation of a committee for scrapping | Manual |  | Warehouse Manager |
| 02 | Scrapping Quantities On SAP Mvt (551,553) | MIGO_GI | Goods Movements | Warehouse Manager |
|  |  |  |  |  |

**Reports **

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 03 | MB51 | Material Document List | X |  |
| 05 | MB52 | Display Warehouse Stocks of material | X |  |
| 07 | MMBE | Stock Overview | X |  |
| 09 | MB5B | Stock on Posting Date | X |  |
| 10 | MB90 | Output Messages | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 3 | Managers |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Scrapping Due to Expiration | Amount | Minimize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Inventory Management | MM-IM |
| 02 | Overhead Cost Controlling | CO-OM |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1010 | Qassim Central |
| 1100 | Processing |
| 1050 | Further Processing |
| 3100 | GP-Hatchery |

| **Storage Location** |
| --- |
| 1010 | Qassim Central | Q099 | Returns branches |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Cost Center |

### System Configuration Considerations

| **Reason For Movements** |
| --- |
| **Code** | **Description** |
| 55101 | Expired |
| 55102 | Shrinkage |
| 55103 | Spoiled |
| 55201 | Expired |
| 55202 | Shrinkage |
| 55203 | Spoiled |
| 55301 | Expired |
| 55302 | Shrinkage |
| 55303 | Spoiled |
| 55401 | Expired |
| 55402 | Shrinkage |
| 55403 | Spoiled |
| 55501 | Expired |
| 55502 | Shrinkage |
| 55503 | Spoiled |

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 01 | YMM_STK_KPR_1140_1141_SCRAP | MM: Stock Keeper Yanbu Raw Material Scrapping Stock |
| 02 | YMM_STK_KPR_SCRAPPING | MM: Stock Keeper – Inventory Control Scrapping |
| 03 | YMM_STK_MGR_INV_CTRL_SCRAP | MM: Finance Inventory Control Scrapping From Quality Stock |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Warehouse Managers | Key User |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 5 |
# PM-PHO-010 EQUIPMENT PHASE-OUT  

| PM-PHO-010 EQUIPMENT phase-out |
| --- |

## Process Description

In SAP, this business process is used for the Asset retirement purpose. If a technical System no longer fit to be used and it no longer make sense, for economic or technical reason, it must be removed from the productive system. 

Asset retirement is the removal of an asset or part of an asset from the asset portfolio. This removal of an asset (or part of an asset) is posted from a bookkeeping perspective as an asset retirement. 

Depending on organizational considerations, or the business transaction which leads to the retirement, following types of retirement are considered:

- An asset has to be scrapped, with no revenue earned.

- An asset is sold to an affiliated company. 

There are transactions and transaction types in the system for these different retirement types.

Before retiring any Equipment/asset, Following must be considered in the system:

			- All Business Transaction related to asset must be completed in the system.

			- All completed Orders must be settled within the same financial year.

			- Depreciation of Equipment must be checked in Finance.

			- Asset Master, Equipment master must be marked with Deletion Flag.

			- Equipment BOM, Task list and Master must be marked for deletion.

The main phases of the Phase out process are:

- Deactivate Equipment. 

- Close all open Maintenance Orders and Notifications.

- Set Deletion Flag for the Equipment.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Used to perform the phase out for the Asset/Equipment | S | H |
| 02 | The Phased-out Asset/Equipment can’t be used longer | S | H |
| 03 | The Maintenance Notification and Maintenance Order cannot be created for the phased-out Asset/Equipment on the SAP System | S | H |
| 04 | Tracking the scraped Assets/Equipment by standard SAP reports | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Equipment to be scraped/ Asset retirement |
| **Process Input** | Phase out Decision |
| **Process Output** | Deletion of Equipment |
| **Process Owner** | Operation and Maintenance Department- FCW |
| **Process Volumes** | 5 - 6 |
| **Process Frequencies** | Depending on requirement |

### Business Process Diagrams

Following process diagram shows the phase-out of Equipment process.

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |
| 01 | Deactivate Equipment | Change Equipment (IE02) | Master Data Admin |
| 02 | Review All Open Orders/Notifications | Display Order (IW33,IW39) | Maintenance Planner |
| 03 | Close All Open Orders/Notifications | Change Order (IW32,IW38) | Maintenance Planner |
| 04 | Set Deletion Flag for Equipment | Change Equipment (IE02) | Master Data Admin |

### Reports / Key Performance Indicators KPIs 

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | IW28 | List Change Notification | X | X |
| 02 | IW29 | List Display Notification | X | X |
| 03 | IW38 | List Change Order | X | X |
| 04 | IW39 | List Display Order | X | X |
| 05 | IE06,IH08 | List of Equipment | X | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim – Central Fleet Workshop “FCW” | 6 | Maintenance Planner |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Process Step ** | System/ **Module Integrated with** | **Integration Details** |
| 01 | Asset/Equipment Phase Out | PM, FI | Equipment will be deleted , and the Asset will be retired , Users can not create a maintenance notification or maintenance order for the Phased-Out Equipment. |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Maintenance Planning Plant ** |
| --- |
| 1310 | Fleet Central Workshop-FCW |

| **Location** |
| --- |
| **Code ** | **Employees Group Responsible ** |
| Z1 | Watania1 |

| **Planner Group** |
| --- |
| **Code ** | **Employees Group Responsible ** |
| 100 | FCW Planner Group |

### Master Data Considerations/High Level Data Migration 

| List of Related Master Data |
| --- |
| ID | Description |
| 01 | Equipment |
| 02 | Measuring Points / Counters |
| 03 | Class & Characteristics |

### System Configuration Considerations

The Standard Equipment system Status will be used and indicates the Equipment Status 

## Technical/Development Related Items

	N/A
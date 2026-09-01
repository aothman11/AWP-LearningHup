# PM-OHI-010 EQUIPMENT PHASE-IN  

| PM-OHI-010 EQUIPMENT phase-In |
| --- |

## Process Description

In AWP there is need to procure assets. Finance will create asset master for this equipment.  The Procurement for this Asset/Equipment will be done through Asset procurement process.

This process is covered in SAP MM Business Processes under MM-BNX-010: ASSET PROCUREMENT.

### Business Process Diagrams: Asset Procurement 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Used to make the new Asset/Equipment available for operation | S | H |
| 02 | All information of the Asset/Equipment will be available and centrally stored in Equipment Master | S | H |
| 03 | Tracking the Assets/Equipment and tracking the maintenance activities by standard SAP reports | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Equipment to be purchased |
| **Process Input** | Equipment Data/Asset Procurement Process (MM-BNX-010) |
| **Process Output** | Equipment Master |
| **Process Owner** | Operation and Maintenance Department- FCW |
| **Process Volumes** | 50 to 100 |
| **Process Frequencies** | Depending on requirement |

### Business Process Diagrams: Equipment Phase-In

Complete end to end Equipment phase-in Process stages shows in below process diagram.

Business process to maintain the New Equipment to perform effective maintenance on a piece of Equipment this data includes Equipment master, Class & Characteristics, and Measuring Points/Counters.

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **FIORI App****. / T. Code****                               ** | **Business ****Roles** |
|  |  |  |  |
| 01 | Create Equipment | Create Equipment (IE31, IE25, IE01) | Master Data Admin |
| 02 | Maintain Class & Charactrestics | Create Class, Maintain Charactrestics, Change Technical Object (CL02,CT04,IE02) | Master Data Admin |
| 03 | Maintain Measuring Points/Counters | Create Measuring Points, Change Technical Object (IK01,IE02) | Master Data Admin |
| 04 | Change Equipment | Change Equipment (IE02) | Master Data Admin |
| 05 | List of Equipment | List of Equipment (IE06, IH08) | Master Data Admin |

### Reports / Key Performance Indicators KPIs 

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | IE06, IH08 | List of Equipment | X | X |
| 02 | IK11 | List of Measuring Points/Counters | X | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim – Central Fleet Workshop “FCW” | 2 | Master Data Admin |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Process Step ** | System/ **Module Integrated with** | **Integration Details** |
| 01 | Asset/Equipment Phase-In | PM, FI | Asset ID will be mapped to the Equipment to have a seamless integration between the Maintenance and Finance Departments. |

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
| 01 | Equipment – Fleet Objects |
| 02 | Measuring Points / Counters |
| 03 | Class & Characteristics |

### System Configuration Considerations

The Standard Equipment system Status will be used and indicates the Equipment Status 

## Technical/Development Related Items

	N/A
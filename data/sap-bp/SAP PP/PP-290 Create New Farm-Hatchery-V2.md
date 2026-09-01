# PP-290 Create New Farm-Hatchery-V2

| PP-290: Create new farm/hatchery |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Predefined steps to develop new farm/hatchery in the company | S | H |

### Business Process Description

You can use this process to create and follow the steps required to create new farm/Hatchery in the company.

| Process Characteristics |
| --- |
| Process Trigger | Request for new |
| Process Input | Master Data |
| Process Output | New Farm/Hatchery created |
| Process Owner | PP Master Data Admin |
| Process Volumes | 1 |
| Process Frequencies | Yearly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Request for new |  |  |  |  |
| 1 | Create storage location | Configuration |  | Create storage location | PP Consultant |
| 2 | Create WBS element | CJ20N |  | Create WBS element | PP Consultant |
| 3 | Create cost center | KS01 |  | Create cost center | CO master data admin |
| 4 | Define activity price with cost center | KP26 |  | Define activity price with cost center | CO master data admin |
| 5 | Create work center | CR01 |  | Create work center | PP master data admin |
| 6 | Create Routing | CA01 |  | Create Routing | PP master data admin |
| 7 | Create production version | C223 |  | Create production version | PP master data admin |
| 8 | Update quota arrangement | MEQ1 |  | Update quota arrangement to take the new farm capacity into consideration | PP master data admin |
| 9 | Extend materials to storage location | MMSC MMSC_MASS |  | Extend materials to storage location | PP master data admin |
| 10 | Assign storage locations to user roles | PFCG |  | Assign storage locations to user roles | IT Responsible |
| Output | New Farm/Hatchery Created |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 1 | PP Master Data Admin |

### Operational Decisions or Logic within the Process

- For naming convention follow the respective area process documents.

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | Storage Location | MM |
| 2 | Work Breakdown Structure | PS-ST-WBS |
| 3 | Cost Center | CO-OM |
| 4 | Activity Type | CO-OM-CCA |
| 5 | Quota Arrangement | MM-PUR-SQ-QTA |
| 6 | Internal Orders | CO-OM-OPA |

### Potential Future Process Improvements (out of scope for this implementation)

	N/A

## Functional Solution Design 

### Organization Structure Considerations

- All Plants related to live operations

- All live operation areas

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| WBS element |
| Cost Center |
| Activity Type |
| Work Center |
| Routing |
| Production Version |
| Quota Arrangement |

### System Configuration Considerations

SAP standard

## Technical/Development Related Items

	N/A

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | PP Consultant |  |
| 20 | IT Responsible |  |
| 30 | PP master data admin |  |
| 40 | CO master data admin |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 3 of 4 |
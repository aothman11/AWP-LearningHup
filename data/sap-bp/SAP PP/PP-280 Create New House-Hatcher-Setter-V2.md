# PP-280 Create New House-Hatcher-Setter-V2

| PP-280: Create new House/Hatcher/Setter |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Predefined steps to develop new House/Hatcher/Setter in the company | S | H |

### Business Process Description

You can use this process to create and follow the steps required to create new House/Hatcher/Setter in the company.

| Process Characteristics |
| --- |
| Process Trigger | Request for new |
| Process Input | Master Data |
| Process Output | New House/Hatcher/Setter created |
| Process Owner | PP Master Data Admin |
| Process Volumes | 10 |
| Process Frequencies | Yearly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Request for new |  |  |  |  |
| 010 | Create storage location | Configuration |  | Create storage location | PP Consultant |
| 020 | Create WBS element | CJ20N |  | Create WBS element | PP Consultant |
| 030 | Update farm work center | CR02 |  | Update farm work center no. of individuals | PP master data admin |
| 040 | Update quota arrangement | MEQ1 |  | Update quota arrangement to take the new farm capacity into consideration | PP master data admin |
| 050 | Extend materials to storage location | MMSC MMSC_MASS |  | Extend materials to storage location | PP master data admin |
| 060 | Create internal order (for (parent/c layer) laying house) | KO01 |  | Create internal order (for (parent/c layer) laying house) | CO master data admin |
| 070 | Assign storage locations to user roles | PFCG |  | Assign storage locations to user roles | IT Responsible |
| Output | New House/Hatcher/Setter Created |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 1 | PP Master Data Admin |

### Operational Decisions or Logic within the Process

N/A

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
| 3 | Quota Arrangement | MM-PUR-SQ-QTA |
| 4 | Internal Orders | CO-OM-OPA |

### Potential Future Process Improvements (out of scope for this implementation)

Implementing soft providing or any other vertical solution.

## Functional Solution Design 

### Organization Structure Considerations

- All Plants related to live operations

- All live operation areas

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| WBS element |
| Quota Arrangement |
| Internal Order |

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
| Confidential | Page 1 of 4 |
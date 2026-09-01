# PP-270 Create New Product-V3

| PP-270: Create new product |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Predefined steps to develop new product in the company | S | H |

### Business Process Description

You can use this process to create and follow the steps required to create new product in the company.

| Process Characteristics |
| --- |
| Process Trigger | R&D Request |
| Process Input | Master Data |
| Process Output | New Product created |
| Process Owner | PP Master Data Admin |
| Process Volumes | 20 |
| Process Frequencies | Yearly |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | R&D Request |  |  |  |  |
| 010 | Create product material master | MM01 |  | Create product material master and extend to all related plants & DCs | Material master admin |
| 020 | Create component material master | MM01 |  | Create component material master | Material master admin |
| 030 | Assign materials to classification | CL24N |  | Assign materials to classification | Material master admin |
| 040 | Assign materials to batch class | CL24N |  | Assign materials to batch class | Material master admin |
| 050 | Create bar code number | Manual |  | Create bar code number | IT Responsible |
| 060 | Create BOM | CS01 | Maintain BOM | Create BOM | PP master data admin |
| 070 | Create Routing | CA01 |  | Create Routing | PP master data admin |
| 080 | Create production version | C223 |  | Create production version | PP master data admin |
| 090 | Create quota arrangement | MEQ1 |  | Create quota arrangement if needed | PP master data admin |
| 100 | Add to product groups | MC86 |  | Add to product groups | PP master data admin |
| 110 | Create purchase info record for component | ME11 |  | Create purchase info record for component | MM master data admin |
| 120 | Extend materials to storage locations | MMSC MMSC_MASS |  | Extend materials to storage locations | MM master data admin |
| 130 | Create mixed cost | CK91N |  | Create Mixed Cost | Product cost controller |
| 140 | Create product standard cost estimate | CK11N |  | Create product standard cost estimate | Product cost controller |
| 150 | Create sales price condition | VK11 |  | Create sales price condition | SD master data admin |
| 160 | Add Material in PPL List | VB01 YSP_VS_PPL |  | Add material in PPL to enable it in van sales | SD master data admin |
| 170 | Add to sales plan | KEPM |  | Add to sales plan | Sales planner |
| Output | New Product Created |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 1 | PP Master Data Admin |
| Watania 2 | 2 | Further Processing PP Master data Admin |
| Watania 1 | 2 | Processing PP Master Data Admin |

### Operational Decisions or Logic within the Process

	N/A

### Legal Considerations and Company-Specific Policies

	N/A

### Reference to Key Process Changes and Process KPIs

- Items used in BOM and it is measured with dimensional UOM like (KG,M,L) its basic UOM should be dimensional UOM

- The finished products with different packaging should have different material codes

- Material types YANM must have material description for below languages:

- CS  (Layer/Parent/Line)

- AF (Breed/Model)

- CA (Sex)

- BG (Egg Type)

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Finish creation within two weeks | As per due date | On time |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 010 | Class | CA-CL-CLS |
| 020 | Characteristic | CA-CL-CHR |
| 030 | Material Master | LO-MD-MM |
| 040 | Material BOM | LO-MD-BOM |
| 050 | Routing | PP-BD-RTG |
| 060 | Production Version | PP-PI-MD |
| 070 | Quota Arrangement | MM-PUR-SQ-QTA |
| 080 | Product Group | LO-LIS-PLN |
| 090 | Purchasing Info Record | MM-PUR |
| 100 | Standard Cost Estimate | CO-PC-PCP |
| 110 | Sales Price Condition | SD-MD-CM |
| 120 | Sales Plan | XX-MJC-CO-PA |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

- All Plants/DCs

- All Sales area

- All Purchasing organization

- All Company codes

- Plant specific Work Scheduling View

- All Storage locations

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Routing |
| Production Version |
| Quota Arrangement |
| Product Group |
| Purchasing Info. Record |
| Standard Cost Estimate |
| Sales Price Condition |

### System Configuration Considerations

SAP Standard

## Technical/Development Related Items

	N/A

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Material master admin |  |
| 20 | IT Responsible |  |
| 30 | PP master data admin |  |
| 40 | MM master data admin |  |
| 50 | Product cost controller |  |
| 60 | SD master data admin |  |
| 70 | Sales planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
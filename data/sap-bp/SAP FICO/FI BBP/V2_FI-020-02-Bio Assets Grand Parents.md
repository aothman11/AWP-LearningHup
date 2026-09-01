# V2_FI-020-02-Bio Assets Grand Parents

| **Bio Assets ****Grand Parents** |
| --- |

## Process Description

This process is to describe how Grand Parents Bio assets are being handled in SAP system as stock and assets 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Grand Parents items are treated as Bio assets in the live production cycle | S | H |
| 02 | Bio assets depreciation is allocated to Grand Parents eggs production | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Transfer GP rearing materials to Grand Parents items |
| **Process Input** | GP rearing materials issued on Grand Parents Bio assets |
| **Process Output** | Grand Parents bio assets are being depreciated |
| **Process Owner** | Asset Accounting |
| **Process Volumes** | 10 |
| **Process Frequencies** | The beginning of each Grand Parents production cycle |

**Business Process Diagram **

### Process Steps Details and Responsibility Assignment	Matrix (RACI)

| **ID** | **Process Step Description** | **Execution** | **Roles** |
| --- | --- | --- | --- |
|  |  | **T-Code** | Layer planner | BioAsset Controller | Asset Controller |
| 10 | GR from Rearing Production order | CO11N | R |  |  |
| 20 | Check delivered orders in rearing | COOIS |  | R |  |
|  |  | ZPPH3 |  |  |  |
| 30 | Create Cycle main asset Master | AS01 |  | R |  |
|  | Asset class: |  |  |  |  |
|  | Grand Parents - Y93000 |  |  |  |  |
| 40 | Create cycle farm house Asset master considering: | AS11 |  | R |  |
|  | 1-Qauntity |  |  |  |  |
|  | 2- UOM: EA |  |  |  |  |
|  | 3-Naming convention code and description |  |  |  |  |
|  |  |  |  |  |  |
| 30 | Goods Issue rearing house balance against GP Asset-Sub number | MIGO_GI |  | R |  |
| 50 | Run Depreciation | AFAB |  |  | R |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | COOIS | Production Order Information System | X |  |
| 02 | ZPPH3 | Rearing & Laying House Data | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Al-Watania Poultry Head office | 1 | Islam |

### Operational Decisions or Logic within the Process

N\A

### Legal Considerations and Company-Specific Policies

N\A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
|  |  |  |  |
|  |  |  |  |

### Integration Points

N/A

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 3000 | Al-Watania Grandparent |

| **Plant** |
| --- |
| 3200 | GP-Parent-Laying |

| **Asset Class** |
| --- |
| Y93000 | Grand Parents |

### Master Data Considerations (including all relevant data relationships)

		

	

| **Asset Master** |
| --- |
| Asset master data | Grand Parents Bio Assets |

### System Configuration Considerations

| Internal Order  Type |
| --- |
| ID | Description |
| Z600 | Laying-Depreciation |

-    Both Depreciation Areas are activated in all asset classes in the Asset Class

| **Maintain Depreciation Key** |
| --- |
| **Depreciation Key** | **Method** | **Active** |
| ZDAY | Str.-line over rem.life Daily depreciation | X |

- Depreciation Key ZDAY is assigned to Bio assets ( Y93000).

## Technical/Development Related Items

		

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
|  |  |  |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 01 | YFI_AA_ACC_LIVE | FI: Live Asset Accountant |

| Explore Phase – High Value Spare Parts Business Process Document |
| --- |
| Confidential | Page 2 of 5 |
# V2_FI-020-01-Bio Assets Layer Laying

| **Bio Assets layer laying** |
| --- |

## Process Description

This process is to describe how layer laying Bio assets are being handled in SAP system as stock and assets 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Layer laying items are treated as Bio assets in the live production cycle | S | H |
| 02 | Bio assets depreciation is allocated to layer laying eggs production | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Transfer layer rearing materials to layer laying items |
| **Process Input** | Layer rearing materials issued on layer laying Bio assets |
| **Process Output** | Layer laying bio assets are being depreciated |
| **Process Owner** | Asset Accounting |
| **Process Volumes** | 10 |
| **Process Frequencies** | The beginning of each layer laying production cycle |

## Business Process Diagrams

### Process Steps Details and Responsibility Assignment	Matrix (RACI)

| **ID** | **Process Step Description** | **Execution** | **Roles** |
| --- | --- | --- | --- |
|  |  | **T-Code** | Layer planner | BioAsset Controller | Asset Controller | Period end closing controller |
| 10 | GR from Rearing Production order | CO11N | R |  |  |  |
| 20 | Check delivered orders in rearing | COOIS ZPPH3 |  | R |  |  |
| 30 | Goods Issue rearing house balance against Laying internal order (order type Z500 code start by Y & farm code - House code) using "Movement type **Y03**", and **posting period **same as transfer date | MIGO_GI |  | R |  |  |
| 40 | Create Cycle main asset Master Asset class: Layer laying - Y92000 | AS01 |  | R |  |  |
| 50 | Create cycle farm house Asset master considering: 1-Qauntity  2- UOM: EA 3-assign house **Z** internal order 4-Naming convention code and description | AS11 |  | R |  |  |
| 60 | Change Z500 **Y** internal order settlement rule to settle against asset within two periods one for standard cost second for actual cost | KO02 |  | R |  |  |
| 70 | Change Z600 Z internal order settlement rule to settle against cost center till go live with Laying after that use production order | KO02 |  | R |  |  |
| 80 | Run settlement for Y internal order and considering asset value date same as transfer date | KO88 |  | R |  |  |
| 90 | Run Depreciation | AFAB |  |  | R |  |
| 100 | Closing Material ledger and calculate actual costing | CKMLCP |  |  |  | R |
| 110 | Run settlement for Y internal order and considering asset value date first of next period | KO88 |  | R |  | 0 |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | COOIS | Production Order Information System | X |  |
| 02 | ZPPH3 | Rearing & Laying House Data | X |  |
| 03 | KOB1 | Orders: Actual Line Items | X |  |

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
| 1000 | Al-Watania Poultry |

| **Plant** |
| --- |
| 1260 | C Layer - Rearing |

| **Asset Class** |
| --- |
| Y92000 | Layer Laying |

### Master Data Considerations (including all relevant data relationships)

		

| **Material Master** |
| --- |
| Rearing Materials | Rearing Materials |

	

	

| **Asset Master** |
| --- |
| Asset master data | Layer Laying Bio Assets |

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

- Depreciation Key ZDAY is assigned to Bio assets (Y92000 , Y93000).

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
| Confidential | Page 2 of 6 |
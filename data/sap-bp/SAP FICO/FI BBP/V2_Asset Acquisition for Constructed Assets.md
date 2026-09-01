# V2_Asset Acquisition for Constructed Assets

| **External Asset Under Construction** |
| --- |

# **Process Description**

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Budget External Asset under Construction | S |  |
| 02 | Monitor vendor down payments on Assets | S |  |

## Business Process Description

Assets under Construction (AuC) are a special form of tangible assets. They are usually displayed as a separate balance sheet item, requiring separate account determination and their own asset classes. During the construction phase of an asset, all actual postings and inventory goods issues are assigned to the AuC internal order then these costs to be settled periodically on AUC master. Once the asset is completed, a transfer is made to the final fixed asset.

| Process Characteristics |
| --- |
| Process Trigger | Approved long Term Project Budget |
| Process Input | Project Budget |
| Process Output | Capitalized Asset Under Construction |
| Process Owner | Project Management and Expansion Unit |
| Process Volumes | 5 |
| Process Frequencies | yearly |

## Business Process Diagrams

01 Asset Acquisition for Constructed Assets

02 Asset Acquisition for Constructed Assets - (External Procurement)

## Process Step Detailed Requirements & Solution

01 Asset Acquisition for Constructed Assets

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Controller** | **AUC Responsible** | **Stock Keeper** | **Asset Accountant** |
| Trigger | Requirement to Asset Under Construction |  |  |  |  |  |  |
| 01 | Create Real Internal Order | KO01 | Manage Internal Order | R | I | I | I |
| 02 | Create AUC Master data | AS01 | Create Asset Master Record | I | I | I | R |
| 03 | Maintain Settlement Rule | KO02 | Manage Internal Order | R | I | I | I |
| 04 | Maintain Original Budget | KO22 |  | R | I | I | I |
| 05 | Release Internal Order | KO02 | Manage Internal Order | R | I | I | I |
| 06 | Call Consumable Purchasing Process |  |  | I | I | I | I |
| 07 | Call Logistics Invoice Verification |  |  | I | I | I | I |
| 08 | Create Reservation on Internal Order | MB21 |  | I | R | I | I |
| 09 | Goods Issue with Reference to Reservation | MIGO_IG | Goods Movements | I | I | R | I |
| 10 | Monitor Order Progress | S_ALR_87013019 |  | I | I | I | R |
| 11 | Enter Vendor Retention Credit Memo | F-41 |  | I | I | I | R |
| 12 | Periodic Settlement of Internal Order on AUC | KO8G | Run Actual Settlement | I | I | I | R |
| 13 | Create Assets Masters for Capitalization | AS01 | Create Asset Master Record | I | I | I | R |
| 14 | Maintain Settlement Rule for AUC | AIAB | Define Distribution Rules | I | I | I | R |
| 15 | Settle AUC to Capitalized Assets | AIBU | Settle Asset Under Construction | I | I | I | R |
| 16 | Complete and Close Order | KO02 | Manage Internal Order | I | I | I | R |
| 17 | AUC Locked to Acquisition Postings | AS05 | Block Assets | I | I | I | R |
| Output | AUC Capitalized |  |  |  |  |  |  |

02 Asset Acquisition for Constructed Assets - (External Procurement)

| **Process Step Description** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI App.** | **Controller** | **Asset Accountant** | **AP Accountant** |
| Trigger | Asset Acquisition for Constructed Assets - (External Procurement) |  |  |  |  |  |
| 01 | Create Statistical Order | KO01 | Manage Internal Order | R | I | I |
| 02 | Maintain Statistical Order Budget | KO22 |  | R | I | I |
| 03 | Release Statistical Order | KO02 | Manage Internal Order | R | I | I |
| 04 | Create AUC and Final Settlement Assets | AS01 | Create Asset Master Record | I | R |  |
| 05 | Assign Statistical Order in AUC Master | AS02 | Change Asset | R | I | I |
| 06 | Create Down Payment Request for AUC | F-47 | Create Supplier Down Payment Request | I | R | I |
| 07 | Post Down Payment | F-48 | Post Supplier Down Payments | I | I | R |
| 08 | Asset Acquisition Without Order AP Integrated | F-90 | Acquisition Without Order (AP Integrated) | I | R | I |
| 09 | Clear Vendor Invoice With Down Payment | F-54 |  | I | I | R |
| 10 | Maintain Settlement Rule for AUC | AIAB | Define Distribution Rules | I | R | I |
| 11 | Settlement Asset Under Construction | AIBU | Settle Asset Under Construction | I | R | I |
| 12 | AUC Locked to Acquisition Postings | AS05 | Block Assets | I | R | I |
| Output | AUC Capitalized |  |  |  |  |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 2 | AA Accountant |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | Inventory Management | MM-IM |
| 03 | Logistics Invoice Verification | MM-IV-LIV |
| 04 | Accounts Payable | FI-AP |
| 05 | Bank Accounts | FI-BANKS |

## Potential Future Process Improvements (out of scope for this implementation)

N/A

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grandparent |
| 4000 | AWP Agriculture |
| 5000 | Al-Watania Super Market |

| **AUC Class** |
| --- |
| 40000 | Asset Under Construction |

| **Asset Classes to be capitalized after AUC settlement** |
| --- |
| Y11000 | Land |
| Y12000 | Wells |
| Y13000 | Buildings & Improvements |
| Y14000 | Plant & Machinery |
| Y15000 | Transportation & Vehicles |
| Y16000 | Tools |
| Y17000 | Furniture & Furnishings |
| Y18000 | Fixtures & Fittings |
| Y19000 | Computers & Hardware |
| Y20000 | Spare Parts |
| Y21000 | Trees |
| Y22000 | Intangibles Assets |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Vendor) |
| Asset Master |
| Internal Order |

## System Configuration Considerations

- AUC Settlement Profiles

| **Settlement profile YB0****AUC  ****Settlement assets under const.** |
| --- |
| **Actual Costs** | **Default Values** | **Indicators** | **Valid Receivers** |
| To be settled in full | **Allocation Structure** | Y1 | **100%-Validation** | X | **G/L Account** | X |
|  | **Source Structure** |  | **100%-Settlement** | X | **Cost Center** | X |
|  | **Default Object type** | FXA | **Equivalence number** | X | **Order** | X |
|  |  |  | **Amount Settlement** | X | **Fixed Assets** | X |

- Allocation Structure Y1

| **Assignments** | **Sources** | **Settlement cost elements** |
| --- | --- | --- |
|  | **Cost ****Elem.Group** | **All Categories** |
| 01 | Inventory Consumption | YB010 | Inventory Consumption | By Cost Element |
| 02 | Personnel Expenses | YB020 | Personnel Expenses | By Cost Element |
| 03 | Operating Expenses | YB030 | Operating Expenses | By Cost Element |
| 04 | Indirect Expenses | YB040 | Indirect Expenses | By Cost Element |

- Define Other Alternative Reconciliation Account.

| **Special G/L Indicator** | **Description** | **Reconciliation Account** | **Special G/L account** |
| --- | --- | --- | --- |
| R | Vendor Retentions | 20010000 | 18000000 |
| R | Vendor Retentions | 20040000 | 18000000 |
| M | Down Payments, Tangible Assets | 20010000 | 16010000 |
| M | Down Payments, Tangible Assets | 20040000 | 16010000 |

- Internal order types used for Asset Budgeting 

| **Internal Order Types** | **Use** |
| --- | --- |
| **Code** | **Description** | **Used for** |
| Z100 | Investment Capital Expenses (AUC) | Budgeting the AUC or any other asset |

# **Technical/Development Related Items**

	

	N/A	

# **Authorization**** **

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YFI_AA_INTERNAL_ORD_1000 | Internal order Actual 1000 |  |
| YFI_AA_INTERNAL_ORD_2000 | Internal order Actual 2000 |  |
| YFI_AA_INTERNAL_ORD_3000 | Internal order Actual 3000 |  |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Project Management and Expansion Unit employees | Key User |

							1 of 9

								4 of 9
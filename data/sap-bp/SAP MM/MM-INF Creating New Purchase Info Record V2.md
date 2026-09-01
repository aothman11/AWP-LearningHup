# MM-INF Creating New Purchase Info Record V2

# MM-INF Creating New Purchase Info Record

# Process Description

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Maintenance of Supplier price with Material as per AL Watania Poultry Requirement | S | H |
| 02 | Maintenance of Material price with different Supplier’s | S | H |
| 03 | Track Material price with Supplier along with validity period. | S | H |
| 04 | These price information can be used for purchase order input. | S | H |

## Business Process Description

In the standard SAP purchasing info record is maintained as a source of information for Purchasing.

It contains information from material master and some of the information related to its supplier.

Hence Material and Supplier Master is pre-requisite for a purchasing info record.

Purchasing information record can be maintained for each supplier and for a single material if it is being supplied by more suppliers.

Information maintained in purchasing information records is used as default data for purchase orders.

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Supplier price information |
| **Process Input** | Material – Supplier with price relation |
| **Process Output** | Info Record Master data |
| **Process Owner** | Purchasing |
| **Process Volumes** | Daily |
| **Process Frequencies** | 10 |

## Business Process Diagrams

## Process Steps Details and Responsibility Assignment 

 

|  | **Process Steps Description**** ** |
| --- | --- |
|  | **Process Step Description** | **Execution** |
| **ID** |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Supplier Data (Pre-requisite) | BP |  |  |
| 02 | Material Master(Pre-requisite) | MM01 |  |  |
| 03 | Create Info Record | ME11 ME12 ME13 ME1M |  | Purchaser |
|  |  |  |  |  |

## Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 01 | ME1M | Info Record per Material | X |  |
| 02 | ME1L | Info Record per Supplier | X |  |
| 03 | ME1P | Order Price History | X |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 10 | Purchasers |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

## Potential Future Process Improvements (out of scope for this implementation)

N/A

# Functional Solution Design 

## Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **P****urchasing ****Groups** |
| --- |
| **Code** | **Description** |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Supplier) |
| Material Master |
| Pricing Condition |

## System Configuration Considerations

| **Configure Field Attributes per BP Role** |
| --- |
| **Role** | **Tab** | **Field** | **O/M** |
| General | Info Category | Standard/Subcontracting/Consignment | M |
| General | Vendor data | 1st Rem./Exped | M |
| General | Vendor data | 2nd  Rem./Exped | M |
| General | Vendor data | Vendor Material Number | O |
| General | Vendor data | Vendor Material Group | O |
| General | Vendor data | Sales Person | O |
| General | Vendor data | Telephone | O |
| General | Purchase Order Unit Of Measure | Order Unit | M |
| General | Purchase Order Unit Of Measure | Conversion | O |
| Purchase Org. Data1 | Control | Pl.  Deliv. Time | M |
| Purchase Org. Data1 | Control | Purch. Group | 0 |
| Purchase Org. Data1 | Control | Standard QTY | M |
| Purchase Org. Data1 | Control | Minimum Qty | M |
| Purchase Org. Data1 | Control | Maximum Qty. | M |
| Purchase Org. Data1 | Conditions | Net Price | M |
| Purchase Org. Data1 | Conditions | Inco Terms | M |
| Conditions | Validity | Validity from | M |
| Conditions | Condition Supplements | Condition | M |
| Conditions | Info Record Text | Info Record Note | O |
| Conditions | Info Record Note | Purchase Order Text | O |

# Technical/Development Related Items

| **Authorizations** |
| --- |
| **Project** | **SubProject** | **Object** |
| S4P | MM - MM Objects | MM00_INFO_REC | Purchasing Info Record |
| S4P | MM - MM Objects | MM00_INFO_REC_C | Info Record Mass change |
| S4P | MM - MM Objects | MM01_INFO_REC | Purchasing Info Record change |

# Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_MASTER_DATA_ADMIN_ALL | MM: Master Data Admin All Groups |  |
| YMM_MASTER_DATA_ADMIN_BP | MM: Master Data Admin All Groups |  |

# Organizational Change Related Items

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Master Data Responsible At Purchasing Department | Purchasing Key User |

In end user training, we should collect different users for Project Department and repeat the training for every group.
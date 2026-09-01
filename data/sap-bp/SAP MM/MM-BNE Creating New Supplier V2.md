# MM-BNE Creating New Supplier V2

# MM-BNE Supplier Creation Process

## Process Description

Supplier can be created to maintained centralized master data and more transparent with unique number across the system. Further to avoid the duplication creation of Supplier code in system.

Information maintain for supplier such as central data, purchasing data and company code data and owner ship of supplier data can be maintained by Procurement and Finance department.

This information are used for analysis the history record of supplier based on price, delivery and service provided to Al Watania Poultry.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | New Supplier for Al-Watania Poultry Business Requirement | S | H |
| 02 | Create Supplier for the Purchasing process of new materials | S | H |
| 03 | Create Supplier for the purchasing process of the existing materials | S | H |
| 04 | Newly creation suppliers are used for input analysis for purchasing. | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | RFQ/Purchasing |
| **Process Input** | Identified new supplier |
| **Process Output** | Supplier master record |
| **Process Owner** | Purchasing and Finance |
| **Process Volumes** | 2 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Create General Data for supplier | BP | Maintain Business Partner | Supplier Master Data Responsible Purchasing Dep. |
| 02 | Maintained purchasing data information | BP | Maintain Business Partner | Supplier Master Data Responsible Purchasing Dep. |
| 03 | Maintain Company code data information | BP | Maintain Business Partner | Supplier Master Data Responsible Accounting Dep. |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MKVZ | List Of Suppliers - Purchasing | X |  |
| 02 | S_ALR_87010052 | Supplier Master Data Comparison | X |  |
| 03 | YMM005 | Suppliers Master List | X |  |
| 04 | YMM034 | Suppliers Per Company Codes | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim |  | Purchasers |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

N/A

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchasing Groups** |
| --- |
| **Code** | **Description** |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 008 | Constructions Cash |

### Master Data Considerations (including all relevant data relationships)

| **List of ****R****elated Master Data** |
| --- |
| Business Partner (Supplier) |

### System Configuration Considerations

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **External** |
| Y000 | Domestic Suppliers | Y0 | 1000000 | 1999999 | X (during migration only) |
| Y001 | Foreign Suppliers | Y1 | 2000000 | 2999999 | X (during migration only) |
| Y002 | Service & Construction Suppliers | Y2 | 3000000 | 3999999 | X (during migration only) |
| Y003 | Affiliated Companies | Y3 | 4000000 | 4999999 | X (during migration only) |
| Y004 | Government Authorities Payables | Y4 | 7000000 | 7999999 | X (during migration only) |
| Y005 | Trade Payables Domestic - One Time Accounts | Y5 | 5000000 | 5999999 | X (during migration only) |
| Y006 | Employees | Y6 | 8000000 | 8999999 | X (during migration only) |
| Y007 | Banks Payable | Y7 | 9000000 | 9999999 | X (during migration only) |

| **Define Number Assignment for Direction BP to Supplier** |
| --- |
| **Grouping** | **Account group** | **Same Numbers** |
| Z000 | Y000 | X |
| Z001 | Y001 | X |
| Z002 | Y002 | X |
| Z003 | Y003 | X |
| Z004 | Y004 | X |
| Z005 | Y005 | X |
| Z006 | Y006 | X |
| Z007 | Y007 | X |
| Z099 | Y099 | X |

| **Configure Field Attributes per BP Role** |
| --- |
| **Role** | **Tab** | **Field** | **O/M** |
| General | Address | Title | M |
| General | Address | Name | M |
| General | Address | Name2 | O |
| General | Address | Search Term | M |
| General | Address | Street | O |
| General | Address | House No | O |
| General | Address | Postal Code | O |
| General | Address | City | M |
| General | Address | Country | M |
| General | Address | Region | O |
| General | Address | Language | M |
| General | Address | Telephone | M |
| General | Address | Fax | M |
| General | Address | Email | M |
| FI Vendor | Supplier : Account Management | Reconciliation Account | M |
| FI Vendor | Supplier : Payment Transactions | Terms of Payment | M |
| Supplier | Purchasing Data | Order Currency | M |
| Supplier | Purchasing Data | Terms Of Payment | M |
| Supplier | Purchasing Data | Incoterms (Part 1) | M |
| Supplier | Purchasing Data | Incoterms Location 1 | M |
| Supplier | Purchasing Data | Sales Person | O |
| Supplier | Purchasing Data | Telephone | O |
| Supplier | Purchasing Data | Purchasing group | M |
| Supplier | Purchasing Data | Payment Conditions | M |
| Supplier | Purchasing Data | Planned delivery time in days | M |
| Supplier | Purchasing Data | Group for Calculation Schema (Supplier) | M |

## Technical/Development Related Items

	

	N/A	

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_MASTER_DATA_ADMIN_BP | MM: Master Data Admin All Groups | As Rolls Sheet |
| YMM_MASTER_DATA_ADMIN_ALL | MM: Master Data Admin All Groups | As Rolls Sheet |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Master Data Responsible At Finance Department | Purchasing Key User |
| Master Data Responsible At Purchasing Department | Purchasing Key User |

In end user training, we should collect different users for Project Department and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 5 of 6 |
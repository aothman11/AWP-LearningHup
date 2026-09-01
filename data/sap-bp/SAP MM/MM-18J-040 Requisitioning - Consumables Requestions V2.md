# MM-18J-040 Requisitioning - Consumables Requestions V2

# MM-18J-040 Requisitioning – Consumables Requestions

### Business Process Description

This Requisition type to collect the department’s consumables and the creation will be by the inventory controller after collecting all requirements from other departments for example, general maintenance and operational items collected at the first of the year as (plumbing, electrical, mechanical) and some oil & grease items for maintenance purpose and tools purchased based on the consumption

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Collect ,document and Organize Poultry Consumables requirements | S | H |
| 02 | Differentiate between MRP and Consumables Purchase Requisitions | S | H |
| 03 | Follow up requisitions on the system | S | H |
| 04 | Keep the Safety stock for the highly consumed by planning it daily | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Consumables Requirement |
| **Process Input** | Planned Order |
| **Process Output** | Purchase Requisition |
| **Process Owner** | Consumables MRP Controllers |
| **Process Volumes** | 10 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Roles ** |
|  |  |  |  |  |
| 01 | Create New Purchase requisition Manually | ME51N | Create Purchase Requisition | Specialist |
| 02 | Release Purchase Requisition | ME55 ME54N |  | Specialist PR Releasers |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME5A | Purchase Requisition List Displays | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 5 | Consumables MRP Controller |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

Planning Department Must Consider the lead time for Materials

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Purchase Requisition to Order Cycle Time | Number | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 03 | Consumption-Based Planning | MM-CBP |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry Purchasing Organization |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 003 | Spare Parts |
| 005 | General Items |

| **Plant** |
| --- |
| 1010 | Qassim Central |  |
| 1050 | Further Processing |  |
| 1100 | Processing |  |
| 1120 | Feed Mill |  |
| 1140 | Yanbu Grain Hub |  |
| 1150 | Feed Mill Watania1 | Obsolete |
| 1160 | Feed Mill Watania2 - FM3 | Obsolete |
| 1170 | Feed Mill Watania2 - FM6 | Obsolete |
| 1180 | Feed Mill Wadi FM4 | Obsolete |
| 1190 | Feed Mill Wadi FM5 | Obsolete |
| 1200 | Broiler |  |
| 1210 | Hatchery |  |
| 1220 | Parents - Laying |  |
| 1221 | Grading Station - Dulfa | Obsolete |
| 1222 | Grading Station - Wadi | Obsolete |
| 1223 | Grading Station - Kubid | Obsolete |
| 1224 | Grading Station - Shery | Obsolete |
| 1230 | Parents - Rearing |  |
| 1231 | Parents - Laying - Dulfa | Obsolete |
| 1232 | Parents - Laying - Wadi | Obsolete |
| 1233 | Parents - Laying - Kubid | Obsolete |
| 1234 | Parents - Laying - Shery | Obsolete |
| 1241 | Parents - Rearing - Dulfa | Obsolete |
| 1242 | Parents - Rearing - Wadi | Obsolete |
| 1244 | Parents - Rearing - Shery | Obsolete |
| 1250 | C Layer - Laying |  |
| 1260 | C Layer - Rearing |  |
| 1310 | Fleet Central Workshop |  |
| 1410 | Live Operation Maintenance |  |
| 1800 | Qassim Export | Obsolete |
| 1840 | Qassim Agri. | Obsolete |
| 2100 | Transportation | Obsolete |
| 3010 | GP - Central |  |
| 3100 | GP-Hatchery |  |
| 3200 | GP-Laying |  |
| 3300 | GP-Rearing |  |
| 4100 | Qassim Agri. |  |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Business Partner (Supplier) |
| Purchasing Info Record |

### System Configuration Considerations

| Purchase Requisition Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YZ00 | Inv Cntrl Manual Req | Z4 |  |  |

| Purchase Requisition Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| Z4 | 0040000000 | 0040999999 | Internal | 10 |

| **MRP Controller** |
| --- |
| **ID** | **Description** |
| 600 | Consumables Materials |

### Technical/Development Related Items

N/A

### Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PR_ALL_PLANTS_YZ00 | MM: Purchase Requisition Requester Inv Cntrl Manual Req | At Roles Sheet |
| YMM_PR_DISPLAY_YZ00 | MM: Display PR for Inventory Control Manual Request-Dept. | At Roles Sheet |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 1 of 5 |
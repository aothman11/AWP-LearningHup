# MM-BNX-020 Service Procurement Process V2

# MM-BNX-020 Service Procurement

## Process Description

This section describes the basic process for the procurement of externally performed services.

A need for certain services can arise in a user department of your enterprise, within the framework of a project (such as the translation of software) or with regard to regular maintenance work (such as the outsourcing of routine electrical jobs) for instance.

The user department prepare a purchase requisition itself. The requisition is the trigger for procurement activities 

The Purchase requisition document contain a set of service specifications with details of the necessary service or group of services. After that, the purchasing department complete its work activities like sourcing and Quotations.

The successful bidder receives a standard purchase order 

After That, You enter services that have actually been performed by means of service entry sheets. In doing so, you can reference the PO. This procedure accelerates the entry of planned services in particular. Each individual service is recorded together with quantities and values.

After that, one or more responsible persons can check that the work is satisfactory and acceptance carried out by the same individual or department in your enterprise.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Helps to manage resources and monitor costs across the whole range of services. | S | H |
| 02 | Ensure highly automated procurement processes for Services | S | H |
| 03 | Document and Organize Watania Poultry Service Orders and requisitions | S | H |
| 04 | Complete all the Departments requirements for services in an organized and fast way | S | H |
| 05 | Simplify and fasten the Purchase Order creation and follow up Process | S | H |
| 06 | Complete the release orders process systematically | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Requirement for services |
| **Process Input** | Released Purchase Requisition |
| **Process Output** | Accepted Service Entry sheet |
| **Process Owner** | Purchasing Groups |
| **Process Volumes** | 100 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Create service Purchase requisition | ME51N | 1-Create Purchase Requisitions ID F1643 2- Manage Purchase Requisition Professional ID F2229 3-Purchase Requisition IDF1640 | Department Requester Employee (Service) |
| 02 | Monitor service requirements | MSRV2 |  | Service Purchaser Responsible |
| 03 | Call Process - MM-ZM2: Quotation for Procurement |  |  | Service Purchaser Responsible |
| 04 | Create Purchase orders item category D | ME21N | 1-Ordering: Assigned purchase requisition 2-Manage Purchase Requisitions ID F1048 3-Create Purchase Order Via Purchase requisition | Service Purchaser Responsible |
| 05 | Entry and Accept of services actually performed (Create Service Entry Sheet) | ML81N |  | Service Acceptance Responsible |
| 06 | Print Service Entry sheet Acceptance | ML83 |  | Service Acceptance Responsible |
| 07 | Verification of invoices for services | MIRO | 1-Supplier Invoice ID F0346A 2-Manage Supplier Invoices ID F0859 3-Supplier Invoices List ID F1060 | AP Accountant |
|  |  |  |  |  |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MSRV1 | List for Service | X |  |
| 02 | MSRV2 | Service List for Requisition | X |  |
| 03 | MSRV3 | Service List for Purchase Order | X |  |
| 04 | MSRV4 | Service List for RFQ | X |  |
| 05 | ME2S | Services per Purchase Order | X |  |
| 06 | MSRV5 | Service List for Contract | X |  |
| 07 | MSRV6 | Service List for Entry Sheet | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 6 | Purchasing Groups |

### Operational Decisions or Logic within the Process

- إذا كان القسم الطالب للخدمه له (Document Type)  يمكنه إضافة طلب الشراء الخاص به تحت هذا ال(Type)

- أما إذا كان القسم ليس له (Document Type) فيمكنه إستخدام ال(Type)  **Head Office Services  YZ01**.

### Legal Considerations and Company-Specific Policies

The requested service must be described in details to be printed at the RFQs and Purchase orders 

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Average Lead Time of Service Requests | Average Lead Time of Service Requests = (Lead Time of Service Requests) / (Number of Service Requests) Lead Time of Service Requests = Time between Creation of a Service Request and the Setting of the Request Status to Closed-in Hours | Usually Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 02 | External Services | MM-SRV |

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

| **Purchase Group** |
| --- |
| 002 | Services & Project |

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

| **List of related Master Data** |
| --- |
| Business Partner (Supplier) |
| Conditions |
| Output messages conditions |

### System Configuration Considerations

| Purchase  Requisition  Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YZ01 | Head Office Services | Z6 |  |  |

| Purchase Requisition  Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| Z6 | 0037000000 | 0037999999 | Internal | 10 |

- External Services Management

| Define Number Ranges for Service Entry Sheet |
| --- |
| ID | From | To | Internal |
| 01 | 1000000000 | 1999999999 | X |

| Define Internal Number Range for Service Specifications |
| --- |
| ID | From | To | Internal |
| 01 | 0000000001 | 2000000000 | X |

| Assign Number Ranges |
| --- |
| No. Range For Package | No. Range For Entry Sheet |
| 01 | 01 |

| Source Determination and Default Values for Client |
| --- |
| Field | Value |
| Line Number Increment | 10 |
| Unit of Measure at item level | AU |
| Material/Service Group at item level Flag | X |
| Search at service level For Contracts | All Services |
| User Field 1 | User Field 1 |
| User Field 2 | User Field 2 |
| User Field 3 | User Field 3 |
| User Field 4 | User Field 4 |

## Technical/Development Related Items

	N/A	

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_MASTER_DATA_REVIEW_002 | MM: Master Data Review Group Services & Project |  |
| YMM_PO_ALL_002 | MM: Purchase Order Processing Services & Project |  |
| YMM_PO_REL_002_D2 | MM: Purchase Order Services & Project  Division Head Release |  |
| YMM_PO_REPORT_ALL_002 | MM: Purchase order Reports All Plants With Prices Services & Project |  |
| YMM_PR_REPORTS_002 | MM: Purchase Requisition Reports Services & Project |  |
| YMM_PUR_REPORT_002 | MM: Purchasing Documents Reports Services & Project |  |
| YMM_QUOTATION_002 | MM: Quotation Processing Services & Project |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Department Requester Employee (Service) | Purchasing Key User |
| Service Purchaser Responsible | Purchasing Key User |
| Service Acceptance Responsible | Purchasing Key User |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 7 |
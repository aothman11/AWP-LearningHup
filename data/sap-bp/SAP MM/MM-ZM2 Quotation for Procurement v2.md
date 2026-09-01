# MM-ZM2 Quotation for Procurement v2

# Quotation for Procurement

## Process Description

A request for quotation (RFQ) is an invitation extended to a vendor by a purchasing organization to submit a quotation (bid) for the supply of materials or performance of services.

In Purchasing, the RFQ and the quotation form a single document. Prices and conditions quoted by vendors are entered in the original RFQ. If you have issued an RFQ to several vendors, you can have the system determine the most favorable quotation submitted and automatically generate letters of rejection to the unsuccessful bidders. You can also store the prices and terms of delivery from certain quotations in an info record for future accessing.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Manage and compare requests for quotation (RFQs) issued to vendors | S | H |
| 02 | System determine the most favorable quotation submitted | S | H |
| 03 | Document and Organize Watania Poultry Quotations | S | H |
| 04 | System automatically generate letters of rejection to the unsuccessful bidders | S | H |
| 05 | Simplify and fasten the Request for quotations and quotations entry and its follow up Process | S | H |
| 06 | This process will be a start point to use ARIBA network at the future improvements | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | New Source of supply detection Update source of supply Prices on the System |
| **Process Input** | Released Purchase Requisition |
| **Process Output** | Printed request for quotation |
| **Process Owner** | Purchasing Groups |
| **Process Volumes** | 100 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business Responsible** |
|  |  |  |  |  |
| 01 | Create request for quotation | ME41 |  | Purchaser |
| 02 | List quotations | ME4S |  | Purchaser |
| 03 | Print RFQs | ME9A |  | Purchaser |
| 04 | Maintain quotations | ME47 |  | Purchaser |
| 05 | Compare, select and reject vendors | ME49 YPUR01 |  | Purchaser |
| 06 | Maintain source of supply | ME11 |  | Source of Supply Maintainer |
|  |  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | ME4C | RFQs by Material Group | X |  |
| 02 | ME4L | RFQs by Vendor | X |  |
| 03 | ME4M | RFQs by Material | X |  |
| 04 | ME4N | RFQs by RFQ Number | X |  |
| 05 | ME4S | RFQs per Collective Number | X |  |
| 06 | YPUR01 | Comparison Form | X |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 35 | Purchasing Groups |

### Operational Decisions or Logic within the Process

### Legal Considerations and Company-Specific Policies

- All items should contain the detailed data (item number, Items Specs, Part no. For Spare Parts Items , Unit of measure and delivery dates, and delivery place and payment terms)

- Quotation terms and conditions should be mentioned at the RFQ print out

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Supplier response on the RFQ | Difference between RFQ Dead line date and Quotation Submission Date | Minimize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |

### Potential Future Process Improvements (out of scope for this implementation)

N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Purchasing Organization** |
| --- |
| 1000 | Al-Watania Poultry |

| **Purchase Group** |
| --- |
| 001 | Strategic Items |
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 007 | Workshop Pett.Cach |
| 008 | Constructions Cash |

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
| Output messages conditions |

### System Configuration Considerations

| RFQ  Document Type |
| --- |
| ID | Description | Number Range | IMG Activity | Owner |
| YANL | Local Request For Quotation | YL |  |  |
| YANF | Foreign Request For Quotation | YF |  |  |

| RFQ Number Range |
| --- |
| ID | From | To | Internal / External | Item Interval |
| YL | 5600000000 | 5699999999 | Internal | 001 |
| YF | 5700000000 | 5799999999 | External | 001 |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| F-MM-ZM2-001 | Form | YMM_RFQ |
| E-MM-ZM2-002 | LSMW Program | YRFQ_UPL – Upload Quotations Prices Program |

- **LSMW program** to upload Quotation prices automatically on the SAP the program details will be in the WRCIEF document

| **Field S****election Mandatory Fields ** | **Document T****ype** |
| --- | --- |
| Collective Number | YANL | YANF |
| Quotation Submission Date | YANL | YANF |
| Incoterms | YANL | YANF |
| Incoterms Part 2 | YANL | YANF |
| Supplier Quotation Number | YANL | YANF |
| Terms of Payment Key | YANL | YANF |

The Purchaser must fill the Collective Number with the Purchase requisition number and the quotation submission date with the actual date for supplier reply

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Description** |
| 01 | YMM_QUOTATION_001 | MM: Quotation Processing Strategic Items |
| 02 | YMM_QUOTATION_002 | MM: Quotation Processing Services & Project |
| 03 | YMM_QUOTATION_003 | MM: Quotation Processing Spare Parts |
| 04 | YMM_QUOTATION_004 | MM: Quotation Processing Assets |
| 05 | YMM_QUOTATION_005 | MM: Quotation Processing General Items |
| 06 | YMM_QUOTATION_006 | MM: Quotation Processing Projects |
| 07 | YMM_QUOTATION_ALL | MM: Quotation Processing All Purchase Groups |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

| **User G****roups ** | **Trainer** |
| --- | --- |
| Purchasers | Key User |
| Source of Supply Maintainer | Key User |

In the end user training, we will collect different Purchasers and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 6 |
# MM-SL4  Supplier Evaluation (Fiori) V2

# MM-SL4 Supplier Evaluation (Fiori)

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Increase annual savings - total spend by identifying opportunities to improve sourcing | S | H |
| 02 | Improve compliance and risk management by gaining visibility into your supply chain | S | H |
| 03 | Improve spend managed strategically by applying a strategic sourcing approach | S | H |

### Business Process Description

Gain transparency and insight through evaluation of your supplier portfolio.

Get a comprehensive, portfolio-level view of your supplier relationships using our supplier evaluation solutions: 

- Gain the visibility you need to continuously determine the right mix of suppliers to best serve your business objectives and reduce your overall supply risk.

- Classify and segment your suppliers using multiple criteria o flexibly identify and search suppliers.

- Define and monitor relevant sourcing strategies.

| **Process Characteristics** |
| --- |
| **Process Trigger** | Requirement Evaluate suppliers |
| **Process Input** | Supplier Evaluation trigger |
| **Process Output** | Supplier Evaluation Decision |
| **Process Owner** | Purchasing Department |
| **Process Volumes** | 1 |
| **Process Frequencies** | Monthly |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Supplier Evaluation by Quantity |  | Supplier Evaluation by Quantity | Purchasing Manager  Purchaser |
| 02 | Operational Supplier Evaluation |  | Operational Supplier Evaluation | Purchasing Manager  Purchaser |
| 03 | Supplier Evaluation by time |  | Supplier Evaluation by time | Purchasing Manager  Purchaser |
| 04 | Supplier Evaluation by price |  | Supplier Evaluation by price | Purchasing Manager  Purchaser |
| 05 | Overall Supplier Evaluation |  | Overall Supplier Evaluation | Purchasing Manager  Purchaser |
|  |  |  |  |  |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 01 |  | Supplier Evaluation by Quantity |  | X |
| 02 |  | Operational Supplier Evaluation |  | X |
| 03 |  | Supplier Evaluation by time |  | X |
| 04 |  | Supplier Evaluation by price |  | X |
| 05 |  | Overall Supplier Evaluation |  | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 30 | Purchasing Groups |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 01 | Supplier Evaluation Score This KPI gives an overview how the suppliers perform. | % | Maximize |

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Purchasing | MM-PUR |
| 01 | Inventory Management | MM-IM |

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
| 002 | Services & Project |
| 003 | Spare Parts |
| 004 | Assets |
| 005 | General Items |
| 006 | Projects |
| 007 | Workshop Pett.Cach |
| 008 | Constructions Cash |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner Supplier |

### System Configuration Considerations

SAP Recommends: We recommend that you use the SAP HANA reporting capabilities for vendor evaluation based on CDS views and smart business technology.

## Technical/Development Related Items

		

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_SUPL_EVALUATION | AWP - Supplier Evaluation | Gateway Role |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Purchasers | Key User |
| Purchasing Managers | Key User |

In end user training, we should collect different Purchasers and mangers to repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 4 of 5 |
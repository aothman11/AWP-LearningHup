# QM-MD-010 Master Inspection Characteristic-V2

| qm-MD-010 master inspection characteristic |
| --- |

## Definition

A master inspection characteristic (MIC) is created as a master record. This characteristic is intended for frequent use in routings/inspection plans or for evaluation purposes across all inspection plans and can be evaluated independently of an inspection plan.

Master inspection characteristics facilitate and standardize inspection planning. When creating an inspection plan/routing, it is possible to access the data from the inspection characteristic record, as well as to create inspection plan-specific inspection characteristics.

There are two types of MICs:  

		- Qualitative  

		- Quantitative

For qualitative MIC, inspection results are recorded as codes from inspection catalogs, with the valuation for example OK or NOT OK, or as the number of determined results in classes. You do not define tolerance limits or a target value. Accordingly, you can not, for example, record measured values during results confirmation.

A quantitative characteristic is subject to measurement inspections. You can define tolerance limits and a target value for a quantitative characteristic.

***Use***

You use master inspection characteristics in inspection plans, material specifications, and certificate profiles to simplify and standardize data entry.

***Structure***

A master inspection characteristic can contain general data and control data.

		- **General Data:**

- Name of the master inspection characteristic

- Plant

- Reference to class characteristic

- Status

- Language key

- Details of other languages

- Short texts for the master inspection characteristic

- Long texts for the master inspection characteristic

- Classification of master inspection characteristics

- Assigned inspection methods

- Assigned catalogs

- Search field

		- **Control Data:**

- Whether the master inspection characteristic is a qualitative or quantitative characteristic

- Sample details (such as sampling procedure, SPC characteristic, additive sample, destructive sample)

- Information for results confirmation (for example, summarized recording, recording by class, required or optional characteristic, conditional characteristic - this means that the inspection of this characteristic is dependent on either the acceptance or rejection of the previous required characteristic)

- Type of values to be inspected for quantitative characteristics (for example, target value, lower specification limit, upper specification limit)

- Inspection of characteristic attributes for qualitative characteristics

- Details of inspection scope

- Details of documentation in the results recording function

- Other information (such as assignment of test equipment, characteristic for long-term inspection, measured values, calculated characteristic, printing options)

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Using master inspection characteristic for modeling the live operation measurements and lab tests for farms. | S | H |

## Systems List

This list gives an overview about all the current systems that use this master data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Excel | Master Inspection Characteristic | Qassim |

## Data Conversion and Data Cleansing Requirements

Data conversion for production version will be done by building it from scratch to an interim database for consolidation and conversion to be complied with SAP format. For this SAP Legacy System Migration Workbench (LSMW) can be used. Planning and execution is in the responsibility of WI-SYS team.

For cleansing poultry health and production planning key users will collect all master inspection characteristics (lab tests/measurements in farms) in excel sheet template and consultant will consolidate it in one sheet and make validation against plants (departments) to make sure that:

- Master inspection characteristic is included in routings of that plant

- Lower and upper limits are defined in routing if applicable for specific MIC

- Lower and upper limits are defined in routing if applicable for specific MIC

- Include valid unit of measure

## Master Data Ownership

Maintenance of master inspection characteristic will be the responsibility of production planning master data administrator per department. 

## Authorization/Security Considerations

Maintenance of the master data will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## Organization Impact Considerations

Master inspection characteristic master records is defined with the following areas.

- Department (**Plant**** level**) 

## Configuration Considerations

| **Preset**** Indicators** |
| --- |
| **Code** | **Description** | Quantitive | Lower limit | Upper Limit | Required | Sample | Recored Measure values | Scope Not fixed | RR Change Docs |
| ZL01 | AWP Atribute Req. Smple |  |  |  | X | X |  | X | X |
| ZN01 | AWP Qnt. Req. Both Lmt Smple | X | X | X | X | X | X | X | X |
| ZN02 | AWP Qnt. Req. Both Lmt No Smple | X | X | X | X |  | X | X | X |
| ZN03 | AWP Qnt. Req. Upr Lmt No Smple | X |  | X | X |  | X | X | X |
| ZN04 | AWP Qnt. Req. No  Lmt No Smple | X |  |  | X |  | X | X | X |
| ZN05 | AWP Qnt. Req. Both Lmt Smple | X | X | X | X | X | X | X | X |
| ZN06 | AWP Qnt. Req. Lwr Lmt Smple | X | X |  | X | X | X | X | X |

| **Catalog**** ****&**** Code Groups** |
| --- |
| **Catalog** | **Code Group** | **Code** | **Text for Code** |
| 1 | ACPT1 | ACPT | Accepted |
|  |  | RJCT | Not Accepted |
|  |  | ZNA | Not Applicable |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 2 of 3 |
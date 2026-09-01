# MM-SER Creating New Service Master V2

|  |
| --- |

# MM-SER CREATING NEW SERVICE MASTER

# Process Description

Service Master Record is the part of Master data with in External Service Management and services as a source of data to draw upon when creating the Service specifications.  

This enables to save time and reduce the frequency of errors. Services are meant for direction consumption and it cannot be store as inventory. Different kind of service use by Al Watania Poultry like Maintenance, painting, manpower work types of service related works.

A service master record contains following information: 

- Activity Number

- Service Text (Long and Short)

- Base unit of measure

- Material Group

- Valuation class

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Hiring external services for AL Watania Poultry works. | S | H |
| 02 | Tracking for service when needed | S | H |
| 03 | Storing the service master for Purchasing analysis | S | H |
| 04 | Storing services Master data for  frequently used services | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Initiate for regular service purchase |
| **Process Input** | Identified Services |
| **Process Output** | Service Master data |
| **Process Owner** | Purchasing |
| **Process Volumes** | Monthly |
| **Process Frequencies** | 20 |

## Business Process Diagrams

## Process Steps Details and Responsibility Assignment 

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **FIORI Application** | **Business ****Roles** |
|  |  |  |  |  |
| 01 | Identified the services | Manual |  | Purchaser |
| 02 | Collect The Service Data | Manual |  | Purchaser |
| 03 | Create Service Master | AC03 |  | Purchaser |
|  |  |  |  |  |

## Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **Standard** | **Fiori App** |
| 01 | AC06 | Service list | X |  |
| 02 | AC03 | Service Master | X |  |

## Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim |  | Purchasers |

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
| 002 | Services & Project |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Service Master |

## System Configuration Considerations

| **Configure Field Attributes per BP Role** |
| --- |
| **Role** | **Tab** | **Field** | **O/M** |
| General | Activity Number | Service Description | M |
| General | Service Category | General Services | M |
| General | Base Unit Of Measure | Base Unit Of Measure | M |
| General | Basic Data | Mat/Srv.Grp | M |
| General | Valuation Class | Service | M |
| Purch.Data. | Purchasing Data | Purchasing status | O |
| Purch.Data. | Purchasing Data | Valid from | O |
| Purch.Data. | Purchasing Data | EAN Category | O |
| Purch.Data. | Purchasing Data | EAN/UPC | O |

# Technical/Development Related Items

	

	N/A	

# Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** | **Authorization Levels** |
| YMM_PUR_SERVICE_MASTER | Service Master Record Purchasing |  |

# Organizational Change Related Items

## Training Requirements

Prerequisites:

- SAP Navigation.

| **User groups ** | **Trainer** |
| --- | --- |
| Service Master Data Responsible At Purchasing Department | Purchasing Key User |

In end user training, we should collect different users for Purchasing and Project Department for training group.
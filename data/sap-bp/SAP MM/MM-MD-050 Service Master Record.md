# MM-MD-050 Service Master Record

| MM-MD-050 Service Master Record |
| --- |

## Definition 

Serves the service master record counts as part of the master data within External Services Management and serves as a source of data for you to draw upon when creating service specifications. This enables you to save time and reduces the frequency of errors since you need only enter the complete service descriptions in the service master record once.

 

A service master record contains the following principal information for the unique description of service:

- Service number

- Service category

- Descriptive texts (short and long text)

- The base unit of measure

- Material group

- Valuation class

	

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Managing of service master Purchasing | S | H |
| 02 | Some fields will be mandatory for reporting purpose | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | List of Services from Historical data | Qassim |

## Data Conversion and  Data Cleansing Requirements

Services conversion done on SAP manually by creating all new Services to Production server directly according to the requisitions from all departments.

## Master Data Ownership

Master Data Management (MDM) team located in Qassim will administrate service master centrally.

## Authorization/Security Considerations

Maintenance of service master data will be centrally. For this, transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

A global Master Data Management Team holds the governance and overall responsibility for service Master. 

| **Key Control Levels** | **Org. Level** | **Ownership** | **C****omment** |
| --- | --- | --- | --- |
| Service master | Client | MDM |  |

## Data Archiving Requirements

| **Data** | **Length of Time (Years)** |
| --- | --- |
| Service master | 10 |

## Organization Impact Considerations

Service master records divided into the following areas so that All Company departments will see the services on client level

## Configuration Considerations

| **Account Groups and BP Groupings** |
| --- |
| **Account Group / BP Groupings** | **No-ID** | **From** | **TO** | **Internal** |
| ALL | Complete service | 03 | 000000000003000000 | 000000000003999999 | X |
| SERV | Service: purchasing | 03 | 000000000003000000 | 000000000003999999 | X |

## Reports

| **Reports** |
| --- |
| **Code** | **Description** |
| AC06 | Service List |

| Explore Phase – MM Business Process Document |
| --- |
| Confidential | Page 2 of 3 |
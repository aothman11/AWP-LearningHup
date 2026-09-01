# MM Digital sign - Reservation V4

| MM-90: Digital sign – cost Center Reservation 201 |
| --- |

## Process Description

Digital sign solution developed by Wisys Company this solution helps the business to control and monitor the flow of approval procedure, also allow you to complete approvals of documents faster on real-time of signing and paper less.

Digital sign of reservation is a process between stock keeper and reservation requester to make sure the requester received the actual requested quantity. 

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Reservation created on SAP | S | H |
| 02 | Material document of goods issue must be posted | S | H |
| 03 | Material documents of goods issue will be Signed by the requester | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Issuing Goods from Storage Location to cost center |
| **Process Input** | New 201 Material Document |
| **Process Output** | Signed Material Document |
| **Process Owner** | Cost center requester |
| **Process Volumes** | 100 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

                          

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** |
|  |  | **T-Code** | **Description ** | **Business Role ** |
|  |  |  |  |  |
| 01 | Create Reservation | MB21 | Create a Reservation Mvt 201. | Requester |
| 02 | Post Goods issue | MIGO | Post Goods issue for Reservation. | Stock keeper |
| 03 | Sign The Document | FIORI | Sign a Document | Requester |

### Reports

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | MB51 | Material Document Digital Sign Status | X |  |
| 02 | Digital Signature App | Display all material document created by user |  | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| All Company Locations |  |  |

### Operational Decisions or Logic within the Process

## The signer should not be able to falsely 

Interface of the process through FIORI 

### Legal Considerations and Company-Specific Policies

**لا يمكن للموقع ان ينكر التوقيع حيث يتم ربط كل توقيع باسم المستخدم الخاص بكل ****موظف**** على النظام ****.**

### Reference to Key Process Changes and Process KPIs

## N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Inventory Management | MM-IM |
| 02 | Reservation | MM-IM-RS |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1010 | Qassim Central |
| 1050 | Further Processing |
| 1100 | Processing |
| 1120 | Feed Mill |
| 1140 | Yanbu Grain Hub |
| 1200 | Broiler |
| 1210 | Hatchery |
| 1250 | C Layer - Laying |
| 1260 | C Layer - Rearing |
| 1480 | Jeddah Branch |
| 1490 | Qassim Branch |
| 1500 | Riyadh Branch |
| 1510 | Dammam Branch |
| 1520 | Abha Branch |
| 1530 | Medina Branch |
| 1540 | Taif Branch |
| 1550 | Baljurashi Branch |
| 1560 | Najran Branch |
| 1570 | Sakaka Branch |
| 1580 | Tabuk Branch |
| 1590 | Mecca Branch |
| 1600 | Al Ahsa Branch |
| 1610 | Hafar Al Batin Branch |
| 1630 | Addawadmi Branch |
| 1640 | Jazan Branch |
| 1650 | Yanbu Branch |
| 1660 | Hail Branch |
| 3010 | GP - Central |
| 4100 | Qassim Agri. |

### Master Data Considerations (including all relevant data relationships)

| **List of R****elated Master Data** |
| --- |
| Material Master |
| Cost Center Master |

### System Configuration Considerations

TO assign cost center to the user go thru Tcode: 	

| **Digital Sign Cost Center Configuration** |
| --- |
| **Seq No** | **MvT** | **controlling area** | **Cost Center ** | **Res Type** | **Responsible ID ** |
| 1 | 201 | WAPO | 12071 | US User | User ID |
| 1 | 201 | WAPO | 12072 | US User | User ID |

## Technical/Development Related Items

- New fields added in the header in MIGO

| **No** | **Table**** ** | **Field** |
| --- | --- | --- |
| 1 | /WDS/MD_HEAD | DS_STATUS |
| 2 | /WDS/MD_HEAD | DS_SIGNED_BY |
| 3 | /WDS/MD_HEAD | DS_SIGNED_TIME |
| 4 | /WDS/MD_HEAD | DS_SIGNED_DATE |
| 5 | /WDS/MD_HEAD | /WDS/DS_NOTES |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Description** |
| YMM_RES | MM: Reservation Requester |
| YMM_STK_KPR | MM: Stock Keeper |
| /WDS/DGTLSIGNCRT_ROLE | Ware house agent |  |  |
| /WDS/DGTLSIGNREQ_ROLE | Receiver/driver |  |  |

Note: Need to add authorization object (/WDS/CST) to the role /WDS/DGTLSIGNREQ_ROLE 

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User G****roups ** | **Trainer** |
| --- | --- |
| Requester | Key User |
| Stock Keeper | Key User |

In end user training, we should collect different Stock keepers, maintenance and projects engineers into three or four groups and repeat the training for every group.	

| Explore Phase – MM Business Process Document |
| --- |
|  | Page 5 of 6 |
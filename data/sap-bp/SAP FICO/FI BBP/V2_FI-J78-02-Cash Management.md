# V2_FI-J78-02-Cash Management

| **Cash Management** |
| --- |

# **Process Description**

SAP Cash Management enables an organization’s cash or treasury department to manage bank accounts centrally, overview the cash daily operations and long-term liquidity trends accurately and precisely. Cash managers can easily and intuitively get a high-level overview and detailed insight into bank accounts, cash position and cash flows, enabling them to make decisions and take actions directly

## Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Monitor Cash Position | S | H |

## Business Process Description

| Process Characteristics |
| --- |
| Process Trigger | Cash Position / Cash Liquidity |
| Process Input | Cash transactions from FI modules |
| Process Output | Cash Position / Cash Liquidity report |
| Process Owner | Cash managers |
| Process Volumes | 10 |
| Process Frequencies | Daily |

## Process Step Detailed Requirements & Solution

| **Process Step Description** |
| --- |
| ID | Process Step Description | Execution | Roles |
|  |  | T-Code | Cash Manager |
| Trigger | Cash issue order | Manual |  |
| 1 | Display Cash Position | FF7AN | R |
|  |  |  |  |
| 2 | Display Liquidity Forecast | FF7BN | R |
|  |  |  |  |

## Locations Where this Business Process is Performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim | 1 | Cash Manager |

## Operational Decisions or Logic within the Process

N/A

## Legal Considerations and Company-Specific Policies

N/A

## Reference to Key Process Changes and Process KPIs

N/A

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | GL Accounts | FI-GL |
| 02 | Accounts Receivables | FI-AR |
| 03 | Accounts Payables | FI-AP |
| 04 | Material Management – PO & PR | MM-PO |
| 05 | Sales and Distribution  – Sales Orders | SD-SD |

## Potential Future Process Improvements (out of scope for this implementation)

N/A

# **Functional Solution Design**** **

## Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |
| 2000 | Al-Watania Transportation |
| 3000 | Al-Watania Grandparent |
| 4000 | AWP Agriculture |
| 5000 | Al-Watania Super Market |

## Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| GL account |
| Vendor |
| Customer |

## System Configuration Considerations

- Define Value Date Default

| **Company Code** | **Propose Value Date(Todays date)** |
| --- | --- |
| 1000 | X |

- Define Source Symbols

| **Source** | **Cash pos.** | **Description** | **Short text** |
| --- | --- | --- | --- |
| BNK | X | Bank Accounting | Bank acctg |
|  | (Cash Position) |  |  |
| IHC | X | In-House Cash | IHC |
|  | (Cash Position) |  |  |
| MMF | No entry | Materials Management | MM |
|  | (Liquidity Forecast) |  |  |
| PSK | No entry | Subledger Accounting | Sub. Acctg |
|  | (Liquidity Forecast) |  |  |
| REM | No entry | Real Estate Management | RealEstate |
|  | (Liquidity Forecast) |  |  |
| SDF | No entry | Sales and Distribution | Sales |
|  | (Liquidity Forecast) |  |  |

- Planning Levels for G/L Accounts

| **Level** | **Source** | **Short text** | **Planning level long text** |
| --- | --- | --- | --- |
| F0 | BNK | FI Banks | Main Bank Account |
| B1 | BNK | In-Cheques | In-Cheques |
| B2 | BNK | In-transfer | In-transfer |
| B3 | BNK | In-Cash | In-Cash |
| B4 | BNK | Out-Cheques | Out-Cheques |
| B5 | BNK | Out-Transfer | Out-Transfer |
| B6 | BNK | Out-Cash | Out-Cash |
| B7 | BNK | Loans | Loans |
| B8 | BNK | overdraft | overdraft |
| B9 | BNK | LG | Letter of guarantee |
| B10 | BNK | LC | Letter of Credit |
| CL | BNK | Concentrn | Cash Concentration |
| M1 | MMF | Purch.Req. | Purchase Requisition |
| M2 | MMF | Pur. Order | Purchase Order |
| M3 | MMF | SchedAgree | Scheduling Agreement |
| S1 | SDF | Order | Sales Orders |
| CP | BNK | Cust.Apymnt | Customer Advanced Payment |
| VP | BNK | Ven.Dpymnt | Vendor Down Payment |
| VI | BNK | Emp.Imprest | Employee's Imprest |

- Planning Groups for G/L Sub ledgers

| **Plan. grp** | **Level** | **Short text** | **Description** |
| --- | --- | --- | --- |
| V1 | F1 | Domestic | Domestic Goods  (A/P) |
| V2 | F1 | Foreign.PH | Foreign Goods  (A/P) |
| V3 | F1 | HR | Personnel costs |
| V4 | F1 | SERV | Domestic Service (A/P) |
| V5 | F1 | CONT | Domestic Contractors |
| V6 | F1 | S.Loan | Vendor short Loans |
| V7 | F1 | V.Loan | Vendor Long Loans |
| C1 | F1 | PRIV.Cust | Private Customers |
| C2 | F1 | Foreign.Cust | Foreign customers |

# **Technical/Development Related Items**

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** | **Item Code** |
| J_FI_10_01 | Job | Build Cash Flows from FI & MM | FCLM_FLOW_BUILDER |

	

# **Authorization**** **

| **Authorizations** |
| --- |
| ID | Authorization | Comments |
| 01 | YFI_CASH_MANAGEMNT | Cash and Liquidity Management |

# **Organizational Change Related Items**

## Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Cash Manager | Key User |

								3 of 4

							1 of 4
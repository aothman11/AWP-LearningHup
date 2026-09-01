# PP-300 Agriculture Execution_V2

| PP-300: Agriculture Execution |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 10 | Calculate Actual product cost | S | H |
| 20 | Receive actual stock from agriculture production | S | H |
| 30 | Handle agriculture products cycle in standard way end to end | S | H |

### Business Process Description

In this process, we make a daily/production based repetitive production transaction to receive the produced stock for agriculture products, to be able to add the sales figures and quantity sent to food store and restaurant.

| Process Characteristics |
| --- |
| Process Trigger | Daily, need to enter agriculture products produced quantity |
| Process Input | Products Produced quantity |
| Process Output | Confirmations, material documents, Billing |
| Process Owner | Agriculture Store Keeper |
| Process Volumes | 300 collective GR confirmation, sales order, delivery, billing |
| Process Frequencies | Daily |

### Business Process Diagrams

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** |
| Trigger | Daily need to enter agriculture products produced quantity |  |  |  |  |
| 010 | Goods Receipt from REM collective confirmation | MF42N | Collective Entry of Confirmations | Make collective confirmation for each finished product. In the relative **posting date** | SFC Responsible |
| 020 | Create Sales order | VA01 | Manage Sales Orders | Create sales order for agricultrure customers. With relative requested **delivery date ****&**** pricing date.** | Sales Responsible |
| 030 | Create Delivery & Goods issue | VL10C VL06G |  | Create delivery with respect to sales order & Goods issue the products to customer. With relative **Document date,**** ****Planned GI**** date**** ****&**** Actual GI Date****.** | Stock Keeper |
| 040 | Create billing | VF01 VF04 |  | Create billing | Accounts Receivable |
| Output | REM Confirmations, Billing |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 4 | Stock Keeper |

### Operational Decisions or Logic within the Process

- Products with no BOM and only routing

- Work center: Agriculture with activity ZVALUE

- In routing, we record the price as distribution factor to distribute the agriculture cost center cost to the Agriculture products.

- Finished products given to restaurant to be transferred with STO from company 4000 plant 4100 Agriculture finished store to food store company 1000 plant 1010 and from there issuing on the restaurants cost center.

- All raw materials & packaging to be issued from raw material storage location to agriculture cost centers.

- Review and update products prices conditions on monthly basis. 

### Legal Considerations and Company-Specific Policies

N/A

### Reference to Key Process Changes and Process KPIs

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 1 | REM | PP-REM |
| 2 | Sales orders | SD-SLS |
| 3 | Inventory Management | MM-IM |
| 4 | Standard Cost Estimate | CO-PC-PCP |
| 5 | Delivery | LE-SHP |
| 6 | Billing | SD-BIL |

### Potential Future Process Improvements (out of scope for this implementation)

- Implement vertical full scope for live operation & BOM to all agriculture departments.

- Implement van sales for agriculture products. 

## Functional Solution Design 

### Organization Structure Considerations

| **Company code** |
| --- |
| 4000 | AWP Agriculture |

| **Plant** |
| --- |
| 4100 | Agriculture Plant |

| **Profit Center** |
| --- |
| 4100 | AWP Agriculture |
| 4200 | Vegetable |
| 4300 | Fruit |
| 4400 | Fish |
| 4500 | Apiaries |
| 4600 | Forage |
| 4700 | Palm |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| Work Center |
| Routing |
| Production version |
| Price condition |
| Customers |
| Suppliers |
| Batch master record |

### System Configuration Considerations

- Work center Category (ZA1 - Agri Farm )

- Standard value Key (ZAG1 - Agriculture - AWP)

- Standard parameter (ZZ1 – Value)

## Technical/Development Related Items

N/A

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comment** |
| 10 | SFC Responsible |  |
| 20 | Sales Responsible |  |
| 30 | Accounts Receivable |  |
| 40 | Stock Keeper |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 4 of 5 |
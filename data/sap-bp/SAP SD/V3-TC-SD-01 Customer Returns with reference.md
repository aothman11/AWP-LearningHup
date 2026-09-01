# V3-TC-SD-01 Customer Returns with reference

| V3-TC-SD-BDD-002 Customer Returns with reference |
| --- |

| **Project Identification** |
| --- |
| **Project Name** | **Project Type** |
| S4P Upgrade 2209 | Upgrade Project |
| **Customer Name** |
| Al-Watania Poultry Al-Watania Grand Parents |
| **Created By** | **Service Partner(s)** |
| Mutaz As’ad | Wi-Sys |

| **Process Name** | Customer Returns |
| --- | --- |
| **Test pre-conditions** | Master data created (customers , materials and conditions) |
| **Test Type** | Manual |
| **TC Description** | Testing of Customer Returns with reference Order type  YRE1 |

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** | **Comments** |
|  |  | **T-Code** | **FIORI Application** | **Sales representative** | **Internal Sales Representative** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** | **Driver** | **Warehouse Clerk** |  |
| Trigger | Customer Return |  |  | R |  |  |  |  | R | I |  |
| 01 | Count Returned Materials Quantities and Batches | Manual | Manual |  | I |  |  |  |  | R |  |
| 02 | Create Return Order | VA01 | Manage Sales Orders |  | R |  |  |  |  |  |  |
| 03 | Enter PO Number | VA01 | Manage Sales Orders |  | R/A |  |  |  |  |  |  |
| 04 | Enter Order Reason | VA01 | Manage Sales Orders |  | R | I |  |  |  |  |  |
| 05 | Create Return Delivery | VL10C | Create Outbound Deliveries |  |  | R |  |  |  |  |  |
| 06 | Check Batches | Manual | Manual |  |  | R/A |  |  |  |  |  |
| 07 | Post Goods Receipt | VL06G | My Outbound Delivery Monitor |  |  | R | I |  |  |  |  |
| 08 | Billing | VF04 | Create Billing Documents |  |  |  | R | I |  |  |  |
| Output | Credit memo created and trigger for A/R incoming payment |  |  |  |  |  |  | R |  |  |  |

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | YSD001 | Customers List | X |  |
| 02 | YSD002 | Stock Overview by CAR | X |  |
| 03 | YSD003 | List of sales orders | X |  |
| 04 | YSD004 | List of Deliveries | X |  |
| 05 | YSD005 | Sales Order Status | X |  |
| 06 | YSD007 | Sales Orders items | X |  |
| 07 | YSD009 | List of billing documents - items | X |  |
| 08 | YSD010 | Profitability by Material | X |  |
| 09 | YSD015 | Price List | X |  |
| 10 | YSD018 | Billing List - Net Sales | X |  |
| 11 | MB52 | Display Warehouse Stocks of Material | X |  |

| Test Cases |
| --- |
| Confidential | Page 1 of 2 |
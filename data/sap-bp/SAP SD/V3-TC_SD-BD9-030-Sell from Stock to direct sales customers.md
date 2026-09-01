# V3-TC_SD-BD9-030-Sell from Stock to direct sales customers

| V3-TC-SD-BD9-030-Sell from Stock to direct sales customers |
| --- |

| **Project Identification** |
| --- |
| **Project Name** | **Project Type** |
| S4P Upgrade 2209 | Upgrade Project |
| **Customer Name** |
| Al-Watania Poultry Al-Watania Grand Parents Al-Watania Agricultural |
| **Created By** | **Service Partner(s)** |
| Mutaz As’ad | Wi-Sys |

| **Process Name** | Sell from Stock |
| --- | --- |
| **Test pre-conditions** | Master data created (customers , materials and conditions) |
| **Test Type** | Manual |
| **TC Description** | Testing of sell from stock to direct sales customers Sales area   1000/20/00 Order type  YOR1 |

| **Process Steps Description ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** | **Comments** |
|  |  | **T-Code** | **FIORI Application** | **Sales Representative** | **Internal Sales Rep.** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** | **Driver** |  |
| Trigger | Receive order from customer by e-mail , fax , phone or by hand |  |  |  |  |  |  |  |  |  |
| 10 | Record customer order in company template | Manual | Manual | R | I |  |  |  |  |  |
| 20 | Sales order entry | VA01 | Manage Sales Orders |  | R | I |  |  |  |  |
| 30 | Items due for delivery | VL10C | Create Outbound Delivery with Order Reference |  |  | R |  |  |  |  |
| 40 | Create delivery document | VL10C | Create Outbound Delivery with Order Reference |  |  | R |  |  |  |  |
| 50 | Physical picking and check batches | Manual | Manual |  |  | R/A |  |  |  |  |
| 60 | Post goods issue | VL06G | Create Outbound Delivery with Order Reference |  |  | R/A | I |  |  |  |
| 70 | Generate billing document | VF04 | Create Billing Document Worklist |  |  |  | R/A |  | I |  |
| 80 | Sign original and 4 copies from the invoice | Manual | Manual |  |  |  | R |  | A |  |
| 90 | Deliver goods and original copy to customer and get customer sign on the other 3 copies | Manual | Manual |  |  |  |  |  | R/A |  |
| 100 | Receive customer Proof of delivery ( Signed Billing Document) | Manual | Manual |  |  |  |  | R | A |  |
| Output | Billing document created and trigger for A/R incoming payment |  |  |  |  |  |  |  |  |  |

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
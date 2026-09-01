# V3_TC-SD-BD9-001-Sell from Stock to distributers

| TC-SD-BD9-001-Sell from Stock to Distributers |
| --- |

| **Project Identification** |
| --- |
| **Project Name** | **Project Type** |
| S4P | Implementation Project |
| **Customer Name** |
| Al-Watania Poultry |
| **Project Manager ** | **Service Partner(s)** |
| Magdy Abul-Hassan | WiSys |

| **Process Name** | Sell from Stock |
| --- | --- |
| **Test pre-conditions** | Master data created (customers , materials and conditions) |
| **Test Type** | Manual |
| **TC Description** | Testing of sell from stock to Distributers Sales area   1000/10/00 Order type  YOR2 |

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

| Test Cases |
| --- |
| Confidential | Page 1 of 2 |
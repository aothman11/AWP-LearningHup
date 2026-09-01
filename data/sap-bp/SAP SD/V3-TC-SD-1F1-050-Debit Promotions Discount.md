# V3-TC-SD-1F1-050-Debit Promotions Discount

| V3-TC-SD-1F1-004-debit Memo-Debit Promotions Discount |
| --- |

| **Project Identification** |
| --- |
| **Project Name** | **Project Type** |
| S4P Upgrade 2209 | Upgrade Project |
| **Customer Name** |
| Al-Watania Poultry |
| **Created By** | **Service Partner(s)** |
| Mutaz As’ad | Wi-Sys |

| **Process Name** | Debit Promotions Discount Processing |
| --- | --- |
| **Test pre-conditions** | Master data created (customers , materials and conditions) |
| **Test Type** | Manual |
| **TC Description** | Testing of Debit Memo Processing Debit Memo Promotions Discount Order type  YDR4 |

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Internal Sales Representative** | **Billing clerk** | **A/R Accountant** |
| Trigger | Customer to receive debit |  |  |  |  |  |
| 01 | Create Debit Memo Request | VA01 | Manage Sales Orders | R |  |  |
| 02 | Create Debit Memo | VF04 | Create Billing Document Work list |  | R | I |
| Output | Debit memo generated and trigger to A/R |  |  |  |  |  |

| **Retports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | YSD001 | Customers List | X |  |
| 02 | YSD002 | Stock Overview by CAR | X |  |
| 03 | YSD003 | List of sales orders | X |  |
| 04 | YSD005 | Sales Order Status | X |  |
| 05 | YSD007 | Sales Orders items | X |  |
| 06 | YSD009 | List of billing documents - items | X |  |
| 07 | YSD018 | Billing List - Net Sales | X |  |
| 08 | UKM_MALUS_DSP | SAP Credit Management: Credit Exposure List | X |  |

| Test Cases |
| --- |
| Confidential | Page 1 of 2 |
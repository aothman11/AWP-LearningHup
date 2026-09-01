# V3_SD-BD9-010 Sell from Stock

| SELL FROM STOCK |
| --- |

## Process Description

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | One serial ( Number Range ) across all branches | S | H |
| 02 | Any sales order should has only one delivery document , no partial delivery and no over delivery | S | H |
| 03 | No Manual price or discounts in sales order expect in agriculture sales orders. | S | H |
| 04 | No saving for incomplete order | S | H |
| 05 | Availability check should be on storage location and batch level not Plant level and the batch should be determined in sales order automatically based on the nearest expiration date | S | H |
| 06 | Ability to add discounts to the near expired batches, for example add 2% discounts for the batches that will expire in 4 months. | S | M |
| 07 | Differentiate between billing and credit memos number ranges | S | H |
| 08 | No fraction in sales order quantity, for example it is not allowed to order 0.5 PC | S | H |
| 09 | Hide item cost from conditions tab | G | H |
| 10 | Determine the payer of chain customers automatic and the credit limit check at the payer level | S | H |

### Business Process Description

The process starts when the Sales Representative receive order from customer and inform the Internal Sales Representative (ISR).

 The ISR start with sales order entry. Depending on the customer and the material, various special events take place during order entry, such as customer or material pricing, availability check, and credit check.

If enough material exists in the required storage location, the process proceeds normally. If not, a stock movement takes place or reject sales order items. 

Once picked, the physically shipped quantity and batches must be registered in the system to ensure that there are no differences between the sales order and the delivery document. 

After the completion of picking, the Shipping Specialist relieves the inventory. This inventory relief is the actual recording of the physical quantity that is being shipped to the customer. The cost of goods sold is recorded in financial accounting.

Once the inventory is relieved, you can invoice the delivery and record the revenue and the cost of goods sold in management accounting. 

| **Process Characteristics** |
| --- |
| **Process Trigger** | Customer Order by email, fax, phone or by hand |
| **Process Input** | Sales order entry (Customer, materials and Quantities ) |
| **Process Output** | Billing document number and accounting documents generated |
| **Process Owner** | Internal Sales Representative |
| **Process Volumes** | Around 700 orders / day |
| **Process Frequencies** | Daily |

### Business Process Diagrams

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Sales Representative** | **Internal Sales Rep.** | **Shipping Specialist** | **Billing clerk** | **A/R Accountant** | **Driver** |
| Trigger | Receive order from customer by e-mail , fax , phone or by hand |  |  |  |  |  |  |  |  |
| 01 | Record customer order in company template | Manual | Manual | R | I |  |  |  |  |
| 02 | Sales order entry | VA01 | Manage Sales Orders |  | R | I |  |  |  |
| 03 | Items due for delivery | VL10C | Create Outbound Deliveries |  |  | R |  |  |  |
| 04 | Create delivery document | VL10C | Create Outbound Deliveries |  |  | R |  |  |  |
| 05 | Physical picking and check batches | Manual | Manual |  |  | R/A |  |  |  |
| 06 | Post goods issue | VL06G | My Outbound Delivery Monitor |  |  | R/A | I |  |  |
| 07 | Generate billing document | VF04 | Create Billing Documents |  |  |  | R/A |  | I |
| 08 | Sign original and 4 copies from the invoice | Manual | Manual |  |  |  | R |  | A |
| 09 | Deliver goods and original copy to customer and get customer sign on the other 3 copies | Manual | Manual |  |  |  |  | A | R |
| Output | Billing document created and trigger for A/R incoming payment |  |  |  |  |  |  |  |  |

| **Monitoring Reports** |
| --- |
| **Name** | **Comment** |
| Sales Order Fulfillment Issues | Fiori Application |
| Order-to-Cash Performance - Times Series. | Fiori Application |
| Order-to-Cash Performance - Last 28 Days | Fiori Application |
| Order-to-Cash Performance Overview Page | Fiori Application |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Jeddah | 4 | Branch Manager |
| Qassim | 3 | Branch Manager |
| Riyadh | 4 | Branch Manager |
| Dammam | 2 | Branch Manager |
| Abha | 2 | Branch Manager |
| Madina | 2 | Branch Manager |
| Taif | 2 | Branch Manager |
| Bolgorashi | 2 | Branch Manager |
| Nagran | 2 | Branch Manager |
| Sakaka | 2 | Branch Manager |
| Tabuk | 2 | Branch Manager |
| Mekka | 3 | Branch Manager |
| Ehsaa | 2 | Branch Manager |
| Hafr elbatin | 2 | Branch Manager |
| wadi addawaser | 2 | Branch Manager |
| Addawadmi | 2 | Branch Manager |
| Jizan | 2 | Branch Manager |
| Yanboa | 2 | Branch Manager |
| Hael | 2 | Branch Manager |

### Operational Decisions or Logic within the Process

- No change in quantities or batches should be done in delivery document, any change should be done on sales order by ISR.

- The nearest expire batch should be determined by default in sales order, and the ISR may change the determined batch based on the business case.

- It is mandatory to enter customer PO number in sales order as reference, the ISR is responsible to enter and verify this number.

- If the credit check result is "Not Ok", the ISR should inform the Credit Controller to release or reject the sales order.

- The ISR will not have an authority to delete sales order, for sales order cancellation he should choose one of the valid rejection reason.

- In Agriculture orders the ISR enter the sales price manually.

- For distributers, the default delivering plant will be Qassim plant but the sales order still created from the ordering office.

- At the end of the day the ISR should review and solve any sales order issue.

### Legal Considerations and Company-Specific Policies

- Sales order document shouldn't be used as external document, we should tag in printout that it is not allowed for external use.

- Original and 4 copies from the invoice will be signed from the driver and he is responsible to get the customer sign on them and deliver the original to customer.

Please refer to "**Management and Sales Policies for Sales Department - Al-****Watania**** Poultry – 2016**", from page 50 to page 61. 

### Reference to Key Process Changes and Process KPIs

- Sales order document will not be considered as invoice like the old system, Billing document will be generated after Physical post goods issue.

- ISR will not has any authority to issue stock from warehouse stock like old system, it is the responsibility of Shipping Specialist.

- Current printers will be changed, either A4 printers or dot matrix printers that support PDF printing (PCL or post script).

- For smooth process flow, the ISR location will be near to warehouse, not in finance building.

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **Unit ****of Measure** | **Direction of Improvement** |
| 01 | Completed sales orders | % | Maximize |
| 02 | Blocked sales orders for credit check | % | Minimize |

## Integration Points

| **Integration Points** |
| --- |
| **ID** | **Integration Point** | **SAP Component** |
| 01 | Business Partner | AP-MD-BP |
| 02 | Credit management | FSCM-CR |
| 03 | Batch management | LO-BM |
| 04 | Account Determination | SD-BF-ACT |

### Potential Future Process Improvements (out of scope for this implementation)

## Record proof of delivery (POD) in the system.

## Functional Solution Design 

### Organization Structure Considerations

| **Sales Organization** |
| --- |
| 1000 | Poultry Sales Org |
| 3000 | Grand-Parents S.Org |
| 4000 | Agricul. Sales Org. |

| **Distribution  Channel**** ** |
| --- |
| 10 | Distributers |
| 20 | Direct Sales |
| 30 | Export |

| **D****ivision** |
| --- |
| 00 | Cross Division |
| 10 | Fresh |
| 20 | Frozen |
| 30 | Eggs |
| 40 | By Products |
| 50 | Agriculture |
| 60 | Feed |
| 90 | Scrap |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Business Partner (Customer) |
| Material Master |
| Conditions |
| Customer Material Info |
| Free Goods |

### System Configuration Considerations

| **Sales Document Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Delivery Type** | **Billing Type** | **Credit Check** | **Credit Group** | **Check Division** |
|  |  | **From** | **To** |  |  |  |  |  |
| YOR | Sales Order | 0110000000 | 0119999999 | YLF | YF2 | D | Y1 |  |
| YOR4 | Scrap Order | 0220000000 | 0229999999 | YLF | YF4 | D | Y1 |  |

| **Assign Order Types to Sales Area** |
| --- |
| **Order Type** | **Sales Area** |
|  | **Sales Org.** | **Distribution Channel** | **Division** |
| YOR1 | 1000 | 20 | 00 |
| YOR1 | 1000 | 30 | 00 |
| YOR2 | 1000 | 10 | 00 |
| YOR3 | 1000 | 30 | 00 |
| YOR1 | 3000 | 20 | 00 |
| YOR1 | 3000 | 20 | 80 |
| YOR1 | 3000 | 30 | 00 |
| YOR1 | 3000 | 30 | 80 |
| YOR1 | 3000 | 99 | 00 |
| YOR1 | 3000 | 99 | 80 |
| YOR3 | 3000 | 20 | 00 |
| YOR3 | 3000 | 20 | 80 |
| YOR3 | 3000 | 30 | 00 |
| YOR3 | 3000 | 30 | 80 |
| YOR3 | 3000 | 99 | 00 |
| YOR3 | 3000 | 99 | 80 |
| YOR1 | 4000 | 20 | 00 |
| YOR1 | 4000 | 20 | 50 |
| YOR4 | 1000 | 20 | 00 |
| YOR4 | 1000 | 20 | 90 |

| **Item Categories** |
| --- |
| **Order Type** | **Item Category** |
| YOR | TAN |
| YOR | TANN |

| **Reasons For Rejection** |
| --- |
| **Reason** | **Description** |
| Z1 | Rejected by Seller – Business Reasons |
| Z2 | Rejected by Seller – No Availability |
| Z3 | Rejected by Customer |
| Z4 | Rejected by Customer – Incorrect Order |
| Z5 | Rejected by Customer – Delay in Delivery |
| Z6 | Rejected by Customer – Pricing Reasons |
| Z9 | Rejected Automatically |

| **Assign Document Pricing Procedure to Document Type** |
| --- |
| **Document Pricing Procedure** | **Description** | **Document Type** |
| Y1 | Poultry - Sales | YOR |
| Z9 | Scrap | YOR4 |

| **Define Pricing Procedure Determination** |
| --- |
| **Sales Org.** | **Distribution Channel** | **Division** | **Document Pr. Procedure** | **Customer Pr. Procedure** | **Pricing Procedure** |
| 1000 | 10 | 00 | Y1 | 1 | Y00001 |
| 1000 | 10 | 80 | Y1 | 1 | Y00001 |
| 1000 | 20 | 00 | Y1 | 1 | Y00001 |
| 1000 | 20 | 80 | Y1 | 1 | Y00001 |
| 1000 | 30 | 10 | Y1 | 1 | Y00001 |
| 1000 | 30 | 00 | Y1 | 1 | Y00001 |
| 1000 | 30 | 80 | Y1 | 1 | Y00001 |
| 3000 | 20 | 00 | Y1 | 1 | Y00001 |
| 3000 | 30 | 80 | Y1 | 1 | Y00001 |
| 3000 | 30 | 00 | Y1 | 2 | YP0002 |
| 3000 | 99 | 00 | Y1 | 1 | Y00001 |
| 3000 | 99 | 00 | Y1 | 2 | YP0002 |
| 4000 | 20 | 00 | Y1 | 1 | Y00001 |
| 4000 | 20 | 00 | Y1 | 2 | Y00002 |
| 4000 | 20 | 50 | Y1 | 1 | Y00001 |
| 4000 | 20 | 50 | Y1 | 2 | Y00002 |
| 1000 | 20 | 90 | Z9 | 1 | YP0016 |

| **Pricing Procedures (Y****P****0001)** |
| --- |
| **Step** | **Condition Type** | **Description** | **From** | **To** | **Account key** |
| 20 | YPR0 | Circular Price | 0 | 0 | YR1 |
| 30 | R100 | 100% discount | 0 | 0 | YD3 |
| 40 | YCOM | Commercial Dis. % | 0 | 0 | YD1 |
| 100 |  | Price After Commercial Dis. | 0 | 0 |  |
| 145 | YPRM | Promotions Disc. % | 100 | 0 | YD3 |
| 146 | YPRV | Promotions Disc. Val | 100 | 0 | YD3 |
| 150 | YEXP | Near Expire Dis. % | 100 | 146 | YD2 |
| 153 |  | Price A (Comm & Pro) | 0 | 0 |  |
| 155 | ZCR2 | CR Monthly Inc. % | 153 | 0 | YD4 |
| 160 | YPRT | Transportation Cost | 0 | 0 | YTC |
| 500 |  | Net Value | 0 | 0 |  |
| 600 | MWST | Output Tax | 0 | 0 | MWS |
| 900 |  | Total Amount | 0 | 0 |  |
| 910 | SKTO | Cash Discount |  |  |  |
| 930 | VPRS | Internal Price |  |  |  |
| 931 | YCMG | Customer/Mat.Pr.Grp | 0 | 0 |  |
|  |  |  |  |  |  |

| **Pricing Procedures (Y00002)** |
| --- |
| **Step** | **Condition Type** | **Description** | **From** | **To** | **Account key** |
| 25 | YPR1 | Circual Price (M) |  |  | YR1 |
| 30 | R100 | 100% discount |  |  | YR3 |
| 40 | YCOM | Commercial Disc. % |  |  | YD1 |
| 100 |  | Price after Commercial Dis. |  |  |  |
| 145 | YPRM | Promotions Disc. % | 100 | 0 | YD3 |
| 146 | YPRV | Promotions Disc. Val | 100 | 0 | YD3 |
| 150 | YEXP | Near Expire Disc. % | 100 | 146 | YD2 |
| 500 |  | Net Value |  |  |  |
| 600 | MWST | Output Tax |  |  | MWS |
| 900 |  | Total Amount |  |  |  |
| 910 | SKTO | Cash Discount |  |  |  |
| 930 | VPRS | Internal price |  |  |  |

| **Pricing Procedures (Y****P****00****16****)** |
| --- |
| **Step** | **Condition Type** | **Description** | **From** | **To** | **Account key** |
| 20 | YPSC | Circular Price | 0 | 0 | YSC |
| 500 |  | Net Value | 0 | 0 |  |
| 600 | MWST | Output Tax | 0 | 0 | MWS |
| 900 |  | Total Amount | 0 | 0 |  |
| 930 | VPRS | Internal Price |  |  |  |

| **Account ****Determination :**** Assign G/L Accounts for Revenue and Deferred Revenue** |
| --- |
| **Condition type** | **Chart of Accounts** | **Sales Org.** | **Distribution Channel** | **Account Key** | **G/L** | **G/L Description** |
| KOFI | WAPO | 1000 |  | MWS | 20200101 | Output tax |
| KOFI | WAPO | 1000 |  | YD1 | 40300101 | Commercial Disc. |
| KOFI | WAPO | 1000 |  | YD2 | 40300102 | Nearly-expired-Disc. |
| KOFI | WAPO | 1000 |  | YD3 | 40300103 | Selling-Promotions |
| KOFI | WAPO | 1000 |  | YD4 | 40300104 | Monthly-incentive |
| KOFI | WAPO | 1000 |  | YD5 | 40300105 | Cust.-Compensation |
| KOFI | WAPO | 1000 |  | YD6 | 40300106 | Marketing-Share |
| KOFI | WAPO | 1000 |  | YD7 | 10260102 | Shortage Quantity |
| KOFI | WAPO | 1000 |  | YD8 | 20260103 | Quarterly-Incentive |
| KOFI | WAPO | 1000 |  | YD9 | 20260104 | Annual-Incentive |
| KOFI | WAPO | 1000 |  | YR1 | 40100101 | Revenue |
| KOFI | WAPO | 1000 |  | YRP | 70100116 | Revenue |
| KOFI | WAPO | 3000 |  | MWS | 20200101 | Output tax |
| KOFI | WAPO | 3000 |  | YD1 | 40300101 | Commercial Disc. |
| KOFI | WAPO | 3000 |  | YD2 | 40300102 | Nearly-expired-Disc. |
| KOFI | WAPO | 3000 |  | YD3 | 40300103 | Selling-Promotions |
| KOFI | WAPO | 3000 |  | YD4 | 40300104 | Monthly-incentive |
| KOFI | WAPO | 3000 |  | YD5 | 40300105 | Cust.-Compensation |
| KOFI | WAPO | 3000 |  | YD6 | 40300106 | Marketing-Share |
| KOFI | WAPO | 3000 |  | YD7 | 10260102 | Shortage Quantity |
| KOFI | WAPO | 3000 |  | YD8 | 20260103 | Quarterly-Incentive |
| KOFI | WAPO | 3000 |  | YD9 | 20260104 | Annual-Incentive |
| KOFI | WAPO | 3000 |  | YR1 | 40100101 | Revenue |
| KOFI | WAPO | 3000 |  | MWS | 20200101 | Output tax |
| KOFI | WAPO | 3000 |  | YD1 | 40300101 | Commercial Disc. |
| KOFI | WAPO | 3000 |  | YD2 | 40300102 | Nearly-expired-Disc. |
| KOFI | WAPO | 3000 |  | YD3 | 40300103 | Selling-Promotions |
| KOFI | WAPO | 3000 |  | YD4 | 40300104 | Monthly-incentive |
| KOFI | WAPO | 3000 |  | YD5 | 40300105 | Cust.-Compensation |
| KOFI | WAPO | 3000 |  | YD6 | 40300106 | Marketing-Share |
| KOFI | WAPO | 3000 |  | YD7 | 10260102 | Shortage Quantity |
| KOFI | WAPO | 3000 |  | YD8 | 20260103 | Quarterly-Incentive |
| KOFI | WAPO | 3000 |  | YD9 | 20260104 | Annual-Incentive |
| KOFI | WAPO | 3000 |  | YR1 | 40100101 | Revenue |
| KOFI | WAPO | 3000 |  | YRP | 70100116 | Returnable Packaging |
| KOFI | WAPO | 3000 |  | YTC | 70100104 | Trans. charge |
| KOFI | WAPO | 3000 |  | ZD1 | 40300110 | Monthly-Inc Rest |
| KOFI | WAPO | 1000 |  | YSC | 70100105 | Scrap |

| **Account ****Dete****rmination :**** Assign Account for ****billed receivables/costs** |
| --- |
| **Chart of Accounts** | **Recon. Acct** | **Description** | **Unbilled Receivables** | **Description** |
| WAPO | 10270101 | Guarantees Given - Customers |  |  |
| WAPO | 20160101 | Down Payments Customers |  |  |
| WAPO | 20160102 | Down Payment Requests Customers |  |  |
| WAPO | 10160106 | Trade Receivables Commercial Fertilizer & Compost |  |  |
| WAPO | 10160102 | Trade Receivables Local |  |  |
| WAPO | 10160103 | Trade Receivables Foreign |  |  |
| WAPO | 10160104 | Trade Receivables Affiliated Companies |  |  |
| WAPO | 10160105 | Trade Receivables Legal Affairs |  |  |
| WAPO | 10160101 | Trade Receivables Local Distributers |  |  |

| **Automatic Batch Determination for Sales Order Items** |
| --- |
| **Item Category** | **Description** |
| TAN | Standard Item |
| TANN | Free of Charge Item |

| **Activate Automatic Batch Determination for Delivery Item Categories** |
| --- |
| **Item Category** | **Description** |
| TAN | Standard Item |
| TANN | Free of Charge Item |

 

| **Partner Function Determination at Header Level** |
| --- |
| **Partner Function** | **Description** | **Not Modifiable ** | **Mandatory** |
| SP | Sold-To Party | Yes | Yes |
| BP | Bill-To Party | Yes | Yes |
| PY | Payer | Yes | Yes |
| SH | Ship-To Party | Yes | Yes |
| YS | Sales Rep. | Yes | Yes |

| **Incompleteness Procedures** |
| --- |
| **Header / Item** | **Field** | **Warning** |
| Header | Document Date |  |
| Header | Document Currency |  |
| Header | Customer Reference | Yes |
| Header | Pricing Date |  |
| Header | Terms of Payment | Yes |
| Item | Material Description |  |
| Item | Order Quantity | Yes |
| Item | Net Value |  |
| Item | Pricing |  |
| Item | Shipping Point/Receiving Pt |  |
| Item | Plant |  |

| **Checking Rule**** Name** | **Availability Check ** | **Checking Rule** | **Stock Overview** | **In/outward movements** |
| --- | --- | --- | --- | --- |
| Sales Order | Y2 | A | Include Safety stock | Include reservation Include Sales Reqmts With Delivey Note |
| Delivery | Y2 | B | Include Safety stock | Include reservation Include Sales Reqmts With Delivey Note |

| **Delivery Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Order Required** |
|  |  | **From** | **To** |  |
| YLF | Outbound Delivery | 0810000000 | 0819999999 | Yes |

| **Delivery Item Category** |
| --- |
| **Delivery Type ** | **Item Category** | **Check quantity 0** | **Check minimum quantity** | **Check over-delivery** | **Relevant for Picking** |
| YLF | TAN | B | B | B | No |
| YLF | TANN | B | B | B | No |

| **Copying Control for Deliveries** |
| --- |
| **Delivery Type ** | **Order Type** | **Item Category** | **Update doc. flow** |
| YLF | YOR | TAN | Yes |
| YLF | YOR | TANN | Yes |
|  |  |  |  |
| **Delivery Block Reasons** |
| **Block** | **Billing Block Description** |
| 01 | Confirmation Block |
| 02 | Manual Block |

| **Billing Types** |
| --- |
| **Type** | **Description** | **Number Range** | **Posting Block** | **Cancellation Type** |
|  |  | **From** | **To** |  |  |
| YF2 | Invoice | 0910000000 | 0919999999 | No | YS1 |
| YF4 | Invoice (Scrap) | 0910000000 | 0919999999 | No | YSF4 |

| **Copying Control fro****m Deliveries to Billing** |
| --- |
| **Delivery Type ** | **Billing Type** | **Copy Item Number** | **Assignment Number** |
| YLF | YF2 | YES | Actual billing document number |
| YLF | YF4 | YES | Actual billing document number |

| **Billing Block Reasons** |
| --- |
| **Block** | **Billing Block Description** |
| Y1 | Check Credit Memo |
| Y2 | Check Debit Memo |
| Y3 | Review Prices |

## Technical/Development Related Items

| **WRICEF** |
| --- |
| **WRICEFID** | **TYPE** | **Description** |
| E_SD-010 | Enhancement | Hide material cost from sales order conditions |
| E_SD-020 | Enhancement | USEREXIT_FIELD_MODIFICATION |
| E_SD-030 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAK |
| E_SD-040 | Enhancement | USEREXIT_MOVE_FIELD_TO_VBAP |
| E_SD-050 | Enhancement | USEREXIT_SAVE_DOCUMENT_PREPARE |
| E_SD-060 | Enhancement | USEREXIT_CHECK_VBAK |
| E_SD-070 | Enhancement | Authorization in VF04 |
| E_SD-080 | Enhancement | Authorization in VF31 |
| E_SD-090 | Enhancement | change Rounding behaviour in pricing in case  of quantity rounding |
| F_SD-010 | Form | YSD_INVOICE_FORM01 Invoice |
| F_SD-020 | Form | YSD_SDOC_FORM01 Order Confirmation |
| F_SD-030 | Form | ZSD_OUTBOUND_DEL01 Outbound Delivery |
| R_SD-010 | Report | YSD001 Customers List |
| R_SD-020 | Report | YSD002 Stock Overview by CAR |
| R_SD-030 | Report | YSD003 List of sales orders |
| R_SD-040 | Report | YSD004 List of Deliveries |
| R_SD-050 | Report | YSD005 Sales Order Status |
| R_SD-060 | Report | YSTOCK CROSS Stock Report |
| R_SD-070 | Report | YSD007 Sales Orders items |
| R_SD-080 | Report | YSD008 Allocated Qty |
| R_SD-090 | Report | YSD009 List of billing document |
| R_SD-100 | Report | YSD010 Profitability by Material |
| R_SD-110 | Report | YSD011 Aging Report |
| R_SD-120 | Report | YSD012 Collections |
| R_SD-130 | Report | YSD013 Profitability by Sales Office  Sales Group |
| R_SD-140 | Report | YSD014 Customer Statements |
| R_SD-150 | Report | YSD015 PRICE LIST |
| R_SD-160 | Report | YSD016 Aging Report by Payment terms |
| R_SD_200 | Report | YSD017 Profitability line items |
| R_SD_210 | Report | YSD018 List of Billing - Net Amount |
| R_SD_220 | Report | YSD019 Customer Sales |

## Authorization 

| **Authorizations** |
| --- |
| **ID** | **Authorization** | **Comments** |
| YSD_AR_MANAGER | A/R Manager |  |
| YSD_BILLING_ADMIN | Billing Admin - Parent role |  |
| YSD_BILLING_ADMINISTRATOR_1480 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1490 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1500 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1510 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1520 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1530 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1540 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1550 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1560 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1570 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1580 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1590 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1600 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1610 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1620 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1630 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1640 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1650 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1660 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1800 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1840 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_1850 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_3000 | Billing Administrator |  |
| YSD_BILLING_ADMINISTRATOR_ALL | Common for all branches |  |
| YSD_BILLING_ADMINISTRATOR_HO | Billing Administrator |  |
| YSD_COLLECTIO_REPORT | Collection Report |  |
| YSD_COPA_ACTUAL | YSD_COPA_ACTUAL |  |
| YSD_CREATE_BATCH | Batch Master |  |
| YSD_CREDIT_MANAGER | Credit Manager |  |
| YSD_CUSTOMER_MATERIAL_INFO | Customer Material info |  |
| YSD_CUSTOMER_STATEMENT | Follow up post activities |  |
| YSD_CUSTOMERS_DISPLAY | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM | Customers Master Data Manager |  |
| YSD_CUSTOMERS_MDM_3000 | Customers Master Data Manager For GP |  |
| YSD_DELETE_DELIVERY | Delete Dellivery 1010,1100,1050,1800,1840 |  |
| YSD_DISTRIBUTER_FROM_BRANCH | YSD_DISTRIBUTER_FROM_BRANCH |  |
| YSD_FOLLOW_UP | Follow up post activities |  |
| YSD_GENERAL_REPORTS_01 | YSD_GENERAL_REPORTS_01 |  |
| YSD_INTERNAL_SALES_REP_1480 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1490 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1500 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1510 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1520 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1530 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1540 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1550 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1560 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1570 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1580 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1590 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1600 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1610 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1620 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1630 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1640 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1650 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1660 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1800 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1840 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_1850 | Sales Data Entry |  |
| YSD_INTERNAL_SALES_REP_3000 | Sales Data Entry For Grand Parent Company Live Stock Division |  |
| YSD_INTERNAL_SALES_REP_HO | Sales Data Entry |  |
| YSD_ISR_DISTRIBUTERS | Internal Sales Rep for distributers |  |
| YSD_KEY_USER1 | SD Key user |  |
| YSD_PRINT_BILLING_DOCUMENT | PRINT BILLING DOCUMENT |  |
| YSD_PRINT_INVOICE | Print Invoice |  |
| YSD_PROFITABILITY | Profitability Reports |  |
| YSD_SALES_OFFICE_48 | Sales Office |  |
| YSD_SALES_OFFICE_49 | Sales Office |  |
| YSD_SALES_OFFICE_50 | Sales Office |  |
| YSD_SALES_OFFICE_51 | Sales Office |  |
| YSD_SALES_OFFICE_52 | Sales Office |  |
| YSD_SALES_OFFICE_53 | Sales Office |  |
| YSD_SALES_OFFICE_54 | Sales Office |  |
| YSD_SALES_OFFICE_55 | Sales Office |  |
| YSD_SALES_OFFICE_56 | Sales Office |  |
| YSD_SALES_OFFICE_57 | Sales Office |  |
| YSD_SALES_OFFICE_58 | Sales Office |  |
| YSD_SALES_OFFICE_59 | Sales Office |  |
| YSD_SALES_OFFICE_60 | Sales Office |  |
| YSD_SALES_OFFICE_61 | Sales Office |  |
| YSD_SALES_OFFICE_62 | Sales Office |  |
| YSD_SALES_OFFICE_63 | Sales Office |  |
| YSD_SALES_OFFICE_64 | Sales Office |  |
| YSD_SALES_OFFICE_65 | Sales Office |  |
| YSD_SALES_OFFICE_66 | Sales Office |  |
| YSD_SALES_OFFICE_GENERAL | Sales Office General |  |
| YSD_SALES_OFFICE_HO | Sales Office |  |
| YSD_SALES_ORDER_DELETE | Delete Sales Order |  |
| YSD_SALES_ORDER_STATUS_F_CUST | Sales Order Status for Fixed Customer Report |  |
| YSD_SALES_PLANNER | YSD_SALES_PLANNER |  |
| YSD_SALES_PRICES_ADMIN | Sales Price Admin |  |
| YSD_SALES_PRICES_DISPLAY | Sales Price Display |  |

## Organizational Change Related Items

### Training Requirements

Prerequisites:

- SAP Navigation.

- Working with FIORI 

| **User groups ** | **Trainer** |
| --- | --- |
| Branches Internal Sales Representative | Power User |
| Branches Shipping Specialist | Power User |
| Branches Billing Clerks | Power User |

In end user training we should collect different branches (19 branches) into 3 or 4 groups and repeat the training for every group.	

| Explore Phase – SD Business Process Document |
| --- |
| Confidential | Page 15 of 16 |
# V3-040-Output

| **Output**** ** |
| --- |

## **Definition **

The system can automatically propose output (for example: printout) for a sales and distribution document. You can change this output in the sales and distribution document.

The system uses the condition technique to determine output.

SAP S/4HANA introduces a new style of output management (BRF+) and it will be used in outbound delivery and billing document.

Adobe forms will be used for all printouts.

Sample business processes where Customer business partner is required are listed as follows:

- Sell from Stock

- Returns

- Credit and Debt memos

## **Requirements ****&**** Expectations**

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Ability to assign different output form per sales document type and distribution channel | S | H |

## **Systems List**

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Printout assignment | Riyadh |

## **Data Conversion and Data Cleansing Requirements**

N/A

## **Master Data Ownership**

All records will be administrated by Master Data Management (MDM) team located in Qassim.

## **Authorization/Security Considerations**

Maintenance of condition records will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## **Control Requirements**

A global Master Data Management Team hold the governance and overall responsibility of output conditions.

## **Data Archiving Requirements**

N/A

## **Organization Impact Considerations**

All conditions are stored on the level of Sales Organization and Distribution Channel

## **Configuration Considerations**

| **Output Types per Application Area** | **BRF Plus** | **Adobe Forms** |
| --- | --- | --- |
| **App.** | **Name** | **Output Type** | **Print Program** | **Subroutine** | **Used Form** |
| **Sales** |
| V1 | Order Confirmation | BA00 | YSD_SDOC_PRINT01 | ENTRY | YSD_SDOC_FORM01 |
| **Shipping** |
| V2 | Delivery Note | YD00 | RVADDN01 | ENTRY_PDF | ZSD_OUTBOUND_DEL01 |
| **Billing** |
| V3 | Billing | YB00 | YSD_INVOICE_PRINT01 | ENTRY | YSD_INVOICE_FORM01 |
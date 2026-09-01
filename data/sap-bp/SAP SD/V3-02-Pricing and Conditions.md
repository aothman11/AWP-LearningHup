# V3-02-Pricing and Conditions

| **Pricing and Conditions**** ** |
| --- |

## **Definition **

The term pricing is used broadly to describe the calculation of prices (for external use by customers or vendors) and costs (for internal purposes, such as cost accounting). Conditions represent a set of circumstances that apply when a price is calculated. For example, a particular customer orders a certain quantity of a particular product on a certain day. The variable factors here - the customer, the product, the order quantity, the date - determine the final price the customer gets. The information about each of these factors can be stored in the system as master data. This master data is stored in the form of condition records.

The Condition Technique in Pricing

The condition technique refers to the method by which the system determines prices from information stored in condition records. In Sales and Distribution, the various elements used in the condition technique are set up and controlled in Customizing. During sales order processing, the system uses the condition technique to determine a variety of important pricing information. For example, the system automatically determines which gross price the customer should be charged and which discounts and surcharges are relevant given the conditions that apply.

The sequence of activities is generally as follows:

- Define Condition Types for each of the price elements (prices, discounts, and surcharges) that occur in your daily business transactions.

- Define the Condition Tables that enable you to store and retrieve condition records for each of the different condition types.

- Define the Access Sequence that enable the system to find valid condition records.

- Group condition types and establish their sequence in Pricing Procedures.

**Condition Types**

A condition type is a representation in the system of some aspect of your daily pricing activities. For example, you can define a different condition type for each kind of price, discount or surcharge that occurs in your business transactions.

Example of a Condition Type

You define the condition type for a special material discount. You specify that the system calculates the discount as an amount (for example, a discount of SAR 1 per sales unit). Alternatively, you can specify that the system calculates the discount as a percentage (for example: a 2% discount for orders).

**Access Sequences**

An access sequence is a search strategy that the system uses to find valid data for a particular condition type. It determines the sequence in which the system searches for data. The access sequence consists of one or more accesses. The sequence of the accesses establishes which condition records have priority over others. The accesses tell the s2ystem where to look first, second, and so on, until it finds a valid condition record. You specify an access sequence for each condition type for which you create condition records.

There are some conditions types for which you do not create condition records (header discounts that you can only enter manually, for example). These condition types do not require an access sequence.

A sales department may offer customers different kinds of prices. 

The department may create, for example, the following condition records in the system:

- A basic price for a material

- A special customer-specific price for the same material

- A price list for major customers

During sales order processing, a customer may, in theory, qualify for all three prices. The access sequence enables the system to access the data records in a particular sequence until it finds a valid price.

Sample business processes where Customer business partner is required are listed as follows:

- Sell from Stock

- Returns  	

- Credit and Debit memos

## **Requirements ****&**** Expectations**

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Apply the current pricing policy with less amount of entries | S | H |
| 02 | All records should be time bounded | S | H |
| 03 | Ability to put future prices ( next month for example ) | S | H |

## **Systems List**

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Customers price lists | Riyadh |
| Route Pro | Van sales price lists | Riyadh |

## **Data Conversion and Data Cleansing Requirements**

Data conversion for condition will be done by extraction from existing Systems to an interim data base for consolidation and conversion to be complied with SAP format. For this Excel can be used. 

With the new logic of condition table a lot of old records may be combined in one condition record and this should be considered in data conversion

For cleansing and migration of consolidated conditions the data will be entered directly to the system from excel sheets due to small amount of records, the execution is in the responsibility of Al-Watania Poultry team.

## **Master Data Ownership**

All conditions will be administrated by Master Data Management (MDM) team for finance located in Qassim.

## **Authorization/Security Considerations**

Maintenance of conditions will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## **Control Requirements**

A global Master Data Management Team hold the governance and overall responsibility conditions.

As we can enter a future prices, so the new price list can come and reviewed and entered to the system early.

For the third party software for van sales, it should read the prices from SAP in case of integration, no duplication in prices in two systems.

## **Data Archiving Requirements**

N/A

## **Organization Impact Considerations**

All conditions are stored on the level of Sales Organization, and as per access sequence the conditions may differs on level of Distribution Channel, Division, Sales Office and Sales Group.  

## **Configuration Considerations**

| **Condition Types** |
| --- |
| **Condition Type** | **Condition Type** | **Header / Item** | **Plus / Minus Sign of the condition amount** | **Calculation Type** | **Manual Entries** | **Access Sequence** |
| YPR0 | Circular Price | Item | Plus | Amount | B | Y001 |
| YPR1 | Agriculture Price | Item | Plus | Amount | C | Y001 |
| YPR2 | Circual Price (RP) | Item | Plus | Amount | C | Y001 |
| YCOM | Commercial Dis. % | Item | Minus | % |  | Y002 |
| YPRM | Promotions % | Item | Minus | % |  | Y003 |
| YEXP | Near Expire Dis. % | Item | Minus | % |  | Y004 |
| SKTO | Cash Discount | Item | positive and negative | % | D |  |
| VPRS | Internal Price | Item | Plus | Amount | D |  |
| YPRV | Promotions | Item | Minus | Amount | D | Y003 |
| YPRT | Transportation Cost | Item | Plus | Amount |  | Y001 |
| YPSC | Scrap | Item | Plus | Amount |  | Y001 |

|  | **Access Sequence** |
| --- | --- |
| **Access ** **Sequence** | **Seq.** | **Sequence Description** | **Field 1** | **Field 2** | **Field 3** | **Field 4** | **Exclusive** |
| Y001 | 1 | Payer/Material | Sales Org. | Payer | Material |  | X |
|  | 2 | Customer/Material | Sales Org. | Customer | Material |  | X |
|  | 2 | Sales Group/Material | Sales Org. | Sales Group | Material |  | X |
|  | 3 | Dis. Channel/Material | Sales Org. | Dis. Channel | Material |  | X |
|  | 4 | Material | Sales Org. | Material |  |  | X |
| Y002 | 1 | Payer/Material | Sales Org. | Payer | Material |  | X |
|  | 1 | Payer/Material Group | Sales Org. | Payer | Material Group |  | X |
|  | 2 | Sales group/Material | Sales Org. | Sales group | Material |  | X |
|  | 3 | Sales group/Material Group | Sales Org. | Sales group | Material Group |  | X |
|  | 4 | Sales group/Division | Sales Org. | Sales group | Division |  | X |
|  | 5 | Sales Group | Sales Org. | Sales Group |  |  | X |
| Y003 | 1 | Sales org./Customer/Material/ Batch | Sales Org. | Customer | Material | Batch | X |
|  | 2 | Sales org./Payer/Material/Batch | Sales Org. | Payer | Material | Batch | X |
|  | 3 | Sales org./Sales grp/Material/Batch | Sales Org. | Sales Group | Material | Batch | X |
|  | 4 | Material/Batch | Sales Org. | Material | Batch |  | X |
|  | 5 | Customer/Material | Sales Org. | Customer | Material |  | X |
|  | 6 | Payer/Material | Sales Org. | Payer | Material |  | X |
|  | 7 | Customer/Material | Sales Org. | Customer | Material |  | X |
|  | 8 | Sales org./Customer/Matl Group | Sales Org. | Customer | Material  Group |  | X |
|  | 9 | Payer/Material Group | Sales Org. | Payer | Material Group |  | X |
|  | 10 | Customer | Sales Org. | Customer |  |  | X |
|  | 11 | Payer | Sales Org. | Payer |  |  | X |
|  | 12 | Sales Group/Material | Sales Org. | Sales Group | Material |  | X |
|  | 13 | Dis. Channel/Material | Sales Org. | Dis. Channel | Material |  | X |
|  | 14 | Sales office/Material | Sales Org. | Sales office | Material |  | X |
|  | 15 | Material | Sales Org. | Material |  |  | X |
|  | 16 | Sales Group/Material Group | Sales Org. | Sales Group | Material Group |  | X |
|  | 17 | Dis. Channel/Material Group | Sales Org. | Dis. Channel | Material Group |  | X |
|  | 18 | Sales office/Material Group | Sales Org. | Sales office | Material Group |  | X |
|  | 19 | Material Group | Sales Org. | Material Group |  |  | X |
|  | 20 | Payer/Division | Sales Org. | Payer | Division |  | X |
|  | 21 | Sales Group/Division | Sales Org. | Sales Group | Division |  | X |
|  | 22 | Dis. Channel/Division | Sales Org. | Dis. Channel | Division |  | X |
|  | 23 | Sales office/Division | Sales Org. | Sales office | Division |  | X |
|  | 24 | Division | Sales Org. | Division |  |  | X |
|  | 25 | Sales Group | Sales Org. | Sales Group |  |  | X |
|  | 26 | Dis. Channel | Sales Org. | Dis. Channel |  |  | X |
|  | 27 | Sales office | Sales Org. | Sales office |  |  | X |
| Y004 | 1 | Sales org./Customer/Material/ Batch | Sales Org. | Customer | Material | Batch | X |
|  | 2 | Sales org./Payer/Material/Batch | Sales Org. | Payer | Material | Batch | X |
|  | 3 | Sales org./Payer/Batch | Sales Org. | Payer | Batch |  | X |
|  | 3 | Sales org./Sales grp/ Material/Batch | Sales Org. | Sales Group | Material | Batch | X |
|  | 4 | Sales org./Sales grp/ Matl Group/Batch | Sales Org. | Sales Group | Material Group | Batch | X |
|  | 5 | Sales org./Matl Group/ Batch | Sales Org. | Material Group | Batch |  | X |
|  | 6 | Material/Batch | Sales Org. | Material | Batch |  | X |
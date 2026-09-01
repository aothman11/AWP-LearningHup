# PP-MD-020 BOM

| PP-MD-020: Bill of material (BOM) |
| --- |

## Definition

Bills of material (BOMs) and routings contain essential master data for integrated materials management and production control.

A bill of material is a complete, formally structured list of the components that make up a product or assembly. The list contains the object number of each component, together with the quantity and unit of measure. The components are known as BOM items.

A bill of material can only refer to a quantity of at least 1 of an object.

In the design department, a new product is designed such that it is suitable for production and for its intended purpose. The result of this product phase is drawings and a list of all the parts required to produce the product. This list is the bill of material.

**Phantom Assembly**

A phantom assembly is only required for engineering/design. It does not occur physically in the course of production. In the planning run, the component materials of the assembly transfer requirements. The header material of the assembly is not planned.

**Co- and By-Products**

Products that are usually manufactured together can be produced using one production order.

The **main product** is the primary reason for the production process. It is displayed in the production order header. The system also creates a separate order item for the main product.

A **co-product** is a product that is produced in conjunction with other products. The system creates a separate order item in the production order for each co-product. This means that it is possible to display actual costs at co-product level.

A **by-product** is a product that is produced in conjunction with other products. The system does not create a separate order item for each by-product. The material valuation of a by-product is always based on the price specified by price control in the material master.

	Creating a production order to manufacture co-products has the following advantages:

- Main product and co-product(s) are settled to different receivers

- Goods movements can be posted simultaneously for all products manufactured in the order

In BOM you must enter the component quantity as always a negative value (for example, 3- ). Also the Indicator: material can be co-product must be set in the MRP data

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Using the concept of BOM for modeling the live operation animals for planning & costing | S | H |
| 02 | Authorization of changing & displaying BOM according to plants (departments) | S | H |
| 03 | Items used in BOM and measured with dimensional UOM like (KG,M,L) its base UOM should be dimensional UOM | S | H |

## Systems List

This list gives an overview about all the current systems that use this Master Data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Excel | Bill of materials | Qassim |

## Data Conversion and  Data Cleansing Requirements

Data conversion for bill of materials will be done by building it from scratch to an interim database for consolidation and conversion to be complied with SAP format. For this SAP Legacy System Migration Workbench (LSMW) can be used. Planning and execution is in the responsibility of WI-SYS team.

For cleansing production planning key users will collect all BOM in excel sheet template and consultant will consolidate it in one sheet and make validation against material master and production version sheets to make sure that:

- All BOM items should has material master record in the same plant

- Check that BOM items UOM is the same material basic or unit of issue

- Check that all BOM header must be in use in a production version

- All BOM items header exist in the header sheet

- All BOM header records has records in items sheet.

- Make sure that finished & semi-finished has BOM in the plant that is created in or request from other plant by special procurement

- Check BOM header & items duplication

- Quantity only numbers or decimals with max 3 decimals places.

## Master Data Ownership

Maintenance of bill of materials will be the responsibility of production planning master data administrator per department. (Role: PP Master Data Admin)

## Authorization/Security Considerations

Maintenance of the master data will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## Organization Impact Considerations

Bill of material master records are defined with the following areas.

- Department (**Plant**** level**) 

## Configuration Considerations

N/A

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 3 |
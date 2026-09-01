# QM-MD-020 Sampling Procedure-V2

| qm-MD-020 sampling procedure |
| --- |

## Definition

A sampling procedure defines the rules that specify how the system calculates the sample size and it contains information about the valuation of an inspection characteristic during results recording (attributive, variable, manual, etc.).

***Use***

Sampling procedures are usually used at characteristic level of a task list or material specification. You can however determine the sample size, without reference to task lists. To do this, you define a sampling procedure for the inspection type in the inspection setup (Quality Management view of the material master), or in customizing.

***Structure***

The rules for determining the sample are stored in the sampling type. The sampling type and valuation mode are combined for the inspection characteristics. This combination forms the structure of the sampling procedure.

**Sampling Type**

The sampling type defines how a sample is calculated (for example, fixed sample, 100% inspection, use sampling scheme, percentage sample). Together with the valuation mode, the sampling type defines the parameters for sample determination.

Using the sampling type, the system proposes a list of rules for sample determination. If there is only one rule available, this is automatically chosen.

**Valuation Mode**

The [valuation mode](https://help.sap.com/viewer/90f562dc43f84f5f8ab7e082e47f9a6c/6.18.11/en-US/677dbb53707db44ce10000000a174cb4.html) (for example, attributive inspection on the basis of nonconforming units, variable inspection according to s-method [one limit], without valuation parameters) defines the rules for accepting or rejecting a characteristic or sample. The sampling type and the valuation mode specify which parameters the system uses to determine a sample size.

The system automatically sets the indicator Use in inspection plan, if the sampling procedure is referenced in a task list/routing.

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Using sampling procedure for modeling the live operation sample size for measurements and lab tests in farms. | S | H |

## Systems List

This list gives an overview about all the current systems that use this master data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Excel | Sample Size | Qassim |

## Data Conversion and  Data Cleansing Requirements

N/A

## Master Data Ownership

Maintenance of sampling procedure will be the responsibility of production planning master data administrator per department. 

## Authorization/Security Considerations

Maintenance of the master data will be done centrally. For this transactions (roles) are available, which is part of authorization role definition accordingly.

## Organization Impact Considerations

Sampling procedure master records is defined with the following areas.

- Client level 

## Configuration Considerations

| **Sampling Procedure** |
| --- |
| **Code** | **Descr****i****ption** |
| ZALL_QTY | All Qty , No insp Pnt ,Manual Val |
| ZF1 | Fxd Qty = 1, No insp Pnt ,Manual Val |
| ZF10 | Fxd Qty = 10, No insp Pnt ,Manual Val |
| ZF100 | Fxd Qty = 100, No insp Pnt ,Manual Val |
| ZF160 | Fxd Qty = 160, No insp Pnt ,Manual Val |
| ZF18 | Fxd Qty = 18, No insp Pnt ,Manual Val |
| ZF2 | Fxd Qty = 2, No insp Pnt ,Manual Val |
| ZF20 | Fxd Qty = 20, No insp Pnt ,Manual Val |
| ZF200 | Fxd Qty = 200, No insp Pnt ,Manual Val |
| ZF24 | Fxd Qty = 24, No insp Pnt ,Manual Val |
| ZF25 | Fxd Qty = 25, No insp Pnt ,Manual Val |
| ZF300 | Fxd Qty = 300, No insp Pnt ,Manual Val |
| ZF4 | Fxd Qty = 4, No insp Pnt ,Manual Val |
| ZF5 | Fxd Qty = 5, No insp Pnt ,Manual Val |
| ZF500 | Fxd Qty = 500, No insp Pnt ,Manual Val |
| ZF60 | Fxd Qty = 60, No insp Pnt ,Manual Val |
| ZF650 | Fxd Qty = 650, No insp Pnt ,Manual Val |
| ZF90 | Fxd Qty = 90, No insp Pnt ,Manual Val |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 2 |
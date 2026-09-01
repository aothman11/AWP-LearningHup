# PP-ORG-030 MRP Controller-V2

| PP-ORG-030: MRP Controller |
| --- |

## Definition 

The MRP controller is responsible for material requirements planning and material availability.

They ensure that the materials required to manufacture finished products or superior assemblies are available on time. They evaluate the material requirements planning that generate receipts (order proposals) for customer requirements and the planned independent requirements of the finished products. As a result of these receipts, secondary requirements are created for the subordinate assembly or materials that must in turn be covered by receipts.

Depending on the company structure, the MRP controller can be responsible for the material availability for the entire production chain of a product as well as for the material availability of certain production levels.

They can use key figures such as exception messages to help them complete their tasks.

The MRP controller's tasks include:

•	Executing and monitoring material requirements planning

•	Converting order proposals

•	Monitoring stocks The MRP controller is responsible for material requirements planning and material availability.

They ensure that the materials required to manufacture finished products or superior assemblies are available on time. They evaluate the material requirements planning that generate receipts (order proposals) for customer requirements and the planned independent requirements of the finished products. As a result of these receipts, secondary requirements are created for the subordinate assembly or materials that must in turn be covered by receipts.

Depending on the company structure, the MRP controller can be responsible for the material availability for the entire production chain of a product as well as for the material availability of certain production levels.

They can use key figures such as exception messages to help them complete their tasks.

The MRP controller's tasks include:

- Executing and monitoring material requirements planning

- Converting order proposals

- Monitoring stocks

 

| **Material Type** | **MRP Code** | **MRP Controller Description** | **Further Processing** | **Processing** | **Feed Mill** | **Broiler** | **Hatchery** | **Grading Stations** | **Parent- Laying** | **Parent- Rearing** | **Layer- Laying** | **Layer-Rearing** | **GP-Laying** | **GP-Rearing** | **Qassim Central** | **GP Central** | **Agriculture** | **Yanbou**** Hub** | **Branches** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Finished | 100 | FP Fresh Finished | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 101 | FP-MTS Fresh Fin. | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 110 | FP Frozen Finished | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 120 | Processing Fresh Finished |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 130 | Processing Frozen Finished |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 140 | Egg Products |  |  |  |  | X |  |  |  | X |  | X |  |  |  |  |  | X |
| Finished | 145 | Hatchery EggPrduct |  |  |  |  | X |  |  |  |  |  |  |  |  |  |  |  | X |
| Finished | 150 | Feed Mill Finished |  |  | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Finished | 160 | Agri. products |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  | X |
| Live Stock | 200 | Live Stock |  | X |  | X | X | X | X | X | X | X | X | X |  |  |  |  |  |
| Semi-Finished | 210 | Semi-Finished | X | X | X | X | X | X | X | X | X | X | X | X |  |  | X | X |  |
| Raw material | 300 | Raw material | X | X | X | X | X |  | X | X | X | X | X | X |  |  | X | X |  |
| Packing | 310 | Packing | X | X |  | X | X |  | X | X | X | X | X | X | X | X | X |  |  |
| Spare parts | 400 | Spare Parts Vehicle |  |  |  |  |  |  |  |  |  |  |  |  | X | X |  |  |  |
| Spare parts | 410 | Spare Parts Machine | X | X | X | X | X |  | X | X | X | X | X | X |  |  | X |  |  |
| Spare parts | 420 | Spare Parts General |  |  |  |  |  |  |  |  |  |  |  |  | X | X |  |  |  |
| General | 500 | General Items |  |  |  | X | X |  | X | X | X | X | X | X | X | X | X |  |  |
| General | 500 | General Items |  | X |  | X | X |  | X | X | X | X | X | X | X | X | X |  |  |
| Food | 510 | Food |  |  |  |  |  |  |  |  |  |  |  |  | X | X |  |  |  |
| Operation Gen.Item | 520 | Operation Gen.Item |  |  |  |  |  |  |  |  |  |  |  |  | X | X |  |  |  |
| By-Product | 600 | By-Product |  | X |  | X | X |  | X | X | X | X | X | X | X | X | X |  |  |
| Losses Non Val | 601 | Losses |  | X |  | X |  |  |  |  | X | X | X |  |  |  |  |  |  |
| Auxularies | 700 | Auxularies |  | X | X | X | X | X | X | X | X | X | X | X | X | X | X | X |  |
| Fuel | 800 | Fuel | X | X | X | X | X | X | X | X | X | X | X | X | X | X | X | X |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 2 |
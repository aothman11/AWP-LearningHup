# V3-02-Distribution Channel

| Distribution Channel |
| --- |

## Definition 

The distribution channel represents the channel through which salable materials or services reach customers. Within a sales organization a customer can be supplied through several distribution channels. In addition, the material master data relevant for sales, such as prices, minimum order quantity, minimum quantity to be delivered and delivering plant, can differ for each sales organization and distribution channel.

| **Distribution Channel** |
| --- |
| **Code** | **Description** |
| 10 | Distributers |
| 20 | Direct Sales |
| 30 | Export |
| 99 | Inter-Company |

## Assignment of SAP Organizational Units (System Configuration)

| **Sales Organization** | **Distribution channel** |
| --- | --- |
| **Code** | **Sales Organization Description** | **Code** | **Distribution Channel Description** |
| 1000 | Poultry Sales Organization | 10 | Distributers |
| 1000 | Poultry Sales Organization | 20 | Direct Sales |
| 1000 | Poultry Sales Organization | 30 | Export |
| 2000 | Transportation S.Org | 20 | Direct Sales |
| 2000 | Transportation S.Org | 99 | Inter-Company |
| 3000 | Grand-Parents S.Org | 20 | Direct Sales |
| 3000 | Grand-Parents S.Org | 30 | Export |
| 3000 | Grand-Parents S.Org | 99 | Inter-Company |
| 4000 | Agricul. Sales Org. | 20 | Direct Sales |
| 4000 | Agricul. Sales Org. | 99 | Inter-Company |
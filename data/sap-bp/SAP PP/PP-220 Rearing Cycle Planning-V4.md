# PP-220 Rearing Cycle Planning-V4

| PP-220: rearing Cycle Planning |
| --- |

## Process Description

### Business Process Requirements

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Get a production plan & assigned house orders for all farms with relative house capacity per cycle | S | H |

### Business Process Description

In this process, we make the cycle planning for parent, commercial layer and GP - rearing production, we have expected requirement for getting birds per day for the year, run MPS to load all farms according requirement and farms/houses/section capacity. 

| Process Characteristics |
| --- |
| Process Trigger | Due date come for creating new cycle |
| Process Input | Production plan per day |
| Process Output | Production order per house. And planned orders per farm |
| Process Owner | Rearing Production Planner |
| Process Volumes | 223 Order / Cycle. |
| Process Frequencies | Layer 2 cycles per year GP 2 cycles per year Parent 2.2 cycles per year |

### Business Process Diagrams

 

### Process Steps Detailed Requirements & Solution

| **Process Steps Description**** ** |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Des****cription** | **Business Role** | **GAP** **Solution** |
| Trigger | Due date come for creating new cycle |  |  |  |  |  |
| 010 | Check that all old requirement/receipt are closed | MD04 | Monitor Stock/ Requirements List | Check that all old requirement/receipt are closed (Ex. STO, prod orders) | Rearing Production Planner |  |
| 020 | Run Master production schedule MPS | MD40 | - | MPS will generate planned orders using quota arrangements to load farms by the required sequence according to rearing cycle | Rearing Production Planner |  |
| 030 | Evaluate MRP Result | MD04 COOIS | Monitor Stock/ Requirements List | Check the result of MPS and see the loaded order and if there is any planned order not assigned to farm "over capacity" or there is any exceptions | Rearing Production Planner |  |
| 040 | Convert Planned order to Production orders & assign house/section numbers | MD04 CO40 CO41 CO01 | Convert Orders to Production Orders | At the beginning of each cycle we will convert all planned orders related to this cycle once - and add the WBS element related to each house number and section number for GP. | Rearing Production Planner | E_PP-100 |
| 010 | Create Manually Production orders | CO01 | Create Production Order | Create manual Production orders, per site, farm & house per cycle | Rearing Production Planner | E_PP-200_1 |
| 050 | Assign house WBS numbers to Production orders | CO02 | Change Production Order | At the beginning of each cycle we will create orders related to this cycle once - and add the WBS element related to each house/Section number for GP, Assign Receipt Storage location as per house | Rearing Production Planner | E_PP-090 E_PP-100 |
| 060 | Adjust QM Limits & components backflush S.Loc. | CO02 | Change Production Order | Read PP Master data again to calculate QM limits and component backflush storage location. | Rearing Production Planner | E_PP-100 E_QM_010 |
| 070 | Add/Remove operations/Components based of transfer age from rearing to laying | CO02 | Change Production Order | Add/Remove operations/Components based of transfer age from rearing to laying. In case we decided to change the standard transfer age for any reason. | Rearing Production Planner |  |
| 080 | Adjust Monthly lab test operation dates | CO02 | Change Production Order | Adjust Monthly lab test dates | Rearing Production Planner |  |
| 090 | Adjust Vaccination operations dates | CO02 | Change Production Order | Adjust Vaccination operations dates & vaccines if needed | Rearing Production Planner |  |
| 100 | Distribute house utilization on orders | CO02 | Change Production Order | Distribute house utilization on orders if there is more than one breed in the same house. And fixed quantity components and house prepared material. | Rearing Production Planner |  |
| 110 | Release Production order | CO02 CO05N | Release production orders | Release Production orders of the new cycle | Rearing Production Planner |  |
| 120 | Send production orders of new cycle to PHD/Rearing production teams. | By email COOIS | Monitor Production/ Planned Orders | Send production orders of new cycle to PHD/Rearing production team. | Rearing Production Planner |  |
| **13****0** | **MRP Process** | ** ** | ** ** | **MRP Process** | **MRP Controller** |  |
| Output | Production order per house Planned order per farm |  |  |  |  |  |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Watania 1 – Main office | 2 | Rearing Production planner |
| Jouf | 2 | Rearing Production planner |

### Operational Decisions or Logic within the Process

- Process can start using MPS & MRP or start planning outside on Excel and put it directly as manual production orders

- In this planning cycle, we plan both house preparation & growing process.

- Update the quota arrangement to each bird material breed with the assigned houses capacity in all farms per cycle

- Create production supervisor: for trials, control houses and for old data, assign them to the production orders.

- create two production orders for each breed in the house

- Distribute the fixed quantity components on the two production orders by the same percentage of each order (Ex. House prepared item, Fuel )

- Distribute the house utilization in the operation by the same percentage of each order (Operation details – user fields – HouseUtiliztion Field)

- In GP and Parent Rearing house utilization of sections already maintained in the routing itself so no need to maintain it again in the production order. It means any order will be created in GP-rearing section will be utilized with only 50%. (0.5 House utilization because each house contain two similar sections)

- In all rearings house preparation production order should be target quantity 1 house.

### Legal Considerations and Company-Specific Policies

- In the same time, we have two cycles one deliver to laying department & another one for DOC placement (receiving from hatcheries/vendors).

- Around one house delivered to parent - Laying per day & three houses received from GP vendors every 3 days. 

- Spiking process in parent: In case of shortage in males or weak males, we can make internal transfer from one house to another in the same farm.

### Reference to Key Process Changes and Process KPIs

| **Process KPIs** |  |
| --- | --- |
| **ID** | **KPI** | **How to Measure** | **Expected result** |
| 1 | Production achievement. | Actual birds transferred to laying VS target. | 95% |
| 2 | Production achievement per cycle per farm per breed | Actual birds transferred to laying VS target. | 95% |

### Integration Points

	N/A

### Potential Future Process Improvements (out of scope for this implementation)

N/A 

## Functional Solution Design 

### Organization Structure Considerations

| **Plant** |
| --- |
| 1230 | Parent - Rearing |
| 1260 | Commercial layer – Rearing |
| 3300 | GP - Rearing |

| **Live Operation Area** |
| --- |
| Parent Rearing Area |
| Commercial layer – Rearing Area |
| GP – Rearing Area |

### Master Data Considerations (including all relevant data relationships)

| **List of related Master Data** |
| --- |
| Material Master |
| BOM |
| Work Center |
| Routing |
| Production version |
| Master inspection characteristic |
| Sampling procedure |

### System Configuration Considerations

| **Production order type Types** |
| --- |
| **Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YPP1 | Live Operation Order | 10000000 | 19999999 |
| YPP3 | Semi-finised Order | 30000000 | 39999999 |
| YPP5 | House Preparation Order | 50000000 | 59999999 |

## Technical/Development Related Items

	

| **#** | **Enhancement** | **Requirement / Req.ID** | **Object Description** | **Object Name** | **T-Code** | **Form/Query Name-user gorup** |
| --- | --- | --- | --- | --- | --- | --- |
| 180 | Enhancement | E_PP-090 | WBS Element check on Order Save | Production Order | CO01 | Z4\ZXCO1U06 |
| 181 | Enhancement | E_PP-100 | Storage Location Change for House level backflush | Production Order | CO01 | Z5\ZXCO1U05 |
| 151 | Enhancement | E_QM-010 | QM Change Specification limits of 03 Inspection lots proportional to Order header quantity | Inspection Lot | CO01 | Z_QPAP_FLEX_PLAN_03 |

## Authorization 

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 10 | Rearing Production Planner |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 4 of 6 |
# PM-VFC-010 VEHICLES FUEL CONSUMPTION  

| PM-vfc-010 Vehicles fuel consumption |
| --- |

## Process Description

In SAP, this transaction is used for recording the fuel consumption of the fleet object and recording the travel distance of the vehicles by recording the measurement document.

The Employee in GAS Station will use the Fiori App. With Tile called IFCU – Enter Usage for Vehicle or by GUI T. Code IFCU, after entering the Equipment Number by searching about it through SAP search by Tech. Identification Number and then select the GAS Station which is the fuel stored and will be consumed from, Then select the fuel type from Fluid Type field and the fuel quantity by the litre UOM, The Employee has to write the travel distance into the measuring point for Distance, which is the mileage counter for the vehicle during the refill fuel process, The employee should ensure that the two measuring points have been recorded before saving after Save system will create a material document in order to record the fuel consumption by GI from GAS Station , Fi document also will be created in the back end for recoding the cost of the fuel consumed for the vehicle and posted on the cost centre.

### Business Process Requirements

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Used to perform the refill fuel for the vehicles | S | H |
| 02 | Used to record the travel distance and mileage of the vehicles | S | H |
| 03 | Financial impact and cost determination of vehicle consumption, | S | H |
| 04 | Tracing the cost of fuel consumption for Vehicles | S | H |

| **Process Characteristics** |
| --- |
| **Process Trigger** | Refilling fuel for vehicle |
| **Process Input** | Record measurement Documents |
| **Process Output** | Recoding fuel consumption & Travel Distance (Fi & MM Documents) |
| **Process Owner** | Gas Stations |
| **Process Volumes** | 200 – 250 |
| **Process Frequencies** | Daily |

### Business Process Diagrams

Following process diagram shows the Vehicles Fuel Consumption Process Flow.

**Process Steps Detailed Requirements ****&**** Solution **

| **Process Steps Description ** |
| --- |
| **ID** | **Process Step Description** | **FIORI App****. / T. Code** | **Business ****Roles** |
|  |  |  |  |
| 01 | Enter Usage for Vehicles | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 02 | Enter Equipment-Fleet Object | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 03 | Select Gas Station | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 04 | Recode Consumed Fuel | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 05 | Select Fluid Type | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 06 | Record Distance Counter Reading | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |
| 07 | Confirm & Save Recorded Reading | IFCU, Consumption-Relevant Measurement Document Recording (IFCU) | Fuel Station_Store Keeper |

### Reports / Key Performance Indicators KPIs 

| **Reports** |
| --- |
| **ID** | **Transaction** | **Description** | **GUI** | **Fiori** |
| 01 | IFCU | Consumption-Relevant Measurement Document Recording, Enter Usage for Vehicles | X | X |
| 02 | IE36 | Display Vehicles List | X | X |
| 03 | IE37 | Change Vehicles List | X | X |
| 04 | MIGO | Display Material Document / Fi Documents | X | X |

### Locations where this Business Process is performed

| **Locations** |
| --- |
| **Location** | **Number of Users** | **Point of Contact** |
| Qassim – GAS Stations | 3 | Fuel Station_Store Keeper |

### Operational Decisions or Logic within the Process

N/A

### Legal Considerations and Company-Specific Policies

N/A

### Integration Points

| **Integration Points** |
| --- |
| **ID** | **Process Step ** | System/ **Module Integrated with** | **Integration Details** |
| 01 | Refill fuel for the Vehicle | MM | Fuel with UOM (L - Liter) will be consumend and withdraw (Goods Issue) from the GAS Station, System will create a MM Document for this transaction (GI) |
| 02 | Refill fuel for the Vehicle | FI | FI Documents will be created for the refill transaction after (GI) and the cost of the consumed materials will be recorded with FI documents. |
| 03 | Recording travel distance for the Vehicle | PM | The travel distance of vehicle will be recorded on the assigned measuring point of the vehicle itself. |

### Potential Future Process Improvements (out of scope for this implementation)

## N/A

## Functional Solution Design 

### Organization Structure Considerations

| **Company Code** |
| --- |
| 1000 | Al-Watania Poultry |

| **Plant ** |
| --- |
| 1310 | Fleet Central Workshop-FCW |

| **Fuel Station ****&**** Storage Location ****&**** Plant Assignment list  ** |
| --- |
| **Code** | **Description** | **Plant** | **Storage Location** |
| W011 | Fuel S. Wat1 | 1010 | Q011 |
| W012 | Fuel S. Wat2 | 1010 | Q012 |
| W013 | Fuel S. Wat3 | 1010 | Q013 |

### Master Data Considerations/High Level Data Migration 

| List of Related Master Data |
| --- |
| ID | Description |
| 01 | Equipment – Fleet Object |
| 02 | Measuring Points / Counters |
| 03 | Class & Characteristics |
| 04 | Materials Master Record (Fuel) |

### System Configuration Considerations

| **M****easuring Point ** |
| --- |
| **Field ** | **Code ** | **Description** |
| Measuring Point Object | IEQ | Equipment |
| Measuring Point Category | M | Measuring point (General) |
| Counter | Counter Marked | Measuring Point is Counter |
| Measuring Point Position | FUEL | FUEL |
| Measuring Point Description | Fuel Consumption | Fuel Consumption |
| Measuring Point Unit of Measure | L | Liter |
| Characteristics | Y_FUEL_CONSUMPTION | Fuel Consumption Measure |
| Class | Y_FUEL_EQUIPMENT | Equipment Fuel Consumption |
| Class Type | 037 | Measuring Point |

| **M****easuring Point ** |
| --- |
| **Field ** | **Code ** | **Description** |
| Measuring Point Object | IEQ | Equipment |
| Measuring Point Category | M | Measuring point (General) |
| Counter | Counter Marked | Measuring Point is Counter |
| Measuring Point Position | DISTANCE | DISTANCE |
| Measuring Point Description | DISTANCE | DISTANCE |
| Measuring Point Unit of Measure | KM | Kilometer |
| Characteristics | Y_DISTANCE_KM | Y_DISTANCE_KM |
| Class | Y_DISTANCE_KM | Fleet_Distance |
| Class Type | 037 | Measuring Point |

| **M****easuring Point ** |
| --- |
| **Field ** | **Code ** | **Description** |
| Measuring Point Object | IEQ | Equipment |
| Measuring Point Category | M | Measuring point (General) |
| Counter | NO | Measuring Point is not Counter |
| Measuring Point Position | SHIPMENT | SHIPMENT |
| Measuring Point Description | Shipment Document Number | Shipment Document Number |
| Measuring Point Unit of Measure | CASE | CASE |
| Characteristics | Y_SHIPMENT_DOCUMENT | Shipment Document Number |

| **Measuring Point Unit of Measure ** |
| --- |
| **Code** | **Description** |
| L | Liter |
| KM | Kilometer |
| Case | case |

| **Fuel Station ** |
| --- |
| **Code** | **Description** |
| W011 | Fuel S. Wat1 |
| W012 | Fuel S. Wat2 |
| W013 | Fuel S. Wat3 |

| **Goods Movement ****&**** Account Assignment for IFCU **** ** |
| --- |
| **Field ** | **Code ** | **Description** |
| Material Movement | 1 | Material Consumption (1): IFCU |
| Goods Movement | Goods Movement | AWP Fuel Consumption |
| Code | 03 | 03 |
| Goods Issue | 201 | Goods Issue_ GI for Cost Center |
| GI/ Reversal | 202 | RE for Cost Center |
| Cost Center | Cost Center | Cost Center |

## Technical/Development Related Items

	N/A	

| Explore Phase – PM Business Process Document |
| --- |
|  | Page 29 of 226 |
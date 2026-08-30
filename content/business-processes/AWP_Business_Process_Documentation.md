# Al-Watania Poultry (AWP) — Business Process Documentation
**DT Initiative 2025 | SAP S/4HANA Implementation**

---

> This document covers all uploaded process diagrams. Each section is named after the source file, explains the process it describes, defines every stage, role, decision point, and SAP transaction code referenced in the diagram.

---

## Table of Contents

1. [Poultry_Supply_Chain_Process](#1-poultry_supply_chain_process)
2. [From_Parent_to_Processing](#2-from_parent_to_processing)
3. [FromGPtoProcessing](#3-fromgptoprocessing)
4. [hatchery_business_process](#4-hatchery_business_process)
5. [C_Layer_Business_Process](#5-c_layer_business_process)
6. [Production_Process_in_SAP](#6-production_process_in_sap)
7. [SAP_Business_Process_-_Production](#7-sap_business_process---production)
8. [Processing_Workflow](#8-processing_workflow)
9. [REM_Confirmation](#9-rem_confirmation)
10. [Slaughterhouses_Business_Process](#10-slaughterhouses_business_process)

---

## 1. Poultry_Supply_Chain_Process

**File:** `Poultry_Supply_Chain_Process__1_.pdf`
**Type:** High-level supply chain overview diagram

### What This Document Covers

This is the top-level map of AWP's entire poultry supply chain. It shows how all facilities, suppliers, and processing units are physically connected and how materials flow between them. It is not a step-by-step SAP process — it is a network diagram showing who feeds whom.

### Key Components Explained

#### Supplier Categories

| Supplier Type | Role |
|---|---|
| **Grain Suppliers** | Deliver raw grain to the Yanbou Hub for feed production |
| **DOC Suppliers** | Provide Day-Old Chicks to broiler and parent rearing farms |
| **General Suppliers** | Supply other inputs (packaging, chemicals, etc.) |
| **GP Cross Company** | A separate legal entity that supplies Grand Parent (GP) stock |

#### Feed Mills (Processing Grains into Feed)

AWP operates multiple feed mills that receive grain from the Yanbou Hub and produce finished feed delivered to farms:

- **Feed Mill – Watania 1**
- **Feed Mill 3 – Watania 2**
- **Feed Mill 6 – Watania 2**
- **Feed Mill 4 – Wadi**
- **Feed Mill 5 – Wadi**

#### Hatcheries (Incubation and DOC Production)

AWP operates multiple hatcheries that receive hatching eggs from Parent Laying farms and produce Day-Old Chicks (DOC) sent to broiler farms:

- Hatchery 3, Hatchery 4, Hatchery 5, Hatchery 6, Hatchery 7, Hatchery 8

#### Parent Rearing Farms

These farms raise parent-stock pullets (young hens) from day-old chicks to laying age. Locations:
- **Parent Rearing – Dulfa**
- **Parent Rearing – Wadi**
- **Parent Rearing – Shery**

#### Parent Laying Farms

These farms house mature parent hens that produce hatching eggs sent to grading stations and then to hatcheries. Locations:
- **Parent Laying – Dulfa**
- **Parent Laying – Wadi**
- **Parent Laying – Kubid**
- **Parent Laying – Shery**

#### Grading Stations

Grading stations receive hatching eggs from parent laying farms, sort/grade them, and forward accepted eggs to hatcheries. Rejected eggs are handled as by-products. Locations:
- **Grading Station – Dulfa**
- **Grading Station – Wadi**
- **Grading Station – Kubid**
- **Grading Station – Shery**

#### Broiler Farms

Receive DOC from hatcheries and raise broiler chickens for approximately 27 days before transferring them to processing plants.

#### Commercial Layer Operations

A separate operation stream for egg production:
- **Layer Rearing** → raises layer pullets
- **Layer Laying** → production of commercial eggs

#### Processing & Further Processing

- **Processing:** Slaughter and primary processing (carcass, portions, packaging)
- **Further Processing:** Value-added products (cutups, deboning, etc.)
- **Agriculture:** Supporting agricultural activities

#### Qassim Central

A central distribution or logistics hub referenced in the diagram connecting to multiple downstream operations.

### Material Flow Summary

```
Grain Suppliers → Yanbou Hub → Feed Mills → All Farms
DOC Suppliers → Broiler Farms
GP Cross Company → Parent Rearing Farms
Parent Rearing → Parent Laying → Grading Stations → Hatcheries → Broiler Farms → Processing → Further Processing
Layer Rearing → Layer Laying → Egg Products
```

---

## 2. From_Parent_to_Processing

**File:** `From_Parent_to_Processing.pdf`
**Type:** Simplified end-to-end lifecycle flow + Detailed SAP swim-lane process

### What This Document Covers

This file contains two diagrams:

1. **Poultry Life-cycle: Parent → Processing (Simplified)** — A clean, stage-by-stage flow showing the physical journey of birds from Parent Rearing through to Finished Product Store, including Sales.
2. **Business Process from Parent Rearing, Pre-Laying, Laying, Hatchery, Broiler & Processing (Detailed)** — The full SAP swim-lane diagram with all roles, decisions, and SAP actions.

---

### Diagram A: Poultry Life-cycle: Parent → Processing (Simplified)

This diagram outlines 9 swim lanes, each representing a production stage. The flow is top-to-bottom.

#### Stage 1 — Parent Rearing

| Step | Description |
|---|---|
| Check Placement Plan | Verify that the house/farm capacity plan is in place before starting |
| Receive PO | Purchasing department creates and receives the Purchase Order for DOC |
| Create Production Orders (Pullets 19WK) | A production order is opened in SAP to track rearing birds to 19 weeks |
| GR Pullets 19WK | Goods Receipt posted when birds reach 19 weeks — transfer milestone |

#### Stage 2 — Purchasing Department

Creates the DOC Purchase Order (Create DOC PO) that triggers the supply of day-old chicks from external suppliers.

#### Stage 3 — Parent Pre-Laying

| Step | Description |
|---|---|
| Pullets 19WK (received) | Birds received from Parent Rearing at 19 weeks |
| Create Production Orders (Pullets 24WK) | New production order opened for the pre-laying phase |
| GR Pullets 24WK | Goods Receipt posted at 24 weeks — birds transfer to laying |

#### Stage 4 — Parent Laying

| Step | Description |
|---|---|
| Create Production Orders (Hatching Eggs) | Production order opened specifically for hatching egg production |
| Daily Hatching Eggs GR | Daily Goods Receipt of eggs produced — posted in SAP every day |
| GI By Product (Pullets 64WK) | Goods Issue of depleted hens (64 weeks old) as by-product |
| Plan for Sale? | Decision point: are the 64WK pullets sold externally or sent to processing? |
| GR By Product (Pullets 64WK) | If not for sale, GR posted internally for spent hens |

#### Stage 5 — Grading Station

| Step | Description |
|---|---|
| Create Production Orders (Graded Hatching Eggs) | Order opened for the grading operation |
| One Activity Confirmation | A single activity confirmed to record grading work done |
| GR (Graded Hatching Eggs) | Goods Receipt of accepted, graded eggs |
| By Product (Rejected Eggs) | Rejected/damaged eggs posted as by-product and sent to warehouse |

#### Stage 6 — Hatchery

| Step | Description |
|---|---|
| Create Production Orders (Broiler DOC) | Production order opened to track hatchery incubation |
| GR DOC | Goods Receipt of hatched Day-Old Chicks |

#### Stage 7 — By-Product Store

| Step | Description |
|---|---|
| Create STO (By Product) | Stock Transfer Order created to move rejected egg by-products |
| STO GR | Goods Receipt posted at the destination warehouse |

#### Stage 8 — Broiler

| Step | Description |
|---|---|
| Create Production Orders (Broiler 27 days) | Production order for broiler growing cycle |
| Change Catching Plan | Update the plan for when birds will be caught and transferred to processing |

#### Stage 9 — Processing

| Step | Description |
|---|---|
| GR From Order | Goods Receipt of birds received at the processing plant from broiler farms |
| GR Carcass | Goods Receipt of whole carcass produced after slaughter |
| Finished Product Packaging | Packaged products (whole birds, portions, etc.) posted in SAP |
| Transfer to Store | Finished goods transferred to the finished product cold store |
| Receive goods from a Different Plant | If processing is done at a different plant, an inter-plant GR is posted |

#### Stage 10 — Finish Product Store

- **Receive Finished Product** — Final receipt of packaged goods into cold storage.

#### Stage 11 — Sales / By-Product Sales

| Step | Description |
|---|---|
| Check Sales Plan | Verify the sales plan against available stock |
| Create Sales Order | Sales Order created in SAP (SD module) |
| Create Delivery | Delivery document created |
| Post Sales Order | Order posting confirms the sale |
| Invoice | Invoice generated for the customer |
| Completed | Transaction completed |

---

### Diagram B: Business Process from Parent Rearing to Processing (Detailed SAP Swim Lanes)

This is the same flow as above but adds:
- **Activity Confirmations (CO11N)** at each production stage
- **Daily QM Data recording** using SAP Fiori
- **DLV & TECO** (Delivery and Technical Completion) at the close of each production order
- The **BIO Asset Business Process** branching from Parent Pre-Laying into the BIO Asset module for tracking biological assets (live animals)

#### Key Additional Step: Close Production Order DLV & TECO

At the end of each stage (Rearing, Pre-Laying, Laying, Grading, Hatchery, Broiler), the production order is formally closed using:
- **DLV** = Delivery Completed indicator set on the order
- **TECO** = Technical Completion — the order is locked and no further postings are allowed

This appears 4 times in the detailed diagram, once per major stage.

---

## 3. FromGPtoProcessing

**File:** `FromGPtoProcessing.pdf`
**Type:** Detailed material-level SAP process with material numbers

### What This Document Covers

This is the most technically detailed diagram in the set. It maps the complete flow from the **Grand Parent (GP)** flock level through **Parent** operations, **Grading**, **Hatchery**, and into **Broiler** farms. It includes actual SAP material codes, plant numbers, and batch references.

### Plant Codes Referenced

| Plant | Description |
|---|---|
| **Plant 3100** | GP Hatchery |
| **Plant 3200** | GP Laying |
| **Plant 3300** | GP Rearing |
| **Plant 1230** | Parent Rearing |
| **Plant 1220** | Parent Laying |
| **Plant 1210** | Hatchery (Parent-level) |
| **Plant 1200** | Broiler |
| **Plant 1100** | Processing |

### CO Codes (Company Code / Controlling Object) Referenced

- **CO_Code 3000 GP** — Grand Parent operations
- **CO_Code 1010 Parent** — Parent operations
- **CO_Code 1000 Hatchery** — Hatchery operations
- **CO_Code 1000 Broiler** — Broiler operations

---

### Section A: Grand Parent (GP) Flow — Plant 3200 / 3100 / 3300

#### Step 1 — Receive GP Eggs (Plant 3100)
- Source: PO from GP supplier
- Material examples: `100800160042` Hatching Eggs F Line F-D, `100800160043` Hatching Eggs F Line M-C
- After receipt: eggs consumed in hatchery order

#### Step 2 — Receive Setted Eggs (Plant 3100)
- Material examples: `100800160124–127` GP Cobb-500 Setted Eggs by line
- Duration: 18 days in setter

#### Step 3 — Setting New Flock / Batch Management (Plant 3100)
- Setter runs for 18 days
- Batch management used for traceability

#### Step 4 — Receive Setted Eggs into Hatcher (Plant 3100)
- After 3 days in hatcher, DOC are produced
- GR DOP (Day-Old Parent) posted — male and female

#### Step 5 — GP Daily Egg Production (Plant 3200)
- BIO Asset batch reference assigned
- Eggs sent daily to hatchery
- Materials: `80001` Cobb-500 GP Hatching Eggs (M), `80002` Cobb-500 GP Hatching Eggs (F)

#### Step 6 — Convert Eggs / Store (Plant 3100)
- Batch management for converted eggs

#### Step 7 — GR Pullets 60WK (Plant 3200)
- At 60 weeks, GP hens depleted
- Materials: `100800160077` GP Female Chkn >60WK, `100800160078` GP Male Chkn >60WK

#### Step 8 — External Sales (Plant 3100)
- Some GP output may be issued to sales order with delivery

---

### Section B: Parent Flow — Plant 1230 / 1220

#### Step 1 — Receive DOP (Plant 1230)
- PO from Cross Company (inter-company purchase)
- Materials: `100800160004` Day Old Br. Parent F/Cobb-500, `100800160005` Day Old Br. Parent M/Cobb-500

#### Step 2 — Consume in Production Order / GR Pullet 19WK (Plant 1230)
- Feed consumption posted as Actual
- Materials: `100800160104` Parent Cobb-500-F /19WK, `100800160105` Parent Cobb-500-M /19WK

#### Step 3 — Consume in Production Order 24WK / Pre-Laying (Plant 1220)
- Birds transferred to Plant 1220 at 19 weeks
- GR Pullets 24WK posted
- Materials: `100800160113` Parent Cobb-500-F /24WK, `100800160114` Parent Cobb-500-M /24WK

#### Step 4 — Create Hatching Eggs Order / BIO Asset (Plant 1220)
- BIO Asset batch reference assigned for biological asset tracking
- Daily egg production confirmed

#### Step 5 — GR Pullets 64WK (Plant 1220)
- At 64 weeks, laying hens depleted
- Materials: `100800160122` Parents Female Chkn >64WK, `100800160123` Parents Male Chkn >64WK

---

### Section C: Grading Station — Plant 1210

| Step | Description | Materials |
|---|---|---|
| Consume in prod.or (Graded Hatching Eggs) | Receives graded eggs from Plant 1220 | `50001–50004` Broiler Hatching Eggs by breed |
| Actual CNF / One Activity | One activity confirmation covers grading work | — |
| By Product | Rejected eggs posted as by-product | `90006` unpacked rejected Hatching egg |
| GR Graded Eggs | Accepted graded eggs posted | `90008–90011` Graded eggs by breed |
| By Product send to warehouse | Rejected eggs moved to warehouse | — |
| Graded eggs sent to Hatchery | Accepted eggs forwarded to hatcher | — |

---

### Section D: Hatchery — Plant 1210

| Step | Description | Materials |
|---|---|---|
| Create Setting Order | Setting order opened; 21-day incubation begins | — |
| ACT:CNF | Activity confirmation during incubation | — |
| After 21 days: GR DOC | Day-Old Chicks hatched and received | `100800160023–100800160025` DOC by breed |
| Send to Broiler | DOC transferred to broiler plant | — |

---

### Section E: Broiler — Plant 1200

| Step | Description | Materials |
|---|---|---|
| Create Production Order | Broiler growing cycle order opened | `100800160092–100800160097` Broiler by breed/age |
| Daily Confirmation (ACT:CNF) | Daily activity confirmed | — |
| GR Broiler 27 days | After 26–27 days, GR posted for finished broilers | — |
| Send to Processing Plant (ACT:STD) | Transfer to Plant 1100 | — |

---

### Section F: Processing — Plant 1100

| Step | Description |
|---|---|
| Migo_GO / Receive from Order | Broilers received at processing plant |
| End | Processing workflow continues separately (see file 8 and 10) |

---

## 4. hatchery_business_process

**File:** `hatchery_business_process_-_Page_1.pdf`
**Type:** Physical operations process flow (not SAP-specific)

### What This Document Covers

This diagram describes the **physical hatchery operations** — what happens to eggs from the moment they arrive at the hatchery until DOC are graded and dispatched. It is split into two parallel tracks: **Cold Store** and **Setter → Hatcher**.

---

### Track A: Cold Store (Receiving and Storage)

| Step | Description |
|---|---|
| **Receive eggs from Parent** | Hatching eggs arrive from parent laying farms |
| **Grade eggs** | Initial grading on arrival |
| **Receive accepted graded eggs** | Only accepted eggs move forward |
| **Transfer eggs from grading trolley to hatchery trolley** | Physical transfer using coded trolleys |
| **Note: Reject — Cracked eggs** | Cracked eggs are rejected at this stage |
| **Hatchery trolley has a default tracking number** | Each trolley is assigned a number for batch/lot tracking |
| **Send to Cold Store** | Eggs stored in cold store until ready for setting |

---

### Track B: Setter → Hatcher

| Step | Description |
|---|---|
| **Receive eggs from Cold Store with batch number** | FIFO rule applies — oldest batch used first |
| **Candling on Day 10** | Eggs are inspected using candling light to check hatchability (fertility check) |
| **Sample candling to check hatchability** | Not all eggs are candled — a sample is used |
| **After 18–18.5 days: Transfer to Hatcher** | Eggs moved from setter to hatcher machine |
| **Rejected eggs during transfer** | Types of rejects at transfer: Rots, Short, Setting Break, Transfer Break |
| **Automation transfer** | The transfer process is automated |
| **Receive setted eggs** | Hatcher receives the transferred eggs |
| **After 2.5–3 days: Hatch-out** | Chicks hatch |
| **Grading** | Chicks graded by quality |
| **Hatch-out vaccination** | Vaccination given at hatch-out |
| **Grading after vaccine** | Second grading after vaccination |
| **Receive Grade A Chicks** | High-quality DOC accepted |
| **Rejects** | Dead chicks, culls, inject-dead, inject-culls removed |

---

### Quality Decision and By-Product Handling

| Outcome | Handling |
|---|---|
| **Rejected eggs** | Classified by reject type: Small, Cracked, Dirty Nest Box, Miss Shell, Offal |
| **Accepted eggs** | Move forward to hatcher |
| **Hatching Eggs By-Product** | Sent to warehouse |
| **Rejected eggs handling** | Formal by-product posting (ties to SAP by-product GR) |
| **Send to Hatchery** | Accepted graded eggs sent from grading station to hatchery for incubation |

---

## 5. C_Layer_Business_Process

**File:** `C_Layer_Business_Process.pdf`
**Type:** Commercial Layer — multiple process diagrams covering the full layer lifecycle

### What This Document Covers

This file contains **five diagrams** covering the complete commercial layer (egg-producing hen) operation:

1. Commercial Layer Rearing and Laying — Physical Process Flow
2. Business Process for Commercial Layer Rearing and Laying — Business-level detail
3. C.Layer Rearing Business Process — SAP swim-lane
4. C.Layer Laying Business Process — SAP swim-lane
5. Unpacked Egg Process and Eggs Packaging Process

---

### Diagram 1: Commercial Layer Rearing and Laying — Physical Process Flow

This shows the physical lifecycle of commercial layers from day-old chick to finished egg product in a storage facility.

#### Planning Phase
- **Production Planning** — Demand forecast, flock size planning, production targets

#### Services Team (First Cycle — Rearing)
- **Cleaning & Disinfection of Rearing Farm/Houses** — Bio-security preparation before chick placement
- **Scraping, Dry Cleaning** — Physical cleaning of houses

#### Rearing Phase
- **Receiving Day-Old Chicks** — DOC placed in rearing houses
- Management activities: Sample to lab, Feeding, Watering, Medication & Vaccination
- Duration: **up to 16–17 weeks**

#### Services Team (Second Cycle — Laying)
- **Cleaning & Disinfection of Laying Farm/Houses** — Houses prepared for pullet transfer
- **Scraping, Dry Cleaning**
- **Disposal of Spent Hens Manure** — Manure managed as by-product

#### Laying Phase
- **Receiving Pullet from Rearing Farm** — Pullets transferred at approximately 16–17 weeks
- **Egg Collection for Grading** — Daily egg collection with automated grading, candling, washing
- Management: Feeding, Watering, Medication & Vaccination up to depletion age (79–100 weeks)
- Reject handling: Thin shell, Broken & Dirty eggs collected separately

#### Grading Station
- **Printing → Trays → Grading → Packing in Carton → Stamping Date → Sealing the Carton**

#### Storing Phase
- **Finished Product Store** — Cartons moved to cold storage

---

### Diagram 2: Business Process for Commercial Layer Rearing and Laying

#### Planning Phase

| Step | Detail |
|---|---|
| **Forecast Demand** | Productivity Planning from Planning Dept; flock size plan; production plan determination |
| **Procurement Planning** | Identify DOC suppliers; breed selection; purchase schedule; packaging procurement plan |
| **Budgeting** | Calculate costs (chicks, feed, vaccines, labor, housing, transport); financial projections (ROI) |

#### Procurement Phase
- **Purchase Day-Old Chicks** — Triggered by procurement plan

#### Rearing Phase

| Step | Detail |
|---|---|
| **Receiving & Initial Inspection** | DOC received, health check performed |
| **Brooding (0–6 weeks)** | Temperature-controlled environment for chicks |
| **Growing (7–15 weeks)** | Standard grow-out phase |
| **Transfer Preparation (Week 15–16)** | Preparation for move to laying farm |

#### Services Team
- **Transportation** — Birds moved from rearing to laying farm
- **Farm Sanitation & Preparation** — Laying farm cleaned and prepared

#### Laying Phase

| Step | Detail |
|---|---|
| **Reception at Laying Farms** | Pullets received at laying facility |
| **Start Production — 20 Weeks** | Production formally begins at week 20 |
| **Daily Operations** | Egg collection, grading, feed/water monitoring |
| **Performance Monitoring** | KPIs tracked (eggs per hen, mortality, feed conversion) |
| **Proceed with Ongoing Production** | Cycle continues |

#### Feed Schedule (from the diagram)

| Phase | Feed Type | Week Range |
|---|---|---|
| Rearing | Starter layer | 0–6 |
| Rearing | Grower layer | 7–11 |
| Rearing | Developer layer | 12–16 |
| Laying | Pre-layer | 17–18 |
| Laying | Layer-01 | 19–36 |
| Laying | Layer-02 | 37–68 |
| Laying | Layer-03 | 69–100 |

#### Sales & Finance Phase

| Step | Detail |
|---|---|
| **Sales & Distribution** | Eggs sold and distributed |
| **Culling / Selling Spent Hens** | End-of-life hens sold or culled at depletion age |
| **Evaluate Flock Performance** | Financial and production review |
| **Continue or Cull?** | Decision: start new cycle or cull flock |
| **Ready for Next Cycle** | If continue — farm is prepared again |

---

### Diagram 3: C.Layer Rearing Business Process (SAP Swim-Lane)

**Plant:** 1260 — Commercial Layer Rearing
**Cycle:** Every 3 months, six houses transferred from Rearing to Laying

#### Swim Lane: Rearing Farm Responsibility

| SAP Step | T-Code | Description |
|---|---|---|
| Check Placement Plan | COOIS | Verify placement schedule is correct |
| Create Production Order | CO01 | Open new order for the rearing house/batch |
| Update Order Data | CO02 | Adjust order details (quantities, dates) |
| Release Order | CO02 | Formally release the order for execution |
| GI DOC to Order | MIGO_GR | Goods Issue of Day-Old Chicks against the production order |
| Daily Confirmations | CO11N | Confirm daily activities (feed, water, mortality) |
| Daily Activity Recording (QM) | QA32 / ZPPH3 | Record quality data daily |
| Vaccination / Medication / Lab | PHD lane | Health activities confirmed by PHD team |
| Check Transfer Plan | — | Review whether it is time to transfer birds to laying |
| Change Transfer Age? | — | Decision point: Yes = adjust transfer age; No = proceed normally |
| Adjust GR Operation Control Key | CO02 | If No: modify the GR control key on the order |
| GR Pullet | MIGO_GR | Goods Receipt of pullets transferred to laying farm |
| Production Order TECO | CO02 | Technically complete the production order |
| Inspection Lot Usage Decision | QA11 | QM decision on the inspection lot |

**Additional T-Codes listed:**
- `ZPPHLWEEKLY` — Production Order Live Operation Data (weekly report)
- `CO03` — Display Production Order

---

### Diagram 4: C.Layer Laying Business Process (SAP Swim-Lane)

**Plant:** 1250 — Commercial Layer Laying
**KPIs tracked:**
- Total eggs per hen housed at 80 weeks = Total eggs production / total hens at point of lay %
- Total net eggs per hen housed at 80 weeks (same formula)
- Same metric for GP flocks

#### Swim Lane: Laying Farm Responsibility

| SAP Step | T-Code | Description |
|---|---|---|
| Check Placement Plan | — | Verify laying farm placement schedule |
| Create Production Order | CO01 | Open order for the laying house/batch |
| Update Order Data | CO02 | Set order parameters |
| Release Order | CO02 | Release order for production |
| BIO Asset Business Process | — | Triggers biological asset management module |

#### Swim Lane: Shop Floor Controller

| SAP Step | T-Code | Description |
|---|---|---|
| Daily Confirmations | CO11N | Daily operations confirmed |
| Daily Activity Recording (QM) | ZPPH3 | QM data recorded daily |
| Daily Eggs GR | MIGO_GO | Goods Receipt of eggs produced each day |
| Need to Change Depletion Plan? | — | Decision: Yes = Change Production Age; No = proceed |
| Change Production Age | CO02 | Modify the depletion age in the production order |
| Check GR Birds Age >80wk | — | If No change needed: verify if birds exceed 80 weeks |
| Depletion of Birds at Planned Age | MIGO | GR of spent hens at planned depletion age (Mvt 531) |
| Production Order TECO | CO02 | Technically complete the order |
| Inspection Lot Usage Decision | QA11 | Final QM decision on inspection lot |

**Materials referenced (Plant 1250):**

| Material | Description |
|---|---|
| 60001 | 1250 CL EGG HISEX-WHITE |
| 60002 | 1250 CL EGG LSL-WHITE |
| 60005 | 1250 CL EGG HY-LINE-WHITE |
| 90001 | 1250 unpacked table egg |
| 90002 | 1250 unpacked Grade C egg |
| 8210132 | 1250 white egg small s.pack 300pc, 10Tx30pc |
| 8210133 | 1250 white egg ML s.pack 300pc, 10Tx30pc |
| 8220303 | 1250 white egg XL s.pack 250pc, 25Tx10pc |
| 8220301 | 1250 white egg G.C 360pc, 12Tx30pc |

**Notes from diagram:**
- For Commercial Layer GR, Batch is generated automatically
- Items (Feed, Vaccines, etc.) are issued to production order via CO11N as backflush
- Birds >80 weeks posted as by-product using Movement Type 531 (GR to house storage)

---

### Diagram 5: Unpacked Egg Process

A short 4-step process for handling unpacked eggs:

| Step | Description |
|---|---|
| Create Production Order (unpacked) | A specific production order is opened for unpacked egg output |
| Confirm One Activity | One activity confirmation posted to record the work |
| Unpacked Egg GR | Goods Receipt of unpacked eggs (materials 90001, 90002) |
| Production Order TECO | Order technically completed |

---

### Diagram 6: Eggs Packaging Process

A 4-step repetitive manufacturing confirmation process for packed egg products:

| Step | Description |
|---|---|
| Collective Entry Confirmation | All packaging confirmations entered together |
| Write Required Data | Key data (quantity, date, batch) recorded |
| Generate Automatic Batch | SAP generates a batch number automatically for the packaged product |
| Post With Correction | Final posting with any corrections applied |

---

## 6. Production_Process_in_SAP

**File:** `Production_Process_in_SAP_.pdf`
**Type:** Master comparison table — production parameters by plant

### What This Document Covers

This is a reference table that defines, for **every AWP plant**, the following five production parameters:

1. **Production Process** — whether the plant uses Production Order or Repetitive Manufacturing (REM)
2. **Product Delivery** — which SAP transaction is used to post output
3. **Consume BOM** — whether components are consumed at Actual or Standard quantities
4. **Traceability** — whether Batch Management is active
5. **Variance Distribution** — settled at Order Level or Month-End
6. **Order Type** — which custom AWP order type applies

### Full Table

| Plant | Name | Production Process | Product Delivery | Consume BOM | Traceability | Variance | Order Types |
|---|---|---|---|---|---|---|---|
| **3300** | GP-Rearing | Production Order | Migo | Actual (feed, Meds, vaccine) | — | Order Level | YPP1 (pullet), YPP5 (floor house) |
| **3200** | GP-Laying | Production Order | Migo | Actual (feed, Meds, vaccine) | Batch mgmt | Order Level | YPP1 (Pullet), YPP4 (HEggs), YPP5 (floor house) |
| **3100** | GP Hatchery | Production Order | Migo & Co11n | Actual (feed, Meds, vaccine) | Batch mgmt | Order Level | YPP1 (DOC), YPP3 (Graded eggs) |
| **1230** | Parent-Rearing | Production Order | Migo | Actual (feed, Meds, vaccine) | — | Order Level | YPP1 (pullet), YPP5 (floor house) |
| **1220** | Parent-Laying | Production Order | Migo | Actual (feed, Meds, vaccine) | Batch mgmt | Order Level | YPP1 (Pullet), YPP4 (HEggs), YPP5 (floor house) |
| **1210** | Hatchery | Production Order | Migo | Actual (feed, Meds, vaccine) | Batch mgmt | Order Level | YPP1 (DOC), YPP3 (Graded eggs) |
| **1200** | Broiler | Production Order | Migo | Actual (feed, Meds, vaccine) | — | Order Level | YPP1 (DOC), YPP5 (floor house) |
| **1100** | Processing | Repetitive Manufacturing | MF42N | STD | — | Month-End | — |
| **1050** | Further-Processing | Production Order | Migo | Actual | Batch mgmt | Order Level | YPP2 |
| **1010** | Finished-Water | Repetitive Manufacturing | MF42N | STD | — | Month-End | — |
| **1020** | Protein-Fact. | Repetitive Manufacturing | MF42N | STD | — | Month-End | — |
| **1130** | Manure-Fact. | Repetitive Manufacturing | MF42N | STD | — | Month-End | — |
| **1120** | Feed-Mill | Production Order | Co11N | Actual | — | Order Level | YPP2 |
| **1140** | Yanbu-Grain | Repetitive Manufacturing | MF42N | STD | — | Month-End | — |
| **1260** | C.Layer-Rearing | Production Order | Migo | Actual (feed, Meds, vaccine) | — | Order Level | YPP1 (pullet), YPP5 (Cage house) |
| **1250** | C.Layer-Laying | Production Order | Migo | Actual (feed, Meds, vaccine) | — | Order Level | YPP4 (Eggs order), YPP3 (unpacked egg) |
| **1250** | C.Layer-Finished Product | Repetitive Manufacturing | MF42N | Actual | Batch mgmt | Month-End | — |

### Term Definitions (from the document)

| Term | Definition |
|---|---|
| **MIGO** | Goods issue posted to the production order using the MIGO transaction |
| **CO11N** | Production order confirmation transaction that records actual production quantities and activities |
| **MF42N** | Repetitive Manufacturing backflush transaction — confirms production and issues components simultaneously |
| **Consume BOM – Actual** | Components issued based on actual quantities consumed (backflushing or manual GI) |
| **Consume BOM – Standard** | Components issued per standard BOM quantities — typically used in REM |
| **Order-Level Variance** | Variances calculated and settled individually for each production order |
| **Month-End Variance** | Variances accumulated during the period and settled collectively at month-end — typical in REM |
| **Batch Management** | Enables lot/batch traceability — required for food safety and regulatory compliance |
| **REM (Repetitive)** | A Repetitive Manufacturing plant where production runs in a continuous flow without tracking individual orders |

---

## 7. SAP_Business_Process_-_Production

**File:** `SAP_Business_Process_-_Production.pdf`
**Type:** Detailed SAP swim-lane processes — PCT Parent, Parent Rearing, Parent Pre-Laying & Laying

### What This Document Covers

This file contains three swim-lane diagrams with role-based responsibilities:

1. **PCT Parent Process** (left side of Page 1)
2. **Parent Rearing Process** (right side of Page 1)
3. **Parent Process Pre-Laying & Laying** (Page 2)

---

### Diagram 1: PCT Parent Process (House Preparation)

**Purpose:** Manage house/farm preparation before birds arrive. PCT = Production Control Team.

| Role | Step | Description |
|---|---|---|
| PCT Responsible | Check Preparation Plan | Verify the house is ready for the upcoming flock |
| PHD Responsible | Request Disinfectant & Medication | PHD team requests needed chemicals and medicines |
| PCT Responsible | Create Production Order (House Preparation) | Order opened for the preparation activity |
| PCT Responsible | Order Approval | Order approved before execution |
| PCT Responsible | Activity Confirmation | Confirmation that house prep activities were done |
| PCT Responsible | House Prepared GR | Goods Receipt confirming the house is ready |
| Parent Rearing/Laying | Issue to Parent Rearing/Laying Order | Prepared house issued to the relevant production order |
| PCT Responsible | Production Order DLV & TECO | Order closed after house is ready |

---

### Diagram 2: Parent Rearing Process

**Roles involved:** PCT Responsible, GP-Hatchery Responsible, Parent Rearing Responsible, PHD Responsible, Parent Laying Responsible

| Role | Step | Description |
|---|---|---|
| Parent Rearing | Check Placement Plan | Verify flock placement schedule |
| Parent Rearing | Create DOC PO | Purchase Order for Day-Old Chicks |
| GP-Hatchery | Issue Day-Old Chicks | Hatchery issues DOC to rearing farm |
| Parent Rearing | Receive PO | PO receipt confirmed |
| Parent Rearing (One Time) | Create Production Orders (Pullets 19WK) | Order created once per flock — tracks rearing to 19 weeks |
| Parent Rearing (One Time) | Update Order Data | Order data (quantities, operations) updated |
| Parent Rearing (One Time) | Order Approval | Order approved |
| Parent Rearing Responsible | Record Daily QM Data (SAP Fiori) | Quality data recorded daily on Fiori app |
| Parent Rearing Responsible | Activity Confirmation | Daily production confirmed (CO11N) |
| PHD Responsible | Confirm Vaccine Activity | PHD confirms vaccination activity separately |
| Parent Rearing Responsible | GR Pullets 19WK | Goods Receipt at 19 weeks — transfer milestone |
| Parent Rearing (One Time) | Close Production Order DLV & TECO | Order closed after transfer |
| Parent Laying | Birds Receiving | Parent Laying farm confirms receipt of pullets |

---

### Diagram 3: Parent Process Pre-Laying & Laying

**Roles:** PCT Responsible, Parent Rearing Responsible, Parent Pre-Laying Responsible, PHD Responsible, Parent Laying Responsible, Grading Station Responsible, Processing Responsible, Sales Responsible

#### PCT Parent Process (left side — House Preparation for Laying)

Same structure as the PCT Parent Process above but targeted at the Laying farm house preparation. Steps: Check Preparation Plan → Create Production Order → Order Approval → Activity Confirmation → House Prepared GR → Issue to Parent Laying Order → DLV & TECO.

#### Parent Pre-Laying Responsible

| Step | Description |
|---|---|
| Check Placement Plan | Verify pre-laying placement schedule |
| Create Production Orders (Pullets 24WK) — One Time Action | Order created for pre-laying phase |
| Update Order Data | Order parameters adjusted |
| Order Approval | Order approved |
| Record Daily QM Data (SAP Fiori) | Daily QM entries |
| Activity Confirmations | Daily production confirmed |
| GR (Pullets 24WK) | Goods Receipt at 24 weeks |
| Production Order DLV & TECO | Order closed |
| Issue House Preparation | House prep issued |
| Issue (Pullets 19WK) | Pullets from rearing issued to pre-laying order |

#### Parent Laying Responsible

| Step | Description |
|---|---|
| Birds Receiving (Pullets 24WK) | Receiving pullets at laying farm |
| Create Production Orders (Hatching Eggs) — One Time Action | Hatching egg production order created |
| Update Order Data | Order updated |
| Order Approval | Approved |
| Record Daily QM Data (SAP Fiori) | QM data daily |
| Activity Confirmation | Daily confirmed |
| Daily Hatching Eggs GR | Eggs received daily in SAP |
| GI By Product (Pullets 64WK) | Spent hens issued as by-product at end of cycle |
| Check Sales Plan | Is flock sold or sent to processing? |
| YES → Issue to Sales Order | Spent hens sold externally via Sales Order |
| NO → Issue to Processing | Spent hens sent to processing plant |
| Production Order DLV & TECO | Order closed |

#### Grading Station Responsible

- **Daily Hatching Eggs GR** — Grading station receives and posts eggs daily
- **GI By Product (Pullets 64WK)** — By-product posting for rejected eggs

#### Sales Responsible

- **Create Sales Order** — If spent hens are to be sold, a Sales Order is created
- **Issue to Sales Order** — Goods issued against the Sales Order

---

## 8. Processing_Workflow

**File:** `Processing_Workflow.pdf`
**Type:** SAP processing plant workflow — product flow with material codes and movement types

### What This Document Covers

This diagram shows how **live broilers arriving at the processing plant (Plant 1100)** are converted into carcasses, portions, and by-products in SAP using Repetitive Manufacturing (REM) with Assembly Backflush (MF42N).

### Key SAP Parameters

| Parameter | Value |
|---|---|
| Transaction | MF42N (Assembly Backflush — REM) / MFBF |
| Confirmation Type | Assembly Backflush |
| Movement Types | 261 (component issue), 531 (by-product GR) |
| Plant | 1100 (Processing) |

### Product Flow

#### Step 1 — Consume Live Broilers (Material 911)

- Broilers consumed as raw material (Movement Type 261)
- Input material: `911` (live chicken)
- This feeds all downstream production orders

#### Step 2 — Fresh / Frozen Whole Chicken Production (Materials 930–933)

| Material | Description |
|---|---|
| 930 | A.G Fresh (whole chicken, fresh) |
| 931 | A.G Frozen (whole chicken, frozen) |
| 932 | W.Chkn B.G |
| 933 | B.G Cutups Meat |

- Transaction: **MF42N / MFBF** (REM Assembly Backflush)
- Create Production Order Header 930 to increase stock
- Goods Receipt posted to increase stock of 930 Fresh

#### Step 3 — By-Products from Whole Chicken (GR via Movement Type 531)

When whole chickens are processed, the following by-products are received simultaneously:

| Material | Description |
|---|---|
| 504 | Chicken Feather |
| 507 | Chicken Gizzard |
| 508 | Chicken Heart |
| 511 | Chicken Liver |
| 512 | Chicken Neck |
| 514 | Chicken Feet |
| 517 | Blood |
| 518 | Non-edible Viscera |

**Note from diagram:** A co-product is a material produced alongside a main product in a single production process. It is not the primary outcome but is also a valuable product that can be sold or used.

#### Step 4 — Consume Whole Legs (Material 501)

After whole chicken is produced, whole legs are processed further:

| Step | Description |
|---|---|
| Consume 801, 802, 803, 804 | Portion-specific materials consumed |
| Create Production Order Header 501 | Order opened for whole leg processing |
| Goods Receipt | Whole legs received |

**Outputs:**
- `501` — Unpacked whole legs
- `502` — Unpacked breast w/bone
- `503` — Unpacked wings

#### Step 5 — Consume Whole Legs for Thighs & Drumsticks (Material 505)

| Step | Description |
|---|---|
| Create Production Order Header 505 | Order for further portioning |
| Consume 501 (whole legs) | Whole legs used as input |
| Goods Receipt | Thighs and drumsticks received |

**Outputs:**
- `505` — Unpacked thighs
- `506` — Unpacked drumsticks

**Note:** Co-products and by-products are explicitly distinguished in the diagram:
- **Co-Product** = materials 505, 506 (thighs, drumsticks) — valuable, planned
- **By-Product** = offal, feathers, blood — secondary, posted with Mvt 531

---

## 9. REM_Confirmation

**File:** `REM_Confirmation__1_.pdf`
**Type:** REM confirmation process for the Processing Plant (Plant 1100) — daily and month-end

### What This Document Covers

This diagram explains how the **Repetitive Manufacturing (REM) confirmation** process works at the processing plant. It is split into two tracks: **Daily Process** and **End of Month Process**.

### Key SAP Parameters

**For the Parent node (Assembly Backflush):**
- Posting date: selected by user
- Confirmation Type: **Assembly Backflush**
- Material: 920
- Plant: 1100
- Production version: 120
- Batch: appears automatically

**For the End of Month (Component Backflush):**
- Posting date: selected
- Confirmation Type: **Component Backflush**
- Material: 920
- Plant: 1100
- Production version: 120
- Batch: appears automatically

---

### Starting Point: GR Pullet 64WK (Parent Node)

Before the REM daily process begins, a Goods Receipt for Pullet 64WK is posted. This represents the assembly backflush starting point — live birds arriving at the processing plant.

---

### Track A: Daily Process (Processing Plant Swim Lane)

| Step | Description |
|---|---|
| **Start** | Daily process initiated |
| **REM Confirmation** | MF42N transaction opened; posting date and confirmation type selected |
| **Post with Correction** | Quantities corrected if needed before final posting |
| **Add the Classification** | Classification data (e.g., grade, weight class) added to the confirmation |
| **Save without Component** | Saved without consuming components — components are handled at month-end |
| **End** | Daily process complete |

**Key point:** During daily processing, components (feed, packaging, etc.) are NOT posted. Only the finished product output is confirmed.

---

### Track B: End of Month Process

| Step | Description |
|---|---|
| **REM Confirmation** | Month-end confirmation opened |
| **Process Component List** | Full list of components (materials consumed during the month) is reviewed |
| **Is Inventory Available?** | Decision point — check if stock covers the component quantities |
| **YES → Update Data** | Component quantities updated based on actual inventory |
| **YES → Save** | Data saved — month-end posting complete |
| **NO → Return to Process Component List** | If inventory is insufficient, go back to resolve the shortage |
| **End** | Month-end REM confirmation complete |

**Key concept:** In REM environments, variance is settled at **Month-End** — not per order. This is why components are only posted at month-end after inventory is confirmed.

---

## 10. Slaughterhouses_Business_Process

**File:** `Slaughterhouses_Business_Process.pdf`
**Type:** Physical slaughterhouse operations process flow with timing data

### What This Document Covers

This diagram shows the complete physical workflow inside AWP's slaughterhouse (Processing Plant). The flow is divided into two zones — **Dirty Area** (from live bird receipt through evisceration) and **Clean Area** (from packing through storage). Timing data is included for key stages.

---

### Zone 1: Dirty Area

#### Receiving Area

| Step | Timing | Description |
|---|---|---|
| **Receiving Truck** | — | Live bird trucks arrive at the plant |
| **Unloading Boxes** | Leave boxes 30 min after unloading | Crates/boxes unloaded and birds rested |
| **Transfer Boxes to GP System** | — | Boxes logged into the tracking/GP system |
| **Hanging** | 55 seconds cycle | Birds hung on the processing line |

#### Slaughtering Area

| Step | Timing | Description |
|---|---|---|
| **Slaughtering** | — | Birds slaughtered (halal process) |
| **Bleeding** | 3:30 min | Blood drainage time after slaughter |
| **Head Pulling** | — | Heads removed from carcass |

#### Plucker Area

| Step | Timing | Description |
|---|---|---|
| **Scalding** | 1:55 min | Carcasses dipped in hot water to loosen feathers |
| **De-feathering** | — | Feathers removed by plucker machines |
| **Stunning** | 1:50 min | Post-processing stun step |
| From Scalding to Stunning total: | **1:25 min** | Overall time for this sub-section |
| After Plucker to Evisceration: | **22 sec** | Transfer time |

#### Evisceration Area

This is the longest stage. Total **EV Process time: 5:07 min**

| Step | Description |
|---|---|
| **Leg Cutting** | Legs cut from carcass |
| **Vent Cutting** | Vent area cut to open the body cavity |
| **Vent Opening** | Body cavity opened |
| **Eviscerating** | Internal organs removed |
| **Crop Machine** | Crop (digestive organ) removed by machine |
| **Neck Cracker** | Neck broken/separated |
| **Final Inspection Machine** | Automated inspection for completeness |
| **Sanitizing** | Carcass sanitized |

---

### Zone 2: Clean Area

#### Packing Phase

| Step | Description |
|---|---|
| **Chilling** | Carcasses chilled to food-safe temperature |
| **Weighing** | Each carcass or batch weighed |
| **Grading** | Carcasses graded by quality |
| **Grade C → Portion** | Grade C carcasses sent to portioning (further processing) |
| **Grade A → Packaging** | Grade A carcasses packaged as whole birds |

#### Grade C Further Processing (referenced in diagram extension)

| Step | Description |
|---|---|
| Grade C Chicken Hanging | Grade C birds hung on secondary line |
| Wing Separator | Wings separated |
| Wing Cutter | Wings cut to size |
| Breast Cutter | Breast separated |
| Breast Cap | Breast cap portion |
| Backbone Cutter | Backbone cut |
| Rabbit Meat / Debone | Deboning for specific products |
| Whole Leg Machine | Whole legs produced |
| Drumstick Machine | Drumsticks separated |
| Grading → Grade A / Grade C | Further grading of portions |
| Packaging (G. Mondini Machine) | Automated packaging machine |
| MDM Machine | Mechanically Deboned Meat machine |
| Breast Fillets / Breast Bone | Fillet and bone products produced |
| BSM Machine | Bone Separation Machine |
| End | Grade C processing complete |

#### Blast Phase

| Step | Description |
|---|---|
| **Finish Product Frozen** | Frozen products enter blast freezer |
| **Finish Product Fresh** | Fresh products bypass freezer |
| **Palletizing** | Products placed on pallets |
| **Transfer the Pallet** | Pallets moved to storage |

#### Storage Stage

| Step | Description |
|---|---|
| **Receive the Pallet** | Cold store receives and logs the pallet |
| **End** | Slaughterhouse process complete |

---

## Appendix: Key SAP T-Code Reference

| T-Code | Full Name | Usage Context |
|---|---|---|
| **CO01** | Create Production Order | Open a new production order |
| **CO02** | Change Production Order | Modify an existing order |
| **CO03** | Display Production Order | View order details |
| **CO11N** | Production Order Confirmation | Record actual daily quantities and activities |
| **COOIS** | Production Order Information System | Check placement plans and order status |
| **MIGO** | Goods Movement | Post Goods Receipts and Issues |
| **MIGO_GR** | Goods Receipt (via MIGO) | Receive materials/products against a production order |
| **MIGO_GO** | Goods Issue (via MIGO) | Issue materials against a production order |
| **MF42N** | REM Backflush | Repetitive Manufacturing confirmation and component issue |
| **MFBF** | REM Backflush (alternative) | Assembly backflush in REM |
| **QA11** | Record Usage Decision | Finalize quality inspection lot |
| **QA32** | Change Inspection Lot Data | Record and update QM data |
| **ZPPH3** | Custom: Daily QM Data Recording | AWP custom T-Code for QM data |
| **ZPPHLWEEKLY** | Custom: Live Operation Data Weekly | AWP custom production report |

---

## Appendix: Key AWP Plant Reference

| Plant | Name |
|---|---|
| 3300 | GP Rearing |
| 3200 | GP Laying |
| 3100 | GP Hatchery |
| 1230 | Parent Rearing |
| 1220 | Parent Laying |
| 1210 | Hatchery (Parent) |
| 1200 | Broiler |
| 1100 | Processing |
| 1050 | Further Processing |
| 1010 | Finished Water Plant |
| 1020 | Protein Factory |
| 1130 | Manure Factory |
| 1120 | Feed Mill |
| 1140 | Yanbu Grain |
| 1260 | C.Layer Rearing |
| 1250 | C.Layer Laying / C.Layer Finished Product |

---

*Document prepared based on AWP DT Initiative 2025 process diagrams. All process steps, material codes, T-codes, and plant numbers are sourced directly from the uploaded diagrams.*

# PP-ORG-040 Production Supervisor-V2

| PP-ORG-040: production supervisor |
| --- |

## Definition 

Group responsible for controlling the production of a material.

Among other things, the production supervisor determines how capacity requirements are calculated for a material during a scheduling run.

| **Production Supervisor Code** | **Production Supervisor Description** | **Plant** | **Plant Description** | **Prod.Sch.Profile** |
| --- | --- | --- | --- | --- |
| F2 | Finished Fresh | 1050 | Further Processing | YPP2 |
| F3 | Finished Frozen | 1050 | Further Processing | YPP2 |
| F4 | Semi-Finished | 1050 | Further Processing | YPP3 |
| P01 | Carcass | 1100 | Processing | YPP4 |
| P02 | Whole bird | 1100 | Processing | YPP3 |
| P03 | Cutups | 1100 | Processing | YPP3 |
| P04 | Giblets | 1100 | Processing | YPP3 |
| P05 | Whole bird Fresh finished products | 1100 | Processing | YPP2 |
| P06 | Whole bird Frozen finished products | 1100 | Processing | YPP2 |
| P07 | Cutups Fresh finished products | 1100 | Processing | YPP2 |
| P08 | Cutups Frozen finished products | 1100 | Processing | YPP2 |
| P09 | Soft Meat Products | 1100 | Processing | YPP2 |
| Z1 | Grains | 1140 | Yanbu Hub | YPP3 |
| FM1 | Broiler | 1150 | Feed Mill Watania1 | YPP3 |
| FM2 | Layer | 1150 | Feed Mill Watania1 | YPP3 |
| FM3 | Fish | 1150 | Feed Mill Watania1 | YPP3 |
| FM4 | Parent | 1150 | Feed Mill Watania1 | YPP3 |
| FM5 | Grand Parent | 1150 | Feed Mill Watania1 | YPP3 |
| FM1 | Broiler | 1160 | Feed Mill Watania2 - FM3 | YPP3 |
| FM2 | Layer | 1160 | Feed Mill Watania2 - FM3 | YPP3 |
| FM3 | Fish | 1160 | Feed Mill Watania2 - FM3 | YPP3 |
| FM4 | Parent | 1160 | Feed Mill Watania2 - FM3 | YPP3 |
| FM5 | Grand Parent | 1160 | Feed Mill Watania2 - FM3 | YPP3 |
| FM1 | Broiler | 1170 | Feed Mill Watania2 - FM6 | YPP3 |
| FM2 | Layer | 1170 | Feed Mill Watania2 - FM6 | YPP3 |
| FM3 | Fish | 1170 | Feed Mill Watania2 - FM6 | YPP3 |
| FM4 | Parent | 1170 | Feed Mill Watania2 - FM6 | YPP3 |
| FM5 | Grand Parent | 1170 | Feed Mill Watania2 - FM6 | YPP3 |
| FM1 | Broiler | 1180 | Feed Mill Wadi FM4 | YPP3 |
| FM2 | Layer | 1180 | Feed Mill Wadi FM4 | YPP3 |
| FM3 | Fish | 1180 | Feed Mill Wadi FM4 | YPP3 |
| FM4 | Parent | 1180 | Feed Mill Wadi FM4 | YPP3 |
| FM5 | Grand Parent | 1180 | Feed Mill Wadi FM4 | YPP3 |
| FM1 | Broiler | 1190 | Feed Mill Wadi FM5 | YPP3 |
| FM2 | Layer | 1190 | Feed Mill Wadi FM5 | YPP3 |
| FM3 | Fish | 1190 | Feed Mill Wadi FM5 | YPP3 |
| FM4 | Parent | 1190 | Feed Mill Wadi FM5 | YPP3 |
| FM5 | Grand Parent | 1190 | Feed Mill Wadi FM5 | YPP3 |
| C1 | Control | 1200 | Broiler | YPP1 |
| N1 | Normal | 1200 | Broiler | YPP1 |
| T1 | Trial | 1200 | Broiler | YPP1 |
| F5 | House Preparation | 1200 | Broiler |  |
| F4 | Semi-Finished | 1200 | Broiler |  |
| ZZ1 | Old Data | 1200 | Broiler |  |
| S1 | Setter | 1210 | Hatchery | YPP1 |
| H1 | Hatcher | 1210 | Hatchery | YPP1 |
| TR1 | Transfer | 1210 | Hatchery | YPP1 |
| F1 | Finished Product | 1210 | Hatchery | YPP2 |
| C1 | Control | 1220 | Parents - Laying | YPP1 |
| F1 | Finished Product | 1220 | Parents - Laying | YPP2 |
| F4 | Semi-Finished | 1220 | Parents - Laying | YPP3 |
| F5 | House Preparation | 1220 | Parents - Laying | YPP5 |
| N1 | Normal | 1220 | Parents - Laying | YPP1 |
| N2 | Normal (Periodic Settlement) | 1220 | Parents - Laying | YPP4 |
| T1 | Trial | 1220 | Parents - Laying | YPP1 |
| C1 | Control | 1230 | Parents - Rearing | YPP1 |
| F4 | Semi-Finished | 1230 | Parents - Rearing | YPP3 |
| F5 | House Preparation | 1230 | Parents - Rearing | YPP5 |
| N1 | Normal | 1230 | Parents - Rearing | YPP1 |
| T1 | Trial | 1230 | Parents - Rearing | YPP1 |
| ZZ1 | Old Data | 1230 | Parents - Rearing | YPP1 |
| C1 | Control | 1231 | Parents - Laying - Dulfa | YPP1 |
| N1 | Normal | 1231 | Parents - Laying - Dulfa | YPP1 |
| T1 | Trial | 1231 | Parents - Laying - Dulfa | YPP1 |
| C1 | Control | 1232 | Parents - Laying - Wadi | YPP1 |
| N1 | Normal | 1232 | Parents - Laying - Wadi | YPP1 |
| T1 | Trial | 1232 | Parents - Laying - Wadi | YPP1 |
| C1 | Control | 1233 | Parents - Laying - Kubid | YPP1 |
| N1 | Normal | 1233 | Parents - Laying - Kubid | YPP1 |
| T1 | Trial | 1233 | Parents - Laying - Kubid | YPP1 |
| C1 | Control | 1234 | Parents - Laying - Shery | YPP1 |
| N1 | Normal | 1234 | Parents - Laying - Shery | YPP1 |
| T1 | Trial | 1234 | Parents - Laying - Shery | YPP1 |
| C1 | Control | 1241 | Parents - Rearing - Dulfa | YPP1 |
| N1 | Normal | 1241 | Parents - Rearing - Dulfa | YPP1 |
| T1 | Trial | 1241 | Parents - Rearing - Dulfa | YPP1 |
| C1 | Control | 1242 | Parents - Rearing - Wadi | YPP1 |
| N1 | Normal | 1242 | Parents - Rearing - Wadi | YPP1 |
| T1 | Trial | 1242 | Parents - Rearing - Wadi | YPP1 |
| C1 | Control | 1244 | Parents - Rearing - Wadi | YPP1 |
| N1 | Normal | 1244 | Parents - Rearing - Wadi | YPP1 |
| T1 | Trial | 1244 | Parents - Rearing - Wadi | YPP1 |
| C1 | Control | 1250 | C Layer - Laying | YPP1 |
| N1 | Normal | 1250 | C Layer - Laying | YPP1 |
| T1 | Trial | 1250 | C Layer - Laying | YPP1 |
| F1 | Finished Product | 1250 | C Layer - Laying | YPP2 |
| F4 | Semi-Finished | 1250 | C Layer - Laying | YPP3 |
| F5 | House Preparation | 1250 | C Layer - Laying | YPP5 |
| N2 | Normal (Periodic Settlement) | 1250 | C Layer - Laying | YPP4 |
| C1 | Control | 1260 | C Layer - Rearing | YPP1 |
| N1 | Normal | 1260 | C Layer - Rearing | YPP1 |
| T1 | Trial | 1260 | C Layer - Rearing | YPP1 |
| F4 | Semi-Finished | 1260 | C Layer - Rearing | YPP3 |
| F5 | House Preparation | 1260 | C Layer - Rearing | YPP5 |
| ZZ1 | Old Data | 1260 | C Layer - Rearing | YPP1 |
| C1 | Control | 3200 | GP-Laying | YPP1 |
| N1 | Normal | 3200 | GP-Laying | YPP1 |
| T1 | Trial | 3200 | GP-Laying | YPP1 |
| ZZ1 | Old Data | 3200 | GP-Laying | YPP2 |
| F4 | Semi-Finished | 3200 | GP-Laying | YPP3 |
| F5 | House Preparation | 3200 | GP-Laying | YPP5 |
| N2 | Normal (Periodic Settlement) | 3200 | GP-Laying | YPP4 |
| C1 | Control | 3300 | GP-Rearing | YPP1 |
| N1 | Normal | 3300 | GP-Rearing | YPP1 |
| T1 | Trial | 3300 | GP-Rearing | YPP1 |
| F4 | Semi-Finished | 3300 | GP-Rearing | YPP3 |
| F5 | House Preparation | 3300 | GP-Rearing | YPP5 |
| ZZ1 | Old Data | 3300 | GP-Rearing | YPP1 |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 1 of 2 |
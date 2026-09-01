# PP-ORG-020 MRP Area-V2

| PP-ORG-020: MRP Area |
| --- |

## Definition 

The MRP area represents an organizational unit **for which material requirements planning is carried out independently** .

Basically, there are three types of MRP area:

- **Plant MRP Area**

The plant MRP area initially contains the plant together with all its storage locations and stock with subcontractors.

When you have defined MRP areas for storage locations and for subcontractors and you have assigned the materials, the plant MRP area is reduced by exactly this number of subcontractors and storage locations. This is because they are now to be planned separately.

- **MRP Areas for Storage Locations**

You can define an MRP area that consists of a particular storage location, by creating an MRP area and assigning the storage location to it. Material requirements for this storage location are then planned separately from the rest of the plant.

You can also group several storage locations into one MRP area, by creating an MRP area and assigning the storage locations to it. These storage locations are then planned together.

- **MRP Areas for Subcontractors**

You can also define an MRP area for each subcontractor.

**Use**

- You can carry out MRP specifically for the determined MRP areas. This enables you to carry out **differentiated material requirements planning** . The requester can be, for example, the production on a particular assembly line or a subcontract order.

- The MRP area allows you to have specific control over the staging and procurement of important parts produced in-house and purchased parts for each **shop floor area** . You can, however, also plan the provision of components for the individual **subcontractors** .

- MRP areas of the **storage location or subcontractor type** are only suitable for:

- components that are planned and produced **for stock**

- finished products that are planned and produced **for stock.** By assigning a storage location in a sales order or by entering an MRP area when creating the planned independent requirements, you can define whether a material is planned in the plant MRP area or in the MRP area of the storage location.

- Finished products and important assemblies intended for **make-to-order or engineer-to-order production** are always planned in the **plant MRP area** .

- The planning run takes into account the planning with MRP areas as follows:

- If you do not enter a separate scope of planning, the system plans the whole plant, that is, all MRP areas in the plant, during the **total planning run** . If you want to carry out a total planning run for a particular MRP area only, you must specify the required MRP area in the scope of planning.

- During **single-item, multi-level planning** , the system plans the selected material in the MRP area entered. In addition, the system takes into account planning file entries from other MRP areas, for example, if the material is to be procured using stock transfer.

- During **single-item, single-level planning** , the system plans the selected material in the MRP area entered only.

**Structure**

- You define the **MRP areas** in Customizing for MRP. You can thereby assign the following to an MRP area:

- **one or more storage locations** (example: you want to carry out planning for a particular assembly line and therefore assign a production storage location to the MRP area)

- **a subcontractor.**

You assign the various MRP areas to the materials in the **material master** . For this, you create an **MRP area segment** for a material for every MRP area, in which it is used. In this MRP area segment, you can define MRP parameters such as, for example, the lot size or MRP type. This allows you to plan the material differently in the MRP area from how you plan it in the plant MRP area.

Note

MRP with MRP areas for the material is not activated until the material has been assigned to an MRP area. If you have not assigned a material to an MRP area, that is, you have not created an MRP area segment in the material master, the material will continue to be planned in the plant MRP area only. If you have assigned an MRP area to it, the system can plan it in the plant MRP area and in the assigned MRP area.

 Caution

A storage location of a plant may be assigned to only one MRP area.

We will use MRP area to stop planning requirements come from sales demand to carcass in processing department, MRP type for carcass for MRP area (1100P1, 1100P2, 1100P3) will be “ND” no planning. The reason for that not affecting the carcass & broiler planning from sales requirement whereas they have its own planned independent requirement. (the concept of bull, push and balancing in disassembly planning)

| **MRP Area** | ** ** | ** ** | ** ** | ** ** |
| --- | --- | --- | --- | --- |
| **MRP Area** | **Area Type** | **MRP Area Text** | **Plant** | **Plant Description** | **Rec. S Loc.** | **S Loc. Description** | **Assigned S. Loc.** |
| 1010 | 1 | Qassim Central | 1010 | Qassim Central |  |  |  |
| 1010E | 2 | Qassim Central-Returns Expired | 1010 | Qassim Central | Q099 | Returns branches | Q099 |
| 1010E | 2 | Qassim Central-Returns Expired | 1010 | Qassim Central | Q099 | Supplier Returns | Q085 |
| 1050 | 1 | Further Processing | 1050 | Further Processing |  |  |  |
| 1050E | 2 | Further Processing - No Planning | 1050 | Further Processing | Q085 | Supplier Returns | Q085 |
| 1100 | 1 | Processing Plant | 1100 | Processing |  |  |  |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | P2 - L1 WIP | 1123 |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | P3 - L2 WIP | 1130 |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | P3 - L3 WIP | 1132 |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | P2 - L2 WIP | 1125 |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | P3 - L1 WIP | 1128 |
| 1100E | 2 | Processing-No. Planning | 1100 | Processing | 1123 | Supplier Returns | Q085 |
| 1100-1 | 2 | Processing - Watania1 | 1100 | Processing | 1101 | P1 - L1 WIP | 1120 |
| 1100-1 | 2 | Processing - Watania1 | 1100 | Processing | 1101 | P2 - WIP | 1122 |
| 1100-1 | 2 | Processing - Watania1 | 1100 | Processing | 1101 | Proc. W1 Packing | 1101 |
| 1100-1 | 2 | Processing - Watania1 | 1100 | Processing | 1101 | Proc. W1 S.Parts | 1102 |
| 1100-2 | 2 | Processing - Watania2 | 1100 | Processing | 1103 | Proc. W2 Packing | 1103 |
| 1100-2 | 2 | Processing - Watania2 | 1100 | Processing | 1103 | Proc. W2 S.Parts | 1104 |
| 1100-2 | 2 | Processing - Watania2 | 1100 | Processing | 1103 | P3 - WIP | 1127 |
| 1120 | 1 | Feed Mill | 1120 | Feed Mill |  |  |  |
| 1120-1 | 2 | Feed Mill Watania1 | 1120 | Feed Mill | 1123 | W1-WIP | 1123 |
| 1120-2 | 2 | Feed Mill Watania2 - FM3 | 1120 | Feed Mill | 1128 | W2-FM3- WIP | 1128 |
| 1120-3 | 2 | Feed Mill Watania2 - FM6 | 1120 | Feed Mill | 1129 | W2-FM6- WIP | 1129 |
| 1120-4 | 2 | Feed Mill Wadi FM4 | 1120 | Feed Mill | 1133 | Wadi-FM4 - WIP | 1133 |
| 1120-5 | 2 | Feed Mill Wadi FM5 | 1120 | Feed Mill | 1134 | Wadi-FM5 - WIP | 1134 |
| 1120E | 2 | Feed Mill-No. Planning | 1120 | Feed Mill | 1139 | Supplier Returns | Q085 |
| 1120E | 2 | Feed Mill-No. Planning | 1120 | Feed Mill | 1139 | Weighting Diff. | 1139 |
| 1140 | 1 | Yanbu Grain Hub | 1140 | Yanbu Grain Hub |  |  |  |
| 1150 | 1 | Feed Mill Watania1 | 1150 | Feed Mill Watania1 |  |  |  |
| 1150E | 2 | Feed Mill Watania1-No. Planning | 1150 | Feed Mill Watania1 | 1159 | Weighting Diff. | 1159 |
| 1160 | 1 | Feed Mill Watania2 - FM3 | 1160 | Feed Mill Watania2 - FM3 |  |  |  |
| 1160E | 2 | Feed Mill Watania2 - FM3-No. Planning | 1160 | Feed Mill Watania2 - FM3 | 1169 | Weighting Diff. | 1169 |
| 1170 | 1 | Feed Mill Watania2 - FM6 | 1170 | Feed Mill Watania2 - FM6 |  |  |  |
| 1170E | 2 | Feed Mill Watania2 - FM6-No. Planning | 1170 | Feed Mill Watania2 - FM6 | 1179 | Weighting Diff. | 1179 |
| 1180 | 1 | Feed Mill Wadi FM4 | 1180 | Feed Mill Wadi FM4 |  |  |  |
| 1180E | 2 | Feed Mill Wadi FM4-No. Planning | 1180 | Feed Mill Wadi FM4 | 1189 | Weighting Diff. | 1189 |
| 1190 | 1 | Feed Mill Wadi FM5 | 1190 | Feed Mill Wadi FM5 |  |  |  |
| 1190E | 2 | Feed Mill Wadi FM5-No. Planning | 1190 | Feed Mill Wadi FM5 | 1199 | Weighting Diff. | 1199 |
| 1200 | 1 | Broiler | 1200 | Broiler |  |  |  |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-06N1 | 0106 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-05N1 | 0105 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-04N1 | 0104 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-03N1 | 0103 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-02N1 | 0102 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-01N1 | 0101 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-07N1 | 0107 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-08N1 | 0108 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01 | B001 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-09N1 | 0109 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-10N1 | 0110 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-11N1 | 0111 |
| 1200B001 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B001 | B-Butn8-01-12N1 | 0112 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11 | B002 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-12N1 | 0212 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-11N1 | 0211 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-10N1 | 0210 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-09N1 | 0209 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-08N1 | 0208 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-07N1 | 0207 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-06N1 | 0206 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-05N1 | 0205 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-04N1 | 0204 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-03N1 | 0203 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-02N1 | 0202 |
| 1200B002 | 2 | Broiler-Butain8-F01 | 1200 | Broiler | B002 | B-Butn8-11-01N1 | 0201 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02 | B003 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-12N1 | 0312 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-11N1 | 0311 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-10N1 | 0310 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-09N1 | 0309 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-08N1 | 0308 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-07N1 | 0307 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-06N1 | 0306 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-05N1 | 0305 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-04N1 | 0304 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-03N1 | 0303 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-02N1 | 0302 |
| 1200B003 | 2 | Broiler-Butain8-F02 | 1200 | Broiler | B003 | B-Butn8-02-01N1 | 0301 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03 | B004 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-12N1 | 0412 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-11N1 | 0411 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-10N1 | 0410 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-09N1 | 0409 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-08N1 | 0408 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-07N1 | 0407 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-06N1 | 0406 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-05N1 | 0405 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-04N1 | 0404 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-03N1 | 0403 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-02N1 | 0402 |
| 1200B004 | 2 | Broiler-Butain8-F03 | 1200 | Broiler | B004 | B-Butn8-03-01N1 | 0401 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04 | B005 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-12N1 | 0512 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-11N1 | 0511 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-10N1 | 0510 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-09N1 | 0509 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-01N1 | 0501 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-02N1 | 0502 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-03N1 | 0503 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-04N1 | 0504 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-05N1 | 0505 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-06N1 | 0506 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-07N1 | 0507 |
| 1200B005 | 2 | Broiler-Butain8-F04 | 1200 | Broiler | B005 | B-Butn8-04-08N1 | 0508 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10 | B006 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-12N1 | 0612 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-11N1 | 0611 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-10N1 | 0610 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-09N1 | 0609 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-08N1 | 0608 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-07N1 | 0607 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-06N1 | 0606 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-05N1 | 0605 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-04N1 | 0604 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-03N1 | 0603 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-02N1 | 0602 |
| 1200B006 | 2 | Broiler-Butain8-F10 | 1200 | Broiler | B006 | B-Butn8-10-01N1 | 0601 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09 | B007 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-12N1 | 0712 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-11N1 | 0711 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-10N1 | 0710 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-09N1 | 0709 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-08N1 | 0708 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-07N1 | 0707 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-06N1 | 0706 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-05N1 | 0705 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-04N1 | 0704 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-03N1 | 0703 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-02N1 | 0702 |
| 1200B007 | 2 | Broiler-Butain8-F09 | 1200 | Broiler | B007 | B-Butn8-09-01N1 | 0701 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08 | B008 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-12N1 | 0812 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-11N1 | 0811 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-10N1 | 0810 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-09N1 | 0809 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-01N1 | 0801 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-02N1 | 0802 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-03N1 | 0803 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-04N1 | 0804 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-05N1 | 0805 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-06N1 | 0806 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-07N1 | 0807 |
| 1200B008 | 2 | Broiler-Butain8-F08 | 1200 | Broiler | B008 | B-Butn8-08-08N1 | 0808 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05 | B009 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-12N1 | 0912 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-11N1 | 0911 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-10N1 | 0910 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-09N1 | 0909 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-08N1 | 0908 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-07N1 | 0907 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-06N1 | 0906 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-05N1 | 0905 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-04N1 | 0904 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-03N1 | 0903 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-02N1 | 0902 |
| 1200B009 | 2 | Broiler-Butain8-F05 | 1200 | Broiler | B009 | B-Butn8-05-01N1 | 0901 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06 | B010 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-12N1 | 1012 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-11N1 | 1011 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-10N1 | 1010 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-09N1 | 1009 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-08N1 | 1008 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-07N1 | 1007 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-06N1 | 1006 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-05N1 | 1005 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-04N1 | 1004 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-03N1 | 1003 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-02N1 | 1002 |
| 1200B010 | 2 | Broiler-Butain8-F06 | 1200 | Broiler | B010 | B-Butn8-06-01N1 | 1001 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07 | B011 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-12N1 | 1112 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-11N1 | 1111 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-10N1 | 1110 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-09N1 | 1109 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-08N1 | 1108 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-07N1 | 1107 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-06N1 | 1106 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-05N1 | 1105 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-04N1 | 1104 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-03N1 | 1103 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-02N1 | 1102 |
| 1200B011 | 2 | Broiler-Butain8-F07 | 1200 | Broiler | B011 | B-Butn8-07-01N1 | 1101 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01 | B012 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-12N1 | 1212 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-11N1 | 1211 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-10N1 | 1210 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-09N1 | 1209 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-08N1 | 1208 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-07N1 | 1207 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-06N1 | 1206 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-05N1 | 1205 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-04N1 | 1204 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-03N1 | 1203 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-02N1 | 1202 |
| 1200B012 | 2 | Broiler-Butain9-F01 | 1200 | Broiler | B012 | B-Butn9-01-01N1 | 1201 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02 | B013 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-12N1 | 1312 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-11N1 | 1311 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-10N1 | 1310 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-09N1 | 1309 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-08N1 | 1308 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-07N1 | 1307 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-06N1 | 1306 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-05N1 | 1305 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-04N1 | 1304 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-03N1 | 1303 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-02N1 | 1302 |
| 1200B013 | 2 | Broiler-Butain9-F02 | 1200 | Broiler | B013 | B-Butn9-02-01N1 | 1301 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03 | B014 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-12N1 | 1412 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-11N1 | 1411 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-10N1 | 1410 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-09N1 | 1409 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-08N1 | 1408 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-07N1 | 1407 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-06N1 | 1406 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-05N1 | 1405 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-04N1 | 1404 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-03N1 | 1403 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-02N1 | 1402 |
| 1200B014 | 2 | Broiler-Butain9-F03 | 1200 | Broiler | B014 | B-Butn9-03-01N1 | 1401 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04 | B015 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-12N1 | 1512 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-11N1 | 1511 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-10N1 | 1510 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-09N1 | 1509 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-08N1 | 1508 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-07N1 | 1507 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-06N1 | 1506 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-05N1 | 1505 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-04N1 | 1504 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-03N1 | 1503 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-02N1 | 1502 |
| 1200B015 | 2 | Broiler-Butain9-F04 | 1200 | Broiler | B015 | B-Butn9-04-01N1 | 1501 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05 | B016 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-12N1 | 1612 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-11N1 | 1611 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-10N1 | 1610 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-09N1 | 1609 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-01N1 | 1601 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-02N1 | 1602 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-03N1 | 1603 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-04N1 | 1604 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-05N1 | 1605 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-06N1 | 1606 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-07N1 | 1607 |
| 1200B016 | 2 | Broiler-Butain9-F05 | 1200 | Broiler | B016 | B-Butn9-05-08N1 | 1608 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01 | B017 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-08C1 | 1708 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-07N1 | 1707 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-06N1 | 1706 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-05N1 | 1705 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-04N1 | 1704 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-03N1 | 1703 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-02N1 | 1702 |
| 1200B017 | 2 | Broiler-Butain1-F01 | 1200 | Broiler | B017 | B-Butn1-01-01N1 | 1701 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02 | B018 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-09C2 | 1809 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-01N1 | 1801 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-02N1 | 1802 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-03N1 | 1803 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-04C1 | 1804 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-05N1 | 1805 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-06N1 | 1806 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-07N1 | 1807 |
| 1200B018 | 2 | Broiler-Butain1-F02 | 1200 | Broiler | B018 | B-Butn1-02-08N1 | 1808 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08 | B019 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-10C1 | 1910 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-09C1 | 1909 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-08C1 | 1908 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-07C1 | 1907 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-06C1 | 1906 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-05N1 | 1905 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-04N1 | 1904 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-03N1 | 1903 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-02N1 | 1902 |
| 1200B019 | 2 | Broiler-Butain1-F08 | 1200 | Broiler | B019 | B-Butn1-08-01N1 | 1901 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03 | B020 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-09C1 | 2009 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-08N1 | 2008 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-07N1 | 2007 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-06N1 | 2006 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-05N1 | 2005 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-04N1 | 2004 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-03N1 | 2003 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-02N1 | 2002 |
| 1200B020 | 2 | Broiler-Butain1-F03 | 1200 | Broiler | B020 | B-Butn1-03-01N1 | 2001 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04 | B021 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-09C2 | 2109 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-08C1 | 2108 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-07N1 | 2107 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-06N1 | 2106 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-05N1 | 2105 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-04N1 | 2104 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-03N1 | 2103 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-02N1 | 2102 |
| 1200B021 | 2 | Broiler-Butain1-F04 | 1200 | Broiler | B021 | B-Butn1-04-01N1 | 2101 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05 | B022 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-10C1 | 2210 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-09C1 | 2209 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-08N1 | 2208 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-07N1 | 2207 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-06N1 | 2206 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-05N1 | 2205 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-04N1 | 2204 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-03N1 | 2203 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-02N1 | 2202 |
| 1200B022 | 2 | Broiler-Butain1-F05 | 1200 | Broiler | B022 | B-Butn1-05-01N1 | 2201 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06 | B023 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-08N1 | 2308 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-07N1 | 2307 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-06N1 | 2306 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-05N1 | 2305 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-04N1 | 2304 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-03N1 | 2303 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-02N1 | 2302 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-01N1 | 2301 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-09C1 | 2309 |
| 1200B023 | 2 | Broiler-Butain1-F06 | 1200 | Broiler | B023 | B-Butn1-06-10C1 | 2310 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-07N1 | 2407 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-08N1 | 2408 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-09C1 | 2409 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07 | B024 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-06N1 | 2406 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-05N1 | 2405 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-04N1 | 2404 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-03N1 | 2403 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-02N1 | 2402 |
| 1200B024 | 2 | Broiler-Butain1-F07 | 1200 | Broiler | B024 | B-Butn1-07-01N1 | 2401 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 | B-AP-01 | B025 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2508 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2507 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2506 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2505 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2504 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2503 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2502 |
| 1200B025 | 2 | Broiler-AP-F01 | 1200 | Broiler | B025 |  | 2501 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 | B-AP-02 | B026 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2609 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2608 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2607 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2606 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2605 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2604 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2603 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2602 |
| 1200B026 | 2 | Broiler-AP-F02 | 1200 | Broiler | B026 |  | 2601 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01 | B027 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-16N1 | 2716 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-15N1 | 2715 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-14N1 | 2714 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-08N1 | 2708 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-07N1 | 2707 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-06N1 | 2706 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-05N1 | 2705 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-04N1 | 2704 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-03N1 | 2703 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-02N1 | 2702 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-01N1 | 2701 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-09N1 | 2709 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-10N1 | 2710 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-11N1 | 2711 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-12N1 | 2712 |
| 1200B027 | 2 | Broiler-W1-Big-F01 | 1200 | Broiler | B027 | B-W1-Big-01-13N1 | 2713 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02 | B028 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-16N1 | 2816 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-15N1 | 2815 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-14N1 | 2814 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-01N1 | 2801 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-02N1 | 2802 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-03N1 | 2803 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-04N1 | 2804 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-05N1 | 2805 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-06N1 | 2806 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-07N1 | 2807 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-08N1 | 2808 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-09N1 | 2809 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-10N1 | 2810 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-11N1 | 2811 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-12N1 | 2812 |
| 1200B028 | 2 | Broiler-W1-Big-F02 | 1200 | Broiler | B028 | B-W1-Big-02-13N1 | 2813 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03 | B029 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-16N1 | 2916 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-15N1 | 2915 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-14N1 | 2914 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-01N1 | 2901 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-02N1 | 2902 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-03N1 | 2903 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-04N1 | 2904 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-05N1 | 2905 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-06N1 | 2906 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-07N1 | 2907 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-08N1 | 2908 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-09N1 | 2909 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-10N1 | 2910 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-11N1 | 2911 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-12N1 | 2912 |
| 1200B029 | 2 | Broiler-W1-Big-F03 | 1200 | Broiler | B029 | B-W1-Big-03-13N1 | 2913 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04 | B030 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-16N1 | 3016 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-15N1 | 3015 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-14N1 | 3014 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-01N1 | 3001 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-02N1 | 3002 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-03N1 | 3003 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-04N1 | 3004 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-05N1 | 3005 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-06N1 | 3006 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-07N1 | 3007 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-08N1 | 3008 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-09N1 | 3009 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-10N1 | 3010 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-11N1 | 3011 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-12N1 | 3012 |
| 1200B030 | 2 | Broiler-W1-Big-F04 | 1200 | Broiler | B030 | B-W1-Big-04-13N1 | 3013 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05 | B031 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-16N1 | 3116 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-15N1 | 3115 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-14N1 | 3114 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-08N1 | 3108 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-07N1 | 3107 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-06N1 | 3106 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-05N1 | 3105 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-04N1 | 3104 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-03N1 | 3103 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-02N1 | 3102 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-01N1 | 3101 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-09N1 | 3109 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-10N1 | 3110 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-11N1 | 3111 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-12N1 | 3112 |
| 1200B031 | 2 | Broiler-W1-Big-F05 | 1200 | Broiler | B031 | B-W1-Big-05-13N1 | 3113 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06 | B032 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-16N1 | 3216 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-15N1 | 3215 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-14N1 | 3214 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-01N1 | 3201 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-02N1 | 3202 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-03N1 | 3203 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-04N1 | 3204 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-05N1 | 3205 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-06N1 | 3206 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-07N1 | 3207 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-08N1 | 3208 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-09N1 | 3209 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-10N1 | 3210 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-11N1 | 3211 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-12N1 | 3212 |
| 1200B032 | 2 | Broiler-W1-Big-F06 | 1200 | Broiler | B032 | B-W1-Big-06-13N1 | 3213 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07 | B033 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-16N1 | 3316 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-15N1 | 3315 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-14N1 | 3314 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-08N1 | 3308 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-07N1 | 3307 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-06N1 | 3306 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-05N1 | 3305 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-04N1 | 3304 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-03N1 | 3303 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-02N1 | 3302 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-01N1 | 3301 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-13N1 | 3313 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-12N1 | 3312 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-11N1 | 3311 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-10N1 | 3310 |
| 1200B033 | 2 | Broiler-W1-Big-F07 | 1200 | Broiler | B033 | B-W1-Big-07-09N1 | 3309 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-01N1 | 3601 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-02N1 | 3602 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-03N1 | 3603 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10 | B036 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-16N1 | 3616 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-15N1 | 3615 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-04N1 | 3604 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-05N1 | 3605 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-06N1 | 3606 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-07N1 | 3607 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-08N1 | 3608 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-09N1 | 3609 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-10N1 | 3610 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-11N1 | 3611 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-14N1 | 3614 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-13N1 | 3613 |
| 1200B036 | 2 | Broiler-W1-Big-F10 | 1200 | Broiler | B036 | B-W1-Big-10-12N1 | 3612 |
| 1200B039 | 2 | Broiler-W1-Exp.-F01 | 1200 | Broiler | B039 | B-W1-Exp-01-01N1 | 3901 |
| 1200B039 | 2 | Broiler-W1-Exp.-F01 | 1200 | Broiler | B039 | B-W1-Exp.-01 | B039 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-01N1 | 4001 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-02N1 | 4002 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-03N1 | 4003 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-04N1 | 4004 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-05N1 | 4005 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Min-05-06N1 | 4006 |
| 1200B040 | 2 | Broiler-W1-Mini-F05 | 1200 | Broiler | B040 | B-W1-Mini-05 | B040 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-01N1 | 4101 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-02N1 | 4102 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-03N1 | 4103 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-04N1 | 4104 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-05N1 | 4105 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Min-01-06N1 | 4106 |
| 1200B041 | 2 | Broiler-W1-Mini-F01 | 1200 | Broiler | B041 | B-W1-Mini-01 | B041 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-01N1 | 4201 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-02N1 | 4202 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-03N1 | 4203 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-04N1 | 4204 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-05N1 | 4205 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Min-02-06N1 | 4206 |
| 1200B042 | 2 | Broiler-W1-Mini-F02 | 1200 | Broiler | B042 | B-W1-Mini-02 | B042 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-01N1 | 4301 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-02N1 | 4302 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-03N1 | 4303 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-04N1 | 4304 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-05N1 | 4305 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Min-03-06N1 | 4306 |
| 1200B043 | 2 | Broiler-W1-Mini-F03 | 1200 | Broiler | B043 | B-W1-Mini-03 | B043 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-01N1 | 4401 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-02N1 | 4402 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-03N1 | 4403 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-04N1 | 4404 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-05N1 | 4405 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Min-04-06N1 | 4406 |
| 1200B044 | 2 | Broiler-W1-Mini-F04 | 1200 | Broiler | B044 | B-W1-Mini-04 | B044 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Mini-10 | B047 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-06N1 | 4706 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-05N1 | 4705 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-04N1 | 4704 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-03N1 | 4703 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-02N1 | 4702 |
| 1200B047 | 2 | Broiler-W1-Mini-F10 | 1200 | Broiler | B047 | B-W1-Min-10-01N1 | 4701 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-02N1 | 4802 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-03N1 | 4803 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-04N1 | 4804 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-05N1 | 4805 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-06N1 | 4806 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Mini-11 | B048 |
| 1200B048 | 2 | Broiler-W1-Mini-F11 | 1200 | Broiler | B048 | B-W1-Min-11-01N1 | 4801 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Mini-12 | B049 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-06N1 | 4906 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-05N1 | 4905 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-04N1 | 4904 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-03N1 | 4903 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-02N1 | 4902 |
| 1200B049 | 2 | Broiler-W1-Mini-F12 | 1200 | Broiler | B049 | B-W1-Min-12-01N1 | 4901 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-01N1 | 5001 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Mini-13 | B050 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-06N1 | 5006 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-05N1 | 5005 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-04N1 | 5004 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-03N1 | 5003 |
| 1200B050 | 2 | Broiler-W1-Mini-F13 | 1200 | Broiler | B050 | B-W1-Min-13-02N1 | 5002 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-03N1 | 5103 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-04N1 | 5104 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-05N1 | 5105 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-06N1 | 5106 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Mini-14 | B051 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-02N1 | 5102 |
| 1200B051 | 2 | Broiler-W1-Mini-F14 | 1200 | Broiler | B051 | B-W1-Min-14-01N1 | 5101 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Mini-15 | B052 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-06N1 | 5206 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-05N1 | 5205 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-04N1 | 5204 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-03N1 | 5203 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-02N1 | 5202 |
| 1200B052 | 2 | Broiler-W1-Mini-F15 | 1200 | Broiler | B052 | B-W1-Min-15-01N1 | 5201 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01 | B053 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-12N1 | 5312 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-11N1 | 5311 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-10N1 | 5310 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-09N1 | 5309 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-08N1 | 5308 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-07N1 | 5307 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-06N1 | 5306 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-05N1 | 5305 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-04N1 | 5304 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-03N1 | 5303 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-02N1 | 5302 |
| 1200B053 | 2 | Broiler-Butain11-F01 | 1200 | Broiler | B053 | B-Butn11-01-01N1 | 5301 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02 | B054 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-12N1 | 5412 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-11N1 | 5411 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-10N1 | 5410 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-09N1 | 5409 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-01N1 | 5401 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-02N1 | 5402 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-03N1 | 5403 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-04N1 | 5404 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-05N1 | 5405 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-06N1 | 5406 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-07N1 | 5407 |
| 1200B054 | 2 | Broiler-Butain11-F02 | 1200 | Broiler | B054 | B-Butn11-02-08N1 | 5408 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03 | B055 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-12N1 | 5512 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-11N1 | 5511 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-10N1 | 5510 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-09N1 | 5509 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-08N1 | 5508 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-07N1 | 5507 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-06N1 | 5506 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-05N1 | 5505 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-04N1 | 5504 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-03N1 | 5503 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-02N1 | 5502 |
| 1200B055 | 2 | Broiler-Butain11-F03 | 1200 | Broiler | B055 | B-Butn11-03-01N1 | 5501 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01 | B056 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-14C1 | 5614 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-13C1 | 5613 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-12N1 | 5612 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-11N1 | 5611 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-10N1 | 5610 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-09N1 | 5609 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-08N1 | 5608 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-07N1 | 5607 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-06N1 | 5606 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-05N1 | 5605 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-04N1 | 5604 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-03N1 | 5603 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-02N1 | 5602 |
| 1200B056 | 2 | Broiler-Butn5-F01 | 1200 | Broiler | B056 | B-Butn5-01-01N1 | 5601 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02 | B057 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-12N1 | 5712 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-11N1 | 5711 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-10N1 | 5710 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-09N1 | 5709 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-08N1 | 5708 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-07N1 | 5707 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-06N1 | 5706 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-05N1 | 5705 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-04N1 | 5704 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-03N1 | 5703 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-02N1 | 5702 |
| 1200B057 | 2 | Broiler-Butn5-F02 | 1200 | Broiler | B057 | B-Butn5-02-01N1 | 5701 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04 | B058 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-12N1 | 5812 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-11N1 | 5811 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-10N1 | 5810 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-09N1 | 5809 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-08N1 | 5808 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-07N1 | 5807 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-06N1 | 5806 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-05N1 | 5805 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-04N1 | 5804 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-03N1 | 5803 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-02N1 | 5802 |
| 1200B058 | 2 | Broiler-W2-P1-F04 | 1200 | Broiler | B058 | B-W2-P1-04-01N1 | 5801 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03 | B059 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-12N1 | 5912 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-11N1 | 5911 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-10N1 | 5910 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-09N1 | 5909 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-08N1 | 5908 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-07N1 | 5907 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-06N1 | 5906 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-05N1 | 5905 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-04N1 | 5904 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-03N1 | 5903 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-02N1 | 5902 |
| 1200B059 | 2 | Broiler-W2-P1-F03 | 1200 | Broiler | B059 | B-W2-P1-03-01N1 | 5901 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02 | B060 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-12N1 | 6012 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-11N1 | 6011 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-10N1 | 6010 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-09N1 | 6009 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-08N1 | 6008 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-07N1 | 6007 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-06N1 | 6006 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-05N1 | 6005 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-04N1 | 6004 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-03N1 | 6003 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-02N1 | 6002 |
| 1200B060 | 2 | Broiler-W2-P1-F02 | 1200 | Broiler | B060 | B-W2-P1-02-01N1 | 6001 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01 | B061 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-12N1 | 6112 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-11N1 | 6111 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-10N1 | 6110 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-09N1 | 6109 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-08N1 | 6108 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-07N1 | 6107 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-06N1 | 6106 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-05N1 | 6105 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-04N1 | 6104 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-03N1 | 6103 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-02N1 | 6102 |
| 1200B061 | 2 | Broiler-W2-P1-F01 | 1200 | Broiler | B061 | B-W2-P1-01-01N1 | 6101 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05 | B062 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-12N1 | 6212 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-11N1 | 6211 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-10N1 | 6210 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-09N1 | 6209 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-01N1 | 6201 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-02N1 | 6202 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-03N1 | 6203 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-04N1 | 6204 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-05N1 | 6205 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-06N1 | 6206 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-07N1 | 6207 |
| 1200B062 | 2 | Broiler-W2-P1-F05 | 1200 | Broiler | B062 | B-W2-P1-05-08N1 | 6208 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06 | B063 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-12N1 | 6312 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-11N1 | 6311 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-10N1 | 6310 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-09N1 | 6309 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-08N1 | 6308 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-07N1 | 6307 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-06N1 | 6306 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-05N1 | 6305 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-04N1 | 6304 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-03N1 | 6303 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-02N1 | 6302 |
| 1200B063 | 2 | Broiler-W2-P1-F06 | 1200 | Broiler | B063 | B-W2-P1-06-01N1 | 6301 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10 | B064 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-12N1 | 6412 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-11N1 | 6411 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-10N1 | 6410 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-09N1 | 6409 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-08N1 | 6408 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-07N1 | 6407 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-06N1 | 6406 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-05N1 | 6405 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-04N1 | 6404 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-03N1 | 6403 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-02N1 | 6402 |
| 1200B064 | 2 | Broiler-W2-P1-F10 | 1200 | Broiler | B064 | B-W2-P1-10-01N1 | 6401 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07 | B065 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-12N1 | 6512 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-11N1 | 6511 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-10N1 | 6510 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-09N1 | 6509 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-08N1 | 6508 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-07N1 | 6507 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-06N1 | 6506 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-05N1 | 6505 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-04N1 | 6504 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-03N1 | 6503 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-02N1 | 6502 |
| 1200B065 | 2 | Broiler-W2-P1-F07 | 1200 | Broiler | B065 | B-W2-P1-07-01N1 | 6501 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08 | B066 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-12N1 | 6612 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-11N1 | 6611 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-10N1 | 6610 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-09N1 | 6609 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-08N1 | 6608 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-07N1 | 6607 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-06N1 | 6606 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-05N1 | 6605 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-04N1 | 6604 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-03N1 | 6603 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-02N1 | 6602 |
| 1200B066 | 2 | Broiler-W2-P1-F08 | 1200 | Broiler | B066 | B-W2-P1-08-01N1 | 6601 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09 | B067 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-12N1 | 6712 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-11N1 | 6711 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-10N1 | 6710 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-09N1 | 6709 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-08N1 | 6708 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-07N1 | 6707 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-06N1 | 6706 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-05N1 | 6705 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-04N1 | 6704 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-03N1 | 6703 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-02N1 | 6702 |
| 1200B067 | 2 | Broiler-W2-P1-F09 | 1200 | Broiler | B067 | B-W2-P1-09-01N1 | 6701 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11 | B068 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-12N1 | 6812 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-11N1 | 6811 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-10N1 | 6810 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-09N1 | 6809 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-08N1 | 6808 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-07N1 | 6807 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-06N1 | 6806 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-05N1 | 6805 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-04N1 | 6804 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-03N1 | 6803 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-02N1 | 6802 |
| 1200B068 | 2 | Broiler-W2-P1-F11 | 1200 | Broiler | B068 | B-W2-P1-11-01N1 | 6801 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12 | B069 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-12N1 | 6912 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-11N1 | 6911 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-10N1 | 6910 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-09N1 | 6909 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-08N1 | 6908 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-07N1 | 6907 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-06N1 | 6906 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-05N1 | 6905 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-04N1 | 6904 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-03N1 | 6903 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-02N1 | 6902 |
| 1200B069 | 2 | Broiler-W2-P1-F12 | 1200 | Broiler | B069 | B-W2-P1-12-01N1 | 6901 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13 | B070 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-12N1 | 7012 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-11N1 | 7011 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-10N1 | 7010 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-09N1 | 7009 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-08N1 | 7008 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-07N1 | 7007 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-06N1 | 7006 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-05N1 | 7005 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-04N1 | 7004 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-03N1 | 7003 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-02N1 | 7002 |
| 1200B070 | 2 | Broiler-W2-P3-F13 | 1200 | Broiler | B070 | B-W2-P3-13-01N1 | 7001 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14 | B071 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-12N1 | 7112 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-11N1 | 7111 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-10N1 | 7110 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-09N1 | 7109 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-08N1 | 7108 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-07N1 | 7107 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-06N1 | 7106 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-05N1 | 7105 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-04N1 | 7104 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-03N1 | 7103 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-02N1 | 7102 |
| 1200B071 | 2 | Broiler-W2-P3-F14 | 1200 | Broiler | B071 | B-W2-P3-14-01N1 | 7101 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22 | B072 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-12N1 | 7212 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-11N1 | 7211 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-10N1 | 7210 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-09N1 | 7209 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-08N1 | 7208 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-07N1 | 7207 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-06N1 | 7206 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-05N1 | 7205 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-04N1 | 7204 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-03N1 | 7203 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-02N1 | 7202 |
| 1200B072 | 2 | Broiler-W2-P3-F22 | 1200 | Broiler | B072 | B-W2-P3-22-01N1 | 7201 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24 | B073 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-12N1 | 7312 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-11N1 | 7311 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-10N1 | 7310 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-09N1 | 7309 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-08N1 | 7308 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-07N1 | 7307 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-06N1 | 7306 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-05N1 | 7305 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-04N1 | 7304 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-03N1 | 7303 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-02N1 | 7302 |
| 1200B073 | 2 | Broiler-W2-P3-F24 | 1200 | Broiler | B073 | B-W2-P3-24-01N1 | 7301 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26 | B074 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-12N1 | 7412 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-11N1 | 7411 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-10N1 | 7410 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-09N1 | 7409 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-01N1 | 7401 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-02N1 | 7402 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-03N1 | 7403 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-04N1 | 7404 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-05N1 | 7405 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-06N1 | 7406 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-07N1 | 7407 |
| 1200B074 | 2 | Broiler-W2-P3-F26 | 1200 | Broiler | B074 | B-W2-P3-26-08N1 | 7408 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25 | B075 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-12N1 | 7512 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-11N1 | 7511 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-10N1 | 7510 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-09N1 | 7509 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-08N1 | 7508 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-07N1 | 7507 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-06N1 | 7506 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-05N1 | 7505 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-04N1 | 7504 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-03N1 | 7503 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-02N1 | 7502 |
| 1200B075 | 2 | Broiler-W2-P3-F25 | 1200 | Broiler | B075 | B-W2-P3-25-01N1 | 7501 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23 | B076 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-12N1 | 7612 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-11N1 | 7611 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-10N1 | 7610 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-09N1 | 7609 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-08N1 | 7608 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-07N1 | 7607 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-06N1 | 7606 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-05N1 | 7605 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-04N1 | 7604 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-03N1 | 7603 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-02N1 | 7602 |
| 1200B076 | 2 | Broiler-W2-P3-F23 | 1200 | Broiler | B076 | B-W2-P3-23-01N1 | 7601 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21 | B077 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-12N1 | 7712 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-11N1 | 7711 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-10N1 | 7710 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-09N1 | 7709 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-01N1 | 7701 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-02N1 | 7702 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-03N1 | 7703 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-04N1 | 7704 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-05N1 | 7705 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-06N1 | 7706 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-07N1 | 7707 |
| 1200B077 | 2 | Broiler-W2-P3-F21 | 1200 | Broiler | B077 | B-W2-P3-21-08N1 | 7708 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15 | B079 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-12N1 | 7912 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-08N1 | 7908 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-07N1 | 7907 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-06N1 | 7906 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-05N1 | 7905 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-04N1 | 7904 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-03N1 | 7903 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-02N1 | 7902 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-01N1 | 7901 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-11N1 | 7911 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-10N1 | 7910 |
| 1200B079 | 2 | Broiler-W2-P2-F15 | 1200 | Broiler | B079 | B-W2-P2-15-09N1 | 7909 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-01N1 | 8001 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-02N1 | 8002 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-03N1 | 8003 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-04N1 | 8004 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-05N1 | 8005 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-06N1 | 8006 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-07N1 | 8007 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-08N1 | 8008 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-09N1 | 8009 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-10N1 | 8010 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-11N1 | 8011 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17-12N1 | 8012 |
| 1200B080 | 2 | Broiler-W2-P2-F17 | 1200 | Broiler | B080 | B-W2-P2-17 | B080 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18 | B081 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-12N1 | 8112 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-01N1 | 8101 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-02N1 | 8102 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-03N1 | 8103 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-04N1 | 8104 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-05N1 | 8105 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-06N1 | 8106 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-07N1 | 8107 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-08N1 | 8108 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-11N1 | 8111 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-10N1 | 8110 |
| 1200B081 | 2 | Broiler-W2-P2-F18 | 1200 | Broiler | B081 | B-W2-P2-18-09N1 | 8109 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-01N1 | 8201 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-02N1 | 8202 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-03N1 | 8203 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-04N1 | 8204 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-05N1 | 8205 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-06N1 | 8206 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-07N1 | 8207 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-08N1 | 8208 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-09N1 | 8209 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-10N1 | 8210 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-11N1 | 8211 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20-12N1 | 8212 |
| 1200B082 | 2 | Broiler-W2-P2-F20 | 1200 | Broiler | B082 | B-W2-P2-20 | B082 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19 | B083 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-12N1 | 8312 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-01N1 | 8301 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-02N1 | 8302 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-03N1 | 8303 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-04N1 | 8304 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-05N1 | 8305 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-06N1 | 8306 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-07N1 | 8307 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-08N1 | 8308 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-11N1 | 8311 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-10N1 | 8310 |
| 1200B083 | 2 | Broiler-W2-P2-F19 | 1200 | Broiler | B083 | B-W2-P2-19-09N1 | 8309 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-01N1 | 8401 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-02N1 | 8402 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-03N1 | 8403 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-04N1 | 8404 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-05N1 | 8405 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-06N1 | 8406 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-07N1 | 8407 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-08N1 | 8408 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-09N1 | 8409 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03-10N1 | 8410 |
| 1200B084 | 2 | Broiler-Butain2-F03 | 1200 | Broiler | B084 | B-Butn2-03 | B084 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-01N1 | 8501 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-02N1 | 8502 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-03N1 | 8503 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-04N1 | 8504 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-05N1 | 8505 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-06N1 | 8506 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-07N1 | 8507 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-08N1 | 8508 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-09N1 | 8509 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04-10N1 | 8510 |
| 1200B085 | 2 | Broiler-Butain2-F04 | 1200 | Broiler | B085 | B-Butn2-04 | B085 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-01N1 | 8601 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-02N1 | 8602 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-03N1 | 8603 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-04N1 | 8604 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-05N1 | 8605 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-06N1 | 8606 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-07N1 | 8607 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-08N1 | 8608 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-09N1 | 8609 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02-10N1 | 8610 |
| 1200B086 | 2 | Broiler-Butain2-F02 | 1200 | Broiler | B086 | B-Butn2-02 | B086 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-01N1 | 8701 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-02N1 | 8702 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-03N1 | 8703 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-04N1 | 8704 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-05N1 | 8705 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-06N1 | 8706 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-07N1 | 8707 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-08N1 | 8708 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-09N1 | 8709 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01-10N1 | 8710 |
| 1200B087 | 2 | Broiler-Butain2-F01 | 1200 | Broiler | B087 | B-Butn2-01 | B087 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-01N1 | 8801 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04 | B088 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-02N1 | 8802 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-03N1 | 8803 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-04N1 | 8804 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-05N1 | 8805 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-06N1 | 8806 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-07N1 | 8807 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-08N1 | 8808 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-09N1 | 8809 |
| 1200B088 | 2 | Broiler-Butain3-F04 | 1200 | Broiler | B088 | B-Butn3-04-10N1 | 8810 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-01N1 | 8901 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-02N1 | 8902 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-03N1 | 8903 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-04N1 | 8904 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-05N1 | 8905 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-06N1 | 8906 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-07N1 | 8907 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-08N1 | 8908 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-09N1 | 8909 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01-10N1 | 8910 |
| 1200B089 | 2 | Broiler-Butain3-F01 | 1200 | Broiler | B089 | B-Butn3-01 | B089 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-01N1 | 9001 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-02N1 | 9002 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-03N1 | 9003 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-04N1 | 9004 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03 | B090 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-10N1 | 9010 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-09N1 | 9009 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-08N1 | 9008 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-07N1 | 9007 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-06N1 | 9006 |
| 1200B090 | 2 | Broiler-Butain3-F03 | 1200 | Broiler | B090 | B-Butn3-03-05N1 | 9005 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02-02N1 | 9102 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02-03N1 | 9103 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02-04N1 | 9104 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02-05N1 | 9105 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02 | B091 |
| 1200B091 | 2 | Broiler-Butain3-F02 | 1200 | Broiler | B091 | B-Butn3-02-01N1 | 9101 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmali-01-01N2 | 9201 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmali-01-02N2 | 9202 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmali-01-03N2 | 9203 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmali-01-04N2 | 9204 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmali-01-05N2 | 9205 |
| 1200B092 | 2 | Broiler-Shemalia-F01 | 1200 | Broiler | B092 | B-Shmalia-01 | B092 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmali-02-01N2 | 9301 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmali-02-02N2 | 9302 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmalia-02 | B093 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmali-02-05N2 | 9305 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmali-02-04N2 | 9304 |
| 1200B093 | 2 | Broiler-Shemalia-F02 | 1200 | Broiler | B093 | B-Shmali-02-03N2 | 9303 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmali-03-05N2 | 9405 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmalia-03 | B094 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmali-03-04N2 | 9404 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmali-03-03N2 | 9403 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmali-03-02N2 | 9402 |
| 1200B094 | 2 | Broiler-Shemalia-F03 | 1200 | Broiler | B094 | B-Shmali-03-01N2 | 9401 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16 | B078 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-12N1 | 7812 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-11N1 | 7811 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-10N1 | 7810 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-09N1 | 7809 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-08N1 | 7808 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-07N1 | 7807 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-06N1 | 7806 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-05N1 | 7805 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-04N1 | 7804 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-03N1 | 7803 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-02N1 | 7802 |
| 1200B078 | 2 | Broiler-W2-P2-F16 | 1200 | Broiler | B078 | B-W2-P2-16-01N1 | 7801 |
| 1210 | 1 | Hatchery | 1210 | Hatchery |  |  |  |
| 1210E | 2 | Hatchery - No Planning | 1210 | Hatchery | Q085 | Supplier Returns | Q085 |
| 1220 | 1 | Parents - Laying | 1220 | Parents - Laying |  |  |  |
| 1221 | 1 | Grading Station - Dulfa | 1221 | Grading Station - Dulfa |  |  |  |
| 1222 | 1 | Grading Station - Wadi | 1222 | Grading Station - Wadi |  |  |  |
| 1223 | 1 | Grading Station - Kubid | 1223 | Grading Station - Kubid |  |  |  |
| 1224 | 1 | Grading Station - Shery | 1224 | Grading Station - Shery |  |  |  |
| 1230 | 1 | Parents - Rearing | 1230 | Parents - Rearing |  |  |  |
| 1231 | 1 | Parents - Laying - Dulfa | 1231 | Parents - Laying - Dulfa |  |  |  |
| 1232 | 1 | Parents - Laying - Wadi | 1232 | Parents - Laying - Wadi |  |  |  |
| 1233 | 1 | Parents - Laying - Kubid | 1233 | Parents - Laying - Kubid |  |  |  |
| 1234 | 1 | Parents - Laying - Shery | 1234 | Parents - Laying - Shery |  |  |  |
| 1241 | 1 | Parents - Rearing - Dulfa | 1241 | Parents - Rearing - Dulfa |  |  |  |
| 1242 | 1 | Parents - Rearing - Wadi | 1242 | Parents - Rearing - Wadi |  |  |  |
| 1244 | 1 | Parents - Rearing - Shery | 1244 | Parents - Rearing - Shery |  |  |  |
| 1250 | 1 | C Layer - Laying | 1250 | C Layer - Laying |  |  |  |
| 1250E | 2 | C Layer - Laying - NoPlanning | 1250 | C Layer - Laying | Q085 | Supplier Returns | Q085 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | Grading Station1 | 1254 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | Layer-Laying-F01 | LL01 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-01 | 0101 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-02 | 0102 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-03 | 0103 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-04 | 0104 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-05 | 0105 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-06 | 0106 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-07 | 0107 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-08 | 0108 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-09 | 0109 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-10 | 0110 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-11 | 0111 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-12 | 0112 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-13 | 0113 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-14 | 0114 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-15 | 0115 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-16 | 0116 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-17 | 0117 |
| 1250LL01 | 2 | Layer-Laying-F01 | 1250 | C Layer - Laying | LL01 | LL01-18 | 0118 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-01 | 0201 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-02 | 0202 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-03 | 0203 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-04 | 0204 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-05 | 0205 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-06 | 0206 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-07 | 0207 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-08 | 0208 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-09 | 0209 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-10 | 0210 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-11 | 0211 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-12 | 0212 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-13 | 0213 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-14 | 0214 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-15 | 0215 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-16 | 0216 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-17 | 0217 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | LL02-18 | 0218 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | Layer-Laying-F02 | LL02 |
| 1250LL02 | 2 | Layer-Laying-F02 | 1250 | C Layer - Laying | LL02 | Grading Station2 | 1255 |
| 1260 | 1 | C Layer - Rearing | 1260 | C Layer - Rearing |  |  |  |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-01 | 0101 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-02 | 0102 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-03 | 0103 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-04 | 0104 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-05 | 0105 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | LR01-06 | 0106 |
| 1260-01 | 2 | Layer-Rearing-F01 | 1260 | C Layer - Rearing | LR01 | Lyer-Rearing-F01 | LR01 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | Lyer-Rearing-F02 | LR02 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-06 | 0206 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-05 | 0205 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-04 | 0204 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-03 | 0203 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-02 | 0202 |
| 1260-02 | 2 | Layer-Rearing-F02 | 1260 | C Layer - Rearing | LR02 | LR02-01 | 0201 |
| 1310 | 1 | Fleet Central Workshop | 1310 | Fleet Central Workshop |  |  |  |
| 1480 | 1 | Jeddah Branch | 1480 | Jeddah Branch |  |  |  |
| 1480E | 2 | Jedda-Returns Expired | 1480 | Jeddah Branch | 1483 | Returns Expired | 1483 |
| 1490 | 1 | Qassim Branch | 1490 | Qassim Branch |  |  |  |
| 1490E | 2 | Qassim-Returns Expired | 1490 | Qassim Branch | 1493 | Returns Expired | 1493 |
| 1500 | 1 | Riyadh Branch | 1500 | Riyadh Branch |  |  |  |
| 1500E | 2 | Riyadh-Returns Expired | 1500 | Riyadh Branch | 1503 | Returns Expired | 1503 |
| 1510 | 1 | Dammam Branch | 1510 | Dammam Branch |  |  |  |
| 1510E | 2 | Dammam-Returns Expired | 1510 | Dammam Branch | 1513 | Returns Expired | 1513 |
| 1520 | 1 | Abha Branch | 1520 | Abha Branch |  |  |  |
| 1520E | 2 | Abha-Returns Expired | 1520 | Abha Branch | 1523 | Returns Expired | 1523 |
| 1530 | 1 | Medina Branch | 1530 | Medina Branch |  |  |  |
| 1530E | 2 | Madina-Returns Expired | 1530 | Medina Branch | 1533 | Returns Expired | 1533 |
| 1540 | 1 | Taif Branch | 1540 | Taif Branch |  |  |  |
| 1540E | 2 | Taef-Returns Expired | 1540 | Taif Branch | 1543 | Returns Expired | 1543 |
| 1550 | 1 | Baljurashi Branch | 1550 | Baljurashi Branch |  |  |  |
| 1550E | 2 | Bolgorashi-Returns Expired | 1550 | Baljurashi Branch | 1553 | Returns Expired | 1553 |
| 1560 | 1 | Najran Branch | 1560 | Najran Branch |  |  |  |
| 1560E | 2 | Najran-Returns Expired | 1560 | Najran Branch | 1563 | Returns Expired | 1563 |
| 1570 | 1 | Sakaka Branch | 1570 | Sakaka Branch |  |  |  |
| 1570E | 2 | Sakaka-Returns Expired | 1570 | Sakaka Branch | 1573 | Returns Expired | 1573 |
| 1580 | 1 | Tabuk Branch | 1580 | Tabuk Branch |  |  |  |
| 1580E | 2 | Tabuk-Returns Expired | 1580 | Tabuk Branch | 1583 | Returns Expired | 1583 |
| 1590 | 1 | Mecca Branch | 1590 | Mecca Branch |  |  |  |
| 1590E | 2 | Mecca-Returns Expired | 1590 | Mecca Branch | 1593 | Returns Expired | 1593 |
| 1600 | 1 | Al Ahsa Branch | 1600 | Al Ahsa Branch |  |  |  |
| 1600E | 2 | Al Ahsa-Returns Expired | 1600 | Al Ahsa Branch | 1603 | Returns Expired | 1603 |
| 1610 | 1 | Hafar Al Batin Branch | 1610 | Hafar Al Batin Branch |  |  |  |
| 1610E | 2 | Hafar Al Batin-Returns Expired | 1610 | Hafar Al Batin Branch | 1613 | Returns Expired | 1613 |
| 1620 | 1 | Wadi ad-Dawasir Branch | 1620 | Wadi ad-Dawasir Branch |  |  |  |
| 1620E | 2 | Wadi ad-Dawasir-Returns Expired | 1620 | Wadi ad-Dawasir Branch | 1623 | Returns Expired | 1623 |
| 1630 | 1 | Al Duwadimi Branch | 1630 | Al Duwadimi Branch |  |  |  |
| 1630E | 2 | Al Duwadimi-Returns Expired | 1630 | Al Duwadimi Branch | 1633 | Returns Expired | 1633 |
| 1640 | 1 | Jazan Branch | 1640 | Jazan Branch |  |  |  |
| 1640E | 2 | Jazan-Returns Expired | 1640 | Jazan Branch | 1643 | Returns Expired | 1643 |
| 1650 | 1 | Yanbu Branch | 1650 | Yanbu Branch |  |  |  |
| 1650E | 2 | Yanbu-Returns Expired | 1650 | Yanbu Branch | 1653 | Returns Expired | 1653 |
| 1660 | 1 | Hail Branch | 1660 | Hail Branch |  |  |  |
| 1660E | 2 | Hael-Returns Expired | 1660 | Hail Branch | 1663 | Returns Expired | 1663 |
| 1800 | 1 | Qassim Export | 1800 | Qassim Export |  |  |  |
| 1840 | 1 | Qassim Agri. | 1840 | Qassim Agri. |  |  |  |
| 1840E | 2 | Agri- No Planning | 1840 | Qassim Agri. | Q085 | Supplier Returns | Q085 |
| 2100 | 1 | Transportation | 2100 | Transportation |  |  |  |
| 3010 | 1 | GP - Central | 3010 | GP - Central |  |  |  |
| 3100 | 1 | GP-Hatchery | 3100 | GP-Hatchery |  |  |  |
| 3200 | 1 | GP-Laying | 3200 | GP-Laying |  |  |  |
| 3200GL01 | 2 | GP-Laying-F01 | 3200 | GP-Laying | GL01 | GP-Laying-F01 | GL01 |
| 3200GL01 | 2 | GP-Laying-F01 | 3200 | GP-Laying | GL01 | GL01-02 | 0102 |
| 3200GL01 | 2 | GP-Laying-F01 | 3200 | GP-Laying | GL01 | GL01-01 | 0101 |
| 3200GL02 | 2 | GP-Laying-F02 | 3200 | GP-Laying | GL02 | GP-Laying-F02 | GL02 |
| 3200GL02 | 2 | GP-Laying-F02 | 3200 | GP-Laying | GL02 | GL02-02 | 0202 |
| 3200GL02 | 2 | GP-Laying-F02 | 3200 | GP-Laying | GL02 | GL02-01 | 0201 |
| 3200GL03 | 2 | GP-Laying-F03 | 3200 | GP-Laying | GL03 | GL03-01 | 0301 |
| 3200GL03 | 2 | GP-Laying-F03 | 3200 | GP-Laying | GL03 | GL03-02 | 0302 |
| 3200GL03 | 2 | GP-Laying-F03 | 3200 | GP-Laying | GL03 | GP-Laying-F03 | GL03 |
| 3200GL04 | 2 | GP-Laying-F04 | 3200 | GP-Laying | GL04 | GL04-01 | 0401 |
| 3200GL04 | 2 | GP-Laying-F04 | 3200 | GP-Laying | GL04 | GL04-02 | 0402 |
| 3200GL04 | 2 | GP-Laying-F04 | 3200 | GP-Laying | GL04 | GP-Laying-F04 | GL04 |
| 3200GL05 | 2 | GP-Laying-F05 | 3200 | GP-Laying | GL05 | GL05-01 | 0501 |
| 3200GL05 | 2 | GP-Laying-F05 | 3200 | GP-Laying | GL05 | GL05-02 | 0502 |
| 3200GL05 | 2 | GP-Laying-F05 | 3200 | GP-Laying | GL05 | GP-Laying-F05 | GL05 |
| 3200GL06 | 2 | GP-Laying-F06 | 3200 | GP-Laying | GL06 | GL06-01 | 0601 |
| 3200GL06 | 2 | GP-Laying-F06 | 3200 | GP-Laying | GL06 | GL06-02 | 0602 |
| 3200GL06 | 2 | GP-Laying-F06 | 3200 | GP-Laying | GL06 | GP-Laying-F06 | GL06 |
| 3200GL07 | 2 | GP-Laying-F07 | 3200 | GP-Laying | GL07 | GL07-01 | 0701 |
| 3200GL07 | 2 | GP-Laying-F07 | 3200 | GP-Laying | GL07 | GL07-02 | 0702 |
| 3200GL07 | 2 | GP-Laying-F07 | 3200 | GP-Laying | GL07 | GP-Laying-F07 | GL07 |
| 3200GL08 | 2 | GP-Laying-F08 | 3200 | GP-Laying | GL08 | GL08-01 | 0801 |
| 3200GL08 | 2 | GP-Laying-F08 | 3200 | GP-Laying | GL08 | GL08-02 | 0802 |
| 3200GL08 | 2 | GP-Laying-F08 | 3200 | GP-Laying | GL08 | GP-Laying-F08 | GL08 |
| 3300 | 1 | GP-Rearing | 3300 | GP-Rearing |  |  |  |
| 3300GR01 | 2 | GP-Rearing-F01 | 3300 | GP-Rearing | GR01 | GR01-01 | 0101 |
| 3300GR01 | 2 | GP-Rearing-F01 | 3300 | GP-Rearing | GR01 | GR01-02 | 0102 |
| 3300GR01 | 2 | GP-Rearing-F01 | 3300 | GP-Rearing | GR01 | GR01-03 | 0103 |
| 3300GR01 | 2 | GP-Rearing-F01 | 3300 | GP-Rearing | GR01 | GP-Rearing-F01 | GR01 |
| 3300GR02 | 2 | GP-Rearing-F02 | 3300 | GP-Rearing | GR02 | GP-Rearing-F02 | GR02 |
| 3300GR02 | 2 | GP-Rearing-F02 | 3300 | GP-Rearing | GR02 | GR02-03 | 0203 |
| 3300GR02 | 2 | GP-Rearing-F02 | 3300 | GP-Rearing | GR02 | GR02-02 | 0202 |
| 3300GR02 | 2 | GP-Rearing-F02 | 3300 | GP-Rearing | GR02 | GR02-01 | 0201 |
| 3300GR03 | 2 | GP-Rearing-F03 | 3300 | GP-Rearing | GR03 | GP-Rearing-F03 | GR03 |
| 3300GR03 | 2 | GP-Rearing-F03 | 3300 | GP-Rearing | GR03 | GR03-03 | 0303 |
| 3300GR03 | 2 | GP-Rearing-F03 | 3300 | GP-Rearing | GR03 | GR03-02 | 0302 |
| 3300GR03 | 2 | GP-Rearing-F03 | 3300 | GP-Rearing | GR03 | GR03-01 | 0301 |
| 3300GR04 | 2 | GP-Rearing-F04 | 3300 | GP-Rearing | GR04 | GR04-01 | 0401 |
| 3300GR04 | 2 | GP-Rearing-F04 | 3300 | GP-Rearing | GR04 | GR04-02 | 0402 |
| 3300GR04 | 2 | GP-Rearing-F04 | 3300 | GP-Rearing | GR04 | GR04-03 | 0403 |
| 3300GR04 | 2 | GP-Rearing-F04 | 3300 | GP-Rearing | GR04 | GP-Rearing-F04 | GR04 |
| 4100 | 1 | Qassim Agri. | 4100 | Agriculture Central. |  |  |  |
| 4100E | 2 | Agri- No Planning | 4100 | Agriculture Central. | Q085 | Supplier Returns | Q085 |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 2 of 3 |
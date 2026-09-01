# MM-MD-010 Material Master V2

| MM-MD-010: Material MAster record |
| --- |
|  |

## Definition 

Materials that a company procures, produces or sells. Material master is a central data that is available at all the levels.

Created centrally and it is valid for all applications. It remains constant over the time but we need to update it on regular basis.

The material master database (often referred to simply as the "material master", comprising all the individual material master records stored in the system) contains descriptions of all materials that an enterprise procures, produces, and keeps in stock. It is the central repository of information on materials (such as inventory levels) for the enterprise. 

The integration of all material data in a single materials database eliminates the problem of data redundancy and permits the data to be used not only by Purchasing, but by other applications (such as Inventory Management, Materials Planning and Control, Invoice Verification, and so on).

Descriptions of the individual materials used in an enterprise are stored in *material master records*. 

The following list shows some types of information a material master record contains and provides examples of each:

- ***Accounting:**** *Valuation and costing/price calculation information. Examples: Standard price, past and future price, and current valuation.

- ***Materials planning and control*****:** Information for material requirements planning (MRP) and consumption-based planning/inventory control. Examples: Safety stock level, planned delivery time, and reorder level for a material.

- ***Quality management*****:** you define various inspection parameters based on the inspection type (for example, triggering events for quality inspections, inspection with or without a task list, with or without a material specification and whether results are to be recorded for inspection characteristics)

- ***Purchasing*****:** Data provided by Purchasing for a material. Examples: Purchasing group (group of buyers) responsible for a material, over- and under delivery tolerances, and the order unit.

- ***Engineering***: Engineering and design data on a material. Examples: CAD drawings, basic dimensions, and design specifications.

- ***Storage*****:** Information relating to the storage/warehousing of a material. Examples: unit of issue, storage conditions, and packaging dimensions.

- ***Forecasting*****:** Information for predicting material requirements. Examples: How the material is procured, forecasting period, and past consumption/usage.

- ***Sales and distribution*****:** Information for sales orders and pricing. Examples: Sales price, minimum order quantity, and the name of the sales department responsible for a certain material.

***How is the Information Organized?***** **

Material data is always organized in the same hierarchical fashion. From the Purchasing viewpoint, a material master record contains the following organizational levels: client, purchasing organization, plant, and storage location. 

- ***Client - general data*** - This level contains the data applicable to all individual group companies, all plants, and all warehouses/stores belonging to an enterprise (corporate group). Examples of general data are details on a material's design (CAD drawings, for instance) and storage conditions (temperature range, whether the material is explosive or perishable, and so on). 

- ***Plant**** - This level contains the data for each branch or plant location within a certain company. The data important to Purchasing is stored at this level. Examples of this data are the maximum and minimum order quantities of a material and the reorder point. You access the plant data by entering the plant key. *

- ***Storage location**** - This level contains the data specific to a storage location. Stock levels are an* example of the data maintained for each storage location. You access the storage location data by entering the plant and storage location keys. 

Organization Levels 

According to Sales: Sales organization and Distribution channel 

For warehouse management: warehouse number, warehouse type.

This data structure facilitates the organization of material-related information within the entire enterprise. It prevents redundant storage of material data when the same material is used in more than one plant or stored at more than one storage location.

 Example

Suppose the same metal casting is stored at two different locations. The design and purchasing data for this material would be identical. However, the data on the stock levels at each location would differ.

***How are Materials Numbered?***** **

A unique number is assigned to each material master record. This number identifies a specific material. 

Material numbers can be assigned *internally* or *externally*. Internal number assignment means that the system assigns material numbers, whereas external number assignment means that the person creating the material master record does so. 

If numbers are assigned externally within your enterprise, there may be restrictions on the numbers you may assign to a material. Number assignment is defined within the framework of Customizing.

***Who Has Access to the Material Master?***** **

Company policy may restrict access to material master data. Access restrictions are intended to prevent unauthorized users from changing a material master record. Generally, buyers can view all data for a material, but are usually only allowed to change purchasing data. In the same way, material planners or inventory controllers are generally only allowed to change the data directly related to materials planning and control. 

Certain users may have authorization to change data *centrally*. This means that they have authorization to enter and change all data in a material master record, including purchasing data. 

If you want to know what access restrictions are in effect at your company, contact your system administrator.

At most companies, material master records are created in one of the following ways:

- **Centrally:** A central body enters a minimum amount of all user department data. Users in the individual departments add to this data in Change mode. For the central body to create data for all departments, it must be authorized to process all user department data.

- **Decentrally****:** Each department creates its own material master records. Users are authorized to process data for one or more departments as required.

**Material Types:**

Materials with the same basic attributes are grouped together and assigned to a material type. This allows you to manage different materials in a uniform manner in accordance with your company's requirements. Examples of material types are given in the graphic below.

**MRP Profile:**

A profile is a collection of information used to configure certain objects. In it, you can store standard information that you need repeatedly in almost identical combinations when maintaining different objects. Thus, a profile simplifies the entry and management of data.

In the case of material master data, the objects are the material master records and the object data is the material requirements planning (MRP).

## Requirements & Expectations

| **Requirements ****&**** Expectations** |
| --- |
| **ID** | **Description** | **Standard / Gap** | **Priority** |
| 01 | Responsibility for Materials should be centralized | S | H |
| 02 | Some fields will be mandatory for reporting and functions purpose | S | H |
| 03 | Keep the current Materials with the same numbers and new records will use internal number range | S | H |

## Systems List

This list gives an overview about all the current systems that use this master data.

| **Current System** | **Data** | **Location** |
| --- | --- | --- |
| Sage | Material Master Record | Qassim |

## Data Conversion and  Data Cleansing Requirements

Data conversion for Materials will be by extraction from existing Systems to an interim database for consolidation and conversion to be complied with SAP format. For this purpose Excel used. 

For cleansing and migration of consolidated Materials, usage of external number ranges is necessary. After migration, these number ranges should be switched to an additional internal number range starting with the latest external plus one. This largely eliminates the need for mnemonic or meaningful materials master numbers. For this reason, SAP recommends that you use internal number assignment. It is intended to use Data Migration Tools for, planning and execution is in the responsibility of Wi-Sys team.

Planned mandatory fields should be filled on data migration sheet before migration.

Any data cleansing rules for fields' format should be cleansed and reviewed before migration 

Fields length (especially names and descriptions) should be adjusted to target fields' length in SAP. 

## Master Data Ownership

Maintenance of material master will be the responsibility of material master data administrator centrally. (Role: Material Master Admin)

## Authorization/Security Considerations

Maintenance of operative material master data will be centrally. For this, transactions (roles) are available, which is part of authorization role definition accordingly.

## Control Requirements

N/A

## Data Archiving Requirements

| **Data** | **Length of Time (Years)** |
| --- | --- |
| Material Master Record | 10 |

## Organization Impact Considerations

The material master subdivided into information grouped by user departments

(Functions). Each user department has a different View of the material master record and is responsible

For maintaining the data to support their function, for example: 

- Purchasing data for ordering   

- Inventory management data for posting goods movements and managing physical inventory  

- Accounting data for material valuation upon goods movements or in invoice verification  

- Materials planning data for material requirements planning 

The data maintained within a view may be valid for more than one organizational level

- Basic View 1,2	 				(Client Level)

- Classification					(Client Level)

- Sales View 1,2					(Plant, Sales Organization and distribution channel 

Levels)

- MRP 1 ,MRP 2, MRP 3 and MRP 4 view	(Plant Level)

- Work scheduling View			(Plant Level)

- General Plant Data / Storage view 1 and 2	(Plant and storage location Levels)

- Purchasing					(Plant Level)

- Purchase Order Text				(Plant Level)

- Accounting view1,2 				(Plant Level)

- Costing 1,2 (Plant Level)			(Plant Level)

## Configuration Considerations

| **Define Material Types** |
| --- |
| **Material Type** | **Description** | **Number Range** |
|  |  | **From** | **To** |
| YANM | Watania Live Materials |  |  |
| YAUX | Watania Auxiliary Materil |  |  |
| YBYP | Watania By-Product |  |  |
| YFFC | Watania Form-Fit-Fun.Clas |  |  |
| YFLM | Watania Fuel |  |  |
| YFRT | Watania Finished Goods |  |  |
| YGEN | Watania General Items |  |  |
| YHLB | Watania Semifinished |  |  |
| YLEH | Watania Retur. Packag. |  |  |
| YLOS | Watania losses-Non Vlutd |  |  |
| YNAS | Watania NnVluted Asset |  |  |
| YNON | Watania Nonvaluated Mat |  |  |
| YNSP | Watania NnVluted Spr Part |  |  |
| YPHN | Watania Phantom |  |  |
| YPIP | Watania Pipeline material |  |  |
| YROH | Watania Raw Material |  |  |
| YRSA | Watania Spare Parts |  |  |
| YSCR | Watania Scrap |  |  |
| YVRP | Watania Packing |  |  |

Material Number Field Length 18 characters

| **Material Groups** |
| --- |
| **Code** | **Description** | **For Information only** |
| 10000 | MAN Truck SP | قطع غيار شاحنات مان |
| 10001 | Internation Truck SP | قطع غيار شاحنات انترناشيونال |
| 10002 | ISUZU SP | قطع غيار ايسوزو |
| 10003 | Toyota SP | قطع غيار تويوتا |
| 10004 | Mitsubishi SP | قطع غيار ميتسوبيشي |
| 10005 | Feed Deliv. Truck SP | قطع غيار أنظمة ناقلات العلف |
| 10006 | Thermo King SP | قطع غيار ثرموكينج |
| 10007 | Heavy Equipments SP | قطع غيار معدات ثقيلة |
| 10008 | Trailers SP | قطع غيار مقطورات النقل |
| 10009 | Agricultur Equip. SP | قطع غيار معدات الزراعية |
| 10010 | Oth. Vehi&Equipm. SP | قطع غيار سيارات ومعدات أخرى |
| 10011 | Production Lines SP | قطع غيار خطوط قطاع الإنتاج |
| 10012 | House Devices SP | قطع غيار الأجهزة المنزلية |
| 10013 | Operational Tools SP | قطع غيار أدوات التشغيل |
| 10014 | Feed Mill & Silos SP | قطع غيار مصانع الأعلاف والصوامع |
| 10015 | Manure Plant SP | قطع غيار مصنع السماد |
| 10016 | Slaugh House Line SP | قطع غيار خطوط المسالخ والمصنعات |
| 10017 | Hatcheries SP | قطع غيار الفقاسات |
| 10018 | High Tension SP | قطع غيار مولدات ومعدات الكهرباء |
| 10019 | Water System SP | قطع غيار أنظمة المياه |
| 10020 | Tire & Relatives | إطارات وملحقاتها |
| 10021 | Filters | فلاتر |
| 10022 | Oils & Grease | زيوت وشحوم |
| 10023 | Industrial Gases | غازات صناعية |
| 10024 | Fuels | الوقود والمحروقات |
| 10025 | Building Metals | أصناف معادن البناء |
| 10026 | Build. Tools&Accesor | أصناف تشطيبات بناء |
| 10027 | Building Row Materil | مواد البناء الخام |
| 10028 | Wood & Timber | أخشاب خام |
| 10029 | Comn&Consumabl Items | أصناف عامة ومستهلكات |
| 10030 | Electrical Items | أصناف كهرباء عامة |
| 10031 | Mechanical Items | أصناف ميكانيكية عامة |
| 10032 | Paints Materials | الدهانات |
| 10033 | Plumbing Items | أصناف سباكة عامة |
| 10034 | Electronic Items | أصناف إلكترونيات عامة |
| 10035 | Motors & Pumps | مضخات عامة |
| 10036 | Second Hand Items | أصناف عامة مستعملة |
| 10037 | Fabricated Items | أصناف مصنعة (معدلة) |
| 10038 | Food Stuffs(Catering | المواد الغذائية |
| 10039 | Spices | أصناف البهارات |
| 10040 | Feed Raw Materials | مواد خام الأعلاف |
| 10041 | Agri. Raw Materials | مواد خام الزراعية |
| 10042 | Fertilizers | الأسمدة |
| 10043 | Insecticide&Pesticid | المبيدات الحشرية |
| 10044 | Medicine | الأدوية البيطرية |
| 10045 | Disinfectant | المطهرات |
| 10046 | Chemicals | الكيماويات |
| 10047 | Vaccines | اللقاحات |
| 10048 | Human Medicine | الأدوية البشرية |
| 10049 | Surgical Items | أصناف الضماد |
| 10050 | Media & Test Kits | بيئات إختبار المعامل |
| 10051 | Lab Instruments | مستلزمات المعامل |
| 10052 | Stocked Cleaning | مواد نظافة مخزون |
| 10053 | Special Cleaning | مواد نظافة خاصة |
| 10054 | General Cleaning | مواد نظافة عامة |
| 10055 | Tools | أدوات وعدد |
| 10056 | Advertisment | المواد الدعائية |
| 10057 | General Books | مطبوعات عامة |
| 10058 | Special Books | مطبوعات خاصة |
| 10059 | Branches Books | مطبوعات الفروع |
| 10060 | Cartridge | أحبار طابعات ليزر |
| 10061 | Ribbon | أحبار طابعات نقطية |
| 10062 | Tonner | أحبار ماكينات |
| 10063 | Stocked Stationary | أصناف قرطاسية مخزون |
| 10064 | General Stationary | أصناف قرطاسية عامة |
| 10065 | Parent Live Stock | صيصان أمهات |
| 10066 | Layer Live Stock | صيصان بياض |
| 10067 | Gra. Parent LVE STCK | صيصان جدود |
| 10068 | Agric. Live Stock | أصناف الزراعية |
| 10069 | Furniture | الأثاث |
| 10070 | Vehicles | سيارات وشاحنات |
| 10071 | Machines | مكائن |
| 10072 | Office Devices | أجهزة مكتبية |
| 10073 | Electro&ElectrDevice | أجهزة إلكترونية وكهربائية |
| 10074 | Equipments | معدات |
| 10075 | Licences & Programs | تراخيص وبرامج |
| 10076 | Wearings | الملابس |
| 10077 | Farms Supplies | متطلبات المزارع |
| 10078 | Carton | كرتون |
| 10079 | Chicken Bags | أكياس دجاج |
| 10080 | Plastic Bags | أكياس بلاستيكية |
| 10081 | Stickers | ملصقات ورقية |
| 10082 | Tape | أشرطة لاصقة |
| 10083 | Paper Packets | عبوات ورقية |
| 10084 | Plastic Roll | رول بلاستيك |
| 10085 | Trays | أطباق |
| 10086 | Sheets&Pads(Packing) | رقائق بلاستيك & وسائد امتصاص |
| 10087 | Casing | أغلفة تعبئة |
| 10088 | Clip & Loop | دبابيس تعبئة |
| 10089 | Generl Use Packaging | مواد تعبئة عامة |
| 10090 | Food Inks | أحبار غذائية |
| 10088 | Fresh Chicken | دجاج طازج |
| 10089 | Frozen Chicken | دجاج مجمد |
| 10090 | Fresh Parts | أوصال طازجة |
| 10091 | Frozen Parts | أوصال مجمدة |
| 10092 | Produced Fresh Products | مصنعات طازجة |
| 10093 | Produced Frozen Products | مصنعات مجمدة |
| 10094 | Table eggs | بيض المائدة |
| 10095 | By-Products Manure | منتجات عرضية - السماد |
| 10096 | By-Products Protein | منتجات عرضية - البروتين |
| 10097 | By-Products Feeds | منتجات عرضية - أعلاف |
| 10098 | By-Products Hatching Eggs | منتجات عرضية - بيض تفقيس |
| 1000 | Services |  |
| 988 | Equipment Maint Serv |  |
| 989 | Rep.&Mai.Serv No TAX |  |
| 990 | Repair&Mainte. Servi |  |
| 991 | Environmental Servi. |  |
| 992 | Insurance Services |  |
| 993 | Medical Services |  |
| 994 | Techni.&Engin. Serv. |  |
| 995 | Consulting Services |  |
| 996 | Construction Servic. |  |
| 997 | Logistics Services |  |
| 998 | Advertising Services |  |
| 999 | Techni.&Informa.Serv |  |
| A0001 | Asset under Construc |  |
| A0002 | Normal Assets |  |
| FM01 | اعلاف اللاحم |  |
| FM02 | أعلاف البياض |  |
| FM03 | اعلاف السمك |  |
| FM04 | اعلاف جدود الدواجن |  |
| FM05 | اعلاف امهات اللاحم |  |
| FM06 | Feed Premix Material |  |
| FPP000 | مصنعات تحت التصنيع |  |
| L001 | بيض غير معبأ |  |
| L002 | Laying Egg |  |
| MPN-SP | Manufactur. Part Num |  |
| PROC001 | Unpacked Co-Product |  |
| PROC002 | Unpacked Co-Product |  |
| PROC003 | Unpacked By-Product |  |
| PROC004 | Processing Losses Gr |  |
| PROC005 | Processing Carcass G |  |
| PROC006 | Unpacked Grp4 |  |
| PROC007 | Proccessing By-Produ |  |
| PROC008 | Processing Rejected |  |
| PROC009 | Processing CarcassKG |  |
| R001 | Raw By-Products |  |
| WAT001 | Water Grp. |  |
| Y000 | دجاج كامل طازج |  |
| Y001 | دجاج كامل مجمد أ |  |
| Y002 | دجاج كامل مجمد ب |  |
| Y003 | دجاج كامل مجمد ج |  |
| Y004 | دجاج كامل فاخر |  |
| Y005 | دجاج طازج عبوة مفرغة |  |
| Y006 | دجاج طازج بدون جلد |  |
| Y007 | دجاج كامل بلك مجمد |  |
| Y008 | دجاج كامل بلك طازج |  |
| Y009 | أجزاء طازجة /أطباق |  |
| Y010 | أجزاء مجمدة /أطباق |  |
| Y011 | أجزاء طازجة /بلك |  |
| Y012 | أجزاء مجمدة /بلك |  |
| Y013 | فيليه طازجة /أطباق |  |
| Y014 | فيليه مجمدة /أطباق |  |
| Y015 | فيليه طازجة/أكياس |  |
| Y016 | فيليه مجمدة/أكياس |  |
| Y017 | لحوم تصنيع مبرد |  |
| Y018 | فيليه مجمدة/بلك |  |
| Y019 | مصنعات مجمدة |  |
| Y020 | مصنعات مبردة متبلة 1 |  |
| Y021 | مصنعات مبردة |  |
| Y022 | مصنعات مطبوخة مجمدة |  |
| Y023 | مصنعات مطبوخة مبردة |  |
| Y024 | مصنعات نصف مطهية |  |
| Y025 | هدايا مصنعات |  |
| Y026 | بيض المائده أبيض |  |
| Y027 | بيض المائده بني |  |
| Y028 | منتجات عرضية/مبيعات |  |
| Y029 | مصنعات مجمدة متبلة |  |
| Y030 | مصنعات مبردة متبلة 2 |  |
| Y031 | أجزاء مجمدة متبلة |  |
| Y032 | أجزاء مبردة متبلة |  |
| Y033 | فيلية مبردة متبلة |  |
| Y034 | دجاج كامل متبل |  |
| Y035 | أحشاء طازجة/أطباق |  |
| Y036 | أحشاء مجمدة/أطباق |  |
| Y037 | أحشاء مجمدة/بلك |  |
| Y038 | لحم منزوع ألى مجمد |  |
| Y039 | اجزاء مجمدة / أكياس |  |
| 1000 | Services |  |
| 988 | Equipment Maint Serv |  |
| 989 | Rep.&Mai.Serv No TAX |  |
| 990 | Repair&Mainte. Servi |  |
| 991 | Environmental Servi. |  |
| 992 | Insurance Services |  |
| 993 | Medical Services |  |
| 994 | Techni.&Engin. Serv. |  |
| 995 | Consulting Services |  |
| 996 | Construction Servic. |  |
| 997 | Logistics Services |  |
| 998 | Advertising Services |  |
| 999 | Techni.&Informa.Serv |  |
| A0001 | Asset under Construc |  |
| A0002 | Normal Assets |  |
| FM01 | اعلاف اللاحم |  |
| FM02 | أعلاف البياض |  |
| FM03 | اعلاف السمك |  |
| FM04 | اعلاف جدود الدواجن |  |
| FM05 | اعلاف امهات اللاحم |  |
| FM06 | Feed Premix Material |  |
| FPP000 | مصنعات تحت التصنيع |  |
| L001 | بيض غير معبأ |  |
| L002 | Laying Egg |  |
| MPN-SP | Manufactur. Part Num |  |
| PROC001 | Unpacked Co-Product |  |
| PROC002 | Unpacked Co-Product |  |
| PROC003 | Unpacked By-Product |  |
| PROC004 | Processing Losses Gr |  |
| PROC005 | Processing Carcass G |  |
| PROC006 | Unpacked Grp4 |  |
| PROC007 | Proccessing By-Produ |  |
| PROC008 | Processing Rejected |  |
| PROC009 | Processing CarcassKG |  |
| R001 | Raw By-Products |  |
| WAT001 | Water Grp. |  |
| Y000 | دجاج كامل طازج |  |
| Y001 | دجاج كامل مجمد أ |  |
| Y002 | دجاج كامل مجمد ب |  |
| Y003 | دجاج كامل مجمد ج |  |
| Y004 | دجاج كامل فاخر |  |
| Y005 | دجاج طازج عبوة مفرغة |  |
| Y006 | دجاج طازج بدون جلد |  |
| Y007 | دجاج كامل بلك مجمد |  |
| Y008 | دجاج كامل بلك طازج |  |
| Y009 | أجزاء طازجة /أطباق |  |
| Y010 | أجزاء مجمدة /أطباق |  |
| Y011 | أجزاء طازجة /بلك |  |
| Y012 | أجزاء مجمدة /بلك |  |
| Y013 | فيليه طازجة /أطباق |  |
| Y014 | فيليه مجمدة /أطباق |  |
| Y015 | فيليه طازجة/أكياس |  |
| Y016 | فيليه مجمدة/أكياس |  |
| Y017 | لحوم تصنيع مبرد |  |
| Y018 | فيليه مجمدة/بلك |  |
| Y019 | مصنعات مجمدة |  |
| Y020 | مصنعات مبردة متبلة 1 |  |
| Y021 | مصنعات مبردة |  |
| Y022 | مصنعات مطبوخة مجمدة |  |

| **Unit Of Measures** |
| --- |
| **Code** | **Description** | **For Information Only** |
| KG | Kilogram |  |
| G | Gram |  |
| EA | Each |  |
| PC | Pices |  |
| YD | Yards |  |
| ZDS | Dose | جرعة |
| ZVL | Vial | مكون من عدد Dose |
| ZV1 | 1000 Dose | IB 4/91 (1000 Doses) |
| ZV2 | 1500 Dose | IB 4/91 (1500 Doses) |
| ZV3 | 2000 Dose | IB 4/91 (2000 Doses) |
| ZV4 | 2500 Dose | IB 4/91 (2500 Doses) |
| ZV5 | 5000 Dose | IB 4/91 (5000 Doses) |
| ZUN | Unit | Group مجموعة |
| TO | Ton |  |
| ZTN | Tin | صفيحة |
| CAN | Canister |  |
| DR | Drum |  |
| M | Meter |  |
| M2 | Square meter |  |
| M3 | Cubic meter |  |
| L | Litre |  |
| ZST | Set | طقم |
| ROL | Role | لفة |
| PAA | Pair |  |
| PAC | Pack |  |
| PAL | Pallet |  |
| ZKT | Kit | طقم عدة |
| GAL | US gallon |  |
| FT | Foot |  |
| CCM | Cubic centimeter |  |
| CAR | Carton |  |
| ZBX | Box |  |
| CRT | Crate |  |
| BT | Bottle |  |
| ZBL | Bale |  |
| BAG | Bag |  |
| ZAM | Ambuhl |  |
| ZPA | Pail |  |
| ZBU | Bundle |  |

- **Alternative Unit of measure****:** We will use the smallest unit of measure as the base unit of measure according to SAP recommendation.

| **Alternative unit of measure ** |
| --- |
| **Material Type ** | **Base Unit of Measure ** | **Description** | **Alternative UOM** | **Description** |
| Finished Materials | EA | each | CAR | Carton |
| Raw Materials | ZDS | Dose | ZVL | Vial |
|  |  |  | ZV1 | 1000 Dose |
|  |  |  | ZV2 | 1500 Dose |
|  |  |  | ZV3 | 2000 Dose |
|  |  |  | ZV4 | 2500 Dose |
|  |  |  | ZV5 | 5000 Dose |
|  | L | Litre | BT | Bottle |
|  |  |  | DR | Drum |

| **Valuation Classes ** |
| --- |
| **Valuation Classes ** | **Description** |
| 3100 | Raw Materials |
| 3101 | Poultry Auxiliary Materi. |
| 3102 | Grains |
| 3200 | Auxiliary Materials |
| 3300 | Spare Parts Materials |
| 3400 | Packing Materials |
| 3500 | Fuel & Oils Materials |
| 3700 | Poultry General Items |
| 3800 | Returnable Pack. mat. |
| 3900 | Poultry Scrap Material |
| 5100 | WIP Parent Rearing |
| 5200 | WIP Layer Rearing |
| 5300 | Poultry Live material |
| 5400 | Poultry By-Product |
| 7100 | Semi-Finished Goods |
| 7110 | Feed |
| 7120 | Grains |
| 7200 | Finished Goods |
| 7210 | By-Product Finished |
| 7300 | Agriculture finished prod |
| 8001 | Asset under Construction |
| 9100 | Purchased Services |

| **Valuation Classes ** |
| --- |
| **Valuation Classes ** | **Description** | **Acct cat. ref.** | **Description** |
| 3100 | Raw Materials | 0001 | Raw Materials |
| 3101 | Poultry Auxiliary Materi. | 0001 | Poultry Auxiliary Materi. |
| 3102 | Grains | 0001 | Grains |
| 3200 | Auxiliary Materials | 0012 | Auxiliary Materials |
| 3300 | Spare Parts Materials | 0003 | Spare Parts Materials |
| 3400 | Packing Materials | 0014 | Packing Materials |
| 3500 | Fuel & Oils Materials | 0013 | Fuel & Oils Materials |
| 3700 | Poultry General Items | 0002 | Poultry General Items |
| 3800 | Returnable Pack. mat. | 0004 | Returnable Pack. mat. |
| 3900 | Poultry Scrap Material | 0016 | Poultry Scrap Material |
| 5100 | WIP Parent Rearing | 0007 | WIP Parent Rearing |
| 5200 | WIP Layer Rearing | 0007 | WIP Layer Rearing |
| 5300 | Poultry Live material | 0007 | Poultry Live material |
| 5400 | Poultry By-Product | 0006 | Poultry By-Product |
| 7100 | Semi-Finished Goods | 0008 | Semi-Finished Goods |
| 7110 | Feed | 0008 | Feed |
| 7120 | Grains | 0008 | Grains |
| 7200 | Finished Goods | 0009 | Finished Goods |
| 7210 | By-Product Finished | 0009 | By-Product Finished |
| 7300 | Agriculture finished prod | 0009 | Agriculture finished prod |
| 8001 | Asset under Construction |  | Asset under Construction |
| 9100 | Purchased Services | 0011 | Purchased Services |

| **Valuation Classes ** |
| --- |
| **Material Type ** | **Description** | **Acct cat. ref.** | **Description** |
| YANM | Watania Live Materials | 0007 | Ref. For Live WIP |
| YAUX | Watania Auxiliary Materil | 0012 | Ref. for Auxiliary Materials |
| YBYP | Watania By-Product | 0006 | Ref. For By-Product |
| YFFC | Watania Form-Fit-Fun.Clas | 0007 | Ref. For Live WIP |
| YFLM | Watania Fuel | 0013 | Ref. for Fuel & Oils Materials |
| YFRT | Watania Finished Goods | 0009 | Ref. for finished products |
| YGEN | Watania General Items | 0002 | Ref. for operating supplies |
| YHLB | Watania Semifinished | 0008 | Ref. for semifinished products |
| YLEH | Watania Retur. Packag. | 0004 | Ref. f. Returnable Pack. mat. |
| YLOS | Watania losses-Non Vlutd |  |  |
| YNAS | Watania NnVluted Asset | 0007 | Ref. For Live WIP |
| YNON | Watania Nonvaluated Mat | 0007 | Ref. For Live WIP |
| YNSP | Watania NnVluted Spr Part | 0007 | Ref. For Live WIP |
| YPHN | Watania Phantom |  |  |
| YPIP | Watania Pipeline material |  |  |
| YROH | Watania Raw Material | 0001 | Reference for raw materials |
| YRSA | Watania Spare Parts | 0003 | Ref. for spare parts |
| YSCR | Watania Scrap | 0016 | Reference for Scrap Material |
| YVRP | Watania Packing | 0014 | Ref.for Packing. mat. |

Split Valuation:

| **Valuation Type** |
| --- |
| **Ref Material Type ** | **Description** | **Valuation Type** | **Description** |
| YANM | Poultry Live material | V | Valuated |
|  |  | N | Nonvaluated |

| **Material Classes** |
| --- |
| **Code** | **Description** |
| Y_RAW_MATERIAL | Poultry Raw Material |
| Y_AUXILIARY | Poultry Auxiliary (Helping Mat) |
| Y_PACKING_MATERIAL | Poultry Packing |
| Y_FUEL_OIL_GASES | Poultry Fuel |
| Y_GENERAL_MATERIAL | Poultry Common & General Items |
| Y_SPARE_PARTS | Poultry Spare Parts |

- Materials Field Selection:

| **Material Types** | **Mandatory Fields** |
| --- | --- |
|  | Material Group | Division | Material Statistics group | Loading  Group | Transportation Group | Availability Check | Profit Center | Storage Bin | Storage Conditions | Total Shelf life | Valuation Class | Purchasing Group |
| YROH | Poultry Raw Material | X |  |  |  |  | X |  |  |  |  | X | X |
| YRSA | Poultry Spare Parts | X |  |  |  |  | X |  | X |  |  | X | X |
| YFRT | Poultry Finished Goods | X | X | X | X | X | X | X |  | X | X | X |  |
| YHLB | Poultry Semi Finished | X |  |  | X | X | X | X |  |  |  | X |  |
| YVRP | Poultry Packing | X |  |  |  |  | X |  |  |  |  | X | X |
| YAUX | Poultry Auxiliary | X |  |  |  |  | X |  |  |  |  | X | X |
| YFLM | Poultry Fuel | X |  |  |  |  | X |  |  |  |  | X | X |
| YSCR | Poultry Scrap | X |  |  |  |  | X |  |  |  |  | X |  |
| YGEN | Poultry General Items | X |  |  |  |  | X |  |  |  |  | X | X |
| YAST | Poultry Assets Material | X |  |  |  |  | X |  |  |  |  | X |  |
| YANM | Poultry Live material | X |  |  |  |  | X | X |  |  |  | X | X |
| YBYP | Poultry By-Product | X |  |  |  |  | X |  |  |  |  | X |  |
| YPHN | Poultry Phantom | X |  |  |  |  | X |  |  |  |  |  |  |
| YLOS | Poultry losses items | X |  |  |  |  | X |  |  |  |  |  |  |

| Explore Phase – PP Business Process Document |
| --- |
| Confidential | Page 10 of 12 |
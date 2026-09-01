# V2-MM-BEI MM Month End Closing

# MM-BEI Month End Closing For MM

## Definition 

The closing operations component helps you prepare and carry out the activities required for month-end and year-end closing. 

For this purpose, the system provides a series of standard reports used to generate evaluations and analyses of the posted account balances directly.

The system helps you to carry out the following:

Instantly create financial reporting, like Balance Sheets and P&L statements and document the posting data.

For MM Closing Period Process, some activities must be finished before the Month closing.

## Process Diagram

### Process Steps Details and Responsibility Assignment Matrix (RACI)

| **Process Steps Description**** ** |
| --- |
| **ID** | **Process Step Description** | **Execution** | **Roles** |
|  |  | **T-Code** | **FIORI Application** | **Stock keeper** | **Shipping Specialist** | **DRP Planner** | **Purchaser** | **Physical Inventory ** | **AP Accountant** | **Accounting Department** |
|  |  |  |  |  |  |  |  |  |  |  |
| 01 | Posting inventory adjustments | MIGO |  | R |  |  |  |  |  | I |
| 02 | Posting goods Movements in hold and on hand | MIGO |  | R |  |  |  |  |  | I |
| 03 | Ensure that all goods or services received in the current or prior Period posted in the SAP system. Goods receipts shall not be posted in advance of the actual receipt date. | MIGO_GR |  | R |  |  |  |  |  | I |
| 04 | Check the opened outbound deliveries to take the appropriate action to delete the delivery or leave it to next month | Vl06G |  |  | R |  |  |  |  | I |
| 05 | Check the Stock in transit to take the appropriate decision for it | MB5T ME2W |  |  |  | R |  |  |  | I |
| 06 | Mark delivery complete indicators for the actually completed orders but still opened and will not be additional shipments | ME22N MASS |  |  |  |  | R |  |  | I |
| 07 | Post difference for Opened Physical Inventory Documents | MI20 MI07 |  |  |  |  |  | R |  | I |
| 08 | Posting invoice receipts parked and on hand | MIRO |  |  |  |  |  |  | R | I |
| 09 | Performing Goods Receipt/Invoice Receipt (GR/IR) clearing account (#G/L Account No.) maintenance on purchase orders to ensure an accurate Goods Receipt/Invoice Receipt (GR/IR) account balance. | MR11 |  |  |  |  |  |  | R | I |
| 10 | Open Next Period | MMPV |  |  |  |  |  |  |  | R |
|  |  |  |  |  |  |  |  |  |  |  |

| **Step** | **البيان** | **الإدارة/****Department** | **Owner** | **Report T-Code** |
| --- | --- | --- | --- | --- |
| Make sure All feed transfer is done | التاكد من إتمام كل التحويلات لمصانع الأعلاف | ينبع | عادل القبلان | YMM_DLV ZWT_Diff YopenSTO |
| Make Sure All reservations for Farms closed | التأكد من غلق كل طلبات الصرف لمزارع الإنتاج Reservation | الإنتاج الحي | فاروق خان | MB25 |
| Make Sure All finished Goods issue from processing to branches and further processing is done | التأكد من إتمام صرف المنتج التام للفروع والمصنعات | المسالخ | بدر النفيسة | ZORDERS1 |
| Make sure All food products to restaurants | التأكد من إنتهاء عمليات صرف المنتجات الزراعية للمطاعم | القطاع الزراعي | أبوالفضل | MB52 |
| Compare physical Materials balance is equal to the balance on SAP for general stores | مطابقة رصيد نهاية المدة الفعلي للمستودعات العامة مع النظام | المستودعات العامة | عادل القبلان | MB5B |
| Make Sure All reservations are closed | التأكد من غلق كل طلبات الصرف Reservation | المستودعات | عادل القبلان | MB25 |
| Make Sure All deliveries are issued | التأكد من إنهاء **صرف **كل أوامر التحميل Delivery | المستودعات | بدر النفيسة | VL06G |
| Make Sure All the issued deliveries are received | التأكد من إنهاء **استلام **كل أوامر التحميل Delivery | المستودعات | بدر النفيسة | YMM_DLV |
| Close all open stock Transport orders | غلق كل طلبات التحويلات STO | المستودعات | بدر النفيسة | YOPENSTO |
| Compare physical Materials balance is equal to the balance on SAP for the Finished goods stores at Qassim | مطابقة رصيد نهاية المدة الفعلي لمستودعات المشروع للمنتج التام مع النظام | المنتج التام | محمد السلوم | MB5B |
| Compare physical Materials balance is equal to the balance on SAP for the Finished goods stores at Branches | مطابقة رصيد نهاية المدة الفعلي لمستودعات الفروع للمنتج التام مع النظام | الفروع | محمد السلوم | MB5B |
| Closing All the completed Purchase order which will not be used in receiving additional goods and if there is goods not received update the system with the actual new dates | غلق كل أوامر الشراء المستلمة وتعديل تواريخ الإستلام لأوامر الشراء المتأخرة | المشتريات | معاذ الباز | YOPENPO YPO_INFO |
| Closing All the completed schedule Agreements which will not be used in receiving additional goods and if there is goods not received update the system with the actual new dates | غلق كل عناصر عقود الشراء المجدولة المستلمة وتعديل تواريخ الإستلام للعناصر المتأخرة | المشتريات | معاذ الباز | YOPENAGR YPO_INFO |
| Review the purchase requisitions which is released and no action taken on it from purchasing department | مراجعة طلبات الشراء المعمدة والتي لم تعالج من قبل إدارة المشتريات حتى الأن | المشتريات | معاذ الباز | YOpenPR_Rel |
| Closing all the opened purchase requisitions and changing the delivery date for the delayed requisitions | غلق كل طلبات الشراء المعلقة وتعديل تواريخ الإستلام لطلبات الشراء المتأخرة | مراقبة المخزون | عمار الباز | YOpenPR ME5A |
| Open Next Period For Company code 1000 | فتح فترة المخازن الجديدة وغلق الفترة السابقة | إدارة التكاليف | أشرف حسام Wisys | MMPV |
| Open Next Period For Company code 3000 | فتح فترة المخازن الجديدة وغلق الفترة السابقة | إدارة التكاليف | أشرف حسام Wisys | MMPV |
| Open Next Period For Company code 2000 | فتح فترة المخازن الجديدة وغلق الفترة السابقة | إدارة التكاليف | أشرف حسام Wisys | MMPV |

| Explore Phase – MM Business Process Document |
| --- |
|  | Page 3 of 4 |
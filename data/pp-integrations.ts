export interface IntegrationModule {
  id: string;
  code: string;
  name: string;
  nameAr: string;
  color: string;          // bg colour token
  textColor: string;      // text colour token
  direction: "bidirectional" | "pp-to" | "to-pp";
  summary: string;
  flows: {
    label: string;
    direction: "PP → " | "→ PP" | "↔";
    description: string;
    tCodes: string[];
  }[];
  keyPoints: string[];
}

export const ppIntegrations: IntegrationModule[] = [
  {
    id: "qm",
    code: "QM",
    name: "Quality Management",
    nameAr: "إدارة الجودة",
    color: "#E8F0E4",
    textColor: "#1C3A2B",
    direction: "bidirectional",
    summary:
      "QM is embedded inside the PP process lifecycle. Production orders trigger in-process inspection lots at routing operations, and goods receipts from production automatically create GR inspection lots. The usage decision in QM controls stock release and can halt further production steps.",
    flows: [
      {
        label: "In-Process Inspection",
        direction: "↔",
        description:
          "Routing operations with control key QM01 (CA01) generate inspection lots mid-production. The PP order cannot be confirmed past a gate operation until the QM inspector records results (QE11) and makes a usage decision (QA11).",
        tCodes: ["CA01", "CO11N", "QA32", "QE11", "QA11"],
      },
      {
        label: "Goods Receipt Inspection",
        direction: "→ PP",
        description:
          "When CO15 or MIGO posts the finished-goods GR from a production order, QM automatically creates an inspection lot (origin 04). Stock lands in quality-inspection stock, not unrestricted, until QA11 releases it.",
        tCodes: ["CO15", "MIGO", "QA11", "QE01"],
      },
      {
        label: "Scrap & Rework Feedback",
        direction: "↔",
        description:
          "Scrap quantities confirmed in CO11N are visible in QM defect analysis. Quality notifications (QM01) raised against production orders carry corrective actions that feed back into process changes (CA02, CS02).",
        tCodes: ["CO11N", "QM01", "QGA1", "CA02"],
      },
    ],
    keyPoints: [
      "Inspection plans (QP01) are linked to routings — no valid plan means no inspection lot.",
      "Usage decision in QA11 posts stock from quality-inspection to unrestricted (or blocked/scrap).",
      "QM rejection of a GR lot blocks the production order GR stock — downstream delivery is halted.",
      "Dynamic modification rules (QS31) auto-adjust inspection frequency based on past production quality.",
    ],
  },
  {
    id: "mm",
    code: "MM",
    name: "Materials Management",
    nameAr: "إدارة المواد",
    color: "#EDE9E1",
    textColor: "#2A2E2B",
    direction: "bidirectional",
    summary:
      "MM is the supply backbone of PP. MRP (MD01) converts planned orders into purchase requisitions that MM converts into purchase orders (ME21N). Every component consumed on the shop floor is a goods issue (MIGO) that reduces MM-managed inventory. Vendor GR inspections close the loop between incoming materials and production readiness.",
    flows: [
      {
        label: "MRP → Procurement",
        direction: "PP → ",
        description:
          "MRP run (MD01) creates purchase requisitions for externally sourced components. MM buyers convert these to purchase orders (ME21N). The planning file in MD01 is driven by MM stock levels and open POs.",
        tCodes: ["MD01", "MD04", "ME21N", "ME22N"],
      },
      {
        label: "Goods Issue to Production",
        direction: "↔",
        description:
          "When a production order is released, components are reserved in MM. MIGO (movement type 261) issues components from MM warehouse stock to the production order, reducing inventory and posting the cost to the order.",
        tCodes: ["CO01", "MIGO", "MB52", "MD04"],
      },
      {
        label: "Goods Receipt of Finished Goods",
        direction: "PP → ",
        description:
          "CO15 or MIGO (movement type 101) posts the manufactured quantity back into MM unrestricted stock (or quality stock if QM active). This closes the production order quantity.",
        tCodes: ["CO15", "MIGO", "MB52"],
      },
      {
        label: "Bill of Materials ↔ Material Master",
        direction: "↔",
        description:
          "BOM components (CS01) must exist as material master records in MM with correct MRP views, procurement types, and plant data. The MRP type and lot-sizing procedure on the MM material master control how MRP handles each component.",
        tCodes: ["CS01", "CS02", "MD01"],
      },
    ],
    keyPoints: [
      "MRP reads MM stock, open POs, and sales orders to calculate net requirements.",
      "Backflushing (MF60) auto-posts GI of components on production confirmation — no separate MIGO needed.",
      "Batch management in MM (MSC1N) gives full traceability from raw material to finished product.",
      "Storage location assignment on the production order controls which MM storage location is hit.",
    ],
  },
  {
    id: "sd",
    code: "SD",
    name: "Sales & Distribution",
    nameAr: "المبيعات والتوزيع",
    color: "#F8EBC5",
    textColor: "#7A5E0A",
    direction: "to-pp",
    summary:
      "SD is the demand signal source for make-to-order (MTO) and make-to-stock (MTS) production. Sales orders in SD create independent requirements that drive MRP planning. In MTO scenarios, a production order is directly linked to a sales order line item — the finished goods are reserved exclusively for that customer.",
    flows: [
      {
        label: "Sales Order → MRP Demand",
        direction: "→ PP",
        description:
          "Confirmed sales orders in SD generate independent requirements visible in MD04. MRP consumes these requirements and creates planned orders or production orders to fulfil them by the requested delivery date.",
        tCodes: ["MD04", "MD01", "CO01"],
      },
      {
        label: "Make-to-Order Linkage",
        direction: "→ PP",
        description:
          "In MTO strategy (e.g., strategy 20), each SD sales order item is directly linked to a production order. The finished goods GR posts to sales-order stock, not general unrestricted stock — the item is reserved for that customer.",
        tCodes: ["CO01", "CO15", "MD04"],
      },
      {
        label: "Delivery & Goods Issue",
        direction: "PP → ",
        description:
          "Once PP has produced and QM has released the finished goods, SD creates the outbound delivery. The goods issue in SD (VL02N) reduces the finished-goods stock that PP's CO15 created.",
        tCodes: ["CO15", "QA11", "QV51"],
      },
    ],
    keyPoints: [
      "Planning strategy (MTS vs MTO) is set on the material master MRP 3 view — it controls whether SD sales orders directly consume production or planned stock.",
      "Available-to-promise (ATP) check in SD reads PP planned/production order quantities to confirm delivery dates.",
      "Backlog in SD (unconfirmed sales orders) shows up as exceptions in MD06 for the planner to action.",
      "Quality certificates (QV51) issued on SD delivery pull results from QM inspection lots — PP must complete and release the lot first.",
    ],
  },
  {
    id: "fico",
    code: "FI/CO",
    name: "Finance & Controlling",
    nameAr: "المالية والتكاليف",
    color: "#FCDEDE",
    textColor: "#9B3030",
    direction: "bidirectional",
    summary:
      "Every PP transaction has a financial dimension. Production orders are cost objects that accumulate actual costs (material, labour, overhead) and are settled at period-end against cost centres, WBS elements, or profitability segments. Variance analysis between standard cost and actual cost drives manufacturing efficiency reporting.",
    flows: [
      {
        label: "Production Order as Cost Object",
        direction: "↔",
        description:
          "CO01 creates a production order with a preliminary cost estimate. As GI (MIGO), confirmations (CO11N), and overhead allocations occur, actual costs are posted to the order. CO88 (period-end settlement) moves these costs to the target cost object (cost centre or WBS).",
        tCodes: ["CO01", "CO11N", "MIGO", "CO15"],
      },
      {
        label: "Standard Cost & Variance",
        direction: "↔",
        description:
          "FI/CO maintains standard prices on the material master (accounting view). PP production confirms actual quantities and times. The difference between standard cost and actual cost is posted as a production variance to CO, visible in cost centre or profitability reports.",
        tCodes: ["CO11N", "CO15", "MD01"],
      },
      {
        label: "WBS / Project Cost Assignment",
        direction: "↔",
        description:
          "In project-based manufacturing (PS integration), production orders are assigned to WBS elements. All costs flow up to the project, enabling project-level cost tracking alongside normal PP production reporting.",
        tCodes: ["CO01", "CO02"],
      },
    ],
    keyPoints: [
      "The production order must be settled (CO88) at period-end — unsettled orders leave costs stranded on the order.",
      "Goods issue valuation uses the moving average price or standard price from the MM material master (FI accounting view).",
      "Scrap posted in CO11N generates a financial posting — scrap quantity × standard cost hits the scrap account.",
      "Labour confirmation times (CO11N) are valued using the activity price defined in CO for the work centre's cost centre.",
    ],
  },
  {
    id: "pm",
    code: "PM",
    name: "Plant Maintenance",
    nameAr: "صيانة المصنع",
    color: "#EDE9E1",
    textColor: "#4E7862",
    direction: "bidirectional",
    summary:
      "PP and PM share the work centre as a common master data object. When PM raises a maintenance order for a machine, that machine's capacity is withdrawn from the PP work centre — production scheduling must account for planned downtime. Conversely, unexpected breakdowns create PM notifications that disrupt PP schedules.",
    flows: [
      {
        label: "Work Centre Capacity Sharing",
        direction: "↔",
        description:
          "Work centres in PP (CA01) are linked to PM equipment records. PM maintenance orders consume capacity on the same work centre that production orders use. CM01 capacity evaluation shows the combined load.",
        tCodes: ["CA01", "CM01", "CO01"],
      },
      {
        label: "Breakdown → Production Impact",
        direction: "→ PP",
        description:
          "A PM breakdown notification (IW21) for equipment used in a routing operation can make that work centre unavailable. PP planners must reschedule affected production orders (CO02) and update capacity plans.",
        tCodes: ["CO02", "CM01"],
      },
    ],
    keyPoints: [
      "Planned maintenance windows should be entered as capacity absences on the work centre to block production scheduling in those periods.",
      "Maintenance-driven spare parts are managed in MM and can themselves be BOM components or separate MRP-planned materials.",
      "OEE (Overall Equipment Effectiveness) bridging: PP confirmations provide actual run time; PM provides breakdown time.",
    ],
  },
  {
    id: "wm",
    code: "WM",
    name: "Warehouse Management",
    nameAr: "إدارة المستودعات",
    color: "#EDE9E1",
    textColor: "#2A2E2B",
    direction: "bidirectional",
    summary:
      "WM manages the physical movement of materials within warehouse structures (warehouses, storage types, bins). When PP requests a goods issue for a production order, WM creates transfer orders to physically pick components from their bins and deliver them to the production supply area. Finished-goods GR from PP can trigger putaway transfer orders.",
    flows: [
      {
        label: "Component Staging for Production",
        direction: "→ PP",
        description:
          "When production order components are released (CO01/CO02), WM can automatically generate transfer orders to pick components from storage bins and move them to a production staging area. This ensures materials are physically available before production starts.",
        tCodes: ["CO01", "CO02", "MIGO"],
      },
      {
        label: "Finished Goods Putaway",
        direction: "PP → ",
        description:
          "CO15/MIGO GR of finished goods triggers WM to create a putaway transfer order, placing the finished product in the correct storage bin based on putaway strategy.",
        tCodes: ["CO15", "MIGO", "MB52"],
      },
    ],
    keyPoints: [
      "The WM-PP interface is controlled by movement types — each PP movement type has a corresponding WM movement type.",
      "Lean WM (available in S/4HANA) simplifies this for production-adjacent storage without full bin management.",
      "Stock in WM is always a subset of MM stock — they must be kept in sync via periodic reconciliation.",
    ],
  },
];

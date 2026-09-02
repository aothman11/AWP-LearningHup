/**
 * External Business Process Documents
 *
 * Word (.docx) Business Blueprints and other external docs stored in Google Drive.
 * These appear in the Business Processes tab alongside the parsed markdown sections.
 * Clicking a card opens the document directly in Google Drive.
 *
 * Rule: Word files = Business Blueprint → listed here, NOT in processes.ts
 */

export interface ExternalBpDoc {
  id: string;
  title: string;
  module: string;
  /** Google Drive view URL */
  viewUrl: string;
}

export const externalBpDocs: ExternalBpDoc[] = [
  // ── SAP MM — Material Management ─────────────────────────────────────────
  { id: "1MUFmacT8xE_gvTOq7l-ePlTfirC9EUc9", title: "MM-BNE Creating New Supplier", module: "MM", viewUrl: "https://drive.google.com/file/d/1MUFmacT8xE_gvTOq7l-ePlTfirC9EUc9/view?usp=drivesdk" },
  { id: "169LVOu4u0U4H-MZs0uVzeWjWLWzoEL68", title: "MM-BNX-010 Asset Procurement", module: "MM", viewUrl: "https://drive.google.com/file/d/169LVOu4u0U4H-MZs0uVzeWjWLWzoEL68/view?usp=drivesdk" },
  { id: "1tUGsymoMAQ-Q6VmvtO2ZaR1oPGRslRLZ", title: "MM-BNX-020 Service Procurement Process", module: "MM", viewUrl: "https://drive.google.com/file/d/1tUGsymoMAQ-Q6VmvtO2ZaR1oPGRslRLZ/view?usp=drivesdk" },
  { id: "172Ld_chbq4PK03KfVjdZSfQTZ7vDdv_u", title: "MM-J45-010 Procurement of Direct Materials", module: "MM", viewUrl: "https://drive.google.com/file/d/172Ld_chbq4PK03KfVjdZSfQTZ7vDdv_u/view?usp=drivesdk" },
  { id: "1sDLg0ZgIMec1bIQmQlHjJHOvAb02bFu1", title: "MM-MD-010 Business Partner — Suppliers", module: "MM", viewUrl: "https://drive.google.com/file/d/1sDLg0ZgIMec1bIQmQlHjJHOvAb02bFu1/view?usp=drivesdk" },
  { id: "11L5ijC-bFGuz8sgsyoqVJp-GA34XdIAr", title: "MM-MD-010 Material Master", module: "MM", viewUrl: "https://drive.google.com/file/d/11L5ijC-bFGuz8sgsyoqVJp-GA34XdIAr/view?usp=drivesdk" },
  { id: "1QPO5fcQxQRzLTyAsobdAOSSDmEj6MDyi", title: "MM-MD-030 Purchasing Info Record", module: "MM", viewUrl: "https://drive.google.com/file/d/1QPO5fcQxQRzLTyAsobdAOSSDmEj6MDyi/view?usp=drivesdk" },
  { id: "1Z82cZNIC9uoH8-YOKnYtzf51fz7n_pFx", title: "MM-MD-050 Service Master Record", module: "MM", viewUrl: "https://drive.google.com/file/d/1Z82cZNIC9uoH8-YOKnYtzf51fz7n_pFx/view?usp=drivesdk" },
  { id: "1SoF3LSwsEfa65zZ5hPzvD1bU3y9YlFbs", title: "MM-ORG-010 Purchasing Organization", module: "MM", viewUrl: "https://drive.google.com/file/d/1SoF3LSwsEfa65zZ5hPzvD1bU3y9YlFbs/view?usp=drivesdk" },
  { id: "1-dlKPxnninwgy5ThhXAKB26bf9XfPFAH", title: "MM-ORG-020 Purchasing Groups", module: "MM", viewUrl: "https://drive.google.com/file/d/1-dlKPxnninwgy5ThhXAKB26bf9XfPFAH/view?usp=drivesdk" },
  { id: "1qxNgS05J06vDnTalEQv3QeQy0Y9gOmtH", title: "MM-ORG-030 Storage Locations", module: "MM", viewUrl: "https://drive.google.com/file/d/1qxNgS05J06vDnTalEQv3QeQy0Y9gOmtH/view?usp=drivesdk" },
  { id: "1gTYbzNZpa36xcG-cvTqAmrVBC5R5W_Z7", title: "MM-SER Creating New Service Master", module: "MM", viewUrl: "https://drive.google.com/file/d/1gTYbzNZpa36xcG-cvTqAmrVBC5R5W_Z7/view?usp=drivesdk" },
  { id: "1uZ2-5gXaiOqEOXzsq011xiOc-17F_Kf0", title: "MM-SL4 Supplier Evaluation (Fiori)", module: "MM", viewUrl: "https://drive.google.com/file/d/1uZ2-5gXaiOqEOXzsq011xiOc-17F_Kf0/view?usp=drivesdk" },
  { id: "1S9JWe5py3d19ooDV58s2yBij2WXsA43o", title: "MM-ZM2 Quotation for Procurement", module: "MM", viewUrl: "https://drive.google.com/file/d/1S9JWe5py3d19ooDV58s2yBij2WXsA43o/view?usp=drivesdk" },
  { id: "1fk6AyYoidamAdMK173M92TKIfH3hqFUh", title: "MM-ZM4-2 Feed Mill Transportation", module: "MM", viewUrl: "https://drive.google.com/file/d/1fk6AyYoidamAdMK173M92TKIfH3hqFUh/view?usp=drivesdk" },
  { id: "1FNEJ56tFs9gk7Al5RzGPg7OzC-9yv4eV", title: "MM-050 Purchasing With Petty Cash", module: "MM", viewUrl: "https://drive.google.com/file/d/1FNEJ56tFs9gk7Al5RzGPg7OzC-9yv4eV/view?usp=drivesdk" },
  { id: "1AGnez7fZYdrG5fEQvAZTpJf41MHLFuhO", title: "MM-BD9 Goods Issue For Sales", module: "MM", viewUrl: "https://drive.google.com/file/d/1AGnez7fZYdrG5fEQvAZTpJf41MHLFuhO/view?usp=drivesdk" },
  { id: "1g-L3dFFcwBl51hSeQmjLXx6RKWLMSFrn", title: "MM-BEI Month End Closing", module: "MM", viewUrl: "https://drive.google.com/file/d/1g-L3dFFcwBl51hSeQmjLXx6RKWLMSFrn/view?usp=drivesdk" },
  { id: "1p2HIO1U1_F2a1-jLkL0baJ36JL1Byt7f", title: "MM-BH1 Reservation Process", module: "MM", viewUrl: "https://drive.google.com/file/d/1p2HIO1U1_F2a1-jLkL0baJ36JL1Byt7f/view?usp=drivesdk" },
  { id: "11UxvSUHFZwEMoDNFqCB6g4uOAn-34hd1", title: "MM-BJ8-010 Good Receipt From Production", module: "MM", viewUrl: "https://drive.google.com/file/d/11UxvSUHFZwEMoDNFqCB6g4uOAn-34hd1/view?usp=drivesdk" },
  { id: "1aYlQjfIcINpPcOrZmwIdfAa1OqYIoLG6", title: "MM-BJ8-020 Transfer To Production — WIP", module: "MM", viewUrl: "https://drive.google.com/file/d/1aYlQjfIcINpPcOrZmwIdfAa1OqYIoLG6/view?usp=drivesdk" },
  { id: "1nosrdu0xIXOgD0vBLrTwf0SkB0L0mOT-", title: "MM-J45-020 Good Receipt From Suppliers", module: "MM", viewUrl: "https://drive.google.com/file/d/1nosrdu0xIXOgD0vBLrTwf0SkB0L0mOT-/view?usp=drivesdk" },
  { id: "1NrNIbfzUf2WZAAFgUkyoTvc9luRAEK0O", title: "MM-ZM4 STO With Delivery", module: "MM", viewUrl: "https://drive.google.com/file/d/1NrNIbfzUf2WZAAFgUkyoTvc9luRAEK0O/view?usp=drivesdk" },
  { id: "1gXhSR_8qNktgsMmaw1NIBAc918_CrSim", title: "MM-ZM5 STO Without Delivery", module: "MM", viewUrl: "https://drive.google.com/file/d/1gXhSR_8qNktgsMmaw1NIBAc918_CrSim/view?usp=drivesdk" },
  { id: "1WSnVR7MiV-pXTYvYsT-EdDV1SORiRM9r", title: "MM-ZM6 STO Returns From Branches", module: "MM", viewUrl: "https://drive.google.com/file/d/1WSnVR7MiV-pXTYvYsT-EdDV1SORiRM9r/view?usp=drivesdk" },
  { id: "10YOBHEtzjHA1BeqE47C_3F4LEld_XlHs", title: "MM-18J-04 Requisitioning — Spare Parts", module: "MM", viewUrl: "https://drive.google.com/file/d/10YOBHEtzjHA1BeqE47C_3F4LEld_XlHs/view?usp=drivesdk" },
  { id: "1not5lR7bRXiNiDPdVRtCTJFeI8vdWE_s", title: "MM-1FW Physical Inventory Process", module: "MM", viewUrl: "https://drive.google.com/file/d/1not5lR7bRXiNiDPdVRtCTJFeI8vdWE_s/view?usp=drivesdk" },
  { id: "1IytcoBX8-ezUf-yvceFPQYxrdCWlJzuT", title: "MM-1G0 Scrapping", module: "MM", viewUrl: "https://drive.google.com/file/d/1IytcoBX8-ezUf-yvceFPQYxrdCWlJzuT/view?usp=drivesdk" },
  { id: "14ZXDFwk_R2gbR5XPJQ5fdnGZaes_kIrB", title: "MM-1P9 Intercompany Stock Transfer", module: "MM", viewUrl: "https://drive.google.com/file/d/14ZXDFwk_R2gbR5XPJQ5fdnGZaes_kIrB/view?usp=drivesdk" },
  { id: "1DYBE-fzjRuKz-nU_OR1UhucY_ONxA-dC", title: "MM-J60 Logistics Invoice Verification", module: "MM", viewUrl: "https://drive.google.com/file/d/1DYBE-fzjRuKz-nU_OR1UhucY_ONxA-dC/view?usp=drivesdk" },

  // ── SAP TM — Transportation Management (BBP PDFs) ────────────────────────
  { id: "1NPhz8IL33XcHV9GbeEy1Rd6fjt1YOL2Q", title: "TM BBP — Transportation Management (V2 Frozen)", module: "TM", viewUrl: "https://drive.google.com/file/d/1NPhz8IL33XcHV9GbeEy1Rd6fjt1YOL2Q/view?usp=drivesdk" },
  { id: "1fpzLDJJ7UHqP8h5VP_H4YwfPXWC_E5cZ", title: "TM BBP — SAP TM & Camion Integration", module: "TM", viewUrl: "https://drive.google.com/file/d/1fpzLDJJ7UHqP8h5VP_H4YwfPXWC_E5cZ/view?usp=drivesdk" },

  // ── SAP EHS — Environment Health & Safety (BBP PDF) ──────────────────────
  { id: "1Yoj4pcM8054B4xsfN__be1mVlPcrRfl0", title: "EHS BBP — Incident Management", module: "EHS", viewUrl: "https://drive.google.com/file/d/1Yoj4pcM8054B4xsfN__be1mVlPcrRfl0/view?usp=drivesdk" },
];

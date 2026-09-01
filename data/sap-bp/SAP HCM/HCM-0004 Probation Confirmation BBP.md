# HCM-0004 Probation Confirmation BBP

| **HCM****-0****0****4****: ****probation confirmation** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the manager to confirm the employment of a New Employee before Probation Period is completed.

Requests for Probation Confirmation will be triggered automatically from the SAP System based on the record maintained in Standard Monitoring of Tasks IT0019 of type Expiry of Probation. Request will be forwarded to the concerned Direct Manager of the employee. Request will be triggered if the Due of the Probation Expiry is 2 weeks from the system date.

Details of the request are saved in a Custom Infotype IT9030 with all the confirmation details.

This application will be available under Manager Role in Fiori.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Manager Self Service |
| Process Input | Probation Confirmation evaluation |
| Process Output | Evaluation will be recorded in infotype9030 |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  | **Enter Witness Feedback 2** |  |  |  |  |
|  | **Select Supervisor ****At**** Injury** |  |  |  |  |
|  | **Add Attachment (.PDF)** |  |  |  |  |
|  | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee Can submit the request from FIORI

- Request will goto Line manager for approval

- After final approval request details will be stored in Infotype.

### **Company Policy**

- Employee cannot submit the request for same employee on the same date.

### **Application Design**

### **Legal Considerations**** and Company-Specific Policies**

	N/A

### **Organization Structure Considerations**

| **Relationship** |
| --- |
| Line Manager | 002 |

### **System Configuration Considerations**

N/A

## **Authorization**** **

| **Authorizations** |  |  |
| --- | --- | --- |
| **ID** | **Authorization Role** | **Comments** |
| 001 | ZFIORI_EMPLOYEE_LANDING_APP |  |
| 002 | ZFIORI_FIN_TE_CRE_APP |  |
| 003 | ZFIORI_FIN_TR_CRE_APP |  |
| 004 | ZFIORI_HCM_EMPLOYEE_APPS_6000 |  |
| 005 | ZFIORI_HR_EMPLOYEE |  |
| 006 | ZFIORI_HR_MANAGER |  |
| 007 | ZFIORI_SAP_HCM_MANAGER_APPS |  |
|  |  |  |
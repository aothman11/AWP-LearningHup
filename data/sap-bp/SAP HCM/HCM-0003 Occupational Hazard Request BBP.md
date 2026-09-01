# HCM-0003 Occupational Hazard Request BBP

| **HCM****-0****0****3****: ****occupational hazard request** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables any employee to report an Occupational Hazard (work injury) that happened to self or another employee. The information that is required for this request is used to submit the form to the Labor Law office.

This application will be available under Employee Role in Fiori.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Occupational Hazard |
| Process Output | Occupational Hazard request will be created after final approval |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI ****Employee**** Self-Services** |  |  |  |  |
| **002** | **Click on My Occupational Hazard Application Tile** |  |  |  |  |
| **004** | **Click on Add** |  |  |  |  |
| **005** | **A select employee**** from the list** |  |  |  |  |
| **006** | **Select the Date**** of Injury** |  |  |  |  |
|  | **Select type of Injury** |  |  |  |  |
|  | **Select Notification Date** |  |  |  |  |
|  | **Select Date of Injury Leave** |  |  |  |  |
|  | **Enter ****the ****Location where the injury occurred** |  |  |  |  |
| **007** | **Enter ****Accident type/ cause of injury** |  |  |  |  |
| **00****8** | **Enter the Source of Injury** |  |  |  |  |
| **00****9** | **Enter ****Injury Description** |  |  |  |  |
|  | **Enter Parts Injured** |  |  |  |  |
|  | **Select Witness Employee** |  |  |  |  |
|  | **Enter Witness Feedback** |  |  |  |  |
|  | **Select Witness Employee 2 ** |  |  |  |  |
|  | **Enter Witness Feedback 2** |  |  |  |  |
|  | **Select Supervisor At Injury** |  |  |  |  |
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
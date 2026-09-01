# HCM-0006 My Overtime BBP

| **HCM****-0****0****6****: ****my overtime ****request** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee and the manager to create Overtime Request as a planned Overtime. Request has to be for future dates otherwise system will reject the request.

Requestor has to enter the details of the request including Date, No. of Hours, and optionally a comment for the purpose of overtime.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Overtime Hours |
| Process Output | Overtime Records will be created in infotype after final approval |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
|  | **Login to FIORI Employee ****self-service** |  |  |  |  |
|  | **Click on ****the ****My ****overtime**** Application tile** |  |  |  |  |
|  | **Select ****M****yself/ ****B****ehalf ** |  |  |  |  |
|  | **S****elect the date** |  |  |  |  |
|  | **En****ter the Hours ****week off****/weekdays** |  |  |  |  |
|  | **Enter comments (optional)** |  |  |  |  |
|  | **Click on Submit** |  |  |  |  |
|  |  |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee Can submit the request from FIORI

- Request will go to Line manager for approval

- After final approval based on the type of the overtime wage types will be created in Infotype 2010

- For Week off wage type 3060

### **Company Policy**

- If an employee came late, then once approved by the Manager, create an Unpaid Leave Record for the days from Leave End Date+1 to Actual Leave End Date.

- Upon request approval, remove the Lock on employee master data in Payroll Status IT0003

- Only display leaves more than 10 days and within the past of 6 months and which no Return from Leave request is attached.

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
# HCM-0005 My Return From Leave BBP

| **HCM****-0****0****5****: ****Return From leave request** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to request a Return from Leave. Request for Return from Leave is subject to Approval from the line manager and HR admin.

This application will be available under Employee Role in Fiori.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Return From Leave Application |
| Process Output | Return from Leave will be submitted and final approval employee will be unlocked |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
|  | **Login to FIORI Employee ****self-service** |  |  |  |  |
|  | **Click on ****the ****My Return from Leave Application tile** |  |  |  |  |
|  | **Select Leave request from ****the left tab** |  |  |  |  |
|  | **Select Actual Leave End date** |  |  |  |  |
|  | **Select the return action from ****the ****list** |  |  |  |  |
|  | **Enter comments (optional)** |  |  |  |  |
|  | **Click on Submit** |  |  |  |  |
|  |  |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee Can submit the request from FIORI

- Request will go to Line manager for approval

- After final approval Return from Leave action will be created in Infotype Actions

- Employee will be unlocked from infotype 0003 Payroll Status.

- After final Decision email notification will be sent to requester.

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
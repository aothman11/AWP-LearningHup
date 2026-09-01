# HCM-0007 My Grievance BBP

| **HCM****-0****0****2****: ****My Grievance**** Application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to raise a complaint against any employee within the company.

Request will be submitted to the Grievance Committee which will take the necessary actions outside the system to resolve the issue and enter the feedback within the workflow. 

The request will take 2 paths:

•	Either feedback will be entered into the system and sent back to the HR Government Supervisor

•	Or it will be completed and closed without anything

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Create a Grievance against the employee |
| Process Output |  |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **003** | **Click on ****Grievance**** Application Tile** |  |  |  |  |
| **004** | **Click on Add** |  |  |  |  |
| **005** | **Enter the Reason for Grievance** |  |  |  |  |
| **006** | **Select the date of Grievance** |  |  |  |  |
| **007** | **Select the employee from the list 1, 2, or Max 3** |  |  |  |  |
| **00****8** | **Select ****Witness 1 and 2 ** |  |  |  |  |
| **00****9** | **Enter ****the Action Requested** |  |  |  |  |
| **010** | **Enter the Comments** |  |  |  |  |
|  | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit Grievance request against any employee within the company from FIORI

- Request will be submitted to the Grievance Committee which will take the necessary actions outside the system to resolve the issue.

- Enter the feedback within the workflow. Deduction will be added to payroll calculation.

- After the process is completed, the request will be saved in Custom Grievance IT9012.

- Notifications will be triggered to concerned people involved in the process with each action taken from his step of involvement.

### **Company Policy**

- Grievance Committee will have 2 options:

- Complete and Close

- Complete and Send to HR

- For all cases, Results Text Area will be available and Mandatory

- Attachment option to attach the Decision scanned document

- Send SMS to employee in the 2 cases as in Req-001:Complete and Close and Complete and Send to HR

- Upon workflow completion, details will be created in Custom Grievance IT9012

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
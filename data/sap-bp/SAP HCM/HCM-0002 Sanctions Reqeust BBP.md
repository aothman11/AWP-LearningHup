# HCM-0002 Sanctions Reqeust BBP

| **HCM****-0****0****2****: ****Sanctions ****Request**** Application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the manager to request a penalty applied to one of his subordinates due to a violation at work according to the list of Sanctions in Labor Law. The Manager will select from the available list of Sanction categories; the Sanction Type populates automatically. Enter the Date of Sanction and enter a mandatory Comment explaining the case.

Notifications will be triggered to concerned people upon request submission.

There is no approval process required for this service but only action to be confirmed by the HR Admin

Details of the request will be saved in a Standard SAP Infotype Sanctions for Private Sector 3329

This application will be available under the Manager Role in Fiori.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Maanger Self Service |
| Process Input | Sanctions Request |
| Process Output | Add sanctions to employee after final approval |
| Process Owner | HR Admin |
| Process Frequencies | Daily |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI Employee****/Manager**** Self-Services** |  |  |  |  |
| **002** | **Goto Manager Self Services Apps** |  |  |  |  |
| **003** | **Click on ****Sanctions Application Tile** |  |  |  |  |
| **004** | **Click on Add** |  |  |  |  |
| **005** | **A select subordinate employee from the list** |  |  |  |  |
| **006** | **Select the Date** |  |  |  |  |
| **007** | **Select the sanction Category** |  |  |  |  |
| **00****8** | **Select Sanction Type** |  |  |  |  |
| **00****9** | **Enter comments** |  |  |  |  |
| **010** | **Add Attachment** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Manager can submit sanction request against his/her subordinates from FIORI

- After the Final approval record with be created in IT3329.

- Deduction will be added to payroll calculation.

### **Company Policy**

- For the Manager Application, the Employee LOV should include:

- Active Employee

- Exclude Manager Personnel Number

- Only Subordinates using Relationships

- At the final decision by the Employee Service Specialist, SMS will be sent to both employee and manager

- When submitting a request for the same Category/Type and on the same date for the same employee, an error message is received:

- HR Admin can have the ability to change the Sanction Category and Type at the Confirmation step

- After submitting the request, it will be in the HR Admin Inbox in order to Confirm or Reject the Request. Once confirmed, it will be saved in SAP IT Sanctions 3329

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
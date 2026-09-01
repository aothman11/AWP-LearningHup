# HCM-0013 Acting As BBP

| **HCM****-0****01****: ****Acting As**** ****reqeust**** application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the *Manager* to request for a Acting-As Action for any of his Direct Reporting.

Manager will select from the list of available employees under his supervision and submit the request after selecting a vacant position.

The request will be approved by *Line Manager, Department Manager, and Sector VP* of the subject employee. The Positon selected by the Manager it has to be a Vacant Position not filled or to be filled by another employee.

After that, request will be confirmed by *HR Planning Specialist* to check the last 3 years’ evaluation and then submit to *HR Manager* for approval.

Notifications will be sent to *VP, **HR* and *HR Planning Specialist* at the end of process.

This application will be available under Manager Role in Fiori.

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Employee will create the permission request |
| Process Output | Permission requests will be saved in IT2002 after final approval. |
| Process Owner | HR Admin |
| Process Frequencies | Daily |
|  |  |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **002** | **Click on My ****promotion**** Application**** ****Title** |  |  |  |  |
|  | **Click on Add** |  |  |  |  |
| **004** | **Select ****Subordinate employee from the list** |  |  |  |  |
|  | **Select Destination Org-Unit** |  |  |  |  |
|  | **Select Destination Position** |  |  |  |  |
|  | **Enter Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Manager can submit Promotion request from FIORI

- Each Approver has to approve the request

- After final approval request will be created in Custom Table for History

- Notification will be sent to requester and approvers

### **Company Policy**

- if employee has completed 2 years in the company. If not, trigger an error.

- if employee has completed 2 years in the company. If not, trigger an error.

- Position has to be vacant with no future assignments.

- Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection.

### **Application Design**

### **Legal Considerations**** and Company-Specific Policies**

	N/A

### **Organization Structure Considerations**

| **Relationship** |
| --- |
| Line Manager | Requestor Line Manager |
| Department Manager | Manager of the Manager |
| Employee’s Sector VP |  |
| HR Planning Specialist | ZAPPROVER_1B, role: HR_PLAN |
|  |  |

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
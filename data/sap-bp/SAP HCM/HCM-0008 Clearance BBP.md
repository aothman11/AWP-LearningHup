# HCM-0008 Clearance BBP

| **HCM****-0****01****: ****Clearance**** Application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to request for clearance. It is mandatory in case of leaving the company or going for vacation.

Depending on the clearance types, different people are included in the workflow for clearing the employee’s objects.

This application will be available under Employee Role in **Fiori**

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Clearance Request for Vacation or Resignation/Termination |
| Process Output | Record employee Clearance requests in the system after final approval. |
| Process Owner | HR Admin |
| Process Frequencies | Once |
|  |  |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **002** | **Click on My ****clearance**** Request Application**** tile** |  |  |  |  |
| **003** | **Click on Add Request** |  |  |  |  |
| **004** | **Select clearance type** |  |  | **Vacation** |  |
| **005** | **Select leave Details** |  |  |  |  |
| **006** | **Add Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |
|  |  |  |  |  |  |
| **1****00** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **002** | **Click on My clearance Request Application tile** |  |  |  |  |
| **003** | **Click on Add Request** |  |  |  |  |
| **004** | **Select clearance type** |  |  | **Resignation/Termination** |  |
| **006** | **Add Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |
|  |  |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit Clearance request from FIORI

- Each Approver has to approve the clearance.

- Email notification will be sent to requester and approvers.

- In the application, there will be a Tab for the employee to check the current status of Approvals; who approved and when.

- After final approval, information of the request will be saved in Custom Clearance IT 9014

### **Company Policy**

- Employee Cannot Submit more than 1 request if other request is pending or approved.

- Each Approver will have to confirm the clearance with a Comment Box to enter comment.

- Each step if more than 5 days not approved, considered approved

- For the Housing, check if employee has Housing Allowance or not. If yes, do not send the request to Housing Department

- For the IT, check if employee is on Grade 4 onwards or not. If yes, do not send the request to IT Department

### **Application Design**

Vacation

Resignation/Termination

### **Legal Considerations**** and Company-Specific Policies**

	N/A

### **Organization Structure Considerations**

| **Relationship** |
| --- |
| Direct Manager | Relation 002 |
| Sales Accounts | ZAPPROVERS_1B; Role: SALES |
| Permeant Loans | ZAPPROVERS_1B; Role: PRM_LOAN |
| Treasury | ZAPPROVERS_1B; Role: TRSRY |
| End of Service |  |
| Legal Department | ZAPPROVERS_1B; Role: LEG_DEPT |
| Housing Department | ZAPPROVERS_1B; Role: HOUSING |
| IT Department | ZAPPROVERS_1B; Role: IT |
| Transportation | ZAPPROVERS_1B; Role: TRNSPRT |
| Medical Insurance | ZAPPROVERS_1B; Role: HR_MED |

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
# HCM-0010 Permission BBP

| **HCM****-0****01****: ****permission**** application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to request for a permission within the day. The available Permission Types are: Business related, Personal, and Training.

The request once submitted will be sent to the employee’s Line Manager for approval. Once approved, it will create the same details in Attendance Infotype in SAP IT2002.

This application will be available under Employee Role in Fiori.

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
| **002** | **Click on My ****Permission**** Application**** ****Title** |  |  |  |  |
| **004** | **Select type**** ****of Permission** |  |  |  |  |
| **005** | **Select ****Date** |  |  |  |  |
| **006** | **Select Time (From – To)** |  |  |  |  |
|  | **Enter Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit Permission request from FIORI

- Each Direct Manager has to approve the request

- After final approval request will be created in infotyep 2002

- Notification will be sent to requester and approvers

### **Company Policy**

- Employee Cannot reqeust more than 5 hours in a day.

- Request Cannot be submitted if any input is not entered except Note. Button should be disabled

- History button to be available in the application to show the history of all the requests with status and details.

- For Personal Permission, max of 10 hours per month. If exceeded for submitted and approved requests,

- Upon workflow completion as approved, details will be created in Standard SAP Attendance IT2002.

### **Application Design**

### **Legal Considerations**** and Company-Specific Policies**

	N/A

### **Organization Structure Considerations**

| **Relationship** |
| --- |
| Direct Manager | Relation 002 |
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
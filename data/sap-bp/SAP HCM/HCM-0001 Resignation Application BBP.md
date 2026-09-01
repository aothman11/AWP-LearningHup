# HCM-0001 Resignation Application BBP

| **HCM****-0****01****: ****Resignation Application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to request for ending his employment with the company. Request for Resignation is subject to Approval from different people according to the timing of the request.

Notifications will be triggered to concerned people upon requesting a final decision both rejection and approval.

This application will be available under Employee Role in **Fiori**

| Process Characteristics |
| --- |
| Process Trigger | FIORI Employee Self Service |
| Process Input | Resignation Request |
| Process Output | Record employee resignation requests in the system after final approval. |
| Process Owner | HR Admin |
| Process Frequencies | Once |
|  |  |

### **Business Process Diagrams**

### **Process Steps Detailed Requirements ****&**** Solution**

| **Process Steps Description** |  |  |  |  |
| --- | --- | --- | --- | --- |
| **ID** | **Process Step Description** | **T-Code** | **FIORI App** | **Process Description** | **Business Role** |
| **1****0****0** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **002** | **Click on My Resignation Request Application** |  |  |  |  |
| **003** | **Click on Add Request** |  |  |  |  |
| **004** | **Specify the Effective Date** |  |  |  |  |
| **005** | **Select Resignation Reason from ****the ****Dropdown list** |  |  |  |  |
| **006** | **Select Reason for Leaving (Personal)** |  |  |  |  |
| **007** | **Select Reason for Leaving (Work Environment)** |  |  |  |  |
| **008** | **Add Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit resignation request from FIORI

- Line manager must Approve his/her resignation from FIORI.

- Line manager must select an employee is eligible for ticket

- Line manager must select an employee is eligible for Exit Re-Entry

-  

### **Company Policy**

- Employee Cannot Submit more than 1 request if other request is pending or approved.

- Employee cannot submit a request if Termination Action is already submitted.

- Employee can withdraw the request if not approved by Department Manager

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
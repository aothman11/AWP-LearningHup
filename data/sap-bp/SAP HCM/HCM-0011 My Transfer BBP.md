# HCM-0011 My Transfer BBP

| **HCM****-0****01****: ****transfer reqeust**** application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to request to be transferred from his current Org. Unit to another.

As per the policy and procedures, Manager cannot submit a Transfer Request for an employee.

The request is submitted by the employee from Fiori or KIOSK and it has to be approved by the *Destination Department Manager* and *Sector VP*. After that, employee’s *Department Manager* (*Manager of the Manager*) needs to approve before sending to Employee’s *Sector VP* for approval.

After all the approvals are granted, email notification will be sent to *HR Manager* and *VP, HR*. The final step of the workflow will be with the *HR Planning Specialist* to issue the Transfer Letter and sign it from *VP, HR*.

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
| **002** | **Click on My ****Transfer**** Application**** ****Title** |  |  |  |  |
|  | **Click on Add** |  |  |  |  |
| **004** | **Select ****Destination Org-Unit** |  |  |  |  |
|  | **Enter Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit Transfer request from FIORI

- Each Approver has to approve the request

- After final approval request will be created in Custom Table for History

- Notification will be sent to requester and approvers

### **Company Policy**

- Employee Cannot raise Transfer Request during Probation Period.

- Check if employee has more than 3 Transfer Actions earlier or qual. Trigger an error.

- First Approver upon approval, mandatory to select Position from the Org. Unit selected by the employee. Position has to be vacant with no future assignments. If no, error message “Selected Position is not vacant” “الوظيفه المختارة ليست شاغره”

- Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection.

### **Application Design**

### **Legal Considerations**** and Company-Specific Policies**

	N/A

### **Organization Structure Considerations**

| **Relationship** |
| --- |
| Destination Department Manager | 005 |
| Sector VP | 098 |
| Employee’s Manager of the Manager | 005 |
| Employee’s Sector VP | 095 |
| HR Planning Specialist | ZAPPROVER_1B; Role: HR_PLAN |

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
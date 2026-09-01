# HCM-0009 Loan BBP

| **HCM****-0****01****: ****loan request application** |
| --- |

## **Process Description**

| Requirements & Expectations |
| --- |
| ID | Description | Standard / Gap | Priority |
| 1 | Assignment of an employee to the correct Grade and Level | S | H |
| 2 | Maintain the proper relationships for all company positions or the workflow to behave as expected | S | H |
| 3 | Maintain the needed Positions of Fixed Workflow roles | S | H |

### **Business Process Description**

This application enables the employee to raise a Personal or Car Loan Request.

As part of the process, employee will have to enter Loan Details and select Guarantors to proceed with the submission. Request will be approved by multiple people according to the type of the Loan and the employee input.

This application will be available under Employee Role in Fiori.

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
| **002** | **Click on My ****Loan**** Request Application**** tile** |  |  |  |  |
| **003** | **Click on Add Request** |  |  |  |  |
| **004** | **Select type**** Myself/Behalf** |  |  | **Myself** |  |
| **005** | **Select l****oan Type****s** |  |  | **Personal Loan** |  |
| **006** | **Enter the loan Amount** |  |  |  |  |
|  | **Select Guarantor from List/Enter the Employee Number**** to find the guarantor** |  |  |  |  |
|  | **Select Need 25% Increase** |  |  |  |  |
|  | **Enter Comments (Optional)** |  |  |  |  |
| **009** | **Click on Submit** |  |  |  |  |
|  | **Car Loan** |  |  |  |  |
| **1****00** | **Login to FIORI Employee Self-Services** |  |  |  |  |
| **002** | **Click on My Loan Request Application tile** |  |  |  |  |
| **003** | **Click on Add Request** |  |  |  |  |
| **004** | **Select type Myself/Behalf** |  |  | **Myself** |  |
| **005** | **Select loan Types** |  |  | **Car Loan** |  |
| **006** | **Enter the loan Amount** |  |  |  |  |
|  | **Select Guarantor from List/Enter the Employee Number to find the guarantor** |  |  |  |  |
|  | **Select Car Type** |  |  |  |  |
|  | **Select Model** |  |  |  |  |
|  | **Select Car Class** |  |  |  |  |
|  | **Select first Owner** |  |  |  |  |
|  | **Select ****Is the car necessary to do t****he work?** |  |  |  |  |
|  | **Select ****Will the work stop if there is no car** |  |  |  |  |
|  | **Select is**** there usual transferring between sites****?** |  |  |  |  |
|  | **Select ****How may K Meter will be travelled per day** |  |  |  |  |
|  | **Select ****Are there any future changes in the job** |  |  |  |  |
|  | **Select ****Is it the owning car’s chart for your Dept** |  |  |  |  |
| **009** | **Enter Comments** |  |  |  |  |
|  | **Click on Submit** |  |  |  |  |

### **Operational Decisions or Logic within the Process**

- Employee can submit Clearance request from FIORI

- Each Approver has to approve the request

- After final approval request will be created in infotyep 0045

- Notification will be sent to requester and approvers

- Final 

### **Company Policy**

- Guarantor can guarantee as many Loan Requests as long as his EOS is sufficient. If not, error message

- No restriction of 33% of Basic Salary as Loan Installments

- Remove the Installment Amount should be read only and calculated based on Loan Amount/15

- Workflow will be sent to VP HR to approve on 25% increase only if selected by the employee

- Loan Eligible amount 

- If the Loan Type is Car, Radio Button ‘25% increase’ will not be displayed.

- Granted Amount Per Grade

| Grade | Amount |
| --- | --- |
| 14 | 200000 |
| 12-13 | 150000 |
| 9-10-11 | 100000 |
| 6 -7 -8 | 75000 |
| 4 – 5 | 65000 |

- For car Loan, Guarantor is mandatory If radio button First Owner is selected

- Car Model should not be more than 3 years old including current year.

### **Application Design**

Personal Loan

Car Loan

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
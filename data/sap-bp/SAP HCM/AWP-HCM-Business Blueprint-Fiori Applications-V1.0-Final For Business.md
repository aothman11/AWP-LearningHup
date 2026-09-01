# AWP-HCM-Business Blueprint-Fiori Applications-V1.0-Final For Business

**100**** | **Page			 

Business BluePrint

SAP Module: HCM FIORI

| Project Identification |
| --- |
| Project Name | Project Type (CBI, Implementation, CSS, Upgrade, Internal, other) |
| POULTRY Fiori/KIOSK  Phase 2 | Fiori / KIOSK New Services Development and Enablement |
| Customer Name | Planned Start/Finish date |
| Al-Watania Poultry | March 2019-July 2019 |
| Customer Project Sponsor | Customer Project Manager |
| Mr. Ibrahim Al-Mojel |  |
| WI-SYS Project Sponsor | Wi-Sys Project Manager |
| Eng. Majed Al-Khayyat | Ramy Fouad |
|  |  |

Table of contents

Introduction	21

SUMMARY	23

Project Scope	23

General Assumptions	24

1 My Resignation Request	25

Application Overview	25

Notifications Templates:	27

Business Process Flow	29

2 Ending Employment Request	30

Application Overview	30

Notifications Templates:	31

Business Process Flow	33

3 New Sanction Request	34

Application Overview	34

Notifications Templates:	34

Business Process Flow	37

4 Occupational Hazard Request	38

Application Overview	38

Notifications Templates:	39

Business Process Flow	41

5 Probation Confirmation	42

Application Overview	42

Notifications Templates	43

6 Return from Leave) Rejoin ) Request	46

Application Overview	46

Application Fields	46

Approval Structure	46

Notifications	47

Notifications Templates:	47

Approval Required Notification	47

Business Process Flow	49

7 Overtime Request	50

Application Overview	50

Proposed Design	50

Notifications Templates:	51

Business Process Flow	53

8 General Service Request	54

Application Overview	54

Notifications Templates:	58

Business Process Flow	62

10 Grievance Request	63

Application Overview	63

Notifications Templates:	65

Business Process Flow	67

11 Clearance Request	68

Application Overview	68

Notifications Templates:	69

Business Process Flow	72

12 Business Trip and Expense	73

Application Overview	73

Proposed Design	73

Notifications Templates:	76

Business Process Flow	77

13 Loan Request	79

Application Overview	79

Proposed Design	79

Notifications Templates:	82

Business Process Flow	83

14 Permission Request	85

Application Overview	85

Proposed Design	85

Notifications Templates:	87

Approval Required Notification	87

Business Process Flow	89

15 Transfer Request	90

Application Overview	90

Notifications Templates:	92

Business Process Flow	94

16 Promotion Request	95

Application Overview	95

Notifications Templates:	96

Business Process Flow	99

17 Acting-As Request	100

Application Overview	100

Notifications Templates:	101

Business Process Flow	104

18 Training Request	105

Application Overview	105

Notifications Templates:	106

Business Process Flow	109

19 Letters Request	110

Application Overview	110

Proposed Design	110

Notifications Templates:	112

Business Process Flow	113

20 My Time Events	114

Application Overview	114

Proposed Design	114

Notifications Templates:	116

Business Process Flow	117

21 My Archived Documents	118

Application Overview	118

Proposed Design	118

Notifications Templates:	119

Business Process Flow	119

Appendix	120

Document History	127

	

Introduction

This document states all of the conceptual results of the project– SAP Fiori Implementation Phase 2. These project results were devised and decided on by the project team and the department experts from customer (Project) during the Business Blueprint project phase. This is the main concept document of the project.

The content of this document forms the basis and the guidelines for the subsequent Realization phase.

This document aims to describe the future business solution based on SAP software. Both, IT subjects and organizational issues that are required to understand the situation, are described in it.

Any additional explanations that are only relevant when the project is in progress are given in the various project management plan documents, which the project management team will provide on request. 

Authors and contributors can be referred to in section Document History.

	SUMMARY

Al-Watania Poultry company showed interest in developing new services and application on SAP Fiori and Self-Service Machines KIOSK to Automate their Business process.

	Project Scope

To develop new services and applications on Fiori. The list below show all the requested applications:

| **#** | **Application/Service Name** | ** اسم التطبيق / الخدمة ** |
| --- | --- | --- |
| 1 | Business Expense | مصاريف الانتدابات |
| 2 | Business Trip | الانتدابات |
| 3 | Return From Vacation | العودة من الاجازة |
| 4 | General Service | خدمات عامه |
| 5 | Letters | خطابات التعريف |
| 6 | Time Event | بصمة الحضور والإنصراف |
| 7 | Overtime | العمل الاضافي |
| 8 | Probation Confirmation | تأكيد فتره التجربة |
| 9 | Loans | سلفه |
| 10 | Short Leave | استئذان |
| 11 | Resignation | استقالة |
| 12 | Exit Interview | استبيان نهاية الخدمه |
| 13 | Occupational Hazard | الاخطار المهنيه |
| 14 | Sanctions | العقوبات |
| 15 | Termination Request | انهاء الخدمات |
| 16 | Grievance | التظلمات والشكاوي |
| 17 | Archived Documents | الوثائق |
| 18 | Clearance | اخلاء طرف |
| 19 | Transfer Request | طلب نقل |
| 20 | Promotion Request | طلب ترقيه |
| 21 | Acting As Request | طلب تكليف |
| 22 | Training Request | طلب تدريب |
| 23 | Car Loan | سلفه السيارة |

	

	General Assumptions

### Each application that requires approval, there will be an approval application for concerned people. This will be available under the Manager Role.

- Details in the Approval Application includes all the details available in the Request Application

- For these approval applications that requires extra input from the approver, the requirements are mentioned in the Special Process Requirements table

- No changes will be accepted in each application work once this Business Blue Print is reviewed and signed. Any changes will be considered as a Change Request and estimation of time and cost will be done separately.

	1 My Resignation Request

**Application**** ****Overview**

This application enables the employee to request for ending his employment with the company. Request for Resignation is subject to Approval from different people according to timing of the request.

Notifications will be triggered to concerned people upon request final decision both rejection and approval.

This application will be available under Employee Role in **Fiori** and **Self-Service machines KIOSK**.

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping |
| Effective Date | DATE(10) | Yes | Entry – Calendar |  |
| Reason | CHAR(25) | Yes | LoV Resignation Non-Renewal of contract |  |
| Position | CHAR(40) | No | Display |  |
| Department | CHAR(40) | No | Display |  |
| Join date | DATE(10) | No | Display |  |
| Eligible for Ticket | CHAR(3) | No | Display Yes No |  |
| Reason for Leaving: Personal | CHAR(40) | No | FC Family Circumstances MA Marriage CS Complete Study 60Y 60 Year old RTU Restructure DRFV Doesn't Return From Vacation RTM Retirement FPPP Fail to Pass Probation Period TLA Term Long Absence (AWOL) DTH Death A74 Article 74 A77 Article 77 A80 Article 80 BO Better Opportunity HR Health Reasons OTH Other |  |
| Reason for Leaving: Work Environment | CHAR(40) | No | WP Work Place LS Low Salary WE Work Environment WH Working Hours JI Job Instability JL Job Location LT Lack of Training Opportunities WT Work Time CSM Conflicts with Supervisors or Managers TJ Type of Job QHMT Quality of Housing, Medical Care, Transportation |  |
| Comment | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Department Manager |  | Manager of the Manager |  |
| Level 2 | Employee Sector VP |  | Only if submitted within the notice period as per Contract Record IT0016 |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Direct Manager | Using Relation 002 | Submission – Final Decision |
| Department Manager | Manager of the Manager | Approval |
| HR Admin | Using ZAPPROVERS_1B; Role: HR_ADMIN | Final Decision Approval |
| HR Manager | Using ZAPPROVERS_1B; Role: HR_MNGR | Final Decision Approval |
| HR Ticket Specialist | Using ZAPPROVERS_1B; Role: HR_TKT | Final Decision Approval |
| HR Employee Services Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Final Decision Approval |
| HR Medical Specialist | Using ZAPPROVERS_1B; Role: HR_MED | Final Decision Approval |
| Requestor |  | Submission – Final decision |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Resignation Request has been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (Requestor Name),*

*Your Resignation Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (Requestor Name),*

*Your Resignation Request has been approved. You can review the details from My **Resignation** app. In Fiori.*

*Eligible for Ticket: (yes or No)*

*Eligible for Exit-Reentry: (yes or No)*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**** Others**

*Dear (Role Name),*

*Resignation Request has been approved for EE (emo no) (EE Name) (Effective Date). *

*Eligible for Ticket: (yes or No)*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (Requestor Name),*

*Your Resignation Request has been rejected. You can review the details from My **Resignation** app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | When selecting Reason “No Contract Renewal”, system date should be >= (EE Contract End Date – Notice Period); otherwise error message will be triggered: *“Reason cannot be selected as contract still not reached the renewal period. Please select Resignation”* *“**لا يمكن اختيار سبب إنهاء الخدمات عدم تجديد عقد. الرجاء إختيار إستقاله**”* |  |
| Req-002 | For Resignation, check the effective Date if: Iqama is still valid, deduct the remaining days till Iqama End Date from employee salary and add the amount in IT0015 Wage Type 5011. For Non-Renewal of Contract, If Contract Notice period started, deduct the remaining days of the notice period according to Contract IT 0016 and add the deduction amount in IT0015 Wage Type 5021. This is from Basic Salary only. |  |
| Req-003 | Employee Cannot Submit more than 1 request if other request is pending or approved. Error message: *“There is a Resignation Request submitted already and is under processing”* *“**لا يمكن تنفيذ الطلب. هناك طلب اسنقاله تحت الإجراء**”* |  |
| Req-005 | Employee cannot submit a request if Termination Action is already submitted. Error message: *“Request cannot be submitted. Please contact HR Team”* *"لا يمكن تنفيذ الطلب. الرجاء مراجعة إ**د**ارة الموارد البشريه"* |  |
| Req-006 | Selection of HR_ADMIN is based on the last submitted request within same company. If last request was assigned to HR_ADMIN(1), then the next will be HR_ADMIN(2) |  |
| Req-007 | At final approval, create record in SAP for the Custom IT9009 Exit Interview with the selected reasons. |  |
| Req-008 | Sector VP approval is required only if employee submit within the notice period and this is not Approval or Rejection but confirmation or not confirmed to deduct the Notice Period or not; Linked with Req-002 |  |
| Req-009 | Employee can withdraw the request if not approved by Department Manager |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process ****Flow**

	2 Ending Employment Request

**Application**** Overview**

This application enables the manger to request for ending the employment of one of his/her subordinates from the company. Request for termination is subject to approval from different people within the organizations.

Notifications will be triggered to concerned people upon request final decision in case of both rejection and approval.

This application will be available under Manager Role in Fiori.

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping |
| Employee |  | Yes | Select from LoV |  |
| Effective Date | DATE(10) | Yes | Entry - Calendar |  |
| Reason | CHAR(40) | Yes | LoV Probation Restructuring Low Performance Non Contract Renewal Retirement Discontinuity Misbehavior Absenteeism Medical Situation Non Return From Leave |  |
| Position | CHAR(40) | No | Display |  |
| Department | CHAR(40) | No | Display |  |
| Join date | DATE(10) | No | Display |  |
| Comment | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Direct Manager | Using Relation 002 |  |  |
| Level 2 | HR Manager | Using ZAPPROVERS_1B, Role: HR_MNGR |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Submission – Final Decision |
| HR Admin | Using ZAPPROVERS_1B; Role: HR_ADMIN | Final decision |
| HR Manager | Using ZAPPROVERS_1B; Role: HR_MNGR | Final Decision |
| Employee |  | Final Approval ONLY |
| Employee Services  Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Final Approval ONLY |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Ending Employment **for (EE Name) (EE Number), **has been submitted** **for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (Manager Name),*

*Your **Ending Employment Request** **for (EE Name) (EE Number), **has been submitted successfully. It is now under review and **approval*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (**Manager** Name),*

*Your Ending Employment Request for (EE Name) (EE Number) **has been approved.** *

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**** Others**

*Dear (Role Name),*

*Ending Employment Request has been approved for EE (emo no) (EE Name) (Effective Date). *

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (**Manager** Name),*

*Your Ending Employment Request for (EE Name) (EE Number)** has been rejected.** *

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For the Manager Application, the Employee LOV should include: Active Employee Exclude Manager Personnel Number Only Subordinates using Relationships |  |
| Req-003 | If Contract Notice period started, deduct the remaining days of the notice period according to Contract IT 0016 and add the deduction amount in IT0015 Wage Type 5021. This is from Basic Salary only. |  |
| Req-004 | Manager cannot submit a request if Resignation Request is already submitted. Error message: *“Request cannot be submitted. Please contact HR Team”* |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	3 New Sanction Request

**Application**** Overview**

This application enables the manger to request a penalty applied on one of his subordinates due to a violation at work according to the list of Sanctions in Labor Law. The Manager will select from the available list of Sanction Category; Sanction Type populates automatically. Enter Date of Sanction and enter a mandatory Comment explaining the case.

Notifications will be triggered to concerned people upon request submission.

There is no approval process required for this service but only an action to be confirmed by the HR Admin

Details of the request will be saved in a Standard SAP Infotype Sanctions for Private Sector 3329

This application will be available under Manager Role in Fiori.

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Employee |  | Yes | LoV |  |
| Date | DATE(10) | Yes | Entry - Calendar |  |
| Sanction Category | LoV (Parent) | Yes | Entry – Drop List |  |
| Sanction Type | LoV (Child) | Yes | Entry – Drop List |  |
| Employee Feedback |  | No | Attachment |  |
| Comment | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Employee Services Specialist |  | Using ZAPPROVERS_1B, role: HR_EMP_SRV |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Submission |
| Employee |  | Final Decision |
| HR Manager | Using ZAPPROVERS_1B; HR_MNGR | Final Decision |
| Employee Services Specialist | Using ZAPPROVERS_1B, role: HR_EMP_SRV | Final Decision |
| Payroll Administrator | Using ZAPPROVERS_1B, role: HR_ADMIN | Final Decision |

**Notifications Templates****:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Violation Report has been submitted for (EE Name) (EE Number) for your approval.** *

*Details as follows:*

*Violation Category:*

*Violation:*

*Date:** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (Requestor EE Name),*

*Violation Report for EE: (**Emp_No**) (**Emp_Name**) has been submitted successfully. It is now under approval.*

*Details as follows:*

*Violation Category:*

*Violation:*

*Date:** *

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Violation Report for EE: (**Emp_No**) (**Emp_Name**) has been approved.** *

*Details as follows:*

*Violation Category:*

*Violation:*

*Date:** *

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Violation Report for EE: (**Emp_No**) (**Emp_name**) has been rejected.*

*Details as follows:*

*Violation Category:*

*Violation:*

*Date:** *

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For the Manager Application, the Employee LOV should include: Active Employee Exclude Manager Personnel Number Only Subordinates using Relationships |  |
| Req-002 | At final decision by the Employee Service Specialist, SMS will be sent to both employee and manager; *“Violation on EE (**Emp_no**) (**Emp_name**) has been confirmed. Kindly report to HR Department”* *“**تم تأكيد مخالفه على الموظف () (). الرجاء التواصل مع إدارة الموارد البشريه**”* |  |
| Req-003 | When submitting a request for the same Category/Type and on the same date for the same employee, error message is received: *“**Request cannot be submitted for the same employee with the same details on the same date for the same Violation and Violation Category”** “**يوجد طلب مخالفه سابق بنفس التفاصيل**”* |  |
| Req-004 | HR Admin can have the ability to change the Sanction Category and Type at Confirmation step |  |
| Req-005 | After submitting the request, it will be in the HR Admin Inbox in order to Confirm or Reject the Request. Once confirmed, it will be saved in SAP IT Sanctions 3329 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |
| Req-004 | Configuration of Sanctions Categories, Types, Occurrences, and Penalties as per labor law | Payroll | WiSys Team |

**Business Process Flow**

	4 Occupational Hazard Request

**Application**** Overview**

This application enables any employee to report an Occupational Hazard (work injury) happened to self or another employee. The information that is required for this request is used to submit the form to Labor Law office.

Notifications will be triggered to concerned people upon submission.

The report should be approved by injured employee’s Line Manager in order to verify the accident.

Details of the request is saved in a Standard SAP Infotype Occupational Hazards 3312

This application will be available under Employee Role in Fiori.

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Personnel Number | NUM(8) | Yes | LoV Select any Active Employee |  |
| Date of Injury | DATE(10) | Yes | Entry - Calendar |  |
| Time of Injury | TIME(5) | Yes | Entry HH:MM |  |
| Notification Date | DATE(10) | Yes | Entry - Calendar |  |
| Location where Injury Occurred | CHAR(40) | Yes | Entry |  |
| Accident Type/ Cause of Injury | CHAR(50) | Yes | Entry |  |
| Source of Injury | CHAR(80) | Yes | Entry |  |
| Parts Injured | CHAR(80) | Yes | Entry |  |
| Injury Description | CHAR(256) | Yes | Entry |  |
| Witness 1 | LoV | No | Select any Active Employee excluding the Injured Employee |  |
| Witness 1 Name | CHAR(50) | No | Display |  |
| Witness 1 Feedback | CHAR(80) | No | Entry |  |
| Witness 2 | LoV | No | Select any Active Employee for excluding the Injured Employee |  |
| Witness 2 Name | CHAR(50) | No | Display |  |
| Witness 2 Feedback | CHAR(80) | No | Entry |  |
| Supervisor At Injury | NUM(8) | Yes | LoV Select any Active Employee excluding the Injured Employee |  |
| Attachment |  | No |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Direct Manager | Relation 002 | Approve or Reject |  | Read HRP1001-SOBID where (HRP1001-ENDDA=’31129999’ and OBJID = P0001-PLANS and HRP1001-RELAT=’002’ and HRP1001-ISTAT=’B’) Then use SOBID as OBJID to: Read HRP1001-SOBID where PLVAR=’01’, OTYPE=’S’, SCLAS=’P’, RSIGN=’B’, RELAT=’008’, and ENDDA=’31129999’ |

| Notifications |
| --- |
| Agent | Agent ID | On Action |
| Requestor |  | Submission |
| Manager | Read using relation 002 | Submission |
| HR Insurance Specialist | Using ZAPPROVERS_1B; Role: HR_INS | Submission and Final approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Occupational Hazard Report** has** been submitted for **(EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (**Requestor **EE Name),*

*Occupational Hazard Report for EE: (**Emp_No**) (**Emp_Name**)** has been submitted successfully. It is now under **approval.*

*Details as follows:*

*Personnel Number**:*

*Date of Injury**:*

*Time of Injury**:*

*Notification **Date :*

*Location where Injury Occurred**:*

*Accident Type/ Cause of Injury**:*

*Source of Injury**:*

*Parts Injured**:*

*Injury Description**:*

*Witness 1**:*

*Witness 1 Name**:*

*Witness 1 Feedback**:*

*Witness 2**:*

*Witness 2 Name**:*

*Witness 2 Feedback**:*

*Supervisor **At** Injury**:*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Occupational Hazar**d** Report for EE: (**Emp_No**) (**Emp_Name**)** has been approved.** *

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Occupational Hazard Report for EE: (**Emp_No**) (**Emp_name**) has been rejected.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | After submitting the request, it will be saved in SAP IT Occupational Hazards 3312 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	5 Probation Confirmation

**Application**** Overview**

This application enables the manager to confirm the employment of New Employee before Probation Period is completed.

Requests for Probation Confirmation will be triggered automatically from SAP System based on the record maintained in Standard Monitoring of Tasks IT0019 of type Expiry of Probation. Request will be forwarded to concerned Direct Manager of the employee. Request will be triggered if the Due of the Probation Expiry is 2 weeks from system date.

Notifications will be triggered to concerned people upon request submission and action taken.

Details of the request is saved in a Custom Infotype IT9030 with all the confirmation details.

This application will be available under Manager Role in Fiori.

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Employee Number | NUM(8) | No | Display |  |
| Employee Name | CHAR(80) | No | Display |  |
| Position | CHAR(40) | No | Display |  |
| Department | CHAR(40) | No | Display |  |
| Join date | DATE(10) | No | Display |  |
| Question n |  | No |  |  |
| Feedback | LoV | Yes | Scale from 1-5 Poor Fair Good Very Good Excellent |  |
| Decision | LoV | Yes | Values 1-4 with the below description: Confirmed Extend Transfer to another job Service Termination with End Date |  |
| Employee Strength | CHAR(256) | No | Entry |  |
| Employee Weakness | CHAR(256) | No | Entry |  |
| Training Needs | CHAR(256) | No | Entry |  |
| Comment | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| No approval |  |  |  |  |

| Notifications |
| --- |
| Agent | Agent ID | On Action |
| HR Recruitment Specialist | Using ZAPPROVERS_1B, Role: HR_REC | Submission |
| HR Planning Specialist | Using ZAPPROVERS_1B, Role: HR_PLAN | Submission |
| HR Admin | Using ZAPPROVERS_1B, Role: HR_ADMIN | Submission |

**Notifications Templates**

**Submission**** Confirmation Notification**

*Dear (HR_REC Name),*

*Probation Confirmation has been submitted successfully for EE: **(**PERNR**) (**ENAME**)**. Kindly proceed with the needed actions.*

*Decision is: (selected Decision)*

*Regards,*

*Poultry HR Team*

**Approval**** Notification**

*Dear (**Manager_Name**),*

*Probation Confirmation for EE: (PERNR) (ENAME) has been submitted for your feedback and confirmation.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | After submitting the request, it will be saved in Custom IT Probation Confirmation 9011. Custom Infotype will be in Table format to save the list of questions dynamically |  |
| Req-002 | From ECC, program will run on a daily basis to check the Probation End Date for New Employees; if it is 15 days before end of Probation End, then create the workflow and send the confirmation to the Concerned Direct Manager |  |
| Req-003 | In case this is the 2nd Probation Confirmation, if option “Extend” selected, error message: *“Extend cannot be selected in Second Probation confirmation”** “**فترة تجربة ثانيه. الرجاء اختيار قرار آخر**”* |  |
| Req-004 | Details of Questions will be maintained in a Custom Table Exit Interview Questions and based on the Flag Enabled or Not, the Questions will be displayed in the screen |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |
| Req-004 | Maintain the list of active Probation Confirmation Question in the Custom Screen | Personnel Administration |  |

**Business Process Flow**

** **

	6 Return from Leave) Rejoin) Request

	**Application**** Overview**

This application enables the employee to request Return from Leave. Request for Return from Leave is subject to Approval from line manager and HR admin.

Notifications will be triggered to concerned people upon request final decision both rejection and approval.

This application will be available under Employee Role in Fiori.

**Application Fields**

| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| --- | --- | --- | --- | --- |
| Effective Start Date | DATE(10) | Yes | Display |  |
| Effective End Date | DATE(10) | Yes | Display |  |
| Leave Type | CHAR(20) | No | Display |  |
| Actual Leave End Date | DATE(10) | Yes | Entry - Calendar |  |

**Approval Structure**

| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| --- | --- | --- | --- | --- |
| Level 1 | Direct Manager | Using Relation 002 |  |  |

**Notifications**

| Agent | Agent ID | Requirement |
| --- | --- | --- |
| Direct Manager | Using Relation 002 | Submission |
| HR Admin | Using ZAPPROVERS_1B; Role: HR_ADMIN | Submission – Final Decision |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Rejoin Request for EE (Employee Name) (Date) has been submitted for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (Requestor Name),*

*Your Rejoin Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (Requestor Name),*

*Your Rejoin Request has been approved. You can review the** details from My Rejoin **app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (Requestor Name),*

*Your Rejoin Request has been rejected. You can review th**e details from My Rejoin** app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | In the KIOSK It will display the recently five leaves which required to submit the return from leave request |  |
| Req-002 | According to Effective Date  System will calculate the On time, Early or Late return based on rejoining date and update the Info type 2001 |  |
| Req-003 | If employee came late, then once approved by Manager, create Unpaid Leave Record for the days from Leave End Date+1 to Actual Leave End Date |  |
| Req-004 | If employee came early, update the selected Leave Record and update the Leave End Date with the Actual Leave End Date |  |
| Req-005 | Upon request approval, remove the Lock on employee master data in Payroll Status IT0003 |  |
| Req-006 | Only display leaves more than 10 days and within the past of 6 months and which no Return From Leave request is attached |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	7 Overtime Request

**Application**** Overview**

This application enables the employee and the manager to create Overtime Request as a planned Overtime. Request has to be for future dates otherwise system will reject the request.

Requestor has to enter the details of the request including Date, No. of Hours, and optionally a comment for the purpose of overtime.

At final approval, the request details will be saved in the SAP Standard Remuneration Infotype 2010 using Wage Type 3060 and 3070

Notifications will be triggered to concerned people upon request final decision both rejection and approval.

This application will be available under Employee Role in Fiori.

**Proposed Design**

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| **Employee App.** |
| Date | DATE(10) | Yes | Entry - Calendar |  |
| No. of Hours | AMT(4) | Yes | Entry |  |
| Friday? | Radio Button | No | Select |  |
| Comment | CHAR(20) | No | Entry |  |
|  |
| Employee Number | NUM(8) | Yes | Entry – LoV |  |
| Employee Name | CHAR(40) | No | Display |  |
| Date | DATE(10) | Yes | Entry - Calendar |  |
| No. of Hours | AMT(4) | Yes | Entry |  |
| Friday? | Radio Button | No | Select |  |
| Comment | CHAR(20) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Department Head |  | Manager of the Manager |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Submission – Final Decision |
| Department Manager | Manager of the Manager | Approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Overtime Request** for **EE (Employee Name) (Date) (Hours) (Comment)** **has been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (**Requestor **N**ame),*

*Your Overtime Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (**Requestor **Name),*

*Your Overtime Request has been approved. You can review the details from My Overtime Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (**Requestor** Name),*

*Your Overtime Request has been rejected. You can review the details from My Overtime Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For the Manager Application, the Employee LOV should include: Active Employee Exclude Manager Personnel Number Only Subordinates using Relationships |  |
| Req-002 | From Grade 9 onwards, employee is not eligible to create Overtime Request except if the entered date is a Public Holiday “Overtime is not allowed for the Employee’s Grade” “طلب العمل الإضافي غير مسموح لدرجة الموظف الوظيفية” |  |
| Req-003 | Total no. of Overtime Approved Hours is 30 hours per month. “You have reached a maximum of 30hours” “قمت بإستهلاك الحد الأقصى وهو 30 ساعة عمل إضافي بالشهر” |  |
| Req-004 | Overtime on Friday (radio button selected) for employees with Grade 1-4 and max 32 hours per month. “You have reached a maximum of 32hours” “قمت بإستهلاك الحد الأقصى وهو 32 ساعة عمل إضافي بالشهر” “Friday Overtime is not allowed for Employee’s Grade” “العمل الإضافي يوم الراحه غير مسموح لدرجة الموظف الوظيفية” |  |
| Req-005 | General Validation: Check the entered Dates within the same request that Date cannot be entered twice. "Date has been entered before" “تم إدخال التاريخ من قبل” Date cannot be in the future “Cannot request overtime in future date” “لا يمكن طلب عمل إضافي في المستقبل” If the Date has been entered in another submitted request, error message “Overtime on the same date has been requested before” “تم طلب عمل إضافي في نفس التاريخ من قبل” |  |
| Req-006 | After request is fully approved, Create the No. of Hours in SAP Standard Employee Remuneration IT 2010 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	8 General Service Request

**Application**** Overview**

This application enables the employee to request for a multiple HR related services including Iqama Reissue, Iqama Renewal, Company ID, Ticket Booking, Exit Re-Entry, Passport Update, and Health Insurance Change.

Based on the selected service, different field groups will be displayed to the user to enter and process flow will be different as per the application details.

Notifications will be triggered to concerned people upon request final decision/action depending on the sub service

This application will be available under Employee Role in Fiori.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| **IQama Re-issue** |
| Lost | Radio Button | No | Select |  |
| Damage | Radio Button | No | Select |  |
| Comment | CHAR(40) | No | Entry |  |
| **Company ID**** request** |
| Lost | Radio Button | No | Select |  |
| Damage | Radio Button | No | Select |  |
| Other | CHAR(40) | No | Entry |  |
| Comment | CHAR(40) | No | Entry |  |
| **Ticket Booking** |
| Type | LoV | Yes | Vacation Business Trip Encashment |  |
| Self | Radio Button | No | Select |  |
| Family | Radio Button | No | Select |  |
| Both | Radio Button | No | Select |  |
| Travel Date | DATE(10) | Yes | Entry - Calendar |  |
| Return Date | DATE(10) | No | Entry - Calendar |  |
| Country | CHAR(2) | Yes | LoV |  |
| Departure Airport | CHAR(30) | Yes | Entry |  |
| Arrival Airport | CHAR(30) | Yes | Entry |  |
| Home address | CHAR(60) | Yes | Entry |  |
| Dependent Type | CHAR(20) | No | Display as Table |  |
| Dependent Name | CHAR(60) | No |  |  |
| Birth Date | DATE(10) | No |  |  |
| Passport Number | CHAR(10) | No |  |  |
| Passport Expiry | DATE(10) | No |  |  |
| Iqama Number | CHAR(10) | No |  |  |
| Iqama Expiry | DATE(10) | No |  |  |
| Attachment |  | Yes |  |  |
| **Exit-Reentry Request** |
| Type | LoV | Yes | Vacation Business Trip Emergency |  |
| Single | Radio Button | No | Select |  |
| Multiple | Radio Button | No | Select |  |
| No. of Days | NUM(2) | Yes | Entry |  |
| Guarantor | NUM(8) | Yes | LoV excluding self |  |
| Guarantor Name | CHAR(40) | No | Display |  |
| Self | Radio Button | No | Select |  |
| Family | Radio Button | No | Select |  |
| Both | Radio Button | No | Select |  |
| Dependent Type | CHAR(20) | No | Display as Table |  |
| Dependent Name | CHAR(60) | No |  |  |
| Iqama Number | CHAR(10) | No |  |  |
| Iqama Expiry | DATE(10) | No |  |  |
| Attachment |  | No |  |  |
| **Health Insurance Change** |
| Addition | Radio Button | No | Select |  |
| Deletion | Radio Button | No | Select |  |
| Dependant Type |  |  | LoV Wife Son Daughter |  |
| First Name | CHAR(40) | Yes | Entry in Addition |  |
| Last Name | CHAR(40) | Yes | Entry in Addition |  |
| Iqama Number | NUM(10) | No | Entry in Addition |  |
| National ID | NUM(10) | No | Entry in Addition |  |
| Gender | NUM(1) | Yes | LoV in Addition |  |
| Birth Date | DATE(10) | Yes | Entry – Calendar - in Addition |  |
| Nationality | CHAR(2) | Yes | LoV in Addition |  |
| Class | CHAR(4) | Yes | LoV |  |
| Sponsorship ID | NUM(10) | Yes | Entry in Addition |  |
| Insurance Type | CHAR(4) | Yes | LoV – Entry in Addition Display in Deletion |  |
| Insurance Number | CHAR(12) | No | Display in Deletion |  |
| Attachment |  | No | Entry in Addition |  |
| **Iqama Renewal** |
| Reason | CHAR(40) | Yes | Entry |  |
| Iqama Number | NUMC(10) | No | Display |  |
| **Update PAssport Details** |
| Reason | CHAR(40) | Yes | Entry |  |
| Iqama Number | NUMC(10) | No | Display |  |
| Attachment |  | Yes |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| **Iqama Re-Issue** |
| Department Manager |  | Manager of the Manager |  |  |
| **Access Card** |
| No approval |  |  |  |  |
| **Ticket Booking** |
| HR Admin |  | Using ZAPPROVERS_1B. Role: HR_ADMIN |  |  |
| **Exit-Reentry** |
| Guarantor |  |  | Only in case of Emergency |  |
| HR Admin |  | Using ZAPPROVERS_1B. Role: HR_ADMIN | If not Emergency |  |
| Direct Manager |  | Relation 002 | If Multiple |  |
| Sector VP |  |  | If Multiple |  |
| **Health Insurance** |
| Medical Insurance Specialist |  | Using ZAPPROVERS_1B. Role: HR_MED |  |  |
| **Iqama Renewal** |
| No approval |  |  |  |  |
| **Update Passport Information** |
| No approval |  |  |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| **Iqama Re-issue** |
| Requestor |  | Submission – Completion |
| Employees Services Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Submission |
| **Access Card** |
| Requestor |  | Submission – Completion |
| HR Admin | Using ZAPPROVERS_1B; Role: HR_ADMIN | Submission |
| **Ticket Booking** |
| Requestor |  | Submission – Final Action |
| HR Admin | Using ZAPPROVERS_1B. Role: HR_ADMIN | Approval |
| HR Ticket Specialist | Using ZAPPROVERS_1B. Role: HR_TKT_SPC | Approval |
| **Exit Reentry Issue** |
| Requestor |  | Submission – Final Action |
| HR Admin | Using ZAPPROVERS_1B; Role: HR_ADMIN | Submission |
| Employees Services Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Approval |
| **Health Insurance Change** |
| Requestor |  | Submission – Final Action |
| Insurance Specialist | Using ZAPPROVERS_1B; Role: HR_MED | Submission |
| **Iqama Renewal** |
| Requestor |  | Submission – Completion |
| Employees Services Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Submission |
| **Update Passport Information** |
| Requestor |  | Submission – Completion |
| Employees Services Specialist | Using ZAPPROVERS_1B; Role: HR_EMP_SRV | Submission |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*General Service for (Service Name) has been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your General Service for (Service Name) has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear EE Name),*

*Your General Service for (Service Name) has been approved. You can review the details from My **General** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your General Service for (Service Name) **h**as been rejected. You can review the details from My **General** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For Iqama Re-issue: 1 radio button should be selected at a time GOV Relation Specialist will have a button to Complete Information will be saved in a Custom* IT**90**31 “General Services” – “Iqama Re-Issue”* |  |
| Req-002 | For Access Card: Notification will include the below details: Full Arabic Name Full English Name Employee Number Position Full English Name Position Full Arabic Name Nationality Arabic Nationality English HR Admin will have a button to Complete Information will be saved in a Custom *IT9031 “General Services” – “Access Card”* |  |
| Req-003 | For Ticket Booking: For the Ticket Reason: Vacation – Leave Request approved Business Trip - BT Request approved If selected type is Encashment, workflow will not go to the 2nd approval step and completed by HR Admin step If selected type is Encashment, Encashment Amount field will be available for the HR Admin to enter and create a record in Additional Payments/Deductions IT0015 The Dependent Table will be read from SAP Standard IT Family/Dependent IT0021 The Dependent Table will not be populated except if Vacation is selected There will be a button Remove to delete any record from the Dependent Table HR Admin will have a button to Approve or Reject In case of rejection, new field displays to enter the reason of rejection. Only in case of Vacation, workflow will be sent to HR Admin to approve or reject. If request was not approved by HR Admin, end the workflow and send notifications Information will be saved in a Custom *IT90**13** “General Services” – “Ticket Booking” * |  |
| Req-004 | For Exit-Reentry: Before Submitting, if the employee has a current valid Exit-Reentry Visa, error message: *“There is a current valid Exit Reentry Visa”* The Dependent Table will be read from SAP Standard IT Family/Dependent IT0021 The Dependent Table will not be populated except if Vacation/Personal is selected There will be a button Remove to delete any record from the Dependent Table HR Admin will have a button to Approve or Reject Only in case of Vacation, workflow will be sent to HR Admin to approve or reject. If request was not approved by HR Admin, end the workflow and send notifications In case of rejection, new field displays to enter the reason of rejection. In case of Personal, a field of Cost will be available optionally to enter the fees. Cost to be saved in SAP Standard Additional Deduction IT0015 Information for the new Exit-Reentry will be saved in SAP Standard *Personnel IDs IT0185* with the respective Subtypes for Single and Multiple Visa Self or Family. Information will be saved in a Custom *IT9031 “General Services” – “Exit-Reentry” * |  |
| Req-005 | For Health Insurance: In case of Upgrade, only Insurance Class will be displayed In case of Deletion, read from SAP Standard Insurance IT0037 all the records where End Date = 31129999 and fill in the Table of Dependents Insurance Specialist will have a button to Confirm or Reject In case of rejection, new field displays to enter the reason of rejection. Information will be saved in a Custom *IT90**13** “General Services” – “Health Insurance * |  |
| Req-006 | For Iqama Renewal: 1 radio button should be selected at a time GOV Relation Supervisor will have a button to Complete Information will be saved in a Custom* IT9013 “General Services” – “Iqama **Renewal**”* |  |
| Req-007 | For Iqama Re-issue: 1 radio button should be selected at a time GOV Relation Supervisor will have a button to Complete Information will be saved in a Custom* IT90**13** “General Services” – “**Update Passport Information**”* |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |
| Req-004 | Design of the new Custom Infotype IT9031 General Services | Personnel Administration | WiSys Team |

**Business Process Flow**

** **

	10 Grievance Request

**Application**** Overview**

This application enables the employee to raise a complaint against any employee within the company.

Request will be submitted to the Grievance Committee which will take the necessary actions outside the system to resolve the issue and enter the feedback within the workflow. 

The request will take 2 paths:

- Either feedback will be entered into system and sent back to the HR Government Supervisor

- Or it will be completed and closed without anything

Notifications will be triggered to concerned people involved in the process with each action taken from his step of involvement.

After process is completed, the request will be saved in Custom Grievance IT9012.

This application will be available under Employee Role in **Fiori** and **Self-Service Machines KIOSK**

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Reason for Grievance | CHAR(256) | Yes | Entry |  |
| Date of Grievance reason occurrence | DATE(10) | Yes | Entry - Calendar |  |
| Against Employee 1 | NUM(8) | Yes | Entry – LoV |  |
| Against Employee 1’s Name | CHAR(40) | No | Display |  |
| Against Employee 1’s Department | CHAR(40) | No | Display |  |
| Against Employee 1’s Position | CHAR(40) | No | Display |  |
| Against Employee 2 | NUM(8) | Yes | Entry – LoV |  |
| Against Employee 2’s Name | CHAR(40) | No | Display |  |
| Against Employee 2’s Department | CHAR(40) | No | Display |  |
| Against Employee 2’s Position | CHAR(40) | No | Display |  |
| Against Employee 3 | NUM(8) | Yes | Entry – LoV |  |
| Against Employee 3’s Name | CHAR(40) | No | Display |  |
| Against Employee 3’s Department | CHAR(40) | No | Display |  |
| Against Employee 3’s Position | CHAR(40) | No | Display |  |
| Witness 1 | LoV | No | LoV Select any Active Employee excluding self and against |  |
| Witness 1 Name | CHAR(40) | No | Display |  |
| Witness 2 | LoV | No | LoV Select any Active Employee excluding self and against |  |
| Witness 2 Name | CHAR(40) | No | Display |  |
| Actions Requested | CHAR(256) | Yes | Entry |  |
| Attachment |  | No |  |  |
| Notes | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Grievance Committee |  | ZAPPROVER_1B; Role: GR_COM |  |
| Level 2 | Employee Services Specialist |  | ZAPPROVER_1B; Role: HR_EMP_SRV |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Each Step from Submission |
| Grievance Committee | ZAPPROVER_1B; Role: GR_COM | Submission |
| Employee Services Specialist | ZAPPROVER_1B; Role: HR_EMP_SRV | In case of sent back from Grievance Committee |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Grievance** Request has been submitted by (EE Name) (EE Number) for your **action**.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your Grievance Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Completion and Close**** Notification**

*Dear (EE Name),*

*Your Grievance Request has been resolved. Kindly report back to Grievance Committee for details.*

*Regards,*

*Poultry HR Team*

**Completion and Send Back**** Notification**

*Dear (EE Name),*

*Your Grievance Request has been resolved. Kindly report back to **Employee Services Department** for details.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Grievance Committee will have 2 options: Complete and Close Complete and Send to HR For all cases, Results Text Area will be available and Mandatory Attachment option to attach the Decision scanned document All will be sent back to HR if they selected this option |  |
| Req-002 | Send SMS to employee in the 2 cases as in Req-001: Complete and Close “Grievance Request has been closed. Kindly check with the Grievance Committee” “تم الإنتهاء من طلب التظلم. الرجاء مراجعة لجنة التظلمات” Complete and Send to HR “Grievance Request has been closed. Kindly check with the Gove. Supervisor” “تم الإنتهاء من طلب التظلم. الرجاء مراجعة مسئول العلاقات الحكومية” |  |
| Req-003 | Upon workflow completion, details will be created in Custom Grievance IT9012 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	11 Clearance Request

**Application**** Overview**

This application enables the employee to request for clearance. It is mandatory in case of leaving the company, or going for vacation.

Depending on the clearance types, different people are included in the workflow for clearing the employee’s objects.

Notifications will be sent to concerned people as per the below Notification table.

This application will be available in Employee Fiori role.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Vacation | Radio Button | No | Entry | N/A |
| Resignation | Radio Button | No | Entry | N/A |
| Termination | Radio Button | No | Entry | N/A |
| Comment | CHAR(256) | No | Entry | N/A |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Direct Manager | Relation 002 |  |  |
| Level 2 | Sales Accounts | ZAPPROVERS_1B; Role: SALES |  |  |
| Level 3 | Permeant Loans | ZAPPROVERS_1B; Role: PRM_LOAN |  |  |
| Level 4 | Treasury | ZAPPROVERS_1B; Role: TRSRY |  |  |
| End of Service |
| Level 5 | Legal Department | ZAPPROVERS_1B; Role: LEG_DEPT |  |  |
| Level 6 | Housing Department | ZAPPROVERS_1B; Role: HOUSING |  |  |
| Level 7 | IT Department | ZAPPROVERS_1B; Role: IT |  |  |
| Level 8 | Transportation | ZAPPROVERS_1B; Role: TRNSPRT |  |  |
| Level 9 | Medical Insurance | ZAPPROVERS_1B; Role: HR_MED |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Submission – Final Decision |
| HR Admin | ZAPPROVERS_1B; Role: HR_ADMIN | Final Decision |
| Direct Manager | Relation 002 | Approval |
| Sales Accounts | ZAPPROVERS_1B; Role: SALES | Approval |
| Permeant Loans | ZAPPROVERS_1B; Role: PRM_LOAN | Approval |
| Treasury | ZAPPROVERS_1B; Role: TRSRY | Approval |
| Legal Department | ZAPPROVERS_1B; Role: LEG_DEPT | Approval |
| Housing Department | ZAPPROVERS_1B; Role: HOUSING | Approval |
| IT Department | ZAPPROVERS_1B; Role: IT | Approval |
| Transportation | ZAPPROVERS_1B; Role: TRNSPRT | Approval |
| Medical Insurance | ZAPPROVERS_1B; Role: HR_MED | Approval |
| HR Social Insurance | ZAPPROVERS_1B; Role: HR_GOSI | Final Decision |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Clearance Request of type: (Type)** has been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your Clearance Request **of type: (Type) **has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your Clearance Request **of type: (Type) **has been approved. You can review the details from My **Clearance** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Approval is parallel |  |
| Req-002 | Each Approver will have to confirm the clearance with a Comment Box to enter comment. |  |
| Req-003 | Each step if more than 5 days not approved, considered approved |  |
| Req-004 | For the Housing, check if employee has Housing Allowance or not. If yes, do not send the request to Housing Department |  |
| Req-005 | For the IT, check if employee is on Grade 4 onwards or not. If yes, do not send the request to IT Department |  |
| Req-006 | In the application, there will be a Tab for the employee to check the current status of Approvals; who approved and when. |  |
| Req-007 | After final approval, information of the request will be saved in Custom Clearance IT 9014 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |
| Req-004 | Design the Custom Clearance IT9014 as per the structure needed | WiSys Team |  |

**Business Process Flow**

** **

	12 Business Trip and Expense

**Application**** Overview**

This application enables the employee to raise Business Trip Request and Expense.

Depending on the Trip Type, and Employee Grade, different approvers are involved in the workflow till end of process.

There are some rules related to Business Trip and Expense according to Company Policy are included in the below details.

This application will be available under Employee Role in Fiori.

**Proposed Design**

As per the standard Business Trip and Expense Application

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Standard Application Fields | CHAR(256) | Default | Default | N/A |
| City | CHAR(20) | Yes | LoV | Read City from Table ZTICKETPRICE based on the login Language |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Department Head | Manager of the Manager |  |  |
| Level 2 | CEO | ZAPPROVERS_1B; Role: CEO | For international trips |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Using Relation 002 | Submission – Final Decision |
| Department Head | Manager of the Manager | Approval |
| CEO | ZAPPROVERS_1B; Role: CEO | Approval |
| HR Admin | ZAPPROVERS_1B; Role: HR_ADMIN | Final Decision Approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Business Trip or Expense** has been submitted by (EE Name) (EE Number) (Type) (**From **Date) (To** Date**) **(Country) (City) **for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your **Business Trip or Expense **has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your **Business Trip or Expense** has been approved. You can review the details from My **Business Trip/Expense** app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your **Business Trip or Expense** has been rejected. You can review the details from My **Business Trip or Business Expense** app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | If employee is on Grade 14 onwards, he cannot raise Business Trip Expense. Error message “Employee not eligible for Expense Request” “الموظف غير مسموح له رفع طلب مصاريف رحلة عمل” |  |
| Req-002 | Total Amount of expenses will be created on the Approval Date in Additional Payments/Deductions IT0015 using Wage Type Travel Allowance 3002. |  |
| Req-003 | Ticket fares per city will be uploaded to custom table to be used in Airfare Cost Item if selected by the employee. Amount of Expense will not enabled for update. |  |
| Req-004 | If City is Qaseem, then Accommodation, Transportation and Food Cost items cannot be selected. |  |
| Req-005 | Paid Per Diem:  Grade Internal Trip External trip 12-13-14 975 1250 9-10-11 810 1000 6 -7 -8 560 875 1 -2 -3 -4 -5 375 500 |  |
| Req-006 | When Business Trip is approved, update SAP Attendance Record of the Trip Details IT2002 |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	13 Loan Request

**Application**** Overview**

This application enables the employee to raise a Personal or Car Loan Request.

As part of the process, employee will have to enter Loan Details and select Guarantors in order to proceed with the submission. Request will be approved by multiple people according to the type of the Loan and the employee input.

This application will be available under Employee Role in Fiori.

**Proposed Design**

As per the current available application design.

**Application details**

Will use the same current fields in addition to:

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Need 25% Increase | Radio Button | No | Select |  |
| Car Loan, display the below more fields |
| Car Type | CHAR(20) | Yes | LoV |  |
| Model | CHAR(4) | Yes | Entry 3 years back including current year |  |
| Car Class |  |  | LoV New Used |  |
| First Owner | Radio Button | No |  |  |
| Is the car necessary to do the work? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |
| Will the work stop if there is no car? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |
| Is there usual transferring between sites? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |
| How may K Meter will be travelled per day? | NUM(4) | Yes | Only if less than Grade 9 Entry |  |
| Is there any emergency case in work? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |
| Are there any furture changes in the job? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |
| Is it the owning car’s chart for your Dept? | Radio Button | Yes | Only if less than Grade 9 Yes No |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Personal Loan |
| Level 1 | Guarantor |  |  |  |
| Level 2 | Direct Manager | Use Relation 002 |  |  |
| Level 3 | Sector VP |  | Workflow will be sent to VP HR to approve on 25% increase only if selected by the employee |  |
| Level 4 | HR Admin | ZAPPROVER_1B; Role: HR_ADMIN |  |  |
| Car Loan |
| Level 1 | Guarantor |  |  |  |
| Level 2 | Direct Manager | Use Relation 002 |  |  |
| Level 3 | Sector VP |  |  |  |
| Level 4 | Legal Department | ZAPPROVER_1B; Role: LEG_DEPT |  |  |
| Level 5 | Transportation Supervisor | ZAPPROVER_1B; Role: TRNS_SUV |  |  |
| Level 6 | Transportation Specialist | ZAPPROVER_1B; Role: TRNS_SPC |  |  |
| Level 7 | HR Manager | ZAPPROVER_1B; Role: HR_MNGR |  |  |
| Level 8 | Transportation Dept. Manager | ZAPPROVER_1B; Role: TRNS_MNGR |  |  |
| Level 9 | Shared Service VP | ZAPPROVER_1B; Role: SS_MNGR |  |  |
| Level 10 | Transportation Supervisor | ZAPPROVER_1B; Role: TRNS_SUV |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Using Relation 002 | Submission – Final Decision |
| Guarantor |  | Approval |
| Direct Manager | Using Relation 002 | Approval |
| VP HR |  | Approval |
| HR Admin |  | Approval |

**Notifications Templates:**

*Use current Application Notifications** and update the **content** to reflect the Car Loan newly added.*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Guarantor can guarantee as many Loan Requests as long as his EOS is sufficient. If not, error message “Cannot select this Guarantor. Maximum no. of loan guaranteed already” “لا يمكن إختيار الضامن. تم ضمان أكبر عدد مسموح من السلف بالفعل” |  |
| Req-002 | No restriction of 33% of Basic Salary as Loan Installments |  |
| Req-003 | Remove the Installment Amount should be read only and calculated based on Loan Amount/15 |  |
| Req-004 | Workflow will be sent to VP HR to approve on 25% increase only if selected by the employee |  |
| Req-005 | If the Loan Type is Car, Radio Button ‘25% increase’ will not be displayed. |  |
| Req-006 | Granted Amount Per Grade. This will be populated automatically for the Requestor.  Grade Amount 14 200000 12-13 150000 9-10-11 100000 6 -7 -8 75000 4 – 5 65000 |  |
| Req-007 | For car Loan, Guarantor is mandatory If radio button First Owner is selected |  |
| Req-008 | Car Loan Questions will not be displayed if Employee Grade is 9 or more. |  |
| Req-009 | Car Loan Request cannot be submitted unless the requirement table below is met: *Mohamed Al-Mansour will provide* |  |
| Req-010 | At Final step of the workflow, there will be 2 entry fields: Amount Paid – should be <= the Grade Amount Car Agency Name |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	14 Permission Request

**Application**** Overview**

This application enables the employee to request for a permission within the day. The available Permission Types are: Business related, Personal, and Training.

The request once submitted will be sent to the employee’s Line Manager for approval. Once approved, it will create the same details in Attendance Infotype in SAP IT2002.

This application will be available under Employee Role in Fiori.

**Proposed Design**

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Official | Radio Button | Yes | Select |  |
| Personal | Radio Button | Yes | Select |  |
| Training | Radio Button | Yes | Select |  |
| Date | DATE(10) | Yes | Select - Calendar |  |
| Time From | TIME(5) | Yes | Select |  |
| Time To | TIME(5) | Yes | Select |  |
| Notes | CHAR(256) | No | Entry |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Direct Manager | Using Relation 002 |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Using Relation 002 | Each Step from Submission |
| Line Manager | Using Relation 002 | Approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Permission Request has been submitted by (EE Name) (EE Number) **(Type) (Date) (From) (To) **for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your Permission Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your Permission Request has been approved. You can review the details from My Permission Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your Permission Request has been rejected. You can review the details from My Permission Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | General Entry Validations: Request Cannot be submitted if any input is not entered except Note. Button should be disabled |  |
| Req-002 | History button to be available in the application to show the history of all the requests with status and details. |  |
| Req-003 | For Personal Permission, max of 10 hours per month. If exceeded for submitted and approved requests, error message “Personal Permission should not exceed 10hours per month” “الإذن الشخصي لا يجب أن يتعدى 10 ساعات شهريا” |  |
| Req-004 | Personal Attendance is Unpaid and is deducted from Basic Salary |  |
| Req-005 | Upon workflow completion as approved, details will be created in Standard SAP Attendance IT2002. |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	

	

	

	

	

	

	

	

	

	

	15 Transfer Request

**Application**** Overview**

This application enables the employee to request to be transferred from his current Org. Unit to another.

As per the policy and procedures, Manager cannot submit a Transfer Request for an employee.

The request is submitted by the employee from Fiori or KIOSK and it has to be approved by the *Destination Department Manager* and *Sector VP*. After that, employee’s *Department Manager* (*Manager of the Manager*) needs to approve before sending to Employee’s *Sector** VP* for approval.

After all the approvals are granted, email notification will be sent to *HR Manager* and *VP, HR*. The final step of the workflow will be with the *HR **Planning Specialist* to issue the Transfer Letter and sign it from *VP, HR*.

This application will be available under Employee Role in Fiori and will be accessible from KIOSK for Blue Collar employees.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Employee |  | Yes | Select from LoV |  |
| Current Position | CHAR(40) | No | Display |  |
| Current Grade | CHAR(8) | No | Display |  |
| Current Level | CHAR(2) | No | Display |  |
| Destination Org. Unit | NUMC(8) | Yes | Select from LoV |  |
| Org. Unit Name | CHAR(40) | No | Display |  |
| Destination Position | NUMC(8) | Yes | *This is available only at 1**st** Approval Step* Select from LoV |  |
| Positions Name | CHAR(40) | No | *This is available only at 1**st** Approval Step* Display |  |
| Attachment |  | Yes |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Destination Department Manager |  |  |  |
| Level 2 | Sector VP |  |  |  |
| Level 3 | Employee’s Manager of the Manager |  |  |  |
| Level 4 | Employee’s Sector VP |  |  |  |
| Level 5 | HR Planning Specialist | ZAPPROVER_1B; Role: HR_PLAN |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Employee | Each Step from Submission |
| HR Manager | ZAPPROVER_1B | Final Step |
| VP, HR | ZAPPROVER_1B | Final Step |
| HR Planning Specialist | ZAPPROVER_1B; Role: HR_PLAN | Final Step |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Transfer Request** has** been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your **Transfer Request has** been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your **Transfer Request has** been approved. You can review the **details** from My **Transfer Request** app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your Transfer Request has been rejected. You can review the details from My Transfer Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Check if employee is in the Probation Period. Trigger an error “Cannot raise Transfer Request during Probation Period” “لا يمكن اكمال طلب نقل خلال فترة الإختبار” |  |
| Req-002 | Check if employee has more than 3 Transfer Actions earlier or qual. Trigger an error “Cannot submit the Transfer Request. 3 or more Previous Transfer Actions exist “لا يمكن اكمال طلب النقل لوجود أكثر من 3 حركات نقل سابقه” |  |
| Req-003 | First Approver upon approval, mandatory to select Position from the Org. Unit selected by the employee. Position has to be vacant with no future assignments. If no, error message “Selected Position is not vacant” “الوظيفه المختارة ليست شاغره” |  |
| Req-004 | Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection. |  |
| Req-005 | Upon final approval/rejection, create a record in the Custom Table Employee Request – Subtype: ‘TR’ Transfer |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-002 | Maintain the proper relationships for all company’s Position/Org. Units for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |
| Req-003 | Historical Transfer Actions are stored in SAP | Personnel Administration |  |

**Business Process Flow**

	16 Promotion Request

**Application**** Overview**

This application enables the *Manager* to request for a Promotion for any of his Direct Reporting.

Manager will select from the list of available employees under his supervision and submit the request after selecting a vacant position.

The request will be approved by *Line Manager, Department Manager, and Sector VP* of the subject employee. The Positon selected by the Manager it has to be a Vacant Position not filled or to be filled by another employee.

After that, request will be confirmed by *HR **Planning Specialist* to check the last 3 years’ evaluation an complete the process by approving or rejecting the request.

Notifications will be sent to *VP,** HR* and *HR **Planning Specialist* at the end of process.

This application will be available under Manager Role in Fiori.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Employee |  | Yes | Select from LoV |  |
| Current Position | CHAR(40) | No | Display |  |
| Current Grade | CHAR(8) | No | Display |  |
| Current Level | CHAR(2) | No | Display |  |
| Destination Position | NUMC(8) | Yes | Select from LoV |  |
| Positions Name | CHAR(40) | No | Display |  |
| Destination Org. Unit | NUMC(8) | No | Display |  |
| Org. Unit Name | CHAR(40) | No | Display |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Line Manager |  | Requestor Line Manager |  |
| Level 2 | Department Manager |  | Manager of the Manager |  |
| Level 3 | Employee’s Sector VP |  |  |  |
| Level 3 | HR Planning Specialist |  | ZAPPROVER_1B, role: HR_PLAN |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Employee | Each Step from Submission |
| HR Manager | ZAPPROVER_1B | Final Step - Approval |
| VP, HR | ZAPPROVER_1B | Final Step - Approval |
| HR Planning Specialist | ZAPPROVER_1B | Final Step - Approval |
| HR Medical Specialist | ZAPPROVER_1B, role: HR_MED | Final Step - Approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Promotion Request** has been submitted**,** **for** (EE Name) (EE Number)**,** for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your **Promotion** Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your **Promotion** Request has been approved. You can review the details from **Promotion** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your Promotion Request has been rejected. You can review the details from Promotion Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For the Manager Application, the Employee LOV should include: Active Employee Exclude Manager Personnel Number Only Subordinates using Relationships |  |
| Req-002 | Check if employee has completed 2 years in the company. If not, trigger an error “Cannot submit the Promotion Request. Employee did not complete 2 years. “لا يمكن اكمال طلب الترقيه. الموظف لم يكمل سنتين بالشركة أو لديه 4 أيام غياب أو أكثر” |  |
| Req-003 | Check if employees within the past 2 years has any payroll change. If yes, error message “Cannot submit the Promotion Request. Employee’s Benefits have changed during the past 2 years.” “لا يمكن إكمال طلب الترقيه. تم تغيير مزايا الموظف خلال السنتين الماضيتين" ” |  |
| Req-004 | Position has to be vacant with no future assignments. If no, error message “Selected Position is not vacant” “الوظيفه المختارة ليست شاغره” |  |
| Req-005 | Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection. |  |
| Req-006 | Upon final approval/rejection, create a record in the Custom Table Employee Request – Subtype: ‘PR’ Promotion |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	17 Acting-As Request

**Application**** Overview**

This application enables the *Manager* to request for a Acting-As Action for any of his Direct Reporting.

Manager will select from the list of available employees under his supervision and submit the request after selecting a vacant position.

The request will be approved by *Line Manager, Department Manager, and Sector VP* of the subject employee. The Positon selected by the Manager it has to be a Vacant Position not filled or to be filled by another employee.

After that, request will be confirmed by *HR Planning Specialist* to check the last 3 years’ evaluation and then submit to *HR Manager* for approval.

Notifications will be sent to *VP, HR* and *HR Planning Specialist* at the end of process.

This application will be available under Manager Role in Fiori.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Employee |  | Yes | Select from LoV |  |
| Current Position | CHAR(40) | No | Display |  |
| Current Grade | CHAR(8) | No | Display |  |
| Current Level | CHAR(2) | No | Display |  |
| Destination Position | NUMC(8) | Yes | Select from LoV |  |
| Positions Name | CHAR(40) | No | Display |  |
| Destination Org. Unit | NUMC(8) | No | Display |  |
| Org. Unit Name | CHAR(40) | No | Display |  |
| From Date | DATE(10) | Yes | Entry - Calendar |  |
| To Date | DATE(10) | Yes | Entry - Calendar |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Line Manager |  | Requestor Line Manager |  |
| Level 2 | Department Manager |  | Manager of the Manager |  |
| Level 3 | Employee’s Sector VP |  |  |  |
| Level 3 | HR Planning Specialist |  | ZAPPROVER_1B, role: HR_PLAN |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Employee | Each Step from Submission |
| HR Manager | ZAPPROVER_1B | Final Step |
| VP, HR | ZAPPROVER_1B | Final Step |
| HR Planning Specialist | ZAPPROVER_1B | Final Step |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Acting-As** Request has been submitted, for (EE Name) (EE Number), for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your **Acting-As** Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your **Acting-As** Request has been approved. You can review the details from **Acting-As** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your **Acting-As** Request has been rejected. You can review the details from **Acting-As** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | For the Manager Application, the Employee LOV should include: Active Employee Exclude Manager Personnel Number Only Subordinates using Relationships |  |
| Req-002 | Check if employee is in the Probation Period. Trigger an error “Cannot raise Promotion Request during Probation Period” “لا يمكن اكمال طلب الترقيه خلال فترة الإختبار” |  |
| Req-003 | Position has to be vacant with no future assignments. If no, error message “Selected Position is not vacant” “الوظيفه المختارة ليست شاغره” |  |
| Req-004 | Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection. |  |
| Req-005 | Upon final approval/rejection, create a record in the Custom Table Employee Request – Subtype: ‘AA’ Acting As |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	18 Training Request

**Application**** Overview**

This application enables Department Head and VPs to request for external training to their subordinates.

As part of the request, many details will be filled in by the requestor before being able to submit the request.

There are 2 approvals path depending on the requestor if Department Head of VP as per the below approval table.

Request will not be submitted unless the selected employee fulfils the eligibility criteria which included in the Requirement Table.

Notifications will be sent to *Training Manager *and *HR **Manager* at the end of process.

This application will be available under Manager Role in Fiori.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| Training Title | CHAR(80) | Yes | Entry |  |
| Purpose | CHAR(256) | Yes | Entry |  |
| Start Date | DATE(10) | Yes | Entry - Calendar |  |
| End Date | DATE(10) | Yes | Entry - Calendar |  |
| Country | CHAR(3) | Yes | LoV Read V_T005-LAND1 and display LANDX |  |
| City | CHAR(30) | No | Entry |  |
| No. of Days | NUMC(2) | No | Display |  |
| Cost | AMT(12) | Yes | Entry |  |
| Language | CHAR(20) | Yes | Entry |  |
| Need Ticket | CHAR(1) | No | Check Box |  |
| Need Visa | CHAR(1) | No | Check Box |  |
| Employee | NUM(8) | Yes | Entry – LoV |  |
| Name | CHAR(60) | No | Display |  |
| Department | CHAR(40) | No | Display |  |
| Position | CHAR(40) | No | Display |  |
| Approval Structure |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| If raised by Department Head, |
| Level 1 | Sector VP |  |  |  |
| Level 2 | HR Manager |  | ZAPPROVER_1B, role: HR_MNGR |  |
| Level 3 | Training Manager |  | ZAPPROVER_1B, role: TRN_MNGR |  |
| Level 4 | VP, HR |  | ZAPPROVER_1B, role: VP_HR |  |
| Level 5 | CEO |  | ZAPPROVER_1B, role: CEO |  |
| If raised by Sector VP, |
| Level 1 | HR Manager |  | ZAPPROVER_1B, role: HR_MNGR |  |
| Level 2 | Training Manager |  | ZAPPROVER_1B, role: TRN_MNGR |  |
| Level 3 | VP, HR |  | ZAPPROVER_1B, role: VP_HR |  |
| Level 4 | CEO |  | ZAPPROVER_1B, role: CEO |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Employee | Each Step from Submission |
| HR Manager | ZAPPROVER_1B, role: HR_MNGR | Final Step |
| Training Manager | ZAPPROVER_1B, role: TRN_MNGR | Final Step |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Training** Request has been submitted, for (EE Name) (EE Number), for your approval.** *

*Training Details*

*Training Title**:*

*Purpose**:*

*Start Date**:*

*Start Date**:*

*Country**:*

*City**:*

*No. of Days**:*

*Cost**:*

*Language**:*

*Need Ticket**:*

*Need Visa**:*

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your **Training** Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your **Training** Request has been approved. You can review the details from **My Team Training** Request app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your **Training** Request has been rejected. You can review the details from **My Team Training Request** app. In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Check if employee meets the eligibility criteria which is based on employee Pay Scale Group and the total no. of training event the employee consumed within the respective Training Events **Pay scale Group** **Total Training Events** **Total no. of Days** ADMIN-N 3 20 SENIOR-N 2 30 SERVIC-N 3 20 SPECIL-N 3 20 SUPERV-N 1 15 TECHCL-N 3 20 If total no. of Training Events exceeds the Grade Eligibility, then trigger error message “Training Opportunities have been consumed as per the Pay Scale Group Policy” “لا يمكن اتمام طلب الدورة لنفاذ فرص التدريب حسب درجة الموظف" If total no. of Training Events exceeds the Grade Eligibility, then trigger error message “Training Days have been consumed as per the Pay Scale Group Policy” “لا يمكن اتمام طلب الدورة لنفاذ عدد أيام التدريب حسب درجة الموظف" |  |
| Req-002 | Comment box should be available for Approver to enter Comment if required. Comment has to be mandatory in case of rejection. |  |
| Req-003 | Upon final approval/rejection, create a record in the Custom Table Employee Request – Subtype: ‘TN’ Training |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	19 Letter Request

**Application**** Overview**

This application enables the employee to print identification letters for multiple purposes. The letter will include the signature and company stamp and will be sent to employee email address for printing. For KIOSK, it will be printed automatically from the machine’s printer.

This application will be available under Employee Role in **Fiori** and **Self-Service Machines KIOSK**

**Proposed Design**

As per the available Letter Application in Fiori.

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| As per the available application fields |  |  |  |  |
|  |  |  |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| N/A |  |  |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor | Using Relation 002 | Each Step from Submission |

**Notifications Templates:**

*Submission Confirmation Notification*

*Dear (**Emp_Name**),*

*Your Letter Request (Letter Type) (**To_Whom**) has been submitted and sent to your email **infox** successfully.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
| Req-001 | Letter will be printed on Company’s Paper with Logo and Signature printed. |  |
| Req-002 | Letter types will be the currently used in KIOKS in addition to: Estiqdam School – Housing Confirmation Medical Report Adding New Family Member Embassy Letter Identification Letter in English Templates already shared in the email and included in this file. |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Assignment of employee to the correct Grade and Level | Payroll |  |
| Req-002 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-003 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	N/A

	

	

	

	

	

	

	

	

	20 My Time Events

**Application**** Overview**

This application enables the employee to request for adding a missing Clock In/Out.

The request will be approved by Line Manager before it updated SAP Time Event Table IT2011.

This application will be available under Employee Role in Fiori.

**Proposed Design**

As per the standard My Time Event Application

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| N/A |  |  |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| Level 1 | Direct Manager | Using Relation 002 |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| Requestor |  | Submission – Final decision |
| Direct Manager | Using Relation 002 | Approval |

**Notifications Templates:**

**Approval ****Required**** Notification**

*Dear (**Step_Approver_Name**),*

*Time Event has been submitted by (EE Name) (EE Number) for your approval.** *

*Regards,*

*Poultry HR Team*

**Submission**** Confirmation Notification**

*Dear (EE Name),*

*Your Time Event Request has been submitted successfully. It is now under review and processing.*

*Regards,*

*Poultry HR Team*

**Approval Confirmation Notification**

*Dear (EE Name),*

*Your Transfer Request has been approved. You can review the details from My Time Events app. In Fiori.*

*Regards,*

*Poultry HR Team*

**Rejection**** Confirmation Notification**

*Dear (EE Name),*

*Your Transfer Request has been rejected. You can review the details from My Time **Event  app.** In Fiori.*

*Regards,*

*Poultry HR Team*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
|  |  |  |
|  |  |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Maintain the proper relationships for all company’s position for the workflow to behave as expected | Organization Management |  |
| Req-002 | Maintain the needed Positions of Fixed Workflow roles | Organization Management |  |

**Business Process Flow**

	

	21 My Archived Documents

**Application**** Overview**

This application enables the employee to display all the documents that has been archived by the Archiving Team in a pdf format.

This application will be available under Employee Role in Fiori.

**Proposed Design**

As per the Custom My Archived Document Application

**Application details**

| Fields Details |
| --- |
| Field Name | Type | Mandatory | Special Requirement | SAP Table Mapping** |
| N/A |  |  |  |  |

| Approval Structure |
| --- |
| Approval Level | Agent | Agent ID | Requirement | SAP Table Mapping** |
| N/A |  |  |  |  |

| Notifications |
| --- |
| Agent | Agent ID | Requirement |
| N/A |  |  |

**Notifications Templates:**

*N/A*

| Special Business Requirement |
| --- |
| Req. ID | Requirement Description | SAP Table Mapping |
|  |  |  |

| Process Pre-Requisites |
| --- |
| Preq. ID | Preq. Description | Related Business Process | Business Role |
| Req-001 | Document(s) is archived to employee record | Archiving System |  |

**Business Process Flow**

N/A

	Appendix 2 New Letters Form

**إضافة مرافق ( مولود ****–**** مولودة )**

**12/07/1440هـ**

**19****/****03****/****2019**** م**

####     سعادة - مدير عام جوازات منطقة القصيم                                     حفظه الله

 

#####                                                السلام عليكم ورحمة الله وبركاته                                         وبعد

**نفيدكم ****بأن****ه**** ****لا مانع لدينا من إضافة الإبنة أو الإبن/ .......................... -  على إقامة والده / والدها مكفولنا/ .......................**** ****-  ................ الجنسية -  يحمل إقامة رقم .................... ****–**** وأنه مؤمن لها السكن والعلاج .**

**عليه نأمل الموافقة على ذلك، وأعطي له هذا الخطاب بناءً على طلبه،**** دون أدنى مسؤولية على الشركة ****         ****أو**** ****موظفيها .**

**والله ولي التوفيق ،،،**

                **                                                     **                                                                                                         مدير إدارة الموارد البشرية

فايز بن عبدالعزيز المزيني

			

			

**استقدام عائلة**

**12/07/1440هـ**

**19/03/2019 م**

		####    سعادة - مدير عام مكتب الإستقدام بـ ........                              	وفقه الله

		                                                                                                            		

#####                                    السلام عليكم ورحمة الله وبركاته                        وبعد 

	

	

	**نحيط سعادتكم بأن مكفولنا السيد/ ****....................**** -  ****........**** الجنسية - يحمل جواز سفر رقم ****..........**** ****H**** - ****يحمل إقامه نظامية ****رقم  ****.................**** ****- ****يعمل لدينا وتحت كفالتنا ****                    ****بمهنة/ ****.............****- ويتقاضى راتباً شهرياً ****وقدرة****  ****........**** ****ريال ( ****......................**** ريال فقط لا غير )**** ****وح****يث يرغب المذكور منحه تأشيرة ا****ستقدام ****لـ ..........**** فقط، ونظراً لأن الشركة ليس لديها مانع****اً**** من الموافقه على طلب المذكور .**

	**ل****ـــ****ـذا نأمل من سعادتكم التكرم بالإيعاز لمن يلزم نحو منح المذكور التأشيرة ****المطلوبة لا****ستقدام ****........... ****فقط - علماً بأن جهة القدوم ( ****...........**** )**

	

والله ولي التوفيق ،،،

	

                                           

######                                                     

                                                             مدير إدارة الموارد البشرية

فايز بن عبدالعزيز المزيني

**إثبات سكن، خاص للمدرسة**

**12/07/1440هـ**

**19/03/2019 م**

   المكرم - مدير المدرسة النموذجية بأوثال                                            وفقه الله 

		                                                                                                            		

السلام عليكم ورحمة الله وبركاته                       وبعد

	**      نود إفادتكم ****بأن السيد/ ****.................... -   ............ الجنسية ****–****  يحمل هوية وطنية ....................... / إقامة رقم .......................-  يعمل لدى شركة دواجن الوطنية، ويسكن هو وأسرته في سكن العوائل المخصص .**

**وقد أعطي له هذا الخطاب بناءً على طلبه وذلك لتسجيل .............. لديكم، دون أدنى                     مسؤولية على الشركة .**

		**والله ولي التوفيق ،،،**

		

                **                                                   **مدير إدارة الموارد البشرية

فايز بن عبدالعزيز المزيني

تقرير طبي

إدارة ........

**12/07/1440هـ**

**19/03/2019 م**

 المكرم / مدير ..............................                                                 وفقه الله

		                                                                                                            		

السلام عليكم ورحمة الله وبركاته                      وبعد

**      نفيدكم ****بأن السيد/ ****............................ - ...........**** الجنسية - يحمل هوية وطنية ****...................... / يحمل إقامة ****رقم ****.................. -  ****أفادنا أنه راجعكم بتاريخ ****00/00/2019م**

**لـــــــذا نأمل التكرم بموافاتنا بتقرير طبي يفيد عن حالته الصحيه ومدى حاجته                      **** **** للراحة المرضية  .**

والله ولي التوفيق ،،،

                                                          مدير إدارة الموارد البشرية

فايز بن عبدالعزيز المزيني

Thursday, March 21, 2019

His Excellency

The Ambassador

Turkey Embassy 

Riyadh

Kind Attention:  *Visa and Consular Affairs Section*

Dear Sir:

Greetings!

We are pleased to introduce **MR****, ****OSAMA IBRAHIM MAHMOUD ESSA****  **an Egyptian Citizen with **Passport No. ****A10404427**** ** issued on 05 Sep  2013 in Egypt. Expiring  on 04 Sep 2020  and he has  been employed by this company with the latest position as Head of Strategic Materials Section  in Procurement Dept. since 03 Nov 2003 up to present with a monthly gross salary of SAR 4,668.

**MR****, ****OSAMA IBRAHIM MAHMOUD ESSA**** ** is authorized to visit Turkey for his own purpose. Hence, it shall be highly appreciated that he be given a Visa.

**Thank you and ****Best ****regards****,**

	**FAIZ ABDULAZIZ ALMOZINI **

	

	**   **

	**HUMAN RESOURCES DEPT. MANAGER**

**Thursday, 21 March 2019**

  

  Al Watania Poultry Co.

  P.O Box 1679

  Buraidah-51441 Al Qassim

  Kingdom of Saudi Arabia

**    ****INTRODUCTION LETTER**

#                  

		This is to certify that **………………….., **An Indonesian   citizen, holding **Passport No: *****……………. ***issued on …. Apr  2000 in Jeddah . Expiring  on …. Apr 2000  and he has  been employed by this company with the latest position as** ****LABOR**  in Sales Department, since 26 May 2002 up to present with a monthly ……..  salary of SAR ………. .

		This letter is issued upon his request to use as requirements for loan  purposes in his home country  , without any liability on the part of the company .   

Thank you and regards,

**                FAIZ ABDULAZIZ ALMOZINI**

**         ****HUMAN RESOURCES DEPT. MANAGER **

		

| Related/Referenced Documents |
| --- |
| Document Name | Version | Brief Description |
|  |  |  |

| Attachments |
| --- |
| Document Name | Version | Brief Description |
|  |  |  |
|  |  |  |

**Document History**

| Authors & Participants |
| --- |
| Role | Name |
| Business Process Owner | خالد الناصر & عادل الحميدي بدر القصير يوسف العويس ابراهيم الطريف سليمان الحسين محمد التويجري سلطان الضالع ماجد ومحمد محمد المنصور |
| Consultant | Ramy Fouad |
| Workshops Participant | خالد الناصر & عادل الحميدي بدر القصير يوسف العويس ابراهيم الطريف سليمان الحسين محمد التويجري سلطان الضالع ماجد ومحمد محمد المنصور |

| Revision History |
| --- |
| Date | Document Version | Document Revision Description | Author |
| 17th March 2019 | 1.0 | Initial draft | Ramy Fouad |
| 21th March 2019 | 1.0 | Final | Ramy Foaud |
|  |  |  |  |

	Sign-off

| **#** | **Application** | ** اسم التطبيق / الخدمة ** | **المسئول** | **التوقيع** |
| --- | --- | --- | --- | --- |
| 1 | Business Expense | مصاريف الانتدابات | خالد الناصر & عادل الحميدي |  |
| 2 | Business Trip | الانتدابات | خالد الناصر & عادل الحميدي |  |
| 3 | Return From Vacation | العودة من الاجازة | خالد الناصر & عادل الحميدي |  |
| 4 | General Service | خدمات عامه | بدر القصير |  |
| 5 | Letters | خطابات التعريف | بدر القصير |  |
| 6 | Time Event | بصمة الحضور والإنصراف | يوسف العويس |  |
| 7 | Overtime | العمل الاضافي | خالد الناصر & عادل الحميدي |  |
| 8 | Probation Confirmation | تأكيد فتره التجربة | ابراهيم الطريف |  |
| 9 | Loans | سلفه | خالد الناصر & عادل الحميدي |  |
| 10 | Short Leave | استئذان | يوسف العويس |  |
| 11 | Resignation | استقالة | خالد الناصر & عادل الحميدي |  |
| 12 | Exit Interview | استبيان نهاية الخدمه | خالد الناصر & عادل الحميدي |  |
| 13 | Occupational Hazard | الاخطار المهنيه | سليمان الحسين |  |
| 14 | Sanctions | العقوبات | بدر القصير |  |
| 15 | Termination Request | انهاء الخدمات | بدر القصير |  |
| 16 | Grievance | التظلمات والشكاوي | بدر القصير |  |
| 17 | Archived Documents | الوثائق | محمد التويجري |  |
| 18 | Clearance | اخلاء طرف | خالد الناصر & عادل الحميدي |  |
| 19 | Transfer Request | طلب نقل | سلطان الضالع |  |
| 20 | Promotion Request | طلب ترقيه | سلطان الضالع |  |
| 21 | Acting As Request | طلب تكليف | سلطان الضالع |  |
| 22 | Training Request | طلب تدريب | ماجد ومحمد |  |
| 23 | Car Loan | سلفه السيارة | محمد المنصور |  |

| Al-Watania Poultry Fiori & KIOSK Phase 2 Business Blueprint |
| --- |
| Confidential, Property of Wi-Sys |

			

|  |
| --- |
|  |
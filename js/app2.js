var app2 = angular.module('underscore', ['ui.bootstrap']);



 app2.controller('UnderCtrl', function($scope) {

	 //test typeahead
	 
	 $scope.selectedState = "";
	 $scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
	 

conditions = [{"Conditions:":"Alzheimer's Disease"},
{"Conditions:":"BMI less than 19 or over 40"},
{"Conditions:":"Chronic Congestive Heart Failure"},
{"Conditions:":"Colitis"},
{"Conditions:":"Crohn's Disease"},
{"Conditions:":"Diverticulitis"},
{"Conditions:":"Kidney Disease"},
{"Conditions:":"Severe Depression"}]

costs = [{"Physician/Other CPT":59400,"Hosp APC":null,"Hosp DRG":"767","DRG/APC/CPT/Other Description":"VAGINAL DELIVERY W STERILIZATION &/OR D&C","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$5,312","Physician Medicare Base Rate":"$2,050","APC Medicare Base Rate":"","Charges Rex ":"$25,018","Charges WakeMed ":"$28,972","Charges Dr. Feelgood ":"$1,025","Allowable  Rex ":" $5,549 ","Allowable  WakeMed ":" $6,426 ","Allowable  Dr. Schmidt ":" $2,050 "},
{"Physician/Other CPT":59400,"Hosp APC":null,"Hosp DRG":"768","DRG/APC/CPT/Other Description":"VAGINAL DELIVERY W O.R. PROC EXCEPT STERIL &/OR D&C","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$10,499","Physician Medicare Base Rate":"$2,050","APC Medicare Base Rate":"","Charges Rex ":"$49,443","Charges WakeMed ":"$57,258","Charges Dr. Feelgood ":"$1,025","Allowable  Rex ":" $10,967 ","Allowable  WakeMed ":" $12,700 ","Allowable  Dr. Schmidt ":" $2,050 "},
{"Physician/Other CPT":59400,"Hosp APC":null,"Hosp DRG":"774","DRG/APC/CPT/Other Description":"VAGINAL DELIVERY W COMPLICATING DIAGNOSES","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$4,146","Physician Medicare Base Rate":"$2,050","APC Medicare Base Rate":"","Charges Rex ":"$19,524","Charges WakeMed ":"$22,610","Charges Dr. Feelgood ":"$1,025","Allowable  Rex ":" $4,330 ","Allowable  WakeMed ":" $5,015 ","Allowable  Dr. Schmidt ":" $2,050 "},
{"Physician/Other CPT":59400,"Hosp APC":null,"Hosp DRG":"775","DRG/APC/CPT/Other Description":"VAGINAL DELIVERY W/O COMPLICATING DIAGNOSES","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$3,302","Physician Medicare Base Rate":"$2,050","APC Medicare Base Rate":"","Charges Rex ":"$15,548","Charges WakeMed ":"$18,006","Charges Dr. Feelgood ":"$1,025","Allowable  Rex ":" $3,449 ","Allowable  WakeMed ":" $3,994 ","Allowable  Dr. Schmidt ":" $2,050 "},
{"Physician/Other CPT":59510,"Hosp APC":null,"Hosp DRG":"765","DRG/APC/CPT/Other Description":"CESAREAN SECTION W CC/MCC","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$6,915","Physician Medicare Base Rate":"$2,265","APC Medicare Base Rate":"","Charges Rex ":"$32,565","Charges WakeMed ":"$37,712","Charges Dr. Feelgood ":"$1,133","Allowable  Rex ":" $7,223 ","Allowable  WakeMed ":" $8,365 ","Allowable  Dr. Schmidt ":" $2,265 "},
{"Physician/Other CPT":59510,"Hosp APC":null,"Hosp DRG":"766","DRG/APC/CPT/Other Description":"CESAREAN SECTION W/O CC/MCC","Primary Desc":"Delivering a Baby","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$4,933","Physician Medicare Base Rate":"$2,265","APC Medicare Base Rate":"","Charges Rex ":"$23,231","Charges WakeMed ":"$26,903","Charges Dr. Feelgood ":"$1,133","Allowable  Rex ":" $5,153 ","Allowable  WakeMed ":" $5,967 ","Allowable  Dr. Schmidt ":" $2,265 "},
{"Physician/Other CPT":47562,"Hosp APC":null,"Hosp DRG":"417","DRG/APC/CPT/Other Description":"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W MCC","Primary Desc":"Laparoscopic cholecystectomy","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$14,514","Physician Medicare Base Rate":"$634","APC Medicare Base Rate":"","Charges Rex ":"$68,352","Charges WakeMed ":"$79,156","Charges Dr. Feelgood ":"$317","Allowable  Rex ":" $15,161 ","Allowable  WakeMed ":" $17,557 ","Allowable  Dr. Schmidt ":" $634 "},
{"Physician/Other CPT":47562,"Hosp APC":null,"Hosp DRG":"418","DRG/APC/CPT/Other Description":"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W CC","Primary Desc":"Laparoscopic cholecystectomy","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$9,806","Physician Medicare Base Rate":"$634","APC Medicare Base Rate":"","Charges Rex ":"$37,369","Charges WakeMed ":"$52,263","Charges Dr. Feelgood ":"$317","Allowable  Rex ":" $9,337 ","Allowable  WakeMed ":" $11,592 ","Allowable  Dr. Schmidt ":" $634 "},
{"Physician/Other CPT":47562,"Hosp APC":null,"Hosp DRG":"419","DRG/APC/CPT/Other Description":"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W/O CC/MCC","Primary Desc":"Laparoscopic cholecystectomy","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$6,927","Physician Medicare Base Rate":"$634","APC Medicare Base Rate":"","Charges Rex ":"$32,621","Charges WakeMed ":"$37,778","Charges Dr. Feelgood ":"$317","Allowable  Rex ":" $7,236 ","Allowable  WakeMed ":" $8,379 ","Allowable  Dr. Schmidt ":" $634 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"453","DRG/APC/CPT/Other Description":"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$60,536","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$285,080","Charges WakeMed ":"$330,142","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $63,232 ","Allowable  WakeMed ":" $73,227 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"454","DRG/APC/CPT/Other Description":"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W CC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$44,659","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$210,313","Charges WakeMed ":"$243,557","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $46,648 ","Allowable  WakeMed ":" $54,022 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"455","DRG/APC/CPT/Other Description":"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W/O CC/MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$33,925","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$159,760","Charges WakeMed ":"$185,013","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $35,435 ","Allowable  WakeMed ":" $41,037 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"456","DRG/APC/CPT/Other Description":"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$54,817","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$258,150","Charges WakeMed ":"$298,955","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $57,259 ","Allowable  WakeMed ":" $66,309 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"457","DRG/APC/CPT/Other Description":"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W CC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$36,844","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$173,508","Charges WakeMed ":"$200,934","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $38,485 ","Allowable  WakeMed ":" $44,568 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"458","DRG/APC/CPT/Other Description":"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W/O CC/MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$28,418","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$133,830","Charges WakeMed ":"$154,984","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $29,684 ","Allowable  WakeMed ":" $34,376 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"459","DRG/APC/CPT/Other Description":"SPINAL FUSION EXCEPT CERVICAL W MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$37,539","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$176,782","Charges WakeMed ":"$204,726","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $39,211 ","Allowable  WakeMed ":" $45,409 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22612,"Hosp APC":null,"Hosp DRG":"460","DRG/APC/CPT/Other Description":"SPINAL FUSION EXCEPT CERVICAL W/O MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$22,331","Physician Medicare Base Rate":"$1,538","APC Medicare Base Rate":"","Charges Rex ":"$91,206","Charges WakeMed ":"$121,011","Charges Dr. Feelgood ":"$769","Allowable  Rex ":" $23,476 ","Allowable  WakeMed ":" $26,841 ","Allowable  Dr. Schmidt ":" $1,538 "},
{"Physician/Other CPT":22554,"Hosp APC":null,"Hosp DRG":"471","DRG/APC/CPT/Other Description":"CERVICAL SPINAL FUSION W MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$26,921","Physician Medicare Base Rate":"$1,218","APC Medicare Base Rate":"","Charges Rex ":"$126,776","Charges WakeMed ":"$146,815","Charges Dr. Feelgood ":"$609","Allowable  Rex ":" $28,119 ","Allowable  WakeMed ":" $32,564 ","Allowable  Dr. Schmidt ":" $1,218 "},
{"Physician/Other CPT":22554,"Hosp APC":null,"Hosp DRG":"472","DRG/APC/CPT/Other Description":"CERVICAL SPINAL FUSION W CC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$16,143","Physician Medicare Base Rate":"$1,218","APC Medicare Base Rate":"","Charges Rex ":"$76,020","Charges WakeMed ":"$88,037","Charges Dr. Feelgood ":"$609","Allowable  Rex ":" $16,862 ","Allowable  WakeMed ":" $19,527 ","Allowable  Dr. Schmidt ":" $1,218 "},
{"Physician/Other CPT":22554,"Hosp APC":null,"Hosp DRG":"473","DRG/APC/CPT/Other Description":"CERVICAL SPINAL FUSION W/O CC/MCC","Primary Desc":"Spinal Fusion","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$12,248","Physician Medicare Base Rate":"$1,218","APC Medicare Base Rate":"","Charges Rex ":"$54,584","Charges WakeMed ":"$64,328","Charges Dr. Feelgood ":"$609","Allowable  Rex ":" $13,829 ","Allowable  WakeMed ":" $14,268 ","Allowable  Dr. Schmidt ":" $1,218 "},
{"Physician/Other CPT":92928,"Hosp APC":null,"Hosp DRG":"246","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W DRUG-ELUTING STENT W MCC OR 4+ VESSELS/STENTS","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$18,163","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"","Charges Rex ":"$97,392","Charges WakeMed ":"$100,517","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $21,190 ","Allowable  WakeMed ":" $22,295 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":92928,"Hosp APC":null,"Hosp DRG":"247","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W DRUG-ELUTING STENT W/O MCC","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$11,420","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"","Charges Rex ":"$70,670","Charges WakeMed ":"$63,525","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $12,584 ","Allowable  WakeMed ":" $14,090 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":92928,"Hosp APC":null,"Hosp DRG":"248","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W NON-DRUG-ELUTING STENT W MCC OR 4+ VES/STENTS","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$17,238","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"","Charges Rex ":"$81,179","Charges WakeMed ":"$94,010","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $18,006 ","Allowable  WakeMed ":" $20,852 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":92928,"Hosp APC":null,"Hosp DRG":"249","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W NON-DRUG-ELUTING STENT W/O MCC","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$10,309","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"","Charges Rex ":"$54,864","Charges WakeMed ":"$56,531","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $10,243 ","Allowable  WakeMed ":" $12,539 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":93454,"Hosp APC":null,"Hosp DRG":"250","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W/O CORONARY ARTERY STENT W MCC","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$17,235","Physician Medicare Base Rate":"$844","APC Medicare Base Rate":"","Charges Rex ":"$81,165","Charges WakeMed ":"$93,995","Charges Dr. Feelgood ":"$422","Allowable  Rex ":" $18,003 ","Allowable  WakeMed ":" $20,848 ","Allowable  Dr. Schmidt ":" $844 "},
{"Physician/Other CPT":93454,"Hosp APC":null,"Hosp DRG":"251","DRG/APC/CPT/Other Description":"PERC CARDIOVASC PROC W/O CORONARY ARTERY STENT W/O MCC","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Inpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"$11,045","Physician Medicare Base Rate":"$844","APC Medicare Base Rate":"","Charges Rex ":"$42,104","Charges WakeMed ":"$61,792","Charges Dr. Feelgood ":"$422","Allowable  Rex ":" $10,129 ","Allowable  WakeMed ":" $13,706 ","Allowable  Dr. Schmidt ":" $844 "},
{"Physician/Other CPT":92928,"Hosp APC":656,"Hosp DRG":"","DRG/APC/CPT/Other Description":"OP Drug Eluting Stent Placement","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"$7,727","Charges Rex ":"$64,744.17","Charges WakeMed ":"$89,541.05","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $7,536 ","Allowable  WakeMed ":" $7,727 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":92928,"Hosp APC":104,"Hosp DRG":"","DRG/APC/CPT/Other Description":"OP Stent Placement","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$591","APC Medicare Base Rate":"$6,056","Charges Rex ":"$50,738.62","Charges WakeMed ":"$70,171.40","Charges Dr. Feelgood ":"$296","Allowable  Rex ":" $5,906 ","Allowable  WakeMed ":" $6,056 ","Allowable  Dr. Schmidt ":" $591 "},
{"Physician/Other CPT":93454,"Hosp APC":83,"Hosp DRG":"","DRG/APC/CPT/Other Description":"OP Angioplasty w/o Stent Placement","Primary Desc":"Cardiac Angioplasty","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$844","APC Medicare Base Rate":"$4,057","Charges Rex ":"$33,993.40","Charges WakeMed ":"$47,012.80","Charges Dr. Feelgood ":"$422","Allowable  Rex ":" $3,957 ","Allowable  WakeMed ":" $4,057 ","Allowable  Dr. Schmidt ":" $844 "},
{"Physician/Other CPT":45378,"Hosp APC":158,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Diagnostic colonoscopy","Primary Desc":"Colonoscopy","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$373","APC Medicare Base Rate":"$612","Charges Rex ":"$5,131.45","Charges WakeMed ":"$7,096.79","Charges Dr. Feelgood ":"$186","Allowable  Rex ":" $597 ","Allowable  WakeMed ":" $612 ","Allowable  Dr. Schmidt ":" $373 "},
{"Physician/Other CPT":72148,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri lumbar spine w/o dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$232","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$116","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $232 "},
{"Physician/Other CPT":70551,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri brain w/o dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$233","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$117","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $233 "},
{"Physician/Other CPT":73721,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri jnt of lwr extre w/o dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$242","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$121","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $242 "},
{"Physician/Other CPT":72141,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri neck spine w/o dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$231","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$116","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $231 "},
{"Physician/Other CPT":72158,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri lumbar spine w/o & w/dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$373","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$187","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $373 "},
{"Physician/Other CPT":70553,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri brain w/o & w/dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$374","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$187","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $374 "},
{"Physician/Other CPT":73723,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri joint lwr extr w/o&w/dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$460","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$230","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $460 "},
{"Physician/Other CPT":72156,"Hosp APC":336,"Hosp DRG":"NA","DRG/APC/CPT/Other Description":"Mri neck spine w/o & w/dye","Primary Desc":"MRI","Inpatient/Outpatient":"Outpatient","Answer 1":null,"Answer 2":null,"Answer 3":null,"Answer 4":null,"Answer 5":null,"Hospital Medicare Base Rate":"","Physician Medicare Base Rate":"$374","APC Medicare Base Rate":"$340","Charges Rex ":"$2,846","Charges WakeMed ":"$3,936","Charges Dr. Feelgood ":"$187","Allowable  Rex ":" $331 ","Allowable  WakeMed ":" $340 ","Allowable  Dr. Schmidt ":" $374 "}]

credentials = [{"USER_ID":"pregnant1","PASSWORD":"admin","CREATION_TS":null,"END_TS":null},
{"USER_ID":"medicare1","PASSWORD":"admin","CREATION_TS":null,"END_TS":null}]

desc_questions = [{"Primary Desc":"Delivering a baby","Question #":1,"Question":"Will you be having a c-section?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"Laparoscopic cholecystectomy","Question #":1,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"MRI","Question #":1,"Question":"Are you having an MRI of your brain?"},
{"Primary Desc":"","Question #":2,"Question":"Are you having an MRI of your lower back (lumbar)?"},
{"Primary Desc":"","Question #":3,"Question":"Are you having an MRI of your legs?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having an MRI of your neck?"},
{"Primary Desc":"","Question #":5,"Question":"Will you be receiving contrast dye as part of the procedure?"},
{"Primary Desc":"Spinal fusion","Question #":1,"Question":"Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have scoliosis or do you plan on having 9+ vertebra fused?"},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?"},
{"Primary Desc":"Cardiac Angioplasty or Stent Placement","Question #":1,"Question":"Are you getting a stent placed?"},
{"Primary Desc":"","Question #":2,"Question":"If so, will it be a "},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"Colonoscopy","Question #":0,"Question":"No questions"}]

doctors = [{"NPI":1326041104,"Last":"NELSON","First":"LEONARD","Middle":"D","Suffix":"MD","Type":"Ortho"},
{"NPI":1275510588,"Last":"MILLER","First":"DAVID","Middle":"C","Suffix":"M.D.","Type":"Ortho"},
{"NPI":1124026695,"Last":"MANN","First":"JAMES","Middle":"T","Suffix":"M.D.","Type":"Cardiology"},
{"NPI":1568512622,"Last":"MILLS","First":"JAMES","Middle":"S","Suffix":"M.D.","Type":"Cardiology"},
{"NPI":1881813137,"Last":"MILANO","First":"PETER","Middle":"M","Suffix":"M.D.","Type":"General Surgery"},
{"NPI":9876543219,"Last":"JOHN","First":"SCHIMDT","Middle":"J","Suffix":"M.D.","Type":"General Surgery"}]

hospitals = [{"Hospital Name":"REX HOSPITAL"},
{"Hospital Name":"WAKEMED"}]

insurance = [{"INS_INFO_ID":1,"USER_ID":"pregnant1","INS_TYPE":"user entered","INS_NM":"WeInsureU","STAND_NM":"WeInsureU","ANNUAL_DD":3000,"ANNUAL_DD_USED":0,"COINS_MAX":6030,"COINS_MAX_USED":0,"PRIM_VISIT_COPAY":0,"SPEC_VISIT_COPAY":0,"INPATIENT_COPAY":0,"OUTPATIENT_COPAY":0,"PRIM_VISIT_COPAY_TYPE":"NA","SPEC_VISIT_COPAY_TYPE":"NA","INPATIENT_COPAY_TYPE":"NA","OUTPATIENT_COPAY_TYPE":"NA","PRIM_VISIT_COINS_PCT":0.3,"SPEC_VISIT_COINS_PCT":0.3,"INPATIENT_VISIT_COINS_PCT":0.3,"OUTPATIENT_VISIT_COINS_PCT":0.3,"PRIM_VISIT_COINS_PCT_TYPE":"After","SPEC_VISIT_COINS_PCT_TYPE":"After","INPATIENT_VISIT_COINS_PCT_TYPE":"After","OUTPATIENT_VISIT_COINS_PCT_TYPE":"After"},
{"INS_INFO_ID":2,"USER_ID":"medicare1","INS_TYPE":"medicare","INS_NM":"Medicare","STAND_NM":"Medicare","ANNUAL_DD":1216,"ANNUAL_DD_USED":0,"COINS_MAX":999999999,"COINS_MAX_USED":0,"PRIM_VISIT_COPAY":0,"SPEC_VISIT_COPAY":0,"INPATIENT_COPAY":0,"OUTPATIENT_COPAY":0,"PRIM_VISIT_COPAY_TYPE":"NA","SPEC_VISIT_COPAY_TYPE":"NA","INPATIENT_COPAY_TYPE":"NA","OUTPATIENT_COPAY_TYPE":"NA","PRIM_VISIT_COINS_PCT":0.2,"SPEC_VISIT_COINS_PCT":0.2,"INPATIENT_VISIT_COINS_PCT":0,"OUTPATIENT_VISIT_COINS_PCT":0.2,"PRIM_VISIT_COINS_PCT_TYPE":"After","SPEC_VISIT_COINS_PCT_TYPE":"After","INPATIENT_VISIT_COINS_PCT_TYPE":"After","OUTPATIENT_VISIT_COINS_PCT_TYPE":"After"}]

locations = [{"Type":"Hospital"},
{"Type":"Physician's Office/ Non Hospital"}]

procedures = [{"Primary Desc":"Delivering a baby","Question #":1,"Question":"Will you be having a c-section?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"Laparoscopic cholecystectomy","Question #":1,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"MRI","Question #":1,"Question":"Are you having an MRI of your brain?"},
{"Primary Desc":"","Question #":2,"Question":"Are you having an MRI of your lower back (lumbar)?"},
{"Primary Desc":"","Question #":3,"Question":"Are you having an MRI of your legs?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having an MRI of your neck?"},
{"Primary Desc":"","Question #":5,"Question":"Will you be receiving contrast dye as part of the procedure?"},
{"Primary Desc":"Spinal fusion","Question #":1,"Question":"Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have scoliosis or do you plan on having 9+ vertebra fused?"},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?"},
{"Primary Desc":"Cardiac Angioplasty or Stent Placement","Question #":1,"Question":"Are you getting a stent placed?"},
{"Primary Desc":"","Question #":2,"Question":"If so, will it be a "},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"Colonoscopy","Question #":0,"Question":"No questions"}]

questions = [{"Primary Desc":"Delivering a baby","Question #":1,"Question":"Will you be having a c-section?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"Laparoscopic cholecystectomy","Question #":1,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"MRI","Question #":1,"Question":"Are you having an MRI of your brain?"},
{"Primary Desc":"","Question #":2,"Question":"Are you having an MRI of your lower back (lumbar)?"},
{"Primary Desc":"","Question #":3,"Question":"Are you having an MRI of your legs?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having an MRI of your neck?"},
{"Primary Desc":"","Question #":5,"Question":"Will you be receiving contrast dye as part of the procedure?"},
{"Primary Desc":"Spinal fusion","Question #":1,"Question":"Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?"},
{"Primary Desc":"","Question #":2,"Question":"Do you have scoliosis or do you plan on having 9+ vertebra fused?"},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?"},
{"Primary Desc":"Cardiac Angioplasty or Stent Placement","Question #":1,"Question":"Are you getting a stent placed?"},
{"Primary Desc":"","Question #":2,"Question":"If so, will it be a "},
{"Primary Desc":"","Question #":3,"Question":"Do you have any of the following conditions (list conditions)?"},
{"Primary Desc":"","Question #":4,"Question":"Do you expect to stay overnight in the hospital?"},
{"Primary Desc":"Colonoscopy","Question #":0,"Question":"No questions"}]

users = [{"USER_ID":"pregnant1","CREATION_TS":null,"CREATED_BY":"user","FIRST_NM":"Haim","LAST_NM":"Pregnant","ZIP_CODE":27608,"EMAIL":null,"STATUS":null},
{"USER_ID":"medicare1","CREATION_TS":null,"CREATED_BY":"user","FIRST_NM":"Will","LAST_NM":"Retiresoon","ZIP_CODE":28604,"EMAIL":null,"STATUS":null}]


proc_qeustions = {
  "Deliver a Baby": {
      "Will you be having a c-section?": { "Affirm":"Yes", "Negate":"No"},
      "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?": { "Affirm":"Yes", "Negate":"No"}
  },

  "Laparoscopic cholecystectomy":{
      "Do you expect to stay overnight in the hospital?": { "Affirm":"Yes", "Negate":"No"},
      "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?": { "Affirm":"Yes", "Negate":"No"}
  },

  "MRI":{
    "Are you having an MRI of your brain?": { "Affirm":"Yes", "Negate":"No"},
    "Are you having an MRI of your lower back (lumbar)?": { "Affirm":"Yes", "Negate":"No"},
    "Are you having an MRI of your legs?": { "Affirm":"Yes", "Negate":"No"},
    "Are you having an MRI of your neck?": { "Affirm":"Yes", "Negate":"No"},
    "Will you be receiving contrast dye as part of the procedure?": { "Affirm":"Yes", "Negate":"No"}
  },

  "Spinal Fusion":{
    "Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?": { "Affirm":"Yes", "Negate":"No"},
    "Do you have scoliosis or do you plan on having 9+ vertebra fused?": { "Affirm":"Yes", "Negate":"No"},
    "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?": { "Affirm":"Yes", "Negate":"No"},
    "Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?": { "Affirm":"Yes", "Negate":"No"}
  },

  "Cardiac Angioplasty or Stent": {
    "Are you getting a stent placed?": { "Affirm":"Yes", "Negate":"No"},
    "If so, will it be a ": { "Affirm":"Yes", "Negate":"No"},
    "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?": { "Affirm":"Yes", "Negate":"No"},
    "Do you expect to stay overnight in the hospital?": { "Affirm":"Yes", "Negate":"No"}
  },

  "Colonoscopy":{

  }
}


process_q = {
  procedures : [
    {description: "Deliver a Baby",
      questions: [
        { prompt: "Will you be having a c-section?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] }
      ]
    },
    {description: "Laparoscopic cholecystectomy",
      questions: [
        { prompt: "Do you expect to stay overnight in the hospital?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] }
      ]
    },
    {description: "MRI",
      questions: [
        { prompt: "Are you having an MRI of your brain?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your lower back (lumbar)?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your legs?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your neck?", responses: ["Yes", "No"] }

      ]
    },
    {description: "Spinal Fusion",
      questions: [
        { prompt: "Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?", responses: ["Yes", "No"] },
        { prompt: "Do you have scoliosis or do you plan on having 9+ vertebra fused?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] },
        { prompt: "Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?", responses: ["Yes", "No"] }

      ]
    },
    {description: "Cardiac Angioplasty or Stent",
      questions: [
        { prompt: "Are you getting a stent placed?", responses: ["Yes", "No"] },
        { prompt: "If so, will it be a ", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] },
        { prompt: "Do you expect to stay overnight in the hospital?", responses: ["Yes", "No"] }

      ]
    },
    {description: "Colonoscopy",
      questions: []
    }
  ] //procedures the main part of process_q
}

process_r = {
  procedures : [
    {id: 1, description: "Deliver a Baby",
      questions: [
        { prompt: "Will you be having a c-section?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] }
      ]
    },
    {id: 2, description: "Laparoscopic cholecystectomy",
      questions: [
        { prompt: "Do you expect to stay overnight in the hospital?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] }
      ]
    },
    {id: 3, description: "MRI",
      questions: [
        { prompt: "Are you having an MRI of your brain?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your lower back (lumbar)?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your legs?", responses: ["Yes", "No"] },
        { prompt: "Are you having an MRI of your neck?", responses: ["Yes", "No"] }

      ]
    },
    {id: 4, description: "Spinal Fusion",
      questions: [
        { prompt: "Is your procedure on your neck (cervical), mid-back (thoracic), or lower back (lumbar)?", responses: ["Yes", "No"] },
        { prompt: "Do you have scoliosis or do you plan on having 9+ vertebra fused?", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] },
        { prompt: "Are you having fusion surgery done from both the front approach (anterior) and back approach (posterior)?", responses: ["Yes", "No"] }

      ]
    },
    {id: 5, description: "Cardiac Angioplasty or Stent",
      questions: [
        { prompt: "Are you getting a stent placed?", responses: ["Yes", "No"] },
        { prompt: "If so, will it be a ", responses: ["Yes", "No"] },
        { prompt: "Do you have any of the following conditions: Alzheimer's Disease, BMI less than 19 or over 40, Chronic Congestive Heart Failure, Colitis, Crohn's Disease, Diverticulitis, Kidney Disease, Severe Depression)?", responses: ["Yes", "No"] },
        { prompt: "Do you expect to stay overnight in the hospital?", responses: ["Yes", "No"] }

      ]
    },
    {id: 6, description: "Colonoscopy",
      questions: []
    }
  ] //procedures the main part of process_q
}

$scope.selected_procedure = "";
$scope.process_list = _.map( _.get(process_r), function(procedure) { 
  		return procedure.description; }
	);
$scope.process_q = process_q;

$scope.onSelect = function($item, $model, $label) {
	console.log("You selected " );
}


//$scope.proc_questions = proc_questions;

$scope.testfunction1 = function() {
  console.log("Test Function 1 functioning");
  //console.log(_.chain(_.get(process_r)).first().value()  );
  console.log(_.map( _.get(process_r), function(procedure) { 
  		return procedure.id; }
	)
);
  console.log("Test Function 1: procedures");
  //console.log(_.chain(_.get(process_r)).first().value()  );
  console.log(_.map( _.get(process_r), function(procedure) { 
  		return procedure.description; }
	)
);

  console.log("Test Function 1: procedure questions");
  //console.log(_.chain(_.get(process_r)).first().value()  );
  console.log(_.map( _.get(process_r), function(procedure) { 
  		return procedure.questions; }
	)
);

};

$scope.testfunction2 = function() {
  //console.log(_.filter(process_q.procedures, function(thething) {return thething.description == "MRI";} )  );
  console.log(_.pluck(process_q.procedures, "description")  );
};

$scope.testfunction3 = function() {
  var theJect = _.filter(process_q.procedures, function(huh) {return huh.description == "MRI";} );
  console.log(theJect);
  var thePrompts = _.pluck(_.pluck(theJect, "questions"), "prompts");
  console.log(_.pluck(theJect, "questions") );
  console.log(thePrompts);
  var thePrompts2 = _.pluck(theJect.questions, "prompts");
  console.log(thePrompts2);
  for (item in theJect.questions) {
    console.log(item.prompt);
  }

  console.log("the questions using the format from test function 2");
  console.log(_.pluck(process_q.procedures, "questions")  );
  console.log(_.pluck(process_q.procedures.questions, "prompt")  );
  //return  _.pluck(theJect, "questions");

//  var theNewJect = _.findWhere(process_q.procedures, function(huh) {return huh.description == "MRI";});
  var theNewJect = _.filter(process_q.procedures, function(huh) {return huh.description == "MRI";});
  var theNewJect2 = _.pluck(theNewJect, "questions");
  console.log(theNewJect2);


  for(var i=0; i<theNewJect2.length; i++)
  for(item in theNewJect2[i]) {
    console.log(theNewJect2[i][item].prompt);
    console.log(theNewJect2[i][item].responses);
  }

  var flatJect2 = _.flatten(theNewJect2);
  console.log("the flattened NewJect2");
  console.log(flatJect2);

//This should go in the directive
for(var i=0; i<flatJect2.length; i++) {
  console.log(flatJect2[i].prompt);
  console.log(flatJect2[i].responses);
}
};

});

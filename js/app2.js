var app2 = angular.module('underscore', ['ui.bootstrap']);



 app2.controller('UnderCtrl', function($scope, $modal, $log) {

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
  ] //procedures the main part of process_r
}

var ans_cost_r = {
	procedures: [{ID:59400767,PrimaryDesc:"Delivering a Baby",DrgDesc:"VAGINAL DELIVERY W STERILIZATION &/OR D&C",IN_OUT:"Inpatient",Answer1:null,Answer2:null,Answer3:null,Answer4:null,Answer5:null,MedicareBaseRate:5312.461956,MedicareBaseRate:2050.03,MedicareBaseRate:null,Rex:25017.8143,WakeMed:28972.3399,drFeelgood:1025.015,Rex:5549.043447,WakeMed:6426.171804,drSchmidt:2050.03},
{ID:59400768,PrimaryDesc:"Delivering a Baby",DrgDesc:"VAGINAL DELIVERY W O.R. PROC EXCEPT STERIL &/OR D&C",IN_OUT:"Inpatient",Answer1:null,Answer2:null,Answer3:null,Answer4:null,Answer5:null,MedicareBaseRate:10498.99804,MedicareBaseRate:2050.03,MedicareBaseRate:null,Rex:49442.60974,WakeMed:57257.9234,drFeelgood:1025.015,Rex:10966.55312,WakeMed:12700.0185,drSchmidt:2050.03},
{ID:59400774,PrimaryDesc:"Delivering a Baby",DrgDesc:"VAGINAL DELIVERY W COMPLICATING DIAGNOSES",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:4145.77884,MedicareBaseRate:2050.03,MedicareBaseRate:null,Rex:19523.58926,WakeMed:22609.65155,drFeelgood:1025.015,Rex:4330.404075,WakeMed:5014.90407,drSchmidt:2050.03},
{ID:59400775,PrimaryDesc:"Delivering a Baby",DrgDesc:"VAGINAL DELIVERY W/O COMPLICATING DIAGNOSES",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:3301.672968,MedicareBaseRate:2050.03,MedicareBaseRate:null,Rex:15548.46734,WakeMed:18006.18852,drFeelgood:1025.015,Rex:3448.707379,WakeMed:3993.838997,drSchmidt:2050.03},
{ID:59510765,PrimaryDesc:"Delivering a Baby",DrgDesc:"CESAREAN SECTION W CC/MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:6914.998104,MedicareBaseRate:2265.49,MedicareBaseRate:null,Rex:32564.58868,WakeMed:37712.02075,drFeelgood:1132.745,Rex:7222.945827,WakeMed:8364.665236,drSchmidt:2265.49},
{ID:59510766,PrimaryDesc:"Delivering a Baby",DrgDesc:"CESAREAN SECTION W/O CC/MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:4932.959316,MedicareBaseRate:2265.49,MedicareBaseRate:null,Rex:23230.63415,WakeMed:26902.66306,drFeelgood:1132.745,Rex:5152.6403,WakeMed:5967.10985,drSchmidt:2265.49},
{ID:47562417,PrimaryDesc:"Laparoscopic cholecystectomy",DrgDesc:"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:14514.25097,MedicareBaseRate:633.73,MedicareBaseRate:null,Rex:68351.51734,WakeMed:79155.73155,drFeelgood:316.865,Rex:15160.61854,WakeMed:17557.03309,drSchmidt:633.73},
{ID:47562418,PrimaryDesc:"Laparoscopic cholecystectomy",DrgDesc:"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W CC",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:9806.118216,MedicareBaseRate:633.73,MedicareBaseRate:null,Rex:37369.02857,WakeMed:52263.183,drFeelgood:316.865,Rex:9337.4,WakeMed:11592.16667,drSchmidt:633.73},
{ID:47562419,PrimaryDesc:"Laparoscopic cholecystectomy",DrgDesc:"LAPAROSCOPIC CHOLECYSTECTOMY W/O C.D.E. W/O CC/MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:6927.073188,MedicareBaseRate:633.73,MedicareBaseRate:null,Rex:32621.4535,WakeMed:37777.8741,drFeelgood:316.865,Rex:7235.558654,WakeMed:8379.271752,drSchmidt:633.73},
{ID:22612453,PrimaryDesc:"Spinal Fusion",DrgDesc:"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:60535.84612,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:285079.6052,WakeMed:330141.679,drFeelgood:768.995,Rex:63231.70744,WakeMed:73226.64156,drSchmidt:1537.99},
{ID:22612454,PrimaryDesc:"Spinal Fusion",DrgDesc:"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W CC",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:44659.41067,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:210313.1942,WakeMed:243557.062,drFeelgood:768.995,Rex:46648.24185,WakeMed:54021.85428,drSchmidt:1537.99},
{ID:22612455,PrimaryDesc:"Spinal Fusion",DrgDesc:"COMBINED ANTERIOR/POSTERIOR SPINAL FUSION W/O CC/MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:33924.661,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:159760.3665,WakeMed:185013.4302,drFeelgood:768.995,Rex:35435.43829,WakeMed:41036.66092,drSchmidt:1537.99},
{ID:22612456,PrimaryDesc:"Spinal Fusion",DrgDesc:"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:54817.43134,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:258150.0497,WakeMed:298955.4121,drFeelgood:768.995,Rex:57258.63275,WakeMed:66309.41257,drSchmidt:1537.99},
{ID:22612457,PrimaryDesc:"Spinal Fusion",DrgDesc:"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W CC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:36843.9563,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:173508.1144,WakeMed:200934.2625,drFeelgood:768.995,Rex:38484.73946,WakeMed:44567.96022,drSchmidt:1537.99},
{ID:22612458,PrimaryDesc:"Spinal Fusion",DrgDesc:"SPINAL FUS EXC CERV W SPINAL CURV/MALIG/INFEC OR 9+ FUS W/O CC/MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:28418.42269,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:133830.0072,WakeMed:154984.3008,drFeelgood:768.995,Rex:29683.98899,WakeMed:34376.0893,drSchmidt:1537.99},
{ID:22612459,PrimaryDesc:"Spinal Fusion",DrgDesc:"SPINAL FUSION EXCEPT CERVICAL W MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:37539.13614,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:176781.9035,WakeMed:204725.5342,drFeelgood:768.995,Rex:39210.87796,WakeMed:45408.87826,drSchmidt:1537.99},
{ID:22612460,PrimaryDesc:"Spinal Fusion",DrgDesc:"SPINAL FUSION EXCEPT CERVICAL W/O MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:22331.43035,MedicareBaseRate:1537.99,MedicareBaseRate:null,Rex:91205.90361,WakeMed:121010.8877,drFeelgood:768.995,Rex:23475.59036,WakeMed:26840.66102,drSchmidt:1537.99},
{ID:22554471,PrimaryDesc:"Spinal Fusion",DrgDesc:"CERVICAL SPINAL FUSION W MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:26920.53727,MedicareBaseRate:1217.79,MedicareBaseRate:null,Rex:126776.0613,WakeMed:146815.349,drFeelgood:608.895,Rex:28119.39778,WakeMed:32564.18568,drSchmidt:1217.79},
{ID:22554472,PrimaryDesc:"Spinal Fusion",DrgDesc:"CERVICAL SPINAL FUSION W CC",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:16142.6623,MedicareBaseRate:1217.79,MedicareBaseRate:null,Rex:76020.14491,WakeMed:88036.52673,drFeelgood:608.895,Rex:16861.54841,WakeMed:19526.8262,drSchmidt:1217.79},
{ID:22554473,PrimaryDesc:"Spinal Fusion",DrgDesc:"CERVICAL SPINAL FUSION W/O CC/MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:12247.5852,MedicareBaseRate:1217.79,MedicareBaseRate:null,Rex:54583.59615,WakeMed:64327.79847,drFeelgood:608.895,Rex:13828.57692,WakeMed:14268.14286,drSchmidt:1217.79},
{ID:92928246,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W DRUG-ELUTING STENT W MCC OR 4+ VESSELS/STENTS",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:18162.65135,MedicareBaseRate:591.06,MedicareBaseRate:null,Rex:97392,WakeMed:100517.2901,drFeelgood:295.53,Rex:21190.14286,WakeMed:22295.10553,drSchmidt:591.06},
{ID:92928247,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W DRUG-ELUTING STENT W/O MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:1,Answer5:1,MedicareBaseRate:11420.15444,MedicareBaseRate:591.06,MedicareBaseRate:null,Rex:70670.22794,WakeMed:63525.3531,drFeelgood:295.53,Rex:12584.00735,WakeMed:14090.15752,drSchmidt:591.06},
{ID:92928248,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W NON-DRUG-ELUTING STENT W MCC OR 4+ VES/STENTS",IN_OUT:"Inpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:1,Answer5:3,MedicareBaseRate:17238.04492,MedicareBaseRate:591.06,MedicareBaseRate:null,Rex:81178.59671,WakeMed:94010.3667,drFeelgood:295.53,Rex:18005.71204,WakeMed:20851.84593,drSchmidt:591.06},
{ID:92928249,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W NON-DRUG-ELUTING STENT W/O MCC",IN_OUT:"Inpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:10309.24672,MedicareBaseRate:591.06,MedicareBaseRate:null,Rex:54864.2963,WakeMed:56530.70124,drFeelgood:295.53,Rex:10243.37037,WakeMed:12538.71795,drSchmidt:591.06},
{ID:93454250,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W/O CORONARY ARTERY STENT W MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:17235.1699,MedicareBaseRate:844.15,MedicareBaseRate:null,Rex:81165.05747,WakeMed:93994.68733,drFeelgood:422.075,Rex:18002.70898,WakeMed:20848.36818,drSchmidt:844.15},
{ID:93454251,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"PERC CARDIOVASC PROC W/O CORONARY ARTERY STENT W/O MCC",IN_OUT:"Inpatient",Answer1:0,Answer2:0,Answer3:1,Answer4:1,Answer5:2,MedicareBaseRate:11045.25184,MedicareBaseRate:844.15,MedicareBaseRate:null,Rex:42104.25,WakeMed:61792.13521,drFeelgood:422.075,Rex:10128.5,WakeMed:13705.7234,drSchmidt:844.15},
{ID:92928656,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"OP Drug Eluting Stent Placement",IN_OUT:"Outpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:1,Answer5:3,MedicareBaseRate:null,MedicareBaseRate:591.06,MedicareBaseRate:7727.48,Rex:64744.17235,WakeMed:89541.05393,drFeelgood:295.53,Rex:7536.233321,WakeMed:7727.288081,drSchmidt:591.06},
{ID:92928104,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"OP Stent Placement",IN_OUT:"Outpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:null,MedicareBaseRate:591.06,MedicareBaseRate:6055.86,Rex:50738.61642,WakeMed:70171.39958,drFeelgood:295.53,Rex:5905.984088,WakeMed:6055.709597,drSchmidt:591.06},
{ID:93454083,PrimaryDesc:"Cardiac Angioplasty",DrgDesc:"OP Angioplasty w/o Stent Placement",IN_OUT:"Outpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:null,MedicareBaseRate:844.15,MedicareBaseRate:4057.25,Rex:33993.39672,WakeMed:47012.79603,drFeelgood:422.075,Rex:3956.8375,WakeMed:4057.149235,drSchmidt:844.15},
{ID:45378158,PrimaryDesc:"Colonoscopy",DrgDesc:"Diagnostic colonoscopy",IN_OUT:"Outpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:null,MedicareBaseRate:372.5,MedicareBaseRate:612.46,Rex:5131.454989,WakeMed:7096.791436,drFeelgood:186.25,Rex:597.3022848,WakeMed:612.444789,drSchmidt:372.5},
{ID:72148336,PrimaryDesc:"MRI",DrgDesc:"Mri lumbar spine w/o dye",IN_OUT:"Outpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:null,MedicareBaseRate:231.62,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:115.81,Rex:331.283044,WakeMed:339.6815635,drSchmidt:231.62},
{ID:70551336,PrimaryDesc:"MRI",DrgDesc:"Mri brain w/o dye",IN_OUT:"Outpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:null,MedicareBaseRate:233.09,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:116.545,Rex:331.283044,WakeMed:339.6815635,drSchmidt:233.09},
{ID:73721336,PrimaryDesc:"MRI",DrgDesc:"Mri jnt of lwr extre w/o dye",IN_OUT:"Outpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:null,MedicareBaseRate:241.94,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:120.97,Rex:331.283044,WakeMed:339.6815635,drSchmidt:241.94},
{ID:72141336,PrimaryDesc:"MRI",DrgDesc:"Mri neck spine w/o dye",IN_OUT:"Outpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:null,MedicareBaseRate:231.36,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:115.68,Rex:331.283044,WakeMed:339.6815635,drSchmidt:231.36},
{ID:72158336,PrimaryDesc:"MRI",DrgDesc:"Mri lumbar spine w/o & w/dye",IN_OUT:"Outpatient",Answer1:1,Answer2:0,Answer3:1,Answer4:0,Answer5:2,MedicareBaseRate:null,MedicareBaseRate:373.1,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:186.55,Rex:331.283044,WakeMed:339.6815635,drSchmidt:373.1},
{ID:70553336,PrimaryDesc:"MRI",DrgDesc:"Mri brain w/o & w/dye",IN_OUT:"Outpatient",Answer1:1,Answer2:1,Answer3:1,Answer4:1,Answer5:4,MedicareBaseRate:null,MedicareBaseRate:373.9,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:186.95,Rex:331.283044,WakeMed:339.6815635,drSchmidt:373.9},
{ID:73723336,PrimaryDesc:"MRI",DrgDesc:"Mri joint lwr extr w/o&w/dye",IN_OUT:"Outpatient",Answer1:0,Answer2:1,Answer3:0,Answer4:1,Answer5:2,MedicareBaseRate:null,MedicareBaseRate:459.55,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:229.775,Rex:331.283044,WakeMed:339.6815635,drSchmidt:459.55},
{ID:72156336,PrimaryDesc:"MRI",DrgDesc:"Mri neck spine w/o & w/dye",IN_OUT:"Outpatient",Answer1:0,Answer2:0,Answer3:0,Answer4:0,Answer5:0,MedicareBaseRate:null,MedicareBaseRate:374.24,MedicareBaseRate:339.69,Rex:2846.069858,WakeMed:3936.108616,drFeelgood:187.12,Rex:331.283044,WakeMed:339.6815635,drSchmidt:374.24}]

} // end ans_cost_r object

$scope.initialSelection = "";
$scope.stage = 1;

// $scope.hospMin = -1;
// $scope.docMin = -1;
// $scope.hospMax = -1;
// $scope.docMax = -1;
// $scope.selectedHospCost;
// $scope.selectedDocCost;

$scope.selectDoctor = function(doctorIndexNumber) {
	var choosenDoctor = $scope.doctorMap(doctorIndexNumber);
	//null is to clear any doctor currently set
	if(!choosenDoctor) {
		$scope.selectedDocCost = null;
		//Reset the Overall Costs
		//TODO:  Change the logic (use a seperate function, to account for Insurance, OR DON'T?)
		$scope.docMin = _.min(getDoctorCosts($scope.selectedProcedure) );
		$scope.docMax = _.max(getDoctorCosts($scope.selectedProcedure) );
	}
	else {
		$scope.selectedDocCost = $scope.selectedProcedure[choosenDoctor];
		$scope.docMin = $scope.selectedDocCost;
		$scope.docMax = $scope.selectedDocCost;
	}
	console.log(choosenDoctor);
	console.log($scope.selectedDocCost);
	console.log($scope.selectedProcedure);
	//Need to display in the view
	$scope.choosenDoctor = choosenDoctor;
}

$scope.doctorMap = function(doctorNumber) {
	if(doctorNumber < 0) {
		return null;
	}
	else if(doctorNumber == 0) {
		return "drFeelgood";
	}
	else {
		return "drSchmidt";
	}
	
}

$scope.selectHospital = function(hospitalIndexNumber) {
	var choosenHospital = $scope.hospitalMap(hospitalIndexNumber);
	//null is to clear any doctor currently set
	if(!choosenHospital) {
		$scope.selectedHospitalCost = null;
		//Reset the Overall Costs
		//TODO:  Change the logic (use a seperate function, to account for Insurance)
		$scope.hospMin = _.min(getHospitalCosts($scope.selectedProcedure) );
		$scope.hospMax = _.max(getHospitalCosts($scope.selectedProcedure) );
		
	}
	else {
		$scope.selectedHospitalCost = $scope.selectedProcedure[choosenHospital];
		$scope.hospMin = $scope.selectedHospitalCost;
		$scope.hospMax = $scope.selectedHospitalCost;
	}
	console.log(choosenHospital);
	console.log($scope.selectedHospitalCost);
	console.log($scope.selectedProcedure);
	//Need to display in the view
	$scope.choosenHospital = choosenHospital;
}

$scope.hospitalMap = function(hospitalNumber) {
	if(hospitalNumber < 0) {
		return null;
	}
	else if(hospitalNumber == 0) {
		return "Rex";
	}
	else {
		return "WakeMed";
	}
	
}

$scope.stageChange = function() {
	if($scope.stage == 1) {
		$scope.stage = 2;
	}
	else {
		$scope.stage = 1;
		$scope.resetStage();
	}
	//TODO:  This is the only place where setting these values works, find out why
	$scope.hospMin = _.min(getHospitalCosts($scope.selectedProcedure) );
	$scope.docMin = _.min(getDoctorCosts($scope.selectedProcedure) );
	$scope.hospMax = _.max(getHospitalCosts($scope.selectedProcedure) );
	$scope.docMax = _.max(getDoctorCosts($scope.selectedProcedure) );
	
}

var resetStage = function() {
	console.log("reseting the stage: NOT REALLY");
}

var descriptionFix = function(typeAheadDescription) {
	descriptionMap = {
		"Deliver a Baby":"Delivering a Baby",
		"Laparoscopic cholecystectomy":"Laparoscopic cholecystectomy",
		"MRI":"MRI",
		"Spinal Fusion":"Spinal Fusion",
		"Cardiac Angioplasty or Stent":"Cardiac Angioplasty",
		"Colonoscopy":"Colonoscopy"
	}
	return descriptionMap[typeAheadDescription];
}

$scope.selected_procedure = "";
$scope.process_list = _.map( _.get(process_r), function(procedure) { 
  		return procedure.description; }
	);
$scope.process_q = process_q;


//Callback from the TypeAhead on the first page
$scope.onSelect = function($item, $model, $label) {
	console.log("You selected " + $model );
	
    var matched_questions =  _(_.get(process_r)).chain().where({description: $model}).pluck("questions").flatten().value();
	
	_.each(matched_questions, function(individual_q) {
		//console.log(individual_q);
		console.log(individual_q.prompt);
		//console.log(_.object(individual_q.responses) );
		_.each(individual_q.responses, function(item) {
			console.log(item);
		} );
	} );

	$scope.initialSelection = $model;
	$scope.matched_questions = matched_questions;
	//ModalDemoCtrl.open('lg');
	//open('marketplace.html');
	//$scope.open('lg');
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

//DOES NOT WORK

// $scope.sendAnswer = function(clickedAnswer) {
// 	$scope.answers.push(clickedAnswer);
// 	console.log($scope.answers);
// }

//TODO: Figure out why the next line blanked selectedProcedure in Stage 2
//$scope.selectedProcedure = {};
//TODO:  what should this do?
$scope.getProcedure = function() {
	console.log('Get Procedure Called');
	var idCode = getProcedureID($scope.initialSelection, $scope.answersClicked)
	console.log(idCode);
	console.log("Below is the output of getProcedureObjectById");
	console.log(getProcedureObjectById(idCode));
	var costIdentified = getCost(idCode);
	console.log(costIdentified);
	
	//REAL WORK
	$scope.selectedProcedure = getProcedureObjectById(idCode);
	console.log($scope.selectedProcedure);
	
	$scope.stageChange();

	$scope.hospMin = _.min(getHospCost($scope.selectedProcedure) );
	$scope.hospMax = _.max(getHospCost($scope.selectedProcedure) );
	$scope.docMin = _.min(getDoctorCost($scope.selectedProcedure) );
	$scope.docMax = _.max(getDoctorCost($scope.selectedProcedure) );
	console.log($scope.hospMin);
	console.log($scope.hospMax);
	console.log($scope.docMin);
	console.log($scope.docMax);
}


//DOES WORK - This is what the Modal's answesClicked is 'resolved' to:
$scope.answersClicked = [];

  //$scope.items = ['item1', 'item2', 'item3'];
  $scope.items = _.map( _.get(process_r), function(procedure) { 
  		return procedure.description; }
	);
	
	$scope.$watch('matched_questions', function() { 
		$scope.items = $scope.matched_questions;
		//console.log($scope.matched_questions);
	}); 


	//BELOW MOSTLY CUT AND PASTED FROM ANGULAR-IU MODAL DOCUMENTATION
  $scope.open = function (answersClicked) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: 'lg',
      resolve: {
        items: function () {
          return  $scope.items;
        },
		answersClicked: function() {
			return $scope.answersClicked;
		}
      }
    });

    modalInstance.result.then(function (selectedItem, answers) {
      $scope.selected = selectedItem;
	  //$scope.answersClicked = result;
	  console.log($scope.answersClicked);
	  $scope.getProcedure();
    }, function () {
      $log.info('Modal talked to the hand at : ' + new Date());
	  $scope.answersClicked = [];
    });
  };

  $scope.storeValue = function(ans) {
  	$scope.answersClicked = ans;
  }
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, items, answersClicked) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.answersClicked = answersClicked;

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item, $scope.answersClicked);
	//TESTING
	
	console.log($scope.answersClicked);
  };
  //TODO: clear question answers on cancel button
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
	//DOES NOT HAVE main controller scope
	console.log($scope.matched_questions);
  };
};

//FOR  THE SECOND MODAL (THE ONE FOR INSURANCE IN STAGE 2)
$scope.checkedInsuranceItems = [true, true, true, true, true];
$scope.insuranceValues = [];
$scope.specifiedInsuranceBenefits = {
	deductable: 0,
	postDeductableLiability: 0.0,
	copay: 0,
	MaxOutOfPocket: 1000000
	//Didn't know what infinity was in javascript
};

$scope.calculateInsurance = function(insuranceValues) {
	if($scope.checkedInsuranceItems[0]) {
		$scope.specifiedInsuranceBenefits.deductable = insuranceValues[0];
	}

	if($scope.checkedInsuranceItems[1]) {
		$scope.specifiedInsuranceBenefits.postDeductableLiability = (insuranceValues[1] / 100);
	}
	if($scope.checkedInsuranceItems[2]) {
		$scope.specifiedInsuranceBenefits.copay = insuranceValues[2];
	}
	if($scope.checkedInsuranceItems[3]) {
		$scope.specifiedInsuranceBenefits.MaxOutOfPocket = insuranceValues[4];
	}
	console.log($scope.specifiedInsuranceBenefits.deductable);
	$scope.insuranceMoneyUpdate();

}

$scope.insuranceMoneyUpdate = function() {

	var minPayment =  $scope.paymentCalculator($scope.docMin, $scope.hospMin, $scope.specifiedInsuranceBenefits);

	var maxPayment =  $scope.paymentCalculator($scope.docMax, $scope.hospMax, $scope.specifiedInsuranceBenefits);

	var selectedPayment =  $scope.paymentCalculator($scope.selectedDocCost, $scope.selectedHospitalCost, $scope.specifiedInsuranceBenefits);

	$scope.minPayment = minPayment;
	$scope.maxPayment = maxPayment;
	$scope.selectedPayment = selectedPayment;
	console.log("insuranceMoneyUpdate");
	console.log(minPayment);
	console.log(maxPayment);
	console.log(selectedPayment);

}

$scope.paymentCalculator = function(docCharges, hospitalCharges, insuranceBenefits) {
	var deductable = insuranceBenefits.deductable;
	var outOfPocketLimit = insuranceBenefits.MaxOutOfPocket;
	var retVal = {payDoc: 0, payHospital: 0, insuranceCoverage: 0};
	if(docCharges <= deductable ) {
		retVal.payDoc = docCharges;
		deductable -= docCharges;
	}
	else {
		//add deductable to payout, add non-coinsurance above deducatble, add rest to coinsurance le
		retVal.payDoc += deductable;
		retVal.payDoc += ( (docCharges - deductable) * insuranceBenefits.postDeducableLiability);
		retVal.insuranceCoverage = ( (docCharges - deductable) *  (1 - insuranceBenefits.postDeducableLiability) );
		deductable = 0; // zerp deductable
		retVal.payDoc += insuranceBenefits.copay;
		if(retVal.payDoc >= outOfPocketLimit) {
			retVal.payDoc = outOfPocketLimit;
			outOfPocketLimit = 0;
		}
		else {
			outOfPocketLimit -= retVal.payDoc;
		}
	}

	if(hospitalCharges <= deductable ) {
		retVal.payHospital = hospitalCharges;
		deductable -= hospitalCharges;
	}
	else {
		//add deductable to payout, add non-coinsurance above deducatble, add rest to coinsurance le
		retVal.payHospital += deductable;
		retVal.payHospital += ( (hospitalCharges - deductable) * insuranceBenefits.postDeducableLiability);
		retVal.insuranceCoverage = ( (hospitalCharges - deductable) *  (1 - insuranceBenefits.postDeducableLiability) );
		deductable = 0; // zerp deductable
		retVal.payHospital += insuranceBenefits.copay;
		if(retVal.payHospital >= outOfPocketLimit) {
			retVal.payHospital = outOfPocketLimit;
			outOfPocketLimit = 0;
		}
		else {
			outOfPocketLimit -= retVal.payHospital;
		}
	}

	return retVal;
}

	//BELOW MOSTLY CUT AND PASTED FROM ANGULAR-IU MODAL DOCUMENTATION
  $scope.insuaranceOpen = function (insuranceValues) {

    var modalInstance = $modal.open({
      templateUrl: 'mySecondModalContent.html',
      controller: SecondModalInstanceCtrl,
      size: 'lg',
      resolve: {
        checkedInsuranceItems: function () {
          return  $scope.checkedInsuranceItems;
        },
		insuranceValues: function() {
			return $scope.insuranceValues;
		}
      }
    });

    modalInstance.result.then(function (selectedItem, answers) {
      //$scope.selected = selectedItem;
	  //$scope.answersClicked = result;
	  console.log($scope.insuranceValues);
	  //$scope.getProcedure();
	  $scope.calculateInsurance($scope.insuranceValues);
    }, function () {
      $log.info('Modal talked to the hand at : ' + new Date());
	  $scope.insuranceValues = [];
	  $scope.checkedInsuranceItems = [true, true, true, true, true];
    });
  };

  $scope.storeInsuranceValue = function(ans) {
  	$scope.insuranceValues = ans;
  }
// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var SecondModalInstanceCtrl = function ($scope, $modalInstance, checkedInsuranceItems, insuranceValues) {

  $scope.checkedInsuranceItems = checkedInsuranceItems;
  $scope.selected = {
    item: $scope.checkedInsuranceItems[0]
  };

  $scope.insuranceValues = insuranceValues;

  $scope.ok = function () {
    $modalInstance.close($scope.checkedInsuranceItems, $scope.insuranceValues);
	//TESTING

	console.log($scope.insuranceValues);
  };
  //TODO: clear question answers on cancel button
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
	//DOES NOT HAVE main controller scope
	console.log($scope.insuranceValues);
  };
};

//TODO: fix the ansersArray to check all the answers
var getProcedureID = function (descriptionString, answersArray) {
	var resultsArray = _(_.get(ans_cost_r)).chain().where(
		{PrimaryDesc:descriptionFix(descriptionString),
			 Answer1: answersArray[0].answer, Answer2: answersArray[0].answer, Answer3: answersArray[0].answer, Answer4: answersArray[0].answer}).pluck("ID").value();
	
	//Should only have one element anyway
	return _.first(resultsArray);
};

var getProcedureObjectById = function(procedureCode) {
	resultArray =  _(ans_cost_r.procedures).where({ID:procedureCode});
	return _.first(resultArray); //Should only be one result
}

var getHospitalCosts = function(procedureObject) {
	console.log(procedureObject);
	//otherObject = JSON.parse(procedureObject);
	console.log(procedureObject["Rex"]);
	console.log(procedureObject.WakeMed);
	return [procedureObject.Rex, procedureObject.WakeMed];
} 

var getDoctorCosts = function(procedureObject) {
	return [procedureObject.drFeelgood, procedureObject.drSchmidt];
} 

var getCost = function (procedureCode) {
	//return _(_.get(ans_cost_r)).chain().where({ID:procedureCode}).pluck("drFeelgood", "drSchmidt").value();
		//return _(ans_cost_r.procedures).where({ID:procedureCode});
		console.log("getCost called");
		var hospitalCost = getHospitalCosts(getProcedureObjectById(procedureCode));
		var doctorCost = getDoctorCosts(getProcedureObjectById(procedureCode));
	var retVal = {
		//Hospitals:getHospitalCosts(getProcedureObjectByID(procedureCode)),
		//Doctors:getDoctorCosts(getProcedureObjectByID(procedureCode))
		Hospitals:hospitalCost,
		Doctors:doctorCost
	}
	return retVal;
	
}

$scope.selectedFacility = '';
$scope.selectedPhysician = '';

$scope.$watch('selectedProcedure', function() { 
	console.log("scope watch triggered on selectedProcedure");
	if(getHospitalCosts($scope.selectedProcedure) || getDoctorCosts($scope.selectedProcedure) ) {
		//$scope.hospMin = _.first(getHospitalCosts($scope.selectedProcedure) );
		//$scope.docMin = _.first(getDoctorCosts($scope.selectedProcedure) );
		$scope.hospMin = _.min(selectedProcedure.Rex, selectedProcedure.WakeMed);
		$scope.hospMax = _.max(selectedProcedure.Rex, selectedProcedure.WakeMed);
		$scope.docMin = _.min(selectedProcedure.drFeelGood, selectedProcedure.drSchmidt);
		$scope.docMax = _.max(selectedProcedure.drFeelGood, selectedProcedure.drSchmidt);
		console.log($scope.hospMin);
		console.log($scope.hospMax);
		console.log($scope.docMin);
		console.log($scope.docMax);
	}
	

	//console.log($scope.matched_questions);
}); 

$scope.$watch('insuranceValues', function() { 
	if($scope.insuranceBenefits) {
		$scope.insuranceMoneyUpdate(); 
	}
});


});


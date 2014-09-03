var app = angular.module("MyApp", ['mgcrea.ngStrap']);

app.controller("MyMarket", function( $scope) {
  $scope.button = { radio: "X", overnight: "" };
  $scope.selectedProcedure = "";
  $scope.procedures = ["Spinal fusion",
"Delivering a baby",
"Inpatient chemotherapy",
"Coronary Bypass",
"Laparoscopic cholecystectomy",
"Joint Replacement",
"Cardiac Angioplasty or Stent Placement",
"Revision of Joint Replacement",
"Colonoscopy",
"Echo",
"MOHS",
"Upper GI Endoscopy",
"Wound Debridement",
"MRI",
"Ultrasound",
"Complete CBC",
"EKG",
"Eye Exam",
"Glucose Blood Test",
"Lipid Panel",
"Metabolic Panel",
"Office Visit",
"Removal of Skin Lesions",
"Skin Biopsy",
"Stress Test",
"Urinalysis"];

// $scope.$watchCollection(["selectedProcedure", "button"], function(newVal, oldVal)  {
// 	if(function(button) { 
// 			if(button[0] && button[1]) {
// 				console.log("The values where, and overnight are set");
// 			}
// 		return true;
// 		}(newVal[1]) )
// 	console.log("Logging the outer if, inner if returns true, hardcoded to do that as always");
// } //end of function(newValues, oldValues, scope)
// );  // end of $scope.$watchCollection

$scope.$watch("selectedProcedure", function(newValue, oldValue) {
	console.log("Selected Procedure has changed to: " + newValue);
	if($scope.button.radio) {
		console.log("Where is truthy");
		}
	else if($scope.button.overnight) {
		console.log("Overnight is set (and truthy)");
		}
	});

$scope.$watch("button.overnight", function(newValue, oldValue) {
	console.log("Watcher of overnight has detected a change");
	}
);
	
	
});

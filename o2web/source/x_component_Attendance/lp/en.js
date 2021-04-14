MWF.xApplication.Attendance.LP = {
	"title": "Attendance Management",
	"delete": "Delete",
	"deleteDocumentTitle": "Delete Confirmation",
	"deleteDocument": "Are you sure you want to delete this information?",
	"deleteDocumentOK": "Delete successfully",
	"createSuccess": "Created successfully",
	"updateSuccess": "Update successful",
	"inputName": "Please enter a name",

	"dateFormatMonth": "%Y-%m",
	"dateFormatOnlyMonth": "%m",
	"dateFormatDay": "%%Y-%m-%d",
	"dateFormatMonthDayLocal": "%m-%d",
	"dateFormat": "db",

	"month": "month",
	"today": "Today",
	"day": "day",

	"cancel": "Cancel",
	"ok": "OK",

	"create_cancel_title": "Cancel New Confirmation",
	"create_cancel": "Are you sure you want to cancel the new creation?",

	"normal": "attendance", //green, normal
	"levelAsked":"Ask for leave", //blue, ask for leave
	"late":"late", //orange, late
	"lateSelectText": ["","late","not late"],
	"leaveEarly":"leave early", //orange, leave early
	"noSign":"Absence", //Pink, not signed in
	"appealSuccess": "Appeal passed",
	"lackOfTime": "LackOfTime",
	"abNormalDuty": "Abnormal check in",
	"truefalseSelectText": ["","Yes","No"],
	"query": "Query",
	"wholeDay": "whold day",
	"am": "a.m.",
	"pm": "p.m.",

	"absent": "Absent",
	"notAbsent": "Not Absent",
	"absendSelectText": ["","yes","no"],

	"attendanceStatisic": "Attendance Statistics",
	"name": "Name",
	"onDutyTimes": "Check-in times",
	"offDutyTimes": "Number of checkouts",
	"onDutyDayCount": "Number of attendance days",
	"onSelfHolidayCount": "Number of days ask for leave",
	"absenceDayCount": "Number of days absent",
	"lateTimes": "Number of late arrivals",
	"leaveEarlyTimes": "Leave Early Times",
	"lackOfTimeCount": "Lack of work hours",
	"abNormalDutyCount": "Abnormal check-in times",
	"resultNormal": "Number of normal punches",
	"seriousLateTimes": "Seriously Late Times",
	"absenteeismTimes": "Number of Absenteeism",
	"notSignedCount": "Not Signed Count",

	"topUnitAttendanceDetail": "Company Attendance Details",
	"topUnitAttendanceStatic": "Company Attendance Statistics",
	"unitAttendanceDetail": "Department Attendance Details",
	"unitAttendanceStatic":"Department Attendance Statistics",
	"personAttendanceDetail": "Personal Attendance Details",
	"personAttendanceStatic": "Personal Attendance Statistics",
	"unitSigninDetail": "Department Signin Details",
	"unitSigninStatic": "Department Signin Statistics",
	"personSigninDetail": "Personal Signin Detail",
	"personSigninStatic": "Personal signin statistics",
	"staticByDay": "Statistics by day",
	"staticByMonth": "Statistics by month",
	"type": "Type",
	"topUnit": "Company",
	"unit": "Department",
	"annuaal": "Annual",
	"months": "months",
	"date": "Date",
	"seeSchedule": "View the schedule",
	"unfindSchedule": "The schedule of your department and company was not found",
	"scheduleTable": "Schedule Table",
	"signTime": "sign-in time",
	"appeal": "Appeal",
	"export": "Export",
	"name1": "Name",
	"alias": "Alias",
	"range": "range",
	"meter": "meter",
	"description": "Remarks",
	"save": "Save",
	"enableMove": "Allow Move",
	"workPlaceEmptyNotice": "Workplace cannot be empty",
	"BaiduDeveloperCertification": "Baidu Developer Certification",
	"registerBiaduNotice": "The workplace setting uses the services of the Baidu Maps Open Platform. You can register for Baidu Developer Certification to increase the concurrency of the map. After the certification is completed, please fill in the key into the input box below.",
	"openRegisterUrl": "Click here to open the authentication channel",
	"secretKey": "Secret Key",

	"index": {
		"attendanceCalendar":"Attendance Calendar",
		"pieChart": "Attendance Summary",
		"lineChart": "Commit to get off work trend",
		"absent":"Absent",
		"offDutyTime":"Attendance, check-in time:",
		"levelAsked":"Ask for leave"
	},
	"schedule": {
		"inputVaild": "Unit, working hours, off-duty time, starting time for late arrival, and starting time for absenteeism cannot be empty",
		"setSchedule": "Schedule Setting",
		"unit": "Unit",
		"workTime": "Work Time",
		"offTime": "off time",
		"lateTime":"Late start time",

		"leaveEarlyTime":"leave Time",
		"absenteeismTime":"Absence start time",
		"illegal":{
			"1":["The off-duty time cannot be earlier than the on-duty time"],
			"2":["The start time of the lunch break should not be earlier than the working time","The end time of the lunch break should not be earlier than the start time of the lunch break","The end time of the lunch break should not be earlier than the end time of the lunch break"],
			"3":["Morning off time shall not be earlier than working hours","Afternoon working hours shall not be earlier than morning off hours","Off working hours shall not be earlier than afternoon working hours"]
		},
		"lateStartTime":"Starting time for being late in the morning",
		"leaveEarlyStartTime":"leaveEarlyStartTime",
		"leaveEarlyStartTimeMorning":"leaveEarlyStartTimeMorning",
		"lateStartTimeAfternoon": "LateStart Time Afternoon",
		"signProxy":{
			"name":"Check-in strategy",
			"select":{
				"1": "Twice clocking in (on work in the morning, off work in the afternoon)",
				"2": "Take the clock three times (on work in the morning, off work in the afternoon and noon, a total of three times)",
				"3": "Check in four times (check in both in the morning and in the afternoon)"
			},
			"2":{
				"middayRestStartTime":"Lunch break start time",
				"middayRestEndTime":"Lunch break end time",
			},
			"3":{
				"middayRestStartTime":"Morning off time",
				"middayRestEndTime":"Afternoon work time",
			}
		}
	},
	"holiday": {
		"inputValid": "Year, holiday name, start time, end time are required, please fill in!",
		"setHoliday": "Statutory Holiday Setting",
		"year": "year",
		"name": "Holiday name",
		"startDate": "Start Date",
		"endDate": "End Date",
		"makeUpClassDay": "MakeUpClassDay",
		"holidaySchedule": "Holiday Schedule",
		"addMakeUpClassDay": "Add MakeUpClassDay",
		"beginGreateThanEndNotice": "The start date cannot be greater than the end date"
	},
	"permission": {
		"setAttendancer": "Attendance Staff Setting",
		"role": "role",
		"personName": "Person",
		"unit": "Unit",
		"roleSelectText": ["Company Administrator","Department Administrator"]
	},
	"selfHoliday": {
		"inputValid": "Department, employee name, vacation type, start time, end time, and number of vacation days are required, please fill in!"
	},
	"nextActivity": "Next Activity:",
	"nextUser": "Processor:",
	"deal": "Deal",
	"processStarted": "File has been started",
	"processStartedMessage": "You started a new job:",

	"auditStatus": "Approval Status",
	"auditStatusSelectText": ["All status","Pending","Approval passed","Approval failed"],
	"appealReason": "Reason for Appeal",
	"appealReasonSelectText": ["","Temporary leave","Business trip","Going out on business","Other"],
	"department": "Department",
	"person": "person",
	"auditor": "auditor",
	"search": "Search",
	"selectPerson": "Person",
	"selectCompany": "Company",
	"selectDepartment": "Department",
	"selectAppealNotice": "Please select an appeal first",
	"agreeAppealConfirmTitle": "Agree to Appeal",
	"agreeAppealConfirmContent": "Are you sure to process the {count} appeals you selected?",
	"actionSuccess": "Processing successfully",
	"disagreeAppealConfirmTitle": "Disagree Appeal",
	"disagreeAppealConfirmContent": "Are you sure to process the {count} appeals you selected?",
	"draft": "Initiate",
	"todo": "To be processed",
	"approve": "Approve approved",
	"deny": "Approval failed",
	"apealApplyForm": "Appeal Application Form",
	"apealForm": "Appeal Form",
	"employeeName": "Employee Name",
	"recordDate": "Attendance Date",
	"onDutyTime": "OnDutyTime",
	"offDutyTime": "off-duty check-in time",
	"attendanceStatus": "Attendance Status",
	"appealStatus": "Approval Status",
	"address": "Location",
	"leaveType": "Leave Type",
	"leaveTypeSelectText": ["","paid annual leave","paid sick leave","paid welfare leave","withholding leave","other"],
	"startTime": "Start",
	"endTime": "End",
	"appealDescriptoin": "Reason",
	"close": "Close",
	"disagree": "Disagree",
	"agree": "Agree",
	"temporaryLeave": "Temporary Leave",
	"out": "Business trip",
	"businessTrip": "Going out on business",
	"other": "Other",
	"inputIdeaNotice": "Please fill in your opinion",
	"processSuccess": "Processing successfully",
	"noDepartment": "Your department was not found, please contact the administrator!",
	"signinType": "Signin Type",
	"signinTypeSelectText": ["", "Check in at work", "Check in after get off work"],
	"signinResult": "signin result",
	"signinResultSelectText": ["", "normal", "leave early", "late", "severely late", "absentee late", "not clocked in"],

	"systemSetting": "System Settings",
	"reportTo": "Report object",
	"appealEnable": "Appeal and approval function enabled status",
	"appealSelectText": ["open","close"],
	"appealAuditFlowType": "Attendance Result Appeal Process Type",
	"appealAuditFlowTypeSelectText": ["Custom Flow","Built-in Flow"],
	"appealAuditorType": "Appeal Auditor Determination Method",
	"appealAuditorValue": "Appeal Auditor determines the content",
	"directSupervisor": "Direct Supervisor",
	"appealAuditFlow": "Customize the application process",
	"none": "None",
	"saveSuccess": "Save successfully",
	"noReportToNotice": "Your report object is not configured in the organization management, please contact the administrator",
	"unitDuty": "Department Position",
	"noUnitDutyNotice": "There is no {duty} position with {unit} configured in the system, please contact the administrator",
	"personAttribute": "Person Attribute",
	"noPersonAttribute": "Your personal attribute '{att}' is not configured in the system, please contact the administrator",
	"assignedPerson": "Assigned Person",
	"directLeader": "Direct Leader",
	"noDirectLeader": "Your personal attribute 'Direct Leader' is not configured in the system, please contact the administrator",
	"createAppealNotice": "Appeal has been submitted",

	"offDutyAbbrev": "off",
	"onDutyAbbrev": "on",
	"attendanceSummary": "Attendance Summary",
	"attendanceTrendChart": "Commit and commute trend chart",
	"trendChartLegend": ['working time','off working time'],
	"attendanceTrend": "Attendance Trend",
	"year": "year",

	"importExcelNotice": "Please import excel file!",
	"analyseDataSuccess": "Analyze attendance data successfully",
	"statDataSuccess": "Statistical attendance data success",
	"importDataStep": "Data Import Step",
	"importStepDescription": [
		"1. Download the Excel template and fill in the attendance data according to the template format;",
		"2. Click the Import Attendance Data button, select the attendance data and confirm, the system will verify whether the attendance data is correct and import the data;",
		"3. Click the check attendance data button, select the year and month to be checked, and the system will check the data of the personnel who need to check attendance;",
		"4. Click the Analyze Attendance Data button, and the system will generate detailed attendance data;",
		"5. Click the Statistic Attendance Data button, and the system will generate attendance statistics for individuals, departments, and companies."
	],
	"selectCheckMonth":"Select CheckMonth",
	"checkDetailSuccess": "Check attendance data successfully",
	"importDataResult":"Attendance data import result",
	"importDataResultSuccess": "The file you uploaded: '{fileName}' has been successfully imported. The following shows {count} of them:",
	"importDataResultFail": "The file you uploaded: '{fileName}'' failed the verification, there are {errorCount} pieces of error data. Please modify and re-import. The following shows {count} of them:",
	"importDataResultThList": [
		"Line number", "employee number", "employee name", "date", "morning clocking time", "morning clocking time", "afternoon clocking time", "afternoon clocking time", "check result ","description"
	],
	"true": "Correct",
	"false": "Error",
	"checkDataTitle": "Checking data",
	"checkDataContent": "Start checking data, {count} items in total",
	"importDataTitle": "Importing data",
	"importDataContent": "Start to import data, {count} items in total",
	"readyToImportData": "Preparing to import data",
	"readyToImportData1": "Preparing to import data...",
	"importSpeed": "items/sec",
	"checkingDataContent": "Checking data: {speed}/sec, {total} total, remaining {remaining}",
	"checkingDataErrorContent": ",{errorCount} errors",
	"importingDataContent": "Importing data: {speed}/sec, {total} total, remaining {remaining}",
	"importingDataErrorContent": ",{errorCount} errors",
	"hour":"Hour",
	"mintue": "mintue",
	"second": "second",
	"importSuccessTitle": "Import successful",
	"importSuccessContent": "A total of {total} pieces of data were imported Speed: {speed} pieces/sec Time-consuming: {timeStr}",
	"importFailTitle": "Import Failed",
	"importFailContent": "Total data {total} items Error: {errorCount} items Time-consuming: {timeStr} Please modify and import again",

	"myDetail": "My attendance details",
	"myDetailStatic": "My attendance rate statistics",

	"cyclText": "Attendance cycle: {start} to {end}",

	"personSetting": "Attendance Staff Setting",
	"configType": "Configuration Type",
	"configTypeSelectText": ["Attendance is required","Attendance is not required"],
	"topUnitName": "Company Name",
	"unitName": "Department Name",
	"employeeNumber":"Employee Number",
	"joininDate": "JoininDate",

	"exportEmployeeHolidayRecord": "Export Employee Holiday Record",
	"employeeHolidayRecord": "Employee Holiday Record",

	"leaveType1": "Leave Type",
	"leaveTypeSelectText1": ["Paid annual leave","Paid sick leave","Paid benefit leave","Withholding pay leave","Other"],
	"leaveDayCount": "Leave DayCount",

	"statisticsPeriodSetting": "StatisticsPeriodSetting",
	"selectCompanyNotice": "Double-click to select, fill in'*' to match all companies",
	"selectDepartmentNotice": "Double-click to select, fill in'*' to match all departments",
	"statisticsCompany": "StatisticsCompany",
	"statisticsUnit": "Statistics Unit",
	"cycleYear": "Statistical Cycle Year",
	"cycleMonth":"Statistical Cycle Month",
	"startDate": "Start Date",
	"endData": "End Date",

	"selectStartEndEndDataNotice":"Please select the start date and end date",
	"weekendSetting": "Weekend Setting",
	"selectWeekend": "Select Weekend"

};
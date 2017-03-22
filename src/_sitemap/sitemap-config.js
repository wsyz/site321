/**
 * 索引页相关js 
 */

//文件路径
var CONFIG = {
	hrefComp : "../common/components/",	//组件目录（相对根目录）
	hrefPage : "../views/",		//页面目录（相对根目录）

	namePage : "view",			//业务模块前缀名
	nameInclude : "com",		//include组件前缀名
	nameCopy : "ui",			//copy组件前缀名

	isModule : true
}


//内容信息
var CONTENT = [
	//以下为常见模块参考，根据需求增减到上一行
	{	//业务：班级管理
		type: 		CONFIG.namePage,		
		cnname: 	"班级管理",	 	
		enname: 	"classManage",	
		author: 	"pxx",	
		conlist: 	[
						{"zn":"【B】班级管理入口（完成）","en":"classManage-enter-b"},
						{"zn":"【C】班级管理入口（完成）","en":"classManage-enter-c"},
						{"zn":"【通】班级管理入口（内容空）（完成）","en":"classManage-enter-empty"},
						{"zn":"【B】创建班级","en":"addclass-b"},
						{"zn":"【C】创建班级","en":"addclass-c"},
						{"zn":"【B】班级学生首页","en":"class-student"},
						{"zn":"【通】班级学生首页（内容空）","en":"class-student-empty"},
						{"zn":"【B】添加学生","en":"addstudent-b"},
						{"zn":"【C】添加学生","en":"addstudent-c"},
						{"zn":"【B】编辑学生","en":"editstudent-b"},
						{"zn":"【C】编辑学生","en":"editstudent-c"},
						{"zn":"【B】班级老师","en":"class-teacher"},
						{"zn":"【通】班级老师（内容空）","en":"class-teacher-empty"},
						{"zn":"【B】添加老师","en":"addteacher-b"},
						{"zn":"【C】添加老师","en":"addteacher-c"},
						{"zn":"【B】班级分组","en":"class-group-b"},
						{"zn":"【C】班级分组","en":"class-group-c"},
						{"zn":"【B】班级设置","en":"class-setting-b"},
						{"zn":"【C】班级设置","en":"class-setting-c"},
						{"zn":"【B】我加入的班级-分组","en":"myjoin-group-b"},
						{"zn":"【C】我加入的班级-分组","en":"myjoin-group-c"},
						{"zn":"【B】我加入的班级-设置","en":"myjoin-setting-b"},
						{"zn":"【C】我加入的班级-设置","en":"myjoin-setting-c"}
					]	
	},

	{	//业务：脚本同步
		type: 		CONFIG.namePage,		
		cnname: 	"脚本同步",	 	
		enname: 	"scriptSyn",	
		author: 	"pxx，wj，lj",
		conlist: 	[
						{"zn":"【直播页】老师端","en":"live-teacher"},
						{"zn":"【直播页】学生端","en":"live-student"},

						{"zn":"【老师端】直播课程、录播回放-图片模式","en":"teacher-live-imgmod"},
						{"zn":"【老师端】直播课程、录播回放-列表模式","en":"teacher-live-listmod"},
						{"zn":"【老师端】课程设置","en":"teacher-addcourse"},
						{"zn":"【老师端】课程设置-上传封面","en":"teacher-addcourse-uploadcover"},
						{"zn":"【老师端】课程设置（含章节设置弹窗）","en":"teacher-addcourse-set"},
						{"zn":"【老师端】课程设置（含课时设置弹窗）","en":"teacher-addclass-set"},
						{"zn":"【老师端】课程设置（含课时删除弹窗）","en":"teacher-course-finish"},

						{"zn":"【学生端】课程列表（直播、录播、搜索）","en":"student-course-list"},
						{"zn":"【学生端】课程详情","en":"student-course-detail"},
						{"zn":"【学生端】我的课程（学习中）、我的收藏","en":"student-mycourse"},
						{"zn":"【学生端】我的课程(已完结)","en":"student-mycourse-finish"},
						{"zn":"【学生端】我的收藏","en":"student-myfav"},
						{"zn":"【学生端】我的课程详情页","en":"student-mycourse-detail"},
						{"zn":"【学生端】修改密码","en":"student-usercenter-modifypwd"}
					]	
	},

	{	//业务：学习情况弹窗
		type: 		CONFIG.namePage,		
		cnname: 	"学习情况（弹窗）",	 	
		enname: 	"situation",	
		author: 	"lj，pxx",	
		conlist: 	[
						{"zn":"表现-全班","en":"situation-perform-class"},
						{"zn":"表现-个人","en":"situation-perform-personal"},
						{"zn":"课堂练习-全班","en":"situation-practice-class"},
						{"zn":"课堂练习-个人","en":"situation-practice-personal"},
						{"zn":"作业-全班","en":"situation-homework-class"},
						{"zn":"作业-个人","en":"situation-homework-personal"},
						{"zn":"错题","en":"situation-errorsubject"},
						{"zn":"暂无数据","en":"situation-nodata"}
					]	
	},

	{	//copy——btn
		type: 		CONFIG.nameCopy,
		cnname: 	"按钮",
		enname: 	"btn",
		author: 	"pxx",
		style: 		"col",		//col: 代码为左右显示，row代码为上下显示
		conlist: 	[
						{"zn":"主要确认按钮","en":"btn-main"},
						{"zn":"辅助确认按钮","en":"btn-sub"},
						{"zn":"取消按钮","en":"btn-cancel"},
						{"zn":"特殊按钮","en":"btn-pure"}
					]
	},
	{	//copy——dropdown
		type: 		CONFIG.nameCopy,
		cnname: 	"下拉菜单",
		enname: 	"dropdown",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	["dropdown"]
	},
	{	//copy——toast
		type: 		CONFIG.nameCopy,
		cnname: 	"提示toast",
		enname: 	"toast",
		author: 	"wj",
		style: 		"col",	
		conlist: 	["toast"]
	},
	{	//copy——表单
		type: 		CONFIG.nameCopy,
		cnname: 	"表单",
		enname: 	"form",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	[
						{"zn":"表单框架","en":"form"},
						{"zn":"输入框","en":"form-input"},
						// {"zn":"下拉选择框","en":"form-select"},
						// {"zn":"文本域","en":"form-textarea"},
						// {"zn":"单选框","en":"form-radio"},
						// {"zn":"多选框","en":"form-checkbox"},
						// {"zn":"开关","en":"form-switch"},
						// {"zn":"验证码","en":"form-vercode"},
						// {"zn":"上传","en":"form-upload"}
					]
	},
	{	//copy——pop
		type: 		CONFIG.nameCopy,
		cnname: 	"弹窗框架",
		enname: 	"pop",
		author: 	"pxx",
		style: 		"row",	
		conlist: 	["pop"]
	},
	{	//copy——date
		type: 		CONFIG.nameCopy,
		cnname: 	"日历（第三方插件）",
		enname: 	"date",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	["date"]
	},
	{	//copy——placeholder
		type: 		CONFIG.nameCopy,
		cnname: 	"占位图",
		enname: 	"placeholder",
		author: 	"pxx",
		style: 		"row",	
		conlist: 	[
						{"zn":"列表为空","en":"placeholder-empty"},
						{"zn":"列表为空","en":"placeholder-empty2"},
						{"zn":"列表为空","en":"placeholder-empty3"},
						{"zn":"列表正在加载","en":"placeholder-loading"},
						{"zn":"列表加载失败","en":"placeholder-loading-fail"}
					]
	},
	{	//copy——tab
		type: 		CONFIG.nameCopy,
		cnname: 	"tab",
		enname: 	"tab",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	[
						{"zn":"默认样式","en":"tab"},
						{"zn":"样式1","en":"tab2"}
					]
	},
	{	//com——page
		type: 		CONFIG.nameInclude,
		cnname: 	"分页",
		enname: 	"page",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	["page"]
	},
	{	//com——search
		type: 		CONFIG.nameInclude,
		cnname: 	"搜索框",
		enname: 	"search",
		author: 	"pxx",
		style: 		"col",	
		conlist: 	["search"]
	}
];


//DOM模板
var TEMP = [
	{

	}
];

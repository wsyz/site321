/**
 * 索引页相关js 
 */

(function(){

	//定义
	var flag = 0;

	//特殊处理的组件
	var _spPop = "pop";		//弹窗

	//初始化
	var _mPage = $(".ceci-mainmenu > li > .ceci-item-page").next("ul");  //左侧菜单的业务模块
	var _mUi = $(".ceci-mainmenu > li > .ceci-item-ui").next("ul");  	//左侧菜单的复制组件
	var _mCom = $(".ceci-mainmenu > li > .ceci-item-com").next("ul");  	//左侧菜单的include组件
	$(function(){


		$.each(CONTENT,function(n,v) { 

			//业务模块 
			if(v.type === CONFIG.namePage) {
				var dom = "";
				var modnameZN = "", //模块中文名
					modnameEN = "", //模块英文名
					pagenameZN = "", //页面中文名
					pagenameEN = ""; //页面英文名
				var modhref = ""; //模块独立文件路径
				var link = $(".ceci-pagecon[data-target='pj-linkpage']");

				//添加页面链接页：模块标题
				link.append(
					'<h4 class="ceci-pjintro-subtit">'+v.cnname+'模块</h4>'+
					'<div class="ceci-formrow">'+
					'	<ul class="ceci-table">'+
					'		<li class="table-head">'+
					'			<div class="item">'+
					'				<span class="col col-4">页面</span>'+
					'				<span class="col col-4">文件名</span>'+
					'				<span class="col col-2">作者</span>'+
					'			</div>'+
					'		</li>'+
					'	</ul>'+
					'</div>'
				);

				$.each(v.conlist,function(nn,vv){
					//添加左侧菜单中可点击的li的dom
					modnameZN = v.cnname;
					modnameEN = v.enname;
					if (typeof vv == "string") {
						pagenameZN = v.cnname;
						pagenameEN = vv;
					}
					else {
						pagenameZN = vv.zn;
						pagenameEN = vv.en;
					}

					if (CONFIG.isModule) {
						modhref = modnameEN + "/";
					}
					else {
						modhref = "";
					}
					dom = dom+'<li><a data-href="pj-'+pagenameEN+'" class="ceci-item">'+pagenameZN+'</a></li>'; 

					//正文添加内容
					$(".ceci-mainby").append(
						'<div class="ceci-pagecon" data-target="pj-'+pagenameEN+'">'+
						'	<iframe src="'+CONFIG.hrefPage+modhref+pagenameEN+'.html" frameborder="0"></iframe>'+
						'</div>'
					);

					//添加页面链接：页面列表
					link.find('.ceci-formrow:last-child .ceci-table').append(
						'<li>'+
						'	<a class="item" target="_blank" href="'+CONFIG.hrefPage+modhref+pagenameEN+'.html">'+
						'		<span class="col col-4">'+pagenameZN+'</span>'+
						'		<span class="col col-4">'+pagenameEN+'</span>'+
						'		<span class="col col-2">'+v.author+'</span>'+
						'	</a>'+
						'</li>'
					);

				});
				//添加左侧菜单
				if(v.conlist.length==1) {
					_mPage.append(dom);
				}
				else
				if(v.conlist.length>1) {
					_mPage.append(
						'<li>'+
						'	<a href="###" class="ceci-item ceci-item-slider">'+modnameZN+'</a>'+
						'	<ul>'+dom+'</ul>'+
						'</li>'
					);
				}
			} 
			else


			//复制组件 和 include组件 
			if(v.type === CONFIG.nameCopy || v.type === CONFIG.nameInclude) {
				var name1 = "",name2 = "";
				var st = v.style === "row" || v.style === "col" ? v.style : "row";	//代码显示风格，无设置默认为上下
				var con,con2; 
				var name = v.type+'-'+v.enname;
				var dom = '<li><a data-href="pj-'+name+'" class="ceci-item">'+v.cnname+'</a></li>';

				//添加内容
				$(".ceci-mainby").append(
					'<div class="ceci-pagecon" data-target="pj-'+name+'" data-style="'+st+'">'+
					'</div>'
				);
				con = $(".ceci-mainby .ceci-pagecon[data-target='pj-"+name+"']");
				

				if(v.type === CONFIG.nameCopy) {
					//添加左侧菜单中可点击的li
					_mUi.append(dom);
					//添加内容
					$.each(v.conlist,function(nn,vv){
						if (typeof vv == "string") {
							name1 = v.cnname;
							name2 = vv;
						}
						else {
							name1 = vv.zn;
							name2 = vv.en;
						}
						con2 = $.ajax({
								url: CONFIG.hrefComp+'_'+name+'/_'+name2+'.html',
								async:false
							}).responseText;
						con.append(
							'<h3 class="ceci-components-tit">'+name1+'</h3>'+
							'<div class="ceci-components">'+
							'	<div class="ceci-components-edit">'+
							'		<textarea class="ceci-textarea">'+
							con2+
							'		</textarea>'+
							'	</div>'+
							'	<div class="ceci-components-display">'+
							con2+
							'	</div>'+
							'</div>'
						);
					});
				}
				else {
					//添加左侧菜单中可点击的li
					_mCom.append(dom);
					//添加内容
					$.each(v.conlist,function(nn,vv){
						if (typeof vv == "string") {
							name1 = v.cnname;
							name2 = vv;
						}
						else {
							name1 = vv.zn;
							name2 = vv.en;
						}
						con2 = $.ajax({
								url: CONFIG.hrefComp+'_'+name+'/_'+name2+'.html',
								async:false
							}).responseText;
						con.append(
							'<h3 class="ceci-components-tit">'+name1+'</h3>'+
							'<div class="ceci-components">'+
							'	<div class="ceci-components-edit">'+
							'		<textarea class="ceci-textarea">'+
							'@@include("../'+CONFIG.hrefComp+'_'+name+'/_'+name2+'.html")'+
							'		</textarea>'+
							'	</div>'+
							'	<div class="ceci-components-display">'+
							con2+
							'	</div>'+
							'</div>'
						);
					});
				}
				

			} 

		});

	})

	//页面切换
	$(".ceci-mainmenu li").on('click','.ceci-item',function(){
		var name = $(this).attr('data-href');
		if(name == null || name === "") { return; }
		$(".ceci-mainby .ceci-pagecon[data-target='"+name+"']").addClass("on").siblings(".ceci-pagecon").removeClass("on");
		$(".ceci-mainmenu .ceci-item").removeClass("on");
		$(this).addClass("on");
	})

	//导航收起
	$(".ceci-sideby").on('click','.ceci-btnside',function(){
		$(this).closest(".ceci-sideby").toggleClass("ceci-close");
	})

	//导航展开收起
	$(".ceci-wrapper-pc .ceci-sideby").on('click','.ceci-item-slider',function(){
		$(this).siblings("ul").slideToggle();
		$(this).toggleClass("open");
	})
	$(".ceci-wrapper-mobile .ceci-sideby").on('click','.ceci-item-slider',function(){
		$(this).closest("li").siblings("li").find("ul").slideUp();
		$(this).closest("li").siblings("li").find(".ceci-item-slider").removeClass("open");
		$(this).siblings("ul").slideToggle();
		$(this).toggleClass("open");
	})



})(jQuery);

//监听代码修改实时显示修改
function textareaChange(self){
	console.log("f");
	var _root = $(self).closest(".ceci-components");
	var _html = $(self).val();
	_root.find(".ceci-components-display").html(_html);
}




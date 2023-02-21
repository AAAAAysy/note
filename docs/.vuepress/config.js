module.exports = {
	title: 'AAAAysy',
	base: '/note/',
	description: '笔记',
	themeConfig: {
		 
		lastUpdated: '最近更新',
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Github',
				link: 'https://github.com/AAAAAysy'
			},
			{
				text: "Gitee",
				link: "https://gitee.com/aaaaysy"
			}
		],
		sidebar: [
			{
				title: "环境配置",
				collapsable: true,
				children: [{
						title: "Maven",
						path: "/环境配置/Maven"
					},
				]
			},
			{
				title: "Docker",
				sidebarDepth: 1,
				children: [{
						title: "docker",
						path: "/Docker/Docker容器技术"
					},
				]
			}
		]
	}

}
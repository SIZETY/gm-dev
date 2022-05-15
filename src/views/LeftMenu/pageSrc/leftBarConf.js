export const leftBarConf = [
	{
		route: '/recents',
		title: 'Recents',
		active: true,
		type: 1,
	},
	{
		route: '/starred',
		title: 'Starred',
		active: false,
		type: 1,
	},
	{
		route: '/notifications',
		title: 'Notifications',
		active: false,
		type: 1,
	},
	{
		type: 2,
		title: 'Gemoo App',
		active: false,
		sub: [
			{
				route: '/video-lib',
				title: 'Video Feedback',
				active: false,
			},
			{
				route: '/image-lib',
				title: 'Image Feedback',
				active: false,
			},
		],
	},
	{
		type: 2,
		title: 'Personal',
		active: false,
		sub: [
			{
				route: '/space/123',
				title: 'learning',
				active: false,
				type: 'space',
				sub: [
					{
						route: '/space/123/456',
						title: 'gemoo page',
						active: false,
					},
					{
						route: '/space/12/789',
						title: 'route page',
						active: false,
					},
				],
			},
			{
				route: '/topic/456',
				title: '产品培训',
				active: false,
				type: 'topic',
			},
		],
	},
	{
		type: 1,
		title: 'Trash',
		route: '/trash',
		active: false,
	},
	{
		type: 1,
		title: 'Archive',
		route: '/archive',
		active: false,
	},
]

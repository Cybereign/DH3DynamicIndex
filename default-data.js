// default-data.js
// DH3项目HelpMe索引表 - 默认数据

const DEFAULT_TABLE_DATA = [
    {
        "id": 1,
        "category": "开发计划",
        "title": "DH3项目主计划",
        "path": "https://acndoaymjsa1.feishu.cn/file/JauUbijsxoJ4euxYl2Zc1ohunRb",
        "type": "url",
        "note": "【飞书】DH3项目主计划\n12月8日版本"
    },
       {
        "id": 2,
        "category": "开发计划",
        "title": "DH3软件基线策划与控制器开发计划汇总",
        "path": "https://acndoaymjsa1.feishu.cn/slides/Rdl4sdsJslhCQRd7eGbclVidnxe",
        "type": "url",
        "note": "【飞书】请大家在此更新各自开发计划"
    }, 
           {
        "id": 3,
        "category": "整车配置",
        "title": "DH3整车配置清单",
        "path": "https://acndoaymjsa1.feishu.cn/file/OIj0bkDXboXH3ExfXg7cbTzOnAh",
        "type": "url",
        "note": "【飞书】DH3整车配置表\n12月3日版本"
    },
        {
        "id": 4,
        "category": "联系信息",
        "title": "DH项目整体联系人清单",
        "path": "https://acndoaymjsa1.feishu.cn/sheets/Gbh8sTDmdhMD9DtZcC2c7trunRe",
        "type": "url",
        "note": "【飞书】包含DH1，DH3各业务板块联系人信息"
    },
    {
        "id": 5,
        "category": "设计评审",
        "title": "DH3电子电气拓扑图",
        "path": "w:\\yling",
        "type": "folder",
        "note": "【内网】w:\\yling\n请确保你的账号已经切换到内网"
    },
    {
        "id": 6,
        "category": "阶段评审",
        "title": "DH3项目J2阶段评审材料输入信息",
        "path": "\\\\10.4.9.25\\Project\\DH系列\\060-整车开发\\DH3\\J2评审输入",
        "type": "folder",
        "note": "【外网】J2阶段输入物数据库"
    },
    {
        "id": 7,
        "category": "阶段评审",
        "title": "DH3项目J2阶段评审材料归档路径",
        "path": "\\\\10.4.9.25\\Project\\DH系列\\130-智能软件\\DH3\\130100_ 阶段评审材料\\130102_ J2阶段评审材料及会议纪要",
        "type": "folder",
        "note": "【外网】请大家把J2材料及会议纪要放入此文件夹"
    },

    {
        "id": 8,
        "category": "联系信息",
        "title": "DH3项目华为接口联系人清单",
        "path": "https://acndoaymjsa1.feishu.cn/file/NI95bmHjpoopKBxVGhrc7S9SnUc",
        "type": "url",
        "note": "【飞书】包含华为座舱、智驾、网联相关接口人信息"
    },
    {
        "id": 9,
        "category": "联系信息",
        "title": "DH3项目研发总院智软内部责任分工",
        "path": "https://acndoaymjsa1.feishu.cn/wiki/YyMcwejHNifAkfk0aEXcjdeQnTb?table=tbltH0YNXCFoOxNm&view=vewS54CcOf",
        "type": "url",
        "note": "【飞书】仅包含东风研发总院智软内部相关责任人分工，仅智软群成员可访问"
    },
    {
        "id": 10,
        "category": "再发防止",
        "title": "DH3不满再发防止-整车级",
        "path": "https://acndoaymjsa1.feishu.cn/file/BzEsbuCLCowqs2xT1y0cRe1JnSb",
        "type": "url",
        "note": "【飞书】DH3不满再发防止-整车级"
    },
    {
        "id": 11,
        "category": "再发防止",
        "title": "DH3 LLR和PRC再发防止 - 总院级",
        "path": "https://doc.weixin.qq.com/sheet/e3_AKkAcQbnAKcCNoUhJadOcRr27t3Mb?scode=AGwAPQeYAA0i5kLUWBAbgALQaUAJ8&version=5.0.0.8619&platform=win&tab=mfripw",
        "type": "url",
        "note": "【企微】DH3 LLR和PRC再发防止 - 总院级"
    }
];

const DEFAULT_CATEGORY_LIST = [
    { id: "category1", name: "开发计划" },
    { id: "category2", name: "设计评审" },
    { id: "category3", name: "阶段评审" },
    { id: "category4", name: "联系信息" },
    { id: "category5", name: "再发防止" },
    { id: "category6", name: "整车配置" },
    { id: "category6", name: "其他" }
];

const DEFAULT_CATEGORY_MAP = {
    "category1": "开发计划",
    "category2": "设计评审",
    "category3": "阶段评审",
    "category4": "联系信息",
    "category5": "再发防止",
    "category6": "整车配置",
    "category6": "其他"
};

const DEFAULT_ADMIN_ACCOUNTS = [
    { 
        username: 'admin', 
        passwordHash: 'b107fce20b89ab22f4eb72843df4acc2628c88d38c54f56bdf3767f53238274f',
        name: '管理员',
        permissions: ['read', 'write', 'delete', 'export', 'config']
    },
    { 
        username: 'editor', 
        passwordHash: 'b107fce20b89ab22f4eb72843df4acc2628c88d38c54f56bdf3767f53238274f',
        name: '编辑员',
        permissions: ['read', 'write', 'export']
    }
];

const DEFAULT_APP_CONFIG = {
    autoLogout: 60,
    maxLoginAttempts: 5,
    version: 'Default',
    source: 'Builtin',
    lastUpdated: new Date().toISOString().split('T')[0]
};

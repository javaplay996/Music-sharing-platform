const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"音乐资讯","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"音乐翻唱","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"在线听歌","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客服管理","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"音乐资讯列表","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯模块"},{"child":[{"buttons":["查看"],"menu":"音乐翻唱列表","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱模块"},{"child":[{"buttons":["查看"],"menu":"在线听歌列表","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"音乐翻唱","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"音乐资讯列表","menuJump":"列表","tableName":"yinlezixun"}],"menu":"音乐资讯模块"},{"child":[{"buttons":["查看"],"menu":"音乐翻唱列表","menuJump":"列表","tableName":"yinlefanchang"}],"menu":"音乐翻唱模块"},{"child":[{"buttons":["查看"],"menu":"在线听歌列表","menuJump":"列表","tableName":"zaixiantingge"}],"menu":"在线听歌模块"}],"roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;

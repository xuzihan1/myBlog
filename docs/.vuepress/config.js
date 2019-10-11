module.exports = {
    title: '许子涵的博客',
    description: '我就想创建个博客写写日记',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/hero.png'}],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav"),
        sidebar:require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
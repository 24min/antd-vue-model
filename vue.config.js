/*
 * @Author: 24min
 * @Date: 2022-02-14 21:02:11
 * @LastEditors: 24min
 * @LastEditTime: 2022-02-14 21:02:11
 * @FilePath: \antd-vue-model\vue.config.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
module.exports = {
    productionSourceMap: false, //close production sourceMap
    publicPath: process.env.NODE_ENV === "development" ? "" : "/antd-vue-model/dist/",
    css: {
        extract: false
    }
}
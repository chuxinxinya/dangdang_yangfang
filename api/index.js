import ajax from "./ajax"

//异步获取服装馆数据
export const reqClothing = () => ajax.get("/clothing")

//异步获取分类列表的数据
export const reqCategory = () => ajax.get("/category")
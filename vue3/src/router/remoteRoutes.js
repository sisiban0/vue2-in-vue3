import { routes } from "vue2App/routes"
import { defineAsyncComponent } from "vue"
import { Vue2InVue3,store } from "../utils";
const remoteRoutes = routes.map((item) => {
    return {
        ...item,
        component: defineAsyncComponent({
            loader: async () => {
                const res = await item.component()
                return Vue2InVue3(res.default, "routerView",{store})
            }
        })
    }
})

export default remoteRoutes
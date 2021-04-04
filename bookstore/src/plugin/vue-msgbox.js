import MessageBox from "@/plugin/MessageBox";

const msgBox = {}

msgBox.install = function (Vue) {
    Vue.prototype.$msgBox = msgBox
    msgBox.show = (function () {
        //组件数据属性和事件响应的默认值
        let defaults = {
            title: '',
            ok: '确定',
            cancel: '',
            handleOk: function () {},
            handleCancel: function () {}
        }

        let MessageBoxImpl = Vue.extend(MessageBox)  //创建一个子类
        //调用msgBox.show函数时需要提供一个选项对象，用于初始化组件内的各个选项
        //闭包
        return function (opts) {
            //配置参数
            for(let i in opts) {
                defaults[i] = opts[i]
            }
            let vm = new MessageBoxImpl({
                el: document.createElement('div'),//创建一个组件挂载的根元素
                data() {
                    return {
                        title: defaults.title,
                        ok: defaults.ok,
                        cancel: defaults.cancel
                    }
                },
                methods: {
                    handleOk() {
                        defaults.handleOk().call(this)
                        //单击确定时，从DOM中删除提示框组件，即提示框消失
                        document.body.removeChild(vm.$el)
                    },
                    handleCancel() {
                        defaults.handleCancel.call(this)
                        document.body.removeChild(vm.$el)
                    }
                }
            });
            //将组件绑定的根元素添加到HTML body元素内
            document.body.appendChild(vm.$el)
        }
    })
}
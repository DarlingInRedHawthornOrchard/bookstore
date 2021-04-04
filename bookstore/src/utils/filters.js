//utils下放置工具函数库JS文件

// const digitsRE = /(\d{3}) (?=\d)/g

export function factPrice(value,discount) {  //传入价格和折扣，手动编写实际价格算法
    value = parseFloat(value)
    discount = parseFloat(discount)
    if(!discount) return value  //没折扣直接返回定价
    return value * discount
}

export function currency(value, currency, decimals,discount) {
    //currency是货币符号， decimals是保留几位小数位
    value = parseFloat(value)
    //判断是否在正常的数值范围内
    if(!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '￥' //currency不为null时，把currency赋给currency,否则用'￥'
    decimals = decimals != null ? decimals : 2  //默认保留2位小数
    // var stringified = Math.abs(value).toFixed(decimals) //返回value绝对值且保留decimals位小数
    return currency + (value * discount).toFixed(decimals)
}

export function formatTime(value) {
    return value.toLocaleString().replace(/T/g,'').replace(/\.[\d]{3}Z/,'')
}
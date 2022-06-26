class StringUtilsAbstraction {
  formatPrice(amount: any, options?: Object) {
    const uOptions = {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }

    if (options && (Object.keys(options) || []).length > 0) {
      Object.assign(uOptions, options)
    }

    const formatter = new Intl.NumberFormat('en-NG', uOptions)

    return formatter.format(Number(amount))
  } // end method formatPrice

poundsFomrat = (amount: any, options?: Object) => {
  const uOptions = {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }

  if (options && (Object.keys(options) || []).length > 0) {
    Object.assign(uOptions, options)
  }

  const formatter = new Intl.NumberFormat("en-GB", uOptions)

  return formatter.format(Number(amount))
} // end method formatPrice

currencyFormatter = (num: any) => {
  return num
    ? parseFloat(num)
        .toFixed(0)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    : 0
} // end method currencyFormatter

}

const StringUtils = new StringUtilsAbstraction()

export default StringUtils

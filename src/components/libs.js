export default {
  formatCurrency: function (num) {
    if (num) {
      return '$' + Number(num.toFixed(2)).toLocaleString() + ' ';
    }
  },
};

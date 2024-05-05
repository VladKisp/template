// dateUtils.js

const dateUtils = {
    formatDate: (date, format = 'YYYY-MM-DD') => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
  
      return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day);
    },
  
    addDays: (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
  
    diffInDays: (date1, date2) => {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
  };
  
  module.exports = dateUtils;
  
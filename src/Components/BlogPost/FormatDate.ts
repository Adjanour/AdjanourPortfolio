// utils/date.js
export const formatDate = (dateString:string) => {
    // const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
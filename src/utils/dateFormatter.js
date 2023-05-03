import { format } from "date-fns";

export const formatToSelect = (date) => {
  const formattedDate = format(new Date(date), "yyyy-MM-dd");
  return formattedDate;
};

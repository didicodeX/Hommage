import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export default function formatTime(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: fr,
  });
};

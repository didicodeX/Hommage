export default function formatTimeAgo(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);
  return `il y a ${hours}h`;
}
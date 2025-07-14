const recentQueries = [];

function addRecentQuery(query) {
  if (!query || typeof query !== "string") return;
  const existingIndex = recentQueries.indexOf(query);
  if (existingIndex !== -1) {
    recentQueries.splice(existingIndex, 1);
  }
  recentQueries.unshift(query);
  if (recentQueries.length > 5) {
    recentQueries.pop();
  }
}

function getRecentQueries() {
  return recentQueries;
}

module.exports = { addRecentQuery, getRecentQueries };

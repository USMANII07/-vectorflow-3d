// Local history is intentionally browser-only; callers own the history record format.
export function readHistory(){try{return JSON.parse(localStorage.getItem('vectorflow-history')||'[]')}catch{return []}}
export function saveHistory(record){const items=readHistory();items.unshift(record);localStorage.setItem('vectorflow-history',JSON.stringify(items.slice(0,6)));return items.slice(0,6)}
export function clearHistory(){localStorage.removeItem('vectorflow-history')}

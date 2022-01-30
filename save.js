chrome.storage.local.get(['latest_meet_attendance'], function(item) {
    window.localStorage.setItem('latest_meet_attendance', JSON.stringify(item.latest_meet_attendance));
    chrome.storage.local.clear();
});
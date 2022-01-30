chrome.storage.local.get(['latest_meet_attendance'], function(item) {
    if (item.latest_meet_attendance != null && item.latest_meet_attendance != undefined && item.latest_meet_attendance != 'undefined ') {
        window.localStorage.setItem('latest_meet_attendance', JSON.stringify(item.latest_meet_attendance));
        chrome.storage.local.clear();
    }
});
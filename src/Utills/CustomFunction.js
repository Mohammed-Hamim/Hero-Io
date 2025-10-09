



export const getInstalledApps = () => {
    const installedAppStr = localStorage.getItem("installedList");

    if (installedAppStr) {
        const inStalledApps = JSON.parse(installedAppStr);
        return inStalledApps;
    }
    else {
        return [];
    }

}

export const addToLocalStorage = id => {
    const inStalledApps = getInstalledApps()
    console.log(id)

    if (inStalledApps.includes(id)) {
        alert("book already exists")
        return;
    }
    else {
        inStalledApps.push(id)
        const updatedInstalledApps = JSON.stringify(inStalledApps)
        localStorage.setItem("installedList", updatedInstalledApps)
    }
}



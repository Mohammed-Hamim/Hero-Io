
import Swal from 'sweetalert2'


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


    if (inStalledApps.includes(id)) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "App is already installed",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
    else {
        Swal.fire({
            title: "Are you sure?",

            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Install"
        }).then((result) => {

            if (result.isConfirmed) {
                inStalledApps.push(id)
                const updatedInstalledApps = JSON.stringify(inStalledApps)
                localStorage.setItem("installedList", updatedInstalledApps)
                Swal.fire({
                    title: "Installed",
                    text: "App installation Successful.",
                    icon: "success"
                });
            }
        });
    }
}


export const removeFromLocalStorage = id => {
    const inStalledApps = getInstalledApps()

    const inStalledAppsNbr = inStalledApps.map(id => Number(id))


    const update = inStalledAppsNbr.filter(appid => appid !== id)
    localStorage.setItem('installedList', JSON.stringify(update))


}



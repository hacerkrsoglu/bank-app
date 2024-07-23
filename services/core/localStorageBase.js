export async function getCurrentUserId() {
    const id = await localStorage.getItem("current-user-id");

    if (id !== null) {
        return parseInt(id);
    }

    return 0;
}

export async function setCurrentUserId(id) {
    await localStorage.setItem("current-user-id", id+"");
}
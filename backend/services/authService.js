const adminMap = new Map();

function setAdmin(id, admin) {
    adminMap.set(id, admin);
};

function getAdmin(id) {
    return adminMap.get(id);
};

module.exports = {
    setAdmin,
    getAdmin
}
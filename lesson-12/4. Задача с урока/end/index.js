const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    const absValues = arr.map(Math.abs);

    return Math.max(...absValues);
}
    

const baseUrl = `https://crudcrud.com/api/ce50f1116cc94ed8a2413d9a0337e2f0/tasks`;

export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const deleteTask = (taskId) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });

export const getTasksList = () =>
    fetch(baseUrl)
        .then(resoponse => resoponse.json());

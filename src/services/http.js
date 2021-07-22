const urlEndpoint = `https://jsonplaceholder.typicode.com/todos`
export const getTodos = async () => {
  const res = await fetch(urlEndpoint)
  return await res.json()
}

export const deleteTodo = async (todoId) => {
  const res = await fetch(`${urlEndpoint}/${todoId}`, { method: 'DELETE' })
  return await res.json()
}

export const updateTodo = async (todo) => {
  const res = await fetch(`${urlEndpoint}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  })
  return await res.json()
}

export const addTodo = async (todo) => {
  const res = await fetch(urlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  return await res.json()
}

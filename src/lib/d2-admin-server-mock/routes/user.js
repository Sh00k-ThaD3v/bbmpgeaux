export default function () {
  // Add
  this.post('/users', (schema, request) => {
    return schema.users.create(JSON.parse(request.requestBody))
  })
  // Delete
  this.delete('/users/:id', (schema, request) => {
    return schema.users.find(request.params.id).destroy()
  })
  // Update
  this.put('/users/:id', (schema, request) => {
    return schema.users.find(request.params.id).update(JSON.parse(request.requestBody))
  })
  // Query
  this.get('/users', (schema, request) => {
    return schema.users.all()
  })
}

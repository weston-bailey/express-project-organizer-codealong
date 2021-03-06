const db = require('./models')

// db.category.create({
//   name: 'node'
// }).then(category => {
//   console.log(category.id)
//   process.exit()
// })

// db.project.findOne({
//   where: { id: 1 },
//   include: [db.category]
// }).then(project => {
//   // by using eager loading, the project model should have a categories key
//   console.log(project.categories)

//   // createCategory function should be available to this model - it will create the category then add it to the project
//   // project.createCategory({ name: 'express' }).then(category => {
//   //   console.log(category.id)
//   // })
// })

db.category.findOne({
  where:{
    name: 'express'
  },
  include: [db.project]
})
.then(category => {
  console.log(category)
  console.log(category.projects)
})
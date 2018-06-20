Meteor.publish('users', () => {
  return Meteor.users.find({})
})

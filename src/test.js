user = {};
Object.observe(user, function (changes) {
  changes.forEach(function(change){
    console.log(change.name)
    console.log(change.type)
  })
})

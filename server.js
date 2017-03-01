var edge = require('edge');

var dotNetFunction = edge.func('csharp.cs');

var payload = {
    name: "Alex",
    age: 23
};

var getPerson = edge.func(function () {/*
    using System.Threading.Tasks;

    public class Person
    {
          public string Name { get; set; }
          public int Age { get; set; }

          public Person (string name, int age )
          {
              Name = name;
              Age = age;
          }
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            string n = (string) input.name;
            int a = (int) input.age;

            Person person = new Person(n, a);
            return person;
        }
    }
*/});

getPerson(payload, function (error, result) {
    if (error) throw error;
    console.log(result);
});

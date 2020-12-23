var firebaseConfig = {
    apiKey: "AIzaSyCkOthRNT6Ny_LUlATKlZ4Tm8yi4RXgxUY",
    authDomain: "budget-app-b575f.firebaseapp.com",
    projectId: "budget-app-b575f",
    storageBucket: "budget-app-b575f.appspot.com",
    messagingSenderId: "948542587566",
    appId: "1:948542587566:web:636b3c682148f157dae33f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var x2, x3

  document.getElementById('form1').addEventListener("submit", (e) => {
    e.preventDefault();
    var budget = {budget: document.getElementById("budgetFirebase").value};
    firebase.database().ref("budgetapp/budget").set(budget);
    document.getElementById("budgetFirebase").value = "";
  });

  document.getElementById('form2').addEventListener("submit", (e) => {
    e.preventDefault();
    var expenses = {expenses: document.getElementById("expensesFirebase").value};
    firebase.database().ref("budgetapp/expenses").set(expenses);
    document.getElementById("expensesFirebase").value = "";
  });

  // READ VALUE
  function read() {
      firebase.database().ref("budgetapp/budget").child("budget").on("value", function(value) {
          document.getElementById('Budget').innerHTML = `${value.val()}`;
          x2 = value.val();
          document.getElementById('chart').innerHTML = `<canvas id="myChart"></canvas>`
          var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Budget', 'Expenses'],
                    datasets: [{
                        label: '# of Votes',
                        data: [x2, x3],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            document.getElementById('total').innerHTML = `${x2-x3}`;
                });

                firebase.database().ref("budgetapp/expenses").child("expenses").on("value", function(value) {
                    document.getElementById('expenses').innerHTML = `${value.val()}`;
                    x3 = value.val();
                    document.getElementById('chart').innerHTML = `<canvas id="myChart"></canvas>`
                    var ctx = document.getElementById('myChart').getContext('2d');
                      var myChart = new Chart(ctx, {
                          type: 'bar',
                          data: {
                              labels: ['Budget', 'Expenses'],
                              datasets: [{
                                  label: '# of Votes',
                                  data: [x2, x3],
                                  backgroundColor: [
                                      'rgba(54, 162, 235, 0.2)',
                                      'rgba(255, 99, 132, 0.2)',
                                  ],
                                  borderColor: [
                                      'rgba(54, 162, 235, 1)',
                                      'rgba(255, 99, 132, 1)',
                                  ],
                                  borderWidth: 1
                              }]
                          },
                          options: {
                              scales: {
                                  yAxes: [{
                                      ticks: {
                                          beginAtZero: true
                                      }
                                  }]
                              }
                          }
                      });
                        document.getElementById('total').innerHTML = `${x2-x3}`;
                          });
  }
  
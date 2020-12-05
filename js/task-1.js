const logItems = function (list) {
    for (let i = 0; i < list.length; i += 1) {
      console.log(`${i + 1} - ${list[i]}`);
    }
  };
  
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
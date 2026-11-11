update (CounterIncremented event) counter =
  counter
    { value = counter.value + event.amount
    }

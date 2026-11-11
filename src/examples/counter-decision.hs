decide cmd _ _ =
  if cmd.amount <= 0 then
    Decider.reject "Amount must be positive"
  else do
    let event =
          CounterIncremented
            CounterIncremented.Event
              { entityId = cmd.counterId
              , amount = cmd.amount
              }
    Decider.acceptExisting [event]

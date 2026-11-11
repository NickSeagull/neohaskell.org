decide cmd _ _ =
  if cmd.amount <= 0 then
    Decider.reject "Amount must be positive"
  else
    let event =
          CounterIncremented
            CounterIncremented.Event
              { entityId = cmd.counterId
              , amount = cmd.amount
              }
    in Decider.acceptExisting [event]

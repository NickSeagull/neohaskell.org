decide cmd entity _ctx = case entity of
  Nothing ->
    Decider.reject "Counter not found"
  Just existing ->
    if cmd.amount <= 0
      then Decider.reject "Amount must be positive"
      else
        Decider.acceptExisting
          [ CounterIncremented
              CounterIncremented.Event
                { entityId = existing.counterId
                , amount = cmd.amount
                }
          ]

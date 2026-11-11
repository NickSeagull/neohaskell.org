data CounterView = CounterView
  { counterId :: Uuid
  , value :: Int
  }

queryId counter = counter.counterId

combine counter _ =
  Update
    CounterView
      { counterId = counter.counterId
      , value = counter.value
      }

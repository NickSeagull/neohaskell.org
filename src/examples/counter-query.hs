data CounterView = CounterView
  { counterId :: Uuid
  , value :: Int
  }

combine counter _ =
  Update
    CounterView
      { counterId = counter.counterId
      , value = counter.value
      }

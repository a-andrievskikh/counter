import { useState } from 'react'
import { ValuesT } from '../App'

export const useControls = (initialValues: ValuesT) => {
  const [values, setValues] = useState<ValuesT>(initialValues)

  const incValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.counterValue + 1 }))
  }
  const decValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.counterValue - 1 }))
  }
  const resValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.startValue }))
  }
  const setCounterValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, counterValue: value }))
  }
  const setMinValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, minValue: value }))
  }
  const setMaxValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, maxValue: value }))
  }
  const setStartValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, startValue: value }))
  }

  return {
    values,
    controls: {
      incValue,
      decValue,
      resValue,
      setCounterValue,
      setMinValue,
      setMaxValue,
      setStartValue,
    },
  }
}
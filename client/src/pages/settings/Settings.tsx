import { Button, Input, Label, Text } from "@fluentui/react-components";
import { expenseCategories } from "../../types/expenseCategories";
import { FormEvent, useEffect, useState } from "react";

export default function Settings() {
  const handelSubmit = async (e:FormEvent) => {
    e.preventDefault()
  }
  const [state, setState] = useState<{[key:string]:number}>({})
  const [isLoading, setIsLoading] = useState(true)
  const handelChange = (key:string , value:number) => {
    setState({...state , [key]:value})
  }
  const getSettingsData  = async () => {
    try {
      const res = await fetch('http:/localhost:3000/api/settings')
      const data = await res.json()
      setState(data)
      setIsLoading(false)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    async () => {}
  },[])
  return (
    <div>
      <form onSubmit={handelSubmit}>
      <Text as="h1">Settings</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "80%",
          padding: "1em",
        }}
      >
        <Label htmlFor={"total"}>Total</Label>
        <Input value={state.total.toString()} onChange={(e) => handelChange('total',e.target.valueAsNumber) }
          appearance="underline"
          type="number"
          prefix=""
          id={"total"}
        ></Input>
      </div>
      {expenseCategories.map((expense) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "80%",
            padding: "1em",
          }}
        >
          <Label htmlFor={expense.id}>{expense.display}</Label>
          <Input
          value={state[expense.id]} onChange={(e) => handelChange(expense.id,e.target.valueAsNumber) }
            appearance="underline"
            type="number"
            contentBefore={"₪"}
            id={expense.id}
          ></Input>
        </div>
      ))}</form>
      <Button appearance="primary" type="submit"></Button>
    </div>
  );
}

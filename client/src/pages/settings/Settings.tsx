import { Button, Input, Label, Spinner, Text } from "@fluentui/react-components";
import { expenseCategories } from "../../types/expenseCategories";
import { FormEvent, useEffect, useState } from "react";



export default function Settings() {
  const handelSubmit = async (e: FormEvent) => {
    setIsLoading(true)
    const res = await fetch("http://localhost:3000/api/settings/",{
      method:"POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(state)
    });
    const data = await res.json()
    setState(data)
    setIsLoading(false)
    e.preventDefault();
  };
  const [state, setState] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);
  const handelChange = (key: string, value: number) => {
    setState({ ...state, [key]: value });
  };
  const getSettingsData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/settings/");
      const data = await res.json();
      setState(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getSettingsData();
    console.log("data");
  }, []);
  return isLoading ? (
    <div style={{width:"100vw", height:"100vh", display:"flex", justifyContent:"center"}}>
      <Spinner size="extra-large"></Spinner>
    </div>
  ) : (
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
          <Input
            value={state.total.toString()}
            onChange={(e) => handelChange("total", e.target.valueAsNumber)}
            appearance="underline"
            type="number"
            prefix=""
            id={"total"}
          ></Input>
        </div>
        {expenseCategories.map((expense) => (
          <div
          key={expense.id}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "80%",
              padding: "1em",
            }}
          >
            <Label htmlFor={expense.id}>{expense.display}</Label>
            <Input
              value={state[expense.id].toString()}
              onChange={(e) => handelChange(expense.id, e.target.valueAsNumber)}
              appearance="underline"
              type="number"
              contentBefore={"₪"}
              id={expense.id}
            ></Input>
          </div>
        ))}
      </form>
      <Button appearance="primary" type="submit" onClick={(e) => handelSubmit(e)}>Save</Button>
    </div>
  );
}

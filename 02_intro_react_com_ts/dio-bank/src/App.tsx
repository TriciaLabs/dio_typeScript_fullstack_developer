import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"


export function App() {
  return (
    <>
      <Card className="bg-purple-700  items-center">
       <div className="">
         <CardContent className="">
          <Label className="mb-1">E-mail</Label>
          <Input/>
         </CardContent>
         <CardContent>
          <Label className="mb-1">Senha</Label>
          <Input/>
         </CardContent>
       </div>
       <Button>Entrar</Button>
      </Card>
    </>
  )
}

export default App

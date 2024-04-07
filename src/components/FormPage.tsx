"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import axios from "axios"
import { Bath, Bed, ChevronDown, Home, IndianRupee, Minus, Plus } from "lucide-react";





const FormPage = () => {

  
  const [ni, setNi] = useState<boolean>(true);
  const [n, setN] = useState<number>(0);
  const [area, setArea] = useState<null |number>(null);
  const [br, setBr] = useState< number>(0);
  const [bt, setBt] = useState<number>(0);
  const [age, setAge] = useState<null |number>(null);
  const [price,setPrice]= useState<null |number>(null)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    // console.log(Number(n));
    // console.log(Number(area))
    // console.log(br);
    // console.log(bt)
    // console.log(Number(age))
    // console.log(n);
    // const res =axios.post('http://127.0.0.1:5000/predict', { "area":Number(area),"br":br,"bt":bt,"n":n,"age":Number(age) });
    // console.log(res)
    // {
    //   "area":265456,
    //   "br":2,
    //   "bt":1,
    //   "n":0,
    //   "age":1995
    //    }


    let data = JSON.stringify({
      "area": area,
      "br": br,
      "bt": bt,
      "n": n,
      "age": age
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/predict',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      setPrice((response.data).price);
    })
    .catch((error) => {
      console.log(error);
    });
    
  };



  return (
    <>
      <MaxWidthWrapper className=" items-center justify-center flex flex-col">
        <div className="w-[400px] flex items-center mt-6">
          <form>
            <div className="flex flex-col gap-3 w-full items-center">
              <div className="flex w-full gap-6 items-center">
                <Label className="w-[200px]">Area in Sq feet </Label>
                <Input
                  type="number"
                  placeholder="Area in sq feet"
                  onChange={(e) => {
                    setArea(Number(e.target.value));
                  }}
                />
              </div>

              <div className="flex w-full gap-6 items-center">
                <Label className="w-[200px]">Bedroom</Label>
                <div className="flex gap-3">
                <Button variant={"default"} size={"sm"} onClick={(e)=>{
                  e.preventDefault();
                  setBr(br+1)}} className="flex gap-1"><Bath/></Button>
                <div className="text-center text-xl pt-1" >{br}</div>
                <Button variant={"ghost"} size={"icon"} onClick={(e)=>{
                  e.preventDefault();
                  if(br>0){
                  setBr(br-1)
                  }else{
                    setBr(0)
                  }}}><ChevronDown/></Button>
                </div>
              </div>


                  
              <div className="flex w-full gap-6 items-center">
                <Label className="w-[200px]">Bathroom</Label>
                <div className="flex gap-3">
                <Button variant={"default"} size={"sm"} onClick={(e)=>{
                  e.preventDefault();
                  setBt(bt+1)}} className="flex gap-1"><Bed/></Button>
                <div className="text-center text-xl pt-1" >{bt}</div>
                <Button variant={"ghost"} size={"icon"} onClick={(e)=>{
                  e.preventDefault();
                  if(br>0){
                  setBt(bt-1)
                  }else{
                    setBt(0)
                  }}}><ChevronDown/></Button>
                </div>
              </div>


              <div className="flex w-full gap-6 items-center">
                <Label className="w-[200px]">Neighbourhood </Label>
                <Select
                  onValueChange={(e) => {
                    setN(Number(e));
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Neighbourhood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Rural</SelectItem>
                    <SelectItem value="1">SubUrban</SelectItem>
                    <SelectItem value="2">Urban</SelectItem>
                  </SelectContent>
                </Select>
              </div>

                 
              <div className="flex w-full gap-6 items-center">
                <Label className="w-[200px]">Year</Label>
                <div className="flex gap-3">
                <Input type="number" placeholder="built year " onChange={(e)=>setAge(Number(e.target.value))} value={age??""}/>
                </div>
              </div>

              
              <Button
                type="submit"
                onClick={handleSubmit}
                className="mt-6 w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        { price!==0&&
        <div className="mt-10 flex  w-[300px] md:w-[600px] justify-center rounded-lg bg-secondary py-5 px-2 text-center items-center "><div className="flex text-2xl text-center justify-center"><div className="text-2xl text-primary"><Home className="w-8 h-8 mr-2"/></div>Price is &#x20B9; {" "}{Math.round(price!).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div></div>}
      </MaxWidthWrapper>
    </>
  );
};

export default FormPage;

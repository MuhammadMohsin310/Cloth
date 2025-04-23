import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/Input";

import { Label } from "@/components/ui/label";

import { useState } from "react";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";


export function Invoicecomp() {
  const [Component, setComponent] = useState("Invoicepdf");
  const nullFunction = () => {
    setComponent("Invoicepdf");
  };
  const DashboardValue = () => {
    setComponent("Invoicepdf");
  };
  const EmailValue = () => {
    setComponent("Email");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="Links file:">
          <div className="p flex  mt-5 gap-10 justify-evenly">
            <p
              onClick={DashboardValue}
              className={`cursor-pointer ${Component === "Invoicepdf" ? "text-green-700 border-b-2 border-green-700" :"text-black"}`}
              to="/dashboard"
            >
              Invoice pdf
            </p>
            <p onClick={EmailValue} className={`cursor-pointer ${Component === "Email" ? "text-green-700 border-b-2 border-green-700  `" :"text-black"}`} to="/invoices">
              Email
            </p>
            <p className="" to="/customers">
              Copy Link
            </p>
          </div>
        </div>
      </DialogTrigger>
      {Component === "null" && <Invoicepdf nullFunction={nullFunction} />}
      {Component === "Invoicepdf" ? (
        <Card className="mt-10    h-auto py-1 ">
          <div className=" w-auto  my-10 mx-5">
            {/* Upper Content */}
            <div className="flex lg:flex-row flex-col justify-between border-b-2 border-black pb-2 ">
              <div className="Left flex flex-col gap-4">
                <div>
                  <h1 className="font-bold  text-xl lg:text-3xl ">INVOICE</h1>
                </div>
                <div className="text-sm">
                  <div className="flex gap-3">
                    {" "}
                    <span>Invoice number</span>
                    <span className="font-semibold"> Example00000</span>
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>Date of issue</span>
                    <span className="font-semibold"> Example00000</span>
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <span>Date due</span>
                    <span className="font-semibold"> Example00000</span>
                  </div>
                </div>
              </div>
              <div className="Right tracking-tighter">
                <div className="flex flex-col text-right">
                  <h1 className="lg:text-6xl text-3xl  font-bold">V</h1>
                  <div className="font-semibold text-sm">Company Name</div>
                  <div className="text-sm">Company@gmail.com</div>
                </div>
              </div>
            </div>
            {/* Middle Content */}
            <div className="flex justify-between mt-4">
              <div className="Left flex flex-col gap-4">
                <div>
                  <h1 className="font-bold">Billing Information</h1>
                </div>
                <div className="text-sm flex flex-col gap-4">
                  <div className="flex flex-col  ">
                    {" "}
                    <span className="font-semibold">Name</span>
                    <span className=""> Example00000</span>
                  </div>
                  <div className="flex flex-col ">
                    {" "}
                    <span className="font-semibold">Email</span>
                    <span className=""> Example00000</span>
                  </div>
                </div>
              </div>
              <div className="Right">
                <div className="flex flex-col text-right">
                  <div className="font-semibold">Payment Type</div>
                  <div className="text-sm">UPsell</div>
                </div>
              </div>
            </div>
            {/* Middle Content */}
            {/* {Lower Content} */}
            <div className="border-t-2  border-black mt-20">
              <div className="mt-2 flex flex-col gap-3">
                <div>
                  <h1 className="font-bold">Product</h1>
                </div>
                <div className="w-full flex justify-around font-bold bg-black text-white">
                  <div>Title</div>
                  <div>Brand</div>
                  <div>Amount</div>
                </div>
                <div className="w-full flex justify-around border-b-2 pb-2 ">
                  <div>Project Title</div>
                  <div>Brand name</div>
                  <div>$212.22</div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end mt-5">
                <div className="flex gap-10 border-b ">
                  <span>Tax :</span> <span>$0.00</span>
                </div>
                <div className="flex gap-10 border-b font-bold mt-2 ">
                  <span>Total :</span> <span>$212.22</span>
                </div>
                <div className="mt-4 text-right flex justify-end flex-col">
                  <h1 className="font-bold">Payment Method</h1>

                  <img className=" h-10" src="/paypal.svg" alt="" />
                </div>
              </div>
            </div>
            {/* {Lower Content} */}
            <div className="flex gap-3">
              <button className="bg-green-900 min-w-32 text-white px-3 py-2 rounded-lg flex gap-3 ">
                Download <img src="/Download.svg" alt="" />
              </button>
              <button className=" min-w-32 border-black border  px-3 py-2 rounded-lg flex gap-3 justify-center">
                Send <img src="/Send.svg" alt="" />
              </button>
            </div>
          </div>
        </Card>
      ) : null}
      {Component === "Email" ? 
      <div>
        <Card className="mt-10 h-auto ">
            <div className="max-w-lg my-10 mx-5">
                <div><h1>Send invoice to mail</h1></div>
                <div className="mt-10 flex flex-col gap-10">
                    <Input placeholder="To*"/>
                    <Input placeholder="From*"/>
                    <Textarea/>
                </div>
                <div className="mt-5">
                    <div><h1>Attachments</h1></div>
                    <div className="flex gap-2">
                        <img src="/pdf.svg" alt="" />
                        <p>Invoice pdf Name.pdf</p>
                    </div>
                </div>
                <div className="flex justify-end  ">
                    <button className="border flex gap-2 border-green-600 text-green-600 px-5 py-2 rounded-lg ">Send Now <img src="/Mail.svg" alt="" /></button>
                </div>
               
            </div>

            
        </Card>
      </div>
       : null}
    </Dialog>
  );
}

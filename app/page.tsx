import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import ChartOverview from "@/components/chart";
import Sales from "@/components/sells";

export default function Home() {
  return (
   <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="text-green-500">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl  select-none">
                Total sales
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Latest sales in the last 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-black text-base sm:text font-bold">$8.513</p>
          </CardContent>
        </Card> 

        <Card className="text-gray-700">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                New clients
              </CardTitle>
              <Users className="text-gray-700 ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            New clients in the last 7 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text font-bold">+102</p>
          </CardContent>
        </Card> 

        <Card className="text-gray-700">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Orders today
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Total orders today
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text font-bold">21</p>
          </CardContent>
        </Card> 

        <Card className="text-gray-700">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total orders
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Total orders in 30 days
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text font-bold">2130</p>
          </CardContent>
        </Card> 
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
      <ChartOverview />
      <Sales />
      </section>
   </main>
  );
}

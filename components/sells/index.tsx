import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sales() {
    return (
        <Card className="text-gray-700 flex-1">
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl select-none">
              Last clients
            </CardTitle>
            <CircleDollarSign className="ml-auto w-4 h-4"/>
          </div>

          <CardDescription>
          New clients in the last 24 hours
          </CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">

                <Avatar className="w-12 h-12">
                    <AvatarImage src="/profile.jpg" className="w-[100%] object-cover rounded-full"/>
                    <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Ethan Mercer</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">test@email.com</span>
                </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
              <Avatar className="w-12 h-12">
                      <AvatarImage src="/profile2.jpg" className="w-[100%] object-cover rounded-full"/>
                      <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="text-sm sm:text-base font-semibold">Caleb Voss</p>
                      <span className="text-[12px] sm:text-sm text-gray-400">test@email.com</span>
                  </div>
            </article>

            <article className="flex items-center gap-2 border-b py-2">
              <Avatar className="w-12 h-12">
                      <AvatarImage src="/profile3.jpg" className="w-[100%] object-cover rounded-full"/>
                      <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="text-sm sm:text-base font-semibold">Lila Everett</p>
                      <span className="text-[12px] sm:text-sm text-gray-400">test@email.com</span>
                  </div>
            </article>

            
        </CardContent>
      </Card> 
    )
}
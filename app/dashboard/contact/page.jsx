import { RobotoN, RobotoMono } from "../../../components/ui/fonts"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import style from './contact.module.css'

export default function Contact() {
    return (
        <>
            <main className=" mt-[48px] md:ml-[200px] flex flex-col items-center justify-between">
                <div >
                    <h1 className={`${RobotoMono.className} antialiased`}>
                        Contact
                    </h1>
                    <p className={`${RobotoN.className} antialiased`}>

                    </p>
                    <Card className="w-[450px]">
                        <CardHeader>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className={`${RobotoN.className} antialiased`} htmlFor="name">Name</Label>
                                        <Input className='m-2' type="text" placeholder="Name" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className={`${RobotoN.className} antialiased`} htmlFor="email">Email</Label>
                                        <Input className='m-2' type="email" placeholder="Email" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label className={`${RobotoN.className} antialiased`} htmlFor="message">Message</Label>
                                        <Textarea className="ml-2 mr-2" placeholder="Type your message here." />
                                    </div>
                                </div>
                            </form>
                        </CardHeader>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Cancel</Button>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>

                </div>

            </main>
        </>
    )
}
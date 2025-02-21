import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="w-full">
            <Container>
                <div className="min-h-screen flex flex-col items-center justify-center py-16">
                    <div className="max-w-[800px] w-full text-center">
                        <h1 className="text-[40px] font-bold text-[#252B42] mb-4">
                            Get answers to all your questions.
                        </h1>
                        <p className="text-[#737373] text-base mb-10 max-w-[600px] mx-auto">
                            Problems trying to resolve the conflict between the two major realms of Classical physics:
                        </p>
                        <Button 
                            size="lg"
                            className="bg-[#23A6F0] hover:bg-[#1f95d8] text-white font-bold mb-12"
                        >
                            CONTACT OUR COMPANY
                        </Button>

                        {/* Contact Form Card */}
                        <Card className="max-w-[600px] mx-auto mb-12">
                            <CardHeader>
                                <h2 className="text-2xl font-bold text-center text-[#252B42]">Send us a message</h2>
                                <p className="text-[#737373] text-center">We'll get back to you as soon as possible</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input 
                                                id="firstName" 
                                                placeholder="Enter your first name"
                                                required 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input 
                                                id="lastName" 
                                                placeholder="Enter your last name"
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            placeholder="Enter your email"
                                            required 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea 
                                            id="message" 
                                            placeholder="Type your message here"
                                            className="min-h-[120px]"
                                            required 
                                        />
                                    </div>
                                    <Button 
                                        type="submit"
                                        className="w-full bg-[#23A6F0] hover:bg-[#1f95d8]"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Social Media Links */}
                        <div className="flex justify-center gap-8">
                            <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
                                <Twitter className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
                                <Facebook className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
                                <Instagram className="h-6 w-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
                                <Linkedin className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactPage;

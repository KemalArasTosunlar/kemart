import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FooterSection = ({ title, links }) => (
  <Card className="border-none shadow-none bg-transparent">
    <CardHeader className="p-0 space-y-5">
      <CardTitle className="font-montserrat font-bold text-base text-[#252B42]">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-0 pt-3">
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="font-montserrat text-sm text-[#737373] hover:text-[#23A6F0] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Footer = () => {
  const footerSections = {
    companyInfo: {
      title: "Company Info",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Carrier", path: "/carrier" },
        { label: "We are hiring", path: "/hiring" },
        { label: "Blog", path: "/blog" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Carrier", path: "/carrier" },
        { label: "We are hiring", path: "/hiring" },
        { label: "Blog", path: "/blog" },
      ],
    },
    features: {
      title: "Features",
      links: [
        { label: "Business Marketing", path: "/business" },
        { label: "User Analytic", path: "/user" },
        { label: "Live Chat", path: "/live" },
        { label: "Unlimited Support", path: "/unlimited" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { label: "IOS & Android", path: "/ios" },
        { label: "Watch a Demo", path: "/demo" },
        { label: "Customers", path: "/customers" },
        { label: "API", path: "/api" },
      ],
    },
  };

  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <Container>
        <div className="py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
            {/* Brand */}
            <h3 className="font-montserrat font-bold text-2xl text-[#252B42]">
              Kemart
            </h3>
            
            {/* Social Media */}
            <div className="flex gap-5">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-[#23A6F0] hover:text-[#23A6F0]/80 hover:bg-transparent"
                >
                  <Icon className="w-6 h-6" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Separator />

      {/* Main Content */}
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Footer Sections */}
            {Object.values(footerSections).map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}

            {/* Get In Touch */}
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 space-y-5">
                <CardTitle className="font-montserrat font-bold text-base text-[#252B42]">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-3 space-y-3">
                <div className="relative flex items-center">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-[58px] bg-[#F9F9F9] border-[#E6E6E6] pr-[125px] font-montserrat text-sm text-[#737373]"
                  />
                  <Button
                    className="absolute right-0 h-full w-[117px] bg-[#23A6F0] hover:bg-[#23A6F0]/90 rounded-l-none font-montserrat text-sm"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="font-montserrat text-xs text-[#737373]">
                  Lorem impsum dolor amit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="w-full bg-[#FAFAFA]">
        <Container>
          <div className="py-6">
            <p className="font-montserrat text-sm text-center md:text-left text-[#737373]">
              Made With Love By Figmaland All Right Reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

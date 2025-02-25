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
      title: "Company info",
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
  };

  return (
    <footer className="w-full bg-white">
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Get In Touch */}
            <div className="space-y-5">
              <h3 className="font-montserrat font-bold text-2xl text-[#252B42]">
                Get In Touch
              </h3>
              <p className="font-montserrat text-sm text-[#737373]">
                the quick fox jumps over the lazy dog
              </p>
              <div className="flex gap-5">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-[#23A6F0] hover:text-[#23A6F0]/80 hover:bg-transparent p-0"
                  >
                    <Icon className="w-6 h-6" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {Object.values(footerSections).map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
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

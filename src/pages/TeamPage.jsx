import React from 'react';
import { Container, Section } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const teamMembers = [
  {
    name: 'Gökhan Özdemir',
    title: 'Project Manager',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635783306921?e=1744848000&v=beta&t=nEi6sSXX1nk0cRhjknioSuwMAKI7KKMl40rRrGT9I6Q'
  },
  {
    name: 'Kemal Aras Tosunlar',
    title: 'Full Stack Developer',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQE1ZK1eRiXvwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1554840659198?e=1744848000&v=beta&t=OrKrRGgTWJUhtGwteDbc_cqp3pxwB8SIJJimgGMbXGg'
  },
  {
    name: 'Eleanor Pena',
    title: 'Scrum Master',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Marvin McKinney',
    title: 'QA Engineer',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Floyd Miles',
    title: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
  },
  {
    name: 'Jenny Wilson',
    title: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80'
  },
  {
    name: 'Ronald Richards',
    title: 'PR',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Dianne Russell',
    title: 'Talent Manager',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Devon Lane',
    title: 'Marketing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  }
];

const TeamMemberCard = ({ member }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto -mt-16 border-4 border-white relative z-10">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold text-[#252B42] mt-4">{member.name}</h3>
        <p className="text-[#737373] mt-2">{member.title}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 p-6 pt-0">
        <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
          <Facebook className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
          <Instagram className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-[#23A6F0] hover:text-[#252B42] hover:bg-transparent">
          <Twitter className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const TeamPage = () => {
  return (
    <Container>
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h1>
          <p className="text-[#737373] max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </Section>
    </Container>
  );
};

export default TeamPage;

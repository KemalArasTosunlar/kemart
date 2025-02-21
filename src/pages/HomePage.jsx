import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ChevronRight, Clock, MessageSquare } from 'lucide-react';
import { fetchCategories } from '../store/actions/productActions';

// ShadCN Components
import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Carousel, CarouselItem } from "../components/ui/carousel";
import { Separator } from "../components/ui/separator";

// Custom Components
import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';
import TopCategories from '../components/TopCategories';

// Data
const editorsPicks = [
  {
    id: 1,
    category: "MEN",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=80",
  },
  {
    id: 2,
    category: "WOMEN",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
  },
  {
    id: 3,
    category: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=800&q=80",
  },
  {
    id: 4,
    category: "KIDS",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80",
  }
];

const bestsellerProducts = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800"
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800"
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800"
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800"
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800"
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    salePrice: 6.48,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800"
  }
];

const featuredPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800&q=80",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&q=80",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10
  }
];

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="-mt-20 relative w-full">
      {/* Hero Banner Section */}
      <Carousel className="w-full h-[852px]">
        <CarouselItem>
          <div className="relative h-[747px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80)'
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <Container className="h-full">
                <div className="flex flex-col items-start justify-center h-full text-white">
                  <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-[30px]">
                    SUMMER 2020
                  </h5>
                  <h1 className="font-montserrat font-bold text-[58px] leading-[80px] tracking-[0.2px] mb-[30px]">
                    NEW COLLECTION
                  </h1>
                  <p className="font-montserrat text-[20px] leading-[30px] tracking-[0.2px] max-w-[376px] mb-[30px]">
                    We know how large objects will act, but things on a small scale.
                  </p>
                  <Button 
                    className="bg-[#2DC071] hover:bg-[#25A861] px-[40px] py-[15px] rounded-[5px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-left h-auto"
                    size="lg"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      {/* Top Categories Section */}
      <TopCategories />

      {/* Editor's Pick Section */}
      <Container className="py-20 bg-[#FAFAFA]">
        <div className="text-center mb-12">
          <CardTitle className="text-2xl font-bold mb-2">EDITOR'S PICK</CardTitle>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Men's Section - Large Image */}
          <Card className="lg:col-span-6 border-none">
            <CardContent className="relative p-0 aspect-[1/1]">
              <img 
                src={editorsPicks[0].image}
                alt="Men's Fashion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <Button
                variant="secondary"
                className="absolute left-8 bottom-8"
              >
                MEN
              </Button>
            </CardContent>
          </Card>

          {/* Women's Section */}
          <Card className="lg:col-span-3 border-none">
            <CardContent className="relative p-0 aspect-[1/2]">
              <img 
                src={editorsPicks[1].image}
                alt="Women's Fashion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <Button
                variant="secondary"
                className="absolute left-8 bottom-8"
              >
                WOMEN
              </Button>
            </CardContent>
          </Card>

          {/* Accessories and Kids */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="border-none">
              <CardContent className="relative p-0 aspect-[2/1]">
                <img 
                  src={editorsPicks[2].image}
                  alt="Accessories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                <Button
                  variant="secondary"
                  className="absolute left-8 bottom-8"
                >
                  ACCESSORIES
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none">
              <CardContent className="relative p-0 aspect-[2/1]">
                <img 
                  src={editorsPicks[3].image}
                  alt="Kids Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
                <Button
                  variant="secondary"
                  className="absolute left-8 bottom-8"
                >
                  KIDS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>

      {/* Bestseller Products Section */}
      <Container className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <span className="text-gray-600 text-lg">Featured Products</span>
          <CardTitle className="text-2xl font-bold my-4">BESTSELLER PRODUCTS</CardTitle>
          <p className="text-gray-600">Problems trying to resolve the conflict between</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>

      <ProductSlider />

      {/* Neural Universe Section */}
      <section className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800" 
                alt="Neural Universe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit">SUMMER 2020</Badge>
              <h2 className="text-5xl font-bold mt-4 mb-6">Part of the Neural Universe</h2>
              <p className="text-lg mb-8 text-gray-600">We know how large objects will act, but things on a small scale.</p>
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-[#2DC071] hover:bg-[#25A861] h-auto"
                  size="lg"
                >
                  BUY NOW
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#2DC071] text-[#2DC071] h-auto"
                  size="lg"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Posts Section */}
      <Container className="py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-[#23A6F0]">Practice Advice</Badge>
          <CardTitle className="text-4xl font-bold mt-3">Featured Posts</CardTitle>
          <p className="text-gray-600 mt-2">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] object-cover"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-[#E74040] hover:bg-[#E74040]"
                >
                  NEW
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-[#8EC2F2]">Google</span>
                  <span className="text-sm text-gray-600">Trending</span>
                  <span className="text-sm text-gray-600">New</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#23A6F0]" />
                    <span className="text-gray-600">{post.comments} comments</span>
                  </div>
                </div>
                <Button 
                  variant="link" 
                  className="text-[#23A6F0] font-bold mt-4 p-0 h-auto"
                >
                  Learn More <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;